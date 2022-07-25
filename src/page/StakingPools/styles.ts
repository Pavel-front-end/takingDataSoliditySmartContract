import { makeStyles, Theme } from '@material-ui/core';
import { paletteColors } from 'theme/materialTheme';

export const useStyles = makeStyles((theme: Theme) => ({
  containerStaking: {
    margin: '60px 0 0',
    [theme.breakpoints.up('sm')]: {
      margin: '4rem 0'
    },
    ['@media (max-width:1279px)']: {
      margin: '40px 0 0'
    }
  },
  flex: {
    display: 'flex'
  },
  hCenter: {
    justifyContent: 'center'
  },
  hSpaceBetween: {
    justifyContent: 'space-between'
  },
  pb2: {
    paddingBottom: '2rem'
  },
  pl0_5: {
    paddingLeft: '0.5rem'
  },
  textCenter: {
    textAlign: 'center'
  },
  textNoData: {
    padding: '3.5rem 1rem'
  },
  containerTable: {
    padding: '80px 0',
    ['@media (max-width:1279px)']: {
      '& table': {
        display: 'none'
      },
      padding: '56px 0 68px 0'
    }
  },
  containerTableEmpty: {
    '& table': {
      boxShadow: `0px 0px 0px 1px ${theme.palette.action.disabled}`,
      background: theme.palette.action.selectedOpacity
    }
  },
  titleTable: {
    textAlign: 'center',
    paddingBottom: '40px',
    ['@media (max-width:1279px)']: {
      paddingBottom: '24px'
    }
  },
  pagination: {
    marginTop: 40,
    ['@media (max-width:1279px)']: {
      marginTop: 24
    },
    '& > ul': {
      justifyContent: 'center'
    },
    '& button': {
      borderRadius: '0.5rem'
    }
  },
  connectWallet: {
    maxWidth: 175
  },
  noWalletCell: {
    height: 125,
    textAlign: 'center'
  },
  noWalletMessage: {
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${paletteColors.darkPurple}`,
    borderRadius: 16,
    marginBottom: 80,
    padding: 30
  },
  noWalletTitle: {
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: '1.5rem'
  },
  noWalletDesc: {
    maxWidth: 636,
    marginBottom: 30,
    textAlign: 'center'
  },
  desc: {
    marginBottom: 15
  },
  noWalletLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    paddingBottom: '2px',
  }
}));
