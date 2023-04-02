import {ship, gameBoard} from './index.js'

test('hits', () => {
    let testShip = ship(5, 3, false)
    expect(testShip.hit()).toBe(4)
})

test('sunk', () => {
    let testShip = ship(5, 5)
    let testShip2 = ship(5, 4)
    let testShip3 = ship(5, 4)
    testShip3.hit()
    expect(testShip.isSunk()).toBe(true)
    expect(testShip2.isSunk()).toBe(false)
    expect(testShip3.isSunk()).toBe(true)
})

test('place ship', () => {
    let board = gameBoard()
    
    expect(board.placeShip(ship(5, 4), [3,1])).toEqual([
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ])
    expect(board.placeShip(ship(5, 4), [0,0], "y")).toEqual([
        [1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ])
    expect(board.placeShip(ship(5, 4), [2,1], "x")).toEqual([
        [1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [1,1,1,1,1,1,0],
        [1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ])

    expect(board.placeShip(ship(3, 1), [2,1], "x")).toEqual(false)

    expect(board.placeShip(ship(5, 4), [1,5], "y")).toBe(false)
    expect(board.placeShip(ship(5, 4), [-1,-1], "x")).toBe(false)
    expect(board.placeShip(ship(5, 4), [7,7], "y")).toBe(false)
})

/*test('receive attack', () => {
    let board = gameBoard()
    let testShip = ship(5,4,false)
    board.placeShip(testShip,[1,1],"y")
    expect(board.receiveAttack([1,1])).toBe(testShip.hit())
})*/