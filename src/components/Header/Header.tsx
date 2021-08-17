import './Header.css';
import { Nav, HeaderHero, MenuDrop } from '../index';
import { useState } from 'react';

function Header() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='header'>
      <Nav menu={[show, setShow]} />
      <HeaderHero />
      <MenuDrop menu={[show, setShow]} />
      <div className='deco-r' />
      <div id='star-five' />
    </div>
  );
}

export default Header;
