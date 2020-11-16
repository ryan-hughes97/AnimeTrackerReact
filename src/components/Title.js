import React from 'react';

const Title = ({ text, type, title, titles, setTitles }) => {
  const deleteHandler = () => {
    setTitles(titles.filter((el) => el.id !== title.id));
  };

  const completeHandler = () => {
    setTitles(
      titles.map((item) => {
        if (item.id === title.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  const favoriteHandler = () => {
    setTitles(
      titles.map((item) => {
        if (item.id === title.id) {
          return {
            ...item,
            favorite: !item.favorite,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <li className='title'>  
      <div className="input-title">{text}</div>
      <div className ={type === 'Anime' ? 'anime' : type === 'Manga' ? 'manga' : type === 'Anime & Manga' ? 'anime-manga' : null}>{type}</div>
      
      {/* Buttons */}
      <div className='buttons'>
        <button onClick={favoriteHandler} className={`fav-btn ${title.favorite ? 'favorite' : ''}`}>
          <i className="far fa-heart"></i>
          <span>Favorite</span>
        </button>
        <button
          onClick={completeHandler}
          className={`complete-btn ${title.completed ? 'completed' : ''}`}
        >
          <i className='fas fa-check'></i>
          <span>Complete</span>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
          <i className='fas fa-trash'></i>
          <span>Delete</span>
        </button>
      </div>
    </li>
  );
};

export default Title;
