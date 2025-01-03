package main;

import java.util.Scanner;

public class TicTacToe {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to Tic Tac Toe!");
        System.out.print("Enter Player 1 name: ");
        String player1Name = scanner.nextLine();
        System.out.print("Choose Player 1 mark (X/O): ");
        char player1Mark = scanner.nextLine().toUpperCase().charAt(0);

        System.out.print("Enter Player 2 name: ");
        String player2Name = scanner.nextLine();
        char player2Mark = (player1Mark == 'X') ? 'O' : 'X';

        Player player1 = new Player(player1Name, player1Mark);
        Player player2 = new Player(player2Name, player2Mark);

        Game game = new Game(player1, player2);
        game.start();

        scanner.close();
    }
}
