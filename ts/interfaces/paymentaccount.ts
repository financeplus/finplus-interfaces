import { IVoucher } from './voucher';

export interface IMonthlyCheckpoint {
  start: number;
  end: number;
  pdfVoucher: IVoucher;
}

export interface IFinplusPaymentAccount {
  finplusPaymentAccountId: string;
  data: {
    status: 'active' | 'inactive' | 'deleted';
    connectionData: {
      bankAdapterType: string;
      credentials: unknown;
    };
    currency: 'EUR' | 'USD';
    name: string;
    checkpoints: {
      [key: string]: {
        1: IMonthlyCheckpoint;
        2: IMonthlyCheckpoint;
        3: IMonthlyCheckpoint;
        4: IMonthlyCheckpoint;
        5: IMonthlyCheckpoint;
        6: IMonthlyCheckpoint;
        7: IMonthlyCheckpoint;
        8: IMonthlyCheckpoint;
        9: IMonthlyCheckpoint;
        10: IMonthlyCheckpoint;
        11: IMonthlyCheckpoint;
        12: IMonthlyCheckpoint;
      };
    };
  };
}
