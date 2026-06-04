---
title: "Swings fundamentals - Swing Key Features"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Advanced features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6a9"
status: "completed"
scrapedAt: "2026-05-23T17:51:53.580Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 4: Advanced Features of Java

### Topic: Swing Fundamentals - Swing Key Features

**Learning Outcomes:**

*   Understand the fundamental concepts of Swing GUI development.
*   Identify and describe the key features that make Swing a powerful toolkit for building graphical user interfaces.
*   Differentiate Swing from Abstract Window Toolkit (AWT).
*   Recognize the importance of platform independence and look and feel customization in Swing.
*   Appreciate the event handling model in Swing.

---

### 1. Introduction to Swing

Swing is a powerful and flexible GUI toolkit for Java. It provides a rich set of components and features for creating sophisticated graphical user interfaces. Unlike AWT (Abstract Window Toolkit), which relies on native operating system components, Swing components are written entirely in Java, offering greater platform independence and customization.

**Key Concept:** **GUI (Graphical User Interface)** - A visual way of interacting with a computer, using windows, icons, menus, and a pointer.

**Key Concept:** **Toolkit** - A collection of pre-written code or components that can be used to build software applications.

**Reference:**
*   **Java: The Complete Reference by Herbert Schildt:** Chapter on Swing thoroughly explains the evolution from AWT to Swing and its advantages. (Schildt, 8/e, 2011)
*   **Java How to Program by Deitel & Deitel:** Provides a comprehensive overview of GUI programming with Swing, starting from basic concepts. (Deitel & Deitel, 11th Edition, 2018)

---

### 2. Swing vs. AWT

While AWT was Java's initial GUI toolkit, Swing was developed to overcome its limitations.

| Feature              | AWT                                      | Swing                                          |
| :------------------- | :--------------------------------------- | :--------------------------------------------- |
| **Component Implementation** | Uses native, peer-based components (dependent on OS) | Uses lightweight, pure Java components (independent of OS) |
| **Platform Dependency** | Platform-dependent (look and feel varies) | Platform-independent (consistent look and feel) |
| **Performance**      | Generally faster for simple UIs due to native components | Can be slightly slower for very simple UIs, but offers more flexibility and features |
| **Components**       | Limited set of basic components          | Rich set of advanced components (tables, trees, tabbed panes, etc.) |
| **Extensibility**    | Difficult to extend or customize         | Highly extensible and customizable             |
| **Pluggability**     | Not pluggable                            | Pluggable Look and Feel                        |
| **Event Handling**   | Older event model                        | More robust and flexible event handling model  |

**Key Concept:** **Peer Components (AWT)** - GUI components that are implemented using the native GUI elements of the underlying operating system. This leads to platform-dependent behavior and appearance.

**Key Concept:** **Lightweight Components (Swing)** - GUI components that are implemented entirely in Java. They are drawn by Java code, not by the operating system's native GUI. This ensures platform independence and allows for greater customization.

**Example (Conceptual):** Imagine building a button. In AWT, Java tells the operating system to draw a button using its native button style. In Swing, Java itself draws the button with its own graphics, allowing you to control its appearance precisely.

**Course Outcome Alignment:** CO4 (Identify and utilize various Swing controls, components, and containers. Knowledge Level: K3) - Understanding the distinction helps in choosing the appropriate toolkit and appreciating Swing's advantages.

---

### 3. Key Features of Swing

Swing offers a plethora of features that make it a superior choice for modern Java GUI development.

#### 3.1. Pluggable Look and Feel (PLAF)

This is one of Swing's most significant advantages. PLAF allows you to change the appearance and behavior of Swing components at runtime without recompiling your application. This means your application can adopt the native look and feel of the operating system it's running on, or you can create custom looks.

**How it works:** Swing uses a `LookAndFeel` class to define how components are rendered. You can select from various `LookAndFeel` implementations.

**Common Look and Feels:**

