export interface SymbolInfo {
  /** 銘柄コード */
  code: number;
  /** 銘柄名 */
  name: string;
  /** 市場名 */
  marketName: string;
  /** 業種分類 */
  industry: string;
  /** 単元株数 */
  unit: number;
  /** 日経225採用銘柄 */
  isNikkei225: boolean;
}
