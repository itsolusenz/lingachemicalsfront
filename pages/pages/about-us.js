import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";
import { countTo } from '../../utils';

export default function AboutUs () {
    useEffect( () => {
        countTo();
    }, [] )

    return (
        <main className="main about">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item"><ALink href="#">Pages</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="container">
                <div className="page-header pt-3 bg-transparent">
                    <div className="container text-left">
                        <h1 className="font4 text-uppercase">The New Way to Success</h1>
                    </div>
                </div>

                <div className="container">
                    <h2 className="page-intro font-weight-normal">Who we are</h2>
                    <div className="row row-bg">
                        <div className="col-md-6">
                            <p className="mb-2">Aliquam consectetur et lorem semper scelerisque. Proin est nibh, vestibulum
                            vitae congue
                            nec,
                            tristique eu justo. Maecenas eu nunc lacinia, porta lorem vitae, viverra velit. Nulla
                            dolor
                            libero, rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus porttitor odio sodales
                            pulvinar. Sed gravida nulla sed sapien vulputate, eget malesuada justo egestas.
                            Pellentesque
                            sem mi, vulputate ac iaculis sit amet, sagittis feugiat dui. Proin non pellentesque leo.
                                Vestibulum varius laoreet posuere. Etiam fringilla diam odio.</p>

                            <p>Nulla felis nibh, bibendum a leo ut, egestas ornare felis. Nam pretium mauris justo, eget
                            commodo est fringilla vel. Proin condimentum, lacus sit amet finibus gravida, sapien
                            ligula
                            mattis leo, sit amet mattis leo lacus sit amet lectus. Nulla facilisi. Etiam porta
                            iaculis
                            velit id pulvinar. Sed dolor odio, eleifend eget aliquam vitae, efficitur vitae dolor.
                            Integer ornare neque ac leo sollicitudin, at vestibulum ante scelerisque. Nullam ut elit
                            sed
                            lorem tempus feugiat in et lectus. Mauris interdum molestie placerat. Nullam dolor nunc,
                            elementum et tincidunt id, vestibulum quis turpis. Integer imperdiet a eros a laoreet.
                            Nam
                            mattis vel ligula non imperdiet. Suspendisse potenti. Fusce purus sem, dapibus eu
                            fermentum
                                eget, aliquam vehicula ligula.</p>
                        </div>

                        <div className="col-md-6">
                            <p className="mb-2">Quisque congue dignissim dui sed luctus. Morbi nec mi vitae magna finibus
                            ullamcorper.
                            Etiam
                            mattis blandit convallis. Suspendisse eu elementum leo. Vestibulum molestie nunc et
                            efficitur egestas. Vivamus arcu lectus, laoreet vel consectetur bibendum, elementum non
                            nunc. Proin porttitor velit odio, ac mattis quam tincidunt eget. Fusce semper nunc eget
                            efficitur efficitur. Nam ullamcorper, enim id tincidunt feugiat, velit mauris fermentum
                            nulla, at tempor eros turpis sit amet massa. Ut a semper lectus, sed hendrerit risus. In
                            hac
                            habitasse platea dictumst. Curabitur venenatis cursus posuere. Praesent turpis nisi,
                            aliquam
                            at facilisis non, sagittis vel urna. Donec diam lorem, feugiat vitae laoreet in,
                            sagittis a
                                lorem.</p>

                            <p>Aliquam consectetur et lorem semper scelerisque. Proin est nibh, vestibulum vitae congue
                            nec,
                            tristique eu justo. Maecenas eu nunc lacinia, porta lorem vitae, viverra velit. Nulla
                            dolor
                            libero, rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus porttitor odio sodales
                            pulvinar. Sed gravida nulla sed sapien vulputate, eget malesuada justo egestas.
                            Pellentesque
                            sem mi, vulputate ac iaculis sit amet, sagittis feugiat dui. Proin non pellentesque leo.
                                Vestibulum varius laoreet posuere. Etiam fringilla diam odio.</p>
                        </div>
                    </div>
                </div>

                <div className="history-section pb-3">
                    <div className="container">
                        <h1 className="page-title font4">OUR HISTORY</h1>
                        <div className="row row-bg">
                            <div className="col-xl-5 col-lg-6">
                                <OwlCarousel adClass="about-slider owl-carousel owl-theme dots-simple" options={ {
                                    nav: false,
                                    dots: true
                                } }>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-1.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-2.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-3.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <h2>2014</h2>
                                <p className="mb-2">Aliquam consectetur et lorem semper scelerisque. Proin est nibh,
                                vestibulum vitae
                                congue
                                nec, tristique eu justo. Maecenas eu nunc lacinia, porta lorem vitae, viverra velit.
                                Nulla dolor libero, rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus
                                porttitor
                                odio sodales pulvinar. Sed gravida nulla sed sapien vulputate, eget malesuada justo
                                egestas. Pellentesque sem mi, vulputate ac iaculis sit amet, sagittis feugiat dui.
                                Proin
                                non pellentesque leo. Vestibulum varius laoreet posuere. Etiam fringilla diam odio.
                                </p>

                                <p>Nulla felis nibh, bibendum a leo ut, egestas ornare felis. Nam pretium mauris justo,
                                eget
                                commodo est fringilla vel. Proin condimentum, lacus sit amet finibus gravida, sapien
                                ligula mattis leo, sit amet mattis leo lacus sit amet lectus. Nulla facilisi. Etiam
                                porta iaculis velit id pulvinar. Sed dolor odio, eleifend eget aliquam vitae,
                                efficitur
                                vitae dolor. Integer ornare neque ac leo sollicitudin, at vestibulum ante
                                scelerisque.
                                Nullam ut elit sed lorem tempus feugiat in et lectus. Mauris interdum molestie
                                placerat.
                                Nullam dolor nunc, elementum et tincidunt id, vestibulum quis turpis. Integer
                                imperdiet
                                a eros a laoreet. Nam mattis vel ligula non imperdiet. Suspendisse potenti. Fusce
                                purus
                                    sem, dapibus eu fermentum eget, aliquam vehicula ligula.</p>
                            </div>
                        </div>

                        <div className="row row-bg">
                            <div className="col-xl-5 col-lg-6">
                                <OwlCarousel adClass="about-slider owl-carousel owl-theme dots-simple" options={ {
                                    nav: false,
                                    dots: true
                                } }>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-2.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-3.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-1.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="col-xl-7 col-lg-6 order-lg-first">
                                <h2>2015</h2>
                                <p className="mb-2">Aliquam consectetur et lorem semper scelerisque. Proin est nibh,
                                vestibulum vitae
                                congue
                                nec, tristique eu justo. Maecenas eu nunc lacinia, porta lorem vitae, viverra velit.
                                Nulla dolor libero, rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus
                                porttitor
                                odio sodales pulvinar. Sed gravida nulla sed sapien vulputate, eget malesuada justo
                                egestas. Pellentesque sem mi, vulputate ac iaculis sit amet, sagittis feugiat dui.
                                Proin
                                non pellentesque leo. Vestibulum varius laoreet posuere. Etiam fringilla diam odio.
                                </p>

                                <p>Nulla felis nibh, bibendum a leo ut, egestas ornare felis. Nam pretium mauris justo,
                                eget
                                commodo est fringilla vel. Proin condimentum, lacus sit amet finibus gravida, sapien
                                ligula mattis leo, sit amet mattis leo lacus sit amet lectus. Nulla facilisi. Etiam
                                porta iaculis velit id pulvinar. Sed dolor odio, eleifend eget aliquam vitae,
                                efficitur
                                vitae dolor. Integer ornare neque ac leo sollicitudin, at vestibulum ante
                                scelerisque.
                                Nullam ut elit sed lorem tempus feugiat in et lectus. Mauris interdum molestie
                                placerat.
                                Nullam dolor nunc, elementum et tincidunt id, vestibulum quis turpis. Integer
                                imperdiet
                                a eros a laoreet. Nam mattis vel ligula non imperdiet. Suspendisse potenti. Fusce
                                purus
                                    sem, dapibus eu fermentum eget, aliquam vehicula ligula.</p>
                            </div>
                        </div>

                        <div className="row row-bg">
                            <div className="col-xl-5 col-lg-6">
                                <OwlCarousel adClass="about-slider owl-carousel owl-theme dots-simple" options={ {
                                    nav: false,
                                    dots: true
                                } }>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-3.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-2.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                    <div className="about-slider-item">
                                        <LazyLoadImage src="images/home/about/img-1.jpg" alt="About image description" width="520" height="338" />
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <h2>2016</h2>
                                <p className="mb-2">Aliquam consectetur et lorem semper scelerisque. Proin est nibh,
                                vestibulum vitae
                                congue
                                nec, tristique eu justo. Maecenas eu nunc lacinia, porta lorem vitae, viverra velit.
                                Nulla dolor libero, rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus
                                porttitor
                                odio sodales pulvinar. Sed gravida nulla sed sapien vulputate, eget malesuada justo
                                egestas. Pellentesque sem mi, vulputate ac iaculis sit amet, sagittis feugiat dui.
                                Proin
                                non pellentesque leo. Vestibulum varius laoreet posuere. Etiam fringilla diam odio.
                                </p>

                                <p>Nulla felis nibh, bibendum a leo ut, egestas ornare felis. Nam pretium mauris justo,
                                eget
                                commodo est fringilla vel. Proin condimentum, lacus sit amet finibus gravida, sapien
                                ligula mattis leo, sit amet mattis leo lacus sit amet lectus. Nulla facilisi. Etiam
                                porta iaculis velit id pulvinar. Sed dolor odio, eleifend eget aliquam vitae,
                                efficitur
                                vitae dolor. Integer ornare neque ac leo sollicitudin, at vestibulum ante
                                scelerisque.
                                Nullam ut elit sed lorem tempus feugiat in et lectus. Mauris interdum molestie
                                placerat.
                                Nullam dolor nunc, elementum et tincidunt id, vestibulum quis turpis. Integer
                                imperdiet
                                a eros a laoreet. Nam mattis vel ligula non imperdiet. Suspendisse potenti. Fusce
                                purus
                                    sem, dapibus eu fermentum eget, aliquam vehicula ligula.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3"></div>
            </div>
        </main>
    )
}