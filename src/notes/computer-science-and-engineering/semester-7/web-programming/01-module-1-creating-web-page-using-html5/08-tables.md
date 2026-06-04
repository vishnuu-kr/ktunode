---
title: "Tables"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0a7"
status: "completed"
scrapedAt: "2026-05-20T17:12:14.674Z"
---
# WEB PROGRAMMING - Module 1: Creating Web Pages using HTML5

## Topic: Tables

---

### Introduction to HTML Tables

HTML tables are used to display data in a structured, tabular format. They are essential for organizing and presenting information clearly on a web page, such as pricing information, comparison charts, or scheduling data.

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose and basic structure of HTML tables.
*   Create simple tables with rows and columns using `<table>`, `<tr>`, `<th>`, and `<td>` elements.
*   Add table captions using the `<caption>` element.
*   Group table header, body, and footer content using `<thead>`, `<tbody>`, and `<tfoot>` elements.
*   Control cell spanning across rows and columns using `rowspan` and `colspan` attributes.
*   Associate table data with header information using `scope` attribute.
*   Create complex tables with nested structures.
*   Understand accessibility considerations for HTML tables.

---

### Key Concepts and Definitions

*   **`<table>`**: The container element for the entire table. All other table-related elements are placed inside this tag.
*   **`<tr>` (Table Row)**: Defines a single row within the table.
*   **`<th>` (Table Header Cell)**: Defines a header cell in a table. Text within `<th>` is typically bold and centered by default. Used to label columns or rows.
*   **`<td>` (Table Data Cell)**: Defines a standard data cell in a table.
*   **`<caption>`**: Provides a title or description for the table. It should be the first child of the `<table>` element.
*   **`<thead>`**: Groups the header content of a table (e.g., column titles).
*   **`<tbody>`**: Groups the main body content of a table.
*   **`<tfoot>`**: Groups the footer content of a table (e.g., summary rows).
*   **`rowspan`**: An attribute for `<th>` or `<td>` that specifies how many rows a cell should span.
*   **`colspan`**: An attribute for `<th>` or `<td>` that specifies how many columns a cell should span.
*   **`scope`**: An attribute for `<th>` that defines which cells the header cell applies to (e.g., `scope="col"` for column headers, `scope="row"` for row headers). This improves accessibility.

---

### Creating Simple Tables

#### 1. The Basic Structure

A table starts with the `<table>` tag. Inside, `<tr>` tags define rows, and within rows, `<th>` or `<td>` tags define cells.

**Example:**

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>25</td>
  </tr>
</table>
```

**Explanation:**

*   The `<table>` element encloses the entire table.
*   The first `<tr>` defines the header row.
*   The `<th>` elements within the first row are for the column headers ("Name" and "Age").
*   The subsequent `<tr>` elements define data rows.
*   The `<td>` elements within these rows contain the actual data for each person.

---

#### 2. Adding a Table Caption

A `<caption>` element provides a descriptive title for the table, improving context and accessibility.

**Example:**

```html
<table>
  <caption>Employee Information</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>25</td>
  </tr>
</table>
```

**Important:** The `<caption>` tag *must* be the first element within the `<table>` tag.

---

#### 3. Grouping Table Content (`<thead>`, `<tbody>`, `<tfoot>`)

These elements help structure the table semantically and can be used by browsers for better rendering (e.g., scrolling the body while keeping the header fixed) and by assistive technologies.

**Example:**

```html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$15,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$18,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$33,000</td>
    </tr>
  </tfoot>
</table>
```

**Explanation:**

*   `<thead>` contains the header row with "Month" and "Sales".
*   `<tbody>` contains the main data rows for January and February.
*   `<tfoot>` contains a summary row for the "Total" sales.

**Note:** While not mandatory for simple tables, these are crucial for semantic correctness and advanced styling/scripting.

---

### Controlling Cell Spanning (`rowspan` and `colspan`)

These attributes allow cells to occupy more than one row or column, creating more complex layouts.

#### 1. `colspan`: Spanning Columns

The `colspan` attribute is used within a `<th>` or `<td>` tag to make a cell span across multiple columns.

**Example:**

```html
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Contact Information</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>alice@example.com</td>
    <td>123-456-7890</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>bob@example.com</td>
    <td>987-654-3210</td>
  </tr>
</table>
```

**Explanation:**

*   The `<th>` with `colspan="2"` stretches across two columns, creating a single header for "Contact Information".
*   Notice that in the subsequent rows, you only need two `<td>` cells per row because one column is effectively "covered" by the `colspan`.

#### 2. `rowspan`: Spanning Rows

The `rowspan` attribute is used within a `<th>` or `<td>` tag to make a cell span across multiple rows.

**Example:**

```html
<table>
  <tr>
    <th>Month</th>
    <th>Day</th>
    <th>Event</th>
  </tr>
  <tr>
    <td rowspan="2">October</td>
    <td>15</td>
    <td>Festival</td>
  </tr>
  <tr>
    <td>20</td>
    <td>Meeting</td>
  </tr>
  <tr>
    <td>November</td>
    <td>10</td>
    <td>Holiday</td>
  </tr>
</table>
```

**Explanation:**

*   The `<td>` with `rowspan="2"` for "October" spans across two rows.
*   In the row immediately following, you skip the first cell because it's already occupied by the "October" cell spanning down.

---

### Associating Header and Data Cells (`scope`)

The `scope` attribute on `<th>` elements is crucial for accessibility. It explicitly tells assistive technologies (like screen readers) whether a header applies to a column (`scope="col"`) or a row (`scope="row"`).

**Example:**

```html
<table>
  <caption>Student Scores</caption>
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Math</th>
      <th scope="col">Science</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alice</th>
      <td>95</td>
      <td>88</td>
    </tr>
    <tr>
      <th scope="row">Bob</th>
      <td>78</td>
      <td>92</td>
    </tr>
  </tbody>
