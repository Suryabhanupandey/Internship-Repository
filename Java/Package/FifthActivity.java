package com.app;

import java.util.*;

class Room {

    boolean isPrime(int number) {

        if (number <= 1) {
            return false;
        }

        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

public class FifthActivity {

    public static void main(String args[]) {

        Room obj = new Room();
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter a number : ");
        int value = scan.nextInt();

        if (obj.isPrime(value)) {
            System.out.println("This is a Prime Number :: True");
        } else {
            System.out.println("This is NOT a Prime Number :: False");
        }
    }
}
