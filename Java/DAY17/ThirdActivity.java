package com.app;

import java.util.*;

public class ThirdActivity {
    public static void main(String args[]) {

     	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	System.out.println("Enter the name :: ");

        try {
 		String name = br.readLine();
                System.out.println("Hello :: " + name);
        } 
        catch (IOException e) {
            System.out.println("--reason of error");
        } 
	
	 

    }
}
