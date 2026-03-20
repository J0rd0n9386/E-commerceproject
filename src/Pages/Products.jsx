import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../Data/products'
import { addItem } from '../Data/cartSlice'
import { removeItem } from '../Data/cartSlice'



const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

  .shop-root {
    min-height: 100vh;
    background: #f7f5f2;
    font-family: 'DM Sans', sans-serif;
    padding: 3rem 2rem;
  }

  .shop-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .shop-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: -0.02em;
    margin: 0 0 0.5rem;
  }

  .shop-header p {
    font-size: 14px;
    color: #888;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 0;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .product-card {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    animation: fadeUp 0.5s ease both;
  }

  .product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .card-img-wrap {
    position: relative;
    width: 100%;
    padding-top: 100%;
    background: #f0ede8;
    overflow: hidden;
  }

  .card-img-wrap img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .product-card:hover .card-img-wrap img {
    transform: scale(1.06);
  }

  .card-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #1a1a1a;
    color: #fff;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
  }

  .card-discount {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #e63946;
    color: #fff;
    font-size: 10px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 100px;
  }

  .card-body {
    padding: 1rem 1.25rem 1.25rem;
  }

  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-desc {
    font-size: 12px;
    color: #999;
    margin: 0 0 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-price {
    font-size: 1.1rem;
    font-weight: 500;
    color: #1a1a1a;
  }

  .card-rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #888;
  }

  .star {
    color: #f4a261;
    font-size: 13px;
  }

  .card-btn {
    width: 100%;
    margin-top: 12px;
    padding: 10px;
    background: #1a1a1a;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .card-btn:hover {
    background: #333;
  }

  .loading-wrap, .error-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    flex-direction: column;
    gap: 1rem;
  }

  .spinner {
    width: 36px;
    height: 36px;
    border: 3px solid #e0e0e0;
    border-top-color: #1a1a1a;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .loading-text {
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #999;
  }
`

const StarRating = ({ rating }) => {
  const full = Math.floor(rating)
  return (
    <div className="card-rating">
      {'★'.repeat(full)}{'☆'.repeat(5 - full)}
      <span>{rating.toFixed(1)}</span>
    </div>
  )
}

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.Product.item)
  const status = useSelector((state) => state.Product.status)
  const error = useSelector((state) => state.Product.error)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (status === 'pending') return (
    <>
      <style>{styles}</style>
      <div className="loading-wrap">
        <div className="spinner" />
        <p className="loading-text">Loading products...</p>
      </div>
    </>
  )

  if (status === 'failed') return (
    <>
      <style>{styles}</style>
      <div className="error-wrap">
        <p style={{ color: '#e63946', fontSize: '14px' }}>Error: {error}</p>
      </div>
    </>
  )

  return (
    <>
      <style>{styles}</style>
      <div className="shop-root">

        <div className="shop-header">
          <h1>Our Collection</h1>
          <p>{products.length} products available</p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <div
              className="product-card"
              key={product.id}
              style={{ animationDelay: `${(i % 12) * 0.05}s` }}
            >
              <div className="card-img-wrap">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />
                <span className="card-badge">{product.category}</span>
                {product.discountPercentage > 10 && (
                  <span className="card-discount">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>

              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-desc">{product.description}</p>

                <div className="card-footer">
                  <span className="card-price">
                    ₹{(product.price * 84).toLocaleString('en-IN')}
                  </span>
                  <StarRating rating={product.rating} />
                </div>

                <button onClick={() => dispatch(addItem())} className="card-btn">Add to Cart</button>
                <button oneClick = {() => dispatch(removeItem())} className = "card-btn">Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Products
