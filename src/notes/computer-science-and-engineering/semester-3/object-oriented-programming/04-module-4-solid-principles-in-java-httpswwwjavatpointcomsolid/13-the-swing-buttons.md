---
title: "The Swing Buttons"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acd4"
status: "completed"
scrapedAt: "2026-05-20T16:29:20.413Z"
---
# Module 4: SOLID Principles in Java - The Swing Buttons

**Subject:** OBJECT ORIENTED PROGRAMMING
**Module:** Module 4: SOLID Principles in Java
**Topic:** The Swing Buttons
**Description:** This section focuses on demonstrating the SOLID principles using Swing buttons in Java.  While the linked article doesn't directly cover Swing, this set of notes bridges the gap by applying SOLID principles to the development and usage of Swing buttons and related concepts.  We'll demonstrate how adhering to SOLID principles can lead to more maintainable, extensible, and robust GUI applications with buttons.

**Learning Outcomes:**

*   Understand the SOLID principles in the context of GUI development, particularly with Swing buttons.
*   Apply the Single Responsibility Principle (SRP) to button functionality.
*   Demonstrate the Open/Closed Principle (OCP) through button customizations and event handling.
*   Apply the Liskov Substitution Principle (LSP) to button inheritance and interfaces.
*   Apply the Interface Segregation Principle (ISP) to button event listeners.
*   Apply the Dependency Inversion Principle (DIP) to button event handling and dependencies.
*   Design and implement Swing button components that adhere to SOLID principles.

## 1. Introduction to Swing Buttons

*   **What are Swing Buttons?** Swing buttons (e.g., `JButton`, `JToggleButton`, `JRadioButton`, `JCheckBox`) are interactive GUI components that allow users to trigger actions within a Java application. They are part of the Swing library, a comprehensive set of GUI components built on top of the Abstract Window Toolkit (AWT).

*   **Basic Button Functionality:**
    *   Display text and/or icons.
    *   Respond to user clicks (or other events).
    *   Trigger specific actions based on user interaction.

*   **Why Use Swing Buttons with SOLID Principles?** Applying SOLID principles to button design ensures:
    *   **Maintainability:** Changes to one part of the application are less likely to affect other parts.
    *   **Extensibility:** It becomes easier to add new button types or functionality without modifying existing code.
    *   **Testability:**  Individual button components and their associated logic can be tested in isolation.
    *   **Reusability:** Well-designed button components can be reused across different parts of the application or even in other applications.

## 2. The Single Responsibility Principle (SRP)

*   **Definition:** A class should have only one reason to change.  In other words, a class should have only one responsibility.

