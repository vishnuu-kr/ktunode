---
title: "Advanced Flutter Development:"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 3: Advanced Flutter Development:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c985"
status: "completed"
scrapedAt: "2026-05-20T17:08:37.826Z"
---
# Mobile Application Development: Module 3 - Advanced Flutter Development

This module dives into more sophisticated Flutter development techniques to build robust, performant, and maintainable applications.

---

## 3.1 State Management Strategies

**Key Concepts:**

*   **State:** Any data that can change over time and affects the UI of your application.
*   **State Management:** The process of organizing, updating, and reacting to changes in your application's state.
*   **Immutability:** Creating new objects instead of modifying existing ones. This makes state changes predictable and easier to track.
*   **Mutability:** Modifying existing objects directly.

**Why Advanced State Management?**

As applications grow, managing state efficiently becomes crucial. Simple `setState()` can lead to:

*   **Performance issues:** Rebuilding large widget trees unnecessarily.
*   **Code complexity:** Difficult to track where state changes are happening.
*   **Bugs:** Unpredictable behavior due to shared mutable state.

**Common State Management Solutions:**

### 3.1.1 Provider

**Definition:** Provider is a popular, simple, and declarative state management solution that uses the `InheritedWidget` for efficient widget rebuilding. It's often considered a good starting point for advanced state management.

**Key Components:**

*   **`ChangeNotifier`:** A base class that can be mixed with your state class. It provides a `notifyListeners()` method to trigger UI updates.
*   **`ChangeNotifierProvider`:** A widget that makes a `ChangeNotifier` available to its descendants.
*   **`Consumer`:** A widget that listens to a `ChangeNotifier` and rebuilds a specific part of the UI when it changes.
*   **`context.watch<T>()`:** A method to access and listen to a provider of type `T`.
*   **`context.read<T>()`:** A method to access a provider of type `T` without listening to it (useful for calling methods on the provider).

**Example: A Counter Application**

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// 1. Create your ChangeNotifier class
class Counter with ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // Notify listeners about the change
  }

  void decrement() {
    _count--;
    notifyListeners();
  }
}

void main() {
  runApp(
    // 2. Wrap your app with ChangeNotifierProvider
    ChangeNotifierProvider(
      create: (context) => Counter(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Provider Counter',
      home: CounterScreen(),
    );
  }
}

class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Provider Counter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            // 3. Use Consumer to listen to changes and rebuild
            Consumer<Counter>(
              builder: (context, counter, child) {
                return Text(
                  '${counter.count}',
                  style: Theme.of(context).textTheme.headlineMedium,
                );
              },
            ),
          ],
        ),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FloatingActionButton(
            onPressed: () => context.read<Counter>().decrement(), // Use read to call methods
            tooltip: 'Decrement',
            child: Icon(Icons.remove),
          ),
          FloatingActionButton(
            onPressed: () => context.read<Counter>().increment(), // Use read to call methods
            tooltip: 'Increment',
            child: Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}
```

**Important Points to Remember about Provider:**

*   **Granularity:** `Consumer` allows you to rebuild only specific parts of the UI, improving performance.
*   **Multiple Providers:** You can nest `ChangeNotifierProvider` or use `MultiProvider` to provide multiple state objects.
*   **Provider Scopes:** Providers have a scope. Widgets inside that scope can access the provided state.
*   **`context.select()`:** A more efficient way to rebuild only when a specific part of the `ChangeNotifier` changes.

### 3.1.2 Riverpod

**Definition:** Riverpod is a complete rewrite of Provider, designed to address some of its limitations. It's compile-time safe, testable, and more flexible.

**Key Concepts:**

*   **Providers:** The fundamental building block in Riverpod. They encapsulate state and business logic.
*   **`ProviderRef`:** The reference passed to a provider that allows access to other providers and the application context.
*   **`ConsumerWidget` / `ConsumerStatefulWidget`:** Widgets that automatically subscribe to providers.
*   **`ref.watch()`:** Accesses and listens to a provider. Triggers rebuilds when the provider's value changes.
*   **`ref.read()`:** Accesses a provider without listening.
*   **`Provider<T>`:** For simple values or objects that don't change.
*   **`StateProvider<T>`:** For simple mutable states.
*   **`StateNotifierProvider<Notifier, State>`:** For more complex states managed by a `StateNotifier`.
*   **`FutureProvider<T>`:** For asynchronous operations that return a `Future`.
*   **`StreamProvider<T>`:** For asynchronous operations that return a `Stream`.

**Example: A Counter Application with Riverpod**

First, add `flutter_riverpod` to your `pubspec.yaml`.

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.0.0 # or latest version
```

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

// 1. Define a StateNotifier for complex state
class CounterNotifier extends StateNotifier<int> {
  CounterNotifier() : super(0); // Initial state

  void increment() {
    state++; // Update state
  }

  void decrement() {
    state--;
  }
}

// 2. Create a Provider using StateNotifierProvider
final counterProvider = StateNotifierProvider<CounterNotifier, int>((ref) {
  return CounterNotifier();
});

void main() {
  runApp(
    // 3. Wrap your app with ProviderScope
    ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Riverpod Counter',
      home: CounterScreen(),
    );
  }
}

