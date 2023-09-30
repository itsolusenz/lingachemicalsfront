import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider owl-theme show-nav-hover nav-big" options={{
            nav: true,
            dots: false,
            loop: false,
            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']
        }}>
            <div className="home-slide home-slide1 banner d-flex align-items-center">
                <LazyLoadImage
                    className="slide-bg"
                    alt="slider image"
                    src="images/home/slider/slide1.jpg"
                />
                <div className="banner-layer">
                    <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000}>
                        <h2>Winter Fashion Trends</h2>
                        <h3 className="text-uppercase mb-0">Get up to 30% off</h3>
                        <h4 className="m-b-4">on Jackets</h4>

                        <h5 className="text-uppercase">Starting at<span
                            className="coupon-sale-text"><sup>$</sup>199<sup>99</sup></span></h5>
                        <ALink href="/shop" className="btn btn-dark btn-xl" role="button">Shop Now</ALink>
                    </Reveal>
                </div>
            </div>
            <div className="home-slide home-slide2 banner d-flex align-items-center">
                <LazyLoadImage
                    className="slide-bg"
                    alt="slider image"
                    src="images/home/slider/slide2.jpg"
                />
                <div className="banner-layer text-uppercase">
                    <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                        <h2 className="text-transform-none">New Season Hats </h2>
                        <h3 className="text-uppercase rotated-upto-text mb-0"><small>Up to</small>20% off</h3>

                        <hr className="short-thick-divider mb-sm-0 mb-1" />

                        <div>
                            <h5 className="text-uppercase d-inline-block mb-2 mb-sm-0">Starting at <span>$<em>19</em>99</span></h5>
                            <ALink href="/shop" className="btn btn-dark btn-xl btn-icon-right" role="button">Shop Now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    )
}