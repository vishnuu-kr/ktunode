---
title: "Bayesian formulation."
subject: "MACHINE LEARNING"
module: "Module 1: Introduction to ML :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5ac"
status: "completed"
scrapedAt: "2026-05-20T16:46:24.978Z"
---
## MACHINE LEARNING - Module 1: Introduction to ML - Bayesian Formulation

**Subject:** MACHINE LEARNING
**Module:** Module 1: Introduction to ML
**Topic:** Bayesian Formulation
**Description:** This topic covers the Bayesian approach to machine learning, contrasting it with frequentist approaches and exploring key concepts like priors, posteriors, likelihood, and Bayesian inference.

**Learning Outcomes:**

*   Understand the fundamental differences between Bayesian and Frequentist approaches to probability.
*   Define and explain the concepts of prior probability, likelihood, posterior probability, and evidence (marginal likelihood).
*   Apply Bayes' theorem to calculate posterior probabilities.
*   Understand the role of prior distributions in influencing the posterior.
*   Describe and apply different types of priors (informative, non-informative, conjugate).
*   Explain the concept of Bayesian inference and its applications in machine learning.
*   Understand Bayesian Model Averaging.
*   Recognize the advantages and disadvantages of the Bayesian approach.

---

### 1.  Frequentist vs. Bayesian Probability

*   **Frequentist Probability:**
    *   Defines probability as the long-run frequency of an event in repeated trials.
    *   Probability is a fixed, objective property of the phenomenon being studied.
    *   Parameters of a model are considered fixed but unknown values.
    *   Inference is based on the data observed.
    *   Examples: Confidence intervals, p-values.

*   **Bayesian Probability:**
    *   Defines probability as a degree of belief or plausibility about an event.
    *   Probability represents our uncertainty about an event.
    *   Parameters of a model are considered random variables with probability distributions.
    *   Inference combines prior knowledge with observed data to update our beliefs.
    *   Examples: Credible intervals, posterior predictive distributions.

**Key Difference:** The core difference lies in how parameters are treated. Frequentists see parameters as fixed, while Bayesians treat them as random variables with associated probability distributions.

### 2. Key Concepts and Definitions

*   **Prior Probability (P(θ))**:
    *   Our initial belief or knowledge about the parameter(s) θ *before* observing any data.
    *   Represents our subjective or pre-existing understanding of the parameter.
    *   Examples: A prior belief that the coin is fair (50% chance of heads).

*   **Likelihood (P(D|θ))**:
    *   The probability of observing the data (D) *given* a specific value of the parameter(s) θ.
    *   Indicates how well the model fits the observed data for a particular parameter value.
    *   Examples: The probability of observing 7 heads in 10 coin flips given a coin with a 60% chance of heads.

*   **Posterior Probability (P(θ|D))**:
    *   Our updated belief about the parameter(s) θ *after* observing the data (D).
    *   Represents the probability distribution of the parameter(s) given the observed data.
    *   The main goal of Bayesian inference is to calculate the posterior distribution.

*   **Evidence (Marginal Likelihood) (P(D))**:
    *   The probability of observing the data (D) marginalized over all possible values of the parameter(s) θ.
    *   Acts as a normalizing constant to ensure the posterior is a valid probability distribution.
    *   Often difficult to compute analytically, but approximation methods exist.

### 3. Bayes' Theorem

*   **Formula:**
    ```
    P(θ|D) = [P(D|θ) * P(θ)] / P(D)
    ```
    *   **P(θ|D):** Posterior probability
    *   **P(D|θ):** Likelihood
    *   **P(θ):** Prior probability
    *   **P(D):** Evidence (Marginal Likelihood)

*   **Interpretation:** Bayes' theorem provides a way to update our prior beliefs (P(θ)) based on the observed data (D) to obtain the posterior distribution (P(θ|D)). The likelihood (P(D|θ)) quantifies how well the model (defined by θ) explains the data.

### 4. Role of Prior Distributions

*   The prior distribution reflects our initial beliefs about the parameter values.  It can significantly influence the posterior distribution, especially when the amount of data is small.
*   A **strong prior** (high confidence in a particular range of parameter values) will have a greater influence on the posterior than a **weak prior** (little prior knowledge, spread out distribution).
*   As the amount of data increases, the influence of the prior typically diminishes, and the posterior is more strongly determined by the likelihood.

### 5. Types of Priors

*   **Informative Prior:**
    *   Based on prior knowledge or expert opinion.
    *   Can significantly influence the posterior, especially with limited data.
    *   Examples: Using a beta distribution with specific parameters reflecting previous experiments on the same phenomenon.

*   **Non-Informative Prior (Weak Prior, Vague Prior):**
    *   Represents minimal prior knowledge.
    *   Allows the data to primarily drive the posterior distribution.
    *   Examples: Uniform distribution, Jeffrey's prior. Care must be taken as some non-informative priors can be improper (integrate to infinity).

