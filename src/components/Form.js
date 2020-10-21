import React from 'react';

const Form = ({
  inputText,
  setInputText,
  titles,
  setTitles,
  titleType,
  setTitleType,
}) => {
  const type = document.getElementById('type');
  const error = document.getElementById('error-message');

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleTypeHandler = (e) => {
    setTitleType(e.target.value);
  };

  const submitTitleHandler = (e) => {
    e.preventDefault();
    if(inputText === '') {
      error.style.opacity = '1';
    } else {
      setTitles([
        ...titles,
        {
          text: inputText,
          type: type.value,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
      error.style.opacity = '0'; 
    }
    setInputText('');
  };

  return (
    <form>
      <h1 className='anime-tracker-title'>Re: Track</h1>
      <small>Anime & Manga</small>
      <p id="error-message" className="error-message">Please add a title</p>
      <div>
        <label htmlFor='title' className='label-title'>
          Title
        </label>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type='text'
          className='title-input'
        />
      </div>
      <div>
        <label htmlFor='type'>Type</label>
        <select
          name='type'
          id='type'
          value={titleType}
          onChange={titleTypeHandler}
        >
          <option value='Anime'>Anime</option>
          <option value='Manga'>Manga</option>
          <option value='Anime & Manga'>Anime and Manga</option>
        </select>
      </div>
      <div>
        <button onClick={submitTitleHandler} type='submit' className='add-btn'>
          Add to List
        </button>
      </div>

      <div className="title-counter">
        <div id="counter" className="counter">0</div>
        <p>titles</p>
      </div>
    </form>
  );
};

export default Form;
