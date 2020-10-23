const axios = require("./../config/axios");

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

const getCurrency = async (price, currency_id) => {
  const {
    data: { symbol, decimal_places },
  } = await axios.get(`/currencies/${currency_id}`);

  const [entero, decimal] = parseFloat(price.toString())
    .toFixed(decimal_places)
    .split(".");

  return {
    currency: symbol,
    amount: parseInt(entero),
    decimals: parseInt(decimal || "0"),
  };
};

exports.getProductsByQuery = catchAsync(async (req, res, next) => {
  const query = req.query.q;

  if (query === undefined) {
    res.status(400);
    throw new Error();
  }

  const {
    data: { results, filters, available_filters },
  } = await axios.get("/sites/MLA/search", {
    params: { q: query, limit: 4 },
  });

  let categories = [];

  if (filters && filters.length > 0) {
    filters.map((filter) => {
      if (filter.id === "category") {
        categories = filter.values[0].path_from_root.map((path) => path.name);
      }
    });
  }

  if (categories && categories.length === 0) {
    available_filters.map((filter) => {
      if (filter.id === "category") {
        let categoryList = filter.values.map((value) => value);

        categoryList.sort((a, b) => parseInt(b.results) - parseInt(a.results));

        categories.push(categoryList[0].name);
      }
    });
  }

  const items = await Promise.all(
    results.map(async (item) => {
      return {
        id: item.id,
        title: item.title,
        price: await getCurrency(item.price, item.currency_id),
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    })
  );

  if (categories.length === 0 || items.length === 0) {
    res.status(204);
    throw new Error();
  }

  const products = {
    author: req.body.author,
    categories,
    items,
  };

  res.status(200).json(products);
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const {
    data: {
      id,
      title,
      price,
      thumbnail,
      condition,
      shipping: { free_shipping },
      sold_quantity,
      category_id,
      currency_id,
    },
  } = await axios.get(`/items/${req.params.id}`);

  const {
    data: { plain_text },
  } = await axios.get(`/items/${req.params.id}/description`);

  const {
    data: { path_from_root },
  } = await axios.get(`/categories/${category_id}`);

  const categories = path_from_root.map((category) => category.name);

  const product = {
    author: req.body.author,
    categories,
    item: {
      id,
      title,
      price: await getCurrency(price, currency_id),
      picture: thumbnail,
      condition,
      free_shipping,
      sold_quantity,
      description: plain_text,
    },
  };

  res.status(200).json(product);
});
