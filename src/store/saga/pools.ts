import { put, select } from 'redux-saga/effects';
import web3 from 'helpers/getWeb3';

import TokenABI from 'services/contracts/TimeLockPool/ABI.json';
import ERC20ABI from 'services/contracts/ERC20/ABI.json';
import { PoolActions } from 'store/reducers/pool';
import { SnackbarActions } from 'store/reducers/snackbar';
import BigNumber from 'bignumber.js';
import { StakingActions } from 'store/reducers/staking';

export function* depositSaga(action: ReturnType<typeof PoolActions.depositRequest>) {
  const { pool, owner, amount, duration, receiver, token, handleSuccessCallback, handleFailedCallback, handleRejectCallback } = action.payload;

  try {
    const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed();

    //@ts-ignore
    const erc20Contract = new web3.eth.Contract(ERC20ABI, token);

    //@ts-ignore
    const data = yield erc20Contract.methods.allowance(owner, pool).call()
    const isApproved = !!+data

    if (!isApproved) {
      yield put(PoolActions.approveRequest())
      //@ts-ignore
      const tx = yield erc20Contract.methods.approve(pool, MAX_UINT256).send({ from: owner })

      if (tx.status) {
        yield put(PoolActions.approveSuccess())
      }
    }

    //@ts-ignore
    const tokenContract = yield new web3.eth.Contract(TokenABI, pool);

    const depositValue = new BigNumber(amount).times(new BigNumber(10).pow(18)).toFixed();

    yield tokenContract.methods.deposit(depositValue, duration, receiver).send({ from: owner })

    yield put(PoolActions.depositSuccess({isSuccess: false}))
    yield put(SnackbarActions.showNotification({ type: 'success', message: 'Deposit was successful' }))
    yield put(StakingActions.getPoolsRequest())
    handleSuccessCallback()
  } catch (error: any) {
    if (error.code === 4001) {
      handleRejectCallback()
    } else {
      handleFailedCallback()
    }
    console.log(error)
    //@ts-ignore
    const erc20Contract = new web3.eth.Contract(ERC20ABI, token);
    //@ts-ignore
    const data = yield erc20Contract.methods.allowance(owner, pool).call()
    const isApproved = !!+data
    if (!isApproved) {
      yield put(PoolActions.approveError())
    }

    yield put(PoolActions.depositError())
    yield put(SnackbarActions.showNotification({ type: 'error', message: 'Deposit was failed' }))
  }
}
