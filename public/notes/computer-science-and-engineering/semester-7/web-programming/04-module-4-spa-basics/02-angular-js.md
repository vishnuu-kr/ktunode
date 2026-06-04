---
title: "Angular JS"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0eb"
status: "completed"
scrapedAt: "2026-05-20T17:13:17.777Z"
---
# Web Programming: Module 4 - SPA Basics: AngularJS

---

## 1. Introduction to AngularJS

**Learning Outcome:** Understand the foundational concepts of AngularJS and its role in building Single Page Applications (SPAs).

*   **What is AngularJS?**
    *   An open-source JavaScript framework.
    *   Developed and maintained by Google.
    *   Primarily used for building dynamic, client-side web applications, especially Single Page Applications (SPAs).
    *   It extends HTML with new attributes and elements, making HTML itself more expressive and capable.

*   **Key Advantages of AngularJS:**
    *   **Data Binding:** Automatic synchronization of data between the model and the view. Changes in one are reflected in the other.
    *   **Dependency Injection:** A design pattern that facilitates the management of dependencies between different parts of an application.
    *   **MVC/MVVM Architecture:** Encourages a structured approach to building applications, separating concerns.
    *   **Directives:** Extend HTML's syntax with custom attributes and elements to add dynamic behavior.
    *   **Testability:** Designed with testing in mind, making it easier to write unit and integration tests.
    *   **Reusable Components:** Promotes modularity and reusability through components and services.

*   **Role in SPAs:**
    *   SPAs load a single HTML page and dynamically update content as the user interacts with the app.
    *   AngularJS excels at managing this dynamic content updates efficiently through its data binding and routing capabilities.
    *   It reduces the need for full page reloads, providing a smoother user experience.

---

## 2. Core Concepts and Components

**Learning Outcome:** Identify and explain the core components and concepts of AngularJS, including scopes, controllers, directives, and services.

### 2.1. Scopes (`$scope`)

*   **Definition:** A scope is an object that acts as a bridge between the controller and the view. It holds the application data (model) and provides a mechanism for observing model changes.
*   **Purpose:**
    *   To bind data to the HTML view.
    *   To propagate changes between the model and the view (two-way data binding).
    *   To allow controllers to access and manipulate the application's data.
    *   Forms a hierarchical structure, mirroring the DOM tree.
*   **Key Features:**
    *   **Inheritance:** Child scopes inherit properties from their parent scopes.
    *   **Watchers:** Scopes have a `$watch` mechanism to monitor changes in data.
    *   **Events:** Scopes can broadcast and emit events.

*   **Example:**
    ```javascript
    // In a controller
    app.controller('MyController', function($scope) {
        $scope.message = "Hello, AngularJS!";
        $scope.count = 0;

        $scope.increment = function() {
            $scope.count++;
        };
    });
    ```
    ```html
    <!-- In the view -->
    <div ng-controller="MyController">
        <p>{{ message }}</p>
        <p>Count: {{ count }}</p>
        <button ng-click="increment()">Increment</button>
    </div>
    ```

### 2.2. Controllers

*   **Definition:** Controllers are JavaScript constructor functions that are responsible for augmenting the `$scope` object and adding behavior to the HTML view.
*   **Purpose:**
    *   To initialize the `$scope` with data.
    *   To define methods that can be called from the view (e.g., event handlers).
    *   To manage the application's state and logic for a specific part of the view.
*   **How they work:** AngularJS instantiates controllers when it encounters them in the HTML. The controller receives the `$scope` object as an argument, allowing it to manipulate the data.

*   **Example:** (See example in `$scope` section above).

### 2.3. Directives

*   **Definition:** Directives are markers on a DOM element that tell AngularJS's HTML compiler (`$compile`) to attach a specified behavior to that DOM element or even transform the DOM element and its children.
*   **Purpose:**
    *   To extend HTML vocabulary with custom elements and attributes.
    *   To create reusable UI components.
    *   To manipulate the DOM.
*   **Built-in Directives (Examples):**
    *   `ng-app`: Bootstraps an AngularJS application.
    *   `ng-controller`: Associates a controller with a part of the view.
    *   `ng-model`: Creates a two-way binding between an input element and a model property.
    *   `ng-bind`: Binds a model property to an element's text content.
    *   `ng-repeat`: Iterates over a collection and renders an element for each item.
    *   `ng-click`: Executes an expression when an element is clicked.
    *   `ng-show`/`ng-hide`: Conditionally shows or hides an element.
    *   `ng-class`: Dynamically adds/removes CSS classes.
    *   `ng-style`: Dynamically adds inline styles.
