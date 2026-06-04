---
title: "z-index"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc14"
status: "completed"
scrapedAt: "2026-05-20T17:28:03.754Z"
---
# WEB PROGRAMMING: Module 1 - Creating Web Pages using HTML5

## Topic: The `z-index` Property

This topic delves into how elements are layered and stacked on a web page, a crucial aspect of visual presentation and design.

---

### Learning Outcomes Covered:

*   **Understanding the concept of stacking context and how elements are positioned in the Z-axis.**
*   **Applying the `z-index` property to control the stacking order of positioned elements.**
*   **Recognizing the limitations and common pitfalls of using `z-index`.**
*   **Utilizing `z-index` effectively for creating visual hierarchies and overlapping effects.**

---

### 1. Key Concepts and Definitions

#### What is the Z-axis?

In web page layout, we typically think in two dimensions:
*   **X-axis:** Left to right.
*   **Y-axis:** Top to bottom.

The **Z-axis** represents **depth**. It determines which elements appear "in front of" or "behind" other elements on the screen. Think of it like stacking papers on a desk – some papers might be on top of others.

#### Stacking Context

A **stacking context** is a set of HTML elements that are grouped together based on their positioning and `z-index` values. Elements within a stacking context are stacked relative to each other. This concept is fundamental to understanding how `z-index` works.

**When is a new stacking context created?**

A new stacking context is *implicitly* created by certain CSS properties applied to an element. The most common triggers are:

*   **Positioned Elements:** An element with a `position` value other than `static` (i.e., `relative`, `absolute`, `fixed`, or `sticky`).
*   **Elements with `opacity` less than 1:** If an element has an opacity value less than 1, it creates a new stacking context.
*   **Elements with `transform`, `filter`, `perspective`, `clip-path`, `mask`, or `isolation` properties other than `none`:** These properties can also trigger a new stacking context.
*   **Flex items and Grid items with a `z-index` other than `auto`:** Direct children of a flex or grid container that have a `z-index` other than `auto` create a new stacking context.

#### The `z-index` Property

The `z-index` CSS property specifies the **stacking order of elements** that are not in the normal flow of the document. Elements with a higher `z-index` value will appear on top of elements with a lower `z-index` value.

**Important Note:** The `z-index` property **only applies to positioned elements** (elements with `position` set to `relative`, `absolute`, `fixed`, or `sticky`). It has **no effect on elements with `position: static`**.

#### Valid `z-index` Values:

*   **`auto` (default):** The element's stacking order is determined by its position in the HTML source code. It does not create a new stacking context.
*   **`integer`:** A non-negative or negative integer value. Higher numbers are stacked on top of lower numbers.
    *   **Positive Integers:** `1`, `10`, `100`
    *   **Negative Integers:** `-1`, `-10`, `-100`
    *   **Zero:** `0`

---

### 2. Applying `z-index` to Control Stacking Order

When elements overlap, their `z-index` determines their stacking order.

*   **Same Stacking Context:** Within the same stacking context, elements with higher `z-index` values are stacked on top of elements with lower `z-index` values.

*   **Different Stacking Contexts:** An element's `z-index` is interpreted relative to its parent's stacking context. An element with a high `z-index` inside a child stacking context might still appear *below* an element with a lower `z-index` in a parent stacking context, if the parent stacking context itself dictates the order.

#### Visualizing Stacking Contexts

Consider this structure:

```html
<div class="parent">
  <div class="child-a">
    <p>Content A</p>
  </div>
  <div class="child-b">
    <p>Content B</p>
  </div>
</div>
```

And the CSS:

```css
.parent {
  position: relative; /* Creates a stacking context */
  z-index: 1;
}

.child-a {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 5; /* Higher z-index */
  background-color: lightblue;
  padding: 20px;
}

.child-b {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2; /* Lower z-index */
  background-color: lightgreen;
  padding: 20px;
}
```

**Explanation:**

