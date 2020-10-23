import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import freeShippingImg from "./../assets/ic_shipping.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 180,
    height: 180,
  },
  link: {
    textDecoration: "none",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Link
      to={`/items/${product.id}`}
      className={classes.link}
      data-testid="productCardLink"
    >
      <Paper
        className={classes.paper}
        square
        variant="outlined"
        data-testid="productCardContainer"
      >
        <Grid container spacing={2}>
          <Grid item>
            <img
              className={classes.img}
              alt={product.title}
              src={product.picture}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={8} container direction="column" spacing={2}>
              <Grid item container spacing={2}>
                <Grid item>
                  <Typography variant="h5">
                    {product.price.currency}{" "}
                    {product.price.amount.toLocaleString()}
                    <sup>
                      {product.price.decimals > 0 && product.price.decimals}
                    </sup>
                  </Typography>
                </Grid>

                <Grid item xs>
                  {product.free_shipping && (
                    <img
                      src={freeShippingImg}
                      alt="Free Shipping"
                      data-testid="productCardProductFreeShipping"
                    />
                  )}
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  data-testid="productCardProductTitle"
                >
                  {product.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="subtitle2"
                data-testid="productCardProductCondition"
              >
                {product.condition}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default ProductCard;
