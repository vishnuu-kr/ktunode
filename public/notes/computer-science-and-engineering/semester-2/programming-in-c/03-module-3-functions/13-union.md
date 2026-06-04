---
title: "Union."
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e5a"
status: "completed"
scrapedAt: "2026-05-20T16:35:32.874Z"
---
This is a fantastic request! I'll craft comprehensive study notes for the "Union" topic within Module 3: Functions in C, keeping in mind the learning outcomes, course objectives, and a warm, engaging teaching style. I'll aim to make these notes feel like a direct conversation with a passionate C programming instructor.

---

## **Module 3: Functions in C - Understanding Unions**

Hello everyone, and welcome back to our journey through Programming in C! Today, we're going to dive into a fascinating concept that often gets a bit of a raised eyebrow from beginners, but trust me, once you grasp it, it’s incredibly powerful. We’re talking about **Unions**.

Now, you might recall from previous modules that we've discussed **structures**. Structures are like a blueprint for creating a composite data type, where each member occupies its own distinct memory space. Think of a structure representing a `student`: it might have an `int` for `roll_number`, a `char` array for `name`, and a `float` for `percentage`. Each of these takes up space separately.

### **What is a Union? The Core Idea**

So, what’s different about a union? Imagine you have a situation where you need to store *one of several possible types of data* at any given time, but never all of them simultaneously. For example, you might be reading data from a file that could represent either an integer value or a character string. You don't need to store both an integer and a string at the exact same moment; you just need to be able to interpret the memory location as either one, depending on what the data *actually is*.

This is precisely where **unions** come in. A union is a user-defined data type that allows you to store *different data types in the same memory location*. Unlike structures, where each member has its own memory address, all members of a union share the same memory location.

Think of it like a single box (the memory location) that can hold either a screwdriver, or a hammer, or a wrench. At any one time, it can only hold *one* of these tools. If you put the screwdriver in, you can’t also put the hammer in the same spot. When you take the screwdriver out and put the hammer in, the screwdriver is no longer there. The size of the box is determined by the largest tool it can hold.

This concept is crucial for **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.** Unions are a way to create more abstract data types, allowing us to manage memory more efficiently when dealing with data that has multiple possible representations but only one active representation at a time.

### **Declaring and Defining a Union**

The syntax for declaring a union is very similar to that of a structure. We use the `union` keyword, followed by the union tag (its name), and then the members enclosed in curly braces.

Let's revisit our earlier example. Suppose we need to store a value that could be either an integer or a floating-point number.

```c
union Data {
    int integerValue;
    float floatValue;
};
```

Here, `Data` is our union tag. It has two members: `integerValue` of type `int` and `floatValue` of type `float`.

Now, here's a critical point, and this is something you'll definitely want to remember for exams: **The size of a union is the size of its largest member.** In our `Data` union example, assuming an `int` is 4 bytes and a `float` is 4 bytes, the size of the `Data` union will be 4 bytes. If `floatValue` was `doubleValue` (which is typically 8 bytes), then the union’s size would be 8 bytes. Why? Because the union must be large enough to accommodate the largest possible member.

**Connecting to Textbooks:** Both Gottfried's "Programming with C" and Hanly & Koffman's "Problem Solving and Program Design in C" clearly illustrate this definition and syntax. Gottfried, in his treatment of user-defined data types, emphasizes how unions offer a memory-saving alternative to structures when only one member is active at a time. Hanly & Koffman might frame this in terms of representing variant records, a common application of unions.

### **Working with Unions: Accessing Members**

Just like with structures, we use the dot operator (`.`) to access the members of a union. However, the *behavior* when accessing is where the magic (and potential pitfalls) lie.

Let’s declare a variable of our `Data` union:

```c
union Data myData;
```

Now, we can assign values to its members:

```c
myData.integerValue = 100;
```

At this point, the memory location occupied by `myData` is holding the integer value 100.

Then, we can try to access it:

```c
printf("Integer value: %d\n", myData.integerValue); // This will correctly print 100
```

