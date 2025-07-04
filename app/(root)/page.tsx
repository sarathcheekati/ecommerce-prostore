import React from "react";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";
import { Product } from "@/types";

export const metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList
        title="Newest Arrivals"
        data={latestProducts as unknown as Product[]}
        limit={4}
      />
    </>
  );
};

export default Homepage;
