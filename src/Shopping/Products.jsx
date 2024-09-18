function Products({ product }) {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }

export default Products;