---
title: "The Swing Buttons"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Advanced features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6b2"
status: "completed"
scrapedAt: "2026-05-23T17:52:00.010Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 4: Advanced Features of Java

### Topic: The Swing Buttons

---

### Introduction to Swing Buttons

Swing is a GUI toolkit for Java that provides a rich set of components for building user interfaces. Buttons are fundamental interactive elements that allow users to trigger actions within an application. This topic focuses on understanding and utilizing various types of Swing buttons to enhance user interaction in Java applications.

**Relates to Course Outcome:** CO4: Identify and utilize various Swing controls, components, and containers. (Knowledge Level: K3)

---

### Key Swing Button Classes

Swing provides several classes for creating buttons, each with specific functionalities:

*   **`JButton`**: The most common and versatile button. It can display text, an icon, or both. It fires an `ActionEvent` when clicked.
    *   **Definition:** A push-button component that can be placed on a form or panel.
    *   **Key Features:** Supports text labels, icons, rollover icons, disabled icons, and tooltips.
    *   **Textbook Reference:**
        *   *Java: The Complete Reference* (Schildt): Discusses `JButton` as a core Swing component for user interaction.
        *   *Java How to Program* (Deitel & Deitel): Explains the event-driven nature of buttons and how to handle `ActionEvent`.

*   **`JToggleButton`**: A button that can be toggled on or off. It maintains a selected or deselected state.
    *   **Definition:** A button that can have two states: selected and unselected.
    *   **Key Features:** Useful for options that need to be turned on or off (e.g., bold, italic). It fires an `ItemEvent` when its state changes.
    *   **Textbook Reference:**
        *   *Java: The Complete Reference* (Schildt): Covers `JToggleButton` for implementing toggleable states.

*   **`JCheckBox`**: A special type of `JToggleButton` that typically displays a label next to a checkbox. It's used for selecting or deselecting options independently.
    *   **Definition:** A button that displays a text label and a check box.
    *   **Key Features:** Each checkbox can be selected or deselected independently of other checkboxes. Fires `ItemEvent`.
    *   **Textbook Reference:**
        *   *Java How to Program* (Deitel & Deitel): Explains `JCheckBox` for multiple independent selections.

*   **`JRadioButton`**: Another type of `JToggleButton` that is typically used in groups. When a radio button in a group is selected, all other radio buttons in that group are automatically deselected.
    *   **Definition:** A button that can be selected or unselected, usually presented in groups where only one can be selected at a time.
    *   **Key Features:** Requires a `ButtonGroup` to manage mutual exclusivity. Fires `ItemEvent`.
    *   **Textbook Reference:**
        *   *Java: The Complete Reference* (Schildt): Details the use of `JRadioButton` with `ButtonGroup` for single selections from a set.
        *   *Introduction to Java Programming* (Liang): Provides examples of using radio buttons for mutually exclusive choices.

---

### Using `JButton`

The `JButton` is the most fundamental button. Here's how to create and use it:

**1. Creating a `JButton`:**

```java
import javax.swing.*;

// ... inside a JFrame or JPanel

JButton myButton = new JButton("Click Me"); // Button with text
JButton iconButton = new JButton(new ImageIcon("path/to/icon.png")); // Button with an icon
JButton textAndIconButton = new JButton("Save", new ImageIcon("path/to/save_icon.png")); // Button with text and icon
```

**2. Adding a `JButton` to a Container:**

You add buttons to panels (`JPanel`), frames (`JFrame`), or other containers using their `add()` method.

```java
JPanel panel = new JPanel();
panel.add(myButton);
```

**3. Handling Button Clicks (Action Events):**

Buttons generate `ActionEvent`s when clicked. You need to implement the `ActionListener` interface and register it with the button.

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

// ...

myButton.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        // Code to execute when the button is clicked
        System.out.println("Button was clicked!");
        JOptionPane.showMessageDialog(null, "You clicked the button!");
    }
});
```

**Example:** A simple application with a button that displays a message.

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleButtonApp extends JFrame {

    private JButton clickButton;

    public SimpleButtonApp() {
        setTitle("JButton Example");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout()); // Simple layout manager

        clickButton = new JButton("Click Me!");
        clickButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JOptionPane.showMessageDialog(SimpleButtonApp.this, "Hello from the button!");
            }
        });

        add(clickButton);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new SimpleButtonApp();
            }
        });
    }
}
```

