---
title: "Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
subject: "NETWORK THEORY"
module: "Module 3: Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da514"
status: "completed"
scrapedAt: "2026-05-23T17:41:12.923Z"
---
# NETWORK THEORY: MODULE 3 - LAPLACE TRANSFORMS AND TRANSIENT ANALYSIS

**(Focus: Laplace Transforms of Standard Signals and Common Functions)**

Welcome, everyone, to Module 3! We've spent our time so far building a strong foundation in analyzing circuits in the steady state. We learned about different techniques like mesh and node analysis (that’s our **CO1** starting point!), and we applied powerful network theorems like superposition, Thevenin, and Norton (**CO2**). Now, it's time to tackle something truly exciting: **transient analysis**.

What *is* transient analysis? Think about turning on a light switch. The light doesn't instantly jump to full brightness, does it? There’s a brief moment, a *transient* period, where the light bulb warms up, the current stabilizes, and the circuit settles into its steady state. Understanding this "settling down" period is crucial for designing systems that behave predictably and reliably. And to do this effectively, we need a powerful mathematical tool: the **Laplace Transform**. This module is all about mastering this tool, specifically its application to the signals and functions we commonly encounter in electrical circuits. This directly addresses our **CO3: Analyze transient behavior of electrical networks using Laplace transforms**.

---

## 1. Why Laplace Transforms? The Bridge from Time to Frequency (or 's') Domain

Before we dive into the mechanics of the Laplace transform, let’s appreciate *why* it's so useful. Circuits, especially those with inductors and capacitors (the components that store energy and cause those interesting transient behaviors), are often described by differential equations in the time domain.

Imagine a simple RL circuit with a voltage source. The governing equation might look something like:
$v(t) = Ri(t) + L \frac{di(t)}{dt}$

Now, solving differential equations directly can be quite challenging, especially as circuits get more complex. The Laplace transform acts as a magical bridge, transforming these differential equations in the time domain ($t$) into algebraic equations in a new domain called the *frequency* or *s-domain*.

Why is this helpful? Well, algebraic equations are *much* easier to solve! Once we solve the problem in the s-domain, we can then use another handy tool, the *inverse Laplace transform*, to bring our solution back to the time domain, giving us the circuit's behavior over time. It’s like translating a difficult language into one you understand fluently, solving the problem there, and then translating the answer back!

This transformation is key to analyzing transient behavior efficiently, which is the core of **CO3**.

---

## 2. Defining the Laplace Transform: The Integral That Changes Everything

The Laplace transform of a function $f(t)$, denoted as $F(s)$ or $\mathcal{L}\{f(t)\}$, is defined by the following integral:

$F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt$

Here, $s$ is a complex variable, $s = \sigma + j\omega$. The lower limit of integration is $0$, which is important because we're typically interested in circuit behavior starting from $t=0$, which is usually when a switch is closed or some event triggers the circuit's operation. The upper limit is $\infty$, as we often want to see the behavior over an extended period.

For this integral to converge, the function $f(t)$ must not grow too quickly. Generally, we require $|f(t)| \le Me^{at}$ for some constants $M$ and $a$. This condition ensures that the $e^{-st}$ term in the integral can suppress the growth of $f(t)$ as $t \to \infty$. The value of $a$ determines the *region of convergence* (ROC) for $s$.

**Think of it this way:** This integral is essentially taking your time-domain signal $f(t)$ and "weighing" it by $e^{-st}$ at every point in time. The resulting "weight" gives you a representation of the signal in the s-domain.

---

## 3. Laplace Transforms of Standard Signals and Common Functions

This is where we get our hands dirty and start building a toolkit of transforms. Knowing these common transforms is absolutely essential for exam success and for practical circuit analysis. Let's go through some of the most important ones, and I'll try to give you some intuition behind them.

### 3.1 The Unit Step Function, $u(t)$

The unit step function, often called the Heaviside step function, is fundamental. It's like a switch that is "off" before $t=0$ and "on" at $t=0$ and afterwards.

$u(t) = \begin{cases} 0 & t < 0 \\ 1 & t \ge 0 \end{cases}$

**Intuition:** It represents the sudden application of a signal at $t=0$. Think of flipping a light switch – the voltage/current only appears *after* you flip it.

