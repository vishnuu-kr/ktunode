---
title: "Layouts in Flutter: Container, Column, Row, Stack"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 2: User Interface Design and User Experience:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c981"
status: "completed"
scrapedAt: "2026-05-20T17:08:35.697Z"
---
# Mobile Application Development: Module 2 - User Interface Design and User Experience

## Topic: Layouts in Flutter: Container, Column, Row, Stack

---

### **1. Introduction to Layouts in Flutter**

*   **What are Layouts?**
    *   Layouts are fundamental building blocks in Flutter that define how widgets are arranged and presented on the screen.
    *   They dictate the position, size, and relationship between different UI elements.
    *   Flutter's layout system is based on a reactive approach, where widgets describe their desired appearance based on their own properties and the constraints provided by their parent widget.

*   **Key Principles of Flutter Layouts:**
    *   **Widget Tree:** Flutter UIs are built as a tree of widgets. Layout widgets are responsible for arranging their child widgets within this tree.
    *   **Constraints:** Widgets receive constraints (minimum and maximum width/height) from their parent. They then determine their own size based on these constraints and their own properties.
    *   **Parent-Child Relationship:** The parent widget's layout logic influences how its children are positioned and sized.

---

### **2. Container Widget**

*   **Definition:**
    *   The `Container` widget is a versatile widget that can be used for styling, positioning, and sizing other widgets.
    *   It's a general-purpose layout widget that can hold a single child widget.
    *   It's often described as a "box" that can have padding, margins, borders, decoration, constraints, and transformations.

*   **Key Properties:**
    *   `child`: The widget to be placed inside the container.
    *   `padding`: Adds space inside the container, between the border and the child widget. Can be `EdgeInsets.all()`, `EdgeInsets.symmetric()`, or `EdgeInsets.only()`.
    *   `margin`: Adds space outside the container, separating it from other widgets. Similar to `padding`.
    *   `decoration`: Used for styling the container's background, border, shadow, etc. Typically uses `BoxDecoration`.
    *   `color`: A shorthand for `decoration: BoxDecoration(color: ...)`.
    *   `width`: The desired width of the container.
    *   `height`: The desired height of the container.
    *   `constraints`: Allows for more granular control over the container's size (e.g., `BoxConstraints.tightFor()`, `BoxConstraints.expand()`).
    *   `alignment`: Aligns the child widget within the container when the container is larger than the child.
    *   `transform`: Applies a 2D or 3D transformation to the container.

*   **Common Use Cases:**
    *   Adding background colors or images.
    *   Applying borders and rounded corners.
    *   Creating spacing around a widget.
    *   Constraining the size of a widget.
    *   Centering a widget.

*   **Example:**

    ```dart
    Container(
      width: 200,
      height: 100,
      padding: EdgeInsets.all(16.0),
      margin: EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(12.0),
        border: Border.all(color: Colors.black, width: 2.0),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 5,
            blurRadius: 7,
            offset: Offset(0, 3), // changes position of shadow
          ),
        ],
      ),
      child: Center(
        child: Text(
          'Styled Container',
          style: TextStyle(color: Colors.white, fontSize: 18),
        ),
      ),
    )
    ```

---

### **3. Column Widget**

*   **Definition:**
    *   The `Column` widget arranges its children vertically in a linear array.
    *   It takes a list of child widgets and lays them out from top to bottom.

*   **Key Properties:**
    *   `children`: A list of widgets to be laid out vertically.
    *   `mainAxisAlignment`: Controls how the children are aligned along the *main axis* (vertical axis for `Column`). Options include:
        *   `MainAxisAlignment.start`: Aligns children at the beginning of the main axis.
        *   `MainAxisAlignment.center`: Aligns children in the center of the main axis.
        *   `MainAxisAlignment.end`: Aligns children at the end of the main axis.
        *   `MainAxisAlignment.spaceBetween`: Distributes children evenly with space between them.
        *   `MainAxisAlignment.spaceAround`: Distributes children evenly with equal space around them.
        *   `MainAxisAlignment.spaceEvenly`: Distributes children evenly with equal space between them and on the outer edges.
    *   `crossAxisAlignment`: Controls how the children are aligned along the *cross axis* (horizontal axis for `Column`). Options include:
        *   `CrossAxisAlignment.start`: Aligns children at the beginning of the cross axis.
        *   `CrossAxisAlignment.center`: Aligns children in the center of the cross axis.
        *   `CrossAxisAlignment.end`: Aligns children at the end of the cross axis.
        *   `CrossAxisAlignment.stretch`: Stretches children to fill the cross axis.
        *   `CrossAxisAlignment.baseline`: Aligns children based on their text baseline.
    *   `mainAxisSize`: Controls the amount of space the `Column` attempts to occupy along the main axis.
        *   `MainAxisSize.max`: (Default) Occupies all available vertical space.
        *   `MainAxisSize.min`: Occupies only the space required by its children.
    *   `verticalDirection`: Determines the direction children are laid out along the main axis.
        *   `VerticalDirection.down`: (Default) Top to bottom.
        *   `VerticalDirection.up`: Bottom to top.

