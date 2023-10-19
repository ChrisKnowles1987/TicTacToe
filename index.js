var marker = "X"



let turns = 0
function cellClicked(event){
    
    event.target.textContent= marker
    marker = marker === "X"? 'O': 'X'
    
    checkWinner()

}

// grid = document.getElementsByClassName('cell')
// firstCell= grid[0]
    


function checkWinner(){
    grid = document.getElementsByClassName('cell')
    XOArray =[]
    const connect3 = [
        [0,1,2],
        [3,4,5],
        
        ]
       
    
    
    for ( index = 0; index < grid.length; index++) {
        currentCell = grid[index]
        
        if (currentCell.innerText === 'X'){
            XOArray.push('X')
            }
        if (currentCell.innerText === 'O'){
            XOArray.push('X')
            }
        else {
            XOArray.push('')
        }
        }
        XOArray.forEach((value, index) => {
            console.log(value,index,)
            
        });
                
            
        }
    
    

