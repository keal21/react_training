import React, {useState} from 'react';
import {connect} from "react-redux";
import {Field, Form, Formik, useField} from "formik";
import Popup from "../system/Popup";
import styles from '../../css/styles.module.css';
import {cancelEditMovieAction} from "../../actions/movieActions";

const FormField = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label>
                {label}
                <br/>
                <Field {...field} {...props}/>
            </label>
            <br/>
            {/*meta.touched &&*/ meta.error
                ? <div className={styles.error}>{meta.error}</div>
                : <br/>}
            <br/>
        </div>
    );
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

const MovieFormBase = (props) => {
    const [item] = useState(props.source);

    const handleSubmit = (values) => {
        props.saveHandler(values);
        props.cancelEditMovieAction();
    }

    return (
        <Popup>
            <h3>{props.title}</h3>

            <Formik
                initialValues={item}
                validate={validate}
                onSubmit={values => handleSubmit(values)}>

                {({resetForm}) => (
                    <Form>
                        <FormField name="title" label='Title'/>
                        <FormField name="releaseDate" label='Release Date'/>
                        <FormField name="url" label='Url'/>
                        <FormField name="genre" label='Genre'/>
                        <FormField name="overview" label='Overview'/>
                        <FormField name="runtime" label='Runtime'/>

                        <div>
                            <button type='button' onClick={() => resetForm(props.source)}>Reset</button>

                            <div className={styles.gap100}/>

                            <button type='submit'>Submit</button>

                            <div className={styles.gap20}/>

                            <button type='button' onClick={props.cancelEditMovieAction}>Cancel</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Popup>
    )
}

const mapStateToProps = state => ({
    source: state.movieEdit,
});

const mapDispatchToProps = dispatch => ({
    cancelEditMovieAction: () => dispatch(cancelEditMovieAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieFormBase);
