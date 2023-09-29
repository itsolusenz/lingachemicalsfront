import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection() {
    return (
        <div className="feature-boxes-container pt-2">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="feature-box feature-box-simple text-center">
                            <div className="feature-box-icon">
                                <i className="sicon-earphones-alt"></i>
                            </div>

                            <div className="feature-box-content p-0">
                                <h3>Customer Support</h3>
                                <h5>Need Assistance?</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.
                                       Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="feature-box feature-box-simple text-center">
                            <div className="feature-box-icon">
                                <i className="sicon-credit-card"></i>
                            </div>

                            <div className="feature-box-content p-0">
                                <h3>SECURED PAYMENT</h3>
                                <h5>Safe & Fast</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.
                                       Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="feature-box feature-box-simple text-center">
                            <div className="feature-box-icon">
                                <i className="sicon-action-undo"></i>
                            </div>

                            <div className="feature-box-content p-0">
                                <h3>Free Returns</h3>
                                <h5>Easy & Free</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.
                                       Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="feature-box feature-box-simple text-center">
                            <div className="feature-box-icon">
                                <i className="icon-shipping"></i>
                            </div>

                            <div className="feature-box-content p-0">
                                <h3>Free Shipping</h3>
                                <h5>Orders Over $99</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.
                                       Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default React.memo(FeatureBoxSection);