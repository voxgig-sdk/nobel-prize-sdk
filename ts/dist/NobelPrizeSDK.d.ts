import { LaureateEntity } from './entity/LaureateEntity';
import { PrizeEntity } from './entity/PrizeEntity';
export type * from './NobelPrizeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NobelPrizeEntityBase } from './NobelPrizeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class NobelPrizeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Laureate(entopts?: Record<string, any>): LaureateEntity;
    Prize(entopts?: Record<string, any>): PrizeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): NobelPrizeSDK;
    tester(testopts?: any, sdkopts?: any): NobelPrizeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof NobelPrizeSDK;
export { stdutil, config, BaseFeature, NobelPrizeEntityBase, NobelPrizeSDK, SDK, };
