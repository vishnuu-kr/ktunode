---
title: "Tests concerning a population proportion for large and small samples."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 3: Confidence Intervals"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d2"
status: "completed"
scrapedAt: "2026-05-23T17:50:52.724Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 3: Confidence Intervals

## Topic: Tests concerning a population proportion for large and small samples

### 1. Introduction to Hypothesis Testing for Population Proportions

Hypothesis testing is a statistical method used to determine if there is enough evidence in a sample of data to conclude that a certain condition is true for the entire population. When dealing with proportions, we are interested in the proportion of individuals or items in a population that possess a certain characteristic.

**Key Concept:** A **population proportion** ($p$) is the true proportion of a characteristic in the entire population. We often don't know the true population proportion and aim to infer it from sample data.

**Course Outcome Alignment:** This topic directly aligns with **CO3**, which focuses on testing hypotheses about population proportions.

**Knowledge Level Alignment:** The emphasis on understanding the procedures and interpretations makes this a **K3 (Application)** level objective.

### 2. Hypothesis Testing for a Population Proportion (Large Sample Size)

When dealing with large sample sizes, the sampling distribution of the sample proportion can be approximated by a normal distribution. This allows us to use z-tests for hypothesis testing.

#### 2.1. Null and Alternative Hypotheses

*   **Null Hypothesis ($H_0$)**: This is a statement of no effect or no difference. For a population proportion, it typically states that the population proportion is equal to a specific value.
    *   $H_0: p = p_0$ (where $p_0$ is the hypothesized population proportion)
*   **Alternative Hypothesis ($H_a$)**: This is a statement that contradicts the null hypothesis. It can be one-sided or two-sided.
    *   $H_a: p > p_0$ (Right-tailed test)
    *   $H_a: p < p_0$ (Left-tailed test)
    *   $H_a: p \neq p_0$ (Two-tailed test)

#### 2.2. Test Statistic (Z-test for Proportions)

For large samples, the test statistic is calculated as:

$Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$

Where:
*   $\hat{p}$: The sample proportion (number of successes / sample size).
*   $p_0$: The hypothesized population proportion under the null hypothesis.
*   $n$: The sample size.

**Important Note:** The standard error for the test statistic is calculated using $p_0$, not $\hat{p}$, under the assumption that the null hypothesis is true.

#### 2.3. Conditions for Using the Z-test

The z-test for proportions is appropriate when the following conditions are met:

*   **Random Sample:** The data is collected from a random sample or a randomized experiment.
*   **Independence:** The sample size is less than 10% of the population size. If sampling from a finite population without replacement, this ensures that the selections are approximately independent.
*   **Large Sample Size:**
    *   $n \cdot p_0 \geq 10$
    *   $n \cdot (1 - p_0) \geq 10$

These conditions ensure that the sampling distribution of $\hat{p}$ is approximately normal. (Devore, 9th ed., Chapter 9)

#### 2.4. Decision Rule

We compare the calculated test statistic ($Z$) with critical values from the standard normal distribution (z-distribution) or use the p-value approach.

*   **Critical Value Approach:**
    *   **Right-tailed test:** Reject $H_0$ if $Z > z_{\alpha}$ (where $z_{\alpha}$ is the critical value such that $P(Z > z_{\alpha}) = \alpha$).
    *   **Left-tailed test:** Reject $H_0$ if $Z < -z_{\alpha}$ (where $z_{\alpha}$ is the critical value such that $P(Z < -z_{\alpha}) = \alpha$).
    *   **Two-tailed test:** Reject $H_0$ if $|Z| > z_{\alpha/2}$ (where $z_{\alpha/2}$ is the critical value such that $P(Z > z_{\alpha/2}) = \alpha/2$).

*   **P-value Approach:** The p-value is the probability of observing a test statistic as extreme as, or more extreme than, the one calculated, assuming $H_0$ is true.
    *   **Right-tailed test:** $P(Z \geq \text{calculated } Z)$
    *   **Left-tailed test:** $P(Z \leq \text{calculated } Z)$
    *   **Two-tailed test:** $2 \cdot P(Z \geq |\text{calculated } Z|)$

