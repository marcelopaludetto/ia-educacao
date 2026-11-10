/** Diferenças de conteúdo entre a minuta e o texto homologado. */

export type DiffKind = "tight" | "loose" | "new" | "cut";

export const DIFF_LABEL: Record<DiffKind, string> = {
  tight: "MAIS RESTRITIVO",
  loose: "MAIS FLEXÍVEL",
  new: "NOVO",
  cut: "RETIRADO",
};

export interface Diff {
  kind: DiffKind;
  topic: string;
  before: string;
  /** Referência na minuta. */
  beforeRef?: string;
  after: string;
  /** Referência no texto homologado. */
  afterRef?: string;
}

export const DIFFS: Diff[] = [
  {
    "kind": "loose",
    "topic": "Correção de redação",
    "before": "Proibido usar IA para corrigir, avaliar ou dar nota em texto autoral, “ainda que sob a forma de sugestão de nota ou de pré-correção”.",
    "beforeRef": "Art. 35, IX",
    "after": "A pré-correção passa a ser admitida como aplicação de alto risco, só como etapa preparatória e auxiliar. O professor lê o texto inteiro e dá a nota. Ficam vedadas a homologação tácita, a validação em bloco e a mera ratificação do que o sistema sugeriu. Continua proibida a nota atribuída só pela IA.",
    "afterRef": "Art. 40, §1º, X e §4º · Art. 41, IX"
  },
  {
    "kind": "tight",
    "topic": "Educação Infantil",
    "before": "Tratada junto com os Anos Iniciais: sem acesso direto da criança, mas uso mediado pelo professor era admitido.",
    "beforeRef": "Art. 16",
    "after": "Vedado qualquer uso de IA pelas crianças, mesmo mediado. A IA fica restrita aos profissionais (planejamento, gestão pedagógica) e a recursos de acessibilidade.",
    "afterRef": "Art. 21"
  },
  {
    "kind": "tight",
    "topic": "Anos Iniciais (1º ao 5º)",
    "before": "Sem acesso direto ou autônomo; uso só em atividade mediada, “sem interação direta livre” da criança.",
    "beforeRef": "Art. 16, §1º",
    "after": "Mantém a regra e acrescenta: é vedada a interação dos alunos com IA generativa ou conversacional, ainda que sob supervisão. Tecnologia assistiva fica fora da restrição.",
    "afterRef": "Art. 22, §§1º, 2º e 5º"
  },
  {
    "kind": "new",
    "topic": "Anos Finais (6º ao 9º)",
    "before": "Nenhuma regra específica para a etapa.",
    "after": "IA generativa só em atividades pedagógicas com mediação de profissionais. Vedado o uso direto, autônomo, individual ou não supervisionado pelos alunos.",
    "afterRef": "Art. 23"
  },
  {
    "kind": "tight",
    "topic": "Treinamento de modelos",
    "before": "Dados educacionais não podiam treinar modelos de terceiros “sem base legal adequada”. Cessão de direitos exigia consentimento formal.",
    "beforeRef": "Art. 33, §2º, V · Art. 10, §3º",
    "after": "Vedado usar conteúdo de docentes e estudantes para treinar modelos de terceiros, salvo autorização específica. Para crianças e adolescentes a vedação é absoluta e entrou na lista de usos incompatíveis.",
    "afterRef": "Art. 15 · Art. 41, XI"
  },
  {
    "kind": "loose",
    "topic": "Reconhecimento de emoções",
    "before": "Vedado “para qualquer finalidade”.",
    "beforeRef": "Art. 35, II e §2º",
    "after": "Continua vedado, mas com duas exceções: tecnologia assistiva com finalidade exclusiva de acessibilidade e consentimento, e pesquisa aprovada por comitê de ética. Nenhuma pode ter repercussão avaliativa, disciplinar ou seletiva. Saiu o parágrafo que preservava o acompanhamento socioemocional feito por profissionais como atribuição humana indelegável.",
    "afterRef": "Art. 41, II e §2º"
  },
  {
    "kind": "new",
    "topic": "Ensino sobre IA vira condição da adoção",
    "before": "O ensino sobre IA já estava previsto: integração ao currículo, letramento em IA articulado aos letramentos digital, midiático e computacional, e a lista de dez aprendizagens. Faltava só dizer que quem adota a ferramenta é obrigado a ensinar sobre ela.",
    "beforeRef": "Art. 17 · Art. 18, IV · Art. 19",
    "after": "Mantém tudo isso, com os artigos renumerados, e acrescenta um parágrafo: a adoção de sistemas de IA na Educação Básica deve vir acompanhada do ensino sobre IA no currículo.",
    "afterRef": "Art. 18, IV e §1º · Art. 19 · Art. 20"
  },
  {
    "kind": "new",
    "topic": "Material didático feito com IA",
    "before": "Sem dever de informar.",
    "after": "O uso de IA para elaborar, adaptar ou revisar materiais e atividades deve ser informado de forma clara. O autor continua responsável pelo conteúdo.",
    "afterRef": "Art. 14, §2º"
  },
  {
    "kind": "new",
    "topic": "Guia de classificação de risco",
    "before": "Só o glossário como anexo.",
    "after": "Anexo II com regras de interpretação: classifica-se cada funcionalidade, não o produto; na dúvida vale o nível mais grave; sem informação do fornecedor para classificar, não se contrata; não existe presunção de baixo risco.",
    "afterRef": "Art. 2º, §2º · Anexo II"
  },
  {
    "kind": "new",
    "topic": "Evidência de eficácia",
    "before": "Exigia evidência de eficácia para o perfil de alunos atendidos.",
    "beforeRef": "Art. 6º, IX",
    "after": "Se a evidência prévia for insuficiente, a adoção deve ser seguida de avaliação institucional dos resultados, que decide se o uso continua. Entrou também o critério de acessibilidade (Lei 13.146/2015).",
    "afterRef": "Art. 6º, X e par. único"
  },
  {
    "kind": "cut",
    "topic": "Proteção do professor",
    "before": "Vedava expressamente responsabilizar o professor por falhas sistêmicas, técnicas ou contratuais fora do seu controle.",
    "beforeRef": "Art. 4º, §4º",
    "after": "Esse parágrafo saiu da resolução. Permanece a regra de que a regência humana não transfere ao professor responsabilidades técnicas, jurídicas e contratuais da instituição e dos fornecedores.",
    "afterRef": "Art. 4º, §2º"
  },
  {
    "kind": "cut",
    "topic": "Outros cortes na resolução",
    "before": "13 princípios; revisão “preferencialmente bienal”; classificação de risco com “caráter vinculante”; detalhamento de LGPD, explicabilidade e rastreabilidade.",
    "beforeRef": "Art. 3º · Art. 5º · Art. 13 · Art. 31 · Art. 38",
    "after": "12 princípios (autonomia intelectual e metacognição saiu da lista, mas segue no parecer e no Art. 20, X). Revisão “sempre que” houver mudança relevante. Texto mais enxuto sobre dados e transparência. As vedações de aplicação imediata passam a ser as do Art. 41.",
    "afterRef": "Art. 4º · Art. 37 · Art. 45 · Art. 46"
  },
  {
    "kind": "cut",
    "topic": "Proteção de dados e ECA Digital",
    "before": "Artigo próprio exigia observância rigorosa da legislação de proteção de dados, listava princípios (minimização, finalidade, retenção, eliminação segura, anonimização) e mandava aplicar o ECA Digital a crianças e adolescentes. Os contratos deviam garantir segurança, rastreabilidade, vedação de reutilização indevida de dados e responsabilidade por danos.",
    "beforeRef": "Art. 5º",
    "after": "O artigo ficou reduzido aos contratos, que devem prever governança, auditoria, monitoramento e responsabilização. A proteção de dados pessoais continua como princípio e a LGPD e o ECA Digital seguem citados no preâmbulo, mas o detalhamento saiu da resolução.",
    "afterRef": "Art. 4º, III · Art. 5º"
  },
  {
    "kind": "tight",
    "topic": "Responsabilidade pedagógica",
    "before": "Vedada a “transferência integral” da responsabilidade pedagógica para sistemas de IA.",
    "beforeRef": "Art. 14",
    "after": "Vedada a “transferência” da responsabilidade pedagógica, sem o qualificativo “integral”.",
    "afterRef": "Art. 14"
  },
  {
    "kind": "cut",
    "topic": "Tom do Art. 1º e definição de IA",
    "before": "Dizia que as diretrizes têm “natureza orientadora e regulatória”, que sua finalidade “não é autorizar ou estimular indiscriminadamente” o uso e que a IA “não constitui finalidade em si mesma”. Trazia uma definição de Inteligência Artificial.",
    "beforeRef": "Art. 1º · Art. 2º, I",
    "after": "Essas frases e a definição de IA saíram da resolução. Continuam no texto do parecer, que fundamenta a norma.",
    "afterRef": "Art. 1º · Art. 2º"
  }
];
