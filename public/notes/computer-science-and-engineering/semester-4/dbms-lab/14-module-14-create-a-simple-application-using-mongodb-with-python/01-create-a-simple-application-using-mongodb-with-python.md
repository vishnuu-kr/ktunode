---
title: "Create a simple application using Mongodb with python"
subject: "DBMS LAB"
module: "Module 14: Create a simple application using Mongodb with python"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4fc"
status: "completed"
scrapedAt: "2026-05-20T16:12:18.123Z"
---
## DBMS LAB: Module 14 - Creating a Simple MongoDB Application with Python

These notes cover the creation of a simple application using MongoDB with Python.

**Learning Outcomes:**

*   Understand the basics of MongoDB and its integration with Python.
*   Install necessary libraries for MongoDB interaction in Python.
*   Connect to a MongoDB database using Python.
*   Perform basic CRUD (Create, Read, Update, Delete) operations on MongoDB collections using Python.
*   Handle errors and exceptions during database operations.
*   Design a simple application to manage data in MongoDB using Python.

**1. Introduction to MongoDB and Python**

*   **MongoDB:**
    *   A NoSQL document database. Data is stored in JSON-like documents with dynamic schemas.
    *   Highly scalable, flexible, and designed for modern application development.
    *   Does not require a predefined schema, allowing for easier iteration and evolution of data structures.
*   **Python:**
    *   A versatile and widely used programming language known for its readability and extensive libraries.
    *   Excellent for building data-driven applications, including those interacting with databases like MongoDB.
*   **Why MongoDB and Python?**
    *   Python provides easy-to-use libraries for interacting with MongoDB.
    *   MongoDB's document-oriented model aligns well with Python's data structures (dictionaries).
    *   The combination allows for rapid prototyping and development of scalable applications.

**2. Setting up the Environment**

*   **Installing MongoDB:**
    *   Download and install MongoDB from the official website: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
    *   Follow the installation instructions specific to your operating system (Windows, macOS, Linux).
    *   Make sure MongoDB is running on your system (usually on port 27017).
*   **Installing PyMongo (Python driver for MongoDB):**
    ```bash
    pip install pymongo
    ```
    *   `pymongo` is the official Python driver for MongoDB. It allows you to interact with your MongoDB instance from Python code.

**3. Connecting to MongoDB using Python**

*   **Key Concepts:**
    *   **MongoClient:** The main class in `pymongo` used to establish a connection to a MongoDB server.
    *   **Database:** A container for collections.
    *   **Collection:**  A group of MongoDB documents (similar to a table in a relational database).
    *   **Document:**  A set of key-value pairs.  Data representation in JSON format.
*   **Code Example:**
    ```python
    import pymongo

    # Establish a connection to MongoDB
    client = pymongo.MongoClient("mongodb://localhost:27017/")  # Replace with your connection string if needed

    # Access a specific database (creates it if it doesn't exist)
    db = client["mydatabase"]

    # Verify connection (optional)
    try:
        client.admin.command('ping')
        print("Successfully connected to MongoDB!")
    except Exception as e:
        print(f"Could not connect to MongoDB: {e}")
    ```
    *   **Explanation:**
        *   `pymongo.MongoClient("mongodb://localhost:27017/")`: Creates a `MongoClient` object, connecting to the MongoDB server running on `localhost` at port `27017`. This is the default connection string.  If your MongoDB instance requires authentication or is running on a different host/port, you'll need to adjust the connection string accordingly. For example:  `"mongodb://username:password@hostname:port/"`.
        *   `db = client["mydatabase"]`: Accesses the database named "mydatabase". If the database doesn't exist, MongoDB will create it when you first insert data.
        *   `client.admin.command('ping')`: Sends a ping command to the MongoDB server to verify the connection.  Good for error checking.
*   **Important Points:**
    *   The connection string is crucial for specifying the location and authentication details of your MongoDB server.
    *   Always handle potential connection errors using `try...except` blocks.

**4. CRUD Operations (Create, Read, Update, Delete)**

