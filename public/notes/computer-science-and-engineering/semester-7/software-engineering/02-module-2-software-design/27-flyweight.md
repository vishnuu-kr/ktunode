---
title: "Flyweight."
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8a6"
status: "completed"
scrapedAt: "2026-05-20T17:11:21.449Z"
---
# Software Engineering: Module 2: Software Design - The Flyweight Pattern

This document provides comprehensive study notes on the Flyweight design pattern, a crucial concept in object-oriented software design.

---

## 1. Introduction to the Flyweight Pattern

The Flyweight pattern is a **structural design pattern** that focuses on **minimizing memory usage** by sharing as much data as possible with other similar objects. It achieves this by separating the intrinsic (sharable) state of an object from its extrinsic (context-dependent) state.

**Core Idea:** Instead of creating many objects that differ only slightly, we create a smaller number of objects (flyweights) that represent the common, intrinsic state. The extrinsic state is then passed to these flyweights as parameters when they are used.

---

## 2. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the problem addressed by the Flyweight pattern:** Recognize scenarios where excessive object creation leads to performance issues or high memory consumption.
*   **Identify the key components of the Flyweight pattern:** Recognize and describe the roles of `Flyweight`, `ConcreteFlyweight`, `UnsharedConcreteFlyweight` (optional), `FlyweightFactory`, and `Client`.
*   **Explain how the Flyweight pattern works:** Describe the mechanism of separating intrinsic and extrinsic state and how sharing is achieved.
*   **Apply the Flyweight pattern in practical scenarios:** Identify suitable use cases and implement the pattern in code.
*   **Analyze the benefits and drawbacks of using the Flyweight pattern:** Understand when and why to use it, and what potential trade-offs exist.
*   **Distinguish the Flyweight pattern from other memory optimization techniques.**

---

## 3. Key Concepts and Definitions

### 3.1 The Problem: Excessive Object Creation

Imagine a system that needs to display a large number of similar graphical elements, like characters in a text editor or images in a gallery. If each element is represented by a unique object, even if they share a lot of data, memory consumption can become a significant problem, impacting performance.

**Example:** Consider a word processor displaying thousands of characters. If each character object stores its font, size, color, and glyph information independently, memory usage will skyrocket.

### 3.2 The Solution: Sharing and State Separation

The Flyweight pattern addresses this by:

*   **Intrinsic State:** Data that is common to all objects of a particular type and can be shared. This state is immutable and resides within the flyweight object.
*   **Extrinsic State:** Data that is unique to each object and depends on its context. This state is passed to the flyweight as parameters and is not stored within the flyweight itself.

### 3.3 Components of the Flyweight Pattern

*   **`Flyweight` (Interface or Abstract Class):** Declares the interface for objects that flyweights represent. This interface will typically have methods that accept the extrinsic state.
    *   **Example:** `Character` interface with an `display(context)` method.

*   **`ConcreteFlyweight` (Class):** Implements the `Flyweight` interface and stores the intrinsic state. It is sharable.
    *   **Example:** `FontCharacter` class implementing `Character`, storing the `glyph` and `fontStyle`.

*   **`UnsharedConcreteFlyweight` (Class - Optional):** Represents flyweight objects that cannot be shared. This is less common but can be useful for objects that have some shared intrinsic state but also some unique intrinsic state that prevents full sharing.
    *   **Example:** A complex scene element that shares some rendering data but has unique animation parameters.

*   **`FlyweightFactory` (Class):** Manages the pool of flyweight objects. It's responsible for creating new flyweights when requested and returning existing ones if they already exist (based on their intrinsic state). This is where the sharing happens.
    *   **Example:** `CharacterFactory` with a `getCharacter(fontStyle, glyph)` method.

*   **`Client` (Class):** Uses the flyweight objects. It is responsible for computing or storing the extrinsic state and passing it to the flyweight's methods.
    *   **Example:** The `Document` class in a word processor, which holds the extrinsic state (position, color) and requests `Character` flyweights from the `CharacterFactory`.

---

## 4. How the Flyweight Pattern Works

1.  **Client requests a flyweight:** The client asks the `FlyweightFactory` for a flyweight object, typically providing some identifier for its intrinsic state.
2.  **Factory checks the pool:** The `FlyweightFactory` checks if a flyweight with the requested intrinsic state already exists in its pool.
3.  **Return existing or create new:**
    *   If an existing flyweight is found, it is returned to the client.
    *   If not, a new `ConcreteFlyweight` object is created, stored in the pool, and then returned to the client.