Let's find its Laplace transform:
$\mathcal{L}\{u(t)\} = \int_0^\infty e^{-st} u(t) dt$
Since $u(t) = 1$ for $t \ge 0$, this becomes:
$\mathcal{L}\{u(t)\} = \int_0^\infty e^{-st} (1) dt = \int_0^\infty e^{-st} dt$
$= \left[ \frac{e^{-st}}{-s} \right]_0^\infty$
$= \left( \lim_{t\to\infty} \frac{e^{-st}}{-s} \right) - \left( \frac{e^{-s \cdot 0}}{-s} \right)$

For this limit to go to zero, we need the real part of $s$ ($\sigma$) to be greater than 0 (i.e., $s > 0$). If $s$ is positive, $e^{-st}$ decays to zero as $t \to \infty$.
So, the limit term is 0.
$= 0 - \frac{1}{-s} = \frac{1}{s}$

**Result:** $\mathcal{L}\{u(t)\} = \frac{1}{s}$, for $Re(s) > 0$.

**Remember this:** The Laplace transform of a simple "on" switch is $1/s$. This is our bread and butter!

### 3.2 The Exponential Function, $e^{-at}u(t)$

This function represents a signal that decays (or grows, if $a$ is negative) exponentially from $t=0$.

$f(t) = e^{-at}u(t)$

**Intuition:** Think about charging a capacitor through a resistor. The voltage across the capacitor doesn't jump instantaneously; it rises exponentially towards the source voltage. Or, consider a simple first-order RC or RL circuit response.

Let's transform it:
$\mathcal{L}\{e^{-at}u(t)\} = \int_0^\infty e^{-st} (e^{-at}u(t)) dt$
$= \int_0^\infty e^{-st} e^{-at} dt$ (since $u(t)=1$ for $t \ge 0$)
$= \int_0^\infty e^{-(s+a)t} dt$

This looks just like the integral for the unit step, but with $(s+a)$ instead of $s$. Applying the same logic:
$= \left[ \frac{e^{-(s+a)t}}{-(s+a)} \right]_0^\infty$

For this to converge, we need $Re(s+a) > 0$, which means $Re(s) > -a$.
$= 0 - \frac{e^0}{-(s+a)} = \frac{1}{s+a}$

**Result:** $\mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}$, for $Re(s) > -a$.

**Key takeaway:** Replacing $s$ with $(s+a)$ in the Laplace domain shifts the corresponding time-domain function by $-a$. This is a very important property we'll use later!

### 3.3 The Ramp Function, $tu(t)$

The ramp function is a signal that starts at zero at $t=0$ and increases linearly with time.

$f(t) = tu(t)$

**Intuition:** Imagine a conveyor belt moving at a constant speed, or a motor starting up and its speed increasing linearly. It's like a voltage source that gradually ramps up.

Let's find its transform using integration by parts for the integral $\int_0^\infty e^{-st} t dt$.
Let $u=t$ and $dv = e^{-st} dt$.
Then $du = dt$ and $v = \int e^{-st} dt = \frac{e^{-st}}{-s}$.

$\mathcal{L}\{tu(t)\} = \int_0^\infty e^{-st} t dt$
$= \left[ t \frac{e^{-st}}{-s} \right]_0^\infty - \int_0^\infty \frac{e^{-st}}{-s} dt$

The first term $\left[ t \frac{e^{-st}}{-s} \right]_0^\infty$:
At $t=0$, it's $0 \cdot \frac{1}{-s} = 0$.
At $t \to \infty$, we have $t e^{-st}$. For $Re(s)>0$, $e^{-st}$ decays faster than $t$ grows, so this term goes to 0. (This requires a bit more formal proof, often using L'Hopital's rule on $t/e^{st}$).

So, we are left with:
$= 0 - \int_0^\infty \frac{e^{-st}}{-s} dt = \frac{1}{s} \int_0^\infty e^{-st} dt$

And we already know $\int_0^\infty e^{-st} dt = \frac{1}{s}$.
So, $\frac{1}{s} \left( \frac{1}{s} \right) = \frac{1}{s^2}$.

**Result:** $\mathcal{L}\{tu(t)\} = \frac{1}{s^2}$, for $Re(s) > 0$.

**Quick tip for exams:** If you see $t$ multiplying a function, you often need integration by parts. Or, you can use a property called the "frequency differentiation" property: $\mathcal{L}\{t f(t)\} = -\frac{d}{ds} F(s)$.
If $f(t) = u(t)$, $F(s) = 1/s$.
Then $\mathcal{L}\{tu(t)\} = -\frac{d}{ds} (\frac{1}{s}) = -\left(-\frac{1}{s^2}\right) = \frac{1}{s^2}$. See? Much faster!

