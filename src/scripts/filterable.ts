/**
 * Filtro genérico para listas renderizadas no servidor.
 *
 * Marcação esperada dentro de [data-filterable="<prefixo>"]:
 *   [data-group="<chave>"]  com botões .chip[data-val]   → filtro por atributo data-<chave> do item
 *   input[data-search]                                    → busca livre (ignora acento e caixa)
 *   [data-item]                                           → itens filtráveis
 *   [data-count], [data-empty], [data-reset]              → opcionais
 *
 * O estado vai para a URL (?<prefixo>.<chave>=valor) para o filtro poder ser compartilhado.
 */

const norm = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

function initOne(root: HTMLElement) {
  const prefix = root.dataset.filterable || 'f';
  const noun = root.dataset.noun || 'itens';
  const items = [...root.querySelectorAll<HTMLElement>('[data-item]')];
  const groups = [...root.querySelectorAll<HTMLElement>('[data-group]')];
  const search = root.querySelector<HTMLInputElement>('input[data-search]');
  const count = root.querySelector<HTMLElement>('[data-count]');
  const empty = root.querySelector<HTMLElement>('[data-empty]');
  const resets = [...root.querySelectorAll<HTMLElement>('[data-reset]')];

  const haystack = new Map(items.map((el) => [el, norm(el.textContent || '')]));
  const state: Record<string, string> = {};
  let q = '';

  // Estado inicial a partir da URL.
  const params = new URLSearchParams(location.search);
  for (const g of groups) {
    const key = g.dataset.group!;
    const fromUrl = params.get(`${prefix}.${key}`);
    const valid = [...g.querySelectorAll<HTMLElement>('.chip')].some((c) => c.dataset.val === fromUrl);
    state[key] = fromUrl && valid ? fromUrl : 'all';
  }
  if (search) {
    q = params.get(`${prefix}.q`) || '';
    search.value = q;
  }

  function syncUrl() {
    const p = new URLSearchParams(location.search);
    for (const key of Object.keys(state)) {
      if (state[key] === 'all') p.delete(`${prefix}.${key}`);
      else p.set(`${prefix}.${key}`, state[key]);
    }
    if (q) p.set(`${prefix}.q`, q);
    else p.delete(`${prefix}.q`);
    const qs = p.toString();
    history.replaceState(history.state, '', location.pathname + (qs ? `?${qs}` : '') + location.hash);
  }

  function apply(updateUrl = true) {
    const nq = norm(q);
    let shown = 0;
    for (const el of items) {
      const okGroups = Object.entries(state).every(([k, v]) => v === 'all' || el.dataset[k] === v);
      const okSearch = !nq || nq.split(' ').every((w) => haystack.get(el)!.includes(w));
      const visible = okGroups && okSearch;
      el.hidden = !visible;
      if (visible) shown++;
    }
    for (const g of groups) {
      const key = g.dataset.group!;
      g.querySelectorAll<HTMLElement>('.chip').forEach((c) =>
        c.setAttribute('aria-pressed', String(c.dataset.val === state[key])),
      );
    }
    const filtered = shown !== items.length;
    if (count) {
      count.textContent = filtered
        ? `Mostrando ${shown} de ${items.length} ${noun}.`
        : `${items.length} ${noun}.`;
    }
    if (empty) empty.hidden = shown > 0;
    resets.forEach((r) => (r.hidden = !filtered));
    if (updateUrl) syncUrl();
  }

  for (const g of groups) {
    g.addEventListener('click', (e) => {
      const chip = (e.target as HTMLElement).closest<HTMLElement>('.chip');
      if (!chip) return;
      state[g.dataset.group!] = chip.dataset.val || 'all';
      apply();
    });
  }

  let t: number | undefined;
  search?.addEventListener('input', () => {
    q = search.value;
    window.clearTimeout(t);
    t = window.setTimeout(() => apply(), 120);
  });
  search?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && search.value) {
      e.stopPropagation();
      search.value = q = '';
      apply();
    }
  });

  resets.forEach((r) =>
    r.addEventListener('click', () => {
      for (const k of Object.keys(state)) state[k] = 'all';
      q = '';
      if (search) search.value = '';
      apply();
      search?.focus();
    }),
  );

  apply(false);
}

document.querySelectorAll<HTMLElement>('[data-filterable]').forEach(initOne);
