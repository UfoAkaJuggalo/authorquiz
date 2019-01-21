import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Frederick Forsyth',
        imageUrl: 'images/authors/forsyth.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Day of the Jackal']
    },
    {
        name: 'Stanislaw Lem',
        imageUrl: 'images/authors/lem.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Solaris']
    },
    {
        name: 'William Gibson',
        imageUrl: 'images/authors/gibson.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Neuromancer']
    },
    {
        name: 'Henning Mankell',
        imageUrl: 'images/authors/Mankell.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Wallanders First Case']
    },
    {
        name: 'Jo Nesbo',
        imageUrl: 'images/authors/nesbo.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Snowman']
    },
    {
        name: 'Bruce Sterling',
        imageUrl: 'images/authors/Sterling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Islands in the Net']
    }
];

const state = {
    turnData:{
        author: authors[0],
    books: authors[0].books
    }
}
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