### 3.4 The $n^{th}$ Power of Time, $t^n u(t)$

Generalizing the ramp, consider $t^n u(t)$.
Using the frequency differentiation property again:
$\mathcal{L}\{t^n u(t)\} = \left(-\frac{d}{ds}\right)^n \mathcal{L}\{u(t)\} = \left(-\frac{d}{ds}\right)^n \left(\frac{1}{s}\right)$

Let's do it step-by-step:
For $n=1$: $-\frac{d}{ds}(s^{-1}) = -(-1)s^{-2} = s^{-2} = \frac{1}{s^2}$. Correct.
For $n=2$: $-\frac{d}{ds}(s^{-2}) = -(-2)s^{-3} = 2s^{-3} = \frac{2}{s^3}$. Wait, this doesn't seem right. Ah, it's $t^2$, not $2t$.
Let's re-derive $t^2 u(t)$:
$\mathcal{L}\{t^2 u(t)\} = -\frac{d}{ds} \mathcal{L}\{tu(t)\} = -\frac{d}{ds} \left(\frac{1}{s^2}\right) = -\left(-2s^{-3}\right) = 2s^{-3} = \frac{2}{s^3}$. Still not quite the factorial.

The correct property application is:
$\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)$.

So, for $f(t)=u(t)$ and $F(s)=1/s$:
$\mathcal{L}\{t^n u(t)\} = (-1)^n \frac{d^n}{ds^n} (s^{-1})$
$\frac{d}{ds}(s^{-1}) = -s^{-2}$
$\frac{d^2}{ds^2}(s^{-1}) = \frac{d}{ds}(-s^{-2}) = 2s^{-3}$
$\frac{d^3}{ds^3}(s^{-1}) = \frac{d}{ds}(2s^{-3}) = -6s^{-4}$
So, the $n^{th}$ derivative is $(-1)^n n! s^{-(n+1)}$.

Therefore,
$\mathcal{L}\{t^n u(t)\} = (-1)^n \left( (-1)^n n! s^{-(n+1)} \right) = n! s^{-(n+1)} = \frac{n!}{s^{n+1}}$.

**Result:** $\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$, for $Re(s) > 0$.

**Special case:** For $n=1$, this gives $\frac{1!}{s^{1+1}} = \frac{1}{s^2}$, which matches our ramp function.

**Remember this:** This generalized formula for $t^n u(t)$ is incredibly useful! For exams, you'll often see problems involving higher powers of $t$.

### 3.5 The Sinusoidal Function, $\sin(\omega t) u(t)$

What about oscillatory behavior? Like AC circuits or the ringing effect in RLC circuits.

$f(t) = \sin(\omega t) u(t)$

**Intuition:** This describes a signal that smoothly oscillates up and down, starting at zero at $t=0$.

We can derive this using Euler's formula: $\sin(\theta) = \frac{e^{j\theta} - e^{-j\theta}}{2j}$.
So, $\sin(\omega t) = \frac{e^{j\omega t} - e^{-j\omega t}}{2j}$.

$\mathcal{L}\{\sin(\omega t) u(t)\} = \mathcal{L}\left\{\frac{e^{j\omega t} u(t) - e^{-j\omega t} u(t)}{2j}\right\}$
Using the linearity of the Laplace transform:
$= \frac{1}{2j} \left[ \mathcal{L}\{e^{j\omega t} u(t)\} - \mathcal{L}\{e^{-j\omega t} u(t)\} \right]$

We know $\mathcal{L}\{e^{-at} u(t)\} = \frac{1}{s+a}$.
So, $\mathcal{L}\{e^{j\omega t} u(t)\}$ is $\frac{1}{s - j\omega}$ (replacing $a$ with $-j\omega$).
And $\mathcal{L}\{e^{-j\omega t} u(t)\}$ is $\frac{1}{s + j\omega}$ (replacing $a$ with $j\omega$).

