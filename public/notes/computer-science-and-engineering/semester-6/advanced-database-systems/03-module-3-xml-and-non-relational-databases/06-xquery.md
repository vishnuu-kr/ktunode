---
title: "XQuery"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 3: XML and Non Relational Databases "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbe5"
status: "completed"
scrapedAt: "2026-05-20T16:50:24.738Z"
---
## Advanced Database Systems: Module 3 - XML and Non-Relational Databases: XQuery

**Learning Outcomes:**

*   Understand the purpose and role of XQuery.
*   Describe the XQuery data model and its relationship to XML.
*   Write basic XQuery expressions to retrieve data from XML documents.
*   Utilize FLWOR expressions for complex data manipulation and transformation.
*   Employ functions and operators within XQuery to refine queries.
*   Understand the importance and use of XQuery in modern database applications.

---

### 1. Introduction to XQuery

*   **Definition:** XQuery (XML Query Language) is a query language specifically designed for querying and transforming XML data. It's akin to SQL for relational databases, but tailored for the hierarchical structure of XML.

*   **Purpose & Role:**
    *   **Data Retrieval:** Extracting specific data elements from XML documents.
    *   **Data Transformation:**  Restructuring and modifying XML data to fit different formats or application requirements.
    *   **Data Integration:**  Combining data from multiple XML documents.
    *   **Data Validation:** Checking XML data against specific rules or schemas.

*   **Key Features:**
    *   **W3C Standard:** XQuery is an official standard maintained by the World Wide Web Consortium (W3C), ensuring interoperability and consistency.
    *   **Functional Programming Style:** Emphasizes functions and expressions, promoting declarative and concise code.
    *   **Path-Based Navigation:** Uses path expressions to navigate the XML document tree.
    *   **Strong Typing:** Supports data types to ensure data integrity.

### 2. XQuery Data Model

*   **Foundation:** XQuery operates on the XQuery Data Model (XDM), which is an abstraction of XML data. This model provides a consistent way to represent XML data regardless of its physical storage.

*   **Key Components of XDM:**
    *   **Sequences:**  Ordered collections of items. Items can be atomic values (numbers, strings, booleans) or nodes (elements, attributes, text).
    *   **Nodes:** Represent elements, attributes, text, comments, processing instructions, and documents.
        *   **Document Node:** Represents the entire XML document.
        *   **Element Node:** Represents XML elements, forming the hierarchical structure.
        *   **Attribute Node:** Represents XML attributes associated with elements.
        *   **Text Node:** Represents text content within elements.
    *   **Atomic Values:**  Basic data types like strings, numbers, dates, booleans. XQuery uses XML Schema data types (e.g., `xs:string`, `xs:integer`, `xs:date`).

*   **Relationship to XML:**  The XDM is a logical representation of XML data. XQuery operates on the XDM, not directly on the XML file itself.  Parsing an XML document creates its XDM representation, which then becomes the target of XQuery queries.

*   **Example:**

    Consider this XML snippet:

    ```xml
    <book>
      <title>The Lord of the Rings</title>
      <author>J.R.R. Tolkien</author>
      <price>25.00</price>
    </book>
    ```

    In the XDM:

    *   There's a **Document Node** representing the whole document.
    *   Inside, there's an **Element Node** named "book."
    *   The "book" element contains three child **Element Nodes**: "title," "author," and "price."
    *   Each of these child elements contains a **Text Node** with the corresponding value (e.g., "The Lord of the Rings").

### 3. Basic XQuery Expressions

*   **Path Expressions:** The foundation of XQuery. Used to navigate the XML tree and select nodes.
    *   `/` (root): Selects the root element of the document.
    *   `//` (descendant): Selects all descendant elements matching the specified name.
    *   `.` (current node): Refers to the current node being processed.
    *   `@` (attribute): Selects an attribute of an element.
    *   `element_name`: Selects elements with the specified name.