**Important Points for `JButton`:**

*   Use `ImageIcon` for icons.
*   `addActionListener()` is crucial for interactivity.
*   `ActionEvent` is the event type.
*   `JOptionPane` is useful for quick feedback.

---

### Using `JToggleButton`

`JToggleButton` is used for states that can be toggled.

**1. Creating a `JToggleButton`:**

```java
JToggleButton toggleButton = new JToggleButton("Toggle Me");
toggleButton.setSelected(true); // Initially selected
```

**2. Handling State Changes (Item Events):**

`JToggleButton`s fire `ItemEvent`s when their selection state changes. You need to implement the `ItemListener` interface.

```java
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

// ...

toggleButton.addItemListener(new ItemListener() {
    @Override
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            System.out.println("Toggle button is ON");
        } else {
            System.out.println("Toggle button is OFF");
        }
    }
});
```

**Important Points for `JToggleButton`:**

*   Fires `ItemEvent`.
*   Use `ItemListener` to detect state changes.
*   `isSelected()` checks the current state.

---

### Using `JCheckBox`

`JCheckBox` allows for independent selection of multiple options.

**1. Creating a `JCheckBox`:**

```java
JCheckBox boldCheckbox = new JCheckBox("Bold");
JCheckBox italicCheckbox = new JCheckBox("Italic");
boldCheckbox.setSelected(true); // Default to selected
```

**2. Handling State Changes:**

Similar to `JToggleButton`, `JCheckBox` fires `ItemEvent`s and requires an `ItemListener`.

```java
boldCheckbox.addItemListener(new ItemListener() {
    @Override
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            System.out.println("Bold is selected");
        } else {
            System.out.println("Bold is not selected");
        }
    }
});
```

**Example:** A simple text style selector.

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

public class CheckBoxApp extends JFrame {

    private JCheckBox boldCheckBox;
    private JCheckBox italicCheckBox;
    private JLabel previewLabel;

    public CheckBoxApp() {
        setTitle("JCheckBox Example");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        boldCheckBox = new JCheckBox("Bold");
        italicCheckBox = new JCheckBox("Italic");
        previewLabel = new JLabel("Sample Text");

        // Listen for changes in checkboxes
        ItemListener checkboxListener = new ItemListener() {
            @Override
            public void itemStateChanged(ItemEvent e) {
                updateLabelStyle();
            }
        };

        boldCheckBox.addItemListener(checkboxListener);
        italicCheckBox.addItemListener(checkboxListener);

        add(boldCheckBox);
        add(italicCheckBox);
        add(previewLabel);

        updateLabelStyle(); // Set initial style
        setVisible(true);
    }

    private void updateLabelStyle() {
        int fontStyle = Font.PLAIN;
        if (boldCheckBox.isSelected()) {
            fontStyle |= Font.BOLD;
        }
        if (italicCheckBox.isSelected()) {
            fontStyle |= Font.ITALIC;
        }
        previewLabel.setFont(new Font("Arial", fontStyle, 16));
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new CheckBoxApp();
            }
        });
    }
}
```

**Important Points for `JCheckBox`:**

*   Ideal for multiple independent choices.
*   Fires `ItemEvent`.
*   Use `ItemListener` to track selections.

---

### Using `JRadioButton`

`JRadioButton` is used for mutually exclusive choices within a group.

**1. Creating `JRadioButton`s and `ButtonGroup`:**

```java
JRadioButton redRadio = new JRadioButton("Red");
JRadioButton greenRadio = new JRadioButton("Green");
JRadioButton blueRadio = new JRadioButton("Blue");

ButtonGroup colorGroup = new ButtonGroup();
colorGroup.add(redRadio);
colorGroup.add(greenRadio);
colorGroup.add(blueRadio);

