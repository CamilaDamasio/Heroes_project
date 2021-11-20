import React, { useEffect, useState/* , useContext */ } from 'react';
import { v4 } from 'uuid';
import Search from './Search';
// import MyContext from '../Context/myContext';

function HeroesList() {
  const [text, setText] = useState('');
  const [renderHeroes, setRenderedHeroes] = useState([]);
  const [filterHeroes, setFilterHeroes] = useState([]);
  const [powers, setPowers] = useState([]);
  // console.log(powers);
  const [battleHeroes, setBattleHeroes] = useState([]);
  // const { setArr } = useContext(MyContext);

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

  useEffect(() => {
    setBattleHeroes(battleHeroes);
    setPowers(battleHeroes);
    
    // setArr(total);
  }, [battleHeroes, powers, setBattleHeroes]);
  
  const arr = [{...battleHeroes.powerstats}];
  const total = arr[0] && Object.values(arr[0]).reduce((acc, current) => (acc += current), 0);
  console.log([total]);

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
            onClick={() => setBattleHeroes(item)}
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
            onClick={() => setBattleHeroes(item)}
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
