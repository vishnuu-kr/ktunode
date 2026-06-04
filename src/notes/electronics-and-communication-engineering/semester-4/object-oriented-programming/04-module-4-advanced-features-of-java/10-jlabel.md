---
title: "JLabel"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Advanced features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6b1"
status: "completed"
scrapedAt: "2026-05-23T17:51:59.299Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 4: Advanced Features of Java

## Topic: JLabel

### Introduction

The `JLabel` class in Java Swing is a fundamental Swing component used to display text or an image, or both. It is a lightweight component, meaning it is drawn entirely within Java code without relying on the native operating system's peer components. `JLabel` is a non-editable component, primarily used for displaying information to the user.

This topic will delve into the intricacies of `JLabel`, covering its core functionalities, customization options, and practical applications within Java GUI development. It directly supports **Course Outcome 4 (CO4)** by enabling students to identify and utilize various Swing controls and components.

### 1. Key Concepts and Definitions

*   **JLabel:** A Swing component that displays text, an image, or both. It is a non-interactive component used for displaying information.
*   **SwingConstants:** An interface that defines constants for horizontal and vertical alignment of text and icons within a `JLabel`.
*   **Icon Interface:** An interface that defines the methods required for displaying an image in a Swing component. Common implementations include `ImageIcon`.
*   **Border:** A decorative line or area surrounding a component, used for visual separation or emphasis. `JLabel` can have borders applied.
*   **Layout Managers:** Objects responsible for organizing the size and position of components within a container.

### 2. Core Functionalities of JLabel

#### 2.1 Creating a JLabel

There are several ways to create a `JLabel`:

*   **With Text Only:**
    ```java
    JLabel myLabel = new JLabel("Welcome to JLabel!");
    ```
*   **With an Icon Only:**
    ```java
    Icon myIcon = new ImageIcon("path/to/your/image.png"); // Assuming image.png exists
    JLabel imageLabel = new JLabel(myIcon);
    ```
*   **With Text and an Icon:**
    ```java
    Icon myIcon = new ImageIcon("path/to/your/image.png");
    JLabel textAndImageLabel = new JLabel("My Image", myIcon, SwingConstants.CENTER);
    ```
    The third argument (`SwingConstants.CENTER`) specifies the horizontal alignment of the text relative to the icon.

**Textbook Reference:**

*   **Java: The Complete Reference (8/e) by Herbert Schildt:** Chapter on Swing provides a good overview of basic Swing components like `JLabel`. (Section on Swing Components)
*   **Java How to Program (11th Edition) by Deitel & Deitel:** Chapter on GUI Programming with Java Swing, which details the creation and basic use of `JLabel`. (Chapter on Introduction to GUI Programming)

#### 2.2 Setting and Getting Text

*   **`setText(String text)`:** Sets the text displayed by the label.
    ```java
    myLabel.setText("Updated Label Text");
    ```
*   **`getText()`:** Returns the current text of the label.
    ```java
    String currentText = myLabel.getText();
    ```

#### 2.3 Setting and Getting Icons

*   **`setIcon(Icon icon)`:** Sets the icon displayed by the label.
    ```java
    Icon newIcon = new ImageIcon("path/to/another/image.gif");
    imageLabel.setIcon(newIcon);
    ```
*   **`getIcon()`:** Returns the current icon of the label.
    ```java
    Icon currentIcon = imageLabel.getIcon();
    ```

#### 2.4 Setting Icon Text Alignment

The horizontal and vertical alignment of the text relative to the icon can be controlled.

*   **`setHorizontalTextPosition(int textPosition)`:** Sets the horizontal alignment of the text relative to the icon. Common values include:
    *   `SwingConstants.LEFT`
    *   `SwingConstants.RIGHT`
    *   `SwingConstants.CENTER`
    *   `SwingConstants.LEADING`
    *   `SwingConstants.TRAILING`
    ```java
    textAndImageLabel.setHorizontalTextPosition(SwingConstants.RIGHT); // Text to the right of the icon
    ```
