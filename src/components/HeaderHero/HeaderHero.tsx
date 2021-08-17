import './HeaderHero.css';
import { Link } from 'react-router-dom';
import heroAvatar from './hero-avatar.jpg';

function HeaderHero() {
  return (
    <div className='header-hero'>
      <div className='landing-messages'>
        <h1>We connect our models with</h1>
        <h1>
          the <span>outside world</span>
        </h1>
      </div>
      <p className='landing-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit
        adipisci, nesciunt sit sequi commodi quam eum optio, et quidem veniam
        autem labore at, eveniet vitae ipsam ex officia aspernatur.
      </p>
      <p className='header-cta'>
        <Link to='/' className='cta-a'>
          Get Started
        </Link>
      </p>
      <div className='hero-image'>
        <img src={heroAvatar} alt='hero avatar' />
      </div>
    </div>
  );
}

export default HeaderHero;
