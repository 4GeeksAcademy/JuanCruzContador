import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
  const [contador, setContador] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [checkpoint, setCheckpoint] = useState("");

  useEffect(() => {
    if (!isRunning) return; // Si no está en funcionamiento, no hacer nada

    const intervalId = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const revertirContador = () => {
    setIsRunning(false); // Pausa el contador
    setContador((prevContador) => Math.max(prevContador - 1, 0)); // Decrementa el contador, sin permitir que sea negativo


  };

  useEffect(() => {
    if (contador.toString() === checkpoint){
      alert(`El contador ha llegado al checkpoint de  ${checkpoint}`)
      setCheckpoint("");
    }
  });

  const four = Math.floor(contador / 1) % 10;
  const three = Math.floor(contador / 10) % 10;
  const two = Math.floor(contador / 100) % 10;
  const one = Math.floor(contador / 1000) % 10;

  return (
    <>
    <div className="counter">
      <div className="icon">
        <i className="far fa-clock"></i>
      </div>
      <div className="one">{one}</div>
      <div className="two">{two}</div>
      <div className="three">{three}</div>
      <div className="four">{four}</div>

      <button className="btn btn-warning" onClick={() => setContador(0)}>
        Reset
      </button>
      <button className="btn btn-info" onClick={revertirContador}>
        Revert
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>

    <div className="input">

      <input type="number" value={checkpoint} onChange={(e) => setCheckpoint(e.target.value)} placeholder="Ingrese un numero"/>
      <button className="btn btn-success" onClick={()=> alert(`Checkpoint establecido en: ${checkpoint}`)}>Checkpoint</button>
    </div>

    </>
  );
};

Home.propTypes = {
  digitOne: PropTypes.number.isRequired,
  digitTwo: PropTypes.number.isRequired,
  digitThree: PropTypes.number.isRequired,
  digitFour: PropTypes.number.isRequired,
};

export default Home;
