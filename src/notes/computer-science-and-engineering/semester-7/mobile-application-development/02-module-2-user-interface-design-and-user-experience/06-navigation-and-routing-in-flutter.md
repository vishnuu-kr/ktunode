---
title: "Navigation and Routing in Flutter"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 2: User Interface Design and User Experience:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c982"
status: "completed"
scrapedAt: "2026-05-20T17:08:36.389Z"
---
# Mobile Application Development: Module 2 - User Interface Design and User Experience

## Topic: Navigation and Routing in Flutter

---

This module explores how users move through your Flutter application and how different screens are managed. Effective navigation is crucial for a positive user experience.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   **Understand the concepts of navigation and routing in mobile applications.**
*   **Differentiate between declarative and imperative navigation in Flutter.**
*   **Implement basic navigation between routes using `Navigator` widget.**
*   **Pass data between routes.**
*   **Handle navigation with arguments and return values.**
*   **Explore named routes for managing complex navigation flows.**
*   **Understand and implement advanced navigation techniques like parameterized routes and route generation.**
*   **Be aware of best practices for navigation design.**

---

### 1. Understanding Navigation and Routing

#### Key Concepts:

*   **Navigation:** The process of moving from one screen (or page) to another within a mobile application.
*   **Routing:** The mechanism by which the application determines which screen to display based on a given path or identifier.
*   **Route:** A specific screen or page within your application that can be navigated to. In Flutter, routes are typically represented by `Route` objects or by `Widget`s themselves.

#### Importance:

*   **User Experience:** Intuitive and predictable navigation makes it easy for users to find what they need and complete tasks.
*   **App Structure:** Well-defined routing helps organize your application's screens and manage their lifecycles.
*   **Maintainability:** A structured approach to navigation simplifies code management and updates.

---

### 2. Declarative vs. Imperative Navigation

#### Declarative Navigation:

*   **Concept:** In declarative navigation, you describe the desired state of your UI, and Flutter rebuilds the UI to match that state. This means you declare which widget should be visible, and Flutter handles the transitions.
*   **Flutter's Approach:** Flutter's widget-based architecture inherently lends itself to declarative UI. When you push a new route, you're essentially telling Flutter to make a new widget visible on top of the current one.
*   **Example:** Using `setState` to toggle the visibility of a widget, or pushing a new route using `Navigator.push`.

#### Imperative Navigation:

*   **Concept:** In imperative navigation, you explicitly tell the system what to do, step-by-step. This often involves calling methods to perform specific actions.
*   **Flutter's Approach:** While Flutter is declarative at its core, the `Navigator` widget provides imperative methods to control navigation (e.g., `Navigator.push`, `Navigator.pop`). You are imperatively *telling* the navigator to perform an action.
*   **Key Difference:** Declarative focuses on *what* state you want, while imperative focuses on *how* to get there. In Flutter, you often use imperative methods to achieve a declarative UI state.

---

### 3. Basic Navigation with `Navigator` Widget

The `Navigator` widget is the primary tool for managing navigation in Flutter. It maintains a stack of routes.

#### Key Methods:

*   **`Navigator.push(BuildContext context, Route<dynamic> route)`:**
    *   Pushes a new route onto the navigation stack, bringing a new screen to the front.
    *   `context`: The `BuildContext` of the widget that initiates the navigation.
    *   `route`: The `Route` object representing the screen to navigate to.
*   **`Navigator.pop(BuildContext context, [dynamic result])`:**
    *   Pops the current route off the navigation stack, returning to the previous screen.
    *   `result`: An optional value that can be returned to the previous route.

#### Creating a Simple Navigation Flow:

Let's say we have two screens: `HomeScreen` and `DetailScreen`.

**`home_screen.dart`:**

```dart
import 'package:flutter/material.dart';
import 'detail_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate to the DetailScreen
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => DetailScreen()),
            );
          },
          child: Text('Go to Detail Screen'),
        ),
      ),
    );
  }
}
```

**`detail_screen.dart`:**

```dart
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detail Screen'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Go back to the previous screen
            Navigator.pop(context);
          },
          child: Text('Go Back'),
        ),
      ),
    );
  }
}
```