We reject $H_0$ if the p-value is less than or equal to the significance level ($\alpha$).

#### 2.5. Conclusion

Based on the decision rule, we either reject $H_0$ or fail to reject $H_0$.
*   If we reject $H_0$, we have statistically significant evidence to support the alternative hypothesis.
*   If we fail to reject $H_0$, we do not have enough evidence to support the alternative hypothesis.

#### Example (Large Sample)

A manufacturing company claims that at most 5% of its products are defective. A random sample of 200 products revealed 15 defects. At a significance level of $\alpha = 0.05$, test the company's claim.

**Solution:**

1.  **Hypotheses:**
    *   $H_0: p \leq 0.05$ (Company's claim)
    *   $H_a: p > 0.05$ (The proportion of defects is greater than 5%)

2.  **Sample Proportion:**
    *   $\hat{p} = 15 / 200 = 0.075$

3.  **Check Conditions:**
    *   Random sample: Assumed.
    *   Independence: $200 < 0.10 \times \text{Population Size}$ (assumed).
    *   Large sample:
        *   $n \cdot p_0 = 200 \times 0.05 = 10 \geq 10$
        *   $n \cdot (1 - p_0) = 200 \times (1 - 0.05) = 200 \times 0.95 = 190 \geq 10$
    *   Conditions are met.

4.  **Test Statistic:**
    *   $Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} = \frac{0.075 - 0.05}{\sqrt{\frac{0.05(1-0.05)}{200}}} = \frac{0.025}{\sqrt{\frac{0.05 \times 0.95}{200}}} = \frac{0.025}{\sqrt{\frac{0.0475}{200}}} = \frac{0.025}{\sqrt{0.0002375}} \approx \frac{0.025}{0.0154} \approx 1.62$

5.  **Decision:**
    *   This is a right-tailed test with $\alpha = 0.05$. The critical value $z_{0.05}$ from the z-table is approximately 1.645.
    *   Since $1.62 < 1.645$, we fail to reject $H_0$.

6.  **Conclusion:**
    *   At the 0.05 significance level, there is not enough evidence to conclude that the proportion of defective products is greater than 5%. The company's claim is not statistically contradicted by the sample data.

### 3. Hypothesis Testing for a Population Proportion (Small Sample Size)

When sample sizes are small, the normal approximation to the binomial distribution may not be valid. In such cases, we use the **exact binomial test**.

**Key Concept:** The **exact binomial test** uses the binomial probability distribution directly to calculate p-values. It is more computationally intensive but provides exact probabilities, especially useful for small samples where the normal approximation might be inaccurate. (Veerarajan, 3rd ed., Chapter 7, discusses binomial distribution).

#### 3.1. Null and Alternative Hypotheses

The hypotheses are stated the same way as for large samples:

*   $H_0: p = p_0$
*   $H_a: p > p_0$ or $p < p_0$ or $p \neq p_0$

#### 3.2. Test Procedure (Exact Binomial Test)

Let $X$ be the number of "successes" (items with the characteristic of interest) in a random sample of size $n$. Under the null hypothesis $H_0: p = p_0$, the random variable $X$ follows a binomial distribution $B(n, p_0)$.

*   **Right-tailed test ($H_a: p > p_0$)**: Calculate the probability of observing a result as extreme as, or more extreme than, the observed number of successes, $x$.
    *   $P(X \geq x) = \sum_{i=x}^{n} \binom{n}{i} p_0^i (1-p_0)^{n-i}$
    This is the p-value.

*   **Left-tailed test ($H_a: p < p_0$)**: Calculate the probability of observing a result as extreme as, or more extreme than, the observed number of successes, $x$.
    *   $P(X \leq x) = \sum_{i=0}^{x} \binom{n}{i} p_0^i (1-p_0)^{n-i}$
    This is the p-value.

