import { NobelPrizeEntityBase } from '../NobelPrizeEntityBase';
import type { NobelPrizeSDK } from '../NobelPrizeSDK';
import type { Control } from '../types';
import type { Prize, PrizeListMatch } from '../NobelPrizeTypes';
declare class PrizeEntity extends NobelPrizeEntityBase<Prize> {
    constructor(client: NobelPrizeSDK, entopts: any);
    make(this: PrizeEntity): PrizeEntity;
    list(this: any, reqmatch?: PrizeListMatch, ctrl?: Control): Promise<PrizeEntity[]>;
}
export { PrizeEntity };
