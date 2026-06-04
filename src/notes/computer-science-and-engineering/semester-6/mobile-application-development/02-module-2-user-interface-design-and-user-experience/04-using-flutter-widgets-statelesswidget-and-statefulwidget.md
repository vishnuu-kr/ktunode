---
title: "Using Flutter Widgets: StatelessWidget and StatefulWidget"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 2: User Interface Design and User Experience:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bdd8"
status: "completed"
scrapedAt: "2026-05-20T16:55:25.152Z"
---
# Mobile Application Development: Module 2 - User Interface Design and User Experience
## Topic: Using Flutter Widgets: StatelessWidget and StatefulWidget

**Description:** Understanding and utilizing StatelessWidget and StatefulWidget, the fundamental building blocks of Flutter UIs.

**Learning Outcomes:**

*   Understand the core difference between StatelessWidget and StatefulWidget.
*   Identify scenarios where StatelessWidget and StatefulWidget are appropriate.
*   Implement simple UIs using StatelessWidget.
*   Implement simple UIs using StatefulWidget and manage their state.
*   Explain the lifecycle methods associated with StatefulWidgets.
*   Explain the concept of immutability in the context of StatelessWidget.

---

### 1. Core Difference Between StatelessWidget and StatefulWidget

*   **StatelessWidget:**
    *   A widget that describes a part of the user interface by building a constellation of other widgets that describe the user interface more concretely.
    *   **Immutable:**  StatelessWidgets don't have any internal state that changes during the widget's lifetime.  Their appearance and behavior are determined solely by the constructor arguments they receive (i.e., the properties passed to them when they are created).
    *   They rebuild only when their parent widget rebuilds and provides them with new configuration data.
    *   Use for displaying static content, layouts, and widgets that don't require interaction or dynamic updates.
    *   Implements the `build()` method which describes how to create the UI.

*   **StatefulWidget:**
    *   A widget that has mutable state.
    *   **Mutable:**  StatefulWidgets can change their internal state during their lifetime. This state drives the visual output and behavior of the widget.  Changes in state trigger a rebuild of the widget.
    *   Manages its own state using a separate `State` object.
    *   Use for displaying dynamic content, handling user input, and updating the UI based on user actions or external events.
    *   Has two main classes:
        *   `StatefulWidget` class itself: defines the interface for the widget. It contains only a `createState()` method.
        *   `State` class:  Manages the mutable state of the widget. It contains the `build()` method, lifecycle methods (initState, dispose, didUpdateWidget), and any necessary state variables.

**Analogy:**

Think of a StatelessWidget like a read-only document.  You can view it, but you can't modify it directly.  A StatefulWidget, on the other hand, is like an editable document.  You can make changes to it, and those changes are reflected in the display.

### 2. Scenarios for StatelessWidget and StatefulWidget

*   **StatelessWidget Scenarios:**
    *   Displaying static text (e.g., labels, headings).
    *   Displaying an image that doesn't change.
    *   Creating a container with fixed dimensions and styling.
    *   Laying out other widgets (e.g., using `Row`, `Column`, `Stack`).
    *   Displaying data that is passed in and doesn't change (e.g., displaying a user's name from a profile object).

*   **StatefulWidget Scenarios:**
    *   Buttons that change appearance when pressed.
    *   Text fields where users can enter text.
    *   Checkboxes that can be checked or unchecked.
    *   Sliders that allow users to select a value.
    *   Animations that change over time.
    *   Fetching data from an API and displaying it.
    *   Any widget that needs to update its UI based on user interactions or external events.

### 3. Implementing UIs using StatelessWidget

```dart
import 'package:flutter/material.dart';

class MyStatelessWidget extends StatelessWidget {
  final String title;
  final String message;

  MyStatelessWidget({required this.title, required this.message});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 8.0),
          Text(
            message,
            style: TextStyle(fontSize: 16.0),
          ),
        ],
      ),
    );
  }
}

// Example usage:
void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Stateless Widget Example')),
        body: MyStatelessWidget(
          title: 'Welcome!',
          message: 'This is a simple StatelessWidget example.',
        ),
      ),
    ),
  );
}
```

**Explanation:**

*   `MyStatelessWidget` extends `StatelessWidget`.
*   It takes `title` and `message` as constructor parameters. These are final and immutable.
*   The `build()` method returns a `Container` widget containing a `Column` with a `Text` widget for the title and another for the message.
*   The data displayed is determined solely by the constructor parameters. It will not change during the app's execution (unless the parent widget rebuilds and passes in different values).

