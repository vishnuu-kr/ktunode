---
title: "Statistical Pattern Recognition - Bayes decision theory, Parametric 
methods: Maximum likelihood estimation, Bayesian estimation  (Text 1, 
Chapters 1, 2)"
subject: "PATTERN RECOGNITION"
module: "Module 1: Introduction to Pattern Recognition "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b0b8"
status: "completed"
scrapedAt: "2026-05-20T16:15:08.912Z"
---
# PATTERN RECOGNITION - Module 1: Introduction to Pattern Recognition
## Topic: Statistical Pattern Recognition - Bayes Decision Theory & Parametric Methods

**Text 1, Chapters 1 & 2**

**Learning Outcomes:**

*   Understand the fundamental concepts of pattern recognition and its application to statistical pattern recognition.
*   Comprehend Bayes decision theory and its application to classification problems.
*   Learn and apply parametric methods, specifically Maximum Likelihood Estimation (MLE) and Bayesian Estimation, for parameter estimation.
*   Compare and contrast MLE and Bayesian Estimation.
*   Apply these concepts to simple pattern recognition problems.

---

## 1. Introduction to Pattern Recognition

*   **Definition:** Pattern recognition is the automated identification of regularities in data. It's concerned with the design and development of algorithms to classify patterns into categories.

*   **Applications:**
    *   Image recognition (face recognition, object detection)
    *   Speech recognition
    *   Medical diagnosis
    *   Financial analysis
    *   Spam filtering

*   **Types of Pattern Recognition:**
    *   **Statistical Pattern Recognition:** Relies on statistical modeling and probability theory.  Focuses on estimating probability distributions and decision boundaries.
    *   **Syntactic Pattern Recognition:** Uses formal languages and grammars to describe patterns.  Useful for structured data like DNA sequences or programming code.
    *   **Neural Network Based Pattern Recognition:** Employs artificial neural networks for learning complex patterns from data.

*   **Statistical Pattern Recognition: Key Concepts:**
    *   **Feature Vector:** A set of numerical features that represent a pattern. (e.g., [height, weight] for a person)
    *   **Feature Space:** The n-dimensional space where each dimension represents a feature.
    *   **Classes:**  The categories or groups to which patterns belong. (e.g., "cat," "dog")
    *   **Decision Boundary:** The boundary in the feature space that separates different classes.

---

## 2. Bayes Decision Theory

*   **Goal:** To minimize the probability of misclassification.

*   **Key Concepts:**
    *   **Prior Probability P(ωi):** The probability of a pattern belonging to class ωi before observing any features. Represents prior knowledge. (e.g., P(ω1) = 0.7 if 70% of all patterns belong to class ω1)
    *   **Likelihood Probability p(x|ωi):** The conditional probability density function (pdf) of observing feature vector x given that it belongs to class ωi. Models the distribution of features for each class.  (e.g., p(x|ω1) might be a Gaussian distribution with mean μ1 and variance σ1^2 if class ω1 features follow a Gaussian distribution)
    *   **Posterior Probability P(ωi|x):** The probability of a pattern belonging to class ωi given the observed feature vector x. Represents our belief after observing the features.

*   **Bayes' Theorem:**  Forms the foundation of Bayes decision theory.
    *   `P(ωi|x) = [p(x|ωi) * P(ωi)] / p(x)`
    *   Where `p(x) = Σj p(x|ωj) * P(ωj)` (marginal probability of x)

*   **Bayes Decision Rule:**  Assigns a pattern with feature vector x to the class with the highest posterior probability.
    *   `Decide ωi if P(ωi|x) > P(ωj|x) for all j ≠ i`

*   **Bayes Optimal Classifier:** The classifier that implements the Bayes decision rule.  It provides the lowest possible error rate for a given problem.

*   **Risk and Loss:** A more general framework than just minimizing misclassification.
    *   **Loss Function λ(αi|ωj):** The loss incurred for deciding class αi when the true class is ωj.
    *   **Conditional Risk R(αi|x):** The expected loss for deciding class αi given feature vector x.
        *   `R(αi|x) = Σj λ(αi|ωj) * P(ωj|x)`
    *   **Bayes Decision Rule (with Risk):**  Choose the action αi that minimizes the conditional risk R(αi|x).
    *   **Minimum Bayes Risk:**  The minimum possible risk achieved by the Bayes optimal classifier.

