---
title: "Data Modelling with Graphs"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 4: Graph database "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbec"
status: "completed"
scrapedAt: "2026-05-20T16:50:29.097Z"
---
# ADVANCED DATABASE SYSTEMS - Module 4: Graph Databases - Data Modelling with Graphs

**Module Description:** This module explores graph databases, a powerful alternative to relational databases for handling connected data. This topic, Data Modelling with Graphs, focuses on the fundamental principles and techniques for representing data as graphs.

**Learning Outcomes:**

*   Understand the basic concepts of graph data modelling.
*   Learn how to represent entities and relationships as nodes and edges.
*   Differentiate between different types of graph models (property graphs, RDF).
*   Model different types of relationships (directed, undirected, labeled).
*   Understand the importance of schema design in graph databases.
*   Gain practical experience in modelling data as a graph for various use cases.

## 1. Introduction to Graph Data Modelling

*   **What is Graph Data Modelling?**

    *   A method of representing data and relationships as a network of nodes (entities) and edges (relationships).
    *   Focuses on connections and relationships rather than rigid tables.
    *   Suitable for data with many-to-many relationships and complex interconnections.

*   **Why Use Graph Data Modelling?**

    *   **Natural Representation:**  Models real-world relationships more intuitively.
    *   **Performance:** Efficiently traverses complex relationships. Optimized for finding connected nodes.
    *   **Flexibility:** Easily adapt to evolving data requirements without major schema changes.
    *   **Rich Semantic:** Expresses relationships with specific meanings (e.g., "KNOWS", "WORKS_AT", "RECOMMENDS").
    *   **Use Cases:**  Social networks, recommendation systems, knowledge graphs, fraud detection, network management, supply chain analysis.

*   **Key Concepts:**

    *   **Node (Vertex):** Represents an entity (e.g., person, place, product, event).
        *   Nodes can have properties (attributes) associated with them (e.g., name, age, location).
    *   **Edge (Relationship):** Represents a connection or relationship between two nodes.
        *   Edges can be directed (one-way) or undirected (two-way).
        *   Edges can also have properties (attributes) describing the relationship itself (e.g., friendship strength, date of employment).
    *   **Property:** A key-value pair associated with a node or edge, providing additional information.
    *   **Label:** A category or type assigned to a node or edge, for grouping and filtering.

## 2. Representing Entities and Relationships

*   **Nodes as Entities:**

    *   Each real-world entity becomes a node in the graph.
    *   Example: A person, a movie, a book, a city.
    *   Properties describe the characteristics of the entity.
        *   Person: `name`, `age`, `city`, `occupation`.
        *   Movie: `title`, `year`, `genre`.

*   **Edges as Relationships:**

    *   Edges connect nodes, representing how they are related.
    *   Edges have a direction (directed/undirected) and a type (label).
    *   Example:
        *   A person `KNOWS` another person (directed or undirected).
        *   A person `WORKS_AT` a company (directed).
        *   A movie `BELONGS_TO` a genre (directed).

*   **Example:**

    *   **Entities:**
        *   Person: "Alice", "Bob", "Charlie"
        *   Movie: "The Matrix", "Inception"
    *   **Relationships:**
        *   Alice `KNOWS` Bob
        *   Alice `LIKED` The Matrix
        *   Bob `WATCHED` Inception
        *   Charlie `RECOMMENDS` Inception to Alice

## 3. Types of Graph Models

*   **Property Graph Model:**

    *   Nodes and edges can both have properties (key-value pairs).
    *   Nodes and edges can have labels (types).
    *   Directed edges are common.
    *   Most popular model in graph databases (Neo4j, Amazon Neptune).
    *   **Example (Neo4j Cypher syntax):**

        ```cypher
        CREATE (:Person {name: "Alice", age: 30})-[r:KNOWS {since: 2020}]->(:Person {name: "Bob", age: 25})
        ```

*   **RDF (Resource Description Framework):**

    *   A standard model for data interchange on the Web.
    *   Uses triples: Subject - Predicate - Object.
    *   Subject and Object are resources (nodes), Predicate is the relationship (edge).
    *   URI-based identification for nodes and edges.
    *   Often used for knowledge graphs and semantic web applications.
    *   **Example:**

        ```
        ex:Alice ex:knows ex:Bob .
        ex:Alice rdf:type ex:Person .
        ex:Bob rdf:type ex:Person .
        ```

*   **Comparison:**

    | Feature         | Property Graph                | RDF                           |
    |-----------------|-------------------------------|-------------------------------|
    | Data Model      | Nodes, Edges, Properties, Labels | Triples (Subject-Predicate-Object) |
    | Node/Edge Props | Yes                          | No (use separate triples)        |
    | Identification  | Local identifiers            | URIs                          |
    | Use Cases       | Social networks, recommendations | Knowledge graphs, semantic web |
    | Complexity      | Simpler                        | More complex                 |

## 4. Types of Relationships

*   **Directed Relationships:**

    *   Relationships have a defined direction (A -> B).
    *   Example: "WORKS_AT" (Person -> Company), "LIVES_IN" (Person -> City).
    *   Indicates a specific flow or dependency.

*   **Undirected Relationships:**

    *   Relationships are bidirectional (A <-> B).  Equivalent to two directed relationships A -> B and B -> A.
    *   Example: "FRIEND_OF" (Person <-> Person), "CONNECTED_TO" (Device <-> Device).
    *   Indicates a mutual connection or association.

*   **Labeled Relationships:**

    *   Relationships have a type or label, defining the nature of the connection.
    *   Example: "KNOWS", "LIKES", "RECOMMENDS", "FOLLOWS".
    *   Allows for richer semantics and more specific queries.