### 4. Implementing UIs using StatefulWidget and Managing State

```dart
import 'package:flutter/material.dart';

class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _counter = 0;  // This is the state variable

  void _incrementCounter() {
    setState(() {
      _counter++; // Increment the counter
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'You have pushed the button this many times:',
          ),
          Text(
            '$_counter',
            style: Theme.of(context).textTheme.headlineMedium,
          ),
          ElevatedButton(
            onPressed: _incrementCounter,
            child: Text('Increment'),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Stateful Widget Example')),
        body: MyStatefulWidget(),
      ),
    ),
  );
}
```

**Explanation:**

*   `MyStatefulWidget` extends `StatefulWidget`. It's responsible for creating the `State` object.
*   `_MyStatefulWidgetState` extends `State<MyStatefulWidget>`. It manages the state of the widget.  Notice the underscore prefix, making this class private.
*   `_counter` is a state variable. Its value changes during the widget's lifetime.
*   `_incrementCounter()` is a method that updates the `_counter` state.
*   `setState(() { ... });` is crucial.  Calling `setState` informs Flutter that the state has changed.  This triggers a rebuild of the widget (by calling the `build()` method again) with the updated state, causing the UI to update.  **Important: Only call `setState` when you want to trigger a UI update.**
*   The `build()` method displays the current value of `_counter` and a button that calls `_incrementCounter()`.

### 5. Lifecycle Methods of StatefulWidget

StatefulWidgets have lifecycle methods that are called at different stages of their existence. Understanding these methods is crucial for managing resources and performing actions at the appropriate times.

*   **`initState()`:**
    *   Called only **once** when the `State` object is created.
    *   Use for initializing state variables, subscribing to streams, or performing one-time setup tasks.
    *   `super.initState()` should always be called first.

    ```dart
    @override
    void initState() {
      super.initState();
      // Initialize state here
      _timer = Timer.periodic(Duration(seconds: 1), (Timer timer) {
        setState(() {
          _currentTime = DateTime.now();
        });
      });
    }
    ```

*   **`didChangeDependencies()`:**
    *   Called after `initState()` and whenever the dependencies of the `State` object change.
    *   Dependencies include `InheritedWidget`s that the widget relies on.  For instance, themes and locales are dependencies.
    *   Use to update the state based on changes in dependencies.

    ```dart
    @override
    void didChangeDependencies() {
      super.didChangeDependencies();
      // Update state based on inherited widgets (e.g., Theme)
      _currentTheme = Theme.of(context);
    }
    ```

*   **`build()`:**
    *   Called whenever the widget needs to be rebuilt (e.g., after `initState()`, `setState()`, or `didUpdateWidget()`).
    *   **Must** return a widget that describes the UI.
    *   Should be a pure function of the state (i.e., it should produce the same output for the same state).
    *   Avoid performing expensive operations or side effects within the `build()` method.

*   **`didUpdateWidget(covariant MyStatefulWidget oldWidget)`:**
    *   Called when the parent widget rebuilds and passes a new `MyStatefulWidget` instance to this widget.
    *   Provides access to the `oldWidget` instance, allowing you to compare the new and old configurations and update the state accordingly.
    *   Use to react to changes in the widget's configuration.

    ```dart
    @override
    void didUpdateWidget(covariant MyStatefulWidget oldWidget) {
      super.didUpdateWidget(oldWidget);
      if (widget.someProperty != oldWidget.someProperty) {
        // Update state based on the new property value
        setState(() {
          _myValue = widget.someProperty;
        });
      }
    }
    ```

*   **`deactivate()`:**
    *   Called when the widget is removed from the widget tree but might be reinserted later (e.g., when navigating between pages).
    *   Use to unsubscribe from streams or dispose of resources that are not needed while the widget is inactive.
    *   However, you might need to re-subscribe or re-initialize them if the widget is reinserted.

    ```dart
    @override
    void deactivate() {
      super.deactivate();
      // Unsubscribe from streams or pause operations
    }
    ```

*   **`dispose()`:**
    *   Called when the `State` object is permanently removed from the widget tree.  This is the LAST method called.
    *   Use to release any resources that the widget is holding, such as timers, streams, or listeners, to prevent memory leaks.
    *   `super.dispose()` should always be called last.

    ```dart
    @override
    void dispose() {
      _timer?.cancel(); // Cancel the timer
      super.dispose();
    }
    ```

### 6. Immutability in StatelessWidget

