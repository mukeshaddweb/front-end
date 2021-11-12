var turn = 1;
        var win = 0;
        var message = document.querySelector("h1");
        const matrix = [
            [-1, -2, -3],
            [-4, -5, -6],
            [-7, -8, -9]
        ];

        // console.log (matrix[0][0]);

        
        function playeraction(box, row, col) {
            if (box.innerHTML != '') return;
            if (win != 0) return;

            box.style.boxShadow="-2px 5px 20px 1px blue"
            console.log("row is "+row);
            console.log("col is "+col);
            matrix[row][col] = turn;
            
            if (turn == 1) {
                box.innerHTML = "X";
                
                console.log(matrix[0][0]);
                message.innerHTML = "Player 2 turn";
                turn = 2;
            } else if (turn == 2) {
                box.innerHTML = "O";
                // matrix[row][col] = 2;
                message.innerHTML = "Player 1 turn";
                turn = 1;
            }

            console.log("first element "+matrix[0][0]);
            console.log("second element "+matrix[0][1]);
            
                // ..........winning conditions..........
                //row check
                if(matrix[0][0] == matrix[0][1]){
                    console.log("im in if.");
                    if(matrix[0][1] == matrix[0][2]){
                    
                    win = matrix[0][0];}  
                }
                if(matrix[1][0] == matrix[1][1]){
                    // console.log("im in if.");
                    if(matrix[1][1] == matrix[1][2]){
                    
                        win = matrix[1][0]; 
                    }  
                }
                if(matrix[2][0] == matrix[2][1]){
                    // console.log("im in if.");
                    if(matrix[2][1] == matrix[2][2]){
                    
                    win = matrix[2][0];  } 
                }



                //col check
                if(matrix[0][0] == matrix[1][0]){
                    // console.log("im in if.");
                    if(matrix[1][0] == matrix[2][0]){
                    
                    win = matrix[0][0];   }
                }


                if(matrix[0][1] == matrix[1][1]){
                    // console.log("im in if.");
                    if(matrix[1][1] == matrix[2][1]){
                    
                    win = matrix[0][1];  } 
                }


                if(matrix[0][2] == matrix[1][2]){
                    // console.log("im in if.");
                    if(matrix[1][2] == matrix[2][2]){
                    
                    win = matrix[0][2];  } 
                }  
            

            // diagonal check
            if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2]){
                win = matrix[1][1];
            }
            if(matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]){
                win = matrix[1][1];
            }

            if(win!=0){
                document.getElementById("message").innerHTML ="Player "+win+" wins";
                document.querySelector("#restart").innerHTML="<button>Restart</button>";
                document.querySelector("button").style.boxShadow="-2px 5px 20px 1px green";
                document.getElementByTagName("h1").innerHTML.style.color="green";
            }

            console.log("win is "+win);
        }