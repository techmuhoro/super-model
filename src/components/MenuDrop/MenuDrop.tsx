import './MenuDrop.css';
import { useState, Dispatch, SetStateAction } from 'react';

function MenuDrop({
  menu,
}: {
  menu: [boolean, Dispatch<SetStateAction<boolean>>];
}) {
  const [show, setShow] = menu;
  return (
    <div className={show ? 'drop-menu show' : 'drop-menu'}>
      <div className='drop-menu-wrapper'>
        <ul>
          <li>Main</li>
          <li>Product</li>
          <li>Models</li>
          <li>Blog</li>
          <li>Oportunities</li>
        </ul>
        <button>Sign up</button>
      </div>
      <p className='close' onClick={() => setShow(false)}>
        x
      </p>
    </div>
  );
}

export default MenuDrop;
