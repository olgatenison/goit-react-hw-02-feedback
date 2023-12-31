import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.wrapp}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
