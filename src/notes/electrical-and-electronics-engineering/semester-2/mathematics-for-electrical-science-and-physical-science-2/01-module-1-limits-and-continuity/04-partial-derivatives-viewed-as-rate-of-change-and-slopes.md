---
title: "Partial derivatives viewed as rate of change and slopes"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9827"
status: "completed"
scrapedAt: "2026-05-23T16:08:00.042Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives: Rate of Change and Slopes

Welcome, everyone, to our exploration of multivariable calculus! Today, we're diving into the fascinating world of **partial derivatives**. Think about it: in electrical science, quantities rarely depend on just one variable. The voltage across a component might depend on the current flowing through it *and* its temperature. In physical science, the pressure in a gas could depend on its volume *and* its temperature. We need tools to understand how these complex systems change when multiple factors are at play. That's where partial derivatives come in.

This topic is fundamental to achieving **Course Outcome 1 (CO1)**: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding partial derivatives is the first step towards calculating these rates of change and eventually optimizing systems, which is a huge part of engineering.

### 1. The Essence of Partial Derivatives: Isolating Change

Imagine you're hiking on a mountain. Your altitude (let's call it \(z\)) depends on your position on the ground, which we can describe by two coordinates: your east-west position (\(x\)) and your north-south position (\(y\)). So, your altitude is a function of two variables: \(z = f(x, y)\).

Now, if you want to know how steep the mountain is *right now*, you need to be more specific. Are you interested in how your altitude changes if you take one step eastward (keeping your north-south position fixed)? Or are you interested in how it changes if you take one step northward (keeping your east-west position fixed)? These are precisely the questions that partial derivatives answer.

A **partial derivative** is the rate of change of a multivariable function with respect to *one* of its variables, while all other variables are held constant. It's like isolating one factor to see its individual impact.

**Consider this:** If we're looking at \(z = f(x, y)\):

*   The **partial derivative of \(f\) with respect to \(x\)** tells us how \(f\) changes as \(x\) changes, assuming \(y\) stays the same.
*   The **partial derivative of \(f\) with respect to \(y\)** tells us how \(f\) changes as \(y\) changes, assuming \(x\) stays the same.

This is a core concept from your textbooks like Anton, Biven, and Davis (12th edition) and Thomas' Calculus (15th edition). They emphasize that we're essentially treating the function as if it were a function of a single variable for the purpose of differentiation, while treating the other variables as constants.

### 2. Notation and Calculation: How Do We Write and Do It?

We have specific notations for partial derivatives to make it clear which variable we're differentiating with respect to.

If \(z = f(x, y)\), then:

*   The partial derivative of \(f\) with respect to \(x\) is denoted by \(\frac{\partial z}{\partial x}\) or \(f_x(x, y)\).
*   The partial derivative of \(f\) with respect to \(y\) is denoted by \(\frac{\partial z}{\partial y}\) or \(f_y(x, y)\).

The symbol \(\partial\) (read "del" or "partial") is crucial here. It distinguishes partial derivatives from ordinary derivatives (like \(\frac{dz}{dx}\)), which are used when a function depends on only one variable.

**How do we actually compute them?** It's straightforward once you grasp the "holding constant" idea.

**To find \(\frac{\partial z}{\partial x}\):**
Treat \(y\) as a constant and differentiate \(f(x, y)\) with respect to \(x\) as usual.

**To find \(\frac{\partial z}{\partial y}\):**
Treat \(x\) as a constant and differentiate \(f(x, y)\) with respect to \(y\) as usual.

**Let's take an example:**
Suppose the temperature \(T\) in a room depends on the distance from a heater (\(x\)) and the height from the floor (\(y\)). Let the function be \(T(x, y) = 50 + 10x - 0.5x^2 - 0.2y^2\).

*   **To find \(\frac{\partial T}{\partial x}\):** We hold \(y\) constant.
    \(\frac{\partial T}{\partial x} = \frac{\partial}{\partial x} (50 + 10x - 0.5x^2 - 0.2y^2)\)
    Differentiating term by term:
    \(\frac{\partial}{\partial x}(50) = 0\) (derivative of a constant)
    \(\frac{\partial}{\partial x}(10x) = 10\)
    \(\frac{\partial}{\partial x}(-0.5x^2) = -0.5 \cdot 2x = -x\)
    \(\frac{\partial}{\partial x}(-0.2y^2) = 0\) (since \(y\) is treated as a constant, \(-0.2y^2\) is a constant with respect to \(x\))
    So, \(\frac{\partial T}{\partial x} = 10 - x\).

