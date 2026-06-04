---
title: "Swing Controls"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Advanced features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6ab"
status: "completed"
scrapedAt: "2026-05-23T17:51:55.014Z"
---
## OBJECT ORIENTED PROGRAMMING: Module 4: Advanced features of Java

### Topic: Swing Controls

---

### **1. Introduction to Swing**

*   **What is Swing?**
    *   Swing is a GUI (Graphical User Interface) toolkit for Java.
    *   It provides a rich set of platform-independent components for building sophisticated graphical applications.
    *   Swing is part of the Java Foundation Classes (JFC) and is built on top of the Abstract Window Toolkit (AWT).
    *   **Key Concept:** Swing components are "lightweight," meaning they are implemented entirely in Java code and do not rely on the native operating system's GUI components. This ensures consistency across different platforms. (Refer to Schildt, 8/e, Chapter 30 for a detailed comparison of AWT vs. Swing).

*   **Advantages of Swing:**
    *   **Platform Independence:** Swing GUIs look and behave the same on all supported platforms.
    *   **Rich Component Set:** Offers a wide variety of pre-built components (buttons, text fields, lists, menus, etc.).
    *   **Flexibility and Customization:** Components are highly customizable, allowing developers to create unique UIs.
    *   **Pluggable Look and Feel:** Allows the appearance of Swing components to be changed at runtime, providing native or custom looks.
    *   **Model-View-Controller (MVC) Architecture:** Many Swing components follow the MVC pattern, promoting modularity and reusability.

*   **Swing vs. AWT:**
    *   **AWT (Abstract Window Toolkit):** Relies on native operating system components. This can lead to platform-dependent behavior and appearance.
    *   **Swing:** Pure Java implementation. Provides more control and consistency.
    *   **Key Concept:** Swing components are subclasses of `javax.swing.JComponent`, whereas AWT components are subclasses of `java.awt.Component`.

---

### **2. Core Swing Concepts and Packages**

*   **Packages:**
    *   `javax.swing`: Contains the core Swing classes and components.
    *   `java.awt`: Provides foundational GUI classes like `Container`, `Graphics`, `EventObject`, etc.
    *   `java.awt.event`: Contains classes for handling events.

*   **Top-Level Containers:**
    *   These are the basic windows in a Swing application.
    *   **`JFrame`:** The most common top-level window. It has a title bar, borders, and a menu bar. It's a window with a title and can be resized, minimized, maximized, and closed.
        *   **Example:**
            ```java
            import javax.swing.*;

            public class SimpleFrame extends JFrame {
                public SimpleFrame() {
                    setTitle("My First Swing Frame");
                    setSize(400, 300);
                    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Important for closing the application
                    setVisible(true); // Makes the frame visible
                }

                public static void main(String[] args) {
                    new SimpleFrame(); // Create and show the frame
                }
            }
            ```
            *   *(Refer to Deitel & Deitel, 11th Ed., Chapter 16 for detailed examples on `JFrame` properties and methods.)*
    *   **`JDialog`:** A pop-up window used for user interaction, typically to get input or display messages.
    *   **`JApplet`:** Used for creating applets that run within a web browser (less common now with the decline of Java applets).

*   **Intermediate Containers:**
    *   These are used to organize and group other components within a top-level container.
    *   **`JPanel`:** A general-purpose lightweight container. It's often used to group other components, manage layout, and handle painting.
        *   **Example:**
            ```java
            import javax.swing.*;
            import java.awt.*;

            public class PanelExample extends JFrame {
                public PanelExample() {
                    setTitle("Panel Example");
                    setSize(400, 300);
                    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

                    JPanel panel = new JPanel();
                    panel.setLayout(new FlowLayout()); // Set a layout manager for the panel

                    JButton button1 = new JButton("Button 1");
                    JButton button2 = new JButton("Button 2");

                    panel.add(button1);
                    panel.add(button2);

                    add(panel); // Add the panel to the frame's content pane
                    setVisible(true);
                }

                public static void main(String[] args) {
                    new PanelExample();
                }
            }
            ```
    *   **`JScrollPane`:** Provides scrollbars for components that exceed the visible area, like large text areas or lists.
    *   **`JToolBar`:** A container for buttons or other controls that provides quick access to common actions.

