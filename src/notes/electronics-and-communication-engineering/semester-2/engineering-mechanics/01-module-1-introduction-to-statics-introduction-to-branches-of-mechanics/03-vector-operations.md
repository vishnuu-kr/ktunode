---
title: "vector operations"
subject: "ENGINEERING MECHANICS"
module: "Module 1: Introduction to statics:   Introduction to branches  of mechanics"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da310"
status: "completed"
scrapedAt: "2026-05-23T17:38:45.138Z"
---
# Engineering Mechanics: Module 1 - Introduction to Statics

## Introduction to Branches of Mechanics & The Power of Vectors

Welcome to the fascinating world of Engineering Mechanics! In this foundational module, we'll start by understanding where statics fits into the broader picture of mechanics and then dive deep into a crucial tool that underpins everything we do in this subject: **vectors**.

You might wonder, "Why vectors? Isn't statics just about forces and things staying still?" That's a great question! The beauty of mechanics is that it’s a language, and vectors are a fundamental part of that language. They allow us to precisely describe and manipulate quantities that have both **magnitude** (how much of something) and **direction** (which way it's acting). Think about it – a force acting on a bridge beam has a certain strength, but crucially, it also acts in a specific direction. Without understanding direction, our calculations would be incomplete, and frankly, unsafe!

### Understanding the Branches of Mechanics

Before we get our hands dirty with vectors, let's briefly position statics within the larger landscape of mechanics. Mechanics, in essence, is the study of objects and systems in motion or at rest under the influence of forces. We can broadly categorize it into a few key branches:

*   **Mechanics of Materials (or Strength of Materials):** This branch focuses on the internal effects of applied forces on deformable bodies. It’s about how materials deform, bend, twist, or break under stress. While related, statics often provides the external force analysis that informs this field.
*   **Dynamics:** This is the study of objects in motion. It’s further divided into:
    *   **Kinematics:** This deals with the geometry of motion – how things move in terms of displacement, velocity, and acceleration, *without* considering the forces causing that motion. Think of describing the trajectory of a projectile.
    *   **Kinetics:** This is where we link forces to motion. It’s about *why* things move the way they do, incorporating concepts like mass, force, work, and energy. Newton's laws of motion are the bedrock of kinetics.
*   **Statics:** And here we are! Statics is the branch of mechanics that deals with objects and systems that are at **rest** or moving with **constant velocity** (though typically we focus on the rest condition initially). It’s about the equilibrium of bodies. When we talk about equilibrium, we mean that the net force and net moment acting on a body are zero, meaning it’s not accelerating or changing its rotational motion. This is absolutely critical for designing anything from a simple lever to a towering skyscraper. Without understanding statics, we couldn't ensure structures would stand firm, or machines would operate stably.

**Connection to Course Outcomes:** Understanding these branches helps us see the bigger picture. Our focus in this module, **Statics**, directly supports **CO4** (Identify appropriate principles to solve problems of mechanics) and lays the groundwork for **CO5** (Develop the understanding of fundamental principles of rigid body dynamics) by first establishing the principles of equilibrium, which is a special case of dynamics where acceleration is zero. We’ll also be touching upon **CO1** as we introduce the vector representation of forces, which are the fundamental building blocks of our statics problems.

### The Essence of Vectors: More Than Just a Number

Now, let's talk about **vectors**. Many quantities in physics and engineering, like mass, temperature, or speed, are described by a single number – these are called **scalars**. If I tell you the temperature is 25 degrees Celsius, you know everything you need to know about the temperature.

However, other quantities, like force, velocity, or displacement, are not fully described by just a number. You need to know *how much* and *in what direction*. Imagine pushing a heavy box. Pushing it with 100 Newtons of force is different depending on whether you're pushing it horizontally across the floor or vertically upwards. That’s where vectors come in.

A **vector** is a mathematical quantity that possesses both magnitude and direction. We often represent vectors graphically as arrows. The length of the arrow represents the magnitude, and the arrowhead points in the direction of the quantity.

