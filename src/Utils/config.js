import * as bananaAbi from './ABIs/bananaAbi.json';
import * as nodeAbi from './ABIs/nodeAbi.json';
import * as LPAbi from './ABIs/LPtokenABI.json';
import {DEFAULT_NETWORK} from './network';

export const config = {
    networkId: DEFAULT_NETWORK,
    bananaAbi: bananaAbi.default,
    bananaAddress: "0xB7994060c7F170C1bF160633f295D807cbBe895F",
    nodeAbi: nodeAbi.default,
    nodeAddress: "0x4D8758556722776c3BdC9ea4597FFACa91037E8a",
    LPAbi: LPAbi.default,
    pairAddress: "0x38663aD6933efBEa6d3b9b78487b80416881522f"
};
