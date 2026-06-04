---
title: "JLabel"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Swings fundamentals  – Overview of AWT"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfca"
status: "completed"
scrapedAt: "2026-05-20T16:56:36.423Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 4: Swings Fundamentals - Overview of AWT

## Topic: JLabel

This module focuses on the fundamentals of Swing, Java's GUI toolkit, and provides an overview of Abstract Window Toolkit (AWT) which Swing builds upon. We will delve into the `JLabel` component, a crucial element for displaying text or images in your Java applications.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose and role of `JLabel` in Swing applications.
*   Create and initialize `JLabel` objects with text.
*   Create and initialize `JLabel` objects with images.
*   Set and retrieve the text content of a `JLabel`.
*   Set and retrieve the icon of a `JLabel`.
*   Configure the horizontal and vertical alignment of the text within a `JLabel`.
*   Set and retrieve the gap between the icon and the text in a `JLabel`.
*   Understand the relationship between `JLabel` and AWT's `Label` class.

---

### Key Concepts and Definitions:

*   **GUI (Graphical User Interface):** A visual way for users to interact with a computer program using graphical elements like windows, buttons, and labels.
*   **Swing:** A GUI toolkit for Java that is built on top of AWT. Swing components are "lightweight" (pure Java) and offer more features and flexibility than AWT components.
*   **AWT (Abstract Window Toolkit):** The original Java GUI toolkit. AWT components are "heavyweight" (they rely on the underlying operating system's native GUI elements), which can lead to inconsistencies in appearance across different platforms.
*   **Component:** A fundamental building block of a GUI, such as a button, text field, or label.
*   **Container:** A component that can hold other components. Examples include `JFrame`, `JPanel`.
*   **`JLabel`:** A Swing component that displays a short string of text, an image, or both. It's a non-editable component used for displaying information to the user.
*   **`Icon` Interface:** An interface in Swing used to represent images that can be displayed in GUI components.
*   **Alignment:** The positioning of text or an icon within the bounds of a component.
*   **Horizontal Alignment:** Refers to the alignment of content along the x-axis (left, center, right).
*   **Vertical Alignment:** Refers to the alignment of content along the y-axis (top, middle, bottom).

---

### Overview of JLabel:

The `JLabel` class is part of the `javax.swing` package. It's a versatile component for displaying static information. Unlike components like `JTextField` or `JTextArea`, `JLabel` is not intended for user input.

**Purpose of `JLabel`:**

*   **Displaying Text:** The primary use is to present descriptive text to the user.
*   **Displaying Images:** It can also be used to show images.
*   **Providing Labels for Other Components:** `JLabel` is often used to label other interactive components like `JButton` or `JTextField`, improving the usability and accessibility of the GUI.

---

### Creating and Initializing JLabel Objects:

#### 1. Creating `JLabel` with Text:

You can create a `JLabel` with text in several ways:

*   **Default constructor (empty label):**
    ```java
    JLabel myLabel = new JLabel(); // Creates an empty label
    ```
*   **With a String:**
    ```java
    JLabel greetingLabel = new JLabel("Hello, Swing!");
    ```
*   **With a String and Horizontal Alignment:**
    ```java
    JLabel centeredLabel = new JLabel("Centered Text", JLabel.CENTER);
    ```
    *Common horizontal alignment constants:*
    *   `JLabel.LEFT`
    *   `JLabel.CENTER`
    *   `JLabel.RIGHT`
    *   `JLabel.LEADING` (aligns to the start of the text, which is left in LTR languages)
    *   `JLabel.TRAILING` (aligns to the end of the text, which is right in LTR languages)

#### 2. Creating `JLabel` with Images:

To display an image, you need to create an `Icon` object. The most common `Icon` implementation is `ImageIcon`.

*   **With an `Icon`:**
    ```java
    // Assuming you have an image file named "icon.png" in your project's root directory
    ImageIcon icon = new ImageIcon("icon.png");
    JLabel imageLabel = new JLabel(icon);
    ```

#### 3. Creating `JLabel` with Text and Images:

You can combine text and an image in a `JLabel`. The relative positioning of the icon and text can be controlled.

*   **With Text and Icon:**
    ```java
    ImageIcon icon = new ImageIcon("icon.png");
    JLabel textAndImageLabel = new JLabel("My Image", icon, JLabel.CENTER); // Text, Icon, Horizontal Alignment
    ```

---

### Setting and Retrieving Text Content:

*   **Setting Text:**
    ```java
    JLabel myLabel = new JLabel();
    myLabel.setText("Updated Text");
    ```
*   **Retrieving Text:**
    ```java
    JLabel myLabel = new JLabel("Some Text");
    String currentText = myLabel.getText(); // currentText will be "Some Text"
    System.out.println(currentText);
    ```

---

### Setting and Retrieving Icon:

*   **Setting Icon:**
    ```java
    JLabel myLabel = new JLabel();
    ImageIcon newIcon = new ImageIcon("another_icon.gif");
    myLabel.setIcon(newIcon);
    ```
*   **Retrieving Icon:**
    ```java
    JLabel myLabel = new JLabel();
    ImageIcon icon = new ImageIcon("my_image.jpg");
    myLabel.setIcon(icon);

    ImageIcon retrievedIcon = (ImageIcon) myLabel.getIcon(); // Note the cast to ImageIcon
    ```

---

### Configuring Alignment:

#### 1. Horizontal Alignment:

Controls how the text (or icon if only an icon is present) is positioned horizontally within the label's bounds.

*   **Setting Horizontal Alignment:**
    ```java
    JLabel myLabel = new JLabel("Left Aligned Text");
    myLabel.setHorizontalAlignment(JLabel.LEFT); // Default is LEFT for text only
    ```
    ```java
    JLabel myLabel = new JLabel("Right Aligned Text", JLabel.RIGHT); // Constructor sets alignment
    ```
*   **Retrieving Horizontal Alignment:**
    ```java
    JLabel myLabel = new JLabel("Aligned");
    myLabel.setHorizontalAlignment(JLabel.CENTER);
    int alignment = myLabel.getHorizontalAlignment(); // alignment will be JLabel.CENTER
    ```

#### 2. Vertical Alignment:

Controls how the text (or icon if only an icon is present) is positioned vertically within the label's bounds.

*   **Setting Vertical Alignment:**
    ```java
    JLabel myLabel = new JLabel("Top Aligned Text");
    myLabel.setVerticalAlignment(JLabel.TOP); // Default is CENTER for both text and icon
    ```
    ```java
    // If you have both text and an icon, vertical alignment applies to both together
    ImageIcon icon = new ImageIcon("icon.png");
    JLabel myLabel = new JLabel("Text Below", icon, JLabel.CENTER);
    myLabel.setVerticalAlignment(JLabel.BOTTOM); // Aligns the icon and text block to the bottom
    ```
    *Common vertical alignment constants:*
    *   `JLabel.TOP`
    *   `JLabel.CENTER`
    *   `JLabel.BOTTOM`

---

### Setting and Retrieving the Gap Between Icon and Text:

When both an icon and text are present, you can control the space between them.

*   **Setting the Gap:**
    ```java
    JLabel myLabel = new JLabel("Label with Gap", icon, JLabel.LEFT);
    myLabel.setIconTextGap(15); // Sets a gap of 15 pixels between the icon and text
    ```
*   **Retrieving the Gap:**
    ```java
    JLabel myLabel = new JLabel("Label with Gap", icon, JLabel.LEFT);
    myLabel.setIconTextGap(10);
    int gap = myLabel.getIconTextGap(); // gap will be 10
    System.out.println("Icon-Text Gap: " + gap);
    ```

---

### Relationship with AWT's `Label` Class:

*   **AWT `Label`:** The original AWT `Label` class is a heavyweight component. It is simpler and has fewer features compared to Swing's `JLabel`.
*   **Swing `JLabel`:** `JLabel` is a Swing component that offers more customization, including the ability to display images, set alignment, and control the icon-text gap.
*   **Inheritance (Indirect):** While `JLabel` doesn't directly extend AWT's `Label`, it inherits from `JComponent`, which in turn inherits from `Container` and `Component` (both AWT-related foundational classes). This means `JLabel` benefits from the underlying AWT infrastructure but provides a richer, more flexible set of features.

**Important Distinction:** When building modern Java GUIs, you should primarily use Swing components (`JLabel`, `JButton`, `JTextField`, etc.) as they offer a more consistent look and feel across platforms and are generally more feature-rich.

---

### Example: Creating a Simple GUI with JLabel

```java
import javax.swing.*;
import java.awt.*;

public class JLabelExample extends JFrame {

    public JLabelExample() {
        // Set frame properties
        setTitle("JLabel Demo");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Center the window

        // Create JLabels
        JLabel textLabel = new JLabel("This is a basic JLabel.");
        textLabel.setHorizontalAlignment(JLabel.CENTER); // Center the text

        ImageIcon icon = new ImageIcon("icon.png"); // Make sure icon.png exists in your project
        if (icon.getImageLoadStatus() == MediaTracker.ERRORED) {
            System.err.println("Error loading icon.png. Please ensure the file exists.");
            icon = new ImageIcon(); // Use an empty icon if loading fails
        }

        JLabel imageLabel = new JLabel(icon);

        JLabel textAndImageLabel = new JLabel("Label with Image", icon, JLabel.LEFT);
        textAndImageLabel.setHorizontalTextPosition(JLabel.RIGHT); // Text to the right of the icon
        textAndImageLabel.setVerticalTextPosition(JLabel.CENTER);   // Text vertically centered with the icon
        textAndImageLabel.setIconTextGap(10); // Gap of 10 pixels

        // Create a panel to hold the labels
        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout()); // Use FlowLayout for simplicity
        panel.add(textLabel);
        panel.add(imageLabel);
        panel.add(textAndImageLabel);

        // Add the panel to the frame
        add(panel);

        // Make the frame visible
        setVisible(true);
    }

    public static void main(String[] args) {
        // Run the GUI creation on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new JLabelExample();
            }
        });
    }
}
```

**To run this example:**
1.  Save the code as `JLabelExample.java`.
2.  Create an image file named `icon.png` in the same directory as your Java file. If you don't have an image, you can remove the image-related parts or use a placeholder path.
3.  Compile and run the Java file.

---

### Important Points to Remember:

*   `JLabel` is for **displaying** information, not for user input.
*   Always import `javax.swing.*` for Swing components and `java.awt.*` for layout managers and basic AWT classes.
*   When using images, ensure the image file path is correct. `ImageIcon` is the most common way to load images for `JLabel`.
*   The `setHorizontalAlignment` and `setVerticalAlignment` methods control the position of the content within the label's bounds.
*   `setIconTextGap` is useful for controlling the spacing between an icon and text when both are present.
*   For Swing applications, it's best practice to create and update GUI components on the Event Dispatch Thread (EDT) using `SwingUtilities.invokeLater()`.

---

### Practice Questions and Exercises:

1.  **Question:** What is the primary purpose of the `JLabel` component in Swing?
    *   **Answer:** To display static text or images to the user. It is a non-editable component.

2.  **Question:** How would you create a `JLabel` that displays the text "Welcome!" and is horizontally centered?
    *   **Answer:** `JLabel welcomeLabel = new JLabel("Welcome!", JLabel.CENTER);`

3.  **Question:** You have an image file named `logo.jpg`. How would you create a `JLabel` to display this image?
    *   **Answer:**
        ```java
        ImageIcon logoIcon = new ImageIcon("logo.jpg");
        JLabel logoLabel = new JLabel(logoIcon);
        ```

4.  **Question:** How can you change the text of an existing `JLabel` to "Updated Message"?
    *   **Answer:** `myLabel.setText("Updated Message");` (assuming `myLabel` is a `JLabel` object).

5.  **Question:** What method is used to set the space between an icon and text in a `JLabel`? What is the default value for this gap?
    *   **Answer:** `setIconTextGap()`. The default value is 4 pixels.

6.  **Exercise:** Create a `JFrame` with a `JPanel`. Add two `JLabel` components to the panel:
    *   One `JLabel` displaying the text "Username:" aligned to the right.
    *   Another `JLabel` displaying a small "user.png" icon (assume the file exists) vertically centered.
    *   Set a gap of 5 pixels between the icon and text for the second label.

    *   **Solution:**
        ```java
        import javax.swing.*;
        import java.awt.*;

        public class JLabelExercise extends JFrame {

            public JLabelExercise() {
                setTitle("JLabel Exercise");
                setSize(300, 150);
                setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                setLocationRelativeTo(null);

                JPanel panel = new JPanel();
                panel.setLayout(new FlowLayout());

                // Label 1: Username, right-aligned text
                JLabel usernameLabel = new JLabel("Username:");
                usernameLabel.setHorizontalAlignment(JLabel.RIGHT);
                panel.add(usernameLabel);

                // Label 2: Image with text, vertically centered, 5px gap
                ImageIcon userIcon = new ImageIcon("user.png"); // Ensure user.png exists
                JLabel userDisplayLabel = new JLabel("User Profile", userIcon, JLabel.CENTER);
                userDisplayLabel.setVerticalAlignment(JLabel.CENTER); // This aligns the whole block (icon+text)
                userDisplayLabel.setHorizontalTextPosition(JLabel.RIGHT); // Text to the right of icon
                userDisplayLabel.setVerticalTextPosition(JLabel.CENTER); // Text centered vertically with icon
                userDisplayLabel.setIconTextGap(5);
                panel.add(userDisplayLabel);

                add(panel);
                setVisible(true);
            }

            public static void main(String[] args) {
                SwingUtilities.invokeLater(new Runnable() {
                    public void run() {
                        new JLabelExercise();
                    }
                });
            }
        }
        ```

---
This concludes the study notes for `JLabel` in Module 4. Remember to practice creating and manipulating `JLabel` components to solidify your understanding.
