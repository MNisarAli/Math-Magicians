import React from 'react';

const quotes = [
  {
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    quote: 'The only way to learn mathematics is to do mathematics.',
    author: 'Paul Halmos',
  },
  {
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
  },
  {
    quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: 'Shakuntala Devi',
  },
];

const Quotes = () => (
  <section className="quotes">
    {quotes.map((quoteObj) => (
      <p key={quoteObj.quote} className="quote">
        {quoteObj.quote}
        <br />
        <span className="author">
          _
          {quoteObj.author}
        </span>
      </p>
    ))}
  </section>
);

export default Quotes;
