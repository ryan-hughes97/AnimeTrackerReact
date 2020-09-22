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

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleTypeHandler = (e) => {
    setTitleType(e.target.value);
  };

  // const resetType = () => {
  //   setTitleType('Choose One');
  // };

  const submitTitleHandler = (e) => {
    e.preventDefault();
    console.log(titleType);

    setTitles([
      ...titles,
      {
        text: inputText,
        type: type.value,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText('');
    // resetType();
    // window.location.reload(false);
  };

  return (
    <form>
      <h1 className='anime-tracker-title'>Re: Track</h1>
      <small>Anime & Manga</small>
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
          // defaultValue='Anime'
          value={titleType}
          onChange={titleTypeHandler}
          // type={titleType}
        >
          <option value='Anime'>Anime</option>
          <option value='Manga'>Manga</option>
          <option value='Anime & Manga'>Anime and Manga</option>
        </select>
      </div>
      {/* <div>
        <label htmlFor='status'>Status</label>
        <select name='status' id='status'>
          <option value='select' selected disabled>
            --Select One--
          </option>
          <option value='completed'>Completed</option>
          <option value='ongoing'>Ongoing</option>
          <option value='dropped'>Dropped</option>
          <option value='interested'>Interested</option>
        </select>
      </div> */}
      <div>
        <button onClick={submitTitleHandler} type='submit' className='add-btn'>
          Add to List
        </button>
      </div>
    </form>
  );
};

export default Form;
