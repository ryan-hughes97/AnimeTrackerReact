import React from 'react';

const Form = ({
  inputText,
  setInputText,
  titles,
  setTitles,
  setTitleType
}) => {
  const type = document.getElementById('type');
  const alert = document.getElementById('alert-message');
  const titleInput = document.getElementById('title-input');
  
  const displayForm = (e) => {
    e.preventDefault();
    const animeTrackForm = document.getElementById('anime-tracker-form');
    const mainForm = document.getElementById('main-form');
    const displayBtn = document.getElementById('display-btn');
    const bodyTag = document.body;
    const htmlTag = document.querySelector('html');
    animeTrackForm.classList.toggle('display');

    if(animeTrackForm.classList.contains('display')) {
      animeTrackForm.style.display = 'block';
      mainForm.style.minWidth = '100vw';
      // mainForm.style.position = 'fixed';
      displayBtn.style.transform = 'rotate(135deg)';
      bodyTag.style.overflow = 'hidden';
      htmlTag.style.overflow = 'hidden';
    } else {
      animeTrackForm.style.display = 'none';
      mainForm.style.minWidth = '0px';
      displayBtn.style.transform = 'rotate(0deg)';
      bodyTag.style.overflow = 'visible';
      htmlTag.style.overflow = 'visible';
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
        alert.style.opacity = '1';
        alert.classList.remove('success');
        alert.classList.add('danger');
        alert.innerHTML = 'Please add a title';
      setTimeout(function() {
        alert.style.opacity = '0';
      }, 3000);
    } else {
      setTitles([
        ...titles,
        {
          text: inputText,
          type: type.value,
          favorite: false,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
      alert.style.opacity = '1';
      alert.classList.remove('danger');
      alert.classList.add('success'); 
      alert.innerHTML = `'${titleInput.value}' was added`;
      setTimeout(function() {
        alert.style.opacity = '0';
      }, 3000);
    }
    setInputText('');
  };

  return (
    <form className="main-form" id="main-form">
        {/* Display Button on Mobile */}
        <button id="display-btn" className="display-btn" type="button" onClick={displayForm}><i className="fas fa-plus"></i></button>

        {/* Form Component for Title Input */}
        <div className="anime-tracker-form" id="anime-tracker-form">
          <div className="anime-tracker-div">
            <h1 className='anime-tracker-title'>Re: Track</h1>
            <p>Anime & Manga</p>
          </div>
          <div id="input-submit-form" className="input-submit-form show">
            <div>
              <label htmlFor='title' className='label-title'>
                Title
              </label>
              <input
                value={inputText}
                onChange={inputTextHandler}
                type='text'
                className='title-input'
                id='title-input'
              />
            </div>
            <div>
              <label htmlFor='type'>Type</label>
              <select
                name='type'
                id='type'
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

            {/* Alert Message */}
            <p id="alert-message" className="alert-message"></p>
          </div>
        </div>

        {/* Title Counter */}
        <div className="title-counter">
          <div id="counter" className="counter">0</div>
          <p>titles</p>
        </div>
    </form>
  );
};

export default Form;