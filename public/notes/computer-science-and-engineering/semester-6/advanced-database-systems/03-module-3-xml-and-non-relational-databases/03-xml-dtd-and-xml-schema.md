---
title: "XML: DTD and XML Schema"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 3: XML and Non Relational Databases "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbe2"
status: "completed"
scrapedAt: "2026-05-20T16:50:22.610Z"
---
# ADVANCED DATABASE SYSTEMS: Module 3 - XML and Non-Relational Databases
## Topic: XML: DTD and XML Schema

**Learning Outcomes:**

*   Understand the purpose and benefits of using XML.
*   Explain the role of DTDs and XML Schemas in validating XML documents.
*   Describe the syntax and structure of DTDs.
*   Describe the syntax and structure of XML Schemas (XSD).
*   Compare and contrast DTDs and XML Schemas, highlighting their strengths and weaknesses.
*   Create simple DTDs and XML Schemas for basic XML documents.
*   Validate XML documents against a given DTD or XML Schema.

---

### 1. Introduction to XML

*   **Definition:** Extensible Markup Language (XML) is a markup language designed for encoding documents in a format that is both human-readable and machine-readable.

*   **Purpose:**
    *   Data transport between systems
    *   Data storage
    *   Configuration files
    *   Document formats

*   **Benefits:**
    *   **Platform Independence:**  XML is text-based, making it independent of hardware and software.
    *   **Human-Readable:**  XML documents are easily readable and understandable.
    *   **Extensible:**  You can define your own tags and attributes.
    *   **Hierarchical Structure:**  XML's tree-like structure allows representation of complex data relationships.
    *   **Validation:** XML documents can be validated against schemas to ensure data integrity.

*   **Key Concepts:**
    *   **Elements:**  Building blocks of an XML document, enclosed in start and end tags (e.g., `<book>...</book>`).
    *   **Attributes:**  Provide additional information about an element, defined within the start tag (e.g., `<book genre="fiction">`).
    *   **Tags:**  Used to mark the beginning and end of an element.
        *   Start tag: `<elementName>`
        *   End tag: `</elementName>`
        *   Empty tag: `<elementName/>`
    *   **Document Prolog:**  Contains the XML declaration (e.g., `<?xml version="1.0" encoding="UTF-8"?>`) and optionally, links to DTD or XML Schema.
    *   **Root Element:**  The single top-level element that contains all other elements in the document.
    *   **Well-Formed XML:** XML documents that adhere to the basic XML syntax rules (e.g., proper nesting of elements, single root element, closed tags).  It must contain a prolog, root element, proper nesting etc.

