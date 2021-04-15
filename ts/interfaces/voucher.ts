export interface IVoucher {
  voucherDate: Date;
  voucherId: string;
  voucherStatus: 'uploaded' | 'transmitted';
}
