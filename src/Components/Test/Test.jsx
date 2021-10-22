import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Test.module.css';

const Test = ({ text__after, text__before, answers, validation, setValidation, id }) => {
  const onClick = (testId, title, isRight) => {
    setValidation((state) => {
      let result = [...state];
      console.log(result);
      result[id] = { id: testId, title: title, isRight: isRight };
      console.log(result);
      return result;
    });
  };
  return (
    <div className={styles.test}>
      <div className={styles.text}>
        {text__before} <div className={styles.empty}>{validation[id] && validation[id].title}</div>
        {text__after}
      </div>

      <div className={styles.answers}>
        {answers.map((el, index) => {
          return (
            <div
              onClick={() => {
                onClick(index, el.title, el.isRight);
              }}
              key={index}
              className={classNames(styles.answer, {
                [styles.active]: index === validation[id]?.id,
              })}>
              {el.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Test);
