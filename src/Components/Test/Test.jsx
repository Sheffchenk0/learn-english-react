import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Test.module.css';

const Test = ({
  text__after,
  text__before,
  answers,
  validation,
  setValidation,
  id,
  answer,
  answerTitle,
}) => {
  console.log(answer);
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
        {text__before}
        <div
          className={classNames(styles.answer, {
            [styles.succes]: answer !== undefined && answer,
            [styles.reject]: answer !== undefined && !answer,
          })}>
          {(answerTitle !== undefined && answerTitle) || (validation[id] && validation[id].title)}
        </div>
        {text__after}
      </div>

      <div className={styles.answers}>
        {answers.map((el, index) => {
          return (
            <div
              onClick={() => {
                if (answer === undefined) {
                  onClick(index, el.title, el.isRight);
                }
              }}
              key={index}
              className={classNames(styles.answer, {
                [styles.active]: index === validation[id]?.id,
                [styles.disabled]: index !== validation[id]?.id && answer !== undefined,
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
