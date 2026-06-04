---
title: "Working with Files."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6a6"
status: "completed"
scrapedAt: "2026-05-23T17:51:52.161Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: More features of Java

## Topic: Working with Files

---

### **Introduction**

In modern software development, interacting with files is a fundamental requirement. Files serve as persistent storage for data, allowing programs to read information, write new data, and manage data outside of the program's execution. Java provides a rich set of classes and methods within the `java.io` and `java.nio` packages to facilitate file operations. This module will focus on understanding and implementing file I/O in Java, building upon the object-oriented concepts learned previously. This aligns with **CO3**, which emphasizes illustrating robust programs using Input/Output Streams with Files.

---

### **1. File Input/Output (I/O) Concepts**

File I/O in Java is primarily handled through **streams**. A stream is a sequence of data. Java distinguishes between two main types of streams:

*   **Input Streams:** Used to read data from a source (like a file, network connection, or another program).
*   **Output Streams:** Used to write data to a destination.

**Key Concepts:**

*   **Byte Streams:** Process data as a sequence of bytes (8-bit units).
    *   `InputStream`: Abstract superclass for input byte streams.
    *   `OutputStream`: Abstract superclass for output byte streams.
*   **Character Streams:** Process data as a sequence of characters (16-bit Unicode units). This is generally preferred for text-based data as it handles character encoding more efficiently.
    *   `Reader`: Abstract superclass for input character streams.
    *   `Writer`: Abstract superclass for output character streams.

**Important Distinction:** While both byte and character streams can be used for files, character streams are more suitable for text files, and byte streams are better for binary files (images, audio, executables).

---

### **2. The `java.io` Package: Core Classes for File Handling**

The `java.io` package is the traditional package for I/O operations in Java.

#### **2.1. The `File` Class**

The `java.io.File` class represents a file or directory path name. It provides methods to create, delete, check existence, get file attributes, and much more, but **it does not perform actual I/O operations on the file content itself.**

**Key Methods of `File` Class:**

*   `File(String pathname)`: Constructor to create a File object.
*   `File(String parent, String child)`: Constructor to create a File object from parent and child paths.
*   `boolean exists()`: Checks if the file or directory exists.
*   `boolean isFile()`: Checks if the path refers to a file.
*   `boolean isDirectory()`: Checks if the path refers to a directory.
*   `boolean createNewFile()`: Creates a new, empty file. Returns `true` if the file was created, `false` if it already existed.
*   `boolean delete()`: Deletes the file or directory.
*   `String getName()`: Returns the name of the file or directory.
*   `String getPath()`: Returns the path of the file or directory.
*   `String getAbsolutePath()`: Returns the absolute path of the file or directory.
*   `long length()`: Returns the size of the file in bytes.
*   `boolean mkdir()`: Creates a directory.
*   `boolean mkdirs()`: Creates a directory and any necessary parent directories.

**Example (from Deitel & Deitel, "Java How to Program"):**

```java
import java.io.File;

public class FileDemo {
    public static void main(String[] args) {
        // Create a File object for a file named "myFile.txt" in the current directory
        File file = new File("myFile.txt");

        // Check if the file exists
        if (file.exists()) {
            System.out.println("File '" + file.getName() + "' exists.");
            System.out.println("File path: " + file.getPath());
            System.out.println("Absolute path: " + file.getAbsolutePath());
            System.out.println("File length: " + file.length() + " bytes");
        } else {
            System.out.println("File '" + file.getName() + "' does not exist.");
            try {
                if (file.createNewFile()) {
                    System.out.println("File '" + file.getName() + "' created successfully.");
                } else {
                    System.out.println("Could not create file '" + file.getName() + "'.");
                }
            } catch (java.io.IOException e) {
                System.err.println("Error creating file: " + e.getMessage());
            }
        }

        // Example of creating a directory
        File dir = new File("myDirectory");
        if (!dir.exists()) {
            if (dir.mkdir()) {
                System.out.println("Directory '" + dir.getName() + "' created successfully.");
            } else {
                System.out.println("Could not create directory '" + dir.getName() + "'.");
            }
        }

        // Example of deleting the file
        // file.delete(); // Uncomment to delete the file after running
    }
}
```

