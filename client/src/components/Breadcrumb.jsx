import React from "react";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const Breadcrumb = ({ categories }) => {  
  return (
    <Breadcrumbs separator={">"} aria-label="breadcrumb" data-testid="breadcrumb">
      {categories.map((category) => (
        <Typography color="inherit" key={category}>{category}</Typography>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
