---
title: "Differential entropy"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed02"
status: "completed"
scrapedAt: "2026-05-23T17:58:35.071Z"
---
# ADVANCED COMMUNICATION THEORY
## Module 2: Channel Capacity of AWGN Channel
### Topic: Differential Entropy

**Learning Outcomes:**

*   Understand the concept of differential entropy and its properties.
*   Relate differential entropy to Shannon entropy for discrete random variables.
*   Apply differential entropy to continuous random variables.
*   Analyze the relationship between differential entropy and the capacity of communication channels.

**Course Outcomes Addressed:**

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)** - This topic directly contributes to understanding entropy, a fundamental information theory measure.

---

## 1. Introduction to Differential Entropy

Differential entropy, also known as continuous entropy, is the analogue of Shannon entropy for continuous random variables. It quantifies the uncertainty or randomness of a continuous random variable. While Shannon entropy is defined for discrete probability distributions, differential entropy extends this concept to probability density functions (PDFs).

**Important Point to Remember:** Unlike Shannon entropy, differential entropy can be negative and is not invariant to scaling or translation of the random variable.

---

## 2. Definition of Differential Entropy

For a continuous random variable $X$ with probability density function (PDF) $f_X(x)$, the differential entropy $h(X)$ is defined as:

$h(X) = - \int_{-\infty}^{\infty} f_X(x) \log_b(f_X(x)) dx$

where:
*   $f_X(x)$ is the PDF of the continuous random variable $X$.
*   $\log_b$ is the logarithm to base $b$. If $b=2$, the unit of entropy is bits. If $b=e$, the unit is nats. In communications, bits are commonly used.

**Comparison with Shannon Entropy:**

For a discrete random variable $X$ with probability mass function (PMF) $P(x)$:
$H(X) = - \sum_{x} P(x) \log_b(P(x))$

The key difference is the integration in the continuous case versus summation in the discrete case, and the PDF $f_X(x)$ replacing the PMF $P(x)$.

---

## 3. Properties of Differential Entropy

Differential entropy possesses several important properties:

### 3.1. Non-negativity (with a Caveat)
Differential entropy can be negative. For example, a deterministic variable (a constant) has zero entropy. However, for non-deterministic variables, it can be negative.

**Example:**
Consider a random variable $X$ that is uniformly distributed on $[0, \epsilon]$.
$f_X(x) = \begin{cases} 1/\epsilon & 0 \le x \le \epsilon \\ 0 & \text{otherwise} \end{cases}$

$h(X) = - \int_{0}^{\epsilon} \frac{1}{\epsilon} \log_2(\frac{1}{\epsilon}) dx$
$h(X) = - \frac{1}{\epsilon} \log_2(\frac{1}{\epsilon}) \int_{0}^{\epsilon} dx$
$h(X) = - \frac{1}{\epsilon} \log_2(\frac{1}{\epsilon}) [\epsilon]$
$h(X) = - \log_2(\frac{1}{\epsilon}) = \log_2(\epsilon)$

If $\epsilon < 1$, then $h(X)$ is negative.

### 3.2. Invariance to Deterministic Transformations
If $Y = aX + b$, where $a \neq 0$, then $h(Y) = h(X) + \log_2(|a|)$.

