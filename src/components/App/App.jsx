import { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import css from '../Loader/Loader.module.css'
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchFoto } from '../../api';
import { SearchBar} from '../SearchBar/SearchBar';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { Loader } from '../Loader/Loader';
// ------------------------------------------------
const App = () => {
  const [foto, setFoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  
  // --------------------------------------------------
  const handleSearch = async topic => {
    setQuery(`${Date.now()}/${topic}`);
    setPage(1);
    setError(false);
    setFoto([]);
    setLoading(true);
  };
  // --------------------------------------------------------
  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchFotoGallery() {
      try {
        setLoading(true);
        // 1.Створюємо фун-ю запиту
        const data = await fetchFoto(query.split('/')[1], page);

        // 2. Записуємо дані в стан
        setFoto(prevFoto => [...prevFoto, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages !== page);
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
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />

      <ErrorMessage error={error} />
      {foto.length > 0 && <ImageGallery items={foto} />}
      
      {loading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      {foto.length > 0 && !loading && showBtn && <button onClick={handleLoadMore}>LoadMore</button>}
    </div>
  );
};

export default App;
