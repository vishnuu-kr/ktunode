---
title: "Delegation Event Model"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Swings fundamentals  – Overview of AWT"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfce"
status: "completed"
scrapedAt: "2026-05-20T16:56:39.322Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 4: Swings Fundamentals – Overview of AWT

## Topic: Delegation Event Model

---

### **Learning Outcomes:**

*   **Understanding the Need for Event Handling:** Grasp why event handling is crucial in GUI applications.
*   **Introduction to the Delegation Event Model:** Comprehend the core principles and architecture of this model.
*   **Key Components of the Delegation Event Model:** Identify and understand the roles of event sources, event objects, and event listeners.
*   **Registering Event Listeners:** Learn how to connect event sources to event listeners.
*   **Handling Events:** Understand how event listeners receive and process events.
*   **Common Event Types and Listeners:** Explore popular event types and their corresponding listener interfaces.
*   **The `ActionEvent` and `ActionListener`:** Deep dive into these fundamental components for action-based events.
*   **The `MouseEvent` and `MouseListener`:** Understand how to handle mouse interactions.
*   **The `KeyEvent` and `KeyListener`:** Learn to manage keyboard input.
*   **The `ItemEvent` and `ItemListener`:** Explore events related to selection changes in components like checkboxes and lists.
*   **The `FocusEvent` and `FocusListener`:** Understand how to respond to components gaining or losing focus.
*   **The `WindowEvent` and `WindowListener`:** Learn to manage window events like opening, closing, and activating.

---

### **1. Understanding the Need for Event Handling**

Graphical User Interface (GUI) applications are inherently **interactive**. Users don't just see output; they actively *do* things, such as clicking buttons, typing text, moving the mouse, or resizing windows. These user actions are what we call **events**.

**Why is event handling crucial?**

*   **Responsiveness:** GUI applications must react to user input in real-time. Without event handling, the application would appear frozen and unresponsive.
*   **Interactivity:** Event handling enables the dynamic behavior of GUI applications, allowing them to respond to user actions and provide a user-friendly experience.
*   **Application Logic:** User actions often trigger specific application logic. For example, clicking a "Save" button should initiate the save operation.

**Key Concept:** An **event** is a signal that something has happened in the GUI. This could be a user action (like a mouse click) or a system event (like a window being closed).

---

### **2. Introduction to the Delegation Event Model**

The **Delegation Event Model** is the standard mechanism used in Java (both AWT and Swing) to handle events. It's a design pattern that efficiently manages how GUI components communicate events to other parts of the application that are interested in those events.

**Core Principles:**

*   **Separation of Concerns:** The component that *generates* an event (the source) is separate from the component that *processes* the event (the listener). This makes code more organized and maintainable.
*   **Delegation:** The event source *delegates* the responsibility of handling the event to a registered listener.
*   **One-to-Many Relationship:** A single event source can have multiple listeners registered to it. Conversely, a single listener can be registered to multiple event sources.

**Analogy:** Imagine a doorbell. The doorbell button is the **event source**. When someone presses it, it generates a "ring" **event**. The people inside the house are the **event listeners**. They hear the ring and decide what to do (e.g., open the door). You can have multiple people inside who want to know when the doorbell rings, and one person might be responsible for answering the door for multiple doorbells.

---

### **3. Key Components of the Delegation Event Model**

The Delegation Event Model consists of three fundamental components:

*   **Event Sources:**
    *   **Definition:** GUI components that generate events when something significant happens.
    *   **Examples:** `Button`, `TextField`, `Frame`, `Checkbox`, `List`.
    *   **Role:** They detect user actions or system events and then create and dispatch an event object.
    *   **Important Note:** Event sources are responsible for registering and unregistering event listener objects.

*   **Event Objects:**
    *   **Definition:** Objects that encapsulate information about the event that occurred.
    *   **Content:** They contain details such as the type of event, the source of the event, and potentially other relevant data (e.g., mouse coordinates, key pressed).
    *   **Hierarchy:** All event objects in Java GUI programming inherit from `java.util.EventObject`.
    *   **Examples:** `ActionEvent`, `MouseEvent`, `KeyEvent`, `WindowEvent`, `ItemEvent`, `FocusEvent`.

