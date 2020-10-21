import React from 'react';
import Title from './Title';

const TitleList = ({ titles, setTitles, check, setCheck, titleCount, setTitleCount }) => {
  return (
    <div className='title-container'>
      <table className='title-list'>
        <div className="title table-heading">
          <tr>Title</tr>
          <tr className='type'>Type</tr>
          <p className='status'>Status</p>
        </div>
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
            titleCount={titleCount}
            setTitleCount={setTitleCount}
          />
        ))}
      </table>
    </div>
  );
};

export default TitleList;