*   **Applying SRP to Swing Buttons:**
    *   **Incorrect Example (Violating SRP):**  A button class that handles both UI rendering and complex business logic.

        ```java
        // BAD EXAMPLE: Violates SRP
        import javax.swing.JButton;
        import javax.swing.JOptionPane;
        import java.awt.event.ActionEvent;
        import java.awt.event.ActionListener;

        public class OrderButton extends JButton implements ActionListener {

            public OrderButton() {
                super("Place Order");
                addActionListener(this);
            }

            @Override
            public void actionPerformed(ActionEvent e) {
                // Complex business logic related to placing an order.
                // Could involve database access, validation, etc.
                boolean orderSuccessful = placeOrder(); // Hypothetical method
                if (orderSuccessful) {
                    JOptionPane.showMessageDialog(null, "Order placed successfully!");
                } else {
                    JOptionPane.showMessageDialog(null, "Order placement failed.");
                }
            }

            private boolean placeOrder() {
                // Simulate order placement. In real life, this would be much more complex.
                // This is where the violation of SRP lies, as the button now handles the
                // act of placing an order, in addition to being a button.
                return Math.random() > 0.2; // 80% chance of success.
            }
        }

        ```

    *   **Correct Example (Following SRP):** Separate the UI rendering from the business logic.

        ```java
        // GOOD EXAMPLE: Adheres to SRP

        import javax.swing.JButton;
        import java.awt.event.ActionEvent;
        import java.awt.event.ActionListener;

        // Interface for handling the order placement logic
        interface OrderService {
            boolean placeOrder();
        }

        // Example implementation of OrderService (could be replaced by a real implementation)
        class DefaultOrderService implements OrderService {
            @Override
            public boolean placeOrder() {
                // Simulate order placement. In real life, this would be much more complex.
                return Math.random() > 0.2; // 80% chance of success.
            }
        }

        public class OrderButton extends JButton {

            private final OrderService orderService;
            private final OrderActionListener orderActionListener;

            public OrderButton(OrderService orderService) {
                super("Place Order");
                this.orderService = orderService;
                this.orderActionListener = new OrderActionListener(orderService);
                addActionListener(orderActionListener);
            }

            // Inner class to handle the action event
            private static class OrderActionListener implements ActionListener {
                private final OrderService orderService;

                public OrderActionListener(OrderService orderService) {
                    this.orderService = orderService;
                }

                @Override
                public void actionPerformed(ActionEvent e) {
                    boolean orderSuccessful = orderService.placeOrder();
                    OrderConfirmationDialog.show(orderSuccessful); // Assumes there's a separate class
                                                                  // for displaying confirmation.
                }
            }

            // Example of a separate component for showing order confirmation
            private static class OrderConfirmationDialog {
                public static void show(boolean orderSuccessful) {
                    String message = orderSuccessful ? "Order placed successfully!" : "Order placement failed.";
                    javax.swing.JOptionPane.showMessageDialog(null, message);
                }
            }


            public static void main(String[] args) {
                javax.swing.JFrame frame = new javax.swing.JFrame("SRP Example");
                frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);

                OrderService orderService = new DefaultOrderService();
                OrderButton orderButton = new OrderButton(orderService);

                frame.getContentPane().add(orderButton);
                frame.pack();
                frame.setVisible(true);
            }
        }
        ```

        *   The `OrderButton` is now responsible only for UI and delegating the order placement.
        *   The `OrderService` (interface) and `DefaultOrderService` (implementation) handle the business logic of placing an order.
        *   An `ActionListener` is extracted to a separate inner class `OrderActionListener`.
        *   A separate `OrderConfirmationDialog` class displays the confirmation message.

*   **Benefits:** Changes to the order placement logic will not require changes to the `OrderButton` class, and vice versa. This increases maintainability and reduces the risk of introducing bugs.

## 3. The Open/Closed Principle (OCP)

*   **Definition:** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

*   **Applying OCP to Swing Buttons:** Allow extending button functionality without modifying the core button class.  This is typically achieved using event listeners and strategy patterns.

    *   **Example:** Adding different event handling behaviors without modifying the `JButton` class directly.

        ```java
        // GOOD EXAMPLE: Adheres to OCP

        import javax.swing.JButton;
        import java.awt.event.ActionEvent;
        import java.awt.event.ActionListener;

        interface ButtonAction {
            void execute();
        }

        class PrintMessageAction implements ButtonAction {
            private final String message;

            public PrintMessageAction(String message) {
                this.message = message;
            }

            @Override
            public void execute() {
                System.out.println(message);
            }
        }

        class ShowDialogAction implements ButtonAction {
            private final String message;

            public ShowDialogAction(String message) {
                this.message = message;
            }

            @Override
            public void execute() {
                javax.swing.JOptionPane.showMessageDialog(null, message);
            }
        }

        public class ConfigurableButton extends JButton {

            private ButtonAction action;

            public ConfigurableButton(String text, ButtonAction action) {
                super(text);
                this.action = action;
                addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        action.execute();
                    }
                });
            }

            public void setAction(ButtonAction action) {
                this.action = action;
            }

            public static void main(String[] args) {
                javax.swing.JFrame frame = new javax.swing.JFrame("OCP Example");
                frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
                frame.setLayout(new java.awt.FlowLayout());


                ButtonAction printAction = new PrintMessageAction("Button 1 Clicked!");
                ConfigurableButton button1 = new ConfigurableButton("Button 1", printAction);

                ButtonAction dialogAction = new ShowDialogAction("Button 2 Clicked!");
                ConfigurableButton button2 = new ConfigurableButton("Button 2", dialogAction);

                frame.getContentPane().add(button1);
                frame.getContentPane().add(button2);
                frame.pack();
                frame.setVisible(true);
            }
        }
        ```

        *   `ButtonAction` interface defines the contract for button actions.
        *   `PrintMessageAction` and `ShowDialogAction` are concrete implementations of `ButtonAction`.
        *   The `ConfigurableButton` accepts a `ButtonAction` and executes it when clicked.
        *   We can add new `ButtonAction` implementations without modifying `ConfigurableButton`.