**Important Note:** The `File` class is part of the path manipulation and management, not the actual data transfer.

#### **2.2. Reading from Files (Input Streams)**

Java provides various classes for reading data from files.

##### **2.2.1. `FileInputStream` (Byte Stream)**

Reads raw bytes from a file. Suitable for binary files or when you need to process data byte by byte.

**Key Methods:**

*   `read()`: Reads a single byte of data. Returns the byte as an `int` (0-255) or -1 if the end of the stream is reached.
*   `read(byte[] b)`: Reads an array of bytes into the buffer `b`. Returns the number of bytes read, or -1 if the end of the stream is reached.
*   `read(byte[] b, int off, int len)`: Reads `len` bytes into the buffer `b` starting at offset `off`.

**Example (reading bytes):**

```java
import java.io.FileInputStream;
import java.io.IOException;

public class ReadBytes {
    public static void main(String[] args) {
        FileInputStream fis = null;
        try {
            fis = new FileInputStream("myFile.txt"); // Assumes myFile.txt exists
            int byteRead;
            while ((byteRead = fis.read()) != -1) {
                System.out.print((char) byteRead); // Cast to char to print text
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        } finally {
            if (fis != null) {
                try {
                    fis.close(); // Always close the stream
                } catch (IOException e) {
                    System.err.println("Error closing FileInputStream: " + e.getMessage());
                }
            }
        }
    }
}
```

##### **2.2.2. `FileReader` (Character Stream)**

Reads characters from a file. This is generally preferred for text files. It uses the default character encoding of the platform.

**Key Methods:**

*   `read()`: Reads a single character. Returns the character as an `int` (0-65535) or -1 if the end of the stream is reached.
*   `read(char[] cbuf)`: Reads characters into the buffer `cbuf`. Returns the number of characters read, or -1 if the end of the stream is reached.
*   `read(char[] cbuf, int off, int len)`: Reads `len` characters into the buffer `cbuf` starting at offset `off`.

**Example (reading characters):**

```java
import java.io.FileReader;
import java.io.IOException;

public class ReadChars {
    public static void main(String[] args) {
        FileReader fr = null;
        try {
            fr = new FileReader("myFile.txt"); // Assumes myFile.txt exists
            int charRead;
            while ((charRead = fr.read()) != -1) {
                System.out.print((char) charRead);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        } finally {
            if (fr != null) {
                try {
                    fr.close(); // Always close the stream
                } catch (IOException e) {
                    System.err.println("Error closing FileReader: " + e.getMessage());
                }
            }
        }
    }
}
```

##### **2.2.3. `BufferedReader` (Decorator Class)**

`BufferedReader` is a "decorator" or "wrapper" class. It can wrap other character input streams (like `FileReader`) to provide buffering and efficient reading of characters, lines, and arrays. This significantly improves performance, especially for sequential reading.

**Key Methods:**

*   `readLine()`: Reads a line of text. A line is considered to be terminated by any one of a line feed character (`\n`), a carriage return character (`\r`), or a carriage return followed immediately by a line feed (`\r\n`). It returns the line as a `String`, or `null` if the end of the stream has been reached.

