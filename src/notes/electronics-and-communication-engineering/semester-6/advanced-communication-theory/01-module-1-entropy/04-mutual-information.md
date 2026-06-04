---
title: "Mutual Information"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecef"
status: "completed"
scrapedAt: "2026-05-23T17:58:22.278Z"
---
# Advanced Communication Theory: Module 1: Entropy - Mutual Information

This module delves into the fundamental concepts of information theory, focusing on **Mutual Information**. Understanding mutual information is crucial for analyzing the capacity of communication channels and the efficiency of information transmission.

## Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Define and calculate Mutual Information.
*   Relate Mutual Information to entropy and conditional entropy.
*   Understand the properties of Mutual Information.
*   Interpret Mutual Information in the context of communication systems.
*   Apply Mutual Information to analyze channel capacity.

## 1. Introduction to Mutual Information

Mutual Information (MI), denoted by $I(X;Y)$, quantifies the amount of information that one random variable contains about another random variable. In essence, it measures the reduction in uncertainty about one variable when the other variable is known.

**Key Concept:** The core idea behind mutual information is to measure the *shared* information between two random variables. If two variables are independent, knowing one provides no information about the other, and their mutual information is zero. If they are perfectly correlated, knowing one perfectly determines the other, and their mutual information is high.

### 1.1. Definition of Mutual Information

Mutual Information between two discrete random variables $X$ and $Y$ is defined as:

$$I(X;Y) = \sum_{y \in \mathcal{Y}} \sum_{x \in \mathcal{X}} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$

where:
*   $p(x,y)$ is the joint probability mass function of $X$ and $Y$.
*   $p(x)$ is the marginal probability mass function of $X$.
*   $p(y)$ is the marginal probability mass function of $Y$.
*   $\mathcal{X}$ and $\mathcal{Y}$ are the alphabets of $X$ and $Y$ respectively.
*   The logarithm is typically taken to be base 2, measuring information in bits.

**Derivation from Entropy:** Mutual information can also be expressed in terms of entropy:

$$I(X;Y) = H(X) - H(X|Y)$$
$$I(X;Y) = H(Y) - H(Y|X)$$
$$I(X;Y) = H(X) + H(Y) - H(X,Y)$$

where:
*   $H(X)$ is the entropy of $X$.
*   $H(X|Y)$ is the conditional entropy of $X$ given $Y$.
*   $H(Y|X)$ is the conditional entropy of $Y$ given $X$.
*   $H(X,Y)$ is the joint entropy of $X$ and $Y$.

**Textbook Reference:** This fundamental definition and its relationship to entropy are extensively covered in Chapter 2 of "Elements of Information Theory" by Cover and Thomas.

### 1.2. Relationship with Entropy and Conditional Entropy

*   **$H(X)$:** Entropy of $X$ represents the uncertainty in $X$.
*   **$H(X|Y)$:** Conditional entropy of $X$ given $Y$ represents the remaining uncertainty in $X$ after $Y$ is known.
*   **$I(X;Y) = H(X) - H(X|Y)$:** This equation signifies that the mutual information is the reduction in uncertainty about $X$ achieved by knowing $Y$. If $Y$ provides perfect information about $X$, then $H(X|Y) = 0$, and $I(X;Y) = H(X)$. If $X$ and $Y$ are independent, then $H(X|Y) = H(X)$, and $I(X;Y) = 0$.

**Course Outcome Alignment:** This directly addresses **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information.** (Knowledge Level: K2)

### 1.3. Properties of Mutual Information

Mutual Information has several important properties that make it a powerful tool in information theory:

*   **Non-negativity:** $I(X;Y) \ge 0$. Information gained cannot be negative.
*   **Symmetry:** $I(X;Y) = I(Y;X)$. The information $X$ has about $Y$ is the same as the information $Y$ has about $X$.
*   **Data Processing Inequality:** If $X \rightarrow Y \rightarrow Z$ forms a Markov chain, then $I(X;Z) \le I(X;Y)$ and $I(X;Z) \le I(Y;Z)$. This means that processing data can only reduce or keep the mutual information the same, never increase it. This is a crucial concept in communication systems, as intermediate processing steps (like quantization or filtering) cannot add information.
*   **Self-Information:** $I(X;X) = H(X)$. A variable contains complete information about itself.
*   **Independence:** If $X$ and $Y$ are independent, $I(X;Y) = 0$.
*   **Maximum Value:** $I(X;Y) \le \min(H(X), H(Y))$. The information shared cannot exceed the total information contained in either variable.

