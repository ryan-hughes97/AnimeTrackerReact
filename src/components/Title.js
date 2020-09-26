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
    <div className='title'>
      <tr>{text}</tr>
      <tr>{type}</tr>
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
    </div>
  );
};

export default Title;
