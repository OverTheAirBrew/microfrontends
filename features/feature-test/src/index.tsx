import { useState, useEffect } from 'react';

const Home = () => {
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const changeColor = () => {
    setBgColor('black');
    setTextColor('white');
  };

  useEffect(changeColor, []);

  return <>HELLO THIS PAGE AGAIN, HELLO THIS IS SOMETHING</>;
};

export default Home;