**`main.dart`:**

```dart
import 'package:flutter/material.dart';
import 'home_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Navigation Demo',
      home: HomeScreen(), // The initial screen
    );
  }
}
```

**Explanation:**

1.  **`MaterialPageRoute`:** This is a standard route implementation that uses platform-specific transitions (like a slide-in effect on Android). The `builder` function is responsible for creating the widget for the new route.
2.  **`Navigator.push`:** When the button on `HomeScreen` is pressed, `Navigator.push` is called with the `context` and a `MaterialPageRoute` that builds `DetailScreen`. This adds `DetailScreen` to the top of the navigation stack.
3.  **`Navigator.pop`:** When the button on `DetailScreen` is pressed, `Navigator.pop` is called, removing `DetailScreen` from the stack and returning to `HomeScreen`.

---

### 4. Passing Data Between Routes

Often, you need to send information from one screen to another.

#### Key Concepts:

*   **Arguments:** Data passed to a route when it's pushed.
*   **Constructor Parameters:** The most common way to pass data is by defining constructor parameters for your route's widget.

#### Example: Passing a Message to `DetailScreen`

Modify `detail_screen.dart` to accept an argument:

```dart
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  final String message; // Data to receive

  // Constructor that accepts the message
  DetailScreen({Key? key, required this.message}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detail Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Received Message: $message', // Display the message
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}
```

Modify `home_screen.dart` to pass the data:

```dart
import 'package:flutter/material.dart';
import 'detail_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate and pass data
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => DetailScreen(message: 'Hello from Home!'), // Pass the message
              ),
            );
          },
          child: Text('Go to Detail Screen'),
        ),
      ),
    );
  }
}
```

---

### 5. Handling Navigation with Arguments and Return Values

#### Returning Values from a Route:

You can send data back to the previous route when `Navigator.pop` is called.

#### Example: Returning a Selection from `DetailScreen`

Let's create a third screen, `SelectionScreen`, from which we'll select an option and return it to `HomeScreen`.

**`selection_screen.dart`:**

```dart
import 'package:flutter/material.dart';

class SelectionScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Select an Option'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                // Return 'Option 1' to the previous route
                Navigator.pop(context, 'Option 1');
              },
              child: Text('Choose Option 1'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Return 'Option 2' to the previous route
                Navigator.pop(context, 'Option 2');
              },
              child: Text('Choose Option 2'),
            ),
          ],
        ),
      ),
    );
  }
}
```

Modify `home_screen.dart` to initiate the selection and handle the returned value:

