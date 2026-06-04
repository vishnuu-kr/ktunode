---
title: "Angular JS"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc4a"
status: "completed"
scrapedAt: "2026-05-20T17:28:38.590Z"
---
# WEB PROGRAMMING - Module 4: SPA – Basics

## Topic: AngularJS

This module introduces the fundamental concepts of Angular JS, a powerful JavaScript framework for building single-page applications (SPAs).

---

### Learning Outcomes Covered:

*   **Understand the core concepts and advantages of AngularJS.**
*   **Explore the MVC (Model-View-Controller) architecture as applied in AngularJS.**
*   **Learn about Directives and their role in extending HTML.**
*   **Familiarize yourself with Data Binding and its various types.**
*   **Understand the concept of Controllers and their functions.**
*   **Explore the $scope object and its importance.**
*   **Learn about Services and their utility.**
*   **Grasp the concept of Modules in AngularJS.**
*   **Understand how to create a basic AngularJS application.**
*   **Explore various filters in AngularJS.**

---

### 1. Core Concepts and Advantages of AngularJS

AngularJS is a **client-side JavaScript framework** maintained by Google. It's designed to simplify the development of **Single-Page Applications (SPAs)**.

**Key Concepts:**

*   **Single-Page Application (SPA):** An application that loads a single HTML page and dynamically updates content as the user interacts with the app, without full page reloads.
*   **Declarative Programming:** Instead of telling the computer *how* to do something (imperative), you tell it *what* you want (declarative). AngularJS allows you to describe the desired UI state.
*   **Data Binding:** The automatic synchronization of data between the model (JavaScript object) and the view (HTML).
*   **Dependency Injection:** A design pattern where components are provided with their dependencies rather than creating them themselves.

**Advantages of AngularJS:**

*   **Rapid Development:** Built-in features and conventions speed up the development process.
*   **Testability:** Designed with testability in mind, making it easier to write unit and end-to-end tests.
*   **Maintainability:** MVC architecture and modularity improve code organization and maintainability.
*   **Extensibility:** Directives and services allow for customization and extension of functionality.
*   **Two-Way Data Binding:** Simplifies UI updates by automatically reflecting changes between the model and view.
*   **Routing:** Built-in routing capabilities for navigating between different views within an SPA.

---

### 2. MVC (Model-View-Controller) Architecture in AngularJS

AngularJS follows a variation of the MVC pattern, often referred to as **MV\* (Model-View-Whatever)**.

*   **Model:** Represents the data and business logic of the application. In AngularJS, this is typically a JavaScript object.
*   **View:** The user interface (UI) that displays the data from the model. This is usually an HTML template.
*   **Controller:** Acts as a bridge between the Model and the View. It handles user input, updates the Model, and prepares data for the View. In AngularJS, controllers are JavaScript constructor functions.

**How it works in AngularJS:**

1.  The **View** (HTML template) contains placeholders and directives that bind to data from the **Model**.
2.  The **Controller** is associated with a specific View. It initializes the Model and provides methods to interact with it.
3.  When the **Model** changes (e.g., due to user input or data fetching), the **View** automatically updates due to data binding.
4.  When the user interacts with the **View** (e.g., clicks a button), the associated **Controller** methods are invoked to update the **Model**.

---

### 3. Directives and their Role in Extending HTML

**Directives** are markers on a DOM element (like an attribute, element name, comment, or CSS class) that tell AngularJS's HTML compiler (`$compile`) to attach a specified behavior to that DOM element or even transform the DOM element and its children.

**Purpose of Directives:**

*   Extend HTML with custom attributes and elements.
*   Bind data from the model to the view.
*   Handle user interactions.
*   Create reusable UI components.

**Common Built-in Directives:**

*   `ng-app`: Initializes an AngularJS application. It designates the root element of the application.
    ```html
    <html ng-app="myApp">
      <body>
        <!-- AngularJS app content -->
      </body>
    </html>
    ```
*   `ng-model`: Creates a two-way data binding between an HTML form element (like input, select, textarea) and a model property.
    ```html
    <input type="text" ng-model="userName">
    <p>Hello, {{userName}}!</p>
    ```
