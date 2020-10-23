import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  button: {
    backgroundColor: "#3483FA",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 680,
  },
}));

const ProductDetails = ({ product }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paper}
      square
      data-testid="productDetailsContainer"
    >
      <Grid
        item
        container
        xs={12}
        spacing={4}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
          <img
            className={classes.img}
            alt={product.title}
            src={product.picture}
          />
        </Grid>
        <Grid
          item
          container
          xs={4}
          justify="center"
          alignItems="flex-start"
          direction="column"
          spacing={2}
        >
          <Grid item xs>
            <Typography
              variant="body2"
              data-testid="productDetailsConditionQuantity"
            >
              {product.condition} - {product.sold_quantity} vendidos
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" data-testid="productDetailsTitle">
              {product.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h3">
              {product.price.currency} {product.price.amount.toLocaleString()}
              <sup style={{ fontSize: "20px" }}>
                {product.price.decimals > 0 && product.price.decimals}
              </sup>
            </Typography>
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              className={classes.button}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">Description del producto</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" data-testid="productDetailsDescription">
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
