---
title: "Hypotheses and Test Procedures"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 3: Confidence Intervals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35daa"
status: "completed"
scrapedAt: "2026-05-23T16:17:01.322Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE– 4

## Module 3: Confidence Intervals

### Topic: Hypotheses and Test Procedures

**Learning Outcomes:**

*   Understand the fundamental concepts of hypothesis testing.
*   Formulate null and alternative hypotheses for various scenarios.
*   Identify and understand the different types of errors in hypothesis testing.
*   Explain the procedure for conducting a hypothesis test.
*   Differentiate between one-tailed and two-tailed tests.
*   Apply hypothesis testing procedures to real-world problems relevant to electrical science.

**Alignment with Course Outcomes:**

This topic directly supports **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.** (Knowledge Level: K3) Understanding hypothesis testing is crucial for making inferences about population characteristics based on sample data, a core aspect of statistical analysis in electrical science.

---

### 1. Introduction to Hypothesis Testing

Hypothesis testing is a formal procedure used to make a decision about a population parameter based on sample data. It's a cornerstone of inferential statistics, allowing us to draw conclusions and validate claims about populations from which we've drawn samples.

**Key Concepts:**

*   **Population:** The entire group of individuals or items that we are interested in studying.
*   **Sample:** A subset of the population that is selected for study.
*   **Parameter:** A numerical characteristic of a population (e.g., population mean $\mu$, population proportion $p$).
*   **Statistic:** A numerical characteristic of a sample (e.g., sample mean $\bar{x}$, sample proportion $\hat{p}$).

**Purpose in Electrical Science:**

Hypothesis testing is vital in electrical science for:
*   Evaluating the performance of new electronic components or systems.
*   Determining if a manufacturing process meets quality control standards.
*   Assessing the effectiveness of signal processing algorithms.
*   Validating theoretical models against experimental data.

**Referenced Textbooks:**

*   **Devore (2016):** Introduces hypothesis testing as a method for deciding between two competing statements about a population characteristic.
*   **Veerarajan (2008):** Provides a thorough explanation of the principles of hypothesis testing and its applications.

---

### 2. Formulating Hypotheses

At the heart of hypothesis testing are two competing statements about a population parameter: the null hypothesis and the alternative hypothesis.

**Key Concepts and Definitions:**

*   **Null Hypothesis ($H_0$):**
    *   A statement of no effect, no difference, or no relationship. It represents the status quo or the assumption we are trying to disprove.
    *   It always contains an equality sign ($=$, $\le$, or $\ge$).
    *   Example: $H_0: \mu = \mu_0$ (The population mean is equal to a specific value $\mu_0$).

*   **Alternative Hypothesis ($H_a$ or $H_1$):**
    *   A statement that contradicts the null hypothesis. It represents what we are trying to find evidence for.
    *   It contains an inequality sign ($\ne$, $<$, or $>$).
    *   The choice of the inequality sign depends on the research question.

**Types of Alternative Hypotheses:**

*   **Two-Tailed Alternative:** The population parameter is different from the hypothesized value.
    *   Example: $H_a: \mu \ne \mu_0$. This is used when we are interested in detecting a difference in either direction.
*   **One-Tailed Alternative (Left-Tailed):** The population parameter is less than the hypothesized value.
    *   Example: $H_a: \mu < \mu_0$. This is used when we are interested in detecting a decrease.
*   **One-Tailed Alternative (Right-Tailed):** The population parameter is greater than the hypothesized value.
    *   Example: $H_a: \mu > \mu_0$. This is used when we are interested in detecting an increase.

**Formulating Hypotheses for Electrical Science:**

*   **Scenario 1: Component Lifespan**
    *   A manufacturer claims their new resistors have an average lifespan of 50,000 hours. A quality control engineer wants to test if the average lifespan is less than 50,000 hours.
    *   $H_0: \mu = 50,000$ hours (The average lifespan is 50,000 hours).
    *   $H_a: \mu < 50,000$ hours (The average lifespan is less than 50,000 hours). - **Left-tailed test**

*   **Scenario 2: Signal-to-Noise Ratio (SNR)**
    *   A digital signal processor is designed to achieve an average SNR of at least 30 dB. A researcher wants to test if the processor meets this specification.
    *   $H_0: \mu \ge 30$ dB (The average SNR is at least 30 dB).
    *   $H_a: \mu < 30$ dB (The average SNR is less than 30 dB). - **Left-tailed test** (Note: When the null hypothesis includes $\ge$ or $\le$, the alternative will have $<$ or $>$, and vice versa).

