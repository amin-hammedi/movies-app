import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditMovie = ({ handleEdit, movie }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState(movie.name);
  const [image, setImage] = useState(movie.image);
  const [rating, setRating] = useState(movie.rating);
  const [date, setDate] = useState(movie.date);
  const handleRating = (x) => setRating(x);
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedMovie = {
      id: movie.id,
      name,
      image,
      rating,
      date,
    };
    handleEdit(editedMovie);
    closeModal();
    setDate("");
    setImage("");
    setRating(1);
    setName("");
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn">
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <StarRating rating={rating} handleRating={handleRating} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn" type="submit">
              Confirme
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditMovie;