class CounterScreen extends ConsumerWidget { // Use ConsumerWidget
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // 4. Watch the provider to get its value and subscribe to changes
    final counter = ref.watch(counterProvider);

    return Scaffold(
      appBar: AppBar(
        title: Text('Riverpod Counter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$counter', // Directly use the watched value
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FloatingActionButton(
            onPressed: () => ref.read(counterProvider.notifier).decrement(), // Use .notifier to access methods
            tooltip: 'Decrement',
            child: Icon(Icons.remove),
          ),
          FloatingActionButton(
            onPressed: () => ref.read(counterProvider.notifier).increment(), // Use .notifier to access methods
            tooltip: 'Increment',
            child: Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}
```

**Important Points to Remember about Riverpod:**

*   **Compile-time Safety:** Reduces runtime errors.
*   **Testability:** Providers can be easily overridden for testing.
*   **Independent Providers:** Providers are independent and can be accessed anywhere.
*   **Clearer Dependencies:** Explicitly declare dependencies between providers.
*   **Various Provider Types:** `Provider`, `StateProvider`, `StateNotifierProvider`, `FutureProvider`, `StreamProvider` for different use cases.

### 3.1.3 Bloc/Cubit

**Definition:** Bloc (Business Logic Component) and Cubit are state management libraries that use the Bloc pattern. They separate presentation from business logic, leading to more predictable and maintainable code.

*   **Cubit:** A simpler version of Bloc. It exposes states directly and handles events by calling methods on the Cubit.
*   **Bloc:** More powerful. It uses events to trigger state changes.

**Key Concepts (Cubit):**

*   **`Cubit<State>`:** A class that holds and manages a state.
*   **`emit(state)`:** Method to change the state and notify listeners.

**Key Concepts (Bloc):**

*   **`Bloc<Event, State>`:** A class that manages state based on events.
*   **`add(event)`:** Method to trigger an event.
*   **`on<EventType>(eventHandler)`:** Register event handlers.

**Example: Counter Application with Cubit**

Add `flutter_bloc` to your `pubspec.yaml`.

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_bloc: ^8.0.0 # or latest version
```

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// 1. Define the Cubit
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0); // Initial state

  void increment() => emit(state + 1);
  void decrement() => emit(state - 1);
}

void main() {
  runApp(
    // 2. Wrap your app with BlocProvider
    BlocProvider(
      create: (context) => CounterCubit(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cubit Counter',
      home: CounterScreen(),
    );
  }
}

class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cubit Counter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            // 3. Use BlocBuilder to listen to state changes and rebuild
            BlocBuilder<CounterCubit, int>(
              builder: (context, state) {
                return Text(
                  '$state',
                  style: Theme.of(context).textTheme.headlineMedium,
                );
              },
            ),
          ],
        ),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FloatingActionButton(
            onPressed: () => context.read<CounterCubit>().decrement(), // Use read to access cubit
            tooltip: 'Decrement',
            child: Icon(Icons.remove),
          ),
          FloatingActionButton(
            onPressed: () => context.read<CounterCubit>().increment(), // Use read to access cubit
            tooltip: 'Increment',
            child: Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}
```

**Important Points to Remember about Bloc/Cubit:**

*   **Separation of Concerns:** Clearly separates UI from business logic.
*   **Testability:** Both Cubits and Blocs are highly testable.
*   **Predictability:** State changes are driven by explicit events or method calls.
*   **`BlocBuilder`:** Rebuilds UI based on state changes.
*   **`BlocListener`:** For performing side effects (e.g., showing snackbars) based on state changes without rebuilding the UI.
*   **`BlocSelector`:** To rebuild only when a specific part of the state changes.

---

## 3.2 Asynchronous Operations and Error Handling

**Key Concepts:**

*   **Asynchronous Operations:** Tasks that do not block the main thread and can be performed in the background (e.g., network requests, file operations).
*   **Futures:** Represent a potential value or error at a future point in time.
*   **Streams:** Represent a sequence of asynchronous events over time.
*   **`async`/`await`:** Keywords used to simplify asynchronous programming.
*   **Error Handling:** Mechanisms to gracefully manage and respond to errors that occur during asynchronous operations.

### 3.2.1 Working with Futures

**Definition:** `Future` is a core Dart class for handling asynchronous operations. It represents a value that will be available at some point in the future.

**Common Future Operations:**

*   **`Future.delayed(duration, () => value)`:** Creates a `Future` that completes after a specified delay.
*   **`Future.value(value)`:** Creates a `Future` that is immediately completed with a value.
*   **`Future.error(error)`:** Creates a `Future` that is immediately completed with an error.

**Using `async`/`await`:**

```dart
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2)); // Simulate network delay
  // Simulate potential error
  // throw Exception("Failed to fetch data");
  return "Data from server";
}

// In a widget's build method or a separate async function:
Future<void> loadData() async {
  try {
    String data = await fetchData();
    print("Received: $data");
    // Update UI with data
  } catch (e) {
    print("Error fetching data: $e");
    // Display error message to the user
  }
}
```

**Using `.then()` and `.catchError()`:**

```dart
fetchData()
    .then((data) {
      print("Received: $data");
      // Update UI with data
    })
    .catchError((error) {
      print("Error fetching data: $error");
      // Display error message to the user
    });
