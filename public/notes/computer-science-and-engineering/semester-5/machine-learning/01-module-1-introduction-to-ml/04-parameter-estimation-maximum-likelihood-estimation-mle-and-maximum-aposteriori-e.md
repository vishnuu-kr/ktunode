---
title: "Parameter Estimation - Maximum likelihood estimation (MLE) and maximum aposteriori estimation (MAP)"
subject: "MACHINE LEARNING"
module: "Module 1: Introduction to ML :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5ab"
status: "completed"
scrapedAt: "2026-05-20T16:46:24.270Z"
---
# MACHINE LEARNING: Module 1 - Introduction to ML
## Topic: Parameter Estimation - Maximum Likelihood Estimation (MLE) and Maximum A Posteriori Estimation (MAP)

**Learning Outcomes:**

*   Understand the concept of parameter estimation in the context of machine learning.
*   Define and explain Maximum Likelihood Estimation (MLE).
*   Define and explain Maximum A Posteriori Estimation (MAP).
*   Differentiate between MLE and MAP estimation methods.
*   Apply MLE and MAP to simple problems (e.g., estimating the parameter of a Bernoulli distribution).
*   Understand the role of prior knowledge in MAP estimation.
*   Identify situations where MLE or MAP might be more appropriate.

---

### 1. Introduction to Parameter Estimation

*   **Definition:** Parameter estimation is the process of using sample data to estimate the values of parameters that define an underlying probability distribution. These parameters describe the population from which the sample data was drawn.

*   **Importance:** Many machine learning models are based on statistical distributions. Accurately estimating the parameters of these distributions is crucial for model performance.

*   **Examples:**
    *   Estimating the mean and variance of a Gaussian distribution.
    *   Estimating the probability of success in a Bernoulli distribution (e.g., coin flip).
    *   Estimating the weights in a linear regression model.

### 2. Maximum Likelihood Estimation (MLE)

*   **Definition:** Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a probability distribution by finding the parameter values that maximize the likelihood function.  In other words, MLE finds the parameter values that make the observed data most probable.

*   **Likelihood Function:** The likelihood function, denoted as L(θ; x), represents the probability of observing the data x given the parameter values θ.  It is crucial to understand that the likelihood function is *not* a probability distribution over θ. It's a function of θ given the data x.

    *   `θ`: Represents the parameter(s) we are trying to estimate.
    *   `x`: Represents the observed data.
    *   For independent and identically distributed (i.i.d.) data points x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>, the likelihood function is the product of the probability density/mass functions for each data point:

        L(θ; x) = P(x<sub>1</sub>|θ) * P(x<sub>2</sub>|θ) * ... * P(x<sub>n</sub>|θ)

*   **Goal of MLE:**  Find the value of θ that maximizes L(θ; x).  This value is denoted as θ<sub>MLE</sub>.

*   **Log-Likelihood:**  In practice, it's often easier to maximize the log-likelihood function, denoted as log L(θ; x), because taking the logarithm transforms the product into a sum.  This simplifies the optimization process.  Since the logarithm is a monotonically increasing function, maximizing the likelihood is equivalent to maximizing the log-likelihood.

*   **Steps for MLE:**
    1.  **Write down the likelihood function:**  L(θ; x) = P(x<sub>1</sub>|θ) * P(x<sub>2</sub>|θ) * ... * P(x<sub>n</sub>|θ)
    2.  **Take the logarithm of the likelihood function:** log L(θ; x) = log P(x<sub>1</sub>|θ) + log P(x<sub>2</sub>|θ) + ... + log P(x<sub>n</sub>|θ)
    3.  **Differentiate the log-likelihood with respect to θ:** d(log L(θ; x))/dθ
    4.  **Set the derivative equal to zero and solve for θ:** d(log L(θ; x))/dθ = 0  =>  θ = θ<sub>MLE</sub>
    5.  **Verify that the solution is a maximum (optional):**  Take the second derivative and check if it's negative.

*   **Example: Estimating the parameter of a Bernoulli distribution (coin flip)**

    *   **Scenario:** We flip a coin *n* times and observe *k* heads. We want to estimate the probability of getting heads, denoted by *p*.
    *   **Probability Mass Function (PMF) of Bernoulli:** P(x|p) = p<sup>x</sup>(1-p)<sup>(1-x)</sup>, where x = 1 for heads and x = 0 for tails.
    *   **Likelihood Function:**  L(p; x) = p<sup>k</sup>(1-p)<sup>(n-k)</sup>
    *   **Log-Likelihood Function:** log L(p; x) = k log(p) + (n-k) log(1-p)
    *   **Derivative of Log-Likelihood:** d(log L(p; x))/dp = k/p - (n-k)/(1-p)
    *   **Setting the derivative to zero and solving for p:** k/p - (n-k)/(1-p) = 0  =>  p<sub>MLE</sub> = k/n
    *   **Result:** The MLE estimate for the probability of heads is simply the observed proportion of heads in the data.

### 3. Maximum A Posteriori Estimation (MAP)

