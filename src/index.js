const ship = (length, hits, id) => {

    const hit = () => {
        hits++
        return hits
    }

    const isSunk = () => {
        if(hits < length){
            return false
        } else {
            return true
        }
    }

    return{length,hits,id,hit,isSunk}
}

const gameBoard = () => {

    let boardArray = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ]

    let currentShips = []

    const placeShip = (ship, location, orientation) => {

        currentShips[ship.id] = ship

        if (location[0] >= 0 && location[0] <= 6 &&
            location[1] >= 0 && location[1] <= 6) {

                let startPos = location
                let endPos = []

                if(orientation === "y"){

                    endPos = [startPos[0]+ship.length-1,startPos[1]]
                    for(let x = startPos[0]; x <= endPos[0]; x++){
                        if(boardArray[x][startPos[1]] !== 0){
                            return false
                        } else {
                            boardArray[x][startPos[1]] = ship.id
                        }
                    }
                    return (endPos[0] < 8 ? boardArray : false)

                } else {

                    endPos = [startPos[0],startPos[1]+ship.length-1]
                    for(let y = startPos[1]; y <= endPos[1]; y++){
                        if(boardArray[startPos[0]][y] !== 0){
                            return false
                        } else {
                            boardArray[startPos[0]][y] = ship.id
                        }
                        
                    }
                    return (endPos[1] < 8 ? boardArray : false)
                }

        } else {

            return false
        } 
    }

    const receiveAttack = (coordinates) => {
        if(boardArray[coordinates[0]][coordinates[1]] !== 0){
            let shipId = boardArray[coordinates[0]][coordinates[1]]
            let ship = currentShips[shipId]
            return ship.hit() 
        } else {
            boardArray[coordinates[0]][coordinates[1]] = 'M'
        }
    }
    return{placeShip, receiveAttack, boardArray}
}

export {ship, gameBoard}