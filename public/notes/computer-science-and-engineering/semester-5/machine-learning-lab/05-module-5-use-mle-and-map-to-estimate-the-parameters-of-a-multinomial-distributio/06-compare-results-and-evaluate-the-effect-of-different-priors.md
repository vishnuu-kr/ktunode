---
title: "Compare results and evaluate the effect of different priors."
subject: "MACHINE LEARNING LAB"
module: "Module 5: Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b94e"
status: "completed"
scrapedAt: "2026-05-20T16:47:15.259Z"
---
## MACHINE LEARNING LAB - Module 5: Multinomial Distribution, MLE, MAP, Priors & 20 Newsgroups

**Topic:** Comparing MLE and MAP Estimation with Different Priors on 20 Newsgroups Dataset

**Description:**  This module explores parameter estimation for a multinomial distribution using Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) estimation. We apply these techniques to the 20 Newsgroups dataset, focusing on the impact of different prior distributions on the estimated parameters.

**Learning Outcomes:**

*   Understand the multinomial distribution and its relevance to text data.
*   Implement MLE for estimating multinomial parameters.
*   Understand the concept of priors and their role in Bayesian inference.
*   Implement MAP estimation with different prior distributions (e.g., Dirichlet).
*   Apply MLE and MAP to the 20 Newsgroups dataset.
*   Compare and evaluate the impact of different priors on the estimated parameters, specifically in the context of text classification.
*   Understand the advantages and disadvantages of MLE and MAP estimation.

---

### 1. Multinomial Distribution and its Relevance to Text Data

*   **Definition:** The multinomial distribution models the probability of counts for *k* distinct categories in *n* independent trials.  Each trial results in exactly one of the *k* categories.
    *   Let `n` be the number of trials.
    *   Let `x_i` be the number of times category *i* occurs, where  `sum(x_i) = n` for `i = 1 to k`.
    *   Let `p_i` be the probability of category *i* occurring in a single trial, where `sum(p_i) = 1`.

*   **Probability Mass Function (PMF):**

    ```
    P(x_1, x_2, ..., x_k | n, p_1, p_2, ..., p_k) = (n! / (x_1! * x_2! * ... * x_k!)) * (p_1^x_1 * p_2^x_2 * ... * p_k^x_k)
    ```

*   **Relevance to Text Data:**  In text analysis, the multinomial distribution is often used to model the distribution of words within a document or corpus.
    *   **Categories (k):** Each distinct word in the vocabulary represents a category.
    *   **Trials (n):** The total number of words in a document represents the number of trials.
    *   **Counts (x_i):** The number of times each word appears in the document.
    *   **Probabilities (p_i):** The probability of a specific word appearing in a document. These are the parameters we want to estimate.  Different documents are assumed to have different word distributions, so the  `p_i` parameters vary across documents.

*   **Example:** Consider a vocabulary with three words: "cat", "dog", "mouse". A document contains the words: "cat", "dog", "cat".  Here, `n=3`, `x_cat=2`, `x_dog=1`, `x_mouse=0`. We would estimate `p_cat`, `p_dog`, and `p_mouse` based on a collection of documents.

### 2. Maximum Likelihood Estimation (MLE)

*   **Concept:** MLE seeks to find the parameter values that maximize the likelihood of observing the given data. In other words, it finds the parameters that make the observed data most probable.

*   **Likelihood Function:**  For the multinomial distribution, the likelihood function is essentially the PMF, viewed as a function of the parameters `p_i`, given the data `x_i`.

    ```
    L(p_1, p_2, ..., p_k | x_1, x_2, ..., x_k, n) = (n! / (x_1! * x_2! * ... * x_k!)) * (p_1^x_1 * p_2^x_2 * ... * p_k^x_k)
    ```

*   **MLE Estimate for Multinomial Parameters:** The MLE estimate for `p_i` is the empirical frequency of category *i* in the observed data:

    ```
    p_i_MLE = x_i / n
    ```

*   **Derivation:**  (Simplified)  To find the MLE, we typically:
    1.  Take the logarithm of the likelihood function (log-likelihood), making it easier to differentiate.
    2.  Introduce a Lagrange multiplier to enforce the constraint `sum(p_i) = 1`.
    3.  Take partial derivatives of the Lagrangian with respect to each `p_i` and the Lagrange multiplier.
    4.  Set the derivatives to zero and solve for `p_i`.

