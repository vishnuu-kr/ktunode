---
title: "MongoDB Operation - Insert, Update, Delete, Query, Indexing, Application, Replication, Sharding, Deployment"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 3: XML and Non Relational Databases "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbe8"
status: "completed"
scrapedAt: "2026-05-20T16:50:26.941Z"
---
# ADVANCED DATABASE SYSTEMS: Module 3 - XML and Non-Relational Databases

## Topic: MongoDB Operations - Insert, Update, Delete, Query, Indexing, Application, Replication, Sharding, Deployment

**Learning Outcomes:**

*   Understand and apply basic MongoDB operations (Insert, Update, Delete, Query).
*   Design and implement effective indexes for MongoDB collections.
*   Describe the different data modeling approaches suitable for MongoDB.
*   Explain and configure MongoDB replication for high availability.
*   Explain and implement MongoDB sharding for horizontal scalability.
*   Discuss various MongoDB deployment strategies.
*   Understand the role of MongoDB in modern applications.

---

### 1. Basic MongoDB Operations

*   **Key Concept:** MongoDB is a document-oriented NoSQL database. Data is stored in JSON-like documents with dynamic schemas.

#### 1.1 Insert Operations

*   **Definition:** Adding new documents to a collection.

*   **Methods:**
    *   `insertOne(document)`: Inserts a single document.
    *   `insertMany([document1, document2, ...])`: Inserts multiple documents at once.
*   **Example:**

    ```javascript
    // Connect to MongoDB (using the MongoDB Node.js driver)
    const { MongoClient } = require('mongodb');

    async function main() {
      const uri = "mongodb://localhost:27017/"; // Replace with your connection string
      const client = new MongoClient(uri);

      try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("mydatabase"); // Replace with your database name
        const collection = db.collection("products"); // Replace with your collection name

        // Insert One Document
        const insertOneResult = await collection.insertOne({ name: "Laptop", price: 1200, category: "Electronics" });
        console.log("Inserted one document =>", insertOneResult);

        // Insert Multiple Documents
        const insertManyResult = await collection.insertMany([
          { name: "Keyboard", price: 75, category: "Electronics" },
          { name: "Mouse", price: 30, category: "Electronics" },
          { name: "Notebook", price: 15, category: "Stationery" }
        ]);
        console.log("Inserted multiple documents =>", insertManyResult);

      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    }

    main().catch(console.error);
    ```

*   **Important Points:**
    *   MongoDB automatically generates an `_id` field (ObjectId) for each document if one is not provided.
    *   The `insertMany` method is generally faster than inserting documents one by one.

#### 1.2 Update Operations

*   **Definition:** Modifying existing documents in a collection.

*   **Methods:**
    *   `updateOne(filter, update, options)`: Updates a single document that matches the filter.
    *   `updateMany(filter, update, options)`: Updates multiple documents that match the filter.
    *   `replaceOne(filter, replacement, options)`: Replaces a single document that matches the filter with a new document.

*   **Update Operators:**  Used within the `update` parameter to specify how to modify the document.  Common operators include:
    *   `$set`: Updates the value of a field.
    *   `$inc`: Increments the value of a field.
    *   `$push`: Adds an element to an array field.
    *   `$pull`: Removes an element from an array field.
    *   `$unset`: Deletes a field.

*   **Example:**

    ```javascript
    const { MongoClient } = require('mongodb');

    async function main() {
      const uri = "mongodb://localhost:27017/";
      const client = new MongoClient(uri);

      try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("mydatabase");
        const collection = db.collection("products");

        // Update One Document
        const updateOneResult = await collection.updateOne(
          { name: "Laptop" },
          { $set: { price: 1300 } }  // Using $set operator
        );
        console.log("Updated one document =>", updateOneResult);

        // Update Multiple Documents
        const updateManyResult = await collection.updateMany(
          { category: "Electronics" },
          { $inc: { price: 10 } }  // Using $inc operator
        );
        console.log("Updated multiple documents =>", updateManyResult);

      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    }

    main().catch(console.error);
    ```