*   `ng-bind`: Binds an HTML element's content to an AngularJS expression. One-way binding.
    ```html
    <p ng-bind="userMessage"></p>
    ```
*   `ng-controller`: Associates a controller with a part of the DOM.
    ```html
    <div ng-controller="MyController">
      <!-- Content controlled by MyController -->
    </div>
    ```
*   `ng-repeat`: Repeats a part of the DOM for each item in a collection (e.g., an array).
    ```html
    <ul>
      <li ng-repeat="item in items">{{item.name}}</li>
    </ul>
    ```
*   `ng-click`: Specifies custom behavior to be executed when an element is clicked.
    ```html
    <button ng-click="saveData()">Save</button>
    ```
*   `ng-show` / `ng-hide`: Show or hide an element based on a boolean expression.
    ```html
    <div ng-show="isLoggedIn">Welcome back!</div>
    ```

**Custom Directives:** You can create your own directives to encapsulate reusable UI patterns or logic.

---

### 4. Data Binding and its Various Types

**Data Binding** is the process of synchronizing data between the model (JavaScript) and the view (HTML). AngularJS supports declarative, attribute-style binding.

**Types of Data Binding:**

*   **One-Way Data Binding:** Changes in the model automatically update the view, but changes in the view do not update the model.
    *   **Expression Binding (Interpolation):** Using `{{ expression }}` syntax in the HTML.
        ```html
        <p>User Name: {{ userName }}</p>
        ```
        This will display the value of the `userName` variable from the scope. If `userName` changes, the displayed text updates.
    *   `ng-bind`: Similar to expression binding, but it's an attribute.
        ```html
        <p ng-bind="userMessage"></p>
        ```
        This is generally preferred for performance as it avoids issues with expression flickering during rendering.
    *   `ng-bind-template`: Allows multiple bindings within a single element.
        ```html
        <div ng-bind-template="{{ firstName }} {{ lastName }}"></div>
        ```

*   **Two-Way Data Binding:** Changes in the model update the view, and changes in the view (e.g., user input in an `<input>` field) automatically update the model.
    *   `ng-model`: The primary directive for two-way data binding, typically used with form elements.
        ```html
        <input type="text" ng-model="emailAddress">
        <p>Your email is: {{ emailAddress }}</p>
        ```
        When the user types in the input field, `emailAddress` in the scope is updated. If `emailAddress` is changed programmatically in the controller, the input field's value also updates.

**How it works (internally):** AngularJS uses `$watch` to monitor changes in expressions bound to the scope. When a change is detected, it updates the DOM. For `ng-model`, it also listens for DOM events (like `input`) to update the scope.

---

### 5. Controllers and their Functions

**Controllers** are JavaScript constructor functions that are responsible for the behavior of a specific part of the UI. They are linked to the view using the `ng-controller` directive.

**Key Functions of a Controller:**

*   **Initialize the $scope:** Controllers attach properties and methods to the `$scope` object. These properties hold the data (model) and methods are used to manipulate the data or respond to user actions.
*   **Handle User Input:** Controllers expose functions that can be called from the view (e.g., via `ng-click`, `ng-submit`).
*   **Prepare Data for the View:** Controllers fetch data (e.g., from an API via services) and format it for display in the view.
*   **Manage Application State:** Controllers can help manage the state of their associated view.

**Example of a Controller:**

```javascript
// app.js
var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  // Initialize the $scope
  $scope.greeting = "Hello, AngularJS!";
  $scope.userName = "";
  $scope.items = [
    { name: "Apple", price: 1.0 },
    { name: "Banana", price: 0.5 }
  ];

  // Method to handle user input
  $scope.updateGreeting = function() {
    $scope.greeting = "Hello, " + $scope.userName + "!";
  };
});
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>AngularJS Controller Example</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="MyController">

  <h1>{{ greeting }}</h1>

  <input type="text" ng-model="userName" placeholder="Enter your name">
  <button ng-click="updateGreeting()">Update Greeting</button>

  <h2>Items:</h2>
  <ul>
    <li ng-repeat="item in items">
      {{ item.name }} - ${{ item.price }}
    </li>
  </ul>

</body>
</html>
```

