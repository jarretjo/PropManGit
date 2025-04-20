export default function Fruits() {
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Pears"];
    return ( <div>
        <ul>
         {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
         ))}
         </ul>
    </div>
    )
}