$= \frac{1}{2j} \left[ \frac{1}{s - j\omega} - \frac{1}{s + j\omega} \right]$
Now, let's combine the fractions inside the bracket:
$= \frac{1}{2j} \left[ \frac{(s + j\omega) - (s - j\omega)}{(s - j\omega)(s + j\omega)} \right]$
$= \frac{1}{2j} \left[ \frac{s + j\omega - s + j\omega}{s^2 - (j\omega)^2} \right]$
$= \frac{1}{2j} \left[ \frac{2j\omega}{s^2 - (-1)\omega^2} \right]$
$= \frac{1}{2j} \left[ \frac{2j\omega}{s^2 + \omega^2} \right] = \frac{\omega}{s^2 + \omega^2}$

**Result:** $\mathcal{L}\{\sin(\omega t) u(t)\} = \frac{\omega}{s^2 + \omega^2}$, for $Re(s) > 0$.

### 3.6 The Cosinusoidal Function, $\cos(\omega t) u(t)$

Similarly, for the cosine function.

$f(t) = \cos(\omega t) u(t)$

**Intuition:** Similar to sine, but it starts at its peak value (or minimum, depending on phase) at $t=0$, rather than zero.

Using Euler's formula: $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$.
So, $\cos(\omega t) = \frac{e^{j\omega t} + e^{-j\omega t}}{2}$.

$\mathcal{L}\{\cos(\omega t) u(t)\} = \mathcal{L}\left\{\frac{e^{j\omega t} u(t) + e^{-j\omega t} u(t)}{2}\right\}$
$= \frac{1}{2} \left[ \mathcal{L}\{e^{j\omega t} u(t)\} + \mathcal{L}\{e^{-j\omega t} u(t)\} \right]$
$= \frac{1}{2} \left[ \frac{1}{s - j\omega} + \frac{1}{s + j\omega} \right]$
$= \frac{1}{2} \left[ \frac{(s + j\omega) + (s - j\omega)}{(s - j\omega)(s + j\omega)} \right]$
$= \frac{1}{2} \left[ \frac{2s}{s^2 + \omega^2} \right] = \frac{s}{s^2 + \omega^2}$

**Result:** $\mathcal{L}\{\cos(\omega t) u(t)\} = \frac{s}{s^2 + \omega^2}$, for $Re(s) > 0$.

**Quick comparison:** Notice the difference between sine and cosine transforms. Sine has $\omega$ in the numerator, and cosine has $s$. This is a key distinction that shows up in circuit analysis, especially when dealing with initial conditions.

### 3.7 The Impulse Function, $\delta(t)$

The Dirac delta function is a bit of a mathematical idealization, but it's incredibly useful for representing instantaneous events, like a very short voltage pulse. It's zero everywhere except at $t=0$, where it's infinitely high, with an area of 1.

$\delta(t) = \begin{cases} \infty & t = 0 \\ 0 & t \ne 0 \end{cases}$
and $\int_{-\infty}^\infty \delta(t) dt = 1$.

For our purposes, we consider it for $t \ge 0$, so $\delta(t)$ for $t \ge 0$ is often just $\delta(t)$ itself, assuming it's applied at $t=0$.

**Intuition:** Imagine hitting a bell with a hammer. It's a very short, sharp impact that delivers energy. In circuits, it can represent a sudden surge of voltage or current.

Let's transform it. For $t \ge 0$, we're interested in $\delta(t)$ where it has its non-zero value at $t=0$.
$\mathcal{L}\{\delta(t)\} = \int_0^\infty e^{-st} \delta(t) dt$

The sifting property of the delta function says $\int_a^b f(t) \delta(t-c) dt = f(c)$ if $a < c < b$. Here, our "peak" is at $t=0$.

$\mathcal{L}\{\delta(t)\} = \int_0^\infty e^{-st} \delta(t) dt$
Since the interval of integration is $[0, \infty)$, and the impulse is at $t=0$, the value $e^{-st}$ is evaluated at $t=0$.
At $t=0$, $e^{-s \cdot 0} = e^0 = 1$.
So, the integral is just 1.

**Result:** $\mathcal{L}\{\delta(t)\} = 1$.

**Crucial point:** The Laplace transform of an impulse is simply 1. This is extremely important when dealing with initial conditions that are represented as impulses.

---

## 4. Properties of the Laplace Transform: Your Secret Weapons

Knowing the transforms of basic signals is step one. Step two is understanding the *properties* of the Laplace transform. These properties allow us to transform more complex functions and signals by combining the basic ones. These are directly related to how we analyze circuits using Laplace, making them key for **CO3**.

