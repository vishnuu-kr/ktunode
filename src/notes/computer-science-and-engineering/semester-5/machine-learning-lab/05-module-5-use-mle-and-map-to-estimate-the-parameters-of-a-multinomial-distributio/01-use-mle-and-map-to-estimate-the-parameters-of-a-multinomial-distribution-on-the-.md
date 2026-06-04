---
title: "Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation."
subject: "MACHINE LEARNING LAB"
module: "Module 5: Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b949"
status: "completed"
scrapedAt: "2026-05-20T16:47:11.548Z"
---
# Machine Learning Lab: Module 5 - Multinomial Distribution Parameter Estimation with MLE and MAP

## Topic: Using MLE and MAP to Estimate Multinomial Distribution Parameters on the 20 Newsgroups Dataset and Exploring Prior Impact

### 1. Learning Outcomes

*   Understand the multinomial distribution and its relevance to text data.
*   Implement Maximum Likelihood Estimation (MLE) for estimating multinomial distribution parameters.
*   Understand Maximum A Posteriori (MAP) estimation and its relationship to Bayesian inference.
*   Implement MAP estimation for multinomial distribution parameters using different prior distributions (e.g., Dirichlet).
*   Apply MLE and MAP to the 20 Newsgroups dataset.
*   Evaluate the impact of different priors on parameter estimation in the context of the 20 Newsgroups dataset.
*   Interpret the estimated parameters in the context of text classification.

### 2. Key Concepts and Definitions

*   **Multinomial Distribution:** A generalization of the binomial distribution.  It describes the probability of observing a vector of counts when sampling from a population with more than two categories.  Think of it as rolling a die *n* times (where the die has *k* sides) and recording the number of times each side appears.
    *   **Parameters:** `n` (number of trials), `p = (p1, p2, ..., pk)` (probability of each outcome, where `sum(p) = 1`).
    *   **Probability Mass Function (PMF):**

        ```
        P(x1, x2, ..., xk | n, p1, p2, ..., pk) = (n! / (x1! x2! ... xk!)) * (p1^x1 * p2^x2 * ... * pk^xk)
        ```

        where `x1 + x2 + ... + xk = n` and `xi` is the count of outcome `i`.

*   **Maximum Likelihood Estimation (MLE):** A method of estimating the parameters of a statistical model.  It chooses the parameter values that maximize the likelihood function.  The likelihood function expresses the probability of observing the data given the parameters.

*   **Maximum A Posteriori (MAP) Estimation:**  A method of estimating the parameters of a statistical model that combines the likelihood function with a prior distribution over the parameters.  It aims to find the parameter values that maximize the posterior probability, which is proportional to the product of the likelihood and the prior.  This is a Bayesian approach.

*   **Prior Distribution:** A probability distribution that expresses our beliefs about the parameters *before* observing any data.  It helps to incorporate prior knowledge or regularization into the estimation process.

*   **Posterior Distribution:** A probability distribution that expresses our beliefs about the parameters *after* observing the data. It is calculated using Bayes' theorem: `Posterior ∝ Likelihood * Prior`

*   **Dirichlet Distribution:** A family of continuous multivariate probability distributions parameterized by a vector of positive real numbers (the concentration parameters).  It is a common prior distribution for the parameters of a multinomial distribution, as it is conjugate, meaning the posterior distribution is also a Dirichlet distribution.
    *   **Parameters:** `α = (α1, α2, ..., αk)` (concentration parameters).
    *   **Probability Density Function (PDF):**

        ```
        f(p; α) = (1 / B(α)) * prod(pi^(αi - 1))
        ```

        where `B(α)` is the multivariate Beta function, and `sum(p) = 1`.

*   **Conjugate Prior:** A prior distribution that, when multiplied by the likelihood function, results in a posterior distribution that is in the same family as the prior. This simplifies the calculation of the posterior. Dirichlet is conjugate to Multinomial.

*   **20 Newsgroups Dataset:** A collection of approximately 20,000 newsgroup documents, partitioned (nearly) evenly across 20 different newsgroups.  It's a standard dataset for text classification, text clustering, and topic modeling.

*   **Text Preprocessing:** Steps taken to prepare text data for analysis, including:
    *   **Tokenization:** Splitting text into individual words or tokens.
    *   **Stop Word Removal:** Removing common words like "the," "a," and "is" that don't carry much meaning.
    *   **Lowercasing:** Converting all text to lowercase.
    *   **Stemming/Lemmatization:** Reducing words to their root form.
    *   **Vocabulary Building:** Creating a list of unique words in the dataset.

*   **Bag-of-Words (BoW) Model:** A simplified representation of text where each document is represented as a vector of word counts.  The order of words is ignored.

### 3. Implementing MLE for Multinomial Distribution

#### 3.1  MLE for a Single Document

Given a document represented as a vector of word counts `x = (x1, x2, ..., xk)` where `xi` is the number of times word `i` appears in the document, and assuming a multinomial distribution, the MLE estimate for the probability of word `i` is:

```
p_i_MLE = x_i / n
```

where `n = sum(x_i)` (the total number of words in the document).

#### 3.2  MLE for Multiple Documents (or a corpus)