</table>
```

**Explanation:**

*   `scope="col"` on the headers "Student Name", "Math", and "Science" indicates they are column headers.
*   `scope="row"` on "Alice" and "Bob" indicates they are row headers for their respective data.

**Important:** Using `scope` is highly recommended for all header cells in a table to ensure proper understanding by assistive technologies.

---

### Creating Complex Tables

Complex tables often combine `colspan`, `rowspan`, and nested table structures to represent intricate data relationships.

**Example with nested table:**

```html
<table>
  <caption>Product Comparison</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Product A</th>
      <th>Product B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Price</td>
      <td>$100</td>
      <td>$120</td>
    </tr>
    <tr>
      <td rowspan="2">Specifications</td>
      <td>
        <table>
          <tr>
            <th>Size</th>
            <td>Medium</td>
          </tr>
          <tr>
            <th>Color</th>
            <td>Blue</td>
          </tr>
        </table>
      </td>
      <td>
        <table>
          <tr>
            <th>Size</th>
            <td>Large</td>
          </tr>
          <tr>
            <th>Color</th>
            <td>Red</td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>
```

**Explanation:**

*   The "Specifications" cell uses `rowspan="2"` because the actual specification details for each product will take up two rows within that cell's area.
*   Inside each of those "specification" cells, a new `<table>` is nested to list individual specifications (Size, Color) for each product.

---

### Accessibility Considerations for HTML Tables

*   **Use `<th>` for header cells**: Clearly identify headers.
*   **Use `scope` attribute**: Explicitly define header-data relationships (`scope="col"`, `scope="row"`).
*   **Use `<caption>`**: Provide a descriptive title.
*   **Avoid tables for layout**: Tables are for *tabular data*, not for arranging page elements. CSS positioning and Flexbox/Grid are the correct tools for layout.
*   **Keep tables simple**: Overly complex nesting or extensive `colspan`/`rowspan` can make tables difficult to navigate with assistive technologies.
*   **Provide alternative text for complex data**: If a table represents data that cannot be easily conveyed in a simple text format, consider providing a summary or alternative representation.

---

### Practice Questions/Exercises

**Question 1:**

Create an HTML table that displays the following information:

| Item   | Price | Quantity |
| :----- | :---- | :------- |
| Apple  | $0.50 | 5        |
| Banana | $0.30 | 10       |

**Question 2:**

Modify the table from Question 1 to include a caption "Fruit Inventory" and group the header row using `<thead>` and the data rows using `<tbody>`.

**Question 3:**

Create a table with a header cell that spans two columns. The table should display:

| Name   | Subject 1 | Subject 2 |
| :----- | :-------- | :-------- |
| John   | Math      | Science   |
| Jane   | History   | English   |

**Question 4:**

Create a table where one cell spans two rows. The table should display:

| Category | Value 1 | Value 2 |
| :------- | :------ | :------ |
| Fruits   | Apple   | Banana  |
|          | Orange  | Mango   |
| Colors   | Red     | Blue    |

**Question 5:**

Add `scope` attributes to the header cells in the following table to indicate column and row headers appropriately.

```html
<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$1200</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Keyboard</td>
    <td>$75</td>
    <td>200</td>
  </tr>
</table>
```

---

### Answers to Practice Questions

**Answer 1:**

```html
<table>
  <tr>
    <th>Item</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>Apple</td>
    <td>$0.50</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Banana</td>
    <td>$0.30</td>
    <td>10</td>
  </tr>
</table>
```

**Answer 2:**

```html
<table>
  <caption>Fruit Inventory</caption>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$0.50</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.30</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
```

**Answer 3:**

```html
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Subjects</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Math</td>
    <td>Science</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>History</td>
    <td>English</td>
  </tr>
</table>
```

**Answer 4:**

```html
<table>
  <tr>
    <th>Category</th>
    <th>Value 1</th>
    <th>Value 2</th>
  </tr>
  <tr>
    <td rowspan="2">Fruits</td>
    <td>Apple</td>
    <td>Banana</td>
  </tr>
  <tr>
    <td>Orange</td>
    <td>Mango</td>
  </tr>
  <tr>
    <td>Colors</td>
    <td>Red</td>
    <td>Blue</td>
  </tr>
</table>
```

**Answer 5:**

```html
<table>
  <tr>
    <th scope="col">Product</th>
    <th scope="col">Price</th>
    <th scope="col">Stock</th>
  </tr>
  <tr>
    <th scope="row">Laptop</th>
    <td>$1200</td>
    <td>50</td>
  </tr>
  <tr>
    <th scope="row">Keyboard</th>
    <td>$75</td>
    <td>200</td>
  </tr>
</table>
```

---

### Important Points to Remember

*   **Structure is Key**: Always use `<table>` as the outermost element, `<tr>` for rows, and `<th>`/`<td>` for cells.
*   **Caption First**: The `<caption>` element *must* be the first child of `<table>`.
*   **Semantic Grouping**: Use `<thead>`, `<tbody>`, and `<tfoot>` for better structure and accessibility, even if not strictly required for basic display.
*   **`rowspan` and `colspan`**: Understand how they work and ensure you account for the "missing" cells in subsequent rows/columns.
*   **Accessibility First**: Prioritize `<th>` and `scope` attributes for screen readers.
*   **No Layout Tables**: Reserve tables for tabular data only. Use CSS for page layout.

---