*   **Custom Directives:** Developers can create their own directives to encapsulate specific functionalities.

*   **Example:**
    ```html
    <div ng-app="myApp" ng-controller="MyController">
        <input type="text" ng-model="userData.name" placeholder="Enter your name">
        <p>Hello, {{ userData.name }}!</p>
        <ul>
            <li ng-repeat="item in items">{{ item }}</li>
        </ul>
    </div>
    ```
    ```javascript
    // In a controller
    app.controller('MyController', function($scope) {
        $scope.userData = { name: '' };
        $scope.items = ['Apple', 'Banana', 'Cherry'];
    });
    ```

### 2.4. Services

*   **Definition:** Services are singleton objects that are used to organize and share code, business logic, and data across different parts of an AngularJS application.
*   **Purpose:**
    *   To encapsulate reusable logic.
    *   To share data and state between controllers.
    *   To interact with external APIs or data sources.
    *   To promote modularity and maintainability.
*   **Common Built-in Services:**
    *   `$http`: For making HTTP requests to fetch data from servers.
    *   `$timeout`: For executing code after a specified delay.
    *   `$interval`: For repeatedly executing code at fixed time intervals.
    *   `$location`: For interacting with the browser's URL.
    *   `$sce`: For sanitizing HTML to prevent cross-site scripting (XSS) attacks.
*   **Custom Services:** Developers can create their own services using methods like `.factory()`, `.service()`, `.provider()`, and `.value()`.

*   **Example (using a factory):**
    ```javascript
    // Create a data service
    app.factory('DataService', function() {
        var data = {
            message: "Data from service"
        };
        return {
            getData: function() {
                return data;
            }
        };
    });

    // Inject and use the service in a controller
    app.controller('AnotherController', function($scope, DataService) {
        $scope.serviceData = DataService.getData();
    });
    ```
    ```html
    <div ng-controller="AnotherController">
        <p>Message from service: {{ serviceData.message }}</p>
    </div>
    ```

---

## 3. Data Binding and Expressions

**Learning Outcome:** Understand how data binding and expressions work in AngularJS to display and synchronize data between the model and the view.

### 3.1. Expressions

*   **Definition:** AngularJS expressions are JavaScript-like code snippets enclosed in double curly braces `{{ }}`. They are used to bind application data to the HTML view.
*   **Purpose:**
    *   To display data from the `$scope` in the HTML.
    *   To perform simple operations (e.g., arithmetic, calling methods).
*   **How they work:** The AngularJS `$parse` service evaluates these expressions in the context of the current `$scope`.

*   **Examples:**
    *   `{{ message }}`: Displays the value of the `message` property on the `$scope`.
    *   `{{ count + 1 }}`: Displays the `count` property incremented by 1.
    *   `{{ getUserName() }}`: Calls the `getUserName()` method on the `$scope` and displays its return value.
    *   `{{ items[0] }}`: Displays the first item in the `items` array.

### 3.2. Data Binding

*   **Definition:** Data binding is the process of synchronizing data between the model (JavaScript objects on the `$scope`) and the view (HTML).
*   **Types of Data Binding in AngularJS:**
    *   **One-Way Binding:** Changes in the model update the view, but changes in the view do not affect the model.
        *   **Syntax:** `{{ expression }}` or `ng-bind="expression"`
        *   **Example:** `{{ userName }}`
    *   **Two-Way Binding:** Changes in the model update the view, and changes in the view (e.g., user input) also update the model. This is a hallmark of AngularJS.
        *   **Syntax:** `ng-model="propertyName"`
        *   **Example:** `<input type="text" ng-model="user.name">`
        *   **How it works:** `ng-model` automatically creates watchers on the model property and listens for input events on the element, synchronizing them.

### 3.3. Filters

*   **Definition:** Filters are used to format displayed data in the view. They can be applied to expressions using the pipe symbol `|`.
*   **Purpose:**
    *   To format dates, currency, numbers, etc.
    *   To filter lists (e.g., search, sort).
*   **Built-in Filters (Examples):**
    *   `currency`: Formats a number as currency.
    *   `date`: Formats a date.
    *   `filter`: Filters an array based on a search string.
    *   `limitTo`: Limits an array or string to a specified number of elements/characters.
    *   `orderBy`: Sorts an array.
    *   `uppercase`/`lowercase`: Converts text to uppercase/lowercase.

*   **Example:**
    ```html
    <p>Today's date: {{ currentDate | date:'fullDate' }}</p>
    <p>Formatted amount: {{ price | currency:'$' }}</p>
    <input type="text" ng-model="searchQuery">
    <ul>
        <li ng-repeat="product in products | filter:searchQuery">{{ product.name }}</li>
    </ul>
    ```

