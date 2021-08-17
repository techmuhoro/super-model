import './FaqContainer.css';
import { FaqItem } from '../index';
import { useState } from 'react';

export function FaqContainer() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      faq: 'How much do you pay models',
      answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic!
          Ipsa quibusdam alias tenetur expedita quos natus voluptate delectus ad
          consequuntur blanditiis dolor fugit ullam, iste earum totam quo,
          tempora consectetur rerum nemo architecto est rem sint dolore. Amet,
          quos!`,
      open: false,
    },
    {
      id: 2,
      faq: 'Is it free to join your agency',
      answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic!
          Ipsa quibusdam alias tenetur expedita quos natus voluptate delectus ad
          consequuntur blanditiis dolor fugit ullam, iste earum totam quo,
          tempora consectetur rerum nemo architecto est rem sint dolore. Amet,
          quos!`,
      open: false,
    },
    {
      id: 3,
      faq: 'How much do you pay models',
      answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic!
          Ipsa quibusdam alias tenetur expedita quos natus voluptate delectus ad
          consequuntur blanditiis dolor fugit ullam, iste earum totam quo,
          tempora consectetur rerum nemo architecto est rem sint dolore. Amet,
          quos!`,
      open: false,
    },
    {
      id: 4,
      faq: 'How much do you pay models',
      answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic!
          Ipsa quibusdam alias tenetur expedita quos natus voluptate delectus ad
          consequuntur blanditiis dolor fugit ullam, iste earum totam quo,
          tempora consectetur rerum nemo architecto est rem sint dolore. Amet,
          quos!`,
      open: false,
    },
  ]);
  const openFaqItem = (id: number) => {
    const newFaqs = faqs.map(item => {
      if (item.id === id) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
      return item;
    });
    setFaqs(newFaqs);
  };
  const faqComponents = (function () {
    const arr = faqs.map(item => (
      <FaqItem
        key={item.id}
        question={item.faq}
        answer={item.answer}
        id={item.id}
        open={item.open}
        openFaqItem={openFaqItem}
      />
    ));
    return arr;
  })();
  return (
    <div className='faq-container'>
      <div className='faqs-wrapper'>{faqComponents}</div>
    </div>
  );
}