*   **4.1. Create (Insert):**

    *   **`insert_one(document)`:** Inserts a single document into a collection.
    *   **`insert_many(documents)`:** Inserts multiple documents into a collection.
    *   **Code Example:**
        ```python
        import pymongo

        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["mydatabase"]
        collection = db["customers"]

        # Insert a single document
        customer = {"name": "John Doe", "address": "123 Main St"}
        x = collection.insert_one(customer)
        print(f"Inserted document with ID: {x.inserted_id}")

        # Insert multiple documents
        customers = [
            {"name": "Jane Smith", "address": "456 Oak Ave"},
            {"name": "Peter Jones", "address": "789 Pine Ln"}
        ]
        y = collection.insert_many(customers)
        print(f"Inserted document IDs: {y.inserted_ids}")
        ```
    *   **Explanation:**
        *   `collection = db["customers"]`: Accesses the "customers" collection.  If it doesn't exist, MongoDB creates it when you insert data.
        *   `x.inserted_id`:  Returns the unique ID (_id) assigned to the inserted document by MongoDB.
        *   `y.inserted_ids`: Returns a list of unique IDs assigned to the inserted documents.
    *   **Important Points:**
        *   MongoDB automatically assigns a unique `_id` field to each document if you don't provide one.
        *   The `_id` field is typically an ObjectId (a 12-byte BSON type).

*   **4.2. Read (Find):**

    *   **`find_one(query)`:** Returns the first document that matches the specified query. Returns `None` if no document matches.
    *   **`find(query)`:** Returns a cursor object that can be iterated over to retrieve all documents that match the query.  If no query is specified, it returns all documents in the collection.
    *   **Code Example:**
        ```python
        import pymongo

        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["mydatabase"]
        collection = db["customers"]

        # Find one document where name is "John Doe"
        result = collection.find_one({"name": "John Doe"})
        print("Found one:", result)

        # Find all documents
        for doc in collection.find():
            print("All docs:", doc)

        # Find all documents where the address starts with '4'
        for doc in collection.find({"address": {"$regex": "^4"}}):
            print("Address starting with 4: ", doc)

        # Find only the name and address fields, excluding the _id:
        for doc in collection.find({}, {"name": 1, "address": 1, "_id": 0}):
            print("Only name and address:", doc)
        ```
    *   **Explanation:**
        *   `collection.find_one({"name": "John Doe"})`: Finds the first document where the "name" field is equal to "John Doe".
        *   `collection.find()`: Returns all documents in the "customers" collection.
        *   `{"address": {"$regex": "^4"}}`:  Uses a regular expression to find documents where the "address" field starts with "4". MongoDB's query operators (`$regex`, `$gt`, `$lt`, etc.) are very powerful for filtering data.  `^` means starts with.
        *   `{"name": 1, "address": 1, "_id": 0}`:  Specifies which fields to include (1) or exclude (0) in the returned documents. This is called projection.
    *   **Important Points:**
        *   The `find()` method returns a cursor, which is an iterator. You need to iterate over the cursor to retrieve the actual documents.
        *   MongoDB supports a rich query language with various operators for filtering data based on complex criteria.
        *   Projection can be used to limit the fields returned in the results, improving performance and reducing data transfer.

*   **4.3. Update:**

    *   **`update_one(query, update)`:** Updates a single document that matches the query.
    *   **`update_many(query, update)`:** Updates all documents that match the query.
    *   **Code Example:**
        ```python
        import pymongo

        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["mydatabase"]
        collection = db["customers"]

        # Update the address of "John Doe"
        query = {"name": "John Doe"}
        new_values = {"$set": {"address": "999 New Address"}}
        x = collection.update_one(query, new_values)
        print(f"Updated {x.modified_count} document(s)")

        # Update all addresses starting with "4" to be "Updated Address"
        query = {"address": {"$regex": "^4"}}
        new_values = {"$set": {"address": "Updated Address"}}
        y = collection.update_many(query, new_values)
        print(f"Updated {y.modified_count} document(s)")
        ```
    *   **Explanation:**
        *   `query = {"name": "John Doe"}`: Specifies the document to update (the one where "name" is "John Doe").
        *   `new_values = {"$set": {"address": "999 New Address"}}`:  Uses the `$set` operator to update the "address" field to "999 New Address".  The `$set` operator is crucial; without it, the entire document would be replaced with just the "address" field.
        *   `x.modified_count`: Returns the number of documents that were modified by the update operation.
    *   **Important Points:**
        *   Always use the `$set` operator (or other update operators like `$inc`, `$push`, etc.) to specify which fields to update.
        *   Without specifying an update operator, the entire document will be replaced with the new values.
        *   `modified_count` indicates how many documents were actually changed.

