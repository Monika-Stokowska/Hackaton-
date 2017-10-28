 var domBODY=document.getElementsByTagName('body'); console.log(domBODY);

 function generateBoard(rows, cols,boardId){
     var y,x;
     var domBoard=document.querySelector('#'+boardId);
     for(y=0; y<rows; y++) {
         var domTR=document.createElement('tr');
         for(x=0; x<cols; x++){
             var domTD=document.createElement('td');
             var domTxt=document.createTextNode(x+'x'+y);
             domTD.appendChild(domTxt);
             domTR.appendChild(domTD);
         }
            domBoard.appendChild(domTR);
     }
 }
    function initializeGame() {
        document.querySelector('#startGame').addEventListener(click', function() {
            console.log('Imię to: ', document.querySelector('#playerName').value;
                if (tmpName.length > 0) {
                    console.log('Imię to: ', tmpName);
                    startGame(tmpName); 
                } else {
                    alert('Musisz podać imię!');
                }

                });
        }
    }
    generateBoard(10,10,'me');