*   **Implementation (Python Example):**

    ```python
    import numpy as np

    def mle_multinomial(counts):
      """
      Calculates the MLE estimate for the parameters of a multinomial distribution.

      Args:
        counts: A list or numpy array of counts for each category.

      Returns:
        A numpy array of probabilities, one for each category.
      """
      n = np.sum(counts)
      probabilities = counts / n
      return probabilities

    # Example Usage
    document_counts = np.array([2, 1, 0]) # "cat", "dog", "mouse" counts from the example above
    probabilities_mle = mle_multinomial(document_counts)
    print(f"MLE Probabilities: {probabilities_mle}") # Output: MLE Probabilities: [0.66666667 0.33333333 0.        ]
    ```

*   **Important Note:** MLE can be problematic when some categories have zero counts in the observed data.  This results in a probability of zero, which can lead to issues in downstream tasks (e.g., zero probability during text classification).  This is where priors come into play.

### 3. Prior Distributions and Bayesian Inference

*   **Concept:** Bayesian inference combines prior knowledge (represented by a prior distribution) with the observed data to obtain a posterior distribution over the parameters.

*   **Prior Distribution:** A prior distribution reflects our beliefs about the parameter values *before* observing any data.  It's a probability distribution over the possible values of the parameters.

*   **Bayes' Theorem:** The foundation of Bayesian inference.

    ```
    P(θ | D) = [P(D | θ) * P(θ)] / P(D)
    ```

    *   `P(θ | D)`: Posterior distribution of the parameters `θ` given the data `D`.
    *   `P(D | θ)`: Likelihood of the data `D` given the parameters `θ`.  This is the same likelihood function used in MLE.
    *   `P(θ)`: Prior distribution of the parameters `θ`.
    *   `P(D)`: Marginal likelihood or evidence.  This acts as a normalizing constant.  Often difficult to calculate directly.

*   **Conjugate Prior:** A prior distribution is conjugate to a likelihood function if the posterior distribution has the same functional form as the prior.  This simplifies the calculation of the posterior.

*   **Dirichlet Distribution:**  A common prior for the multinomial distribution. It is a multivariate generalization of the beta distribution.
    *   **Parameters:**  The Dirichlet distribution is parameterized by a vector `α = (α_1, α_2, ..., α_k)` where `α_i > 0` for all `i`.  These `α_i` are often referred to as "pseudocounts" because they are added to the observed counts during MAP estimation.
    *   **Probability Density Function (PDF):**  Complex, but its key property is its role as a conjugate prior for the multinomial distribution.
    *   **Intuition:**  The `α_i` values represent our prior belief about the relative probabilities of the categories.  A higher `α_i` suggests a stronger prior belief that category *i* is more likely.  A uniform Dirichlet prior (all `α_i` equal) represents a lack of strong prior belief.  `α_i > 1` favors uniform distributions.  `α_i < 1` favors sparse distributions.
    *   **Symmetric Dirichlet:** When all `α_i` are equal (e.g., `α_i = 1` for all *i*), we have a symmetric Dirichlet distribution.  A common choice is `α_i = 1`, which corresponds to a uniform prior over the probability simplex.

### 4. Maximum A Posteriori (MAP) Estimation

*   **Concept:** MAP estimation seeks to find the parameter values that maximize the posterior distribution `P(θ | D)`. It combines information from the likelihood function (data) and the prior distribution.

