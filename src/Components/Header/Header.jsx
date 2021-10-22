import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import styles from './Header.module.css';

const Header = ({ count, onClick, page, acceptPages }) => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.back}>
        <div className={styles.arrow}></div>На главную
      </Link>
      <Pagination acceptPages={acceptPages} page={page} count={count} onClick={onClick} />
    </div>
  );
};

export default React.memo(Header);