**Example (reading lines efficiently):**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadLines {
    public static void main(String[] args) {
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader("myFile.txt")); // Wrap FileReader
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close(); // Closing BufferedReader also closes the underlying FileReader
                } catch (IOException e) {
                    System.err.println("Error closing BufferedReader: " + e.getMessage());
                }
            }
        }
    }
}
```

**Important Point:** `BufferedReader` is highly recommended for reading text files line by line.

#### **2.3. Writing to Files (Output Streams)**

Similar to reading, Java offers classes for writing data to files.

##### **2.3.1. `FileOutputStream` (Byte Stream)**

Writes raw bytes to a file. If the file exists, it will be overwritten by default. You can specify `true` in the constructor to append data to the end of the file.

**Key Methods:**

*   `write(int b)`: Writes a single byte.
*   `write(byte[] b)`: Writes an array of bytes.
*   `write(byte[] b, int off, int len)`: Writes `len` bytes from the buffer `b` starting at offset `off`.

**Example (writing bytes):**

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class WriteBytes {
    public static void main(String[] args) {
        FileOutputStream fos = null;
        try {
            // By default, it overwrites the file.
            // fos = new FileOutputStream("output.bin");
            // To append to the file:
            fos = new FileOutputStream("output.bin", true); // Append mode

            byte[] data = {72, 101, 108, 108, 111}; // ASCII for "Hello"
            fos.write(data);
            fos.write('\n'); // Write a newline character
            fos.write("Java Programming\n".getBytes()); // Write a string as bytes
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        } finally {
            if (fos != null) {
                try {
                    fos.close(); // Always close the stream
                } catch (IOException e) {
                    System.err.println("Error closing FileOutputStream: " + e.getMessage());
                }
            }
        }
    }
}
```

##### **2.3.2. `FileWriter` (Character Stream)**

Writes characters to a file. It automatically handles character encoding. Similar to `FileOutputStream`, the constructor can take a boolean `append` argument.

**Key Methods:**

*   `write(int c)`: Writes a single character.
*   `write(char[] cbuf)`: Writes an array of characters.
*   `write(char[] cbuf, int off, int len)`: Writes `len` characters from the buffer `cbuf` starting at offset `off`.
*   `write(String str)`: Writes a string.
*   `write(String str, int off, int len)`: Writes a substring.

**Example (writing characters):**

```java
import java.io.FileWriter;
import java.io.IOException;

public class WriteChars {
    public static void main(String[] args) {
        FileWriter fw = null;
        try {
            // By default, it overwrites the file.
            // fw = new FileWriter("output.txt");
            // To append to the file:
            fw = new FileWriter("output.txt", true); // Append mode

            fw.write("This is the first line.\n");
            fw.write("This is the second line.\n");
            char[] chars = {'J', 'a', 'v', 'a'};
            fw.write(chars);
            fw.write('\n');
            fw.write("End of writing.\n");
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        } finally {
            if (fw != null) {
                try {
                    fw.close(); // Always close the stream
                } catch (IOException e) {
                    System.err.println("Error closing FileWriter: " + e.getMessage());
                }
            }
        }
    }
}
```

##### **2.3.3. `BufferedWriter` (Decorator Class)**

`BufferedWriter` wraps character output streams to provide buffering and efficient writing. It also provides the convenient `newLine()` method.

**Key Method:**

*   `newLine()`: Writes a line separator string. The line separator string is defined by the system property `line.separator`, and is not necessarily a single newline character.

**Example (writing lines efficiently):**

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteLines {
    public static void main(String[] args) {
        BufferedWriter bw = null;
        try {
            bw = new BufferedWriter(new FileWriter("output.txt", true)); // Wrap FileWriter

            bw.write("Writing line 1 using BufferedWriter.");
            bw.newLine(); // Use the platform-specific newline
            bw.write("Writing line 2.");
            bw.newLine();
            bw.write("Another string.");
            bw.newLine();
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        } finally {
            if (bw != null) {
                try {
                    bw.close(); // Closing BufferedWriter also closes the underlying FileWriter
                } catch (IOException e) {
                    System.err.println("Error closing BufferedWriter: " + e.getMessage());
                }
            }
        }
    }
}
```

**Important Point:** `BufferedWriter` is highly recommended for writing text files due to its efficiency and `newLine()` method.

#### **2.4. Exception Handling in File I/O**

File operations can fail for various reasons (e.g., file not found, insufficient permissions, disk full). Java uses checked exceptions for most I/O operations, requiring you to handle them using `try-catch` blocks.

*   **`FileNotFoundException`**: A subclass of `IOException`, thrown when a file cannot be opened for reading or writing.
*   **`IOException`**: The general exception for input/output errors.

**Best Practice: Using `try-with-resources` (Java 7 and later)**

The `try-with-resources` statement provides a more concise and robust way to manage resources like streams. It ensures that resources are automatically closed at the end of the statement, even if exceptions occur.

**Example with `try-with-resources`:**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        String fileName = "myFile.txt";

        // Reading with try-with-resources
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error processing file: " + e.getMessage());
        }

        // Writing with try-with-resources
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt", true))) {
            writer.write("This is written with try-with-resources.\n");
            writer.write("It's cleaner!\n");
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
}
```