**Textbook Reference:** These properties are fundamental and discussed throughout information theory texts, including Chapter 2 of Cover and Thomas and relevant sections in Goldsmith.

## 2. Mutual Information in Communication Systems

Mutual Information is the bedrock of understanding the capacity of a communication channel.

### 2.1. Channel Capacity

The **channel capacity**, denoted by $C$, is the maximum rate at which information can be transmitted reliably over a communication channel. It is defined as the maximum of the mutual information between the channel input $X$ and the channel output $Y$ over all possible input distributions $p(x)$:

$$C = \max_{p(x)} I(X;Y)$$

**Key Concept:** Channel capacity represents the theoretical upper limit on the data rate that can be achieved over a noisy channel without making the probability of error arbitrarily small.

**Textbook Reference:** This is a central theme in wireless communication and information theory. Chapter 2 of Goldsmith and Chapter 5 of Cover and Thomas are essential references for channel capacity. Rappaport also discusses channel capacity in the context of wireless systems.

### 2.2. Examples of Mutual Information Calculation

Let's illustrate with some simple examples:

**Example 1: Binary Symmetric Channel (BSC)**

Consider a BSC where the input $X \in \{0, 1\}$ and the output $Y \in \{0, 1\}$. The probability of a bit being flipped is $p$, and the probability of being transmitted correctly is $1-p$.

The joint probabilities are:
*   $p(0,0) = p(X=0)p(Y=0|X=0) = q(1-p)$
*   $p(1,1) = p(X=1)p(Y=1|X=1) = (1-q)(1-p)$
*   $p(0,1) = p(X=0)p(Y=1|X=0) = qp$
*   $p(1,0) = p(X=1)p(Y=0|X=1) = (1-q)p$

Assuming a uniform input distribution, $p(X=0) = p(X=1) = 0.5$, so $q=0.5$.
Then:
*   $p(0,0) = 0.5(1-p)$
*   $p(1,1) = 0.5(1-p)$
*   $p(0,1) = 0.5p$
*   $p(1,0) = 0.5p$

Marginal probabilities:
*   $p(Y=0) = p(0,0) + p(1,0) = 0.5(1-p) + 0.5p = 0.5$
*   $p(Y=1) = p(0,1) + p(1,1) = 0.5p + 0.5(1-p) = 0.5$

Now, we calculate $I(X;Y)$:

$$I(X;Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$

Since $p(x)=0.5$ and $p(y)=0.5$ for all $x,y$:
$$I(X;Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{0.25}$$

$$I(X;Y) = p(0,0)\log\frac{p(0,0)}{0.25} + p(0,1)\log\frac{p(0,1)}{0.25} + p(1,0)\log\frac{p(1,0)}{0.25} + p(1,1)\log\frac{p(1,1)}{0.25}$$

$$I(X;Y) = 0.5(1-p)\log\frac{0.5(1-p)}{0.25} + 0.5p\log\frac{0.5p}{0.25} + 0.5p\log\frac{0.5p}{0.25} + 0.5(1-p)\log\frac{0.5(1-p)}{0.25}$$

$$I(X;Y) = 0.5(1-p)\log(2(1-p)) + p\log(2p) + 0.5(1-p)\log(2(1-p))$$

$$I(X;Y) = (1-p)\log(2(1-p)) + p\log(2p)$$

Using $\log(ab) = \log a + \log b$:
$$I(X;Y) = (1-p)(\log 2 + \log(1-p)) + p(\log 2 + \log p)$$
$$I(X;Y) = (1-p)(1 + \log(1-p)) + p(1 + \log p)$$
$$I(X;Y) = 1 - p + (1-p)\log(1-p) + p + p\log p$$
$$I(X;Y) = 1 + (1-p)\log(1-p) + p\log p$$

This is the standard formula for the capacity of a BSC with error probability $p$, assuming a uniform input distribution. The capacity is maximized for $p=0.5$, where $I(X;Y) = 1 + 0.5\log(0.5) + 0.5\log(0.5) = 1 + 0.5(-1) + 0.5(-1) = 0$. This is incorrect. Let's re-evaluate.

The expression for $I(X;Y)$ is:
$I(X;Y) = \sum_{y} \sum_{x} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$

For BSC with uniform input: $p(x)=1/2, p(y)=1/2$.
$p(0,0) = (1-p)/2$, $p(1,1) = (1-p)/2$
$p(0,1) = p/2$, $p(1,0) = p/2$

$I(X;Y) = \frac{1-p}{2}\log\frac{(1-p)/2}{1/4} + \frac{p}{2}\log\frac{p/2}{1/4} + \frac{p}{2}\log\frac{p/2}{1/4} + \frac{1-p}{2}\log\frac{(1-p)/2}{1/4}$
$I(X;Y) = (1-p)\log\frac{(1-p)/2}{1/4} + p\log\frac{p/2}{1/4}$
$I(X;Y) = (1-p)\log(2(1-p)) + p\log(2p)$
$I(X;Y) = (1-p)(1 + \log(1-p)) + p(1 + \log p)$
$I(X;Y) = 1-p + (1-p)\log(1-p) + p + p\log p$
$I(X;Y) = 1 + (1-p)\log(1-p) + p\log p$

This expression is $1 - H(p)$, where $H(p) = -p\log p - (1-p)\log(1-p)$ is the binary entropy function.

So, for a BSC with uniform input, $I(X;Y) = 1 - H(p)$.
The capacity $C = \max_{p(x)} I(X;Y)$. For BSC, the capacity is achieved with uniform input.
Thus, $C_{BSC} = 1 - H(p)$.
If $p=0.5$, $C_{BSC} = 1 - H(0.5) = 1 - (-0.5 \log 0.5 - 0.5 \log 0.5) = 1 - (-0.5(-1) - 0.5(-1)) = 1 - (0.5 + 0.5) = 1 - 1 = 0$. This is still incorrect.

Let's re-examine the calculation. The formula for $I(X;Y)$ is correct. The error might be in the interpretation of the maximum.
The capacity is the maximum MI over input distributions. For BSC, the MI is maximized when $p(x)$ is uniform.

Let's use $H(X) - H(X|Y)$.
$H(X) = 1$ bit for uniform input.
$H(X|Y) = H(Y|X)$ due to symmetry.
$H(Y|X) = \sum_x p(x) H(Y|X=x)$
For BSC, $p(x)=1/2$.
$H(Y|X=0) = H(p) = -p\log p - (1-p)\log(1-p)$
$H(Y|X=1) = H(p) = -p\log p - (1-p)\log(1-p)$
So, $H(X|Y) = 1/2 H(p) + 1/2 H(p) = H(p)$.
$I(X;Y) = H(X) - H(X|Y) = 1 - H(p)$.
This means the capacity of a BSC is $1-H(p)$.
The maximum value of $H(p)$ is 1 (at $p=0.5$).
So the minimum value of $I(X;Y)$ is $1-1=0$, which is correct for $p=0.5$.

**Important Point:** When $p=0.5$, the output $Y$ is completely random and independent of the input $X$. Thus, knowing $Y$ gives no information about $X$, and $I(X;Y)=0$. The channel is useless.

**Example 2: Deterministic Channel**

Consider a channel where $Y=X$.
$p(x,y) = p(x)$ if $y=x$, and $0$ otherwise.
$p(x,y) = p(x)$
$p(x) = \sum_y p(x,y) = p(x)$
$p(y) = \sum_x p(x,y) = p(y|x)p(x)$. If $Y=X$, $p(y|x) = 1$ if $y=x$, 0 otherwise. So $p(y=x) = p(x)$.
$p(x)p(y) = p(x)p(y)$.
The term in the sum is $p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$.
If $y=x$, $p(x,y) = p(x)$. The denominator is $p(x)p(x)$.
$p(x,y) = p(x)$.
$p(x) = p(x)$.
$p(y) = p(y)$.
So, $p(x,y) = p(x)$ if $y=x$.
$p(x)p(y) = p(x)p(x)$ if $y=x$? No.
If $Y=X$, then $p(y=x) = p(x)$.
$p(y) = \sum_x p(y|x)p(x) = p(y|y)p(y) = 1 \cdot p(y) = p(y)$.
$p(x,y) = p(y|x)p(x)$. If $Y=X$, $p(y|x) = 1$ if $y=x$, 0 otherwise.
So $p(x,y) = p(x)$ if $y=x$.
$p(x)p(y) = p(x)p(y)$.
The term in the sum for $p(x,y)$ is only non-zero when $y=x$.
So, $\sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)} = \sum_x p(x, x) \log \frac{p(x, x)}{p(x)p(x)}$
$= \sum_x p(x) \log \frac{p(x)}{p(x)p(x)} = \sum_x p(x) \log \frac{1}{p(x)}$
$= \sum_x -p(x) \log p(x) = H(X)$.
So, $I(X;Y) = H(X)$ if $Y=X$. This means the channel transmits all the information from the source.