*   **Basic Controls (Components):**
    *   These are the interactive elements that users interact with.
    *   **`JLabel`:** Displays static text or an image.
    *   **`JButton`:** A standard clickable button.
    *   **`JTextField`:** A single-line text input field.
    *   **`JTextArea`:** A multi-line text input field.
    *   **`JPasswordField`:** Similar to `JTextField` but masks the input characters (e.g., with asterisks).
    *   **`JCheckBox`:** A toggle button that can be selected or deselected.
    *   **`JRadioButton`:** Used in groups (with `ButtonGroup`) to allow only one option to be selected.
    *   **`JComboBox`:** A drop-down list allowing the user to select one item from a list.
    *   **`JList`:** Displays a list of items from which the user can select one or more.
    *   **`JMenuBar`, `JMenu`, `JMenuItem`:** Used for creating menu bars, menus, and menu items.
    *   **`JSlider`:** Allows the user to select a value from a bounded range by moving a knob.
    *   **`JProgressBar`:** Displays the progress of an operation.
    *   **`JFileChooser`:** Allows the user to select files and directories.

---

### **3. Layout Managers**

*   **Purpose:** Layout managers are responsible for arranging components within a container. They determine the size and position of components.
*   **Key Concept:** Swing uses a separate layout manager for each container. By default, `JFrame`'s content pane uses a `BorderLayout`. `JPanel`s don't have a default layout manager, so you usually need to set one.
*   **Common Layout Managers:**
    *   **`FlowLayout`:** Arranges components in a row, from left to right. When a row is full, it moves to the next row. (Refer to Liang, 7/e, Chapter 20 for detailed explanations of layout managers).
        *   **Example Usage:** `panel.setLayout(new FlowLayout());`
    *   **`BorderLayout`:** Arranges components in five regions: North, South, East, West, and Center. Components in the Center region expand to fill available space.
        *   **Example Usage:** `frame.setLayout(new BorderLayout());`
        *   **Example Component Placement:** `frame.add(new JButton("North"), BorderLayout.NORTH);`
    *   **`GridLayout`:** Arranges components in a grid of rows and columns. All cells have the same size.
        *   **Example Usage:** `panel.setLayout(new GridLayout(2, 3)); // 2 rows, 3 columns`
    *   **`BoxLayout`:** Arranges components either vertically in a column or horizontally in a row.
        *   **Example Usage:** `panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS)); // Vertical alignment`
    *   **`GridBagLayout`:** The most powerful and flexible layout manager, allowing for complex arrangements using constraints. It's also the most complex to use.
    *   **`null` Layout (Absolute Positioning):** Components are positioned and sized explicitly using `setBounds()` or `setLocation()`/`setSize()`. This is generally discouraged as it breaks platform independence and responsiveness.

---

### **4. Event Handling in Swing**

*   **Event-Driven Programming:** Swing applications are event-driven. Components generate events (e.g., button click, key press, mouse movement), and the application responds to these events.
*   **Event Model:**
    1.  **Event Source:** The component that generates the event (e.g., a `JButton`).
    2.  **Event Object:** An object that encapsulates information about the event (e.g., `ActionEvent`).
    3.  **Event Listener:** An object that "listens" for specific types of events from a particular source.
    4.  **Event Handler Method:** A method within the listener that is called when the event occurs.
