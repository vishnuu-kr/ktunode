---
title: "Working with Firebase: Authentication, Firestore, Cloud Functions"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 3: Advanced Flutter Development:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bde6"
status: "completed"
scrapedAt: "2026-05-20T16:55:35.237Z"
---
# MOBILE APPLICATION DEVELOPMENT - Module 3: Advanced Flutter Development - Working with Firebase

## Topic: Working with Firebase: Authentication, Firestore, Cloud Functions

**Description:** This module covers integrating Firebase services (Authentication, Firestore, Cloud Functions) into Flutter applications for robust backend functionality.

**Learning Outcomes:**

*   Understand and implement Firebase Authentication for user management.
*   Integrate Firestore as a NoSQL database for storing and retrieving data.
*   Utilize Cloud Functions to execute server-side logic in response to events.
*   Learn how to structure data in Firestore for optimal performance and scalability.
*   Secure Firebase services and data using appropriate security rules.

---

## 1. Firebase Authentication

### 1.1. Key Concepts and Definitions

*   **Authentication:**  The process of verifying a user's identity. Firebase Authentication provides a backend service to handle this for your app.
*   **User Provider:** Methods for authenticating users (e.g., email/password, Google, Facebook, Apple).
*   **Firebase Auth SDK:** The Flutter package used to interact with Firebase Authentication.
*   **User Object:**  Represents a logged-in user in your app. Contains information like user ID, email, and provider details.
*   **Sign-in Methods:**  Different ways users can authenticate, such as:
    *   Email/Password
    *   Google Sign-In
    *   Facebook Login
    *   Apple Sign-In
    *   Phone Number Authentication (SMS)
    *   Anonymous Authentication

### 1.2. Implementing Firebase Authentication in Flutter

**Steps:**

1.  **Firebase Project Setup:**
    *   Create a Firebase project in the Firebase Console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).
    *   Add your Flutter app to the project (provide package name/bundle ID).
    *   Download `google-services.json` (Android) or `GoogleService-Info.plist` (iOS) and place them in the correct directories in your Flutter project.
    *   Enable the desired authentication methods in the Firebase Console (e.g., Email/Password, Google).

2.  **Flutter Dependency:**
    *   Add the `firebase_auth` dependency to your `pubspec.yaml` file:

    ```yaml
    dependencies:
      firebase_core: ^2.0.0 # Ensure core is setup
      firebase_auth: ^4.0.0
    ```

    *   Run `flutter pub get`.

3.  **Initialize Firebase:**
    *   Initialize Firebase in your main application widget, typically within `main.dart`:

    ```dart
    import 'package:firebase_core/firebase_core.dart';
    import 'package:flutter/material.dart';

    void main() async {
      WidgetsFlutterBinding.ensureInitialized();
      await Firebase.initializeApp(); // Initialize Firebase
      runApp(MyApp());
    }
    ```

4.  **Authentication Logic:**

    *   **Creating a User with Email/Password:**

    ```dart
    import 'package:firebase_auth/firebase_auth.dart';

    Future<void> createUserWithEmailAndPassword(String email, String password) async {
      try {
        final credential = await FirebaseAuth.instance.createUserWithEmailAndPassword(
          email: email,
          password: password,
        );
        print('User created: ${credential.user?.uid}');
      } on FirebaseAuthException catch (e) {
        if (e.code == 'weak-password') {
          print('The password provided is too weak.');
        } else if (e.code == 'email-already-in-use') {
          print('The account already exists for that email.');
        }
        print(e);
      } catch (e) {
        print(e);
      }
    }
    ```

    *   **Signing in with Email/Password:**

    ```dart
    import 'package:firebase_auth/firebase_auth.dart';

    Future<void> signInWithEmailAndPassword(String email, String password) async {
      try {
        final credential = await FirebaseAuth.instance.signInWithEmailAndPassword(
          email: email,
          password: password,
        );
        print('User signed in: ${credential.user?.uid}');
      } on FirebaseAuthException catch (e) {
        if (e.code == 'user-not-found') {
          print('No user found for that email.');
        } else if (e.code == 'wrong-password') {
          print('Wrong password provided for that user.');
        }
        print(e);
      } catch (e) {
        print(e);
      }
    }
    ```

    *   **Signing Out:**

    ```dart
    import 'package:firebase_auth/firebase_auth.dart';

    Future<void> signOut() async {
      await FirebaseAuth.instance.signOut();
      print('User signed out');
    }
    ```

    *   **Observing Authentication State:**

    ```dart
    StreamBuilder<User?>(
      stream: FirebaseAuth.instance.authStateChanges(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          // User is signed in
          return HomeScreen(); // Replace with your home screen widget
        } else {
          // User is signed out
          return LoginScreen(); // Replace with your login screen widget
        }
      },
    )
    ```

