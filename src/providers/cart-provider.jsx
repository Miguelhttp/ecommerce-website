import { CartContext } from "../context/cart-context";
import { useState } from "react";
import { getProductById } from "../data/products";

export default function CartProvider({ children }) {
  // Qual a lógica aqui?
  // 1) A variável "cartItems" é criada para armazenar os itens do carrinho de compras.
  // Ela é inicializada como um array vazio, indicando que o carrinho de compras começa sem nenhum item.
  const [cartItems, setCartItems] = useState([]);

  // 2) A função "addToCart" é definida para adicionar um produto ao carrinho de compras.
  // Ela recebe o "productId" como parâmetro, que representa o identificador do produto a ser adicionado ao carrinho.
  const addToCart = (productId) => {
    // Verificar se o produto já está no carrinho, usando o método "find" para procurar um item com o mesmo "productId" na variável "cartItems".
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      // Se o produto já estiver no carrinho, a quantidade do item é incrementada em 1.
      const currentQuantity = existingItem.quantity;
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updatedCartItems);
    } else {
      // 3) A função "setCartItems" é chamada para atualizar o estado do carrinho de compras.
      // O estado é atualizado usando uma função de atualização que recebe o estado anterior ("prevItems") como argumento.
      // A nova lista de itens do carrinho é criada usando o operador de espalhamento ("...") para copiar os itens anteriores e adicionando o novo "productId" ao final da lista.
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  };

  // Função para Obter os itens do carrinho com os detalhes do produto
  const getCartItemsWithProduct = () => {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  };

  // Função para Atualizar a quantidade de um item no carrinho
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      // Se a quantidade for menor que 1, o item é removido do carrinho
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  // Função para Remover um item do carrinho
  const removeFromCart = (productId) => {
    // Usando o método "filter" para criar uma nova lista de itens do carrinho que exclui o item com o "productId" especificado.
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Função para fornecer o sumário do pedido, calculando o total do carrinho
  const getCartTotal = () => {
    // Utilizando o método "reduce" para iterar sobre os itens do carrinho e calcular o total.
    //  O acumulador "sum" é atualizado com o valor total de cada item, que é calculado multiplicando o preço do produto pela quantidade.
    const total = cartItems.reduce((sum, item) => {
      const product = getProductById(item.id);
      // Se o produto existir, o valor total do item é adicionado ao acumulador "sum". Caso contrário, o valor 0 é adicionado.
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  };

  const clearCart = () => { 
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProduct,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