*   **4.4. Delete:**

    *   **`delete_one(query)`:** Deletes a single document that matches the query.
    *   **`delete_many(query)`:** Deletes all documents that match the query.
    *   **Code Example:**
        ```python
        import pymongo

        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["mydatabase"]
        collection = db["customers"]

        # Delete one document where name is "John Doe"
        query = {"name": "John Doe"}
        x = collection.delete_one(query)
        print(f"Deleted {x.deleted_count} document(s)")

        # Delete all documents where the address is "Updated Address"
        query = {"address": "Updated Address"}
        y = collection.delete_many(query)
        print(f"Deleted {y.deleted_count} document(s)")

        # Delete the entire collection
        # collection.drop()
        # print("Collection dropped")

        ```
    *   **Explanation:**
        *   `query = {"name": "John Doe"}`: Specifies the document to delete.
        *   `x.deleted_count`: Returns the number of documents that were deleted.
        *   `collection.drop()`: Deletes the entire collection (including all documents and indexes).  **Use with caution!**
    *   **Important Points:**
        *   Be very careful when using `delete_many()` without a query, as it will delete all documents in the collection.
        *   `collection.drop()` is irreversible; make sure you have a backup before dropping a collection.

**5. Error Handling and Exception Handling**

*   **Importance:** Database operations can fail for various reasons (e.g., connection errors, invalid queries, permission issues).  It's crucial to handle these errors gracefully to prevent application crashes and provide informative messages to the user.
*   **Using `try...except` blocks:**
    ```python
    import pymongo

    try:
        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["mydatabase"]
        collection = db["customers"]

        customer = {"name": "New Customer", "address": "New Address"}
        collection.insert_one(customer)
        print("Customer inserted successfully.")

    except pymongo.errors.ConnectionFailure as e:
        print(f"Failed to connect to MongoDB: {e}")
    except pymongo.errors.OperationFailure as e:
        print(f"Database operation failed: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        # Close the connection (optional, but good practice)
        if client:
            client.close()
            print("Connection closed.")
    ```
*   **Explanation:**
    *   The `try` block contains the code that might raise an exception.
    *   The `except` blocks catch specific types of exceptions (e.g., `pymongo.errors.ConnectionFailure`, `pymongo.errors.OperationFailure`).  This allows you to handle different error scenarios differently.
    *   The `except Exception as e` block catches any other unexpected exceptions.
    *   The `finally` block is executed regardless of whether an exception occurred.  It's often used to close database connections or release resources.
*   **Important Points:**
    *   Catch specific exceptions whenever possible to handle different error scenarios effectively.
    *   Always include a `finally` block to ensure that resources are released, even if an error occurs.
    *   Log errors for debugging and monitoring purposes.

**6. Building a Simple Application (Example: To-Do List Manager)**

```python
import pymongo

def connect_db():
    try:
        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["todo_app"]
        return db
    except pymongo.errors.ConnectionFailure as e:
        print(f"Failed to connect to MongoDB: {e}")
        return None

def add_task(db, task_description):
    if not db:
        return
    tasks = db["tasks"]
    task = {"description": task_description, "completed": False}
    tasks.insert_one(task)
    print(f"Task '{task_description}' added.")

def list_tasks(db):
    if not db:
        return
    tasks = db["tasks"]
    for task in tasks.find():
        status = "[X]" if task["completed"] else "[ ]"
        print(f"{status} {task['description']} (ID: {task['_id']})")

def complete_task(db, task_id):
    if not db:
        return
    tasks = db["tasks"]
    try:
        task_id_obj = pymongo.ObjectId(task_id) #Convert the input string to an ObjectID object
        result = tasks.update_one({"_id": task_id_obj}, {"$set": {"completed": True}})
        if result.modified_count > 0:
            print(f"Task with ID '{task_id}' marked as complete.")
        else:
            print(f"Task with ID '{task_id}' not found.")
    except Exception as e:
        print(f"Invalid Task ID: {e}")

def main():
    db = connect_db()
    if not db:
        return

    while True:
        print("\nTo-Do List Manager")
        print("1. Add Task")
        print("2. List Tasks")
        print("3. Complete Task")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            description = input("Enter task description: ")
            add_task(db, description)
        elif choice == "2":
            list_tasks(db)
        elif choice == "3":
            task_id = input("Enter task ID to complete: ")
            complete_task(db, task_id)
        elif choice == "4":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()
```