*   **Benefits:** This allows you to easily add new functionalities to buttons without altering the existing `JButton` class, making the code more maintainable and less prone to regressions.

## 4. The Liskov Substitution Principle (LSP)

*   **Definition:** Subtypes should be substitutable for their base types without altering the correctness of the program.

*   **Applying LSP to Swing Buttons:**  If you create a subclass of `JButton`, it should behave consistently with a `JButton` in all contexts.  This principle is less directly applicable to simple buttons, but becomes crucial when creating more complex button-like components or hierarchies.

    *   **Example:** Creating a custom button that extends `JButton`.

        ```java
        // GOOD EXAMPLE: Adheres to LSP

        import javax.swing.JButton;
        import java.awt.Color;
        import java.awt.event.ActionEvent;
        import java.awt.event.ActionListener;

        public class HighlightButton extends JButton {

            private Color originalBackground;
            private Color highlightColor;

            public HighlightButton(String text, Color highlightColor) {
                super(text);
                this.highlightColor = highlightColor;
                originalBackground = getBackground();

                addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        setBackground(highlightColor);
                        //Simulate a long running task.
                        new Thread(() -> {
                            try {
                                Thread.sleep(500); // Simulate a 0.5 second delay
                            } catch (InterruptedException ex) {
                                Thread.currentThread().interrupt();
                            }
                            setBackground(originalBackground);
                        }).start();


                    }
                });
            }

            // Override methods if necessary, but ensure consistent behavior
            @Override
            public void setEnabled(boolean enabled) {
                super.setEnabled(enabled);
                // Custom behavior when enabling/disabling the button, if needed.
            }


            public static void main(String[] args) {
                javax.swing.JFrame frame = new javax.swing.JFrame("LSP Example");
                frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
                frame.setLayout(new java.awt.FlowLayout());

                HighlightButton highlightButton = new HighlightButton("Highlight Me!", Color.YELLOW);
                frame.getContentPane().add(highlightButton);
                frame.pack();
                frame.setVisible(true);
            }
        }
        ```

        *   `HighlightButton` extends `JButton`.
        *   It overrides the `ActionListener` to change the background color temporarily when clicked.
        *   Anywhere you could use a regular `JButton`, you should be able to use a `HighlightButton` without unexpected behavior.  For example, enabling/disabling the button should still work as expected.
        *   **Important:**  If `HighlightButton` significantly altered the core behavior of a button (e.g., making it impossible to click), it would violate LSP.

*   **Potential Violation:** If `HighlightButton`'s click action *permanently* disabled the button, it would break LSP because a `JButton` isn't expected to disable itself permanently after a click (without explicit code to re-enable it).

## 5. The Interface Segregation Principle (ISP)

*   **Definition:** Clients should not be forced to depend on methods they do not use.  In the context of Java, this means interfaces should be small and focused.