*   **Important Points:**
    *   Always use update operators (`$set`, `$inc`, etc.) to avoid overwriting the entire document.
    *   The `upsert: true` option in `updateOne` and `updateMany` creates a new document if no documents match the filter.

#### 1.3 Delete Operations

*   **Definition:** Removing documents from a collection.

*   **Methods:**
    *   `deleteOne(filter)`: Deletes a single document that matches the filter.
    *   `deleteMany(filter)`: Deletes multiple documents that match the filter.

*   **Example:**

    ```javascript
    const { MongoClient } = require('mongodb');

    async function main() {
      const uri = "mongodb://localhost:27017/";
      const client = new MongoClient(uri);

      try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("mydatabase");
        const collection = db.collection("products");

        // Delete One Document
        const deleteOneResult = await collection.deleteOne({ name: "Notebook" });
        console.log("Deleted one document =>", deleteOneResult);

        // Delete Multiple Documents
        const deleteManyResult = await collection.deleteMany({ category: "Stationery" });
        console.log("Deleted multiple documents =>", deleteManyResult);

      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    }

    main().catch(console.error);
    ```

*   **Important Points:**
    *   Use caution when deleting data.  Always use a specific filter to avoid accidentally deleting all documents in a collection.
    *   `deleteMany({}):` deletes all documents in the collection.

#### 1.4 Query Operations

*   **Definition:** Retrieving documents from a collection based on specified criteria.

*   **Method:**
    *   `find(query, projection)`: Returns a cursor that can be iterated to retrieve matching documents.

*   **Query Operators:** Used within the `query` parameter to specify the search criteria. Common operators include:
    *   `$eq`: Equal to.
    *   `$ne`: Not equal to.
    *   `$gt`: Greater than.
    *   `$gte`: Greater than or equal to.
    *   `$lt`: Less than.
    *   `$lte`: Less than or equal to.
    *   `$in`: Matches any of the values specified in an array.
    *   `$nin`: Matches none of the values specified in an array.
    *   `$and`: Joins query clauses with a logical AND.
    *   `$or`: Joins query clauses with a logical OR.
    *   `$not`: Inverts the effect of a query expression.
    *   `$exists`: Matches documents that have the specified field.

*   **Projection:** Used to specify which fields to include or exclude in the result set.

*   **Example:**

    ```javascript
    const { MongoClient } = require('mongodb');

    async function main() {
      const uri = "mongodb://localhost:27017/";
      const client = new MongoClient(uri);

      try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("mydatabase");
        const collection = db.collection("products");

        // Find documents where price is greater than 100
        const query1 = { price: { $gt: 100 } };
        const results1 = await collection.find(query1).toArray();
        console.log("Products with price > 100:", results1);

        // Find documents where category is Electronics and price is less than 1500
        const query2 = { category: "Electronics", price: { $lt: 1500 } };
        const results2 = await collection.find(query2).toArray();
        console.log("Electronics with price < 1500:", results2);

        // Find and Project:  Only return the name and price fields
        const query3 = { category: "Electronics" };
        const projection3 = { name: 1, price: 1, _id: 0 }; // 1 includes, 0 excludes. _id is always returned unless explicitly excluded
        const results3 = await collection.find(query3, { projection: projection3 }).toArray();
        console.log("Electronics with name and price only:", results3);

      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    }

    main().catch(console.error);
    ```

*   **Important Points:**
    *   `find()` returns a cursor; you need to use `.toArray()` or `.forEach()` to iterate through the results.
    *   Projection can significantly improve query performance by reducing the amount of data transferred.

---

### 2. Indexing

*   **Key Concept:** Indexes are special data structures that store a small portion of a collection's data in an easy-to-traverse form.  They improve the speed of read operations.

*   **Definition:** Creating indexes on fields that are frequently used in queries to improve query performance.

*   **Types of Indexes:**
    *   **Single Field Index:**  Indexes a single field.
    *   **Compound Index:**  Indexes multiple fields.  The order of fields in the index is important.
    *   **Multikey Index:**  Indexes array fields.
    *   **Text Index:**  Supports text searches.
    *   **Geospatial Index:**  Supports geospatial queries.

