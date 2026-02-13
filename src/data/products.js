const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    decription: 'Auta qualidade de som com cancelamento de ruído.',
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9uZSUyMGRlJTIwb3V2aWRvfGVufDB8fDB8fHww', 
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 149.99,
    decription: 'Monitore sua saúde e notificações com estilo.',
    image: 'https://media.istockphoto.com/id/2197192316/pt/foto/smart-watch-with-with-heart-pulse-monitoring-on-screen-isolated-on-grey-digital-smartwatch.webp?a=1&b=1&s=612x612&w=0&k=20&c=WWL7uWGSR34MSOXpPrHQg99mRE9mL8ftpHWxyeR-fbg='
  },
  {
    id: 3,
    name: 'Mouse Gamer',
    price: 59.99,
    decription: 'Precisão e conforto para suas sessões de jogo.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 4,
    name: 'Teclado Mecânico',
    price: 89.99,
    decription: 'Experiência de digitação tátil e durável.',
    image: 'https://images.unsplash.com/photo-1763136469657-d4e9aea1522f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjbGFkbyUyMG1lY2FuaWNvfGVufDB8fDB8fHww'
  },
  {
    id: 5,
    name: 'Controle de Videogame',
    price: 49.99,
    decription: 'Compatível com múltiplas plataformas para diversão sem limites.',
    image: 'https://media.istockphoto.com/id/2196883403/pt/foto/3d-video-game-controller-for-sony-playstation-or-xbox-realistic-render-of-white-wireless.jpg?s=612x612&w=0&k=20&c=Sf12EtT1cr9vYNyILzy6yMZuk4i9suAZtO5jhKozQTA='
  },
  {
    id: 6,
    name: 'Notebook Gamer',
    price: 1299.99,
    decription: 'Desempenho poderoso para jogos e multitarefa.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
  }
]

export const getProducts = () => { 
  return products;
}