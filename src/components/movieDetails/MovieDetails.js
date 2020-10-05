import React from 'react';
import {connect} from "react-redux";
import {cancelDetailMovieAction} from "../../actions";
import Popup from "../system/Popup";

function MovieDetails({item, ...props}) {
    return (
        <Popup>
            <div style={{minWidth: '600px'}}>
                <div style={{display: 'inline-block'}}>
                    <img alt='movie' src={item.url} style={{width: '300px', height: '450px'}}/>
                </div>

                <div style={{display: 'inline-block', padding: '0 20px', verticalAlign: 'top'}}>
                    <h1>{item.title}</h1>
                    <h4>{item.releaseDate}</h4>
                    <h4>{item.genre}</h4>
                    <h3>{item.overview}</h3>
                    <h5>{item.runtime}</h5>
                </div>
            </div>

            <p/>

            <button onClick={props.cancelDetailMovieAction}>Close</button>
        </Popup>
    );
}

const mapStateToProps = state => ({
    item: state.movieDetails,
});

const mapDispatchToProps = dispatch => ({
    cancelDetailMovieAction: () => dispatch(cancelDetailMovieAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