*   **`setVerticalTextPosition(int textPosition)`:** Sets the vertical alignment of the text relative to the icon. Common values include:
    *   `SwingConstants.TOP`
    *   `SwingConstants.BOTTOM`
    *   `SwingConstants.CENTER`
    ```java
    textAndImageLabel.setVerticalTextPosition(SwingConstants.BOTTOM); // Text below the icon
    ```

#### 2.5 Setting Text Alignment within the Label

When a `JLabel` contains only text, or when the text is displayed independently of an icon (e.g., when the icon is `null`), you can align the text within the label's bounds.

*   **`setHorizontalAlignment(int alignment)`:** Sets the horizontal alignment of the text within the label's visible area. Common values include:
    *   `SwingConstants.LEFT`
    *   `SwingConstants.CENTER`
    *   `SwingConstants.RIGHT`
    *   `SwingConstants.LEADING`
    *   `SwingConstants.TRAILING`
    ```java
    myLabel.setHorizontalAlignment(SwingConstants.CENTER); // Center the text horizontally
    ```
*   **`setVerticalAlignment(int alignment)`:** Sets the vertical alignment of the text within the label's visible area. Common values include:
    *   `SwingConstants.TOP`
    *   `SwingConstants.CENTER`
    *   `SwingConstants.BOTTOM`
    *   `SwingConstants.NORTH`
    *   `SwingConstants.SOUTH`
    *   `SwingConstants.NORTH_EAST`
    *   `SwingConstants.SOUTH_EAST`
    *   `SwingConstants.NORTH_WEST`
    *   `SwingConstants.SOUTH_WEST`
    ```java
    myLabel.setVerticalAlignment(SwingConstants.TOP); // Align text to the top vertically
    ```

**Important Point:** When both text and an icon are present, `setHorizontalAlignment` and `setVerticalAlignment` control the overall positioning of the text-icon pair within the `JLabel`, while `setHorizontalTextPosition` and `setVerticalTextPosition` control the relative positioning of the text *to the icon*.

#### 2.6 Handling HTML in JLabel Text

`JLabel` supports displaying basic HTML tags within its text, allowing for rich text formatting.

*   **`myLabel.setText("<html><b>Bold</b> and <i>Italic</i></html>");`**

This feature is incredibly useful for enhancing the presentation of text in your GUI.

**Textbook Reference:**

*   **Introduction to Java Programming by Y. Daniel Liang (7/e):** Discusses GUI components and their properties, including text alignment and HTML support in labels. (Chapter on GUI Basics)

### 3. Advanced Features and Customization

#### 3.1 Borders

You can add borders to a `JLabel` to give it a visual frame. This is often done using `BorderFactory`.

```java
import javax.swing.border.Border;
import javax.swing.BorderFactory;

// ...

JLabel borderedLabel = new JLabel("With a Border");
Border lineBorder = BorderFactory.createLineBorder(Color.BLUE, 2); // Blue line, 2 pixels thick
borderedLabel.setBorder(lineBorder);
```

Common border types include `LineBorder`, `BevelBorder`, `EtchedBorder`, and `EmptyBorder`.

#### 3.2 Tooltips

Tooltips provide helpful hints to the user when they hover their mouse over the `JLabel`.

*   **`setToolTipText(String text)`:** Sets the tooltip text.
    ```java
    myLabel.setToolTipText("This is a helpful tip!");
    ```

#### 3.3 Mnemonic Support

Mnemonics provide keyboard accessibility. Pressing the specified key in combination with the Alt key will move focus to the component or trigger an action associated with it. For `JLabel`, it typically associates it with another component (like a `JTextField`).

*   **`setDisplayedMnemonic(char mnemonic)`:** Sets the mnemonic character.
*   **`setLabelFor(Component c)`:** Associates the label with another component.

