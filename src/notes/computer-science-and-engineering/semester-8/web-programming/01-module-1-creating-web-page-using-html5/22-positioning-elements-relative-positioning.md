---
title: "Positioning Elements: Relative Positioning"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc15"
status: "completed"
scrapedAt: "2026-05-20T17:28:04.395Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: Positioning Elements: Relative Positioning

---

### **1. Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Understand the concept of relative positioning in CSS.
*   Apply the `position: relative;` property to an HTML element.
*   Utilize the `top`, `right`, `bottom`, and `left` properties in conjunction with `position: relative;` to offset an element from its normal position.
*   Explain how relative positioning affects the normal flow of document content.
*   Understand the implications of using `z-index` with relatively positioned elements.
*   Distinguish relative positioning from other positioning schemes (static, absolute, fixed, sticky).

---

### **2. Key Concepts and Definitions**

#### **2.1 What is CSS Positioning?**

CSS positioning refers to the technique of controlling the layout and placement of HTML elements on a web page. It allows you to move elements from their default, natural positions within the document flow.

#### **2.2 The Normal Document Flow**

By default, HTML elements are displayed according to the **normal document flow**.

*   **Block-level elements** (like `<div>`, `<p>`, `<h1>`) are displayed one below the other, taking up the full width available.
*   **Inline elements** (like `<span>`, `<a>`, `<strong>`) are displayed in a line, only taking up as much width as their content requires.

Positioning properties, when applied, alter this normal flow.

#### **2.3 `position: relative;`**

*   **Definition:** `position: relative;` is a CSS positioning scheme that allows you to offset an element from its **normal position** in the document flow.
*   **Key Characteristic:** The element is moved from its original place, but the **space it occupied in the normal flow remains vacant**. This means that other elements do not shift to fill the gap left by the relatively positioned element.
*   **Offsetting:** Once an element is set to `position: relative;`, you can use the `top`, `right`, `bottom`, and `left` properties to adjust its position. These properties specify the offset from the element's original position.

#### **2.4 Offset Properties (`top`, `right`, `bottom`, `left`)**

These properties are used *in conjunction with* `position: relative;` (or `absolute`, `fixed`, `sticky`). They define how much the element should be moved from its normal position.

*   **`top`**: Moves the element *down* by the specified value (positive value) or *up* by the specified value (negative value) from its original top edge.
*   **`right`**: Moves the element *left* by the specified value (positive value) or *right* by the specified value (negative value) from its original right edge.
*   **`bottom`**: Moves the element *up* by the specified value (positive value) or *down* by the specified value (negative value) from its original bottom edge.
*   **`left`**: Moves the element *right* by the specified value (positive value) or *left* by the specified value (negative value) from its original left edge.

**Important Note:** When using `top` and `bottom` together, the `top` property takes precedence. Similarly, when using `left` and `right` together, the `left` property takes precedence.

#### **2.5 `z-index` with Relative Positioning**

*   **Definition:** `z-index` controls the stacking order of positioned elements. Elements with higher `z-index` values appear on top of elements with lower `z-index` values.
*   **Behavior:** When you apply `position: relative;` to an element, it becomes a "stacking context." This means that its `z-index` property becomes active, allowing you to control its layering with other positioned elements. Elements with `position: static;` (the default) do not respond to `z-index`.

---

### **3. Examples**

#### **3.1 Basic Relative Positioning**

Let's say we have a `div` element that we want to move 20 pixels down and 10 pixels to the right from its original position.

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Relative Positioning Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box normal-box">Normal Box</div>
  <div class="box relative-box">Relatively Positioned Box</div>
  <div class="box another-box">Another Box</div>
</body>
</html>
```

**CSS (style.css):**

```css
.box {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  line-height: 100px; /* For vertical centering of text */
  border: 1px solid black;
  background-color: lightblue;
}

.normal-box {
  background-color: lightcoral;
}

.relative-box {
  position: relative; /* Makes the element positionable */
  top: 20px;         /* Moves the element 20px down from its normal top */
  left: 10px;        /* Moves the element 10px right from its normal left */
  background-color: lightgreen;
}

.another-box {
  background-color: lightyellow;
}
```

**Explanation:**

*   The `.relative-box` will be moved 20 pixels down and 10 pixels to the right from where it would normally appear.
*   Crucially, the space where `.relative-box` would have been is still occupied. The `.another-box` will *not* move up to fill that space.

#### **3.2 Using `z-index` with Relative Positioning**

Now, let's add another box and control the stacking order.

**HTML (add to previous HTML):**

```html
  <div class="box z-index-box">Z-Index Box</div>
```

**CSS (add to previous CSS):**

```css
.z-index-box {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  line-height: 100px;
  border: 1px solid black;
  background-color: lightpink;
  position: relative; /* Makes z-index effective */
  top: -80px;        /* Moves it up to overlap the others */
  left: 50px;        /* Moves it right */
  z-index: 2;        /* This box will be on top */
}

