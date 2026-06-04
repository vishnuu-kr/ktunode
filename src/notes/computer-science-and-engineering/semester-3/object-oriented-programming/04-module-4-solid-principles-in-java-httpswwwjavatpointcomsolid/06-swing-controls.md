---
title: "Swing Controls"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8accd"
status: "completed"
scrapedAt: "2026-05-20T16:29:15.139Z"
---
## Module 4: SOLID Principles in Java - Swing Controls

**Subject:** OBJECT ORIENTED PROGRAMMING
**Module:** Module 4: SOLID Principles in Java
**Topic:** Swing Controls
**Reference:** https://www.javatpoint.com/solid (Contextual, but not directly relevant to Swing Controls. Swing Controls are part of Java GUI development, not SOLID principles.)

**Introduction:**

While the provided link focuses on SOLID principles (which are excellent for object-oriented design), this topic is about Swing Controls, which are part of Java's GUI (Graphical User Interface) framework. We will cover essential Swing controls and how to use them to create simple Java applications with a graphical interface. This section will focus on the *use* of these controls, not necessarily the application of SOLID principles in *building* Swing itself.  SOLID principles can be applied to the application that *uses* Swing, however, and it's important to keep that in mind.

**Learning Outcomes:**

*   Understand the purpose and role of Swing in Java GUI development.
*   Identify and describe common Swing controls (e.g., JFrame, JLabel, JButton, JTextField, JTextArea, JCheckBox, JRadioButton, JComboBox, JList).
*   Learn how to add Swing controls to a JFrame (or other container).
*   Understand and implement basic event handling for Swing controls.
*   Create simple GUI applications using Swing controls.

**1. Introduction to Swing**

*   **What is Swing?** Swing is a GUI widget toolkit for Java. It is part of the Java Foundation Classes (JFC) and is used to create platform-independent GUIs. Swing components are lightweight (written in pure Java) and offer greater flexibility and look-and-feel customization than AWT (Abstract Window Toolkit), the original Java GUI toolkit.

*   **Key Features of Swing:**
    *   **Platform Independent:** Swing applications look and behave the same way on different operating systems.
    *   **Lightweight Components:** Swing components are drawn by Java code, not the underlying operating system's native GUI components.
    *   **MVC Architecture:** Swing follows the Model-View-Controller architectural pattern, separating data, presentation, and user interaction.
    *   **Extensible:** Swing components can be customized and extended using Java's inheritance and interface features.

*   **Swing vs. AWT:**  While both are GUI toolkits, Swing is generally preferred due to its platform independence and more sophisticated look and feel.  AWT relies on the native OS for the UI, leading to inconsistencies across platforms.

**2. Common Swing Controls**

*   **`JFrame`:** The main window of a Swing application. It's the top-level container for other Swing components.  Think of it as the application's window frame.

    *   `JFrame frame = new JFrame("My Application");`
    *   `frame.setSize(400, 300); // width, height`
    *   `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Terminates the program when window is closed`
    *   `frame.setVisible(true);`

*   **`JLabel`:** Displays a short string of text or an image.  Used to label other controls or display informative messages.

    *   `JLabel label = new JLabel("Enter your name:");`

*   **`JButton`:** A push-button that triggers an action when clicked.

    *   `JButton button = new JButton("Submit");`

*   **`JTextField`:** Allows the user to enter a single line of text.

    *   `JTextField textField = new JTextField(20); // 20 columns`

*   **`JTextArea`:**  Allows the user to enter multi-line text.

    *   `JTextArea textArea = new JTextArea(5, 20); // rows, columns`
    *   `textArea.setLineWrap(true); // Enables text wrapping`
    *   `textArea.setWrapStyleWord(true); // Wraps at word boundaries`
    *   `JScrollPane scrollPane = new JScrollPane(textArea); // Adds scrollbars if needed`

*   **`JCheckBox`:** A toggle button that allows the user to select or deselect an option.

    *   `JCheckBox checkBox = new JCheckBox("Agree to terms");`

*   **`JRadioButton`:** Similar to a checkbox, but radio buttons are typically grouped together, allowing only one option to be selected from the group.  They need to be added to a `ButtonGroup`.

    *   `JRadioButton radioButton1 = new JRadioButton("Option 1");`
    *   `JRadioButton radioButton2 = new JRadioButton("Option 2");`
    *   `ButtonGroup group = new ButtonGroup();`
    *   `group.add(radioButton1);`
    *   `group.add(radioButton2);`

*   **`JComboBox`:** A drop-down list that allows the user to select one option from a list.

    *   `String[] options = {"Option A", "Option B", "Option C"};`
    *   `JComboBox<String> comboBox = new JComboBox<>(options);`