*   **Examples:**

    Assume we have an XML document named `books.xml` with the following structure:

    ```xml
    <library>
      <book>
        <title>The Hitchhiker's Guide to the Galaxy</title>
        <author>Douglas Adams</author>
        <price>15.00</price>
      </book>
      <book>
        <title>1984</title>
        <author>George Orwell</author>
        <price>12.50</price>
      </book>
    </library>
    ```

    *   **Query:**  `doc("books.xml")/library/book/title`
        *   **Result:**  Returns the title elements of all books in the library:

            ```xml
            <title>The Hitchhiker's Guide to the Galaxy</title>
            <title>1984</title>
            ```

    *   **Query:**  `doc("books.xml")//author`
        *   **Result:** Returns all author elements anywhere in the document:

            ```xml
            <author>Douglas Adams</author>
            <author>George Orwell</author>
            ```

    *   **Query:**  `doc("books.xml")/library/book[1]/title`
        *   **Result:** Returns the title of the first book in the library (using indexing):

            ```xml
            <title>The Hitchhiker's Guide to the Galaxy</title>
            ```

    *   **Query:**  `doc("books.xml")/library/book/price/text()`
        *   **Result:** Returns the *text* content of the price elements:

            ```
            15.00
            12.50
            ```

*   **Predicates:**  Used to filter elements based on conditions. Enclosed in square brackets `[]`.

    *   **Query:** `doc("books.xml")/library/book[price > 13]/title`
        *   **Result:** Returns the titles of books with a price greater than 13:

            ```xml
            <title>The Hitchhiker's Guide to the Galaxy</title>
            ```

### 4. FLWOR Expressions

*   **Definition:** FLWOR (pronounced "flower") is a core construct in XQuery, providing a powerful way to iterate, filter, and transform XML data.  It stands for:

    *   **F**OR: Iterates over a sequence of items.
    *   **L**ET: Binds a variable to a value.
    *   **W**HERE: Filters the results based on a condition.
    *   **O**RDER BY: Sorts the results.
    *   **R**ETURN: Constructs the result for each iteration.

*   **Syntax:**

    ```xquery
    for $variable in expression
    let $variable := expression
    where condition
    order by expression ascending|descending
    return expression
    ```

*   **Example:**

    ```xquery
    for $b in doc("books.xml")/library/book
    where $b/price > 13
    order by $b/title
    return
      <book_info>
        <title>{$b/title/text()}</title>
        <price>{$b/price/text()}</price>
      </book_info>
    ```

    **Explanation:**

    1.  **`for $b in doc("books.xml")/library/book`**: Iterates through each `book` element in the `library` of the `books.xml` document. The current `book` element is bound to the variable `$b`.
    2.  **`where $b/price > 13`**: Filters the books, selecting only those where the `price` is greater than 13.
    3.  **`order by $b/title`**:  Orders the selected books by their `title` in ascending order (by default).
    4.  **`return <book_info> ... </book_info>`**: Constructs a new XML element called `book_info` for each book that passes the filter.  The title and price of the book are inserted into the `book_info` element using curly braces `{$b/title/text()}` to evaluate the XQuery expressions and embed their values.

    **Result:** This query would return XML like this (assuming only "The Hitchhiker's Guide to the Galaxy" satisfies the price condition):

    ```xml
    <book_info>
      <title>The Hitchhiker's Guide to the Galaxy</title>
      <price>15.00</price>
    </book_info>
    ```

*   **LET Clause:** The `let` clause allows you to define variables within the FLWOR expression. This can be useful for storing intermediate results or for performing calculations that are used multiple times.

    ```xquery
    for $b in doc("books.xml")/library/book
    let $discounted_price := $b/price * 0.9
    where $discounted_price < 12
    return
      <discounted_book>
        <title>{$b/title/text()}</title>
        <original_price>{$b/price/text()}</original_price>
        <discounted_price>{$discounted_price}</discounted_price>
      </discounted_book>
    ```

    This example calculates a discounted price and then uses it in the `where` clause.

### 5. Functions and Operators

*   **Built-in Functions:** XQuery provides a wide range of built-in functions for string manipulation, numeric calculations, date/time operations, node manipulation, and more.

    *   **String Functions:** `string-length()`, `substring()`, `upper-case()`, `lower-case()`, `contains()`, `starts-with()`, `ends-with()`.
    *   **Numeric Functions:** `sum()`, `avg()`, `min()`, `max()`, `round()`, `floor()`, `ceiling()`.
    *   **Node Functions:** `name()`, `local-name()`, `data()`, `count()`.
    *   **Date/Time Functions:** `current-date()`, `current-time()`, `current-dateTime()`.

*   **Operators:** XQuery supports various operators for comparison, arithmetic, and logical operations.

    *   **Comparison Operators:** `=`, `!=`, `<`, `>`, `<=`, `>=`.
    *   **Arithmetic Operators:** `+`, `-`, `*`, `div` (division), `mod` (modulo).
    *   **Logical Operators:** `and`, `or`, `not()`.

