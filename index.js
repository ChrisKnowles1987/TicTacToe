var marker = "X"

function cellClicked(event) {
    if (event.target.textContent === '') {
        event.target.textContent = marker
        let XOArray = makeArray()
        checkWinner(XOArray)
        marker = marker === "X" ? 'O' : 'X'
    }
}


function makeArray() {
    grid = document.getElementsByClassName('cell')
    let XOArray = []
    for (index = 0; index < grid.length; index++) {
        currentCell = grid[index]
        XOArray.push(currentCell.innerText)
    }
    return XOArray;
}
function checkWinner(XOArray) {


    connect3 = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    //point to the index of each cell for each winning line
    for (let i = 0; i < connect3.length; i++) {

        const connect3Line = connect3[i]

        let a = XOArray[connect3Line[0]]
        let b = XOArray[connect3Line[1]]
        let c = XOArray[connect3Line[2]]
        console.log(a, b, c)
        // check if each of the indexes are the same (X or O) in each winning line

        if (a === b && b === c && (a === 'X' || a === 'O')) {
            Winner = true
            setTimeout(function () { alert("my message"); }, 0);


            console.log(marker + ' wins!')

            return

        }
    }
}


