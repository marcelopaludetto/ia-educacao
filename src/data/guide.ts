import type { Status } from './rules';

/* ---------- Resumo ---------- */

export const GIST = [
  { title: 'Cada uso precisa de justificativa pedagógica', text: 'A norma exige finalidade educacional legítima, necessidade, proporcionalidade e supervisão humana para cada aplicação.', ref: 'Art. 1º, §2º' },
  { title: 'O professor não pode ser substituído', text: 'É vedado trocar a atuação docente por sistema automatizado ou transferir à IA a responsabilidade pedagógica.', ref: 'Art. 4º, §1º · Art. 14' },
  { title: 'Restrições por etapa até o 9º ano', text: 'Proibido para crianças na Educação Infantil; sem IA generativa nos Anos Iniciais; IA generativa só com mediação nos Anos Finais.', ref: 'Art. 21 a 23' },
  { title: 'Quanto maior o impacto no aluno, mais exigências', text: 'Quatro níveis de risco: baixo, moderado, alto e incompatível. O último é proibido.', ref: 'Art. 36 a 41' },
  { title: 'IA pode pré-corrigir redação, a nota é do professor', text: 'Pré-correção é alto risco e exige leitura integral pelo professor. Nota dada só pela IA é proibida.', ref: 'Art. 40, §4º · Art. 41, IX' },
  { title: 'IA entra no currículo', text: 'Como objeto de estudo e como recurso, de forma transversal e progressiva. Quem adota IA precisa também ensinar sobre IA.', ref: 'Art. 18, §1º · Art. 19 · Art. 20' },
];

/* ---------- Etapas ---------- */

export interface StageItem { s: Status; label: string; text: string }
export interface Stage {
  id: string;
  band: string;
  /** 0 = mais restrito, 3 = menos restrito. */
  level: 0 | 1 | 2 | 3;
  title: string;
  items: StageItem[];
  note?: { title: string; text: string };
  ref: string;
}

export const STAGES: Stage[] = [
  {
    id: 'infantil', band: 'Educação Infantil', level: 0, title: 'Criança não usa IA',
    items: [
      { s: 'no', label: 'PROIBIDO', text: 'Uso de qualquer sistema de IA pelas crianças, mesmo com mediação de profissionais.' },
      { s: 'ok', label: 'PERMITIDO', text: 'Profissionais usarem IA em planejamento e gestão pedagógica.' },
      { s: 'warn', label: 'CONDIÇÃO', text: 'Recursos de acessibilidade, só para eliminar barreiras, sem inferência sensível, perfil individual ou efeito decisório sobre a criança.' },
    ],
    ref: 'Art. 21',
  },
  {
    id: 'iniciais', band: 'Anos Iniciais · 1º ao 5º ano', level: 1, title: 'Só atividade mediada, sem IA generativa',
    items: [
      { s: 'no', label: 'PROIBIDO', text: 'Acesso direto, autônomo, individual ou não supervisionado a sistemas de IA.' },
      { s: 'no', label: 'PROIBIDO', text: 'Interação dos alunos com IA generativa ou conversacional, mesmo sob supervisão.' },
      { s: 'warn', label: 'CONDIÇÃO', text: 'Outros recursos de IA apenas em atividades planejadas, conduzidas e mediadas pelo profissional, com comunicação às famílias e proteção de dados.' },
      { s: 'ok', label: 'PERMITIDO', text: 'Tecnologia assistiva e recursos de acessibilidade ficam fora dessas restrições.' },
    ],
    ref: 'Art. 22',
  },
  {
    id: 'finais', band: 'Anos Finais · 6º ao 9º ano', level: 2, title: 'IA generativa só com mediação',
    items: [
      { s: 'warn', label: 'CONDIÇÃO', text: 'Ferramentas generativas podem ser usadas em atividades pedagógicas com mediação de profissionais da educação.' },
      { s: 'no', label: 'PROIBIDO', text: 'Uso direto, autônomo, individual ou não supervisionado dessas ferramentas pelos alunos.' },
    ],
    note: { title: 'Leitura minha, não está no texto', text: 'O artigo fala só de IA generativa. Plataformas adaptativas ou tutores não generativos caem nas regras gerais e na classificação de risco.' },
    ref: 'Art. 23',
  },
  {
    id: 'medio', band: 'Ensino Médio', level: 3, title: 'Sem proibição específica de uso individual',
    items: [
      { s: 'ok', label: 'PREVISTO', text: 'IA como objeto de aprendizagem e recurso pedagógico; contato progressivo, mediado e contextualizado.' },
      { s: 'warn', label: 'CONDIÇÃO', text: 'Ferramentas seguem as salvaguardas do nível de risco em que se enquadram e a adequação etária.' },
      { s: 'no', label: 'PROIBIDO', text: 'Publicidade direcionada, perfilização mercadológica ou exploração comercial de dados, em qualquer etapa.' },
    ],
    note: { title: 'O que o texto não diz', text: 'A resolução não tem artigo próprio para o Ensino Médio. O G1 registra a mesma leitura: não há proibição específica ao uso individual nessa etapa.' },
    ref: 'Art. 17 a 20 · Art. 24',
  },
];

