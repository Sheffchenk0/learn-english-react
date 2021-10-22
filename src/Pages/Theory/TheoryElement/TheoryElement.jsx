import React from 'react';
import styles from './TheoryElement.module.css';

const TheoryElement = ({ theory }) => {
  return (
    <>
      <div className={styles.title}>{theory.title}</div>
      {theory.p.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}
      <h2>{theory.h2}</h2>
      {theory.inline.length && (
        <div className={styles.inline}>
          {theory.inline.map((el, index) => {
            return (
              <div key={index} className={styles.inline__element}>
                <h3>{el.h3}</h3>
                {el.p.length &&
                  el.p.map((text, index) => {
                    return <p key={index}>{text}</p>;
                  })}
              </div>
            );
          })}
        </div>
      )}
      {theory.p__footer.length &&
        theory.p__footer.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
    </>
  );
};

export default React.memo(TheoryElement);
