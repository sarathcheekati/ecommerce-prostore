import React from "react";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";

export const metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList title="Newest Arrivals" data={latestProducts} limit={4} />
    </>
  );
};

export default Homepage;
