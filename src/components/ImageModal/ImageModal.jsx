import { useState } from 'react';
import Modal from 'react-modal';

import css from './ImageModal.module.css';
Modal.setAppElement('#root');

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
      <div className="gallery-item" onClick={openModal}>
        <img src={urls.small} alt={slug} width="250" height="150" />
      </div>

      {/* style={customStyles} */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img className={css.img} src={urls.regular} alt={slug} />
        <p className={css.like}>{likes}</p>
        <p className={css.lokation}>{user.location}</p>
        <p className={css.vb}>{user.bio}</p>
        <p>{user.name}</p>
        <p>{user.updated_at}</p>
      </Modal>
    </div>
  );
};