*   **Example (Simple 2-Class Problem):**
    *   Classes: ω1 (spam), ω2 (not spam)
    *   Prior probabilities: P(ω1) = 0.6, P(ω2) = 0.4
    *   Likelihood probabilities (assume x is a single feature - the number of spam-related keywords in an email):
        *   p(x|ω1) ~ Gaussian(μ1=5, σ1^2=2)
        *   p(x|ω2) ~ Gaussian(μ2=1, σ2^2=1)

    *   Question: If an email has x=3 spam-related keywords, which class should it be assigned to?

    *   Solution:
        1.  Calculate p(x|ω1) and p(x|ω2) using the Gaussian probability density function.
        2.  Calculate p(x) = p(x|ω1)P(ω1) + p(x|ω2)P(ω2)
        3.  Calculate P(ω1|x) = [p(x|ω1) * P(ω1)] / p(x) and P(ω2|x) = [p(x|ω2) * P(ω2)] / p(x)
        4.  Assign the email to the class with the higher posterior probability.

*   **Important Points:**
    *   Bayes decision theory requires knowledge of the prior probabilities P(ωi) and the likelihood probabilities p(x|ωi).
    *   The Bayes classifier minimizes the probability of error.
    *   The Bayes classifier is optimal *given* the available information (prior probabilities and likelihoods). If these probabilities are inaccurate, the classifier's performance will be suboptimal.

---

## 3. Parametric Methods

*   **Assumption:**  The form of the probability density functions p(x|ωi) are known, but the parameters of those distributions are unknown and need to be estimated from training data. (e.g., assume p(x|ωi) is Gaussian, but we need to estimate the mean μi and variance σi^2).

### 3.1 Maximum Likelihood Estimation (MLE)

*   **Goal:** To find the parameter values that maximize the likelihood of observing the training data.

*   **Likelihood Function L(θ):** The probability of observing the training data D, given the parameter vector θ.
    *   `L(θ) = p(D|θ)`

*   **Assumption (Independent and Identically Distributed - i.i.d.):**  The training samples are independent of each other and drawn from the same distribution.  If D = {x1, x2, ..., xN}, then:
    *   `L(θ) = Πi=1 to N p(xi|θ)`

*   **Log-Likelihood Function l(θ):**  The natural logarithm of the likelihood function.  Maximizing the log-likelihood is equivalent to maximizing the likelihood, but it's often easier to work with mathematically.
    *   `l(θ) = log(L(θ)) = Σi=1 to N log(p(xi|θ))`

*   **MLE Estimation Procedure:**
    1.  Choose a parametric model for p(x|ωi; θ) (e.g., Gaussian).
    2.  Write down the likelihood function L(θ) or log-likelihood function l(θ).
    3.  Find the parameter values θ that maximize l(θ) by solving:
        *   `∇l(θ) = 0`  (where ∇ is the gradient operator)
        *   Verify that the solution is a maximum (e.g., by checking the Hessian matrix).

*   **Example (Estimating the Mean of a Gaussian Distribution):**
    *   Assume x1, x2, ..., xN are drawn i.i.d. from a Gaussian distribution with unknown mean μ and known variance σ^2.  θ = μ.
    *   `p(xi|μ) = (1 / (√(2πσ^2))) * exp(-(xi - μ)^2 / (2σ^2))`
    *   `l(μ) = Σi=1 to N log((1 / (√(2πσ^2))) * exp(-(xi - μ)^2 / (2σ^2)))`
    *   `l(μ) = -N/2 * log(2πσ^2) - Σi=1 to N ((xi - μ)^2 / (2σ^2))`
    *   To maximize l(μ), take the derivative with respect to μ and set it to zero:
        *   `dl(μ)/dμ = Σi=1 to N ((xi - μ) / σ^2) = 0`
        *   Solving for μ: `μMLE = (1/N) * Σi=1 to N xi`  (The MLE estimate of the mean is the sample mean)

*   **Example (Estimating the Variance of a Gaussian Distribution):**
    *   Assume x1, x2, ..., xN are drawn i.i.d. from a Gaussian distribution with known mean μ and unknown variance σ^2.  θ = σ^2.
    *  Following similar steps as above:
    *   `σ^2_MLE = (1/N) * Σi=1 to N (xi - μ)^2`  (The MLE estimate of the variance is the sample variance, assuming the mean is known). If the mean is also estimated, replace μ with the MLE estimate of μ.