*   **Applying ISP to Swing Buttons:**  Avoid creating large, monolithic listener interfaces.  Instead, create specific interfaces for different types of button events or functionality.

    *   **Example:** Instead of having a single `ButtonActionListener` that handles all button actions, create separate interfaces for different actions.

        ```java
        // GOOD EXAMPLE: Adheres to ISP

        import javax.swing.JButton;
        import java.awt.event.ActionListener;
        import java.awt.event.ActionEvent;

        // Separate interfaces for different button actions.
        interface ClickActionListener extends ActionListener {
            @Override
            void actionPerformed(ActionEvent e); // Click event
        }

        interface HoverActionListener  { //Not part of java.awt.event.ActionListener to show segregration.
            void onHoverEnter();
            void onHoverExit();
        }
        // This example is just for demonstration and requires a more complex MouseListener to be implemented for Hover functionality.

        public class ISPSwingButton extends JButton {

            public ISPSwingButton(String text) {
                super(text);
            }

            public void addClickActionListener(ClickActionListener listener) {
                addActionListener(listener);
            }

            // Hypothetical: You'd need a different listener and more complex logic
            // to truly implement hover actions in Swing. This is just for demonstration.
            // public void addHoverActionListener(HoverActionListener listener) { ... }


            public static void main(String[] args) {
                javax.swing.JFrame frame = new javax.swing.JFrame("ISP Example");
                frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
                frame.setLayout(new java.awt.FlowLayout());

                ISPSwingButton button = new ISPSwingButton("Click Me!");
                button.addClickActionListener(new ClickActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        System.out.println("Button Clicked!");
                    }
                });

                frame.getContentPane().add(button);
                frame.pack();
                frame.setVisible(true);
            }
        }
        ```

        *   We have a `ClickActionListener` interface specifically for click events.
        *   A hypothetical `HoverActionListener` for hover events (would require additional mouse listener logic in a real implementation).
        *   A client that only cares about click events doesn't need to implement the `HoverActionListener` (and vice-versa).

*   **Benefits:**  Clients only implement the interfaces they need, leading to cleaner and more focused code.  Reduces unnecessary dependencies.  Easier to maintain and test.

## 6. The Dependency Inversion Principle (DIP)

*   **Definition:**
    *   High-level modules should not depend on low-level modules. Both should depend on abstractions.
    *   Abstractions should not depend on details. Details should depend on abstractions.

*   **Applying DIP to Swing Buttons:** Decouple button behavior from specific implementations by depending on abstractions (interfaces) rather than concrete classes.  This is very similar to the OCP example.

    *   **Example:** Using an interface for button actions.  See the OCP example above for a practical demonstration using `ButtonAction`.

        ```java
        // GOOD EXAMPLE: Adheres to DIP
        // (See the OCP Example above - the ButtonAction interface is the abstraction)

        // High-level module (ConfigurableButton) depends on the ButtonAction abstraction, not on concrete implementations.
        // Low-level modules (PrintMessageAction, ShowDialogAction) depend on the ButtonAction abstraction.
        ```

*   **Benefits:**
    *   Reduces coupling between components.
    *   Increases flexibility and testability.
    *   Easier to change implementations without affecting high-level modules.

## 7. Practice Questions/Exercises