### 1.3. Security Rules for Firebase Authentication

*   Authentication is the foundation for securing your Firebase services.
*   Firebase Security Rules define who can access your data in Firestore and Cloud Storage.  They are defined in the Firebase Console.
*   Example: Allow only authenticated users to read and write to a Firestore collection:

    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{userId} {
          allow read, write: if request.auth != null && request.auth.uid == userId;
        }
      }
    }
    ```

    **Explanation:**

    *   `request.auth != null`: Checks if the user is authenticated.
    *   `request.auth.uid == userId`:  Checks if the authenticated user's ID matches the `userId` in the document path (e.g., `/users/{userId}`). This ensures users can only access their own data.

### 1.4. Important Points to Remember

*   **Error Handling:**  Always handle potential errors during authentication (e.g., invalid email, weak password, user not found).
*   **UI/UX:** Provide clear feedback to users about the authentication process.
*   **Security:**  Never store sensitive information (e.g., passwords) directly in your app. Rely on Firebase Authentication to handle this securely.
*   **Social Login:**  When implementing social login (Google, Facebook), carefully follow the setup instructions in the Firebase Console and obtain the necessary API keys/secrets.
*   **Password Reset:**  Implement password reset functionality using `FirebaseAuth.instance.sendPasswordResetEmail(email: email);`

---

## 2. Firestore

### 2.1. Key Concepts and Definitions

*   **NoSQL Database:**  A database that doesn't use the traditional relational database schema (tables, rows, columns). Firestore is a NoSQL document database.
*   **Document:** The basic unit of data in Firestore.  A document is a JSON-like structure containing fields (key-value pairs).
*   **Collection:**  A group of documents. Collections can contain other collections (subcollections), allowing for hierarchical data structures.
*   **Document ID:** A unique identifier for each document within a collection. Can be automatically generated or specified manually.
*   **Data Modeling:**  Designing the structure of your data in Firestore (collections, documents, fields) to optimize performance and scalability.
*   **Queries:** Used to retrieve specific documents from a collection based on certain criteria.
*   **Realtime Updates:** Firestore provides realtime listeners that automatically update your app whenever data changes.
*   **Transactions:** A set of operations that are performed atomically (all or nothing). Used to ensure data consistency.
*   **Batched Writes:** A way to perform multiple write operations at once, improving performance.
*   **Indexes:** Used to optimize query performance.  Firebase automatically indexes fields, but you may need to create composite indexes for more complex queries.

### 2.2. Integrating Firestore in Flutter

**Steps:**

1.  **Firebase Project Setup:** (Same as Authentication - make sure Firestore is enabled in the console).
2.  **Flutter Dependency:**
    *   Add the `cloud_firestore` dependency to your `pubspec.yaml` file:

    ```yaml
    dependencies:
      firebase_core: ^2.0.0 # Ensure core is setup
      cloud_firestore: ^4.0.0
    ```

    *   Run `flutter pub get`.

3.  **Accessing Firestore:**

    ```dart
    import 'package:cloud_firestore/cloud_firestore.dart';

    final FirebaseFirestore db = FirebaseFirestore.instance; // Get a Firestore instance
    ```

4.  **CRUD Operations (Create, Read, Update, Delete):**

    *   **Creating a Document:**

    ```dart
    Future<void> addData() async {
        try {
          await db.collection("users").add({
            "firstName": "John",
            "lastName": "Doe",
            "age": 30
          });
          print("Data added successfully");
        } catch (e) {
          print("Error adding data: $e");
        }
    }
    ```

    *   **Creating a Document with a Specific ID:**

    ```dart
    Future<void> addDataWithId(String userId) async {
        try {
          await db.collection("users").doc(userId).set({
            "firstName": "Jane",
            "lastName": "Smith",
            "age": 25
          });
          print("Data added successfully with ID: $userId");
        } catch (e) {
          print("Error adding data: $e");
        }
    }
    ```

    *   **Reading a Single Document:**

    ```dart
    Future<void> readData(String userId) async {
      try {
        DocumentSnapshot doc = await db.collection("users").doc(userId).get();
        if (doc.exists) {
          print("Document data: ${doc.data()}");
          // Access specific fields:
          print("First Name: ${doc.get('firstName')}");
        } else {
          print("No such document!");
        }
      } catch (e) {
        print("Error reading data: $e");
      }
    }
    ```

    *   **Reading All Documents in a Collection:**

    ```dart
    Future<void> readAllData() async {
        try {
          QuerySnapshot querySnapshot = await db.collection("users").get();
          for (var doc in querySnapshot.docs) {
            print("Document data: ${doc.data()}");
          }
        } catch (e) {
          print("Error reading data: $e");
        }
    }
    ```

    *   **Updating a Document:**

    ```dart
    Future<void> updateData(String userId) async {
        try {
          await db.collection("users").doc(userId).update({
            "age": 31,
            "updatedAt": FieldValue.serverTimestamp(), // Store update timestamp
          });
          print("Data updated successfully");
        } catch (e) {
          print("Error updating data: $e");
        }
    }
    ```

    *   **Deleting a Document:**

    ```dart
    Future<void> deleteData(String userId) async {
        try {
          await db.collection("users").doc(userId).delete();
          print("Data deleted successfully");
        } catch (e) {
          print("Error deleting data: $e");
        }
    }
    ```

5.  **Querying Data:**

    ```dart
    Future<void> queryData() async {
      try {
        QuerySnapshot querySnapshot = await db.collection("users")
            .where("age", isGreaterThan: 25)
            .orderBy("age") // Optional: order the results
            .limit(10) // Optional: limit the number of results
            .get();

        for (var doc in querySnapshot.docs) {
          print("Document data: ${doc.data()}");
        }
      } catch (e) {
        print("Error querying data: $e");
      }
    }
    ```

6.  **Realtime Updates (Listening for Changes):**

    ```dart
    StreamBuilder<QuerySnapshot>(
      stream: FirebaseFirestore.instance.collection('users').snapshots(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return Text('Something went wrong');
        }

        if (snapshot.connectionState == ConnectionState.waiting) {
          return Text("Loading");
        }

        return ListView(
          children: snapshot.data!.docs.map((DocumentSnapshot document) {
            Map<String, dynamic> data = document.data()! as Map<String, dynamic>;
            return ListTile(
              title: Text(data['firstName']),
              subtitle: Text(data['lastName']),
            );
          }).toList(),
        );
      },
    )
    ```

### 2.3. Data Modeling in Firestore

*   Consider the relationships between your data.
*   Use subcollections to organize related data (e.g., `users/userId/posts`).
*   Avoid deeply nested subcollections for performance reasons.
*   Denormalization:  It's often okay to duplicate data across collections to improve query performance.  For example, you might store a user's name in multiple collections that reference the user.
*   Consider using document IDs that are meaningful (e.g., using a user ID as the document ID for the user's profile).

### 2.4. Security Rules for Firestore

*   Define security rules in the Firebase Console to control access to your data.
*   Use `request.auth` to check if the user is authenticated.
*   Use `request.resource` to check the data being written.
*   Use functions to encapsulate complex logic in your security rules.
*   Example: Allow only authenticated users to read data, but only allow the user with the corresponding ID to write:

    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{userId} {
          allow read: if request.auth != null;
          allow write: if request.auth != null && request.auth.uid == userId;
        }
      }
    }
    ```

