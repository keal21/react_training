import React, {useState} from 'react';
import {connect} from "react-redux";
import Popup from "../system/Popup";
import styles from '../../css/styles.module.css';
import {cancelEditMovieAction} from "../../actions/movieActions";

const MovieFormBase = ({title, ...props}) => {
    const [item, setItem] = useState({...props.source});

    const reset = () => {
        setItem({...props.source});
    }

    const onChangeHandler = (e) => {
        item[e.target.name] = e.target.value;
        setItem({...item});
    }

    const handleSubmit = () => {
        props.saveHandler(item);
        props.cancelEditMovieAction();
    }

    return (
        <Popup>
            <h3>{title}</h3>

            <form onSubmit={handleSubmit}>
                <span>Title</span><br/>
                <input type="text" name="title" value={item.title} onChange={onChangeHandler}/><br/><br/>

                <span>Release Date</span><br/>
                <input type="text" name="releaseDate" value={item.releaseDate} onChange={onChangeHandler}/><br/><br/>

                <span>Url</span><br/>
                <input type="text" name="url" value={item.url} onChange={onChangeHandler}/><br/><br/>

                <span>Genre</span><br/>
                <input type="text" name="genre" value={item.genre} onChange={onChangeHandler}/><br/><br/>

                <span>Overview</span><br/>
                <input type="text" name="overview" value={item.overview} onChange={onChangeHandler}/><br/><br/>

                <span>Runtime</span><br/>
                <input type="text" name="runtime" value={item.runtime} onChange={onChangeHandler}/>
            </form>

            <p/>

            <div>
                <button onClick={reset}>Reset</button>

                <div className={styles.gap100}/>

                <button onClick={handleSubmit}>Submit</button>

                <div className={styles.gap20}/>

                <button onClick={props.cancelEditMovieAction}>Cancel</button>
            </div>
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