*   **Core Interfaces and Classes:**
    *   `ActionListener` (for `ActionEvent`): `void actionPerformed(ActionEvent e)`
    *   `MouseListener` (for `MouseEvent`): `mouseClicked`, `mousePressed`, `mouseReleased`, `mouseEntered`, `mouseExited`
    *   `KeyListener` (for `KeyEvent`): `keyTyped`, `keyPressed`, `keyReleased`
    *   `FocusListener` (for `FocusEvent`): `focusGained`, `focusLost`
    *   `WindowListener` (for `WindowEvent`): `windowOpened`, `windowClosing`, `windowClosed`, `windowIconified`, `windowDeiconified`, `windowActivated`, `windowDeactivated`
*   **Registering Listeners:** You use the `addXxxListener()` method of the event source to register a listener object.
    *   **Example with `ActionListener`:**
        ```java
        import javax.swing.*;
        import java.awt.*;
        import java.awt.event.*;

        public class ButtonEventExample extends JFrame implements ActionListener {
            JButton clickMeButton;

            public ButtonEventExample() {
                setTitle("Button Event Example");
                setSize(300, 200);
                setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                setLayout(new FlowLayout());

                clickMeButton = new JButton("Click Me!");
                clickMeButton.addActionListener(this); // Registering the current frame as the listener

                add(clickMeButton);
                setVisible(true);
            }

            @Override
            public void actionPerformed(ActionEvent e) {
                // This method is called when the button is clicked
                if (e.getSource() == clickMeButton) {
                    JOptionPane.showMessageDialog(this, "Button was clicked!");
                }
            }

            public static void main(String[] args) {
                new ButtonEventExample();
            }
        }
        ```
        *   *(Note: Using `JOptionPane` is a convenient way to display simple dialogs. Refer to Schildt, 8/e, Chapter 31 for more on event handling.)*

*   **Inner Classes and Anonymous Inner Classes for Listeners:**
    *   You can create listener classes as inner classes or anonymous inner classes for better encapsulation and conciseness.
    *   **Anonymous Inner Class Example:**
        ```java
        // ... inside the constructor or another method of your JFrame ...
        JButton saveButton = new JButton("Save");
        saveButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Save button clicked!");
                // Add save logic here
            }
        });
        add(saveButton);
        // ...
        ```
        *   *(This is a common and efficient way to handle events for single-component listeners.)*

---

### **5. Important Swing Controls in Detail**

*   **`JButton`:**
    *   **Properties:** Text, Icon, Tooltip, Enabled state.
    *   **Events:** `ActionEvent`.
    *   **`setBorderPainted(boolean)`:** Controls if the button's border is drawn.
    *   **`setFocusPainted(boolean)`:** Controls if the focus rectangle is drawn when the button has focus.

*   **`JTextField`, `JTextArea`, `JPasswordField`:**
    *   **`JTextField`:**
        *   **`setColumns(int)`:** Sets the preferred column width.
        *   **`setEditable(boolean)`:** Controls if the text can be edited.
        *   **`getText()`:** Returns the current text.
        *   **`setText(String)`:** Sets the text.
        *   **`addActionListener(ActionListener)`:** Can be used to detect when the user presses Enter in a `JTextField`.
    *   **`JTextArea`:**
        *   **`setLineWrap(boolean)`:** Enables automatic line wrapping.
        *   **`setWrapStyleWord(boolean)`:** Wraps at word boundaries.
        *   **`JScrollPane` is often used with `JTextArea`**.
    *   **`JPasswordField`:**
        *   **`setEchoChar(char)`:** Sets the character used to mask input. The default is `*`.

*   **`JCheckBox` and `JRadioButton`:**
    *   **`isSelected()`:** Returns `true` if selected, `false` otherwise.
    *   **`setSelected(boolean)`:** Sets the selection state.
    *   **`addItemListener(ItemListener)`:** Listen for selection/deselection events.
    *   **`JRadioButton` requires a `ButtonGroup` to ensure mutual exclusivity.**
        *   **Example:**
            ```java
            ButtonGroup radioButtonGroup = new ButtonGroup();
            JRadioButton option1 = new JRadioButton("Option 1");
            JRadioButton option2 = new JRadioButton("Option 2");
            radioButtonGroup.add(option1);
            radioButtonGroup.add(option2);
            ```
            *(Refer to Balagurusamy, 5/e, Chapter 10 for detailed examples of radio buttons and checkboxes.)*