```

### 3.2.2 Working with Streams

**Definition:** A `Stream` represents a sequence of asynchronous data. It can emit multiple values over time, or complete with an error.

**Common Stream Operations:**

*   **`Stream.periodic(duration, (computation))`:** Creates a `Stream` that emits values periodically.
*   **`Stream.fromIterable(iterable)`:** Creates a `Stream` from a list or other iterable.
*   **`Stream.fromFuture(future)`:** Creates a `Stream` that emits the result of a `Future` when it completes.

**Using `StreamBuilder`:**

`StreamBuilder` is a Flutter widget that listens to a `Stream` and rebuilds its UI based on the incoming data, errors, or completion events.

```dart
Stream<int> countStream = Stream.periodic(Duration(seconds: 1), (i) => i);

// In a widget's build method:
StreamBuilder<int>(
  stream: countStream,
  builder: (BuildContext context, AsyncSnapshot<int> snapshot) {
    if (snapshot.hasError) {
      return Text('Error: ${snapshot.error}');
    }
    switch (snapshot.connectionState) {
      case ConnectionState.none:
        return Text('Waiting for data...');
      case ConnectionState.waiting:
        return Text('Loading...');
      case ConnectionState.active:
        return Text('Received: ${snapshot.data}');
      case ConnectionState.done:
        return Text('Stream closed.');
    }
  },
)
```

### 3.2.3 Error Handling Strategies

**Key Principles:**

*   **Graceful Degradation:** Provide a user-friendly experience even when errors occur.
*   **Informative Feedback:** Tell the user what went wrong.
*   **Retry Mechanisms:** Allow users to retry operations that fail.

**Common Error Handling Techniques:**

*   **`try-catch` Blocks:** For handling synchronous and `async`/`await` errors.
*   **`.catchError()` with Futures:** To handle errors from `Future`s.
*   **`AsyncSnapshot` in `StreamBuilder`:** The `snapshot.hasError` and `snapshot.error` properties provide error information.
*   **Dedicated Error Widgets:** Create reusable widgets to display error messages and retry buttons.
*   **Global Error Handling:** Use `FlutterError.onError` or `ErrorWidget.builder` for catching unhandled errors.

**Example: Displaying an Error Message with Retry**

```dart
// Assuming fetchData() can throw an error
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  if (DateTime.now().second % 4 == 0) { // Simulate occasional failure
    throw Exception("Network connection lost.");
  }
  return "Successfully fetched data.";
}

class DataDisplayWidget extends StatefulWidget {
  @override
  _DataDisplayWidgetState createState() => _DataDisplayWidgetState();
}

class _DataDisplayWidgetState extends State<DataDisplayWidget> {
  late Future<String> _dataFuture;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    setState(() {
      _dataFuture = fetchData(); // Start the asynchronous operation
    });
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<String>(
      future: _dataFuture,
      builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return CircularProgressIndicator();
        } else if (snapshot.hasError) {
          return Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Error: ${snapshot.error}'),
              SizedBox(height: 10),
              ElevatedButton(
                onPressed: _loadData, // Retry button
                child: Text('Retry'),
              ),
            ],
          );
        } else if (snapshot.hasData) {
          return Text('Data: ${snapshot.data}');
        } else {
          return Text('No data available.');
        }
      },
    );
  }
}
```

**Important Points to Remember about Asynchronous Operations and Error Handling:**

*   **UI Responsiveness:** Never perform long-running operations on the main thread.
*   **`FutureBuilder` vs. `StreamBuilder`:** Use `FutureBuilder` for single asynchronous results and `StreamBuilder` for sequences of asynchronous events.
*   **Clear Error Messages:** Help users understand what went wrong and how to fix it.
*   **Consider Loading States:** Provide visual feedback (e.g., `CircularProgressIndicator`) while data is loading.

---

## 3.3 Navigation and Routing

**Key Concepts:**

*   **Navigation:** The process of moving between different screens or views in an application.
*   **Routing:** Defining the paths or URLs that map to specific screens.
*   **Declarative Navigation:** Defining the desired state of the UI, and Flutter handles the transition.
*   **Imperative Navigation:** Explicitly calling methods to push or pop routes.

### 3.3.1 Navigator 1.0 (Imperative)

**Definition:** The traditional way of navigating using `Navigator.push()` and `Navigator.pop()`.

**Key Methods:**

*   **`Navigator.push(BuildContext context, Route<T> route)`:** Pushes a new route onto the navigation stack.
*   **`Navigator.pop(BuildContext context, [T? result])`:** Pops the current route off the navigation stack.
*   **`Navigator.pushReplacement(BuildContext context, Route<T> route)`:** Replaces the current route with a new one.
*   **`Navigator.popUntil(BuildContext context, RoutePredicate predicate)`:** Pops routes until a condition is met.

**Example:**

```dart
// Navigating to a new screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);

// Navigating back
Navigator.pop(context);

// Passing data to the next screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => DetailsScreen(item: myItem)),
);

// Receiving data from the previous screen
// In DetailsScreen:
// final Item item = ModalRoute.of(context)!.settings.arguments as Item;
// Or if passed directly:
// final Item item;
// DetailsScreen({required this.item});

