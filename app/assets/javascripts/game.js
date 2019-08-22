$(document).ready( function()    {


    var selection = {piece: '', player: '', row: '', column: '', empty: ''}

    // Game starts with white's turn
    nextTurn = "white";

    // Building all the pieces on the board
    $("[piece]").each(function()    {
        let player = $(this).attr('player');
        let piece = $(this).attr('piece');
        // $(this).css("background-image", src = "app/aseets/images/pieces/"+player+"/"+piece+".png").css("background-size", "60px 60px");
    })

    $("[empty]").on("click", function() {
        console.log("cell clicked");
        var empty = $(this).attr('empty'),
        targetPiece = $(this).attr('piece'),
        targetPlayer = $(this).attr('player'),
        targetRow = $(this).attr('row'),
        targetColumn = $(this).attr('column'),
        targetEmpty = $(this).attr('empty')


        // Making sure the right player is the one starting the game
        if (targetPlayer == nextTurn) {
            selection = {piece:targetPiece, player:targetPlayer, row:targetRow, column:targetColumn, empty:targetEmpty};
            // console.log(player);
            // console.log(piece);
        } else if ( (empty == 'false') && ((targetRow != selection.row) || (targetColumn != selection.column)) ) {// Making sure that the player didn't pick a piece and drop it back in the same cell
            console.log(player);
            console.log(piece);
            if ( typeof targetPiece == 'undefined' )    {
                targetPiece = '';
            }
            if (typeof targetPlayer == 'undefined' )    {
                targetPlayer = '';
            }
            // Checks if the move made is a valid move or not
            validMove(selection.player, selection.piece, selection.row, selection.column, targetPlayer, targetPiece, targetRow, targetColumn);
        }
    })

    //The function to check if the move is a valid move
    function validMove(player, piece, row, column, targetPlayer, targetPiece, targetRow, targetColumn)  {
        row = parseInt(row);
        column = parseInt(column);
        targetRow = parseInt(targetRow);
        targetColumn = parseInt(targetColumn);

        // console.log("player = " + player);
        // console.log("piece = " + piece);
        // console.log("row = " + row);
        // console.log("column = " + column);
        // console.log("targetPlayer = " + targetPlayer);
        // console.log("targetPiece = " + targetPiece);
        // console.log("targetRow = " + targetRow);
        // console.log("targetColumn = " + targetColumn);

        //Logic for moving the Pawn piece
        if (piece == 'pawn')    {
            console.log("Piece = " + piece);
            if (player == 'white')  {
                console.log("Player = " + player);
                var rowLogic = row + 1;
                if (row == 2)   {
                    var firstMoveRowLogic = row + 2;
                }
            } else if (player == 'black') {
                console.log("Player = " + player);
                var rowLogic = row - 1;
                if (row == 7)   {
                    var firstMoveRowLogic = row - 2;
                }
            }

            if ( (targetRow == rowLogic || targetRow == firstMoveRowLogic) && (((targetColumn == (column + 1) || targetColumn == (column - 1)) && targetPiece != '' && targetPlayer != player && targetPlayer != '') || (column == targetColumn && targetPlayer == '')) ) {
                var canMove = true;
                console.log("Correct Move");
            }   else    {
                var canMove = false;
                console.log("Incorrect Move");
            }
        }

        if (canMove == true)    {
            console.log('canMove = true', typeof canMove);
            movePiece(player, piece, row, column, targetRow, targetColumn);
        }   else    {
            console.log('canMove = false', typeof canMove);
        }

    }

    function movePiece(player, piece, row, column, targetRow, targetColumn) {
        var letter = '';
        if (player == 'white')  {
            letter = 'w';
        }   else    {
            letter = 'b';
        }
        var letterPiece = letter.concat(piece);

        //Clear the image of the piece from the cell it is moving from
        $("[row='"+row+"'] [column='"+column+"']").css('background-image', 'none').attr('piece', '').attr('player', '').attr('empty', 'true');
        $("[row='"+row+"'], [column='"+column+"']").removeClass(letterPiece);
        
        //Puts the piece in the new cell
        $("[targetRow='"+targetRow+"'], [targetColumn='"+targetColumn+"']").attr('piece', piece).attr('empty', 'false');
        $("[targetRow='"+targetRow+"'], [targetColumn='"+targetColumn+"']").classList.add(letterPiece);

    }


})



// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM Loaded!");

//     var piece = document.getElementsByClassName("pawn")[0];
//     var cell = document.getElementsByClassName("cell");

//     var pieceHasBeenClicked = false;
//     if (pieceHasBeenClicked == false)   {
//         piece.addEventListener("click", () => {
//             pieceHasBeenClicked = true;
//         });
//     };

//     // Looping through all the pieces and adding a listener for each cell. Then move the piece to wherever the player drops off the piece
//     for ( i = 0; i < cell.length; i++ )  {

//         // Adding a highlight shadow over each piece whenever mouse hover over
//         piece.addEventListener("mouseover", () => {
//             piece.classList.add("selected");
//         });

//         // Taking away the hightligh shadow whenever mouse hover away from piece
//         piece.addEventListener("mouseout", () => {
//             piece.classList.remove("selected");
//         });

//         cell[i].addEventListener("click", (event) => {
//             if ( pieceHasBeenClicked )  {
//                 // var pieceClass = piece.getElementByClassName(" ");
//                 piece.classList.remove("pawn");
//                 event.target.classList.add("pawn");
//                 !pieceHasBeenClicked;
//             };
//         });
//     };
// });

    // piece.addEventListener("click",  () => {
    //     piece.classList.add("selected");
    //     if ( pieceHasBeenClicked ) {
    //         for (i = 0; i < cells.length; i++ ) {
    //             // var pieceClass = piece.getElementByClassName;
    //             cell[i].addEventListener("click", (event) => {
    //                 cell[i].classList.remove("wpawn");
    //                 event.target.classList.add("wpawn");
    //             });
    //         };
    //     };
    // });
// });
