---
title: "Maximum likelihood decoding."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed12"
status: "completed"
scrapedAt: "2026-05-23T17:58:46.523Z"
---
# Advanced Communication Theory - Module 2: Channel Capacity of AWGN Channel

## Topic: Maximum Likelihood Decoding

### 1. Introduction to Decoding

Decoding is the process of estimating the transmitted message or symbol at the receiver, given the received signal and knowledge of the channel. In the context of the Additive White Gaussian Noise (AWGN) channel, the received signal is a noisy version of the transmitted signal. The goal of a decoder is to minimize the probability of error in this estimation.

### 2. Maximum Likelihood (ML) Decoding

**Definition:** Maximum Likelihood (ML) decoding is a strategy that aims to find the transmitted codeword (or symbol) that is "most likely" to have produced the observed received signal. It does this by maximizing the likelihood function, which quantifies the probability of observing the received signal given a particular transmitted signal.

**Core Principle:** Given the received signal $y$, the ML decoder chooses the transmitted symbol $\hat{x}$ that maximizes the conditional probability $P(y|x)$.

**Relation to AWGN Channel:**
In an AWGN channel, the transmitted signal $x$ is corrupted by additive Gaussian noise $n$, so the received signal is $y = x + n$. The noise $n$ is assumed to be zero-mean Gaussian with variance $\sigma^2$ (or power spectral density $N_0/2$). The probability density function (PDF) of the noise is given by:

$P(n) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{n^2}{2\sigma^2}}$

Since $y = x + n$, then $n = y - x$. Substituting this into the noise PDF, we get the conditional PDF of the received signal given the transmitted signal:

$P(y|x) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(y-x)^2}{2\sigma^2}}$

**Maximizing Likelihood:**
To find the ML estimate $\hat{x}$, we need to maximize $P(y|x)$ with respect to $x$. Since the term $\frac{1}{\sqrt{2\pi \sigma^2}}$ is constant with respect to $x$, maximizing $P(y|x)$ is equivalent to maximizing the exponent:

$f(x) = -\frac{(y-x)^2}{2\sigma^2}$

Maximizing $f(x)$ is equivalent to minimizing $(y-x)^2$. This term represents the squared Euclidean distance between the received signal $y$ and the possible transmitted signals $x$.

**ML Decoding Rule:**
The ML decoder chooses the transmitted symbol $\hat{x}$ that minimizes the Euclidean distance between the received signal $y$ and the possible transmitted symbols:

$\hat{x}_{ML} = \arg \min_{x \in \mathcal{X}} \|y - x\|^2$

where $\mathcal{X}$ is the set of all possible transmitted signals (or codewords).

**Connection to Minimum Distance Decoding:**
For signals transmitted over an AWGN channel, ML decoding is equivalent to minimum distance decoding. This is a crucial insight. The decision region for each transmitted symbol is a Voronoi region centered around that symbol in the signal space. The receiver chooses the symbol whose representative point is closest to the received signal.

### 3. ML Decoding for Different Modulation Schemes

#### 3.1. Binary Phase Shift Keying (BPSK)

**Transmitted Symbols:** In BPSK, two symbols are transmitted: $x_1 = +A$ and $x_2 = -A$.
**Received Signal:** $y = x + n$, where $n \sim \mathcal{N}(0, \sigma^2)$.
**ML Decoding Rule:**
The ML decoder chooses between $+A$ and $-A$ based on the sign of the received signal $y$.

$\hat{x}_{ML} = \begin{cases} +A & \text{if } y \ge 0 \\ -A & \text{if } y < 0 \end{cases}$

**Explanation:**
We need to minimize $(y-x)^2$.
If $x = +A$, the squared error is $(y-A)^2$.
If $x = -A$, the squared error is $(y-(-A))^2 = (y+A)^2$.

We choose $x = +A$ if $(y-A)^2 < (y+A)^2$.
$y^2 - 2yA + A^2 < y^2 + 2yA + A^2$
$-2yA < 2yA$
$0 < 4yA$

Assuming $A > 0$, this simplifies to $0 < y$, or $y > 0$.
Conversely, if $(y+A)^2 < (y-A)^2$, then $y < 0$.
Thus, the ML decoding rule for BPSK is to decide in favor of the symbol with the same sign as the received signal.

**Performance:** The probability of error for BPSK is $P_e = Q(\sqrt{E_b/N_0})$, where $E_b$ is the energy per bit and $N_0$ is the noise power spectral density.

#### 3.2. Quadrature Phase Shift Keying (QPSK)

