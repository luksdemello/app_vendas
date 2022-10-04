interface SalesDto {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: {
      id: number;
      name: string;
    }
}

export { SalesDto }