*   **`JList`:** Displays a list of items, allowing the user to select one or more items.

    *   `String[] data = {"Item 1", "Item 2", "Item 3", "Item 4"};`
    *   `JList<String> list = new JList<>(data);`
    *   `JScrollPane scrollPane = new JScrollPane(list); // For scrollable lists`

*   **`JPanel`:** A generic container that can hold other Swing components.  Used for grouping and organizing the layout of the GUI.

    *   `JPanel panel = new JPanel();`

**3. Adding Swing Controls to a JFrame (or other container)**

*   **Layout Managers:**  Swing uses layout managers to automatically arrange components within a container. Common layout managers include:
    *   **`FlowLayout`:**  Arranges components in a row, from left to right.  (Default for `JPanel`)
    *   **`BorderLayout`:**  Arranges components in five regions: `NORTH`, `SOUTH`, `EAST`, `WEST`, and `CENTER`. (Default for `JFrame`)
    *   **`GridLayout`:** Arranges components in a grid of rows and columns.
    *   **`BoxLayout`:**  Arranges components in a single row or column.
    *   **`CardLayout`:**  Allows you to stack components on top of each other and switch between them.
    *   **`GridBagLayout`:** A more flexible grid layout manager. (More complex to use)
    *   **`Null Layout (Absolute Positioning)`:**  Allows you to specify the exact position and size of each component.  **Generally discouraged** as it makes the GUI less adaptable to different screen sizes and resolutions.

*   **Adding Components:**
    *   `JFrame frame = new JFrame("My Application");`
    *   `frame.setLayout(new FlowLayout());` // Set the layout manager

    *   `JLabel label = new JLabel("Enter your name:");`
    *   `JTextField textField = new JTextField(20);`
    *   `JButton button = new JButton("Submit");`

    *   `frame.add(label);`
    *   `frame.add(textField);`
    *   `frame.add(button);`

    *   `frame.setSize(400, 300);`
    *   `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`
    *   `frame.setVisible(true);`

**4. Event Handling**

*   **Events:** User interactions with Swing components trigger events (e.g., button clicks, mouse movements, key presses).

*   **Event Listeners:**  Event listeners are interfaces that define methods to handle specific types of events.  Common event listeners include:
    *   `ActionListener`: For handling button clicks, menu item selections, etc.
    *   `MouseListener`: For handling mouse clicks, mouse movements, etc.
    *   `KeyListener`: For handling keyboard input.
    *   `ItemListener`: For handling changes in state for checkboxes and radio buttons.
    *   `DocumentListener`: For handling changes to text fields and text areas.

*   **Adding Event Listeners:** To handle an event, you need to:
    1.  Implement the appropriate event listener interface.
    2.  Register the listener with the Swing component that generates the event.

*   **Example (Button Click):**

    ```java
    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.*;

    public class ButtonExample {
        public static void main(String[] args) {
            JFrame frame = new JFrame("Button Example");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(300, 200);
            frame.setLayout(new FlowLayout());

            JButton button = new JButton("Click Me");
            JLabel label = new JLabel("Click the button!");

            button.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    label.setText("Button was clicked!");
                }
            });

            frame.add(button);
            frame.add(label);

            frame.setVisible(true);
        }
    }
    ```

    **Explanation:**
    *   We implement the `ActionListener` interface.
    *   We create an anonymous inner class that implements the `ActionListener` interface.  This allows us to define the `actionPerformed` method directly within the button's event handler.
    *   `button.addActionListener(new ActionListener() { ... });` registers the listener with the button.
    *   The `actionPerformed` method is called when the button is clicked.  Inside this method, we update the text of the `JLabel`.

