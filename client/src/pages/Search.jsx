import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getProductsByQuery } from "./../services/API";

import SearchBox from "./../components/SearchBox";
import Breadcrumb from "./../components/Breadcrumb";
import ProductCard from "./../components/ProductCard";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const initialStatePage = { loading: true, error: false };

const Search = () => {
  const search = new URLSearchParams(useLocation().search).get("search");

  const [result, setResult] = useState({});
  const [statePage, setStatePage] = useState(initialStatePage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatePage(() => ({ ...initialStatePage }));

        const products = await getProductsByQuery(search);

        setResult(products.data);

        setStatePage((prev) => ({ ...prev, loading: false }));
      } catch (error) {
        setStatePage({ error: true, loading: false });
        setResult({});
      }
    };

    fetchData();
  }, [search]);

  return (
    <Grid container spacing={3}>
      <SearchBox />
      <Grid item xs={2}></Grid>
      <Grid item container spacing={2} xs={8}>
        <Grid item xs={12}>
          {result.categories && <Breadcrumb categories={result.categories} />}
        </Grid>
        <Grid item xs={12}>
          {result.items &&
            result.items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </Grid>
        <Grid item xs={12}>
          {statePage.loading && <CircularProgress />}
          {statePage.error && (
            <Typography variant="h3" color="textSecondary">
              Por favor intente de nuevo
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          {!statePage.loading && !result && (
            <Typography
              variant="h3"
              color="textSecondary"
              data-testid="searchNoResults"
            >
              No se encontraron productos
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Search;
