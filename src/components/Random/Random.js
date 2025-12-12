import './Random.css';

function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="Random">
      Random value between {min} and {max} =&gt; {randomNum}
    </div>
  );
}

export default Random;
