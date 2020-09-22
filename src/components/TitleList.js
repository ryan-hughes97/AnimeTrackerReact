import React from 'react';
import Title from './Title';

const TitleList = ({ titles, setTitles, check, setCheck }) => {
  return (
    <div className='title-container'>
      <table className='title-list'>
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
      </table>
    </div>
  );
};

export default TitleList;