*   **To find \(\frac{\partial T}{\partial y}\):** We hold \(x\) constant.
    \(\frac{\partial T}{\partial y} = \frac{\partial}{\partial y} (50 + 10x - 0.5x^2 - 0.2y^2)\)
    Differentiating term by term:
    \(\frac{\partial}{\partial y}(50) = 0\)
    \(\frac{\partial}{\partial y}(10x) = 0\) (since \(x\) is treated as a constant)
    \(\frac{\partial}{\partial y}(-0.5x^2) = 0\) (since \(x\) is treated as a constant)
    \(\frac{\partial}{\partial y}(-0.2y^2) = -0.2 \cdot 2y = -0.4y\)
    So, \(\frac{\partial T}{\partial y} = -0.4y\).

**Remember this:** The key is consistently identifying which variable is the "active" one and which are the "passive" ones (constants) during each differentiation. This mirrors the process in many engineering calculations where you might analyze the effect of one parameter while assuming others are fixed.

This aligns with **CO1** as it directly addresses the computation of partial derivatives.

### 3. Partial Derivatives as Rates of Change: Interpreting the Numbers

So, we've computed \(\frac{\partial T}{\partial x} = 10 - x\) and \(\frac{\partial T}{\partial y} = -0.4y\). What do these numbers *mean*?

\(\frac{\partial T}{\partial x}\) represents the rate at which the temperature changes with respect to a change in the distance from the heater (\(x\)), *provided you are moving horizontally* (parallel to the x-axis), keeping your height (\(y\)) constant.

For example, at a point where \(x = 2\) meters, \(\frac{\partial T}{\partial x} = 10 - 2 = 8\). This means that if you are 2 meters away from the heater and take a small step horizontally away from it, the temperature will increase at a rate of approximately 8 degrees per meter.

\(\frac{\partial T}{\partial y}\) represents the rate at which the temperature changes with respect to a change in height (\(y\)), *provided you are moving vertically* (parallel to the y-axis), keeping your horizontal distance from the heater (\(x\)) constant.

For example, at a height \(y = 3\) meters, \(\frac{\partial T}{\partial y} = -0.4 \cdot 3 = -1.2\). This means that if you are at a height of 3 meters and move a small step upwards, the temperature will decrease at a rate of approximately 1.2 degrees per meter.

**Relatable Analogy:** Think about a hot pan on a stove. Let \(T(x, y)\) be the temperature of the pan surface, where \(x\) is the distance from the center of the pan and \(y\) is the distance from the handle.
*   \(\frac{\partial T}{\partial x}\) would tell you how quickly the temperature changes as you move radially outwards from the hottest spot in the center. You'd expect this to be negative, meaning it gets cooler as you move away.
*   \(\frac{\partial T}{\partial y}\) would tell you how the temperature changes as you move towards or away from the handle. Perhaps the handle is cooler, so moving towards it might decrease temperature.

These interpretations are directly applicable in **CO1**, as they describe how functions change with respect to individual variables, a crucial step for understanding phenomena in electrical and physical sciences.

### 4. Partial Derivatives as Slopes: Visualizing the Gradients

Now, let's connect this to the idea of "slopes." When we talk about the slope of a curve \(y = f(x)\), we're talking about the slope of the tangent line to that curve. For a function of two variables, \(z = f(x, y)\), visualizing the "slope" becomes a bit more complex because the graph is a surface in 3D space.

Think back to our mountain analogy: \(z = f(x, y)\).
If we want to find the slope of the mountain face as we walk *purely in the east direction* (along the x-axis, keeping y constant), we're essentially looking at the slope of a curve on the surface. This curve is formed by slicing the mountain with a plane where \(y\) is constant. The slope of this curve at a specific point is precisely the partial derivative \(\frac{\partial z}{\partial x}\) evaluated at that point.

Similarly, if we walk *purely in the north direction* (along the y-axis, keeping x constant), we're slicing the mountain with a plane where \(x\) is constant. The slope of the mountain face in this direction is given by \(\frac{\partial z}{\partial y}\) evaluated at that point.

So, the partial derivatives \(\frac{\partial z}{\partial x}\) and \(\frac{\partial z}{\partial y}\) represent the slopes of the tangent lines to the curves formed by intersecting the surface \(z = f(x, y)\) with planes parallel to the \(xz\)-plane and \(yz\)-plane, respectively.