**Connection to Course Outcomes:** This directly addresses **CO1** (Understand the vector representation of forces and moments). Forces are vectors, and understanding how to represent and manipulate them is fundamental to analyzing any system in statics.

#### Representing Vectors

There are a few ways we commonly represent vectors:

1.  **Graphical Representation:** As mentioned, an arrow. This is excellent for visualization.
2.  **Boldface Notation:** In textbooks, vectors are often shown in boldface, like **F** for force, or $\vec{v}$ with an arrow above it.
3.  **Component Form:** This is where vectors become incredibly powerful for calculation. We can break down a vector into its components along specific coordinate axes. Typically, we use the Cartesian coordinate system (x, y, and z axes).

Let's say we have a force **F** acting in a 2D plane. We can describe **F** by its horizontal component ($F_x$) and its vertical component ($F_y$).
So, **F** = $F_x \hat{i} + F_y \hat{j}$

Here, $\hat{i}$ and $\hat{j}$ are called **unit vectors**.
*   $\hat{i}$ is a vector of unit magnitude pointing in the positive x-direction.
*   $\hat{j}$ is a vector of unit magnitude pointing in the positive y-direction.

These unit vectors act like "directions" or "guides." When you multiply a unit vector by a scalar (like $F_x$ or $F_y$), you get a vector along that specific axis with the correct magnitude. So, $F_x \hat{i}$ is a vector pointing along the x-axis with magnitude $|F_x|$, and $F_y \hat{j}$ is a vector pointing along the y-axis with magnitude $|F_y|$.

**Think of it like giving directions:** If someone asks for directions to a store, you might say, "Go 3 blocks east and then 2 blocks north."
*   "3 blocks east" is like $3 \hat{i}$ (assuming east is the x-direction).
*   "2 blocks north" is like $2 \hat{j}$ (assuming north is the y-direction).
The total displacement vector is then $3 \hat{i} + 2 \hat{j}$. This component form is incredibly useful for mathematical operations.

In 3D space, we add a third component along the z-axis, represented by the unit vector $\hat{k}$:
**F** = $F_x \hat{i} + F_y \hat{j} + F_z \hat{k}$

**Magnitude of a Vector:**
Once we have the components, finding the magnitude (the "how much") is straightforward using the Pythagorean theorem.
For a 2D vector **F** = $F_x \hat{i} + F_y \hat{j}$, the magnitude is:
$|\mathbf{F}| = \sqrt{F_x^2 + F_y^2}$

For a 3D vector **F** = $F_x \hat{i} + F_y \hat{j} + F_z \hat{k}$, the magnitude is:
$|\mathbf{F}| = \sqrt{F_x^2 + F_y^2 + F_z^2}$

**Example:**
Suppose a force of 50 N is applied to a bracket. The force acts upwards and to the right, making an angle of 30 degrees with the horizontal.
*   We can represent this force using its components.
*   The horizontal component ($F_x$) would be $50 \cos(30^\circ)$.
*   The vertical component ($F_y$) would be $50 \sin(30^\circ)$.
*   So, the force vector is $\mathbf{F} = (50 \cos(30^\circ)) \hat{i} + (50 \sin(30^\circ)) \hat{j}$ N.
*   And its magnitude is indeed 50 N, as $\sqrt{(50 \cos(30^\circ))^2 + (50 \sin(30^\circ))^2} = \sqrt{2500 (\cos^2(30^\circ) + \sin^2(30^\circ))} = \sqrt{2500 \times 1} = 50$.

This component representation is vital for **CO2** (Identify and describe the components of system of forces), as it allows us to break down complex force systems into manageable parts.

### Fundamental Vector Operations

Just like we can add, subtract, and multiply numbers, we can perform operations on vectors. These operations are fundamental to solving statics problems. We'll primarily focus on operations that are directly relevant to statics: addition, subtraction, and the dot product.

#### 1. Vector Addition

When multiple forces act on an object, we often need to find their *resultant* – the single force that has the same effect as all the individual forces combined. This is vector addition.

