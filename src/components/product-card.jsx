import { Link } from "react-router-dom";
import { useCart } from "../hooks/use-cart";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  // Verificar se o produto já está no carrinho,
  // usando o método "find" para procurar um item com o mesmo "productId" na variável "cartItems".
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <div className="product-card">
      <img src={product.image} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            Ver Detalhes
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Adicionar ao carrinho {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