### 2.5. Important Points to Remember

*   **Security:**  Secure your Firestore data using appropriate security rules.  Never leave your database open to the public.
*   **Data Modeling:**  Carefully plan your data model to optimize performance and scalability.
*   **Query Optimization:**  Use indexes to improve query performance.  Avoid queries that require scanning the entire collection.
*   **Realtime Updates:**  Use realtime listeners sparingly to avoid unnecessary data transfers.
*   **Transactions:**  Use transactions to ensure data consistency when performing multiple write operations.
*   **Error Handling:**  Handle potential errors during database operations (e.g., network errors, permission denied).
*   **Cost Management:**  Be aware of Firestore's pricing model (storage, reads, writes, network egress).  Optimize your data model and queries to minimize costs.

---

## 3. Cloud Functions

### 3.1. Key Concepts and Definitions

*   **Serverless Computing:**  A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.  You don't need to manage servers.
*   **Cloud Functions:**  Event-driven, serverless compute functions that run in the cloud.
*   **Triggers:** Events that cause a Cloud Function to execute (e.g., a document is created in Firestore, a user is authenticated).
*   **HTTP Functions:**  Cloud Functions that are triggered by HTTP requests.
*   **Callable Functions:** Cloud Functions that can be called directly from your Flutter app.  These are secured using JWT authentication.
*   **Background Functions:** Cloud Functions that are triggered by events in Firebase services (e.g., Firestore, Authentication, Storage).
*   **Node.js:**  The runtime environment used to execute Cloud Functions (JavaScript/TypeScript).

