import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/reducers';
import Button from '../Button/Button';
import styles from './Footer.module.css';

const Footer = ({ page, count, type }) => {
  const dispatch = useDispatch();
  const onNext = () => {
    if (page + 1 < count) {
      console.log(11);
      dispatch(setPage(page + 1));
    }
  };
  const onPrev = () => {
    if (page > 0) {
      dispatch(setPage(page - 1));
    }
  };
  return (
    <div className={styles.footer}>
      {page !== 0 && (
        <Button onClick={onPrev} className="button--small">
          Назад
        </Button>
      )}
      {type === 1 && <Button className="button--green button--small">Проверить</Button>}
      {page + 1 !== count && (
        <Button onClick={onNext} className="button--green button--small">
          Вперёд
        </Button>
      )}
    </div>
  );
};

export default React.memo(Footer);