*   **Immutability:**  StatelessWidgets are immutable, meaning that their state cannot be changed after they are created.
*   **Importance:** This ensures that the widget remains consistent throughout its lifetime, simplifying debugging and improving performance.  Flutter can be more efficient in rebuilding only the widgets that have actually changed.
*   **How to Achieve Immutability:**
    *   Declare all fields in the widget as `final`.
    *   Initialize all fields in the constructor.
    *   Avoid using mutable objects (e.g., lists, maps) directly as fields. If you need to use mutable data, create a copy of it before passing it to the widget.

**Example of a StatelessWidget with Immutability:**

```dart
class MyImmutableWidget extends StatelessWidget {
  final String name;
  final int age;
  final List<String> hobbies; // Be cautious with mutable types

  MyImmutableWidget({required this.name, required this.age, required List<String> hobbies}) : this.hobbies = List.unmodifiable(hobbies); // Create an unmodifiable copy

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Name: $name'),
        Text('Age: $age'),
        Text('Hobbies: ${hobbies.join(', ')}'),
      ],
    );
  }
}

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Immutable Stateless Widget')),
        body: MyImmutableWidget(name: "Alice", age: 30, hobbies: ["Reading", "Hiking"]),
      ),
    ),
  );
}
```

In the example above, `hobbies` is defensively copied using `List.unmodifiable()` to ensure immutability. While the *reference* to the `List` is final, if the list itself could be modified, it would violate the principle of immutability.

---

### Practice Questions/Exercises:

1.  **What is the key difference between a StatelessWidget and a StatefulWidget?**
    *   **Answer:** A StatelessWidget is immutable and does not have internal state that can change, while a StatefulWidget has mutable state managed by a `State` object.

2.  **Give an example of a UI element that would be best implemented as a StatelessWidget and one that would be best implemented as a StatefulWidget.**
    *   **Answer:** A static label is a good example of a StatelessWidget.  A button that changes its appearance when pressed is a good example of a StatefulWidget.

3.  **Write a StatelessWidget that displays a greeting message using data passed to it as constructor parameters. The message should be centered on the screen.**
    ```dart
    import 'package:flutter/material.dart';

    class GreetingWidget extends StatelessWidget {
      final String name;

      GreetingWidget({required this.name});

      @override
      Widget build(BuildContext context) {
        return Center(
          child: Text(
            'Hello, $name!',
            style: TextStyle(fontSize: 24.0),
          ),
        );
      }
    }
    ```

4.  **Write a StatefulWidget that displays a number and a button. When the button is pressed, the number should increment. Use the `setState()` method to trigger a UI update.**

    ```dart
    import 'package:flutter/material.dart';

    class CounterWidget extends StatefulWidget {
      @override
      _CounterWidgetState createState() => _CounterWidgetState();
    }

    class _CounterWidgetState extends State<CounterWidget> {
      int _count = 0;

      void _incrementCount() {
        setState(() {
          _count++;
        });
      }

      @override
      Widget build(BuildContext context) {
        return Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count: $_count'),
            ElevatedButton(
              onPressed: _incrementCount,
              child: Text('Increment'),
            ),
          ],
        );
      }
    }
    ```

5.  **Explain the purpose of the `setState()` method and why it's crucial when working with StatefulWidgets.**
    *   **Answer:** `setState()` informs Flutter that the state of the widget has changed.  It triggers a rebuild of the widget, causing the UI to update with the new state. Without `setState()`, the UI would not reflect the changes in the state.

6.  **Describe the lifecycle methods of a StatefulWidget and their purpose.  When would you use `dispose()`?**
    *   **Answer:** Refer to section 5 above. `dispose()` is used to release resources like timers, streams, and listeners to prevent memory leaks when the widget is permanently removed from the widget tree.

7.  **Why is immutability important for StatelessWidget?**
    *   **Answer:** Immutability in StatelessWidget ensures consistency, simplifies debugging, and improves performance by allowing Flutter to optimize rebuilds.

---

### Important Points to Remember:

*   Choose the right widget type (StatelessWidget or StatefulWidget) based on whether the widget needs to manage its own state.
*   Use `setState()` to trigger UI updates in StatefulWidgets.
*   Understanding the lifecycle methods of StatefulWidgets is crucial for managing resources and performing actions at the appropriate times.
*   Strive for immutability in StatelessWidgets to improve performance and maintain consistency.
*   Always dispose of resources in the `dispose()` method to prevent memory leaks.
*   `StatelessWidget` should only be used when a widget does *not* need to change its state during its lifetime. Even something that *seems* like it wouldn't change, like a formatted date, might need to be in a `StatefulWidget` if the format needs to change based on user preferences retrieved later.