### 4.1 Linearity

This is the most basic property, and we've already used it implicitly.
If $a$ and $b$ are constants, and $f(t)$ and $g(t)$ are functions, then:
$\mathcal{L}\{af(t) + bg(t)\} = a\mathcal{L}\{f(t)\} + b\mathcal{L}\{g(t)\}$
$\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$

**Analogy:** If you know how to transform a single resistor and a single inductor, linearity tells you that you can transform a circuit with multiple resistors and inductors by transforming each component and adding their transformed representations (impedances).

### 4.2 Frequency Shifting (or First Shifting Property)

We saw this when we transformed $e^{-at}u(t)$.
If $\mathcal{L}\{f(t)\} = F(s)$, then:
$\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$

**Intuition:** This property is vital for solving circuits with exponential forcing functions or responses. If you have a known response $F(s)$ and the input is multiplied by an exponential $e^{-at}$, the Laplace transform of the output simply shifts its $s$ variable by $+a$.

### 4.3 Time Shifting Property

This property deals with delayed versions of signals.
If $\mathcal{L}\{f(t)\} = F(s)$, then:
$\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$, for $a \ge 0$.

**Intuition:** Imagine a signal that is switched on after a delay. If your original signal $f(t)$ starts at $t=0$, then $f(t-a)u(t-a)$ is the same signal, but it's delayed by $a$ seconds. The $u(t-a)$ ensures it doesn't "appear" before time $a$. The Laplace transform shows that a time delay of $a$ seconds in the time domain is equivalent to multiplying the Laplace transform by $e^{-as}$.

This is useful for signals that are switched on or off at specific times other than $t=0$.

### 4.4 Convolution Property

This is a very powerful property, especially when dealing with systems. The output of a Linear Time-Invariant (LTI) system is the convolution of the input signal with the system's impulse response.

If $y(t) = f(t) * g(t)$, where $*$ denotes convolution, then:
$Y(s) = F(s)G(s)$

**Intuition:** Convolution in the time domain becomes simple multiplication in the s-domain. This is where Laplace transforms truly shine for system analysis. If we know the Laplace transform of an input signal $F(s)$ and the Laplace transform of a system's impulse response $G(s)$ (which is often related to the circuit's transfer function), we can find the Laplace transform of the output by simply multiplying $F(s)$ and $G(s)$.

$\mathcal{L}\{(f*g)(t)\} = F(s)G(s)$

### 4.5 Differentiation Property

This property is what converts time-domain differentiation into algebraic operations in the s-domain.
For the first derivative:
$\mathcal{L}\left\{\frac{df(t)}{dt}\right\} = sF(s) - f(0^-)$
Here, $f(0^-)$ represents the initial value of the function just before $t=0$.

For the second derivative:
$\mathcal{L}\left\{\frac{d^2f(t)}{dt^2}\right\} = s^2F(s) - sf(0^-) - f'(0^-)$
where $f'(0^-)$ is the initial value of the first derivative.

And in general:
$\mathcal{L}\left\{\frac{d^n f(t)}{dt^n}\right\} = s^n F(s) - s^{n-1}f(0^-) - s^{n-2}f'(0^-) - \dots - f^{(n-1)}(0^-)$

**Why is this crucial?** This is how differential equations become algebraic equations! When we write the circuit equations, terms like $L \frac{di}{dt}$ become $L(sI(s) - i(0^-))$, and $C \frac{dv}{dt}$ become $C(sV(s) - v(0^-))$. This allows us to solve for $I(s)$ and $V(s)$ algebraically. This is the heart of solving transient problems, directly linking to **CO3**.

### 4.6 Integration Property

The flip side of differentiation.
$\mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s}$

**Intuition:** Integration in the time domain becomes division by $s$ in the s-domain. This is handy for circuits with integrators or when dealing with currents through capacitors (which involve integration of voltage rate of change) or voltage across inductors (which involve integration of current).

### 4.7 Frequency Differentiation Property

We used this earlier to derive the transform of $t^n u(t)$.
If $\mathcal{L}\{f(t)\} = F(s)$, then:
$\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)$

**Usefulness:** This property allows us to find transforms of functions that are products of time powers and other functions. It's a shortcut for many common transforms.

### 4.8 Final Value Theorem

