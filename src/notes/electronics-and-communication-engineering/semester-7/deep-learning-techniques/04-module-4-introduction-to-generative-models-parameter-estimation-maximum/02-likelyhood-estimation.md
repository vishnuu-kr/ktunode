---
title: "Likelyhood Estimation"
subject: "DEEP LEARNING TECHNIQUES"
module: "Module 4: Introduction to  Generative models: parameter estimation, Maximum"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2e2"
status: "completed"
scrapedAt: "2026-05-23T18:06:16.724Z"
---
# DEEP LEARNING TECHNIQUES: Module 4 - Introduction to Generative Models

## Topic: Maximum Likelihood Estimation (MLE)

This module introduces generative models, which aim to learn the underlying probability distribution of data. A fundamental technique for achieving this is Maximum Likelihood Estimation (MLE). This topic focuses on how MLE helps us estimate the parameters of these distributions.

---

### **Learning Outcomes Covered:**

*   **Understanding Parameter Estimation in Generative Models:** This topic directly addresses how we estimate the parameters of a probability distribution that a generative model aims to learn.
*   **Applying Likelihood Concepts:** We will delve into the concept of likelihood and how it's used to guide parameter estimation.
*   **Core Principle of MLE:** Understanding the principle of finding parameters that maximize the probability of observing the given data.

---

### **Course Outcomes Alignment:**

*   **CO3: Apply and Integrate Sequence and Generative Models (Knowledge Level: K3)**: Understanding MLE is crucial for applying generative models, as it's a primary method for fitting their underlying distributions.
*   **CO1: Analyze and differentiate between various neural network components. (Knowledge Level: K3)**: While not directly about neural network components, MLE provides a mathematical foundation for understanding how models learn to represent data distributions.

---

### **1. Introduction to Generative Models and Parameter Estimation**

**1.1 What are Generative Models?**

*   **Definition:** Generative models learn the underlying probability distribution, $p(x)$, of the data. Unlike discriminative models that learn $p(y|x)$, generative models aim to understand how the data itself is generated.
*   **Goal:** To be able to generate new data samples that resemble the original training data.
*   **Applications:** Image generation, text generation, anomaly detection, data augmentation, etc.

**1.2 The Need for Parameter Estimation**

*   **Probabilistic Models:** Most generative models are based on probability distributions (e.g., Gaussian, Bernoulli, etc.).
*   **Parameters:** These distributions are defined by a set of parameters (e.g., mean and variance for a Gaussian).
*   **Learning the Distribution:** To learn the data distribution $p(x)$, we need to find the "best" values for the parameters of our chosen distribution family. This process is called parameter estimation.

---

### **2. Maximum Likelihood Estimation (MLE)**

**2.1 The Concept of Likelihood**

*   **Definition:** The likelihood function, $L(\theta | x)$, quantifies the probability of observing the given data $x$ for a specific set of model parameters $\theta$.
*   **Key Distinction:** It's crucial to understand that likelihood is a function of the parameters $\theta$, given the data $x$, whereas probability is a function of the data $x$, given the parameters $\theta$.
*   **Notation:** $L(\theta | x) = p(x | \theta)$

**2.2 The Principle of MLE**

*   **Goal:** To find the parameter values $\hat{\theta}$ that maximize the likelihood of observing the training data.
*   **Intuition:** If our model's parameters are "correct," then the data we observed should be highly probable under that model. MLE seeks the parameters that make the observed data "most likely."
*   **Mathematical Formulation:**
    $$ \hat{\theta}_{\text{MLE}} = \arg\max_{\theta} L(\theta | x) $$

**2.3 Likelihood for Independent and Identically Distributed (IID) Data**

*   **Assumption:** In most machine learning scenarios, we assume the training data points $(x_1, x_2, \dots, x_n)$ are IID.
*   **Joint Probability:** The probability of observing the entire dataset is the product of individual data point probabilities:
    $$ p(x_1, x_2, \dots, x_n | \theta) = \prod_{i=1}^n p(x_i | \theta) $$