**Graphical Method (Tip-to-Tail):**
You can add vectors graphically by placing the tail of the second vector at the tip of the first vector. The resultant vector goes from the tail of the first vector to the tip of the second. If you have more than two vectors, you continue this tip-to-tail process.
*   **Analogy:** Imagine walking. First, you walk 1 km east, then 1 km north. Your total displacement is a vector pointing northeast, with a length that's longer than 1 km but shorter than 2 km. The tip-to-tail method visually shows this combined movement.

**Algebraic Method (Component Addition):**
This is where the component form shines! To add two vectors, you simply add their corresponding components.
If $\mathbf{A} = A_x \hat{i} + A_y \hat{j}$ and $\mathbf{B} = B_x \hat{i} + B_y \hat{j}$, then their resultant vector **R** is:
$\mathbf{R} = \mathbf{A} + \mathbf{B} = (A_x + B_x) \hat{i} + (A_y + B_y) \hat{j}$

Similarly for 3D vectors:
$\mathbf{R} = \mathbf{A} + \mathbf{B} = (A_x + B_x) \hat{i} + (A_y + B_y) \hat{j} + (A_z + B_z) \hat{k}$

**Example:**
Let's say you have two forces:
$\mathbf{F}_1 = 3 \hat{i} + 4 \hat{j}$ kN
$\mathbf{F}_2 = -1 \hat{i} + 2 \hat{j}$ kN

To find the resultant force $\mathbf{F}_R$:
$\mathbf{F}_R = \mathbf{F}_1 + \mathbf{F}_2 = (3 + (-1)) \hat{i} + (4 + 2) \hat{j}$
$\mathbf{F}_R = 2 \hat{i} + 6 \hat{j}$ kN

The magnitude of this resultant force is $|\mathbf{F}_R| = \sqrt{2^2 + 6^2} = \sqrt{4 + 36} = \sqrt{40} \approx 6.32$ kN.
The direction can be found using the arctangent of the y-component over the x-component: $\theta = \arctan(6/2) = \arctan(3) \approx 71.57^\circ$ with respect to the positive x-axis.

**Relevance to Statics:** This is crucial for finding the net force acting on an object. If the resultant force is zero, the object is in translational equilibrium. This directly relates to **CO3** (Apply the conditions of equilibrium).

#### 2. Vector Subtraction

Vector subtraction is simply adding the negative of a vector. The negative of a vector has the same magnitude but acts in the opposite direction.
$\mathbf{A} - \mathbf{B} = \mathbf{A} + (-\mathbf{B})$
If $\mathbf{B} = B_x \hat{i} + B_y \hat{j}$, then $-\mathbf{B} = -B_x \hat{i} - B_y \hat{j}$.

So, subtracting vectors in component form:
$\mathbf{D} = \mathbf{A} - \mathbf{B} = (A_x - B_x) \hat{i} + (A_y - B_y) \hat{j}$

**Example:**
Using $\mathbf{F}_1 = 3 \hat{i} + 4 \hat{j}$ and $\mathbf{F}_2 = -1 \hat{i} + 2 \hat{j}$:
$\mathbf{F}_1 - \mathbf{F}_2 = (3 - (-1)) \hat{i} + (4 - 2) \hat{j}$
$\mathbf{F}_1 - \mathbf{F}_2 = 4 \hat{i} + 2 \hat{j}$

**Relevance to Statics:** While less directly used for finding equilibrium than addition, subtraction is essential for certain types of analyses, like finding the difference between two force vectors or in more advanced concepts.

#### 3. Scalar Multiplication (and Division)

Multiplying a vector by a scalar changes its magnitude and potentially its direction (if the scalar is negative).
If $c$ is a scalar and $\mathbf{A} = A_x \hat{i} + A_y \hat{j}$, then:
$c\mathbf{A} = c(A_x \hat{i} + A_y \hat{j}) = (cA_x) \hat{i} + (cA_y) \hat{j}$

*   If $c > 0$, the direction remains the same.
*   If $c < 0$, the direction reverses.
*   If $c = 0$, the result is a zero vector.

