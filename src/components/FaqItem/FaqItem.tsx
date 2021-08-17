import './FaqItem.css';

export function FaqItem({
  question,
  answer,
  id,
  open,
  openFaqItem,
}: {
  question: string;
  answer: string;
  id: number;
  open: boolean;
  openFaqItem: (id: number) => void;
}) {
  return (
    <div className={open ? 'faq-item show' : 'faq-item'}>
      <div
        className='faq-item-head'
        onClick={() => {
          openFaqItem(id);
        }}
      >
        <p>{question}</p>
        <p>{open ? '-' : '+'}</p>
      </div>
      <div className='faq-item-body'>
        <p>{answer}</p>
      </div>
    </div>
  );
}
