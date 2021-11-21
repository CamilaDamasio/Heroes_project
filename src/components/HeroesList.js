import React, { useEffect, useState, useRef/* , useContext */ } from 'react';
import { v4 } from 'uuid';
import Search from './Search';
// import MyContext from '../Context/myContext';

function HeroesList() {
  const [text, setText] = useState('');
  const [renderHeroes, setRenderedHeroes] = useState([]);
  const [filterHeroes, setFilterHeroes] = useState([]);
  const [battleHeroes1, setBattleHeroes1] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const END_POINT = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
      const response = await fetch(END_POINT);
      const heroes = await response.json();
      setRenderedHeroes(heroes);
    };
  fetchAPI();
  }, []);

  useEffect(() => {
    if (text) {
      const heroesFilter = renderHeroes
        .filter((hero) => hero.name
        .toLowerCase().includes(text.toLowerCase())
        );
      return setFilterHeroes(heroesFilter);
    }
  }, [renderHeroes, text]);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = [battleHeroes1.powerstats];
    const total = prevCountRef.current[0] && Object.values(prevCountRef.current[0]).reduce((acc, current) => (acc += current), 0);
    console.log(total);
    prevCountRef.current = total;
  });

  const prevCount = prevCountRef.current;

  const arr1 = [battleHeroes1.powerstats];
  console.log(arr1);
  const total = arr1[0] && Object.values(arr1[0]).reduce((acc, current) => (acc += current), 0);
  const test = [prevCount];
  test.push(total)
  console.log(test);

  return (
    <div className="main">
      <div className="search-bar">
        <Search value={text} onChange={(search) => setText(search)} />
      </div>
      <div className="heroes-list">
        { text ? filterHeroes.map((item, index) => (
          <button
            type="button"
            key={ v4() }
            onClick={() => setBattleHeroes1(item)}
            data-testid={ `${index}-hero` }
            className="hero-btn"
          >
            <h4 className="hero-name">{item.name}</h4>
            <img
              alt={item.name}
              src={item.images.sm}
              className="hero-img"
            />
          </button>
        ))
        : renderHeroes.map((item, index) => (
          <button
            type="button"
            key={ v4() }
            onClick={() => setBattleHeroes1(item)}
            data-testid={ `${index}-hero` }
            className="hero-btn"
          >
            <h4 className="hero-name">{item.name}</h4>
            <img
              alt={item.name}
              src={item.images.sm}
              className="hero-img"
            />
          </button>
        ))
        }
      </div>
    </div>
  )
}

export default HeroesList;
