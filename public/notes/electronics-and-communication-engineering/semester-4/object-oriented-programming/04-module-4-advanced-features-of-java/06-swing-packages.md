---
title: "Swing Packages"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Advanced features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6ad"
status: "completed"
scrapedAt: "2026-05-23T17:51:56.451Z"
---
# Module 4: Advanced Features of Java - Swing Packages

## Introduction to Swing

Swing is a GUI (Graphical User Interface) toolkit for Java that provides a rich set of platform-independent components. It was developed as an improvement over the older AWT (Abstract Window Toolkit) and offers more flexibility, customizability, and a lighter weight architecture. Swing components are written entirely in Java, making them portable across different operating systems without requiring native GUI libraries.

**Key Concepts:**

*   **Platform Independence:** Swing applications look and behave the same regardless of the underlying operating system.
*   **Lightweight Components:** Unlike AWT components which are "heavyweight" (relying on native operating system peer components), Swing components are "lightweight" and are painted directly by Java code. This leads to better performance and more consistent appearance.
*   **Pluggable Look and Feel:** Swing allows you to change the look and feel of your application at runtime, enabling customization and adherence to different OS aesthetics (e.g., Windows, macOS, Motif).
*   **Component Hierarchy:** Swing organizes components into a hierarchical structure, facilitating event handling and layout management.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Likely covers the basics of GUI programming in Java and introduces Swing as a successor to AWT.
*   **Java How to Program (Deitel & Deitel):** Provides a thorough introduction to Swing, covering its core concepts, components, and event handling in detail.
*   **Introduction to Java Programming (Liang):** Offers practical examples and explanations of Swing components and their usage.

**Course Outcome Alignment:**

*   **CO4:** This module directly addresses CO4 by focusing on identifying and utilizing various Swing controls, components, and containers.

## Core Swing Packages

Swing components are primarily located within the `javax.swing` package. The `java.awt` package is still essential as it provides fundamental GUI concepts like events, layouts, and graphics.

**Key Packages:**

*   **`javax.swing`:** Contains the core Swing components (buttons, text fields, labels, etc.), containers, and utility classes.
    *   **`JFrame`:** The top-level window for a Swing application.
    *   **`JPanel`:** A general-purpose container used to group other components.
    *   **`JButton`:** A clickable button.
    *   **`JLabel`:** A display area for text or an image.
    *   **`JTextField`:** A single-line text input field.
    *   **`JTextArea`:** A multi-line text input field.
    *   **`JMenuBar`:** A menu bar for a window.
    *   **`JMenu`:** A menu item that can contain other menu items or submenus.
    *   **`JMenuItem`:** An item within a menu.
    *   **`JCheckBox`:** A check box that can be selected or deselected.
    *   **`JRadioButton`:** A radio button that typically works in groups where only one can be selected.
    *   **`JComboBox`:** A combo box that allows users to select from a list of items.
    *   **`JList`:** A list of items from which the user can select one or more.
    *   **`JTable`:** A component for displaying data in a table format.
    *   **`JScrollPane`:** Provides scroll bars for other components.
*   **`java.awt`:** Provides fundamental GUI classes and interfaces, including:
    *   **`Container`:** A superclass for all user interface objects that can contain other objects.
    *   **`LayoutManager`:** An interface for managing the size and position of components within a container.
    *   **`EventObject`:** The root class of all event objects.
    *   **`Color`:** Represents an RGBA color.
    *   **`Font`:** Represents fonts.
*   **`java.awt.event`:** Contains classes and interfaces for event handling.

**Important Point to Remember:** Swing components are prefixed with 'J' (e.g., `JFrame`, `JButton`).

## Creating a Basic Swing Window (JFrame)

The `JFrame` class is the foundation for any Swing GUI application. It represents a top-level window with a title bar, border, and a content pane where other components can be placed.

**Steps to Create a `JFrame`:**

1.  **Import necessary classes:** `javax.swing.*` and `java.awt.*`.
2.  **Create an instance of `JFrame`:** `JFrame frame = new JFrame("My Swing Application");`
3.  **Set the default close operation:** This determines what happens when the user clicks the close button. The most common is `JFrame.EXIT_ON_CLOSE`.
    *   `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`
4.  **Set the size of the window:**
    *   `frame.setSize(400, 300);`
5.  **Set the window's visibility:**
    *   `frame.setVisible(true);`

**Example:**