redRadio.setSelected(true); // Set a default selection
```

**2. Handling State Changes:**

Like `JToggleButton` and `JCheckBox`, `JRadioButton` fires `ItemEvent`s.

```java
redRadio.addItemListener(new ItemListener() {
    @Override
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            System.out.println("Red selected");
            // Update UI based on selection
        }
    }
});

greenRadio.addItemListener(new ItemListener() {
    @Override
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            System.out.println("Green selected");
            // Update UI based on selection
        }
    }
});
```

**Example:** A color selection application.

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

public class RadioButtonApp extends JFrame {

    private JRadioButton redRadio, greenRadio, blueRadio;
    private ButtonGroup colorGroup;
    private JPanel colorPanel;

    public RadioButtonApp() {
        setTitle("JRadioButton Example");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        redRadio = new JRadioButton("Red");
        greenRadio = new JRadioButton("Green");
        blueRadio = new JRadioButton("Blue");

        colorGroup = new ButtonGroup();
        colorGroup.add(redRadio);
        colorGroup.add(greenRadio);
        colorGroup.add(blueRadio);

        colorPanel = new JPanel();
        colorPanel.setPreferredSize(new Dimension(100, 100));
        colorPanel.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        add(colorPanel);

        ItemListener radioListener = new ItemListener() {
            @Override
            public void itemStateChanged(ItemEvent e) {
                if (e.getStateChange() == ItemEvent.SELECTED) {
                    if (redRadio.isSelected()) {
                        colorPanel.setBackground(Color.RED);
                    } else if (greenRadio.isSelected()) {
                        colorPanel.setBackground(Color.GREEN);
                    } else if (blueRadio.isSelected()) {
                        colorPanel.setBackground(Color.BLUE);
                    }
                }
            }
        };

        redRadio.addItemListener(radioListener);
        greenRadio.addItemListener(radioListener);
        blueRadio.addItemListener(radioListener);

        // Set initial selection and color
        redRadio.setSelected(true);
        colorPanel.setBackground(Color.RED);

        add(redRadio);
        add(greenRadio);
        add(blueRadio);

        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new RadioButtonApp();
            }
        });
    }
}
```

**Important Points for `JRadioButton`:**

*   Must be part of a `ButtonGroup` for mutual exclusivity.
*   Fires `ItemEvent`.
*   Use `ItemListener` to detect selection.
*   `setSelected()` can programmatically choose a radio button.

---

### Customizing Buttons

Swing buttons offer extensive customization options:

*   **Text:** `setText("New Text")`
*   **Icons:** `setIcon(ImageIcon icon)`
*   **Rollover Icons:** `setRolloverIcon(ImageIcon icon)` (icon displayed when mouse hovers)
*   **Disabled Icons:** `setDisabledIcon(ImageIcon icon)` (icon displayed when button is disabled)
*   **Pressed Icons:** `setPressedIcon(ImageIcon icon)` (icon displayed when button is pressed)
*   **Tooltips:** `setToolTipText("Helpful message")`
*   **Borders:** `setBorder(Border border)`
*   **Mnemonics (Keyboard Shortcuts):** `setMnemonic('S')` (alt+S triggers the button)
*   **Alignment:** `setHorizontalTextAlignment()`, `setVerticalTextAlignment()`, `setHorizontalAlignment()`, `setVerticalAlignment()`
*   **Button Groups:** As seen with `JRadioButton`, `ButtonGroup` is used to manage groups of buttons.

**Textbook Reference:**

*   *Java in A Nutshell* (Flanagan): Provides detailed examples of customizing Swing components, including buttons.
*   *Head First Java* (Sierra): Offers a more visual and intuitive approach to understanding Swing component customization.

---

### Important Points to Remember

*   **Swing is a high-level API:** It provides more features and a richer look-and-feel than AWT.
*   **Event-Driven Programming:** GUI applications are event-driven. You listen for events (like button clicks) and respond to them.
*   **`ActionEvent` vs. `ItemEvent`:**
    *   `JButton` primarily uses `ActionEvent`.
    *   `JToggleButton`, `JCheckBox`, and `JRadioButton` primarily use `ItemEvent`.
