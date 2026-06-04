---
title: "XPath Queries"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 3: XML and Non Relational Databases "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbe4"
status: "completed"
scrapedAt: "2026-05-20T16:50:24.027Z"
---
## ADVANCED DATABASE SYSTEMS: Module 3 - XML and Non-Relational Databases: XPath Queries

**Learning Outcomes:**

Upon completion of this topic, you should be able to:

*   Understand the purpose and function of XPath.
*   Construct XPath expressions to navigate and query XML documents.
*   Utilize various XPath axes, node tests, and predicates.
*   Apply XPath functions and operators to refine queries.
*   Evaluate XPath expressions and understand their results.
*   Understand the common use cases of XPath in database systems.

**1. Introduction to XPath**

*   **Definition:** XPath (XML Path Language) is a query language for selecting nodes from an XML document.  It allows you to navigate the XML document's tree structure and extract specific data.
*   **Purpose:**  Designed to be used by other technologies like XSLT, XQuery, and programming languages for accessing XML data.  It provides a concise and powerful way to locate and extract information.
*   **Key Concepts:**
    *   **Node:**  A fundamental unit in an XML document.  Examples include:
        *   Element nodes (e.g., `<book>`, `<title>`)
        *   Attribute nodes (e.g., `lang="en"`)
        *   Text nodes (the content inside elements)
        *   Root node (the top-level node representing the entire document)
        *   Comment nodes (`<!-- This is a comment -->`)
        *   Processing instruction nodes (`<?xml-stylesheet type="text/xsl" href="style.xsl"?>`)
    *   **Path:**  A sequence of steps that navigates the XML tree structure.
    *   **Expression:** A combination of paths, functions, and operators used to select nodes.
    *   **Context Node:** The starting point for evaluating an XPath expression.  This is often the root node, but can be changed.

**2. XPath Syntax and Basic Expressions**

*   **Forward Slashes ( `/` )**: Used to separate path steps and indicate a parent-child relationship.
*   **Double Forward Slashes ( `//` )**:  Selects nodes in the document from the current node that match the selection no matter where they are in the document.  Equivalent to "descendant-or-self" axis.
*   **Asterisk ( `*` )**:  A wildcard character that selects all element nodes.
*   **At Sign ( `@` )**: Used to select attribute nodes.
*   **Text Function:** `text()`  Selects the text content of a node.

*   **Examples (using the following sample XML):**

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <bookstore>
      <book category="cooking">
        <title lang="en">Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <year>2005</year>
        <price>30.00</price>
      </book>
      <book category="children">
        <title lang="en">Harry Potter</title>
        <author>J.K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
      </book>
      <book category="web">
        <title lang="en">XQuery Kick Start</title>
        <author>James McGovern</author>
        <author>Per Bothner</author>
        <author>Kurt Cagle</author>
        <author>James Linn</author>
        <author>Vaidyanathan Nagarajan</author>
        <year>2003</year>
        <price>49.99</price>
      </book>
      <book category="web">
        <title lang="en">Learning XML</title>
        <author>Erik T. Ray</author>
        <year>2003</year>
        <price>39.95</price>
      </book>
    </bookstore>
    ```

    *   `/bookstore/book/title`: Selects all `title` elements that are children of `book` elements, which are children of the `bookstore` root element.
    *   `//title`: Selects all `title` elements in the document, regardless of their location.
    *   `bookstore/book[1]/title`: Selects the `title` of the first `book` element within the `bookstore`.  (Index starts at 1)
    *   `bookstore//author`:  Selects all `author` elements that are descendants of the `bookstore` element.
    *   `//book[@category]`: Selects all `book` elements that have a `category` attribute.
    *   `//book[@category='cooking']`: Selects all `book` elements where the value of the `category` attribute is "cooking".
    *   `//title/text()`: Selects the text content of all `title` elements.
    *   `//@lang`: Selects all `lang` attributes.
    *   `//book/*`: Selects all children elements of every book element.

**3. XPath Axes**

Axes specify the direction to traverse the XML tree relative to the context node.  Some common axes include:

*   **child:** (Default if no axis specified) Selects the children of the context node.
*   **parent:** Selects the parent of the context node.
*   **ancestor:** Selects all ancestors of the context node (parent, grandparent, etc.).
*   **descendant:** Selects all descendants of the context node (children, grandchildren, etc.).
*   **ancestor-or-self:** Selects all ancestors of the context node (including the context node itself).
*   **descendant-or-self:** Selects all descendants of the context node (including the context node itself).
*   **attribute:** Selects the attributes of the context node.
*   **self:** Selects the context node itself.
*   **following:** Selects all nodes that appear after the context node in document order (excluding descendants and attributes).
*   **preceding:** Selects all nodes that appear before the context node in document order (excluding ancestors and attributes).
*   **following-sibling:** Selects all siblings of the context node that appear after it in the document.
*   **preceding-sibling:** Selects all siblings of the context node that appear before it in the document.

