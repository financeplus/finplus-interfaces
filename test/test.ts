import { expect, tap } from '@pushrocks/tapbundle';
import * as finplusInterfaces from '../ts/index';

interface ITestTransaction {
  date: Date;
  amount: number;
}

tap.test('first test', async () => {
  class MyCsvParser extends finplusInterfaces.AcCsvParser<ITestTransaction> {
    public transactionArray: ITestTransaction[] = [];
    public async getTransactions(): Promise<ITestTransaction[]> {
      return this.transactionArray;
    }
  }
});

tap.start();
