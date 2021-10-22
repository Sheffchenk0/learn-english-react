import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Изучай Английский вместе с нами!</span>
      <h2>
        Для начала ты можешь пройти блок теории. <br />
        Если ты уверен в своих силах, то можешь сразу пройти экзамен!
      </h2>
      <div className={styles.buttons}>
        <button className="button--green">Теория</button>
        <button>Экзамен</button>
      </div>
    </div>
  );
};

export default React.memo(Home);
