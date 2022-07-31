const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('return an array', () => {
        expect(shuffleArray([1, 2, 3])).toBeInstanceOf(Array)
    })

    test('shuffleArray returns an array of the same length as the argument sent in', () => {
        expect(shuffleArray([1, 2, 3]).length).toBe(3)
    })

})