---

### 6. The `$scope` Object and its Importance

The `$scope` object is a **JavaScript object** that acts as the **glue between the Controller and the View**. It is the context in which expressions are evaluated.

**Key Responsibilities of `$scope`:**

*   **Holds Data (Model):** Controller properties are attached to `$scope`.
*   **Exposes Methods:** Controller functions are attached to `$scope` so they can be called from the view.
*   **Facilitates Data Binding:** AngularJS automatically watches properties on the `$scope` for changes and updates the view accordingly.
*   **Hierarchical:** `$scope` objects form a hierarchical structure that mirrors the DOM tree. Child scopes inherit properties from their parent scopes.

**Important Note on `$scope`:**
While `$scope` is fundamental in AngularJS, modern Angular (version 2+) uses a component-based architecture with component classes and `@Input()`/`@Output()` for data sharing, moving away from the explicit `$scope` object. However, for AngularJS (version 1.x), understanding `$scope` is crucial.

---

### 7. Services and their Utility

**Services** are AngularJS singletons that provide reusable functionality. They are typically used for:

*   **Fetching Data:** Making HTTP requests to back-end APIs.
*   **Sharing Data/Logic:** Exchanging data or logic between different controllers.
*   **Utility Functions:** Performing common tasks like logging, form validation, etc.

**Key Characteristics of Services:**

*   **Singletons:** Only one instance of a service is created throughout the application's lifecycle.
*   **Reusable:** Can be injected into controllers, directives, or other services.
*   **Testable:** Their isolated nature makes them easy to test.

**Common AngularJS Services:**

*   `$http`: Used for making HTTP requests.
    ```javascript
    app.controller('DataController', function($scope, $http) {
      $http.get('/api/users').then(function(response) {
        $scope.users = response.data;
      });
    });
    ```
*   `$timeout`: Used to execute a function after a specified delay (similar to `setTimeout`).
*   `$interval`: Used to repeatedly execute a function at a specified interval (similar to `setInterval`).
*   `$location`: Used to read and write the current URL.
*   `$route`: Used to manage routing and parse route parameters.

**Creating Custom Services:**
You can create your own services using `.factory()`, `.service()`, `.provider()`, or `.value()`.

*   **`.factory()`:** Returns an object that defines the service. This is the most common method.
    ```javascript
    app.factory('mySharedService', function() {
      var sharedData = { message: "Initial data" };
      return {
        getData: function() {
          return sharedData;
        },
        setData: function(newData) {
          sharedData = newData;
        }
      };
    });
    ```
*   **`.service()`:** Uses a constructor function. The instance is created with `new`.
    ```javascript
    app.service('myService', function() {
      this.greet = function(name) {
        return "Hello, " + name;
      };
    });
    ```

**Injecting Services:** Services are injected into controllers, directives, or other services by simply listing their names as parameters in the constructor function.

---

### 8. Modules in AngularJS

**Modules** are the primary way to organize an AngularJS application. They encapsulate different parts of your application, such as controllers, services, directives, and filters.

**Benefits of Modules:**

*   **Organization:** Groups related components together.
*   **Configuration:** Allows for setting up application configuration.
*   **Dependency Management:** Modules can depend on other modules, allowing you to build complex applications.

**Creating a Module:**
Use the `.module()` method of `angular`.

```javascript
// app.js
var app = angular.module('myApp', ['ngRoute']); // 'myApp' is the module name, ['ngRoute'] are its dependencies
```

*   `angular.module('moduleName', ['dependency1', 'dependency2', ...])`: This syntax is used to **get** or **create** a module.
    *   If the module with `moduleName` doesn't exist, it's created.
    *   If it exists, it's retrieved, and its configuration can be modified (e.g., by adding components).

**Registering Components:**
Components like controllers, services, and directives are registered with a specific module.

```javascript
// controllers.js
angular.module('myApp').controller('MyController', function($scope) {
  $scope.message = "This is from MyController";
});

// services.js
angular.module('myApp').factory('myFactory', function() {
  return {
    version: '1.0'
  };
});
```

**Dependency Injection of Modules:**
Modules can depend on other modules (including built-in AngularJS modules like `ngRoute`, `ngAnimate`, etc.).