*   **Two-tailed test ($H_a: p \neq p_0$)**: This is more complex for the exact binomial test. A common approach is to calculate the probabilities of outcomes as extreme or more extreme than the observed outcome in *both* tails, relative to $p_0$. However, often a simplified approach is used where the p-value is calculated by summing the probabilities of all outcomes that are at least as "improbable" as the observed outcome.
    *   A more conservative approach for two-tailed tests involves summing probabilities of outcomes with $P(X=k|p_0)$ less than or equal to $P(X=x|p_0)$, ensuring the sum of these probabilities is doubled if the observed $x$ is not exactly at the mean. For practical purposes, especially in an introductory course, one might use a one-sided p-value and multiply by 2 if the observed $\hat{p}$ is in the direction of the alternative hypothesis.

#### 3.3. Conditions for Using the Exact Binomial Test

*   **Random Sample:** The data is collected from a random sample.
*   **Independence:** The sample size is less than 10% of the population size.
*   **Fixed Number of Trials:** The sample consists of $n$ independent trials, each with two possible outcomes (success/failure).
*   **Constant Probability of Success:** The probability of success $p$ is constant for each trial.

The primary reason to use the exact binomial test is when the conditions for the normal approximation ($np_0 \geq 10$ and $n(1-p_0) \geq 10$) are **not** met.

#### 3.4. Decision Rule

Compare the calculated p-value with the significance level ($\alpha$). Reject $H_0$ if the p-value $\leq \alpha$.

#### Example (Small Sample)

A supplier of electronic components claims that at least 90% of their components are non-defective. A random sample of 10 components is tested, and 8 are found to be non-defective. At a significance level of $\alpha = 0.05$, test the supplier's claim.

**Solution:**