*   **Definition:** Maximum A Posteriori (MAP) estimation is a method of estimating the parameters of a probability distribution by finding the parameter values that maximize the *posterior* probability distribution.  MAP incorporates prior knowledge about the parameters.

*   **Posterior Probability:** The posterior probability, denoted as P(θ|x), represents the probability of the parameter values θ given the observed data x.  It is calculated using Bayes' Theorem:

    P(θ|x) = [P(x|θ) * P(θ)] / P(x)

    *   `P(θ|x)`:  Posterior probability (probability of parameters given the data)
    *   `P(x|θ)`:  Likelihood (probability of the data given the parameters) - Same as in MLE.
    *   `P(θ)`:  Prior probability (our belief about the parameters before observing any data). This is the key difference from MLE.
    *   `P(x)`:  Marginal likelihood (probability of the data), also called the evidence.  It acts as a normalizing constant to ensure that the posterior integrates to 1. Often ignored during MAP optimization because it doesn't depend on θ.

*   **Goal of MAP:** Find the value of θ that maximizes P(θ|x).  This value is denoted as θ<sub>MAP</sub>.

*   **MAP Formula (Ignoring the Evidence):** Since we're interested in maximizing with respect to θ, we can ignore P(x) and focus on maximizing the numerator:

    θ<sub>MAP</sub> = argmax<sub>θ</sub> [P(x|θ) * P(θ)]

*   **Log-Posterior:** Similar to MLE, we often maximize the log-posterior instead of the posterior itself:

    log P(θ|x) ∝ log P(x|θ) + log P(θ)

*   **Steps for MAP:**
    1.  **Choose a prior distribution P(θ):** This reflects your prior beliefs about the parameters.
    2.  **Write down the posterior distribution (ignoring the evidence):** P(θ|x) ∝ P(x|θ) * P(θ)
    3.  **Take the logarithm of the posterior distribution:** log P(θ|x) ∝ log P(x|θ) + log P(θ)
    4.  **Differentiate the log-posterior with respect to θ:** d(log P(θ|x))/dθ
    5.  **Set the derivative equal to zero and solve for θ:** d(log P(θ|x))/dθ = 0  =>  θ = θ<sub>MAP</sub>
    6.  **Verify that the solution is a maximum (optional):**  Take the second derivative and check if it's negative.

*   **Example: Estimating the parameter of a Bernoulli distribution (coin flip) with a Beta prior**

    *   **Scenario:** Same as before, we flip a coin *n* times and observe *k* heads. We want to estimate the probability of getting heads, *p*.  However, we now have a prior belief that the coin is likely to be fair.
    *   **Likelihood Function:**  L(p; x) = p<sup>k</sup>(1-p)<sup>(n-k)</sup>  (same as MLE)
    *   **Prior Distribution:**  We choose a Beta distribution as the prior for *p* because the Beta distribution is a conjugate prior for the Bernoulli distribution.  This means that if we have a Beta prior and a Bernoulli likelihood, the posterior will also be a Beta distribution, making the calculations easier. The Beta distribution is defined as: P(p) = (p<sup>α-1</sup>(1-p)<sup>β-1</sup>) / B(α, β), where B(α, β) is the Beta function and α and β are hyperparameters that control the shape of the prior.  If we believe the coin is likely fair, we can choose α and β to be close to each other, e.g., α = 5, β = 5. A higher value of alpha and beta means a stronger belief in that prior.
    *   **Posterior Distribution (ignoring the evidence):** P(p|x) ∝ p<sup>k</sup>(1-p)<sup>(n-k)</sup> * p<sup>α-1</sup>(1-p)<sup>β-1</sup> = p<sup>(k+α-1)</sup>(1-p)<sup>(n-k+β-1)</sup>
    *   **Log-Posterior:** log P(p|x) ∝ (k+α-1)log(p) + (n-k+β-1)log(1-p)
    *   **Derivative of Log-Posterior:** d(log P(p|x))/dp = (k+α-1)/p - (n-k+β-1)/(1-p)
    *   **Setting the derivative to zero and solving for p:** (k+α-1)/p - (n-k+β-1)/(1-p) = 0  =>  p<sub>MAP</sub> = (k+α-1) / (n+α+β-2)
    *   **Result:** The MAP estimate for the probability of heads is a weighted average of the observed proportion of heads (k/n) and the prior belief (related to α and β).

### 4. Comparison of MLE and MAP

| Feature          | MLE                                   | MAP                                         |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| Objective        | Maximize the likelihood function L(θ; x) | Maximize the posterior distribution P(θ|x) |
| Formula          | θ<sub>MLE</sub> = argmax<sub>θ</sub> P(x|θ)   | θ<sub>MAP</sub> = argmax<sub>θ</sub> P(x|θ) * P(θ)  |
| Prior Knowledge  | No prior knowledge incorporated      | Incorporates prior knowledge P(θ)          |
| Robustness to small datasets | Lower, very sensitive to observed data     | Higher, prior regularizes the estimate     |
| Applications     | Large datasets, when no prior info available| Small datasets, when prior info is available    |
| Effect of prior with increasing data |  Becomes negligible | Becomes negligible |

