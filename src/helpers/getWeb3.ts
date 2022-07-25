import Web3 from 'web3';

declare const window: any;

// let urEthProvider = `${ethInfuraTestnetNode}${process.env.REACT_APP_INFURA_PROJECT_ID}`;

const getWeb3 = () => {
  const web3 = new Web3(Web3.givenProvider);

  if (window.ethereum) {
    return new Web3(window.ethereum);
  }

  return web3;
};

const web3 = getWeb3();

export default web3;
