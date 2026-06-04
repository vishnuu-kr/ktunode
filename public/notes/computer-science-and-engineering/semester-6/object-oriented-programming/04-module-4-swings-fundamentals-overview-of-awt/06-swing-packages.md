---
title: "Swing Packages"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Swings fundamentals  – Overview of AWT"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfc6"
status: "completed"
scrapedAt: "2026-05-20T16:56:33.112Z"
---
# Object-Oriented Programming: Swing Fundamentals - Overview of AWT

## Module 4: Swing Fundamentals

### Topic: Swing Packages

---

This module introduces you to Swing, a powerful and flexible GUI toolkit for Java. We'll begin by understanding its relationship with AWT (Abstract Window Toolkit) and delve into the fundamental Swing packages.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the relationship between AWT and Swing.**
*   **Identify the purpose and key classes within the `javax.swing` package.**
*   **Describe the role of Look and Feel (L&F) in Swing applications.**
*   **Recognize and utilize core Swing components from the `javax.swing.border` and `javax.swing.event` packages.**
*   **Differentiate between heavyweight and lightweight components.**
*   **Explain the Swing threading model (Event Dispatch Thread).**

---

### 1. Understanding the Relationship Between AWT and Swing

#### Key Concepts:

*   **AWT (Abstract Window Toolkit):**
    *   The original Java GUI toolkit.
    *   Relies on the underlying operating system's native GUI components.
    *   **Pros:** Native look and feel, often better performance for some operations.
    *   **Cons:** Limited component set, inconsistent look and feel across different platforms, platform-dependent behavior, and security issues with applets.
*   **Swing:**
    *   A more advanced, platform-independent GUI toolkit.
    *   Written entirely in Java, meaning it draws its own components (lightweight components).
    *   Built *on top of* AWT. Swing components use AWT components as their "peer" when needed, but they are primarily Java-based.
    *   **Pros:** Richer set of components, customizable look and feel, platform independence, better extensibility.
    *   **Cons:** Can sometimes be perceived as slightly slower for simple UIs due to drawing everything in Java.

#### Analogy:

Think of AWT as the basic building blocks provided by your house's foundation and walls (the operating system). Swing is like adding custom furniture, paint, and decorations to your house; it's built *within* the existing structure but offers much more flexibility and control.

#### Key Takeaway:

Swing is a layer of abstraction over AWT. While Swing components are generally Java-based, they still leverage some AWT functionalities.

---

### 2. The `javax.swing` Package: The Heart of Swing

#### Purpose:

The `javax.swing` package is the core package for Swing development. It contains the vast majority of Swing components, event handling classes, and utility classes.

#### Key Classes:

*   **`JComponent`:**
    *   The **base class for all Swing components** (except top-level windows like `JFrame`, `JDialog`, etc.).
    *   Provides fundamental features like painting, event handling, tooltips, focus management, and custom rendering.
    *   **Example:** All buttons, labels, text fields, etc., inherit from `JComponent`.
*   **Top-Level Containers:**
    *   **`JFrame`:** The main window of an application. It has a title bar, borders, and can be resized.
    *   **`JDialog`:** A secondary window, typically used for dialog boxes (e.g., for user input, messages, or confirmations).
    *   **`JApplet`:** Used for creating applets that run within a web browser (less common now).