*   **Relationship Properties:**

    *  Relationships can have properties just like nodes. This allows you to store more information *about* the relationship.
    *   Example:  A relationship between two people could have a property such as "since" to store the year they met. A relationship between a movie and a person could have a property called "rating".

## 5. Schema Design in Graph Databases

*   **Importance of Schema (or lack thereof):**

    *   Graph databases offer more flexibility than relational databases.
    *   Schema is often emergent rather than strictly enforced.
    *   However, good schema design is still crucial for performance, data consistency, and maintainability.

*   **Best Practices:**

    *   **Choose meaningful labels for nodes and relationships.** This aids in understanding and querying the data.
    *   **Use consistent naming conventions.** Maintain uniformity in property names across similar nodes and relationships.
    *   **Consider indexing frequently queried properties.** Improves query performance.
    *   **Define constraints to enforce data integrity.**  e.g., uniqueness constraints, existence constraints.  While graph databases are flexible, having constraints is useful for maintaining data quality.
    *   **Think about query patterns.** Design the graph structure to optimize for common queries.
    *   **Use composite nodes where appropriate.**  For example, instead of linking multiple "Address" nodes to a "Person" node, embed the address information as properties within the "Person" node if the relationship is not complex and re-used.

*   **Schema-less vs. Schema-aware:**

    *   **Schema-less:** No predefined schema; nodes and edges can have any properties and labels. Offers maximum flexibility but requires careful data governance.
    *   **Schema-aware:**  Enforces a schema through constraints and validation rules. Improves data quality and consistency but reduces flexibility.

## 6. Practical Examples and Use Cases

*   **Social Network:**

    *   Nodes: Person
    *   Relationships: `FRIEND_OF`, `FOLLOWS`, `LIKES`
    *   Properties: name, age, location, interests.
    *   Queries: Find all friends of a person, Find people with similar interests, Recommend new connections.

*   **Recommendation System:**

    *   Nodes: User, Product
    *   Relationships: `PURCHASED`, `VIEWED`, `RATED`, `RECOMMENDS`
    *   Properties: rating, date of purchase.
    *   Queries: Recommend products to a user based on their purchase history and ratings, Find products frequently purchased together.

*   **Knowledge Graph:**

    *   Nodes: Concept, Entity
    *   Relationships: `IS_A`, `RELATED_TO`, `HAS_PROPERTY`
    *   Properties: description, value.
    *   Queries: Find all types of a concept, Retrieve properties of an entity, Discover related concepts.

*   **Supply Chain Management:**

    *   Nodes: Supplier, Manufacturer, Distributor, Retailer, Product
    *   Relationships: `SUPPLIES`, `MANUFACTURES`, `DISTRIBUTES`, `SELLS`
    *   Properties: quantity, price, date.
    *   Queries: Find all suppliers of a product, Trace the flow of goods, Identify potential bottlenecks.

## 7. Practice Questions and Exercises

**Question 1:**  Model a family tree as a graph. What are the nodes and relationships?

**Answer:**

*   Nodes: Person
*   Relationships: `PARENT_OF`, `SPOUSE_OF`, `CHILD_OF` (or `PARENT_OF` implied in reverse).

**Question 2:**  You want to model a network of computers and servers. What nodes and relationships would you use, and what properties might you include?

**Answer:**

*   Nodes: Computer, Server
*   Relationships: `CONNECTED_TO`, `RUNS_SERVICE`
*   Properties:
    *   Computer: IP Address, OS, RAM, Hard Drive Size
    *   Server: IP Address, OS, RAM, Hard Drive Size, CPU Cores, Service Name

**Question 3:**  Compare and contrast Property Graphs and RDF. Which would you choose for a knowledge graph about historical figures, and why?

**Answer:**

*   Comparison: (See the table in section 3).
*   Choice: RDF would be a good choice for a knowledge graph about historical figures. RDF's use of URIs for identification makes it suitable for linking to external data sources and ensuring unique identification of entities.  Furthermore, the triple structure is well-suited for representing semantic relationships between historical figures.  Property graphs can be used as well, but require more careful management of identifiers to avoid collisions.

**Question 4:**  Model a university course catalog as a graph database.  Consider departments, courses, professors, and students. What are the nodes, relationship labels and example properties.

**Answer:**

*   Nodes: Department, Course, Professor, Student
*   Relationships:
    *   Department `OFFERS` Course
    *   Professor `TEACHES` Course
    *   Student `ENROLLED_IN` Course
    *   Course `REQUIRES` Course (prerequisites)
    *   Professor `WORKS_IN` Department
*   Properties:
    *   Department: name, code
    *   Course: title, code, credits, description
    *   Professor: name, office, email
    *   Student: name, id, major

**Exercise 1:** Design a graph database schema for representing a movie database (movies, actors, directors, genres).  Specify the nodes, relationship types, and properties for each.

**Exercise 2:** Consider a scenario where you need to model a network of flights between different airports.  How would you represent the airports and flights as nodes and edges?  What properties would you include?

## 8. Important Points to Remember

*   **Graphs are about relationships:** Focus on modelling connections effectively.
*   **Flexibility is key:** Graph databases are adaptable to changing data requirements.
*   **Schema design matters:**  Even with flexibility, good design improves performance and maintainability.
*   **Choose the right model:** Select Property Graphs or RDF based on your use case.
*   **Think about queries:**  Design the graph structure to optimize for common queries.
*   **Properties enrich data:**  Use properties to add context to nodes and edges.
*   **Labels categorize data:**  Use labels to group and filter nodes and edges.