But what happens if we now assign a `float` value to a different member?

```c
myData.floatValue = 3.14159;
```

When we do this, the *same memory location* that held the integer 100 is now being used to store the floating-point value 3.14159. The original integer value is overwritten.

Now, if we try to access the `integerValue` again:

```c
printf("Integer value after float assignment: %d\n", myData.integerValue); // This will likely print garbage or an unexpected value!
```

Why? Because the bits representing 3.14159 (a float) are being interpreted as if they were an integer. It's like trying to read a musical score as if it were a recipe – you'll get nonsensical results.

**This is the most important thing to grasp about unions: You can only reliably use the member that was *most recently assigned a value*.** Using another member after an assignment to a different member leads to *undefined behavior*. This is a common source of bugs if not handled carefully, and it’s something that examiners love to test.

**Analogy Check:** Imagine that single box again. You first put a detailed instruction manual for a screwdriver in it. You then read that manual and use the screwdriver. Then, you take the screwdriver manual out and put a chef’s recipe for a cake in the *exact same spot*. Now, if you try to find the screwdriver manual again, it’s gone! You can only work with the recipe.

**Relating to Course Outcomes:** This brings us closer to **CO3**, where we're learning about abstract data types. Unions allow us to represent data that can exist in different forms, but we need a mechanism to track *which* form is currently active. This often involves using an additional variable (perhaps an `enum` or a simple integer flag) alongside the union to keep track of the active member. This is a key aspect of modular design and abstraction.

### **When to Use Unions: Practical Scenarios**

So, why go through all this trouble? Unions are incredibly useful in specific situations:

1.  **Memory Efficiency:** When you know that a variable will hold only one of several possible data types at any given time, a union can save memory compared to storing all possibilities simultaneously in a structure. This is particularly important in embedded systems or when dealing with large datasets where every byte counts.

2.  **Variant Records:** In data processing, you might encounter records where certain fields are conditional. For example, in a system processing employee records, some employees might have a `bonus_amount` (a float), while others might have an `hourly_rate` (a float), but not both. A union can elegantly handle this.

3.  **Interfacing with Hardware or Low-Level APIs:** Many hardware registers or operating system structures use memory layouts where a single memory location can be interpreted in multiple ways. Unions are a natural fit for such scenarios.

4.  **Data Serialization/Deserialization:** When reading or writing data in a format where a field can be of different types, unions can help manage the interpretation of the raw bytes.

Let’s think about a system that needs to store employee information. Some employees might be salaried, and others hourly.

```c
#include <stdio.h>
#include <string.h>

// Structure to hold employee details
struct Employee {
    int id;
    char name[50];
    char type; // 'S' for salaried, 'H' for hourly

    // Union to hold salary-specific data
    union SalaryInfo {
        float monthlySalary;   // For salaried employees
        float hourlyRate;      // For hourly employees
    } salary;
};

int main() {
    struct Employee emp1, emp2;

    // --- Employee 1: Salaried ---
    emp1.id = 101;
    strcpy(emp1.name, "Alice Wonderland");
    emp1.type = 'S';
    emp1.salary.monthlySalary = 5000.00; // Assigning to the monthlySalary member

    // --- Employee 2: Hourly ---
    emp2.id = 102;
    strcpy(emp2.name, "Bob The Builder");
    emp2.type = 'H';
    emp2.salary.hourlyRate = 15.50; // Assigning to the hourlyRate member

    // Now, let's process and display the information, using the 'type' to decide which union member to access
    printf("Employee ID: %d\n", emp1.id);
    printf("Employee Name: %s\n", emp1.name);
    if (emp1.type == 'S') {
        printf("Employee Type: Salaried\n");
        // Safely accessing the correct union member
        printf("Monthly Salary: %.2f\n", emp1.salary.monthlySalary);
    } else { // emp1.type == 'H'
        printf("Employee Type: Hourly\n");
        // Safely accessing the correct union member
        printf("Hourly Rate: %.2f\n", emp1.salary.hourlyRate);
    }
    printf("\n");

    printf("Employee ID: %d\n", emp2.id);
    printf("Employee Name: %s\n", emp2.name);
    if (emp2.type == 'S') {
        printf("Employee Type: Salaried\n");
        printf("Monthly Salary: %.2f\n", emp2.salary.monthlySalary);
    } else { // emp2.type == 'H'
        printf("Employee Type: Hourly\n");
        // Safely accessing the correct union member
        printf("Hourly Rate: %.2f\n", emp2.salary.hourlyRate);
    }

    // --- Demonstrating the pitfall ---
    printf("\n--- Demonstrating Pitfall ---\n");
    printf("Alice's salary was set as monthly. Let's try to read it as hourly rate:\n");
    // This is incorrect and will lead to undefined behavior!
    // printf("Interpreting monthlySalary as hourlyRate: %.2f\n", emp1.salary.hourlyRate);
    // Better to avoid this in real code, but for demonstration:
    printf("Value interpreted as hourly rate: %.2f\n", emp1.salary.hourlyRate); // This will print garbage!

    return 0;
}
```

