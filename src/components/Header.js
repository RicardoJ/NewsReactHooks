import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titleHeader}) => {
    return ( 

        <nav className = "nav-wrapper light-blue darken-3">
            <a href = "#!" className = "brand-logo center">{titleHeader}</a>
        </nav>
     );
}
Header.propTypes={
    titleHeader : PropTypes.string.isRequired
}
export default Header;