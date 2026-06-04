---
title: "Vector valued function of single variable - derivative of vector 
valued function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cd4"
status: "completed"
scrapedAt: "2026-05-20T18:36:58.010Z"
---
# Module 3: Vector-Valued Functions of a Single Variable
## Topic: The Derivative of a Vector-Valued Function

Welcome, everyone! In this session, we're diving into the fascinating world of vector-valued functions of a single variable. Think of these functions as describing motion or paths through space. We've already learned how to represent these paths using vectors – positions, velocities, accelerations – all changing over time, or some other parameter. Today, we unlock a crucial tool for understanding *how* these things change: the **derivative of a vector-valued function**. This concept is absolutely fundamental, particularly in our fields of Electrical Science and Physical Science.

Remember Course Outcome 3 (CO3): "Compute the derivatives and line integrals of vector functions and to learn their applications." Our work today directly addresses the "compute the derivatives" part of CO3, and understanding this derivative is the gateway to applying it in various engineering problems, as hinted at by other course outcomes too!

### 1. What is a Vector-Valued Function? (A Quick Recap)

Before we differentiate, let's briefly revisit what we're dealing with. A vector-valued function of a single variable, let's call it **r**(t), takes a scalar input (like time, 't') and outputs a vector. This vector typically represents a position in 2D or 3D space.

We often write it in component form:
**r**(t) = < f(t), g(t), h(t) >

where f(t), g(t), and h(t) are themselves scalar-valued functions of 't', representing the x, y, and z components of the vector, respectively.

Think of a particle moving along a curve. **r**(t) is its position vector at time 't'. So, at t=0, it's at **r**(0), and at t=1, it's at **r**(1). The function describes the entire trajectory.

### 2. The Intuitive Idea: Rate of Change in Space

So, what does it mean to *differentiate* a vector function? Just like the derivative of a scalar function f(x) tells us the instantaneous rate of change of f with respect to x (its slope, its velocity if f(t) is position), the derivative of a vector function **r**(t) tells us the **instantaneous rate of change of the position vector with respect to its parameter 't'**.

Let's use an analogy. Imagine you're driving a car. Your position at any given moment 't' can be described by a vector **r**(t) from a reference point (say, your garage). The derivative of **r**(t) would tell you your **instantaneous velocity** – both your speed and your direction of travel at that exact moment. This is precisely what the derivative of a vector-valued function represents!

From our textbooks, like Anton, Biven, and Davis (12th ed.), the definition of the derivative of a vector-valued function is built upon the limit definition of the derivative for scalar functions. It's a natural extension.

### 3. Defining the Derivative: The Limit Approach

Let's formalize this. The derivative of **r**(t), denoted as **r'**(t) or d**r**/dt, is defined as:

**r'**(t) = lim (Δt → 0) [ **r**(t + Δt) - **r**(t) ] / Δt

Let's break this down.
*   **r**(t + Δt) - **r**(t) is the **change** in the position vector as 't' changes by a small amount Δt. This is a vector difference, representing the displacement from the position at 't' to the position at 't + Δt'.
*   Dividing by Δt gives us the **average rate of change** of the position vector over the interval Δt. This is essentially the average velocity.
*   Taking the limit as Δt approaches 0 squeezes this interval down to an instant, giving us the **instantaneous rate of change** – the velocity vector.

This might look familiar to your first calculus course! It's the same core idea.

### 4. Differentiating Component by Component: The Practical Rule

The beauty of vector calculus is that differentiation, like addition and scalar multiplication, can often be done component by component. If **r**(t) = < f(t), g(t), h(t) >, then its derivative **r'**(t) is simply:

**r'**(t) = < f'(t), g'(t), h'(t) >

This is a huge practical simplification. To find the derivative of a vector function, you just differentiate each component function individually. This is a rule you’ll use constantly, and it's well-explained in sources like Thomas' Calculus (15th ed.) and Bird's Higher Engineering Mathematics (9th ed.).

**Think of it this way:** If **r**(t) is your position, and its components are your x, y, and z coordinates, then your velocity's components are just the rates of change of your x, y, and z coordinates with respect to time. This makes perfect sense intuitively!

### 5. The Derivative as a Velocity Vector

As our analogy suggested, if **r**(t) represents the position of a particle at time 't', then **r'**(t) represents the **instantaneous velocity vector** of the particle at time 't'. This is a critical connection for physics and engineering applications.

*   **Velocity Vector:** **v**(t) = **r'**(t)
*   **Speed:** The magnitude of the velocity vector, |**v**(t)| = |**r'**(t)|. This tells you how fast the particle is moving.

Let's consider an example from physics: projectile motion.

**Example 1: Projectile Motion**
Suppose a projectile is launched with an initial velocity **v**₀ and position **r**₀. Under constant acceleration due to gravity **g** = <0, 0, -g>, its position vector at time 't' is given by:

**r**(t) = **r**₀ + **v**₀t + (1/2)gt²

