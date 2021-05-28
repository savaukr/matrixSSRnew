import React from 'react'
import TestRenderer from 'react-test-renderer';
import {AddRow} from './AddRow'

const addRowHandle = () => {
    console.log('addRow')
}

const testRenderer = TestRenderer.create(
    <AddRow addRowHandle = {addRowHandle} />
)
const testInstance = testRenderer.root;

test('props could to be', () => {
    expect(testInstance.findByProps({className:'addrRow-wrap'}).type).toBe('div');
  });
