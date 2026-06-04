---
title: "Dirac delta function and its transform (Initial value problems involving unit step function and Dirac delta function are excluded)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fcc"
status: "completed"
scrapedAt: "2026-05-23T17:35:07.082Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 3: Laplace Transform

### Topic: The Dirac Delta Function and Its Transform

**(Note: Initial value problems involving unit step functions and Dirac delta functions are excluded from this topic's scope.)**

Welcome, everyone, to our deep dive into another fascinating concept in the Laplace Transform world: the Dirac Delta Function. This isn't just another mathematical curiosity; it's a powerful tool that allows us to model incredibly brief, intense phenomena that are commonplace in electrical engineering and physics. Think of a lightning strike, a hammer blow, or the sudden application of a voltage for an infinitesimal amount of time. How do we represent such events mathematically? That's where the Dirac delta function shines.

Our goal today is to understand what this function is, how it behaves, and most importantly, how to find its Laplace transform. This will directly link to **Course Outcome 3 (CO3)**: "Compute Laplace transform and apply it to solve ODEs arising in engineering." While we won't be solving ODEs with the delta function directly today (as per the exclusion), understanding its transform is a crucial building block for that later application.

### 1. Understanding the Dirac Delta Function: A "Naughty" Function

Imagine you have a very brief pulse of energy. Let's say it's a voltage pulse. It's on for a very, very short time, say from $t=0$ to $t=\Delta t$. The height of this pulse is such that the total energy (or area under the pulse) is constant, let's say it's 1.

So, if the pulse has a height of $1/\Delta t$ and a width of $\Delta t$, its area is $(1/\Delta t) \times \Delta t = 1$. As we make this pulse narrower and narrower (letting $\Delta t \to 0$), the height has to get taller and taller to keep the area at 1. What happens as $\Delta t$ approaches zero? The pulse becomes infinitely tall and infinitesimally narrow. This is the intuitive idea behind the Dirac delta function, often denoted as $\delta(t)$.

Mathematically, the Dirac delta function isn't a true function in the traditional sense. It's a *generalized function* or a *distribution*. This might sound a bit abstract, but think of it as a mathematical idealization. We can define it through its properties, particularly its *sifting property*, which is its most useful characteristic.

**Definition via Approximations:**

We can think of $\delta(t)$ as the limit of a sequence of functions. A common way to visualize this is using a rectangular pulse:

Let $R_\epsilon(t)$ be a rectangular pulse defined as:
$$
R_\epsilon(t) = \begin{cases} 1/\epsilon & 0 \le t \le \epsilon \\ 0 & \text{otherwise} \end{cases}
$$

Notice that the integral of $R_\epsilon(t)$ from $-\infty$ to $\infty$ is always 1, regardless of $\epsilon$.
$$
\int_{-\infty}^{\infty} R_\epsilon(t) dt = \int_{0}^{\epsilon} \frac{1}{\epsilon} dt = \left[ \frac{t}{\epsilon} \right]_0^\epsilon = \frac{\epsilon}{\epsilon} - 0 = 1
$$

As $\epsilon \to 0$, this pulse becomes infinitely tall and infinitely narrow at $t=0$, while its integral remains 1. This is the essence of $\delta(t)$.

Other common approximations include:
*   **Triangular pulses:** A pulse that rises linearly from 0 to $1/\epsilon$ over $[0, \epsilon/2]$ and then decreases linearly back to 0 over $[\epsilon/2, \epsilon]$.
*   **Gaussian pulses:** A function proportional to $e^{-at^2}$, scaled appropriately.

Kreyszig, in "Advanced Engineering Mathematics," introduces these approximations to build an understanding of this "generalized function." It's crucial to remember that $\delta(t)$ is *not* a function in the usual sense, meaning you can't just plug in a value for $t$ and get a specific output (e.g., $\delta(5)$ is not a meaningful concept in isolation). Its meaning arises from its behavior within an integral.

### 2. Key Properties of the Dirac Delta Function

The real power of $\delta(t)$ comes from its defining properties. These are the rules we play by when working with it.

**a) The Sifting Property:** This is arguably the most important property. It tells us how $\delta(t-a)$ "sifts" out the value of another function $f(t)$ at a specific point.