**5. Simple GUI Application Example (Name Input)**

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class NameInputApp {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Name Input Application");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);
        frame.setLayout(new FlowLayout());

        JLabel nameLabel = new JLabel("Enter your name:");
        JTextField nameTextField = new JTextField(20);
        JButton submitButton = new JButton("Submit");
        JLabel greetingLabel = new JLabel("");

        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name = nameTextField.getText();
                if (!name.isEmpty()) {
                    greetingLabel.setText("Hello, " + name + "!");
                } else {
                    greetingLabel.setText("Please enter your name.");
                }
            }
        });

        frame.add(nameLabel);
        frame.add(nameTextField);
        frame.add(submitButton);
        frame.add(greetingLabel);

        frame.setVisible(true);
    }
}
```

**Explanation:**

*   This example creates a simple application that takes the user's name as input and displays a greeting.
*   It uses a `JFrame`, `JLabel`, `JTextField`, and `JButton`.
*   When the "Submit" button is clicked, the `actionPerformed` method retrieves the text from the `JTextField` and updates the `greetingLabel`.

**6. Important Points to Remember:**

*   **Event Dispatch Thread (EDT):**  Swing's GUI updates should always be done on the Event Dispatch Thread (EDT) to avoid concurrency issues. Use `SwingUtilities.invokeLater()` or `SwingUtilities.invokeAndWait()` to ensure code runs on the EDT.

*   **Layout Managers are Important:** Use layout managers to create GUIs that adapt well to different screen sizes and resolutions. Avoid using `null` layout unless you have a very specific reason.

*   **Read the JavaDocs:**  The Java documentation for Swing is your best resource for understanding the available components, methods, and events.

*   **Practice, Practice, Practice:** The best way to learn Swing is to build small GUI applications and experiment with different components and layout managers.

**Practice Questions/Exercises:**

1.  **Create a GUI application with a text area and a button. When the button is clicked, append the text "Hello, World!" to the text area.**

    *   **Answer:**

    ```java
    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.*;

    public class TextAreaApp {
        public static void main(String[] args) {
            JFrame frame = new JFrame("Text Area App");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(300, 250);
            frame.setLayout(new FlowLayout());

            JTextArea textArea = new JTextArea(10, 20);
            JScrollPane scrollPane = new JScrollPane(textArea);
            JButton addButton = new JButton("Add Text");

            addButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    textArea.append("Hello, World!\n");
                }
            });

            frame.add(scrollPane);
            frame.add(addButton);
            frame.setVisible(true);
        }
    }
    ```

2.  **Create a GUI application with two radio buttons labeled "Male" and "Female". Display a message in a label indicating which radio button is selected.**

    *   **Answer:**

    ```java
    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.*;

    public class RadioButtonApp {
        public static void main(String[] args) {
            JFrame frame = new JFrame("Radio Button App");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(300, 200);
            frame.setLayout(new FlowLayout());

            JRadioButton maleButton = new JRadioButton("Male");
            JRadioButton femaleButton = new JRadioButton("Female");
            ButtonGroup genderGroup = new ButtonGroup();
            genderGroup.add(maleButton);
            genderGroup.add(femaleButton);

            JLabel genderLabel = new JLabel("Select a gender:");

            maleButton.addItemListener(new ItemListener() {
                @Override
                public void itemStateChanged(ItemEvent e) {
                    if (e.getStateChange() == ItemEvent.SELECTED) {
                        genderLabel.setText("Gender: Male");
                    }
                }
            });

            femaleButton.addItemListener(new ItemListener() {
                @Override
                public void itemStateChanged(ItemEvent e) {
                    if (e.getStateChange() == ItemEvent.SELECTED) {
                        genderLabel.setText("Gender: Female");
                    }
                }
            });

            frame.add(new JLabel("Choose gender:"));
            frame.add(maleButton);
            frame.add(femaleButton);
            frame.add(genderLabel);

            frame.setVisible(true);
        }
    }
    ```

3.  **Create a GUI application with a combo box containing a list of colors (e.g., Red, Green, Blue).  Change the background color of the JFrame to the selected color in the combo box.**

    *   **Answer:**

    ```java
    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.*;

    public class ComboBoxApp {
        public static void main(String[] args) {
            JFrame frame = new JFrame("Combo Box App");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(300, 200);
            frame.setLayout(new FlowLayout());

            String[] colors = {"Red", "Green", "Blue"};
            JComboBox<String> colorComboBox = new JComboBox<>(colors);

            colorComboBox.addItemListener(new ItemListener() {
                @Override
                public void itemStateChanged(ItemEvent e) {
                    if (e.getStateChange() == ItemEvent.SELECTED) {
                        String selectedColor = (String) colorComboBox.getSelectedItem();
                        switch (selectedColor) {
                            case "Red":
                                frame.getContentPane().setBackground(Color.RED);
                                break;
                            case "Green":
                                frame.getContentPane().setBackground(Color.GREEN);
                                break;
                            case "Blue":
                                frame.getContentPane().setBackground(Color.BLUE);
                                break;
                        }
                    }
                }
            });

            frame.add(new JLabel("Select a color:"));
            frame.add(colorComboBox);
            frame.setVisible(true);
        }
    }
    ```

**Note on SOLID Principles and Swing:**

While these notes are about the *use* of Swing components, remember that SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) are crucial for *designing* applications that *use* Swing.  For example, you might create a class that encapsulates the logic for handling user input and updating the GUI.  This class should ideally adhere to the Single Responsibility Principle (doing one thing and doing it well) and be open for extension but closed for modification (Open/Closed Principle). SOLID principles help create maintainable and testable GUI applications.
