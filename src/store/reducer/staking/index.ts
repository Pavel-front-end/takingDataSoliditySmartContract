import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Deposit, Pool } from 'services/contracts/View';
import { StakingState } from './types';

const initialState: StakingState = {
  error: false,
  loading: false,
  pools: [],
  deposits: []
};

const { actions, reducer } = createSlice({
  name: 'staking',
  initialState,
  reducers: {
    getPoolsRequest: (state) => {
      state.loading = true
      state.error = false
    },
    getPoolsData: (state, action: PayloadAction<{ pools: Pool[]; deposits: Deposit[] }>) => {
      state.loading = false
      state.pools = action.payload.pools
      state.deposits = action.payload.deposits
    },
    getPoolsFailure: (state) => {
      state.loading = false
      state.error = true
    },
  },
});

export { actions as StakingActions };
export default reducer;
