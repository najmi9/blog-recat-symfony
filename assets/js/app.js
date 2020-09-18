// assets/js/app.js

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false)

   useEffect(()=>{
      fetch('http://localhost:8000/api/products')
      .then(response=>response.json())
      .then(response=>{
        setProducts(response['hydra:member'])
        setLoading(true)
      })
      .catch(e=>console.log(e));
   },[]);

   return(
       <div>
       <h1> Hello World </h1>
       {!loading && (<h1>loading ... </h1>)}
        {loading && (
          <ul>
             {products.map(product=>(
                 <li key={product.id}>
                   <div>
                      <h3> {product.title} with {product.price} $ </h3>
                      <img src={product.image} alt={product.title} />
                   </div>
                 </li>
             )) }
          </ul>
        )}
      </div>
   );
}
ReactDOM.render(<App />, document.getElementById('root'));