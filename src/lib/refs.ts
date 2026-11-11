import { DOCS, type DocId } from '../data/docs';

export type RefSegment =
  | { kind: 'text'; value: string }
  | { kind: 'link'; value: string; page: number; label: string };

/**
 * Quebra uma referência ("Art. 40, §1º, X e §4º · Art. 41, IX") em trechos de
 * texto e links para a página do PDF onde cada artigo está. Roda no build.
 */
export function parseRef(text: string, doc: DocId): RefSegment[] {
  const d = DOCS[doc];
  const out: RefSegment[] = [];
  const re = /Art\. (\d+)(º?)|Anexo II|Parecer, Seção 5/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    const idx = m.index ?? 0;
    let page: number | undefined;
    let label = m[0];
    if (m[1]) {
      page = d.arts[m[1]];
      label = `Art. ${m[1]}${m[2] ?? ''}`;
    } else if (m[0] === 'Anexo II') {
      page = d.an2;
    } else {
      page = d.sec5;
      label = 'Seção 5 do parecer';
    }
    if (page === undefined) continue;
    if (idx > last) out.push({ kind: 'text', value: text.slice(last, idx) });
    out.push({ kind: 'link', value: m[0], page, label });
    last = idx + m[0].length;
  }
  if (last < text.length) out.push({ kind: 'text', value: text.slice(last) });
  return out;
}