To estimate the multinomial distribution parameters for the entire 20 Newsgroups dataset (or a subset), we need to aggregate the word counts across all documents in a given newsgroup.

1.  **Preprocessing:** Apply text preprocessing steps (tokenization, stop word removal, lowercasing, etc.) to each document.
2.  **Vocabulary Building:** Create a vocabulary of unique words across all documents.
3.  **Count Aggregation:** For each newsgroup, count the occurrences of each word in the vocabulary across all documents belonging to that newsgroup.
4.  **MLE Calculation:** For each newsgroup `c`, calculate the MLE estimate for the probability of word `i` as:

    ```
    p_i_MLE_c = count_i_c / sum(count_j_c)
    ```

    where `count_i_c` is the total count of word `i` in newsgroup `c`, and the sum is over all words `j` in the vocabulary.

**Example:**

Suppose we have two newsgroups: "comp.graphics" and "rec.sport.hockey."  After preprocessing and vocabulary building, let's say our vocabulary has three words: "image," "hockey," and "algorithm."  And let's say after aggregating counts:

*   comp.graphics:  image=100, hockey=10, algorithm=50
*   rec.sport.hockey: image=5, hockey=200, algorithm=1

Then, the MLE estimates are:

*   comp.graphics: p(image) = 100/160 = 0.625, p(hockey) = 10/160 = 0.0625, p(algorithm) = 50/160 = 0.3125
*   rec.sport.hockey: p(image) = 5/206 = 0.024, p(hockey) = 200/206 = 0.971, p(algorithm) = 1/206 = 0.005

### 4. Implementing MAP for Multinomial Distribution

#### 4.1  MAP Estimation with Dirichlet Prior

Using a Dirichlet prior with parameters `α = (α1, α2, ..., αk)`, the MAP estimate for the probability of word `i` in newsgroup `c` is:

```
p_i_MAP_c = (count_i_c + α_i -1) / (sum(count_j_c) + sum(α_j -1))
```

In practice, we usually use a symmetric Dirichlet prior, where all `α_i` are equal. This is often referred to as Laplace smoothing (when `α_i = 1`). If we use `α_i = α` for all `i`, then:

```
p_i_MAP_c = (count_i_c + α - 1) / (sum(count_j_c) + k*(α - 1))
```

where `k` is the size of the vocabulary.  When `α = 1`, this simplifies to Laplace Smoothing.

#### 4.2  Impact of the Prior

The Dirichlet prior acts as a regularizer.

*   **High `α` values (compared to counts):** The prior dominates the likelihood, and the parameter estimates will be closer to the mean of the prior distribution (which is `1/k` for a symmetric Dirichlet). This makes the probabilities more uniform across all words.  It prevents overfitting, but might introduce bias.

*   **Low `α` values (compared to counts):** The likelihood dominates the prior, and the MAP estimates will be closer to the MLE estimates.  The prior has less influence.

*   **`α = 1` (Laplace Smoothing):** Adds 1 to each word count.  This ensures that no probability is ever zero, even if a word doesn't appear in a particular newsgroup.  Helps prevent zero-probability problems during classification.

*   **`α < 1`**:  This tends to push the parameter estimates even *further* away from uniformity than MLE does, favoring words that already have high counts and suppressing probabilities for less frequent words even more than MLE would. This can be useful for feature selection.

**Example:**

Using the same counts as before (comp.graphics: image=100, hockey=10, algorithm=50, vocabulary size=3), and setting `α = 1` (Laplace Smoothing):

*   p(image) = (100 + 1 - 1) / (160 + 3*(1 - 1)) = 100/160 = 0.625 (Same as MLE because α=1, which is Laplace Smoothing)  *Notice that this isn't exactly what's happening with Laplace smoothing*

The *correct* Laplace Smoothing calculation for `α = 1` is:

```
p_i_MAP_c = (count_i_c + α) / (sum(count_j_c) + k*α)
```

So, with Laplace Smoothing:

*  p(image) = (100 + 1) / (160 + 3 * 1) = 101/163 = 0.6196
*  p(hockey) = (10 + 1) / (160 + 3 * 1) = 11/163 = 0.0675
*  p(algorithm) = (50 + 1) / (160 + 3 * 1) = 51/163 = 0.3129

If we set `α = 10`:

*   p(image) = (100 + 10) / (160 + 3*10) = 110/190 = 0.5789
*   p(hockey) = (10 + 10) / (160 + 3*10) = 20/190 = 0.1053
*   p(algorithm) = (50 + 10) / (160 + 3*10) = 60/190 = 0.3158

Notice how the probabilities have shifted to be less extreme and closer to 1/3 (the expected probability with a uniform distribution).

### 5. Applying MLE and MAP to the 20 Newsgroups Dataset

1.  **Data Loading:** Load the 20 Newsgroups dataset using `sklearn.datasets.fetch_20newsgroups`.
2.  **Data Preprocessing:**
    *   Tokenize the text using a suitable tokenizer (e.g., `nltk.word_tokenize`, `sklearn.feature_extraction.text.CountVectorizer`).
    *   Remove stop words using `nltk.corpus.stopwords` or `sklearn.feature_extraction.text.TfidfVectorizer(stop_words='english')`.
    *   Convert text to lowercase.
    *   Consider stemming or lemmatization.
