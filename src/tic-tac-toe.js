class TicTacToe {



    constructor() {
        let N_size = 3;
        this.matrix = [];

        for (let i = 0; i < N_size; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < N_size; j++) {
                this.matrix[i][j] = null;   //'&nbsp;'
            }
        }

        this.huPlayer = 'x';
        this.aiPlayer = 'o';
        this.turn = this.huPlayer;
        this.canMoves = N_size * N_size;
        this.stopPlay = this.canMoves <= 0 ;
    }

    getCurrentPlayerSymbol() {
        return this.turn;
    }

    nextTurn(rowIndex, columnIndex) {

        let currentSymbol = this.getFieldValue(rowIndex, columnIndex);
        if(currentSymbol === null){
            this.matrix[rowIndex][columnIndex] = this.turn;
            this.stopPlay = (--this.canMoves === 0);
            if(this.turn === this.huPlayer) {
                        this.turn = this.aiPlayer;
                    } else {
                        this.turn = this.huPlayer;
                    }
        }else {

        }


        // if(currentSymbol === this.turn){
        //     if(this.turn === this.huPlayer) {
        //         this.turn = this.aiPlayer;
        //     } else {
        //         this.turn = this.huPlayer;
        //     }
        // }else {
        //     if(currentSymbol === '&nbsp;'){
        //         if(this.turn === this.huPlayer) {
        //             this.turn = this.aiPlayer;
        //         } else {
        //             this.turn = this.huPlayer;
        //         }
        //     }
        //
        // }
    }

    isFinished() {
        return (this.isDraw() || (this.getWinner() !== null));
    }

    getWinner() {
        return null;
    }

    noMoreTurns() {
        return this.stopPlay;
    }

    isDraw() {
        return (this.noMoreTurns() || (this.getWinner() !== null)) ;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
//
// let game;
// let rez;
// game = new TicTacToe();
//
// game.nextTurn(1, 0);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 0);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 0);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 0);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 0);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 2);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(1, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(0, 1);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 0);
//
// rez= game.isDraw();  //  ).to.equal(false);
//
// game.nextTurn(2, 1);
//
// rez= game.isDraw();  //   ).to.equal(true);
//
//
//
//
// let ccccccccccc = rez;