**Example 3: Noisy Channel with Uniform Input**

Consider a channel where the output is the input plus noise, modulo some value, and we assume a uniform input distribution.

Let $X$ be a random variable taking values in $\{0, 1, \dots, M-1\}$ with $p(x) = 1/M$.
Let $Y = X + Z \pmod M$, where $Z$ is a random variable representing noise, independent of $X$.

$p(x,y) = P(X=x, Y=y) = P(Y=y|X=x) P(X=x)$
$P(Y=y|X=x) = P(x+Z \pmod M = y) = P(Z = y-x \pmod M) = p_Z(y-x \pmod M)$.
$p(x,y) = p_Z(y-x \pmod M) \frac{1}{M}$.

$p(x) = 1/M$.
$p(y) = \sum_{x'} p(x',y) = \sum_{x'} p_Z(y-x' \pmod M) \frac{1}{M} = \frac{1}{M} \sum_{x'} p_Z(y-x' \pmod M)$.
Let $k = y-x' \pmod M$. As $x'$ ranges over $\{0, \dots, M-1\}$, $k$ also ranges over $\{0, \dots, M-1\}$.
So, $p(y) = \frac{1}{M} \sum_k p_Z(k) = \frac{1}{M} \cdot 1 = \frac{1}{M}$.
This shows that if the input is uniform and the noise distribution is symmetric (e.g., circularly symmetric, or a single value of noise), the output distribution is also uniform.

Now calculate $I(X;Y)$:
$I(X;Y) = \sum_{y=0}^{M-1} \sum_{x=0}^{M-1} \frac{1}{M} p_Z(y-x \pmod M) \log \frac{\frac{1}{M} p_Z(y-x \pmod M)}{(1/M)(1/M)}$
$I(X;Y) = \sum_{y=0}^{M-1} \sum_{x=0}^{M-1} \frac{1}{M} p_Z(y-x \pmod M) \log \frac{p_Z(y-x \pmod M)}{1/M}$

Let $k = y-x \pmod M$.
$I(X;Y) = \sum_{k=0}^{M-1} \sum_{x=0}^{M-1} \frac{1}{M} p_Z(k) \log \frac{p_Z(k)}{1/M}$
$I(X;Y) = \sum_{k=0}^{M-1} \frac{1}{M} p_Z(k) \log \frac{p_Z(k)}{1/M} \sum_{x=0}^{M-1} 1$
$I(X;Y) = \sum_{k=0}^{M-1} \frac{1}{M} p_Z(k) \log \frac{p_Z(k)}{1/M} \cdot M$
$I(X;Y) = \sum_{k=0}^{M-1} p_Z(k) \log \frac{p_Z(k)}{1/M}$

This is $H(Z)$ where the alphabet size is $M$ and each symbol has probability $1/M$. This is the entropy of the noise $Z$ itself.
This result highlights that for uniform input and symmetric noise, the mutual information is equal to the entropy of the noise. This seems counterintuitive. Let's re-check the formulas.

Using $I(X;Y) = H(Y) - H(Y|X)$:
$H(Y) = H(1/M)$ for uniform distribution, which is $\log M$.
$H(Y|X) = \sum_x p(x) H(Y|X=x) = \sum_x \frac{1}{M} H(Y|X=x)$.
$H(Y|X=x) = H(x+Z \pmod M | X=x) = H(Z \pmod M)$.
Since $Z$ is independent of $X$, $H(Z \pmod M)$ is simply the entropy of $Z$.
$H(Y|X) = H(Z)$.

So, $I(X;Y) = \log M - H(Z)$.
The channel capacity is $C = \max_{p(x)} I(X;Y)$. If the input can be chosen freely, and the noise distribution is fixed, the capacity is $C = \log M - H(Z)$. This is the Shannon-Hartley theorem if $Z$ is Gaussian noise.

**For Example 3, the mutual information depends on the input distribution $p(x)$. The calculation above assumed uniform input.**
If we want to find the capacity, we need to maximize $I(X;Y)$ over $p(x)$.
$I(X;Y) = H(Y) - H(Y|X)$
$H(Y|X) = H(Z)$ (as derived above, independent of $x$).
$I(X;Y) = H(Y) - H(Z)$.
To maximize $I(X;Y)$, we need to maximize $H(Y)$. The maximum entropy for a given alphabet size occurs when the distribution is uniform.
So, if the alphabet size is $M$, the maximum $H(Y)$ is $\log M$.
Thus, $C = \log M - H(Z)$.