**Transmitted Symbols:** QPSK transmits two bits at a time, modulating the phase of the carrier. The four possible symbols can be represented as complex numbers: $s_1 = A(1+j)$, $s_2 = A(-1+j)$, $s_3 = A(-1-j)$, $s_4 = A(1-j)$.
**Received Signal:** $y = s_i + n$, where $n$ is complex Gaussian noise with $E[n] = 0$ and $E[|n|^2] = N_0$.
**ML Decoding Rule:**
The ML decoder chooses the symbol $s_i$ that is closest to the received signal $y$ in the complex plane. This is equivalent to minimizing the squared Euclidean distance:

$\hat{s}_{ML} = \arg \min_{s_i \in \mathcal{S}} \|y - s_i\|^2$

where $\mathcal{S}$ is the set of QPSK constellation points.

**Explanation:**
The decision regions are formed by the perpendicular bisectors of the lines connecting the constellation points. For QPSK, these bisectors form squares centered at the origin. A received signal $y = y_I + jy_Q$ will be mapped to the symbol whose constellation point is closest.

**Example:** If the received signal has positive real and imaginary parts, it is most likely from the symbol in the first quadrant.

#### 3.3. M-ary Phase Shift Keying (M-PSK)

**Transmitted Symbols:** M-PSK transmits $\log_2 M$ bits per symbol, with $M$ equally spaced phases. The constellation points are $s_k = A e^{j(2\pi k/M + \phi)}$, for $k = 0, 1, \dots, M-1$.
**Received Signal:** $y = s_k + n$.
**ML Decoding Rule:**
The ML decoder chooses the symbol $s_k$ that minimizes the squared Euclidean distance:

$\hat{s}_{ML} = \arg \min_{s_k \in \mathcal{S}} \|y - s_k\|^2$

**Geometric Interpretation:** The decision regions are sectors of a circle. The receiver projects the received signal onto each possible transmitted symbol and chooses the symbol that yields the maximum projection (which is equivalent to minimum distance). Alternatively, one can compare the angles.

#### 3.4. M-ary Quadrature Amplitude Modulation (M-QAM)

**Transmitted Symbols:** M-QAM uses both amplitude and phase to transmit information. The constellation points are located on a grid in the complex plane.
**Received Signal:** $y = s_k + n$.
**ML Decoding Rule:**
The ML decoder chooses the symbol $s_k$ that minimizes the squared Euclidean distance:

$\hat{s}_{ML} = \arg \min_{s_k \in \mathcal{S}} \|y - s_k\|^2$

**Geometric Interpretation:** The decision regions are typically rectangular or hexagonal regions around each constellation point. The receiver finds the closest constellation point to the received signal.

### 4. Probability of Error for ML Decoding

The probability of error for ML decoding depends on the modulation scheme and the signal-to-noise ratio (SNR). For many common modulation schemes in the AWGN channel, ML decoding is optimal in the sense of minimizing the probability of symbol error.

**General Approach to calculating $P_e$:**
1. **Define the decision regions:** For each transmitted symbol $s_i$, define the region $R_i$ in the received signal space such that if $y \in R_i$, then $\hat{s}_{ML} = s_i$. These regions are defined by the minimum distance criterion.
2. **Calculate the probability of error for a specific symbol:** For a given transmitted symbol $s_i$, the probability of error occurs if the received signal $y$ falls into a decision region $R_j$ where $j \neq i$.
   $P(error | s_i) = P(y \in R_j, j \neq i | s_i) = \int_{R_j, j \neq i} P(y|s_i) dy$
   Since $y = s_i + n$, $P(y|s_i) = P(n) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(y-s_i)^2}{2\sigma^2}}$.
3. **Average over all symbols:** Since all symbols are assumed to be transmitted with equal probability, the total probability of error is the average of the probabilities of error for each symbol:
   $P_e = \frac{1}{M} \sum_{i=1}^M P(error | s_i)$

