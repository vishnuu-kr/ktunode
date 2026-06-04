---
title: "Differential Entropy of Gaussian random variable"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed03"
status: "completed"
scrapedAt: "2026-05-23T17:58:35.782Z"
---
# ADVANCED COMMUNICATION THEORY

## Module 2: Channel Capacity of AWGN Channel

### Topic: Differential Entropy of Gaussian Random Variable

---

### **Learning Outcomes Covered:**

*   **Explain information theory measures such as entropy, conditional entropy, mutual information (CO1 - K2)**
    *   This topic directly contributes to understanding entropy, specifically differential entropy, which is a fundamental information theoretic measure.
*   **Apply source coding theorem for data compression. (CO2 - K3)**
    *   While not directly applying the theorem, understanding the entropy of different sources (like Gaussian) is crucial for optimal source coding.
*   **Apply channel coding for error detection and correction (CO3 - K3)**
    *   Understanding channel capacity, which is intrinsically linked to differential entropy of Gaussian signals in AWGN, is fundamental to channel coding.
*   **Explain the basic Principle of wireless communication techniques (CO4 - K2)**
    *   The AWGN channel is a foundational model in wireless communication, and understanding the entropy of its components is key.
*   **Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (CO5 - K2)**
    *   The AWGN channel is a basic building block for more complex channel models.
*   **Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance. (CO6 - K3)**
    *   While not directly covered, understanding the noise characteristics (related to entropy) helps in appreciating the need for these techniques.

---

### **1. Introduction to Entropy and Differential Entropy**

*   **Entropy (H(X))**: A measure of uncertainty or randomness in a discrete random variable $X$. It quantifies the average amount of information needed to specify the outcome of $X$.
    *   Formula: $H(X) = -\sum_{x} p(x) \log_2 p(x)$
*   **Differential Entropy (h(X))**: The continuous analog of entropy for a continuous random variable $X$. It's a measure of uncertainty or randomness for continuous probability distributions.
    *   **Important Note**: Unlike discrete entropy, differential entropy can be negative and is not strictly invariant to a change of variables. However, it serves as a useful quantity in many information theoretic derivations.
    *   Formula: $h(X) = -\int_{-\infty}^{\infty} f(x) \log_2 f(x) dx$, where $f(x)$ is the probability density function (PDF) of $X$.

---

### **2. The Gaussian Random Variable**

*   A continuous random variable $X$ is Gaussian if its PDF is given by:
    $$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
    where:
    *   $\mu$ is the mean (expected value) of $X$.
    *   $\sigma^2$ is the variance of $X$.
*   A Gaussian random variable is completely characterized by its mean and variance.
*   **Notation**: We often denote a Gaussian random variable as $X \sim \mathcal{N}(\mu, \sigma^2)$.

---

### **3. Differential Entropy of a Gaussian Random Variable**

*   **Derivation**:
    Let $X \sim \mathcal{N}(\mu, \sigma^2)$. Its PDF is $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$.
    The differential entropy is:
    $$h(X) = -\int_{-\infty}^{\infty} f(x) \log_2 f(x) dx$$
    $$h(X) = -\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} \log_2 \left(\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\right) dx$$
    Using the property $\log_b(a/c) = \log_b a - \log_b c$ and $\log_b(a^c) = c \log_b a$:
    $$\log_2 \left(\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\right) = \log_2 \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) + \log_2 \left(e^{-\frac{(x-\mu)^2}{2\sigma^2}}\right)$$
    $$= -\log_2 (\sqrt{2\pi\sigma^2}) - \frac{(x-\mu)^2}{2\sigma^2} \log_2(e)$$
    $$= -\frac{1}{2}\log_2 (2\pi\sigma^2) - \frac{(x-\mu)^2}{2\sigma^2} \frac{\ln(1/\ln 2)}{\ln 2}$$
    Substituting back into the integral:
    $$h(X) = -\int_{-\infty}^{\infty} f(x) \left[-\frac{1}{2}\log_2 (2\pi\sigma^2) - \frac{(x-\mu)^2}{2\sigma^2} \log_2(e)\right] dx$$
    $$h(X) = \frac{1}{2}\log_2 (2\pi\sigma^2) \int_{-\infty}^{\infty} f(x) dx + \frac{\log_2(e)}{2\sigma^2} \int_{-\infty}^{\infty} (x-\mu)^2 f(x) dx$$
    Since $\int_{-\infty}^{\infty} f(x) dx = 1$ (total probability) and $\int_{-\infty}^{\infty} (x-\mu)^2 f(x) dx = E[(X-\mu)^2] = \sigma^2$ (variance):
    $$h(X) = \frac{1}{2}\log_2 (2\pi\sigma^2) + \frac{\log_2(e)}{2\sigma^2} (\sigma^2)$$
    $$h(X) = \frac{1}{2}\log_2 (2\pi\sigma^2) + \frac{1}{2}\log_2(e)$$
    Using $\log_b(a) + \log_b(c) = \log_b(ac)$:
    $$h(X) = \frac{1}{2}\log_2 (2\pi\sigma^2 \cdot e)$$
    $$h(X) = \frac{1}{2}\log_2 (2\pi e \sigma^2)$$
    $$h(X) = \log_2 \sqrt{2\pi e \sigma^2}$$
    $$h(X) = \log_2 (\sigma \sqrt{2\pi e})$$