1.  **SRP:**  Refactor the following `ButtonWithValidation` class to adhere to the Single Responsibility Principle.  The button validates the user input and then submits data.

    ```java
    import javax.swing.JButton;
    import javax.swing.JOptionPane;
    import javax.swing.JTextField;
    import java.awt.event.ActionEvent;
    import java.awt.event.ActionListener;

    public class ButtonWithValidation extends JButton implements ActionListener {

        private JTextField inputField;

        public ButtonWithValidation(String text, JTextField inputField) {
            super(text);
            this.inputField = inputField;
            addActionListener(this);
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            String input = inputField.getText();
            if (isValidInput(input)) {
                submitData(input);
            } else {
                JOptionPane.showMessageDialog(null, "Invalid input. Please enter a valid value.");
            }
        }

        private boolean isValidInput(String input) {
            // Simple validation: checks if the input is a number.
            try {
                Double.parseDouble(input);
                return true;
            } catch (NumberFormatException ex) {
                return false;
            }
        }

        private void submitData(String input) {
            // Simulate data submission.
            System.out.println("Submitting data: " + input);
            JOptionPane.showMessageDialog(null, "Data submitted successfully: " + input);
        }

        public static void main(String[] args) {
            javax.swing.JFrame frame = new javax.swing.JFrame("Bad SRP Example");
            frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
            frame.setLayout(new java.awt.FlowLayout());

            JTextField inputField = new JTextField(10);
            ButtonWithValidation button = new ButtonWithValidation("Submit", inputField);

            frame.getContentPane().add(inputField);
            frame.getContentPane().add(button);
            frame.pack();
            frame.setVisible(true);
        }
    }
    ```

    **Answer:**

    ```java
    import javax.swing.JButton;
    import javax.swing.JOptionPane;
    import javax.swing.JTextField;
    import java.awt.event.ActionEvent;
    import java.awt.event.ActionListener;

    // Interface for input validation
    interface InputValidator {
        boolean isValid(String input);
    }

    // Interface for data submission
    interface DataSubmitter {
        void submit(String data);
    }

    public class ButtonWithValidation extends JButton implements ActionListener {

        private JTextField inputField;
        private InputValidator validator;
        private DataSubmitter submitter;

        public ButtonWithValidation(String text, JTextField inputField, InputValidator validator, DataSubmitter submitter) {
            super(text);
            this.inputField = inputField;
            this.validator = validator;
            this.submitter = submitter;
            addActionListener(this);
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            String input = inputField.getText();
            if (validator.isValid(input)) {
                submitter.submit(input);
            } else {
                JOptionPane.showMessageDialog(null, "Invalid input. Please enter a valid value.");
            }
        }

        public static void main(String[] args) {
            javax.swing.JFrame frame = new javax.swing.JFrame("Good SRP Example");
            frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
            frame.setLayout(new java.awt.FlowLayout());

            JTextField inputField = new JTextField(10);

            // Implementations for validation and submission
            InputValidator numberValidator = input -> {
                try {
                    Double.parseDouble(input);
                    return true;
                } catch (NumberFormatException ex) {
                    return false;
                }
            };

            DataSubmitter consoleSubmitter = data -> {
                System.out.println("Submitting data: " + data);
                JOptionPane.showMessageDialog(null, "Data submitted successfully: " + data);
            };


            ButtonWithValidation button = new ButtonWithValidation("Submit", inputField, numberValidator, consoleSubmitter);

            frame.getContentPane().add(inputField);
            frame.getContentPane().add(button);
            frame.pack();
            frame.setVisible(true);
        }
    }
    ```

2.  **OCP:**  Extend the `ConfigurableButton` example (from the OCP section) to add a new action type: `LogMessageAction`. This action should log the button's text to a file.  You should *not* modify the `ConfigurableButton` class.

    **Answer (Illustrative - requires file writing permissions and error handling):**

    ```java
    // (The ConfigurableButton and ButtonAction interface from the original OCP example)

    import javax.swing.JButton;
    import java.awt.event.ActionEvent;
    import java.awt.event.ActionListener;
    import java.io.FileWriter;
    import java.io.IOException;


    interface ButtonAction {
        void execute();
    }

    class PrintMessageAction implements ButtonAction {
        private final String message;

        public PrintMessageAction(String message) {
            this.message = message;
        }

        @Override
        public void execute() {
            System.out.println(message);
        }
    }

    class ShowDialogAction implements ButtonAction {
        private final String message;

        public ShowDialogAction(String message) {
            this.message = message;
        }

        @Override
        public void execute() {
            javax.swing.JOptionPane.showMessageDialog(null, message);
        }
    }

    class LogMessageAction implements ButtonAction {
        private final String message;
        private final String filename;

        public LogMessageAction(String message, String filename) {
            this.message = message;
            this.filename = filename;
        }

        @Override
        public void execute() {
            try (FileWriter writer = new FileWriter(filename, true)) {
                writer.write(message + "\n");
            } catch (IOException e) {
                System.err.println("Error logging message: " + e.getMessage());
            }
        }
    }


    public class ConfigurableButton extends JButton {

        private ButtonAction action;

        public ConfigurableButton(String text, ButtonAction action) {
            super(text);
            this.action = action;
            addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    action.execute();
                }
            });
        }

        public void setAction(ButtonAction action) {
            this.action = action;
        }

        public static void main(String[] args) {
            javax.swing.JFrame frame = new javax.swing.JFrame("OCP Example Extended");
            frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
            frame.setLayout(new java.awt.FlowLayout());


            ButtonAction printAction = new PrintMessageAction("Button 1 Clicked!");
            ConfigurableButton button1 = new ConfigurableButton("Button 1", printAction);

            ButtonAction dialogAction = new ShowDialogAction("Button 2 Clicked!");
            ConfigurableButton button2 = new ConfigurableButton("Button 2", dialogAction);

            ButtonAction logAction = new LogMessageAction("Button 3 Clicked!", "button_log.txt");
            ConfigurableButton button3 = new ConfigurableButton("Button 3", logAction);


            frame.getContentPane().add(button1);
            frame.getContentPane().add(button2);
            frame.getContentPane().add(button3);
            frame.pack();
            frame.setVisible(true);
        }
    }
    ```