*   **Conjugate Prior:**
    *   A prior that, when multiplied by the likelihood, results in a posterior distribution that belongs to the same family of distributions as the prior.
    *   Simplifies the computation of the posterior because the form of the distribution is known.
    *   Examples:
        *   Beta prior is conjugate to the Binomial likelihood.
        *   Gaussian prior is conjugate to the Gaussian likelihood (with known variance).
        *   Gamma prior is conjugate to the Poisson likelihood.

### 6. Bayesian Inference

*   Bayesian inference is the process of updating our beliefs about model parameters based on observed data and prior knowledge.
*   The primary goal is to obtain the posterior distribution, which represents our updated understanding of the parameter values.
*   **Steps:**
    1.  Choose a prior distribution P(θ).
    2.  Define the likelihood function P(D|θ).
    3.  Apply Bayes' theorem to calculate the posterior distribution P(θ|D).
    4.  Use the posterior distribution to make predictions, estimate credible intervals, or perform hypothesis testing.

### 7. Bayesian Model Averaging (BMA)

*   Instead of selecting a single "best" model, BMA combines the predictions from multiple models, weighted by their posterior probabilities.
*   Helps to account for model uncertainty and often leads to better predictive performance than using a single model.
*   Formula:
    ```
    P(y|D) = Σ P(y|M_i, D) * P(M_i|D)
    ```
    *   `P(y|D)`:  The predictive probability of y given the data D.
    *   `P(y|M_i, D)`: The predictive probability of y given model M_i and data D.
    *   `P(M_i|D)`: The posterior probability of model M_i given the data D.

### 8. Advantages and Disadvantages of the Bayesian Approach

*   **Advantages:**
    *   Incorporates prior knowledge.
    *   Provides a full probability distribution over the parameters, quantifying uncertainty.
    *   Naturally handles model complexity through Bayesian model averaging.
    *   Provides interpretable results in terms of probabilities.
    *   Handles small datasets relatively well due to the influence of the prior.

*   **Disadvantages:**
    *   Requires specifying a prior distribution, which can be subjective.
    *   Computationally intensive, especially for complex models.  Marginal likelihood often intractable and requires approximation methods (e.g., Markov Chain Monte Carlo - MCMC).
    *   Sensitive to the choice of prior, especially with limited data.
    *   Requires expertise in probability and statistics.

---

### Practice Questions & Exercises

**Question 1:** What is the key difference between the Frequentist and Bayesian approaches to probability?

**Answer:** Frequentists view probability as the long-run frequency of an event, treating parameters as fixed but unknown. Bayesians interpret probability as a degree of belief, treating parameters as random variables with probability distributions.

**Question 2:**  Explain the meaning of each term in Bayes' Theorem: P(θ|D) = [P(D|θ) * P(θ)] / P(D).

**Answer:**
*   P(θ|D): Posterior probability (belief about θ after seeing data D)
*   P(D|θ): Likelihood (probability of observing data D given θ)
*   P(θ): Prior probability (initial belief about θ before seeing data D)
*   P(D): Evidence (Marginal Likelihood - probability of seeing data D)

**Question 3:**  You want to estimate the probability of a coin landing on heads. Before flipping the coin, you believe it is a fair coin.  What kind of prior distribution would you use (informative, non-informative, conjugate)? Explain your choice.

**Answer:** A non-informative prior or a weakly informative prior might be suitable initially. A uniform distribution or a Beta(1,1) distribution (which is equivalent to uniform) would represent your lack of strong prior belief in the fairness of the coin.  If you *slightly* suspected it was biased, you might use a Beta distribution centered around 0.5, but with parameters relatively close to 1 (e.g., Beta(2,2)).  Since the likelihood will likely be binomial based on coin flips, a Beta prior would also be conjugate, simplifying calculations.

**Question 4:**  Why is the choice of prior important in Bayesian inference?

**Answer:** The prior distribution reflects our initial beliefs about the parameters and influences the posterior distribution. A strong prior can significantly impact the posterior, especially when the amount of data is limited. A poorly chosen prior can lead to inaccurate inferences.

**Question 5:** You are trying to choose between two different models for predicting stock prices. How can Bayesian Model Averaging help you?

**Answer:** Bayesian Model Averaging allows you to combine the predictions of both models, weighted by their posterior probabilities.  This accounts for the uncertainty about which model is "best" and can lead to more robust and accurate predictions than relying on a single model. The higher the posterior probability of a model (given the data), the more weight its predictions will have in the final combined prediction.

**Question 6:** What are some of the computational challenges associated with Bayesian inference?

**Answer:** The main computational challenge is calculating the evidence (marginal likelihood), P(D), which often involves integrating over all possible values of the parameters. This integral is often intractable analytically and requires approximation methods like Markov Chain Monte Carlo (MCMC). This is especially true for complex models with many parameters.

---

### Important Points to Remember

*   The Bayesian approach provides a principled way to incorporate prior knowledge into statistical inference.
*   The posterior distribution is the central object of interest in Bayesian analysis.
*   The choice of prior distribution is crucial and can significantly impact the results.
*   Computational challenges can make Bayesian inference difficult for complex models.
*   Bayesian model averaging provides a way to account for model uncertainty.
*   Bayesian inference is about updating beliefs in light of new evidence.
