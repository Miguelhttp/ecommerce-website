import ProductCard from "../components/product-card";
import { getProducts } from "../data/products";

export default function Home() {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Bem-vindo à nossa loja online!</h1>
        <p className="home-subtitle">
          Descubra uma variedade incrível de produtos selecionados especialmente
          para você.
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Produtos em Destaque</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