Let's assume **r**₀ = <0, 0, 0> and **v**₀ = <vₓ, vᵧ, v₂> (initial velocity components). So,
**r**(t) = < vₓt, vᵧt, v₂t - (1/2)gt² >

To find the velocity vector **v**(t), we differentiate **r**(t) component by component:
f(t) = vₓt  => f'(t) = vₓ
g(t) = vᵧt  => g'(t) = vᵧ
h(t) = v₂t - (1/2)gt² => h'(t) = v₂ - gt

So, **v**(t) = **r'**(t) = < vₓ, vᵧ, v₂ - gt >

This result is exactly what we expect from physics: the horizontal components of velocity remain constant, while the vertical component changes linearly with time due to gravity. The speed would be |**v**(t)| = √(vₓ² + vᵧ² + (v₂ - gt)²).

This is a direct application of CO3, calculating the derivative of a vector function.

### 6. The Derivative as a Tangent Vector

Beyond velocity, the derivative **r'**(t) also provides crucial information about the *direction* of the curve traced by **r**(t). At any point **r**(t) on the curve, the derivative vector **r'**(t) points in the **tangent direction** to the curve at that point.

*   **Tangent Vector:** **T**(t) = **r'**(t) (if **r'**(t) is not the zero vector)

If **r'**(t) is not the zero vector, we can normalize it to get the **unit tangent vector**:

**T**(t) = **r'**(t) / |**r'**(t)|

This unit tangent vector tells us the direction of motion or the direction of the curve at a specific point, irrespective of the speed.

**Example 2: A Helix**
Consider the vector function describing a helix:

**r**(t) = < cos(t), sin(t), t >

Let's find the tangent vector and the unit tangent vector.

First, differentiate component-wise:
f(t) = cos(t) => f'(t) = -sin(t)
g(t) = sin(t) => g'(t) = cos(t)
h(t) = t => h'(t) = 1

So, the tangent vector is:
**r'**(t) = < -sin(t), cos(t), 1 >

Now, let's find the magnitude of **r'**(t):
|**r'**(t)| = √((-sin(t))² + (cos(t))² + 1²)
|**r'**(t)| = √(sin²(t) + cos²(t) + 1)
Using the identity sin²(t) + cos²(t) = 1:
|**r'**(t)| = √(1 + 1) = √2

The unit tangent vector is:
**T**(t) = **r'**(t) / |**r'**(t)| = < -sin(t), cos(t), 1 > / √2
**T**(t) = < -sin(t)/√2, cos(t)/√2, 1/√2 >

What does this mean? At any point 't' on the helix, the vector **r'**(t) is tangent to the path. For instance, at t=0, **r**(0) = <1, 0, 0>. The tangent vector is **r'**(0) = <0, 1, 1>. This vector is pointing upwards and in the positive y-direction, which is exactly what you'd expect as the helix spirals around the z-axis. The speed is constant (√2), so the unit tangent vector **T**(t) is the same as the tangent vector divided by √2. This constant speed is interesting!

This tangent vector concept is fundamental for understanding curves in space, a key part of CO3.

### 7. Properties of Vector Derivatives

Just like with scalar derivatives, vector derivatives follow several important rules. These are essential for working with more complex vector functions and are covered in detail in Kreyszig's "Advanced Engineering Mathematics" (10th ed.) and Ramana's "Higher Engineering Mathematics" (39th ed.).

Let **u**(t) and **v**(t) be differentiable vector-valued functions, and let c be a scalar constant.

*   **Constant Multiple Rule:** d/dt [c**u**(t)] = c**u'**(t)
    *   *Think:* If you double the path, you double the velocity at every point. Simple scaling.

*   **Sum/Difference Rule:** d/dt [**u**(t) ± **v**(t)] = **u'**(t) ± **v'**(t)
    *   *Think:* The rate of change of the sum of two motions is the sum of their individual rates of change. Imagine walking and then riding a bike; your total velocity is the sum of your walking velocity and your biking velocity.

*   **Scalar Multiple Rule:** d/dt [c(t)**u**(t)] = c'(t)**u**(t) + c(t)**u'**(t)
    *   *Think:* This is like the product rule for scalars. If your speed c(t) is changing, and your direction **u**(t) is changing, the rate of change of your vector **c**(t)**u**(t) depends on both.

*   **Dot Product Rule:** d/dt [**u**(t) ⋅ **v**(t)] = **u'**(t) ⋅ **v**(t) + **u**(t) ⋅ **v'**(t)
    *   *Think:* Another product rule. This is important when analyzing how the angle or projection between two moving vectors changes.

*   **Cross Product Rule:** d/dt [**u**(t) × **v**(t)] = **u'**(t) × **v**(t) + **u**(t) × **v'**(t)
    *   *Think:* The product rule for cross products. Again, crucial for understanding how the "area swept" by two moving vectors changes.

**Important Note:** There is **no quotient rule** for vector products (dot or cross). Division by a vector function is not generally defined.

### 8. Differentiation of Scalar Triple Product

