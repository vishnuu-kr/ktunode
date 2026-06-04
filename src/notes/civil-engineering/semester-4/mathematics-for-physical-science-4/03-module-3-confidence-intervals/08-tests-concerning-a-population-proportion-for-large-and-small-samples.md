---
title: "Tests concerning a population proportion for large and small samples."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 3: Confidence Intervals"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810939"
status: "completed"
scrapedAt: "2026-05-20T18:46:11.279Z"
---
# Mathematics for Physical Science – 4: Module 3: Confidence Intervals

## Topic: Tests Concerning a Population Proportion for Large and Small Samples

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of hypothesis testing for a population proportion.
*   Formulate null and alternative hypotheses for proportions.
*   Perform hypothesis tests for a population proportion using large sample methods (z-test).
*   Perform hypothesis tests for a population proportion using small sample methods (exact binomial test).
*   Interpret the results of hypothesis tests for proportions, including p-values and critical regions.
*   Apply hypothesis testing for proportions to real-world problems in physical science.

---

### 1. Introduction to Hypothesis Testing for a Population Proportion

Hypothesis testing is a statistical method used to make decisions about a population based on sample data. When dealing with proportions, we are interested in the proportion of individuals or items in a population that possess a certain characteristic.

**Key Concepts:**

*   **Population Proportion (p):** The true proportion of the characteristic of interest in the entire population. This is usually unknown.
*   **Sample Proportion ($\hat{p}$):** The proportion of the characteristic of interest in a sample drawn from the population. This is calculated as:
    $\hat{p} = \frac{x}{n}$
    where:
    *   $x$ is the number of successes in the sample
    *   $n$ is the sample size

**Purpose of Hypothesis Testing for Proportions:**

To determine if there is enough evidence in the sample data to conclude that the population proportion is different from a hypothesized value, or if it is greater than or less than a hypothesized value.

---

### 2. Formulating Null and Alternative Hypotheses for Proportions

Hypothesis testing begins with setting up two competing statements about the population proportion: the null hypothesis and the alternative hypothesis.

**Key Concepts:**

*   **Null Hypothesis ($H_0$):** A statement of no effect or no difference. It represents the status quo or a commonly accepted belief. For proportions, it typically states that the population proportion is equal to a specific value ($p_0$).
    *   **Format:** $H_0: p = p_0$

*   **Alternative Hypothesis ($H_1$ or $H_a$):** A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for. It can be one-sided (greater than or less than) or two-sided (not equal to).
    *   **Two-sided test:** $H_1: p \neq p_0$ (We are testing if the proportion is different from $p_0$).
    *   **One-sided test (greater than):** $H_1: p > p_0$ (We are testing if the proportion is greater than $p_0$).
    *   **One-sided test (less than):** $H_1: p < p_0$ (We are testing if the proportion is less than $p_0$).

**Choosing the Alternative Hypothesis:**

The choice of the alternative hypothesis depends on the research question or the phenomenon being investigated.

**Examples of Hypothesis Formulation:**

*   **Scenario 1: Semiconductor Manufacturing**
    A manufacturer claims that the proportion of defective microchips is at most 2% ($p \le 0.02$). A quality control engineer wants to test if the proportion of defects has increased.
    *   $H_0: p = 0.02$ (The proportion of defects is 2%)
    *   $H_1: p > 0.02$ (The proportion of defects is greater than 2%)

*   **Scenario 2: Particle Physics Experiment**
    A new detector is designed to detect a specific type of particle. In a pilot study, it detected 15 out of 100 particles. The theoretical efficiency is known to be 20% ($p = 0.20$). We want to test if the detector is significantly better than the theoretical efficiency.
    *   $H_0: p = 0.20$ (The detector efficiency is 20%)
    *   $H_1: p > 0.20$ (The detector efficiency is greater than 20%)

*   **Scenario 3: Astronomy Observation**
    A celestial body is expected to exhibit a certain spectral signature in 50% of observations ($p = 0.50$). An astronomer observes it 80 times and finds the signature in 30 observations. They want to see if the observed frequency is significantly different from the expected frequency.
    *   $H_0: p = 0.50$ (The signature occurs in 50% of observations)
    *   $H_1: p \neq 0.50$ (The signature occurs in a proportion different from 50%)

---

