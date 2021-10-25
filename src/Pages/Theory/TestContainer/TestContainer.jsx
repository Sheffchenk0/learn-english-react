import React from 'react';
import Test from '../../../Components/Test/Test';
import styles from './TestContainer.module.css';

const TestContainer = ({ test, answers, ...otherProps }) => {
  return (
    <>
      <div className={styles.title}>{`Тест по ${test.title} :`}</div>
      <h2>{test.h2}</h2>
      {test.tests.map((el, index) => {
        return (
          <Test
            key={index}
            id={index}
            text__before={el.text__before}
            text__after={el.text__after}
            answers={el.answers}
            answerTitle={answers[index]?.title}
            answer={answers[index]?.isRight}
            {...otherProps}
          />
        );
      })}
    </>
  );
};

export default React.memo(TestContainer);