*   **Scenario 3: Network Latency**
    *   A network administrator wants to know if the average latency for data packets between two servers has changed from the baseline of 15 ms.
    *   $H_0: \mu = 15$ ms (The average latency is 15 ms).
    *   $H_a: \mu \ne 15$ ms (The average latency is different from 15 ms). - **Two-tailed test**

**Referenced Textbooks:**

*   **Devore (2016):** Emphasizes the importance of correctly stating $H_0$ and $H_a$ based on the research question.
*   **Ross (2020):** Discusses how to translate research questions into specific hypothesis statements.

---

### 3. Types of Errors in Hypothesis Testing

When we conduct a hypothesis test, we are making a decision based on sample data, which inherently involves uncertainty. This can lead to incorrect decisions.

**Key Concepts and Definitions:**

*   **Type I Error (False Positive):**
    *   Rejecting the null hypothesis ($H_0$) when it is actually true.
    *   The probability of a Type I error is denoted by $\alpha$ (alpha), also known as the **significance level**.
    *   **Example:** Concluding that a new electronic component is faulty (rejecting $H_0: \mu = \mu_{good}$) when it is actually working correctly.

*   **Type II Error (False Negative):**
    *   Failing to reject the null hypothesis ($H_0$) when it is actually false.
    *   The probability of a Type II error is denoted by $\beta$ (beta).
    *   **Example:** Concluding that a new electronic component is working correctly (failing to reject $H_0: \mu = \mu_{good}$) when it is actually faulty.

**The Relationship between $\alpha$ and $\beta$:**

*   For a given sample size, $\alpha$ and $\beta$ are inversely related. Decreasing the probability of a Type I error ($\alpha$) generally increases the probability of a Type II error ($\beta$), and vice versa.

**Power of a Test:**

*   **Power:** The probability of correctly rejecting a false null hypothesis. It is calculated as $1 - \beta$.
    *   A test with higher power is more likely to detect a false null hypothesis.

**Trade-off:**

*   The choice of $\alpha$ involves a trade-off between the risks of Type I and Type II errors. A smaller $\alpha$ is generally desired, but it might increase $\beta$.

**Example:**

Consider testing if a new manufacturing process produces resistors with a mean resistance of 100 ohms ($H_0: \mu = 100$).

*   **Type I Error:** Concluding the process is not producing 100-ohm resistors when it actually is. (Cost: Potentially discarding good products, loss of production efficiency).
*   **Type II Error:** Concluding the process is producing 100-ohm resistors when it is actually producing resistors with a different mean resistance. (Cost: Shipping faulty products, customer dissatisfaction).

**Referenced Textbooks:**

*   **Devore (2016):** Dedicates a significant section to the types of errors and their probabilities, including the concept of power.
*   **Veerarajan (2008):** Clearly defines Type I and Type II errors and illustrates their implications.

---

### 4. Test Procedures

Hypothesis testing follows a structured procedure to ensure objectivity and reproducibility.

**Key Steps in Hypothesis Testing:**

1.  **State the Null ($H_0$) and Alternative ($H_a$) Hypotheses:** Clearly define the competing statements about the population parameter.

2.  **Choose the Significance Level ($\alpha$):** Select the probability of making a Type I error. Common values are 0.05, 0.01, or 0.10. The choice depends on the consequences of a Type I error.

3.  **Select the Appropriate Test Statistic:** This is a value calculated from the sample data that will be used to make a decision. The choice depends on the population parameter being tested, the sample size, and whether the population standard deviation is known.
    *   **z-test:** Used when the population standard deviation ($\sigma$) is known, or when the sample size is large ($n \ge 30$) and $\sigma$ is unknown (using the sample standard deviation $s$ as an estimate).
    *   **t-test:** Used when the population standard deviation ($\sigma$) is unknown and the sample size is small ($n < 30$). Assumes the population is approximately normally distributed.

4.  **Determine the Decision Rule (Critical Region):** This specifies the values of the test statistic that will lead to the rejection of the null hypothesis.
    *   The decision rule is based on the significance level ($\alpha$) and the type of test (one-tailed or two-tailed).
    *   **Critical Value:** The boundary value(s) in the distribution of the test statistic that separates the rejection region from the non-rejection region.

