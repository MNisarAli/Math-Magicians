import React from 'react';

const Home = () => {
  const text1 = 'Math magicians calculator web application is a convenient tool for performing mathematical calculations. It eliminates the need for a physical calculator, making it accessible from any device with internet access. With this web application, you can perform basic calculations such as addition, subtraction, multiplication, and division as well as more advanced calculations like trigonometry, logarithms, and more.';

  const text2 = 'One of the most appealing features of this web application is its ability to save and retrieve calculations. This means you can save a calculation and refer to it later, or even share it with others. This feature is especially useful for students, professionals, and anyone who needs to keep track of their calculations for later reference.';

  return (
    <section className="home">
      <h1>Welcome to our page!</h1>
      <p>{text1}</p>
      <p>{text2}</p>
    </section>
  );
};

export default Home;