*   **Event Listeners:**
    *   **Definition:** Objects that implement specific listener interfaces. These objects are interested in receiving notifications about certain types of events.
    *   **Role:** They define the methods that will be called when a specific event occurs on a registered event source.
    *   **Implementation:** Listeners are typically implemented as separate classes or as anonymous inner classes.
    *   **Interface-Based:** Listeners are always associated with specific **listener interfaces** (e.g., `ActionListener`, `MouseListener`, `KeyListener`).

---

### **4. Registering Event Listeners**

To enable event handling, you must explicitly **register** an event listener object with an event source. This process tells the event source which object(s) should be notified when a particular event occurs.

**How it works:**

1.  **Create an Event Listener:** Instantiate an object that implements the desired listener interface.
2.  **Call the Registration Method:** On the event source, call a specific `add...Listener()` method, passing the listener object as an argument.

**Syntax:**

```java
eventSource.add<EventType>Listener(eventListener);
```

**Example:** Registering an `ActionListener` to a `Button`:

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;

public class ButtonExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Button Event Example");
        JButton button = new JButton("Click Me");

        // 1. Create an event listener (using an anonymous inner class)
        ActionListener myListener = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button was clicked!");
            }
        };

        // 2. Register the listener with the button
        button.addActionListener(myListener);

        frame.add(button);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
}
```

---

### **5. Handling Events**

Once a listener is registered, the event source will notify it when an event occurs. The listener's corresponding method will then be executed.

**How it works:**

1.  **Event Occurs:** The user interacts with the event source (e.g., clicks a button).
2.  **Event Object Creation:** The event source creates an `EventObject` (e.g., `ActionEvent`).
3.  **Event Dispatch:** The event source notifies all registered listeners by calling the appropriate method in their listener interface, passing the event object.
4.  **Listener Method Execution:** The registered listener's method is executed, and the code within that method handles the event.

**Key Point:** The **event dispatch thread (EDT)** is responsible for delivering events to listeners. For Swing applications, it's crucial that GUI updates happen on the EDT.

---

### **6. Common Event Types and Listeners**

Java provides a rich set of event types and corresponding listener interfaces to handle various user interactions and system events.

| Event Type        | Listener Interface | Description                                                                                                                                  | Common Event Sources                                |
| :---------------- | :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| `ActionEvent`     | `ActionListener`   | Fired when an action is performed (e.g., button click, menu item selection, pressing Enter in a text field).                                | `Button`, `MenuItem`, `TextField` (on Enter)        |
| `MouseEvent`      | `MouseListener`    | Fired for mouse events like press, release, click, enter, and exit from a component.                                                         | `Component` (any visual element)                    |
| `MouseEvent`      | `MouseMotionListener` | Fired for mouse movement (drag and motion).                                                                                                  | `Component`                                         |
| `KeyEvent`        | `KeyListener`      | Fired for key press, release, and type events.                                                                                               | `Component` (when it has focus)                     |
| `ItemEvent`       | `ItemListener`     | Fired when the state of an item changes (e.g., checkbox selected/deselected, list item selected).                                          | `Checkbox`, `CheckboxMenuItem`, `Choice`, `List`   |
| `FocusEvent`      | `FocusListener`    | Fired when a component gains or loses keyboard focus.                                                                                        | `Component`                                         |
| `WindowEvent`     | `WindowListener`   | Fired for window events like opening, closing, activation, deactivation, iconification, deiconification.                                 | `Frame`, `Dialog`                                   |
| `AdjustmentEvent` | `AdjustmentListener` | Fired when the value of an `Adjustable` component changes (e.g., scroll bar movement).                                                     | `Scrollbar`, `ScrollPane`                           |
| `TextEvent`       | `TextListener`     | Fired for text changes in components like `TextField` or `TextArea`.                                                                         | `TextField`, `TextArea`                             |
| `ComponentEvent`  | `ComponentListener`| Fired for component events like resize, move, show, hide.                                                                                    | `Component`                                         |

---

### **7. The `ActionEvent` and `ActionListener`**

These are perhaps the most fundamental event types you'll encounter.

*   **`ActionEvent`:**
    *   Represents an action event.
    *   Key methods:
        *   `getSource()`: Returns the object that generated the event.
        *   `getActionCommand()`: Returns the command string associated with the event. This is often set on buttons or menu items to identify them.
        *   `getID()`: Returns an integer code representing the type of action (e.g., `ActionEvent.ACTION_PERFORMED`).

*   **`ActionListener` Interface:**
    *   Requires a single method: `void actionPerformed(ActionEvent e)`.
    *   This method is called by the event source whenever an action event occurs.

**Example (Continuing from ButtonExample):**

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField; // Added for demonstration

public class ActionListenerExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("ActionListener Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 150);
        frame.setLayout(new java.awt.FlowLayout()); // Simple layout

        JButton button = new JButton("Click Me");
        JTextField textField = new JTextField("Enter text and press Enter", 20); // Added a text field

        // Listener for the button
        ActionListener buttonListener = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // e.getSource() would be the button
                System.out.println("Button Action Performed! Command: " + e.getActionCommand());
            }
        };
        button.addActionListener(buttonListener);
        button.setActionCommand("saveButton"); // Setting an action command

        // Listener for the text field (fires on Enter key press)
        ActionListener textFieldListener = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // e.getSource() would be the text field
                System.out.println("Text Field Action Performed! Text: " + textField.getText());
            }
        };
        textField.addActionListener(textFieldListener);

        frame.add(button);
        frame.add(textField);
        frame.setVisible(true);
    }
}
```

