---
title: "Support reactions of beams (point load and UDL only)"
subject: "ENGINEERING MECHANICS"
module: "Module 1: Introduction to statics: introduction to branches of mechanics"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc0912ad3"
status: "completed"
scrapedAt: "2026-05-20T18:29:09.182Z"
---
# Engineering Mechanics: Statics

## Module 1: Introduction to Statics: Introduction to Branches of Mechanics

### Topic: Support Reactions of Beams (Point Load and UDL Only)

Welcome, everyone, to the exciting world of Engineering Mechanics! Today, we're diving into a fundamental concept that underpins so much of structural analysis: **Support Reactions of Beams**. Think of beams as the backbone of so many structures around us – bridges, building floors, aircraft wings – they all rely on beams to carry loads. And for a beam to do its job safely and effectively, we need to understand the forces that act on it and, critically, the forces exerted *by* its supports.

This topic is directly linked to several of our **Course Outcomes (COs)**. Understanding support reactions helps us **CO1: Understand the vector representation of forces and moments**, as these reactions are themselves forces and can often be broken down into components. We will certainly **CO2: Identify and describe the components of a system of forces acting on a rigid body** – the beam itself. Most importantly, calculating these reactions is a direct application of the **CO3: Apply the conditions of equilibrium to different force systems**. Without correctly identifying these reactions, we can't ensure a structure is in equilibrium and won't collapse! This also ties into **CO4: Identify appropriate principles to solve problems of mechanics**, as we'll be using Newton's laws and the principles of statics.

### 1.1 What is a Beam? And Why Do We Care About Its Supports?

At its simplest, a **beam** is a structural element that primarily resists loads applied laterally to its axis. Imagine a plank of wood laid across two sawhorses. That plank is a beam. The sawhorses are its supports.

