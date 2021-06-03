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

//import { JSDOM } from 'jsdom'
//--config=jest.config.json

//================================================================================
//test: are params that matrix renders, also form renders
describe("App component", () => {
    //------------------------------------------------------------------------
    test("it shows the form for adding params of matrix", () => {
        let preloadedState:IStateMatrix = {
            matrix: {matrix: []},
            params:  {M1:null, N1:null, X1:null}
        }
        let store = createStore(rootReducer, preloadedState);
        let component
        act(() => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
            // const instance = component.root;
            // const button = instance.findByType('button');
            // expect(button.props.children).toBe('Відправити параметри матриці')
        expect(component.toJSON()).toMatchSnapshot()
        preloadedState = {
            matrix: {matrix:[[
                {amount: 100, bright: false, id: '0x0', part: false},
                {amount: 300, bright: false, id: '0x1', part: false},
                {amount: 440, bright: false, id: '0x2', part: false}
            ]]},
            params:  {M1:1, N1:3, X1:2}
        }
        store = createStore(rootReducer, preloadedState);
        act(() => {
            component.update(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
        expect(component.toJSON()).toMatchSnapshot()
    });
    //---------------------------------------------------------------------
    // test("it shows the matrix", () => {
    //     const preloadedState = {
    //         matrix: {matrix:[[
    //             {amount: 100, bright: false, id: '0x0', part: false},
    //             {amount: 300, bright: false, id: '0x1', part: false},
    //             {amount: 440, bright: false, id: '0x2', part: false}
    //         ]]},
    //         params:  {M1:1, N1:3, X1:2}
    //     }
    //     const store = createStore(rootReducer, preloadedState);
    //     let component
    //     act(() => {
    //         component = create(
    //             <Provider store={store}>
    //                 <App />
    //             </Provider>
    //         );
    //     })
        
    //     const instance = component?.root;
    //     const h4 = instance.findByType('h4');
    //     expect(h4.props.children).toEqual(["Matrix ", 1, "x", 3])
    // });

    
});


//=============================================================================================================
describe('test for user event', () => {
    let container, store,
    component, createComponent, renderComponent
    const preloadedState = {
        matrix: {matrix:[[
            {amount: 100, bright: false, id: '0x0', part: false},
            {amount: 300, bright: false, id: '0x1', part: false},
            {amount: 440, bright: false, id: '0x2', part: false}
        ]]},
        params:  {M1:1, N1:2, X1:1}
    }
    
    container = document.createElement("div");
    document.body.appendChild(container);
    // const jsdom = new JSDOM()
    // container = jsdom.window.document.createElement('div')

    beforeEach(() => {  
    
        store = createStore(rootReducer, preloadedState);
        createComponent = () => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        }
        renderComponent = () => {
            ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, container);
        }
    });

    afterEach(() => {
       //document.body.removeChild(container);
       //container = null;
    });
    
   //--------------------------------------------------------------------------
   //click on ceil
    test("it shows the matrix and it clicks on the ceil", () => {        
        act(createComponent)
        const instance = component.root;
        const ceil = instance.findByProps({'data-id':'0x1'});
        const amount = +ceil.props.children[0]
        actUtils(renderComponent);
        const ceilDom = container.querySelector("[data-id='0x1']")
        ReactTestUtils.Simulate.click(ceilDom)
        act(() => expect(+ceil.props.children[0]).toEqual(amount+1))
    });
    //--------------------------------------------------------------------------------------
    //mouseover and mpuseout  on ceil
    test("it shows the matrix and it hover on the ceil", () => {        
        act(createComponent)
        actUtils(renderComponent);
        const ceil = container.querySelector("[data-id='0x1']")
        ReactTestUtils.Simulate.mouseOver(ceil)
        const brightOver = store.getState().matrix.matrix[0][0].bright
        act(() => expect(brightOver).toBe(true))
        ReactTestUtils.Simulate.mouseOut(ceil)
        const brightOut = store.getState().matrix.matrix[0][0].bright
        act(() => expect(brightOut).toBe(false))
    });
    //--------------------------------------------------------------------------------------
    //hover on sum
    test("it shows the matrix and it hover on the sum", () => {        
        act(createComponent)
        actUtils(renderComponent);
        const ceilSum = container.querySelector("[data-ind='0']")
        ReactTestUtils.Simulate.mouseOver(ceilSum)
        const partOver = store.getState().matrix.matrix[0][0].part
        act(() => expect(partOver).toBe(true))
        ReactTestUtils.Simulate.mouseOut(ceilSum)
        const partOut = store.getState().matrix.matrix[0][0].part
        act(() => expect(partOut).toBe(false))
    });
    //------------------------------------------------------------------------------------
    //click on delete row
    test("delete row", () => {        
        act(createComponent)
        actUtils(renderComponent);
        const lengthStart = store.getState().matrix.matrix.length
        ReactTestUtils.Simulate.click(container.querySelector(".sidebar-row button"))
        const lengthEnd = store.getState().matrix.matrix.length
        act(() => expect(lengthStart).toBe(lengthEnd+1))
    });
    //------------------------------------------------------------------------------------
    //click on add row
    test("add row", () => {        
        act(createComponent)
        actUtils(renderComponent);
        const lengthStart = store.getState().matrix.matrix.length
        ReactTestUtils.Simulate.click(container.querySelector(".addrRow-wrap button"))
        const lengthEnd = store.getState().matrix.matrix.length
        //console.log('store', store.getState().matrix.matrix)
        act(() => expect(lengthStart).toBe(lengthEnd-1))
    });

})