**Important Note:** For a Gaussian channel with AWGN, the capacity is given by $C = B \log(1 + S/N)$, where $B$ is bandwidth, $S$ is signal power, and $N$ is noise power. This is a continuous-time analog. The discrete-time version relates to Gaussian random variables and their entropies.

### 2.3. Mutual Information and Channel Capacity in Wireless

In wireless communication, the channel is often characterized by fading and noise. Mutual information is used to:

*   **Determine the maximum achievable data rate:** The capacity of a wireless channel tells us the theoretical upper bound on how fast we can transmit data reliably.
*   **Analyze the impact of fading:** Fading can cause the channel to change over time, affecting the mutual information and thus the achievable data rate.
*   **Evaluate the effectiveness of techniques like diversity and coding:** These techniques aim to increase the mutual information and improve performance in the presence of noise and fading.

**Textbook Reference:** Goldsmith's "Wireless Communications" provides extensive coverage of mutual information in the context of fading channels and its relation to channel capacity. Tse and Viswanath also offer a rigorous treatment.

**Course Outcome Alignment:**
*   **CO1:** Understanding mutual information is key to explaining these measures. (K2)
*   **CO4:** Explaining the basic principles of wireless communication often involves discussing channel capacity and how information is transmitted. (K2)
*   **CO5:** Analyzing the performance of modulation techniques involves understanding how they affect the mutual information between the transmitted and received signals, especially in fading channels. (K2)

## 3. Practice Questions and Answers

**Question 1:**
Let $X$ be a random variable with $P(X=0) = 0.8$ and $P(X=1) = 0.2$. Let $Y$ be a random variable such that $Y=X$ with probability $0.9$ and $Y \neq X$ with probability $0.1$. Calculate $I(X;Y)$.

**Answer:**
First, we need to find the joint probability distribution $p(x,y)$ and marginal probabilities $p(x)$ and $p(y)$.

Given $p(X=0) = 0.8$ and $p(X=1) = 0.2$.

The conditional probabilities are:
$p(Y=0|X=0) = 0.9$
$p(Y=1|X=0) = 0.1$
$p(Y=1|X=1) = 0.9$
$p(Y=0|X=1) = 0.1$

Now, calculate joint probabilities:
$p(0,0) = p(Y=0|X=0) p(X=0) = 0.9 \times 0.8 = 0.72$
$p(0,1) = p(Y=1|X=0) p(X=0) = 0.1 \times 0.8 = 0.08$
$p(1,0) = p(Y=0|X=1) p(X=1) = 0.1 \times 0.2 = 0.02$
$p(1,1) = p(Y=1|X=1) p(X=1) = 0.9 \times 0.2 = 0.18$

Marginal probabilities:
$p(Y=0) = p(0,0) + p(1,0) = 0.72 + 0.02 = 0.74$
$p(Y=1) = p(0,1) + p(1,1) = 0.08 + 0.18 = 0.26$

We can use the formula $I(X;Y) = H(X) - H(X|Y)$.
$H(X) = -0.8 \log_2(0.8) - 0.2 \log_2(0.2)$
$H(X) \approx -0.8(-0.3219) - 0.2(-2.3219) \approx 0.2575 + 0.4644 = 0.7219$ bits.

Now, calculate $H(X|Y)$:
$H(X|Y) = \sum_{y} p(y) H(X|Y=y)$
$H(X|Y=0) = -p(X=0|Y=0)\log_2 p(X=0|Y=0) - p(X=1|Y=0)\log_2 p(X=1|Y=0)$
$p(X=0|Y=0) = \frac{p(0,0)}{p(Y=0)} = \frac{0.72}{0.74} \approx 0.973$
$p(X=1|Y=0) = \frac{p(1,0)}{p(Y=0)} = \frac{0.02}{0.74} \approx 0.027$
$H(X|Y=0) \approx -0.973 \log_2(0.973) - 0.027 \log_2(0.027)$
$H(X|Y=0) \approx -0.973(-0.038) - 0.027(-5.25) \approx 0.037 + 0.142 = 0.179$ bits.

$H(X|Y=1) = -p(X=0|Y=1)\log_2 p(X=0|Y=1) - p(X=1|Y=1)\log_2 p(X=1|Y=1)$
$p(X=0|Y=1) = \frac{p(0,1)}{p(Y=1)} = \frac{0.08}{0.26} \approx 0.308$
$p(X=1|Y=1) = \frac{p(1,1)}{p(Y=1)} = \frac{0.18}{0.26} \approx 0.692$
$H(X|Y=1) \approx -0.308 \log_2(0.308) - 0.692 \log_2(0.692)$
$H(X|Y=1) \approx -0.308(-1.70) - 0.692(-0.53) \approx 0.524 + 0.367 = 0.891$ bits.