*   **`ActionListener` and `ItemListener`:** These are the key interfaces for handling button events.
*   **`SwingUtilities.invokeLater()`:** Crucial for ensuring GUI updates happen on the Event Dispatch Thread (EDT) to avoid concurrency issues.
*   **Layout Managers:** Essential for arranging components within containers (e.g., `FlowLayout`, `BorderLayout`, `GridLayout`, `BoxLayout`).
*   **`ButtonGroup`:** Mandatory for managing mutually exclusive selections with `JRadioButton`.

---

### Practice Questions

**Question 1:** Which Swing button class is most suitable for creating a button that toggles an option on or off?
    a) `JButton`
    b) `JCheckBox`
    c) `JRadioButton`
    d) `JToggleButton`

**Question 2:** What type of event is generated when a `JButton` is clicked?
    a) `ItemEvent`
    b) `MouseEvent`
    c) `ActionEvent`
    d) `FocusEvent`

**Question 3:** How do you ensure that only one `JRadioButton` can be selected from a set of options?
    a) By adding them directly to a `JFrame`.
    b) By using a `ButtonGroup` object.
    c) By setting `setEnabled(false)` on other radio buttons.
    d) By using `JCheckBox` instead.

**Question 4:** Which listener interface should you implement to detect when a `JCheckBox` is selected or deselected?
    a) `ActionListener`
    b) `MouseListener`
    c) `ItemListener`
    d) `KeyListener`

**Question 5:** What is the purpose of `SwingUtilities.invokeLater()` in Swing applications?

---

### Answers to Practice Questions

**Answer 1:**
    d) `JToggleButton`
    *   **Explanation:** `JToggleButton` is designed for states that can be toggled between selected and unselected.

**Answer 2:**
    c) `ActionEvent`
    *   **Explanation:** `JButton`s fire `ActionEvent`s when they are "acted upon" (clicked).

**Answer 3:**
    b) By using a `ButtonGroup` object.
    *   **Explanation:** A `ButtonGroup` is specifically designed to manage a group of buttons (like `JRadioButton`) so that only one can be selected at a time.

**Answer 4:**
    c) `ItemListener`
    *   **Explanation:** Components that have a selected/unselected state, such as `JToggleButton`, `JCheckBox`, and `JRadioButton`, fire `ItemEvent`s, which are handled by an `ItemListener`.

**Answer 5:**
    *   **Explanation:** `SwingUtilities.invokeLater()` is used to ensure that GUI updates and event handling code are executed on the **Event Dispatch Thread (EDT)**. The EDT is a single thread responsible for handling all GUI events and updates. Running GUI code on the EDT prevents threading-related issues and ensures that the UI remains responsive and consistent.

---

### Exercises for Practice

1.  **Create a simple Swing application with a `JButton`. When the button is clicked, display a message dialog box with the text "Button Pressed!".** (Relates to CO2, CO4)
2.  **Develop an application that uses two `JCheckBox`es: "Underline" and "Strikethrough". Below the checkboxes, display a `JLabel` with some text. When a checkbox is selected or deselected, update the `JLabel`'s font to reflect the chosen styles.** (Relates to CO4)
3.  **Build a small application with three `JRadioButton`s (e.g., "Small", "Medium", "Large") grouped together. Display a `JComboBox` populated with these size options. When a radio button is selected, update the selected item in the `JComboBox` to match.** (Relates to CO4)
4.  **Enhance the `JButton` application from Exercise 1. Add a tooltip to the button that says "Click this button to show a message." Also, set a mnemonic character (e.g., 'M' for Message) so the button can be activated using `Alt + M`.** (Relates to CO4)

---

### Summary

Swing buttons are essential components for creating interactive user interfaces in Java. Understanding `JButton`, `JToggleButton`, `JCheckBox`, and `JRadioButton`, along with their associated event listeners (`ActionListener`, `ItemListener`) and the `ButtonGroup` utility, allows you to build sophisticated and user-friendly applications. Proper customization and event handling are key to leveraging the full power of Swing buttons.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