```java
import javax.swing.*;
import java.awt.*;

public class BasicSwingWindow {
    public static void main(String[] args) {
        // 1. Create a JFrame
        JFrame frame = new JFrame("Simple Swing Window");

        // 2. Set the default close operation
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // 3. Set the window's size
        frame.setSize(400, 300);

        // 4. Set the window's location (optional, centers the window)
        frame.setLocationRelativeTo(null); // Centers the window on the screen

        // 5. Make the window visible
        frame.setVisible(true);
    }
}
```

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Chapter 13, "Introduction to GUI Programming with Swing" provides detailed examples of creating `JFrame` and its basic configurations.
*   **Introduction to Java Programming (Liang):** Chapter 14, "GUI Programming" covers `JFrame` and basic window management.

**Course Outcome Alignment:**

*   **CO4:** Demonstrates the use of a fundamental Swing container (`JFrame`).

## Components and Containers

Swing provides a wide array of components that users interact with (like buttons and text fields) and containers that hold and organize these components.

### Components (Lightweight Controls)

These are the building blocks of your GUI.

**Commonly Used Components:**

*   **`JLabel`:** Displays text or an image.
    *   `JLabel label = new JLabel("Hello, Swing!");`
*   **`JButton`:** An interactive button.
    *   `JButton button = new JButton("Click Me");`
*   **`JTextField`:** A single-line text field.
    *   `JTextField textField = new JTextField(20); // 20 columns wide`
*   **`JTextArea`:** A multi-line text area.
    *   `JTextArea textArea = new JTextArea(5, 20); // 5 rows, 20 columns`
    *   Often wrapped in a `JScrollPane` for scrolling: `JScrollPane scrollPane = new JScrollPane(textArea);`
*   **`JCheckBox`:** For selecting/deselecting options.
    *   `JCheckBox checkBox = new JCheckBox("Enable Feature");`
*   **`JRadioButton`:** For selecting one option from a group. Requires a `ButtonGroup`.
    *   `JRadioButton radioButton1 = new JRadioButton("Option 1");`
    *   `JRadioButton radioButton2 = new JRadioButton("Option 2");`
    *   `ButtonGroup group = new ButtonGroup();`
    *   `group.add(radioButton1);`
    *   `group.add(radioButton2);`
*   **`JComboBox`:** A dropdown list.
    *   `String[] options = {"Option A", "Option B", "Option C"};`
    *   `JComboBox comboBox = new JComboBox(options);`
*   **`JList`:** Displays a list of items.
    *   `String[] items = {"Item 1", "Item 2", "Item 3"};`
    *   `JList list = new JList(items);`
*   **`JMenu`, `JMenuItem`, `JMenuBar`:** For creating menus.

### Containers

Containers are used to group and organize other components.

**Commonly Used Containers:**

*   **`JFrame`:** Top-level window.
*   **`JPanel`:** A general-purpose lightweight container. It's often used to group related components or to create complex layouts.
*   **`JScrollPane`:** Adds scrollbars to components that might exceed the visible area.
*   **`JTabbedPane`:** Allows switching between different panels, each on a separate tab.
*   **`JToolBar`:** A bar that contains buttons or other components, typically placed at the top or side of a window.

**Adding Components to a Container:**

Components are added to a container's content pane. You can get the content pane using `frame.getContentPane()`.

```java
// Assuming 'frame' is a JFrame instance
Container contentPane = frame.getContentPane();
contentPane.add(myLabel);
contentPane.add(myButton);
```

**Important Point to Remember:** Components are added to a container's `contentPane` by default. For advanced layout management, you'll often set a specific `LayoutManager` for the container.

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Chapters on specific components and their properties.
*   **Introduction to Java Programming (Liang):** Chapter 14 provides examples of adding various components to frames.
*   **Java: The Complete Reference (Schildt):** Discusses the AWT component hierarchy and how Swing extends it.

**Course Outcome Alignment:**

*   **CO4:** Directly covers the identification and utilization of various Swing controls, components, and containers.

## Layout Managers

Layout managers are crucial for controlling the size and position of components within a container. Without a layout manager, components might overlap or not display as intended.

**Common Layout Managers:**

*   **`FlowLayout`:** Arranges components in a row, left to right. When a row is full, it moves to the next row. Components are typically centered.
    *   `frame.setLayout(new FlowLayout());` // Uses default center alignment
    *   `frame.setLayout(new FlowLayout(FlowLayout.LEFT, 10, 5));` // Left alignment, 10px horizontal gap, 5px vertical gap

