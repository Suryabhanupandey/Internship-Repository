package com.app;

import java.util.*;

public class FirstActivity {

    public static void main(String[] args) {

        // Collection (ArrayList)
        ArrayList<String> names = new ArrayList<>();
        names.add("Ram");
        names.add("Shyam");
        names.add("Mohan");
        names.add("Sohan");

        // Iterator
        Iterator<String> it = names.iterator();

        // Removing element using iterator
        while (it.hasNext()) {
            String name = it.next();

            if (name.equals("Mohan")) {
                it.remove(); // safe remove
            }
        }

        // Final list
        System.out.println(names);
    }
}
