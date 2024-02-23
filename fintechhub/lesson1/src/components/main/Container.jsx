import Card from "./Card";

let products =
[
    {name: "Apple", price: "5$", image: "/src/assets/images/apple.jpg"},
    {name: "Banana", price: "10$", image: "/src/assets/images/banana.jpg"},
    {name: "Kiwi", price: "12$", image: "/src/assets/images/kiwi.jpg"},
    {name: "Orange", price: "8$", image: "/src/assets/images/orange.jpg"},
    // {name: "Pineapple", price: "15$"},
    // {name: "Strawberry", price: "20$"},
    // {name: "Grapes", price: "25$"},
    // {name: "Watermelon", price: "30$"},
    // {name: "Peach", price: "35$"},
    // {name: "Mango", price: "40$"},
];

function Container() 
{
  return (
    <div className="container">
        {products.map((product, index) => <Card key={index} name={product.name} price={product.price} image={product.image} />)}
    </div>
  );
}

export default Container;