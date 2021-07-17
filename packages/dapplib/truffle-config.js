require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stove renew noble honey hidden close army genuine'; 
let testAccounts = [
"0x89f847985492b4362a6e0c1a42494e780218de9a944080ce6f940eca5deda963",
"0x8dae0392cb1e885e5e1cd98ca539a0ead10fac1ef1a4a24a8edc528346ee7c49",
"0x7f44fa6f148242d8858570817f9cb075167d9cb425c1d8dfeba96f59fe3f297b",
"0x46828056057b6397e1266c4e1684bf5214f34f79278cf8b4eb4b1a7d6dbf85d5",
"0xae097cce457a4abcc57f10e05ca682df7b5305ef53e4fd6ce84759b6deedbed5",
"0x82368a5dd65d504c19dca4c5552b412131279c34805db12def5bc5359a1e00f3",
"0x12dec28a51a18b0f04dedbb03238658095dff0270de913f0c2a1d1bbce46b11b",
"0x92b29dd10bd3a54cfa6a8cfe326a317b385bd96d457ec59cdba782223ee9d793",
"0x1bc846137de3262192ecfe9b5a01a6d0d03c32809a3481f98bee1ff783f7012e",
"0xbab089e0ad3890927e0ddeadd927c2fdd6431e2b5a9a44a4b207989b0304d093"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