*   **Common Use Cases:**
    *   Creating vertical lists of items.
    *   Stacking widgets one above another.
    *   Building forms with labels and input fields.

*   **Example:**

    ```dart
    Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Text('First Item'),
        Icon(Icons.star),
        Container(
          width: 100,
          height: 50,
          color: Colors.red,
        ),
        Text('Last Item'),
      ],
    )
    ```

---

### **4. Row Widget**

*   **Definition:**
    *   The `Row` widget arranges its children horizontally in a linear array.
    *   It takes a list of child widgets and lays them out from left to right.

*   **Key Properties:**
    *   `children`: A list of widgets to be laid out horizontally.
    *   `mainAxisAlignment`: Controls how the children are aligned along the *main axis* (horizontal axis for `Row`). Options are the same as for `Column` (start, center, end, spaceBetween, spaceAround, spaceEvenly).
    *   `crossAxisAlignment`: Controls how the children are aligned along the *cross axis* (vertical axis for `Row`). Options are the same as for `Column` (start, center, end, stretch, baseline).
    *   `mainAxisSize`: Controls the amount of space the `Row` attempts to occupy along the main axis.
        *   `MainAxisSize.max`: (Default) Occupies all available horizontal space.
        *   `MainAxisSize.min`: Occupies only the space required by its children.
    *   `verticalDirection`: Determines the direction children are laid out along the cross axis (used in conjunction with `crossAxisAlignment`).
        *   `VerticalDirection.down`: (Default) Top to bottom.
        *   `VerticalDirection.up`: Bottom to top.

*   **Common Use Cases:**
    *   Creating horizontal lists of items (e.g., buttons, icons).
    *   Placing widgets side-by-side.
    *   Building navigation bars.

*   **Example:**

    ```dart
    Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Icon(Icons.settings),
        Text('Options'),
        Container(
          width: 50,
          height: 50,
          color: Colors.green,
        ),
        Icon(Icons.account_circle),
      ],
    )
    ```

---

### **5. Stack Widget**

*   **Definition:**
    *   The `Stack` widget allows you to layer multiple widgets on top of each other.
    *   Children are painted in the order they appear in the `children` list, with the first child being at the bottom and the last child being at the top.

*   **Key Properties:**
    *   `children`: A list of widgets to be stacked.
    *   `alignment`: Controls how the non-positioned children are aligned within the stack. Options include:
        *   `Alignment.topLeft`, `Alignment.topCenter`, `Alignment.topRight`
        *   `Alignment.centerLeft`, `Alignment.center`, `Alignment.centerRight`
        *   `Alignment.bottomLeft`, `Alignment.bottomCenter`, `Alignment.bottomRight`
        *   `Alignment.centerLeft` (equivalent to `Alignment(-1.0, 0.0)`)
    *   `textDirection`: Defines the direction for text within the stack (e.g., `TextDirection.ltr` for left-to-right).
    *   `fit`: Controls how the non-positioned children of the stack size themselves.
        *   `StackFit.loose`: Children are given loose constraints and can be as big as they want.
        *   `StackFit.expand`: Children are forced to fill the entire stack.
    *   `overflow`: How to handle children that overflow the stack.
        *   `Overflow.clip`: (Default) Clips children to the bounds of the stack.
        *   `Overflow.visible`: Allows children to overflow.

*   **Positioned Widgets:**
    *   To precisely control the position of a widget within a `Stack`, you use `Positioned` widgets as children of the `Stack`.
    *   `Positioned` widgets typically wrap the widget you want to position.

*   **Key `Positioned` Properties:**
    *   `child`: The widget to position.
    *   `left`: Distance from the left edge of the stack.
    *   `top`: Distance from the top edge of the stack.
    *   `right`: Distance from the right edge of the stack.
    *   `bottom`: Distance from the bottom edge of the stack.
    *   `width`: The width of the positioned widget.
    *   `height`: The height of the positioned widget.

*   **Common Use Cases:**
    *   Overlaying text or icons on an image.
    *   Creating layered UI elements.
    *   Building floating action buttons or badges.

