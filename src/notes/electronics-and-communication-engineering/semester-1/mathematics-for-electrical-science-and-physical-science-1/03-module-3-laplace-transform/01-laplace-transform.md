---
title: "Laplace Transform"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fc4"
status: "completed"
scrapedAt: "2026-05-23T17:34:59.008Z"
---
# Module 3: Laplace Transform

Welcome, everyone! In this module, we're diving into a powerful mathematical tool that's indispensable in electrical science and physical science: the **Laplace Transform**. Think of it as a sort of "super-calculator" for solving a wide range of problems, especially those involving differential equations that describe how systems change over time. You'll see how this connects directly to Course Outcome 3 (CO3), where we aim to compute Laplace transforms and apply them to solve Ordinary Differential Equations (ODEs) crucial in engineering. We'll also touch upon how this relates to CO2 (solving linear differential equations) by showing how the Laplace transform simplifies that process.

## 1. What is the Laplace Transform? The Big Idea

Imagine you have a complex, messy problem involving signals or systems that change with time. These are often described by differential equations. Solving these equations directly can be quite challenging, especially with initial conditions. The Laplace transform offers a brilliant alternative: it takes a function of time, $f(t)$, and transforms it into a function of a new variable, $s$, typically denoted as $F(s)$.

**Analogy Time:** Think of a musical instrument. When you play a note, it produces a complex sound wave in the "time domain" – it's a vibration that changes over time. The Laplace transform is like analyzing that sound in a different way, perhaps by breaking it down into its constituent frequencies. Suddenly, a complex, fluctuating wave in the time domain might become a simpler, algebraic expression in this new "frequency domain" (represented by $s$). This transformation often makes problems much easier to handle!

### Definition: The Formal Introduction

Mathematically, the Laplace transform of a function $f(t)$, where $t \ge 0$, is defined by the integral:

$$ \mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt $$

Here, $s$ is a complex variable. For this integral to converge, we usually require that $f(t)$ does not grow too quickly. Typically, we look for cases where $|f(t)| \le Me^{at}$ for some constants $M$ and $a$, which ensures that the exponential term $e^{-st}$ can "damp" the function $f(t)$ as $t \to \infty$. This condition defines the region of convergence for the transform.

**Why this specific integral?** The $e^{-st}$ term is key. When $s$ is large and positive, $e^{-st}$ becomes very small very quickly, "killing off" the contribution of $f(t)$ for large $t$. This is what allows us to handle functions that might otherwise not be integrable over an infinite interval.

### Connection to Our Course Objectives (CO3)

This definition is the bedrock of CO3. We need to be able to apply this integral to find the transformed function $F(s)$ for various $f(t)$ that appear in engineering, like steps, impulses, exponentials, and sinusoids. Don't worry, we won't be calculating this integral from scratch every time! We'll build a table of common transforms and learn properties that will help us transform more complex functions easily.

## 2. Common Laplace Transforms and Their Derivations

Let's start building our toolkit. We'll derive a few fundamental transforms. This process helps us understand the definition better.

### 2.1 The Transform of a Constant: $f(t) = c$

Let's find the Laplace transform of a simple constant function, say $f(t) = 1$.

$$ \mathcal{L}\{1\} = \int_0^\infty e^{-st} (1) dt = \left[ \frac{e^{-st}}{-s} \right]_0^\infty $$

For this to converge, we need $s > 0$. As $t \to \infty$, $e^{-st} \to 0$ if $s > 0$. At $t = 0$, $e^{-s(0)} = e^0 = 1$.

$$ \mathcal{L}\{1\} = (0) - \left( \frac{1}{-s} \right) = \frac{1}{s} $$

So, $\mathcal{L}\{1\} = \frac{1}{s}$ for $s > 0$.
If $f(t) = c$ (a non-zero constant), then $\mathcal{L}\{c\} = c \mathcal{L}\{1\} = \frac{c}{s}$.

**Remember this:** The transform of a constant is just the constant divided by $s$. Simple enough to start!

### 2.2 The Transform of $e^{at}$: $f(t) = e^{at}$

This one is extremely important in electrical circuits, especially when dealing with charging capacitors or decaying currents.

$$ \mathcal{L}\{e^{at}\} = \int_0^\infty e^{-st} e^{at} dt = \int_0^\infty e^{-(s-a)t} dt $$

For this integral to converge, we need $s-a > 0$, which means $s > a$.

$$ \mathcal{L}\{e^{at}\} = \left[ \frac{e^{-(s-a)t}}{-(s-a)} \right]_0^\infty $$

As $t \to \infty$, $e^{-(s-a)t} \to 0$ if $s > a$. At $t = 0$, $e^0 = 1$.

$$ \mathcal{L}\{e^{at}\} = (0) - \left( \frac{1}{-(s-a)} \right) = \frac{1}{s-a} $$

So, $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$ for $s > a$.

**Key takeaway:** The transform of $e^{at}$ is $\frac{1}{s-a}$. Notice how the $a$ in $e^{at}$ affects the denominator of $F(s)$. This is a crucial pattern we'll see repeated.

### 2.3 The Transform of $t^n$ (for integer $n \ge 0$): $f(t) = t^n$

This is where integration by parts becomes our friend, as seen in calculus courses (refer to Anton, Biven, Davis for those integral rules!).