```dart
import 'package:flutter/material.dart';
import 'detail_screen.dart'; // Assuming DetailScreen is still used for a different purpose
import 'selection_screen.dart';

class HomeScreen extends StatefulWidget { // Changed to StatefulWidget to manage state
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _selectedOption = 'No option selected';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Selected Option: $_selectedOption',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                // Navigate to SelectionScreen and wait for a result
                final result = await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SelectionScreen()),
                );

                // Update the UI with the returned value
                if (result != null) {
                  setState(() {
                    _selectedOption = result;
                  });
                }
              },
              child: Text('Go to Selection Screen'),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Explanation:**

1.  **`async`/`await`:** We use `async` on the `onPressed` callback and `await` on `Navigator.push` because navigating to `SelectionScreen` is an asynchronous operation. The `await` keyword pauses the execution until `Navigator.pop` is called on `SelectionScreen`.
2.  **`Navigator.pop(context, 'Selected Value')`:** When `Navigator.pop` is called with a value, that value is returned.
3.  **`final result = await Navigator.push(...)`:** The returned value from `Navigator.pop` is assigned to the `result` variable.
4.  **`setState`:** We use `setState` to update the `_selectedOption` variable and trigger a UI rebuild, displaying the selected option.

---

### 6. Named Routes

As your application grows, managing navigation with `MaterialPageRoute` can become cumbersome. Named routes provide a more structured way to define and navigate between screens.

#### Key Concepts:

*   **Route Name:** A unique string identifier for a route (e.g., `'/home'`, `'/detail'`).
*   **`MaterialApp.routes`:** A map where you register your named routes.
*   **`Navigator.pushNamed(BuildContext context, String routeName, {Object? arguments})`:** Navigates to a route by its name.
*   **`Navigator.popAndRemoveUntil`:** A useful method to pop routes until a specific route is reached and removed.

#### Implementing Named Routes:

**`main.dart`:**

```dart
import 'package:flutter/material.dart';
import 'home_screen.dart';
import 'detail_screen.dart';
import 'selection_screen.dart'; // Assuming you still want to use it

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Navigation Demo',
      // Define named routes
      routes: {
        '/': (context) => HomeScreen(), // Home route
        '/detail': (context) => DetailScreen(message: 'Default Detail Message'), // A basic detail route
        '/selection': (context) => SelectionScreen(), // Selection route
      },
      // The initialRoute specifies which route to show when the app starts.
      // It must match one of the keys in the routes map.
      initialRoute: '/',
    );
  }
}
```

Modify `home_screen.dart` to use `pushNamed`:

```dart
import 'package:flutter/material.dart';
// import 'detail_screen.dart'; // No longer directly imported for navigation
// import 'selection_screen.dart'; // No longer directly imported for navigation

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _selectedOption = 'No option selected';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Selected Option: $_selectedOption',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                // Navigate to the detail screen using its name
                // Pass arguments using the arguments property
                final result = await Navigator.pushNamed(
                  context,
                  '/detail', // Route name for DetailScreen
                  arguments: 'Message from Home via Named Route', // Pass data as arguments
                );

                if (result != null) {
                  setState(() {
                    _selectedOption = result.toString(); // Ensure it's a string
                  });
                }
              },
              child: Text('Go to Detail Screen (Named)'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                final result = await Navigator.pushNamed(
                  context,
                  '/selection', // Route name for SelectionScreen
                );

                if (result != null) {
                  setState(() {
                    _selectedOption = result.toString();
                  });
                }
              },
              child: Text('Go to Selection Screen (Named)'),
            ),
          ],
        ),
      ),
    );
  }
}
```

Modify `detail_screen.dart` to receive arguments from `pushNamed`:

```dart
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  // The message will now come from ModalRoute.of(context)!.settings.arguments
  // We can provide a default or handle null case.
  // final String message;

  // DetailScreen({Key? key, required this.message}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Extract arguments passed via pushNamed
    final String message = ModalRoute.of(context)!.settings.arguments as String;

    return Scaffold(
      appBar: AppBar(
        title: Text('Detail Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Received Message: $message',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Go back and pass a return value
                Navigator.pop(context, 'Data from Detail!');
              },
              child: Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Explanation:**

1.  **`MaterialApp.routes`:** We define a `Map<String, WidgetBuilder>` where keys are route names and values are functions that build the corresponding widget.
2.  **`initialRoute`:** This property in `MaterialApp` tells Flutter which route to display first.
3.  **`Navigator.pushNamed(context, '/detail')`:** This tells the navigator to find the route named `'/detail'` in the `routes` map and display it.
4.  **`arguments`:** Data can be passed to named routes using the `arguments` parameter.
5.  **`ModalRoute.of(context)!.settings.arguments`:** To access the arguments passed to a route, you use `ModalRoute.of(context)!.settings.arguments`. The `!` asserts that `ModalRoute.of(context)` is not null, and we cast the arguments to the expected type.

---

### 7. Advanced Navigation Techniques

#### Parameterized Routes:

You can create routes that accept dynamic parameters. This is common for URLs.

**`main.dart` (add to `routes`):**

```dart
// ... inside MaterialApp's routes map
'/user?id=<userId>': (context) {
  final userId = ModalRoute.of(context)!.settings.arguments as String;
  return UserProfileScreen(userId: userId);
},
```

**`user_profile_screen.dart`:**

```dart
import 'package:flutter/material.dart';

class UserProfileScreen extends StatelessWidget {
  final String userId;

  UserProfileScreen({required this.userId});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Profile'),
      ),
      body: Center(
        child: Text('Profile for User ID: $userId'),
      ),
    );
  }
}
```

**Navigation from `HomeScreen`:**

```dart
// ... inside HomeScreen's onPressed
Navigator.pushNamed(context, '/user?id=123', arguments: '123');
```

**Note:** While you can define routes with placeholders like `/user/:id`, Flutter's `Navigator.pushNamed` doesn't directly support URL-like parameter parsing out-of-the-box. The common approach is to pass parameters via the `arguments` property and then extract them. For more advanced deep linking or URL-based navigation, you'd typically use packages like `go_router` or `auto_route`.

#### Route Generation:

For complex applications, manually defining every route in `MaterialApp.routes` can be tedious. Route generation allows you to dynamically create routes based on their names and arguments.

*   **`onGenerateRoute`:** A callback in `MaterialApp` that is called whenever `Navigator.pushNamed` is invoked.
*   **`RouteSettings`:** Provides the `name` and `arguments` of the route being requested.

**`main.dart` (replace `routes` with `onGenerateRoute`):**

```dart
import 'package:flutter/material.dart';
import 'home_screen.dart';
import 'detail_screen.dart';
import 'selection_screen.dart';
import 'user_profile_screen.dart'; // Import your UserProfileScreen

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Navigation Demo',
      // Use onGenerateRoute for dynamic route creation
      onGenerateRoute: (settings) {
        switch (settings.name) {
          case '/':
            return MaterialPageRoute(builder: (context) => HomeScreen());
          case '/detail':
            return MaterialPageRoute(
              builder: (context) => DetailScreen(message: settings.arguments as String? ?? 'Default Detail Message'),
            );
          case '/selection':
            return MaterialPageRoute(builder: (context) => SelectionScreen());
          // Example of a parameterized route
          case '/user':
            if (settings.arguments is String) {
              return MaterialPageRoute(
                builder: (context) => UserProfileScreen(userId: settings.arguments as String),
              );
            }
            // Handle invalid arguments or route
            return MaterialPageRoute(builder: (context) => ErrorScreen(errorMessage: 'Invalid arguments for user route'));
          default:
            // For unknown routes, return a MaterialPageRoute for an error screen
            return MaterialPageRoute(builder: (context) => ErrorScreen(errorMessage: 'Route not found: ${settings.name}'));
        }
      },
      // initialRoute is no longer strictly necessary if '/' is handled by onGenerateRoute
      // but can still be useful for initial route name checking.
      // initialRoute: '/',
    );
  }
}

// A simple error screen
class ErrorScreen extends StatelessWidget {
  final String errorMessage;
  ErrorScreen({required this.errorMessage});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Error')),
      body: Center(child: Text('Error: $errorMessage')),
    );
  }
}

// Assume DetailScreen is modified to accept arguments via constructor for onGenerateRoute
class DetailScreen extends StatelessWidget {
  final String message;

  DetailScreen({Key? key, required this.message}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detail Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Received Message: $message',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context, 'Data from Detail!');
              },
              child: Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Explanation of `onGenerateRoute`:**

1.  The `onGenerateRoute` callback receives `RouteSettings`, which contains the `name` of the route being requested and any `arguments` passed.
2.  A `switch` statement is used to match the `settings.name` to a known route.
3.  For each matched route, a `MaterialPageRoute` (or other `Route` types) is returned, building the appropriate widget and passing any necessary arguments through the `settings.arguments`.
4.  The `default` case handles any routes that are not explicitly defined, typically by returning an error screen.

**Navigation from `HomeScreen` (for parameterized route):**

```dart
// ... inside HomeScreen's onPressed
Navigator.pushNamed(context, '/user', arguments: 'User123');
```

**Key Benefit of Route Generation:**

*   **Centralized Route Management:** All route definitions and argument handling are in one place.
*   **Dynamic Routing:** Allows for complex routing logic, including deep linking and parameter parsing.
*   **Error Handling:** Easier to implement a fallback for unknown routes.

**Using Packages for Advanced Navigation:**

For more robust and feature-rich navigation, consider using packages like:

*   **`go_router`:** A declarative routing package for Flutter that leverages URLs.
*   **`auto_route`:** A code-generation-based routing package that simplifies route management.

---

### 8. Best Practices for Navigation Design

*   **Consistency:** Use the same navigation patterns throughout your app. For example, if you use a back button, ensure it's always in the same location.
*   **Clear Visual Hierarchy:** The way users navigate should reflect the information architecture of your app.
*   **Avoid Deep Nesting:** Deeply nested navigation can be confusing. Aim for flatter navigation structures where possible.
*   **Provide Feedback:** When a user navigates, provide visual feedback (e.g., loading indicators, screen transitions) to confirm the action.
*   **Use Native Patterns:** Familiarize yourself with platform-specific navigation conventions (e.g., bottom navigation bars on Android, drawer navigation on iOS) and adapt them appropriately.
*   **Handle Back Button:** Ensure the back button (physical or software) behaves as expected, returning users to the previous relevant screen.
*   **Deep Linking:** Implement deep linking to allow users to navigate directly to specific screens from external sources (e.g., notifications, web links).
*   **State Management:** Integrate navigation with your state management solution to ensure data consistency across screens.

---

### Practice Questions and Exercises

**Question 1:**

What is the primary widget in Flutter used for managing navigation and a stack of routes?
A) `Stack`
B) `ListView`
C) `Navigator`
D) `Scaffold`

**Question 2:**

Explain the difference between `Navigator.push` and `Navigator.pop`.

**Question 3:**

How do you pass data from `ScreenA` to `ScreenB` when using `Navigator.push`? Provide a code snippet.

**Question 4:**

What is the purpose of `MaterialApp.routes` or `MaterialApp.onGenerateRoute`?

**Question 5:**

Consider the following code:

```dart
Navigator.pushNamed(context, '/settings', arguments: {'theme': 'dark'});
```

How would you receive the `{'theme': 'dark'}` data in the `SettingsScreen` widget when using `onGenerateRoute`?

---

### Answers to Practice Questions

**Answer 1:**

C) `Navigator`

**Answer 2:**

*   **`Navigator.push(context, route)`:** Pushes a new route (screen) onto the top of the navigation stack, making it the currently visible screen.
*   **`Navigator.pop(context, [result])`:** Removes the current route from the top of the navigation stack, returning to the previous screen. An optional `result` can be passed back to the previous screen.

**Answer 3:**

You pass data to `ScreenB` by creating a constructor for `ScreenB` that accepts parameters and then instantiating `ScreenB` with that data when using `Navigator.push`.

**Code Snippet:**

**`screen_a.dart`:**
```dart
import 'package:flutter/material.dart';
import 'screen_b.dart';

class ScreenA extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Screen A')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => ScreenB(message: 'Hello from A!'), // Pass data here
              ),
            );
          },
          child: Text('Go to Screen B'),
        ),
      ),
    );
  }
}
```

**`screen_b.dart`:**
```dart
import 'package:flutter/material.dart';