This theorem allows us to find the steady-state value of $f(t)$ directly from its Laplace transform $F(s)$, without having to perform the inverse transform.
If $f(t)$ is an LTI system response and all poles of $sF(s)$ lie in the left half of the s-plane (i.e., the system is stable), then:
$f(\infty) = \lim_{t \to \infty} f(t) = \lim_{s \to 0} sF(s)$

**Important Caveat:** This theorem only works for stable systems where $f(t)$ reaches a finite constant steady-state value. If the system is unstable or the response oscillates indefinitely, the theorem does not apply.

This is useful for checking if your transient response settles to the expected steady-state value.

---

## 5. Transforming Circuit Elements into the 's'-Domain: Impedances

The beauty of the Laplace transform is that it allows us to represent circuit elements not as differential equations, but as impedances in the s-domain. This makes circuit analysis in the s-domain very similar to AC steady-state analysis, just with $j\omega$ replaced by $s$.

### 5.1 Resistor (R)

The voltage-current relationship for a resistor is $v(t) = Ri(t)$.
Taking the Laplace transform:
$\mathcal{L}\{v(t)\} = \mathcal{L}\{Ri(t)\}$
$V(s) = R I(s)$
So, the impedance of a resistor in the s-domain is $Z_R(s) = \frac{V(s)}{I(s)} = R$. It's just its resistance value, as expected!

### 5.2 Inductor (L)

The voltage-current relationship for an inductor is $v(t) = L \frac{di(t)}{dt}$.
Taking the Laplace transform:
$\mathcal{L}\{v(t)\} = \mathcal{L}\left\{L \frac{di(t)}{dt}\right\}$
$V(s) = L \left( sI(s) - i(0^-) \right)$
$V(s) = sL I(s) - L i(0^-)$

Rearranging to find the impedance $Z_L(s) = \frac{V(s)}{I(s)}$:
$Z_L(s) = sL - \frac{L i(0^-)}{I(s)}$

This is where it gets interesting! The impedance of an inductor in the s-domain is $sL$. However, there's an additional term $-L i(0^-)$ that appears on the voltage side, which acts like a voltage source in series with the $sL$ impedance. This term accounts for the initial current stored in the inductor.

For analysis where we often assume zero initial conditions initially, or handle them separately, we primarily focus on the $sL$ term. This is a direct application of the differentiation property and the concept of initial conditions, central to **CO3**.

**Intuition:** An inductor "resists" changes in current. This resistance is proportional to $s$ (frequency). At DC ($s=0$), its impedance is 0 (a short circuit), and at high frequencies ($s \to \infty$), its impedance becomes very high (an open circuit).

### 5.3 Capacitor (C)

The current-voltage relationship for a capacitor is $i(t) = C \frac{dv(t)}{dt}$.
Taking the Laplace transform:
$\mathcal{L}\{i(t)\} = \mathcal{L}\left\{C \frac{dv(t)}{dt}\right\}$
$I(s) = C \left( sV(s) - v(0^-) \right)$
$I(s) = sCV(s) - C v(0^-)$

Rearranging to find the impedance $Z_C(s) = \frac{V(s)}{I(s)}$:
$V(s) = \frac{I(s)}{sC} + \frac{v(0^-)}{s}$
$Z_C(s) = \frac{1}{sC} + \frac{v(0^-)}{sI(s)}$

Similar to the inductor, the impedance of a capacitor in the s-domain is $\frac{1}{sC}$. The term $\frac{v(0^-)}{s}$ on the voltage side represents an initial voltage across the capacitor, which acts like a voltage source in series with the $\frac{1}{sC}$ impedance.

Again, for many analyses, we focus on the $\frac{1}{sC}$ term.

**Intuition:** A capacitor "resists" changes in voltage. This resistance is inversely proportional to $s$. At DC ($s=0$), its impedance is infinite (an open circuit), and at high frequencies ($s \to \infty$), its impedance approaches zero (a short circuit).

**Summary of s-domain impedances:**
*   Resistor: $R$
*   Inductor: $sL$
*   Capacitor: $\frac{1}{sC}$

These impedances, along with the properties of Laplace transforms, allow us to analyze circuits with initial conditions directly in the s-domain. This capability is fundamental to transient analysis and directly supports **CO3**.

---

## 6. Connecting to Course Outcomes

Let's see how this module's content directly feeds into our course objectives:

