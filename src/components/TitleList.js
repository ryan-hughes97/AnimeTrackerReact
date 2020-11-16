import React from 'react';
import Title from './Title';

const TitleList = ({ titles, setTitles, setStatus, filteredTitles }) => {

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className='title-container'>
      <form className="filter-form">
        <div className="filter-div">

          {/* Mobile Logo */}
          <div className="anime-tracker-mobile-div">
            <h1 className='anime-tracker-title'>Re: Track</h1>
            <p>Anime & Manga</p>
          </div>

          {/* Display Filter */}
          <div>
            <label htmlFor="filter">Display:</label>
            <select name="filter" id="filter" onChange={statusHandler}>
              <option value="all">All</option>
              <option value="favorite">Favorite</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
              <option value="anime-manga">Anime and Manga</option>
            </select>
          </div>
        </div>
      </form>

      {/* List of Titles */}
      <ul>
        <li className="title table-heading">
          <p className='title-heading'>Title</p>
          <p className='type'>Type</p>
          <p className='status'>Status</p>
        </li>
        {filteredTitles.map((title) => (
          <Title
            text={title.text}
            type={title.type}
            key={title.id}
            titles={titles}
            title={title} // This creates a title item that can be used in title.js
            setTitles={setTitles}
          />
        ))}
      </ul>
    </div>
  );
};

export default TitleList;