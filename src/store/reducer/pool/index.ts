import { Satellite } from '@material-ui/icons'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Deposit, FetchedData } from 'services/contracts/View'
import { PoolState } from './types'

const initialState: PoolState = {
  dataLoading: false,
  error: false,
  withdrawLoading: false,
  withdrawError: false,
  depositError: false,
  depositLoading: false,
  withdrawDepositsId: [],
  currentLPLiquidity: 0,
  allowanceError: false,
  allowanceLoading: false,
  isApproved: false,
  approveError: false,
  approveLoading: false,
  isSuccess: false,
}

const { actions, reducer } = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    poolsDataRequest: (state, action: PayloadAction<{ account: string }>) => {
      state.dataLoading = true;
      state.error = false;
    },
    poolsDataSuccess: (state, action: PayloadAction<{ data: FetchedData }>) => {
      state.data = action.payload.data;
      state.dataLoading = false;
      state.error = false;
    },
    poolsDataFailure: (state) => {
      state.dataLoading = false;
      state.error = true;
    },
    withdrawRequest: (state, action: PayloadAction<{
      pool: string;
      owner: string;
      amount: number;
      receiver: string;
      deposits: Deposit[];
      handleSuccessCallback: () => void;
      handleFailedCallback: () => void;
      handleRejectCallback: () => void
    }>) => {
      state.withdrawLoading = true
      state.withdrawError = false
    },
    addWithdrawProcessing: (state, action: PayloadAction<number>) => {
      state.withdrawDepositsId = state.withdrawDepositsId.concat([action.payload])
    },
    removeWithdrawProcessing: (state, action: PayloadAction<number>) => {
      state.withdrawDepositsId = state.withdrawDepositsId.filter(item => item !== action.payload)
    },
    withdrawSuccess: (
      state,
      action: PayloadAction<{
      isSuccess: boolean;
    }>) => {
      state.withdrawLoading = false
      state.isSuccess = action.payload.isSuccess
    },
    withdrawError: (state) => {
      state.withdrawLoading = false
      state.withdrawError = true
    },
    depositRequest: (
      state,
      action: PayloadAction<{
        pool: string;
        owner: string;
        amount: string;
        duration: string;
        receiver: string;
        isApproved: boolean;
        token: string;
        handleSuccessCallback: () => void;
        handleFailedCallback: () => void;
        handleRejectCallback: () => void
      }>) => {
      state.depositLoading = true
      state.depositError = false
    },
    depositSuccess: (
      state,
      action: PayloadAction<{
        isSuccess: boolean;
      }>) => {
      state.depositLoading = false
      state.isSuccess = action.payload.isSuccess
    },
    depositError: (state) => {
      state.depositError = true
      state.depositLoading = false
    },
    setСurrentLPLiquidity: (state, action: PayloadAction<{total: number}>) => {
      state.currentLPLiquidity = action.payload.total
    },
    checkAllowanceRequest: (state, action: PayloadAction<{
      token: string;
      owner: string;
      spender: string;
    }>) => {
      state.allowanceError = false;
      state.allowanceLoading = true;
      state.isApproved = false;
    },
    checkAllowanceSuccesss: (state, action: PayloadAction<{ status: boolean }>) => {
      state.depositLoading = false;
      state.isApproved = action.payload.status;
    },
    checkAllowanceError: (state) => {
      state.depositError = true;
      state.depositLoading = false;
    },
    approveRequest: (state) => {
      state.approveLoading = true;
      state.approveError = false;
    },
    approveSuccess: (state) => {
      state.approveLoading = false;
      state.isApproved = true;
    },
    approveError: (state) =>{
      state.approveLoading = false;
      state.approveError = true;
    },
  },
});

export { actions as PoolActions };

export default reducer;