Let's start with $n=1$:
$$ \mathcal{L}\{t\} = \int_0^\infty e^{-st} t dt $$
Using integration by parts ($\int u dv = uv - \int v du$):
Let $u = t$, $dv = e^{-st} dt$. Then $du = dt$, $v = \frac{e^{-st}}{-s}$.

$$ \mathcal{L}\{t\} = \left[ t \frac{e^{-st}}{-s} \right]_0^\infty - \int_0^\infty \frac{e^{-st}}{-s} dt $$
The term $\left[ t \frac{e^{-st}}{-s} \right]_0^\infty$ evaluates to $0 - 0 = 0$ (the $t e^{-st}$ term goes to zero as $t \to \infty$ for $s>0$).

$$ \mathcal{L}\{t\} = \frac{1}{s} \int_0^\infty e^{-st} dt = \frac{1}{s} \left[ \frac{e^{-st}}{-s} \right]_0^\infty = \frac{1}{s} \left( 0 - \frac{1}{-s} \right) = \frac{1}{s} \left( \frac{1}{s} \right) = \frac{1}{s^2} $$
So, $\mathcal{L}\{t\} = \frac{1}{s^2}$ for $s > 0$.

Now, let's generalize to $t^n$. By repeatedly applying integration by parts, or by recognizing a pattern related to the Gamma function (which is a generalization of the factorial), we can arrive at:

$$ \mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}} $$
This formula holds for integer $n \ge 0$. For $n=0$, $t^0=1$, so $\mathcal{L}\{1\} = \frac{0!}{s^{0+1}} = \frac{1}{s^1} = \frac{1}{s}$, which matches what we found earlier. For $n=1$, $\mathcal{L}\{t\} = \frac{1!}{s^{1+1}} = \frac{1}{s^2}$, also matching.

**Important to note:** The Gamma function, $\Gamma(z)$, is defined as $\Gamma(z) = \int_0^\infty x^{z-1} e^{-x} dx$. For positive integers $n$, $\Gamma(n+1) = n!$. So, the Laplace transform of $t^n$ can be written more generally as $\mathcal{L}\{t^n\} = \frac{\Gamma(n+1)}{s^{n+1}}$. This is covered in advanced texts like Kreyszig.

### 2.4 The Transform of Sinusoids: $\sin(\omega t)$ and $\cos(\omega t)$

These are vital for analyzing AC circuits and oscillations. We can derive them using the definition, but it's often easier to use Euler's formula: $e^{j\omega t} = \cos(\omega t) + j \sin(\omega t)$.

First, let's find the transform of $e^{j\omega t}$:
Using our rule $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$ with $a = j\omega$:

$$ \mathcal{L}\{e^{j\omega t}\} = \frac{1}{s-j\omega} $$

Now, recall that $\cos(\omega t) = \frac{e^{j\omega t} + e^{-j\omega t}}{2}$ and $\sin(\omega t) = \frac{e^{j\omega t} - e^{-j\omega t}}{2j}$.