*   **`BorderLayout`:** Divides the container into five regions: `CENTER`, `NORTH`, `SOUTH`, `EAST`, and `WEST`. Components are placed in these regions. Only one component can be in the `CENTER` region.
    *   `frame.setLayout(new BorderLayout());`
    *   `frame.add(myPanel, BorderLayout.CENTER);`
    *   `frame.add(myButton, BorderLayout.NORTH);`

*   **`GridLayout`:** Arranges components in a grid of rows and columns. All cells in the grid have the same size.
    *   `frame.setLayout(new GridLayout(3, 2));` // 3 rows, 2 columns
    *   `frame.add(component1); frame.add(component2); ...`

*   **`BoxLayout`:** Arranges components either vertically or horizontally in a single row or column.
    *   `JPanel panel = new JPanel();`
    *   `panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));` // Vertical arrangement
    *   `panel.setLayout(new BoxLayout(panel, BoxLayout.X_AXIS));` // Horizontal arrangement

*   **`GridBagLayout`:** A powerful and flexible layout manager that allows components to be placed according to a grid bag. It uses constraints (`GridBagConstraints`) to define the position, size, and alignment of each component. It's more complex but offers fine-grained control. (Refer to Schildt or Deitel for in-depth examples).

**Using `JScrollPane` with Layout Managers:**

When adding components like `JTextArea` or `JList` that might need scrolling, wrap them in a `JScrollPane` before adding to the container.

```java
JTextArea textArea = new JTextArea(10, 30);
JScrollPane scrollPane = new JScrollPane(textArea);

// Add the scroll pane to the frame with BorderLayout.CENTER
frame.add(scrollPane, BorderLayout.CENTER);
```

**Important Point to Remember:** You can mix and match layout managers by setting a layout manager for a `JPanel` and then adding that `JPanel` to another container which might have a different layout manager. This allows for complex and structured GUIs.

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Dedicated sections on each layout manager with detailed examples.
*   **Introduction to Java Programming (Liang):** Chapter 14 provides clear explanations and examples of common layout managers.
*   **Java: The Complete Reference (Schildt):** Covers layout managers extensively, including the more complex ones like `GridBagLayout`.

**Course Outcome Alignment:**

*   **CO4:** Understanding layout managers is essential for effectively arranging Swing components.

## Event Handling in Swing

GUI applications are inherently event-driven. Users interact with components by generating events (e.g., clicking a button, typing in a text field). Swing uses the Java Event Model to handle these events.

**Key Concepts:**

*   **Event Source:** The component that generates the event (e.g., a `JButton`).
*   **Event Listener:** An object that is registered with the event source to "listen" for specific types of events.
*   **Event Object:** An object that encapsulates information about the event (e.g., `ActionEvent`, `MouseEvent`).
*   **Event Adapter:** A class that provides default implementations for all methods in an event listener interface, allowing you to override only the methods you need.

**The Event Handling Process:**

1.  **Create an Event Listener:** Implement an appropriate listener interface (e.g., `ActionListener`, `MouseListener`, `KeyListener`).
2.  **Register the Listener:** Add the listener object to the event source using an `addXXXListener()` method (e.g., `button.addActionListener(myActionListener);`).
3.  **Implement Event-Handling Method:** In the listener, implement the method defined by the listener interface. This method will be called when the specific event occurs.

**Common Event Listeners and Methods:**

*   **`ActionListener`:** For action events (e.g., button clicks, menu item selections).
    *   Interface method: `void actionPerformed(ActionEvent e)`
*   **`MouseListener`:** For mouse events (press, release, enter, exit, click).
    *   Interface methods: `mouseClicked`, `mousePressed`, `mouseReleased`, `mouseEntered`, `mouseExited`
*   **`KeyListener`:** For keyboard events (press, release, type).
    *   Interface methods: `keyTyped`, `keyPressed`, `keyReleased`
*   **`MouseMotionListener`:** For mouse movement events (drag, move).
    *   Interface methods: `mouseDragged`, `mouseMoved`

**Using Inner Classes or Anonymous Inner Classes for Listeners:**

Often, listeners are implemented using inner classes or anonymous inner classes for conciseness.