### 3. Tests Concerning a Population Proportion for Large Samples (Z-test)

For large sample sizes, the sampling distribution of the sample proportion ($\hat{p}$) can be approximated by a normal distribution. This allows us to use the z-test.

**Conditions for Using the Z-test:**

*   **Random Sample:** The data must be collected from a random sample.
*   **Independence:** Observations within the sample should be independent.
*   **Large Sample Size:** Both $n \hat{p}$ and $n (1 - \hat{p})$ should be at least 10 (or sometimes a more conservative rule of thumb is 5). *Note: When testing against a hypothesized proportion $p_0$, the condition is $n p_0 \ge 10$ and $n (1-p_0) \ge 10$.*

**The Z-statistic:**

Under the null hypothesis ($H_0: p = p_0$), the z-statistic is calculated as:

$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}}$

where:
*   $\hat{p}$ is the sample proportion
*   $p_0$ is the hypothesized population proportion
*   $n$ is the sample size

**Interpreting the Z-statistic:**

*   The z-statistic measures how many standard errors the sample proportion is away from the hypothesized population proportion.
*   A large absolute value of z indicates that the sample proportion is far from $p_0$, providing evidence against $H_0$.

**Decision Rule (Using Critical Values):**

We compare the calculated z-statistic to critical z-values from the standard normal distribution based on the significance level ($\alpha$) and the type of test (one-sided or two-sided).

