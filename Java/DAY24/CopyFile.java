package Com.app;

import java.io.*;

public class CopyFile {
    public static void main(String[] args)throws IOException {
        try {
            FileInputStream ins = new FileInputStream("Source.txt");
            FileOutputStream ous = new FileOutputStream("destination.txt");

            int ascii = 0;
            while ((ascii = ins.read()) != -1) {
                ous.write(ascii);
            }

            ins.close();
            ous.close();

            System.out.println("File copied successfully!");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