*   **Examples:**

    *   **String Length:**

        ```xquery
        for $b in doc("books.xml")/library/book
        where string-length($b/title) > 20
        return $b/title
        ```
        (Returns titles longer than 20 characters)

    *   **Sum of Prices:**

        ```xquery
        let $total_price := sum(doc("books.xml")/library/book/price)
        return $total_price
        ```
        (Calculates the sum of all book prices)

    *   **Data Extraction and Conversion:**

        ```xquery
        for $b in doc("books.xml")/library/book
        let $price := xs:decimal($b/price/text())  (: Convert price to decimal type :)
        where $price > 10
        return $b/title
        ```
        (Extracts price as text, converts to a decimal type and then compares with a numeric value)

### 6. XQuery in Modern Database Applications

*   **XML Databases:** XQuery is the primary query language for XML databases, which are designed to store and manage XML data natively. Examples include BaseX and eXist-db.

*   **Hybrid Database Systems:** Many relational database systems (e.g., Oracle, SQL Server, PostgreSQL) now support XML data types and provide XQuery capabilities, allowing you to query and manipulate XML data stored within relational tables.

*   **Data Integration:** XQuery is used to integrate data from different XML sources, transforming and combining it into a unified format.

*   **Web Services:** XQuery can be used to process and transform XML messages exchanged in web services, enabling data exchange between different applications.

*   **Content Management Systems (CMS):** XQuery can be employed to query and manipulate XML-based content stored in CMS systems.

### Important Points to Remember:

*   XQuery operates on the XQuery Data Model (XDM), a logical representation of XML.
*   Path expressions are fundamental for navigating the XML tree.
*   FLWOR expressions provide powerful data manipulation and transformation capabilities.
*   Functions and operators enable complex filtering and calculations.
*   XQuery is a W3C standard, ensuring interoperability.
*   Understanding XML structure and namespaces is crucial for effective XQuery usage.

### Practice Questions and Exercises:

**Using the `books.xml` example:**

```xml
<library>
  <book category="fiction">
    <title>The Hitchhiker's Guide to the Galaxy</title>
    <author>Douglas Adams</author>
    <price>15.00</price>
    <publisher>Pan Books</publisher>
  </book>
  <book category="dystopian">
    <title>1984</title>
    <author>George Orwell</author>
    <price>12.50</price>
    <publisher>Secker & Warburg</publisher>
  </book>
  <book category="fiction">
    <title>Foundation</title>
    <author>Isaac Asimov</author>
    <price>18.00</price>
    <publisher>Gnome Press</publisher>
  </book>
  <book category="mystery">
    <title>The Girl with the Dragon Tattoo</title>
    <author>Stieg Larsson</author>
    <price>20.00</price>
    <publisher>Norstedts Förlag</publisher>
  </book>
</library>
```

**1. Write an XQuery to retrieve all book titles with category "fiction".**

*   **Answer:**

    ```xquery
    doc("books.xml")/library/book[@category="fiction"]/title
    ```

**2. Write an XQuery to retrieve the authors and prices of all books, formatting the output as follows:**

```xml
<book_price>
  <author>...</author>
  <price>...</price>
</book_price>
```

*   **Answer:**

    ```xquery
    for $b in doc("books.xml")/library/book
    return
      <book_price>
        <author>{$b/author/text()}</author>
        <price>{$b/price/text()}</price>
      </book_price>
    ```

**3. Write an XQuery to calculate the average price of all books in the library.**

*   **Answer:**

    ```xquery
    let $avg_price := avg(doc("books.xml")/library/book/price)
    return $avg_price
    ```

**4. Write an XQuery to find all books whose title contains the word "Girl".**

*   **Answer:**

    ```xquery
    for $b in doc("books.xml")/library/book
    where contains($b/title/text(), "Girl")
    return $b/title
    ```

**5. Write an XQuery that returns each book's title and publisher, but sort the output by the publisher's name in descending order.**

*   **Answer:**

   ```xquery
    for $b in doc("books.xml")/library/book
    order by $b/publisher descending
    return
      <book_info>
        <title>{$b/title/text()}</title>
        <publisher>{$b/publisher/text()}</publisher>
      </book_info>
   ```

These notes provide a comprehensive overview of XQuery, covering its purpose, data model, syntax, and usage. They also include practical examples and exercises to solidify your understanding of the topic. Remember to practice writing XQuery expressions and experiment with different functions and operators to become proficient in querying and transforming XML data. Good luck!
