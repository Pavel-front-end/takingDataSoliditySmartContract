import React from 'react';
import {Typography, Box} from '@material-ui/core';
import {useSelector} from 'react-redux';

const StakingPools = () => {

  const title = 'Staking Pools';
  const {pools} = useSelector((state) => state.staking);

  return (
    <Box>
      <Box>
        <Typography variant="h2">{title}</Typography>
      </Box>
      <Box>
        {pools.map((pool) => <p>{pool.deposits.amount}</p>)}
      </Box>
    </Box>
  );
};

export default StakingPools;
