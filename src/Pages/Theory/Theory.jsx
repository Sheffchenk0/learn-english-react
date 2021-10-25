import React, { useEffect, useState } from 'react';
import TheoryElement from './TheoryElement/TheoryElement';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import TestContainer from './TestContainer/TestContainer';
import styles from './Theory.module.css';
import { useSelector } from 'react-redux';
import { getTheory, checkAnswers, setFinishPage } from '../../redux/reducers';
import { useDispatch } from 'react-redux';

const Theory = () => {
  const { theory, page, count, pagesFinish, answers } = useSelector((state) => ({
    theory: state.theory,
    page: state.page,
    count: state.count,
    pagesFinish: state.pagesFinish,
    answers: state.theory[state.page]?.answers,
  }));
  const [validation, setValidation] = useState([]);
  console.log(validation);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!theory[page]) {
      dispatch(getTheory(page + 1));
    } else if (theory[page]?.type === 1) {
      setValidation([]);
    }
  }, [page, theory]);
  const onSubmit = () => {
    dispatch(checkAnswers(page, validation));
  };
  return (
    <>
      <div className={styles.container}>
        <Header
          count={theory[page]?.count}
          page={page}
          setFinishPage={setFinishPage}
          pagesFinish={pagesFinish}
        />
        <div className={styles.content}>
          {theory[page]?.type === 0 && <TheoryElement theory={theory[page].item} styles={styles} />}
          {theory[page]?.type === 1 && (
            <TestContainer
              validation={validation}
              setValidation={setValidation}
              test={theory[page]?.item}
              answers={answers}
            />
          )}
        </div>
        <Footer
          isAnswers={answers?.length}
          onSubmit={onSubmit}
          page={page}
          count={count}
          type={theory[page]?.type}
        />
      </div>
    </>
  );
};

export default React.memo(Theory);