### 3.2. Setting Up Cloud Functions

1.  **Firebase Project Setup:** (Ensure Cloud Functions is enabled in the console).
2.  **Firebase CLI:**
    *   Install the Firebase CLI: `npm install -g firebase-tools`
    *   Log in to Firebase: `firebase login`
    *   Initialize Cloud Functions: `firebase init functions` (select JavaScript or TypeScript).  This will create a `functions` directory in your project.
3.  **Dependencies:**
    *   Install necessary dependencies in the `functions` directory using `npm install`.  Common dependencies include `firebase-functions`, `firebase-admin`, and any other libraries your function needs.
4.  **Writing Cloud Functions:**

    *   Example: HTTP Function (written in `functions/index.js` or `functions/src/index.ts`):

    ```javascript
    const functions = require("firebase-functions");
    const admin = require('firebase-admin');
    admin.initializeApp();


    exports.helloWorld = functions.https.onRequest((request, response) => {
      functions.logger.info("Hello logs!", {structuredData: true});
      response.send("Hello from Firebase!");
    });

    exports.addUserToFirestore = functions.auth.user().onCreate((user) => {
        return admin.firestore().collection('users').doc(user.uid).set({
            email: user.email,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
    });
    ```

    *   Example: Firestore Trigger Function (triggered when a document is created in the `items` collection):

    ```javascript
    const functions = require("firebase-functions");
    const admin = require('firebase-admin');
    admin.initializeApp();

    exports.onItemCreated = functions.firestore
        .document('items/{itemId}')
        .onCreate((snapshot, context) => {
            const newItem = snapshot.data();
            console.log('New item created:', newItem);

            // Perform some action, e.g., update another document
            return admin.firestore().collection('notifications').add({
                message: `New item added: ${newItem.name}`,
                timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
        });
    ```

    *   Example: Callable Function:

    ```javascript
    const functions = require("firebase-functions");
    const admin = require('firebase-admin');
    admin.initializeApp();

    exports.addNumbers = functions.https.onCall((data, context) => {
      // Check if user is authenticated
      if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated.');
      }

      const number1 = data.number1;
      const number2 = data.number2;

      if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with two numbers.');
      }

      return {
        result: number1 + number2
      };
    });
    ```

5.  **Deploying Cloud Functions:**

    *   Run `firebase deploy --only functions` from your project's root directory.

### 3.3. Calling Cloud Functions from Flutter

*   **HTTP Functions:**  Use the `http` package to make HTTP requests to the function URL.

    ```dart
    import 'package:http/http.dart' as http;

    Future<void> callHelloWorldFunction() async {
      final url = Uri.parse('YOUR_CLOUD_FUNCTION_URL'); // Replace with your function URL
      final response = await http.get(url);

      if (response.statusCode == 200) {
        print('Function response: ${response.body}');
      } else {
        print('Error calling function: ${response.statusCode}');
      }
    }
    ```

*   **Callable Functions:**  Use the `cloud_functions` package to call the function directly.

    ```dart
    import 'package:cloud_functions/cloud_functions.dart';

    Future<void> callAddNumbersFunction() async {
      try {
        final HttpsCallable callable = FirebaseFunctions.instance.httpsCallable('addNumbers');
        final results = await callable.call(<String, dynamic>{
          'number1': 5,
          'number2': 10,
        });
        print(results.data);  // Output: {result: 15}
      } catch (e) {
        print('Error calling function: $e');
      }
    }
    ```

### 3.4. Use Cases for Cloud Functions

*   **Data Validation:**  Validate data before it's written to Firestore.
*   **Image Resizing:**  Automatically resize images uploaded to Cloud Storage.
*   **Sending Notifications:**  Send push notifications to users based on events in your app.
*   **Background Processing:**  Perform tasks that are too complex or time-consuming to run in the client app (e.g., generating reports, sending emails).
*   **Integrating with Third-Party APIs:**  Access third-party APIs from your Cloud Functions (more secure than doing it from the client).
*   **Implementing Business Logic:**  Implement business logic that should not be exposed to the client.

### 3.5. Security Rules for Cloud Functions

*   Cloud Functions run with admin privileges, so they can bypass Firestore security rules.
*   Carefully control access to your Cloud Functions.
*   Use authentication to verify the identity of users calling your Cloud Functions.
*   Validate input data to prevent security vulnerabilities.