*   **Examples:**

    *   `child::book`: Selects all `book` child elements of the current node. (Equivalent to `book`)
    *   `parent::bookstore`: Selects the `bookstore` parent element of the current node.
    *   `ancestor::*`: Selects all ancestor elements of the current node.
    *   `descendant::title`: Selects all `title` descendant elements of the current node.
    *   `attribute::category`: Selects the `category` attribute of the current node. (Equivalent to `@category`)
    *   `self::book`: Selects the current node if it is a `book` element.
    *   `following-sibling::book`: Selects all `book` elements that are following siblings of the current node.

**4. Node Tests and Predicates**

*   **Node Tests:** Specify the type of node to select along an axis.  Common node tests include:
    *   Element names (e.g., `book`, `title`)
    *   `*` (selects all element nodes)
    *   `text()` (selects text nodes)
    *   `comment()` (selects comment nodes)
    *   `node()` (selects any node)
*   **Predicates:**  Filters applied to node sets, enclosed in square brackets `[]`. Predicates can use:
    *   Attribute values (e.g., `@category='cooking'`)
    *   Element values (e.g., `price > 30`)
    *   Position (e.g., `[1]`, `[last()]`)
    *   Functions (e.g., `[contains(title, 'XML')]`)
    *   Boolean operators (e.g., `and`, `or`)

*   **Examples:**

    *   `//book[@category='cooking'][price > 35]`: Selects all `book` elements with a `category` attribute of "cooking" AND a `price` greater than 35.
    *   `//book[author='Erik T. Ray']`: Selects all `book` elements where the `author` element has the value "Erik T. Ray".
    *   `//book[position() < 3]`: Selects the first two `book` elements. `position()` returns the index of the element in the current context.
    *   `//book[last()]`: Selects the last `book` element.
    *   `//book[price=price[last()]]` Selects all book elements with a price equal to the price of the last book element.
    *   `//title[contains(text(), 'XML')]`: Selects all `title` elements whose text content contains the string "XML".
    *   `//book[@category='web' or @category='children']`: Selects all `book` elements where the category is 'web' or 'children'.

**5. XPath Functions and Operators**

XPath provides a rich set of built-in functions and operators for data manipulation and comparison.

*   **Functions:**
    *   `string(node-set)`: Returns the string value of a node-set.
    *   `number(string)`: Converts a string to a number.
    *   `sum(node-set)`: Returns the sum of the values in a node-set.
    *   `count(node-set)`: Returns the number of nodes in a node-set.
    *   `string-length(string)`: Returns the length of a string.
    *   `substring(string, start, length?)`: Returns a substring of a string.
    *   `contains(string, substring)`: Checks if a string contains another string.
    *   `starts-with(string, substring)`: Checks if a string starts with another string.
    *   `ends-with(string, substring)`: Checks if a string ends with another string.
    *   `translate(string, from, to)`: Replaces characters in a string.
    *   `lower-case(string)`: Converts string to lower-case.
    *   `upper-case(string)`: Converts string to upper-case.
    *   `concat(string1, string2, ...)`: Concatenates strings.
    *   `floor(number)`: Returns the largest integer less than or equal to the number.
    *   `ceiling(number)`: Returns the smallest integer greater than or equal to the number.
    *   `round(number)`: Rounds a number to the nearest integer.
    *   `position()`: Returns the context position of the node in the current node list.
    *   `last()`: Returns the index of the last node in the context.
*   **Operators:**
    *   `=`, `!=`:  Equality and inequality operators.
    *   `<`, `>`, `<=`, `>=`:  Comparison operators.
    *   `and`, `or`:  Logical operators.
    *   `+`, `-`, `*`, `div`, `mod`: Arithmetic operators.
    *   `|`: Union operator (combines node-sets).

*   **Examples:**

    *   `sum(//price)`: Calculates the sum of all `price` elements.
    *   `count(//book)`: Counts the number of `book` elements.
    *   `string-length(//title[1])`: Returns the length of the first `title` element's content.
    *   `//book[price > 40 and year = 2003]` : Selects `book` elements with a price greater than 40 and year equal to 2003.
    *   `//book[starts-with(title, 'Learn')]`: Selects all books whose title starts with "Learn".
    *   `//book[contains(author, 'James')]`: Selects all book elements where at least one author element contains the name "James".
    *    `//title | //author`: Returns a union of all the title and author elements.

