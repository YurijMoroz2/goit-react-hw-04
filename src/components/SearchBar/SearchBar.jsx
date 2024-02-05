import toast from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

export const SearchForm = ({ onSearch }) => {
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
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" autoComplete="off" autoFocus placeholder="Search images and photos" />
        <button type="submit">Search</button>
      </form>
    </header>
    // ---------------------------------------
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="topic" placeholder="Search articles..." />
    //   <button>Search</button>
    // </form>
  );
};
