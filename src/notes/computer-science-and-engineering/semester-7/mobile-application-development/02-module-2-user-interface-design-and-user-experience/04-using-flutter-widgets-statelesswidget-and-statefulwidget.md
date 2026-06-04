---
title: "Using Flutter Widgets: StatelessWidget and StatefulWidget"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 2: User Interface Design and User Experience:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c980"
status: "completed"
scrapedAt: "2026-05-20T17:08:35.006Z"
---
# Mobile Application Development: Module 2 - User Interface Design & User Experience

## Topic: Using Flutter Widgets: StatelessWidget and StatefulWidget

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Distinguish** between `StatelessWidget` and `StatefulWidget` in Flutter.
*   **Explain** the lifecycle of a `StatefulWidget`.
*   **Create** and **use** `StatelessWidget`s for static UI elements.
*   **Create** and **use** `StatefulWidget`s for dynamic UI elements.
*   **Understand** how state management works with `StatefulWidget`s.
*   **Implement** basic UI elements using both widget types.

### 2. Key Concepts and Definitions

#### 2.1 What are Flutter Widgets?

*   **Core Building Blocks:** In Flutter, everything is a widget! This includes the structure of your app (like `MaterialApp` or `CupertinoApp`), layouts (`Row`, `Column`, `Stack`), user interface elements (`Text`, `Image`, `Button`), and even conceptual things like padding (`Padding`) or alignment (`Align`).
*   **Declarative UI:** Flutter uses a declarative UI paradigm. You describe what your UI *should* look like given a certain state, and Flutter handles the efficient updating of the UI when the state changes.
*   **Composition:** Widgets are composed together to build complex UIs. A widget can contain other widgets.

#### 2.2 StatelessWidget

*   **Definition:** A `StatelessWidget` is a widget that describes part of your user interface which **does not depend on anything other than the configuration information it receives at the time it is created**.
*   **Immutability:** The properties of a `StatelessWidget` are immutable. Once created, its configuration cannot change.
*   **Rebuild:** A `StatelessWidget` can be rebuilt if its parent widget rebuilds and provides it with new configuration data. However, the widget itself cannot trigger its own rebuild.
*   **When to Use:**
    *   UI elements that are static and never change (e.g., a static title, a fixed logo, an icon that doesn't change based on app state).
    *   Widgets that only display data passed down from their parent.

#### 2.3 StatefulWidget

*   **Definition:** A `StatefulWidget` is a widget that describes a part of the user interface which can **change dynamically over time**.
*   **Mutability:** `StatefulWidget`s are mutable because they can have associated mutable state.
*   **State Object:** A `StatefulWidget` itself is immutable. It's the associated `State` object that holds the mutable state and can be rebuilt.
*   **Lifecycle:** `StatefulWidget`s have a lifecycle, which allows you to perform actions at different stages of the widget's existence (creation, initialization, updating, disposal).
*   **When to Use:**
    *   UI elements that need to change based on user interaction (e.g., checkboxes, sliders, text fields).
    *   Widgets that need to fetch data from the internet and update the UI accordingly.
    *   Animations.
    *   Any widget where the UI appearance depends on internal data that can change.

### 3. Core Difference: StatelessWidget vs. StatefulWidget

| Feature         | StatelessWidget                               | StatefulWidget                                           |
| :-------------- | :-------------------------------------------- | :------------------------------------------------------- |
| **Mutability**  | Immutable (properties cannot change)          | Mutable (can have mutable state)                         |
| **State**       | Does not manage internal state                | Manages mutable state                                    |
| **Rebuilding**  | Rebuilt when parent rebuilds with new config. | Can trigger its own rebuild using `setState()`           |
| **Complexity**  | Simpler, less overhead                        | More complex due to state management and lifecycle       |
| **Use Cases**   | Static UI, display-only elements              | Dynamic UI, interactive elements, data-driven UI         |
| **Implementation** | `build()` method                              | `createState()` method returning a `State` object        |

### 4. Creating and Using StatelessWidget

*   **Structure:** A `StatelessWidget` typically has a single method: `build()`.
*   **`build()` Method:** This method describes the part of the user interface represented by this widget. It returns a widget tree.

#### Example: A Simple "Hello World" Text Widget

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Stateless Widget Example',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello World'),
        ),
        body: Center(
          // Our StatelessWidget
          child: GreetingWidget(name: "Flutter Developer"),
        ),
      ),
    );
  }
}