*   **Methods:**
    *   `createIndex(keys, options)`: Creates an index on the specified field(s).
    *   `getIndexes()`: Returns a list of all indexes on a collection.
    *   `dropIndex(indexName)`: Drops a specific index.
    *   `dropIndexes()`: Drops all indexes on a collection.

*   **Example:**

    ```javascript
    const { MongoClient } = require('mongodb');

    async function main() {
      const uri = "mongodb://localhost:27017/";
      const client = new MongoClient(uri);

      try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("mydatabase");
        const collection = db.collection("products");

        // Create a single field index on the 'category' field
        const createIndexResult = await collection.createIndex({ category: 1 }); // 1 for ascending order, -1 for descending
        console.log("Created index =>", createIndexResult);

        // Create a compound index on 'name' and 'price'
        const createCompoundIndexResult = await collection.createIndex({ name: 1, price: -1 });
        console.log("Created compound index =>", createCompoundIndexResult);

        // Get Indexes
        const indexes = await collection.indexes();
        console.log("Indexes:", indexes);

      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    }

    main().catch(console.error);
    ```

*   **Important Points:**
    *   Indexes can significantly improve query performance, but they also increase write overhead.
    *   Only index fields that are frequently used in queries.
    *   Use the `explain()` method to analyze query performance and identify opportunities for indexing.
    *   Compound index order matters. Index on the fields used most frequently in queries with high cardinality first.

---

### 3. Application Integration

*   **Key Concept:** MongoDB is well-suited for applications that require flexible schemas, high performance, and scalability.

*   **Use Cases:**
    *   **Content Management Systems (CMS):**  Storing articles, blog posts, and other content.
    *   **E-commerce Platforms:**  Managing product catalogs, customer data, and orders.
    *   **Social Media Applications:**  Storing user profiles, posts, and connections.
    *   **Internet of Things (IoT):**  Collecting and analyzing sensor data.
    *   **Mobile Applications:**  Storing and synchronizing data across devices.
    *   **Log Management:**  Storing and analyzing log data.

*   **Data Modeling:**
    *   **Embedded Data Model:**  Storing related data within a single document.  Good for one-to-one or one-to-many relationships where the "many" side is small.  Increases read performance but can make updates more complex.
    *   **Referenced Data Model:**  Storing related data in separate collections and using references (e.g., ObjectIds) to link them. Good for one-to-many or many-to-many relationships. Requires joins (application-side or using `$lookup` aggregation) and can decrease read performance.

*   **Example:** (Illustrating Data Modeling)

    **Embedded:** A `Product` document might embed an array of `Reviews`.  This is good if reviews are always accessed with the product and there aren't too many reviews.

    ```json
    {
      "_id": ObjectId("..."),
      "name": "Example Product",
      "price": 99.99,
      "reviews": [
        { "author": "User1", "rating": 5, "comment": "Great product!" },
        { "author": "User2", "rating": 4, "comment": "Good value." }
      ]
    }
    ```

    **Referenced:** A `Product` document would contain a `categoryId` that references a `Category` document in a separate `categories` collection.

    `products` collection:

    ```json
    {
      "_id": ObjectId("..."),
      "name": "Example Product",
      "price": 99.99,
      "categoryId": ObjectId("...") // Reference to a category document
    }
    ```

    `categories` collection:

    ```json
    {
      "_id": ObjectId("..."),
      "name": "Electronics"
    }
    ```

*   **Important Points:**
    *   Choose the appropriate data modeling approach based on the application's requirements.
    *   Consider the trade-offs between read performance, write performance, and data consistency.

---

### 4. Replication

*   **Key Concept:**  Replication provides data redundancy and high availability by maintaining multiple copies of the data.

*   **Definition:** Creating multiple copies of data across different servers to ensure high availability and data durability.

*   **Replica Set:** A group of MongoDB instances that maintain the same data.
    *   **Primary:** Receives all write operations.
    *   **Secondary:** Replicates data from the primary.
    *   **Arbiters:** Participate in elections but do not store data.  Used for quorum.

