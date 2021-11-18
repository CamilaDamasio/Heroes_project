import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Search from './Search';

function HeroesList() {
  const [text, setText] = useState('');
  const [renderHeroes, setRenderedHeroes] = useState([]);
  const [filterHeroes, setFilterHeroes] = useState([]);

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

  return (
    <div className="main">
      <Search value={text} onChange={(search) => setText(search)} />
      <div className="heroes-list">
        { text ? filterHeroes.map((item, index) => (
          <button
            type="button"
            key={ v4() }
            onClick={ () => console.log('clicado') }
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
            onClick={ () => console.log('clicado') }
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
