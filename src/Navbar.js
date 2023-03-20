import React, { useEffect } from 'react';
import './Navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Dasboard } from './state/reducer/index';
import Article from './Components/Article';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Messages from './Components/Messages';
import Services from './Components/Services';



const Navbar = () => {
  const curState = useSelector((state) => state.data.state);
  const dispatch = useDispatch();

  const handleButtonClick = (type) => {
    dispatch(Dasboard(type));
  };

  // useEffect(() => {
  //   console.log("curState>>", curState);
  // }, [curState])


  return (
    <>
      <div className='container'>
        <div className='sidebar'>
          <h2>
            <span>Side</span>Bar
          </h2>
          <ul>
            <li>
              <button onClick={() => handleButtonClick('Article')}>Article</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Clients')}>Clients</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Contact')}>Contact</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Messages')}>Messages</button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Services')}>Services</button>
            </li>
          </ul>
        </div>
        <div className='sidebar-01'>
          {curState === 'Article' && <Article />}
          {curState === 'Clients' && <Clients />}
          {curState === 'Contact' && <Contact />}
          {curState === 'Messages' && <Messages />}
          {curState === 'Services' && <Services />}
        </div>
      </div>
    </>
  );
};

export default Navbar;