// Returning data from a screen
Navigator.pop(context, 'Result from second screen');
// In the calling screen:
// final result = await Navigator.push(...);
// if (result != null) { ... }
```

### 3.3.2 Navigator 2.0 (Declarative)

**Definition:** Navigator 2.0 introduces a declarative approach to navigation, allowing you to control the navigation stack using a `Router` or `RouterDelegate`. It's more powerful for deep linking and complex navigation scenarios.

**Key Components:**

*   **`Router`:** A widget that provides the current navigation state and handles navigation requests.
*   **`RouterDelegate`:** Manages the navigation stack and rebuilds the UI based on the current route information.
*   **`BackButtonDispatcher`:** Handles back button presses.
*   **`RouteInformationParser`:** Parses incoming route information (e.g., URLs) into a platform-agnostic `RouteInformation`.
*   **`RouteInformation`:** Represents the current route information (e.g., `location`, `state`).

**When to use Navigator 2.0:**

*   Deep linking (handling external URLs that lead to specific screens).
*   Web support (consistent navigation across platforms).
*   Complex navigation flows that need to be managed declaratively.
*   When you need fine-grained control over the navigation stack.

**Simplified Approach with Packages:**

While Navigator 2.0 is powerful, it can be complex to implement from scratch. Libraries like **`go_router`** simplify its usage significantly by providing a declarative routing API.

**Example with `go_router`:**

Add `go_router` to your `pubspec.yaml`.

```yaml
dependencies:
  flutter:
    sdk: flutter
  go_router: ^7.0.0 # or latest version
```

```dart
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

// Define your screens
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => context.go('/details/1'), // Navigate to details/1
              child: Text('Go to Details 1'),
            ),
            ElevatedButton(
              onPressed: () => context.go('/settings'), // Navigate to settings
              child: Text('Go to Settings'),
            ),
          ],
        ),
      ),
    );
  }
}

class DetailsScreen extends StatelessWidget {
  final String id;
  DetailsScreen({required this.id});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Details ID: $id')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Details for item $id'),
            ElevatedButton(
              onPressed: () => context.go('/'), // Go back to home
              child: Text('Go to Home'),
            ),
          ],
        ),
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Settings')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => context.go('/'), // Go back to home
          child: Text('Go to Home'),
        ),
      ),
    );
  }
}

void main() {
  runApp(MyApp());
}

final GoRouter _router = GoRouter(
  routes: <GoRoute>[
    GoRoute(
      path: '/',
      builder: (BuildContext context, GoRouterState state) {
        return HomeScreen();
      },
      routes: <GoRoute>[
        GoRoute(
          path: 'details/:id', // Parameterized route
          builder: (BuildContext context, GoRouterState state) {
            final id = state.params['id']!;
            return DetailsScreen(id: id);
          },
        ),
        GoRoute(
          path: 'settings',
          builder: (BuildContext context, GoRouterState state) {
            return SettingsScreen();
          },
        ),
      ],
    ),
  ],
);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
      title: 'GoRouter Navigation',
    );
  }
}
```

**Important Points to Remember about Navigation:**

*   **Navigator 1.0 vs. 2.0:** Choose the right approach based on your project's complexity.
*   **`go_router`:** A highly recommended package for declarative routing.
*   **Route Naming:** Use named routes or a routing package to manage your routes effectively.
*   **Passing Data:** Pass data between screens using route arguments or state management solutions.
*   **Deep Linking:** Ensure your app can be opened directly to specific screens via URLs.

---

## 3.4 Working with Platform Channels

**Key Concepts:**

*   **Platform Channels:** A mechanism for communicating between your Flutter code (Dart) and the native platform code (Java/Kotlin for Android, Objective-C/Swift for iOS).
*   **Method Channel:** The most common type of platform channel, used for invoking methods on the native side and receiving results.
*   **Event Channel:** Used for streaming data from the native platform to Flutter.
*   **Binary Channel:** Used for sending and receiving binary data.
*   **Host/Handler:** The native side that receives calls from Flutter.
*   **Caller:** The Flutter side that invokes methods on the native side.
*   **Serialization/Deserialization:** Converting data types between Dart and native languages.

**When to Use Platform Channels:**

*   Accessing native APIs not available in Flutter plugins (e.g., specific device sensors, background tasks, advanced platform features).
*   Leveraging existing native libraries.
*   Integrating with platform-specific features.

### 3.4.1 Method Channels

**How it Works:**

1.  **Flutter (Dart):**
    *   Create a `MethodChannel` instance with a unique channel name.
    *   Invoke a method on the native side using `invokeMethod('methodName', [arguments])`.
    *   Handle the response using `then((result) => ...)` or `await`.
    *   Handle errors using `.catchError()` or `try-catch`.

2.  **Native (Android - Kotlin):**
    *   Register a `MethodChannel` with the *same* channel name in your `Activity` or `FlutterEngine`.
    *   Set a `MethodCallHandler` to listen for incoming method calls.
    *   In the handler, check the `methodCall.method` and provide a `Result.success(value)` or `Result.error(errorCode, errorMessage, errorDetails)`.

**Example: Getting Device Battery Level (Android)**

**Flutter (Dart):**

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class BatteryScreen extends StatefulWidget {
  @override
  _BatteryScreenState createState() => _BatteryScreenState();
}

class _BatteryScreenState extends State<BatteryScreen> {
  static const platform = MethodChannel('com.example.myapp/battery'); // Unique channel name
  String _batteryLevel = 'Unknown battery level.';

  Future<void> _getBatteryLevel() async {
    String batteryLevel;
    try {
      final int result = await platform.invokeMethod('getBatteryLevel'); // Invoke native method
      batteryLevel = 'Battery level: $result%';
    } on PlatformException catch (e) {
      batteryLevel = "Failed to get battery level: '${e.message}'.";
    }

    setState(() {
      _batteryLevel = batteryLevel;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Battery Level')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_batteryLevel),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _getBatteryLevel,
              child: Text('Get Battery Level'),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Native (Android - Kotlin):**

In your `MainActivity.kt`:

```kotlin
package com.example.myapp // Your app's package name

