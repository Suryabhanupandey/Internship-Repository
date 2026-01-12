package com.app;

import java.util.*;

class MyTask implements Runnable
{
	public void run()
		{
			for(int i=1;i<=10;i++)
				{
				System.out.println("i " +i+" Current Threads Name :: "+Thread.currentThread().getName());
			}
		}


}

public class SecondActivity

{
	public static void main(String args[]) throws Exception
		{

	MyTask task = new MyTask();
	Thread t1 = new Thread(task);
	t1.setName("Surya");
	Thread t2 = new Thread(task);
	t2.setName("Bhanu");

	t1.start();
	t1.join();
	t2.start();


	}
}