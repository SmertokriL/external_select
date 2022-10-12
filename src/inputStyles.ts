import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/core/styles';
import { ITheme } from './themes/theme';

export const useInputStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      position: 'relative',

      '& :before': {
        content: '""',
        position: 'absolute',
        width: '1px',
        height: '32px',
        left: 0,
        backgroundColor: theme.palette.divider
      },

      '& input::placeholder': {
        opacity: 1,
        color: theme.palette.text.secondary
      },
      '& .Mui-disabled': {
        fontWeight: 400,
        color: theme.palette.text.secondary
      },
      '&:focus': {
        background: theme.palette.common.white
      },
      '& svg': {
        fill: theme.palette.text.secondary,
        right: theme.constants.base * 3,
        width: theme.constants.base * 5,
        height: theme.constants.base * 5,
        top: `calc(50% - ${theme.constants.base * 2.5}px)`
      },

      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: 1
      },

      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
        {
          borderColor: theme.palette.colors.borderColorGrey
        },

      '& .MuiOutlinedInput-notchedOutline': {
        borderLeft: 1,
        borderRadius: '0px 4px 4px 0px'
      },

      '& :hover .MuiOutlinedInput-notchedOutline': {
        // borderLeft: '1px solid'
      }
    }
  })
);