*   **CO1: Analyze electrical networks using mesh and node methods.** While this module doesn't directly teach mesh/node methods, the *equations* derived from mesh/node analysis in the time domain are what we *transform* into the s-domain. Knowing the standard signal transforms helps us construct the input forcing functions for these transformed equations.
*   **CO2: Apply network theorems to analyze electrical networks.** The Laplace transform is the tool that *enables* us to apply network theorems (like Thevenin, Norton, superposition) to circuits with inductors and capacitors in the context of transient analysis. For instance, finding the Thevenin equivalent of a complex circuit in the s-domain is a standard technique.
*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms.** This is the *direct and primary* outcome of this module. Every signal transform, every property, and the concept of s-domain impedances are all geared towards transforming time-domain differential equations into solvable algebraic equations in the s-domain, allowing us to find the transient response of circuits.
*   **CO4: Identify the network functions and parameters of single-port and two-port networks.** Network functions are often expressed as ratios of Laplace transforms of output voltage/current to input voltage/current. The transfer function of a circuit, for example, is typically derived by analyzing the circuit in the s-domain using these transforms and impedances.

---

## Sample Questions and Answers

Here are a few questions to test your understanding.

**Question 1 (Conceptual):**
Why is the Laplace transform a powerful tool for analyzing the transient behavior of electrical circuits?

**Answer:**
The Laplace transform converts time-domain integro-differential equations (which describe circuits with inductors and capacitors) into algebraic equations in the s-domain. Algebraic equations are significantly easier to solve than differential equations. Once the solution is found in the s-domain, the inverse Laplace transform brings it back to the time domain, providing the transient response. This simplification directly addresses the complexity of transient analysis, making circuits with energy storage elements manageable.

**Question 2 (Application):**
Find the Laplace transform of the function $f(t) = (3t^2 + 2e^{-4t})u(t)$.

**Answer:**
We can use the linearity property: $\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$.
We need the transforms of $t^2 u(t)$ and $e^{-4t}u(t)$.
From our standard transforms:
$\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$, so for $n=2$: $\mathcal{L}\{t^2 u(t)\} = \frac{2!}{s^{2+1}} = \frac{2}{s^3}$.
$\mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}$, so for $a=4$: $\mathcal{L}\{e^{-4t}u(t)\} = \frac{1}{s+4}$.

Now, applying linearity:
$\mathcal{L}\{(3t^2 + 2e^{-4t})u(t)\} = 3\mathcal{L}\{t^2 u(t)\} + 2\mathcal{L}\{e^{-4t}u(t)\}$
$= 3\left(\frac{2}{s^3}\right) + 2\left(\frac{1}{s+4}\right)$
$= \frac{6}{s^3} + \frac{2}{s+4}$.

This is the Laplace transform of the given function.

**Question 3 (Problem Solving - Exam oriented):**
A circuit has an impulse voltage source $v(t) = 5\delta(t)$ applied to a series combination of a resistor $R=10 \Omega$ and an inductor $L=2 H$. Assume the initial current through the inductor is $i(0^-) = 0$. Find the current $i(t)$ in the circuit.

**Answer:**
1.  **Transform the circuit to the s-domain:**
    *   The voltage source $v(t) = 5\delta(t)$ has Laplace transform $V(s) = 5$.
    *   The resistor $R=10 \Omega$ has impedance $Z_R(s) = R = 10$.
    *   The inductor $L=2 H$ has impedance $Z_L(s) = sL = 2s$. The initial condition $i(0^-)=0$ means there is no voltage source term arising from the initial current.

2.  **Write the circuit equation in the s-domain:**
    The components are in series, so their impedances add. The total impedance is $Z_{total}(s) = Z_R(s) + Z_L(s) = 10 + 2s$.
    The circuit equation is $V(s) = I(s) Z_{total}(s)$.
    $5 = I(s)(10 + 2s)$.

3.  **Solve for the current $I(s)$:**
    $I(s) = \frac{5}{10 + 2s} = \frac{5}{2(5 + s)} = \frac{2.5}{s+5}$.

4.  **Find the inverse Laplace transform to get $i(t)$:**
    We know $\mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}$.
    Here, $a=5$. So, $\mathcal{L}^{-1}\left\{\frac{1}{s+5}\right\} = e^{-5t}u(t)$.
    Therefore, $i(t) = 2.5 e^{-5t}u(t)$ Amperes.

This provides the transient current, which decays exponentially from an initial value of 2.5 A at $t=0$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
