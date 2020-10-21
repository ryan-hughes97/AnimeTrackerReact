import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TitleList from './components/TitleList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [titles, setTitles] = useState([]);
  const [titleType, setTitleType] = useState([]);
  const [check, setCheck] = useState('');
  const [titleCount, setTitleCount] = useState('');

  useEffect(() => {
    getLocalTitles();
  }, []);

  useEffect(() => {
    saveLocalTitles();
  }, [titles]);

  useEffect(() => {
    countAnime();
  }, [titles]);

  const countAnime = () => {
    let titleCount = document.querySelector('.counter');
    titleCount.innerText = (document.querySelectorAll('.title').length - 1);
  }

  const saveLocalTitles = () => {
    localStorage.setItem('titles', JSON.stringify(titles));
  };

  const getLocalTitles = () => {
    if (localStorage.getItem('titles') === null) {
      localStorage.setItem('titles', JSON.stringify([]));
    } else {
      let titleLocal = JSON.parse(localStorage.getItem('titles'));
      setTitles(titleLocal);
    }
  };

  return (
    <div className='App'>
      <div className='main-div'>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          titles={titles}
          setTitles={setTitles}
          titleType={titleType}
          setTitleType={setTitleType}
        />
        <TitleList
          titles={titles}
          setTitles={setTitles}
          check={check}
          setCheck={setCheck}
          titleCount={titleCount}
          setTitleCount={setTitleCount}
        />
      </div>
    </div>
  );
}

export default App;
