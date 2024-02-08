import { useState } from 'react';
import Modal from 'react-modal';

import css from './ImageModal.module.css';
Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(100, 100, 100, 0.75)',
  },
};

export const ImageModal = ({ user: { slug, urls, likes, user } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div onClick={openModal}>
        <img src={urls.small} alt={slug} width="100%" height="150" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.Modal}
      >
        <img className={css.img} src={urls.regular} alt={slug} width="100%" />
        <p className={css.like}>Like:{likes}</p>
        <p className={css.location}>
          Location:<span>{user.location}</span>
        </p>
        <p className={css.vb}>{user.bio}</p>
        <p>Name autor: {user.name}</p>
        <p>{user.updated_at}</p>
      </Modal>
    </div>
  );
};
