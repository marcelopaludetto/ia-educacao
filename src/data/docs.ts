/** O PDF de referência (parecer homologado) e o mapa artigo → página. */

export type DocId = 'b';

export interface SourceDoc {
  id: DocId;
  name: string;
  tag: string;
  total: number;
  /** Arquivo em public/pdfs. */
  file: string;
  /** Número do artigo → página do PDF. */
  arts: Record<string, number>;
  sec5: number;
  an2?: number;
}

export const DOCS: Record<DocId, SourceDoc> = {
  b: {
    id: 'b',
    name: 'Parecer CNE/CP 15/2026 homologado (DOU 11/11/2026, Seção 1, p. 141)',
    tag: 'HOMOLOGADO',
    total: 65,
    file: 'pdfs/parecer-homologado.pdf',
    arts: {
      '1': 34, '2': 35, '3': 35, '4': 35, '5': 36, '6': 36, '7': 37, '8': 37, '9': 38, '10': 38,
      '11': 38, '12': 38, '13': 39, '14': 39, '15': 39, '16': 39, '17': 40, '18': 40, '19': 41, '20': 41,
      '21': 42, '22': 42, '23': 42, '24': 42, '25': 42, '26': 43, '27': 43, '28': 43, '29': 43, '30': 43,
      '31': 44, '32': 44, '33': 44, '34': 44, '35': 44, '36': 45, '37': 45, '38': 45, '39': 46, '40': 47,
      '41': 49, '42': 49, '43': 50, '44': 50, '45': 50, '46': 50, '47': 50,
    },
    sec5: 16,
    an2: 61,
  },
};

/** Link para uma página do PDF (o navegador abre direto nela). */
export function pdfUrl(doc: DocId, page: number, base: string): string {
  return `${base}${DOCS[doc].file}#page=${page}`;
}