5.  **Collect Data and Calculate the Test Statistic:** Obtain a random sample from the population and compute the value of the chosen test statistic.

6.  **Make a Decision:** Compare the calculated test statistic to the critical value(s).
    *   If the test statistic falls within the rejection region (critical region), reject $H_0$.
    *   If the test statistic does not fall within the rejection region, fail to reject $H_0$.

7.  **Interpret the Results:** State the conclusion in the context of the original problem.

**Referenced Textbooks:**

*   **Devore (2016):** Outlines the seven-step procedure for hypothesis testing.
*   **Veerarajan (2008):** Provides detailed explanations and examples of each step in the procedure.
*   **Ross (2020):** Reinforces the systematic approach to hypothesis testing.

---

### 5. One-Tailed vs. Two-Tailed Tests

The direction of the alternative hypothesis determines whether the test is one-tailed or two-tailed.

**Key Concepts:**

*   **Two-Tailed Test:**
    *   Used when the alternative hypothesis states that the parameter is *different* from the hypothesized value ($H_a: \mu \ne \mu_0$).
    *   The rejection region is split into two tails of the sampling distribution.
    *   The significance level $\alpha$ is divided equally between the two tails ($\alpha/2$ in each tail).
    *   **Example:** Testing if a sensor's output voltage has drifted from its specified value.

*   **One-Tailed Test:**
    *   Used when the alternative hypothesis states that the parameter is *less than* or *greater than* the hypothesized value ($H_a: \mu < \mu_0$ or $H_a: \mu > \mu_0$).
    *   The entire rejection region is in one tail of the sampling distribution.

    *   **Left-Tailed Test:** ($H_a: \mu < \mu_0$)
        *   The rejection region is in the left tail.
        *   The entire significance level $\alpha$ is in the left tail.
        *   **Example:** Testing if the failure rate of a new circuit board has increased.

    *   **Right-Tailed Test:** ($H_a: \mu > \mu_0$)
        *   The rejection region is in the right tail.
        *   The entire significance level $\alpha$ is in the right tail.
        *   **Example:** Testing if a new manufacturing process has increased the mean resistance of a component.

**Decision Rule Examples ($\alpha = 0.05$):**

*   **Two-Tailed Test for $\mu$ (z-test):** Reject $H_0$ if $z < -z_{\alpha/2}$ or $z > z_{\alpha/2}$. For $\alpha = 0.05$, $z_{0.025} = 1.96$. Reject $H_0$ if $z < -1.96$ or $z > 1.96$.
*   **Left-Tailed Test for $\mu$ (z-test):** Reject $H_0$ if $z < -z_{\alpha}$. For $\alpha = 0.05$, $z_{0.05} = 1.645$. Reject $H_0$ if $z < -1.645$.
*   **Right-Tailed Test for $\mu$ (z-test):** Reject $H_0$ if $z > z_{\alpha}$. For $\alpha = 0.05$, $z_{0.05} = 1.645$. Reject $H_0$ if $z > 1.645$.

**Referenced Textbooks:**

*   **Devore (2016):** Clearly illustrates the critical regions for one-tailed and two-tailed tests.
*   **Veerarajan (2008):** Provides examples differentiating between the types of tests and how to set up critical regions.

---

### 6. Application Examples in Electrical Science

Let's apply the hypothesis testing procedure to some practical scenarios.

**Example 1: Testing the Mean Resistance of a Component (z-test)**

A manufacturer produces resistors that are supposed to have a mean resistance of $100 \Omega$. A sample of 36 resistors is taken, and the sample mean resistance is found to be $101.5 \Omega$. The population standard deviation of resistance is known to be $\sigma = 5 \Omega$. Test the hypothesis that the mean resistance is actually $100 \Omega$ at a significance level of $\alpha = 0.05$.

**Solution:**

1.  **Hypotheses:**
    *   $H_0: \mu = 100 \Omega$
    *   $H_a: \mu \ne 100 \Omega$ (We are testing if the mean has changed, so a two-tailed test is appropriate).

2.  **Significance Level:**
    *   $\alpha = 0.05$

3.  **Test Statistic:**
    *   Since the population standard deviation is known and the sample size is $n=36$ (large enough for z-test even if $\sigma$ were unknown), we use the z-test.
    *   $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$