/* Add some lower z-index to the previous relative box for comparison */
.relative-box {
  position: relative;
  top: 20px;
  left: 10px;
  background-color: lightgreen;
  z-index: 1; /* This box will be below z-index-box */
}
```

**Explanation:**

*   The `.z-index-box` is positioned relative and moved to overlap the other boxes.
*   Because it has `z-index: 2` and `.relative-box` has `z-index: 1`, the `.z-index-box` will appear on top of `.relative-box`.
*   Even though `.z-index-box` is moved, the space it originally occupied in the document flow remains.

---

### **4. Distinguishing Relative Positioning from Other Schemes**

| Positioning Scheme | Description                                                                                                                                                                     | Key Characteristic                                                                                                        | `top`/`right`/`bottom`/`left` Behavior                                     | `z-index` Behavior                                                              |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **`static`**       | **Default.** Elements are positioned according to the normal document flow.                                                                                                     | No special positioning.                                                                                                   | Ignored.                                                                   | Ignored.                                                                        |
| **`relative`**     | Elements are positioned relative to their **normal position** in the document flow.                                                                                             | The space occupied by the element in the normal flow remains. Other elements do not shift to fill the gap.                 | Offsets the element from its normal position.                                | Active; controls stacking order relative to other positioned elements.        |
| **`absolute`**     | Elements are positioned relative to their **nearest positioned ancestor**. If no positioned ancestor exists, they are positioned relative to the initial containing block (the `<html>` element). | The element is removed from the normal document flow. The space it occupied is filled by other elements.                    | Offsets the element from its containing block's edges.                     | Active; controls stacking order.                                                |
| **`fixed`**        | Elements are positioned relative to the **viewport**. They remain in the same position even when the page is scrolled.                                                           | The element is removed from the normal document flow.                                                                     | Offsets the element from the viewport's edges.                             | Active; controls stacking order.                                                |
| **`sticky`**       | Elements are positioned based on the user's scroll position. They act like `relative` until a certain scroll point is reached, then they act like `fixed`.                  | Transitions between `relative` and `fixed` behavior.                                                                      | Offsets the element from its containing block's edges when it becomes "stuck." | Active; controls stacking order.                                                |

---

### **5. Practice Questions and Exercises**

**Question 1:** What is the primary characteristic of `position: relative;` compared to `position: static;`?

**Question 2:** If you set `top: 15px;` on an element with `position: relative;`, what happens?

**Question 3:** Does `position: relative;` remove an element from the normal document flow? Explain.

**Question 4:** How does `z-index` work with elements that have `position: relative;`?

**Question 5:** Given the following HTML and CSS, describe the expected output.

**HTML:**

```html
<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
</div>
```

**CSS:**

```css
.container {
  border: 2px dashed blue;
  padding: 10px;
  width: 200px;
  text-align: center;
}

.item {
  width: 50px;
  height: 50px;
  margin: 5px;
  line-height: 50px;
  color: white;
}

.item1 { background-color: red; }
.item2 { background-color: green; position: relative; top: 10px; left: -20px; }
.item3 { background-color: orange; }
```

---

### **6. Answers to Practice Questions**

**Answer 1:** The primary characteristic is that `position: relative;` allows you to offset an element from its normal position *without* removing it from the document flow. The space it originally occupied remains, preventing other elements from shifting to fill it.

**Answer 2:** The element will be moved 15 pixels *down* from its original top edge.

**Answer 3:** No, `position: relative;` does **not** remove an element from the normal document flow. The space it occupied is preserved, and other elements will not move into that space.

**Answer 4:** When an element has `position: relative;`, its `z-index` property becomes active. This allows you to control its stacking order relative to other positioned elements on the page. Elements with a higher `z-index` will appear on top.

**Answer 5:**
*   The `.container` will have a dashed blue border and will hold the three `item` divs.
*   `item1` will be displayed normally at the top left within the container, colored red.
*   `item2` will be displayed normally (taking up its space) and colored green, but then it will be offset:
    *   It will move 10 pixels *down* from its original top position.
    *   It will move 20 pixels *left* from its original left position.
    *   Crucially, the space it *would have* occupied in the normal flow is still there.
*   `item3` will appear below `item1` and the *original* position of `item2` (not `item2`'s offset position), colored orange. `item3` will not move up to fill the gap left by `item2`'s offset.

---

### **7. Important Points to Remember**

*   `position: relative;` is used to make minor adjustments to an element's position *without* disrupting the overall document flow.
*   The original space occupied by a relatively positioned element is *preserved*.
*   Use `top`, `right`, `bottom`, and `left` properties with `position: relative;` to define the offset.
*   Remember the directionality of offsets: `top` moves down, `bottom` moves up, `left` moves right, `right` moves left (when using positive values).
*   `position: relative;` makes the `z-index` property effective, allowing control over stacking order.
*   It's a common starting point for positioning before moving to `absolute` or `fixed` positioning, as it doesn't immediately break the layout.

---
