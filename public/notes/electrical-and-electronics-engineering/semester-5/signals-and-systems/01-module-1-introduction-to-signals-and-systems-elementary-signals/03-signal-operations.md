---
title: "Signal operations."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361cc"
status: "completed"
scrapedAt: "2026-05-23T16:23:40.055Z"
---
# SIGNALS AND SYSTEMS: Module 1 - Introduction to Signals and Systems: Elementary Signals

## Topic: Signal Operations

---

### 1. Introduction to Signal Operations (CO1: K2)

Signal operations are fundamental manipulations performed on signals to modify their characteristics, create new signals, or analyze their behavior. These operations are crucial for understanding how signals can be transformed and how these transformations affect systems. This topic aligns with Course Outcome 1 (CO1) by enabling the representation of signals in the time domain and performing mathematical operations on them.

**Key Concept:** Signal operations allow us to explore the properties and behaviors of signals by altering their amplitude, time axis, or combining them with other signals.

---

### 2. Types of Signal Operations

Signal operations can be broadly categorized into the following types:

#### 2.1 Amplitude Operations

These operations modify the vertical scaling or shifting of a signal.

*   **Scaling (Multiplication by a Constant):** Multiplying a signal $x(t)$ by a constant $A$ results in a scaled signal $y(t) = A \cdot x(t)$. This operation amplifies or attenuates the signal's amplitude.
    *   **Example:** If $x(t) = \sin(t)$, then $y(t) = 2 \sin(t)$ will have twice the amplitude.
    *   **Reference:** Haykin & Van Veen, Chapter 1, Section 1.3.1 "Signal Operations" mentions amplitude scaling as a basic operation.

*   **Addition:** Adding two signals $x_1(t)$ and $x_2(t)$ creates a new signal $y(t) = x_1(t) + x_2(t)$. This is often used in system analysis where multiple input signals or components are combined.
    *   **Example:** If $x_1(t) = t$ and $x_2(t) = \sin(t)$, then $y(t) = t + \sin(t)$.
    *   **Reference:** Oppenheim, Willsky & Nawab, Chapter 1, Section 1.3 "Signal Operations" illustrates signal addition.

*   **Subtraction:** Subtracting one signal from another, $y(t) = x_1(t) - x_2(t)$.
    *   **Example:** If $x_1(t) = e^{-t}$ and $x_2(t) = e^{-2t}$, then $y(t) = e^{-t} - e^{-2t}$.

*   **DC Offset (Addition of a Constant):** Adding a constant value $C$ to a signal $x(t)$ shifts its average value. $y(t) = x(t) + C$.
    *   **Example:** If $x(t) = \cos(t)$, then $y(t) = \cos(t) + 1$ shifts the signal upwards by 1 unit.

#### 2.2 Time Operations

These operations modify the horizontal scaling or shifting of a signal.

*   **Time Shifting:** Shifting a signal $x(t)$ by $t_0$ units.
    *   **Time Delay (Shift to the Right):** $y(t) = x(t - t_0)$, where $t_0 > 0$. The signal is delayed.
        *   **Example:** If $x(t)$ is a unit step function $u(t)$, then $x(t-2) = u(t-2)$ is a unit step delayed by 2 seconds.
    *   **Time Advance (Shift to the Left):** $y(t) = x(t + t_0)$, where $t_0 > 0$. The signal is advanced.
        *   **Example:** If $x(t)$ is a unit impulse $\delta(t)$, then $x(t+1) = \delta(t+1)$ is an impulse shifted to $-1$.
    *   **Reference:** Haykin & Van Veen, Chapter 1, Section 1.3.1 "Signal Operations" covers time shifting extensively.

*   **Time Scaling:** Scaling the independent variable $t$ by a factor $a$.
    *   **Compression:** $y(t) = x(at)$, where $|a| > 1$. The signal is compressed in time.
        *   **Example:** If $x(t)$ is a rectangular pulse of width 2, then $x(2t)$ will have a width of 1.
    *   **Expansion:** $y(t) = x(at)$, where $0 < |a| < 1$. The signal is expanded in time.
        *   **Example:** If $x(t)$ is a rectangular pulse of width 2, then $x(0.5t)$ will have a width of 4.
    *   **Flipping (Reversal):** $y(t) = x(-t)$. The signal is reversed about the vertical axis.
        *   **Example:** If $x(t) = e^{-t} u(t)$ (exponential decay for $t \ge 0$), then $x(-t) = e^{t} u(-t)$ (exponential growth for $t \le 0$).
    *   **Reference:** Ogata, Chapter 2, Section 2-1 "Time Domain Representation of Signals" discusses transformations like time shifting and scaling.