$H(X|Y) = p(Y=0) H(X|Y=0) + p(Y=1) H(X|Y=1)$
$H(X|Y) \approx 0.74 \times 0.179 + 0.26 \times 0.891 \approx 0.1325 + 0.2317 = 0.3642$ bits.

$I(X;Y) = H(X) - H(X|Y) \approx 0.7219 - 0.3642 = 0.3577$ bits.

Alternatively, using $I(X;Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$:
$p(0)p(0) = 0.8 \times 0.74 = 0.592$
$p(0)p(1) = 0.8 \times 0.26 = 0.208$
$p(1)p(0) = 0.2 \times 0.74 = 0.148$
$p(1)p(1) = 0.2 \times 0.26 = 0.052$

$I(X;Y) = 0.72 \log \frac{0.72}{0.592} + 0.08 \log \frac{0.08}{0.208} + 0.02 \log \frac{0.02}{0.148} + 0.18 \log \frac{0.18}{0.052}$
$I(X;Y) = 0.72 \log(1.216) + 0.08 \log(0.385) + 0.02 \log(0.135) + 0.18 \log(3.462)$
$I(X;Y) \approx 0.72(0.273) + 0.08(-1.37) + 0.02(-2.88) + 0.18(1.78)$
$I(X;Y) \approx 0.1966 - 0.1096 - 0.0576 + 0.3204 \approx 0.35$ bits.
(Slight differences due to rounding).

**Question 2:**
Consider a channel with input $X$ and output $Y$. If $X$ and $Y$ are independent, what is $I(X;Y)$? Explain why.

**Answer:**
If $X$ and $Y$ are independent, then $p(x,y) = p(x)p(y)$.
The formula for mutual information is $I(X;Y) = \sum_{y} \sum_{x} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$.
Substituting $p(x,y) = p(x)p(y)$:
$I(X;Y) = \sum_{y} \sum_{x} p(x)p(y) \log \frac{p(x)p(y)}{p(x)p(y)}$
$I(X;Y) = \sum_{y} \sum_{x} p(x)p(y) \log(1)$
Since $\log(1) = 0$, the entire sum is zero.
$I(X;Y) = 0$.

This is because independence means that knowing the value of $Y$ provides no information about the value of $X$, and vice-versa. The uncertainty in $X$ remains the same whether $Y$ is known or not.

**Question 3:**
What is the physical interpretation of channel capacity?

**Answer:**
Channel capacity is the theoretical maximum rate at which information can be transmitted reliably over a noisy communication channel. It represents the highest possible average mutual information between the channel input and output, achieved by optimizing the input signal distribution. Any rate below capacity can be achieved with an arbitrarily small probability of error, while any rate above capacity will inevitably lead to a high probability of error.

## 4. Important Points to Remember

*   **Mutual Information measures shared information:** It quantifies the reduction in uncertainty about one variable when another is known.
*   **Symmetry:** $I(X;Y) = I(Y;X)$.
*   **Non-negativity:** $I(X;Y) \ge 0$.
*   **Data Processing Inequality:** Processing data can only reduce mutual information.
*   **Channel Capacity:** The maximum mutual information between channel input and output, representing the maximum reliable data rate.
*   **Key Formulae:**
    *   $I(X;Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$
    *   $I(X;Y) = H(X) - H(X|Y)$
    *   $C = \max_{p(x)} I(X;Y)$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 5. Further Reading and References

*   **Elements of Information Theory by Cover and Thomas (2nd Ed.)**: Chapters 2 and 5 are crucial for a deep understanding of entropy and channel capacity.
*   **Wireless Communications by Andrea Goldsmith**: Chapters 2 and 3 discuss information theory measures and channel capacity in the context of wireless systems.
*   **Wireless Communication: Principles and Practice by Theodore S. Rappaport**: While more focused on systems, it touches upon the fundamental concepts of information theory and channel capacity in its early chapters.
*   **Fundamentals of Wireless Communication by David Tse and Pramod Viswanath**: Provides a rigorous mathematical treatment of information theory concepts applied to wireless channels.

---

This concludes the notes on Mutual Information. Understanding this concept is foundational for the rest of the course.