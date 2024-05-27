import { useContext } from "react";
import PageLayout from "../components/PageLayout";
import { ProductContext } from "../context/ProductContext";

const ProductPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <PageLayout title="Product" headline="Product Page">
      {products.map((product) => {
        return <p key={product.id}>{product.name}</p>;
      })}
    </PageLayout>
  );
};

export default ProductPage;
