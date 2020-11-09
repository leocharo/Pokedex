import React from 'react';
import styles from './Pagination.module.css'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className={styles.btnContainer}>
      {gotoPrevPage && <button className={styles.btn} onClick={gotoPrevPage} >Previous</button>}
      {gotoNextPage && <button className={styles.btn} onClick={gotoNextPage} >Next</button>}
    </div>
  )
}