**Example: BPSK $P_e$ Calculation**
For BPSK with symbols $+A$ and $-A$, the decision regions are $R_1 = [0, \infty)$ and $R_2 = (-\infty, 0)$. Assume $s_1 = +A$ is transmitted.
$P(error | s_1) = P(y < 0 | s_1) = P(A + n < 0) = P(n < -A)$
Since $n \sim \mathcal{N}(0, \sigma^2)$, this is $P(n < -A) = \int_{-\infty}^{-A} \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{t^2}{2\sigma^2}} dt$.
Let $u = t/\sigma$. $du = dt/\sigma$.
$P(n < -A) = \int_{-\infty}^{-A/\sigma} \frac{1}{\sqrt{2\pi}} e^{-\frac{u^2}{2}} du = Q(A/\sigma)$.
The term $A^2/\sigma^2$ is related to the SNR. For BPSK, $E_b = A^2$. The noise variance in the decision variable is $\sigma^2$. The ratio is $A^2/\sigma^2 = E_b/\sigma^2$. The noise power spectral density is $N_0/2$, and the noise power in the decision variable is $\sigma^2 = N_0/2$. So, $A^2/\sigma^2 = E_b / (N_0/2) = 2E_b/N_0$.
Thus, $P(error | s_1) = Q(\sqrt{2E_b/N_0})$.
By symmetry, $P(error | s_2) = Q(\sqrt{2E_b/N_0})$.
$P_e = \frac{1}{2} [Q(\sqrt{2E_b/N_0}) + Q(\sqrt{2E_b/N_0})] = Q(\sqrt{2E_b/N_0})$.
*Note: Sometimes, $Q(x)$ is defined such that the formula is $Q(\sqrt{E_b/N_0})$. It depends on the convention used for the noise variance in the single-sided spectrum. If $N_0$ is the two-sided power spectral density, then the variance of the noise in the decision variable is $\sigma^2 = N_0/2$. If the problem statement implies $N_0$ is the variance, then $Q(\sqrt{E_b/N_0})$ is used.* For consistency with most textbooks, $Q(\sqrt{E_b/N_0})$ is more common when $N_0$ is the two-sided power spectral density. Let's stick with $Q(\sqrt{E_b/N_0})$ where $E_b$ is energy per bit and $N_0$ is the two-sided noise power spectral density.

**Reference:** Goldsmith, Chapter 4.3.2 (ML Decoding) and Chapter 4.4 (Error Probabilities).

### 5. Relationship to Maximum A Posteriori (MAP) Decoding

**Definition:** Maximum A Posteriori (MAP) decoding chooses the transmitted symbol that maximizes the posterior probability $P(x|y)$.

$P(x|y) = \frac{P(y|x)P(x)}{P(y)}$

Since $P(y)$ is constant for all $x$, maximizing $P(x|y)$ is equivalent to maximizing $P(y|x)P(x)$.

**ML vs. MAP:**
*   **ML Decoding:** Assumes that all transmitted symbols are equally likely, i.e., $P(x) = 1/M$ for all $x$. In this case, maximizing $P(y|x)P(x)$ is the same as maximizing $P(y|x)$, which leads to ML decoding.
*   **MAP Decoding:** Takes into account the prior probabilities of the transmitted symbols. If symbols have different prior probabilities (e.g., due to unequal symbol frequencies or channel fading), MAP decoding can outperform ML decoding.

**In the context of AWGN channel with equally likely symbols:**
When all transmitted symbols are equally likely, $P(x)$ is constant, so $P(x|y) \propto P(y|x)$. Therefore, in this common scenario, **ML decoding is equivalent to MAP decoding.**

**Reference:** Cover & Thomas, Chapter 12.2 (Maximum Likelihood Decision Rule).

### 6. Properties and Advantages of ML Decoding

*   **Optimality:** For a given channel and a set of transmitted signals, ML decoding is the optimal decoding strategy in terms of minimizing the probability of symbol error (or bit error, depending on the analysis). This is a fundamental result in detection theory.
*   **Simplicity (for some modulations):** For simple modulation schemes like BPSK and QPSK, the ML decoding rule simplifies to a straightforward comparison or distance calculation.
*   **Robustness:** It makes no assumptions about the relative likelihood of symbols, relying solely on the channel's characteristics.

### 7. Challenges and Limitations of ML Decoding

*   **Computational Complexity:** For complex modulation schemes with a large number of constellation points (e.g., 64-QAM, 256-QAM) or for block codes with many possible codewords, calculating the distance to every possible transmitted symbol/codeword can be computationally very expensive. The complexity grows with the number of possible transmitted signals.
*   **Requires Channel State Information (CSI):** ML decoding requires knowledge of the channel noise characteristics (e.g., $\sigma^2$ or $N_0$).

### 8. Relation to Advanced Communication Concepts

