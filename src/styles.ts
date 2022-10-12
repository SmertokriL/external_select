import { createStyles, makeStyles } from '@material-ui/core';
import { ITheme } from './themes/theme';

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    select: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: 1
      },
      // marginRight: '-1px',
      '& .MuiSelect-select': {
        lineHeight: '20px',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '12px',
        paddingRight: '40px'
      },
      '& .MuiPaper-root': {},
      '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '4px 0px 0px 4px',
        borderRight: 0
        // borderRightColor: 'rgba(213,213,213,0.5)'
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        // borderRight: '1px solid'
      }
    },
    formStyles: {
      width: '100%',
      '& .MuiOutlinedInput-adornedStart': {
        paddingLeft: 4 * 3
      },
      '& #search-form-input::placeholder': {
        color: 'grey',
        opacity: 1
      }
    },
    container: {}
  })
);
