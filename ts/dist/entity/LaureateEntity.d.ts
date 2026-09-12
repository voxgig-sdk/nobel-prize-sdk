import { NobelPrizeEntityBase } from '../NobelPrizeEntityBase';
import type { NobelPrizeSDK } from '../NobelPrizeSDK';
import type { Control } from '../types';
import type { Laureate, LaureateListMatch } from '../NobelPrizeTypes';
declare class LaureateEntity extends NobelPrizeEntityBase<Laureate> {
    constructor(client: NobelPrizeSDK, entopts: any);
    make(this: LaureateEntity): LaureateEntity;
    list(this: any, reqmatch?: LaureateListMatch, ctrl?: Control): Promise<LaureateEntity[]>;
}
export { LaureateEntity };