---

### **8. The `MouseEvent` and `MouseListener`**

These are used to track mouse activity.

*   **`MouseEvent`:**
    *   Represents a mouse event.
    *   Key methods:
        *   `getSource()`: Returns the object that generated the event.
        *   `getX()`, `getY()`: Returns the x and y coordinates of the mouse cursor relative to the source component.
        *   `getClickCount()`: Returns the number of times the mouse button was clicked.
        *   `getButton()`: Returns which mouse button was pressed (e.g., `MouseEvent.BUTTON1`, `MouseEvent.BUTTON2`).
        *   `isPopupTrigger()`: Returns true if this is the popup menu trigger event for the current platform.

*   **`MouseListener` Interface:**
    *   Requires five methods:
        *   `void mouseClicked(MouseEvent e)`: Mouse button was clicked (press and release).
        *   `void mousePressed(MouseEvent e)`: Mouse button was pressed.
        *   `void mouseReleased(MouseEvent e)`: Mouse button was released.
        *   `void mouseEntered(MouseEvent e)`: Mouse cursor entered the component's boundaries.
        *   `void mouseExited(MouseEvent e)`: Mouse cursor exited the component's boundaries.

**Example:**

```java
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class MouseListenerExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Mouse Listener Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        JPanel panel = new JPanel();
        JLabel label = new JLabel("Move the mouse or click here");

        // MouseListener for the panel
        MouseListener mouseHandler = new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent e) {
                System.out.println("Mouse Clicked at (" + e.getX() + ", " + e.getY() + ")");
            }
            @Override
            public void mousePressed(MouseEvent e) {
                System.out.println("Mouse Pressed at (" + e.getX() + ", " + e.getY() + ")");
            }
            @Override
            public void mouseReleased(MouseEvent e) {
                System.out.println("Mouse Released at (" + e.getX() + ", " + e.getY() + ")");
            }
            @Override
            public void mouseEntered(MouseEvent e) {
                System.out.println("Mouse Entered component.");
            }
            @Override
            public void mouseExited(MouseEvent e) {
                System.out.println("Mouse Exited component.");
            }
        };

        panel.addMouseListener(mouseHandler);
        panel.add(label); // Add label to panel to make it visible
        frame.add(panel);
        frame.setVisible(true);
    }
}
```

---

### **9. The `KeyEvent` and `KeyListener`**

These are used to capture keyboard input.

