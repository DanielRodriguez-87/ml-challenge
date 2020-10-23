import React, { useEffect, useState } from "react";

import { getProductById } from "./../services/API";

import SearchBox from "./../components/SearchBox";
import Breadcrumb from "./../components/Breadcrumb";
import ProductDetails from "./../components/ProductDetails";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const initialStatePage = { loading: true, error: false };

const Product = (props) => {
  const { id } = props.match.params;

  const [product, setProduct] = useState({});
  const [statePage, setStatePage] = useState(initialStatePage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatePage(() => ({ ...initialStatePage }));

        const response = await getProductById(id);

        setProduct(response.data);

        setStatePage((prev) => ({ ...prev, loading: false }));
      } catch (error) {
        setStatePage({ error: true, loading: false });

        setProduct({});
      }
    };

    fetchData();
  }, [id]);

  return (
    <Grid container spacing={3}>
      <SearchBox />
      <Grid item xs={2}></Grid>
      <Grid item container spacing={2} xs={8}>
        <Grid item xs={12}>
          {product.categories && <Breadcrumb categories={product.categories} />}
        </Grid>
        <Grid item xs={12}>
          {product.item && <ProductDetails product={product.item} />}
        </Grid>
        <Grid item xs={12}>
          {statePage.loading && <CircularProgress />}
          {statePage.error && (
            <Typography variant="h3" color="textSecondary" data-testid='productNoResult'>
              Por favor intente de nuevo
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Product;