*   `.parent` has `position: relative`, creating a stacking context. Its `z-index` is `1`.
*   `.child-a` and `.child-b` are positioned absolutely and are children of `.parent`. They are within the `.parent`'s stacking context.
*   `.child-a` has `z-index: 5`, and `.child-b` has `z-index: 2`.
*   Since both children are in the same stacking context (the `.parent`'s), `.child-a` (with `z-index: 5`) will appear on top of `.child-b` (with `z-index: 2`).

#### Example with Nested Stacking Contexts

```html
<div class="grandparent">
  <div class="parent-x">
    <p>Content X</p>
  </div>
  <div class="parent-y">
    <p>Content Y</p>
  </div>
</div>
```

And the CSS:

```css
.grandparent {
  position: relative; /* Creates a stacking context */
  z-index: 10;
  background-color: lightcoral;
  padding: 50px;
  width: 300px;
  height: 200px;
}

.parent-x {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 20; /* Higher z-index within its context */
  background-color: lightblue;
  padding: 20px;
  width: 150px;
  height: 100px;
}

.parent-y {
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 5; /* Lower z-index within its context */
  background-color: lightgreen;
  padding: 20px;
  width: 150px;
  height: 100px;
}
```

**Explanation:**

*   `.grandparent` creates a stacking context with `z-index: 10`.
*   `.parent-x` and `.parent-y` are positioned absolutely and are children of `.grandparent`. They are within the `.grandparent`'s stacking context.
*   `.parent-x` has `z-index: 20`.
*   `.parent-y` has `z-index: 5`.
*   **Result:** `.parent-x` (z-index 20) will appear on top of `.parent-y` (z-index 5) because they are in the same parent stacking context.

Now, let's modify the `.parent-x` to create its own stacking context:

```css
.grandparent {
  position: relative;
  z-index: 10;
  background-color: lightcoral;
  padding: 50px;
  width: 300px;
  height: 200px;
}

.parent-x {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 20; /* Higher z-index within its context */
  background-color: lightblue;
  padding: 20px;
  width: 150px;
  height: 100px;
  opacity: 0.9; /* Creates a new stacking context */
}

.parent-y {
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 5; /* Lower z-index within its context */
  background-color: lightgreen;
  padding: 20px;
  width: 150px;
  height: 100px;
}
```

**Explanation of the change:**

*   `.parent-x` now has `opacity: 0.9`, which creates a **new stacking context**.
*   Within its own stacking context, `.parent-x` still has `z-index: 20`.
*   `.parent-y` is in the `.grandparent`'s stacking context and has `z-index: 5`.

**What happens?**

This is where it gets tricky. The stacking order is determined first by the stacking context, and then by the `z-index` within that context.

1.  The `.grandparent` has `z-index: 10`.
2.  `.parent-y` is directly in the `.grandparent`'s context with `z-index: 5`. So, `.parent-y` stacks "lower" than the `.grandparent`'s other children.
3.  `.parent-x` creates its own stacking context with `z-index: 20`.
4.  **Crucially, the entire stacking context of `.parent-x` (with its internal `z-index` of 20) is now stacked relative to other elements in the `.grandparent`'s context.**

In this scenario, `.parent-x` (as a whole context with its `z-index` of 20) will appear on top of `.parent-y` (z-index 5). This is because the `z-index` of the element that creates the stacking context (`.parent-x` with `z-index: 20`) is compared to the `z-index` of other elements in the parent context (`.parent-y` with `z-index: 5`).

---

### 3. Limitations and Common Pitfalls of Using `z-index`

*   **`z-index` Only Affects Positioned Elements:** This is the most common mistake. If an element is not `position: relative`, `absolute`, `fixed`, or `sticky`, `z-index` will not work on it.

*   **Understanding Stacking Contexts is Key:** Without a grasp of stacking contexts, `z-index` can seem unpredictable. Elements with low `z-index` values can appear above elements with high `z-index` values if they are in different stacking contexts.

*   **Overuse and Complexity:** Assigning `z-index` to every element can lead to a tangled mess that's hard to maintain. Try to use it only when necessary.

*   **Negative `z-index` Values:** These can be used to send elements behind their parent or other elements, but can also lead to confusion if not managed carefully.

*   **`z-index` and Inline Elements:** `z-index` does not affect inline elements.

*   **`z-index` and `float` or `inline-block`:** `z-index` does not work with `float` or `inline-block` elements unless they are also `position: relative` or `absolute`.

*   **`z-index` and `display: none`:** `z-index` has no effect on elements that are hidden with `display: none`.

*   **`z-index` and `visibility: hidden`:** `visibility: hidden` will hide the element and its children, and it will still take up space on the page. The `z-index` of the `visibility: hidden` element will still be respected by its siblings.

---

### 4. Utilizing `z-index` Effectively

*   **Visual Hierarchy:** Use `z-index` to ensure important elements like modals, navigation bars, or tooltips appear on top of other content.

*   **Overlapping Images/Content:** Create visually appealing designs by layering elements using `z-index`.

*   **Fixing Overlap Issues:** When elements are unintentionally overlapping in an undesirable way, `z-index` is often the solution.

*   **Use Relative Values:** Start with a `z-index` of `1` or `10` and increment as needed. Avoid using extremely large numbers unless absolutely necessary.

*   **Organize Your CSS:** When using `z-index` heavily, it's good practice to group related elements or sections in your CSS to make it easier to understand their stacking relationships.

*   **Consider Z-index Layers:** Think of `z-index` values as layers.
    *   `z-index: -1`: Behind parent content.
    *   `z-index: 0`: Within the normal flow, but can be stacked with other `z-index: 0` elements.
    *   `z-index: 1` and above: On top of `z-index: 0` elements.

---

### Practice Questions & Exercises

**Question 1:**
Which of the following CSS properties is required for the `z-index` property to take effect?
a) `display`
b) `float`
c) `position`
d) `margin`

