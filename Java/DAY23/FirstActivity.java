package com.app;

import java.io.*;
import java.util.*;

public class FirstActivity

	{
		public static void main(String args[]) throws IOException
			{

 				Scanner scan = new Scanner(System.in);
				System.out.println("Enter the Text :: ");
				String line = scan.nextLine();

				byte[] buffer = line.getBytes();
			
				OutputStream ous = new FileOutputStream("Sink.txt");
		
				ous.write(buffer);
				ous.close();

				System.out.println("Data is written on to Sink ");

			}



	}