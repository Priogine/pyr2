import * as bananaAbi from './ABIs/bananaAbi.json';
import * as nodeAbi from './ABIs/nodeAbi.json';
import * as LPAbi from './ABIs/LPtokenABI.json';
import {DEFAULT_NETWORK} from './network';

export const config = {
    networkId: DEFAULT_NETWORK,
    bananaAbi: bananaAbi.default,
    bananaAddress: "0x553A0029F230eE8E9033c2a069F80D6eC2759801",
    nodeAbi: nodeAbi.default,
    nodeAddress: "0xb6a2c5826d64A9B876F2Cb467Ba029495616D5f9",
    LPAbi: LPAbi.default,
    pairAddress: "0x7FA74Fe31e3EAFf4fEEc8f35fb793af1b0A4e5f3"
};