```java
JTextField nameField = new JTextField(20);
JLabel nameLabel = new JLabel("Name:");
nameLabel.setDisplayedMnemonic('N');
nameLabel.setLabelFor(nameField);
```
Now, pressing Alt+N will move the focus to the `nameField`.

**Course Outcome Alignment:**

*   **CO2:** Demonstrates the use of `JLabel` to display information, which can be considered an aspect of using object-oriented class concepts to develop programs.
*   **CO4:** Directly addresses identifying and utilizing Swing controls and components like `JLabel`.

### 4. Practical Examples

#### 4.1 Simple Text Display

```java
import javax.swing.*;
import java.awt.*;

public class SimpleLabelExample extends JFrame {

    public SimpleLabelExample() {
        setTitle("Simple JLabel");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout()); // Use FlowLayout for simplicity

        JLabel welcomeLabel = new JLabel("Hello, Swing World!");
        add(welcomeLabel);

        setSize(300, 150);
        setLocationRelativeTo(null); // Center the window
    }

    public static void main(String[] args) {
        // Run the GUI creation on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new SimpleLabelExample().setVisible(true);
            }
        });
    }
}
```

#### 4.2 Image and Text Combination with Alignment

```java
import javax.swing.*;
import java.awt.*;

public class ImageTextLabelExample extends JFrame {

    public ImageTextLabelExample() {
        setTitle("Image and Text JLabel");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // Load an icon (replace "icon.png" with an actual image file path)
        Icon icon = new ImageIcon("icon.png"); // Make sure icon.png is in your project directory or provide a full path.

        JLabel labeledIcon = new JLabel("User Profile", icon, SwingConstants.CENTER);
        labeledIcon.setHorizontalTextPosition(SwingConstants.RIGHT); // Text to the right of the icon
        labeledIcon.setVerticalTextPosition(SwingConstants.CENTER); // Text vertically centered
        labeledIcon.setHorizontalAlignment(SwingConstants.CENTER); // Center the entire label content within its bounds
        labeledIcon.setVerticalAlignment(SwingConstants.CENTER);   // Center the entire label content vertically

        add(labeledIcon);

        setSize(300, 200);
        setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                // Create a dummy image file for demonstration if "icon.png" doesn't exist
                try {
                    // Create a simple 16x16 red square image if icon.png is not found
                    java.io.File f = new java.io.File("icon.png");
                    if (!f.exists()) {
                        java.awt.image.BufferedImage img = new java.awt.image.BufferedImage(16, 16, java.awt.image.BufferedImage.TYPE_INT_RGB);
                        java.awt.Graphics2D g2d = img.createGraphics();
                        g2d.setColor(Color.RED);
                        g2d.fillRect(0, 0, 16, 16);
                        g2d.dispose();
                        javax.imageio.ImageIO.write(img, "png", f);
                        System.out.println("Created dummy icon.png for demonstration.");
                    }
                } catch (Exception e) {
                    System.err.println("Error creating dummy icon: " + e.getMessage());
                }
                new ImageTextLabelExample().setVisible(true);
            }
        });
    }
}
```

**Reference Book Insight:**

*   **Java in A Nutshell (5/e) by David Flanagan:** Offers concise explanations of Swing components and their properties, including image handling and alignment. (Chapter on Swing)

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a `JLabel` in Swing?
a) To allow user input
b) To display text or images
c) To create buttons
d) To manage window layouts

**Question 2:**
Which method is used to set the text displayed by a `JLabel`?
a) `setIcon()`
b) `setText()`
c) `addText()`
d) `updateText()`

**Question 3:**
You want to place an image to the left of the text in a `JLabel`. Which method and constant would you use?
a) `setHorizontalTextPosition(SwingConstants.LEFT)`
b) `setHorizontalTextPosition(SwingConstants.RIGHT)`
c) `setHorizontalAlignment(SwingConstants.LEFT)`
d) `setVerticalTextPosition(SwingConstants.LEFT)`