In this example, the `SalaryInfo` union cleverly stores either `monthlySalary` or `hourlyRate`, depending on the `type` of the employee. This is a classic use of unions for variant data. Notice how we use the `type` field to *decide* which member of the `salary` union to access. This is crucial for correctness.

**Exam Tip:** Questions often involve scenarios like this, asking you to write code that correctly uses a union based on a flag or discriminator. Pay close attention to the logic that determines which union member is active.

**Reference Books Insight:** Kernighan and Ritchie's "The C Programming Language" provides a concise, foundational explanation of unions, highlighting their memory-saving aspect and the importance of using a tag to track the active member. Schildt’s “C The Complete Reference” offers extensive examples and discusses practical applications in more detail, often touching upon their use in system programming. Balagurusamy's "Programming in ANSI C" also covers unions thoroughly, providing clear, step-by-step examples that reinforce understanding.

### **Unions and Functions**

Since this is Module 3, and we’re focusing on functions, how do unions interact with them?

1.  **Passing Unions to Functions:** You can pass a union variable to a function just like any other data type. The entire union is passed by value (or by pointer, if you choose).

    ```c
    // Function to display union data
    void displaySalary(struct Employee emp) {
        printf("Employee ID: %d, Name: %s\n", emp.id, emp.name);
        if (emp.type == 'S') {
            printf("Type: Salaried, Monthly Salary: %.2f\n", emp.salary.monthlySalary);
        } else {
            printf("Type: Hourly, Hourly Rate: %.2f\n", emp.salary.hourlyRate);
        }
    }

    // In main:
    // displaySalary(emp1);
    // displaySalary(emp2);
    ```

2.  **Returning Unions from Functions:** A function can also return a union.

    ```c
    // Function to create an hourly employee
    struct Employee createHourlyEmployee(int id, const char* name, float rate) {
        struct Employee emp;
        emp.id = id;
        strcpy(emp.name, name);
        emp.type = 'H';
        emp.salary.hourlyRate = rate; // Assign to the correct member
        return emp;
    }

    // In main:
    // struct Employee emp3 = createHourlyEmployee(103, "Charlie Chaplin", 20.0);
    // displaySalary(emp3);
    ```

3.  **Unions as Members of Structures (as seen in the Employee example):** This is a very common pattern, where a union is embedded within a structure to handle different states or types of data for that structure.

4.  **Using Pointers with Unions:** You can use pointers to unions, which is often more efficient for passing large unions or structures containing unions to functions. Accessing members via a pointer requires the arrow operator (`->`).

    ```c
    // Function using a pointer to the Employee structure
    void displaySalaryPtr(struct Employee *empPtr) {
        printf("Employee ID: %d, Name: %s\n", empPtr->id, empPtr->name);
        if (empPtr->type == 'S') {
            printf("Type: Salaried, Monthly Salary: %.2f\n", empPtr->salary.monthlySalary);
        } else {
            printf("Type: Hourly, Hourly Rate: %.2f\n", empPtr->salary.hourlyRate);
        }
    }

    // In main:
    // displaySalaryPtr(&emp1);
    // displaySalaryPtr(&emp2);
    ```

