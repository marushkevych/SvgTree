import React from 'react';
import styles from './SvgTree.module.css'

function SvgTree(props) {
  return (
      <div className={styles.tree}>
        <div className={styles.treeItem}>Root</div>
        <div className={styles.treeSegment}>
          <LineIntersection/>
          <div className={styles.treeItem}>item 1</div>
        </div>
        <div className={styles.treeSegment}>
          <LineDrop/>
        </div>
        <div className={styles.treeSegment}>
          <LineIntersection/>
          <div className={styles.treeItem}>item 2</div>
        </div>
      </div>
  );
}

export default SvgTree;


function LineIntersection() {
  return (
      <svg width="40" height="40"  version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="40" />
        <line x1="1" y1="25" x2="41" y2="25"  />
      </svg>
  );
}

function LineDrop() {
  return (
      <svg width="40" height="100" viewBox="0 0 40 1" preserveAspectRatio="none">
        <line x1="1" x2="1" y2="1"/>
      </svg>
  );
}
