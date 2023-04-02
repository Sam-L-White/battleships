const ship = (length, hits) => {

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

    return{length,hits,hit,isSunk}
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

    const placeShip = (ship, location, orientation) => {

        if (location[0] >= 0 && location[0] <= 6 &&
            location[1] >= 0 && location[1] <= 6) {

                let startPos = location
                let endPos = []

                if(orientation === "y"){

                    endPos = [startPos[0]+ship.length-1,startPos[1]]
                    for(let x = startPos[0]; x <= endPos[0]; x++){
                        if(boardArray[x][startPos[1]] == 1){
                            return false
                        } else {
                            boardArray[x][startPos[1]] = 1
                        }
                    }
                    return (endPos[0] < 8 ? boardArray : false)

                } else {

                    endPos = [startPos[0],startPos[1]+ship.length-1]
                    for(let y = startPos[1]; y <= endPos[1]; y++){
                        if(boardArray[startPos[0]][y] == 1){
                            return false
                        } else {
                            boardArray[startPos[0]][y] = 1
                        }
                        
                    }
                    return (endPos[1] < 8 ? boardArray : false)
                }

        } else {

            return false
        } 
    }

    const receiveAttack = (coordinates) => {

    }
    return{placeShip, receiveAttack, boardArray}
}

export {ship, gameBoard}