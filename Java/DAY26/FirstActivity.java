package com.app;
import java.util.*;

class MyThread extends Thread{
	public void run(){
		for(int i=1;i<=10;i++){
			if(i==5){
				Scanner scan = new Scanner(System.in);
				System.out.println("Enter name");
				String name = scan.nextLine();		
				System.out.println("Hello..."+name);
			}
			System.out.println("i "+i+" current thread name: " + Thread.currentThread().getName());
		}
	}
}
public class FirstActivity{
	public static void main(String args[]){
		MyThread thread = new MyThread(); // new born state 
		thread.start(); // ready to run state (runnable)
	}
}