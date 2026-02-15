import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = getProductById(id);

  if (!product) {
    navigate("/");
    return;
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-price">{product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn btn-primary">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  );
}