**Proof Sketch:**
If $Y = aX + b$, then $f_Y(y) = \frac{1}{|a|} f_X(\frac{y-b}{a})$.
$h(Y) = - \int_{-\infty}^{\infty} f_Y(y) \log_2(f_Y(y)) dy$
$h(Y) = - \int_{-\infty}^{\infty} \frac{1}{|a|} f_X(\frac{y-b}{a}) \log_2(\frac{1}{|a|} f_X(\frac{y-b}{a})) dy$
Let $x = \frac{y-b}{a}$, then $y = ax+b$, and $dy = a dx$.
$h(Y) = - \int_{-\infty}^{\infty} \frac{1}{|a|} f_X(x) \log_2(\frac{1}{|a|} f_X(x)) |a| dx$
$h(Y) = - \int_{-\infty}^{\infty} f_X(x) [\log_2(\frac{1}{|a|}) + \log_2(f_X(x))] dx$
$h(Y) = - \int_{-\infty}^{\infty} f_X(x) [-\log_2(|a|) + \log_2(f_X(x))] dx$
$h(Y) = \int_{-\infty}^{\infty} f_X(x) \log_2(|a|) dx - \int_{-\infty}^{\infty} f_X(x) \log_2(f_X(x)) dx$
$h(Y) = \log_2(|a|) \int_{-\infty}^{\infty} f_X(x) dx - h(X)$
Since $\int_{-\infty}^{\infty} f_X(x) dx = 1$,
$h(Y) = \log_2(|a|) - h(X)$
This seems to be the opposite of the stated property. Let's re-check the definition of $h(Y)$ based on $X$.
$f_Y(y) = f_X(\frac{y-b}{a}) \frac{1}{|a|}$.
$h(Y) = -\int f_Y(y) \log f_Y(y) dy = -\int f_X(x) \frac{1}{|a|} \log(\frac{1}{|a|} f_X(x)) |a| dx$
$h(Y) = -\int f_X(x) (\log(\frac{1}{|a|}) + \log f_X(x)) dx$
$h(Y) = -\int f_X(x) (-\log |a| + \log f_X(x)) dx$
$h(Y) = \log|a| \int f_X(x) dx - \int f_X(x) \log f_X(x) dx$
$h(Y) = \log|a| - h(X)$.

**Correction:** The property is $h(aX+b) = h(X) + \log|a|$ for $a \neq 0$.
Let's re-evaluate the integral transformation.
Let $y = ax+b$. Then $x = (y-b)/a$. $dx = dy/a$.
$f_Y(y) = f_X((y-b)/a) | \frac{d x}{d y} | = f_X((y-b)/a) \frac{1}{|a|}$.

$h(Y) = - \int f_Y(y) \log_2(f_Y(y)) dy$
$h(Y) = - \int f_X(x) \frac{1}{|a|} \log_2(f_X(x) \frac{1}{|a|}) |a| dx$ (using substitution $y=ax+b$, $dy=adx$, and $f_Y(y)=f_X(x)/|a|$)
$h(Y) = - \int f_X(x) (\log_2 f_X(x) - \log_2 |a|) dx$
$h(Y) = - \int f_X(x) \log_2 f_X(x) dx + \int f_X(x) \log_2 |a| dx$
$h(Y) = h(X) + \log_2 |a| \int f_X(x) dx$
$h(Y) = h(X) + \log_2 |a|$

This is the correct property.

### 3.3. Maximum Entropy Principle
For a continuous random variable with a fixed variance $\sigma^2$, the Gaussian distribution has the maximum differential entropy.

**Gaussian Distribution:**
$f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

The differential entropy of a Gaussian random variable $X$ with mean $\mu$ and variance $\sigma^2$ is:
$h(X) = \log_2(\sqrt{2\pi e \sigma^2})$ bits
$h(X) = \frac{1}{2} \log_2(2\pi e \sigma^2)$ bits

This means that a Gaussian distribution is the "most random" among all continuous distributions with the same variance. This property is crucial for understanding channel capacity, especially for the AWGN channel.

**Reference:**
*   **Elements of Information Theory by Cover and Thomas (Chapter 8.1):** Discusses the maximum entropy property for continuous random variables.

### 3.4. Entropy of a Uniform Distribution
For a continuous random variable $X$ uniformly distributed over an interval of length $L$, i.e., $[a, a+L]$, its PDF is $f_X(x) = 1/L$ for $x \in [a, a+L]$ and 0 otherwise.
$h(X) = \log_2(L)$ bits.

---

## 4. Differential Entropy of Joint and Conditional Distributions

### 4.1. Joint Differential Entropy
For two continuous random variables $X$ and $Y$ with joint PDF $f_{XY}(x,y)$:

$h(X, Y) = - \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x,y) \log_2(f_{XY}(x,y)) dx dy$

### 4.2. Conditional Differential Entropy
The conditional differential entropy of $Y$ given $X=x$ is:

$h(Y|X=x) = - \int_{-\infty}^{\infty} f_{Y|X}(y|x) \log_2(f_{Y|X}(y|x)) dy$

where $f_{Y|X}(y|x)$ is the conditional PDF.

The average conditional differential entropy of $Y$ given $X$ is:

$h(Y|X) = E_X[h(Y|X=x)] = - \int_{-\infty}^{\infty} f_X(x) \left( \int_{-\infty}^{\infty} f_{Y|X}(y|x) \log_2(f_{Y|X}(y|x)) dy \right) dx$