**Example: A Paraboloid**
Consider the function \(z = f(x, y) = x^2 + y^2\). This is a simple paraboloid opening upwards.
*   \(\frac{\partial z}{\partial x} = 2x\). This is the slope of the surface as you move purely in the x-direction. If you're at \(x=1, y=0\), the slope in the x-direction is \(2(1) = 2\).
*   \(\frac{\partial z}{\partial y} = 2y\). This is the slope of the surface as you move purely in the y-direction. If you're at \(x=0, y=1\), the slope in the y-direction is \(2(1) = 2\).

At the very bottom of the paraboloid, at \((0,0)\), both \(\frac{\partial z}{\partial x} = 0\) and \(\frac{\partial z}{\partial y} = 0\). This tells us the surface is "flat" in both the x and y directions at that point, which we know corresponds to a minimum. This hints at the connection to finding maxima and minima, as outlined in **CO1**.

**Important Note:** These are not the *only* slopes on the surface. If you walk diagonally, the slope will be different. Partial derivatives give us the slopes *along the coordinate axes*. The concept of the **gradient** (which we might cover later or is touched upon in advanced texts like Kreyszig or Bird's Higher Engineering Mathematics) combines these directional slopes.

**Exam Tip:** When asked to find the "slope of the surface in the direction of the x-axis," they are asking for \(\frac{\partial z}{\partial x}\). Similarly for the y-axis. Don't get confused if the question uses "slope" without specifying a direction; it usually implies one of the coordinate directions.

### 5. Higher-Order Partial Derivatives: Beyond the First Step

Just like with single-variable calculus, we can differentiate again! We can take partial derivatives of partial derivatives. These are called **higher-order partial derivatives**.

If \(z = f(x, y)\), we have the first-order partial derivatives \(\frac{\partial z}{\partial x}\) and \(\frac{\partial z}{\partial y}\).

Now, we can differentiate these again:

*   Differentiate \(\frac{\partial z}{\partial x}\) with respect to \(x\): \(\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^2 z}{\partial x^2} = f_{xx}(x, y)\). This is the second partial derivative of \(f\) with respect to \(x\).
*   Differentiate \(\frac{\partial z}{\partial x}\) with respect to \(y\): \(\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^2 z}{\partial y \partial x} = f_{yx}(x, y)\). This is the mixed second partial derivative of \(f\) with respect to \(y\) and then \(x\).
*   Differentiate \(\frac{\partial z}{\partial y}\) with respect to \(x\): \(\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^2 z}{\partial x \partial y} = f_{xy}(x, y)\). This is the mixed second partial derivative of \(f\) with respect to \(x\) and then \(y\).
*   Differentiate \(\frac{\partial z}{\partial y}\) with respect to \(y\): \(\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^2 z}{\partial y^2} = f_{yy}(x, y)\). This is the second partial derivative of \(f\) with respect to \(y\).

**Clairaut's Theorem (or Schwarz's Theorem):** A very important result, often discussed in texts like Thomas' Calculus and Ramana's Higher Engineering Mathematics, states that if the mixed second partial derivatives \(f_{xy}\) and \(f_{yx}\) are continuous in an open region, then they are equal: \(\frac{\partial^2 z}{\partial y \partial x} = \frac{\partial^2 z}{\partial x \partial y}\).

This theorem is incredibly useful because it means for many common functions, you can compute the mixed partials in whichever order is easier.

**Example using the temperature function:** \(T(x, y) = 50 + 10x - 0.5x^2 - 0.2y^2\)
We found \(\frac{\partial T}{\partial x} = 10 - x\) and \(\frac{\partial T}{\partial y} = -0.4y\).

Let's find the second partial derivatives:
*   \(\frac{\partial^2 T}{\partial x^2} = \frac{\partial}{\partial x}(10 - x) = -1\)
*   \(\frac{\partial^2 T}{\partial y^2} = \frac{\partial}{\partial y}(-0.4y) = -0.4\)

Now for the mixed partials:
*   \(\frac{\partial^2 T}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial T}{\partial x}\right) = \frac{\partial}{\partial y}(10 - x) = 0\) (treating \(x\) as constant)
*   \(\frac{\partial^2 T}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial T}{\partial y}\right) = \frac{\partial}{\partial x}(-0.4y) = 0\) (treating \(y\) as constant)

In this case, as expected by Clairaut's Theorem, \(\frac{\partial^2 T}{\partial y \partial x} = \frac{\partial^2 T}{\partial x \partial y} = 0\).

Higher-order partial derivatives are vital in many areas. For instance, in wave equations or heat transfer equations, you'll see second-order partial derivatives. They help describe the curvature and more complex behaviors of the functions. This directly supports **CO1** by enabling more advanced analysis.

### 6. Applications in Science and Engineering