**Example:**
Let $\mathbf{F} = 2 \hat{i} + 5 \hat{j}$.
Then $3\mathbf{F} = 3(2 \hat{i} + 5 \hat{j}) = 6 \hat{i} + 15 \hat{j}$.
And $-2\mathbf{F} = -2(2 \hat{i} + 5 \hat{j}) = -4 \hat{i} - 10 \hat{j}$.

**Relevance to Statics:** This is fundamental for scaling forces or understanding the effect of multipliers in force systems.

#### 4. The Dot Product (Scalar Product)

The dot product is a way of multiplying two vectors that results in a *scalar* (a single number), not another vector. This operation is incredibly important in mechanics, particularly for calculating **work**, **projections**, and understanding the **moment** of a force (which we'll get to later).

**Definition:**
For two vectors $\mathbf{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$ and $\mathbf{B} = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}$, the dot product is:
$\mathbf{A} \cdot \mathbf{B} = A_x B_x + A_y B_y + A_z B_z$

Notice how we multiply corresponding components and then sum them up.

**Geometric Interpretation:**
The dot product also has a geometric definition:
$\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}| |\mathbf{B}| \cos \theta$
where $\theta$ is the angle between vectors **A** and **B**.

This geometric form is extremely useful for finding the angle between two vectors or for projecting one vector onto another.

**How to use it:**
*   **Finding the angle:** If you know the components of $\mathbf{A}$ and $\mathbf{B}$, you can calculate $\mathbf{A} \cdot \mathbf{B}$ using the component method. You can also calculate their magnitudes $|\mathbf{A}|$ and $|\mathbf{B}|$. Then, you can rearrange the geometric definition to find $\cos \theta$:
    $\cos \theta = \frac{\mathbf{A} \cdot \mathbf{B}}{|\mathbf{A}| |\mathbf{B}|}$
    From $\cos \theta$, you can find the angle $\theta$.

*   **Projection:** The scalar projection of vector **A** onto vector **B** (how much of **A** lies in the direction of **B**) is given by:
    $A_B = \frac{\mathbf{A} \cdot \mathbf{B}}{|\mathbf{B}|}$
    This is essentially $(\mathbf{A} \cdot \hat{u}_B)$, where $\hat{u}_B$ is the unit vector in the direction of **B**.

**Example:**
Let $\mathbf{F} = 3 \hat{i} + 4 \hat{j}$ kN and $\mathbf{d} = 5 \hat{i}$ m.
$\mathbf{F} \cdot \mathbf{d} = (3 \times 5) + (4 \times 0) = 15$ kN·m

Geometrically, $|\mathbf{F}| = \sqrt{3^2 + 4^2} = 5$ kN, $|\mathbf{d}| = 5$ m. The angle $\theta$ between $\mathbf{F}$ and $\mathbf{d}$ is $\arctan(4/3) \approx 53.13^\circ$.
$\mathbf{F} \cdot \mathbf{d} = |\mathbf{F}| |\mathbf{d}| \cos \theta = 5 \times 5 \times \cos(53.13^\circ) = 25 \times 0.6 = 15$ kN·m. The results match!

**Relevance to Statics:**
*   **Work:** Work done by a constant force $\mathbf{F}$ over a displacement $\mathbf{d}$ is $W = \mathbf{F} \cdot \mathbf{d}$. While statics focuses on equilibrium (zero displacement in many cases), the concept of work is foundational and appears in virtual work methods.
*   **Components along an axis:** If you want to find the component of a force $\mathbf{F}$ along a certain direction defined by a unit vector $\hat{u}$, you calculate $\mathbf{F} \cdot \hat{u}$. This is extremely useful for resolving forces along inclined planes or specific directions, directly helping with **CO2** and preparing for **CO3**.

#### 5. The Cross Product (Vector Product)

The cross product is another way to multiply two vectors, but it results in a *vector*. This operation is absolutely fundamental for calculating the **moment of a force** about a point, which is a cornerstone of statics.

**Definition:**
For two vectors $\mathbf{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$ and $\mathbf{B} = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}$, the cross product $\mathbf{A} \times \mathbf{B}$ can be calculated using a determinant:

$$
\mathbf{A} \times \mathbf{B} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
A_x & A_y & A_z \\
B_x & B_y & B_z
\end{vmatrix}
$$