*   **Important Points:**
    *   MLE is relatively simple to implement.
    *   MLE can be biased, especially with small sample sizes.  For example, the MLE estimate of the variance is biased downwards.
    *   MLE does not incorporate prior knowledge about the parameters.
    *   MLE can be sensitive to outliers.

### 3.2 Bayesian Estimation

*   **Goal:** To find the *posterior* distribution of the parameters, given the training data.

*   **Key Concepts:**
    *   **Prior Distribution p(θ):** Represents our prior belief about the parameter values before observing any data.  This is a probability distribution over the possible parameter values.
    *   **Posterior Distribution p(θ|D):**  Represents our updated belief about the parameter values after observing the data.
    *   **Likelihood Function p(D|θ):** As in MLE.
    *   **Bayes' Theorem (for parameter estimation):**
        *   `p(θ|D) = [p(D|θ) * p(θ)] / p(D)`
        *   Where `p(D) = ∫ p(D|θ) * p(θ) dθ` (marginal probability of D)
        *   Note: p(D) is often difficult to compute analytically.

*   **Bayesian Estimation Procedure:**
    1.  Choose a parametric model for p(x|ωi; θ) and a prior distribution p(θ).
    2.  Calculate the posterior distribution p(θ|D) using Bayes' Theorem.
    3.  Make predictions based on the posterior distribution.

*   **Making Predictions:**  Rather than finding a single "best" value for θ, Bayesian estimation provides a distribution over possible values.  We can use this distribution to make predictions.  A common approach is to use the *predictive distribution*:
    *   `p(x|D) = ∫ p(x|θ) * p(θ|D) dθ`  (This averages the predictions of all possible parameter values, weighted by their posterior probabilities.)

*   **Maximum A Posteriori (MAP) Estimation:** A point estimate of θ, similar to MLE, but using the posterior distribution instead of the likelihood.
    *   `θMAP = argmax θ p(θ|D)`

*   **Conjugate Priors:**  A prior distribution is conjugate to a likelihood function if the posterior distribution has the same parametric form as the prior. Using conjugate priors simplifies the calculation of the posterior.

*   **Example (Estimating the Mean of a Gaussian Distribution with a Gaussian Prior):**
    *   Assume x1, x2, ..., xN are drawn i.i.d. from a Gaussian distribution with unknown mean μ and known variance σ^2.
    *   Assume a Gaussian prior on μ:  `p(μ) ~ Gaussian(μ0, σ0^2)`  (μ0 and σ0^2 are hyperparameters that represent our prior belief about the mean)
    *   Using Bayes' Theorem, it can be shown that the posterior distribution p(μ|D) is also Gaussian:
        *   `p(μ|D) ~ Gaussian(μN, σN^2)`
        *   Where:
            *   `μN = ( (σ^2 / (N σ0^2)) * μ0 + (σ0^2 / ((1/N)σ^2)) * μMLE) / (σ^2 / (N σ0^2) + σ0^2 / ((1/N)σ^2))  ` (Weighted average of prior mean and MLE estimate)
            *   `1/σN^2 = (1/σ0^2) + (N/σ^2)`

*   **Important Points:**
    *   Bayesian estimation incorporates prior knowledge about the parameters.
    *   Bayesian estimation provides a full distribution over the parameters, rather than a single point estimate.
    *   Bayesian estimation can be computationally more complex than MLE.
    *   The choice of prior distribution can significantly impact the results.  A poorly chosen prior can lead to inaccurate results.

---

## 4. Comparison of MLE and Bayesian Estimation

| Feature          | Maximum Likelihood Estimation (MLE)                                  | Bayesian Estimation                                                          |
|-------------------|----------------------------------------------------------------------|------------------------------------------------------------------------------|
| Prior Knowledge   | No prior knowledge incorporated.                                      | Incorporates prior knowledge through a prior distribution p(θ).                |
| Output           | A single point estimate for the parameter θ.                        | A posterior distribution p(θ|D) over the parameter θ.                       |
| Computational Cost| Generally lower.                                                      | Generally higher, especially for complex models.                             |
| Sensitivity to Data| More sensitive to outliers and small sample sizes.                    | Less sensitive to outliers if a robust prior is used.                      |
| Bias              | Can be biased, especially with small sample sizes.                     | Can be less biased if a good prior is used.                                |
| Interpretation   | Focuses on finding the parameter values that best explain the data.   | Focuses on updating our belief about the parameter values given the data.   |

---

## 5. Practice Questions & Exercises

1.  **True or False:** Bayes decision theory aims to minimize the probability of error.  **(Answer: True)**

