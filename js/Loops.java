import java.util.Scanner;

public class Loops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("Enter the number :");
            int num = sc.nextInt();

            for (int i = 1; i <= num; i++) {
                System.out.println(i);
            }
        } finally {
            sc.close();
        }
    }
}