This reinforces **CO3** by showing how functions help modularize code, and unions are a tool to build those modules with abstract data types.

### **Key Takeaways and Pitfalls**

Let's consolidate the most critical points about unions:

*   **Shared Memory:** All members of a union share the same memory location.
*   **Size:** A union's size is determined by its largest member.
*   **Active Member:** Only the *last assigned* member of a union is valid to access. Accessing other members leads to undefined behavior.
*   **Tagging:** It's essential to have a mechanism (like a separate variable or an enum) to track which member is currently active.
*   **Memory Saving:** Unions are excellent for saving memory when data is mutually exclusive.
*   **Pointers:** Use the `->` operator to access union members via a pointer.

**Common Pitfall Reminder:** The most common mistake is forgetting to track the active member and then trying to access the "wrong" member. Always remember: "What was the last thing I put in this union?"

**How this relates to Course Outcomes:**
*   **CO1 (Infer computational problem & use constructs):** Understanding when to use a union is about inferring the nature of the data in a computational problem.
*   **CO2 (Arrays, matrices, strings):** While not directly about these, you might encounter unions holding strings (`char` arrays), which are fixed-size members.
*   **CO3 (Functions, modules, abstract data types):** This is where unions shine. They are a primary way to create abstract data types, and using them correctly within functions is a key skill.
*   **CO4 (Pointers, dynamic data):** Pointers to unions are very common for efficient data handling.
*   **CO5 (Files):** You might read/write union data to files, requiring careful handling of the active member.

---

### **Sample Questions and Answers**

Here are a few questions to test your understanding, common in exams and good for reinforcing concepts:

**Question 1 (Conceptual):**
What is the primary difference between a `struct` and a `union` in C regarding memory allocation for their members?

**Answer:**
The primary difference is how they allocate memory for their members. In a `struct`, each member is allocated its own distinct memory location. The total size of the structure is the sum of the sizes of its members (with potential padding for alignment). In contrast, all members of a `union` share the *same* memory location. The size of a union is determined by the size of its largest member.

**Question 2 (Practical/Coding):**
Write a C program that defines a union to store either an integer or a character. Declare a variable of this union, assign an integer to it, print it, then assign a character to it, and print that. Finally, attempt to print the integer again and explain the output.

**Answer:**

```c
#include <stdio.h>

// Define a union that can hold an int or a char
union IntChar {
    int i;
    char c;
};

int main() {
    // Declare a variable of the union type
    union IntChar data;

    // Assign an integer value
    data.i = 65;
    printf("After assigning integer:\n");
    printf("data.i = %d\n", data.i); // Output: data.i = 65
    // When data.i is assigned 65, the bytes representing 65 are stored in the shared memory.

    // Assign a character value
    data.c = 'A';
    printf("\nAfter assigning character:\n");
    printf("data.c = %c\n", data.c); // Output: data.c = A
    // Now, the bytes representing the ASCII value of 'A' (which is 65) are stored in the *same* memory location.
    // The previous integer value is overwritten.

    // Attempt to print the integer value again
    printf("data.i = %d\n", data.i); // Output: data.i = 65 (This is coincidental!)

    printf("\nExplanation:\n");
    printf("The output for data.i after assigning 'A' (which has ASCII value 65) is 65.\n");
    printf("This is because the character 'A' has an ASCII value of 65, which, when stored as an integer, is indeed 65.\n");
    printf("If we had assigned 'B' (ASCII 66) to data.c, then trying to read data.i would yield an unexpected integer value (e.g., 66).\n");
    printf("This demonstrates that only the last assigned member's value is reliably accessible.\n");
    printf("The size of the union is the size of int (assuming it's larger than char).\n");

    return 0;
}
```
**Reasoning for output:** The key is that the integer 65 and the character 'A' happen to have the same underlying bit representation when considering the size of the `int` member. The `int` member `data.i` is 4 bytes (typically), and the `char` member `data.c` is 1 byte. The union is sized to accommodate the largest member (the `int`). When `data.i = 65` is executed, the integer 65 is stored. When `data.c = 'A'` is executed, the ASCII value of 'A' (which is 65) is stored in the *first byte* of that shared memory location. When `data.i` is subsequently read, it reads the entire 4 bytes, starting with that first byte. Since the first byte holds 65 and the remaining bytes are whatever they were before (or zeroed), the `int` value read is 65. This is a good example to show the bit-level sharing, but it's crucial to remember that relying on this behavior for cross-type access is **undefined behavior** and often leads to different results on different systems or with different values.