*   **Likelihood Function:** For IID data, the likelihood function is:
    $$ L(\theta | x_1, \dots, x_n) = \prod_{i=1}^n p(x_i | \theta) $$

**2.4 Log-Likelihood Maximization (Common Practice)**

*   **Problem with Direct Maximization:** Maximizing the product of many small probabilities can lead to numerical underflow. Also, derivatives of products can be complex.
*   **Solution:** Maximizing the logarithm of the likelihood function is equivalent to maximizing the likelihood itself because the logarithm is a monotonic function.
*   **Log-Likelihood:**
    $$ \log L(\theta | x_1, \dots, x_n) = \sum_{i=1}^n \log p(x_i | \theta) $$
*   **Benefit:** This transforms the product into a sum, making optimization easier and numerically more stable.
*   **Mathematical Formulation (Log-Likelihood):**
    $$ \hat{\theta}_{\text{MLE}} = \arg\max_{\theta} \sum_{i=1}^n \log p(x_i | \theta) $$

**2.5 Finding the Maximum: Derivatives and Optimization**

*   **Calculus Approach:** To find the maximum, we typically take the gradient of the log-likelihood function with respect to the parameters $\theta$ and set it to zero.
    $$ \nabla_{\theta} \log L(\theta | x_1, \dots, x_n) = \mathbf{0} $$
*   **Solving for $\theta$:** Solving these equations yields the MLE estimates $\hat{\theta}_{\text{MLE}}$.
*   **Iterative Optimization:** For complex models or distributions, analytical solutions might not be feasible. In such cases, iterative optimization algorithms like Gradient Descent are used to find the parameters that maximize the log-likelihood.

---

### **3. MLE Examples**

**3.1 Example 1: Estimating the Mean of a Gaussian Distribution**

*   **Data:** A dataset of scalar values $x_1, \dots, x_n$.
*   **Model:** Assume data is generated from a univariate Gaussian distribution with known variance $\sigma^2$ but unknown mean $\mu$.
    $$ p(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) $$
*   **Likelihood Function:**
    $$ L(\mu | x_1, \dots, x_n) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right) $$
*   **Log-Likelihood:**
    $$ \log L(\mu | x_1, \dots, x_n) = \sum_{i=1}^n \left( -\log(\sqrt{2\pi\sigma^2}) - \frac{(x_i-\mu)^2}{2\sigma^2} \right) $$
    $$ \log L(\mu | x_1, \dots, x_n) = -n \log(\sqrt{2\pi\sigma^2}) - \frac{1}{2\sigma^2} \sum_{i=1}^n (x_i-\mu)^2 $$
*   **Maximization:** To maximize, we take the derivative with respect to $\mu$ and set it to zero:
    $$ \frac{d}{d\mu} \log L(\mu | x_1, \dots, x_n) = -\frac{1}{2\sigma^2} \sum_{i=1}^n 2(x_i-\mu)(-1) = \frac{1}{\sigma^2} \sum_{i=1}^n (x_i-\mu) $$
    $$ \frac{1}{\sigma^2} \sum_{i=1}^n (x_i-\mu) = 0 $$
    $$ \sum_{i=1}^n x_i - \sum_{i=1}^n \mu = 0 $$
    $$ \sum_{i=1}^n x_i - n\mu = 0 $$
    $$ n\mu = \sum_{i=1}^n x_i $$
*   **MLE Estimate for $\mu$**:
    $$ \hat{\mu}_{\text{MLE}} = \frac{1}{n} \sum_{i=1}^n x_i $$
    This means the MLE for the mean of a Gaussian is simply the sample mean.

**3.2 Example 2: Estimating the Probability of a Bernoulli Distribution**