*   **Combination of Time Operations:** Multiple time operations can be combined. The order of operations matters.
    *   **Example:** To sketch $x(2t+1)$:
        1.  Time Scaling: $x(2t)$ (compress by 2)
        2.  Time Shifting: $x(2(t+1/2))$ or $x(2t+1)$ (shift left by 1/2).
        Alternatively:
        1.  Time Shifting: $x(t+1)$ (shift left by 1)
        2.  Time Scaling: $x(2(t+1)) = x(2t+2)$ (compress by 2). This is **incorrect** for the desired operation.
        Therefore, to obtain $x(at+b)$, it's often best to write it as $x(a(t + b/a))$ or $x(a(t - (-b/a)))$. This means scaling first by $a$, then shifting by $-b/a$.
    *   **Important Point:** For $x(at+b)$, first compress/expand by a factor of 'a', then shift by $-b/a$.

#### 2.3 Operations involving Multiplication

*   **Multiplication of Signals:** Multiplying two signals $x_1(t)$ and $x_2(t)$ results in $y(t) = x_1(t) \cdot x_2(t)$. This is a fundamental operation in many applications like modulation.
    *   **Example:** Amplitude modulation: $y(t) = A \cos(\omega_c t) \cdot m(t)$, where $m(t)$ is the message signal and $\cos(\omega_c t)$ is the carrier signal.
    *   **Reference:** Proakis & Manolakis, Chapter 1, Section 1.3 "Basic Signal Operations" covers signal multiplication.

*   **Modulation:** A process where the characteristics of a carrier signal (amplitude, frequency, or phase) are varied in accordance with a modulating signal. This is achieved through multiplication.

#### 2.4 Operations for Discrete-Time Signals

The same operations apply to discrete-time signals $x[n]$.

*   **Amplitude Operations:**
    *   Scaling: $y[n] = A \cdot x[n]$
    *   Addition: $y[n] = x_1[n] + x_2[n]$
    *   Subtraction: $y[n] = x_1[n] - x_2[n]$
    *   DC Offset: $y[n] = x[n] + C$

*   **Time Operations:**
    *   **Time Shifting:**
        *   Delay: $y[n] = x[n - n_0]$, $n_0 > 0$
        *   Advance: $y[n] = x[n + n_0]$, $n_0 > 0$
        *   **Example:** $x[n] = \{1, 2, 3\}$ for $n = \{0, 1, 2\}$. Then $x[n-1] = \{0, 1, 2, 3\}$ for $n = \{1, 2, 3\}$. (Assuming zeros for undefined values).
    *   **Time Scaling:**
        *   Compression: $y[n] = x[an]$, $|a| > 1$
        *   Expansion: $y[n] = x[an]$, $0 < |a| < 1$
        *   **Example:** If $x[n] = \{1, 2, 3, 4\}$ for $n = \{0, 1, 2, 3\}$. Then $x[2n] = \{1, 3\}$ for $n = \{0, 1\}$. (We pick samples at even indices).
    *   **Flipping (Reversal):** $y[n] = x[-n]$
        *   **Example:** If $x[n] = \{1, 2, 3\}$ for $n = \{0, 1, 2\}$. Then $x[-n] = \{3, 2, 1\}$ for $n = \{-2, -1, 0\}$.