**Question 2:**
What is the default value of `z-index`?
a) `0`
b) `auto`
c) `1`
d) `inherit`

**Question 3:**
If two positioned elements have the same `z-index` value, which one will appear on top?
a) The one that appears later in the HTML source.
b) The one that appears earlier in the HTML source.
c) It's undefined and depends on the browser.
d) It depends on their `position` property.

**Question 4:**
Which CSS property, when applied with a value less than 1, can create a new stacking context?
a) `opacity`
b) `visibility`
c) `display`
d) `transform`

---

### Practice Questions & Exercises - Answers

**Answer 1:**
c) `position`
**Explanation:** `z-index` only works on elements with `position` set to `relative`, `absolute`, `fixed`, or `sticky`.

**Answer 2:**
b) `auto`
**Explanation:** `auto` is the default value, meaning the stacking order is based on the document's source order.

**Answer 3:**
b) The one that appears earlier in the HTML source.
**Explanation:** When `z-index` values are equal, the order in the HTML source code determines the stacking. Elements that come later in the HTML will stack on top of elements that come earlier.

**Answer 4:**
a) `opacity`
**Explanation:** Any element with an `opacity` value less than 1 creates a new stacking context. `transform` and `filter` can also create stacking contexts.

---

### Important Points to Remember

*   **`z-index` works ONLY on `position: relative`, `absolute`, `fixed`, or `sticky` elements.** This is the golden rule!
*   **Higher `z-index` values stack on top of lower `z-index` values.**
*   **Stacking contexts are crucial.** Understand that `z-index` operates within these contexts.
*   **Don't over-engineer `z-index`.** Use it judiciously.
*   **Negative `z-index` values can place elements behind their parent's content.**
*   **Elements that create a stacking context (like `opacity < 1`, `transform`, etc.) will have their `z-index` value respected in the parent context.**

---

This concludes the notes on the `z-index` property. Practice applying it to see how it affects element stacking on your web pages!