### 3.6. Important Points to Remember

*   **Security:**  Secure your Cloud Functions to prevent unauthorized access.
*   **Error Handling:**  Handle potential errors in your Cloud Functions (e.g., network errors, API errors).
*   **Logging:**  Use logging to monitor the performance and debug your Cloud Functions.
*   **Testing:**  Test your Cloud Functions thoroughly before deploying them to production.
*   **Cold Starts:**  Be aware of the potential for cold starts (the first time a Cloud Function is executed after a period of inactivity).  Optimize your code to minimize cold start latency.
*   **Timeouts:**  Cloud Functions have a maximum execution time (60 seconds for HTTP functions, 9 minutes for background functions).  Ensure your functions complete within this time limit.
*   **Cost Management:**  Be aware of Cloud Functions' pricing model (invocations, compute time, network egress).  Optimize your code to minimize costs.

---

## Practice Questions/Exercises

**1. Firebase Authentication:**

*   **Question:**  Describe the different methods for authenticating users with Firebase Authentication. What are the advantages and disadvantages of each method?
*   **Answer:**
    *   *Email/Password*: Simple and widely used.  Disadvantage: Requires users to remember a password.
    *   *Google, Facebook, Apple Sign-In*:  Convenient for users. Disadvantage: Requires users to have accounts with these providers; app requires more configuration and compliance adherence.
    *   *Phone Number Authentication*:  Secure and reliable (SMS verification). Disadvantage: Can be more expensive (SMS costs).
    *   *Anonymous Authentication*:  Allows users to use the app without creating an account. Disadvantage:  Lacks persistence across devices; user data can be lost if the app is uninstalled.

*   **Exercise:**  Implement email/password sign-up and sign-in functionality in a Flutter app using Firebase Authentication. Display a simple "Welcome" message with the user's email after successful sign-in. If the user is not signed in, display the login screen.

**2. Firestore:**

*   **Question:** Explain the difference between a Collection and a Document in Firestore. How do you query for data in Firestore?
*   **Answer:**
    *   *Collection:* A group of documents. Think of it as a table in a relational database.
    *   *Document:* A single record containing fields (key-value pairs). Think of it as a row in a table.
    *   *Querying:* Use `collection("collectionName").where("fieldName", isEqualTo: "value").get()` or similar methods to retrieve data based on conditions.

*   **Exercise:**  Create a Firestore collection called "products" with fields like "name," "price," and "category."  Write a Flutter app that displays a list of products from the "products" collection in a `ListView`.  Allow users to filter the products by category.

**3. Cloud Functions:**

*   **Question:** What are Cloud Functions, and why would you use them in a Flutter app? Give three examples of use cases.
*   **Answer:**
    *   Cloud Functions are serverless functions that run in the cloud.
    *   Use them for backend logic, data processing, integrations, and security.
    *   Examples: Sending welcome emails after user sign-up, resizing images uploaded to Cloud Storage, performing complex calculations in the background.

*   **Exercise:** Write a Cloud Function that is triggered when a new user signs up. The function should add the user's email and a timestamp to a "users" collection in Firestore. Then, call this function from a test Flutter app, simulating the creation of a new user. (You can mock the user creation for testing purposes).

**Answers to Exercises (Conceptual):**

*   **Firebase Auth Exercise:** Requires creating UI elements for email/password input, buttons for sign-up and sign-in, and using the `firebase_auth` package to call the authentication methods.  Use `StreamBuilder` with `FirebaseAuth.instance.authStateChanges()` to display the correct screen based on the authentication state.

*   **Firestore Exercise:** Requires creating a `ListView.builder` that fetches data from Firestore using `FirebaseFirestore.instance.collection("products").snapshots()`. Use the `snapshot.data!.docs` to access the data in the documents. The filtering logic can be implemented using a `where` clause in the Firestore query or by filtering the data locally in Flutter after fetching it.

*   **Cloud Functions Exercise:** The Cloud Function will use the `firebase-functions` and `firebase-admin` packages. Deploy the function to Firebase. In the Flutter app, you'll need to mock the user creation event (since you don't want to actually create a new user every time you test). For instance, you could have a button that, when pressed, simulates a user creation and triggers the function.
---

This comprehensive set of notes covers the key concepts and implementation details for using Firebase Authentication, Firestore, and Cloud Functions with Flutter.  Remember to practice building small projects to solidify your understanding and gain hands-on experience.  Good luck!
