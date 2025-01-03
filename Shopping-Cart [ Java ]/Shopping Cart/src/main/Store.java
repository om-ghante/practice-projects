package main;

import java.util.ArrayList;
import java.util.List;

public class Store {
    private List<Product> products;

    public Store() {
        products = new ArrayList<>();
        products.add(new Product(1, "Laptop", 70000));
        products.add(new Product(2, "Smartphone", 20000));
        products.add(new Product(3, "Headphones", 2000));
        products.add(new Product(4, "Mouse", 750));
        products.add(new Product(5, "Keyboard", 1800));
    }

    public void displayProducts() {
        System.out.println("Available Products:");
        for (Product product : products) {
            System.out.println(product);
        }
    }

    public Product getProductById(int id) {
        for (Product product : products) {
            if (product.getId() == id) {
                return product;
            }
        }
        return null;
    }
}