*   **`JComboBox`:**
    *   **`addItem(Object)`:** Adds an item to the list.
    *   **`removeItem(Object)`:** Removes an item.
    *   **`setSelectedItem(Object)`:** Selects an item programmatically.
    *   **`getSelectedItem()`:** Returns the currently selected item.
    *   **`addActionListener(ActionListener)`:** Listen for when the user selects a different item.
    *   **`addItemListener(ItemListener)`:** Also listens for selection changes.

*   **`JList`:**
    *   **Requires a `ListModel`:** Usually `DefaultListModel`.
    *   **`setSelectionMode(int)`:** Allows single selection (`ListSelectionModel.SINGLE_SELECTION`), single interval selection (`ListSelectionModel.SINGLE_INTERVAL_SELECTION`), or multiple interval selection (`ListSelectionModel.MULTIPLE_INTERVAL_SELECTION`).
    *   **`addListSelectionListener(ListSelectionListener)`:** Listen for changes in the selection.
        *   **`valueChanged(ListSelectionEvent e)`:** The handler method.

*   **Menus (`JMenuBar`, `JMenu`, `JMenuItem`):**
    *   **`JMenuBar`:** Placed at the top of a `JFrame`.
    *   **`JMenu`:** A clickable item in the `JMenuBar` that expands to show `JMenuItem`s.
    *   **`JMenuItem`:** An item within a `JMenu`. Can have an `ActionListener`.
    *   **`add(JMenuItem)`:** Adds a menu item to a menu.
    *   **`add(JMenu)`:** Adds a menu to a menu bar.
    *   **`setJMenuBar(JMenuBar)`:** Sets the menu bar for a `JFrame`.
        *   **Example:**
            ```java
            JMenuBar menuBar = new JMenuBar();
            JMenu fileMenu = new JMenu("File");
            JMenuItem openItem = new JMenuItem("Open");
            JMenuItem exitItem = new JMenuItem("Exit");

            fileMenu.add(openItem);
            fileMenu.addSeparator(); // Adds a separator line
            fileMenu.add(exitItem);
            menuBar.add(fileMenu);

            setJMenuBar(menuBar); // In your JFrame class

            exitItem.addActionListener(e -> System.exit(0)); // Using lambda expression
            ```
            *   *(Refer to Core Java: An Integrated Approach by Nageswararao R., Chapter 12 for a comprehensive guide to menus.)*

---

### **6. Model-View-Controller (MVC) in Swing**

*   **Concept:** While not strictly enforced for every component, many Swing components (like `JList`, `JTable`, `JTree`) are designed with the MVC pattern in mind.
    *   **Model:** Represents the data for the component (e.g., the list of strings for a `JList`).
    *   **View:** Renders the model to the screen.
    *   **Controller:** Handles user input and updates the model or view accordingly.
*   **Example:** `JList` with `DefaultListModel`:
    *   **Model:** `DefaultListModel` (holds the actual data).
    *   **View:** The visual rendering of the list items.
    *   **Controller:** Event listeners that modify the `DefaultListModel` or respond to selection changes.

---

### **7. Swing Threading Issues (Important Consideration)**

*   **The Event Dispatch Thread (EDT):** All Swing GUI updates and event handling must occur on the EDT.
*   **Why?** Swing components are not thread-safe. Modifying them from other threads can lead to unpredictable behavior, visual glitches, or crashes.
*   **How to ensure operations happen on the EDT:**
    *   **`SwingUtilities.invokeLater(Runnable)`:** Schedules a `Runnable` task to be executed on the EDT. Use this when starting your Swing application or creating the GUI from a non-EDT thread.
    *   **`SwingUtilities.invokeAndWait(Runnable)`:** Similar to `invokeLater` but blocks the current thread until the `Runnable` is executed on the EDT. Use with caution, as it can cause deadlocks if used improperly.
