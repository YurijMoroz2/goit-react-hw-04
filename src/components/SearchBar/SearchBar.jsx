import toast from 'react-hot-toast';
import css from './SearchBar.module.css'
import { IoSearchOutline } from "react-icons/io5";
const notify = () => toast('Enter search data');

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.topic.value.trim() === '') {
      notify();
      return;
    }
    const form = evt.target;
    onSearch(form.elements.topic.value);
    // console.log(form.elements);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <div className={css.inputBox}>
        <button className={css.inputBtn} type='submit'>
        <IoSearchOutline />
      </button>
        <input className ={css.inp} type="text" name="topic" autoComplete="off" autoFocus placeholder="Search images and photos" />
        </div>
       
      </form>
    </header>
   
  );
};