*   **Channel Capacity (CO1, CO2):** While ML decoding focuses on the receiver's decision process for a given channel, understanding channel capacity (discussed in later modules) helps us determine the theoretical maximum rate at which reliable communication can occur over the AWGN channel. ML decoding is the practical method used to approach this capacity.
*   **Error Control Coding (CO3):** For coded systems, ML decoding is applied to the received symbols after they have been encoded. The decoder must choose the transmitted codeword that is most likely to have generated the received sequence. For block codes, this involves comparing the received sequence to all possible codewords in the codebook, often using the Viterbi algorithm for convolutional codes or a similar exhaustive search for block codes.
*   **Modulation Techniques (CO5):** The ML decoding rule is specific to the constellation of the modulation scheme used. Different modulation schemes require different ML decoding logic based on their geometric properties.
*   **Diversity and Equalization (CO6):** ML decoding is often used in conjunction with diversity and equalization techniques. For instance, after combining signals from multiple diversity branches or after equalizing a channel, the resulting signal is passed to an ML decoder.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. Textbooks and Reference Material Summary

*   **Goldsmith:** Provides a thorough treatment of ML detection and its error performance for various modulation schemes in AWGN.
*   **Rappaport:** Covers basic modulation and detection principles, likely including ML detection in his discussion of receivers.
*   **Cover & Thomas:** Discusses the fundamental principles of hypothesis testing and decision rules, where ML is a key concept.
*   **Haykin:** Offers detailed explanations of digital communication systems, including the design and performance of receivers employing ML or related optimal strategies.
*   **Tse & Viswanath:** Introduces information theory and coding, likely touching upon optimal detection in the context of channel capacity and error probability.
*   **Lin & Costello:** Crucial for understanding error control coding, where ML decoding is applied to estimate transmitted codewords.

### 10. Practice Questions and Exercises

**Question 1:**
Consider a binary PAM (Pulse Amplitude Modulation) system transmitting symbols $x \in \{+1, -1\}$ over an AWGN channel with noise $n \sim \mathcal{N}(0, \sigma^2)$. The received signal is $y = x + n$.
(a) State the ML decoding rule for this system.
(b) Derive the probability of error for this ML decoder, assuming symbols are transmitted with equal probability. Express your answer in terms of the $Q$-function.

**Answer 1:**
(a) The ML decoding rule is:
$\hat{x}_{ML} = \begin{cases} +1 & \text{if } y \ge 0 \\ -1 & \text{if } y < 0 \end{cases}$
This minimizes $\|y-x\|^2$.

(b) Let $E_b$ be the energy per bit. For binary PAM with symbols $\{+1, -1\}$, the energy of each symbol is $E_b = (+1)^2 = (-1)^2 = 1$ (assuming unit amplitude). The variance of the noise is $\sigma^2$. The ratio $E_b/\sigma^2$ is related to the SNR. Assuming unit amplitude, the signal has power 1. The noise variance is $\sigma^2$. The parameter $N_0/2$ represents the noise power spectral density. If the symbol duration is $T$, then $E_b = \text{symbol power} \times T$. Assuming the question implies a unit symbol energy and $\sigma^2$ as the noise variance in the decision variable, then $E_b = 1$. The noise variance in the decision variable is $\sigma^2$. If we relate this to $N_0$, $\sigma^2 = N_0/2$. So $E_b/N_0 = 1/(N_0/2) = 2/N_0$. The ratio $E_b/N_0$ is the common SNR measure. The argument of the $Q$-function will be $\sqrt{E_b/N_0}$.

Let's re-evaluate the argument of $Q$. If symbols are $\pm A$, then $E_b = A^2$. Noise variance is $\sigma^2$.
$P(\text{error} | x=+A) = P(y < 0 | x=+A) = P(A+n < 0) = P(n < -A) = Q(A/\sigma)$.
$A/\sigma = \sqrt{A^2/\sigma^2}$. If $A=1$, this is $1/\sigma$.
$E_b = A^2$. So $A/\sigma = \sqrt{E_b}/\sigma$.
We know $\sigma^2 = N_0/2$. So $\sigma = \sqrt{N_0/2}$.
$A/\sigma = \sqrt{E_b} / \sqrt{N_0/2} = \sqrt{2E_b/N_0}$.
So, $P(\text{error} | x=+A) = Q(\sqrt{2E_b/N_0})$.
Since probabilities are symmetric for $x=-1$, $P_e = Q(\sqrt{2E_b/N_0})$.

