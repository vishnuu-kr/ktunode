---
title: "z-index"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0b4"
status: "completed"
scrapedAt: "2026-05-20T17:12:27.298Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: The `z-index` Property

---

### 1. Introduction to `z-index`

The `z-index` property in CSS controls the **stacking order** of positioned elements. When multiple elements overlap on a web page, `z-index` determines which element appears on top of others. Think of it like stacking papers on your desk – the paper with the higher `z-index` will be placed on top.

**Key Concept:**
*   **Stacking Context:** `z-index` only affects elements that are part of a "stacking context." A stacking context is created by elements that have a `position` value other than `static` (e.g., `relative`, `absolute`, `fixed`, `sticky`).

---

### 2. How `z-index` Works

*   **Default Behavior:** By default, elements are stacked according to their order in the HTML document. Elements that appear later in the HTML are stacked on top of elements that appear earlier.
*   **`z-index` Values:** The `z-index` property accepts integer values.
    *   **Higher values stack on top of lower values.**
    *   **Negative values can place elements behind others.**
    *   **Zero (0) is a common neutral value.**
*   **Comparison:** `z-index` values are compared *only* between sibling elements that share the same parent stacking context. An element with a higher `z-index` will always be on top of its sibling with a lower `z-index`, regardless of their order in the HTML.

---

### 3. Requirements for `z-index` to Work

**Crucial Point:** The `z-index` property only applies to **positioned elements**.

*   **Positioned Elements:** Elements with any of the following `position` values will create a stacking context and can be affected by `z-index`:
    *   `position: relative;`
    *   `position: absolute;`
    *   `position: fixed;`
    *   `position: sticky;`
*   **Non-Positioned Elements:** Elements with `position: static;` (which is the default) **do not** create a stacking context and `z-index` has no effect on them.

---

### 4. Understanding Stacking Order

Consider the following scenario:

```html
<div class="box red">Red Box</div>
<div class="box blue">Blue Box</div>
<div class="box green">Green Box</div>
```

And the CSS:

```css
.box {
  width: 100px;
  height: 100px;
  position: absolute; /* Crucial for z-index to work */
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 100px;
}

.red {
  background-color: red;
  top: 20px;
  left: 20px;
  z-index: 1; /* Lower z-index */
}

.blue {
  background-color: blue;
  top: 50px;
  left: 50px;
  z-index: 3; /* Higher z-index */
}

.green {
  background-color: green;
  top: 80px;
  left: 80px;
  z-index: 2; /* Intermediate z-index */
}
```

**Explanation of the Stacking Order:**

1.  The `blue` box has `z-index: 3`.
2.  The `green` box has `z-index: 2`.
3.  The `red` box has `z-index: 1`.

Since all boxes are positioned absolutely and are siblings, the `blue` box will be on top, followed by the `green` box, and then the `red` box at the bottom.

---

### 5. Common `z-index` Values and Their Behavior

*   **`auto` (Default):** The element has no specific stacking order. It's stacked according to its position in the HTML document, within its current stacking context.
*   **Positive Integers (e.g., `1`, `10`, `99`):** Higher numbers stack on top.
*   **Negative Integers (e.g., `-1`, `-5`):** Lower (more negative) numbers stack behind elements with higher `z-index` values or the default stacking order.
*   **`0`:** A neutral value, often used to ensure an element is placed above elements with `z-index: auto` but below elements with positive `z-index` values.

---

### 6. Stacking Contexts and Nested Elements

`z-index` values are interpreted within their **parent stacking context**. This means an element with a high `z-index` inside a parent with a lower `z-index` might still be underneath another element that is a sibling of the parent.

**Example:**

```html
<div class="parent parent-low">
  Parent (low z-index)
  <div class="child child-high">Child (high z-index)</div>
</div>
<div class="sibling">Sibling Element</div>
```

```css
.parent {
  width: 200px;
  height: 150px;
  position: relative; /* Creates a stacking context */
  border: 2px solid black;
  margin-bottom: 20px;
}

.parent-low {
  z-index: 1; /* Parent has a lower z-index */
}

.child {
  width: 100px;
  height: 100px;
  position: absolute; /* Creates its own stacking context */
  color: white;
  text-align: center;
  line-height: 100px;
}

.child-high {
  background-color: purple;
  z-index: 100; /* Child has a very high z-index */
  top: 30px;
  left: 30px;
}

.sibling {
  width: 150px;
  height: 120px;
  background-color: orange;
  color: black;
  text-align: center;
  line-height: 120px;
  position: relative; /* Also positioned, creates a stacking context */
  z-index: 2; /* Sibling has a higher z-index than the parent */
  margin-top: -100px; /* Overlap for demonstration */
}
```