*   **General Purpose Components:**
    *   **`JLabel`:** Displays text or an image.
    *   **`JButton`:** A clickable button.
    *   **`JTextField`:** A single-line text input field.
    *   **`JTextArea`:** A multi-line text input area.
    *   **`JPasswordField`:** Similar to `JTextField` but masks the input characters.
    *   **`JCheckBox`:** A checkbox that can be selected or deselected.
    *   **`JRadioButton`:** A radio button, typically used in groups where only one can be selected.
    *   **`JComboBox`:** A drop-down list.
    *   **`JList`:** Displays a list of items.
    *   **`JScrollPane`:** Provides scrolling capabilities for other components (e.g., a large `JTextArea` or `JList`).
    *   **`JPanel`:** A general-purpose container used for grouping other components and managing layout.
    *   **`JMenuBar`, `JMenu`, `JMenuItem`:** For creating menu bars, menus, and menu items.
    *   **`JToolBar`:** For creating toolbars.
    *   **`JFileChooser`:** For allowing users to select files or directories.
    *   **`JColorChooser`:** For allowing users to select a color.
    *   **`JSlider`:** For selecting a numerical value from a range.
    *   **`JTabbedPane`:** For managing multiple panels organized in tabs.
    *   **`JTable`:** For displaying data in a tabular format.
    *   **`JTree`:** For displaying hierarchical data.

#### Example: Creating a Simple Window

```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingUtilities; // Important for thread safety

public class SimpleSwingApp {

    public static void main(String[] args) {
        // Swing code should be run on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                createAndShowGUI();
            }
        });
    }

    private static void createAndShowGUI() {
        // 1. Create the top-level container
        JFrame frame = new JFrame("My First Swing App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Close operation

        // 2. Create a panel to hold components
        JPanel panel = new JPanel();

        // 3. Add a label to the panel
        JLabel label = new JLabel("Hello, Swing!");
        panel.add(label);

        // 4. Add the panel to the frame's content pane
        frame.getContentPane().add(panel);

        // 5. Set the frame size and make it visible
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}
```

---

### 3. The Role of Look and Feel (L&F) in Swing Applications

#### Key Concepts:

*   **Look:** The visual appearance of the components (e.g., the shape of buttons, the font used).
*   **Feel:** The behavior of the components (e.g., how a button reacts to a mouse click, how scrolling works).
*   **Pluggable Look and Feel (PLAF):** Swing's ability to change the appearance and behavior of its components dynamically without recompiling the application. This allows Swing applications to:
    *   **Match the native look and feel** of the operating system (Windows, macOS, Linux).
    *   **Provide a custom look and feel**, giving applications a unique branding.
    *   **Switch between different themes** during runtime.

#### How it Works:

Swing components are painted by special classes called "UI Delegates" or "Pluggable Look and Feel classes." When you create a Swing application, Swing automatically selects a default Look and Feel based on the operating system. You can also explicitly set a different Look and Feel.

#### Common Look and Feels:

*   **`com.sun.java.swing.plaf.windows.WindowsLookAndFeel`:** Mimics the Windows look and feel.
*   **`com.sun.java.swing.plaf.mac.MacLookAndFeel`:** Mimics the macOS look and feel.
*   **`javax.swing.plaf.metal.MetalLookAndFeel`:** The default Java Look and Feel, known for its customization capabilities.
*   **`com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel`:** A more modern and aesthetically pleasing Look and Feel introduced in Java SE 6.

#### Example: Setting the Nimbus Look and Feel

```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;
import javax.swing.UIManager; // For Look and Feel management
import javax.swing.UnsupportedLookAndFeelException; // For exceptions

public class NimbusLookAndFeelApp {

    public static void main(String[] args) {
        // Set the Look and Feel before creating any Swing components
        try {
            UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
        } catch (Exception e) {
            e.printStackTrace(); // Handle potential errors
        }

        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                createAndShowGUI();
            }
        });
    }

    private static void createAndShowGUI() {
        JFrame frame = new JFrame("Nimbus Look and Feel");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        JLabel label = new JLabel("This window uses Nimbus L&F!");
        panel.add(label);

        frame.getContentPane().add(panel);
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}
```

#### Important Point to Remember:

Always try to set the Look and Feel **before** creating any Swing components. The `UIManager.setLookAndFeel()` method should be called early in your `main` method.

---

### 4. Core Swing Components from `javax.swing.border` and `javax.swing.event`

#### 4.1. The `javax.swing.border` Package: Enhancing Component Appearance

#### Purpose:

This package provides classes for creating borders around Swing components, which can be used for decoration, visual grouping, or indicating the component's purpose.

