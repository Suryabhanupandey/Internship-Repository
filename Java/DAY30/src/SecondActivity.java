package com.app;

import java.util.*;

public class SecondActivity {

    public static void main(String[] args) {

        // Collection (ArrayList)
        List names = new ArrayList<>();
        names.add("Ram");
        names.add("Shyam");
        names.add("Mohan");
        names.add("Sohan");

	System.out.println("Elements in List :: " +names);

	names.remove("Mohan");

	System.out.println("Elements :: "+names);
	names.set(1,"Vinay");

	System.out.println("Elements :: "+names);


    }
}