Using the linearity of the Laplace transform (which we'll discuss next), we can write:

$$ \mathcal{L}\{\cos(\omega t)\} = \mathcal{L}\left\{\frac{e^{j\omega t} + e^{-j\omega t}}{2}\right\} = \frac{1}{2} \left( \mathcal{L}\{e^{j\omega t}\} + \mathcal{L}\{e^{-j\omega t}\} \right) $$
We already have $\mathcal{L}\{e^{j\omega t}\} = \frac{1}{s-j\omega}$. For $\mathcal{L}\{e^{-j\omega t}\}$, we replace $j\omega$ with $-j\omega$ in the denominator: $\mathcal{L}\{e^{-j\omega t}\} = \frac{1}{s-(-j\omega)} = \frac{1}{s+j\omega}$.

$$ \mathcal{L}\{\cos(\omega t)\} = \frac{1}{2} \left( \frac{1}{s-j\omega} + \frac{1}{s+j\omega} \right) $$
To combine these, find a common denominator:
$$ \mathcal{L}\{\cos(\omega t)\} = \frac{1}{2} \left( \frac{(s+j\omega) + (s-j\omega)}{(s-j\omega)(s+j\omega)} \right) = \frac{1}{2} \left( \frac{2s}{s^2 - (j\omega)^2} \right) $$
Since $(j\omega)^2 = j^2 \omega^2 = - \omega^2$, we get:
$$ \mathcal{L}\{\cos(\omega t)\} = \frac{1}{2} \left( \frac{2s}{s^2 + \omega^2} \right) = \frac{s}{s^2 + \omega^2} $$
So, $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$.

Similarly for $\sin(\omega t)$:
$$ \mathcal{L}\{\sin(\omega t)\} = \mathcal{L}\left\{\frac{e^{j\omega t} - e^{-j\omega t}}{2j}\right\} = \frac{1}{2j} \left( \mathcal{L}\{e^{j\omega t}\} - \mathcal{L}\{e^{-j\omega t}\} \right) $$
$$ \mathcal{L}\{\sin(\omega t)\} = \frac{1}{2j} \left( \frac{1}{s-j\omega} - \frac{1}{s+j\omega} \right) $$
$$ \mathcal{L}\{\sin(\omega t)\} = \frac{1}{2j} \left( \frac{(s+j\omega) - (s-j\omega)}{(s-j\omega)(s+j\omega)} \right) = \frac{1}{2j} \left( \frac{2j\omega}{s^2 + \omega^2} \right) = \frac{\omega}{s^2 + \omega^2} $$
So, $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$.

**Crucial for exams:** These formulas for sine and cosine are absolute must-knows. They are frequently tested. Make sure you can recall them instantly!

### 2.5 The Transform of the Unit Step Function: $u(t)$

The unit step function, often denoted as $u(t)$ or $H(t)$, is zero for $t<0$ and one for $t \ge 0$. It's like a switch that turns on at $t=0$.

$$ u(t) = \begin{cases} 0 & \text{for } t < 0 \\ 1 & \text{for } t \ge 0 \end{cases} $$

The Laplace transform is defined for $t \ge 0$, so we are essentially transforming $f(t) = 1$ for $t \ge 0$.
$$ \mathcal{L}\{u(t)\} = \int_0^\infty e^{-st} u(t) dt = \int_0^\infty e^{-st} (1) dt = \frac{1}{s} $$
for $s > 0$. This is the same as the transform of a constant, which makes sense because the unit step is essentially a constant value of 1 for the domain of the Laplace transform.

What if the step occurs at a different time, say $t=a$? This is the **shifted unit step function**, $u(t-a)$. It's zero for $t<a$ and one for $t \ge a$.
$$ \mathcal{L}\{u(t-a)\} = \int_0^\infty e^{-st} u(t-a) dt $$
Since $u(t-a) = 0$ for $t<a$, the integral starts from $a$:
$$ \mathcal{L}\{u(t-a)\} = \int_a^\infty e^{-st} (1) dt = \left[ \frac{e^{-st}}{-s} \right]_a^\infty $$
For convergence, we need $s > 0$.
$$ \mathcal{L}\{u(t-a)\} = (0) - \left( \frac{e^{-sa}}{-s} \right) = \frac{e^{-sa}}{s} $$
for $s > 0$ and $a \ge 0$.

**Think of this:** The $e^{-sa}$ term is the "memory" of when the step occurred. It's a factor that will play a big role when we use Laplace transforms to solve ODEs with initial conditions.

### 2.6 The Transform of the Dirac Delta Function: $\delta(t)$

The Dirac delta function is a very important concept in physical sciences and electrical engineering, representing an infinitely tall, infinitesimally narrow pulse of unit area, occurring at $t=0$. It's often used to model impulses (like a hammer blow or a voltage spike).

$$ \delta(t) = \begin{cases} \infty & \text{for } t = 0 \\ 0 & \text{for } t \neq 0 \end{cases} $$
with the property that $\int_{-\infty}^\infty \delta(t) dt = 1$.

The Laplace transform property is:
$$ \mathcal{L}\{\delta(t)\} = \int_0^\infty e^{-st} \delta(t) dt $$
Due to the property of the delta function, the integrand is zero everywhere except at $t=0$, where it's effectively "sampling" $e^{-st}$. So, the integral evaluates to the value of $e^{-st}$ at $t=0$.

$$ \mathcal{L}\{\delta(t)\} = e^{-s(0)} = 1 $$
for all $s$.

**This is incredibly simple but powerful!** The transform of an impulse is 1. This significantly simplifies problems involving impulses in ODEs. For a shifted delta function, $\delta(t-a)$:

$$ \mathcal{L}\{\delta(t-a)\} = \int_0^\infty e^{-st} \delta(t-a) dt = e^{-sa} $$
for $a \ge 0$.

## 3. Table of Common Laplace Transforms

As you can see, deriving them can be work. Fortunately, we have tables! Textbooks like Kreyszig and Bird’s Higher Engineering Mathematics provide extensive tables. Memorizing the most common ones is essential for exam success.

Here's a summary of what we've covered and a few more useful ones:

| $f(t)$                                 | $F(s) = \mathcal{L}\{f(t)\}$            | Condition         |
| :------------------------------------- | :------------------------------------- | :---------------- |
| $1$                                    | $\frac{1}{s}$                          | $s > 0$           |
| $t^n$ ($n=0, 1, 2, \dots$)             | $\frac{n!}{s^{n+1}}$                   | $s > 0$           |
| $e^{at}$                               | $\frac{1}{s-a}$                        | $s > a$           |
| $\sin(\omega t)$                       | $\frac{\omega}{s^2 + \omega^2}$        | $s > 0$           |
| $\cos(\omega t)$                       | $\frac{s}{s^2 + \omega^2}$           | $s > 0$           |
| $u(t)$                                 | $\frac{1}{s}$                          | $s > 0$           |
| $u(t-a)$ ($a \ge 0$)                   | $\frac{e^{-sa}}{s}$                    | $s > 0$           |
| $\delta(t)$                            | $1$                                    | All $s$           |
| $\delta(t-a)$ ($a \ge 0$)              | $e^{-sa}$                              | All $s$           |
| $e^{at}t^n$                            | $\frac{n!}{(s-a)^{n+1}}$               | $s > a$           |
| $e^{at}\sin(\omega t)$                 | $\frac{\omega}{(s-a)^2 + \omega^2}$    | $s > a$           |
| $e^{at}\cos(\omega t)$                 | $\frac{s-a}{(s-a)^2 + \omega^2}$     | $s > a$           |
| $\sinh(at) = \frac{e^{at}-e^{-at}}{2}$ | $\frac{a}{s^2 - a^2}$                  | $s > |a|$         |
| $\cosh(at) = \frac{e^{at}+e^{-at}}{2}$ | $\frac{s}{s^2 - a^2}$                  | $s > |a|$         |

Make sure to have a good table handy, as found in Kreyszig or Bird. These are your best friends for applying Laplace transforms quickly and accurately.

## 4. Properties of the Laplace Transform

Beyond having a table of transforms, the real power comes from understanding how the Laplace transform behaves with operations on the time-domain function $f(t)$. These properties allow us to transform combinations and modified versions of basic functions. This directly supports CO3 by providing methods to transform more complex ODEs.

### 4.1 Linearity

This is perhaps the most fundamental property. If we have a linear combination of functions, its Laplace transform is the same linear combination of their individual transforms.

If $f(t) = c_1 f_1(t) + c_2 f_2(t)$, then
$$ \mathcal{L}\{f(t)\} = c_1 \mathcal{L}\{f_1(t)\} + c_2 \mathcal{L}\{f_2(t)\} $$
or
$$ F(s) = c_1 F_1(s) + c_2 F_2(s) $$

**Example:** Transform $f(t) = 3e^{2t} - 5\sin(4t)$.
Using linearity and our known transforms:
$$ \mathcal{L}\{f(t)\} = 3 \mathcal{L}\{e^{2t}\} - 5 \mathcal{L}\{\sin(4t)\} $$
$$ F(s) = 3 \left( \frac{1}{s-2} \right) - 5 \left( \frac{4}{s^2 + 4^2} \right) $$
$$ F(s) = \frac{3}{s-2} - \frac{20}{s^2 + 16} $$
This property is essential for breaking down complex functions into simpler ones that we know how to transform.

### 4.2 First Shifting Theorem (Frequency Shifting)

This theorem relates $\mathcal{L}\{e^{at}f(t)\}$ to $\mathcal{L}\{f(t)\}$. We saw a special case when deriving $e^{at}$ transforms.

If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$.

**Analogy:** Think of $F(s)$ as representing the "frequency content" of $f(t)$. Multiplying $f(t)$ by $e^{at}$ in the time domain is like shifting that entire frequency content by $a$ in the $s$-domain.

**Example:** Find the Laplace transform of $e^{3t}\cos(2t)$.
We know $\mathcal{L}\{\cos(2t)\} = \frac{s}{s^2 + 2^2} = \frac{s}{s^2 + 4}$.
Here, $f(t) = \cos(2t)$ and $a=3$. So, we replace $s$ with $(s-3)$ in $F(s)$:
$$ \mathcal{L}\{e^{3t}\cos(2t)\} = F(s-3) = \frac{s-3}{(s-3)^2 + 4} $$

**Why is this useful?** Many physical systems involve damping or growth (which $e^{at}$ represents), superimposed on oscillatory behavior. This theorem handles exactly that.

### 4.3 Second Shifting Theorem (Time Shifting)

This property deals with the effect of delaying a function in time using the unit step function, $u(t-a)$.

If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$ for $a \ge 0$.

**Think about it:** $f(t-a)u(t-a)$ means that the function $f$ "starts" at time $a$. The $u(t-a)$ ensures it's zero before $a$. The $F(s)$ represents the transform of the original function $f(t)$, and $e^{-as}$ is the "cost" of delaying it by $a$.

**Example:** Find the Laplace transform of a pulse that is $5$ for $0 \le t \le 2$ and $0$ otherwise.
This pulse can be represented as $f(t) = 5[u(t) - u(t-2)]$.
Using linearity:
$$ \mathcal{L}\{f(t)\} = 5 \mathcal{L}\{u(t)\} - 5 \mathcal{L}\{u(t-2)\} $$
We know $\mathcal{L}\{u(t)\} = \frac{1}{s}$. For $\mathcal{L}\{u(t-2)\}$, we use the second shifting theorem with $a=2$ and $f(t)=1$ (since $u(t-2)$ is just $u(t)$ shifted). So, $F(s)=\mathcal{L}\{1\}=1/s$.
$$ \mathcal{L}\{u(t-2)\} = e^{-2s} \mathcal{L}\{1\} = e^{-2s} \frac{1}{s} $$
Therefore,
$$ \mathcal{L}\{f(t)\} = 5 \left( \frac{1}{s} \right) - 5 \left( \frac{e^{-2s}}{s} \right) = \frac{5}{s}(1 - e^{-2s}) $$

**Common Pitfall:** Be careful not to confuse the first and second shifting theorems. One shifts in the $s$-domain (frequency), the other in the $t$-domain (time).

### 4.4 Differentiation in the $s$-domain (Multiplication by $t$)

This property tells us how to find the transform of $t f(t)$.

If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{t f(t)\} = -\frac{dF}{ds}$.

**How to remember:** The multiplication by $t$ in the time domain introduces a derivative with respect to $s$ in the frequency domain, with a minus sign. Repeated multiplication by $t$ leads to higher derivatives.
$$ \mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n F}{ds^n} $$

