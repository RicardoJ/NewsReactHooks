import React from 'react';

const Header = ({titleHeader}) => {
    return ( 

        <nav className = "nav-wrapper light-blue darken-3">
            <a href = "#!" className = "brand-logo center">{titleHeader}</a>
        </nav>
     );
}
 
export default Header;