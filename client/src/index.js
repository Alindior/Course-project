import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers
 } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

import "./styles/index.scss";
import App from './App'
import * as reducers from "./store/reducers";
import { AuthService, BooksService, CommentService, RatingService, ChaptersService, UserService, TagService } from "./services";


const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk.withExtraArgument({
    AuthService: new AuthService(),
    BooksService: new BooksService(),
    CommentService: new CommentService(),
    RatingService: new RatingService(),
    ChaptersService: new ChaptersService(),
    UserService: new UserService(),
    TagService: new TagService()
  }))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);