*   **Combination of Time Operations for Discrete-Time:** Similar to continuous time, $x[an+b] = x[a(n+b/a)]$. First scale by 'a', then shift by $-b/a$.
    *   **Example:** To sketch $x[2n+1]$ from $x[n]$:
        1.  Scale: $x[2n]$. Take samples at even indices of $x[n]$.
        2.  Shift: $x[2(n+1/2)] = x[2n+1]$. This requires sampling $x[m]$ at $m = 2n+1$. Since $2n+1$ is always odd, we would only pick samples from $x[n]$ that correspond to odd indices if they existed. If $x[n]$ is defined only for integer $n$, then $x[2n+1]$ requires $2n+1$ to be a valid index.
        Alternatively, consider $x[n+1]$ (shift left by 1), then $x[2n+1]$ (scale by 2). This is $x[2n]$ after shifting $x[n]$ left by 1. This is also incorrect.
        The correct way: To sketch $x[an+b]$:
        1.  Consider $x[n+b]$ (shift $x[n]$ by $-b$).
        2.  Then scale the *index* of the shifted signal by $1/a$. This means sampling the shifted signal at $n/a$. This is equivalent to scaling the original signal's indices by $1/a$ and then shifting by $-b/a$.
        A more concrete approach: To find $y[n] = x[2n+1]$:
        We want to find the values of $x$ for specific arguments. The argument is $2n+1$.
        If $n=0$, argument is $1$, $y[0] = x[1]$.
        If $n=1$, argument is $3$, $y[1] = x[3]$.
        If $n=-1$, argument is $-1$, $y[-1] = x[-1]$.
        This means we are sampling $x$ at odd indices.

*   **Reference:** Nise, Chapter 2, Section 2.1 "Signals and Systems Representation" implicitly discusses signal operations when introducing signal types and their behavior. Dorf & Bishop, Chapter 3 "First-Order and Second-Order Linear Systems" uses signal operations as inputs to systems.

---

### 3. Examples and Visualizations

To better understand these operations, let's use the unit step function $u(t)$ and the unit impulse function $\delta(t)$.

**Example 1: Time Shifting and Scaling of $x(t) = u(t)$**

Let $x(t) = u(t)$.
*   $y(t) = x(t-2) = u(t-2)$: This is a unit step delayed by 2 seconds. It is 0 for $t<2$ and 1 for $t \ge 2$.
*   $y(t) = x(t+1) = u(t+1)$: This is a unit step advanced by 1 second. It is 0 for $t<-1$ and 1 for $t \ge -1$.
*   $y(t) = x(2t) = u(2t)$: For $u(2t)$ to be 1, $2t \ge 0$, which means $t \ge 0$. So $u(2t) = u(t)$. No change in shape, but this is specific to $u(t)$. Consider $x(t) = \text{rect}(t)$ (rectangular pulse from -1 to 1). Then $x(2t) = \text{rect}(2t)$ is a pulse from -0.5 to 0.5 (compressed).
*   $y(t) = x(0.5t) = u(0.5t)$: For $u(0.5t)$ to be 1, $0.5t \ge 0$, which means $t \ge 0$. So $u(0.5t) = u(t)$. Again, specific to $u(t)$. If $x(t) = \text{rect}(t)$, then $x(0.5t) = \text{rect}(0.5t)$ is a pulse from -2 to 2 (expanded).
*   $y(t) = x(-t) = u(-t)$: This is the unit step reversed. It is 1 for $-t \ge 0$, which means $t \le 0$. So $u(-t)$ is 1 for $t \le 0$ and 0 for $t > 0$. This is the opposite of the standard $u(t)$.

**Example 2: Time Shifting and Scaling of $x(t) = \text{rect}(t/2)$**

Let $x(t)$ be a rectangular pulse of width 4, centered at 0. It is 1 for $-2 < t < 2$ and 0 otherwise.
*   $y(t) = x(t-3) = \text{rect}((t-3)/2)$: This shifts the pulse 3 units to the right. It is 1 for $-2 < t-3 < 2$, which means $1 < t < 5$.
*   $y(t) = x(t+1) = \text{rect}((t+1)/2)$: This shifts the pulse 1 unit to the left. It is 1 for $-2 < t+1 < 2$, which means $-3 < t < 1$.
*   $y(t) = x(2t) = \text{rect}(2t/2) = \text{rect}(t)$: This compresses the pulse by a factor of 2. It is 1 for $-2 < t < 2$. The new width is 2.
*   $y(t) = x(0.5t) = \text{rect}(0.5t/2) = \text{rect}(t/4)$: This expands the pulse by a factor of 2. It is 1 for $-2 < 0.5t < 2$, which means $-4 < t < 4$. The new width is 8.
*   $y(t) = x(-t) = \text{rect}(-t/2)$: This reverses the pulse. Since $\text{rect}(-t/2) = \text{rect}(t/2)$, the shape remains the same.

**Example 3: Combination of Operations on $x(t) = u(t)$**

