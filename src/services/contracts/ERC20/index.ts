import web3 from '../../../helpers/getWeb3';

const  ABI = require('./ABI.json');

export async function approve(token: string, owner: string, spender: string, value: string) {
    const contractInstance = new web3.eth.Contract(ABI, token);
    const method = contractInstance.methods.approve(spender, value);

    return method.send({ from: owner });
}

export async function allowance(token: string, owner: string, spender: string) {
    const contractInstance = new web3.eth.Contract(ABI, token);
    const method = contractInstance.methods.allowance(owner, spender);

    return method.call() as string;
}