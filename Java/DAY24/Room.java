package Com.app;

import java.io.*;

public class Room implements Serializable {

    int length;
    int breadth;

     
    public Room(int l, int b) {
        length = l;
        breadth = b;
    }

}