If $f(t)$ is continuous at $t=a$, then:
$$
\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)
$$

*   **Intuition:** Think of $\delta(t-a)$ as a needle that is infinitesimally sharp and spikes only at $t=a$. When you multiply $f(t)$ by this "needle," the product is zero everywhere except at $t=a$. At $t=a$, the "needle" is infinitely tall, but because we're taking the integral (area), the only value of $f(t)$ that contributes to the area is $f(a)$. It "sifts" through all the values of $f(t)$ and picks out just $f(a)$.

*   **Example:** Let's say we want to find the value of $f(t) = e^t \cos(t)$ at $t=\pi/2$ using the delta function.
    $$
    \int_{-\infty}^{\infty} e^t \cos(t) \delta(t-\pi/2) dt
    $$
    Using the sifting property, with $a = \pi/2$, the integral simply becomes $f(\pi/2)$.
    $$
    f(\pi/2) = e^{\pi/2} \cos(\pi/2) = e^{\pi/2} \times 0 = 0
    $$
    So, the value of the integral is 0.

**b) Symmetry Property:**
$$
\delta(t) = \delta(-t)
$$
The delta function is an even function. This means it's symmetric about the y-axis. The "spike" at $t=0$ is the same whether you approach it from the positive or negative side.

**c) Scaling Property:**
$$
\delta(at) = \frac{1}{|a|} \delta(t), \quad a \neq 0
$$
*   **Intuition:** If you scale the input to the delta function, you have to adjust its "strength" or height to keep the area normalized to 1. If you "compress" the function (e.g., $a>1$), it becomes narrower and taller. If you "stretch" it (e.g., $0<a<1$), it becomes wider and shorter. The $|a|$ in the denominator accounts for this.

*   **Example:** What is $\delta(2t)$?
    Using the scaling property with $a=2$:
    $$
    \delta(2t) = \frac{1}{|2|} \delta(t) = \frac{1}{2} \delta(t)
    $$

**d) Derivative Property (Sifting Property for Derivatives):** This is also very important when dealing with differential equations, though we are not solving them directly here. It states:
$$
\int_{-\infty}^{\infty} f(t) \delta'(t-a) dt = -f'(a)
$$
And in general, for the $n$-th derivative:
$$
\int_{-\infty}^{\infty} f(t) \delta^{(n)}(t-a) dt = (-1)^n f^{(n)}(a)
$$
*   **Intuition:** This property arises from integration by parts. The derivative of the delta function is even more "spiky" and localized. To get the value of $f(t)$ out, you actually need to differentiate $f(t)$ (and this introduces a negative sign for the first derivative, hence $-f'(a)$).

**e) Integral Property:**
$$
\int_{-\infty}^{t} \delta(\tau) d\tau = \begin{cases} 1 & t > 0 \\ 0 & t < 0 \end{cases} = u(t)
$$
Where $u(t)$ is the Heaviside unit step function. This shows that the integral of a delta function is a step function. This is how the unit step function and delta function are related, though we are focusing on the delta function itself.

### 3. The Laplace Transform of the Dirac Delta Function

Now for the main event: what is the Laplace transform of $\delta(t)$? This is where the Laplace transform's ability to handle sudden, impulsive inputs becomes evident.

Recall the definition of the Laplace transform of a function $f(t)$, for $t \ge 0$:
$$
\mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st} f(t) dt
$$

We are interested in $\mathcal{L}\{\delta(t-a)\}$. For our current scope, we'll focus on the most common case where the impulse is at $t=0$, so we'll find $\mathcal{L}\{\delta(t)\}$.

Let's apply the definition directly:
$$
\mathcal{L}\{\delta(t)\} = \int_{0}^{\infty} e^{-st} \delta(t) dt
$$

Now, we use the sifting property of the delta function. The sifting property is generally stated for an integral from $-\infty$ to $\infty$. However, for $t \ge 0$, $\delta(t)$ is zero for $t < 0$. So, the integral from $0$ to $\infty$ is effectively the same as from $-\infty$ to $\infty$ in terms of the delta function's contribution.