*   **Benefits:**
    *   **High Availability:** If the primary fails, a secondary can be elected as the new primary.
    *   **Data Redundancy:** Protects against data loss due to hardware failures.
    *   **Read Scalability:** Read operations can be distributed across secondaries.

*   **Configuration:** Typically configured using the MongoDB shell (`mongosh`).  Involves initializing a replica set and adding members.

*   **Example:** (Simplified steps)

    1.  **Start MongoDB instances with the `replSet` option:**

        ```bash
        mongod --replSet myReplicaSet --port 27017 --dbpath /data/db/node1
        mongod --replSet myReplicaSet --port 27018 --dbpath /data/db/node2
        mongod --replSet myReplicaSet --port 27019 --dbpath /data/db/node3
        ```

    2.  **Connect to the primary node using `mongosh`:**

        ```bash
        mongosh mongodb://localhost:27017
        ```

    3.  **Initiate the replica set:**

        ```javascript
        rs.initiate(
          {
            _id: "myReplicaSet",
            members: [
              { _id: 0, host: "localhost:27017" },
              { _id: 1, host: "localhost:27018" },
              { _id: 2, host: "localhost:27019" }
            ]
          }
        )
        ```

    4. **Check replica set status:**

        ```javascript
        rs.status()
        ```

*   **Important Points:**
    *   A replica set requires at least three members for fault tolerance.
    *   Consider using a dedicated arbiter node to reduce the resource consumption of data-bearing nodes.
    *   Understand the different read preference options to control how read operations are routed.

---

### 5. Sharding

*   **Key Concept:** Sharding distributes data across multiple physical machines to achieve horizontal scalability.

*   **Definition:** Dividing a collection into smaller chunks (shards) and distributing them across multiple servers to improve performance and scalability.

*   **Components:**
    *   **Shards:** Store the actual data chunks.  Can be replica sets for high availability.
    *   **Mongos Routers:**  Route client requests to the appropriate shards.  Acts as a query router.
    *   **Config Servers:** Store metadata about the cluster, including shard assignments and chunk ranges.

*   **Shard Key:** A field or fields used to determine how data is distributed across shards.  The shard key should be chosen carefully to ensure even distribution.

*   **Benefits:**
    *   **Horizontal Scalability:**  Easily add more shards to increase storage capacity and processing power.
    *   **Improved Performance:**  Queries can be executed in parallel across multiple shards.

*   **Configuration:**  Requires setting up config servers, mongos routers, and shards.  Involves choosing a shard key and enabling sharding for the database and collection.

*   **Example:** (Simplified steps)

    1.  **Start Config Servers:**

        ```bash
        mongod --configsvr --replSet configReplicaSet --port 27019 --dbpath /data/configdb
        ```
        (Start multiple config servers, usually three, forming a replica set.)

    2.  **Start Shard Servers:**

        ```bash
        mongod --shardsvr --replSet shardReplicaSet1 --port 27020 --dbpath /data/sharddb1
        mongod --shardsvr --replSet shardReplicaSet2 --port 27021 --dbpath /data/sharddb2
        ```
        (Each shard should ideally be a replica set.)

    3.  **Start Mongos Routers:**

        ```bash
        mongos --configdb configReplicaSet/localhost:27019 --port 27017
        ```

    4.  **Connect to a Mongos Router using `mongosh`:**

        ```bash
        mongosh mongodb://localhost:27017
        ```

    5.  **Add Shards to the Cluster:**

        ```javascript
        sh.addShard("shardReplicaSet1/localhost:27020")
        sh.addShard("shardReplicaSet2/localhost:27021")
        ```

    6.  **Enable Sharding for the Database:**

        ```javascript
        sh.enableSharding("mydatabase")
        ```

    7.  **Shard the Collection:**

        ```javascript
        sh.shardCollection("mydatabase.products", { category: 1 }) // Shard key is 'category'
        ```