**Question 3 (Design/Application):**
You are designing a system to store information about different types of media: books, audio CDs, and DVDs. Each media type has common properties like `title` and `id`. However, books have a `pageCount`, audio CDs have a `durationMinutes`, and DVDs have a `numberOfDiscs`. How would you use a `union` within a `struct` to represent this efficiently?

**Answer:**

```c
#include <stdio.h>
#include <string.h>

// Enum to identify the type of media
typedef enum {
    BOOK,
    AUDIO_CD,
    DVD
} MediaType;

// Union to hold media-specific details
typedef union {
    int pageCount;          // For books
    int durationMinutes;    // For audio CDs
    int numberOfDiscs;      // For DVDs
} MediaDetails;

// Structure to represent any media item
typedef struct {
    int id;
    char title[100];
    MediaType type;       // Discriminator to know which member of the union is active
    MediaDetails details; // The union holding the specific details
} MediaItem;

int main() {
    MediaItem item1, item2, item3;

    // Representing a Book
    item1.id = 1001;
    strcpy(item1.title, "The Lord of the Rings");
    item1.type = BOOK;
    item1.details.pageCount = 1178; // Assigning to book's detail

    // Representing an Audio CD
    item2.id = 2001;
    strcpy(item2.title, "Abbey Road");
    item2.type = AUDIO_CD;
    item2.details.durationMinutes = 47; // Assigning to audio CD's detail

    // Representing a DVD
    item3.id = 3001;
    strcpy(item3.title, "Inception");
    item3.type = DVD;
    item3.details.numberOfDiscs = 2; // Assigning to DVD's detail

    // Function to display media info
    void displayMedia(MediaItem item) {
        printf("ID: %d\n", item.id);
        printf("Title: %s\n", item.title);
        printf("Type: ");
        switch (item.type) {
            case BOOK:
                printf("Book\n");
                printf("Page Count: %d\n", item.details.pageCount); // Accessing book detail
                break;
            case AUDIO_CD:
                printf("Audio CD\n");
                printf("Duration (minutes): %d\n", item.details.durationMinutes); // Accessing CD detail
                break;
            case DVD:
                printf("DVD\n");
                printf("Number of Discs: %d\n", item.details.numberOfDiscs); // Accessing DVD detail
                break;
            default:
                printf("Unknown\n");
        }
        printf("--------------------\n");
    }

    // Displaying the items
    displayMedia(item1);
    displayMedia(item2);
    displayMedia(item3);

    return 0;
}
```
**Reasoning:** This solution uses a `struct` to hold common information (`id`, `title`). Crucially, it includes a `MediaType` `enum` (the discriminator) and a `MediaDetails` `union`. The `type` field tells us *which* member of the `details` union is currently active and should be accessed. This design is memory-efficient because only the space for the largest of `pageCount`, `durationMinutes`, or `numberOfDiscs` is allocated for the `details` union, rather than separate fields for each. This demonstrates effective use of unions for handling variant data within a structured type, fulfilling the spirit of **CO3**.

---

I hope this deep dive into unions has been illuminating! Remember, practice is key. Try creating your own unions for different scenarios, and always be mindful of tracking the active member. Happy coding!
