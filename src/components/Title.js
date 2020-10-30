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

  return (
    <li className='title'>
      <div className="input-title">{text}</div>
      <div className ={type === 'Anime' ? 'anime' : type === 'Manga' ? 'manga' : type === 'Anime & Manga' ? 'anime-manga' : null}>{type}</div>
      <div className='buttons'>
        <button
          onClick={completeHandler}
          className={`complete-btn ${title.completed ? 'completed' : ''}`}
        >
          <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </li>
  );
};

export default Title;