/* ---------- Níveis de risco ---------- */

export interface Tier {
  level: 1 | 2 | 3 | 4;
  name: string;
  ref: string;
  summary: string;
  examples: string[];
  requires: string[];
  requiresRef?: string;
}

export const TIERS: Tier[] = [
  {
    level: 1, name: 'Baixo', ref: 'Art. 38',
    summary: 'Apoio instrumental, sem impacto relevante em direitos, notas ou trajetória, e sem interação contínua com alunos.',
    examples: ['Organizar ou adaptar material didático', 'Apoio ao planejamento de aulas', 'Revisão de texto sem valor de nota', 'Tradução, resumo, formatação', 'Transcrição, legenda, leitor de tela'],
    requires: ['Transparência e segurança da informação', 'Proteção de dados pessoais', 'Registro simplificado da finalidade', 'Possibilidade de supervisão humana', 'Classificação documentada: não vale presumir baixo risco'],
  },
  {
    level: 2, name: 'Moderado', ref: 'Art. 39',
    summary: 'Piso para toda aplicação que interage individualmente com alunos ou trata seus dados de forma sistemática.',
    examples: ['Tutores e apoio pedagógico automatizado', 'Feedback formativo sem efeito em nota', 'Assistentes de atendimento e orientação', 'Apoio à escrita, pesquisa e estudo', 'Recomendações e trilhas personalizadas'],
    requires: ['Comunicar a comunidade escolar', 'Registrar finalidade, público, dados e responsáveis', 'Revisão humana obrigatória das recomendações', 'Monitorar erros, alucinações e vieses', 'Canal de contestação', 'Reclassificar se a ferramenta ganhar funções'],
  },
  {
    level: 3, name: 'Alto', ref: 'Art. 40',
    summary: 'Pode influenciar nota, progressão, seleção, benefício ou disciplina. Admissão excepcional.',
    examples: ['Pré-correção de redação e questão dissertativa', 'Apoio à correção de prova objetiva que vale nota', 'Proctoring em avaliações', 'Predição de evasão, desempenho ou conduta', 'Dados sensíveis: saúde, deficiência, biometria', 'Detectores de texto gerado por IA'],
    requires: ['Avaliação prévia de impacto algorítmico', 'Relatório de impacto à proteção de dados, quando couber', 'Supervisão humana contínua e documentada', 'Validação humana prévia e individual; nada de validação em bloco', 'Auditoria, rastreabilidade, contestação', 'Preferir alternativa menos invasiva'],
  },
  {
    level: 4, name: 'Incompatível', ref: 'Art. 41',
    summary: 'Vedado em qualquer escola ou rede.',
    examples: ['Reconhecimento de emoções', 'Vigilância biométrica contínua', 'Pontuação social', 'Nota de redação dada só pela IA', 'Decisão 100% automatizada sobre aprovação ou sanção', 'Dados de alunos para publicidade', 'Dados de crianças e adolescentes para treinar modelos de terceiros'],
    requires: ['Não usar. Estas vedações valem desde a publicação da resolução, sem esperar os 12 meses de adequação.'],
    requiresRef: 'Art. 46',
  },
];