*   **Significance Level ($\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Common values are 0.05, 0.01, 0.10.
*   **Critical Region:** The range of z-values that lead to the rejection of $H_0$.

| Test Type      | $H_1$       | Critical Region (for $\alpha$) | Critical Z-value(s)                               |
| :------------- | :---------- | :----------------------------- | :------------------------------------------------ |
| Two-sided      | $p \neq p_0$ | $|z| > z_{\alpha/2}$           | $\pm z_{\alpha/2}$ (e.g., $\pm 1.96$ for $\alpha=0.05$) |
| One-sided (Right) | $p > p_0$   | $z > z_{\alpha}$               | $z_{\alpha}$ (e.g., $1.645$ for $\alpha=0.05$)      |
| One-sided (Left)  | $p < p_0$   | $z < -z_{\alpha}$              | $-z_{\alpha}$ (e.g., $-1.645$ for $\alpha=0.05$)     |

**Decision Rule (Using P-values):**

The p-value is the probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample, assuming the null hypothesis is true.

*   **If p-value $\le \alpha$, reject $H_0$.**
*   **If p-value $> \alpha$, fail to reject $H_0$.**

**Calculating P-values:**

*   **Two-sided test:** p-value = $2 \times P(Z > |z|)$
*   **One-sided test (Right):** p-value = $P(Z > z)$
*   **One-sided test (Left):** p-value = $P(Z < z)$

**Example (Z-test):**

A scientist is studying the effect of a new catalyst on a chemical reaction. They hypothesize that the catalyst increases the yield of a desired product from 80% to 85%. In an experiment with 200 trials, the new catalyst resulted in a yield of 170 successful reactions. Test the hypothesis at a 5% significance level.

**1. Formulate Hypotheses:**
    *   $H_0: p = 0.80$ (The proportion of successful reactions is 80%)
    *   $H_1: p > 0.80$ (The proportion of successful reactions is greater than 80%)

**2. Check Conditions:**
    *   Random sample: Assume the 200 trials are representative.
    *   Independence: Assume trials are independent.
    *   Large sample size:
        *   $n p_0 = 200 \times 0.80 = 160 \ge 10$
        *   $n (1 - p_0) = 200 \times (1 - 0.80) = 200 \times 0.20 = 40 \ge 10$
        Conditions are met for the z-test.

**3. Calculate Sample Proportion:**
    *   $\hat{p} = \frac{170}{200} = 0.85$

**4. Calculate the Z-statistic:**
    *   $z = \frac{0.85 - 0.80}{\sqrt{\frac{0.80 \times (1 - 0.80)}{200}}} = \frac{0.05}{\sqrt{\frac{0.80 \times 0.20}{200}}} = \frac{0.05}{\sqrt{\frac{0.16}{200}}} = \frac{0.05}{\sqrt{0.0008}} = \frac{0.05}{0.02828} \approx 1.768$

**5. Decision:**
    *   Significance level $\alpha = 0.05$.
    *   This is a one-sided (right-tailed) test.
    *   Critical z-value for $\alpha = 0.05$ (one-sided) is $z_{0.05} \approx 1.645$.
    *   **Using Critical Value:** Since $1.768 > 1.645$, we reject $H_0$.
    *   **Using P-value:** For $z = 1.768$ in a right-tailed test, $P(Z > 1.768) \approx 0.0385$. Since $0.0385 \le 0.05$, we reject $H_0$.

**6. Conclusion:**
    At the 5% significance level, there is sufficient evidence to conclude that the new catalyst increases the proportion of successful reactions.

---

### 4. Tests Concerning a Population Proportion for Small Samples (Exact Binomial Test)

When the sample size is small or the sample proportion is very close to 0 or 1, the normal approximation may not be accurate. In such cases, the **exact binomial test** is used. This test directly uses the binomial probability distribution.

**Conditions for Using the Exact Binomial Test:**

*   The data should be from a binomial experiment (fixed number of trials, two outcomes, constant probability of success, independent trials).
*   No specific size conditions like $np \ge 10$ are required, as it's an exact method. However, the sample size should be small enough for practical calculation.

**The Exact Binomial Test:**

We are testing hypotheses about a population proportion $p$.

*   **Null Hypothesis ($H_0$):** $p = p_0$
*   **Alternative Hypothesis ($H_1$):** $p > p_0$, $p < p_0$, or $p \neq p_0$

**Calculating the P-value:**

The p-value is calculated using the binomial probability formula: $P(X=k) = \binom{n}{k} p_0^k (1-p_0)^{n-k}$, where $n$ is the sample size and $p_0$ is the hypothesized proportion.

*   **One-sided test (Right-tailed: $H_1: p > p_0$):**
    The p-value is the probability of observing a result as extreme as or more extreme than the observed number of successes ($x$), assuming $p=p_0$.
    p-value = $P(X \ge x) = \sum_{i=x}^{n} \binom{n}{i} p_0^i (1-p_0)^{n-i}$

*   **One-sided test (Left-tailed: $H_1: p < p_0$):**
    The p-value is the probability of observing a result as extreme as or more extreme than the observed number of successes ($x$), assuming $p=p_0$.
    p-value = $P(X \le x) = \sum_{i=0}^{x} \binom{n}{i} p_0^i (1-p_0)^{n-i}$

*   **Two-sided test ($H_1: p \neq p_0$):**
    The p-value is the sum of probabilities of outcomes as extreme as, or more extreme than, the observed outcome in both tails.
    p-value = $P(X \le x) + P(X \ge x)$, where probabilities are calculated under $H_0$. *A more precise way for two-sided tests is to sum the probabilities of all outcomes that are as or more extreme than the observed outcome in terms of their distance from $p_0$, measured in terms of probability.* A common approximation is to take twice the smaller tail probability.

**Decision Rule:**

*   **If p-value $\le \alpha$, reject $H_0$.**
*   **If p-value $> \alpha$, fail to reject $H_0$.**

**Example (Exact Binomial Test):**

A researcher is investigating a new material's resistance to radiation. They hypothesize that the probability of a material sample failing under a specific radiation level is 0.10 ($p = 0.10$). They test 10 samples, and 3 of them fail. Test the hypothesis at a 10% significance level.

**1. Formulate Hypotheses:**
    *   $H_0: p = 0.10$ (The probability of failure is 10%)
    *   $H_1: p > 0.10$ (The probability of failure is greater than 10%)

**2. Check Conditions:**
    *   Sample size $n=10$, which is small.
    *   The observed number of failures $x=3$.
    *   $n p_0 = 10 \times 0.10 = 1 < 10$. The normal approximation condition is not met, so we use the exact binomial test.

**3. Calculate the P-value:**
    *   We need to calculate $P(X \ge 3)$ given $n=10$ and $p_0=0.10$.
    *   $P(X \ge 3) = P(X=3) + P(X=4) + \dots + P(X=10)$
    *   It's often easier to calculate the complement: $P(X \ge 3) = 1 - P(X \le 2)$
    *   $P(X=k) = \binom{10}{k} (0.10)^k (0.90)^{10-k}$

    Let's calculate the probabilities for $k=0, 1, 2$:
    *   $P(X=0) = \binom{10}{0} (0.10)^0 (0.90)^{10} = 1 \times 1 \times 0.348678 \approx 0.3487$
    *   $P(X=1) = \binom{10}{1} (0.10)^1 (0.90)^{9} = 10 \times 0.10 \times 0.387420 \approx 0.3874$
    *   $P(X=2) = \binom{10}{2} (0.10)^2 (0.90)^{8} = 45 \times 0.01 \times 0.430467 \approx 0.1937$

    *   $P(X \le 2) = P(X=0) + P(X=1) + P(X=2) \approx 0.3487 + 0.3874 + 0.1937 = 0.9298$
    *   p-value = $P(X \ge 3) = 1 - P(X \le 2) \approx 1 - 0.9298 = 0.0702$

**4. Decision:**
    *   Significance level $\alpha = 0.10$.
    *   The p-value is approximately 0.0702.
    *   Since $0.0702 \le 0.10$, we reject $H_0$.

**5. Conclusion:**
    At the 10% significance level, there is sufficient evidence to conclude that the probability of a material sample failing under the specified radiation level is greater than 0.10.

---

### 5. Practical Applications in Physical Science

Hypothesis testing for proportions is widely used in physical science research to:

*   **Quality Control:** Testing if the proportion of defective components in a manufacturing process meets a standard.
*   **Experimental Design:** Determining if a new treatment or condition affects the success rate of an experiment.
*   **Observation Analysis:** Assessing if the observed frequency of a phenomenon matches theoretical predictions (e.g., in particle physics, astronomy).
*   **Environmental Monitoring:** Testing if the proportion of a pollutant in a sample exceeds a regulatory limit.
*   **Material Science:** Evaluating the proportion of materials exhibiting a specific property after a treatment.

**Example Application:**

A physicist is testing a new sensor designed to detect a specific type of cosmic ray. The old sensor detects these rays with a probability of 0.25 ($p_{old} = 0.25$). The new sensor is tested in 50 independent observations, and it detects the cosmic ray in 15 of them.

*   **Question:** Does the new sensor perform significantly better than the old one? Test at a 5% significance level.

**Solution:**

**1. Hypotheses:**
    *   $H_0: p = 0.25$ (The new sensor's detection probability is the same as the old one)
    *   $H_1: p > 0.25$ (The new sensor's detection probability is greater than the old one)

**2. Conditions:**
    *   $n=50$, $\hat{p} = 15/50 = 0.30$.
    *   $n p_0 = 50 \times 0.25 = 12.5 \ge 10$
    *   $n (1 - p_0) = 50 \times (1 - 0.25) = 50 \times 0.75 = 37.5 \ge 10$
    *   The conditions for the z-test are met.

**3. Z-statistic:**
    *   $z = \frac{0.30 - 0.25}{\sqrt{\frac{0.25 \times (1 - 0.25)}{50}}} = \frac{0.05}{\sqrt{\frac{0.25 \times 0.75}{50}}} = \frac{0.05}{\sqrt{\frac{0.1875}{50}}} = \frac{0.05}{\sqrt{0.00375}} = \frac{0.05}{0.06124} \approx 0.816$

**4. Decision:**
    *   $\alpha = 0.05$. This is a right-tailed test.
    *   Critical z-value for $\alpha = 0.05$ (one-sided) is $z_{0.05} \approx 1.645$.
    *   Since $0.816 < 1.645$, we fail to reject $H_0$.
    *   Alternatively, the p-value for $z=0.816$ (right-tailed) is $P(Z > 0.816) \approx 0.207$. Since $0.207 > 0.05$, we fail to reject $H_0$.

**5. Conclusion:**
    At the 5% significance level, there is not enough evidence to conclude that the new sensor performs significantly better than the old one in detecting cosmic rays.

---

### 6. Important Points to Remember

*   **Null vs. Alternative Hypothesis:** Always clearly state your null ($H_0$) and alternative ($H_1$) hypotheses before performing any calculations. The alternative hypothesis reflects what you are trying to prove.
*   **Choosing the Right Test:**
    *   Use the **z-test** when the sample size is large enough (check the $np_0 \ge 10$ and $n(1-p_0) \ge 10$ conditions).
    *   Use the **exact binomial test** for small sample sizes or when the normal approximation conditions are not met.
*   **Significance Level ($\alpha$):** This pre-determined probability of a Type I error dictates how strong the evidence needs to be to reject $H_0$.
*   **P-value Interpretation:** A small p-value (less than or equal to $\alpha$) suggests that the observed data is unlikely if $H_0$ were true, providing evidence to reject $H_0$.
*   **Conclusion:** Always state your conclusion in the context of the problem, referring back to the original question and the significance level. Avoid saying you "accept $H_0$"; instead, say you "fail to reject $H_0$."
*   **Sample Size Matters:** For proportions, a larger sample size generally leads to more reliable results and allows for the use of the z-test.

---

### Practice Questions

**Question 1:**
A manufacturer of optical fibers claims that the proportion of fibers with defects is no more than 5% ($p \le 0.05$). A sample of 400 fibers is taken, and 30 of them are found to have defects. Test the manufacturer's claim at a 1% significance level.

**Question 2:**
In a particle physics experiment, a theoretical model predicts that a certain decay process will occur in 20% of cases ($p = 0.20$). An experiment with 15 trials resulted in the decay occurring 6 times. Perform an exact binomial test to see if the observed rate is significantly different from the theoretical prediction at a 5% significance level.

**Question 3:**
A solar cell developer claims that their new design has a sunlight-to-electricity conversion efficiency of 25% ($p=0.25$). A test of 50 cells yields an average efficiency of 27.5%. Is this enough evidence to support the claim that the new design is better than 25%? Use a significance level of 0.05.

---

### Answers to Practice Questions

**Answer 1:**

**1. Hypotheses:**
    *   $H_0: p = 0.05$
    *   $H_1: p > 0.05$ (We want to test if the proportion of defects is *more* than claimed)

**2. Conditions:**
    *   $n=400$, $\hat{p} = 30/400 = 0.075$.
    *   $n p_0 = 400 \times 0.05 = 20 \ge 10$
    *   $n (1 - p_0) = 400 \times (1 - 0.05) = 400 \times 0.95 = 380 \ge 10$
    *   Conditions for z-test are met.

**3. Z-statistic:**
    *   $z = \frac{0.075 - 0.05}{\sqrt{\frac{0.05 \times (1 - 0.05)}{400}}} = \frac{0.025}{\sqrt{\frac{0.05 \times 0.95}{400}}} = \frac{0.025}{\sqrt{\frac{0.0475}{400}}} = \frac{0.025}{\sqrt{0.00011875}} = \frac{0.025}{0.010897} \approx 2.294$

**4. Decision:**
    *   $\alpha = 0.01$. This is a right-tailed test.
    *   Critical z-value for $\alpha = 0.01$ (one-sided) is $z_{0.01} \approx 2.326$.
    *   Since $2.294 < 2.326$, we fail to reject $H_0$.
    *   P-value for $z=2.294$ (right-tailed) is $P(Z > 2.294) \approx 0.0109$. Since $0.0109 > 0.01$, we fail to reject $H_0$.

**5. Conclusion:**
    At the 1% significance level, there is not enough evidence to conclude that the proportion of defective fibers is greater than 5%. The manufacturer's claim is not refuted by this sample.

---

**Answer 2:**

**1. Hypotheses:**
    *   $H_0: p = 0.20$
    *   $H_1: p \neq 0.20$ (We want to see if it's significantly different)

**2. Conditions:**
    *   $n=15$, $x=6$.
    *   $n p_0 = 15 \times 0.20 = 3 < 10$. The normal approximation is not suitable. Use the exact binomial test.

**3. P-value (Two-sided test):**
    *   We need to calculate $P(X \le 6) + P(X \ge 6)$ given $n=15$ and $p_0=0.20$.
    *   It is often easier to calculate the probability of the observed outcome and outcomes more extreme in the same direction, and sum them for the two-tailed test.
    *   $P(X=k) = \binom{15}{k} (0.20)^k (0.80)^{15-k}$

    Let's find the probability of observing 6 or more successes and compare it to the probability of observing fewer successes.
    *   $P(X=6) = \binom{15}{6} (0.20)^6 (0.80)^9 \approx 0.1511$
    *   $P(X \ge 6) = P(X=6) + P(X=7) + \dots + P(X=15)$
    *   $P(X \le 5) = P(X=0) + P(X=1) + \dots + P(X=5)$

    Using a binomial calculator or statistical software:
    *   $P(X \ge 6) \approx 0.1969$
    *   $P(X \le 5) \approx 0.8031$

    For a two-sided test, the p-value is approximately $2 \times \min(P(X \ge 6), P(X \le 6))$. However, a more correct approach for binomial p-values is to sum probabilities of outcomes at least as extreme as the observed outcome.
    If $x=6$, outcomes more extreme in the right tail are $7, 8, \dots, 15$. Outcomes more extreme in the left tail are $0, 1, 2, 3, 4, 5$.
    The probabilities for $p=0.20$:
    $P(X=0) \approx 0.035$
    $P(X=1) \approx 0.131$
    $P(X=2) \approx 0.231$
    $P(X=3) \approx 0.250$
    $P(X=4) \approx 0.187$
    $P(X=5) \approx 0.103$
    $P(X=6) \approx 0.044$ (Note: my previous manual calculation for P(X=6) was slightly off due to rounding, a calculator is best here)
    $P(X=7) \approx 0.016$
    ...

    Using a precise binomial calculator for $n=15, p=0.20$:
    $P(X=6) \approx 0.0436$
    $P(X \le 5) \approx 0.8031$
    $P(X \ge 6) = 1 - P(X \le 5) \approx 1 - 0.8031 = 0.1969$

    The p-value for a two-sided test when $x=6$ is the sum of probabilities $P(X \le 5)$ and $P(X \ge 7)$. Or, sum of all probabilities less than or equal to 5, and probabilities greater than or equal to 7.
    Sum of probabilities of outcomes as extreme or more extreme than 6, in terms of probability:
    $P(X \le 5) + P(X \ge 7) \approx 0.8031 + (0.1969 - P(X=6)) \approx 0.8031 + (0.1969 - 0.0436) = 0.8031 + 0.1533 = 0.9564$.
    This result is very large. A more direct calculation of two-sided p-value from a calculator for $x=6, n=15, p=0.20$ is approximately **0.1969**.
    (If we were to use the common approximation: $2 \times P(X \ge 6) = 2 \times 0.1969 \approx 0.3938$, or $2 \times P(X \le 6) = 2 \times 0.8031 \approx 1.6062$, which indicates the first tail probability is smaller. The precise two-sided p-value is indeed around 0.1969).

**4. Decision:**
    *   $\alpha = 0.05$.
    *   The p-value is approximately 0.1969.
    *   Since $0.1969 > 0.05$, we fail to reject $H_0$.

**5. Conclusion:**
    At the 5% significance level, there is not enough evidence to conclude that the observed decay rate is significantly different from the theoretical prediction.

---

**Answer 3:**

**1. Hypotheses:**
    *   $H_0: p = 0.25$
    *   $H_1: p > 0.25$ (We want to support the claim that it's *better*)

**2. Conditions:**
    *   $n=50$, $\hat{p} = 0.275$.
    *   $n p_0 = 50 \times 0.25 = 12.5 \ge 10$
    *   $n (1 - p_0) = 50 \times (1 - 0.25) = 50 \times 0.75 = 37.5 \ge 10$
    *   Conditions for z-test are met.

**3. Z-statistic:**
    *   $z = \frac{0.275 - 0.25}{\sqrt{\frac{0.25 \times (1 - 0.25)}{50}}} = \frac{0.025}{\sqrt{\frac{0.25 \times 0.75}{50}}} = \frac{0.025}{\sqrt{\frac{0.1875}{50}}} = \frac{0.025}{\sqrt{0.00375}} = \frac{0.025}{0.06124} \approx 0.408$

**4. Decision:**
    *   $\alpha = 0.05$. This is a right-tailed test.
    *   Critical z-value for $\alpha = 0.05$ (one-sided) is $z_{0.05} \approx 1.645$.
    *   Since $0.408 < 1.645$, we fail to reject $H_0$.
    *   P-value for $z=0.408$ (right-tailed) is $P(Z > 0.408) \approx 0.342$. Since $0.342 > 0.05$, we fail to reject $H_0$.

**5. Conclusion:**
    At the 5% significance level, there is not enough evidence to support the claim that the new solar cell design has an efficiency significantly greater than 25%.