class ScreenB extends StatelessWidget {
  final String message;

  ScreenB({required this.message}); // Constructor to receive data

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Screen B')),
      body: Center(
        child: Text(message), // Display received data
      ),
    );
  }
}
```

**Answer 4:**

*   **`MaterialApp.routes`:** A map that predefines named routes and their associated widget builders. This is a static way to manage routes.
*   **`MaterialApp.onGenerateRoute`:** A callback function that is invoked when `Navigator.pushNamed` is called. This allows for dynamic route creation, argument parsing, and error handling for unknown routes. It's more flexible than `routes` for complex applications.

**Answer 5:**

You would receive the data in the `SettingsScreen` widget by accessing `settings.arguments` within the `onGenerateRoute` function and then passing it to the `SettingsScreen` constructor.

**Example implementation in `main.dart`'s `onGenerateRoute`:**

```dart
// ... inside onGenerateRoute
case '/settings':
  if (settings.arguments is Map<String, String>) {
    final settingsData = settings.arguments as Map<String, String>;
    return MaterialPageRoute(
      builder: (context) => SettingsScreen(theme: settingsData['theme'] ?? 'default'), // Pass the theme
    );
  }
  // Handle invalid arguments
  return MaterialPageRoute(builder: (context) => ErrorScreen(errorMessage: 'Invalid arguments for settings route'));
// ...
```

And the `SettingsScreen` would look like:

```dart
import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  final String theme;

  SettingsScreen({required this.theme});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Settings')),
      body: Center(
        child: Text('Current Theme: $theme'),
      ),
    );
  }
}