Specifically, the sifting property $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$ tells us that $\delta(t)$ acts as a "probe" at $t=0$ when $a=0$.

Consider the integral:
$$
\int_{0}^{\infty} e^{-st} \delta(t) dt
$$
Here, $f(t) = e^{-st}$. The delta function is $\delta(t) = \delta(t-0)$, so $a=0$.
The sifting property states that if $f(t)$ is continuous at $t=a$, the integral $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$.

Since $e^{-st}$ is continuous at $t=0$, and our integral starts at $0$, which includes the point $t=0$ where $\delta(t)$ is active, we can apply the sifting property. The integral will simply pick out the value of $e^{-st}$ at $t=0$.

$$
\int_{0}^{\infty} e^{-st} \delta(t) dt = e^{-s \cdot 0} = e^0 = 1
$$

**Therefore, the Laplace transform of the Dirac delta function is:**
$$
\mathcal{L}\{\delta(t)\} = 1
$$

This is a remarkably simple and powerful result! It means that an impulse input to a system, when transformed, becomes a constant '1' in the s-domain. This constant value is crucial when we analyze system responses to impulses.

**What about a shifted delta function?**
Let's consider $\mathcal{L}\{\delta(t-a)\}$ for $a > 0$.
$$
\mathcal{L}\{\delta(t-a)\} = \int_{0}^{\infty} e^{-st} \delta(t-a) dt
$$
Here, $f(t) = e^{-st}$ and $a$ is the point where $\delta(t-a)$ is active.
The integral is from $0$ to $\infty$. As long as $a > 0$, the point $t=a$ is within the integration interval.
Applying the sifting property, the integral becomes the value of $f(t)$ at $t=a$:
$$
\mathcal{L}\{\delta(t-a)\} = e^{-sa}
$$

**Key Results to Remember (Crucial for Exams!):**

*   **$\mathcal{L}\{\delta(t)\} = 1$**
*   **$\mathcal{L}\{\delta(t-a)\} = e^{-sa}$** (for $a \ge 0$)

These are fundamental and you should commit them to memory. They are directly related to **CO3** as they are core Laplace transforms.

### 4. Why is this useful? Connecting to Electrical Science and Physical Science

You might be thinking, "Why all this fuss about an infinitely tall, infinitesimally narrow spike?" The answer lies in how accurately it models real-world phenomena.

*   **Electrical Engineering:**
    *   **Impulse Response:** When you apply a very short voltage pulse (like a spark or a brief surge) to an electrical circuit, the response of that circuit to this pulse is called its *impulse response*. If the impulse is modeled by $\delta(t)$, the Laplace transform of the output will be the Laplace transform of the system's transfer function multiplied by $\mathcal{L}\{\delta(t)\}$, which is 1. So, the transform of the impulse response is simply the transfer function of the system! This is a cornerstone of system analysis.
    *   **Switching Events:** The abrupt closing or opening of a switch can be approximated by a delta function.

*   **Physics:**
    *   **Impacts:** Modeling the force exerted by a hammer hitting a nail, or a ball hitting a bat. The force is applied over a very short duration, and its effect (change in momentum) is what we're often interested in.
    *   **Point Sources:** In fields like electromagnetism, a charge or current concentrated at a single point can be represented using delta functions.

Think about a mass-spring system. If you hit the mass with a very short, sharp blow, the $\delta(t)$ function mathematically describes that blow. The Laplace transform allows us to analyze how the system (the mass-spring) will vibrate in response to that blow.

**Relating to Course Outcomes:**
As we've seen, understanding $\mathcal{L}\{\delta(t)\} = 1$ and $\mathcal{L}\{\delta(t-a)\} = e^{-sa}$ directly addresses **CO3**. These are the building blocks for applying Laplace transforms to engineering problems involving impulsive inputs. While we're excluding the solving of ODEs with these functions here, grasping these transforms is the prerequisite for that later skill. It also subtly supports **CO2** (solving ODEs with constant coefficients) because these functions often appear as forcing functions (right-hand side of the ODE) in such problems.

