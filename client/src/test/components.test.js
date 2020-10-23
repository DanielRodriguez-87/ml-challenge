import React from "react";
import { shallow } from "enzyme";

import SearchBox from "../components/SearchBox";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";

describe("SearchBox component", () => {
  it("Render component", () => {
    const wrapper = shallow(<SearchBox />);

    expect(wrapper.find('[data-testid="searchBoxContainer"]').exists()).toBe(
      true
    );
  });
});

describe("Breadcrumb component", () => {
  const categories = ["category 1", "category 2", "category 3"];

  it("Render component", () => {
    const wrapper = shallow(<Breadcrumb categories={categories} />);

    expect(wrapper.find('[data-testid="breadcrumb"]').exists()).toBe(true);
  });

  it("Component render categories", () => {
    const wrapper = shallow(<Breadcrumb categories={categories} />);

    expect(wrapper.find('[data-testid="breadcrumb"]').exists()).toBe(true);

    expect(wrapper.find('[data-testid="breadcrumb"]').children()).toHaveLength(
      categories.length
    );
  });
});

describe("Product Card component", () => {
  const product = {
    id: "MLA884864493",
    title: "Condominio - City Bell",
    price: {
      currency: "U$S",
      amount: 160000,
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_628044-MLA43826524764_102020-I.jpg",
    condition: "new",
    free_shipping: false,
  };

  it("Render component", () => {
    const wrapper = shallow(<ProductCard product={product} />);

    expect(wrapper.find('[data-testid="productCardContainer"]').exists()).toBe(
      true
    );
  });

  it("Render component with props", () => {
    const wrapper = shallow(<ProductCard product={product} />);

    expect(wrapper.find('[data-testid="productCardProductTitle"]').text()).toBe(
      product.title
    );

    expect(
      wrapper.find('[data-testid="productCardProductCondition"]').text()
    ).toBe(product.condition);

    expect(
      wrapper.find('[data-testid="productCardProductFreeShipping"]').exists()
    ).toEqual(product.free_shipping);
  });
});

describe("Product Details component", () => {
  const product = {
    id: "MLA884864493",
    title: "Condominio - City Bell",
    price: {
      currency: "U$S",
      amount: 160000,
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_628044-MLA43826524764_102020-I.jpg",
    condition: "new",
    free_shipping: false,
    sold_quantity: 0,
    description: "Modernos y destacado complejo de Duplex en El Quimilar.",
  };

  it("Render component", () => {
    const wrapper = shallow(<ProductDetails product={product} />);

    expect(
      wrapper.find('[data-testid="productDetailsContainer"]').exists()
    ).toBe(true);
  });

  it("Render component with props", () => {
    const wrapper = shallow(<ProductDetails product={product} />);

    expect(wrapper.find('[data-testid="productDetailsTitle"]').text()).toBe(
      product.title
    );

    expect(
      wrapper.find('[data-testid="productDetailsDescription"]').text()
    ).toBe(product.description);

    expect(
      wrapper.find('[data-testid="productDetailsConditionQuantity"]').text()
    ).toBe(`${product.condition} - ${product.sold_quantity} vendidos`);
  });
});
