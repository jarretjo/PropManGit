import Fruit from "./Fruit";


export default function Fruits() {

  //const fruits = ["Apple", "Banana", "Mango", "Orange", "Pears"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍏" },
    { name: "Mango", price: 3, emoji: "🥭" },
    { name: "Banana", price: 5, emoji: "🍌" },
    { name: "Orange", price: 6, emoji: "🍊" },
    { name: "Pinabpple", price: 8, emoji: "🍍" }
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
            <Fruit 
             key={fruit.name}
             name={fruit.name} 
             price={fruit.price} 
             emoji={fruit.emoji}/>
        ))}
      </ul>
    </div>
  );
}
