import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Training Lab</h1>
      
      <h2>Iteration 1</h2>
      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard lastName='Delores' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />

      <h2>Iteration 2</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Iteration 3</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>Iteration 4</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>Iteration 5</h2>
      <CreditCard type="Visa" number="0123456789018845" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />
      <CreditCard type="Master Card" number="0123456789010995" expirationMonth={3} expirationYear={2021} bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="#222222" />
        <CreditCard
    type="Visa"
    number="0123456789016984"
    expirationMonth={12}
    expirationYear={2019}
    bank="Name of the Bank"
    owner="Firstname Lastname"
    bgColor="#ddbb55"
    color="white"
  />
      <h2>Iteration 6</h2>
      
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>


      <h2>Iteration 7</h2>
      <DriverCard name="Travis Kalanick" rating={4.2} img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE" }} />
       <DriverCard name="Dara Khosrowshahi" rating={4.9} img="https://images.unsplash.com/photo-1718392372853-fa38c8ff37c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car={{ model: "Audi A3", licensePlate: "BE33ER"
	      }}
      />
      <h2>Iteration 8</h2>
      <LikeButton /><LikeButton />

      <h2>Iteration 9</h2>
      
      
    <ClickablePicture
        
        img="https://api.dicebear.com/8.x/adventurer/svg?seed=Harley"
      
        imgClicked="https://api.dicebear.com/8.x/adventurer/svg?seed=Harley&eyebrows=variant04&mouth=variant01&baseColor=e0f2fe&glasses=variant01"
      />

      <h2>Iteration 10</h2>
      <Dice />

      <h2>Iteration 11</h2>
      <Carousel images={['https://randomuser.me/api/portraits/women/1.jpg', 'https://randomuser.me/api/portraits/men/1.jpg', 'https://randomuser.me/api/portraits/women/2.jpg']} />

      <h2>Iteration 12</h2>
      <NumbersTable limit={12} />

      <h2>Iteration 13</h2>
      <RGBColorPicker />
    </div>
  );
}

export default App;