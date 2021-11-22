import React, { useEffect, useState, useRef/* , useContext */ } from 'react';
import { v4 } from 'uuid';
import Search from './Search';
import "../styles/modal.css";

function HeroesList() {
  const [text, setText] = useState('');
  const [renderHeroes, setRenderedHeroes] = useState([]);
  const [filterHeroes, setFilterHeroes] = useState([]);
  const [battleHeroes1, setBattleHeroes1] = useState([]);
  console.log(battleHeroes1);

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
    prevCountRef.current = [battleHeroes1];
  }, [battleHeroes1]);

  const prevCount = prevCountRef.current;

  let powers = [];
  powers = [prevCount];
  powers.push(battleHeroes1);
  console.log(powers[0]);
  if(powers[0]) {
    if(powers[0][0].length !== 0) {
      console.log(powers[0][0]);
      const total1 = powers[0][0].powerstats && Object.values(powers[0][0].powerstats).reduce((acc, current) => (acc += current), 0);
      const total2 = powers[1].powerstats && Object.values(powers[1].powerstats).reduce((acc, current) => (acc += current), 0);
      let powersSum = [];
      powersSum = ([total1, total2]);
      console.log(powersSum);
        if(powersSum[0] > powersSum[1]) {
          console.log('1 ganhou');
          return (
            <div className="modal-container">
              <div className="modal">    
                <button className="close" onClick={() => document.location.reload(true)}>x</button>
                  <div className="infos">
                    <div className="result">
                      <h4 className="hero-name">{powers[0][0].name}</h4>
                    </div>
                    <div className="heroes-info">
                      <div className="hero1">
                        <img
                          alt={`name`}
                          src={powers[0][0].images.sm}
                          className="hero-img"
                        />
                          <p><b>{powers[0][0].name}</b></p>
                          <p>Combate: {powers[0][0].powerstats.combat}</p>
                          <p>Durabilidade: {powers[0][0].powerstats.durability}</p>
                          <p>Inteligência: {powers[0][0].powerstats.intelligence}</p>
                          <p>Poder: {powers[0][0].powerstats.power}</p>
                          <p>Velocidade: {powers[0][0].powerstats.speed}</p>
                          <p>Força: {powers[0][0].powerstats.strength}</p>
                      </div>
                      <div className="hero2">
                        <img
                          alt={`name`}
                          src={powers[1].images.sm}
                          className="hero-img"
                        />
                          <p><b>{powers[1].name}</b></p>
                          <p>Combate: {powers[1].powerstats.combat}</p>
                          <p>Durabilidade: {powers[1].powerstats.durability}</p>
                          <p>Inteligência: {powers[1].powerstats.intelligence}</p>
                          <p>Poder: {powers[1].powerstats.power}</p>
                          <p>Velocidade: {powers[1].powerstats.speed}</p>
                          <p>Força: {powers[1].powerstats.strength}</p>
                      </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
        if(powersSum[0] < powersSum[1]) {
          console.log('2 ganhou');
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
                          src={powers[0][0].images.sm}
                          className="hero-img"
                        />
                          <p><b>{powers[0][0].name}</b></p>
                          <p>Combate: {powers[0][0].powerstats.combat}</p>
                          <p>Durabilidade: {powers[0][0].powerstats.durability}</p>
                          <p>Inteligência: {powers[0][0].powerstats.intelligence}</p>
                          <p>Poder: {powers[0][0].powerstats.power}</p>
                          <p>Velocidade: {powers[0][0].powerstats.speed}</p>
                          <p>Força: {powers[0][0].powerstats.strength}</p>
                      </div>
                      <div className="hero2">
                        <img
                          alt={`name`}
                          src={powers[1].images.sm}
                          className="hero-img"
                        />
                          <p><b>{powers[1].name}</b></p>
                          <p>Combate: {powers[1].powerstats.combat}</p>
                          <p>Durabilidade: {powers[1].powerstats.durability}</p>
                          <p>Inteligência: {powers[1].powerstats.intelligence}</p>
                          <p>Poder: {powers[1].powerstats.power}</p>
                          <p>Velocidade: {powers[1].powerstats.speed}</p>
                          <p>Força: {powers[1].powerstats.strength}</p>
                      </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
        if(powersSum[0] === powersSum[1] && powersSum.length !== 0) {
          console.log('Empatou');
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
                          src={powers[0][0].images.sm}
                          className="hero-img"
                        />
                          <p><b>{powers[0][0].name}</b></p>
                          <p>Combate: {powers[0][0].powerstats.combat}</p>
                          <p>Durabilidade: {powers[0][0].powerstats.durability}</p>
                          <p>Inteligência: {powers[0][0].powerstats.intelligence}</p>
                          <p>Poder: {powers[0][0].powerstats.power}</p>
                          <p>Velocidade: {powers[0][0].powerstats.speed}</p>
                          <p>Força: {powers[0][0].powerstats.strength}</p>
                      </div>
                      <div className="hero2">
                        <img
                          alt={`name`}
                          src={powers[1].images.sm}
                          className="hero-img"
                        />
                          <p><b>{powers[1].name}</b></p>
                          <p>Combate: {powers[1].powerstats.combat}</p>
                          <p>Durabilidade: {powers[1].powerstats.durability}</p>
                          <p>Inteligência: {powers[1].powerstats.intelligence}</p>
                          <p>Poder: {powers[1].powerstats.power}</p>
                          <p>Velocidade: {powers[1].powerstats.speed}</p>
                          <p>Força: {powers[1].powerstats.strength}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
  } else {
    console.log('clique em mais um');
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
