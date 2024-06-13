import { createStore, combineReducers } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';




const categoriesReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_CATAGORIES':
            return action.payload;
        default:
            return state; 
        
    }

}


const favoritesReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state; 
        
    }

}
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({ 
      plantList 
  

    }),
    applyMiddleware(sagaMiddleware, logger)
  );


  sagaMiddleware.run(rootSaga)
export default store;