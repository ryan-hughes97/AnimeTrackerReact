import React from 'react';
import Title from './Title';

const TitleList = ({ titles, setTitles, check, setCheck, setStatus, filteredTitles }) => {
  // const filter = document.getElementById('filter');
  // const filterTitles = () => {
  //   if(filter.value === 'anime') {
  //     const listItems = document.querySelectorAll('.title');
  //     listItems.forEach(item => {
  //       item.style.display = 'none';
  //     })
  //     // listItems.forEach(item => {
  //     //   if(item.childNodes.classList.contains('anime')) {
  //     //     item.style.display = 'none';
  //     //   }
  //     // })
  //   }
  // }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className='title-container'>
      <form className="filter-form">
        <div className="filter-div">
          <div>
            <label htmlFor="filter">Display:</label>
            <select name="filter" id="filter" onChange={statusHandler}>
              <option value="all">All</option>
              {/* <option value="anime">Anime</option>
              <option value="manga">Manga</option>
              <option value="anime-manga">Anime and Manga</option> */}
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </div>
      </form>
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
              check={check}
              setCheck={setCheck}
            />
          ))}
        </ul>
    </div>
  );
};

export default TitleList;
