import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter} from 'react-router-dom';
import * as Redux from'redux';
import * as ReactRedux from 'react-redux';
import AddAuthorForm from "./AddAuthorForm";
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississipi', 'Roughing']
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
        books: ['Neuromancer', 'Mona Lisa Overdrive']
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

function getTurnData(authors) {
    const allBooks = authors.reduce((p,c,i)=>{
        return p.concat(c.books);
    },[]);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author)=>author.books.some((title)=>title===answer))
    };
}

function resetState() {
    return {
        turnData:getTurnData (authors),
        highlight: 'none'
    };
}

function reducer(state={authors, turnData: getTurnData(authors), highlight: ''}, action) {
    switch (action.type) {
        case 'ANSWER_SELECTED':
        const isCorrect = state.turnData.author.books.some((book)=>book===action.answer);
            return Object.assign({},state,{highlight:isCorrect ? 'correct' : 'wrong'});
        case 'CONTINUE':
            return Object.assign({}, state, {
                highlight: '',
                turnData: getTurnData(state.authors)
            });
            case 'ADD_AUTHOR':
            return Object.assign({}, state, {
                authors: state.authors.concat([action.author])
            });
        default:
            return state; 
    }
}

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

    ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Route exact path="/" component={AuthorQuiz}/>
                <Route path="/add" component={AddAuthorForm}/>
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();