*   **Metal:** Swing's default, cross-platform look and feel.
*   **Nimbus:** A more modern and customizable look and feel introduced in Java SE 6.
*   **System Default:** Adapts to the native look and feel of the operating system (e.g., Windows, macOS, GTK+).

**Key Concept:** **Pluggable Look and Feel (PLAF)** - A design pattern that allows the appearance and behavior of GUI components to be changed at runtime by "plugging in" different Look and Feel implementations.

**Example Code Snippet (Conceptual):**

```java
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

public class LookAndFeelDemo {
    public static void main(String[] args) {
        try {
            // Set to Nimbus Look and Feel
            UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
            // Or for system default:
            // UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (UnsupportedLookAndFeelException | ClassNotFoundException | InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
        }

        // Now create your Swing components, and they will use the new Look and Feel
        // JFrame frame = new JFrame("My App");
        // ... create buttons, labels etc.
    }
}
```

**Reference:**
*   **Core Java: An Integrated Approach by Nageswararao R.:** Discusses PLAF extensively, providing examples of switching look and feels. (Nageswararao R., 2008)
*   **Java in A Nutshell by Flanagan D:** Covers PLAF as a core feature for customizing Swing applications. (Flanagan D., 5/e, 2005.)

**Important Point to Remember:** You typically set the `LookAndFeel` before creating any Swing components.

**Course Outcome Alignment:** CO4 (Identify and utilize various Swing controls, components, and containers. Knowledge Level: K3) - Understanding PLAF is crucial for creating user-friendly and visually appealing applications.

#### 3.2. Rich Set of Components

Swing provides a much richer and more extensive set of components compared to AWT. These components are highly customizable and offer advanced features.

**Categories of Swing Components:**

*   **Top-Level Containers:** `JFrame` (window), `JDialog` (dialog box), `JApplet` (applet).
*   **Intermediate Containers:** `JPanel` (general-purpose container), `JScrollPane` (scrollable view), `JTabbedPane` (tabbed interface), `JSplitPane` (divides two components).
*   **Atomic Components (Widgets):** `JButton`, `JLabel`, `JTextField`, `JTextArea`, `JCheckBox`, `JRadioButton`, `JComboBox`, `JList`, `JTable`, `JTree`, `JSlider`, `JProgressBar`, `JMenuBar`, `JMenuItem`, `JPopupMenu`, etc.

**Key Concept:** **Container** - A component that can hold other components. Top-level containers are windows, while intermediate containers are used to group and organize components within windows.

**Example:** A `JTable` component allows you to display data in a tabular format, which is not directly available in AWT.

**Reference:**
*   **Java: The Complete Reference by Herbert Schildt:** Dedicates significant sections to each Swing component, detailing their properties and methods. (Schildt, 8/e, 2011.)
*   **Java How to Program by Deitel & Deitel:** Provides numerous examples of using various Swing components to build practical GUIs. (Deitel & Deitel, 11th Edition, 2018)

**Course Outcome Alignment:** CO4 (Identify and utilize various Swing controls, components, and containers. Knowledge Level: K3) - This is the core of Swing's functionality.

#### 3.3. Event Handling Model

Swing uses the Java Beans event delegation model, which is a robust and flexible mechanism for handling user interactions and other events.

**Key Concepts:**

*   **Event:** An action or occurrence that signals something has happened (e.g., a button click, key press, mouse movement).
*   **Event Source:** The component that generates an event.
*   **Event Listener:** An object that "listens" for specific types of events from an event source.
*   **Event Handler Method:** A method within the listener that is called when a specific event occurs.

**How it works:**
1.  An event source (e.g., `JButton`) generates an event (e.g., `ActionEvent`).
2.  The event is delivered to registered event listeners.
3.  The appropriate event handler method (e.g., `actionPerformed`) in the listener is invoked.

**Example (Conceptual):**

