import React, { useEffect, useState, useRef } from 'react';
import { v4 } from 'uuid';
import Search from './Search';
import "../styles/modal.css";

function HeroesList() {
  const [text, setText] = useState('');
  const [renderHeroes, setRenderedHeroes] = useState([]);
  const [filterHeroes, setFilterHeroes] = useState([]);
  const [battleHeroes1, setBattleHeroes1] = useState();

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
    prevCountRef.current = battleHeroes1;
  }, [battleHeroes1]);

  const prevCount = prevCountRef.current;

  let powers = [prevCount];
  powers.push(battleHeroes1);
  
  if(powers[1]) {
    if(powers[0] !== undefined) {
      const total1 = powers[0].powerstats && Object.values(powers[0].powerstats).reduce((acc, current) => (acc += current), 0);
      const total2 = powers[1].powerstats && Object.values(powers[1].powerstats).reduce((acc, current) => (acc += current), 0);
      let powersSum = [];
      powersSum = ([total1, total2]);
        if(powersSum[0] > powersSum[1]) {
          return (
            <div className="modal-container">
              <div className="modal">    
                <button className="close" onClick={() => document.location.reload(true)}>x</button>
                <div className="infos">
                  <div className="result">
                    <h4 className="hero-name">{powers[0].name} venceu</h4>
                  </div>
                  <div className="heroes-info">
                    <div className="hero1">
                      <img
                        alt={`name`}
                        src={powers[0].images.sm}
                        className="hero-img-modal"
                      />
                      <p><b>{powers[0].name}</b></p>
                      <p>Combate: {powers[0].powerstats.combat}</p>
                      <p>Durabilidade: {powers[0].powerstats.durability}</p>
                      <p>Intelig??ncia: {powers[0].powerstats.intelligence}</p>
                      <p>Poder: {powers[0].powerstats.power}</p>
                      <p>Velocidade: {powers[0].powerstats.speed}</p>
                      <p>For??a: {powers[0].powerstats.strength}</p>
                    </div>
                    <div className="hero2">
                      <img
                        alt={`name`}
                        src={powers[1].images.sm}
                        className="hero-img-modal"
                      />
                      <p><b>{powers[1].name}</b></p>
                      <p>Combate: {powers[1].powerstats.combat}</p>
                      <p>Durabilidade: {powers[1].powerstats.durability}</p>
                      <p>Intelig??ncia: {powers[1].powerstats.intelligence}</p>
                      <p>Poder: {powers[1].powerstats.power}</p>
                      <p>Velocidade: {powers[1].powerstats.speed}</p>
                      <p>For??a: {powers[1].powerstats.strength}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        if(powersSum[0] < powersSum[1]) {
          return (
            <div className="modal-container">
              <div className="modal">    
                <button className="close" onClick={() => document.location.reload(true)}>x</button>
                <div className="infos">
                  <div className="result">
                    <h4 className="hero-name">{powers[1].name} venceu</h4>
                  </div>
                  <div className="heroes-info">
                    <div className="hero1">
                      <img
                        alt={`name`}
                        src={powers[0].images.sm}
                        className="hero-img-modal"
                      />
                      <p><b>{powers[0].name}</b></p>
                      <p>Combate: {powers[0].powerstats.combat}</p>
                      <p>Durabilidade: {powers[0].powerstats.durability}</p>
                      <p>Intelig??ncia: {powers[0].powerstats.intelligence}</p>
                      <p>Poder: {powers[0].powerstats.power}</p>
                      <p>Velocidade: {powers[0].powerstats.speed}</p>
                      <p>For??a: {powers[0].powerstats.strength}</p>
                    </div>
                    <div className="hero2">
                      <img
                        alt={`name`}
                        src={powers[1].images.sm}
                        className="hero-img-modal"
                      />
                      <p><b>{powers[1].name}</b></p>
                      <p>Combate: {powers[1].powerstats.combat}</p>
                      <p>Durabilidade: {powers[1].powerstats.durability}</p>
                      <p>Intelig??ncia: {powers[1].powerstats.intelligence}</p>
                      <p>Poder: {powers[1].powerstats.power}</p>
                      <p>Velocidade: {powers[1].powerstats.speed}</p>
                      <p>For??a: {powers[1].powerstats.strength}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
          if (powers[0].name !== powers[1].name && powersSum[0] === powersSum[1] && powersSum.length !== 0) {
          return (
            <div className="modal-container">
              <div className="modal">    
                <button className="close" onClick={() => document.location.reload(true)}>x</button>
                <div className="infos">
                  <div className="result">
                    <h4 className="hero-name">Empate!</h4>
                  </div>
                  <div className="heroes-info">
                    <div className="hero1">
                      <img
                        alt={`name`}
                        src={powers[0].images.sm}
                        className="hero-img-modal"
                      />
                      <p><b>{powers[0].name}</b></p>
                      <p>Combate: {powers[0].powerstats.combat}</p>
                      <p>Durabilidade: {powers[0].powerstats.durability}</p>
                      <p>Intelig??ncia: {powers[0].powerstats.intelligence}</p>
                      <p>Poder: {powers[0].powerstats.power}</p>
                      <p>Velocidade: {powers[0].powerstats.speed}</p>
                      <p>For??a: {powers[0].powerstats.strength}</p>
                    </div>
                    <div className="hero2">
                      <img
                        alt={`name`}
                        src={powers[1].images.sm}
                        className="hero-img-modal"
                      />
                      <p><b>{powers[1].name}</b></p>
                      <p>Combate: {powers[1].powerstats.combat}</p>
                      <p>Durabilidade: {powers[1].powerstats.durability}</p>
                      <p>Intelig??ncia: {powers[1].powerstats.intelligence}</p>
                      <p>Poder: {powers[1].powerstats.power}</p>
                      <p>Velocidade: {powers[1].powerstats.speed}</p>
                      <p>For??a: {powers[1].powerstats.strength}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
  } 

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