*Correction*: For binary PAM with symbols $\pm A$, $E_b = A^2$. The noise variance is $\sigma^2$. The ratio is $A^2/\sigma^2$.
If $y \ge 0$, we decide $+A$. Error occurs if $A+n < 0$, i.e., $n < -A$. This probability is $Q(A/\sigma)$.
If $y < 0$, we decide $-A$. Error occurs if $-A+n \ge 0$, i.e., $n \ge A$. This probability is $Q(A/\sigma)$.
So $P_e = Q(A/\sigma)$.
Now, relate $A/\sigma$ to $E_b/N_0$. $E_b = A^2$. $\sigma^2 = N_0/2$.
$A/\sigma = \sqrt{A^2/\sigma^2} = \sqrt{E_b / (N_0/2)} = \sqrt{2E_b/N_0}$.
So, $P_e = Q(\sqrt{2E_b/N_0})$.

*Final check on notation:* If the question assumes the noise variance is directly $\sigma^2$ and $E_b$ is the energy of the symbol, then $A^2 = E_b$. The ratio $A/\sigma = \sqrt{E_b}/\sigma$. If $N_0$ is the *two-sided* power spectral density of the noise, then the variance of the filtered noise (after matched filtering, which is implicit in the decision variable $y$) is $\sigma^2 = N_0/2$. Thus, $A/\sigma = \sqrt{E_b}/\sqrt{N_0/2} = \sqrt{2E_b/N_0}$. This is consistent.

**Question 2:**
Suppose you are using M-PSK modulation with $M=4$ (QPSK). The received signal is $y$.
(a) What is the ML decoding rule?
(b) Describe the decision regions for QPSK in the complex plane.

**Answer 2:**
(a) The ML decoding rule for QPSK is:
$\hat{s}_{ML} = \arg \min_{s_i \in \mathcal{S}} \|y - s_i\|^2$, where $\mathcal{S}$ is the set of the four QPSK constellation points.
This means the receiver finds the constellation point that is closest to the received signal $y$.

(b) The four QPSK constellation points are typically at $(A, A), (-A, A), (-A, -A), (A, -A)$ in the complex plane (scaled by some amplitude $A$). The ML decision regions are formed by the perpendicular bisectors of the lines connecting these points. For QPSK, these bisectors are the real and imaginary axes. The decision regions are four quadrants:
*   Region 1 (Quadrant I): If $Re(y) > 0$ and $Im(y) > 0$, decide for the symbol in the first quadrant.
*   Region 2 (Quadrant II): If $Re(y) < 0$ and $Im(y) > 0$, decide for the symbol in the second quadrant.
*   Region 3 (Quadrant III): If $Re(y) < 0$ and $Im(y) < 0$, decide for the symbol in the third quadrant.
*   Region 4 (Quadrant IV): If $Re(y) > 0$ and $Im(y) < 0$, decide for the symbol in the fourth quadrant.

This is a direct consequence of minimizing the squared Euclidean distance, which for QPSK simplifies to checking the signs of the real and imaginary parts.

**Question 3:**
Why is ML decoding considered optimal in terms of minimizing probability of error for a given channel? (Relate to Hypothesis Testing).

**Answer 3:**
ML decoding is an application of the Neyman-Pearson lemma or more generally, the generalized likelihood ratio test for multiple hypotheses. The problem of deciding which symbol $x_i$ was transmitted, given the received signal $y$, can be framed as a multiple hypothesis testing problem. The null hypothesis $H_i$ is that $x_i$ was transmitted, and the alternative is that some other $x_j$ was transmitted. The likelihood function $P(y|x_i)$ represents the probability of observing $y$ given that $x_i$ was transmitted. By choosing the $x_i$ that maximizes $P(y|x_i)$ (or equivalently, minimizes the "distance" in an appropriate metric), the ML decoder is essentially choosing the hypothesis that is most consistent with the observed data. This strategy directly minimizes the probability of making a wrong decision (error), making it the optimal receiver in this regard, assuming no prior knowledge of symbol probabilities.

### 11. Important Points to Remember

*   **ML Decoding Goal:** Maximize $P(y|x)$, which is equivalent to minimizing the squared Euclidean distance $\|y-x\|^2$ in the AWGN channel.
*   **Equivalence to Minimum Distance:** For AWGN, ML decoding is equivalent to minimum distance decoding.
*   **Optimality:** ML decoding minimizes the probability of symbol error for a given channel and set of transmitted signals.
*   **MAP vs. ML:** ML is a special case of MAP decoding when all transmitted symbols are equally likely.
*   **Complexity:** Can be computationally intensive for large constellations or long codes.
*   **Dependence on Modulation:** The specific ML decoding rule depends on the constellation of the modulation scheme.

This concludes the study notes for Maximum Likelihood Decoding in the context of the AWGN channel.