import androidx.annotation.NonNull
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import android.os.Build

class MainActivity: FlutterActivity() {
    private val CHANNEL = "com.example.myapp/battery" // Must match Flutter channel name

    override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
            call, result ->
            if (call.method == "getBatteryLevel") {
                val batteryLevel = getBatteryLevel()
                if (batteryLevel != -1) {
                    result.success(batteryLevel)
                } else {
                    result.error("UNAVAILABLE", "Battery level not available.", null)
                }
            } else {
                result.notImplemented()
            }
        }
    }

    private fun getBatteryLevel(): Int {
        val batteryIntent: Intent? = registerReceiver(null, IntentFilter(Intent.ACTION_BATTERY_CHANGED))
        val level = batteryIntent?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale = batteryIntent?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
        return if (level != -1 && scale != -1) level * 100 / scale else -1
    }
}
```

### 3.4.2 Event Channels

**How it Works:**

1.  **Flutter (Dart):**
    *   Create an `EventChannel` instance.
    *   Implement `StreamHandler` to handle `onListen` and `onCancel`.
    *   In `onListen`, start receiving events from the native side.
    *   Use `eventSink.eventSink?.success(eventData)` to send data to Flutter.
    *   In `onCancel`, stop receiving events.

2.  **Native (Android - Kotlin):**
    *   Register an `EventChannel`.
    *   Set a `StreamHandler` for the `EventChannel`.
    *   In `onListen`, set up a listener or callback to receive events from the native platform.
    *   When an event occurs, call `eventSink.success(data)` to send it to Flutter.
    *   In `onCancel`, clean up the listener.

**Example: Real-time Battery State Updates (Conceptual)**

**Flutter (Dart):**

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class BatteryStreamScreen extends StatefulWidget {
  @override
  _BatteryStreamScreenState createState() => _BatteryStreamScreenState();
}

class _BatteryStreamScreenState extends State<BatteryStreamScreen> {
  static const EventChannel eventChannel = EventChannel('com.example.myapp/battery_stream');
  String _batteryState = 'Unknown';

  @override
  void initState() {
    super.initState();
    eventChannel.receiveBroadcastStream().listen(
      (dynamic event) {
        setState(() {
          _batteryState = event.toString();
        });
      },
      onError: (Object error) => print('Error: $error'),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Battery Stream')),
      body: Center(
        child: Text('Battery State: $_batteryState'),
      ),
    );
  }
}
```

**Native (Android - Kotlin):**

This involves more complex native code to register a `BroadcastReceiver` for battery changes and then forward those events to the `EventChannel`. The concept is to have a `StreamHandler` that registers this receiver in `onListen` and unregisters it in `onCancel`.

### 3.4.3 Binary Channels

**Use Case:** For sending and receiving large amounts of raw data efficiently (e.g., image data, raw sensor readings).

**Key Concepts:**

*   Data is sent as `ByteData`.
*   Both Flutter and native sides need to handle `ByteData` correctly.

**Important Points to Remember about Platform Channels:**

*   **Channel Naming:** Ensure channel names are unique and consistent between Flutter and native.
*   **Data Serialization:** Be mindful of how data types are converted between Dart and native. Primitive types are usually handled automatically, but complex objects require custom serialization.
*   **Error Handling:** Implement robust error handling on both sides to catch `PlatformException`s.
*   **Asynchronous Nature:** Platform channel calls are asynchronous. Use `await` or `.then()` to handle responses.
*   **Alternatives:** For common use cases, consider using existing Flutter plugins that abstract away platform channel complexity.

---

## 3.5 Animations and Transitions

**Key Concepts:**

*   **Animation:** The process of making something move or change over time to create a sense of motion or visual interest.
*   **Tween (Linear-Tween, CurveTween):** Defines the intermediate values between a start and end value.
*   **AnimationController:** Manages an `Animation` object's duration, start/stop state, and forwards/reverses playback.
*   **AnimatedWidget:** Widgets that automatically rebuild when their `Animation` value changes.
*   **Implicitly Animated Widgets:** Widgets that animate automatically when their properties change (e.g., `AnimatedContainer`).
*   **Explicit Animations:** Animations that you control using `AnimationController`.
*   **Curves:** Control the rate of animation over time (e.g., `Curves.easeIn`, `Curves.bounceOut`).

### 3.5.1 Implicitly Animated Widgets

**Definition:** Widgets that animate automatically when one of their properties changes. They simplify common animations.

**Examples:**

*   **`AnimatedContainer`:** Animates changes to its properties like `width`, `height`, `color`, `decoration`, `alignment`.

    ```dart
    AnimatedContainer(
      duration: Duration(milliseconds: 500),
      width: _expanded ? 200.0 : 100.0,
      height: _expanded ? 100.0 : 200.0,
      color: _expanded ? Colors.blue : Colors.red,
      alignment: _expanded ? Alignment.center : Alignment.centerLeft,
      child: Center(child: Text('Expand')),
    )
    ```

*   **`AnimatedOpacity`:** Animates the `opacity` property.
*   **`AnimatedCrossFade`:** Animates the transition between two widgets.
*   **`AnimatedPositioned`:** Animates changes to `Positioned` widget properties.

### 3.5.2 Explicit Animations

**Definition:** Animations that require more explicit control using `AnimationController` and `AnimatedBuilder`.

**Steps:**

1.  **Create an `AnimationController`:** Typically in a `StatefulWidget`'s `initState`.
2.  **Define an `Animation`:** Use `Tween` to define the range and `animate()` to connect it to the controller.
3.  **Use `AnimatedBuilder`:** Wrap the widget you want to animate with `AnimatedBuilder` and provide the `animation` and `builder` functions.
4.  **Control Playback:** Use `_controller.forward()`, `_controller.reverse()`, `_controller.stop()`, `_controller.repeat()`.
5.  **Dispose the Controller:** In the `dispose()` method.

**Example: A Simple Fade Transition**

```dart
class FadeTransitionScreen extends StatefulWidget {
  @override
  _FadeTransitionScreenState createState() => _FadeTransitionScreenState();
}

class _FadeTransitionScreenState extends State<FadeTransitionScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this, // Required for ticker
    );
    _animation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.easeIn, // Apply a curve
      ),
    );
    _controller.forward(); // Start the animation
  }

  @override
  void dispose() {
    _controller.dispose(); // Clean up the controller
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Fade Transition')),
      body: Center(
        // Use AnimatedBuilder to rebuild only the widget that needs animation
        child: FadeTransition(
          opacity: _animation, // The animation value drives the opacity
          child: FlutterLogo(size: 150.0),
        ),
      ),
    );
  }
}
```

### 3.5.3 Hero Animations

**Definition:** Animations that smoothly transition a widget from one screen to another. They create a visual connection between related elements on different screens.

**How it Works:**

1.  Wrap the widget to be animated on both the source and destination screens with a `Hero` widget.
2.  Provide a unique `tag` to both `Hero` widgets. The `tag` identifies the widget across screens.
3.  Flutter automatically handles the animation when navigating between screens.

**Example:**

**Screen 1:**

```dart
Hero(
  tag: 'myHero', // Unique tag
  child: Image.network('https://via.placeholder.com/150'),
)
```

**Screen 2 (after navigating):**

```dart
Hero(
  tag: 'myHero', // Same unique tag
  child: Image.network('https://via.placeholder.com/300'), // Can be different size/content
)
```

**Important Points to Remember about Animations:**

*   **Performance:** Optimize animations by using `AnimatedBuilder` and ensuring minimal UI rebuilds.
*   **`vsync`:** `SingleTickerProviderStateMixin` or `TickerProviderStateMixin` is required for `AnimationController`.
*   **Curves:** Use curves to make animations feel more natural and engaging.
*   **Hero Animations:** Great for providing visual continuity between screens.
*   **Implicit vs. Explicit:** Use implicit animations for simpler cases and explicit for more control.

---

## 3.6 Customizing Widget Behavior

**Key Concepts:**

*   **Composition:** Building complex widgets by combining simpler ones.
*   **InheritedWidget:** A powerful mechanism for passing data down the widget tree efficiently and allowing descendants to rebuild when the data changes.
*   **Custom Painters:** Drawing custom graphics directly onto a canvas.
*   **Gesture Detectors:** Handling user interactions like taps, drags, and scrolls.
*   **Custom Render Objects:** For highly specialized UI and performance optimizations (advanced topic).

### 3.6.1 Building Custom Widgets with Composition

**Definition:** The most common way to create custom UI is by combining existing Flutter widgets in a logical structure.

**Example:** A custom card widget

```dart
class CustomCard extends StatelessWidget {
  final String title;
  final String description;
  final VoidCallback? onTap;

  CustomCard({
    required this.title,
    required this.description,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(10.0),
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                title,
                style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Text(description),
            ],
          ),
        ),
      ),
    );
  }
}
```

### 3.6.2 Using InheritedWidget for State Sharing

**Definition:** `InheritedWidget` allows you to efficiently propagate data down the widget tree. Widgets that depend on the `InheritedWidget` will automatically rebuild when the data changes.

**Steps:**

1.  Create a custom `InheritedWidget` that holds your data.
2.  In the `updateShouldNotify` method, specify when descendants should rebuild.
3.  Wrap a part of your widget tree with your custom `InheritedWidget`.
4.  In descendant widgets, access the data using `context.dependOnInheritedWidgetOfExactType<MyInheritedWidget>()`.