4.  **Decision Rule:**
    *   This is a two-tailed test with $\alpha = 0.05$. The critical values are $z_{0.025} = 1.96$ and $-z_{0.025} = -1.96$.
    *   Reject $H_0$ if $z < -1.96$ or $z > 1.96$.

5.  **Calculate Test Statistic:**
    *   $\bar{x} = 101.5 \Omega$
    *   $\mu_0 = 100 \Omega$
    *   $\sigma = 5 \Omega$
    *   $n = 36$
    *   $z = \frac{101.5 - 100}{5 / \sqrt{36}} = \frac{1.5}{5 / 6} = \frac{1.5}{0.8333} \approx 1.8$

6.  **Make a Decision:**
    *   The calculated z-statistic (1.8) is not less than -1.96 and not greater than 1.96. It falls within the non-rejection region.
    *   Therefore, we **fail to reject** $H_0$.

7.  **Interpret Results:**
    *   At the 0.05 significance level, there is not enough evidence to conclude that the mean resistance of the resistors is different from $100 \Omega$.

**Example 2: Testing Signal Quality (t-test)**

A new communication system is being tested. The desired average signal-to-noise ratio (SNR) is 25 dB. A sample of 10 readings from the system yields the following SNRs (in dB): 23.5, 24.2, 22.8, 25.1, 24.5, 23.9, 24.8, 23.2, 25.5, 24.0.
Test if the mean SNR is less than 25 dB at a significance level of $\alpha = 0.01$. Assume the SNR follows a normal distribution.

**Solution:**

1.  **Hypotheses:**
    *   $H_0: \mu = 25$ dB (The mean SNR is 25 dB).
    *   $H_a: \mu < 25$ dB (The mean SNR is less than 25 dB). - **Left-tailed test**

2.  **Significance Level:**
    *   $\alpha = 0.01$

3.  **Test Statistic:**
    *   The population standard deviation is unknown, and the sample size is small ($n=10$). We use the t-test.
    *   Degrees of freedom ($df$) = $n - 1 = 10 - 1 = 9$.
    *   $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$, where $s$ is the sample standard deviation.

4.  **Calculate Sample Mean and Standard Deviation:**
    *   Sum of SNRs = $23.5 + 24.2 + 22.8 + 25.1 + 24.5 + 23.9 + 24.8 + 23.2 + 25.5 + 24.0 = 241.5$
    *   $\bar{x} = \frac{241.5}{10} = 24.15$ dB
    *   Calculate sample variance ($s^2$):
        *   Sum of squared differences from mean:
            $(23.5-24.15)^2 + (24.2-24.15)^2 + ... + (24.0-24.15)^2 = 5.085$
        *   $s^2 = \frac{5.085}{n-1} = \frac{5.085}{9} \approx 0.565$
    *   $s = \sqrt{0.565} \approx 0.7517$ dB

5.  **Calculate Test Statistic:**
    *   $t = \frac{24.15 - 25}{0.7517 / \sqrt{10}} = \frac{-0.85}{0.7517 / 3.162} = \frac{-0.85}{0.2377} \approx -3.576$

6.  **Decision Rule:**
    *   This is a left-tailed test with $\alpha = 0.01$ and $df = 9$.
    *   From the t-distribution table, the critical value $t_{0.01, 9} = -2.821$.
    *   Reject $H_0$ if $t < -2.821$.

7.  **Make a Decision:**
    *   The calculated t-statistic (-3.576) is less than the critical value (-2.821).
    *   Therefore, we **reject** $H_0$.

8.  **Interpret Results:**
    *   At the 0.01 significance level, there is sufficient evidence to conclude that the mean SNR of the new communication system is less than 25 dB.

**Referenced Textbooks:**

*   **Devore (2016):** Provides numerous examples of applying both z-tests and t-tests.
*   **Veerarajan (2008):** Offers a variety of case studies relevant to engineering.
*   **Ross (2020):** Illustrates hypothesis testing in practical engineering contexts.

---

### 7. Practice Questions

**Question 1:**
A manufacturer of microprocessors claims that their chips have an average processing speed of at least 3.5 GHz. A sample of 25 chips is taken, and the sample mean speed is 3.4 GHz. The population standard deviation is known to be 0.2 GHz.
(a) State the null and alternative hypotheses.
(b) What type of test would you use (one-tailed or two-tailed) and why?
(c) Calculate the test statistic for this problem.
(d) If the significance level is $\alpha = 0.05$, what is your decision?

