var React = require('react');
var ReactDom = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
const axios = require('axios');

//requiring components

var TodoApp = require('TodoApp');
var Login = require('login');
var Signup = require('signup');
var Password = require('password');

var token = window.localStorage.getItem('token');

if (token) {
    axios.defaults.headers.common['x-auth'] = token;
}

var requireLogin = (nextState, replace, next) => {
    if(token) {
        replace('/todos');
    }
    next();
};

var redirectIfLogged = (nextState, replace, next) => {
    if (token) {
        replace('/todos');
    }
    next();
};

//Initialize foundation.js to start the first page
$(document).foundation();

//App css-sass
require('style!')