4.  **Client uses the flyweight:** The client then uses the returned flyweight object, passing the extrinsic state (which is unique to the client's context) as arguments to the flyweight's methods.

---

## 5. Example: Text Editor Characters

Let's illustrate the Flyweight pattern with a simplified text editor scenario.

**Problem:** A document with millions of characters, each potentially having a different font and style. Storing each character's font and style independently would be inefficient.

**Solution using Flyweight:**

**Intrinsic State:** Font style (e.g., Arial, Bold, 12pt).
**Extrinsic State:** Character itself ('a', 'b', etc.), color, position on the screen.

**1. `Flyweight` Interface:**

```java
// Java Example
interface CharacterFlyweight {
    void display(char character, String color, int x, int y);
}
```

**2. `ConcreteFlyweight` Class:**

```java
// Java Example
class FontCharacter implements CharacterFlyweight {
    private String fontStyle; // Intrinsic state (sharable)

    public FontCharacter(String fontStyle) {
        this.fontStyle = fontStyle;
        // Simulate expensive initialization for font style
        System.out.println("Creating FontCharacter for: " + fontStyle);
    }

    @Override
    public void display(char character, String color, int x, int y) {
        System.out.println("Displaying character '" + character + "' with font '" + fontStyle +
                           "' in color '" + color + "' at position (" + x + ", " + y + ")");
    }

    public String getFontStyle() {
        return fontStyle;
    }
}
```

**3. `FlyweightFactory` Class:**

```java
// Java Example
import java.util.HashMap;
import java.util.Map;

class CharacterFactory {
    private Map<String, CharacterFlyweight> flyweights = new HashMap<>();

    public CharacterFlyweight getCharacter(String fontStyle) {
        // Check if flyweight already exists
        CharacterFlyweight flyweight = flyweights.get(fontStyle);
        if (flyweight == null) {
            // Create a new flyweight if it doesn't exist
            flyweight = new FontCharacter(fontStyle);
            flyweights.put(fontStyle, flyweight);
        }
        return flyweight;
    }

    public int getPoolSize() {
        return flyweights.size();
    }
}
```

**4. `Client` Class:**

```java
// Java Example
import java.util.ArrayList;
import java.util.List;

class TextDocument {
    private List<CharacterFlyweight> characters = new ArrayList<>();
    private CharacterFactory factory;

    public TextDocument(CharacterFactory factory) {
        this.factory = factory;
    }

    public void addCharacter(char character, String fontStyle, String color, int x, int y) {
        CharacterFlyweight flyweight = factory.getCharacter(fontStyle);
        // Extrinsic state (character, color, position) passed as arguments
        flyweight.display(character, color, x, y);
        // In a real scenario, you might store the flyweight and extrinsic state separately
        // For simplicity, we're calling display directly here to show usage.
        // A more accurate representation might be:
        // characters.add(flyweight);
        // characterPositions.add(new Position(x, y));
        // characterColors.add(color);
        // characterGlyphs.add(character);
    }

    public int getUniqueFontCount() {
        return factory.getPoolSize();
    }
}
```

**Usage:**

```java
// Java Example
public class Main {
    public static void main(String[] args) {
        CharacterFactory factory = new CharacterFactory();
        TextDocument document = new TextDocument(factory);

        // Adding characters with different font styles and extrinsic states
        document.addCharacter('H', "Arial-Bold-12", "Black", 10, 20);
        document.addCharacter('e', "Arial-Bold-12", "Black", 30, 20);
        document.addCharacter('l', "TimesNewRoman-Regular-14", "Blue", 50, 20);
        document.addCharacter('l', "TimesNewRoman-Regular-14", "Blue", 70, 20);
        document.addCharacter('o', "Arial-Bold-12", "Black", 90, 20);
        document.addCharacter('W', "Arial-Bold-12", "Black", 110, 20);
        document.addCharacter('o', "TimesNewRoman-Regular-14", "Blue", 130, 20);
        document.addCharacter('r', "Arial-Bold-12", "Black", 150, 20);
        document.addCharacter('l', "Arial-Bold-12", "Black", 170, 20);
        document.addCharacter('d', "TimesNewRoman-Regular-14", "Blue", 190, 20);

        System.out.println("\nTotal unique font styles created: " + document.getUniqueFontCount());
    }
}
```

**Output Analysis:**

Notice that "Creating FontCharacter for: Arial-Bold-12" and "Creating FontCharacter for: TimesNewRoman-Regular-14" are printed only once, even though these font styles are used for multiple characters. This demonstrates the sharing of `FontCharacter` objects.

---

## 6. Benefits of the Flyweight Pattern

*   **Reduced Memory Consumption:** This is the primary benefit. By sharing objects, you significantly decrease the number of objects in memory, especially in systems with many similar objects.
*   **Improved Performance:** Less memory usage often translates to better performance due to fewer object creations, garbage collection overhead, and better cache utilization.
*   **Encapsulates Shared State:** The pattern cleanly separates sharable intrinsic state from context-dependent extrinsic state.

---

## 7. Drawbacks of the Flyweight Pattern

*   **Increased Complexity:** The introduction of the `FlyweightFactory` and the separation of states can add complexity to the design and implementation.
*   **Extrinsic State Management:** The client is responsible for managing the extrinsic state, which can be challenging if the extrinsic state is complex or needs to be passed to many flyweights.
*   **Potential for Overuse:** Not all systems require the Flyweight pattern. Using it unnecessarily can complicate the code without providing significant benefits. It's most effective when the number of unique intrinsic states is far less than the number of flyweight instances.
*   **Thread Safety:** If the `FlyweightFactory` is not designed to be thread-safe, concurrent access can lead to issues. The `HashMap` in the example needs synchronization for multi-threaded environments.

---

## 8. When to Use the Flyweight Pattern

*   When an application uses a large number of objects.
*   When these objects can be grouped into a small set of shared intrinsic states.
*   When the extrinsic state can be separated from the intrinsic state.
*   When the cost of object creation and memory usage becomes a significant performance bottleneck.

---

## 9. Practice Questions and Exercises

**Question 1:**
What is the primary goal of the Flyweight design pattern?
a) To increase the number of objects in memory.
b) To reduce the complexity of the codebase.
c) To minimize memory usage by sharing common data among objects.
d) To improve the extensibility of the system.

