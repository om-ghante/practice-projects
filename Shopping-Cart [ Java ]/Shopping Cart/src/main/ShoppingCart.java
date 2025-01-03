package main;

import java.util.Scanner;

public class ShoppingCart {
    public static void main(String[] args) {
        Store store = new Store();
        Cart cart = new Cart();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. View Products");
            System.out.println("2. Add to Cart");
            System.out.println("3. View Cart");
            System.out.println("4. Remove from Cart");
            System.out.println("5. Checkout");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");

            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    store.displayProducts();
                    break;
                case 2:
                    System.out.print("Enter Product ID to add: ");
                    int productId = scanner.nextInt();
                    System.out.print("Enter quantity: ");
                    int quantity = scanner.nextInt();
                    Product product = store.getProductById(productId);
                    if (product != null) {
                        cart.addItem(product, quantity);
                        System.out.println("Added " + quantity + " x " + product.getName() + " to cart.");
                    } else {
                        System.out.println("Invalid Product ID.");
                    }
                    break;
                case 3:
                    cart.viewCart();
                    break;
                case 4:
                    System.out.print("Enter Product ID to remove: ");
                    int removeId = scanner.nextInt();
                    cart.removeItem(removeId);
                    System.out.println("Removed product from cart.");
                    break;
                case 5:
                    cart.viewCart();
                    System.out.println("Total Price: Rs. " + cart.getTotalPrice());
                    System.out.println("Thank you for shopping!");
                    return;
                case 6:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid option. Try again.");
            }
        }
    }
}
