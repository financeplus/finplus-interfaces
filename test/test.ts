import { expect, tap } from '@pushrocks/tapbundle';
import * as finplusInterfaces from '../ts/index';

interface ITestTransaction {
  date: Date;
  amount: number;
}

tap.test('implement test csv parser', async () => {
  class MyCsvParser extends finplusInterfaces.AcCsvParser<ITestTransaction> {
    paymentProviderName: 'bunq';
    public transactionArray: ITestTransaction[] = [];
    public async getTransactions(): Promise<ITestTransaction[]> {
      return this.transactionArray;
    }
  }
});

tap.start();