**Important Point:** Always use `try-with-resources` when dealing with streams to ensure proper resource management and prevent leaks.

---

### **3. Working with Binary Files**

For binary files (images, audio, compiled code, etc.), byte streams are used.

#### **3.1. `DataInputStream` and `DataOutputStream`**

These classes allow you to read and write primitive Java data types (like `int`, `double`, `boolean`) in a machine-independent way.

**Key Methods:**

*   `DataOutputStream`: `writeInt()`, `writeDouble()`, `writeBoolean()`, `writeUTF()` (for writing strings in a specific format).
*   `DataInputStream`: `readInt()`, `readDouble()`, `readBoolean()`, `readUTF()`.

**Example (writing and reading primitive data types):**

```java
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BinaryDataIO {
    public static void main(String[] args) {
        String filename = "data.bin";

        // Writing binary data
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(filename))) {
            dos.writeInt(123);
            dos.writeDouble(45.67);
            dos.writeBoolean(true);
            dos.writeUTF("Hello Binary!");
            System.out.println("Binary data written to " + filename);
        } catch (IOException e) {
            System.err.println("Error writing binary data: " + e.getMessage());
        }

        // Reading binary data
        try (DataInputStream dis = new DataInputStream(new FileInputStream(filename))) {
            int intValue = dis.readInt();
            double doubleValue = dis.readDouble();
            boolean booleanValue = dis.readBoolean();
            String stringValue = dis.readUTF();

            System.out.println("Read from " + filename + ":");
            System.out.println("Integer: " + intValue);
            System.out.println("Double: " + doubleValue);
            System.out.println("Boolean: " + booleanValue);
            System.out.println("String: " + stringValue);
        } catch (IOException e) {
            System.err.println("Error reading binary data: " + e.getMessage());
        }
    }
}
```

**Important Note:** When reading binary data, the order in which you read must exactly match the order in which you wrote it.

#### **3.2. Object Serialization**

Object serialization is the process of converting an object's state into a byte stream, which can then be stored in a file or transmitted across a network. The reverse process is deserialization.

*   **`Serializable` Interface:** To make an object serializable, its class must implement the `java.io.Serializable` interface. This is a marker interface, meaning it has no methods to implement.
*   **`ObjectOutputStream`:** Writes objects to an output stream.
*   **`ObjectInputStream`:** Reads objects from an input stream.

**Example (Object Serialization):**

First, define a class that implements `Serializable`:

```java
import java.io.Serializable;

// Must implement Serializable for object serialization
class Person implements Serializable {
    private static final long serialVersionUID = 1L; // Recommended for version control
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + '}';
    }
}
```

Now, the code to serialize and deserialize:

```java
import java.io.*;

public class ObjectSerializationDemo {
    public static void main(String[] args) {
        String filename = "person.ser"; // .ser extension is common for serialized objects

        // Create a Person object
        Person person1 = new Person("Alice", 30);

        // --- Serialization (Writing the object) ---
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
            oos.writeObject(person1);
            System.out.println("Object serialized to " + filename);
        } catch (IOException e) {
            System.err.println("Error during serialization: " + e.getMessage());
        }

        // --- Deserialization (Reading the object) ---
        Person person2 = null;
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
            person2 = (Person) ois.readObject(); // Cast to the expected type
            System.out.println("Object deserialized from " + filename);
            System.out.println("Deserialized object: " + person2);
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error during deserialization: " + e.getMessage());
        }
    }
}
```

