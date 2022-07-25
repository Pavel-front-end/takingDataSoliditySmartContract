import web3 from '../../../helpers/getWeb3';

const  ABI = require('./ABI.json');

export function deposit(pool: string, owner: string, _amount: string, _duration: string, _receiver: string) {
    const contractInstance = new web3.eth.Contract(ABI, pool);
    const method = contractInstance.methods.deposit(_amount, _duration, _receiver);

    return method.send({ from: owner });
}

export function withdraw(pool: string, owner: string, _depositId: string, _receiver: string) {
    const contractInstance = new web3.eth.Contract(ABI, pool);
    const method = contractInstance.methods.withdraw(_depositId, _receiver);

    return method.send({ from: owner });
}
