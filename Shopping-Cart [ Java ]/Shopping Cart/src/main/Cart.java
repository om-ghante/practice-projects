package main;

import java.util.ArrayList;
import java.util.List;

public class Cart {
    private List<CartItem> items;

    public Cart() {
        this.items = new ArrayList<>();
    }

    public void addItem(Product product, int quantity) {
        for (CartItem item : items) {
            if (item.getProduct().getId() == product.getId()) {
                item.setQuantity(item.getQuantity() + quantity);
                return;
            }
        }
        items.add(new CartItem(product, quantity));
    }

    public void removeItem(int productId) {
        items.removeIf(item -> item.getProduct().getId() == productId);
    }

    public void viewCart() {
        if (items.isEmpty()) {
            System.out.println("Your cart is empty.");
            return;
        }
        System.out.println("Shopping Cart:");
        for (CartItem item : items) {
            System.out.println(item);
        }
    }

    public double getTotalPrice() {
        double total = 0;
        for (CartItem item : items) {
            total += item.getTotalPrice();
        }
        return total;
    }
}
