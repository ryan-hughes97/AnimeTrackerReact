import React from 'react';
import Title from './Title';

const TitleList = ({ titles, setTitles, check, setCheck }) => {
  return (
    <div className='title-container'>
      {/* <table className='title-list'> */}
        <ul>
          <li className="title table-heading">
            <p className='title-heading'>Title</p>
            <p className='type'>Type</p>
            <p className='status'>Status</p>
          </li>
          {titles.map((title) => (
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
      {/* </table> */}
    </div>
  );
};

export default TitleList;
