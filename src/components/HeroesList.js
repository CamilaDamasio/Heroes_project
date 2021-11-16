import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Search from '../components/Search';

function HeroesList() {
  const [renderHeroes, setRenderedHeroes] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const END_POINT = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
      const response = await fetch(END_POINT);
      const heroes = await response.json();
      setRenderedHeroes(heroes);
      console.log(heroes);
    };
    fetchAPI();
  }, [])

  return (
    <div className="main-div">
      <Search />
      <div>
        { renderHeroes.map((item, index) => (
          <button
            type="button"
            key={ v4() }
            onClick={ () => console.log('clicado') }
            data-testid={ `${index}-category-filter` }
            className="hero"
          >
            <img
              alt={item.name}
              src={item.images.md}
            />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroesList;
