export type Status = 'no' | 'warn' | 'ok';
export type Theme = 'Sala de aula' | 'Avaliação' | 'Vigilância' | 'Dados' | 'Gestão' | 'Acessibilidade';

export interface Rule {
  s: Status;
  t: Theme;
  /** O que é. */
  w: string;
  /** Detalhe / condição. */
  h?: string;
  /** Referência no texto homologado. */
  r: string;
}

export const STATUS_LABEL: Record<Status, string> = {
  no: 'PROIBIDO',
  warn: 'COM CONDIÇÕES',
  ok: 'PERMITIDO',
};

export const STATUS_ORDER: Status[] = ['no', 'warn', 'ok'];

export const RULES: Rule[] = [
  { s: 'no', t: 'Sala de aula', w: 'Substituir o professor por sistema automatizado', h: 'Também é vedado transferir a responsabilidade pedagógica para a IA.', r: 'Art. 4º, §1º, III · Art. 14' },
  { s: 'no', t: 'Sala de aula', w: 'Crianças da Educação Infantil usando qualquer sistema de IA', h: 'Vedado mesmo com mediação de profissionais.', r: 'Art. 21, §1º' },
  { s: 'no', t: 'Sala de aula', w: 'Aluno do 1º ao 5º ano com acesso direto, autônomo, individual ou não supervisionado a IA', r: 'Art. 22, §1º' },
  { s: 'no', t: 'Sala de aula', w: 'Aluno do 1º ao 5º ano interagindo com IA generativa ou conversacional', h: 'Vedado mesmo sob supervisão de profissionais.', r: 'Art. 22, §2º' },
  { s: 'no', t: 'Sala de aula', w: 'Aluno do 6º ao 9º ano usando IA generativa de forma direta, autônoma, individual ou sem supervisão', r: 'Art. 23, par. único' },
  { s: 'no', t: 'Avaliação', w: 'Nota, conceito ou mérito em redação ou questão dissertativa atribuídos só pela IA', h: 'Ou sem a correção humana com leitura integral do texto.', r: 'Art. 41, IX' },
  { s: 'no', t: 'Avaliação', w: 'Punir aluno só com base em detector de texto de IA', h: 'Sanção acadêmica ou disciplinar não pode se apoiar exclusivamente no resultado da ferramenta.', r: 'Art. 41, X' },
  { s: 'no', t: 'Avaliação', w: 'Decisão 100% automatizada sobre aprovação, retenção, certificação, seleção, benefício ou sanção', h: 'Essas decisões ficam com profissional ou instância competente, com fundamentação e registro.', r: 'Art. 41, V · Art. 40, §3º' },
  { s: 'no', t: 'Vigilância', w: 'Reconhecer ou inferir emoções de alunos e profissionais', h: 'Exceções: tecnologia assistiva só para acessibilidade, com consentimento, e pesquisa aprovada por comitê de ética. Sem efeito avaliativo, disciplinar ou seletivo.', r: 'Art. 41, II e §2º' },
  { s: 'no', t: 'Vigilância', w: 'Vigilância biométrica contínua ou monitoramento permanente dos alunos', h: 'Verificação pontual de identidade é outra coisa e pode ser admitida.', r: 'Art. 41, VI' },
  { s: 'no', t: 'Vigilância', w: 'Sistemas de pontuação social', r: 'Art. 41, I' },
  { s: 'no', t: 'Vigilância', w: 'Perfil psicológico, biométrico ou comportamental para classificar, disciplinar, vender ou restringir oportunidades', r: 'Art. 41, IV' },
  { s: 'no', t: 'Dados', w: 'Usar dados educacionais para publicidade direcionada, perfilização mercadológica ou exploração comercial', h: 'Vale para dados de estudantes e de docentes, em qualquer etapa.', r: 'Art. 16 · Art. 24 · Art. 41, VII' },
  { s: 'no', t: 'Dados', w: 'Treinar modelos de IA de terceiros com conteúdos ou dados de crianças e adolescentes', h: 'Vedação absoluta: não admite autorização.', r: 'Art. 15, par. único · Art. 41, XI' },
  { s: 'no', t: 'Dados', w: 'Explorar vulnerabilidades etárias, emocionais, socioeconômicas, cognitivas ou comportamentais dos alunos', r: 'Art. 41, III' },
  { s: 'no', t: 'Gestão', w: 'Segregar, discriminar ou excluir alunos com base em inferências automatizadas', h: 'Sobre capacidade, comportamento, vulnerabilidade ou desempenho.', r: 'Art. 41, VIII' },
  { s: 'warn', t: 'Sala de aula', w: 'Recursos de IA não generativa com turmas do 1º ao 5º ano', h: 'Só em atividade planejada, conduzida e mediada pelo profissional, com comunicação às famílias e proteção de dados.', r: 'Art. 22, caput e §4º' },
  { s: 'warn', t: 'Sala de aula', w: 'IA generativa com turmas do 6º ao 9º ano', h: 'Apenas em atividades pedagógicas com mediação de profissionais da educação.', r: 'Art. 23' },
  { s: 'warn', t: 'Sala de aula', w: 'Tutores de IA e apoio pedagógico automatizado', h: 'Risco moderado: comunicar, registrar, revisar com olhar humano as recomendações, monitorar vieses e oferecer canal de contestação. Respeitadas as restrições de cada etapa.', r: 'Art. 39' },
  { s: 'warn', t: 'Sala de aula', w: 'Ferramentas de apoio à escrita, pesquisa e organização de estudos em contexto pedagógico', h: 'Risco moderado. O aluno responde pelo conteúdo e deve ser transparente sobre o uso.', r: 'Art. 39, §1º, IV · Art. 10' },
  { s: 'warn', t: 'Sala de aula', w: 'Plataformas adaptativas, trilhas personalizadas e recomendações', h: 'Risco moderado enquanto não tiverem efeito automático sobre nota, progressão ou benefício. Se passarem a ter, sobem para alto risco.', r: 'Art. 39, §1º, V e VI · Art. 40, §1º, VIII' },
  { s: 'warn', t: 'Avaliação', w: 'Pré-correção de redação e questão dissertativa por IA', h: 'Alto risco. Só como etapa preparatória: o professor lê o texto inteiro e atribui a nota; vedadas validação em bloco e mera ratificação da sugestão.', r: 'Art. 40, §1º, X e §4º' },
  { s: 'warn', t: 'Avaliação', w: 'Feedback formativo gerado por IA', h: 'Risco moderado se não houver repercussão acadêmica direta.', r: 'Art. 39, §1º, II' },
  { s: 'warn', t: 'Avaliação', w: 'Apoio automatizado à correção de prova objetiva que vale nota', h: 'Alto risco. Só como instrumento auxiliar: nenhuma nota ou aprovação sem validação humana prévia, qualificada e documentada.', r: 'Art. 40, §1º, I' },
  { s: 'warn', t: 'Avaliação', w: 'Detectores de conteúdo gerado por IA', h: 'Alto risco quando houver possível repercussão acadêmica ou disciplinar. Admitidos apenas como elemento auxiliar de análise.', r: 'Art. 40, §1º, IX' },
  { s: 'warn', t: 'Vigilância', w: 'Proctoring e monitoramento em avaliações', h: 'Alto risco: avaliação de impacto, supervisão humana documentada e preferência pela alternativa menos invasiva.', r: 'Art. 40, §1º, II e §2º, IX' },
  { s: 'warn', t: 'Vigilância', w: 'Verificação pontual de identidade', h: 'Quando estritamente necessária para acesso a ambiente virtual ou avaliação, com finalidade, necessidade e proporcionalidade.', r: 'Art. 41, §1º' },
  { s: 'warn', t: 'Gestão', w: 'Prever evasão, desempenho ou conduta de alunos individualmente', h: 'Alto risco, com todas as salvaguardas reforçadas.', r: 'Art. 40, §1º, III e VI' },
  { s: 'warn', t: 'Dados', w: 'Tratar dados sensíveis: deficiência, saúde, biometria, comportamento, vulnerabilidade social', h: 'Alto risco. Relatório de impacto à proteção de dados quando aplicável.', r: 'Art. 40, §1º, V' },
  { s: 'warn', t: 'Dados', w: 'Treinar modelos de terceiros com conteúdo de professores ou de estudantes adultos', h: 'Só com autorização específica e revogável.', r: 'Art. 15 · Art. 39, §2º, V' },
  { s: 'warn', t: 'Gestão', w: 'Assistentes institucionais de atendimento e orientação', h: 'Risco moderado.', r: 'Art. 39, §1º, III' },
  { s: 'warn', t: 'Acessibilidade', w: 'Recursos de acessibilidade com personalização individual', h: 'Risco moderado se não envolverem dados sensíveis nem decisão automatizada relevante.', r: 'Art. 39, §1º, VII' },
  { s: 'ok', t: 'Sala de aula', w: 'Professores da Educação Infantil usarem IA para planejamento e gestão pedagógica', h: 'O uso é do profissional, não da criança.', r: 'Art. 21' },
  { s: 'ok', t: 'Sala de aula', w: 'IA como apoio complementar ao trabalho do professor', h: 'Para diversificar estratégias, acompanhar aprendizagens, personalizar experiências e organizar atividades, com intencionalidade pedagógica clara.', r: 'Art. 8º' },
  { s: 'ok', t: 'Sala de aula', w: 'Ensinar sobre IA e ensinar com IA', h: 'A IA pode ser objeto de aprendizagem e recurso pedagógico, respeitadas as restrições de cada etapa.', r: 'Art. 19, §1º' },
  { s: 'ok', t: 'Sala de aula', w: 'Elaborar, organizar ou adaptar materiais didáticos com IA', h: 'Baixo risco. O uso deve ser informado de forma clara e o autor responde pelo conteúdo.', r: 'Art. 38, §1º, I · Art. 14, §2º' },
  { s: 'ok', t: 'Gestão', w: 'Ferramentas de apoio ao planejamento pedagógico ou administrativo', h: 'Baixo risco.', r: 'Art. 38, §1º, II' },
  { s: 'ok', t: 'Sala de aula', w: 'Revisão de texto sem caráter avaliativo', h: 'Baixo risco.', r: 'Art. 38, §1º, III' },
  { s: 'ok', t: 'Sala de aula', w: 'Tradução, resumo, formatação e adequação de conteúdos', h: 'Baixo risco.', r: 'Art. 38, §1º, IV' },
  { s: 'ok', t: 'Acessibilidade', w: 'Transcrição, legendagem, leitor de tela, ampliação de texto, conversão de formato', h: 'Baixo risco, desde que sem inferência sensível ou perfil individual.', r: 'Art. 38, §1º, V' },
  { s: 'ok', t: 'Acessibilidade', w: 'Tecnologia assistiva voltada só a inclusão e eliminação de barreiras', h: 'Fica fora das restrições dos Anos Iniciais e das restrições à perfilização, respeitados proteção de dados e supervisão humana.', r: 'Art. 22, §5º · Art. 36, §3º' },
];
