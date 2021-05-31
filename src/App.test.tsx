import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import {rootReducer} from './redux/rootReducer'
import { act, create } from "react-test-renderer";
import {IStateMatrix} from './typesTS/typesTS'
import App from './App'


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

    test("it shows the matrix and it clicks on the ceil", () => {
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
        
        const instance = component.root;
        const ceil = instance.findByProps({'data-id':'0x1'});
        const amount = +ceil.props.children[0]
        console.log('amount= ', ceil.props)
        //act(() => ceil.props.onClick())
        expect(+ceil.props.children[0]).toEqual(+amount)
    });
});