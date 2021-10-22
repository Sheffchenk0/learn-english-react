import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/reducers';
import styles from './Pagination.module.css';

const Pagination = ({ count = 0, page, acceptPages }) => {
  const dispatch = useDispatch();
  const onClick = (id) => {
    dispatch(setPage(id));
  };
  return (
    <div className={styles.pagination}>
      {Array.from({ length: count }).map((el, index) => {
        return (
          <div
            onClick={() => {
              onClick(index);
            }}
            key={index}
            className={classNames(styles.dot, {
              [styles.active]: page === index,
              [styles.complete]: acceptPages.includes(index),
            })}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Pagination);
