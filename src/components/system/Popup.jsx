import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/styles.module.css';

const Popup = ({ children }) => (
  <div className={styles.popupBackground}>
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <div>{children}</div>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popup;