This can be rewritten as:

$h(Y|X) = - \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x,y) \log_2(f_{Y|X}(y|x)) dx dy$

### 4.3. Chain Rule for Differential Entropy
Similar to discrete entropy, the chain rule holds for differential entropy:

$h(X, Y) = h(X) + h(Y|X)$
$h(X, Y) = h(Y) + h(X|Y)$

### 4.4. Properties of Conditional Entropy:
*   **Non-negativity:** $h(Y|X) \ge 0$.
*   **Maximum Entropy:** $h(Y|X) \le h(Y)$. This means conditioning reduces or keeps the entropy the same.
*   **Maximum Entropy (for Gaussian):** If $Y = X + Z$, where $X$ and $Z$ are independent, and $Z$ is Gaussian with variance $\sigma_Z^2$, then $h(Y|X) = h(Z) = \log_2(\sqrt{2\pi e \sigma_Z^2})$. This is a critical insight for AWGN channels.

---

## 5. Differential Entropy and Channel Capacity

The concept of differential entropy is fundamental to understanding the capacity of continuous-valued channels, most notably the Additive White Gaussian Noise (AWGN) channel.

### 5.1. The AWGN Channel Model
An AWGN channel is described by the input-output relationship:

$Y = X + Z$

where:
*   $Y$ is the output signal.
*   $X$ is the input signal, a random variable.
*   $Z$ is the noise, an independent Gaussian random variable with mean 0 and variance $\sigma^2$. $Z \sim \mathcal{N}(0, \sigma^2)$.

The input $X$ is typically constrained by a power constraint, meaning $E[X^2] \le P$. This implies that the variance of $X$ is $E[X^2] - (E[X])^2 \le P$. Assuming $E[X]=0$ for simplicity (to maximize entropy), the variance is $\sigma_X^2 \le P$.

### 5.2. Channel Capacity of the AWGN Channel
The capacity of a channel is the maximum rate at which information can be transmitted reliably over the channel. For a continuous-valued channel, capacity is defined using mutual information.

**Mutual Information ($I(X;Y)$):**
$I(X;Y) = h(Y) - h(Y|X)$

The capacity $C$ of the AWGN channel is the maximum mutual information over all possible input distributions $f_X(x)$ subject to the power constraint $E[X^2] \le P$:

$C = \max_{f_X: E[X^2]\le P} I(X;Y)$
$C = \max_{f_X: E[X^2]\le P} [h(Y) - h(Y|X)]$

**Using the properties of AWGN and differential entropy:**
1.  **Noise:** $Z \sim \mathcal{N}(0, \sigma^2)$. The differential entropy of the noise is $h(Z) = \log_2(\sqrt{2\pi e \sigma^2})$.
2.  **Conditional Entropy:** $Y = X + Z$. Since $X$ and $Z$ are independent, $h(Y|X) = h(X+Z|X) = h(Z|X)$. Due to independence, $h(Z|X) = h(Z)$.
    Therefore, $h(Y|X) = h(Z) = \log_2(\sqrt{2\pi e \sigma^2})$.
3.  **Maximizing Mutual Information:** To maximize $I(X;Y) = h(Y) - h(Y|X)$, we need to maximize $h(Y)$. From the maximum entropy principle, $h(Y)$ is maximized when $Y$ is Gaussian. Since $Y = X + Z$, if $X$ is also Gaussian with mean 0 and variance $P$, then $Y$ will be Gaussian with mean 0 and variance $P + \sigma^2$.

    The differential entropy of $Y$ (when $X$ is Gaussian with variance $P$) is:
    $h(Y) = \log_2(\sqrt{2\pi e (P+\sigma^2)})$

**Derivation of AWGN Capacity:**
$C = \max_{f_X: E[X^2]\le P} [h(Y) - h(Y|X)]$
$C = \max_{f_X: E[X^2]\le P} [\log_2(\sqrt{2\pi e \sigma_Y^2}) - \log_2(\sqrt{2\pi e \sigma^2})]$
where $\sigma_Y^2 = E[Y^2] = E[(X+Z)^2] = E[X^2] + E[Z^2] + 2E[XZ] = \sigma_X^2 + \sigma^2$.
To maximize $h(Y)$, we set $\sigma_X^2 = P$. So $\sigma_Y^2 = P + \sigma^2$.
The input distribution that maximizes $I(X;Y)$ under the power constraint $E[X^2] \le P$ is the Gaussian distribution for $X$ with variance $P$.

