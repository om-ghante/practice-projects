package main;

import java.util.Scanner;

public class Game {
    private Board board;
    private Player player1;
    private Player player2;

    public Game(Player player1, Player player2) {
        this.board = new Board();
        this.player1 = player1;
        this.player2 = player2;
    }

    public void start() {
        Scanner scanner = new Scanner(System.in);
        Player currentPlayer = player1;

        while (true) {
            board.displayBoard();
            System.out.println(currentPlayer.getName() + "'s turn (" + currentPlayer.getMark() + ")");
            System.out.print("Enter row (0-2): ");
            int row = scanner.nextInt();
            System.out.print("Enter column (0-2): ");
            int col = scanner.nextInt();

            if (board.placeMark(row, col, currentPlayer.getMark())) {
                if (board.checkWin(currentPlayer.getMark())) {
                    board.displayBoard();
                    System.out.println("Congratulations " + currentPlayer.getName() + "! You win!");
                    break;
                }
                if (board.isFull()) {
                    board.displayBoard();
                    System.out.println("It's a tie!");
                    break;
                }
                currentPlayer = (currentPlayer == player1) ? player2 : player1;
            } else {
                System.out.println("Invalid move, try again.");
            }
        }

        scanner.close();
    }
}