/* ---------- Currículo ---------- */

export const LEARNINGS = [
  'Como funcionam sistemas computacionais e aplicações de IA, seus limites e impactos',
  'O papel dos dados nos sistemas de IA',
  'Pensamento lógico, analítico e crítico',
  'Identificar limites, riscos e vieses',
  'Desinformação, manipulação digital, conteúdo sintético e influência automatizada',
  'Verificar fontes e validar informações',
  'Diferença entre apoio tecnológico e elaboração própria; honestidade acadêmica',
  'Impactos sociais, econômicos, culturais, políticos, ambientais e éticos',
  'Comportamento responsável, ético e seguro no ambiente digital',
  'Metacognição: refletir sobre o próprio pensar e aprender mediado por IA',
];

export const HOW_TO_USE = [
  'Adotar IA implica ensinar sobre IA no currículo',
  'Desenvolvimento integral: cognitivo, social e emocional',
  'Inclusão, acessibilidade e personalização',
  'Preservar autonomia intelectual e evitar dependência excessiva da tecnologia',
  'Alternativas pedagógicas para quem não tem conectividade ou dispositivo',
  'Adequação etária, que inclui as condições de uso e não só a idade mínima',
  'Acompanhamento pedagógico do uso de IA em qualquer hipótese',
];

/* ---------- Deveres da escola ---------- */

export interface Checklist { id: string; title: string; items: string[]; ref: string; extra?: { title: string; text: string; ref: string } }

export const SCHOOL_DUTIES: Checklist[] = [
  {
    id: 'antes', title: 'Antes de adotar uma ferramenta', ref: 'Art. 6º · Anexo II',
    items: [
      'Decisão técnica e pedagógica fundamentada, com participação da comunidade escolar',
      'Evidência de eficácia; se for insuficiente, avaliar os resultados depois e decidir se continua',
      'Adequação ao contexto brasileiro e ao perfil dos alunos',
      'Análise de onde os dados ficam e como são protegidos',
      'Infraestrutura, conectividade e suporte suficientes',
      'Impacto sobre inclusão e potencial de acessibilidade',
      'Classificar o risco de cada funcionalidade; sem informação do fornecedor, não contratar',
    ],
  },
  {
    id: 'durante', title: 'Durante o uso', ref: 'Art. 5º · Art. 12 · Art. 13 · Art. 14, §2º · Art. 42',
    items: [
      'Comunicar a alunos, professores e famílias que há IA e para quê',
      'Informar quando material didático foi feito com apoio de IA',
      'Documentar decisões e parâmetros de uso',
      'Reavaliar periodicamente a classificação de risco',
      'Dar ao professor formação, tempo e apoio técnico para revisar resultados',
      'Prever em contrato governança, auditoria, monitoramento e responsabilização do fornecedor',
    ],
  },
  {
    id: 'formacao', title: 'Formação docente permanente', ref: 'Art. 11, I a VII',
    items: [
      'Alfabetização algorítmica',
      'Elaboração de comandos (prompts)',
      'Curadoria crítica de conteúdo gerado',
      'Avaliação mediada por tecnologia',
      'Proteção de dados pessoais',
      'Integridade acadêmica',
      'Identificação e mitigação de vieses',
    ],
    extra: { title: 'Prazo', text: '12 meses, contados da publicação da resolução pelo CNE, para adequar políticas, práticas e contratos. As vedações do Art. 41 valem desde essa publicação.', ref: 'Art. 46' },
  },
];

/* ---------- Pontos de atenção ---------- */