**Important Considerations for Serialization:**

*   **`serialVersionUID`:** It's good practice to declare a `serialVersionUID` field. This helps in versioning of serialized classes.
*   **`transient` Keyword:** Fields marked with `transient` are not serialized.
*   **`static` Fields:** `static` fields are not serialized as they belong to the class, not the object's instance.
*   **Security:** Deserializing untrusted data can be a security risk.

---

### **4. The `java.nio` Package (New I/O)**

The `java.nio` package, introduced in Java 1.4, offers a more flexible and efficient approach to I/O, especially for high-performance applications. It is based on **channels** and **buffers**.

*   **Channels:** Represent connections to actual I/O devices (files, sockets, etc.). They are analogous to streams but provide a more direct interaction with the OS.
*   **Buffers:** Containers for data of a specific primitive type. Data is read from a channel into a buffer, and written from a buffer to a channel.

**Key Classes:**

*   `FileChannel`: A channel for reading, writing, connecting, and selecting files.
*   `ByteBuffer`: A buffer for bytes.
*   `CharBuffer`, `IntBuffer`, etc.

**Basic NIO Operations:**

1.  Get a `FileChannel`.
2.  Create a `ByteBuffer` (or other buffer type).
3.  Read data from the `FileChannel` into the `ByteBuffer`.
4.  Process data in the `ByteBuffer`.
5.  Write data from the `ByteBuffer` to the `FileChannel`.

**Example (NIO File Reading):**

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

public class NIOFileRead {
    public static void main(String[] args) {
        String fileName = "myFile.txt";
        FileInputStream fis = null;
        FileChannel channel = null;
        try {
            fis = new FileInputStream(fileName);
            channel = fis.getChannel(); // Get the channel from the stream

            // Create a buffer to read data into. Size can be adjusted.
            ByteBuffer buffer = ByteBuffer.allocate(1024); // 1KB buffer

            // Read data from the channel into the buffer
            int bytesRead = channel.read(buffer);

            if (bytesRead != -1) {
                // Prepare the buffer for reading (flip it)
                buffer.flip();

                // Read data from the buffer
                while (buffer.hasRemaining()) {
                    System.out.print((char) buffer.get());
                }
            } else {
                System.out.println("File is empty.");
            }
        } catch (IOException e) {
            System.err.println("Error reading file with NIO: " + e.getMessage());
        } finally {
            // Close the channel and stream
            if (channel != null) {
                try {
                    channel.close();
                } catch (IOException e) {
                    System.err.println("Error closing channel: " + e.getMessage());
                }
            }
            if (fis != null) {
                try {
                    fis.close();
                } catch (IOException e) {
                    System.err.println("Error closing FileInputStream: " + e.getMessage());
                }
            }
        }
    }
}
```

**Advantages of NIO:**

*   **Efficiency:** Often more efficient for large files and concurrent operations due to non-blocking I/O and buffer management.
*   **Flexibility:** Supports direct I/O (data bypasses JVM buffers), memory-mapped files, and scatter/gather operations.

**Note:** While `java.nio` is powerful, for many common file operations, `java.io` (especially with `BufferedReader`/`BufferedWriter` and `try-with-resources`) is simpler and sufficient. This module primarily focuses on `java.io` for foundational understanding, aligning with **CO3**.

---

### **5. Key Takeaways and Best Practices**

*   **Streams:** Understand the concept of input and output streams for data transfer.
*   **Byte vs. Character Streams:** Use character streams (`FileReader`, `FileWriter`) for text and byte streams (`FileInputStream`, `FileOutputStream`) for binary data.
*   **Decorators:** Utilize decorator classes like `BufferedReader` and `BufferedWriter` for enhanced performance and convenience when working with text.
*   **Resource Management:** Always close your streams when you are finished with them.
*   **`try-with-resources`:** Prefer `try-with-resources` (Java 7+) for automatic resource management.
*   **Error Handling:** Properly handle `IOException` and its subclasses.
*   **`File` Class:** Use the `File` class for path manipulation and file metadata, not for data transfer.
*   **`Serializable`:** Implement `Serializable` for object serialization.

---

### **6. Practice Questions**

**Question 1:**
What is the primary difference between `FileInputStream` and `FileReader`? When would you choose one over the other?

**Question 2:**
Explain the role of `BufferedReader`. How does it improve file reading efficiency?

**Question 3:**
Write a Java program that reads the content of a text file named "input.txt" and writes it to another file named "output.txt" in reverse order of lines. For example, if "input.txt" has lines A, B, C, then "output.txt" should have C, B, A.

**Question 4:**
What is object serialization in Java? What is required for a class to be serializable?

**Question 5:**
Rewrite the following code snippet using the `try-with-resources` statement:

```java
import java.io.FileWriter;
import java.io.IOException;

