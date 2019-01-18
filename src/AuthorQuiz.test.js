import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorQuiz from './AuthorQuiz';

Enzyme.configure({adapter: new Adapter() });

describe("Author Quiz", ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})




