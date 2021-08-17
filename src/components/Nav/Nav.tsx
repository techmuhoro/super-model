import './Nav.css';
import { Link } from 'react-router-dom';
import { SetStateAction, Dispatch } from 'react';

function Nav({ menu }: { menu: [boolean, Dispatch<SetStateAction<boolean>>] }) {
  const [show, setShow] = menu;
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <p>SuperModel</p>
      </div>
      <div className='nav-center'>
        <ul>
          <li>Main</li>
          <li>Product</li>
          <li>Models</li>
          <li>Blog</li>
          <li>Opportunities</li>
        </ul>
      </div>
      <div className='nav-right'>
        <p>Login </p>
        <p>
          <Link to='/'>Sign up</Link>
        </p>
      </div>
      <p className='menu-show' onClick={() => setShow(true)}>
        menu
      </p>
    </div>
  );
}

export default Nav;