**Question 4:**
Can `JLabel` display formatted text using HTML tags? If yes, provide an example of how to make text bold.

**Question 5:**
Write a short Java Swing code snippet that creates a `JLabel` with the text "My Data" and centers it both horizontally and vertically within its display area.

---

### Answers to Practice Questions

**Answer 1:**
The primary purpose of a `JLabel` in Swing is **b) To display text or images**. It is a non-editable component for informational display.

**Answer 2:**
The method used to set the text displayed by a `JLabel` is **b) `setText()`**.

**Answer 3:**
To place an image to the left of the text, you would use **a) `setHorizontalTextPosition(SwingConstants.LEFT)`**.

**Answer 4:**
Yes, `JLabel` can display formatted text using HTML tags. To make text bold, you would wrap it in `<b>` tags:
```java
JLabel boldLabel = new JLabel("<html>This text is <b>bold</b>.</html>");
```

**Answer 5:**
```java
import javax.swing.*;
import java.awt.*;

public class CenterLabelExample extends JFrame {

    public CenterLabelExample() {
        setTitle("Centered JLabel");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout()); // Using FlowLayout for demonstration

        JLabel myDataLabel = new JLabel("My Data");
        myDataLabel.setHorizontalAlignment(SwingConstants.CENTER); // Center text horizontally
        myDataLabel.setVerticalAlignment(SwingConstants.CENTER);   // Center text vertically

        // For proper vertical centering, the container needs to have enough height.
        // For FlowLayout, this might require setting a preferred size or adding the label to a panel with specific layout.
        // A simpler demonstration of alignment is often seen within BorderLayout.CENTER or similar.
        // For this example, we'll rely on the default size. If you were using BorderLayout.CENTER,
        // the label would naturally expand to fill the space.

        add(myDataLabel);

        setSize(200, 100); // Set a size for the frame to see the centering
        setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new CenterLabelExample().setVisible(true);
            }
        });
    }
}
```

### 6. Important Points to Remember

*   `JLabel` is a non-interactive component.
*   It can display text, an image, or both.
*   Use `SwingConstants` constants for alignment.
*   `setHorizontalAlignment` and `setVerticalAlignment` control the alignment of the *entire label content* within its bounds.
*   `setHorizontalTextPosition` and `setVerticalTextPosition` control the alignment of the *text relative to the icon*.
*   `JLabel` supports basic HTML formatting within its text property.
*   Always run Swing GUI updates on the Event Dispatch Thread (EDT) using `SwingUtilities.invokeLater()`.

### 7. Alignment with Course Outcomes

*   **CO1 (Summarize OO concepts):** While `JLabel` itself is a GUI component, its implementation relies on object-oriented principles like encapsulation (data hiding within the `JLabel` object) and inheritance (it inherits from `JComponent`, which inherits from `Component`). Examples show how to instantiate and use `JLabel` objects.
*   **CO2 (Utilize datatypes, operators, control statements, OO class/object concepts):** This topic directly involves using the `JLabel` class (an object-oriented concept) to create and manipulate GUI elements. The example code demonstrates instantiation and method calls on `JLabel` objects.
*   **CO3 (Illustrate robust programs using packages, exception handling, I/O):** While not directly covered by `JLabel` itself, `JLabel` is a part of the `javax.swing` package. The examples show how to import and use classes from this package. Error handling for image loading (`ImageIcon`) is a practical aspect that relates to robust programming.
*   **CO4 (Identify and utilize various Swing controls, components, and containers):** This is the primary alignment. `JLabel` is a core Swing component, and this topic provides detailed knowledge and examples of its identification and utilization.

This comprehensive study of `JLabel` equips you with the ability to effectively use this fundamental Swing component for displaying information in your Java applications, contributing directly to your proficiency in GUI development as outlined in **CO4**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
