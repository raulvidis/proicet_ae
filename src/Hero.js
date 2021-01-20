import React from 'react';
import { products } from './backend/produse';

const Hero = (props) => {
    const {
        handleLogout,
        addToCart,
        handleCart,
    } = props;
    return (
        <div className="hero is-primary">
            <nav>
                <h2>Magazin</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="hero-body container">
                <h4 className="title">Our Products</h4>
                <label>Cart: </label>
                <span>{addToCart}</span>
            </div>
            <div className="container">
                <div className="column columns is-multiline">
                    {products && products.length ? (
                        products.map((product, index) => (
                            <div className=" column is-half">
                                <div className="box">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-128x128">
                                                <img
                                                    src="https://bulma.io/images/placeholders/128x128.png"
                                                    alt={product.shortDesc}
                                                />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <b style={{ textTransform: "capitalize" }}>
                                                {product.name}{" "}
                                                <span className="tag is-primary">${product.price}</span>
                                            </b>
                                            <div>{product.shortDesc}</div>
                                            {product.stock > 0 ? (
                                                <small>{product.stock + " Available"}</small>
                                            ) : (
                                                    <small className="has-text-danger">Out Of Stock</small>
                                                )}
                                            <div className="is-clearfix">
                                                <button
                                                    className="button is-small is-outlined is-primary   is-pulled-right"
                                                    onClick={handleCart}
                                                >
                                                    Add to Cart
                                                        </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                            <div className="column">
                                <span className="title has-text-grey-light">
                                    No products found!
                                        </span>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Hero;