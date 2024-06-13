import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

export const SEARCH_GIPHY ='SEARCH_GIPHY';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'

export const searchGiphy = () =>({
    type: SEARCH_GIPHY,
    payload: query,
});

export const setSearchResults =(results)=>({
    type: SET_SEARCH_RESULTS,
    payload: results,
})


const searchReducer =(state =initialState, action) =>{
    switch(action.type) {
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
}

function* searchGiphySaga(action){try{}}





export default searchReducer;