Expanding this determinant gives:
$\mathbf{A} \times \mathbf{B} = (A_y B_z - A_z B_y) \hat{i} - (A_x B_z - A_z B_x) \hat{j} + (A_x B_y - A_y B_x) \hat{k}$

**Geometric Interpretation:**
The magnitude of the cross product is:
$|\mathbf{A} \times \mathbf{B}| = |\mathbf{A}| |\mathbf{B}| \sin \theta$
where $\theta$ is the angle between vectors **A** and **B**.

The direction of the resulting vector $\mathbf{C} = \mathbf{A} \times \mathbf{B}$ is **perpendicular** to both **A** and **B**, and its direction is given by the **right-hand rule**:
*   Point the fingers of your right hand in the direction of the first vector (**A**).
*   Curl your fingers towards the second vector (**B**).
*   Your thumb now points in the direction of $\mathbf{A} \times \mathbf{B}$.

**Key Properties:**
*   $\mathbf{A} \times \mathbf{B} = -(\mathbf{B} \times \mathbf{A})$ (anticommutative)
*   $\mathbf{A} \times \mathbf{A} = \mathbf{0}$
*   $\hat{i} \times \hat{j} = \hat{k}$, $\hat{j} \times \hat{k} = \hat{i}$, $\hat{k} \times \hat{i} = \hat{j}$
*   $\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \mathbf{0}$

**Example:**
Let $\mathbf{r} = 2 \hat{i} + 3 \hat{j}$ m (position vector) and $\mathbf{F} = 5 \hat{i} - 2 \hat{j}$ N (force vector).
We want to find the moment $\mathbf{M} = \mathbf{r} \times \mathbf{F}$ about the origin.

Using the determinant:
$$
\mathbf{M} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
2 & 3 & 0 \\
5 & -2 & 0
\end{vmatrix}
= (3 \times 0 - 0 \times (-2)) \hat{i} - (2 \times 0 - 0 \times 5) \hat{j} + (2 \times (-2) - 3 \times 5) \hat{k}
$$
$$
\mathbf{M} = 0 \hat{i} - 0 \hat{j} + (-4 - 15) \hat{k} = -19 \hat{k} \text{ N·m}
$$

The magnitude of the moment is 19 N·m, and it acts in the negative z-direction (meaning it causes a clockwise rotation if viewed from above).

**Relevance to Statics:**
*   **Moment of a Force:** This is the primary application. The moment of a force about a point quantifies the tendency of the force to cause rotation around that point. The condition for rotational equilibrium is that the sum of all moments about any point must be zero. This directly feeds into **CO3** and is a key concept for analyzing beams, levers, and structures.
*   **Magnitude of Area:** The magnitude of the cross product also represents the area of the parallelogram formed by the two vectors.

**Summary of Vector Operations and Their Significance:**

| Operation        | Vector Result? | Component Form Calculation                                 | Geometric Interpretation/Use                                                                        | Statics Relevance                                                                                                                                                                         |
| :--------------- | :------------- | :--------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Addition**     | Yes            | $(A_x+B_x)\hat{i} + (A_y+B_y)\hat{j}$                       | Tip-to-tail; finding resultant force/displacement                                                 | Finding the net force for translational equilibrium. **CO1, CO2, CO3**.                                                                                                                  |
| **Subtraction**  | Yes            | $(A_x-B_x)\hat{i} + (A_y-B_y)\hat{j}$                       | Difference between vectors                                                                          | Analyzing differences in forces or positions.                                                                                                                                             |
| **Scalar Mult.** | Yes            | $(cA_x)\hat{i} + (cA_y)\hat{j}$                             | Scaling magnitude, reversing direction                                                              | Scaling forces, understanding proportional effects.                                                                                                                                       |
| **Dot Product**  | No (Scalar)    | $A_xB_x + A_yB_y + A_zB_z$ or $|\mathbf{A}||\mathbf{B}|\cos\theta$ | Work, projection, angle between vectors                                                             | Calculating components of forces along specific axes, understanding work-energy relationships (future modules), checking perpendicularity. **CO1, CO2, CO4**.                               |
| **Cross Product**| Yes (Vector)   | Determinant method; $(A_yB_z - A_zB_y)\hat{i} + ...$       | Moment of a force, area of parallelogram, direction by right-hand rule                            | Calculating moments of forces about points for rotational equilibrium. This is *critical* for statics. **CO1, CO2, CO3**.                                                                  |

