import React from 'react';
import News from './New';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => {
    return (

        <div class="row">
          {news.map(notice => (
                <News 
                key ={notice.url} 
                notice = {notice}
                />
            ))}
        </div>
    );
}
NewsList.propTypes={
    news : PropTypes.array.isRequired
}

export default NewsList;