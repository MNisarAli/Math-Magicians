import React from 'react';

const Home = () => {
  const text1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad accusamus illum molestiae, non reiciendis velit tempore aperiam eius cumque quidem doloremque, corrupti nobis ipsam a consequuntur. Sapiente, sequi impedit harum fugit eius veritatis illum autem libero fuga doloremque eum doloribus est hic in. Enim natus expedita inventore temporibus a commodi.';

  const text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla numquam excepturi non, esse quod, pariatur minima inventore asperiores maiores reprehenderit doloribus sapiente sequi ullam perferendis vitae quos nostrum quisquam praesentium incidunt cum velit tempora natus. Ipsam, quos? Laudantium et exercitationem sequi. Quibusdam illum vero quaerat obcaecati asperiores. Tempora, pariatur?';

  return (
    <section className="home">
      <h1>Welcome to our page!</h1>
      <p>{text1}</p>
      <p>{text2}</p>
    </section>
  );
};

export default Home;
