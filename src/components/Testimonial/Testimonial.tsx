import './Testimonial.css';
import testimonialImage from './testimonial-image.jpg';
import openAvatar from './opening-avatar.svg';
import closingAvatar from './closing-avatar.svg';

export function Testimonial() {
  return (
    <div className='testimonial'>
      <div className='testimonial-wrapper'>
        <div className='testimonial-image'>
          <img src={testimonialImage} alt='testimonial' />
        </div>
        <div className='testimonial-content'>
          <h1>Modelling changed my life</h1>
          <p className='openning-quote'>
            <img src={openAvatar} alt='opening quote' />
          </p>
          <p className='quote-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt praesent semper feugiat nibh sed pulvinar. Sed lectus
            vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            Aenean vel elit scelerisque mauris pellentesque. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan. Nibh cras pulvinar
            mattis nunc sed blandit libero volutpat sed. Gravida neque convallis
            a cras semper Aenean vel elit scelerisque mauris pellentesque. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan. Nibh er
            tincidunt ornare massa eget egestas purus viverra accumsan. Nibh er
          </p>
          <p className='closing-quote'>
            <img src={closingAvatar} alt='closing quote' />
          </p>
        </div>
      </div>
    </div>
  );
}