**6. Evaluating XPath Expressions and Understanding Results**

*   **Evaluation Context:**  XPath expressions are evaluated within a specific context. The context includes:
    *   Context Node: The starting point for the evaluation.
    *   Context Position: The position of the current node in the context node list.
    *   Context Size:  The size of the context node list.
    *   Variable Bindings:  Any variables defined in the context.
    *   Function Library: The set of available functions.
*   **Result Types:**  XPath expressions can return the following types:
    *   **Node-set:**  An unordered collection of nodes.
    *   **Boolean:**  `true` or `false`.
    *   **Number:**  A floating-point number.
    *   **String:**  A sequence of characters.
*   **Understanding Results:** The interpretation of the result depends on the context in which the XPath expression is used.  For example:
    *   XSLT: The results are used to transform the XML document.
    *   XQuery: The results are used to construct new XML documents or other data types.
    *   Programming Languages: The results are accessed and manipulated using the language's API.

**7. Use Cases of XPath in Database Systems**

*   **Querying XML Databases:** XPath is the foundation for querying XML data stored in native XML databases or relational databases with XML extensions.
*   **Data Extraction and Transformation:**  Used to extract specific data from XML documents for integration with other systems or for data warehousing.
*   **Validating XML Documents:**  XPath can be used in conjunction with XML Schema (XSD) or DTD to validate the structure and content of XML documents.
*   **Web Scraping:**  XPath is often used in web scraping tools to extract data from HTML documents (which are a type of XML document).
*   **Configuration Files:** XPath can access information contained in configuration files formatted in XML.
*   **REST APIs:** Parsing the XML responses from REST APIs and extracting the necessary data.

**8. Important Points to Remember**

*   XPath is case-sensitive.
*   Indexes start at 1, not 0.
*   `//` is powerful but can be inefficient in large documents if used at the beginning of a path. Consider using more specific paths whenever possible.
*   Understand the different axes and how they navigate the XML tree.
*   Use predicates to filter results and narrow down the selection.
*   Familiarize yourself with common XPath functions and operators.
*   Different versions of XPath (XPath 1.0, XPath 2.0, XPath 3.0) have different features and function libraries. Be aware of which version you are using.

**9. Practice Questions/Exercises**

Use the following XML document for the exercises below:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<company>
  <employee id="123">
    <name>John Smith</name>
    <title>Software Engineer</title>
    <department>Engineering</department>
    <salary>80000</salary>
    <skills>
      <skill>Java</skill>
      <skill>XML</skill>
      <skill>SQL</skill>
    </skills>
  </employee>
  <employee id="456">
    <name>Jane Doe</name>
    <title>Data Scientist</title>
    <department>Research</department>
    <salary>95000</salary>
    <skills>
      <skill>Python</skill>
      <skill>Machine Learning</skill>
      <skill>Statistics</skill>
    </skills>
  </employee>
  <employee id="789">
    <name>Peter Jones</name>
    <title>Project Manager</title>
    <department>Management</department>
    <salary>110000</salary>
    <skills>
      <skill>Communication</skill>
      <skill>Leadership</skill>
      <skill>Planning</skill>
    </skills>
  </employee>
</company>
```

1.  **Write an XPath expression to select all `employee` elements.**
2.  **Write an XPath expression to select the `name` of the employee with `id="456"`.**
3.  **Write an XPath expression to select all `skill` elements.**
4.  **Write an XPath expression to select all employees whose salary is greater than 90000.**
5.  **Write an XPath expression to count the number of employees in the `Engineering` department.**
6.  **Write an XPath expression to select the average salary of all employees.**
7.  **Write an XPath expression to select all employees that have the skill "XML".**
8.  **Write an XPath expression to find the text content of the 'title' element of the employee with id '789'.**
9.  **Write an XPath expression to select the ids of all employees.**
10. **Write an XPath expression to select the skill elements of the employee with id 123.**

**Answers:**

1.  `//employee`
2.  `//employee[@id="456"]/name`
3.  `//skill` or `//employee/skills/skill`
4.  `//employee[salary > 90000]`
5.  `count(//employee[department='Engineering'])`
6.  `sum(//salary) div count(//employee)`
7.  `//employee[skills/skill='XML']`
8.  `//employee[@id='789']/title/text()`
9.  `//employee/@id`
10. `//employee[@id='123']/skills/skill`