#### Key Classes:

*   **`Border` (Interface):** The fundamental interface for all border types.
*   **`EmptyBorder`:** Creates a border with no visual representation, useful for adding padding or spacing.
*   **`LineBorder`:** Creates a solid line border of a specified color and thickness.
*   **`BevelBorder`:** Creates a border that simulates a 3D bevel effect (raised or lowered).
*   **`EtchedBorder`:** Creates a border that looks etched into the surface.
*   **`TitledBorder`:** Adds a title to an existing border.

#### Example: Adding Borders to a Panel

```java
import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;
import javax.swing.border.Border;
import javax.swing.border.TitledBorder;

public class BorderExampleApp {

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                createAndShowGUI();
            }
        });
    }

    private static void createAndShowGUI() {
        JFrame frame = new JFrame("Border Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new java.awt.FlowLayout()); // Simple layout

        // Create different borders
        Border lineBorder = BorderFactory.createLineBorder(java.awt.Color.BLUE, 2);
        Border emptyBorder = BorderFactory.createEmptyBorder(10, 10, 10, 10); // Top, left, bottom, right padding
        Border bevelBorder = BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, java.awt.Color.LIGHT_GRAY, java.awt.Color.DARK_GRAY);
        Border titledBorder = BorderFactory.createTitledBorder(BorderFactory.createLineBorder(java.awt.Color.RED), "My Section");

        // Create panels with borders
        JPanel panel1 = new JPanel();
        panel1.add(new JLabel("Panel 1"));
        panel1.setBorder(lineBorder);

        JPanel panel2 = new JPanel();
        panel2.add(new JLabel("Panel 2"));
        panel2.setBorder(emptyBorder);

        JPanel panel3 = new JPanel();
        panel3.add(new JLabel("Panel 3"));
        panel3.setBorder(bevelBorder);

        JPanel panel4 = new JPanel();
        panel4.add(new JLabel("Panel 4"));
        panel4.setBorder(titledBorder);

        // Add panels to the main panel
        mainPanel.add(panel1);
        mainPanel.add(panel2);
        mainPanel.add(panel3);
        mainPanel.add(panel4);


        frame.getContentPane().add(mainPanel);
        frame.setSize(400, 300);
        frame.setVisible(true);
    }
}
```

#### 4.2. The `javax.swing.event` Package: Handling User Interactions

#### Purpose:

This package provides the classes for handling events that occur in Swing applications. Swing uses a delegation event model, which is a robust way to manage user interactions and component state changes.

#### Key Concepts:

*   **Event:** An object that describes an event that has occurred (e.g., a button click, mouse movement, key press).
*   **Event Listener:** An object that is registered with a source to receive notifications of specific event types.
*   **Event Source:** A component that generates events.
*   **Event Object:** Contains information about the event (e.g., which component triggered it, mouse coordinates, key code).

#### Common Event Listener Interfaces and Event Classes:

*   **`ActionListener` / `ActionEvent`:** For actions like button clicks or menu item selections.
*   **`MouseListener` / `MouseEvent`:** For mouse events (press, release, enter, exit, click).
*   **`MouseMotionListener` / `MouseEvent`:** For mouse movement events (move, drag).
*   **`KeyListener` / `KeyEvent`:** For keyboard events (press, release, type).
*   **`WindowListener` / `WindowEvent`:** For window events (open, close, iconify, etc.).
*   **`FocusListener` / `FocusEvent`:** For focus gaining and losing events.

#### Example: Adding an ActionListener to a Button

```java
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonClickListenerApp {

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                createAndShowGUI();
            }
        });
    }

    private static void createAndShowGUI() {
        JFrame frame = new JFrame("Button Click Listener");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();

        JButton button = new JButton("Click Me!");
        JLabel messageLabel = new JLabel("Waiting for click...");

        // Add an ActionListener to the button
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                messageLabel.setText("Button was clicked!");
            }
        });

        panel.add(button);
        panel.add(messageLabel);

        frame.getContentPane().add(panel);
        frame.setSize(300, 150);
        frame.setVisible(true);
    }
}
```

