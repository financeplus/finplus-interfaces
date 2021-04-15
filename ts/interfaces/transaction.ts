import { IVoucher } from "./voucher";

export interface IFinplusTransaction {
  finplusTransactionId: string;
  data: {
    finplusPaymentAccountId: string;
    originTransactionId: string;
    originAccountId: string;
    additionalIds: string[];
    date: number;
    amount: number;
    description: string;
    name: string;
    voucherData?: IVoucher;
    justForLooks?: {
      paymentAcountName: string;
      voucherSizeInMB: number;
      dateIso?: string;
    };
  };
}