For our engineering applications, particularly in fields like fluid dynamics or electromagnetism (though we focus on scalar variables here), understanding the derivative of scalar triple products can be useful. If we have three vector functions **a**(t), **b**(t), and **c**(t), the scalar triple product is **a**(t) ⋅ (**b**(t) × **c**(t)). Applying the dot product and cross product rules, we get:

d/dt [**a**(t) ⋅ (**b**(t) × **c**(t))] = **a'**(t) ⋅ (**b**(t) × **c**(t)) + **a**(t) ⋅ [**b'**(t) × **c**(t) + **b**(t) × **c'**(t)]

This can be simplified using the properties of determinants and scalar triple products, but the core is applying the derivative rules.

### 9. Connection to Course Outcomes and Key Takeaways

Let's tie this all together with our course objectives.

*   **CO3: Compute the derivatives of vector functions and to learn their applications.** We've seen *how* to compute derivatives (component-wise) and their immediate interpretation as velocity and tangent vectors. This is directly addressed.
*   **Application to other COs:** Understanding these derivatives is crucial for analyzing motion in physical systems and understanding how quantities change in electrical circuits described by vector quantities. For instance, in electromagnetic field theory, the rate of change of magnetic flux (related to vector fields) is often involved, which might implicitly use vector derivatives. Even in CO1, while it focuses on multivariable *scalar* functions, the tools of calculus and understanding rates of change are universal.

**Key Things to Remember:**

1.  **Definition:** The derivative of **r**(t) is the limit of the difference quotient, just like scalar calculus.
2.  **Calculation:** Differentiate component by component: **r'**(t) = <f'(t), g'(t), h'(t)>.
3.  **Physical Meaning:** **r'**(t) is the **velocity vector** if **r**(t) is the position vector. Its magnitude is the **speed**.
4.  **Geometric Meaning:** **r'**(t) is a **tangent vector** to the curve **r**(t).
5.  **Rules:** The derivative rules for sums, scalar multiples, dot products, and cross products are analogous to scalar calculus, but there's no quotient rule for vectors.

Mastering these concepts is vital for progressing in this module and applying calculus to real-world problems in science and engineering.

---

### Sample Questions with Answers

**Conceptual Question 1:**
If **r**(t) represents the position vector of a particle moving in space, what does **r'**(t) represent, and what does its magnitude, |**r'**(t)|, represent?

**Answer:**
**r'**(t) represents the **instantaneous velocity vector** of the particle at time 't'. It tells us both the speed and the direction of motion.
The magnitude, |**r'**(t)|, represents the **speed** of the particle at time 't', which is the rate at which the distance traveled is changing.

**Conceptual Question 2:**
True or False: The derivative of the cross product of two vector functions **u**(t) and **v**(t) is simply **u'**(t) × **v'**(t). Justify your answer.

**Answer:**
False. The derivative of a cross product follows a product rule similar to scalar calculus:
d/dt [**u**(t) × **v**(t)] = **u'**(t) × **v**(t) + **u**(t) × **v'**(t).
You must account for the derivative of each function in the product.

**Calculational Question 1:**
Find the derivative of the vector function **r**(t) = <t³, 2t², 5t> and evaluate it at t = 1.

**Solution:**
We differentiate each component with respect to 't':
d/dt (t³) = 3t²
d/dt (2t²) = 4t
d/dt (5t) = 5

So, **r'**(t) = <3t², 4t, 5>.

Now, we evaluate at t = 1:
**r'**(1) = <3(1)², 4(1), 5> = <3, 4, 5>.

**Calculational Question 2:**
Find the unit tangent vector for the curve given by **r**(t) = <eᵗ, e⁻ᵗ, √2t>.

**Solution:**
First, find the derivative **r'**(t) component-wise:
d/dt (eᵗ) = eᵗ
d/dt (e⁻ᵗ) = -e⁻ᵗ
d/dt (√2t) = √2

So, **r'**(t) = <eᵗ, -e⁻ᵗ, √2>.

Next, find the magnitude of **r'**(t):
|**r'**(t)| = √((eᵗ)² + (-e⁻ᵗ)² + (√2)²)
|**r'**(t)| = √(e²ᵗ + e⁻²ᵗ + 2)

Notice that e²ᵗ + 2 + e⁻²ᵗ is a perfect square: (eᵗ + e⁻ᵗ)².
So, |**r'**(t)| = √((eᵗ + e⁻ᵗ)²) = eᵗ + e⁻ᵗ (since eᵗ and e⁻ᵗ are always positive, their sum is positive).

Finally, the unit tangent vector **T**(t) is **r'**(t) divided by its magnitude:
**T**(t) = <eᵗ, -e⁻ᵗ, √2> / (eᵗ + e⁻ᵗ)
**T**(t) = < eᵗ / (eᵗ + e⁻ᵗ), -e⁻ᵗ / (eᵗ + e⁻ᵗ), √2 / (eᵗ + e⁻ᵗ) >

This can also be written as:
**T**(t) = < (e²ᵗ) / (e²ᵗ + 1), -1 / (e²ᵗ + 1), √2 / (e²ᵗ + 1) >
by multiplying the numerator and denominator of each component by eᵗ.
