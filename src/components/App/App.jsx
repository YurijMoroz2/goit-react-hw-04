import { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
// import axios from 'axios';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchFoto } from '../../api';
import { SearchForm } from '../SearchBar/SearchBar';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
// import Modal from 'react-modal';
import { Loader } from '../Loader/Loader';

const App = () => {
  // ------------------------------------------------
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  // console.log(articles);

  // --------------------------------------------------
  const handleSearch = async topic => {
    setQuery(`${Date.now()}/${topic}`);
    setPage(1);
    setError(false);
    setArticles([]);
    setLoading(true);
    // -------------------
  };
  // --------------------------------------------------------
  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchFotoGallery() {
      // console.log(query, page);
      try {
        // setArtic  les([])
        setLoading(true);
        const data = await fetchFoto(query.split('/')[1], page);

        // console.log(data);
        // ------------------------
        // 2. Записуємо дані в стан
        setArticles(prevArticles => [...prevArticles, ...data]);
        // setArticles( data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    // 3.Визиваємо фун-ю запиту
    fetchFotoGallery();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    // console.log(page);
  };

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      <Toaster />

      <ErrorMessage error={error} />
      {articles.length > 0 && <ImageGallery items={articles} />}

      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {articles.length > 0 && !loading && <button onClick={handleLoadMore}>LoadMore</button>}
    </div>
  );
};

export default App;