*   **`KeyEvent`:**
    *   Represents a key event.
    *   Key methods:
        *   `getSource()`: Returns the object that generated the event.
        *   `getKeyCode()`: Returns the integer code of the pressed key (e.g., `KeyEvent.VK_ENTER`, `KeyEvent.VK_A`, `KeyEvent.VK_SHIFT`).
        *   `getKeyChar()`: Returns the character associated with the key event. This is useful for typing text.
        *   `isShiftDown()`, `isControlDown()`, `isAltDown()`: Check if modifier keys were held down.

*   **`KeyListener` Interface:**
    *   Requires three methods:
        *   `void keyPressed(KeyEvent e)`: A key was pressed.
        *   `void keyReleased(KeyEvent e)`: A key was released.
        *   `void keyTyped(KeyEvent e)`: A key was "typed" (combination of press and release for character-producing keys). This event is only generated for keys that produce character input.

**Important:** A `KeyListener` will only receive events if the component it's attached to **has keyboard focus**.

**Example:**

```java
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JTextArea;

public class KeyListenerExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Key Listener Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new java.awt.FlowLayout());

        JTextField textField = new JTextField("Type here...", 20);
        JTextArea textArea = new JTextArea("Press keys, type text...", 5, 20);
        JTextArea outputArea = new JTextArea(5, 20);
        outputArea.setEditable(false); // Make output read-only

        // KeyListener for the text field
        KeyListener textKeyListener = new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {
                outputArea.append("Typed: '" + e.getKeyChar() + "'\n");
            }
            @Override
            public void keyPressed(KeyEvent e) {
                outputArea.append("Pressed: KeyCode=" + e.getKeyCode() + ", Char='" + e.getKeyChar() + "'");
                if (e.isShiftDown()) outputArea.append(" (Shift pressed)");
                outputArea.append("\n");
            }
            @Override
            public void keyReleased(KeyEvent e) {
                outputArea.append("Released: KeyCode=" + e.getKeyCode() + "\n");
            }
        };

        textField.addKeyListener(textKeyListener);
        // To demonstrate focus, let's also add the listener to the textarea
        textArea.addKeyListener(textKeyListener);

        frame.add(textField);
        frame.add(textArea);
        frame.add(outputArea);
        frame.setVisible(true);

        // Make the text field focused initially
        textField.requestFocusInWindow();
    }
}
```

---

### **10. The `ItemEvent` and `ItemListener`**

Used for components where an item's state can change (selection).

*   **`ItemEvent`:**
    *   Represents an item event.
    *   Key methods:
        *   `getSource()`: Returns the object that generated the event.
        *   `getItem()`: Returns the item whose state has changed.
        *   `getStateChange()`: Returns the state of the item (`ItemEvent.SELECTED` or `ItemEvent.DESELECTED`).

*   **`ItemListener` Interface:**
    *   Requires a single method: `void itemStateChanged(ItemEvent e)`.
    *   This method is called when the state of an item in a component changes.

**Common Sources:** `Checkbox`, `CheckboxMenuItem`, `Choice`, `List` (single selection mode).

**Example:**

```java
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class ItemListenerExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Item Listener Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 150);
        frame.setLayout(new java.awt.FlowLayout());

        JCheckBox checkBox = new JCheckBox("Enable Feature");
        JLabel statusLabel = new JLabel("Feature is disabled.");

        // ItemListener for the checkbox
        ItemListener itemHandler = new ItemListener() {
            @Override
            public void itemStateChanged(ItemEvent e) {
                // e.getSource() is the JCheckBox itself
                // e.getStateChange() tells us if it was SELECTED or DESELECTED
                if (e.getStateChange() == ItemEvent.SELECTED) {
                    statusLabel.setText("Feature is enabled.");
                    System.out.println("Checkbox selected.");
                } else {
                    statusLabel.setText("Feature is disabled.");
                    System.out.println("Checkbox deselected.");
                }
            }
        };

        checkBox.addItemListener(itemHandler);

        frame.add(checkBox);
        frame.add(statusLabel);
        frame.setVisible(true);
    }
}
```

---

### **11. The `FocusEvent` and `FocusListener`**

These listeners track when a component gains or loses keyboard focus.