Let's sketch $y(t) = x(1 - t/2) = u(1 - t/2)$.
1.  Write in the form $x(a(t - t_0))$ or $x(a(t+t_0))$: $x(1 - t/2) = x(-(t/2 - 1)) = x(-(t/2) + 1)$.
    This is equivalent to $x(-(t-2)/2)$.
    So, $a = -1/2$ and $t_0 = 2$.
    *   Start with $u(t)$.
    *   Scale by $a=-1/2$: $u(t/2)$ (expansion by 2) and flip about the vertical axis $u(-t/2)$. This is 1 for $-t/2 \ge 0$, so $t \le 0$.
    *   Shift by $t_0=2$ to the right: $u(-(t-2)/2) = u(1 - t/2)$. This means the point where the step occurs is shifted from $t=0$ to $t=2$.
    So, $u(1 - t/2)$ is 1 for $1 - t/2 \ge 0$, which means $1 \ge t/2$, or $t \le 2$.
    The sketch is a step function that is 1 for $t \le 2$ and 0 for $t > 2$.

    **Alternative order of operations:**
    1.  Start with $u(t)$.
    2.  Shift by $-t_0 = -1$: $u(t+1)$. This is 1 for $t+1 \ge 0$, so $t \ge -1$.
    3.  Scale the *index* of the shifted signal by $1/a = 1/(-1/2) = -2$.
        This means we want to evaluate the shifted signal $u(\tau+1)$ at $\tau = -t/2$.
        So, $u(-t/2 + 1) = u(1 - t/2)$.
        This is indeed the same result. The key is to correctly apply the scaling and shifting to the argument of the signal.

    **Correct way to sketch $x(at+b)$:**
    *   $x(t) \rightarrow x(t+b)$ (shift left by $b$ if $b>0$, right if $b<0$)
    *   $x(t+b) \rightarrow x(a(t+b))$ (compress if $|a|>1$, expand if $|a|<1$)
    *   **OR**
    *   $x(t) \rightarrow x(at)$ (compress if $|a|>1$, expand if $|a|<1$)
    *   $x(at) \rightarrow x(a(t+b/a))$ (shift left by $b/a$ if $b/a>0$, right if $b/a<0$)

    Let's re-apply to $u(1 - t/2) = u(-t/2 + 1)$. Here $a = -1/2$, $b = 1$.
    Method 1: Shift first by $b=1$ (left by 1), then scale by $a=-1/2$.
        *   $u(t) \rightarrow u(t+1)$. This is 1 for $t \ge -1$.
        *   $u(t+1) \rightarrow u(at+1)$ is incorrect. We need to replace $t$ with $at$ in $u(t+1)$. So $u(at+1)$.
        *   With $a=-1/2$: $u(-t/2+1)$.
        *   This means we are evaluating the function $u(\tau+1)$ at $\tau = -t/2$.
        *   $u(\tau+1)$ is 1 for $\tau \ge -1$.
        *   So, we need $-t/2 \ge -1$, which means $t/2 \le 1$, or $t \le 2$.
        *   This gives $u(1-t/2)$ as 1 for $t \le 2$.

    Method 2: Scale first by $a=-1/2$, then shift by $b/a$.
        *   $u(t) \rightarrow u(at) = u(-t/2)$. This is 1 for $-t/2 \ge 0$, so $t \le 0$.
        *   The shift amount is $-b/a = -1 / (-1/2) = 2$.
        *   So we shift $u(-t/2)$ to the right by 2: $u(-(t-2)/2) = u(1-t/2)$.
        *   This means we are evaluating $u(-t/2)$ at $t-2$.
        *   $u(-t/2)$ is 1 for $-t/2 \ge 0$, so $t \le 0$.
        *   We need $-(t-2)/2 \ge 0$, which means $(t-2)/2 \le 0$, or $t-2 \le 0$, so $t \le 2$.
        *   This confirms the result.

    **Important Point:** For $x(at+b)$, it is generally safer to factor out 'a': $x(a(t+b/a))$. This implies scaling by $a$ first, then shifting by $-b/a$.

---

### 4. Practice Questions

1.  Let $x(t)$ be a signal. Sketch the following signals in terms of $x(t)$:
    a.  $y(t) = x(t+2)$
    b.  $y(t) = x(t-1)$
    c.  $y(t) = 2x(t)$
    d.  $y(t) = x(-t)$
    e.  $y(t) = x(2t)$
    f.  $y(t) = x(t/3)$