*   **Example:**

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <bookstore>
        <book genre="fiction">
            <title>The Lord of the Rings</title>
            <author>J.R.R. Tolkien</author>
            <price>29.99</price>
        </book>
        <book genre="mystery">
            <title>The Da Vinci Code</title>
            <author>Dan Brown</author>
            <price>19.99</price>
        </book>
    </bookstore>
    ```

### 2. DTD (Document Type Definition)

*   **Definition:** A DTD is a specification that defines the structure, elements, attributes, and data types of an XML document. It acts as a grammar for XML documents, ensuring that they conform to a specific format.

*   **Purpose:**  To validate XML documents, ensuring they are well-formed and conform to a predefined structure.

*   **Structure and Syntax:**

    *   **Element Declaration:** `<!ELEMENT element-name (content-model)>`
        *   `element-name`: The name of the element.
        *   `content-model`: Defines what the element can contain (e.g., other elements, text, mixed content).
            *   `EMPTY`:  The element has no content (e.g., `<br/>`).
            *   `ANY`:  The element can contain any content.
            *   `(#PCDATA)`: The element contains parsed character data (text).
            *   `(element1, element2, ...)`:  A sequence of elements, appearing in the specified order.
            *   `(element1 | element2 | ...)`:  A choice of elements, one of which must appear.
            *   `element+`:  One or more occurrences of the element.
            *   `element*`:  Zero or more occurrences of the element.
            *   `element?`:  Zero or one occurrence of the element.

    *   **Attribute List Declaration:** `<!ATTLIST element-name attribute-name attribute-type attribute-default>`
        *   `element-name`: The name of the element to which the attribute belongs.
        *   `attribute-name`: The name of the attribute.
        *   `attribute-type`:  The data type of the attribute (e.g., `CDATA`, `ID`, `IDREF`, `ENUMERATED`).
        *   `attribute-default`:  Specifies the default value for the attribute (e.g., `#REQUIRED`, `#IMPLIED`, `#FIXED "value"`, "default value").

    *   **Entities:** Used to define shortcuts or reusable fragments of text.
        *   **Internal Entity:** Defined within the DTD: `<!ENTITY entity-name "entity-value">`
        *   **External Entity:** Refers to an external file: `<!ENTITY entity-name SYSTEM "URI/URL">`

*   **Example:**  DTD for the bookstore XML example above.

    ```dtd
    <!DOCTYPE bookstore [
        <!ELEMENT bookstore (book+)>
        <!ELEMENT book (title, author, price)>
        <!ATTLIST book genre CDATA #REQUIRED>
        <!ELEMENT title (#PCDATA)>
        <!ELEMENT author (#PCDATA)>
        <!ELEMENT price (#PCDATA)>
    ]>
    ```

    *Explanation:*
        * `<!DOCTYPE bookstore [...]>`: Specifies that the root element is `bookstore`.
        * `<!ELEMENT bookstore (book+)>`: The `bookstore` element contains one or more `book` elements.
        * `<!ELEMENT book (title, author, price)>`: The `book` element contains a `title`, `author`, and `price` element in that order.
        * `<!ATTLIST book genre CDATA #REQUIRED>`: The `book` element has a `genre` attribute which is Character Data (CDATA) and is required.
        * The other `ELEMENT` declarations specify that `title`, `author` and `price` contain parsed character data.

### 3. XML Schema (XSD)

*   **Definition:** An XML Schema (XSD) is a more powerful and versatile schema language than DTD for describing the structure, content, and data types of XML documents.  It uses XML syntax itself, making it easier to parse and manipulate.

*   **Purpose:** To validate XML documents, ensuring they conform to a predefined structure and data types.

*   **Structure and Syntax:**

    *   **Root Element:** `<xs:schema>` -  The root element of every XML Schema document. The `xmlns:xs="http://www.w3.org/2001/XMLSchema"` attribute defines the XML Schema namespace.
    *   **Simple Types:** Define basic data types like string, integer, date, boolean.

        ```xml
        <xs:simpleType name="stringType">
            <xs:restriction base="xs:string"/>
        </xs:simpleType>
        ```

    *   **Complex Types:** Define elements that can contain other elements, attributes, or mixed content.

        ```xml
        <xs:complexType name="bookType">
            <xs:sequence>
                <xs:element name="title" type="xs:string"/>
                <xs:element name="author" type="xs:string"/>
                <xs:element name="price" type="xs:decimal"/>
            </xs:sequence>
            <xs:attribute name="genre" type="xs:string" use="required"/>
        </xs:complexType>
        ```

    *   **Elements:** Defined using the `<xs:element>` element.  The `type` attribute specifies the data type or complex type of the element.

        ```xml
        <xs:element name="book" type="bookType"/>
        ```

    *   **Attributes:** Defined using the `<xs:attribute>` element. The `type` attribute specifies the data type of the attribute, and the `use` attribute specifies whether the attribute is required, optional, or prohibited.

        ```xml
        <xs:attribute name="genre" type="xs:string" use="required"/>
        ```

    *   **Sequences, Choices, and All:** Used to define the order and composition of elements within a complex type.
        *   `<xs:sequence>`: Elements must appear in the specified order.
        *   `<xs:choice>`: Only one of the specified elements can appear.
        *   `<xs:all>`:  Elements can appear in any order.

    *   **Occurrence Constraints:**  Specify the minimum and maximum number of times an element can appear.
        *   `minOccurs="0"`: Element is optional.
        *   `maxOccurs="unbounded"`: Element can appear any number of times.

*   **Example:**  XML Schema for the bookstore XML example above.

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

        <xs:element name="bookstore" type="bookstoreType"/>

        <xs:complexType name="bookstoreType">
            <xs:sequence>
                <xs:element name="book" type="bookType" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>

        <xs:complexType name="bookType">
            <xs:sequence>
                <xs:element name="title" type="xs:string"/>
                <xs:element name="author" type="xs:string"/>
                <xs:element name="price" type="xs:decimal"/>
            </xs:sequence>
            <xs:attribute name="genre" type="xs:string" use="required"/>
        </xs:complexType>

    </xs:schema>
    ```

    *Explanation:*
        *   `<xs:schema ...>`:  The root element, declaring the XML Schema namespace.
        *   `<xs:element name="bookstore" type="bookstoreType"/>`: Defines the root element `bookstore` with the complex type `bookstoreType`.
        *   `<xs:complexType name="bookstoreType">`: Defines the structure of `bookstoreType`, which contains a sequence of `book` elements. The `maxOccurs="unbounded"` attribute allows for multiple `book` elements.
        *   `<xs:complexType name="bookType">`: Defines the structure of `bookType`, which contains a sequence of `title`, `author`, and `price` elements, and a `genre` attribute that is required.
        *   The `xs:string` and `xs:decimal` types are built-in XML Schema data types.

### 4. DTD vs. XML Schema: Comparison

| Feature         | DTD                                      | XML Schema (XSD)                                  |
|-----------------|------------------------------------------|---------------------------------------------------|
| Syntax          | Uses its own DTD syntax.                 | Uses XML syntax.                                 |
| Data Types      | Limited data type support (CDATA, ID, etc.). | Rich data type support (string, integer, date, etc.). |
| Extensibility   | Less extensible.                         | More extensible.                                 |
| Namespace Support | No namespace support.                    | Full namespace support.                           |
| Validation      | Provides basic validation.               | Provides more robust and flexible validation.      |
| Tooling         | Limited tooling support.                 | Wide range of tooling support.                    |
| Complexity      | Simpler to learn and use initially.       | More complex to learn but more powerful.         |

**Strengths of DTD:**

*   Simpler to learn and implement for basic XML structures.
*   Sufficient for simple validation needs.

**Weaknesses of DTD:**

*   Limited data type support.
*   No namespace support, which can lead to naming conflicts in complex XML documents.
*   Less extensible and maintainable compared to XML Schema.

**Strengths of XML Schema:**

*   Uses XML syntax, making it easier to parse and manipulate.
*   Supports a wide range of data types, allowing for more precise validation.
*   Supports namespaces, resolving naming conflicts and promoting modularity.
*   More extensible and maintainable.

**Weaknesses of XML Schema:**

*   More complex to learn and implement initially.
*   Can be verbose compared to DTD.

**Choosing between DTD and XML Schema:**

*   For simple XML documents with basic validation requirements, DTD might be sufficient.
*   For complex XML documents that require strong data typing, namespace support, and extensibility, XML Schema is the preferred choice.

### 5. Validating XML Documents

*   **Validation:**  The process of checking whether an XML document conforms to the rules defined in a DTD or XML Schema.

*   **Validation Tools:**  Many XML editors, IDEs, and command-line tools can validate XML documents.  Examples include:

    *   XMLSpy
    *   Oxygen XML Editor
    *   xmllint (command-line tool)

*   **Process:**

    1.  **Specify the DTD or XML Schema:** Link the XML document to the appropriate schema.
        *   **DTD:** In the XML document prologue: `<!DOCTYPE root-element SYSTEM "path/to/dtd">`
        *   **XML Schema:**  In the root element of the XML document:

            ```xml
            <root-element xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                         xsi:noNamespaceSchemaLocation="path/to/schema.xsd">
            ```

    2.  **Use a validation tool:** Open the XML document in a validation tool or use a command-line tool to validate the document.

    3.  **Review the results:**  The validation tool will report any errors or warnings found in the XML document.

### 6. Practice Questions/Exercises

1.  **Question:** What is the purpose of an XML DTD?
    *   **Answer:**  To define the structure, elements, attributes, and data types of an XML document, and to validate XML documents against that definition.

2.  **Question:** What are the key differences between DTD and XML Schema?
    *   **Answer:**  (See comparison table above)

3.  **Exercise:** Create a DTD for an XML document that represents a list of students. Each student has a name, ID, and major. The name must be a string, the ID must be an integer, and the major must be one of "Computer Science", "Engineering", or "Mathematics".

    *   **Answer:**

        ```dtd
        <!DOCTYPE students [
            <!ELEMENT students (student+)>
            <!ELEMENT student (name, id, major)>
            <!ELEMENT name (#PCDATA)>
            <!ELEMENT id (#PCDATA)>
            <!ELEMENT major (#PCDATA)>
            <!ATTLIST major type (Computer Science|Engineering|Mathematics) "Computer Science">
        ]>
        ```

4.  **Exercise:**  Create an XML Schema for the same student list as in Exercise 3.

    *   **Answer:**

        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

            <xs:element name="students" type="studentsType"/>

            <xs:complexType name="studentsType">
                <xs:sequence>
                    <xs:element name="student" type="studentType" maxOccurs="unbounded"/>
                </xs:sequence>
            </xs:complexType>

            <xs:complexType name="studentType">
                <xs:sequence>
                    <xs:element name="name" type="xs:string"/>
                    <xs:element name="id" type="xs:integer"/>
                    <xs:element name="major" type="majorType"/>
                </xs:sequence>
            </xs:complexType>

            <xs:simpleType name="majorType">
                <xs:restriction base="xs:string">
                    <xs:enumeration value="Computer Science"/>
                    <xs:enumeration value="Engineering"/>
                    <xs:enumeration value="Mathematics"/>
                </xs:restriction>
            </xs:simpleType>

        </xs:schema>
        ```

5.  **Question:** Explain what  `(#PCDATA)` means in a DTD element declaration.
    *   **Answer:** It indicates that the element contains parsed character data (text).  The XML parser will process the text within the element and resolve any character entities (e.g., `&lt;` for `<`).

### 7. Important Points to Remember

*   Well-formed XML is a prerequisite for validation.  A well-formed XML document follows the basic syntax rules of XML.
*   DTDs are simpler for basic validation, but XML Schema offers more power and flexibility.
*   Namespaces are crucial for managing complex XML documents and preventing naming conflicts.
*   Validation ensures data integrity and consistency.
*   Choose the right validation technology (DTD or XML Schema) based on your specific needs and requirements. XML schema is favored for its features and capabilities.
*   Always test your DTDs and XML Schemas thoroughly to ensure they correctly validate your XML documents.
