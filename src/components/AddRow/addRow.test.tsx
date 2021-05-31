import React from 'react'
//import TestRenderer from 'react-test-renderer';
import {create, act} from 'react-test-renderer';
import {AddRow} from './AddRow'

const addRowHandle = () => {
    console.log('addRow')
}


// const testRenderer = TestRenderer.create(
//     <AddRow addRowHandle = {addRowHandle} />
// )
//const testInstance = testRenderer.root;

test('props could to be', () => {
    let component
    act(() => {
        component = create(<AddRow addRowHandle = {addRowHandle} />)
    });
    const instance = component.root;
    const div = instance.findByProps({className:'addrRow-wrap'})
    const button = instance.findByType('button')
    act(() => button.props.onClick())
    expect(div.type).toBe('div');
  });