export const ATTENTION = [
  { title: 'Pré-correção: a linha é o efeito avaliativo', text: 'A IA pode preparar a correção, mas pontuação gerada pelo sistema não pode produzir efeito sem correção humana, e o professor precisa ler o texto inteiro. Aceitar a nota sugerida em lote ou apenas confirmá-la é vedado. Para um produto de correção de redação, o desenho do fluxo do professor passa a ser o ponto regulado.', ref: 'Art. 40, §4º' },
  { title: 'Parecer e resolução divergem no tom', text: 'Para os Anos Iniciais, o parecer diz que IA generativa e conversacional “não é recomendada”, nem com mediação; a resolução diz “é vedada”. Para a Educação Infantil, o parecer “recomenda a restrição total” e a resolução veda. Vale o texto da resolução.', ref: 'Parecer, Seção 5 × Art. 21 e 22' },
  { title: 'Anos Finais: o que conta como mediação', text: 'O Art. 23 exige mediação de profissionais e veda uso individual ou não supervisionado de IA generativa. O texto não define se uma tarefa de casa com ferramenta generativa, orientada pelo professor, cumpre o requisito.', ref: 'Art. 23' },
  { title: 'Uso individual fica fora do alcance', text: 'A norma separa o uso promovido pela escola do uso que alunos e professores fazem por conta própria, reconhecendo que este tem controle institucional limitado. As obrigações recaem sobre o primeiro.', ref: 'Art. 1º, §4º' },
  { title: 'Treinamento de modelos com dados de menores', text: 'A vedação para crianças e adolescentes não admite autorização. Contratos de plataformas usadas na Educação Básica precisam excluir esse uso, e a vedação vale desde a publicação.', ref: 'Art. 15, par. único · Art. 41, XI · Art. 46' },
  { title: 'Homologado não é o mesmo que em vigor', text: 'O ministro homologou o parecer “na forma do Projeto de Resolução a ele anexado” (DOU de 11/11/2026). Falta o CNE publicar a resolução numerada: o Art. 47 diz que ela vigora a partir da publicação, e é dessa data que contam os 12 meses de adequação do Art. 46 e a aplicação imediata das vedações do Art. 41.', ref: 'Art. 46 · Art. 47' },
  { title: 'Remissão trocada no Anexo II', text: 'No quadro de risco, a pré-correção de dissertativas remete ao “art. 39, § 4º”, mas a definição de pré-correção está no Art. 40, § 4º (o Art. 39 trata de risco moderado e não tem § 4º). Leia como Art. 40, § 4º, e confira se a resolução publicada corrige.', ref: 'Anexo II · Art. 40, §4º' },
];

/* ---------- Glossário ---------- */

export const GLOSSARY = [
  { term: 'Supervisão humana significativa', def: 'Pessoa com capacidade real de compreender, acompanhar, contestar, corrigir ou interromper o resultado da IA, em condições institucionais adequadas.' },
  { term: 'Decisão exclusivamente automatizada', def: 'Decisão produzida pelo sistema sem validação humana efetiva, prévia e qualificada.' },
  { term: 'Perfilização', def: 'Tratamento automatizado de dados pessoais para avaliar, classificar, prever ou inferir comportamento, desempenho, interesses, riscos ou vulnerabilidade.' },
  { term: 'Pré-correção', def: 'Etapa preparatória, sem efeito avaliativo próprio, em que a IA auxilia a correção feita pelo professor.' },
  { term: 'IA de propósito geral', def: 'Aplicação criada sem finalidade educacional específica, ainda que usada na escola.' },
  { term: 'Solução educacional específica', def: 'Aplicação de IA concebida ou adaptada para fins educacionais.' },
];

/* ---------- Navegação ---------- */

export const NAV = [
  { group: 'Guia', items: [
    { id: 'resumo', label: 'Resumo' },
    { id: 'etapas', label: 'Por etapa' },
    { id: 'regras', label: 'Pode ou não pode' },
    { id: 'risco', label: 'Risco' },
    { id: 'curriculo', label: 'Currículo' },
    { id: 'escola', label: 'Escola' },
    { id: 'atencao', label: 'Atenção' },
  ] },
  { group: 'Referência', items: [
    { id: 'documento', label: 'O documento' },
    { id: 'termos', label: 'Termos' },
  ] },
];
