import { useRouter } from 'next/router';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { adClass = '' } ) {
    const router = useRouter();

    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    {/* <MainMenu /> */ }
    return (
        <header className={ `header ${ router.pathname === '/' ? 'header-transparent' : '' } ${ adClass }` }>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fas fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" alt="Porto Logo" width="101" height="40" />
                        </ALink>

                        <MainMenu />
                    </div>

                    <div className="header-right">

                        <SearchForm />

                        <ALink href="/pages/login" className="header-icon header-icon-user"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon header-icon-wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>

                </div>
            </div>
        </header >
    )
}