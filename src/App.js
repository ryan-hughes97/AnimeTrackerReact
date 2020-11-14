import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TitleList from './components/TitleList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [titles, setTitles] = useState([]);
  const [titleType, setTitleType] = useState([]);
  const [status, setStatus] = useState('all');
  const [check, setCheck] = useState('');
  const [filteredTitles, setFilteredTitles] = useState([]);

  useEffect(() => {
    getLocalTitles();
  }, []);

  useEffect(() => {
    const saveLocalTitles = () => {
      localStorage.setItem('titles', JSON.stringify(titles));
    };
    saveLocalTitles();
  }, [titles]);

  // useEffect(() => {
  //   countAnime();
  // }, [titles]);

  useEffect(() => {
    
    const filterHandler = () => {
      let titleCount = document.querySelector('.counter');
      switch (status) {
        case 'completed':
          const completedTitles = (titles.filter((title) => title.completed === true));
          setFilteredTitles(completedTitles);
          console.log(completedTitles.length);
          titleCount.innerText = (completedTitles.length);
          
          break;
        case 'incomplete':
          const incompleteTitles = (titles.filter((title) => title.completed === false));
          setFilteredTitles(incompleteTitles);
          titleCount.innerText = (incompleteTitles.length);
          break;
        default:
          setFilteredTitles(titles);
          titleCount.innerText = (titles.length);
          break;
      }
    }
    filterHandler();
    
  }, [titles, status])

  // window.addEventListener("resize", function(event) {
  //   if(document.body.clientWidth >= "600") {
  //     const inputForm = document.getElementById('input-submit-form');
  //     inputForm.style.display = 'block';
  //   }
  // })

  // const countAnime = () => {
  //   let titleCount = document.querySelector('.counter');
  //   titleCount.innerText = (document.querySelectorAll('.title').length - 1);
  // }

  const getLocalTitles = () => {
    if (localStorage.getItem('titles') === null) {
      localStorage.setItem('titles', JSON.stringify([]));
    } else {
      let titleLocal = JSON.parse(localStorage.getItem('titles'));
      titleLocal.sort((a,b) => (a.text > b.text) ? 1:-1);
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
          filteredTitles={filteredTitles}
          setStatus={setStatus}
        />
      </div>
    </div>
  );
}

export default App;