*   **Formula for Differential Entropy of a Gaussian Random Variable**:
    If $X \sim \mathcal{N}(\mu, \sigma^2)$, then its differential entropy is:
    $$h(X) = \frac{1}{2} \log_2 (2\pi e \sigma^2) \text{ bits}$$
    or
    $$h(X) = \log_2 (\sigma \sqrt{2\pi e}) \text{ bits}$$
    The unit is bits when using $\log_2$.

*   **Key Observations**:
    *   The differential entropy of a Gaussian random variable **depends only on its variance ($\sigma^2$) and not on its mean ($\mu$)**. This is because shifting the mean does not change the shape or spread of the distribution.
    *   The differential entropy **increases with the variance**. A larger variance means more spread-out distribution, hence more uncertainty.
    *   The Gaussian distribution is **"entropy-maximizing"** among all continuous distributions with a fixed variance. This means for a given variance $\sigma^2$, no other continuous distribution has a higher differential entropy.

---

### **4. Importance in Communication Theory (AWGN Channel)**

*   **The AWGN Channel Model**: A fundamental channel model in digital communications where the transmitted signal is corrupted by additive white Gaussian noise.
    *   Received signal $Y = X + N$, where:
        *   $Y$ is the received signal.
        *   $X$ is the transmitted signal (random variable).
        *   $N$ is the additive white Gaussian noise, typically modelled as $N \sim \mathcal{N}(0, \sigma_N^2)$.
*   **Channel Capacity**: The maximum rate at which information can be transmitted reliably over a channel. For the AWGN channel, the capacity is given by the Shannon-Hartley theorem:
    $$C = B \log_2 (1 + \frac{S}{N_0 B})$$
    where:
    *   $B$ is the bandwidth of the channel.
    *   $S$ is the average signal power.
    *   $N_0$ is the power spectral density of the noise.