*   **Important Points:**
    *   Choosing the right shard key is crucial for performance.  Consider cardinality and query patterns.
    *   Sharding adds complexity to the system.  Careful planning and monitoring are required.
    *   Understand the different sharding strategies (ranged sharding, hashed sharding).

---

### 6. Deployment

*   **Key Concept:**  MongoDB can be deployed in various environments, ranging from single-server deployments to complex, distributed clusters.

*   **Deployment Options:**
    *   **Single Server:** Suitable for development and testing.  Not recommended for production due to lack of redundancy.
    *   **Replica Set:** Provides high availability and data redundancy. Recommended for most production environments.
    *   **Sharded Cluster:** Provides horizontal scalability.  Suitable for large-scale applications with high data volumes and traffic.
    *   **Cloud-Based Solutions:**  MongoDB Atlas, AWS DocumentDB, Azure Cosmos DB.  Offer managed services with features like automatic scaling, backups, and security.

*   **Considerations:**
    *   **Hardware Requirements:** CPU, memory, storage, network bandwidth.
    *   **Operating System:**  Linux, Windows, macOS.
    *   **Security:** Authentication, authorization, encryption.
    *   **Monitoring:**  Performance metrics, error logs.
    *   **Backup and Recovery:**  Regular backups to protect against data loss.
    *   **Scalability:**  Plan for future growth and scaling requirements.

*   **Important Points:**
    *   Choose the appropriate deployment option based on the application's requirements and budget.
    *   Implement robust monitoring and alerting to identify and resolve issues quickly.
    *   Regularly review and update the deployment configuration to optimize performance and security.

---

### Practice Questions and Exercises

**Question 1:**

Write a MongoDB query to find all products in the "Electronics" category with a price greater than $500 and sort the results by price in descending order.

**Answer:**

```javascript
db.products.find({ category: "Electronics", price: { $gt: 500 } }).sort({ price: -1 }).toArray();
```

**Question 2:**

Explain the difference between embedded and referenced data models in MongoDB.  Provide an example of when you would choose each model.

**Answer:**

*   **Embedded Data Model:** Stores related data within a single document.  Suitable for one-to-one or one-to-few relationships.
    *   **Example:** Embedding address information directly within a user document.
*   **Referenced Data Model:** Stores related data in separate collections and uses references (ObjectIds) to link them. Suitable for one-to-many or many-to-many relationships.
    *   **Example:** Storing product reviews in a separate collection and referencing the product using its ObjectId.

**Question 3:**

What is the purpose of a shard key in MongoDB sharding? How should you choose an appropriate shard key?

**Answer:**

The shard key is a field or fields used to determine how data is distributed across shards in a sharded cluster.

Choosing an appropriate shard key:

*   Consider cardinality: Higher cardinality is generally better.
*   Consider query patterns: Choose a key that is frequently used in queries.
*   Avoid low-cardinality keys that can lead to "hot spots" (where one shard handles most of the traffic).
*   Consider write distribution:  Aim for an even distribution of writes across shards.

**Question 4:**

Explain the benefits of using replication in MongoDB.

**Answer:**

Replication provides:

*   **High Availability:** If the primary fails, a secondary can be elected as the new primary, minimizing downtime.
*   **Data Redundancy:** Protects against data loss due to hardware failures.
*   **Read Scalability:** Read operations can be distributed across secondaries.

**Question 5:**

What are the key components of a MongoDB sharded cluster, and what is the role of each component?

**Answer:**

*   **Shards:** Store the actual data chunks.
*   **Mongos Routers:** Route client requests to the appropriate shards.
*   **Config Servers:** Store metadata about the cluster, including shard assignments and chunk ranges.

---

### Important Points to Remember

*   MongoDB is a flexible and scalable NoSQL database well-suited for modern applications.
*   Understanding basic operations, indexing, and data modeling are crucial for efficient database design.
*   Replication provides high availability and data durability.
*   Sharding enables horizontal scalability for large-scale applications.
*   Choose the appropriate deployment option based on the application's requirements.
*   Regular monitoring and backups are essential for maintaining a healthy and reliable MongoDB deployment.