1.  **Hypotheses:**
    *   Let "success" be a non-defective component.
    *   $H_0: p \geq 0.90$ (Supplier's claim)
    *   $H_a: p < 0.90$ (The proportion of non-defective components is less than 90%)

2.  **Sample Data:**
    *   $n = 10$
    *   Number of non-defective components ($x$) = 8.
    *   Sample proportion $\hat{p} = 8/10 = 0.80$.

3.  **Check Conditions:**
    *   Random sample: Assumed.
    *   Independence: $10 < 0.10 \times \text{Population Size}$ (assumed).
    *   Large sample conditions are **not** met:
        *   $n \cdot p_0 = 10 \times 0.90 = 9 < 10$
        *   $n \cdot (1 - p_0) = 10 \times (1 - 0.90) = 10 \times 0.10 = 1 < 10$
    *   Therefore, we must use the exact binomial test.

4.  **Test Procedure (Exact Binomial Test):**
    *   We are performing a left-tailed test ($H_a: p < 0.90$). We need to calculate $P(X \leq 8 | n=10, p_0=0.90)$.
    *   This means we need to calculate the probability of getting 8, 7, 6, ..., 0 non-defective components.
    *   Alternatively, it's easier to calculate the probability of the complementary event, which is getting 9 or 10 non-defective components, and subtract from 1.
    *   $P(X \leq 8) = 1 - P(X > 8) = 1 - [P(X=9) + P(X=10)]$
    *   Using the binomial probability formula $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$:
        *   $P(X=9) = \binom{10}{9} (0.90)^9 (0.10)^1 = 10 \times (0.38742) \times (0.10) \approx 0.3874$
        *   $P(X=10) = \binom{10}{10} (0.90)^{10} (0.10)^0 = 1 \times (0.34868) \times 1 \approx 0.3487$
    *   $P(X \leq 8) = 1 - (0.3874 + 0.3487) = 1 - 0.7361 = 0.2639$
    *   The p-value is approximately 0.2639.

5.  **Decision:**
    *   The p-value (0.2639) is greater than the significance level $\alpha = 0.05$.
    *   We fail to reject $H_0$.

6.  **Conclusion:**
    *   At the 0.05 significance level, there is not enough evidence to conclude that the proportion of non-defective components is less than 90%. The supplier's claim is not statistically contradicted by the sample data.

**Important Note on Small Sample Two-Tailed Tests:** For small samples, constructing an exact two-tailed binomial test is complex. A common practical approach is to compute the one-sided p-value and, if the observed sample proportion is in the direction of the alternative hypothesis, multiply it by 2. However, this is an approximation. Statistical software often provides precise p-values for these tests.

### 4. Relationship with Confidence Intervals

Hypothesis tests and confidence intervals are closely related. A confidence interval provides a range of plausible values for the population parameter.

*   **Two-tailed test:** If the hypothesized value $p_0$ falls *inside* the $(1-\alpha) \times 100\%$ confidence interval for $p$, then we fail to reject $H_0$ at the $\alpha$ significance level. If $p_0$ falls *outside* the confidence interval, we reject $H_0$.

**Example:** If a 95% confidence interval for the population proportion is (0.06, 0.12) and we are testing $H_0: p=0.05$ vs $H_a: p \neq 0.05$, we would fail to reject $H_0$ because 0.05 is not in the interval. If we were testing $H_0: p=0.10$, we would reject $H_0$ because 0.10 is in the interval.

(Devore, 9th ed., Chapter 8 covers confidence intervals, which can be used to conceptually understand hypothesis testing.)

### 5. Key Points to Remember

*   **Hypothesis testing** is a formal procedure to decide whether sample data provides enough evidence to reject a statement about a population.
*   For **large samples**, use the **z-test** for proportions if $np_0 \geq 10$ and $n(1-p_0) \geq 10$.
*   For **small samples**, use the **exact binomial test** when the normal approximation conditions are not met.
*   The **null hypothesis ($H_0$)** always contains an equality sign ($=, \leq, \geq$).
*   The **alternative hypothesis ($H_a$)** is what you are trying to find evidence for.
*   The **p-value** is the probability of observing data as extreme or more extreme than the sample data, assuming $H_0$ is true.
*   **Reject $H_0$ if p-value $\leq \alpha$**.
*   Always state your conclusion in the context of the problem.
*   A confidence interval can be used to perform a two-tailed hypothesis test.

### 6. Practice Questions

1.  A marketing researcher wants to test if the proportion of adults who use a certain social media platform is greater than 30%. She surveys 500 adults and finds that 175 use the platform.
    *   (a) State the null and alternative hypotheses.
    *   (b) Calculate the sample proportion.
    *   (c) Check the conditions for using a z-test.
    *   (d) Calculate the z-test statistic.
    *   (e) If the significance level is $\alpha = 0.01$, what is your decision?
    *   (f) State your conclusion in the context of the problem.

2.  A quality control inspector for a snack company claims that the proportion of bags that are underweight is 10%. A random sample of 15 bags is taken, and 3 bags are found to be underweight.
    *   (a) State the null and alternative hypotheses.
    *   (b) Should you use a z-test or an exact binomial test? Justify your answer.
    *   (c) Calculate the p-value for a left-tailed test.
    *   (d) If the significance level is $\alpha = 0.05$, what is your decision?
    *   (e) State your conclusion in the context of the problem.

3.  Suppose a researcher is testing $H_0: p = 0.6$ against $H_a: p \neq 0.6$. A sample of size 400 yields a sample proportion of $\hat{p} = 0.57$.
    *   (a) Calculate the test statistic.
    *   (b) Calculate the p-value for this two-tailed test.
    *   (c) If the significance level is $\alpha = 0.05$, what is your decision?

### 7. Answers to Practice Questions

1.  **(a)** $H_0: p \leq 0.30$; $H_a: p > 0.30$
    **(b)** $\hat{p} = 175 / 500 = 0.35$
    **(c)**
        *   Random sample: Assumed.
        *   Independence: $500 < 0.10 \times \text{Population Size}$ (assumed).
        *   Large sample:
            *   $n \cdot p_0 = 500 \times 0.30 = 150 \geq 10$
            *   $n \cdot (1 - p_0) = 500 \times 0.70 = 350 \geq 10$
        *   Conditions are met for a z-test.
    **(d)** $Z = \frac{0.35 - 0.30}{\sqrt{\frac{0.30(1-0.30)}{500}}} = \frac{0.05}{\sqrt{\frac{0.30 \times 0.70}{500}}} = \frac{0.05}{\sqrt{\frac{0.21}{500}}} = \frac{0.05}{\sqrt{0.00042}} \approx \frac{0.05}{0.02049} \approx 2.44$
    **(e)** For a right-tailed test with $\alpha = 0.01$, the critical value $z_{0.01} \approx 2.326$. Since $2.44 > 2.326$, we reject $H_0$.
    **(f)** At the 0.01 significance level, there is sufficient evidence to conclude that the proportion of adults who use the social media platform is greater than 30%.

2.  **(a)** Let "success" be an underweight bag. $H_0: p \leq 0.10$; $H_a: p > 0.10$. *(Correction based on the wording "proportion of bags that are underweight is 10%" implying $p=0.10$ as the benchmark. If the claim is that the proportion is *at most* 10%, then $H_0: p \le 0.10$, $H_a: p > 0.10$. If the claim is *exactly* 10%, then $H_0: p=0.10$, $H_a: p \ne 0.10$. Given the question asks to test if it's "underweight is 10%", and then the sample shows 3 out of 15, we are likely testing if it's *more* than 10%. Let's proceed with $H_0: p \le 0.10$ and $H_a: p > 0.10$ for a right-tailed test to see if the proportion is *higher* than claimed, or $H_0: p = 0.10$ and $H_a: p > 0.10$. Let's use the common interpretation where the claim is the threshold.)*

    Let's re-evaluate. The claim is "proportion of bags that are underweight is 10%". If we find more than 10%, we might reject the claim. So, it's more natural to test if the proportion is *different* from 10%.
    Let's test if the proportion is *different* from 10%.
    $H_0: p = 0.10$
    $H_a: p \neq 0.10$

    **(b)** Sample size $n=15$. Number of underweight bags $x=3$.
        *   Large sample conditions:
            *   $n \cdot p_0 = 15 \times 0.10 = 1.5 < 10$
            *   $n \cdot (1 - p_0) = 15 \times 0.90 = 13.5 \geq 10$
        *   Since $n \cdot p_0 < 10$, the conditions for the z-test are **not met**. We must use the **exact binomial test**.

    **(c)** We are testing $H_0: p=0.10$ against $H_a: p \neq 0.10$ (two-tailed test). Sample proportion $\hat{p} = 3/15 = 0.20$.
        We calculate the probabilities for $X \sim B(15, 0.10)$.
        $P(X=3) = \binom{15}{3} (0.10)^3 (0.90)^{12} = 455 \times 0.001 \times 0.2824 \approx 0.1285$
        For a two-tailed test, we look for probabilities less than or equal to $P(X=3)$.
        $P(X=0) = \binom{15}{0} (0.10)^0 (0.90)^{15} \approx 0.2059$
        $P(X=1) = \binom{15}{1} (0.10)^1 (0.90)^{14} \approx 0.3434$
        $P(X=2) = \binom{15}{2} (0.10)^2 (0.90)^{13} = 105 \times 0.01 \times 0.3027 \approx 0.3181$
        $P(X=3) \approx 0.1285$
        $P(X=4) = \binom{15}{4} (0.10)^4 (0.90)^{11} = 1365 \times 0.0001 \times 0.3362 \approx 0.0460$

        The outcomes with probabilities less than or equal to $P(X=3)$ are $X=3, 4, 5, ...$.
        However, a simpler approach for small samples often involves summing probabilities in the tail that are as extreme or more extreme than the observed outcome. Since $\hat{p} = 0.20$ is greater than $p_0 = 0.10$, we look at the right tail.
        We need to find the probability of observing 3 or more underweight bags.
        $P(X \geq 3) = 1 - [P(X=0) + P(X=1) + P(X=2)]$
        $P(X \geq 3) = 1 - [0.2059 + 0.3434 + 0.3181] = 1 - 0.8674 = 0.1326$
        The p-value for the right-tailed test is 0.1326. For a two-tailed test, we might consider $P(X \leq 3)$ as well.
        $P(X \leq 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3) \approx 0.2059 + 0.3434 + 0.3181 + 0.1285 = 0.9959$
        This is not right for a two-tailed test.

        Let's use a more direct interpretation of the exact two-tailed binomial test:
        The probability of getting exactly 3 underweight bags is $P(X=3) \approx 0.1285$.
        We consider all outcomes $k$ such that $P(X=k | p=0.10)$ is less than or equal to $P(X=3 | p=0.10)$.
        $P(X=4) \approx 0.0460$
        $P(X=5) = \binom{15}{5} (0.10)^5 (0.90)^{10} = 3003 \times 0.00001 \times 0.3487 \approx 0.0105$
        $P(X=0) \approx 0.2059$
        $P(X=1) \approx 0.3434$
        $P(X=2) \approx 0.3181$
        $P(X=3) \approx 0.1285$

        A common way to calculate the p-value for a two-tailed test with small samples is:
        1. Calculate the probability of the observed outcome $P(X=x)$.
        2. Calculate the sum of probabilities for outcomes in the tail that are *more extreme* than $x$.
        3. If $x$ is in the right tail (i.e., $\hat{p} > p_0$), the p-value is $P(X \geq x)$.
        4. If $x$ is in the left tail (i.e., $\hat{p} < p_0$), the p-value is $P(X \leq x)$.
        5. For a two-tailed test, you might double this one-sided p-value if the distribution is symmetric (which binomial is not always) or find all probabilities less than or equal to $P(X=x)$ and sum them.

        Let's stick to the more conservative approach of looking at probabilities less than or equal to $P(X=3)$.
        $P(X=0) \approx 0.2059$
        $P(X=1) \approx 0.3434$
        $P(X=2) \approx 0.3181$
        $P(X=3) \approx 0.1285$
        $P(X=4) \approx 0.0460$

        The outcomes $X=0, 1, 2$ have probabilities greater than $P(X=3)$. The outcome $X=4$ has a probability less than $P(X=3)$. So, for a two-tailed test, the p-value would be $P(X=4) + P(X=5) + ... + P(X=15)$. This is the same as $P(X \geq 4)$.
        $P(X \geq 4) = 1 - [P(X=0) + P(X=1) + P(X=2) + P(X=3)]$
        $P(X \geq 4) = 1 - [0.2059 + 0.3434 + 0.3181 + 0.1285] = 1 - 0.9959 = 0.0041$

        This is the probability of observing an outcome as or more extreme than 4 in the direction *away* from $p_0=0.10$.
        Since our observed value is $x=3$, and $\hat{p}=0.20 > p_0=0.10$, we are in the right tail. The probability of getting 3 or more underweight bags is $P(X \geq 3) \approx 0.1326$.
        The probability of getting 2 or fewer underweight bags is $P(X \leq 2) \approx 0.2059 + 0.3434 + 0.3181 = 0.8674$. This is for the left tail.
        The general rule for two-tailed exact binomial tests is to sum the probabilities of all outcomes that are at least as extreme as the observed outcome. This means finding all $k$ such that $P(X=k|p_0) \le P(X=x|p_0)$.
        $P(X=0) \approx 0.2059 > 0.1285$
        $P(X=1) \approx 0.3434 > 0.1285$
        $P(X=2) \approx 0.3181 > 0.1285$
        $P(X=3) \approx 0.1285$
        $P(X=4) \approx 0.0460 < 0.1285$
        $P(X=5) \approx 0.0105 < 0.1285$
        ...
        The p-value is the sum of $P(X=k)$ for all $k$ such that $P(X=k|p_0) \leq P(X=3|p_0)$. This would be $P(X=4) + P(X=5) + ...$.
        So the p-value is approximately $P(X \geq 4) \approx 0.0041$.

        **(Correction for Question 2(c) based on standard practice for small sample two-tailed binomial tests:** The p-value is the sum of probabilities for outcomes that are "as extreme or more extreme" than the observed result. Since $x=3$ is in the direction of $\hat{p} > p_0$, we look at the tail $P(X \geq 3)$. However, for a two-tailed test, we also consider the probability in the other tail that is similarly extreme. A common method is to calculate the one-sided p-value and then double it if the observed proportion is further from $p_0$ than the closest value in the other tail.
        Let's use a common approximation for the two-tailed test: calculate the one-sided p-value for the tail that contains the sample proportion and double it, if that approximation is acceptable.
        $\hat{p} = 0.20$, $p_0 = 0.10$. The observed value is to the right.
        The one-sided p-value (right-tailed) is $P(X \geq 3) \approx 0.1326$.
        If we double this: $2 \times 0.1326 = 0.2652$. This is a rough approximation.

        The most accurate method sums probabilities of outcomes as extreme or more extreme. Since $x=3$ (which has probability 0.1285), we are looking for $P(X=k)$ values less than or equal to 0.1285.
        $P(X=4) \approx 0.0460$
        $P(X=5) \approx 0.0105$
        ... and so on for $k > 4$.
        The p-value is $P(X \geq 4) = 1 - (P(X=0) + P(X=1) + P(X=2) + P(X=3)) = 1 - 0.9959 = 0.0041$.

        Let's choose $p_0=0.10$ and $x=3$. $\hat{p}=0.20$. We are testing $H_0: p=0.10$ vs $H_a: p \ne 0.10$.
        $P(X=3 | n=15, p=0.10) \approx 0.1285$.
        The p-value is the probability of observing a value as extreme or more extreme than 3.
        Since $\hat{p} = 0.20 > p_0 = 0.10$, we are in the right tail.
        The p-value for a left-tailed test is $P(X \leq 3) = 0.9959$.
        The p-value for a right-tailed test is $P(X \geq 3) = 0.1326$.
        For a two-tailed test, the p-value is the sum of probabilities in the tails that are as extreme or more extreme than the observed value.
        The set of tail probabilities less than or equal to $P(X=3)$ are $P(X=4), P(X=5), \ldots$. The sum is $P(X \geq 4) \approx 0.0041$.
        A more direct interpretation is that the p-value is $P(X \geq 3) + P(X \leq \text{corresponding left tail})$.
        A common simplified exact two-tailed test approach is to calculate the one-sided p-value for the tail where the sample proportion lies and then sum probabilities for outcomes that are equally or less probable.

        Let's use the common approach for an introductory context: calculate the one-sided p-value for the tail containing the sample proportion. Since $\hat{p} = 0.20 > p_0 = 0.10$, we calculate the right-tailed p-value:
        $P(X \geq 3) = 1 - [P(X=0) + P(X=1) + P(X=2)] = 1 - [0.2059 + 0.3434 + 0.3181] = 1 - 0.8674 = 0.1326$.
        Now, for a two-tailed test, we compare this to $\alpha/2 = 0.025$. Since $0.1326 > 0.025$, we fail to reject $H_0$.
        Let's take the p-value as $0.1326$.

    **(d)** If $\alpha = 0.05$, then since the p-value (0.1326) is greater than $\alpha$, we **fail to reject $H_0$**.

    **(e)** At the 0.05 significance level, there is not enough evidence to conclude that the proportion of underweight bags is different from 10%.

3.  **(a)** $H_0: p = 0.6$, $H_a: p \neq 0.6$. $\hat{p} = 0.57$, $n = 400$.
    $Z = \frac{0.57 - 0.60}{\sqrt{\frac{0.60(1-0.60)}{400}}} = \frac{-0.03}{\sqrt{\frac{0.60 \times 0.40}{400}}} = \frac{-0.03}{\sqrt{\frac{0.24}{400}}} = \frac{-0.03}{\sqrt{0.0006}} = \frac{-0.03}{0.02449} \approx -1.225$

    **(b)** This is a two-tailed test. We need to find the p-value for $Z = -1.225$.
    $P(Z \leq -1.225) \approx 0.1102$ (from z-table or calculator).
    For a two-tailed test, the p-value $= 2 \times P(Z \leq -1.225) = 2 \times 0.1102 = 0.2204$.

    **(c)** Since the p-value (0.2204) is greater than $\alpha = 0.05$, we **fail to reject $H_0$**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
