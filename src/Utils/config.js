import * as bananaAbi from './ABIs/bananaAbi.json';
import * as nodeAbi from './ABIs/nodeAbi.json';
import * as LPAbi from './ABIs/LPtokenABI.json';
import {DEFAULT_NETWORK} from './network';

export const config = {
    networkId: DEFAULT_NETWORK,
    bananaAbi: bananaAbi.default,
    bananaAddress: "0x3e95540C9e64FCaC38C1B10a6045e3E8c55ac139",
    nodeAbi: nodeAbi.default,
    nodeAddress: "0xe44e2912BA5c0085B621EAEcB10c7e9e3dBE97f9",
    LPAbi: LPAbi.default,
    pairAddress: "0x7c9F916c34d51A6e015470198851e70Ee44E8A04"
};