### Connecting to Course Outcomes and Exam Preparation

*   **CO1 (Vector Representation of Forces and Moments):** Everything we've discussed – components, unit vectors, addition, dot product, cross product – is about representing and manipulating forces (and later, moments) as vectors. Be comfortable with expressing forces in component form and understanding what each component means.
*   **CO2 (Components of System of Forces):** The ability to break down any force into its x, y, and z components is key. You’ll often be given forces at angles, and you’ll need to resolve them into components to use equilibrium equations. Remember to pay attention to the signs of your components based on the quadrant or octant the force is acting in.
*   **CO3 (Conditions of Equilibrium):** Statics is all about equilibrium. The two fundamental conditions for a body to be in static equilibrium are:
    1.  **Sum of forces is zero:** $\Sigma \mathbf{F} = \mathbf{0}$ (meaning $\Sigma F_x = 0$, $\Sigma F_y = 0$, and $\Sigma F_z = 0$).
    2.  **Sum of moments is zero:** $\Sigma \mathbf{M}_O = \mathbf{0}$ (where $\mathbf{M}_O$ is the moment about any arbitrary point O).
    Our vector operations, especially addition and dot/cross products, are the tools we use to check and apply these conditions.
*   **CO4 (Appropriate Principles):** Understanding vector operations helps you choose the right tools. Need to find the net force? Use vector addition. Need to find the tendency to rotate? Use the cross product for moments. Need to find force along an inclined plane? Use the dot product for projection.
*   **CO5 (Rigid Body Dynamics):** While this module is statics, the vector math you learn here is *exactly* the same math used in dynamics, just applied to situations where acceleration is zero. A solid grasp of vector operations now will make dynamics much more accessible later.

**Common Pitfalls and Exam Tips:**

*   **Sign Errors:** Be meticulous with the signs of your vector components. Draw a Free Body Diagram (FBD) and clearly indicate the positive directions for your axes.
*   **Right-Hand Rule:** For cross products, always use the right-hand rule consistently. Many students struggle with this. Practice it!
*   **Units:** Keep track of your units (N, m, N·m, etc.).
*   **Magnitude vs. Vector:** Remember that the dot product yields a scalar, while the cross product yields a vector.
*   **Angle Conventions:** When given angles, ensure you know whether they are with respect to the x-axis, y-axis, or another reference. Use sine and cosine correctly.
*   **Free Body Diagrams (FBDs):** For exam problems, drawing a clear FBD is *essential*. It’s your roadmap to setting up the correct vector equations. Identify all forces and their directions on the FBD.

Remember, mastering these vector operations isn't just about memorizing formulas; it's about developing an intuitive understanding of how forces and their effects combine and interact. This foundational knowledge will empower you to tackle complex engineering problems confidently.

***

## Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why the dot product of two vectors is called a "scalar product," and what physical quantities in mechanics are commonly calculated using it.

**Answer:**
The dot product of two vectors, say $\mathbf{A}$ and $\mathbf{B}$, is calculated as $\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}| |\mathbf{B}| \cos \theta$, or in component form as $A_x B_x + A_y B_y + A_z B_z$. In both cases, the result of the operation is a single numerical value, a scalar, not a vector. This is why it's termed the "scalar product."

In mechanics, the dot product is fundamental for:
1.  **Calculating Work:** The work done by a constant force $\mathbf{F}$ acting over a displacement $\mathbf{d}$ is $W = \mathbf{F} \cdot \mathbf{d}$.
2.  **Finding Components:** To find the component of a vector $\mathbf{A}$ along a specific direction defined by a unit vector $\hat{u}$, we use the projection formula: $A_{\text{projection}} = \mathbf{A} \cdot \hat{u}$. This is crucial for resolving forces along inclined planes or specific axes.
3.  **Determining the Angle Between Vectors:** By rearranging the geometric definition, $\cos \theta = \frac{\mathbf{A} \cdot \mathbf{B}}{|\mathbf{A}| |\mathbf{B}|}$, we can find the angle between two vectors.

