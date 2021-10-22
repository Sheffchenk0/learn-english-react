import React, { useEffect, useState } from 'react';
import TheoryElement from './TheoryElement/TheoryElement';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import TestContainer from './TestContainer/TestContainer';
import styles from './Theory.module.css';
import { useSelector } from 'react-redux';
import { getTheory } from '../../redux/reducers';
import { useDispatch } from 'react-redux';

const Theory = () => {
  const { theory, page, count, type, acceptPages } = useSelector((state) => ({
    theory: state.theory,
    page: state.page,
    count: state.count,
    type: state.type,
    acceptPages: state.acceptPages,
  }));
  const [validation, setValidation] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheory(page + 1));
  }, [page]);
  return (
    <>
      {(theory && (
        <div className={styles.container}>
          <Header count={theory.count} page={page} acceptPages={acceptPages} />
          <div className={styles.content}>
            {theory.type === 0 && <TheoryElement theory={theory.item} styles={styles} />}
            {theory.type === 1 && (
              <TestContainer
                validation={validation}
                setValidation={setValidation}
                test={theory.item}
              />
            )}
          </div>
          <Footer page={page} count={count} type={type} />
        </div>
      )) ||
        404}
    </>
  );
};

export default React.memo(Theory);
