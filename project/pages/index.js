import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import FeaturedCollection from "../components/partials/home/featured-collection";
import IntroSection from "../components/partials/home/intro-section";
import CategroySection from "../components/partials/home/caty-section";
import BannerSection from "../components/partials/home/banner-section";
import FeatureBoxSection from "../components/partials/home/featurebox-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 12 } } );
    const featured = data && data.specialProducts.featured;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>
                <IntroSection />

                <section className="container">

                    <h2 className="section-title ls-n-15 text-center pt-2 m-b-4">Shop By Category</h2>

                    <CategroySection />

                </section>

                <BannerSection />

                <section className="container pb-3 mb-1">

                    <FeaturedCollection product={ featured } loading={ loading } />

                    <hr className="mt-3 mb-6" />

                    <FeatureBoxSection />

                </section>
            </main>

            <NewsletterModal />

        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );