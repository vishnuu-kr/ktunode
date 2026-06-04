---
title: "Networking in Flutter: HTTP Requests, JSON Parsing, RESTful APIs"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 3: Advanced Flutter Development:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c987"
status: "completed"
scrapedAt: "2026-05-20T17:08:39.211Z"
---
# Module 3: Advanced Flutter Development - Networking in Flutter

## Topic: HTTP Requests, JSON Parsing, RESTful APIs

This module delves into the crucial aspect of mobile application development: enabling your Flutter app to communicate with the outside world through network requests. We'll explore how to fetch data from servers, handle different data formats, and interact with common web services.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

1.  **Understand the fundamentals of HTTP and RESTful APIs.**
2.  **Make HTTP requests (GET, POST, PUT, DELETE) in Flutter.**
3.  **Handle different HTTP status codes and errors.**
4.  **Parse JSON data received from network responses.**
5.  **Convert Dart objects to JSON for sending data to APIs.**
6.  **Implement efficient networking patterns in Flutter.**
7.  **Utilize popular Flutter packages for networking.**

---

### 1. Fundamentals of HTTP and RESTful APIs

#### What is HTTP?

*   **HTTP (Hypertext Transfer Protocol):** The foundation of data communication on the World Wide Web. It's a protocol used for transmitting hypermedia documents, such as HTML.
*   **Client-Server Model:** HTTP operates on a client-server model.
    *   **Client:** Your Flutter application, which requests resources.
    *   **Server:** A remote machine hosting the data or service, which responds to requests.
*   **Requests and Responses:** The communication flow involves:
    *   **Request:** Sent by the client to the server, specifying what resource is needed and the action to perform.
    *   **Response:** Sent by the server back to the client, containing the requested resource or an error message.

#### Key HTTP Request Methods:

*   **GET:** Retrieves data from a specified resource. It's idempotent (multiple identical requests have the same effect as a single request) and should not have side effects.
    *   *Example:* Fetching a list of users from an API.
*   **POST:** Submits data to be processed to a specified resource. Often used to create new resources or submit forms. Not idempotent.
    *   *Example:* Creating a new user profile.
*   **PUT:** Updates a resource at a specified URI. If the resource doesn't exist, it may create it. Idempotent.
    *   *Example:* Updating an existing user's profile.
*   **DELETE:** Deletes a specified resource. Idempotent.
    *   *Example:* Deleting a user account.
*   **PATCH:** Applies partial modifications to a resource. Not idempotent.
    *   *Example:* Changing only the email address of a user.

#### What are RESTful APIs?

*   **REST (Representational State Transfer):** An architectural style for designing networked applications. It's not a protocol, but a set of constraints for how web services should behave.
*   **RESTful API:** An API that adheres to the REST architectural constraints.
*   **Key REST Constraints:**
    *   **Client-Server:** Separation of client and server concerns.
    *   **Stateless:** Each request from client to server must contain all the information needed to understand and complete the request. The server should not store any client context between requests.
    *   **Cacheable:** Responses can be cached to improve performance.
    *   **Uniform Interface:** A consistent way of interacting with resources. This is achieved through:
        *   **Resource Identification:** Resources are identified by URIs (Uniform Resource Identifiers).
        *   **Resource Manipulation through Representations:** Clients interact with representations of resources (e.g., JSON, XML).
        *   **Self-descriptive Messages:** Messages contain enough information to describe how to process them.
        *   **Hypermedia as the Engine of Application State (HATEOAS):** Responses include links to related resources, guiding the client through the API.
    *   **Layered System:** The client cannot tell whether it is connected directly to the end server or to an intermediary.
    *   **Code on Demand (Optional):** Servers can temporarily extend client functionality by transferring executable code (e.g., JavaScript).

#### Data Formats:

*   **JSON (JavaScript Object Notation):** A lightweight data-interchange format. It's easy for humans to read and write, and easy for machines to parse and generate. It's the most common format for RESTful APIs.
    *   **JSON Structure:**
        *   **Objects:** Key-value pairs enclosed in curly braces `{}`. Keys are strings, values can be strings, numbers, booleans, arrays, or other objects.
        *   **Arrays:** Ordered lists of values enclosed in square brackets `[]`.
        *   **Strings:** Text enclosed in double quotes `""`.
        *   **Numbers:** Integers or floating-point numbers.
        *   **Booleans:** `true` or `false`.
        *   **Null:** Represents the absence of a value.

---

### 2. Making HTTP Requests in Flutter

Flutter's `http` package is the primary tool for making HTTP requests.

#### Setup:

Add the `http` package to your `pubspec.yaml` file:

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.1.0 # Use the latest version
```

Then run `flutter pub get`.

#### Making a GET Request:

```dart
import 'package:http/http.dart' as http;

Future<void> fetchData() async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/users'); // Example API
  try {
    final response = await http.get(url);

    if (response.statusCode == 200) {
      // Request successful, response.body contains the data (as a String)
      print('Response body: ${response.body}');
    } else {
      // Request failed
      print('Request failed with status: ${response.statusCode}');
    }
  } catch (e) {
    // Handle network errors or other exceptions
    print('Error fetching data: $e');
  }
}
```

**Key Points for GET:**

*   `Uri.parse()`: Converts a URL string into a `Uri` object, which is required by the `http` package.
*   `await http.get(url)`: Sends a GET request to the specified URL and waits for the response.
*   `response.statusCode`: An integer representing the HTTP status code of the response.
*   `response.body`: A `String` containing the response body.
*   `try-catch`: Essential for handling network errors and exceptions.

#### Making a POST Request:

To send data with a POST request, you typically use the `body` parameter, which expects a `String`. Often, this `String` will be a JSON-encoded representation of your data.

```dart
import 'package:http/http.dart' as http;
import 'dart:convert'; // For jsonEncode

Future<void> createUser(String name, String email) async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/users'); // Example API
  try {
    final response = await http.post(
      url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8', // Important for JSON
      },
      body: jsonEncode(<String, String>{ // Encode Dart Map to JSON String
        'name': name,
        'email': email,
      }),
    );

    if (response.statusCode == 201) { // 201 Created is common for successful POST
      print('User created successfully: ${response.body}');
    } else {
      print('Failed to create user. Status code: ${response.statusCode}');
      print('Response body: ${response.body}');
    }
  } catch (e) {
    print('Error creating user: $e');
  }
}
```

**Key Points for POST:**

*   `headers`: Crucial for telling the server the format of the data you're sending. `'Content-Type': 'application/json; charset=UTF-8'` is standard for JSON.
*   `jsonEncode()`: Converts a Dart `Map` or `List` into a JSON formatted `String`.
*   `response.statusCode == 201`: A common status code for successful resource creation.

#### Making PUT and DELETE Requests:

PUT and DELETE requests follow a similar pattern to POST, but they use `http.put()` and `http.delete()` respectively.

```dart
// Example PUT Request (Update user)
Future<void> updateUser(int userId, String updatedName) async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/users/$userId');
  try {
    final response = await http.put(
      url,
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: jsonEncode({'name': updatedName}),
    );
    if (response.statusCode == 200) {
      print('User updated: ${response.body}');
    } else {
      print('Failed to update user. Status code: ${response.statusCode}');
    }
  } catch (e) {
    print('Error updating user: $e');
  }
}

// Example DELETE Request
Future<void> deleteUser(int userId) async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/users/$userId');
  try {
    final response = await http.delete(url);
    if (response.statusCode == 200) { // 200 OK or 204 No Content are common for DELETE
      print('User deleted successfully.');
    } else {
      print('Failed to delete user. Status code: ${response.statusCode}');
    }
  } catch (e) {
    print('Error deleting user: $e');
  }
}
```

---

### 3. Handling HTTP Status Codes and Errors

Understanding and gracefully handling HTTP status codes is vital for a robust application.

#### Common HTTP Status Codes:

*   **2xx (Success):**
    *   `200 OK`: The request has succeeded.
    *   `201 Created`: The request has succeeded and a new resource has been created.
    *   `204 No Content`: The server successfully processed the request but is not returning any content.
*   **4xx (Client Error):**
    *   `400 Bad Request`: The server cannot process the request due to a client error (e.g., invalid syntax).
    *   `401 Unauthorized`: The client must authenticate itself to get the requested response.
    *   `403 Forbidden`: The client does not have access rights to the content.
    *   `404 Not Found`: The server cannot find the requested resource.
    *   `405 Method Not Allowed`: The request method is known by the server but is not supported by the target resource.
    *   `409 Conflict`: The request could not be completed because of a conflict with the current state of the resource.
*   **5xx (Server Error):**
    *   `500 Internal Server Error`: The server encountered an unexpected condition that prevented it from fulfilling the request.
    *   `503 Service Unavailable`: The server is not ready to handle the request.

#### Error Handling Strategies:

*   **Check `response.statusCode`:** Always check the status code to determine if the request was successful.
*   **Parse Error Messages:** If an error occurs, the server might return an error message in the `response.body`. You can parse this to provide more specific feedback to the user.
*   **Network Connectivity:** Use packages like `connectivity_plus` to check for internet availability before making requests.
*   **Timeouts:** Implement timeouts for requests to prevent the app from hanging indefinitely if a response is delayed. The `http` package doesn't have a direct timeout parameter, but you can use `Future.timeout`.

```dart
import 'package:http/http.dart' as http;
import 'dart:async'; // For Future.timeout

Future<void> fetchDataWithTimeout() async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/users');
  try {
    final response = await http.get(url).timeout(
      const Duration(seconds: 10), // Timeout after 10 seconds
      onTimeout: () {
        // Callback when timeout occurs
        throw TimeoutException("Request timed out");
      },
    );

    if (response.statusCode == 200) {
      print('Response body: ${response.body}');
    } else {
      print('Request failed with status: ${response.statusCode}');
      // You might want to parse error details from response.body here
    }
  } on TimeoutException catch (e) {
    print('Error: $e');
    // Inform the user about the timeout
  } catch (e) {
    print('Error fetching data: $e');
    // Inform the user about other network errors
  }
}
```

---

### 4. Parsing JSON Data

Once you receive data from an API, it's usually in JSON format. You need to convert this JSON string into Dart objects to work with it in your app.

#### Manual JSON Parsing:

You can manually parse JSON strings using Dart's `dart:convert` library.

```dart
import 'dart:convert';

// Assume response.body is a JSON string like:
/*
[
  {"id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz"},
  {"id": 2, "name": "Ervin Howell", "email": "Shanna@melissa.tv"}
]
*/

void parseUsers(String jsonString) {
  try {
    List<dynamic> usersList = jsonDecode(jsonString); // Decodes JSON string to Dart List/Map

    for (var user in usersList) {
      int id = user['id'];
      String name = user['name'];
      String email = user['email'];
      print('User: ID=$id, Name=$name, Email=$email');
    }
  } catch (e) {
    print('Error parsing JSON: $e');
  }
}

// Example usage:
// String jsonResponse = '[{"id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz"}]';
// parseUsers(jsonResponse);
```

**Key Points for Manual Parsing:**

*   `jsonDecode()`: Converts a JSON string into Dart objects (`Map`, `List`, `String`, `num`, `bool`, `null`).
*   Accessing data: Use square bracket notation (`user['key']`) to access values in a `Map`.
*   Type casting: You might need to cast values to their expected types (e.g., `user['id'] as int`).

#### Using JSON Serialization (Recommended):

For more complex data structures, manual parsing becomes tedious and error-prone. JSON serialization (converting Dart objects to JSON and vice-versa) is a much cleaner and maintainable approach.

**Step 1: Define Dart Models:**
Create Dart classes that represent your JSON data structure.

```dart
class User {
  final int id;
  final String name;
  final String email;

  User({required this.id, required this.name, required this.email});

  // Factory constructor to create a User from a JSON Map
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'],
      name: json['name'],
      email: json['email'],
    );
  }

  // Method to convert a User object to a JSON Map
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
    };
  }
}
```

**Step 2: Use Models with `http` package:**

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<List<User>> fetchUsers() async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/users');
  try {
    final response = await http.get(url);

    if (response.statusCode == 200) {
      List<dynamic> usersJson = jsonDecode(response.body);
      List<User> users = usersJson.map((json) => User.fromJson(json)).toList();
      return users;
    } else {
      throw Exception('Failed to load users');
    }
  } catch (e) {
    throw Exception('Error fetching users: $e');
  }
}

// In your Flutter UI code:
// FutureBuilder<List<User>>(
//   future: fetchUsers(),
//   builder: (context, snapshot) {
//     if (snapshot.hasData) {
//       List<User> users = snapshot.data!;
//       // Display users
//       return ListView.builder(
//         itemCount: users.length,
//         itemBuilder: (context, index) {
//           return ListTile(title: Text(users[index].name));
//         },
//       );
//     } else if (snapshot.hasError) {
//       return Text('${snapshot.error}');
//     }
//     // By default, show a loading spinner.
//     return const CircularProgressIndicator();
//   },
// )
```

**Step 3: Generating JSON Serialization Code (Recommended for larger projects):**
For more complex data and to automate the process, use packages like `json_serializable`.

1.  Add dependencies to `pubspec.yaml`:

    ```yaml
    dependencies:
      # ...
      json_annotation: ^4.7.0 # Use the latest version

    dev_dependencies:
      # ...
      build_runner: ^2.4.0 # Use the latest version
      json_serializable: ^6.6.0 # Use the latest version
    ```

2.  Run `flutter pub get`.

3.  Annotate your Dart models:

    ```dart
    import 'package:json_annotation/json_annotation.dart';

    part 'user.g.dart'; // This file will be generated

    @JsonSerializable()
    class User {
      final int id;
      final String name;
      final String email;

      User({required this.id, required this.name, required this.email});

      factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
      Map<String, dynamic> toJson() => _$UserToJson(this);
    }
    ```

4.  Run the build runner to generate the `.g.dart` file:

    ```bash
    flutter pub run build_runner build
    ```
    Or for continuous watching:
    ```bash
    flutter pub run build_runner watch
    ```

    This will create `user.g.dart` with the necessary `fromJson` and `toJson` methods, making your code much cleaner.

---

### 5. Converting Dart Objects to JSON

This is the reverse of parsing. You need to convert Dart objects into a JSON string to send to an API. This is done using the `toJson()` method of your Dart models and `jsonEncode()`.

```dart
// Assuming you have a User object:
User newUser = User(id: 10, name: 'Jane Doe', email: 'jane.doe@example.com');

// Convert Dart object to JSON Map using the toJson method
Map<String, dynamic> userJsonMap = newUser.toJson();

// Encode the Map to a JSON String
String jsonStringToSend = jsonEncode(userJsonMap);

print(jsonStringToSend); // Output: {"id":10,"name":"Jane Doe","email":"jane.doe@example.com"}

// Now you can send this jsonStringToSend in the body of a POST or PUT request.
```

---

### 6. Implementing Efficient Networking Patterns

*   **Asynchronous Operations:** Use `async` and `await` extensively for non-blocking network requests.
*   **State Management:** Integrate network calls with your chosen state management solution (e.g., Provider, Riverpod, BLoC) to efficiently update the UI with fetched data or error states.
*   **Error Handling and User Feedback:** Always handle potential errors gracefully. Show loading indicators, display meaningful error messages to the user, and offer retry options.
*   **Data Caching:** For frequently accessed data that doesn't change often, consider implementing a caching layer to reduce network requests and improve performance.
*   **Pagination:** If an API returns a large list of items, use pagination to fetch data in smaller chunks, improving initial load times and reducing memory usage.
*   **Request Cancellation:** For long-running requests, implement mechanisms to cancel them if the user navigates away from the screen, preventing unnecessary resource consumption and potential crashes.

---

### 7. Utilizing Popular Flutter Packages for Networking

While the `http` package is fundamental, other packages can simplify networking tasks:

*   **`dio`:** A powerful HTTP client for Dart and Flutter, featuring interceptors, request cancellation, FormData, stream downloading, timeout management, and more. It's often preferred over the `http` package for its rich features.

    **Example with `dio`:**

    ```dart
    import 'package:dio/dio.dart';

    Future<void> fetchUsersWithDio() async {
      final dio = Dio();
      try {
        final response = await dio.get('https://jsonplaceholder.typicode.com/users');

        if (response.statusCode == 200) {
          print('Response data: ${response.data}'); // Dio automatically decodes JSON to Map/List
          // You can still use json_serializable with response.data
        } else {
          print('Request failed with status: ${response.statusCode}');
        }
      } catch (e) {
        print('Error fetching data with Dio: $e');
      }
    }
    ```

*   **`http_interceptor`:** A package that allows you to add interceptors to the `http` package, enabling you to modify requests or responses globally (e.g., adding authentication headers, logging).
*   **`retrofit`:** A type-safe HTTP client generator for Dart that generates boilerplate code for making requests and parsing responses, often used with `json_annotation`.

---

### Important Points to Remember:

*   **`async` and `await`:** Essential for handling asynchronous network operations.
*   **`Uri.parse()`:** Always convert URL strings to `Uri` objects.
*   **`Content-Type` Header:** Crucial for POST/PUT requests, especially when sending JSON.
*   **Error Handling:** Always include `try-catch` blocks and check `response.statusCode`.
*   **JSON Serialization:** Use `dart:convert` for manual parsing or `json_serializable` for robust and maintainable JSON handling.
*   **State Management:** Integrate network calls with your app's state management for a smooth user experience.
*   **Network Security:** For production apps, consider using `https` for secure communication. Flutter handles certificate pinning for enhanced security.

---

### Practice Questions and Exercises:

**Question 1:**
What is the primary difference between HTTP GET and POST requests?
*   **Answer:** GET requests are used to retrieve data and are generally safe to repeat (idempotent), while POST requests are used to submit data for processing, often for creating new resources, and are not idempotent.

**Question 2:**
You receive a JSON string from an API: `{"message": "User created successfully", "userId": 123}`. How would you parse this into a Dart Map and extract the `userId`?
*   **Answer:**
    ```dart
    import 'dart:convert';

    String responseString = '{"message": "User created successfully", "userId": 123}';
    Map<String, dynamic> data = jsonDecode(responseString);
    int userId = data['userId'];
    print('User ID: $userId'); // Output: User ID: 123
    ```

**Question 3:**
Write a Flutter function using the `http` package that performs a PUT request to update a user's email. Assume the API endpoint is `https://api.example.com/users/{userId}` and you want to update the user with ID 5 to the email `new.email@example.com`.
*   **Answer:**
    ```dart
    import 'package:http/http.dart' as http;
    import 'dart:convert';

    Future<void> updateUserEmail(int userId, String newEmail) async {
      final url = Uri.parse('https://api.example.com/users/$userId');
      try {
        final response = await http.put(
          url,
          headers: {'Content-Type': 'application/json; charset=UTF-8'},
          body: jsonEncode(<String, String>{
            'email': newEmail,
          }),
        );

        if (response.statusCode == 200) {
          print('Email updated successfully.');
        } else {
          print('Failed to update email. Status code: ${response.statusCode}');
          print('Response: ${response.body}');
        }
      } catch (e) {
        print('Error updating email: $e');
      }
    }

    // To call:
    // updateUserEmail(5, 'new.email@example.com');
    ```

**Exercise:**
1.  Create a Flutter project.
2.  Add the `http` package and `json_serializable` (with `build_runner`) to your `pubspec.yaml`.
3.  Create a `User` model class (as shown in the notes) and generate its `g.dart` file.
4.  Implement a function that fetches a list of users from `https://jsonplaceholder.typicode.com/users` using `fetchUsers()` from the notes.
5.  Display the names of the fetched users in a `ListView` in your Flutter app.
6.  Add a button that, when pressed, calls a function to create a new user (e.g., with `name: "Test User"` and `email: "test@example.com"`) using a POST request to `https://jsonplaceholder.typicode.com/users`. Print the response.

---