2.  Let $x(t)$ be a signal with the following shape: a pulse that is 1 from $t=-1$ to $t=1$, and 0 otherwise. Sketch $y(t)$ for:
    a.  $y(t) = x(t-2)$
    b.  $y(t) = x(2t)$
    c.  $y(t) = x(t/2+1)$
    d.  $y(t) = x(1-t)$

3.  Let $x[n]$ be a discrete-time signal given by $x[n] = \{1, 2, 3, 4\}$ for $n = \{0, 1, 2, 3\}$, and $x[n] = 0$ otherwise. Determine and sketch the following signals:
    a.  $y[n] = x[n-2]$
    b.  $y[n] = x[n+1]$
    c.  $y[n] = 3x[n]$
    d.  $y[n] = x[-n]$
    e.  $y[n] = x[2n]$
    f.  $y[n] = x[n/2]$ (Assume appropriate interpolation or definition for non-integer indices if needed, or state the valid indices). *Typically, for discrete-time scaling $x[an]$, we only consider integer values of $n$ such that $an$ is a valid index for $x$.*

4.  Sketch $y[n] = x[2n-2]$ given $x[n] = \{1, 2, 3, 4, 5, 6\}$ for $n = \{0, 1, 2, 3, 4, 5\}$.

---

### 5. Answers to Practice Questions

1.  **General shapes:**
    a.  $y(t) = x(t+2)$: Shift $x(t)$ to the left by 2 units.
    b.  $y(t) = x(t-1)$: Shift $x(t)$ to the right by 1 unit.
    c.  $y(t) = 2x(t)$: Scale the amplitude of $x(t)$ by 2.
    d.  $y(t) = x(-t)$: Flip $x(t)$ about the vertical axis.
    e.  $y(t) = x(2t)$: Compress $x(t)$ horizontally by a factor of 2.
    f.  $y(t) = x(t/3)$: Expand $x(t)$ horizontally by a factor of 3.

