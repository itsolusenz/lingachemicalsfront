import ALink from '../../common/ALink';

export default function ShopBanner(props) {
    const { nogap } = props;

    return (
        <div className={`category-banner pt-0 pb-2 ${nogap ? "mb-0" : ''} `}>
            <img className="slide-bg" src="images/home/banners/banner-1.jpg" alt="banner"
                width="1500" height="320" />
            <div className="category-slide-content pt-1">
                <h2 className="m-b-3">Winter Fashion Trends</h2>
                <h3 className="text-uppercase ml-0">Up to 30% off on Jackets</h3>

                <h5 className="text-uppercase d-inline-block mb-1 pb-2">Starting at<span
                    className="coupon-sale-text font2"><sup>$</sup>199<sup>99</sup></span></h5>
                <ALink href="/shop" className="btn btn-dark btn-xl ls-0" role="button">Shop Now</ALink>
            </div>
        </div>
    )
}