*   **Connection to Differential Entropy**:
    *   The capacity of a channel is related to the mutual information between the input and output.
    *   $I(X;Y) = h(Y) - h(Y|X)$.
    *   For the AWGN channel $Y = X + N$, where $N \sim \mathcal{N}(0, \sigma_N^2)$ and $X$ and $N$ are independent.
    *   If $X$ is also Gaussian, $X \sim \mathcal{N}(\mu_X, \sigma_X^2)$, then $Y \sim \mathcal{N}(\mu_X, \sigma_X^2 + \sigma_N^2)$.
    *   $h(Y|X) = h(X+N|X) = h(N|X) = h(N)$ (since $N$ is independent of $X$, and adding a deterministic quantity $X$ to a random variable $N$ doesn't change its differential entropy).
    *   $h(N) = \frac{1}{2} \log_2 (2\pi e \sigma_N^2)$.
    *   So, $I(X;Y) = h(Y) - h(N) = \frac{1}{2} \log_2 (2\pi e (\sigma_X^2 + \sigma_N^2)) - \frac{1}{2} \log_2 (2\pi e \sigma_N^2)$.
    *   $I(X;Y) = \frac{1}{2} \log_2 \left(\frac{2\pi e (\sigma_X^2 + \sigma_N^2)}{2\pi e \sigma_N^2}\right) = \frac{1}{2} \log_2 \left(1 + \frac{\sigma_X^2}{\sigma_N^2}\right)$.
    *   Here, $\sigma_X^2$ represents the average power of the transmitted signal ($S$), and $\sigma_N^2$ is the noise variance. If we consider bandwidth $B$, the noise power is $N_0 B$. So $\sigma_N^2 = N_0 B$.
    *   The mutual information is maximized when the input $X$ is Gaussian. This is a crucial result: **the Gaussian distribution maximizes the mutual information for a given average power constraint**.
    *   The capacity $C = \max_{f_X} I(X;Y) = \frac{1}{2} \log_2 \left(1 + \frac{S}{N_0 B}\right)$. The factor of $B$ in the Shannon-Hartley theorem comes from considering bandwidth and the noise power spectral density. When dealing with uncoded continuous-time signals over a bandwidth $B$, the noise variance is $\sigma_N^2 = N_0 B$. The average power of the signal is $S$. The capacity formula is often expressed as $C = B \log_2(1 + \frac{P_{signal}}{P_{noise}})$, where $P_{noise} = N_0 B$.

*   **Textbook References**:
    *   **Goldsmith, Chapter 2**: Discusses the AWGN channel and Shannon capacity, often introducing the concept of mutual information maximization with Gaussian inputs.
    *   **Cover & Thomas, Chapter 11**: Provides a rigorous treatment of channel capacity, including the result that Gaussian input maximizes mutual information for AWGN.
    *   **Haykin (Communication Systems), Chapter 12**: Explains the AWGN channel and Shannon capacity.

---

### **5. Properties of Differential Entropy for Gaussian Variables**

*   **Non-negativity**: Differential entropy can be negative, but for a Gaussian random variable with $\sigma^2 > 0$, the term $2\pi e \sigma^2$ is greater than 1, so $\log_2(2\pi e \sigma^2)$ is positive. Thus, the differential entropy of a non-degenerate Gaussian random variable is positive.
*   **Invariance to Location (Mean)**: $h(X) = h(X+c)$ for any constant $c$. This is evident from the formula as it only depends on $\sigma^2$.
*   **Scaling Property**: $h(aX) = \log_2 |a| + h(X)$ for $a \neq 0$.
    *   If $X \sim \mathcal{N}(\mu, \sigma^2)$, then $aX \sim \mathcal{N}(a\mu, a^2\sigma^2)$.
    *   $h(aX) = \frac{1}{2} \log_2 (2\pi e (a^2\sigma^2)) = \frac{1}{2} \log_2 (a^2) + \frac{1}{2} \log_2 (2\pi e \sigma^2)$
    *   $h(aX) = \log_2 |a| + h(X)$. This holds.
*   **Maximum Entropy Property**: For a fixed variance $\sigma^2$, the Gaussian distribution maximizes the differential entropy among all continuous random variables. This is a fundamental result in information theory.
    *   **Implication**: If you want to maximize uncertainty for a given "power" constraint (variance), you choose a Gaussian distribution.

---

### **6. Examples and Practice Questions**

**Example 1: Calculating Differential Entropy**

Let $X \sim \mathcal{N}(5, 4)$. Calculate its differential entropy.
*   Mean $\mu = 5$.
*   Variance $\sigma^2 = 4$.
*   Using the formula $h(X) = \frac{1}{2} \log_2 (2\pi e \sigma^2)$:
    $h(X) = \frac{1}{2} \log_2 (2\pi e \cdot 4)$
    $h(X) = \frac{1}{2} \log_2 (8\pi e)$
    $h(X) = \frac{1}{2} (\log_2 8 + \log_2 \pi + \log_2 e)$
    $h(X) = \frac{1}{2} (3 + \log_2 \pi + \log_2 e)$
    Using $\log_2 \pi \approx 1.65$ and $\log_2 e \approx 1.44$:
    $h(X) \approx \frac{1}{2} (3 + 1.65 + 1.44) = \frac{1}{2} (6.09) \approx 3.045$ bits.

**Example 2: Effect of Variance on Differential Entropy**

Compare the differential entropy of $X_1 \sim \mathcal{N}(0, 1)$ and $X_2 \sim \mathcal{N}(0, 9)$.
*   For $X_1$: $\sigma_1^2 = 1$.
    $h(X_1) = \frac{1}{2} \log_2 (2\pi e \cdot 1) = \frac{1}{2} \log_2 (2\pi e) \approx \frac{1}{2} \log_2 (17.08) \approx \frac{1}{2} \cdot 4.09 \approx 2.045$ bits.
*   For $X_2$: $\sigma_2^2 = 9$.
    $h(X_2) = \frac{1}{2} \log_2 (2\pi e \cdot 9) = \frac{1}{2} \log_2 (18\pi e) \approx \frac{1}{2} \log_2 (153.7) \approx \frac{1}{2} \cdot 7.27 \approx 3.635$ bits.
*   Observation: Increasing the variance from 1 to 9 significantly increased the differential entropy, indicating greater uncertainty.

**Practice Question 1:**

A continuous random variable $X$ has a variance of $\sigma^2 = 16$. If $X$ is Gaussian, what is its differential entropy in bits?

**Answer 1:**
$h(X) = \frac{1}{2} \log_2 (2\pi e \sigma^2)$
$h(X) = \frac{1}{2} \log_2 (2\pi e \cdot 16)$
$h(X) = \frac{1}{2} \log_2 (32\pi e)$
$h(X) = \frac{1}{2} (\log_2 32 + \log_2 \pi + \log_2 e)$
$h(X) = \frac{1}{2} (5 + 1.65 + 1.44)$
$h(X) = \frac{1}{2} (8.09) \approx 4.045$ bits.

**Practice Question 2:**

Let $Z \sim \mathcal{N}(0, \sigma_Z^2)$. What is the differential entropy of $Y = 2Z$? Express your answer in terms of $\sigma_Z^2$.

**Answer 2:**
If $Z \sim \mathcal{N}(0, \sigma_Z^2)$, then $Y = 2Z \sim \mathcal{N}(0, (2\sigma_Z)^2) = \mathcal{N}(0, 4\sigma_Z^2)$.
So, the variance of $Y$ is $\sigma_Y^2 = 4\sigma_Z^2$.
Using the formula for differential entropy of a Gaussian:
$h(Y) = \frac{1}{2} \log_2 (2\pi e \sigma_Y^2)$
$h(Y) = \frac{1}{2} \log_2 (2\pi e \cdot 4\sigma_Z^2)$
$h(Y) = \frac{1}{2} \log_2 (4) + \frac{1}{2} \log_2 (2\pi e \sigma_Z^2)$
$h(Y) = \frac{1}{2} \cdot 2 + h(Z)$
$h(Y) = 1 + h(Z)$.
Alternatively, using the scaling property $h(aX) = \log_2 |a| + h(X)$:
$h(2Z) = \log_2 |2| + h(Z) = 1 + h(Z)$.
The answer in terms of $\sigma_Z^2$:
$h(Y) = \frac{1}{2} \log_2 (2\pi e \cdot 4\sigma_Z^2) = \frac{1}{2} \log_2 (8\pi e \sigma_Z^2) = \log_2 (\sqrt{8\pi e} \sigma_Z)$ bits.

---

### **7. Important Points to Remember**

*   **Definition of Differential Entropy**: $h(X) = -\int f(x) \log_2 f(x) dx$.
*   **Gaussian PDF**: $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$.
*   **Differential Entropy of Gaussian**: $h(X) = \frac{1}{2} \log_2 (2\pi e \sigma^2)$ bits.
*   **Dependence**: Only on variance ($\sigma^2$), not mean ($\mu$).
*   **Maximum Entropy Property**: Gaussian distribution maximizes differential entropy for a fixed variance. This is crucial for understanding channel capacity.
*   **AWGN Channel**: The noise is modeled as Gaussian, and the Gaussian distribution of the input signal maximizes the mutual information.

---

### **8. Alignment with Course Outcomes (COs)**

*   **CO1 (Explain information theory measures)**: This topic directly addresses the explanation of differential entropy as a measure of uncertainty for continuous random variables, specifically the Gaussian case. (Knowledge Level: K2)
*   **CO2 (Apply source coding theorem)**: Understanding the entropy of different sources, including Gaussian, is foundational for optimal source coding. The Gaussian distribution's entropy is a benchmark. (Knowledge Level: K3)
*   **CO3 (Apply channel coding)**: The concept of channel capacity for the AWGN channel, which is heavily influenced by the properties of Gaussian signals and noise, is a core aspect of channel coding. (Knowledge Level: K3)
*   **CO4 (Explain basic principles of wireless communication)**: The AWGN channel is a fundamental model in wireless communication. Understanding the statistical properties of signals and noise in this model is essential. (Knowledge Level: K2)
*   **CO5 (Describe wireless channel models)**: The AWGN channel is the simplest and most fundamental wireless channel model. The Gaussian distribution's entropy is integral to its characterization. (Knowledge Level: K2)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