*   **Explanation:**
    *   `connect_db()`: Establishes a connection to the MongoDB database.
    *   `add_task()`: Adds a new task to the "tasks" collection.
    *   `list_tasks()`: Lists all tasks in the collection, showing their status (completed or not).
    *   `complete_task()`: Marks a task as complete by updating its "completed" field.
    *   `main()`: Provides a command-line interface for interacting with the application.
*   **Running the Application:**
    1.  Save the code as a Python file (e.g., `todo.py`).
    2.  Run the file from your terminal: `python todo.py`
    3.  Follow the prompts to add, list, and complete tasks.
*   **Improvements:**
    *   Add error handling for invalid user input.
    *   Implement a search function to find tasks based on keywords.
    *   Use a graphical user interface (GUI) instead of a command-line interface.
    *   Implement a way to delete tasks.

**7. Practice Questions/Exercises**

1.  **Question:** Write a Python function that connects to a MongoDB database and returns the number of documents in a specified collection.  Handle potential connection errors.
    ```python
    import pymongo

    def count_documents(db_name, collection_name):
        try:
            client = pymongo.MongoClient("mongodb://localhost:27017/")
            db = client[db_name]
            collection = db[collection_name]
            count = collection.count_documents({}) # Count all documents
            client.close()
            return count
        except pymongo.errors.ConnectionFailure as e:
            print(f"Failed to connect to MongoDB: {e}")
            return None

    # Example usage
    count = count_documents("mydatabase", "customers")
    if count is not None:
        print(f"Number of documents in 'customers' collection: {count}")
    ```

2.  **Question:**  Write a Python function that takes a list of dictionaries representing products (name, price, quantity) and inserts them into a MongoDB collection called "products".

    ```python
    import pymongo

    def insert_products(products):
        try:
            client = pymongo.MongoClient("mongodb://localhost:27017/")
            db = client["ecommerce"]
            collection = db["products"]
            collection.insert_many(products)
            client.close()
            print("Products inserted successfully.")
        except pymongo.errors.ConnectionFailure as e:
            print(f"Failed to connect to MongoDB: {e}")

    # Example usage
    products = [
        {"name": "Laptop", "price": 1200, "quantity": 10},
        {"name": "Mouse", "price": 25, "quantity": 50},
        {"name": "Keyboard", "price": 75, "quantity": 30}
    ]
    insert_products(products)
    ```

3.  **Question:** Write a Python function that finds all products in the "products" collection where the price is greater than a specified value (e.g., 100).

    ```python
    import pymongo

    def find_products_above_price(min_price):
        try:
            client = pymongo.MongoClient("mongodb://localhost:27017/")
            db = client["ecommerce"]
            collection = db["products"]
            results = collection.find({"price": {"$gt": min_price}})  # $gt operator (greater than)

            products = []
            for product in results:
                products.append(product)

            client.close()
            return products

        except pymongo.errors.ConnectionFailure as e:
            print(f"Failed to connect to MongoDB: {e}")
            return None

    # Example usage
    expensive_products = find_products_above_price(100)
    if expensive_products:
        print("Products with price above 100:")
        for product in expensive_products:
            print(product)
    else:
        print("No products found above that price.")
    ```

**8. Important Points to Remember**

*   **Connection String:**  Make sure your connection string is correct and includes the necessary authentication details.
*   **Error Handling:**  Implement robust error handling to prevent application crashes and provide informative messages.
*   **Update Operators:** Always use update operators (`$set`, `$inc`, `$push`, etc.) when updating documents.
*   **Data Validation:**  Validate user input to prevent invalid data from being inserted into the database.
*   **Security:**  Secure your MongoDB instance by enabling authentication, limiting access, and keeping the software up-to-date.  Never expose your database directly to the internet without proper security measures.
*   **Indexes:**  Create indexes on frequently queried fields to improve query performance.  Use `collection.create_index([("field_name", pymongo.ASCENDING)])`
*   **ObjectId:** When querying or updating documents using the `_id` field, make sure to convert the ID string to an ObjectId object using `pymongo.ObjectId("id_string")`.

These detailed notes should provide a strong foundation for understanding how to create simple applications using MongoDB with Python and cover all of the learning outcomes. Remember to practice by building your own small projects to solidify your understanding. Good luck!
