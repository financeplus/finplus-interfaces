export abstract class AcCsvParser<T> {
  public abstract transactionArray: T[];
  public abstract async getTransactions (): Promise<T[]>;
}