Partial derivatives are not just mathematical curiosities; they are essential tools for understanding and modeling the physical world.

*   **Electrical Engineering:**
    *   **Circuit Analysis:** Voltage or current in a circuit might depend on multiple parameters like resistance, capacitance, inductance, and external voltage sources, all of which could change. Partial derivatives help analyze the sensitivity of the circuit's behavior to changes in each parameter. For instance, in analyzing transient behavior, you might encounter differential equations involving partial time and spatial derivatives.
    *   **Electromagnetism:** Maxwell's equations, which govern electric and magnetic fields, are fundamentally partial differential equations. Quantities like electric field \(\mathbf{E}\) and magnetic field \(\mathbf{B}\) are functions of position \((x, y, z)\) and time \(t\), and their relationships are described by equations involving partial derivatives with respect to these variables (e.g., \(\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}\)). This is a direct application of understanding rates of change in multiple dimensions.

*   **Physical Science:**
    *   **Thermodynamics:** The state of a gas is often described by pressure \(P\), volume \(V\), and temperature \(T\). Equations of state, like the ideal gas law \(PV = nRT\), relate these variables. If we want to understand how pressure changes when both volume and temperature are altered, we'd use partial derivatives. For example, if \(P = \frac{nRT}{V}\), then \(\frac{\partial P}{\partial V}\) (at constant T) and \(\frac{\partial P}{\partial T}\) (at constant V) tell us about compressibility and thermal expansion, respectively.
    *   **Fluid Dynamics:** Velocity, pressure, and density in a fluid are functions of position and time. The Navier-Stokes equations, describing fluid motion, are complex partial differential equations.
    *   **Heat Transfer:** The temperature distribution \(T(x, y, z, t)\) in an object over time is described by the heat equation, which is a partial differential equation. \(\frac{\partial T}{\partial t} = k \nabla^2 T\). Understanding \(\frac{\partial T}{\partial x}\), \(\frac{\partial T}{\partial y}\), \(\frac{\partial T}{\partial z}\) (which are related to heat flux) and second derivatives is crucial for solving these problems.
    *   **Quantum Mechanics:** Wave functions \(\psi(x, t)\) often involve partial derivatives with respect to position and time. The Schrödinger equation is a prime example.

These examples directly link back to **CO1** and even hint at **CO2** and **CO3** as we move further into multivariable calculus. Understanding partial derivatives as rates of change is the bedrock for applying these concepts to solve real-world engineering and physics problems.

### Summary and Key Takeaways

To wrap up this section, remember these core ideas about partial derivatives:

*   They measure the rate of change of a multivariable function with respect to **one specific variable**, holding all others constant.
*   The notation \(\frac{\partial z}{\partial x}\) and \(f_x\) signifies differentiation with respect to \(x\), treating \(y\) as a constant.
*   They represent the slopes of the tangent lines to the curves formed by slicing the surface \(z = f(x, y)\) with planes parallel to the coordinate planes.
*   Higher-order partial derivatives, especially mixed partials, have important theoretical properties (like Clairaut's Theorem) and are essential for advanced modeling.
*   They are fundamental tools for understanding phenomena in electrical and physical sciences, from circuit behavior to heat flow and electromagnetism.

Mastering partial derivatives is a crucial step in your journey through multivariable calculus and its applications. Keep practicing the differentiation process and, most importantly, focus on the interpretation of what these rates of change mean in a given context.

---

### Sample Questions and Answers

**Q1. Conceptual Question:**
What does the partial derivative \(\frac{\partial f}{\partial y}\) represent for a function \(f(x, y)\)?

**Answer:**
\(\frac{\partial f}{\partial y}\) represents the instantaneous rate of change of the function \(f\) with respect to the variable \(y\), assuming that the variable \(x\) is held constant. Geometrically, it is the slope of the tangent line to the curve formed by the intersection of the surface \(z = f(x, y)\) and the plane \(x = c\) (where \(c\) is a constant) at a given point \((c, y)\). It quantifies how the output of \(f\) changes as you move purely in the y-direction on the input plane.

**Q2. Calculation Question:**
Given the function \(f(x, y) = e^{xy} + \sin(x) + y^3\), find the first partial derivatives \(\frac{\partial f}{\partial x}\) and \(\frac{\partial f}{\partial y}\).

**Answer:**
To find \(\frac{\partial f}{\partial x}\), we treat \(y\) as a constant:
\(\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(e^{xy}) + \frac{\partial}{\partial x}(\sin(x)) + \frac{\partial}{\partial x}(y^3)\)
Using the chain rule for \(e^{xy}\) (treating \(y\) as constant, so \(\frac{d}{dx}(xy) = y\)):
\(\frac{\partial}{\partial x}(e^{xy}) = e^{xy} \cdot y\)
\(\frac{\partial}{\partial x}(\sin(x)) = \cos(x)\)
\(\frac{\partial}{\partial x}(y^3) = 0\) (since \(y^3\) is a constant with respect to \(x\))
So, \(\frac{\partial f}{\partial x} = y e^{xy} + \cos(x)\).

To find \(\frac{\partial f}{\partial y}\), we treat \(x\) as a constant:
\(\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(e^{xy}) + \frac{\partial}{\partial y}(\sin(x)) + \frac{\partial}{\partial y}(y^3)\)
Using the chain rule for \(e^{xy}\) (treating \(x\) as constant, so \(\frac{d}{dy}(xy) = x\)):
\(\frac{\partial}{\partial y}(e^{xy}) = e^{xy} \cdot x\)
\(\frac{\partial}{\partial y}(\sin(x)) = 0\) (since \(\sin(x)\) is a constant with respect to \(y\))
\(\frac{\partial}{\partial y}(y^3) = 3y^2\)
So, \(\frac{\partial f}{\partial y} = x e^{xy} + 3y^2\).

**Q3. Application Interpretation:**
In thermodynamics, the internal energy \(U\) of an ideal gas can be considered a function of temperature \(T\) and volume \(V\), \(U(T, V)\). The partial derivative \(\frac{\partial U}{\partial T}\) represents what physical property of the gas?

**Answer:**
The partial derivative \(\frac{\partial U}{\partial T}\) represents the change in internal energy per unit change in temperature when the volume is held constant. For an ideal gas, internal energy depends only on temperature. Therefore, \(\frac{\partial U}{\partial T}\) is equal to the **heat capacity at constant volume**, \(C_V\). This is a direct application in physical science, relating a mathematical concept to a physical property.

**Q4. Higher-Order Derivative Question:**
For the function \(g(x, y) = x^2 y^3 + \frac{x}{y}\), find the mixed partial derivative \(\frac{\partial^2 g}{\partial x \partial y}\).

**Answer:**
First, find \(\frac{\partial g}{\partial y}\):
\(\frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(x^2 y^3 + xy^{-1})\)
\(\frac{\partial g}{\partial y} = x^2 (3y^2) + x (-1 y^{-2})\)
\(\frac{\partial g}{\partial y} = 3x^2 y^2 - \frac{x}{y^2}\)

Now, differentiate this result with respect to \(x\) (treating \(y\) as a constant):
\(\frac{\partial^2 g}{\partial x \partial y} = \frac{\partial}{\partial x}(3x^2 y^2 - xy^{-2})\)
\(\frac{\partial^2 g}{\partial x \partial y} = 3y^2 (2x) - y^{-2} (1)\)
\(\frac{\partial^2 g}{\partial x \partial y} = 6xy^2 - \frac{1}{y^2}\)

*(Self-check using Clairaut's Theorem: If we calculate \(\frac{\partial g}{\partial x} = 2xy^3 + y^{-1}\), then \(\frac{\partial^2 g}{\partial y \partial x} = \frac{\partial}{\partial y}(2xy^3 + y^{-1}) = 2x(3y^2) + (-1)y^{-2} = 6xy^2 - \frac{1}{y^2}\). The results match, confirming Clairaut's theorem for this function.)*

**Q5. Exam-Oriented Question (Interpretation of Slope):**
Consider a surface described by \(z = f(x, y) = 100 - x^2 - y^2\). What is the slope of this surface at the point \((2, 1)\) in the direction parallel to the x-axis?

**Answer:**
The slope of the surface in the direction parallel to the x-axis is given by the partial derivative \(\frac{\partial z}{\partial x}\).
First, we find \(\frac{\partial z}{\partial x}\):
\(z = 100 - x^2 - y^2\)
\(\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(100 - x^2 - y^2)\)
Treating \(y\) as a constant, we get:
\(\frac{\partial z}{\partial x} = 0 - 2x - 0 = -2x\)

Now, we need to evaluate this slope at the point \((x, y) = (2, 1)\):
Slope at \((2, 1)\) in the x-direction = \(\frac{\partial z}{\partial x}\Big|_{(2,1)} = -2(2) = -4\).

The slope of the surface at the point \((2, 1)\) in the direction parallel to the x-axis is -4. This means that if you move from \((2, 1, f(2,1))\) a small distance in the positive x-direction, the z-value will decrease by approximately 4 times that distance.
