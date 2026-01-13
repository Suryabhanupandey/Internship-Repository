package com.app;
import java.util.*;

class PrintTable{
	synchronized void printValue(){
		for(int i=2;i<=20;i+=2){
			System.out.println("i "+i+" current thread name: " + Thread.currentThread().getName());
		}
	}
}

class MyTask implements Runnable
{
	PrintTable table;
	public MyTask(PrintTable _table)
	{
		table = _table;
	}
	public void run()
	{
		table.printValue();
	}

}


public class FirstActivity{
	public static void main(String args[]){
 		PrintTable table = new PrintTable();
		MyTask task = new MyTask(table);

		Thread t1 = new Thread(task);
		Thread t2 = new Thread(task);

		t1.setName("Surya");
		t2.setName("Bhanu");
		t1.start();
		t2.start();

 
	}
}