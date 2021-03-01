import { Link } from "react-router-dom";

const NavBarComponent = () => {

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav>
            <Link style={ linkStyle }>
                <h3>Logo</h3>
            </Link>
            
            <ul className='nav-links'>
                <Link to='/about' style={ linkStyle }>
                    <li>About</li>
                </Link>
                <Link to='/shop' style={ linkStyle }>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBarComponent;
