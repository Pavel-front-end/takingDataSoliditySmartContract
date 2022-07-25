import { FetchedData } from "services/contracts/View";

export interface PoolState {
  data?: FetchedData;
  dataLoading: boolean;
  error: boolean;
  withdrawLoading: boolean
  withdrawError: boolean
  depositLoading: boolean
  depositError: boolean
  withdrawDepositsId: number[]
  currentLPLiquidity: number
  allowanceLoading: boolean
  allowanceError: boolean
  isApproved: boolean
  approveLoading: boolean
  approveError: boolean
  isSuccess: boolean
}