import React from 'react';
import News from './News';

const NewsList = ({ news }) => {
    return (

        <div class="row">
          {news.map(notice => (
                <News />
            ))}
        </div>
    );
}

export default NewsList;