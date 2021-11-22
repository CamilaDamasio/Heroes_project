// import React, { useEffect, useState } from 'react';
// // import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// // import { MdAlternateEmail } from "react-icons/md";
// import "../styles/modal.css";

// const Modal = () => {
//   const [renderHeroes, setRenderedHeroes] = useState([]);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       const END_POINT = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
//       const response = await fetch(END_POINT);
//       const heroes = await response.json();
//       setRenderedHeroes(heroes);
//     };
//   fetchAPI();
//   }, []);
//   return (
//     <div id="modal-content" className="modal-container">
//       <div className="modal">
      
//         <button className="close" onClick={() => document.location.reload(true)}>x</button>
//         <div className="links">
//         {renderHeroes.filter((item) => item.name === item) (
//           <button
//             type="button"
//             key={ index }
//             data-testid={ `${index}-hero` }
//             className="hero-btn"
//           >
//             <h4 className="hero-name">{item.name}</h4>
//             <img
//               alt={item.name}
//               src={item.images.sm}
//               className="hero-img"
//             />
//           </button>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;