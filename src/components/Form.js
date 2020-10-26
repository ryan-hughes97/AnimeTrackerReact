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
  const displayBtn = document.getElementById('display-button');
  

  const displayForm = (e) => {
    e.preventDefault();
    const inputForm = document.getElementById('input-submit-form');

    if(inputForm.classList.contains('show')) {
      console.log('hi');
      inputForm.style.display = 'block';
      inputForm.classList.remove('show');
      inputForm.classList.add('hide');
      displayBtn.innerHTML = '<i class="fas fa-chevron-up"></i>'; 
    } else if (inputForm.classList.contains('hide')) {
      inputForm.style.display = 'none';
      inputForm.classList.remove('hide');
      inputForm.classList.add('show');
      displayBtn.innerHTML = '<i class="fas fa-chevron-down"></i>'; 
    }
  }

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
      <div className="anime-tracker-div">
        <h1 className='anime-tracker-title'>Re: Track</h1>
        <small>Anime & Manga</small>
      </div>
      <button id="display-button" className="display-button" onClick={displayForm}><i class="fas fa-chevron-down"></i></button>
      <div id="input-submit-form" className="input-submit-form show">
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
      </div>

      <div className="title-counter">
        <div id="counter" className="counter">0</div>
        <p>titles</p>
      </div>
    </form>
  );
};

export default Form;