---

### 5. Differentiating Between Heavyweight and Lightweight Components

#### Key Concepts:

*   **Heavyweight Components (AWT Components):**
    *   Directly mapped to operating system-native GUI elements.
    *   Each heavyweight component has a corresponding "peer" object in the native GUI toolkit.
    *   **Pros:** Native look and feel, potentially better performance for certain graphics-intensive tasks as the OS handles rendering.
    *   **Cons:** Platform-dependent behavior, limited customization, security issues in applets (because they interact directly with the OS).
    *   **Examples:** `java.awt.Button`, `java.awt.TextField`, `java.awt.Frame`.
*   **Lightweight Components (Swing Components):**
    *   Implemented entirely in Java.
    *   Do not rely on native GUI elements. They are painted directly onto their parent container.
    *   **Pros:** Platform-independent, highly customizable (look and feel), richer set of components, better event handling.
    *   **Cons:** Can sometimes be slightly slower for simple UIs as all rendering is done by Java.
    *   **Examples:** `javax.swing.JButton`, `javax.swing.JTextField`, `javax.swing.JFrame`.

#### Relationship:

Swing components are built on top of AWT. While Swing components are lightweight, they *do* require a heavyweight component (like `JFrame`) as their top-level container. The lightweight Swing components are then painted onto the canvas of this top-level container.

#### Important Point:

You'll primarily be working with lightweight Swing components. The distinction is important for understanding how Swing achieves its platform independence and customizability.

---

### 6. The Swing Threading Model: Event Dispatch Thread (EDT)

#### Key Concepts:

*   **Concurrency:** Modern applications often perform multiple tasks simultaneously.
*   **Threading:** A thread is a sequence of execution within a program.
*   **Event Dispatch Thread (EDT):** A special thread managed by Swing that is responsible for **processing all Swing events and painting Swing components.**
*   **Thread Safety:** Ensuring that shared data is accessed and modified in a way that prevents corruption, especially when multiple threads are involved.

#### Why is the EDT Important?

