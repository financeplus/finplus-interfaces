export abstract class AcCsvParser<T> {
  public abstract paymentProviderName: string;
  public abstract transactionArray: T[];
  public abstract async getTransactions(): Promise<T[]>;
}