**Question 2:**
A quality control manager for a supplier of electrical cables wants to test if the mean breaking strength of their cables is less than the specified minimum of 5000 N. A sample of 15 cables is tested, yielding a sample mean breaking strength of 4950 N and a sample standard deviation of 100 N. Assume the breaking strengths are normally distributed.
(a) State the null and alternative hypotheses.
(b) What type of test would you use and why?
(c) Calculate the test statistic.
(d) If the significance level is $\alpha = 0.01$, what is your decision?

**Question 3:**
Explain the difference between a Type I error and a Type II error in hypothesis testing. Give an example in the context of electrical engineering for each type of error.

**Question 4:**
For a two-tailed test with a significance level of $\alpha = 0.10$, what are the critical values for a z-test?

---

### 8. Answers to Practice Questions

**Answer 1:**
(a) $H_0: \mu \ge 3.5$ GHz, $H_a: \mu < 3.5$ GHz
(b) A left-tailed test is appropriate because the claim is "at least" and the engineer is testing if it's *less than* the claimed value.
(c) Using the z-test: $z = \frac{3.4 - 3.5}{0.2 / \sqrt{25}} = \frac{-0.1}{0.2 / 5} = \frac{-0.1}{0.04} = -2.5$
(d) For a left-tailed test with $\alpha = 0.05$, the critical value is $z_{0.05} = -1.645$. Since the calculated $z = -2.5$ is less than -1.645, we reject $H_0$.

**Answer 2:**
(a) $H_0: \mu \ge 5000$ N, $H_a: \mu < 5000$ N
(b) A left-tailed t-test is appropriate because the population standard deviation is unknown and the sample size is small. The alternative hypothesis specifies a direction of inequality.
(c) Sample mean $\bar{x} = 4950$ N, sample standard deviation $s = 100$ N, $n = 15$. Degrees of freedom $df = 15 - 1 = 14$.
$t = \frac{4950 - 5000}{100 / \sqrt{15}} = \frac{-50}{100 / 3.873} = \frac{-50}{25.819} \approx -1.937$
(d) For a left-tailed t-test with $\alpha = 0.01$ and $df = 14$, the critical value is $t_{0.01, 14} \approx -2.624$. Since the calculated $t = -1.937$ is not less than -2.624, we fail to reject $H_0$.

**Answer 3:**
*   **Type I Error (False Positive):** Rejecting the null hypothesis when it is actually true.
    *   *Example:* Concluding that a new power supply design is producing an unacceptable level of voltage ripple (rejecting $H_0: \text{ripple} \le \text{acceptable limit}$) when it is, in fact, within acceptable limits.
*   **Type II Error (False Negative):** Failing to reject the null hypothesis when it is actually false.
    *   *Example:* Failing to detect that a manufacturing process is producing faulty microchips that operate outside their specified parameters (failing to reject $H_0: \text{chips} \le \text{specification}$) when they are actually faulty.

**Answer 4:**
For a two-tailed test with $\alpha = 0.10$, the significance level is split equally between the two tails: $\alpha/2 = 0.05$. The critical values are $z_{0.05}$ and $-z_{0.05}$. From the standard normal distribution table, $z_{0.05} \approx 1.645$. Therefore, the critical values are approximately **1.645** and **-1.645**.

---

### 9. Important Points to Remember

*   **Hypothesis testing is a decision-making process based on sample evidence.** It's about assessing the plausibility of a claim about a population.
*   **Correctly formulating $H_0$ and $H_a$ is paramount.** The entire test hinges on these statements.
*   **The choice between a one-tailed and two-tailed test depends entirely on the research question and the alternative hypothesis.**
*   **$\alpha$ is the probability of a Type I error, chosen *before* the test.**
*   **$\beta$ is the probability of a Type II error.** We aim to minimize both, but there's a trade-off.
*   **The test statistic's distribution depends on whether the population standard deviation is known or unknown and the sample size.**
*   **"Failing to reject $H_0$" does not mean $H_0$ is true, but rather that there isn't enough evidence to reject it.**

---
This concludes the notes on Hypotheses and Test Procedures. These concepts are foundational for understanding statistical inference in electrical science.