---

### 9. Creating a Basic AngularJS Application

To create a basic AngularJS application, you need:

1.  **An HTML file:** This file will contain your UI and bind your AngularJS application using `ng-app`.
2.  **An AngularJS JavaScript file:** This file will define your module, controllers, services, etc.
3.  **Include the AngularJS library:** Download it or use a CDN.

**Example Structure:**

**`index.html`:**

```html
<!DOCTYPE html>
<html ng-app="mySimpleApp">
<head>
  <title>My First AngularJS App</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="MainController">

  <h1>{{ welcomeMessage }}</h1>

  <input type="text" ng-model="userName" placeholder="Enter your name">
  <p>Hello, {{ userName }}!</p>

  <button ng-click="changeMessage()">Change Welcome Message</button>

</body>
</html>
```

**`app.js`:**

```javascript
// Define the AngularJS module
var app = angular.module('mySimpleApp', []);

// Define the controller and its scope
app.controller('MainController', function($scope) {
  // Initialize the scope variables (Model)
  $scope.welcomeMessage = "Welcome to my AngularJS Application!";
  $scope.userName = "";

  // Define a method for the scope (Controller logic)
  $scope.changeMessage = function() {
    $scope.welcomeMessage = "Message updated!";
  };
});
```

**To run this:**
1.  Save the HTML as `index.html`.
2.  Save the JavaScript as `app.js` in the same directory.
3.  Open `index.html` in your web browser.

You should see the welcome message, an input field, and a button. Typing in the input updates the "Hello, ..." message. Clicking the button changes the main welcome message.

---

### 10. Filters in AngularJS

**Filters** are used to format data displayed in the view. They can be applied in templates using the pipe (`|`) symbol.

**Purpose of Filters:**

*   Format text (uppercase, lowercase, currency, date).
*   Filter arrays based on criteria.
*   Order arrays.
*   Limit the number of displayed items.

**Common Built-in Filters:**

*   `uppercase`: Converts text to uppercase.
    ```html
    <p>{{ "hello world" | uppercase }}</p>  <!-- Output: HELLO WORLD -->
    ```
*   `lowercase`: Converts text to lowercase.
    ```html
    <p>{{ "Hello World" | lowercase }}</p>  <!-- Output: hello world -->
    ```
*   `currency`: Formats a number as currency.
    ```html
    <p>{{ 123.45 | currency }}</p>        <!-- Output: $123.45 -->
    <p>{{ 123.45 | currency:'€' }}</p>   <!-- Output: €123.45 -->
    ```
*   `date`: Formats a date.
    ```html
    <p>{{ currentDate | date:'yyyy-MM-dd' }}</p> <!-- Assuming currentDate is a Date object -->
    ```
*   `filter`: Filters an array based on a given expression.
    ```html
    <ul>
      <li ng-repeat="item in items | filter: { name: 'Apple' }">{{ item.name }}</li>
    </ul>
    ```
*   `orderBy`: Orders an array by a specified property.
    ```html
    <ul>
      <li ng-repeat="item in items | orderBy:'price'">{{ item.name }} - ${{ item.price }}</li>
    </ul>
    ```
*   `limitTo`: Limits the number of items displayed from an array or string.
    ```html
    <ul>
      <li ng-repeat="item in items | limitTo:2">{{ item.name }}</li> <!-- Displays first 2 items -->
    </ul>
    ```

**Chaining Filters:** You can chain multiple filters together.

```html
<p>{{ userName | uppercase | limitTo:5 }}</p> <!-- Converts to uppercase, then takes the first 5 characters -->
```

**Custom Filters:** You can also create your own filters for specific formatting needs.

---

### Important Points to Remember

*   **`ng-app`:** Must be present to bootstrap the AngularJS application.
*   **`ng-model`:** Key for two-way data binding with form elements.
*   **`$scope`:** The central hub for data and behavior shared between the controller and the view.
*   **Directives:** Extend HTML and are the building blocks of AngularJS UI.
*   **Dependency Injection:** Crucial for providing components with their dependencies (controllers, services, etc.).
*   **Modules:** Essential for organizing your application.
*   **Filters:** Use them to format data in the view for a cleaner presentation.
*   **AngularJS (1.x) vs. Angular (2+):** Be aware that this module focuses on AngularJS, the predecessor to modern Angular. Concepts like `$scope` are specific to AngularJS.