**Example:** Find the transform of $t \sin(\omega t)$.
We know $\mathcal{L}\{\sin(\omega t)\} = F(s) = \frac{\omega}{s^2 + \omega^2}$.
Now, we need to differentiate $F(s)$ with respect to $s$:
$$ \frac{dF}{ds} = \frac{d}{ds} \left( \omega (s^2 + \omega^2)^{-1} \right) = \omega (-1) (s^2 + \omega^2)^{-2} (2s) = \frac{-2\omega s}{(s^2 + \omega^2)^2} $$
Therefore,
$$ \mathcal{L}\{t \sin(\omega t)\} = -\frac{dF}{ds} = - \left( \frac{-2\omega s}{(s^2 + \omega^2)^2} \right) = \frac{2\omega s}{(s^2 + \omega^2)^2} $$

This property is useful for transforming functions involving $t$ multiplying other standard functions, especially in solving ODEs.

### 4.5 Integration in the $s$-domain (Division by $t$)

This property is the inverse of the previous one.

If $F(s) = \int_s^\infty f(\sigma) d\sigma$ converges, then $\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(\sigma) d\sigma$.

**Think of it:** Division by $t$ in the time domain corresponds to integration with respect to $s$ in the frequency domain.

**Example:** Find the transform of $\frac{\sin(t)}{t}$.
First, we need $F(s) = \mathcal{L}\{\sin(t)\} = \frac{1}{s^2 + 1}$.
Now we need to integrate $F(s)$ from $s$ to $\infty$:
$$ \mathcal{L}\left\{\frac{\sin(t)}{t}\right\} = \int_s^\infty \frac{1}{\sigma^2 + 1} d\sigma $$
The integral of $\frac{1}{\sigma^2 + 1}$ is $\arctan(\sigma)$.
$$ \int_s^\infty \frac{1}{\sigma^2 + 1} d\sigma = [\arctan(\sigma)]_s^\infty = \lim_{b\to\infty} \arctan(b) - \arctan(s) $$
Since $\lim_{b\to\infty} \arctan(b) = \frac{\pi}{2}$:
$$ \mathcal{L}\left\{\frac{\sin(t)}{t}\right\} = \frac{\pi}{2} - \arctan(s) $$
This is equivalent to $\arctan(1/s)$ since $\arctan(x) + \arctan(1/x) = \pi/2$ for $x>0$.