**Question 2 (Problem-Solving):**
A force $\mathbf{F}$ has a magnitude of 100 N and acts in the first octant such that it makes equal angles with the positive x, y, and z axes. Determine the vector components of $\mathbf{F}$.

**Answer:**
Let the angles the force $\mathbf{F}$ makes with the positive x, y, and z axes be $\alpha$, $\beta$, and $\gamma$ respectively. We are given that $\alpha = \beta = \gamma$.
For any vector in 3D space, the direction cosines are related by $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.
Since $\alpha = \beta = \gamma$, we can substitute:
$\cos^2\alpha + \cos^2\alpha + \cos^2\alpha = 1$
$3 \cos^2\alpha = 1$
$\cos^2\alpha = 1/3$
$\cos\alpha = \pm \frac{1}{\sqrt{3}}$

Since the force acts in the first octant, all its components must be positive. This means the angles $\alpha, \beta, \gamma$ must be acute (between 0 and 90 degrees), so their cosines are positive.
Therefore, $\cos\alpha = \cos\beta = \cos\gamma = \frac{1}{\sqrt{3}}$.

The components of the force vector $\mathbf{F}$ are given by:
$F_x = |\mathbf{F}| \cos\alpha$
$F_y = |\mathbf{F}| \cos\beta$
$F_z = |\mathbf{F}| \cos\gamma$

Given $|\mathbf{F}| = 100$ N:
$F_x = 100 \times \frac{1}{\sqrt{3}} = \frac{100}{\sqrt{3}}$ N
$F_y = 100 \times \frac{1}{\sqrt{3}} = \frac{100}{\sqrt{3}}$ N
$F_z = 100 \times \frac{1}{\sqrt{3}} = \frac{100}{\sqrt{3}}$ N

So, the vector components of $\mathbf{F}$ are $\mathbf{F} = \frac{100}{\sqrt{3}} \hat{i} + \frac{100}{\sqrt{3}} \hat{j} + \frac{100}{\sqrt{3}} \hat{k}$ N.
(Approximation: $\frac{100}{\sqrt{3}} \approx 57.74$ N).

**Question 3 (Problem-Solving):**
Two forces are applied to a bracket as shown. Determine the magnitude and direction of the resultant force.
[Imagine a diagram: Force $\mathbf{F}_1$ of 200 N acts horizontally to the right. Force $\mathbf{F}_2$ of 300 N acts upwards and to the left, making an angle of 45 degrees with the horizontal.]

**Answer:**
First, let's represent each force in component form:

**Force $\mathbf{F}_1$:**
Magnitude $|\mathbf{F}_1| = 200$ N.
Direction: Horizontal to the right.
$\mathbf{F}_1 = 200 \hat{i} + 0 \hat{j}$ N

**Force $\mathbf{F}_2$:**
Magnitude $|\mathbf{F}_2| = 300$ N.
Direction: Upwards and to the left, at 45 degrees to the horizontal.
The horizontal component ($F_{2x}$) acts to the left, so it's negative.
$F_{2x} = -|\mathbf{F}_2| \cos(45^\circ) = -300 \times \frac{\sqrt{2}}{2} = -150\sqrt{2}$ N
The vertical component ($F_{2y}$) acts upwards, so it's positive.
$F_{2y} = |\mathbf{F}_2| \sin(45^\circ) = 300 \times \frac{\sqrt{2}}{2} = 150\sqrt{2}$ N
So, $\mathbf{F}_2 = (-150\sqrt{2}) \hat{i} + (150\sqrt{2}) \hat{j}$ N

Now, find the resultant force $\mathbf{F}_R$ by adding the components:
$\mathbf{F}_R = \mathbf{F}_1 + \mathbf{F}_2$
$\mathbf{F}_R = (200 \hat{i} + 0 \hat{j}) + (-150\sqrt{2} \hat{i} + 150\sqrt{2} \hat{j})$
$\mathbf{F}_R = (200 - 150\sqrt{2}) \hat{i} + (150\sqrt{2}) \hat{j}$ N

