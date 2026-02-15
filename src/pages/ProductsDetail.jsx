import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../hooks/use-cart";

export default function ProductsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const product = getProductById(id);

  if (!product) {
    navigate("/");
    return;
  }

  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `itens armazenado no carrinho: ${productInCart.quantity} `
    : "Carrinho vazio";

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
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Adicionar ao Carrinho
            </button>
            <p className="product-description-cart">{productQuantityLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