*   **Data:** A sequence of binary outcomes (e.g., coin flips) $y_1, \dots, y_n$, where $y_i \in \{0, 1\}$.
*   **Model:** Assume data is generated from a Bernoulli distribution with an unknown probability of success $p$.
    $$ p(y | p) = p^y (1-p)^{1-y} $$
*   **Likelihood Function:**
    $$ L(p | y_1, \dots, y_n) = \prod_{i=1}^n p^{y_i} (1-p)^{1-y_i} $$
*   **Log-Likelihood:**
    $$ \log L(p | y_1, \dots, y_n) = \sum_{i=1}^n \left[ y_i \log p + (1-y_i) \log (1-p) \right] $$
    $$ \log L(p | y_1, \dots, y_n) = \left(\sum_{i=1}^n y_i\right) \log p + \left(n - \sum_{i=1}^n y_i\right) \log (1-p) $$
*   **Maximization:** Take the derivative with respect to $p$ and set it to zero. Let $k = \sum_{i=1}^n y_i$ (the number of successes).
    $$ \frac{d}{dp} \log L(p | y_1, \dots, y_n) = \frac{k}{p} - \frac{n-k}{1-p} $$
    $$ \frac{k}{p} - \frac{n-k}{1-p} = 0 $$
    $$ k(1-p) = p(n-k) $$
    $$ k - kp = np - kp $$
    $$ k = np $$
*   **MLE Estimate for $p$**:
    $$ \hat{p}_{\text{MLE}} = \frac{k}{n} = \frac{\sum_{i=1}^n y_i}{n} $$
    This means the MLE for the probability of success in a Bernoulli distribution is the sample proportion of successes.

---

### **4. Properties of MLE**

*   **Consistency:** As the number of data points $n$ increases, the MLE estimate $\hat{\theta}_{\text{MLE}}$ converges to the true parameter value $\theta_{true}$. (Asymptotic property)
*   **Asymptotic Normality:** For large $n$, the distribution of $\hat{\theta}_{\text{MLE}}$ is approximately Gaussian with mean $\theta_{true}$ and a covariance matrix that can be derived from the Fisher Information.
*   **Asymptotic Efficiency:** $\hat{\theta}_{\text{MLE}}$ achieves the Cramér-Rao lower bound for large $n$, meaning it has the smallest possible variance among all unbiased estimators.
*   **Bias:** MLE estimators can be biased for finite sample sizes. For instance, the MLE for the variance of a Gaussian is slightly biased downwards (dividing by $n$ instead of $n-1$).

---

### **5. MLE in the Context of Deep Learning**

*   **Softmax Regression:** The softmax function, commonly used in the output layer of classification networks, is derived from maximizing the cross-entropy loss, which is equivalent to maximizing the log-likelihood of a categorical distribution.
*   **Generative Models (e.g., VAEs, GANs):** MLE is a foundational principle for training many generative models. For example, Variational Autoencoders (VAEs) often optimize a lower bound on the data log-likelihood. While GANs have a different objective function (an adversarial game), the underlying goal relates to matching data distributions.
*   **Parameterizing Complex Distributions:** In deep learning, we often use neural networks to parameterize complex distributions. The parameters of these neural networks are then optimized using MLE (or a proxy like cross-entropy) to fit the data.

---

### **6. Important Points to Remember**

*   **Likelihood vs. Probability:** Likelihood is $p(x|\theta)$, probability is $p(x)$. We maximize likelihood with respect to $\theta$.
*   **Log-Likelihood:** Always use log-likelihood for numerical stability and easier optimization.
*   **IID Assumption:** MLE is typically derived assuming data points are independent and identically distributed.
*   **Optimization:** MLE involves finding parameters that maximize the likelihood. This can be done analytically or via numerical optimization.
*   **Foundation for Generative Models:** MLE is a core concept for understanding how generative models learn the data distribution.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **7. References and Further Reading**