**Question 2:**
Identify the two types of state that the Flyweight pattern separates.
a) Mutable and Immutable state.
b) Public and Private state.
c) Intrinsic and Extrinsic state.
d) Transient and Persistent state.

**Question 3:**
Which component of the Flyweight pattern is responsible for managing the pool of flyweight objects and ensuring sharing?
a) `Flyweight`
b) `ConcreteFlyweight`
c) `Client`
d) `FlyweightFactory`

**Question 4:**
In the text editor example, what would be considered the intrinsic state of a `CharacterFlyweight` object?
a) The character's position on the screen.
b) The character's color.
c) The character's font style.
d) The character glyph itself (e.g., 'a', 'b').

**Question 5 (Conceptual):**
Imagine you are building a game with thousands of identical trees. Each tree has a position, a size, and a texture. How could the Flyweight pattern be applied here? What would be the intrinsic and extrinsic states?

---

## 10. Answers to Practice Questions

**Answer 1:**
c) To minimize memory usage by sharing common data among objects.

**Answer 2:**
c) Intrinsic and Extrinsic state.

**Answer 3:**
d) `FlyweightFactory`

**Answer 4:**
c) The character's font style. (The glyph itself could also be considered intrinsic, but font style is a more common example of separable shared data.)

**Answer 5 (Conceptual):**

*   **Intrinsic State:** The tree's model (e.g., the 3D mesh, the base texture, branching structure). This data is identical for all trees of the same type.
*   **Extrinsic State:** The tree's position in the game world, its scale (size), its rotation, and potentially its specific color variation or effects (like wind sway parameters).

**Application:**
The `FlyweightFactory` would create a limited number of `TreeModel` objects, each representing a unique tree model. When a game object needs to represent a tree at a specific location, it would request the appropriate `TreeModel` from the factory. Then, it would combine the `TreeModel` (flyweight) with the extrinsic state (position, scale, rotation) to render the tree on screen. This would save memory by not duplicating the complex tree model data for every single tree instance.

---

## 11. Important Points to Remember

*   **Memory Optimization:** Flyweight is primarily about saving memory.
*   **Sharing is Key:** The pattern relies on the ability to share objects based on their intrinsic state.
*   **State Separation:** Intrinsic state must be independent of the object's context.
*   **Factory Role:** The `FlyweightFactory` is crucial for managing and returning shared flyweights.
*   **Client Responsibility:** The client must handle the extrinsic state.
*   **Trade-off:** Be aware of the added complexity and the need to manage extrinsic state.

---
This concludes the study notes for the Flyweight pattern. Remember to review the concepts and consider how they apply to different software engineering scenarios.
