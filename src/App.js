import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);
  useEffect(() => {
    const queryAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=f2f2746b213f4c0aa90e357e209bd944`;
      const response = await fetch(url);
      const { articles } = await response.json();

      setNews(articles);
      ;
    }
    queryAPI();
  }, [category])

  return (
    <Fragment>
      <Header
        titleHeader='Buscador de noticias'
      />
      <div className="container white">
        <Form
          setCategory={setCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
