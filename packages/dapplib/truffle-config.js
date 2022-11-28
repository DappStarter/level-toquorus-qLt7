require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success struggle dash shift pupil include process slot gesture'; 
let testAccounts = [
"0x0061a408f9e2feec71a18e4af5e2df7ba502958fb5681bf63e5a50ab858bb761",
"0x19d4927105ba4bf491d2926d060622ffc8c0c75860bd46951a09b0b8b724cb7f",
"0xea9c313e02ab9d01640428d6254f3f9a295b2fcb6d1d81d9d49307930b195bf4",
"0xc55a383b8a95bc0988855ee05e4045b3638fc58266371667621fcddeeea45e0a",
"0x8c597ade807292e25c96de5a0a43cd5068f282709466858b9d72c894841b5011",
"0xd8cce61bdf9c6d1691287c3e4af64e1f3695c58d9e72d241dc4ce90b1b790964",
"0xfae485136f15e2100b8ba208f8d2f3313aebdff659171bc3eaf9e8a3561db147",
"0x2e040d7ca1f5c3a051eefda61cb3dfc0f3c75ee1816b874498f7e40d93fba39e",
"0x412d0420eb7a37f085a6435048270163ad68031ae642d016cdc4d39809494c75",
"0x973e7bf00b8c29185bc8325573d6165067a5b525fc91fb23f8ce635c9c11546f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

