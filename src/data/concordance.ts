/** Concordância dos 47 artigos homologados com a minuta. */

export type ConcStatus = "ALT" | "NOVO" | "RED" | "IGUAL";

export const CONC_LABEL: Record<ConcStatus, { label: string; kind: "tight" | "new" | "cut" }> = {
  ALT: { label: "CONTEÚDO MUDOU", kind: "tight" },
  NOVO: { label: "NOVO", kind: "new" },
  RED: { label: "SÓ REDAÇÃO", kind: "cut" },
  IGUAL: { label: "IGUAL", kind: "cut" },
};

export interface ConcRow {
  s: ConcStatus;
  /** Artigo no texto homologado. */
  art: string;
  /** Artigo(s) de origem na minuta; null quando não há correspondente. */
  from: string | null;
  note: string;
}

export const CONCORDANCE: ConcRow[] = [
  {
    "s": "ALT",
    "art": "Art. 1º",
    "from": "Art. 1º · Art. 8º, §2º",
    "note": "O nome perde “Orientadoras”. Saem as expressões “natureza orientadora e regulatória”, “não é autorizar ou estimular indiscriminadamente” e “não constitui finalidade em si mesma nem pressupõe benefícios automáticos”. O §4º (uso individual × uso promovido pela escola) veio do antigo Art. 8º, §2º, sem mudança."
  },
  {
    "s": "ALT",
    "art": "Art. 2º",
    "from": "Art. 2º",
    "note": "A definição de “Inteligência Artificial” (antigo inciso I) sai da lista; fica só o rol de aplicações abrangidas, no §1º. As outras cinco definições são iguais. Os anexos passam a ser dois: Glossário e Guia de Classificação de Risco."
  },
  {
    "s": "IGUAL",
    "art": "Art. 3º",
    "from": "Art. 2º, §1º",
    "note": "Era parágrafo, virou artigo."
  },
  {
    "s": "ALT",
    "art": "Art. 4º",
    "from": "Art. 3º · Art. 4º",
    "note": "De 13 para 12 princípios: sai “autonomia intelectual e metacognição”. “Proteção de dados” vira “dados pessoais”. A regência humana passa a ser o §1º, com três incisos. Saem o parágrafo único do antigo Art. 3º, a frase “a mediação humana não se limita à revisão posterior” e o §4º do antigo Art. 4º, que vedava responsabilizar o professor por falhas fora do seu controle. §§2º e 3º iguais."
  },
  {
    "s": "ALT",
    "art": "Art. 5º",
    "from": "Art. 5º, §2º",
    "note": "Resta só a exigência de contratos com governança, auditoria, monitoramento e responsabilização. Saem o caput (observância rigorosa da legislação de proteção de dados), o §1º (minimização, finalidade, retenção, eliminação segura, anonimização), o §3º (ECA Digital para crianças e adolescentes) e, do §2º, os padrões de segurança, rastreabilidade, vedação de reutilização indevida de dados e responsabilidade por danos."
  },
  {
    "s": "ALT",
    "art": "Art. 6º",
    "from": "Art. 6º",
    "note": "Inciso IX perde “evidências de eficácia para o perfil de estudantes” e “proporcional ao nível de risco”. Entram o inciso X (acessibilidade, Lei 13.146/2015) e o parágrafo único (avaliação posterior quando faltar evidência prévia). Incisos I a VIII iguais."
  },
  {
    "s": "IGUAL",
    "art": "Art. 7º",
    "from": "Art. 7º",
    "note": "Só uma vírgula."
  },
  {
    "s": "IGUAL",
    "art": "Art. 8º",
    "from": "Art. 8º",
    "note": "Caput e §1º iguais; o antigo §4º virou §2º. O antigo §2º foi para o Art. 1º, §4º, e o antigo §3º virou o Art. 43."
  },
  {
    "s": "ALT",
    "art": "Art. 9º",
    "from": "Art. 9º",
    "note": "Entram “mediação pedagógica” e “mediador pedagógico”. Novo §2º: mediação feita por IA não conta para os requisitos de tutoria e interação da EaD."
  },
  {
    "s": "ALT",
    "art": "Art. 10",
    "from": "Art. 10",
    "note": "“Preservará os princípios” vira “será guiada pelos valores”. No §1º, “assumir integralmente a autoria” vira responsabilidade intelectual pela seleção, verificação, veracidade, consistência e adequação, mais transparência quanto ao uso de IA e autoria compatível com a contribuição humana. §2º igual. Sai o §3º (cessão de direitos só com consentimento formal e informado)."
  },
  {
    "s": "IGUAL",
    "art": "Art. 11",
    "from": "Art. 11",
    "note": ""
  },
  {
    "s": "ALT",
    "art": "Art. 12",
    "from": "Art. 12 · Art. 13, §5º",
    "note": "§1º perde “contribuindo para a responsabilização institucional e para a rastreabilidade”. O §4º (antigo Art. 13, §5º) perde o trecho sobre responsabilidade final compartilhada entre instituição, sistema de ensino, mantenedora, gestores e fornecedores. §§2º e 3º iguais."
  },
  {
    "s": "ALT",
    "art": "Art. 13",
    "from": "Art. 13",
    "note": "Caput igual; o parágrafo único é o antigo §3º. Saem o §1º (proporcionalidade dos mecanismos de governança; ideia semelhante segue no Art. 36), o §2º (explicabilidade e rastreabilidade) e o §4º (revisão humana quando houver impacto sobre direitos ou avaliação)."
  },
  {
    "s": "ALT",
    "art": "Art. 14",
    "from": "Art. 14",
    "note": "“Transferência integral da responsabilidade pedagógica” vira “transferência”: a vedação fica mais ampla. Novo §2º: informar quando material didático usa IA."
  },
  {
    "s": "NOVO",
    "art": "Art. 15",
    "from": null,
    "note": "Vedação de treinar modelos de terceiros com conteúdos de docentes e estudantes, salvo autorização específica; absoluta para crianças e adolescentes. Temas próximos na versão anterior: Art. 10, §3º e Art. 33, §2º, V."
  },
  {
    "s": "ALT",
    "art": "Art. 16",
    "from": "Art. 16, §4º",
    "note": "A vedação de publicidade direcionada e exploração comercial valia para Educação Infantil e Anos Iniciais; vira regra geral e passa a cobrir dados de docentes."
  },
  {
    "s": "RED",
    "art": "Art. 17",
    "from": "Art. 15",
    "note": "Acrescenta remissão aos princípios do Art. 4º."
  },
  {
    "s": "ALT",
    "art": "Art. 18",
    "from": "Art. 18 · Art. 15, par. único",
    "note": "Incisos I a X iguais. Novos §1º (adoção de IA acompanhada do ensino sobre IA) e §3º (acompanhamento pedagógico em qualquer hipótese). O §2º reescreve o antigo parágrafo único do Art. 15 sobre adequação etária."
  },
  {
    "s": "ALT",
    "art": "Art. 19",
    "from": "Art. 17",
    "note": "Passa a citar as Diretrizes Operacionais sobre dispositivos digitais. §1º igual. §2º reescrito: saem “contextualização das aprendizagens” e “interdisciplinaridade”; entram “contextos sociais, culturais e tecnológicos”."
  },
  {
    "s": "ALT",
    "art": "Art. 20",
    "from": "Art. 19",
    "note": "Incisos iguais, exceto o VIII, que ganha “ambientais”. No parágrafo único, “em todas as etapas” vira “nas etapas em que seja admitida a utilização pelos estudantes”, e sai o trecho “privilegiando a exploração orientada, a criatividade, a resolução de problemas…”."
  },
  {
    "s": "NOVO",
    "art": "Art. 21",
    "from": "Art. 16",
    "note": "Regra própria para a Educação Infantil: uso só por profissionais e para acessibilidade; vedado às crianças mesmo com mediação. Antes a etapa era tratada junto com os Anos Iniciais."
  },
  {
    "s": "ALT",
    "art": "Art. 22",
    "from": "Art. 16",
    "note": "Caput é o antigo §1º, sem “sem interação direta livre da criança com a ferramenta” e “sem coleta desnecessária de dados pessoais”. §1º traz a vedação de acesso direto (antes no caput, com a lista “generativo, conversacional, preditivo ou adaptativo”). §2º novo: vedada IA generativa ou conversacional mesmo com supervisão. §3º igual ao antigo §2º. §4º é o antigo §3º, agora só para Anos Iniciais. §5º novo: exceção para tecnologia assistiva."
  },
  {
    "s": "NOVO",
    "art": "Art. 23",
    "from": null,
    "note": "Anos Finais: IA generativa só com mediação; vedado uso direto, autônomo, individual ou não supervisionado."
  },
  {
    "s": "ALT",
    "art": "Art. 24",
    "from": "Art. 16, §4º",
    "note": "Vedação de publicidade e exploração comercial estendida a toda a Educação Básica."
  },
  {
    "s": "IGUAL",
    "art": "Art. 25",
    "from": "Art. 20",
    "note": ""
  },
  {
    "s": "RED",
    "art": "Art. 26",
    "from": "Art. 21",
    "note": "“Articular-se-ão” vira “serão articulados”."
  },
  {
    "s": "RED",
    "art": "Art. 27",
    "from": "Art. 22",
    "note": "§1º perde a frase final “assegurando coerência entre as diretrizes institucionais…”. Resto igual."
  },
  {
    "s": "IGUAL",
    "art": "Art. 28",
    "from": "Art. 23",
    "note": ""
  },
  {
    "s": "ALT",
    "art": "Art. 29",
    "from": "Art. 24",
    "note": "Passa a falar em gestão “acadêmica e escolar”. Sai a lista de usos (planejamento, indicadores, risco de evasão). A vedação de decisão exclusivamente automatizada vira parágrafo único."
  },
  {
    "s": "IGUAL",
    "art": "Art. 30",
    "from": "Art. 25",
    "note": ""
  },
  {
    "s": "RED",
    "art": "Art. 31",
    "from": "Art. 27, par. único",
    "note": "“Contribuirá” vira “deverá contribuir”."
  },
  {
    "s": "RED",
    "art": "Art. 32",
    "from": "Art. 26, §1º",
    "note": "Saem o caput e o §2º do antigo Art. 26 (metodologias ativas, projetos, simulação)."
  },
  {
    "s": "IGUAL",
    "art": "Art. 33",
    "from": "Art. 27",
    "note": ""
  },
  {
    "s": "ALT",
    "art": "Art. 34",
    "from": "Art. 28",
    "note": "A remissão muda: antes apontava para o Art. 5º (proteção de dados); agora aponta para o Art. 32."
  },
  {
    "s": "IGUAL",
    "art": "Art. 35",
    "from": "Art. 29",
    "note": ""
  },
  {
    "s": "RED",
    "art": "Art. 36",
    "from": "Art. 30",
    "note": "Sai a frase final sobre evitar exigências desnecessárias ou salvaguardas insuficientes. §§1º a 3º iguais."
  },
  {
    "s": "ALT",
    "art": "Art. 37",
    "from": "Art. 31",
    "note": "No parágrafo único, a classificação “possui caráter vinculante quanto às categorias” vira “estabelece as categorias”."
  },
  {
    "s": "ALT",
    "art": "Art. 38",
    "from": "Art. 32",
    "note": "As condições (sem perfilização individual, dados sensíveis, monitoramento contínuo, interação contínua ou decisão automatizada) sobem do §1º para o caput. “Podem ser compreendidas como” vira “são”. Lista de exemplos igual."
  },
  {
    "s": "ALT",
    "art": "Art. 39",
    "from": "Art. 33",
    "note": "Mesma mudança de estrutura do Art. 38. No §2º, V, “sem base legal adequada” vira “ressalvada autorização específica e revogável”, com remissão ao Art. 41, XI."
  },
  {
    "s": "ALT",
    "art": "Art. 40",
    "from": "Art. 34",
    "note": "Incisos I a IX e §§2º e 3º iguais. Novos inciso X e §4º: pré-correção de dissertativas admitida como apoio, com leitura integral pelo professor."
  },
  {
    "s": "ALT",
    "art": "Art. 41",
    "from": "Art. 35",
    "note": "Inciso II perde “para qualquer finalidade”. Inciso IX reescrito: antes vedava correção, avaliação ou nota por IA “ainda que sob a forma de sugestão de nota ou de pré-correção”; agora veda a nota exclusivamente por IA ou sem correção humana. Novo inciso XI (dados de crianças e adolescentes para treinar modelos). O §2º mudou de conteúdo: antes preservava o acompanhamento socioemocional feito por profissionais; agora traz exceções para tecnologia assistiva e pesquisa. Demais incisos e §1º iguais."
  },
  {
    "s": "IGUAL",
    "art": "Art. 42",
    "from": "Art. 36",
    "note": ""
  },
  {
    "s": "IGUAL",
    "art": "Art. 43",
    "from": "Art. 8º, §3º",
    "note": "Era parágrafo, virou artigo."
  },
  {
    "s": "IGUAL",
    "art": "Art. 44",
    "from": "Art. 37",
    "note": "“Constituição Federal” vira “Constituição”."
  },
  {
    "s": "ALT",
    "art": "Art. 45",
    "from": "Art. 38",
    "note": "“Manterá mecanismo permanente de acompanhamento” vira “acompanhará”. Sai “preferencialmente, em ciclos bienais”."
  },
  {
    "s": "ALT",
    "art": "Art. 46",
    "from": "Art. 39",
    "note": "As vedações de aplicação imediata eram as “previstas no Parecer”; agora são as “previstas no art. 41”."
  },
  {
    "s": "IGUAL",
    "art": "Art. 47",
    "from": "Art. 40",
    "note": ""
  }
];