*   **GUI Updates Must Happen on the EDT:** Because Swing components are painted and events are processed by the EDT, any code that modifies Swing components (e.g., changing text, updating a button's state, adding a component) **must be executed on the EDT.**
*   **Preventing Concurrency Issues:** If you update Swing components from a different thread (like the `main` thread or a background worker thread), you can introduce race conditions and unpredictable behavior, leading to crashes or visual glitches.

#### How to Run Code on the EDT:

The recommended way to ensure your GUI code runs on the EDT is to use `SwingUtilities.invokeLater()` or `SwingUtilities.invokeAndWait()`.

*   **`SwingUtilities.invokeLater(Runnable doRun)`:**
    *   Adds a `Runnable` object to the event queue of the EDT.
    *   The `Runnable` will be executed on the EDT **asynchronously** (meaning your current thread continues immediately).
    *   This is the most common and preferred method for starting a Swing application.

*   **`SwingUtilities.invokeAndWait(Runnable doRun)`:**
    *   Adds a `Runnable` object to the event queue of the EDT.
    *   The current thread **blocks** until the `Runnable` has finished executing on the EDT.
    *   Use this when you need to ensure a task is completed on the EDT before your current thread proceeds. Be cautious not to call this from the EDT itself, as it will cause a deadlock.

#### Example: Using `invokeLater` for GUI Creation

The previous examples already demonstrate the correct usage of `SwingUtilities.invokeLater()` in the `main` method.

```java
// This code belongs in your main method
SwingUtilities.invokeLater(new Runnable() {
    @Override
    public void run() {
        // All GUI creation and updates should happen here
        createAndShowGUI();
    }
});
```

#### Important Point to Remember:

**Always use `SwingUtilities.invokeLater()` to start your Swing application and create/update Swing components. This guarantees thread safety for your GUI.**

---

### Practice Questions / Exercises:

1.  **Fill in the Blanks:**
    *   Swing components are primarily _______________-based.
    *   The base class for most Swing components is _______________.
    *   The special thread responsible for all Swing event handling and painting is the _______________.
    *   To ensure GUI code runs on the EDT, you should use _______________.
    *   The `javax.swing.border` package is used for _______________.

2.  **Short Answer:**
    *   Explain the main difference between AWT and Swing.
    *   What is the purpose of `JComponent`?
    *   What is "Pluggable Look and Feel" and why is it important in Swing?
    *   Give an example of an event listener interface and its corresponding event class in Swing.
    *   Why is it crucial to perform GUI updates on the Event Dispatch Thread (EDT)?

3.  **Code Implementation:**
    *   Write a Java Swing program that creates a `JFrame` with a title "My Swing Frame".
    *   Inside the frame, add a `JPanel` that has an `EmptyBorder` with 15 pixels padding on all sides.
    *   Inside the `JPanel`, add a `JLabel` with the text "Welcome to Swing!".
    *   Set the frame's default close operation to `EXIT_ON_CLOSE` and make it visible.

---

### Answers to Practice Questions:

1.  **Fill in the Blanks:**
    *   Swing components are primarily **Java**-based.
    *   The base class for most Swing components is **`JComponent`**.
    *   The special thread responsible for all Swing event handling and painting is the **Event Dispatch Thread (EDT)**.
    *   To ensure GUI code runs on the EDT, you should use **`SwingUtilities.invokeLater()`**.
    *   The `javax.swing.border` package is used for **adding decorative borders or padding to Swing components**.

2.  **Short Answer:**
    *   **Difference between AWT and Swing:** AWT uses native OS components (heavyweight), leading to platform dependency and a limited component set. Swing is entirely Java-based (lightweight), offering platform independence, a richer component set, and extensive customization through Pluggable Look and Feel.
    *   **Purpose of `JComponent`:** `JComponent` is the superclass for almost all Swing components (excluding top-level containers). It provides fundamental features like painting, event handling, tooltips, focus management, and accessibility support.
    *   **Pluggable Look and Feel (PLAF):** PLAF allows Swing applications to change their visual appearance and behavior dynamically. This enables them to match the native OS look, have a custom look, or switch themes. It's important because it provides consistency, customization, and a professional appearance.
    *   **Event Listener and Event Class Example:** `ActionListener` (listener interface) and `ActionEvent` (event class) are used for button clicks. `MouseListener` (listener interface) and `MouseEvent` (event class) are used for mouse events.
    *   **Cruciality of EDT:** GUI updates must happen on the EDT to prevent concurrency issues. The EDT is solely responsible for painting and processing GUI events, ensuring that all visual changes and interactions are handled in a consistent and thread-safe manner. Modifying Swing components from other threads can lead to unpredictable behavior and crashes.

3.  **Code Implementation:**

```java
import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;
import javax.swing.border.Border;

public class MySwingFrameApp {

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                createAndShowGUI();
            }
        });
    }

    private static void createAndShowGUI() {
        // 1. Create the JFrame
        JFrame frame = new JFrame("My Swing Frame");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Set close operation

        // 2. Create a JPanel
        JPanel panel = new JPanel();

        // 3. Create an EmptyBorder with 15 pixels padding
        Border paddingBorder = BorderFactory.createEmptyBorder(15, 15, 15, 15);
        panel.setBorder(paddingBorder); // Apply the border to the panel

        // 4. Add a JLabel to the panel
        JLabel label = new JLabel("Welcome to Swing!");
        panel.add(label); // Add the label to the panel

        // 5. Add the panel to the frame's content pane
        frame.getContentPane().add(panel);

        // 6. Set frame size and make it visible
        frame.setSize(300, 150); // Adjust size as needed
        frame.setVisible(true);
    }
}
```

---

This concludes the overview of Swing Packages. In the next modules, we'll dive deeper into specific Swing components and their functionalities.