**Outcome:**

Even though `.child-high` has a `z-index` of `100`, it is contained within `.parent-low` which has `z-index: 1`. The `.sibling` element has `z-index: 2`. Therefore, the `.sibling` will appear *on top* of the `.parent` and its `.child-high` because the `z-index` comparison happens first between the `.parent` and `.sibling`.

**Key Takeaway:** `z-index` values are compared relative to their siblings within the same stacking context.

---

### 7. Common Pitfalls and Best Practices

*   **Forgetting `position`:** The most common mistake is applying `z-index` to elements that are not positioned. Remember, `z-index` only works on `relative`, `absolute`, `fixed`, or `sticky` positioned elements.
*   **Overly Complex Stacking:** For very complex layouts, managing `z-index` can become difficult.
    *   **Keep it Simple:** Try to use `z-index` sparingly and with logical values.
    *   **Use Incremental Values:** Instead of using very large numbers like `9999`, use smaller, more manageable increments (e.g., `1`, `2`, `3`, `10`, `20`, `30`).
    *   **Group Related Elements:** If certain elements need to stay together in the stacking order, ensure they are within the same parent stacking context.
*   **Default `z-index: auto`:** Understand that `auto` means the element is stacked according to its HTML order within its current stacking context.
*   **Debugging:** Use browser developer tools to inspect elements and see their `z-index` values and stacking contexts. This is invaluable for troubleshooting overlapping issues.

---

### 8. Learning Outcomes Covered

This topic directly addresses the core concepts of controlling element stacking order in HTML and CSS, which is fundamental for creating visually structured web pages. Specifically, it enables you to:

*   Understand how elements are layered on a web page.
*   Control which elements appear on top of others when they overlap.
*   Utilize the `z-index` property effectively.
*   Recognize the dependency of `z-index` on the `position` property.
*   Grasp the concept of stacking contexts.

---

### 9. Practice Questions & Exercises

**Question 1:**
What CSS property must be applied to an element for the `z-index` property to have any effect?
a) `display`
b) `float`
c) `position`
d) `z-index`

**Question 2:**
If two sibling elements, both with `position: absolute;`, have `z-index: 5` and `z-index: 10` respectively, which element will appear on top?

**Question 3:**
Consider the following HTML and CSS. Describe the visual stacking order of the three `div` elements from bottom to top.

```html
<div class="box box-a">A</div>
<div class="box box-b">B</div>
<div class="box box-c">C</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
  color: white;
  text-align: center;
  line-height: 100px;
}

.box-a {
  background-color: red;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.box-b {
  background-color: blue;
  top: 40px;
  left: 40px;
  z-index: 3;
}

.box-c {
  background-color: green;
  top: 60px;
  left: 60px;
  z-index: 2;
}
```

**Exercise:**
Create a simple HTML page with two `div` elements. Style them so they overlap. Use `z-index` to make the first `div` appear on top of the second. Then, change the `z-index` values to make the second `div` appear on top of the first.

---

### 10. Answers to Practice Questions

**Answer 1:**
c) `position`
*Explanation: `z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`).*

**Answer 2:**
The element with `z-index: 10` will appear on top.
*Explanation: When sibling elements are positioned, higher `z-index` values stack on top of lower ones.*

**Answer 3:**
The stacking order from bottom to top will be:
1.  **Box A (Red):** `z-index: 1` (lowest)
2.  **Box C (Green):** `z-index: 2` (intermediate)
3.  **Box B (Blue):** `z-index: 3` (highest)

*Explanation: All boxes are absolutely positioned and are siblings. The `z-index` values determine the stacking order, with `3` being the highest.*

---

### 11. Important Points to Remember

*   `z-index` controls the **stacking order** of overlapping elements.
*   `z-index` **only works on positioned elements** (`position: relative`, `absolute`, `fixed`, `sticky`).
*   **Higher `z-index` values stack on top of lower values.**
*   `z-index` values are compared **only within the same stacking context**.
*   Browser developer tools are essential for debugging `z-index` issues.