Now, why are the supports so important? When you place a load on the beam (like putting a bag of groceries on our plank), that load has to go somewhere, right? It gets transferred through the beam to its supports. The supports, in turn, push back up on the beam, counteracting the load and keeping the beam (and whatever it's supporting) in a stable position. These upward forces exerted by the supports are what we call **support reactions**.

If we don't figure out these reactions, how can we possibly know if the beam will break? Or if the supports themselves will fail? This is where our knowledge of statics comes in. Statics, as we've introduced, is the branch of mechanics dealing with bodies at rest or in motion with constant velocity. For structures, we are almost always concerned with the *rest* part – ensuring things don't move, or more precisely, that the forces acting on them balance out.

### 1.2 Types of Supports and Corresponding Reactions

The nature of the support dictates the type of reaction force it can exert. This is a crucial concept, often highlighted in exams. Let's look at the common types we'll encounter when dealing with beams:

*   **Pintle Support (or Pin Support):** Imagine a hinge. A beam supported by a pin can rotate freely but cannot move up, down, or sideways. Because it can't move in any direction, the support must exert forces to prevent movement. Therefore, a pin support can provide **two reaction components**: one vertical (upwards, to counteract vertical loads) and one horizontal (sideways, to counteract horizontal loads). Think of how a door is hinged; the hinges prevent it from falling out but allow it to swing.
    *   *Textbook Connection:* You'll find detailed diagrams of these supports and their reaction forces in chapters discussing equilibrium of rigid bodies in books like Timoshenko and Young or Hibbeler. They'll show a pin support as a triangle and depict the unknown reaction forces as Rx and Ry acting at the pin.

*   **Roller Support:** Visualize a roller skate or a caster wheel. A roller support allows the beam to roll freely in one direction (parallel to the surface it's rolling on) but prevents movement perpendicular to that surface. So, if a roller is on a horizontal surface, it can roll left or right, but it cannot move up or down. The support will only provide a **single reaction component**: a vertical force, perpendicular to the surface.
    *   *Analogy:* Think about a drawer sliding on rollers. The rollers allow it to move forward and backward, but they also prevent the drawer from dropping downwards. The support force is in the vertical direction.
    *   *Exam Tip:* Roller supports are often placed on inclined surfaces as well. In such cases, the reaction force is always perpendicular to the inclined surface.

*   **Fixed Support (or Built-in Support):** This is like a beam that's deeply embedded in concrete, like the end of a cantilevered balcony. A fixed support prevents *any* movement. It can't move up or down, it can't move sideways, and importantly, it also prevents rotation. Because it prevents all these movements, a fixed support can provide **three reaction components**: a vertical force, a horizontal force, and a moment (or couple).
    *   *Real-world Example:* The end of a diving board that's anchored to the pool deck. It's firmly held in place and can't wiggle or tilt at the anchor point.
    *   *Note:* For this specific topic, we are focusing on point loads and UDLs, which are typically applied vertically. This means that for many common beam problems with pin and roller supports, the horizontal reaction component might be zero unless there's a horizontal applied load. Fixed supports, however, are more complex and can introduce moments, which we'll touch upon as needed for equilibrium. For today, we'll focus on reactions that primarily balance vertical forces.

### 1.3 Free Body Diagrams (FBDs): Our Essential Tool

Before we can calculate any reactions, we need to isolate the beam and clearly show *all* the forces acting on it. This is done using a **Free Body Diagram (FBD)**. This is perhaps the single most important step in solving any mechanics problem. It’s where you truly visualize the system.

*   **How to Draw an FBD:**
    1.  **Isolate the Body:** Draw a clear, separate representation of the beam itself. Imagine you've cut it away from everything else.
    2.  **Show All External Forces:**
        *   **Applied Loads:** These are the forces you are told are acting on the beam (like the groceries on our plank). We'll cover two main types today:
            *   **Point Load:** A force concentrated at a single point. Think of someone standing on the beam, or a column resting on the beam. It's usually represented by an arrow pointing in the direction of the force.
            *   **Uniformly Distributed Load (UDL):** This is a load spread evenly over a length of the beam. Think of the weight of the beam itself, or a layer of concrete spread evenly on a floor beam. It's often represented by a series of small arrows or a shaded rectangle along the beam. To analyze a UDL for equilibrium purposes, we can "reduce" it to a single equivalent concentrated load. This equivalent load is equal to the total load of the UDL (intensity of load per unit length multiplied by the length over which it's distributed) and acts at the *centroid* of the distribution. For a UDL, the centroid is at the midpoint of the loaded length.
        *   **Support Reactions:** For each support, draw the unknown reaction forces. Remember, you don't know their magnitude or direction yet, so make an educated guess (or draw them generically). If you guess the direction wrong, don't worry! The math will tell you. A negative result means the actual force acts in the opposite direction to what you initially drew.
        *   **Weight of the Beam:** Unless stated otherwise, we often assume the beam is weightless for simplicity. However, in real-world scenarios, a beam's own weight is a significant load. If it's to be considered, it's usually treated as a UDL acting at its center of gravity.
    3.  **Show Dimensions and Angles:** Label all distances and angles clearly on the diagram. These are critical for calculating moments.

*   *Visualisation:* Imagine you're a tiny engineer standing on the beam, looking at it from the outside. What forces are pushing or pulling on you (representing the beam)? You'd see the weights coming down, and the supports pushing up.

### 1.4 Principles of Equilibrium: The Key to Solving

Now that we have our forces laid out in the FBD, we can apply the fundamental principles of **static equilibrium**. For a rigid body to be in equilibrium (i.e., not accelerating), the net force and the net moment acting on it must be zero. These are expressed by the **equations of equilibrium**:

*   **Sum of forces in the horizontal direction is zero:**
    $\Sigma F_x = 0$
    This means all horizontal forces pushing to the right must be balanced by all horizontal forces pushing to the left.

*   **Sum of forces in the vertical direction is zero:**
    $\Sigma F_y = 0$
    This means all upward forces must be balanced by all downward forces.

*   **Sum of moments about any point is zero:**
    $\Sigma M = 0$
    This is perhaps the most powerful equation for finding reactions. It means that the sum of all clockwise moments must equal the sum of all counterclockwise moments about *any* point you choose. Choosing a strategic point can significantly simplify the calculation by eliminating unknown reactions from the equation.
    *   *Understanding Moments:* A moment is a turning effect caused by a force. It's calculated as Force × Perpendicular Distance from the pivot point. For example, if you're trying to tighten a bolt with a wrench, the force you apply to the handle creates a moment about the bolt. The longer the wrench (greater distance), the easier it is to turn the bolt, even with the same force. This concept is thoroughly explained in chapters dealing with forces and moments, like those in Shames or Meriam & Kraige.

### 1.5 Calculating Reactions: Step-by-Step

Let's walk through the process with a typical scenario.

**Scenario:** Consider a simply supported beam (supported by a pin at one end and a roller at the other) subjected to a point load and a UDL.

**Step 1: Draw the Beam and Identify Supports.**
Sketch the beam, clearly marking the pin support (let's say at point A) and the roller support (at point B). Mark the lengths between supports and any overhangs.

**Step 2: Draw the Free Body Diagram (FBD).**
*   Remove the supports and the loads.
*   At the pin support (A), draw two unknown reaction forces: $A_x$ (horizontal) and $A_y$ (vertical).
*   At the roller support (B), draw one unknown reaction force: $B_y$ (vertical, assuming the roller is on a horizontal surface).
*   Represent the point load with an arrow at its point of application, showing its magnitude and direction.
*   Represent the UDL. If the UDL has an intensity $w$ (force per unit length) over a length $L$, you can:
    *   Replace it with an equivalent single force of magnitude $W = w \times L$ acting at the midpoint of the UDL's length.
    *   Or, if you prefer, you can use integration (which is a more advanced technique but fundamentally relies on the same equilibrium principles). For now, let's stick to the equivalent concentrated load.

**Step 3: Write Down the Equations of Equilibrium.**
Assume the beam is in equilibrium.

*   $\Sigma F_x = 0$: This will include $A_x$ and any other horizontal forces (like a horizontal applied load).
*   $\Sigma F_y = 0$: This will include $A_y$, $B_y$, and all vertical applied loads (point loads and the equivalent force from the UDL).
*   $\Sigma M = 0$: Choose a point to sum moments about. A common and very useful strategy is to choose one of the support points (like A or B). Why? Because the reaction forces at that chosen support will pass through that point, and hence their moment arm will be zero, effectively eliminating them from the moment equation.

**Step 4: Solve the Equations.**
Let's say we choose to sum moments about point A.

*   **Moments due to Applied Loads:**
    *   Point Load: If the point load $P$ is at a distance $d_P$ from A, it creates a moment $P \times d_P$. If it causes clockwise rotation, we assign it a sign (e.g., negative), and if counterclockwise, a positive sign.
    *   UDL (Equivalent Load): If the equivalent load $W$ of the UDL is at a distance $d_W$ from A, it creates a moment $W \times d_W$. Assign its sign based on the direction of rotation it causes.
*   **Moments due to Reaction Forces:**
    *   $A_x$ and $A_y$ pass through A, so their moment is 0.
    *   $B_y$ acts at a distance $L_{AB}$ from A. It creates a moment $B_y \times L_{AB}$. Assuming $B_y$ acts upwards, it would typically cause a counterclockwise moment about A.

So, the moment equation about A might look something like:
$\Sigma M_A = (P \times d_P) + (W \times d_W) - (B_y \times L_{AB}) = 0$  (assuming loads cause clockwise moments and $B_y$ causes counterclockwise)

From this equation, you can solve for $B_y$.

Once you have $B_y$, you can use the $\Sigma F_y = 0$ equation to find $A_y$:
$A_y + B_y - P - W = 0$
$A_y = P + W - B_y$

Finally, use the $\Sigma F_x = 0$ equation to find $A_x$. If there are no horizontal applied loads, then $A_x$ will be zero.

*   *Common Pitfall:* Incorrectly calculating the moment arm or the equivalent load for a UDL. Always remember the equivalent load acts at the *center* of the UDL.
*   *Exam Focus:* Problems involving UDLs are very common. Be proficient in converting them to equivalent point loads and finding the correct location for that load.

### 1.6 Example Walkthrough: A Beam with a Point Load and a UDL

Let's put this into practice.
Consider a beam of length 8 meters. It's supported by a pin at the left end (A) and a roller at the right end (B).
It carries a point load of 10 kN acting downwards at 3 meters from A.
It also carries a UDL of 2 kN/m spread over the entire length of the beam.

**1. Sketch and Supports:**
Beam ABCD, length 8m. Pin at A, Roller at B.

**2. Free Body Diagram:**
*   Reactions: $A_x$ (horizontal, left), $A_y$ (vertical, up) at A. $B_y$ (vertical, up) at B.
*   Point Load: 10 kN down at 3m from A.
*   UDL: 2 kN/m over 8m.
    *   Equivalent load for UDL: $W = (2 \text{ kN/m}) \times (8 \text{ m}) = 16 \text{ kN}$.
    *   This equivalent load acts at the midpoint of the 8m length, which is 4m from A.

**3. Equations of Equilibrium:**
*   $\Sigma F_x = 0$: $A_x = 0$ (since there are no horizontal applied loads).
*   $\Sigma F_y = 0$: $A_y + B_y - 10 \text{ kN} - 16 \text{ kN} = 0$
    $A_y + B_y = 26 \text{ kN}$  (Equation 1)
*   $\Sigma M_A = 0$: Let's sum moments about A. We'll consider counterclockwise moments as positive.
    *   Moment due to 10 kN load: $10 \text{ kN} \times 3 \text{ m} = 30 \text{ kNm}$ (clockwise, so negative).
    *   Moment due to UDL's equivalent load (16 kN): $16 \text{ kN} \times 4 \text{ m} = 64 \text{ kNm}$ (clockwise, so negative).
    *   Moment due to $B_y$: $B_y \times 8 \text{ m}$ (counterclockwise, so positive).
    *   Moment due to $A_y$ and $A_x$ is zero as they pass through A.

    So, $\Sigma M_A = -30 \text{ kNm} - 64 \text{ kNm} + (B_y \times 8 \text{ m}) = 0$
    $B_y \times 8 \text{ m} = 94 \text{ kNm}$
    $B_y = \frac{94 \text{ kNm}}{8 \text{ m}} = 11.75 \text{ kN}$

**4. Solve for Remaining Reactions:**
Now substitute $B_y$ into Equation 1:
$A_y + 11.75 \text{ kN} = 26 \text{ kN}$
$A_y = 26 \text{ kN} - 11.75 \text{ kN} = 14.25 \text{ kN}$

**Summary of Reactions:**
*   $A_x = 0$
*   $A_y = 14.25 \text{ kN}$ (upwards)
*   $B_y = 11.75 \text{ kN}$ (upwards)

**Verification:** You can quickly check this by summing moments about point B:
$\Sigma M_B = (A_y \times 8 \text{ m}) - (10 \text{ kN} \times 5 \text{ m}) - (16 \text{ kN} \times 4 \text{ m}) = 0$
$(14.25 \text{ kN} \times 8 \text{ m}) - 50 \text{ kNm} - 64 \text{ kNm} = 114 \text{ kNm} - 114 \text{ kNm} = 0$.
It balances! This verification step is good practice, especially in exams.

### 1.7 Connecting Back to Course Outcomes

Let's see how this topic directly addresses our COs:
*   **CO1 (Vector Representation):** We resolve reactions into horizontal ($A_x$) and vertical ($A_y$) components, which are vector representations.
*   **CO2 (Components of Force System):** The FBD is our tool to identify all forces (applied loads, support reactions) acting on the beam, which is our rigid body. We identify their magnitudes, directions, and points of application.
*   **CO3 (Conditions of Equilibrium):** This is the core of the topic. We explicitly use $\Sigma F_x=0$, $\Sigma F_y=0$, and $\Sigma M=0$ to find the unknown reactions.
*   **CO4 (Appropriate Principles):** We select the principle of static equilibrium and the method of using equations of equilibrium as the appropriate tools to solve the problem.
*   **CO5 (Rigid Body Dynamics):** While this topic is statics, understanding equilibrium is the *foundation* for dynamics. If a structure is not in equilibrium, it will accelerate, and that's where dynamics comes in.

Remember this: **the free body diagram is your best friend.** If your FBD is correct, the rest of the problem becomes a straightforward application of the equilibrium equations. Pay close attention to the types of supports, as they dictate the number and type of reaction forces.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
A simply supported beam is subjected to a vertical downward point load at its center. What types of reactions would you expect at the supports? Explain why.

**Answer:**
A simply supported beam typically implies one end is supported by a pin and the other by a roller.
*   **Pin Support:** At the pin support, we expect two reaction components: a vertical reaction to counteract the downward load and a horizontal reaction to counteract any potential horizontal forces (though in this case, with only a vertical load, the horizontal reaction would be zero).
*   **Roller Support:** At the roller support, which allows horizontal movement, we expect only a vertical reaction force, acting upwards to balance the downward point load.
The reason for these specific reactions is how each support constrains the movement of the beam. A pin prevents translation in any direction, so it must provide forces in both horizontal and vertical directions. A roller only prevents translation perpendicular to the rolling surface, hence only a perpendicular reaction force.

**Question 2 (Exam-Oriented Calculation):**
A beam AB, 10 meters long, is simply supported at A (pin support) and B (roller support). It carries a point load of 15 kN at 4 meters from A and a UDL of 3 kN/m over the portion CD, where C is at 5 meters from A and D is at 9 meters from A. Calculate the vertical reactions at supports A and B.

**Solution:**
1.  **FBD:**
    *   Reactions: $A_y$ (up), $A_x$ (horizontal, typically zero if no horizontal loads). $B_y$ (up).
    *   Point Load: 15 kN down at x=4m.
    *   UDL: 3 kN/m from x=5m to x=9m. Length of UDL = 9m - 5m = 4m.
    *   Equivalent Load for UDL ($W$): $3 \text{ kN/m} \times 4 \text{ m} = 12 \text{ kN}$.
    *   Location of Equivalent Load: At the midpoint of the UDL. Midpoint = (5m + 9m) / 2 = 7m from A.

2.  **Equations of Equilibrium:**
    *   $\Sigma F_x = 0 \implies A_x = 0$ (no horizontal loads).
    *   $\Sigma F_y = 0 \implies A_y + B_y - 15 \text{ kN} - 12 \text{ kN} = 0$
        $A_y + B_y = 27 \text{ kN}$ (Equation 1)
    *   $\Sigma M_A = 0$ (Counter-clockwise positive):
        $(15 \text{ kN} \times 4 \text{ m}) + (12 \text{ kN} \times 7 \text{ m}) - (B_y \times 10 \text{ m}) = 0$
        $60 \text{ kNm} + 84 \text{ kNm} - 10B_y = 0$
        $144 \text{ kNm} = 10B_y$
        $B_y = \frac{144}{10} \text{ kN} = 14.4 \text{ kN}$

3.  **Solve for $A_y$:**
    Substitute $B_y$ into Equation 1:
    $A_y + 14.4 \text{ kN} = 27 \text{ kN}$
    $A_y = 27 \text{ kN} - 14.4 \text{ kN} = 12.6 \text{ kN}$

**Answer:** The vertical reaction at support A ($A_y$) is 12.6 kN upwards, and the vertical reaction at support B ($B_y$) is 14.4 kN upwards.

**Question 3 (Conceptual with UDL emphasis):**
What is the most important principle to remember when dealing with a Uniformly Distributed Load (UDL) in static equilibrium calculations for beams? Why is this principle applied?

**Answer:**
The most important principle when dealing with a UDL is to replace it with an **equivalent concentrated load**. This equivalent load has a magnitude equal to the **total load** of the UDL (intensity of load per unit length multiplied by the length of distribution) and acts at the **centroid** of the UDL's distribution.

This principle is applied because the standard equations of equilibrium ($\Sigma F_x=0$, $\Sigma F_y=0$, $\Sigma M=0$) are designed to work with concentrated forces and moments. A UDL is spread over an area, making direct application of these equations complex without calculus. By replacing the UDL with an equivalent single force at its centroid, we simplify the problem to one where the standard equilibrium equations can be effectively used, without altering the overall force and moment balance on the beam. This aligns with **CO4** (identifying appropriate principles) and **CO3** (applying conditions of equilibrium).
