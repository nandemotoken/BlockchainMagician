
let useraddress;
let provider;
let signer;
let magicaddress;

let options = { gasPrice: 10000000000 , gasLimit: 100000};

function walletmodal(){
    $('#wallet-popup').modal('show');
}


window.onload = async function() {
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
    //$('#wallet-popup').modal('show');
    //newTorus();
    changeToMatic();
    initmetamask();
}



async function initmetamask(){
    if (window.ethereum !== undefined){
    } else {
    }
    provider = await new ethers.providers.Web3Provider(window.ethereum);
    signer = await provider.getSigner();
    useraddress = await signer.getAddress();    
    magiccontract = await new ethers.Contract( magicaddress , abi, signer );
}

let a;

async function GOX(){
    magiccontract.magicstart( options ).catch((error) => {
    });
}

async function DROP(){
    magiccontract.magicstop( options ).catch((error) => {
    });
}


async function changeToMatic(){
    let ethereum = window.ethereum;
        const data = [{
            chainId: '0x89',
            chainName: 'Matic Network',
            nativeCurrency:
                {
                    name: 'Matic',
                    symbol: 'Matic',
                    decimals: 18
                },
            rpcUrls: ['https://polygon-mainnet.infura.io/v3/bb3eef7a2041448a8e32b82bfb9b0f00'],
            blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
        }]
        /* eslint-disable */
        const tx = await ethereum.request({method: 'wallet_addEthereumChain', params:data}).catch()
}