**Example (Button Click):**

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ButtonEventDemo extends JFrame implements ActionListener { // Implement ActionListener

    private JButton button;

    public ButtonEventDemo() {
        setTitle("Button Event Demo");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300, 200);
        setLocationRelativeTo(null);

        // Create a panel for components
        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout());

        // Create a button
        button = new JButton("Click Me");

        // Register the ActionListener (this class) with the button
        button.addActionListener(this); // 'this' refers to the JFrame instance

        // Add the button to the panel
        panel.add(button);

        // Add the panel to the frame's content pane
        getContentPane().add(panel);

        setVisible(true);
    }

    // Implement the actionPerformed method
    @Override
    public void actionPerformed(ActionEvent e) {
        // Code to execute when the button is clicked
        if (e.getSource() == button) { // Check which component generated the event
            JOptionPane.showMessageDialog(this, "Button was clicked!");
        }
    }

    public static void main(String[] args) {
        // Run the GUI creation on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new ButtonEventDemo();
            }
        });
    }
}
```

**Anonymous Inner Class Example:**

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class AnonymousListenerDemo extends JFrame {

    public AnonymousListenerDemo() {
        setTitle("Anonymous Listener Demo");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300, 200);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout());

        JButton button = new JButton("Click Me");

        // Using an anonymous inner class for the ActionListener
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JOptionPane.showMessageDialog(AnonymousListenerDemo.this, "Button clicked via anonymous class!");
            }
        });

        panel.add(button);
        getContentPane().add(panel);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new AnonymousListenerDemo();
            }
        });
    }
}
```

**`SwingUtilities.invokeLater()`:** It's crucial to create and update Swing components on the Event Dispatch Thread (EDT). `SwingUtilities.invokeLater()` ensures that your GUI code runs on the EDT, preventing threading issues.

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Chapter 13 and subsequent chapters dedicated to event handling and specific event types.
*   **Java: The Complete Reference (Schildt):** Chapter on event handling and delegation.
*   **Introduction to Java Programming (Liang):** Chapter 14 provides excellent examples of event handling with various components.

**Course Outcome Alignment:**

*   **CO2:** While not exclusively Swing, event handling in Swing relies heavily on Java's object-oriented principles like interfaces and event objects, reinforcing CO2.
*   **CO4:** Essential for making Swing applications interactive.

## Common Swing Controls and Their Usage

Let's delve into the usage of some frequently used Swing controls.

### `JLabel`

Used to display static text or images.

```java
JLabel textLabel = new JLabel("Enter your name:");
ImageIcon icon = new ImageIcon("path/to/image.png");
JLabel imageLabel = new JLabel(icon);
```

### `JTextField` and `JTextArea`

For text input.

*   **`JTextField`:** Single line.
    *   `JTextField nameField = new JTextField(20);` // 20 columns
    *   `String text = nameField.getText();` // Get text
    *   `nameField.setText("Default text");` // Set text
    *   `nameField.setEditable(false);` // Make it read-only
*   **`JTextArea`:** Multi-line. Requires `JScrollPane`.
    *   `JTextArea messageArea = new JTextArea(5, 30);` // 5 rows, 30 cols
    *   `JScrollPane scrollPane = new JScrollPane(messageArea);`
    *   `String text = messageArea.getText();`
    *   `messageArea.append("New line of text\n");` // Append text

### `JButton`

For user actions.

```java
JButton submitButton = new JButton("Submit");
submitButton.addActionListener(e -> JOptionPane.showMessageDialog(this, "Submitted!")); // Lambda for brevity
```

### `JCheckBox` and `JRadioButton`

For selection options.

*   **`JCheckBox`:**
    *   `JCheckBox boldCheckBox = new JCheckBox("Bold");`
    *   `boolean isSelected = boldCheckBox.isSelected();`
*   **`JRadioButton`:** Must be in a `ButtonGroup`.
    *   `JRadioButton maleRadio = new JRadioButton("Male");`
    *   `JRadioButton femaleRadio = new JRadioButton("Female");`
    *   `ButtonGroup genderGroup = new ButtonGroup();`
    *   `genderGroup.add(maleRadio); genderGroup.add(femaleRadio);`
    *   `boolean isSelected = maleRadio.isSelected();`

### `JComboBox`

Dropdown list.

```java
String[] items = {"Apple", "Banana", "Cherry"};
JComboBox fruitCombo = new JComboBox(items);
// To allow editing of the combo box
// fruitCombo.setEditable(true);

// To get the selected item
String selectedFruit = (String) fruitCombo.getSelectedItem();
fruitCombo.addActionListener(e -> {
    String selected = (String) fruitCombo.getSelectedItem();
    System.out.println("Selected: " + selected);
});
```

### `JList`

List of items.

