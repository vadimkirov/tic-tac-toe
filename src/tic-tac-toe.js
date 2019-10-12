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
        this.winner = null;
    }



    getCurrentPlayerSymbol() {
        return this.turn;
    }



    nextTurn(rowIndex, columnIndex) {

        let currentSymbol = this.getFieldValue(rowIndex, columnIndex);
        if(currentSymbol === null){
            this.matrix[rowIndex][columnIndex] = this.turn;
            this.stopPlay = (--this.canMoves === 0);

            if(this.getWinner() !== null) this.winner = this.turn;

            if(this.turn === this.huPlayer) {
                this.turn = this.aiPlayer;
            } else {
                this.turn = this.huPlayer;
            }
        }
    }



    isFinished() {
        return (this.isDraw() || (this.getWinner() !== null));
    }



    getWinner() {

        if(this.winner !== null) return this.winner;
        let matrixSize = this.matrix.length;

        let columnWin = 0;
        let rowWin = 0;
        let diagWinLeftToRight = 0;
        let diagWinRightToLeft = 0;

        for (let i = 0; i < matrixSize; i++){
            for(let j = 0; j < matrixSize; j++){
                if(this.matrix[i][j] === this.turn){
                    rowWin++;
                }
                if (i === j   &&  this.matrix[i][j] === this.turn ) {
                    diagWinLeftToRight++;
                }
            }
            if(rowWin === matrixSize) {
                return this.turn;
            }else {
                rowWin = 0;
            }
        }

        for (let j = 0; j < matrixSize; j++){
            for(let i = 0; i < matrixSize; i++){
                if(this.matrix[i][j] === this.turn){
                    columnWin++;
                }
            }

            if(columnWin === matrixSize) {
                return this.turn;
            }else {
                columnWin = 0;
            }
        }

        if (diagWinLeftToRight === matrixSize) return this.turn;

        if (this.matrix[0][matrixSize-1] === this.turn) diagWinRightToLeft++;
        if (this.matrix[1][1] === this.turn) diagWinRightToLeft++;
        if (this.matrix[matrixSize-1][0] === this.turn) diagWinRightToLeft++;
        if (diagWinRightToLeft === matrixSize) return this.turn;

        return null;
    }




    noMoreTurns() {
        return this.stopPlay;
    }



    isDraw() {
        return (this.noMoreTurns() && (this.getWinner() === null)) ;
    }



    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;