*   **Learning Deep Learning by Magnus Ekman:** Chapter on probabilistic modeling and parameter estimation.
*   **Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow by Aurelien Geron:** Chapters on probability and supervised learning (cross-entropy implicitly relates to MLE).
*   **Dive Deep into Machine Learning by Astan Zhang and Zachary and Alexander Semola (d2l.ai):** Section on probability distributions and parameter estimation.
*   **Neural Networks for Deep Learning by Michael Nielsen:** While focused on NN mechanics, the concept of fitting models to data implicitly relates to likelihood.
*   **Deep Learning by Ian Goodfellow, Yoshua Bengio and Aaron Courville:** Chapters on probability distributions, maximum likelihood, and potentially sections on specific generative models.
*   **Generative Deep Learning by David Foster:** Likely covers MLE in the context of various generative models.
*   **Build a Large Language Model by Sebastian Raschka:** May discuss MLE in the context of language model training objectives.

---

### **8. Practice Questions**

**Question 1:** What is the primary goal of Maximum Likelihood Estimation (MLE)?

*   A) To minimize the error between predicted and actual values.
*   B) To find the parameters that maximize the probability of observing the given data.
*   C) To reduce the complexity of the model.
*   D) To find the parameters that minimize the likelihood of the data.

**Question 2:** Why is it common practice to maximize the log-likelihood instead of the likelihood directly?

*   A) It simplifies the objective function from a product to a sum.
*   B) It improves numerical stability and prevents underflow.
*   C) Both A and B.
*   D) It is not common practice; direct likelihood maximization is preferred.

**Question 3:** If you are modeling a dataset of coin flips (Heads=1, Tails=0) and observe 7 heads in 10 flips, what would be the MLE estimate for the probability of getting a head ($p$)?

**Question 4:** Consider a dataset $x_1, x_2, \dots, x_n$ assumed to be drawn from a Poisson distribution with parameter $\lambda$. The probability mass function is $p(x|\lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$. Derive the MLE for $\lambda$.

---

### **Answers**

**Answer 1:**
*   **B) To find the parameters that maximize the probability of observing the given data.**
    *   *Explanation:* This is the core definition of MLE. While minimizing error is a goal in many ML tasks, MLE specifically focuses on maximizing the likelihood of the observed data given the model parameters.

**Answer 2:**
*   **C) Both A and B.**
    *   *Explanation:* The logarithm turns a product of probabilities into a sum of log-probabilities, making calculations easier. It also prevents numerical underflow that can occur when multiplying many small probability values together.

**Answer 3:**
*   The MLE estimate for the probability of getting a head ($p$) would be the sample proportion of heads:
    $$ \hat{p}_{\text{MLE}} = \frac{\text{Number of heads}}{\text{Total number of flips}} = \frac{7}{10} = 0.7 $$

**Answer 4:**
*   **Data:** $x_1, x_2, \dots, x_n$ from Poisson($\lambda$).
*   **PMF:** $p(x|\lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$
*   **Likelihood:** $L(\lambda | x_1, \dots, x_n) = \prod_{i=1}^n \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} = \frac{\lambda^{\sum x_i} e^{-n\lambda}}{\prod x_i!}$
*   **Log-Likelihood:** $\log L(\lambda) = \sum_{i=1}^n (x_i \log \lambda - \lambda - \log x_i!) = (\sum x_i) \log \lambda - n\lambda - \sum \log x_i!$
*   **Derivative w.r.t. $\lambda$**: $\frac{d}{d\lambda} \log L(\lambda) = \frac{\sum x_i}{\lambda} - n$
*   **Set to zero**: $\frac{\sum x_i}{\lambda} - n = 0 \implies \frac{\sum x_i}{\lambda} = n \implies \lambda = \frac{\sum x_i}{n}$
*   **MLE Estimate for $\lambda$**: $\hat{\lambda}_{\text{MLE}} = \frac{1}{n} \sum_{i=1}^n x_i$
    *   The MLE for the parameter of a Poisson distribution is the sample mean of the data.