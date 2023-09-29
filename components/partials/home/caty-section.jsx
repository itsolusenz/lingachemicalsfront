import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import { fadeInUpShorter } from '../../../utils/data/keyframes'
import { categorySlider2 } from '../../../utils/data/slider';

export default function CategroySection() {
    return (
        <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
            <OwlCarousel adClass="owl-theme nav-image-center show-nav-hover nav-outer cats-slider" options={categorySlider2}>
                <div className="product-category media-with-lazy">
                    <ALink href={{ pathname: "/shop", query: { category: "sunglasses" } }}>
                        <figure>
                            <img
                                alt="category"
                                src="images/home/categories/category-1.jpg"
                                width="273"
                                height="273"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>Sunglasses</h3>
                            <span><mark className="count">0</mark> products</span>
                        </div>
                    </ALink>
                </div>
                <div className="product-category media-with-lazy">
                    <ALink href={{ pathname: "/shop", query: { category: "bags-1" } }}>
                        <figure>
                            <img
                                alt="category"
                                src="images/home/categories/category-2.jpg"
                                width="273"
                                height="273"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>Bags</h3>
                            <span><mark className="count">4</mark> products</span>
                        </div>
                    </ALink>
                </div>
                <div className="product-category media-with-lazy">
                    <ALink href={{ pathname: "/shop", query: { category: "electronics" } }}>
                        <figure>
                            <img
                                alt="category"
                                src="images/home/categories/category-3.jpg"
                                width="273"
                                height="273"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>Electronics</h3>
                            <span><mark className="count">8</mark> products</span>
                        </div>
                    </ALink>
                </div>
                <div className="product-category media-with-lazy">
                    <ALink href={{ pathname: "/shop", query: { category: "fashion" } }}>
                        <figure>
                            <img
                                alt="category"
                                src="images/home/categories/category-4.jpg"
                                width="273"
                                height="273"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>Fashion</h3>
                            <span><mark className="count">11</mark> products</span>
                        </div>
                    </ALink>
                </div>
                <div className="product-category media-with-lazy">
                    <ALink href={{ pathname: "/shop", query: { category: "headphone-3" } }}>
                        <figure>
                            <img
                                alt="category"
                                src="images/home/categories/category-5.jpg"
                                width="273"
                                height="273"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>Headphone</h3>
                            <span><mark className="count">3</mark> products</span>
                        </div>
                    </ALink>
                </div>
                <div className="product-category media-with-lazy">
                    <ALink href={{ pathname: "/shop", query: { category: "shoes-3" } }}>
                        <figure>
                            <img
                                alt="category"
                                src="images/home/categories/category-6.jpg"
                                width="273"
                                height="273"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>Shoes</h3>
                            <span><mark className="count">4</mark> products</span>
                        </div>
                    </ALink>
                </div>
            </OwlCarousel>
        </Reveal>
    )
}