---

## 4. Templates and DOM Manipulation

**Learning Outcome:** Understand how AngularJS uses templates and directives to manipulate the DOM and create dynamic user interfaces.

### 4.1. Templates

*   **Definition:** AngularJS templates are HTML files that contain AngularJS expressions and directives, defining the structure and behavior of the user interface.
*   **How they work:** The AngularJS compiler traverses the DOM, interprets directives, evaluates expressions, and binds data to create the dynamic view.

### 4.2. DOM Manipulation with Directives

*   **Custom Directives:** As discussed earlier, custom directives are the primary way to manipulate the DOM in AngularJS.
    *   **`link` function:** This function within a directive definition is where DOM manipulation logic resides. It's executed after the template has been compiled and linked to the scope.
    *   **`compile` function (less common):** Used for template transformation before linking.

*   **Example (Custom Directive for highlighting):**
    ```javascript
    app.directive('highlight', function() {
        return {
            restrict: 'A', // Attribute directive
            link: function($scope, element, attrs) {
                element.css('background-color', attrs.highlight || 'yellow'); // Use attribute value or default
            }
        };
    });
    ```
    ```html
    <p highlight="lightblue">This text will be highlighted.</p>
    ```

### 4.3. Event Handling

*   **AngularJS Event Directives:** Provide a declarative way to handle DOM events.
    *   `ng-click`, `ng-mousedown`, `ng-mouseup`, `ng-mouseover`, `ng-mouseout`, etc.
*   **Scope Event Methods:** For communication between scopes.
    *   `$scope.$on(name, listener)`: Listens for an event.
    *   `$scope.$emit(name, args)`: Broadcasts an event up the scope hierarchy.
    *   `$scope.$broadcast(name, args)`: Broadcasts an event to all child scopes.

*   **Example:**
    ```html
    <button ng-click="handleClick()">Click Me</button>
    <div ng-click="$parent.handleParentClick()">Click Parent Div</div>
    ```
    ```javascript
    app.controller('MyController', function($scope) {
        $scope.handleClick = function() {
            alert('Button clicked!');
        };
        $scope.handleParentClick = function() {
            alert('Parent div clicked!');
        };
    });
    ```

---

## 5. Modules, Routing, and Forms

**Learning Outcome:** Understand how to structure an AngularJS application using modules, handle navigation with routing, and manage user input with forms.

### 5.1. Modules

*   **Definition:** Modules are containers for different parts of an AngularJS application, such as controllers, services, directives, and filters. They help organize code and manage dependencies.
*   **Creating a Module:**
    *   `angular.module('myApp', [])`: Creates a new module named 'myApp'. The second argument is an array of dependencies (other modules the app relies on).
*   **Registering Components:** Components are registered with a module using methods like `.controller()`, `.service()`, `.directive()`, etc.
*   **Bootstrapping:** The `ng-app` directive tells AngularJS which module is the root of the application.

### 5.2. Routing (`ngRoute` or `ui-router`)