// Our custom StatelessWidget
class GreetingWidget extends StatelessWidget {
  final String name; // This is a configuration property passed from the parent

  // Constructor that takes the 'name'
  const GreetingWidget({Key? key, required this.name}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // The UI description, uses the 'name' property
    return Text(
      'Hello, $name!',
      style: TextStyle(fontSize: 24.0),
    );
  }
}
```

**Explanation:**

1.  `MyApp` is a `StatelessWidget` that sets up the basic app structure.
2.  `GreetingWidget` is another `StatelessWidget`.
3.  It has a `name` property that is passed from `MyApp`. This `name` is final, meaning it cannot be changed after `GreetingWidget` is created.
4.  The `build` method of `GreetingWidget` returns a `Text` widget that displays "Hello, \[name]!".
5.  If `MyApp` rebuilds and passes a different `name` to `GreetingWidget`, `GreetingWidget` will rebuild and display the new name. However, `GreetingWidget` itself cannot decide to change its own display content without being rebuilt by its parent.

### 5. Creating and Using StatefulWidget

*   **Structure:** A `StatefulWidget` requires two classes:
    1.  The `StatefulWidget` itself (which is immutable).
    2.  A `State` object (which is mutable and holds the state).
*   **`createState()` Method:** The `StatefulWidget` class must override the `createState()` method, which returns an instance of the associated `State` object.
*   **`State` Object:**
    *   Contains the mutable state.
    *   Has a `build()` method that describes the UI based on the current state.
    *   Uses `setState(() {})` to notify the Flutter framework that the internal state has changed, triggering a rebuild of the widget.

#### 5.1 StatefulWidget Lifecycle

Understanding the lifecycle is crucial for managing state and resources effectively.

*   **`createState()`:**
    *   Called when the widget is first created.
    *   Its only job is to create and return a `State` object for this widget.
*   **`initState()`:**
    *   Called **once** when the `State` object is first created.
    *   Ideal place to initialize mutable state, subscriptions, or listeners.
    *   Must call `super.initState()`.
*   **`didChangeDependencies()`:**
    *   Called after `initState()` and whenever the dependencies of the widget change (e.g., when a `Provider`'s value changes).
    *   Useful for reacting to changes in `InheritedWidget`s.
    *   Can be called multiple times.
*   **`build()`:**
    *   Called whenever the UI needs to be rendered.
    *   This can happen initially, after `initState()`, after `didChangeDependencies()`, or after `setState()` is called.
    *   It returns the widget tree representing the current UI state.
*   **`didUpdateWidget(covariant OldWidget oldWidget)`:**
    *   Called when the parent widget rebuilds and provides a new configuration for this widget (i.e., the `widget` property of the `State` object is updated).
    *   Useful for reacting to changes in the widget's configuration.
    *   Must call `super.didUpdateWidget(oldWidget)`. Often used to update the state based on the new widget properties.
*   **`setState(VoidCallback fn)`:**
    *   **Key to reactivity!**
    *   This method marks the `State` object as "dirty" and schedules a rebuild of the widget.
    *   The `fn` callback is where you update your mutable state variables.
*   **`dispose()`:**
    *   Called when the `State` object is permanently removed from the widget tree.
    *   Ideal place to cancel timers, unsubscribe from streams, or dispose of any resources allocated in `initState()`.
    *   Must call `super.dispose()`.
*   **`deactivate()`:**
    *   Called when the `State` object is removed from the tree, but its `State` object might be reinserted elsewhere in the tree.
    *   Less common to override than `dispose()`.

#### Example: A Counter App

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Stateful Widget Example',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Counter App'),
        ),
        body: Center(
          // Our StatefulWidget
          child: CounterWidget(),
        ),
      ),
    );
  }
}

// The StatefulWidget itself (immutable)
class CounterWidget extends StatefulWidget {
  // No mutable state here. Configuration is passed to the State object.
  const CounterWidget({Key? key}) : super(key: key);

  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

// The State object (mutable)
class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0; // Mutable state variable

  @override
  void initState() {
    super.initState();
    print('CounterWidgetState: initState called');
    // Initialize state here if needed.
  }

  void _incrementCounter() {
    // Use setState to update the state and trigger a rebuild
    setState(() {
      _counter++;
      print('Counter incremented to: $_counter');
    });
  }

  @override
  Widget build(BuildContext context) {
    print('CounterWidgetState: build called');
    // UI described based on the current state (_counter)
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          'You have pushed the button this many times:',
        ),
        Text(
          '$_counter', // Displays the current state
          style: Theme.of(context).textTheme.headlineMedium,
        ),
        SizedBox(height: 20),
        ElevatedButton(
          onPressed: _incrementCounter, // Call the method to update state
          child: Text('Increment'),
        ),
      ],
    );
  }

  @override
  void dispose() {
    print('CounterWidgetState: dispose called');
    // Clean up any resources here
    super.dispose();
  }
}
```

