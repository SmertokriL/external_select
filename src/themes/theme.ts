import { createTheme, Theme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { ZIndex } from '@material-ui/core/styles/zIndex';
import orange from '@material-ui/core/colors/orange';
import {
  LIGHT1,
  MOUNTAIN3,
  MOUNTAIN1,
  DARK1,
  FOREST2,
  FOREST3,
  FOREST1,
  FLAME2,
  FLAME3,
  SUN2,
  SUN3,
  SUN1,
  FLAME1,
  MOUNTAIN2,
  SKY3,
  SKY2
} from './colors';

const MuiBackdropBackgroundColor: string = 'rgba(255, 255, 255, 0.5)';

interface IPalette extends Palette {
  colors: {
    expiresTask: string;
    muiBackdropBackgroundColor: string;
    borderColorGrey: string;
  };
}

interface IZIndex extends ZIndex {
  notFoundPage?: number;
}

interface IConstants {
  base: number;
  sideBarWidth: number;
}

export interface ITheme extends Theme {
  palette: IPalette;
  zIndex: IZIndex;
  constants: IConstants;
}

/**
 * Тема приложения.
 */
export const theme = createTheme({
  palette: {
    common: {
      black: DARK1,
      white: LIGHT1
    },
    text: {
      primary: DARK1,
      secondary: MOUNTAIN1
    },
    primary: {
      light: FOREST3,
      main: FOREST2,
      dark: FOREST1,
      contrastText: LIGHT1
    },
    secondary: {
      main: FLAME2
    },
    error: {
      light: FLAME3,
      main: FLAME2,
      dark: FLAME1
    },
    warning: {
      light: SUN3,
      main: SUN2,
      dark: SUN1
    },
    info: {
      light: SKY3,
      main: SKY2
    },
    colors: {
      expiresTask: orange[500],
      muiBackdropBackgroundColor: MuiBackdropBackgroundColor,
      borderColorGrey: MOUNTAIN2
    },
    background: {
      default: MOUNTAIN3
    }
  },
  constants: {
    base: 4,
    sideBarWidth: 92
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700, fontSize: 20, lineHeight: '23px' },
    h3: { fontWeight: 700, fontSize: 18, lineHeight: '21px' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.43
    },
    button: {
      height: 32,
      textTransform: 'none'
    }
  },
  zIndex: {
    notFoundPage: 1501
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 8
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
    MuiOutlinedInput: {
      input: {
        height: '1.429em',
        padding: '6px 12px'
      }
    },
    MuiInputBase: {
      root: {
        '&$disabled': {
          backgroundColor: MOUNTAIN3
        }
      }
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0
      }
    },
    MuiMenuItem: {
      root: {
        display: 'block'
      },
      gutters: {
        paddingLeft: 16,
        paddingRight: 16
      }
    },
    MuiTabs: {
      root: {
        minHeight: 36
      }
    },
    MuiTab: {
      root: {
        minHeight: 36
      }
    },
    MuiFormControlLabel: {
      root: {
        color: DARK1
      },
      label: {
        '&.Mui-disabled': {
          color: MOUNTAIN1
        }
      }
    },
    MuiDivider: {
      root: {
        background: MOUNTAIN2
      }
    }
  }
} as unknown as ITheme);