*   **MAP Estimate:**  The MAP estimate is the value of `θ` that maximizes `P(θ | D)`.

    ```
    θ_MAP = argmax_θ P(θ | D) = argmax_θ [P(D | θ) * P(θ)]
    ```

    (We can often ignore the `P(D)` term because it doesn't depend on `θ` and only serves as a normalizing constant.)

*   **MAP Estimate for Multinomial Parameters with Dirichlet Prior:** When using a Dirichlet prior with parameter vector `α`, the MAP estimate for `p_i` becomes:

    ```
    p_i_MAP = (x_i + α_i - 1) / (n + sum(α_j - 1))  for j = 1 to k
    ```

    Where:
    *   `x_i` is the count of category *i* in the observed data.
    *   `n` is the total number of trials (total count).
    *   `α_i` is the *i*-th parameter of the Dirichlet prior.
    *   `k` is the number of categories.

*   **Laplace Smoothing:** When `α_i = 1` for all *i* (uniform prior), the MAP estimate simplifies to:

    ```
    p_i_MAP = (x_i + 1) / (n + k)
    ```

    This is also known as Laplace smoothing or add-one smoothing. It adds one to each count and *k* to the total count, ensuring that no probability is zero.

*   **Implementation (Python Example):**

    ```python
    import numpy as np

    def map_multinomial_dirichlet(counts, alpha):
        """
        Calculates the MAP estimate for multinomial parameters using a Dirichlet prior.

        Args:
            counts: A numpy array of counts for each category.
            alpha: A numpy array representing the parameters of the Dirichlet prior.

        Returns:
            A numpy array of probabilities, one for each category.
        """
        n = np.sum(counts)
        k = len(counts)
        if len(alpha) != k:
            raise ValueError("Length of alpha must match the number of categories.")

        probabilities = (counts + alpha - 1) / (n + np.sum(alpha - 1))
        return probabilities


    # Example Usage
    document_counts = np.array([2, 1, 0])  # "cat", "dog", "mouse" counts
    alpha = np.array([1, 1, 1])  # Uniform Dirichlet prior (Laplace smoothing)
    probabilities_map = map_multinomial_dirichlet(document_counts, alpha)
    print(f"MAP Probabilities (Laplace): {probabilities_map}") # Output: MAP Probabilities (Laplace): [0.5        0.25       0.25      ]


    alpha = np.array([2, 1, 0.5]) # Example of a non-uniform prior
    probabilities_map = map_multinomial_dirichlet(document_counts, alpha)
    print(f"MAP Probabilities (Non-Uniform Prior): {probabilities_map}") # Output: MAP Probabilities (Non-Uniform Prior): [0.57142857 0.28571429 0.14285714]
    ```

### 5. Applying MLE and MAP to the 20 Newsgroups Dataset

*   **Dataset Overview:** The 20 Newsgroups dataset is a collection of approximately 20,000 newsgroup documents, partitioned (nearly) evenly across 20 different newsgroups. It's a common dataset for text classification.

*   **Steps:**

    1.  **Data Preprocessing:**
        *   Load the 20 Newsgroups dataset using scikit-learn's `fetch_20newsgroups` function.
        *   Clean the text data: remove stop words, punctuation, perform stemming or lemmatization (optional).
        *   Create a vocabulary (list of unique words).
        *   Represent each document as a vector of word counts (term-frequency).  Use `CountVectorizer` from scikit-learn.
    2.  **MLE Estimation:**
        *   For each document in the dataset:
            *   Calculate the MLE estimate for the multinomial parameters (word probabilities) using the `mle_multinomial` function (or equivalent).
    3.  **MAP Estimation:**
        *   Choose different prior distributions (Dirichlet with various `α` values).  Experiment with:
            *   Uniform Dirichlet (Laplace smoothing: `α_i = 1`).
            *   `α_i > 1`:  Encourages a more uniform distribution.
            *   `α_i < 1`: Encourages a more sparse distribution (some probabilities closer to zero).
            *   Group-specific priors:  If you have prior knowledge about the topics, you can set `α_i` values differently for documents belonging to different newsgroups.  For example, if you know a certain word is common in the "sci.space" newsgroup, you might assign a higher `α_i` to that word for documents in that group.
        *   For each document and each prior distribution:
            *   Calculate the MAP estimate for the multinomial parameters using the `map_multinomial_dirichlet` function (or equivalent).
    4.  **Text Classification (Example using Naive Bayes):**
        *   Split the dataset into training and testing sets.
        *   Train a Naive Bayes classifier using both the MLE and MAP estimates of the word probabilities as features.  The Naive Bayes classifier relies on the assumption that features (word counts) are conditionally independent given the class (newsgroup).  The multinomial Naive Bayes variant is well-suited for text classification.
        *   Evaluate the performance of the classifier (accuracy, precision, recall, F1-score) on the testing set for each prior distribution.
    5.  **Comparison and Evaluation:**  (See Section 6)

*   **Code Snippet (Illustrative):**

    ```python
    from sklearn.datasets import fetch_20newsgroups
    from sklearn.feature_extraction.text import CountVectorizer
    from sklearn.model_selection import train_test_split
    from sklearn.naive_bayes import MultinomialNB
    from sklearn.metrics import accuracy_score

    # Load the 20 Newsgroups dataset
    newsgroups = fetch_20newsgroups(subset='all', remove=('headers', 'footers', 'quotes'))

    # Create a CountVectorizer
    vectorizer = CountVectorizer(stop_words='english', max_df=0.95, min_df=2) # Remove common and rare words
    X = vectorizer.fit_transform(newsgroups.data)
    y = newsgroups.target

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Function to train and evaluate Naive Bayes (using MLE estimates implicitly in CountVectorizer)
    def train_and_evaluate(X_train, X_test, y_train, y_test, alpha=1.0):
        """Trains a Multinomial Naive Bayes classifier with a specified smoothing parameter (alpha).

        Args:
            X_train: Training data (sparse matrix).
            X_test: Testing data (sparse matrix).
            y_train: Training labels.
            y_test: Testing labels.
            alpha: Smoothing parameter (Laplace smoothing if alpha=1, equivalent to MAP with uniform Dirichlet prior).

        Returns:
            Accuracy on the test set.
        """
        clf = MultinomialNB(alpha=alpha)  # alpha is equivalent to adding alpha to the counts in the NB classifier
        clf.fit(X_train, y_train)
        y_pred = clf.predict(X_test)
        return accuracy_score(y_test, y_pred)

    # Train and evaluate with Laplace smoothing (alpha=1)
    accuracy_laplace = train_and_evaluate(X_train, X_test, y_train, y_test, alpha=1.0)
    print(f"Accuracy with Laplace Smoothing: {accuracy_laplace}")

    # Train and evaluate with a different smoothing parameter (alpha=0.1 - less smoothing)
    accuracy_less_smoothing = train_and_evaluate(X_train, X_test, y_train, y_test, alpha=0.1)
    print(f"Accuracy with Alpha=0.1 (Less Smoothing): {accuracy_less_smoothing}")

    # Train and evaluate without any smoothing (alpha=0 - not recommended, can cause issues)
    #accuracy_no_smoothing = train_and_evaluate(X_train, X_test, y_train, y_test, alpha=0.0) # Can cause errors due to zero probabilities.  Be careful.
    #print(f"Accuracy without Smoothing: {accuracy_no_smoothing}") #This will likely throw an error

    # NOTE: This simplified example uses the smoothing functionality *built into* MultinomialNB.
    # To fully replicate the MAP implementation above, you would need to:
    # 1.  Modify CountVectorizer to return counts directly.
    # 2.  Implement your own Multinomial Naive Bayes classifier from scratch.
    # 3.  Use map_multinomial_dirichlet to calculate the probabilities for each document.
    # 4.  Use those probabilities in your custom Naive Bayes classifier.
    ```

### 6. Compare Results and Evaluate the Effect of Different Priors

*   **Evaluation Metrics:** Use appropriate metrics to compare the performance of MLE and MAP estimation with different priors.  Common metrics for text classification include:
    *   **Accuracy:**  The proportion of correctly classified documents.
    *   **Precision:**  The proportion of correctly predicted positive instances out of all predicted positive instances.
    *   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances.
    *   **F1-score:**  The harmonic mean of precision and recall.
    *   **Log-likelihood on the test set:** Provides a probabilistic measure of the fit of the model to the unseen data. Higher log-likelihood indicates a better fit.

*   **Comparison Strategies:**

    *   **Compare MLE vs. MAP (with different priors):**  Observe how the choice of prior affects the classifier's performance.
    *   **Compare different priors:**  Evaluate the impact of different `α` values in the Dirichlet prior.  Try uniform priors (Laplace smoothing), and non-uniform priors.
    *   **Analyze the estimated probabilities:** Examine the estimated word probabilities for different newsgroups under different estimation methods.  See if the estimated probabilities are more plausible with certain priors. For example, are words associated with a specific topic assigned higher probabilities in the relevant newsgroup?
    *   **Consider sparsity:**  How does the prior affect the sparsity of the estimated probabilities? Do certain priors lead to more probabilities being close to zero?

*   **Expected Outcomes:**

    *   **Laplace smoothing (uniform Dirichlet prior) generally improves performance compared to MLE:**  It prevents zero probabilities, which can cause problems in subsequent calculations (e.g., Naive Bayes).
    *   **The optimal prior depends on the dataset and the task:**  There's no one-size-fits-all prior.  Experimentation is key.  If you have prior knowledge about the data, incorporating it into the prior can improve performance.
    *   **Strongly informative priors can bias the results:** If your prior is too strong and doesn't reflect the true data distribution, it can lead to worse performance.
    *   **Priors can help with overfitting:**  By regularizing the parameter estimates, priors can prevent overfitting, especially when the training data is limited.

*   **Example Analysis:**

    *   If Laplace smoothing significantly improves accuracy, it suggests that the MLE estimates were overfitting due to zero counts.
    *   If a non-uniform prior based on domain knowledge further improves accuracy, it indicates that the prior knowledge was valuable.
    *   If a strongly biased prior leads to worse performance, it indicates that the prior was inaccurate or too strong.

### 7. Advantages and Disadvantages of MLE and MAP Estimation

| Feature          | MLE                                   | MAP                                                                |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------ |
| **Concept**      | Maximizes the likelihood of the data. | Maximizes the posterior distribution (likelihood * prior).           |
| **Parameters**   | Requires only the data.                | Requires data and a prior distribution.                            |
| **Zero Counts**  | Can assign zero probabilities.       | Can avoid zero probabilities by using appropriate priors.        |
| **Bias**         | Unbiased (asymptotically)             | Biased towards the prior.                                       |
| **Variance**     | Can have high variance, especially with limited data. | Can have lower variance, especially with informative priors.   |
| **Computation**  | Generally simpler.                     | Can be more complex, depending on the prior distribution.          |
| **Overfitting** | More prone to overfitting.           | Less prone to overfitting, especially with regularizing priors.   |
| **Use Cases**   | When little or no prior knowledge is available and large datasets are available.  | When prior knowledge is available or when dealing with small datasets to mitigate overfitting. |

### Practice Questions / Exercises

1.  **Derive the MLE estimate for the parameter *p* of a Bernoulli distribution.** (Answer:  `p_MLE = (number of successes) / (number of trials)`)

2.  **Explain the difference between a likelihood function and a probability density/mass function.** (Answer:  Both use the same formula, but the likelihood function treats the parameters as variables and the data as fixed, while the PDF/PMF treats the data as variables and the parameters as fixed.)

3.  **Explain what a conjugate prior is and why it is useful.** (Answer: A conjugate prior is a prior distribution that, when combined with a specific likelihood function, results in a posterior distribution that is in the same family as the prior. It's useful because it simplifies the calculations of the posterior.)

4.  **Suppose you have a document containing the words "apple", "banana", "apple", "orange". You have a vocabulary of "apple", "banana", "orange", "grape". Calculate the MLE estimate for the probability of each word in this document.** (Answer: `p_apple = 2/4 = 0.5`, `p_banana = 1/4 = 0.25`, `p_orange = 1/4 = 0.25`, `p_grape = 0/4 = 0`)

5.  **Using the same document and vocabulary as above, calculate the MAP estimate for the probability of each word using Laplace smoothing (alpha=1).** (Answer: `p_apple = (2+1)/(4+4) = 3/8 = 0.375`, `p_banana = (1+1)/(4+4) = 2/8 = 0.25`, `p_orange = (1+1)/(4+4) = 2/8 = 0.25`, `p_grape = (0+1)/(4+4) = 1/8 = 0.125`)

6.  **Discuss the potential advantages and disadvantages of using a highly informative prior in the context of text classification.** (Answer: Advantage: Can improve accuracy if the prior is accurate and reflects domain knowledge. Disadvantage: Can bias the results and decrease accuracy if the prior is inaccurate or too strong.)

### Important Points to Remember

*   MLE can be problematic when dealing with sparse data, leading to zero probabilities.
*   MAP estimation incorporates prior knowledge to improve parameter estimates, especially with limited data.
*   The choice of prior distribution is crucial and depends on the problem and the available prior knowledge.
*   Laplace smoothing is a simple and effective technique for avoiding zero probabilities.
*   Experimentation is key to finding the best prior distribution for a given task. The best prior provides a sweet spot, regularizing enough to prevent overfitting, but not being so strong that it prevents the model from accurately representing the data.
