/** Os dois PDFs analisados e o mapa artigo → página de cada um. */

export type DocId = 'a' | 'b';

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
  a: {
    id: 'a',
    name: 'Minuta anterior',
    tag: 'MINUTA',
    total: 107,
    file: 'pdfs/minuta.pdf',
    arts: {
      '1': 37, '2': 38, '3': 39, '4': 39, '5': 40, '6': 41, '7': 41, '8': 42, '9': 43, '10': 43,
      '11': 43, '12': 44, '13': 44, '14': 45, '15': 45, '16': 45, '17': 46, '18': 46, '19': 47, '20': 48,
      '21': 48, '22': 49, '23': 49, '24': 49, '25': 49, '26': 50, '27': 51, '28': 51, '29': 51, '30': 51,
      '31': 52, '32': 52, '33': 53, '34': 54, '35': 56, '36': 57, '37': 57, '38': 58, '39': 58, '40': 58,
    },
    sec5: 18,
  },
  b: {
    id: 'b',
    name: 'Parecer CNE/CP 15/2026, texto homologado',
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
