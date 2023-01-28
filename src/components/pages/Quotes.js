import React from 'react';

const Quotes = () => {
  const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston';
  return (
    <section className="quotes">
      <p className="quote">{quote}</p>
    </section>
  );
};

export default Quotes;
