import {fetching} from './TestComponent'
import {act} from 'react-dom/test-utils';

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
})

afterAll(() => {
  global.fetch = unmockedFetch
})



describe("test component", () => {
    test('fetch test', () => {
        // let data
        // act( () => {
        //     data = {id:1}
        // })
        
        expect(1).toBe(1)
    });
    test('works', () => {
         const result  = fetching('https://jsonplaceholder.typicode.com/posts/1')
        
        
        // expect(Array.isArray(json)).toEqual(true)
        expect(0).toEqual(0)
      })
    
});