3.  **LSP:**  Consider a `SpecialButton` class that extends `JButton`.  This `SpecialButton` is *only* enabled on Wednesdays.  Does this violate LSP? Explain.

    **Answer:** Yes, this likely violates LSP.  While a `JButton` can be enabled or disabled, a fundamental expectation is that when it *is* enabled, it's clickable.  If `SpecialButton` is enabled on a Wednesday but functions normally, and disabled all other days, it's *probably* acceptable. However, if `SpecialButton`'s `setEnabled(true)` method only *appears* to enable the button (e.g., changing its visual appearance to indicate it's enabled) but the button is still unresponsive to clicks, it's a clear violation of LSP.  Clients expect an enabled button to be clickable.  The unexpected behavior deviates from the standard contract of `JButton`.

4.  **ISP:** A button class has methods to handle both click events and double-click events.  Explain how ISP could be applied to improve the design.

    **Answer:** Apply ISP by creating separate interfaces: `ClickActionListener` for single clicks and `DoubleClickListener` for double clicks.  The button class would then have methods to register listeners for each event type independently: `addClickActionListener()` and `addDoubleClickListener()`. This way, components that only need to handle single clicks don't need to implement the `DoubleClickListener` interface (and vice-versa).

5.  **DIP:** Provide an example of how you could use DIP to decouple a button's UI from its event handling logic.

    **Answer:**  Create an interface (e.g., `ButtonClickHandler`).  The button class (the UI element) depends on this interface.  Implementations of `ButtonClickHandler` (e.g., `OrderButtonHandler`, `ReportButtonHandler`) contain the specific event handling logic.  The button is configured with an instance of a `ButtonClickHandler`. This allows you to change the button's behavior simply by providing a different `ButtonClickHandler` implementation, without modifying the button class itself.  See the OCP and SRP examples for similar illustrations.

## 8. Important Points to Remember

*   **SOLID Principles are Guidelines:** They are not rigid rules.  Apply them judiciously based on the specific context of your application.

*   **Trade-offs:**  Applying SOLID principles often involves writing more code upfront.  Consider the long-term maintainability and extensibility benefits against the initial development effort.

*   **Context Matters:** What constitutes "good" design is subjective and depends on the specific requirements and constraints of the project.

*   **Start Small:** Focus on applying SOLID principles to the most critical and complex parts of your application first.

*   **Iterative Refactoring:** You don't have to design everything perfectly from the beginning.  You can refactor existing code to adhere to SOLID principles as your understanding of the application evolves.

*   **Swing and SOLID:**  While Swing's event handling mechanisms can sometimes make direct application of SOLID challenging, understanding the principles will guide you to better designs.