*   **`FocusEvent`:**
    *   Represents a focus event.
    *   Key methods:
        *   `getSource()`: Returns the object that generated the event.
        *   `isTemporary()`: Returns `true` if the focus change is temporary (e.g., due to a window deactivation or another component within the same window gaining focus), `false` otherwise.

*   **`FocusListener` Interface:**
    *   Requires two methods:
        *   `void focusGained(FocusEvent e)`: Called when the component gains keyboard focus.
        *   `void focusLost(FocusEvent e)`: Called when the component loses keyboard focus.

**Example:**

```java
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JPanel;

public class FocusListenerExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Focus Listener Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);
        frame.setLayout(new java.awt.FlowLayout());

        JTextField field1 = new JTextField("Field 1", 15);
        JTextField field2 = new JTextField("Field 2", 15);
        JTextField field3 = new JTextField("Field 3", 15);

        // FocusListener to track focus changes
        FocusListener focusHandler = new FocusListener() {
            @Override
            public void focusGained(FocusEvent e) {
                // e.getSource() is the component that gained focus
                System.out.println("Focus Gained by: " + ((JTextField)e.getSource()).getText());
                if (e.isTemporary()) {
                    System.out.println("  (Temporary focus change)");
                }
            }
            @Override
            public void focusLost(FocusEvent e) {
                // e.getSource() is the component that lost focus
                System.out.println("Focus Lost by: " + ((JTextField)e.getSource()).getText());
                if (e.isTemporary()) {
                    System.out.println("  (Temporary focus change)");
                }
            }
        };

        field1.addFocusListener(focusHandler);
        field2.addFocusListener(focusHandler);
        field3.addFocusListener(focusHandler);

        frame.add(field1);
        frame.add(field2);
        frame.add(field3);
        frame.setVisible(true);

        // Set initial focus to field1
        field1.requestFocusInWindow();
    }
}
```

---

### **12. The `WindowEvent` and `WindowListener`**

These listeners handle events related to the window itself.

*   **`WindowEvent`:**
    *   Represents a window event.
    *   Key methods:
        *   `getSource()`: Returns the `Window` object that generated the event.
        *   `getID()`: Returns an integer code representing the type of window event (e.g., `WindowEvent.WINDOW_CLOSING`, `WindowEvent.WINDOW_ACTIVATED`).

*   **`WindowListener` Interface:**
    *   Requires seven methods:
        *   `void windowOpened(WindowEvent e)`: Window was opened.
        *   `void windowClosing(WindowEvent e)`: Window is in the process of being closed. This is where you typically put cleanup code or ask the user to confirm closing.
        *   `void windowClosed(WindowEvent e)`: Window has been closed.
        *   `void windowIconified(WindowEvent e)`: Window was iconified (minimized).
        *   `void windowDeiconified(WindowEvent e)`: Window was deiconified (restored).
        *   `void windowActivated(WindowEvent e)`: Window was activated (brought to the front).
        *   `void windowDeactivated(WindowEvent e)`: Window was deactivated (lost focus to another window).

**Note on `windowClosing`:** To actually close the window when the user clicks the "X" button, you must call `System.exit(0)` or dispose of the window in the `windowClosing` method. Otherwise, the window might just become unresponsive.

**Example:**

```java
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import javax.swing.JFrame;

public class WindowListenerExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Window Listener Example");
        frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE); // Prevent default close action
        frame.setSize(300, 200);

        // WindowListener to handle closing
        WindowListener windowHandler = new WindowListener() {
            @Override
            public void windowOpened(WindowEvent e) {
                System.out.println("Window opened.");
            }
            @Override
            public void windowClosing(WindowEvent e) {
                System.out.println("Window closing...");
                // Ask for confirmation before closing
                int response = javax.swing.JOptionPane.showConfirmDialog(frame,
                        "Are you sure you want to exit?", "Confirm Exit",
                        javax.swing.JOptionPane.YES_NO_OPTION);
                if (response == javax.swing.JOptionPane.YES_OPTION) {
                    frame.dispose(); // Dispose the window
                    System.exit(0);  // Exit the application
                }