3.  **Vocabulary Building:**  Create a vocabulary of unique words.  You can use `sklearn.feature_extraction.text.CountVectorizer` for this, which handles tokenization and vocabulary building in one step.
4.  **Count Matrix Creation:** Create a count matrix where rows represent documents and columns represent words in the vocabulary. The elements of the matrix are the word counts. Use `CountVectorizer` or a custom implementation.
5.  **Parameter Estimation:**
    *   **MLE:**  Calculate the MLE estimates for each newsgroup (as described in Section 3).
    *   **MAP:** Calculate the MAP estimates for each newsgroup using different Dirichlet priors (different values of `α`).  Try `α = 0.01`, `α = 1`, `α = 10`.
6.  **Analysis and Interpretation:**
    *   Examine the top words for each newsgroup under different estimation methods (MLE and MAP with different priors).
    *   Compare the parameter estimates obtained with MLE and MAP.  How do the estimates change as you vary `α`?
    *   How does the choice of prior affect the top words associated with each newsgroup?
    *   Visualize the word probabilities for different newsgroups and priors.
    *   Qualitatively assess the "quality" of the estimated parameters. Do the top words seem relevant to the corresponding newsgroup?
7.  **(Optional) Classification:** Train a Naive Bayes classifier using the estimated parameters (from MLE and MAP). Evaluate the performance of the classifier on a test set. Compare the performance with different priors. This provides a quantitative assessment of the impact of the prior.

### 6. Evaluating the Impact of Different Priors

*   **Qualitative Analysis:** Examine the top words identified for each newsgroup using different priors. Are the top words more or less relevant to the topic of the newsgroup?
*   **Visualization:** Plot the probability distributions of words for different newsgroups and priors.  Compare the distributions visually.  Are the distributions more or less "smooth" (i.e., uniform) with different priors?
*   **Quantitative Analysis (Classification):** Train a classifier (e.g., Naive Bayes) using the estimated parameters and evaluate its performance on a test set. This provides a measurable way to assess the impact of different priors on downstream tasks.  Metrics to consider:
    *   Accuracy
    *   Precision
    *   Recall
    *   F1-score

**Expected Results/Observations:**

*   **Laplace Smoothing (`α = 1`):**  Prevents zero probabilities, which is crucial for classification.  Results will be slightly different from MLE, especially for infrequent words.
*   **High `α` values:**  The probabilities will be more uniform across the vocabulary.  The top words might be less discriminative. The classification performance *might* decrease compared to Laplace Smoothing, especially if the high `α` drowns out meaningful differences between classes.  It can provide improved generalization and prevent overfitting if the MLE estimates were particularly noisy.
*   **Low `α` values:** The probability distribution will be more skewed, with higher probabilities assigned to the most frequent words. It can lead to overfitting, especially if the training data is small. It can also be useful for feature selection by emphasizing words that are already very frequent in a class.

### 7. Practice Questions/Exercises

1.  **Derive the MLE estimate for the parameters of a multinomial distribution.** (Answer: See Section 3)
2.  **Explain the difference between MLE and MAP estimation.** (Answer: MLE maximizes the likelihood function. MAP maximizes the posterior probability, which is proportional to the likelihood times the prior.)
3.  **What is a Dirichlet distribution, and why is it commonly used as a prior for multinomial distributions?** (Answer: See Section 2. It is a conjugate prior to the multinomial distribution.)
4.  **Explain the impact of the `α` parameter in a Dirichlet prior on the MAP estimate for multinomial distribution parameters.** (Answer: See Section 4.2)
5.  **Implement the MLE and MAP estimation algorithms for a small subset of the 20 Newsgroups dataset.  Experiment with different values of `α` and observe the changes in the estimated probabilities.**  (Answer:  This requires coding. Refer to Section 5 for guidance.)
6.  **How would you handle words that are not present in the training vocabulary when performing classification on new documents?** (Answer: Use a smoothing technique like Laplace Smoothing to assign a non-zero probability to unseen words, or ignore those words).
7.  **What are the potential drawbacks of using a bag-of-words representation for text data?** (Answer: It ignores word order and context, which can be important for understanding the meaning of a text.)
8.  **Why is text preprocessing important for text classification?** (Answer: It reduces noise, standardizes the data, and improves the performance of the classifier.)

### 8. Important Points to Remember

*   MLE and MAP are fundamental parameter estimation techniques.
*   The choice of prior can significantly impact the MAP estimates, especially when the data is limited.
*   Dirichlet distribution is a common and convenient prior for multinomial distributions due to its conjugacy.
*   Text preprocessing is crucial for achieving good performance on text classification tasks.
*   The 20 Newsgroups dataset is a standard benchmark for evaluating text classification algorithms.
*   Understanding the assumptions and limitations of the multinomial Naive Bayes classifier is essential for interpreting the results.
*   Laplace Smoothing is a vital technique for handling zero-frequency problems in text classification.
*   Experiment with different values of the prior parameters to understand their impact on the results.