### 5. When to use MLE vs. MAP

*   **MLE:**
    *   When you have a large dataset.  The effect of the prior in MAP becomes negligible as the dataset grows.
    *   When you have no prior knowledge about the parameters.
    *   When computational simplicity is important.

*   **MAP:**
    *   When you have a small dataset.  The prior can help regularize the estimate and prevent overfitting.
    *   When you have prior knowledge about the parameters.
    *   When you want to incorporate beliefs or constraints into the estimation process.

### 6. Important Points to Remember

*   MLE finds the parameter values that make the observed data most likely.
*   MAP finds the parameter values that are most probable given both the observed data and our prior beliefs.
*   MAP incorporates prior knowledge, which can be helpful when data is limited.
*   The choice between MLE and MAP depends on the size of the dataset and the availability of prior information.
*   The prior distribution in MAP plays a crucial role in the final estimate. Choose a prior that reflects your prior beliefs accurately.
*   As the amount of data increases, the influence of the prior in MAP diminishes, and MAP converges to MLE.

### 7. Practice Questions and Exercises

1.  **Exercise:** You are trying to estimate the probability that a web user will click on a certain advertisement.  You show the ad to 100 users and observe 15 clicks.
    *   a) What is the MLE estimate of the click-through rate (probability of a click)?
    *   b) Suppose you have a prior belief that the click-through rate is likely to be around 5%.  How could you incorporate this belief using MAP estimation with a Beta prior? (Specify values for alpha and beta). Calculate the MAP estimate.

    **Answer:**
    *   a) MLE: p<sub>MLE</sub> = 15/100 = 0.15
    *   b)  We want a Beta prior centered around 0.05.  Let's choose α = 1.5 and β = 28.5. This yields E[p] = alpha / (alpha + beta) = 1.5 / 30 = 0.05. Then: p<sub>MAP</sub> = (15 + 1.5 - 1) / (100 + 1.5 + 28.5 - 2) = 15.5 / 128 = 0.121

2.  **Question:** Explain the difference between the likelihood function and the posterior distribution.

    **Answer:** The likelihood function, L(θ; x), represents the probability of observing the data *x* given a specific set of parameters *θ*. It's a function of *θ* given *x*. The posterior distribution, P(θ|x), represents the probability of the parameters *θ* given the observed data *x*. It is calculated using Bayes' Theorem and incorporates both the likelihood and a prior belief about the parameters.

3.  **Question:** In what situation would you prefer MAP estimation over MLE?  Why?

    **Answer:**  I would prefer MAP estimation over MLE when I have a small dataset or prior knowledge about the parameters. In small datasets, MLE estimates can be highly sensitive to the specific data points observed and may lead to overfitting.  MAP incorporates prior beliefs, which can regularize the estimation process and lead to more robust and reasonable parameter estimates.

4.  **Exercise:** You have a dataset of heights of students in a class.  Assume the heights are normally distributed. How would you estimate the mean and variance using MLE? (Outline the steps)

    **Answer:**
    1.  **Write down the likelihood function:** Assuming independent and identically distributed (i.i.d.) data, the likelihood is the product of the probability density function (PDF) of the normal distribution for each data point.  The PDF is given by:  f(x; μ, σ<sup>2</sup>) = (1 / (σ√(2π))) * exp(-(x - μ)<sup>2</sup> / (2σ<sup>2</sup>)), where μ is the mean and σ<sup>2</sup> is the variance. L(μ, σ<sup>2</sup>; x) = ∏<sub>i=1</sub><sup>n</sup> f(x<sub>i</sub>; μ, σ<sup>2</sup>)
    2.  **Take the logarithm of the likelihood function:** This transforms the product into a sum.
    3.  **Differentiate the log-likelihood with respect to μ and σ<sup>2</sup>:**  This will involve taking partial derivatives.
    4.  **Set the derivatives equal to zero and solve for μ and σ<sup>2</sup>:** This will give you the MLE estimates for the mean and variance. The MLE estimates turn out to be the sample mean and sample variance.  Specifically: μ<sub>MLE</sub> = (1/n) * Σ<sub>i=1</sub><sup>n</sup> x<sub>i</sub> and σ<sup>2</sup><sub>MLE</sub> = (1/n) * Σ<sub>i=1</sub><sup>n</sup> (x<sub>i</sub> - μ<sub>MLE</sub>)<sup>2</sup>

5.  **Question:** What is a conjugate prior? Why are they useful in MAP estimation?

    **Answer:** A conjugate prior is a prior distribution that, when multiplied by the likelihood function, results in a posterior distribution that is of the same distributional family as the prior. Conjugate priors are useful because they simplify the calculation of the posterior distribution. The posterior can be calculated analytically without the need for complicated integration or numerical methods. Using conjugate priors also allow you to express the posterior in terms of updated parameters of the same distribution.