**Example: A Theme Provider (Simplified)**

```dart
// 1. Define the InheritedWidget
class MyThemeProvider extends InheritedWidget {
  final Color primaryColor;

  MyThemeProvider({
    required this.primaryColor,
    required Widget child,
  }) : super(child: child);

  // Method to access the provider and subscribe to changes
  static MyThemeProvider of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<MyThemeProvider>()!;
  }

  // Specify when to rebuild descendants
  @override
  bool updateShouldNotify(MyThemeProvider oldWidget) {
    return primaryColor != oldWidget.primaryColor;
  }
}

// In your app:
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Color _themeColor = Colors.blue;

  @override
  Widget build(BuildContext context) {
    return MyThemeProvider(
      primaryColor: _themeColor,
      child: MaterialApp(
        theme: ThemeData(
          primaryColor: _themeColor,
        ),
        home: HomeScreen(),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Access the theme color using the InheritedWidget
    final themeProvider = MyThemeProvider.of(context);

    return Scaffold(
      appBar: AppBar(
        title: Text('Custom Theme'),
        backgroundColor: themeProvider.primaryColor,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Current Primary Color:'),
            Icon(Icons.color_lens, size: 50, color: themeProvider.primaryColor),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // In a real app, you'd manage state with setState or state management
                // For demonstration, let's assume changing the color happens elsewhere
                // and this widget will rebuild due to the InheritedWidget.
                print("Color change triggered elsewhere.");
              },
              child: Text('Change Theme (simulated)'),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Note:** Provider and Riverpod are built on top of `InheritedWidget` and offer more convenient APIs for state management.

### 3.6.3 Custom Painting with CustomPainter

**Definition:** `CustomPainter` allows you to draw directly onto a widget's canvas using the `Canvas` API. This is useful for creating custom shapes, charts, or visually unique elements.

**Steps:**

1.  Create a class that extends `CustomPainter`.
2.  Override `paint(Canvas canvas, Size size)` to perform your drawing.
3.  Override `shouldRepaint(covariant CustomPainter oldDelegate)` to determine if the painter needs to repaint.
4.  Use a `CustomPaint` widget to render your `CustomPainter`.

**Example: Drawing a Circle**

```dart
import 'package:flutter/material.dart';

class CirclePainter extends CustomPainter {
  final Color color;

