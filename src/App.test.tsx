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

let container, store,
component, createComponent, renderComponent

//================================================================================
//test: are params that matrix renders, also form renders
describe("App component", () => {
    
    //------------------------------------------------------------------------
    test("it shows the form for adding params of matrix", () => {
        let preloadedState:IStateMatrix = {
            matrix: {matrix: []},
            params:  {M1:null, N1:null, X1:null}
        }
        store = createStore(rootReducer, preloadedState);
        
        act(() => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
        act(() => expect({M1:null, N1:null, X1:null}).toEqual(store.getState().params))
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
        act(() => expect(preloadedState).toEqual(store.getState()))
        expect(component.toJSON()).toMatchSnapshot()
    });

    //--------------------------------------------------------------------
    test("send params", () => {
        let preloadedState:IStateMatrix = {
            matrix: {matrix: []},
            params:  {M1:null, N1:null, X1:null}
        }
        store = createStore(rootReducer, preloadedState);
        
        act(() => {
            component = create(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        })
    
        const instance = component.root;
        const M1 = instance.findByProps({id: "M1"})
        const N1 = instance.findByProps({id: "N1"})
        const X1 = instance.findByProps({id: "X1"})
        
        expect(M1.props.value).toEqual('');
        const mEvent = { target: { value: '3' , name: 'M1'} };
        const nEvent ={ target: { value: '4' , name: 'N1'} };
        const xEvent = { target: { value: '2' , name: 'X1'} };
        act(() => {
            M1.props.onChange(mEvent)
        })
        act(() => { 
            N1.props.onChange(nEvent)
        })
        act(() => {
            X1.props.onChange(xEvent)
        })
        const form = instance.findByProps({id: "form"})
        const fEvent = {preventDefault: ()=>{}}
        act(() => {
            form.props.onSubmit(fEvent)
        })
        expect(store.getState().params).toEqual({ M1: 3, N1: 4, X1: 2 });
        

        // renderComponent = () => {
        //     ReactDOM.render(
        //         <Provider store={store}>
        //             <App />
        //         </Provider>, container);
        // }
        // actUtils(renderComponent);
        // const M1DOM = container.querySelector("#M1")
        // M1DOM.value = '3'
        // console.log("M1=", M1DOM.value)
        // //M1.value = '2'
        // M1DOM.value = '3'
        // //ReactTestUtils.Simulate.change(M1DOM, { target: { value: "2" } as unknown as EventTarget });
        // ReactTestUtils.Simulate.keyPress(M1DOM, {key: "2", keyCode: 50, which: 50});
        // console.log('store=', store.getState().params)
        // const form = container.querySelector('form')
        // const M1DOM = container.querySelector("#M1")
        
        // ReactTestUtils.Simulate.submit(form);


        // const button = container.querySelector("form button")
        // act(() => expect(store.getState().params).toEqual({ M1: null, N1: null, X1: null }))
        // ReactTestUtils.Simulate.click(button)
        // act(() => expect(store.getState().params).toEqual({ M1: 0, N1: 0, X1: 0 }))
        
    })
});

//=============================================================================================================
describe('test for user event', () => {
   
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

    // afterEach(() => {
    //    //document.body.removeChild(container);
    //    //container = null;
    // });
    
   //--------------------------------------------------------------------------
   //click on ceil
    test("it shows the matrix and it clicks on the ceil", () => {        
        act(createComponent)
        const instance = component.root;
        const ceil = instance.findByProps({'data-id':'0x1'});
        actUtils(renderComponent);
        const ceilDom = container.querySelector("[data-id='0x1']")
        ReactTestUtils.Simulate.click(ceilDom)
        const amount = store.getState().matrix.matrix[0][1].amount
        act(() => expect(+ceil.props.children[0]).toEqual(amount))
        expect(component.toJSON()).toMatchSnapshot()
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
        expect(component.toJSON()).toMatchSnapshot()
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
        expect(component.toJSON()).toMatchSnapshot()
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
        expect(component.toJSON()).toMatchSnapshot()
    });
    //------------------------------------------------------------------------------------
    //click on add row
    test("add row", () => {        
        act(createComponent)
        expect(component.toJSON()).toMatchSnapshot()
        actUtils(renderComponent);
        const lengthStart = store.getState().matrix.matrix.length
        ReactTestUtils.Simulate.click(container.querySelector(".addrRow-wrap button"))
        const lengthEnd = store.getState().matrix.matrix.length
        //console.log('store', store.getState().matrix.matrix)
        act(() => expect(lengthStart).toBe(lengthEnd-1))
       
    });

})