*   **Example of correct GUI creation:**
    ```java
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new SimpleFrame(); // Create and show the GUI on the EDT
            }
        });
    }
    ```
    *   *(This ensures that GUI creation and updates happen safely on the EDT.)*
*   **Performing long-running tasks:** If you have a task that takes a long time (e.g., loading data from a file), do NOT perform it directly in an event handler. This will freeze your GUI. Instead, use `SwingWorker` or start a new `Thread` and then use `SwingUtilities.invokeLater` to update the GUI *after* the task is complete. (Refer to Head First Java, 2/e, for intuitive explanations of threading in Java, though its specific focus might not be Swing threading, the principles are applicable).

---

### **8. Practice Questions & Exercises**

**Question 1:**
What is the primary advantage of Swing components over AWT components?
a) They are built using native OS widgets.
b) They are implemented entirely in Java, ensuring platform independence.
c) They are less flexible and harder to customize.
d) They rely on the underlying operating system for rendering.

**Answer:** b) They are implemented entirely in Java, ensuring platform independence.

**Question 2:**
Which Swing class is used to create a top-level window with a title bar, borders, and a menu bar?
a) `JPanel`
b) `JDialog`
c) `JFrame`
d) `JApplet`

**Answer:** c) `JFrame`

**Question 3:**
If you want to arrange buttons in a single row, from left to right, and wrap to the next row when the current row is full, which layout manager would you use?
a) `BorderLayout`
b) `GridLayout`
c) `FlowLayout`
d) `BoxLayout`

**Answer:** c) `FlowLayout`

**Question 4:**
What is the role of the `SwingUtilities.invokeLater()` method?
a) To execute a task on a separate background thread.
b) To immediately execute a task on the current thread.
c) To schedule a task to be executed on the Event Dispatch Thread (EDT).
d) To halt the execution of the current thread.

**Answer:** c) To schedule a task to be executed on the Event Dispatch Thread (EDT).

**Question 5 (Coding Exercise):**
Create a simple Swing application with a `JFrame`. Inside the frame, add a `JPanel` and place a `JButton` labeled "Click Me" on the panel. Implement an `ActionListener` for the button that displays a `JOptionPane` message "Button Clicked!" when the button is pressed. Use `FlowLayout` for the panel.

**Solution Snippet:**

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ButtonDemo extends JFrame implements ActionListener {

    private JButton clickButton;

    public ButtonDemo() {
        setTitle("Button Demo");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Center the frame

        // Panel to hold the button
        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout()); // Use FlowLayout

        // Create the button
        clickButton = new JButton("Click Me");
        clickButton.addActionListener(this); // Register listener

        // Add button to panel
        panel.add(clickButton);

        // Add panel to frame
        add(panel);

        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == clickButton) {
            JOptionPane.showMessageDialog(this, "Button Clicked!");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new ButtonDemo();
            }
        });
    }
}
```

---

### **9. Key Points to Remember**

*   **Swing is lightweight and platform-independent.**
*   **Top-level containers** are `JFrame`, `JDialog`, `JApplet`.
*   **Intermediate containers** like `JPanel` are used for organization.
*   **Layout managers** control component placement. `FlowLayout`, `BorderLayout`, and `GridLayout` are common.
*   **Event handling** is crucial for interactivity. Use listeners (`ActionListener`, `MouseListener`, etc.).
*   **All Swing updates MUST happen on the Event Dispatch Thread (EDT)** using `SwingUtilities.invokeLater()`.
*   **`JScrollPane` is essential for components that might overflow their container.**
*   **`ButtonGroup` is needed for exclusive `JRadioButton` selections.**
*   **Menus are built using `JMenuBar`, `JMenu`, and `JMenuItem`.**

---

This comprehensive set of notes covers the fundamental aspects of Swing controls, aligning with the learning outcomes and course objectives. Remember to consult the provided textbooks for deeper insights and more advanced examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
