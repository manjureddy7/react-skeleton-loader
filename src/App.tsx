import { useEffect, useState } from "react";
import './App.css';
import SkeletonProduct from "./features/products/SkeletonProduct";
import SkeletonPlaceholder from "./components/placeholder";
import Products from "./features/products/Products";
import SkeletonLinkedin from "./features/linkedin/SkeletonLinkedin";


function App() {
  const [ready, setReady] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8');
      const data = await response.json();
      setReady(true);
      setProducts(data);
  }, 4000);
  }, [])
  return (
    <div className="root-container">
      <div>
        <h3>Products landing page</h3>
        <SkeletonPlaceholder 
          ready={ready} 
          customPlaceholder={<SkeletonProduct iterations={8} />}
        >
          <Products products={products}/>
        </SkeletonPlaceholder>
      </div>
      <div>
        <h3>Linkedins landing page</h3>
        <SkeletonPlaceholder 
        ready={false} 
        customPlaceholder={<SkeletonLinkedin />}
        >
          <h3>Landing screen of Linkedin</h3>
        </SkeletonPlaceholder>
      </div>
    </div>
)
}

export default App