*   **Example:**

    ```dart
    Stack(
      alignment: Alignment.center,
      children: <Widget>[
        Image.network(
          'https://via.placeholder.com/300', // Replace with a valid image URL
          fit: BoxFit.cover,
          width: 300,
          height: 200,
        ),
        Positioned(
          bottom: 10,
          left: 10,
          child: Container(
            padding: EdgeInsets.all(8.0),
            color: Colors.black54,
            child: Text(
              'Overlay Text',
              style: TextStyle(color: Colors.white, fontSize: 16),
            ),
          ),
        ),
        Positioned(
          top: 10,
          right: 10,
          child: Icon(
            Icons.favorite,
            color: Colors.red,
            size: 30,
          ),
        ),
      ],
    )
    ```

---

### **6. Combining Layout Widgets**

*   It's very common to combine these layout widgets to create complex and intricate UIs.
*   You can nest `Column`s within `Row`s, `Container`s within `Stack`s, and so on.

*   **Example: A Card-like Layout**

    ```dart
    Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min, // Column takes minimum vertical space
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              'Card Title',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8.0), // Spacer for vertical spacing
            Row(
              children: <Widget>[
                Icon(Icons.location_on),
                SizedBox(width: 8.0), // Spacer for horizontal spacing
                Text('Location'),
              ],
            ),
            SizedBox(height: 8.0),
            Text('This is the description of the card.'),
          ],
        ),
      ),
    )
    ```

---

### **7. Important Points to Remember**

*   **Constraints Flow Down, Sizes Flow Up:** A parent widget provides constraints to its children, and the children determine their own size based on those constraints and their properties. The parent then uses the child's size to position it.
*   **Parent Widgets Determine Layout:** The layout behavior of a child widget is dictated by its parent.
*   **`Expanded` and `Flexible`:** When using `Column` or `Row`, if you want children to take up available space, you'll often use `Expanded` or `Flexible` widgets.
    *   `Expanded`: Forces the child to fill the remaining space along the main axis.
    *   `Flexible`: Allows the child to be as big as it wants, but it will be shrunk if necessary to fit the main axis, giving it a "flexible" size.
*   **`SizedBox`:** Use `SizedBox` to add fixed spacing between widgets in `Column` or `Row` or to give a specific size to a widget that doesn't have intrinsic dimensions.
*   **`ListView` and `GridView`:** For scrollable lists or grids of widgets, you'll typically use widgets like `ListView` and `GridView`, which often contain `Column`s or `Row`s within their children.
*   **`Align` and `Center`:** While `Container` has `alignment`, and `Column`/`Row` have `crossAxisAlignment`, you can also use `Align` or `Center` widgets to position a single child within its parent.

---

### **8. Practice Questions & Exercises**

**Question 1:**
Which widget is used to arrange children vertically?
a) `Row`
b) `Stack`
c) `Column`
d) `Container`

**Question 2:**
What property of a `Row` or `Column` controls how children are aligned along their perpendicular axis?
a) `mainAxisAlignment`
b) `mainAxisSize`
c) `crossAxisAlignment`
d) `alignment`

**Question 3:**
You want to place a `Text` widget on top of an `Image` widget. Which layout widget would be most suitable for this task?
a) `Column`
b) `Row`
c) `Container`
d) `Stack`

**Question 4:**
Which property of the `Container` widget is used to add space *inside* the container, between its border and its child?
a) `margin`
b) `padding`
c) `decoration`
d) `color`

**Question 5:**
Consider a `Column` with three `Text` widgets. If you set `mainAxisAlignment: MainAxisAlignment.spaceBetween`, how will the widgets be arranged vertically?
a) They will be clustered at the top.
b) They will be clustered at the bottom.
c) They will be centered vertically.
d) The space between them will be distributed evenly, with no extra space at the top or bottom.

**Exercise 1: Simple Layout**
Create a Flutter UI that displays:
*   A `Column`
*   Inside the `Column`, a `Row`
*   Inside the `Row`, two `Icon` widgets (e.g., `Icons.star` and `Icons.star_border`)
*   Below the `Row`, a `Text` widget with the text "Rating"
*   Ensure the `Row` is centered horizontally and the `Column` is centered vertically on the screen.

**Exercise 2: Styled Card**
Create a Flutter UI that displays a `Card` widget (using `Card` widget, not just `Container`) with:
*   A rounded corner border.
*   A background color.
*   A title `Text` widget.
*   An `Image` widget below the title.
*   A `Text` widget with a description below the image.
*   Use `Container` or other layout widgets as needed within the `Card` to achieve the desired spacing and arrangement.

---

### **Answers to Practice Questions**

1.  **c) `Column`**
2.  **c) `crossAxisAlignment`**
3.  **d) `Stack`**
4.  **b) `padding`**
5.  **d) The space between them will be distributed evenly, with no extra space at the top or bottom.** (This is the behavior of `spaceBetween`. `spaceEvenly` would add space at the top and bottom as well.)

---

This concludes the study notes for Layouts in Flutter: Container, Column, Row, Stack. Remember to practice building different UI elements using these widgets to solidify your understanding!
