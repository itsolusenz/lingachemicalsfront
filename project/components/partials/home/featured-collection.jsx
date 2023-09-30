// Import Custom Component
import ProductOne from '../../features/products/product-one';

export default function FeaturedCollection(props) {
    const { product, loading, homepage } = props;

    return (
        <>
            <h2 className={`section-title ls-n-15 text-center pb-2 m-b-4 ${homepage ? 'index-products' : ''}`}>Popular Products</h2>
            <div className="row py-4">
                {
                    loading ?
                        [0, 1, 2, 3, 4].map((item, index) =>
                            <div className="skel-pro skel-pro-grid" key={"prod-default-list" + index}></div>
                        )
                        :
                        product.map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={"propopular-list" + index}>
                                <ProductOne
                                    product={item}
                                />
                            </div>
                        ))
                }
            </div>
        </>
    );
}