Calculate the numerical values:
$150\sqrt{2} \approx 150 \times 1.414 = 212.1$ N
$F_{Rx} = 200 - 212.1 = -12.1$ N
$F_{Ry} = 212.1$ N

So, $\mathbf{F}_R \approx -12.1 \hat{i} + 212.1 \hat{j}$ N.

**Magnitude of $\mathbf{F}_R$:**
$|\mathbf{F}_R| = \sqrt{F_{Rx}^2 + F_{Ry}^2}$
$|\mathbf{F}_R| = \sqrt{(-12.1)^2 + (212.1)^2}$
$|\mathbf{F}_R| = \sqrt{146.41 + 44986.41}$
$|\mathbf{F}_R| = \sqrt{45132.82} \approx 212.45$ N

**Direction of $\mathbf{F}_R$:**
The angle $\theta$ the resultant force makes with the positive x-axis is:
$\theta = \arctan\left(\frac{F_{Ry}}{F_{Rx}}\right)$
$\theta = \arctan\left(\frac{212.1}{-12.1}\right)$
$\theta \approx \arctan(-17.53)$

Since $F_{Rx}$ is negative and $F_{Ry}$ is positive, the resultant vector is in the second quadrant. The arctan function typically returns an angle between -90 and +90 degrees.
$\arctan(-17.53) \approx -86.7^\circ$.
To get the angle in the second quadrant, we add 180 degrees:
$\theta = -86.7^\circ + 180^\circ = 93.3^\circ$.

**Result:**
The magnitude of the resultant force is approximately **212.45 N**, and its direction is **93.3 degrees** counterclockwise from the positive x-axis.

**Question 4 (Conceptual/Application):**
A force $\mathbf{F} = \{300 \mathbf{i} - 200 \mathbf{j} + 150 \mathbf{k}\}$ N acts at point A (2, 0, 0) m. Calculate the moment of the force about the origin O (0, 0, 0).

**Answer:**
The moment $\mathbf{M}_O$ of a force $\mathbf{F}$ about a point O is given by $\mathbf{M}_O = \mathbf{r} \times \mathbf{F}$, where $\mathbf{r}$ is the position vector from O to the point where the force is applied.

**1. Determine the position vector $\mathbf{r}$:**
The force acts at point A (2, 0, 0) m. The origin O is (0, 0, 0).
So, $\mathbf{r} = \vec{OA} = (2-0)\hat{i} + (0-0)\hat{j} + (0-0)\hat{k} = \{2 \mathbf{i}\}$ m.

**2. Determine the force vector $\mathbf{F}$:**
We are given $\mathbf{F} = \{300 \mathbf{i} - 200 \mathbf{j} + 150 \mathbf{k}\}$ N.

**3. Calculate the cross product $\mathbf{M}_O = \mathbf{r} \times \mathbf{F}$:**
We use the determinant method:
$$
\mathbf{M}_O = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
r_x & r_y & r_z \\
F_x & F_y & F_z
\end{vmatrix}
= \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
2 & 0 & 0 \\
300 & -200 & 150
\end{vmatrix}
$$

Expand the determinant:
$\mathbf{M}_O = \mathbf{i}((0)(150) - (0)(-200)) - \mathbf{j}((2)(150) - (0)(300)) + \mathbf{k}((2)(-200) - (0)(300))$
$\mathbf{M}_O = \mathbf{i}(0 - 0) - \mathbf{j}(300 - 0) + \mathbf{k}(-400 - 0)$
$\mathbf{M}_O = 0 \mathbf{i} - 300 \mathbf{j} - 400 \mathbf{k}$ N·m

**Result:**
The moment of the force about the origin is $\mathbf{M}_O = \{-300 \mathbf{j} - 400 \mathbf{k}\}$ N·m.
This means the force tends to cause a rotation in the yz-plane. It has no component of moment about the x-axis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
