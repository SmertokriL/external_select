import React, { useState } from 'react';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { useStyles } from './styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useInputStyles } from './inputStyles';

export const App = () => {
  const [open, setOpen] = useState(false);
  const { select, formStyles, container } = useStyles();
  const input = useInputStyles();

  const [value, setValue] = useState('inn');

  const handleChange = (event: any) => {
    setValue(event.target.value);
    event.preventDefault();
  };

  return (
    <Box
      ml={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="400px"
    >
      <Grid className={container} container={true} spacing={0}>
        <Grid item={true}>
          <Select
            variant="outlined"
            className={select}
            color="primary"
            value={value}
            onChange={handleChange}
            disableUnderline={true}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              },
              getContentAnchorEl: null,
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left'
              }
            }}
          >
            <MenuItem value="inn">ИНН</MenuItem>
            <MenuItem value="inn+kpp">ИНН+КПП</MenuItem>
            <MenuItem value="crm-id">CRM-ID</MenuItem>
          </Select>
        </Grid>
        <Grid item={true}>
          <form className={formStyles}>
            <TextField
              variant="outlined"
              classes={input}
              fullWidth={true}
              placeholder="Укажите ИНН клиента"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton type="submit" size="small">
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
