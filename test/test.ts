import { expect, tap } from '@pushrocks/tapbundle';
import * as finplusInterfaces from '../ts/index';

tap.test('first test', async () => {
  console.log(finplusInterfaces.standardExport);
});

tap.start();