$C = \log_2(\sqrt{2\pi e (P+\sigma^2)}) - \log_2(\sqrt{2\pi e \sigma^2})$
$C = \log_2 \left( \frac{\sqrt{2\pi e (P+\sigma^2)}}{\sqrt{2\pi e \sigma^2}} \right)$
$C = \log_2 \left( \sqrt{\frac{P+\sigma^2}{\sigma^2}} \right)$
$C = \log_2 \left( \sqrt{1 + \frac{P}{\sigma^2}} \right)$
$C = \frac{1}{2} \log_2 \left(1 + \frac{P}{\sigma^2}\right)$

The ratio $P/\sigma^2$ is known as the Signal-to-Noise Ratio (SNR).

**Shannon-Hartley Theorem for AWGN Channel:**
$C = B \log_2 \left(1 + \frac{P}{N_0 B}\right)$ bits/sec

where:
*   $B$ is the bandwidth of the channel (in Hz).
*   $P$ is the average received signal power.
*   $N_0$ is the noise power spectral density (W/Hz).
*   $N_0 B$ is the total noise power in the bandwidth $B$.

If we consider the continuous time AWGN channel with bandwidth $B$, the input signal $X(t)$ is sampled at rate $2B$ and each sample can be assumed to have variance $P/B$. The noise variance per sample is $N_0$. The per-sample SNR is $(P/B)/N_0$.
Let $X'$ and $Y'$ be the discrete-time versions of the input and output.
$Y' = X' + Z'$, where $Z'$ is Gaussian with variance $N_0$.
The power constraint on $X'$ is $E[(X')^2] \le P/B$.
The capacity per symbol is $\frac{1}{2} \log_2 (1 + \frac{P/B}{N_0}) = \frac{1}{2} \log_2 (1 + \frac{P}{N_0 B})$.
The total capacity is (bits/symbol) * (symbols/sec) = $\frac{1}{2} \log_2 (1 + \frac{P}{N_0 B}) \times 2B = B \log_2 (1 + \frac{P}{N_0 B})$.

This derivation highlights how differential entropy leads to the fundamental capacity limit of the AWGN channel.

**References:**
*   **Wireless Communications by Andrea Goldsmith (Chapter 2.3):** Provides a detailed explanation of the AWGN channel and its capacity.
*   **Elements of Information Theory by Cover and Thomas (Chapter 7.1):** Derives the capacity of the AWGN channel using mutual information and differential entropy.
*   **Wireless communication: Principles and Practice by Theodore S. Rappaport (Chapter 2.3.2):** Discusses the Shannon capacity and the Shannon-Hartley theorem.

---

## 6. Examples and Practice Questions

**Question 1:**
Calculate the differential entropy of a random variable $X$ uniformly distributed over the interval $[-2, 2]$.

**Answer:**
The length of the interval is $L = 2 - (-2) = 4$.
For a uniform distribution over an interval of length $L$, the differential entropy is $h(X) = \log_2(L)$.
$h(X) = \log_2(4) = 2$ bits.

**Question 2:**
Let $X$ be a Gaussian random variable with mean $\mu=5$ and variance $\sigma^2=9$. Calculate its differential entropy in nats and bits.

**Answer:**
The differential entropy of a Gaussian random variable is $h(X) = \frac{1}{2} \log_2(2\pi e \sigma^2)$ bits.
Given $\sigma^2 = 9$:
$h(X) = \frac{1}{2} \log_2(2\pi e \times 9)$
$h(X) = \frac{1}{2} \log_2(18\pi e)$
Using $e \approx 2.718$ and $\pi \approx 3.14159$:
$18\pi e \approx 18 \times 3.14159 \times 2.718 \approx 153.9$
$h(X) \approx \frac{1}{2} \log_2(153.9)$
$\log_2(153.9) \approx 7.27$
$h(X) \approx \frac{1}{2} \times 7.27 \approx 3.635$ bits.

