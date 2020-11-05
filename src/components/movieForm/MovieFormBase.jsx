import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Field, Form, Formik, useField,
} from 'formik';
import Popup from '../system/Popup';
import styles from '../../css/styles.module.css';
import { cancelEditMovieAction } from '../../actions/movieActions';

const FormField = (props) => {
  const { name, label } = props;
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={name}>
        {label}
        <br />
      </label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Field id={name} {...field} {...props} />

      <br />
      {/* meta.touched && */ meta.error
        ? <div className={styles.error}>{meta.error}</div>
        : <br />}
      <br />
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Field is required';
  }

  if (!values.releaseDate) {
    errors.releaseDate = 'Field is required';
  }

  if (!values.url) {
    errors.url = 'Field is required';
  }

  if (!values.genre) {
    errors.genre = 'Field is required';
  }

  if (!values.overview) {
    errors.overview = 'Field is required';
  }

  if (!values.runtime) {
    errors.runtime = 'Field is required';
  }

  return errors;
};

const MovieFormBase = ({ title, saveHandler }) => {
  const dispatch = useDispatch();
  const source = useSelector((state) => state.movieEdit);

  const [item] = useState(source);

  const cancelEditMovie = useCallback(() => {
    dispatch(cancelEditMovieAction());
  }, [dispatch]);

  const handleSubmit = useCallback((values) => {
    saveHandler(values);
    cancelEditMovie();
  }, [cancelEditMovie, saveHandler]);

  return (
    <Popup>
      <h3>{title}</h3>

      <Formik
        initialValues={item}
        validate={validate}
        onSubmit={(values) => handleSubmit(values)}
      >

        {({ resetForm }) => (
          <Form>
            <FormField name="title" label="Title" />
            <FormField name="releaseDate" label="Release Date" />
            <FormField name="url" label="Url" />
            <FormField name="genre" label="Genre" />
            <FormField name="overview" label="Overview" />
            <FormField name="runtime" label="Runtime" />

            <div>
              <button type="button" onClick={() => resetForm(source)}>Reset</button>

              <div className={styles.gap100} />

              <button type="submit">Submit</button>

              <div className={styles.gap20} />

              <button type="button" onClick={cancelEditMovie}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </Popup>
  );
};

MovieFormBase.propTypes = {
  title: PropTypes.string.isRequired,
  saveHandler: PropTypes.func.isRequired,
};

export default MovieFormBase;
