import {useState, useEffect} from "react";

function ProductDescription(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data=>console.log(data))
        .then(data=>setProducts(data))
    });
    return(
        <div className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">      
        {products.map(e=><Card key={e.id} title={e.title} paragraph={e.description} image={e.image} model={e.price}/>)}
        </div>
    );
}
export default ProductDescription;