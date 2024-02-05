import { useState, useEffect } from 'react';
import './App.css';
import  { Toaster } from 'react-hot-toast';
// import axios from 'axios';
import { ArticleList } from '../ImageGallery/ImageGallery';
import { fetchArticlesWithTopic } from '../../api';
import { SearchForm } from '../SearchBar/SearchBar';
import Modal from 'react-modal';
import {Loader} from 'react-loader-spinner';

const App = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  // console.log(articles);
  // npm install react-loader-spinner --save
  useEffect(() => {
    // Симулюємо завантаження зображень
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = (articles) => {
    setModalIsOpen(true);
    return(
    <div>
    {/* Використовуємо URL зображення в вашому коді JSX */}
    <img src={articles[0].urls.small} alt={articles.slug} width='250' height='250'/>
  </div>

    )
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
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
    // 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      console.log(query, page);
      try {
        // setArtic  les([])
        setLoading(true);
        const data = await fetchArticlesWithTopic(query.split('/')[1], page);
        // const data = await fetchArticlesWithTopic(query, page);

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
    fetchArticles();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    // console.log(page);
  };
  return (
    <div>
     {/* ----------------------------------- */}
    
    <button onClick={openModal}>Відкрити модальне вікно</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <h2>Модальне вікно</h2>
      <button onClick={closeModal}>Закрити</button>
    </Modal>
  
    {/* // ---------------------------- */}
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      <Toaster/>
           {error && <p>Whoops, something went wrong! Please try reloading this page!😂</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      {loading && 
  <div>
    <p>Loading data, please wait...</p>
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
    />
  </div>
}
      {/* {loading && <p>Loading data, please wait...</p>
      <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />} */}
      {articles.length > 0 && !loading && (
        <button onClick={handleLoadMore}>LoadMore</button>
      )}
    </div>
  );
};

export default App;
