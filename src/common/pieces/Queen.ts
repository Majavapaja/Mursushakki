import * as Majavashakki from "../GamePieces"
import Piece from "./Piece"
import Bishop from "./Bishop"
import Rook from "./Rook"
import Board from "../Board"

export default class Queen extends Piece {
    constructor(color: Majavashakki.PieceColor, position: Majavashakki.IPosition, board: Board) {
        super(color, position, board, Majavashakki.PieceType.Queen)
    }

    public isValidMove(destination: Majavashakki.IPosition): boolean {
        const bishop = new Bishop(this.color, this.position, this.board)
        const rook = new Rook(this.color, this.position, this.board)
        return bishop.isValidMove(destination) || rook.isValidMove(destination)
    }

    public clone(board: Board): Queen {
        const queen = new Queen(this.color, this.position, board)
        queen.hasMoved = this.hasMoved
        return queen
    }
}