---

### Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using AngularJS for building Single-Page Applications?

**Answer:**
AngularJS simplifies the development of SPAs by providing features like two-way data binding, directive-based UI development, and a structured MVC/MV\* architecture, which reduces the need for full page reloads and creates a more dynamic user experience.

---

**Question 2:**
Explain the role of the `$scope` object in AngularJS.

**Answer:**
The `$scope` object acts as the bridge between the controller and the view. It holds the application's data (model) and exposes methods (controller logic) that can be accessed and manipulated from the HTML template. AngularJS uses `$scope` to facilitate data binding, ensuring that changes in the model are reflected in the view and vice-versa (for two-way binding).

---

**Question 3:**
Differentiate between one-way and two-way data binding in AngularJS. Provide an example for each.

**Answer:**
*   **One-Way Data Binding:** Changes in the model update the view, but changes in the view do not update the model.
    *   **Example:** Expression Binding (`{{ }}`) or `ng-bind`.
        ```html
        <p>{{ myMessage }}</p>
        ```
        If `myMessage` changes in the controller, the paragraph's text updates.

*   **Two-Way Data Binding:** Changes in the model update the view, AND changes in the view automatically update the model.
    *   **Example:** `ng-model`.
        ```html
        <input type="text" ng-model="userName">
        <p>Hello, {{ userName }}!</p>
        ```
        When the user types in the input, `userName` in the scope is updated, and the `<p>` tag also reflects this change.

---

**Question 4:**
What is a directive in AngularJS, and name three commonly used built-in directives.

**Answer:**
A directive is a marker on a DOM element (attribute, element name, comment, or CSS class) that tells AngularJS's compiler to attach a specified behavior to that DOM element or transform the DOM element and its children.

Three commonly used built-in directives:
1.  `ng-app`: Initializes an AngularJS application.
2.  `ng-model`: Creates a two-way data binding between a form element and a model.
3.  `ng-repeat`: Iterates over a collection and renders an element for each item.

---

**Exercise 1:**
Create a simple AngularJS application that:
1.  Has an input field bound to a scope variable named `userCity`.
2.  Displays the value of `userCity` using interpolation.
3.  Displays the `userCity` in uppercase using a filter.

**Solution:**

**`index.html`:**
```html
<!DOCTYPE html>
<html ng-app="cityApp">
<head>
  <title>City Filter Example</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="CityController">

  <h2>Enter your city:</h2>
  <input type="text" ng-model="userCity">

  <p>You entered: {{ userCity }}</p>
  <p>In uppercase: {{ userCity | uppercase }}</p>

</body>
</html>
```

**`app.js`:**
```javascript
var app = angular.module('cityApp', []);

app.controller('CityController', function($scope) {
  $scope.userCity = ''; // Initialize the scope variable
});
```

---

**Exercise 2:**
Imagine you have a list of products. Write an AngularJS snippet that displays the product names using `ng-repeat` and filters them to show only products whose name starts with "A".

**Solution:**

**Controller (in `app.js`):**
```javascript
var app = angular.module('productApp', []);

app.controller('ProductController', function($scope) {
  $scope.products = [
    { name: "Apple", price: 1.0 },
    { name: "Banana", price: 0.5 },
    { name: "Apricot", price: 1.2 },
    { name: "Cherry", price: 2.0 }
  ];
});
```

**View (in `index.html`):**
```html
<!DOCTYPE html>
<html ng-app="productApp">
<head>
  <title>Product Filter</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="ProductController">

  <h2>Products starting with "A":</h2>
  <ul>
    <li ng-repeat="product in products | filter: { name: 'A' }">
      {{ product.name }}
    </li>
  </ul>

</body>
</html>
```
*(Note: The `filter: { name: 'A' }` applies a filter to the `products` array, where the `name` property should start with 'A'. AngularJS's `filter` filter is quite flexible.)*