```java
String[] colors = {"Red", "Green", "Blue"};
JList colorList = new JList(colors);
colorList.setSelectionMode(ListSelectionModel.SINGLE_SELECTION); // Allow only single selection

// To get selected items (if multiple selection is allowed)
// Object[] selectedItems = colorList.getSelectedValues();
```

### `JScrollPane`

For scrollable content.

```java
JTextArea textArea = new JTextArea(10, 30);
JScrollPane scrollPane = new JScrollPane(textArea, JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED, JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
// Add scrollPane to your container
```

### `JTabbedPane`

Organizing content into tabs.

```java
JTabbedPane tabbedPane = new JTabbedPane();
JPanel panel1 = new JPanel();
panel1.add(new JLabel("Content for Tab 1"));
JPanel panel2 = new JPanel();
panel2.add(new JLabel("Content for Tab 2"));

tabbedPane.addTab("Tab One", panel1);
tabbedPane.addTab("Tab Two", panel2);

// Add tabbedPane to your frame
```

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Comprehensive coverage of each component with examples.
*   **Introduction to Java Programming (Liang):** Practical examples of using various controls.
*   **Java in A Nutshell (Flanagan):** Provides concise API-level details for many Swing components.

**Course Outcome Alignment:**

*   **CO4:** Directly addresses identifying and utilizing various Swing controls and components.

## Pluggable Look and Feel (L&F)

Swing's ability to change its appearance to match the native operating system or adopt a custom look is a significant advantage.

**Key Concepts:**

*   **`UIManager`:** A class that manages the look and feel of Swing components.
*   **`LookAndFeelInfo`:** Represents information about a look and feel.

**How to Change Look and Feel:**

You typically set the look and feel early in your application's startup, usually before creating any visible Swing components.

1.  **Get the available Look and Feels:** You can query the system for installed L&Fs.
2.  **Set the desired Look and Feel:** Use `UIManager.setLookAndFeel()`.

**Example:**

```java
import javax.swing.*;
import java.awt.*;

public class PluggableLookAndFeelDemo extends JFrame {

    public PluggableLookAndFeelDemo() {
        setTitle("Pluggable Look and Feel");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 300);
        setLocationRelativeTo(null);

        // Set the system's default look and feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            // Other Look and Feels to try:
            // UIManager.setLookAndFeel("javax.swing.plaf.metal.MetalLookAndFeel"); // Metal (Java's default)
            // UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel"); // Windows
            // UIManager.setLookAndFeel("com.sun.java.swing.plaf.mac.MacLookAndFeel"); // macOS (if available)
            SwingUtilities.updateComponentTreeUI(this); // Update all components with the new L&F
        } catch (UnsupportedLookAndFeelException | ClassNotFoundException | InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
            // Fallback to default if setting fails
            try {
                UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());
                SwingUtilities.updateComponentTreeUI(this);
            } catch (UnsupportedLookAndFeelException | ClassNotFoundException | InstantiationException | IllegalAccessException ex) {
                ex.printStackTrace();
            }
        }

        JPanel panel = new JPanel();
        panel.add(new JLabel("This text and button adapt to the Look and Feel."));
        panel.add(new JButton("Click Me"));
        getContentPane().add(panel);

        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new PluggableLookAndFeelDemo();
            }
        });
    }
}
```

**Common Look and Feel Class Names:**

*   `javax.swing.plaf.metal.MetalLookAndFeel` (default, cross-platform)
*   `com.sun.java.swing.plaf.windows.WindowsLookAndFeel` (Windows L&F)
*   `com.sun.java.swing.plaf.mac.MacLookAndFeel` (macOS L&F)
*   `com.sun.java.swing.plaf.motif.MotifLookAndFeel` (Motif L&F - older)

**Important Point to Remember:** Call `SwingUtilities.updateComponentTreeUI(this)` after changing the look and feel to ensure all existing components are repainted with the new appearance.

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Chapter 13 discusses L&F and provides examples of switching between them.
*   **Java: The Complete Reference (Schildt):** Likely covers `UIManager` and L&F customization.

**Course Outcome Alignment:**

*   **CO4:** While not directly about component *identification*, it's about *utilizing* components effectively within different visual styles.

## Practice Questions and Exercises

**Short Answer Questions:**