2.  **Fill in the blank:** In Bayes decision theory, `P(ωi|x)` is called the _______ probability. **(Answer: Posterior)**

3.  **Calculate:** Given P(ω1) = 0.4, P(ω2) = 0.6, p(x|ω1) = 0.2, and p(x|ω2) = 0.5, calculate P(ω1|x).

    **(Answer:**

    *   p(x) = p(x|ω1)P(ω1) + p(x|ω2)P(ω2) = (0.2 * 0.4) + (0.5 * 0.6) = 0.08 + 0.3 = 0.38
    *   P(ω1|x) = [p(x|ω1) * P(ω1)] / p(x) = (0.2 * 0.4) / 0.38 = 0.08 / 0.38 ≈ 0.2105 **)**

4.  **Explain:** What is the difference between the likelihood function and the posterior distribution in parameter estimation?

    **(Answer: The likelihood function, p(D|θ), represents the probability of observing the data D given a specific parameter value θ. The posterior distribution, p(θ|D), represents the probability distribution of the parameter θ given the observed data D.  The posterior is obtained by combining the likelihood with a prior distribution on the parameter.)**

5.  **Scenario:** You want to estimate the parameter θ of a distribution. You have a small dataset with a few data points and some prior knowledge about the possible values of θ. Would you prefer MLE or Bayesian estimation? Explain your choice.

    **(Answer: Bayesian estimation would likely be preferred.  With a small dataset, MLE can be highly sensitive to noise and may lead to inaccurate parameter estimates. Bayesian estimation allows you to incorporate prior knowledge, which can help to regularize the estimation process and produce more robust results. The prior acts as a form of constraint, preventing the parameter from taking on unreasonable values.)**

6.  **Derivation (Gaussian Variance, Known Mean):** Derive the MLE estimate for the variance (σ^2) of a Gaussian distribution when the mean (μ) is known. (See the example in section 3.1 above for guidance)

7.  **Coding Exercise (Python):**  Write a Python function that takes as input a dataset `X`, a prior mean `mu0`, a prior variance `sigma0_sq`, and a known variance `sigma_sq`. The function should calculate and return the posterior mean `mu_N` and posterior variance `sigma_N_sq` for the mean of a Gaussian distribution, using the formulas given in the example in section 3.2.

    ```python
    import numpy as np

    def bayesian_gaussian_mean_estimation(X, mu0, sigma0_sq, sigma_sq):
        """
        Estimates the posterior mean and variance of a Gaussian distribution
        using Bayesian estimation with a Gaussian prior.

        Args:
            X: A numpy array containing the data samples.
            mu0: The prior mean.
            sigma0_sq: The prior variance.
            sigma_sq: The known variance of the Gaussian distribution.

        Returns:
            A tuple containing the posterior mean (mu_N) and posterior variance (sigma_N_sq).
        """

        N = len(X)
        mu_MLE = np.mean(X)  # MLE estimate of the mean

        mu_N = ( (sigma_sq / (N * sigma0_sq)) * mu0 + (sigma0_sq / (sigma_sq / N)) * mu_MLE) / (sigma_sq / (N * sigma0_sq) + sigma0_sq / (sigma_sq/N))
        sigma_N_sq = 1 / ((1 / sigma0_sq) + (N / sigma_sq))

        return mu_N, sigma_N_sq

    # Example Usage
    X = np.array([1.2, 1.8, 2.5, 1.9, 2.1])
    mu0 = 2.0
    sigma0_sq = 1.0
    sigma_sq = 0.5

    mu_N, sigma_N_sq = bayesian_gaussian_mean_estimation(X, mu0, sigma0_sq, sigma_sq)

    print(f"Posterior Mean (mu_N): {mu_N}")
    print(f"Posterior Variance (sigma_N_sq): {sigma_N_sq}")
    ```

---

## 6. Important Points to Remember

*   **Bayes decision theory provides a framework for making optimal decisions in the face of uncertainty.**
*   **The Bayes classifier minimizes the probability of error, given the available information.**
*   **MLE and Bayesian estimation are two common parametric methods for estimating parameters of probability distributions.**
*   **MLE is simpler to implement but can be biased and sensitive to outliers.**
*   **Bayesian estimation incorporates prior knowledge and provides a distribution over the parameters.**
*   **The choice between MLE and Bayesian estimation depends on the specific problem and the available information.**
*   **Understanding the underlying assumptions of each method is crucial for applying them correctly.**
