import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const Product = ({ searchedProducts, queryMessage }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoader, setImageLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize(); // Set on load
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getProducts();
    setTimeout(() => {
      setImageLoader(false);
    }, 2000);
  }, [queryMessage]);

  const getProducts = async () => {
    try {
      setError(null);
      const response = await axios.get(
        "http://localhost:5000/api/get-all-products"
      );
      setProducts(
        searchedProducts.length === 0 ? response.data : searchedProducts
      );
      setCurrentPage(1); // reset to first page
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleCart = () =>{
    //alert("Product added to cart !")
  }

  return (
    <div>
      {loading && (
        <p className="flex justify-center items-center">
          <ClipLoader size={10} />
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && currentProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 edu-nsw-act-hand-pre-new">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-xl bg-white shadow-xl border-2 border-gray-400 shadow-purple-400 transition-transform hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="w-full h-40 flex items-center justify-center bg-gray-50">
                  {product.image_url && !imageLoader ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="flex justify-center items-center h-full">
                      <ClipLoader size={20} />
                    </div>
                  )}
                </div>

                {/* Always visible content */}
                <div className="p-4 text-center">
                  <h3 className="text-md font-semibold text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">₹{product.price}</p>
                </div>

                {/* Hidden on default, show on hover */}
                <div className="absolute inset-0 bg-black/85 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-200 text-sm">₹{product.price}</p>
                  <p className="text-gray-200 text-sm mt-2">
                    Category: {product.category || "N/A"}
                  </p>
                  <p className="text-gray-200 text-sm mt-1">
                    {product.description?.slice(0, 80) ||
                      "No description available."}
                  </p>
                  <button 
                  className="bg-green-500 hover:bg-green-600 p-2 text-sm rounded font-semibold cursor-pointer">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination with Previous and Next */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        !loading &&
        !error &&
        products.length === 0 && (
          <p className="text-center mt-5 text-gray-600">No products found.</p>
        )
      )}
    </div>
  );
};

export default Product;