```java
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonClickDemo extends JFrame {

    private JButton myButton;

    public ButtonClickDemo() {
        setTitle("Button Click Demo");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new java.awt.FlowLayout()); // Simple layout manager

        myButton = new JButton("Click Me");

        // Registering the ActionListener
        myButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // This is the event handler method
                System.out.println("Button was clicked!");
                JOptionPane.showMessageDialog(ButtonClickDemo.this, "You clicked the button!");
            }
        });

        add(myButton);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new ButtonClickDemo();
            }
        });
    }
}
```

**Reference:**
*   **Fundamentals of Software Engineering by Rajib Mall:** While not focused on Swing specifically, it covers event-driven programming concepts applicable to GUI development. (Mall, 4th edition, 2014.)
*   **Head First Java by Sierra K.:** Explains event handling in an intuitive and memorable way. (Sierra K., 2/e, 2005.)

**Important Point to Remember:** Always use `SwingUtilities.invokeLater()` or `SwingUtilities.invokeAndWait()` to create and update Swing components to ensure thread safety.

**Course Outcome Alignment:** CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. Knowledge Level: K3) and CO4 (Identify and utilize various Swing controls, components, and containers. Knowledge Level: K3) - Understanding event handling is crucial for making GUIs interactive.

#### 3.4. Lightweight and Model-Driven Architecture

Swing components are lightweight, meaning they are painted directly by Java code. This allows for greater control over their appearance and behavior. Swing also follows a model-driven architecture, where the data (model) is separated from the presentation (view). This separation makes components more reusable and easier to manage.

**Key Concept:** **Model-View-Controller (MVC) Pattern (implied in Swing)** - Although not strictly enforced for all components, Swing's architecture often follows MVC principles. The "model" holds the data, the "view" displays the data, and the "controller" handles user input and updates the model and view. For example, `JTable` has a `TableModel`.

**Example:** In a `JTable`, the `TableModel` contains the actual data. The `JTable` component (the view) renders this data. When the user interacts with the table (e.g., editing a cell), the `TableModel` is updated.

**Reference:**
*   **Object Oriented Systems Development using the Unified Modeling Language by Ali Bahrami:** Discusses architectural patterns that influence Swing's design. (Bahrami, 2017)
*   **Object Oriented Design with UML and Java by Barclay K.J. Savage:** Explores how design patterns are applied in Java, including those relevant to GUI frameworks. (Barclay K.J. Savage, 2004)

**Course Outcome Alignment:** CO1 (Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams. Knowledge Level: K2) - Understanding MVC relates to object-oriented design principles.

#### 3.5. Thread Safety

Swing is *not* inherently thread-safe. This means that all Swing component updates and event handling should be performed on the Event Dispatch Thread (EDT).

**Key Concept:** **Event Dispatch Thread (EDT)** - A special thread in Swing responsible for all event handling and GUI updates.

**Why is this important?** If you update Swing components from a different thread (e.g., a background thread performing a long computation), you can encounter unpredictable behavior, rendering issues, or crashes.

**How to ensure thread safety:**
*   Use `SwingUtilities.invokeLater(Runnable)`: Queues a `Runnable` task to be executed on the EDT.
*   Use `SwingUtilities.invokeAndWait(Runnable)`: Blocks the current thread until the `Runnable` task has finished executing on the EDT. Use this when you need to perform a GUI update and wait for its completion before proceeding.

**Example:**

```java
// Performing a GUI update from a background thread:
new Thread(new Runnable() {
    public void run() {
        // Incorrect way: direct update
        // myLabel.setText("Updating from background thread...");

        // Correct way: using invokeLater
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                myLabel.setText("Updated safely from background thread!");
            }
        });
    }
}).start();
```

**Reference:**
*   **Java: The Complete Reference by Herbert Schildt:** Covers Swing thread safety and the importance of the EDT. (Schildt, 8/e, 2011.)
*   **Java How to Program by Deitel & Deitel:** Emphasizes the EDT and proper thread management in Swing applications. (Deitel & Deitel, 11th Edition, 2018)

