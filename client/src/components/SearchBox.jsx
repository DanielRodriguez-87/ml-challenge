import React, { useState } from "react";
import { useHistory } from "react-router";

import logoML from "./../assets/Logo_ML.png";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    width: 53,
  },

  textField: {
    backgroundColor: "white",
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  let history = useHistory();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    history.push(`/items?search=${query}`);
  };

  const handleKeyUp = (event) => {
    if (event.charCode === 13) {
      handleSearch();
    }
  };

  return (
    <Grid item xs={12} container style={{ backgroundColor: "yellow" }} data-testid="searchBoxContainer">
      <Grid item xs={2}></Grid>
      <Grid
        item
        container
        xs={8}
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <img
            src={logoML}
            alt="ML Logo"
            className={classes.img}
            onClick={() => history.push("/")}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            className={classes.textField}
            placeholder="Nunca dejes de buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => handleKeyUp(e)}
            fullWidth
            variant="outlined"
            margin="dense"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleSearch}
                    edge="end"
                    data-testid="searchBoxFieldButton"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ "data-testid": "searchBoxField" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default SearchBox;
