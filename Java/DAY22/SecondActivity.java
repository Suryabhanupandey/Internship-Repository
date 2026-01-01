package com.app;


import java.io.*;

public class SecondActivity

	{
		public static void main(String args[]) throws IOException, InterruptedException
			{

			BufferedInputStream bis = new BufferedInputStream(new FileInputStream("Source.txt"));
			System.out.println("Is Current Stream is Supports the work facility :: "+bis.markSupported());

		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		
		System.out.println("Appling the work here.......");

		bis.mark(10);

		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);

		System.out.println("Restarting.......");
		bis.reset();

		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);
		System.out.println((char)bis.read());
		Thread.sleep(1000);


		bis.close();

			}



	}