  CirclePainter({required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final Paint paint = Paint()
      ..color = color
      ..style = PaintingStyle.fill; // or PaintingStyle.stroke

    // Draw a circle at the center of the canvas
    canvas.drawCircle(
      Offset(size.width / 2, size.height / 2), // Center of the canvas
      size.width / 2, // Radius
      paint,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    // Repaint if the color has changed
    return oldDelegate.color != color;
  }
}

class CustomPaintScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Custom Paint')),
      body: Center(
        child: CustomPaint(
          size: Size(200, 200), // Define the size of the painting area
          painter: CirclePainter(color: Colors.teal), // Use your custom painter
        ),
      ),
    );
  }
}
```

### 3.6.4 Handling Gestures with GestureDetector

**Definition:** `GestureDetector` is a widget that detects gestures on its child widget.

**Common Gesture Callbacks:**

*   `onTap()`: Called when the user taps the child.
*   `onDoubleTap()`: Called when the user double-taps the child.
*   `onLongPress()`: Called when the user long-presses the child.
*   `onPanStart()`, `onPanUpdate()`, `onPanEnd()`: Called for drag gestures.
*   `onScaleStart()`, `onScaleUpdate()`, `onScaleEnd()`: Called for pinch and rotate gestures.

**Example:** A clickable item

```dart
GestureDetector(
  onTap: () {
    print('Item tapped!');
  },
  onDoubleTap: () {
    print('Item double-tapped!');
  },
  child: Container(
    padding: EdgeInsets.all(16.0),
    color: Colors.lightBlueAccent,
    child: Text('Tap or Double Tap Me'),
  ),
)
```

**Important Points to Remember about Customizing Behavior:**

*   **Composition is Key:** Leverage existing widgets whenever possible.
*   **`InheritedWidget` for State:** Use `InheritedWidget` (or state management solutions) for efficient data sharing.
*   **`CustomPainter` for Graphics:** Draw custom visuals when standard widgets aren't sufficient.
*   **`GestureDetector` for Interaction:** Add custom interactivity to your widgets.

---

## Practice Questions and Exercises

1.  **State Management:**
    *   **Question:** Explain the benefits of using `Provider` over `setState()` for managing application state in a moderately complex app.
    *   **Exercise:** Implement a simple to-do list application using `Provider` or `Riverpod`. The app should allow users to add new to-do items and mark them as completed.

2.  **Asynchronous Operations:**
    *   **Question:** Describe the difference between `Future` and `Stream` and provide a scenario where each would be appropriate.
    *   **Exercise:** Create a UI that fetches data from a public API (e.g., a weather API or a list of posts) and displays it. Implement loading indicators and error handling for network requests.

3.  **Navigation:**
    *   **Question:** When would you choose `Navigator 2.0` (or a package like `go_router`) over the traditional imperative `Navigator.push()`?
    *   **Exercise:** Build a small app with three screens: Home, Details, and Settings. Implement navigation between them using `go_router`, including passing an ID to the Details screen.

4.  **Platform Channels:**
    *   **Question:** How would you send a simple string message from Flutter to native Android and receive a string response?
    *   **Exercise:** (Requires native development knowledge) Create a platform channel to get the current device's locale from the native platform and display it in your Flutter app.

5.  **Animations:**
    *   **Question:** What is a `Hero` animation, and how do you implement it?
    *   **Exercise:** Create a screen with a list of items. When an item is tapped, navigate to a details screen that displays a larger version of the item's image using a `Hero` animation.

6.  **Custom Widgets:**
    *   **Question:** Explain the purpose of `shouldRepaint` in `CustomPainter`.
    *   **Exercise:** Create a custom widget that draws a progress bar with a custom color and an indicator showing the progress percentage.

---

## Answers to Practice Questions

1.  **State Management (`Provider` vs. `setState()`):**
    *   **Benefits of Provider:**
        *   **Performance:** `Provider` (especially with `Consumer` or `context.select`) allows for granular UI updates, rebuilding only the widgets that depend on the changed state, unlike `setState()` which can rebuild the entire widget tree.
        *   **Readability & Maintainability:** Centralizes state management, making it easier to understand where data comes from and how it's updated. Reduces prop drilling.
        *   **Testability:** State can be easily provided and tested independently.
        *   **Decoupling:** Separates UI from business logic more effectively.

2.  **`Future` vs. `Stream`:**
    *   **`Future`:** Represents a single asynchronous value that will be available at some point in the future.
        *   **Scenario:** Fetching data from an API once, saving a file, making a single network request.
    *   **`Stream`:** Represents a sequence of asynchronous values or events over time.
        *   **Scenario:** Listening to real-time data updates (e.g., chat messages, sensor readings), user input events, network status changes.

3.  **`Navigator 2.0` vs. Imperative Navigation:**
    *   **Choose `Navigator 2.0` (or `go_router`) when:**
        *   **Deep Linking:** Your app needs to respond to external URLs that should navigate to specific internal screens.
        *   **Web Support:** You want consistent navigation behavior across web and mobile platforms.
        *   **Complex Navigation Stacks:** You need to manage multiple navigation stacks, nested navigators, or complex conditional routing logic.
        *   **Declarative Control:** You prefer to declare the desired navigation state rather than imperatively calling `push`/`pop`.
        *   **Back Button Handling:** You need custom handling for the system's back button behavior.
    *   **Choose Imperative Navigation when:**
        *   The app has simple, linear navigation flow.
        *   Deep linking and complex web routing are not requirements.

4.  **Platform Channels (Flutter to Native String Response):**
    *   **Flutter:**
        ```dart
        static const platform = MethodChannel('com.example.myapp/mychannel');
        Future<String> getLocale() async {
          try {
            final String locale = await platform.invokeMethod('getLocale');
            return locale;
          } on PlatformException catch (e) {
            return "Error: ${e.message}";
          }
        }
        ```
    *   **Native (Android - Kotlin):**
        ```kotlin
        val CHANNEL = "com.example.myapp/mychannel"
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
            call, result ->
            if (call.method == "getLocale") {
                val locale = Locale.getDefault().toString() // Example: "en_US"
                result.success(locale)
            } else {
                result.notImplemented()
            }
        }
        ```

5.  **Hero Animations:**
    *   **Implementation:**
        1.  Wrap the widget (e.g., an `Image` or `Container`) that should animate on both screens with a `Hero` widget.
        2.  Assign a unique `tag` string to both `Hero` widgets. This tag tells Flutter which widgets are related.
        ```dart
        // Screen 1
        Hero(
          tag: 'itemImageTag',
          child: Image.network('url_to_image'),
        )

        // Screen 2 (after navigation)
        Hero(
          tag: 'itemImageTag', // Same tag
          child: Image.network('url_to_larger_image'),
        )
        ```

6.  **Custom Widgets (`shouldRepaint`):**
    *   **Purpose of `shouldRepaint`:** This method is called by Flutter when a `CustomPaint` widget is about to be repainted. It allows you to tell Flutter whether a repaint is actually necessary.
    *   If `shouldRepaint` returns `true`, the `paint` method will be called again.
    *   If it returns `false`, Flutter optimizes by skipping the repaint, saving performance.
    *   You typically compare the current painter's properties (like color, size, data) with the properties of the `oldDelegate` (the previous painter instance). If any relevant property has changed, you return `true`.

---

## Important Points to Remember

*   **State Management:** Choose a solution that fits your app's complexity. `Provider` is a good starting point; `Riverpod` offers more robustness, and `Bloc/Cubit` excel in complex, event-driven applications.
*   **Asynchronous Operations:** Always handle loading states and errors gracefully for a better user experience.
*   **Navigation:** Plan your navigation strategy early. `go_router` is highly recommended for modern Flutter apps.
*   **Platform Channels:** Use them sparingly and consider existing plugins first. They add complexity to your project.
*   **Animations:** Use animations to enhance user experience, but don't overuse them. Optimize for performance.
*   **Customization:** Leverage composition for building custom widgets. Use `InheritedWidget` (or state management solutions) for data sharing and `CustomPainter` for custom drawing.

---