**Important Point to Remember:** **Always perform GUI operations on the Event Dispatch Thread (EDT) using `SwingUtilities.invokeLater()` or `SwingUtilities.invokeAndWait()`.**

**Course Outcome Alignment:** CO3 (Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files. Knowledge Level: K3) - Thread safety is a key aspect of writing robust applications.

---

### 4. Swing Event Handling Hierarchy

Swing's event handling is based on the Java Collections Framework and the Java Beans event model.

*   **Event Objects:** Represent the event that occurred (e.g., `ActionEvent`, `MouseEvent`, `KeyEvent`).
*   **Event Listeners:** Interfaces that define methods to handle specific event types (e.g., `ActionListener`, `MouseListener`, `KeyListener`).
*   **Event Adapters:** Abstract classes that provide default implementations for all methods of an event listener interface. This is useful when you only want to handle a subset of events.

**Example:** Instead of implementing the entire `MouseListener` interface for just handling a `mouseClicked` event, you can extend `MouseAdapter` and override only `mouseClicked()`.

**Reference:**
*   **Programming JAVA a Primer by Balagurusamy E:** Provides foundational knowledge of event handling in Java. (Balagurusamy E, 5/e, 2014.)

**Course Outcome Alignment:** CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. Knowledge Level: K3) - Understanding event delegation is crucial for object-oriented event handling.

---

### 5. Important Points to Remember (Summary)

*   **Swing is Pure Java:** Components are lightweight and platform-independent.
*   **Pluggable Look and Feel (PLAF):** Allows for customization of component appearance.
*   **Rich Component Set:** Offers a wide variety of advanced UI elements.
*   **Event Delegation Model:** Robust mechanism for handling user interactions.
*   **Thread Safety:** Swing is not thread-safe; all GUI updates must occur on the Event Dispatch Thread (EDT) using `SwingUtilities.invokeLater()`.
*   **MVC Pattern:** Underlying architectural principle for separation of concerns.

---

### 6. Practice Questions

1.  **What are the primary advantages of using Swing over AWT?**
    *   **Answer:** Swing components are lightweight and platform-independent, leading to a consistent look and feel across different operating systems. Swing also offers a richer set of components and a more flexible event handling model.

2.  **Explain the concept of Pluggable Look and Feel (PLAF) in Swing. How can you change the look and feel of a Swing application?**
    *   **Answer:** PLAF allows you to change the appearance and behavior of Swing components at runtime by plugging in different Look and Feel implementations. You can change it using `UIManager.setLookAndFeel("ClassNameOfLookAndFeel");` before creating any Swing components.

3.  **Why is it crucial to perform all Swing GUI updates on the Event Dispatch Thread (EDT)? What Java construct should be used to achieve this?**
    *   **Answer:** Swing is not thread-safe. Performing GUI updates on the EDT ensures that all UI modifications happen in a controlled and predictable manner, preventing rendering issues and crashes. `SwingUtilities.invokeLater(Runnable)` is the primary construct used for this.

4.  **Differentiate between a peer component (AWT) and a lightweight component (Swing).**
    *   **Answer:** Peer components are native OS components, making AWT platform-dependent. Lightweight components are pure Java, drawn by Java code, making Swing platform-independent and more customizable.

5.  **Identify three distinct categories of Swing components and provide one example for each category.**
    *   **Answer:**
        *   **Top-Level Containers:** `JFrame` (e.g., a main application window)
        *   **Intermediate Containers:** `JPanel` (e.g., to group related buttons)
        *   **Atomic Components (Widgets):** `JButton` (e.g., a button to trigger an action)

---

This concludes the fundamental features of Swing. Understanding these key aspects will form a strong foundation for building graphical user interfaces in Java.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
