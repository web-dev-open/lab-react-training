import './Greetings.css';

function Greetings({ lang, children }) {
  const text = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div className="Greetings">
      {text[lang]} {children}
    </div>
  );
}

export default Greetings;
