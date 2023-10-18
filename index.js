var marker = "X"


function cellClicked(event){
    event.target.textContent= marker
    marker = marker === "X"? 'O': 'X'

}
