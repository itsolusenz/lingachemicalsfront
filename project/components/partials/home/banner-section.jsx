import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

export default function BannerSection() {
    return (
        <section className="bg-gray banners-section text-center">
            <div className="container py-2">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={fadeInLeftShorter} delay={100} duration={1000} triggerOnce>
                            <div className="home-banner banner banner-sm-vw mb-2">
                                <img src="images/home/banners/home-banner1.jpg" width="419" height="629"
                                    alt="Banner" />
                                <div className="banner-layer banner-layer-bottom text-left">
                                    <h3 className="m-b-2">Sunglasses Sale</h3>
                                    <h4 className="m-b-3">See all and find yours</h4>
                                    <ALink href="/shop" className="btn  btn-dark" role="button">Shop By Glasses</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={fadeInLeftShorter} delay={100} duration={1000} triggerOnce>
                            <div className="home-banner banner banner-sm-vw mb-2">
                                <img src="images/home/banners/home-banner2.jpg" width="419" height="629"
                                    alt="Banner" />
                                <div className="banner-layer banner-layer-top ">
                                    <h3 className="mb-0">Cosmetics Trends</h3>
                                    <h4 className="m-b-4">Browse in all our categories</h4>
                                    <ALink href="/shop" className="btn  btn-dark" role="button">Shop By Glasses</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={fadeInLeftShorter} delay={100} duration={1000} triggerOnce>
                            <div className="home-banner banner banner-sm-vw mb-2">
                                <img src="images/home/banners/home-banner3.jpg" width="419" height="629"
                                    alt="Banner" />
                                <div className="banner-layer banner-layer-middle">
                                    <h3 className="text-white m-b-1">Fashion Summer Sale</h3>
                                    <h4 className="text-white m-b-4">Browse in all our categories</h4>
                                    <ALink href="/shop" className="btn btn-light bg-white" role="button">Shop By
                                        Fashion</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={fadeInLeftShorter} delay={100} duration={1000} triggerOnce>
                            <div className="home-banner banner banner-sm-vw mb-2">
                                <img src="images/home/banners/home-banner4.jpg" width="419" height="629"
                                    alt="Banner" />
                                <div className="banner-layer banner-layer-bottom banner-layer-boxed">
                                    <h3 className="m-b-2">UP TO 70% IN ALL BAGS</h3>
                                    <h4>Starting at $99</h4>
                                    <ALink href="/shop" className="btn  btn-dark" role="button">Shop By Bags</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}