1.  What is the primary advantage of using Swing over AWT? (CO4)
2.  Which package contains the core Swing components? (CO4)
3.  What is the purpose of `JFrame` in a Swing application? (CO4)
4.  Explain the role of a `LayoutManager` in Swing. (CO4)
5.  What is the Event Dispatch Thread (EDT) and why is it important in Swing? (CO2, CO4)
6.  How do you add an `ActionListener` to a `JButton`? (CO4)
7.  What is the difference between `JTextField` and `JTextArea`? (CO4)
8.  How can you group `JRadioButton` components so that only one can be selected at a time? (CO4)
9.  What is the function of `JScrollPane`? (CO4)
10. How can you change the visual appearance of a Swing application to match the operating system? (CO4)

**Programming Exercises:**

1.  **Create a simple Swing window:** Write a Java program that creates a `JFrame` with the title "My First Swing App", sets its size to 400x300, and makes it visible. Ensure it closes properly when the close button is clicked. (CO4)
2.  **Add components to a JFrame:** Modify the previous program to add a `JLabel` with the text "Welcome to Swing!" and a `JButton` with the text "Click Me". Use `FlowLayout` for arrangement. (CO4)
3.  **Handle button clicks:** Make the "Click Me" button in the previous exercise functional. When clicked, it should display a `JOptionPane` with the message "Button Clicked!". (CO4)
4.  **Build a simple form:** Create a Swing application with a `JLabel` for "Username:", a `JTextField` for input, a `JLabel` for "Password:", and a `JTextField` (use `JPasswordField` for better security, but `JTextField` is okay for practice) for password input. Add a "Login" `JButton`. Use `BorderLayout` and `FlowLayout` (perhaps with panels) to arrange these components. (CO4)
5.  **Create a tabbed interface:** Develop a Swing application with a `JTabbedPane`. Add two tabs: one with a `JLabel` and another with a `JTextArea` wrapped in a `JScrollPane`. (CO4)
6.  **Demonstrate Checkboxes and Radio Buttons:** Create a Swing application that displays a `JCheckBox` for "Bold" and two `JRadioButton`s within a `ButtonGroup` for "Male" and "Female". Display a message when the state of the checkbox changes or when a radio button is selected. (CO4)

---

### Answers to Short Answer Questions:

1.  **Advantage of Swing over AWT:** Swing components are "lightweight" (written entirely in Java) and offer greater flexibility, customizability (pluggable look and feel), and a richer set of components compared to AWT's "heavyweight" components that rely on native OS peers.
2.  **Core Swing Package:** `javax.swing`
3.  **Purpose of JFrame:** `JFrame` is the top-level window container in Swing applications. It provides the basic window structure with a title bar, borders, and a content pane to hold other components.
4.  **Role of LayoutManager:** A `LayoutManager` controls the size and position of components within a container, ensuring they are displayed correctly across different window sizes and resolutions.
5.  **Event Dispatch Thread (EDT):** The EDT is a single, dedicated thread responsible for all GUI updates and event processing in Swing. It's important because Swing components are not thread-safe, and performing GUI operations on other threads can lead to race conditions, visual glitches, or exceptions. `SwingUtilities.invokeLater()` is used to ensure code runs on the EDT.
6.  **Adding ActionListener to JButton:** Use the `addActionListener()` method: `button.addActionListener(yourActionListener);` where `yourActionListener` is an object that implements the `ActionListener` interface.
7.  **JTextField vs. JTextArea:** `JTextField` is for single-line text input, while `JTextArea` is for multi-line text input and typically requires a `JScrollPane` for scrolling.
8.  **Grouping JRadioButtons:** Use a `ButtonGroup` object. Add all related `JRadioButton` instances to the `ButtonGroup`.
9.  **Function of JScrollPane:** `JScrollPane` provides scroll bars (vertical and/or horizontal) to a component (like `JTextArea` or `JList`) when its content exceeds the visible viewport.
10. **Changing Visual Appearance:** Use `UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());` or specific L&F class names, followed by `SwingUtilities.updateComponentTreeUI(yourFrame);`.

---

## Summary and Key Takeaways

*   Swing is Java's rich, platform-independent GUI toolkit.
*   Core components are in `javax.swing`, while `java.awt` provides foundational classes.
*   `JFrame` is the main window.
*   Components (like `JButton`, `JLabel`) are added to containers (`JPanel`, `JFrame`).
*   `LayoutManagers` control component arrangement.
*   Event handling is crucial for user interaction, using listeners and event objects.
*   Always use `SwingUtilities.invokeLater()` for GUI operations.
*   Pluggable Look and Feel allows customization of the application's appearance.

This module provides the foundational knowledge for building interactive graphical user interfaces in Java using the Swing framework, directly addressing **CO4**. The concepts of event handling and component interaction also reinforce **CO2** and **CO3** through practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