### 5. Summary and What to Remember

*   The Dirac delta function, $\delta(t)$, is a generalized function representing an idealized impulse – infinitely tall, infinitesimally narrow, with a total area of 1.
*   It's defined by its properties, especially the **sifting property**: $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$, provided $f(t)$ is continuous at $t=a$.
*   The most important Laplace transforms for this topic are:
    *   $\mathcal{L}\{\delta(t)\} = 1$
    *   $\mathcal{L}\{\delta(t-a)\} = e^{-sa}$ for $a \ge 0$.
*   These transforms are crucial for analyzing systems that experience sudden, short-lived inputs.

Remember this: when you see a $\delta(t)$ in a Laplace transform context, think "impulse," and its transform is '1'. When you see $\delta(t-a)$, think "delayed impulse," and its transform is $e^{-sa}$. This simplicity belies its immense power in modeling real-world phenomena.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, covering both concepts and potential exam scenarios.

**Question 1 (Conceptual):**
What is the primary mathematical property that defines the Dirac delta function's behavior when integrated with another function?

**Answer:**
The primary property is the **sifting property**: $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$. This property allows the delta function to "pick out" the value of the function $f(t)$ at the point where the delta function is non-zero (i.e., at $t=a$).

---

**Question 2 (Exam-Oriented - Direct Recall):**
Find the Laplace transform of $\delta(t-3)$.

**Answer:**
We use the property $\mathcal{L}\{\delta(t-a)\} = e^{-sa}$.
In this case, $a=3$.
Therefore, $\mathcal{L}\{\delta(t-3)\} = e^{-3s}$.

---

**Question 3 (Conceptual/Application Link):**
Briefly explain why the Laplace transform of a delta function is simply 1.

**Answer:**
The Laplace transform is defined as $\mathcal{L}\{f(t)\} = \int_{0}^{\infty} e^{-st} f(t) dt$. For $f(t) = \delta(t)$, we have $\mathcal{L}\{\delta(t)\} = \int_{0}^{\infty} e^{-st} \delta(t) dt$. Using the sifting property, where the delta function $\delta(t)$ acts at $t=0$, and $e^{-st}$ is continuous at $t=0$, the integral evaluates to the value of $e^{-st}$ at $t=0$. Since $e^{-s \cdot 0} = e^0 = 1$, the Laplace transform of $\delta(t)$ is 1. This reflects that an impulse input in the time domain (represented by $\delta(t)$) corresponds to a constant magnitude input in the Laplace domain (represented by 1), indicating that the impulse contributes equally across all frequencies in its Laplace representation.

---

**Question 4 (Exam-Oriented - Property Application):**
Evaluate the integral $\int_{-5}^{5} (t^2 + 2t + 1) \delta(t-2) dt$.

**Answer:**
We use the sifting property: $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$.
In this integral, $f(t) = t^2 + 2t + 1$ and $a=2$.
The integration limits are from -5 to 5. Since $a=2$ lies within the interval $[-5, 5]$, the sifting property is applicable.
The value of the integral is $f(2)$.
$f(2) = (2)^2 + 2(2) + 1 = 4 + 4 + 1 = 9$.
Therefore, $\int_{-5}^{5} (t^2 + 2t + 1) \delta(t-2) dt = 9$.

---

**Question 5 (Conceptual - Shifted Delta):**
How does the Laplace transform of $\delta(t-a)$ differ from that of $\delta(t)$, and what does this difference signify in terms of system analysis?

**Answer:**
The Laplace transform of $\delta(t)$ is 1, while the Laplace transform of $\delta(t-a)$ (for $a>0$) is $e^{-sa}$. The difference lies in the presence of the exponential term $e^{-sa}$. This term represents a time delay in the time domain. When a system is subjected to an impulse at $t=0$, its response is simply the system's transfer function. However, if the impulse is delayed and occurs at $t=a$, the system's response is the same as if the impulse occurred at $t=0$, but the entire response is shifted in time by $a$. The $e^{-sa}$ factor in the Laplace domain precisely models this time delay, making it possible to analyze the system's behavior when excited by impulses occurring at different times.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
