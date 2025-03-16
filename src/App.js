import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          import React, { useState } from "react";
import "bulma/css/bulma.min.css";

// Iteration 1: IdCard Component
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => (
  <div className="box">
    <div className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img src={picture} alt={`${firstName} ${lastName}`} />
        </figure>
      </div>
      <div className="media-content">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}cm</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  </div>
);

// Iteration 2: Greetings Component
const Greetings = ({ lang, children }) => {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  return <div className="notification is-light">{greetings[lang]} {children}</div>;
};

// Iteration 3: Random Component
const Random = ({ min, max }) => (
  <div className="notification is-info">
    Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)}
  </div>
);

// Iteration 4: BoxColor Component
const BoxColor = ({ r, g, b }) => {
  const divStyle = { backgroundColor: `rgb(${r},${g},${b})`, padding: "20px", textAlign: "center" };
  return <div style={divStyle}>rgb({r},{g},{b})</div>;
};

// Iteration 5: CreditCard Component
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const cardStyle = { backgroundColor: bgColor, color: color, padding: "20px", borderRadius: "10px", width: "300px" };
  return (
    <div className="box" style={cardStyle}>
      <p><strong>{type}</strong></p>
      <p>**** **** **** {number.slice(-4)}</p>
      <p>Expires {expirationMonth}/{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};

// Iteration 8: LikeButton Component
const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return <button className="button is-primary" onClick={() => setLikes(likes + 1)}>{likes} Likes</button>;
};

// App Component
const App = () => (
  <div className="container">
    <h1 className="title">React Training Lab</h1>
    <IdCard
      lastName="Doe"
      firstName="John"
      gender="male"
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    <Greetings lang="fr">François</Greetings>
    <Random min={1} max={100} />
    <BoxColor r={255} g={0} b={0} />
    <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white"
    />
    <LikeButton />
  </div>
);

export default App;

        </a>
      </header>
    </div>
  );
}

export default App;
