import { Link, useLocation } from 'react-router-dom'

function QuickNav() {
const location = useLocation();


TODO:
//Fix driten og gjør det dynamisk

return (
<div className='breadcrumbs'>

    <Link to="/" className="breadcrumb-active">
    Home
    </Link>
    <span className="breadcrumb-arrow">&gt;</span>

    <Link to="/cardlist" className={location.pathname.startsWith("/cardlist") ? "breadcrumb-active" : "breadcrumb-not-active"}>
    Cardlist
    </Link>

    <span className="breadcrumb-arrow">&gt;</span>

    <Link to="/cardlist/ar01" className={location.pathname === "/cardlist/ar01" ? "breadcrumb-active" : "breadcrumb-not-active"}>
    slug
    </Link>
    </div>
);
}

export default QuickNav;