In nats, the formula is $h(X) = \frac{1}{2} \ln(2\pi e \sigma^2) = \frac{1}{2} (\ln(2\pi) + 1 + \ln(\sigma^2))$.
$h(X) = \frac{1}{2} \ln(18\pi e) \approx \frac{1}{2} \ln(153.9) \approx \frac{1}{2} \times 5.036 \approx 2.518$ nats.
(Note: $\log_2(x) = \ln(x) / \ln(2)$. $7.27 / 1.44 \approx 5.03$, $3.635 \times 1.44 \approx 5.23$. Let's recompute $\log_2(153.9)$. $2^7 = 128, 2^8 = 256$. It's between 7 and 8. $2^{7.27} \approx 153.9$. Calculation is consistent.)

**Question 3:**
Consider a discrete random variable $X$ with PMF $P(X=0)=0.5$, $P(X=1)=0.5$. Calculate its entropy $H(X)$. Now consider a continuous random variable $Y = X + Z$, where $Z \sim \mathcal{N}(0, \sigma^2)$. What is $h(Y|X)$? If $\sigma^2=0.1$, what is $h(Y|X)$?

**Answer:**
For the discrete variable $X$:
$H(X) = -0.5 \log_2(0.5) - 0.5 \log_2(0.5) = -0.5 (-1) - 0.5 (-1) = 0.5 + 0.5 = 1$ bit.

For the continuous variable $Y = X + Z$, where $Z \sim \mathcal{N}(0, \sigma^2)$ and $X$ and $Z$ are independent:
$h(Y|X) = h(X+Z|X) = h(Z|X)$ (Property of conditional entropy)
Since $X$ and $Z$ are independent, $h(Z|X) = h(Z)$.
The differential entropy of a Gaussian variable $Z$ with variance $\sigma^2$ is $h(Z) = \log_2(\sqrt{2\pi e \sigma^2})$.

If $\sigma^2 = 0.1$:
$h(Y|X) = h(Z) = \log_2(\sqrt{2\pi e \times 0.1})$
$h(Y|X) = \log_2(\sqrt{0.2\pi e})$
$0.2\pi e \approx 0.2 \times 3.14159 \times 2.718 \approx 1.708$
$h(Y|X) = \log_2(\sqrt{1.708}) \approx \log_2(1.307) \approx 0.387$ bits.

**Question 4 (Conceptual):**
Why is a Gaussian distribution said to have the "maximum entropy" for a given variance? How does this relate to the capacity of the AWGN channel?

**Answer:**
A Gaussian distribution has the maximum entropy for a given variance because it represents the most "spread out" or "uncertain" distribution under that constraint. This means it carries the most information per symbol, on average, compared to any other distribution with the same variance.

This property is critical for the AWGN channel capacity because the channel capacity is defined as the maximum mutual information between the input and output. The mutual information is $I(X;Y) = h(Y) - h(Y|X)$. For the AWGN channel, $h(Y|X)$ is fixed by the noise variance, $h(Y|X) = h(Z)$. To maximize $I(X;Y)$, we need to maximize $h(Y)$. The maximum entropy principle states that a Gaussian distribution maximizes $h(Y)$ for a given variance, which is dictated by the power constraint on the input $X$. Thus, the input that maximizes mutual information (and hence achieves capacity) is a Gaussian input.

---

## 7. Important Points to Remember

*   **Differential entropy is the generalization of Shannon entropy to continuous random variables.**
*   **It is defined using an integral of $f(x)\log f(x)$ over the domain of the variable.**
*   **Differential entropy can be negative.**
*   **It is not invariant to scaling or translation of the random variable:** $h(aX+b) = h(X) + \log|a|$.
*   **The Gaussian distribution maximizes differential entropy for a fixed variance.** This is a crucial concept.
*   **The capacity of the AWGN channel is derived by maximizing mutual information, which relies on the maximum entropy property of the Gaussian distribution for the input.**
*   **The AWGN channel capacity is $C = \frac{1}{2} \log_2 (1 + \text{SNR})$ bits per symbol, or $C = B \log_2 (1 + \text{SNR}_{Hz})$ bits per second, where SNR is the ratio of signal power to noise power.**

---

## 8. Summary and Connection to Course Outcomes

This topic, "Differential Entropy," directly supports **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**. Understanding differential entropy is essential for grasping the information theoretic quantities that underpin communication system analysis. Specifically, it's a direct application of the concept of entropy to continuous random variables, which is a prerequisite for understanding conditional entropy and mutual information in the context of continuous-valued channels like the AWGN channel. This understanding then forms the basis for comprehending channel capacity, a core topic in advanced communication theory.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
