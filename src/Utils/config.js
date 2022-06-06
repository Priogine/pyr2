import * as bananaAbi from './ABIs/bananaAbi.json';
import * as nodeAbi from './ABIs/nodeAbi.json';
import * as LPAbi from './ABIs/LPtokenABI.json';
import {DEFAULT_NETWORK} from './network';

export const config = {
    networkId: DEFAULT_NETWORK,
    bananaAbi: bananaAbi.default,
    bananaAddress: "0x3D7258de4A5bCd38f34b341d689fDE18d5C9B98e",
    nodeAbi: nodeAbi.default,
    nodeAddress: "0xE0995777B95e766358d3b12F3A42f88635211931",
    LPAbi: LPAbi.default,
    pairAddress: "0xDD23918Ac15830554b39cf723a6bd247aEA6C6c1"
};