2.  Let $x(t) = \text{rect}(t/2)$ (pulse from -1 to 1, value 1).
    a.  $y(t) = x(t-2) = \text{rect}((t-2)/2)$: Shifted to the right by 2. Pulse from $1$ to $3$.
    b.  $y(t) = x(2t) = \text{rect}(2t/2) = \text{rect}(t)$: Compressed by 2. Pulse from $-0.5$ to $0.5$.
    c.  $y(t) = x(t/2+1) = x(\frac{1}{2}(t+2)) = \text{rect}(\frac{1}{2}(t/2+1)) = \text{rect}(\frac{t}{4}+1)$:
        Rewrite as $x(0.5(t+2))$. Scale by 0.5 (expand by 2), then shift left by 2.
        Original pulse: $-1 < t < 1$.
        After expansion $x(t/2)$: $-2 < t < 2$.
        After shifting left by 2: $x((t+2)/2)$: $-2 < t+2 < 2 \implies -4 < t < 0$.
        The sketch is a pulse of value 1 from $t=-4$ to $t=0$.
    d.  $y(t) = x(1-t) = x(-(t-1))$:
        Rewrite as $x(-1(t-1))$. Scale by -1 (flip) then shift right by 1.
        Original pulse: $-1 < t < 1$.
        Flip $x(-t)$: pulse from $-1$ to $1$ (no change for $\text{rect}(t/2)$ as it's symmetric).
        Shift right by 1: $x(-(t-1))$: $-1 < -(t-1) < 1 \implies -1 < -t+1 < 1 \implies -2 < -t < 0 \implies 0 < t < 2$.
        The sketch is a pulse of value 1 from $t=0$ to $t=2$.

3.  $x[n] = \{1, 2, 3, 4\}$ for $n = \{0, 1, 2, 3\}$.
    a.  $y[n] = x[n-2]$: Shift right by 2. $y[n] = \{0, 0, 1, 2, 3, 4\}$ for $n = \{0, 1, 2, 3, 4, 5\}$.
    b.  $y[n] = x[n+1]$: Shift left by 1. $y[n] = \{2, 3, 4, 0\}$ for $n = \{0, 1, 2, 3\}$. (Or $\{0, 2, 3, 4\}$ for $n = \{-1, 0, 1, 2\}$). Assuming 0 for indices outside the original definition. Let's define it for $n \in \{-1, 0, 1, 2\}$. $y[-1]=x[0]=1$, $y[0]=x[1]=2$, $y[1]=x[2]=3$, $y[2]=x[3]=4$. $y[n] = \{1, 2, 3, 4\}$ for $n=\{-1, 0, 1, 2\}$.
    c.  $y[n] = 3x[n]$: Scale amplitude by 3. $y[n] = \{3, 6, 9, 12\}$ for $n = \{0, 1, 2, 3\}$.
    d.  $y[n] = x[-n]$: Flip. $y[n] = \{4, 3, 2, 1\}$ for $n = \{-3, -2, -1, 0\}$.
    e.  $y[n] = x[2n]$: Take samples at even indices. For $n=0$, $y[0]=x[0]=1$. For $n=1$, $y[1]=x[2]=3$. For $n=2$, $2n=4$, which is outside the definition. So, $y[n] = \{1, 3\}$ for $n = \{0, 1\}$.
    f.  $y[n] = x[n/2]$: This means we evaluate $x$ at indices that are multiples of 0.5. For discrete systems, we typically consider integer arguments for the signal index. If we allow $n/2$ to be an integer index: For $n=0$, $y[0]=x[0]=1$. For $n=2$, $y[2]=x[1]=2$. For $n=4$, $y[4]=x[2]=3$. For $n=6$, $y[6]=x[3]=4$. So, $y[n] = \{1, 2, 3, 4\}$ for $n = \{0, 2, 4, 6\}$. This represents expansion by a factor of 2.

4.  $x[n] = \{1, 2, 3, 4, 5, 6\}$ for $n = \{0, 1, 2, 3, 4, 5\}$. Sketch $y[n] = x[2n-2]$.
    Rewrite as $x[2(n-1)]$.
    1.  Shift $x[n]$ left by 1: $x[n+1]$. This would be $\{2, 3, 4, 5, 6\}$ for $n=\{0, 1, 2, 3, 4\}$.
    2.  Scale the index by 2 (compress): $x[2(n+1)]$. This means we sample $x[m+1]$ at $m=n$.
        $y[n] = x[2n+2]$.
        For $n=0$, $y[0] = x[2] = 3$.
        For $n=1$, $y[1] = x[4] = 5$.
        For $n=2$, $2n+2=6$, out of bounds.
        So, $y[n] = \{3, 5\}$ for $n = \{0, 1\}$.

    **Correct approach for $x[an+b]$ for discrete time:**
    To find $y[n] = x[2n-2]$:
    We need to find the values of $x$ for arguments $2n-2$.
    For $n=0$, argument is $2(0)-2 = -2$. $y[0] = x[-2] = 0$ (assuming 0 for out of bounds).
    For $n=1$, argument is $2(1)-2 = 0$. $y[1] = x[0] = 1$.
    For $n=2$, argument is $2(2)-2 = 2$. $y[2] = x[2] = 3$.
    For $n=3$, argument is $2(3)-2 = 4$. $y[3] = x[4] = 5$.
    For $n=4$, argument is $2(4)-2 = 6$. $y[4] = x[6] = 0$.
    So, $y[n] = \{0, 1, 3, 5\}$ for $n = \{0, 1, 2, 3\}$.

---

### 6. Important Points to Remember

*   **Order of Operations:** When combining time operations (scaling and shifting), the order matters. For $x(at+b)$, it is generally safest to rewrite it as $x(a(t+b/a))$ and perform the scaling by $a$ first, followed by a shift of $-b/a$.
*   **Discrete vs. Continuous Time:** While the operations are conceptually similar, their implementation and visualization can differ, especially for scaling in discrete time where you only pick samples corresponding to integer arguments after scaling and shifting.
*   **Symmetry:** Operations like time reversal ($x(-t)$ or $x[-n]$) are particularly useful for identifying symmetric or anti-symmetric components of signals.
*   **Applications:** Signal operations are fundamental to signal processing techniques like filtering, modulation, and system analysis.

---

### 7. Alignment with Course Outcomes

*   **CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)**
    This entire topic directly addresses CO1 by detailing and demonstrating various mathematical operations (scaling, shifting, addition, multiplication) on both continuous and discrete-time signals. The practice questions reinforce the ability to perform these operations. The knowledge level K2 (Understanding) is achieved through understanding the definitions, procedures, and visual interpretation of these operations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