### 4.6 Convolution Theorem

This is a more advanced but very powerful property. It relates the convolution of two functions in the time domain to the simple multiplication of their Laplace transforms in the $s$-domain.

The convolution of $f(t)$ and $g(t)$, denoted $(f*g)(t)$, is defined as:
$$ (f*g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau $$

The Convolution Theorem states:
If $F(s) = \mathcal{L}\{f(t)\}$ and $G(s) = \mathcal{L}\{g(t)\}$, then $\mathcal{L}\{(f*g)(t)\} = F(s)G(s)$.

**Significance:** This theorem is the bridge to solving non-homogeneous linear ODEs where the forcing function is complex. If the right-hand side of an ODE is a product of two functions' transforms, we can find the solution by taking the inverse transform of the convolution.

**Example:** Consider a system where the output $y(t)$ is related to the input $x(t)$ by the integral equation:
$y(t) = \int_0^t x(\tau) e^{-(t-\tau)} d\tau$.
This integral is exactly the convolution of $x(t)$ and $e^{-t}$.
Let $f(t) = x(t)$ and $g(t) = e^{-t}$. Then $y(t) = (x*g)(t)$.
Taking Laplace transforms:
$\mathcal{L}\{y(t)\} = \mathcal{L}\{x(t)\} \mathcal{L}\{e^{-t}\}$.
If $\mathcal{L}\{x(t)\} = X(s)$ and $\mathcal{L}\{e^{-t}\} = \frac{1}{s+1}$, then
$Y(s) = X(s) \frac{1}{s+1}$.
This is much easier than dealing with the integral directly!

## 5. Laplace Transform of Derivatives and Integrals

This is where the Laplace transform truly shines for solving ODEs (CO2 and CO3). It converts differentiation in the time domain into multiplication by $s$ in the frequency domain, and integration into division by $s$.

### 5.1 Transform of Derivatives

Let $F(s) = \mathcal{L}\{f(t)\}$.

**First Derivative:**
$$ \mathcal{L}\{f'(t)\} = sF(s) - f(0) $$
*Derivation Sketch:*
Start with the definition of $f'(t)$ integral: $\int_0^\infty e^{-st} f'(t) dt$.
Use integration by parts: $u = e^{-st}$, $dv = f'(t)dt$. Then $du = -s e^{-st} dt$, $v = f(t)$.
$$ \int_0^\infty e^{-st} f'(t) dt = [e^{-st} f(t)]_0^\infty - \int_0^\infty f(t) (-s e^{-st}) dt $$
Assuming $e^{-st}f(t) \to 0$ as $t \to \infty$:
$$ = (0 - e^0 f(0)) + s \int_0^\infty e^{-st} f(t) dt $$
$$ = -f(0) + s F(s) $$

**Second Derivative:**
$$ \mathcal{L}\{f''(t)\} = s \mathcal{L}\{f'(t)\} - f'(0) $$
$$ \mathcal{L}\{f''(t)\} = s(sF(s) - f(0)) - f'(0) $$
$$ \mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0) $$

**Generalization for n-th Derivative:**
$$ \mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \dots - f^{(n-1)}(0) $$

**Why this is Huge:** Look at the structure! A differential equation like $ay'' + by' + cy = g(t)$ becomes an algebraic equation in $s$:
$a(s^2 F(s) - s f(0) - f'(0)) + b(sF(s) - f(0)) + cF(s) = G(s)$.
We can then solve for $F(s)$ algebraically and finally find $f(t)$ using the inverse Laplace transform. This turns a calculus problem into an algebra problem!

### 5.2 Transform of Integrals

Let $f(t)$ be a function, and let $g(t) = \int_0^t f(\tau) d\tau$.

$$ \mathcal{L}\{g(t)\} = \mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s} $$
*Derivation Sketch:*
Consider $g'(t) = f(t)$ with $g(0) = 0$.
We know $\mathcal{L}\{g'(t)\} = s G(s) - g(0)$.
Since $g(0) = 0$, $\mathcal{L}\{g'(t)\} = s G(s)$.
Since $g'(t) = f(t)$, $\mathcal{L}\{g'(t)\} = \mathcal{L}\{f(t)\} = F(s)$.
Therefore, $s G(s) = F(s)$, which gives $G(s) = \frac{F(s)}{s}$.

**This also simplifies integral equations!**

## 6. Solving Differential Equations Using Laplace Transforms

This is the ultimate application for CO3. The process is straightforward once you master the properties:

**Steps:**

1.  **Transform the ODE:** Apply the Laplace transform to both sides of the differential equation. Use the linearity property and the transforms of derivatives. Remember to include the initial conditions in the transformed equation.
2.  **Solve for F(s):** The transformed equation will be an algebraic equation in $F(s)$. Rearrange it to solve for $F(s)$. This typically involves algebraic manipulation and partial fraction decomposition.
3.  **Inverse Laplace Transform:** Find the function $f(t)$ whose Laplace transform is $F(s)$. This is often the most challenging step and requires using the table of Laplace transforms and inverse properties.

**Example: Solve $y'' + 4y = \sin(t)$ with $y(0)=1$ and $y'(0)=0$.**

**Step 1: Transform the ODE**
Let $Y(s) = \mathcal{L}\{y(t)\}$.
$\mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0) = s^2 Y(s) - s(1) - 0 = s^2 Y(s) - s$.
$\mathcal{L}\{4y\} = 4Y(s)$.
$\mathcal{L}\{\sin(t)\} = \frac{1}{s^2+1}$.

The transformed equation is:
$(s^2 Y(s) - s) + 4Y(s) = \frac{1}{s^2+1}$

**Step 2: Solve for Y(s)**
Group terms with $Y(s)$:
$Y(s)(s^2 + 4) - s = \frac{1}{s^2+1}$
$Y(s)(s^2 + 4) = s + \frac{1}{s^2+1}$
$Y(s) = \frac{s}{s^2 + 4} + \frac{1}{(s^2 + 4)(s^2+1)}$

We need to decompose the second term using partial fractions.
Let $\frac{1}{(s^2 + 4)(s^2+1)} = \frac{As+B}{s^2+4} + \frac{Cs+D}{s^2+1}$.
Clearing denominators: $1 = (As+B)(s^2+1) + (Cs+D)(s^2+4)$.
Expanding: $1 = As^3 + As + Bs^2 + B + Cs^3 + 4Cs + Ds^2 + 4D$.
Grouping by powers of $s$: $1 = (A+C)s^3 + (B+D)s^2 + (A+4C)s + (B+4D)$.

Equating coefficients:
$s^3: A+C = 0 \implies C = -A$
$s^2: B+D = 0 \implies D = -B$
$s^1: A+4C = 0 \implies A+4(-A) = 0 \implies -3A = 0 \implies A=0$.
If $A=0$, then $C=0$.
$s^0: B+4D = 1 \implies B+4(-B) = 1 \implies -3B = 1 \implies B = -1/3$.
If $B=-1/3$, then $D = 1/3$.

So, $\frac{1}{(s^2 + 4)(s^2+1)} = \frac{-1/3}{s^2+4} + \frac{1/3}{s^2+1}$.

Now substitute back into $Y(s)$:
$Y(s) = \frac{s}{s^2 + 4} - \frac{1}{3} \frac{1}{s^2+4} + \frac{1}{3} \frac{1}{s^2+1}$

**Step 3: Inverse Laplace Transform**
We need to match these terms to our table.
$\mathcal{L}^{-1}\left\{\frac{s}{s^2+4}\right\} = \cos(2t)$.
$\mathcal{L}^{-1}\left\{\frac{1}{s^2+4}\right\} = \mathcal{L}^{-1}\left\{\frac{1}{2} \frac{2}{s^2+4}\right\} = \frac{1}{2}\sin(2t)$.
$\mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\} = \sin(t)$.

Applying the inverse transform:
$y(t) = \cos(2t) - \frac{1}{3} \left(\frac{1}{2}\sin(2t)\right) + \frac{1}{3} \sin(t)$
$y(t) = \cos(2t) - \frac{1}{6}\sin(2t) + \frac{1}{3}\sin(t)$.

And there you have it! The solution to the ODE, obtained through algebraic manipulation of its Laplace transform. This elegantly fulfills CO3.

## 7. Inverse Laplace Transform

Just as important as finding the transform is being able to go back from $F(s)$ to $f(t)$. This is called the **inverse Laplace transform**, denoted by $\mathcal{L}^{-1}\{F(s)\} = f(t)$.

We mostly use the table of transforms in reverse. However, for more complex $F(s)$, especially those resulting from partial fraction decomposition, we combine table lookups with the properties we've discussed.

**Key Techniques for Inverse Transform:**

*   **Partial Fraction Decomposition:** This is almost always necessary when $F(s)$ is a rational function (a polynomial divided by a polynomial). We break down complex $F(s)$ into simpler terms whose inverse transforms we know.
*   **Using Properties in Reverse:**
    *   If $F(s-a)$ is given, we find $f(t)$ and then multiply by $e^{at}$ (First Shifting Theorem).
    *   If $F(s)e^{-as}$ is given, we find $f(t)$ and then shift it by $a$, multiplying by $u(t-a)$ (Second Shifting Theorem).
    *   If $F(s)$ involves derivatives of a known transform, it might correspond to multiplication by $t$ (differentiation in $s$-domain, reversed).
    *   If $F(s)$ is an integral of a known transform, it might correspond to division by $t$ (integration in $s$-domain, reversed).

**Example:** Find $\mathcal{L}^{-1}\left\{\frac{s+1}{s^2+2s+5}\right\}$.
The denominator $s^2+2s+5$ does not factor nicely over real numbers. We need to complete the square: $s^2+2s+5 = (s^2+2s+1) + 4 = (s+1)^2 + 2^2$.
So, $F(s) = \frac{s+1}{(s+1)^2 + 2^2}$.
This form directly matches the First Shifting Theorem in reverse, for $\mathcal{L}\{e^{at}\cos(\omega t)\} = \frac{s-a}{(s-a)^2 + \omega^2}$.
Comparing, we have $s+1$ in the numerator (which corresponds to $s-a$, so $a=-1$, wait, no, this is $(s+1)$ term in numerator.
The form is $\frac{s-a}{(s-a)^2 + \omega^2}$. Here, the term affecting $s$ is $(s+1)$, so $s-a = s+1$, which means $a=-1$.
The denominator is $(s+1)^2 + 4 = (s+1)^2 + 2^2$, so $\omega = 2$.
Thus, the numerator needs to be $s-a$, which is $s-(-1) = s+1$. It is!
So, $f(t) = e^{-t}\cos(2t)$.

**Key Point:** Completing the square is a vital technique for inverse transforms when dealing with quadratic denominators that represent oscillatory or damped oscillatory behavior.

## 8. Connection to Course Outcomes

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly about Laplace transforms, the algebraic manipulations required after transforming ODEs (especially solving for $F(s)$ using partial fractions) often involve solving systems of linear equations, as discussed in earlier modules.
*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** The Laplace transform is a primary method for achieving this, as demonstrated in Section 6. It provides a systematic approach that handles initial conditions elegantly.
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** This entire module is dedicated to this outcome. We've learned to compute transforms of various functions and have seen how to apply them to solve ODEs, which are ubiquitous in electrical circuits, mechanical systems, and control theory.
*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** Laplace transforms are generally used for functions defined on $[0, \infty)$, whereas Fourier series are for periodic functions over all time. However, both are methods for representing and analyzing signals and systems, and understanding one can provide insight into the other's role in signal processing.

## Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual aspects and exam-style problems.

**Question 1 (Conceptual):**
What is the fundamental advantage of using the Laplace transform to solve linear ODEs with constant coefficients?

**Answer:** The fundamental advantage is that the Laplace transform converts a differential equation in the time domain ($t$) into an algebraic equation in the frequency domain ($s$). This algebraic equation is generally much easier to solve. Furthermore, the initial conditions are automatically incorporated into the transformed equation, simplifying the solution process significantly. This directly addresses CO2 and CO3.

**Question 2 (Table Lookup/Application):**
Find the Laplace transform of $f(t) = 5 \cos(3t) - 2e^{-4t} + t^2$.

**Answer:**
We use linearity and the standard transform formulas:
$\mathcal{L}\{f(t)\} = 5\mathcal{L}\{\cos(3t)\} - 2\mathcal{L}\{e^{-4t}\} + \mathcal{L}\{t^2\}$
From the table:
$\mathcal{L}\{\cos(3t)\} = \frac{s}{s^2 + 3^2} = \frac{s}{s^2+9}$
$\mathcal{L}\{e^{-4t}\} = \frac{1}{s-(-4)} = \frac{1}{s+4}$
$\mathcal{L}\{t^2\} = \frac{2!}{s^{2+1}} = \frac{2}{s^3}$

Therefore,
$\mathcal{L}\{f(t)\} = 5\left(\frac{s}{s^2+9}\right) - 2\left(\frac{1}{s+4}\right) + \frac{2}{s^3}$
$\mathcal{L}\{f(t)\} = \frac{5s}{s^2+9} - \frac{2}{s+4} + \frac{2}{s^3}$

**Question 3 (Application of Properties):**
Find the Laplace transform of $f(t) = t e^{2t} \sin(4t)$.

**Answer:**
This requires multiple properties. Let's break it down:
1.  **Base function:** $g(t) = \sin(4t)$. Its transform is $G(s) = \mathcal{L}\{\sin(4t)\} = \frac{4}{s^2+16}$.
2.  **Multiply by $e^{2t}$:** Using the first shifting theorem, $\mathcal{L}\{e^{2t}\sin(4t)\} = G(s-2) = \frac{4}{(s-2)^2+16}$. Let this new transform be $H(s)$.
3.  **Multiply by $t$:** Now we need $\mathcal{L}\{t e^{2t}\sin(4t)\}$. Using the property $\mathcal{L}\{t h(t)\} = -\frac{dH}{ds}$, where $h(t) = e^{2t}\sin(4t)$ and $H(s) = \frac{4}{(s-2)^2+16}$.

We need to differentiate $H(s)$:
$\frac{dH}{ds} = \frac{d}{ds} \left( 4((s-2)^2+16)^{-1} \right)$
$\frac{dH}{ds} = 4(-1) ((s-2)^2+16)^{-2} \cdot 2(s-2)$
$\frac{dH}{ds} = \frac{-8(s-2)}{((s-2)^2+16)^2}$

So, the Laplace transform of $f(t)$ is:
$\mathcal{L}\{f(t)\} = -\frac{dH}{ds} = - \left( \frac{-8(s-2)}{((s-2)^2+16)^2} \right) = \frac{8(s-2)}{((s-2)^2+16)^2}$

**Question 4 (Inverse Transform with Partial Fractions):**
Find the inverse Laplace transform of $F(s) = \frac{s+1}{(s-1)(s^2+1)}$.

**Answer:**
We need to decompose $F(s)$ using partial fractions.
$\frac{s+1}{(s-1)(s^2+1)} = \frac{A}{s-1} + \frac{Bs+C}{s^2+1}$
Multiply by $(s-1)(s^2+1)$:
$s+1 = A(s^2+1) + (Bs+C)(s-1)$
$s+1 = As^2 + A + Bs^2 - Bs + Cs - C$
$s+1 = (A+B)s^2 + (-B+C)s + (A-C)$

Equating coefficients:
$s^2: A+B = 0 \implies B = -A$
$s^1: -B+C = 1$
$s^0: A-C = 1 \implies C = A-1$

Substitute $B$ and $C$ into the $s^1$ equation:
$-(-A) + (A-1) = 1$
$A + A - 1 = 1$
$2A = 2$
$A = 1$

Now find $B$ and $C$:
$B = -A = -1$
$C = A-1 = 1-1 = 0$

So, $F(s) = \frac{1}{s-1} + \frac{-s}{s^2+1}$.

Now, find the inverse Laplace transform of each term:
$\mathcal{L}^{-1}\left\{\frac{1}{s-1}\right\} = e^t$
$\mathcal{L}^{-1}\left\{\frac{-s}{s^2+1}\right\} = -\mathcal{L}^{-1}\left\{\frac{s}{s^2+1}\right\} = -\cos(t)$

Therefore, $f(t) = e^t - \cos(t)$.

**Question 5 (Solving ODE using Laplace Transform):**
Solve the ODE $y' - 2y = e^t$ with the initial condition $y(0) = 1$.

**Answer:**
**Step 1: Transform the ODE**
Let $Y(s) = \mathcal{L}\{y(t)\}$.
$\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s) - 1$.
$\mathcal{L}\{-2y\} = -2Y(s)$.
$\mathcal{L}\{e^t\} = \frac{1}{s-1}$.

The transformed equation is:
$(sY(s) - 1) - 2Y(s) = \frac{1}{s-1}$

**Step 2: Solve for Y(s)**
$Y(s)(s-2) - 1 = \frac{1}{s-1}$
$Y(s)(s-2) = 1 + \frac{1}{s-1}$
$Y(s)(s-2) = \frac{s-1+1}{s-1} = \frac{s}{s-1}$
$Y(s) = \frac{s}{(s-1)(s-2)}$

**Step 3: Inverse Laplace Transform (using Partial Fractions)**
Decompose $Y(s)$:
$\frac{s}{(s-1)(s-2)} = \frac{A}{s-1} + \frac{B}{s-2}$
$s = A(s-2) + B(s-1)$

Set $s=1$: $1 = A(1-2) + B(0) \implies 1 = -A \implies A = -1$.
Set $s=2$: $2 = A(0) + B(2-1) \implies 2 = B \implies B = 2$.

So, $Y(s) = \frac{-1}{s-1} + \frac{2}{s-2}$.

Now, find the inverse transform:
$y(t) = \mathcal{L}^{-1}\left\{\frac{-1}{s-1}\right\} + \mathcal{L}^{-1}\left\{\frac{2}{s-2}\right\}$
$y(t) = -e^t + 2e^{2t}$.

This concludes our journey into the Laplace transform. It's a tool that, once mastered, will unlock many complex problems in your studies! Keep practicing the transforms and properties, and you'll be well-equipped for CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
