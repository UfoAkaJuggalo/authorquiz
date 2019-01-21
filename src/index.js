import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
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

const state = {
    turnData:getTurnData (authors),
    highlight: 'none'
};

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book)=>book===answer);
    state.highlight = isCorrect?'correct':'wrong';
    render();
}

function App() {
    return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />;
}

function AddAuthorForm({match}) {
    return <div>
        <h1>Dodaj autora</h1>
        <p>{JSON.stringify(match)}</p>
    </div>
}

function render() {
    ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={App}/>
            <Route path="/add" component={AddAuthorForm}/>
        </React.Fragment>        
    </BrowserRouter>, document.getElementById('root'));
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();