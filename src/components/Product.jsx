import axios from "axios";
import React, { useEffect, useState } from "react";
import { BounceLoader, ClipLoader, FadeLoader } from "react-spinners";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoader, setImageLoader] = useState(true);

  useEffect(() => {
    getProducts();
    setTimeout(()=>{
        setImageLoader(false)
    },2000)
  }, []);

  const getProducts = async () => {
    try {
      //setLoading(true);
      setError(null);
      console.log("about to start fetching");
      const response = await axios.get(
        "http://localhost:5000/api/get-all-products"
      );
      console.log("Data fetched");
      setProducts(response.data);
      console.log("Products set");
      console.log("Fetched Products:", response.data);
    } catch (err) {
      console.error("Error fetching products:", err.message);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        
        {loading && <p className="flex flex-row justify-center items-center"><ClipLoader size={10}/></p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && products.length > 0 ? (
          <div className="grid grid-cols-2 w-full h-96 justify-center space-x-2 p-5 overflow-y-scroll lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="">
                <div className="self-center">
                    {product.image_url && (
                  !imageLoader ? <><img
                    src={product.image_url}
                    alt={product.name}
                    className="w-54 h-50"
                  /></> : <ClipLoader size={12}/>
                )}
                </div>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          !loading &&
          !error &&
          products.length === 0 && <p>No products available.</p>
        )}
      </div>
    </>
  );
};

export default Product;