*   **Purpose:** To enable navigation between different views in an SPA without full page reloads. It maps URLs to specific views and controllers.
*   **`ngRoute` (AngularJS's built-in router):**
    *   Requires the `ngRoute` module.
    *   Configuration involves `$routeProvider.when(path, routeConfig)`.
    *   `templateUrl`: Specifies the HTML file for the view.
    *   `controller`: Specifies the controller for the view.
    *   `ng-view`: A directive where the routed views are rendered.

*   **Example (using `ngRoute`):**
    ```javascript
    // app.js
    var app = angular.module('myApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    });

    // homeController.js
    app.controller('HomeController', function($scope) {
        $scope.message = "Welcome to the Home Page!";
    });

    // aboutController.js
    app.controller('AboutController', function($scope) {
        $scope.message = "This is the About Page.";
    });
    ```
    ```html
    <!-- index.html -->
    <div ng-app="myApp">
        <nav>
            <a href="#!/home">Home</a> |
            <a href="#!/about">About</a>
        </nav>
        <div ng-view></div>
    </div>
    ```
    ```html
    <!-- views/home.html -->
    <div>
        <h2>Home</h2>
        <p>{{ message }}</p>
    </div>
    ```
    ```html
    <!-- views/about.html -->
    <div>
        <h2>About</h2>
        <p>{{ message }}</p>
    </div>
    ```

### 5.3. Forms and Validation

*   **`ng-model`:** The cornerstone for form data binding.
*   **Form States:** AngularJS automatically adds CSS classes to form elements based on their state:
    *   `.ng-pristine`: The form or input has not been interacted with.
    *   `.ng-dirty`: The form or input has been interacted with.
    *   `.ng-valid`: The form or input is valid.
    *   `.ng-invalid`: The form or input is invalid.
    *   `.ng-valid-required`: The input is valid according to the `required` validation.
    *   `.ng-invalid-required`: The input is invalid because it's required and empty.
*   **Built-in Validators:**
    *   `required`: Ensures a field is not empty.
    *   `ng-minlength`/`ng-maxlength`: Sets minimum/maximum length for text.
    *   `ng-pattern`: Validates input against a regular expression.
    *   `ng-email`/`ng-url`: Built-in validators for email and URL formats.
*   **Displaying Validation Errors:** Use the form and input states to conditionally display error messages.

*   **Example:**
    ```html
    <form name="myForm" novalidate>
        <label for="userName">Name:</label>
        <input type="text" id="userName" name="userName" ng-model="user.name" required ng-minlength="3">

        <div ng-show="myForm.userName.$dirty && myForm.userName.$invalid">
            <span ng-show="myForm.userName.$error.required">Name is required.</span>
            <span ng-show="myForm.userName.$error.minlength">Name must be at least 3 characters long.</span>
        </div>

        <button type="submit" ng-disabled="myForm.$invalid">Submit</button>
    </form>
    ```

---

## 6. Key Concepts to Remember

*   **Two-Way Data Binding:** The core of AngularJS, automatically synchronizing model and view.
*   **Scopes (`$scope`):** The context for expressions and controllers, holding data and functions.
*   **Directives:** Extend HTML to add custom behavior and create reusable components (`ng-model`, `ng-repeat`, `ng-click`, custom directives).
*   **Controllers:** JavaScript functions that augment the `$scope`.
*   **Services:** Singletons for sharing logic and data (`$http`, custom factories/services).
*   **Modules:** Organize application components and dependencies.
*   **Routing:** Enables SPA navigation by mapping URLs to views and controllers.
*   **Templates:** HTML with AngularJS expressions and directives.
*   **Filters:** Format data in the view (`date`, `currency`, `filter`).
*   **Dependency Injection:** A pattern for managing dependencies between components.

---

## 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of `$scope` in AngularJS?

**Answer:**
`$scope` acts as the bridge between the controller and the view. It holds the application data (model) and provides a context for AngularJS expressions and directives in the HTML. It also facilitates data binding and event propagation.

---

**Question 2:**
Explain the difference between one-way and two-way data binding in AngularJS. Provide an example of each.

**Answer:**
*   **One-way binding:** Changes in the model update the view, but changes in the view do not update the model.
    *   *Example:* `{{ userName }}`
*   **Two-way binding:** Changes in the model update the view, and changes in the view (e.g., user input) update the model.
    *   *Example:* `<input type="text" ng-model="user.name">`

---

**Question 3:**
What is a directive in AngularJS, and what are two examples of built-in directives?

**Answer:**
A directive is a marker on a DOM element that tells AngularJS's compiler to attach specified behavior to that DOM element or transform the DOM.
*   *Examples:* `ng-app`, `ng-controller`, `ng-model`, `ng-repeat`, `ng-click`.

---

**Question 4:**
How do you create a custom directive in AngularJS? Briefly describe the `link` function's role.

**Answer:**
You create a custom directive by defining a JavaScript object using `angular.module(...).directive('directiveName', function() { ... })`. The `link` function within the directive definition is where DOM manipulation logic is typically placed. It's executed after the template has been compiled and linked to the scope, allowing direct interaction with the DOM elements.

---

**Question 5:**
Imagine you are building a simple product list. Write a snippet of AngularJS code that uses `ng-repeat` to display a list of product names.

**Answer:**
```javascript
// In your controller
$scope.products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 }
];
```
```html
<!-- In your view -->
<ul>
    <li ng-repeat="product in products">
        {{ product.name }} - ${{ product.price | currency }}
    </li>
</ul>
```

---

**Question 6:**
What is the purpose of the `ng-model` directive in form handling?

**Answer:**
The `ng-model` directive is used to create two-way data binding between form input elements (like `<input>`, `<select>`, `<textarea>`) and properties on the `$scope`. It synchronizes the value entered by the user in the form with the corresponding model data in the controller, and vice-versa. It also helps in tracking the state and validity of form elements.

---

**Exercise:**
Create a simple AngularJS application with two views: a "Home" page and an "About" page. Implement basic routing to navigate between these pages. Include a controller for each page to display a different message.

*(This exercise would require creating multiple HTML files and a JavaScript file, demonstrating the concepts of modules, controllers, routing, and templates covered in Section 5.)*
