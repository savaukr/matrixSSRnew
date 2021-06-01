import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
import {act as actUtils} from 'react-dom/test-utils';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import {rootReducer} from './redux/rootReducer'
import { act, create } from "react-test-renderer";
import {IStateMatrix} from './typesTS/typesTS'
import App from './App'

let container
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});


describe("App component", () => {
    test("it shows the form for adding params of matrix", () => {
        const preloadedState:IStateMatrix = {
            matrix: {matrix: []},
            params:  {M1:null, N1:null, X1:null}
        }
        const store = createStore(rootReducer, preloadedState);
        let component
        act(() => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
            const instance = component?.root;
            const button = instance.findByType('button');
            expect(button.props.children).toBe('Відправити параметри матриці')
    });

    test("it shows the matrix", () => {
        const preloadedState = {
            matrix: {matrix:[[
                {amount: 100, bright: false, id: '0x0', part: false},
                {amount: 300, bright: false, id: '0x1', part: false},
            ]]},
            params:  {M1:1, N1:2, X1:1}
        }
        const store = createStore(rootReducer, preloadedState);
        let component
        act(() => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
        
        const instance = component?.root;
        const h4 = instance.findByType('h4');
        expect(h4.props.children).toEqual(["Matrix ", 1, "x", 2])
    });

    
});

describe('test for user event', () => {
    test("it shows the matrix and it clicks on the ceil", () => {
        let component
        const preloadedState = {
            matrix: {matrix:[[
                {amount: 100, bright: false, id: '0x0', part: false},
                {amount: 300, bright: false, id: '0x1', part: false},
            ]]},
            params:  {M1:1, N1:2, X1:1}
        }
        const store = createStore(rootReducer, preloadedState);
      
        act(() => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
        
        const instance = component.root;
        const ceil = instance.findByProps({'data-id':'0x1'});
        const amount = +ceil.props.children[0]
      
        actUtils(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, container);
          });
        ReactTestUtils.Simulate.click(container.querySelector("[data-id='0x1']"))
    
        act(() => expect(+ceil.props.children[0]).toEqual(+amount+1))
    });
})