**Explanation:**

1.  `CounterWidget` is the `StatefulWidget`. It has no internal state of its own.
2.  `_CounterWidgetState` is the associated `State` object. It holds the `_counter` variable, which is mutable.
3.  `createState()` in `CounterWidget` returns an instance of `_CounterWidgetState`.
4.  `initState()` is called once when `_CounterWidgetState` is created.
5.  The `build()` method in `_CounterWidgetState` displays the current value of `_counter`.
6.  When the `ElevatedButton` is pressed, `_incrementCounter()` is called.
7.  `_incrementCounter()` calls `setState(() { _counter++; })`. This updates the `_counter` variable and tells Flutter to rebuild the widget.
8.  The `build()` method is called again, and this time it displays the updated `_counter` value.

#### 5.2 Example demonstrating `didUpdateWidget`

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _appStateCounter = 0;

  void _incrementAppState() {
    setState(() {
      _appStateCounter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DidUpdateWidget Example',
      home: Scaffold(
        appBar: AppBar(
          title: Text('DidUpdateWidget Demo'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // We pass a 'value' down to the child StatefulWidget
              WidgetWithDidUpdate(value: _appStateCounter),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: _incrementAppState,
                child: Text('Increment App State'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class WidgetWithDidUpdate extends StatefulWidget {
  final int value; // This value comes from the parent

  const WidgetWithDidUpdate({Key? key, required this.value}) : super(key: key);

  @override
  _WidgetWithDidUpdateState createState() => _WidgetWithDidUpdateState();
}

class _WidgetWithDidUpdateState extends State<WidgetWithDidUpdate> {
  int _localState = 0;

  @override
  void initState() {
    super.initState();
    print('WidgetWithDidUpdateState: initState. Initial value: ${widget.value}');
    _localState = widget.value * 2; // Initialize local state based on initial value
  }

  @override
  void didUpdateWidget(covariant WidgetWithDidUpdate oldWidget) {
    super.didUpdateWidget(oldWidget);
    print('WidgetWithDidUpdateState: didUpdateWidget. Old value: ${oldWidget.value}, New value: ${widget.value}');
    // React to the new widget configuration.
    // If the 'value' prop changes, we might want to update our local state.
    if (widget.value != oldWidget.value) {
      setState(() {
        _localState = widget.value * 2; // Update local state based on new value
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    print('WidgetWithDidUpdateState: build. Current local state: $_localState');
    return Text('Value: ${widget.value}, Local State: $_localState');
  }
}
```

**Explanation:**

1.  `MyApp` manages an `_appStateCounter`.
2.  `MyApp` renders `WidgetWithDidUpdate` and passes `_appStateCounter` as the `value` prop.
3.  `WidgetWithDidUpdate`'s `initState` initializes its `_localState` based on the initial `value`.
4.  When the "Increment App State" button is pressed in `MyApp`, `_appStateCounter` increments.
5.  This causes `MyApp` to rebuild, which in turn rebuilds `WidgetWithDidUpdate` with the new `value`.
6.  The `didUpdateWidget` method in `_WidgetWithDidUpdateState` is called. It detects that `widget.value` has changed from `oldWidget.value`.
7.  Inside `didUpdateWidget`, `setState` is called to update `_localState` based on the new `widget.value`.
8.  The `build` method is then called again, showing the updated `value` and the recalculated `_localState`.

### 6. Practice Questions/Exercises

**Question 1:**

Which type of widget in Flutter is immutable and describes UI elements that do not change based on internal state?

a) `StatefulWidget`
b) `StatelessWidget`
c) `AbstractWidget`
d) `ConstantWidget`

**Answer:** b) `StatelessWidget`

**Question 2:**

You are building a Flutter application that displays a user's profile picture and name. The profile picture and name are fetched from an API once when the screen loads and do not change after that. Which type of widget would be most appropriate for displaying this information?

a) `StatefulWidget`
b) `StatelessWidget`
c) A `StatefulWidget` with a `State` object that never calls `setState()`.
d) A custom widget that extends `RenderObjectWidget`.

**Answer:** b) `StatelessWidget`

**Question 3:**

What is the primary purpose of the `setState()` method in a `StatefulWidget`?

a) To permanently dispose of the widget.
b) To update the widget's configuration from its parent.
c) To signal to the Flutter framework that the internal state has changed and the widget needs to be rebuilt.
d) To initialize the widget's state for the first time.

**Answer:** c) To signal to the Flutter framework that the internal state has changed and the widget needs to be rebuilt.

**Question 4:**

Consider the following Flutter code snippet:

```dart
class MyButton extends StatelessWidget {
  final VoidCallback onPressed;

  const MyButton({Key? key, required this.onPressed}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed, // This 'onPressed' is provided by the parent
      child: Text('Click Me'),
    );
  }
}
```

If `MyButton` is used in a `StatelessWidget` and the parent widget rebuilds with a different callback function for `onPressed`, what will happen?

a) `MyButton` will throw an error because it's a `StatelessWidget`.
b) `MyButton` will rebuild with the new `onPressed` callback.
c) `MyButton` will not rebuild, and the old callback will persist.
d) The `onPressed` callback will not be able to be changed once `MyButton` is created.

**Answer:** b) `MyButton` will rebuild with the new `onPressed` callback. (The `onPressed` parameter is effectively a configuration value passed down, and if it changes, `MyButton` rebuilds to use the new one.)

**Question 5 (Hands-on Exercise):**

Create a simple Flutter application with a `StatefulWidget` that displays a `Checkbox`.

*   The `Checkbox` should have a boolean state variable (e.g., `isChecked`).
*   Initially, the `Checkbox` should be unchecked.
*   When the `Checkbox` is tapped, its state (`isChecked`) should toggle (from false to true, or true to false).
*   The `Checkbox` should visually reflect its current state.
*   Display some text next to the checkbox that changes based on its state (e.g., "Option is ON" or "Option is OFF").

**Hint:** You will need a `StatefulWidget` and its `State` object. The `State` object will hold the `isChecked` boolean. Use `setState()` within the `onChanged` callback of the `Checkbox` to update `isChecked` and trigger a rebuild.

---

### 7. Important Points to Remember

*   **Choose Wisely:** Use `StatelessWidget` for UI that doesn't change on its own. Use `StatefulWidget` when your UI needs to be dynamic or react to user input or other events.
*   **`setState()` is Key:** For `StatefulWidget`s, `setState()` is the mechanism to update the state and trigger a UI rebuild.
*   **Widget Lifecycle:** Understand the `StatefulWidget` lifecycle methods (`initState`, `build`, `dispose`, `didUpdateWidget`) to manage state and resources correctly.
*   **Composition:** Build complex UIs by composing smaller, reusable widgets. You can have `StatelessWidget`s inside `StatefulWidget`s and vice versa.
*   **Immutability:** Always strive for immutability where possible. `StatelessWidget`s are immutable by design. For `StatefulWidget`s, the `StatefulWidget` itself is immutable; only its `State` object is mutable.
*   **Readability:** Keep your `build` methods clean. If a `build` method becomes too complex, consider extracting parts of it into separate, smaller widgets (often `StatelessWidget`s).
*   **Performance:** While Flutter is efficient, avoid unnecessary `setState()` calls or complex computations directly within `build` methods.

---