public class OldStyleWrite {
    public static void main(String[] args) {
        FileWriter fw = null;
        try {
            fw = new FileWriter("legacy.txt");
            fw.write("This is some legacy data.\n");
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        } finally {
            if (fw != null) {
                try {
                    fw.close();
                } catch (IOException e) {
                    System.err.println("Error closing writer: " + e.getMessage());
                }
            }
        }
    }
}
```

---

### **7. Answers to Practice Questions**

**Answer 1:**
*   **`FileInputStream`**: Reads data as a sequence of raw bytes. It's suitable for binary files (images, audio) or when you need to process data at the byte level.
*   **`FileReader`**: Reads data as a sequence of characters. It's suitable for text files and automatically handles character encoding based on the default platform encoding.

You would choose `FileReader` for text files and `FileInputStream` for binary files.

**Answer 2:**
`BufferedReader` is a decorator class that wraps a character input stream (like `FileReader`). It enhances efficiency by reading data in larger chunks (buffering) rather than byte by byte or character by character. This reduces the number of calls to the underlying stream, leading to significantly faster I/O operations, especially for large files. It also provides the convenient `readLine()` method for reading entire lines of text.

**Answer 3:**
```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ReverseLines {
    public static void main(String[] args) {
        String inputFile = "input.txt";
        String outputFile = "output.txt";

        List<String> lines = new ArrayList<>();

        // Read lines from input file
        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lines.add(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading from " + inputFile + ": " + e.getMessage());
            return; // Exit if reading fails
        }

        // Reverse the order of lines
        Collections.reverse(lines);

        // Write reversed lines to output file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            for (String line : lines) {
                writer.write(line);
                writer.newLine();
            }
            System.out.println("Content of " + inputFile + " written to " + outputFile + " in reverse line order.");
        } catch (IOException e) {
            System.err.println("Error writing to " + outputFile + ": " + e.getMessage());
        }
    }
}
```
*(Note: Ensure `input.txt` exists with some content before running this.)*

**Answer 4:**
Object serialization is the process of converting the state of an object into a sequence of bytes. This byte stream can be saved to a file, transmitted over a network, or stored in memory. The reverse process is deserialization.

For a class to be serializable, it must:
1.  Implement the `java.io.Serializable` interface. This is a marker interface, so no methods need to be overridden.
2.  All instance variables of the object must be serializable. If an object contains a reference to a non-serializable object, the object itself cannot be serialized unless the non-serializable field is marked with the `transient` keyword.

**Answer 5:**
```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class ModernStyleWrite {
    public static void main(String[] args) {
        // Using try-with-resources for automatic closing
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("legacy.txt", true))) { // Added append mode for good measure
            bw.write("This is some legacy data.\n");
            System.out.println("Data written to legacy.txt");
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

---

This concludes Module 3's topic on working with files. This knowledge is crucial for building robust Java applications that interact with external data, directly supporting **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
