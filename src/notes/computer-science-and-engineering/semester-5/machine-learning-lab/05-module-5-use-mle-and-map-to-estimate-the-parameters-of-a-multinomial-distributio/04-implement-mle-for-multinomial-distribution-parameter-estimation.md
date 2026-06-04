---
title: "Implement MLE for multinomial distribution parameter estimation."
subject: "MACHINE LEARNING LAB"
module: "Module 5: Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b94c"
status: "completed"
scrapedAt: "2026-05-20T16:47:13.758Z"
---
# MACHINE LEARNING LAB - Module 5: MLE for Multinomial Distribution on 20 Newsgroups

## Topic: Implement MLE for Multinomial Distribution Parameter Estimation

**Module Description:** Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation.

**Topic Description:** Implement MLE for multinomial distribution parameter estimation.

**Learning Outcomes:**

*   Understand the Multinomial distribution and its relevance to text data.
*   Apply Maximum Likelihood Estimation (MLE) to estimate the parameters of a multinomial distribution.
*   Implement MLE for multinomial parameter estimation using the 20 Newsgroups dataset.
*   Interpret the estimated parameters in the context of text classification.
*   Evaluate the performance of the estimated parameters.

---

## 1. Understanding the Multinomial Distribution

### 1.1. Key Concepts and Definitions:

*   **Multinomial Distribution:**  A generalization of the binomial distribution. Instead of two possible outcomes (success or failure), the multinomial distribution models the probabilities of *k* possible outcomes in *n* independent trials.  Each trial results in exactly one of the *k* outcomes.

    *   **Parameters:**
        *   *n*: Number of trials.
        *   *p = (p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>k</sub>)*: Probability vector where *p<sub>i</sub>* is the probability of outcome *i* and  ∑ *p<sub>i</sub>* = 1.

    *   **Random Variables:** *x = (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>k</sub>)*: Number of times each outcome occurs in *n* trials, where ∑ *x<sub>i</sub>* = *n*.

    *   **Probability Mass Function (PMF):**

        P(x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>k</sub>) = (n! / (x<sub>1</sub>! x<sub>2</sub>! ... x<sub>k</sub>!)) * p<sub>1</sub><sup>x<sub>1</sub></sup> p<sub>2</sub><sup>x<sub>2</sub></sup> ... p<sub>k</sub><sup>x<sub>k</sub></sup>

*   **Relevance to Text Data:**  The multinomial distribution is commonly used in text analysis to model the distribution of words within a document. Each word in the vocabulary represents an outcome, and the count of each word in a document represents the number of times that outcome occurs. This is also known as the Bag-of-Words (BoW) representation.

### 1.2. Example:

Imagine rolling a die 10 times (n=10).  We have 6 possible outcomes (k=6), corresponding to the numbers 1 through 6.  Let's say we observed the following:

*   1: 2 times (x<sub>1</sub> = 2)
*   2: 1 time (x<sub>2</sub> = 1)
*   3: 3 times (x<sub>3</sub> = 3)
*   4: 0 times (x<sub>4</sub> = 0)
*   5: 2 times (x<sub>5</sub> = 2)
*   6: 2 times (x<sub>6</sub> = 2)

In this case, *x* = (2, 1, 3, 0, 2, 2) and ∑ *x<sub>i</sub>* = 10 = *n*.  The parameters *p* would be the probabilities of each number occurring on a single roll.  If the die is fair, *p* = (1/6, 1/6, 1/6, 1/6, 1/6, 1/6).

## 2. Maximum Likelihood Estimation (MLE)

### 2.1. Key Concepts and Definitions:

*   **Likelihood Function:** The likelihood function, denoted by *L(θ; x)*, represents the probability of observing the data *x* given a specific parameter value *θ*.  In the context of the multinomial distribution, *θ* represents the probability vector *p*.  It's crucial to remember that the likelihood function is viewed as a function of the *parameter* *θ* given the observed data *x*, **not** the other way around.

    *   For the multinomial distribution, the likelihood function is the same as the PMF:

        L(p; x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>k</sub>) = (n! / (x<sub>1</sub>! x<sub>2</sub>! ... x<sub>k</sub>!)) * p<sub>1</sub><sup>x<sub>1</sub></sup> p<sub>2</sub><sup>x<sub>2</sub></sup> ... p<sub>k</sub><sup>x<sub>k</sub></sup>

*   **Maximum Likelihood Estimate (MLE):** The value of the parameter *θ* that maximizes the likelihood function.  In other words, it's the parameter value that makes the observed data most probable.

*   **Log-Likelihood Function:** Taking the logarithm of the likelihood function. This is often done because:
    *   It simplifies the optimization problem (e.g., turns products into sums).
    *   It can improve numerical stability.
    *   It doesn't change the location of the maximum (because the logarithm is a monotonic function).

### 2.2. MLE Derivation for Multinomial Distribution:

1.  **Likelihood Function:** As stated above.
2.  **Log-Likelihood Function:**

    log L(p; x) = log(n! / (x<sub>1</sub>! x<sub>2</sub>! ... x<sub>k</sub>!)) +  ∑ x<sub>i</sub> log(p<sub>i</sub>)

3.  **Optimization:** We want to find the *p* that maximizes log L(p; x) subject to the constraint ∑ *p<sub>i</sub>* = 1.  We can use the method of Lagrange multipliers.

    *   **Lagrangian Function:**

        Λ(p, λ) = log L(p; x) - λ(∑ p<sub>i</sub> - 1)

    *   **Taking Derivatives and Solving:**
        *   ∂Λ/∂p<sub>i</sub> = x<sub>i</sub> / p<sub>i</sub> - λ = 0  =>  p<sub>i</sub> = x<sub>i</sub> / λ
        *   ∂Λ/∂λ = ∑ p<sub>i</sub> - 1 = 0  =>  ∑ (x<sub>i</sub> / λ) = 1  =>  (∑ x<sub>i</sub>) / λ = 1  => λ = ∑ x<sub>i</sub> = n

    *   **MLE Estimate:**

        p<sub>i</sub><sup>MLE</sup> = x<sub>i</sub> / n

    This means the MLE estimate for the probability of outcome *i* is simply the observed frequency of outcome *i* in the data.

### 2.3. Example:

Using the die-rolling example from above (x = (2, 1, 3, 0, 2, 2), n = 10):

*   p<sub>1</sub><sup>MLE</sup> = 2/10 = 0.2
*   p<sub>2</sub><sup>MLE</sup> = 1/10 = 0.1
*   p<sub>3</sub><sup>MLE</sup> = 3/10 = 0.3
*   p<sub>4</sub><sup>MLE</sup> = 0/10 = 0.0
*   p<sub>5</sub><sup>MLE</sup> = 2/10 = 0.2
*   p<sub>6</sub><sup>MLE</sup> = 2/10 = 0.2

This estimates that the probability of rolling a 1 is 0.2, rolling a 2 is 0.1, etc. Notice that ∑ p<sub>i</sub><sup>MLE</sup> = 1.

## 3. Implementing MLE for Multinomial Parameter Estimation on 20 Newsgroups Dataset

### 3.1. Steps:

1.  **Data Preparation:**
    *   **Load the 20 Newsgroups dataset:** Use libraries like `sklearn.datasets` to load the dataset.
    *   **Text Preprocessing:** Clean and preprocess the text data:
        *   **Tokenization:**  Split the text into individual words or tokens (using `nltk`, `spaCy`, or `sklearn.feature_extraction.text.CountVectorizer`).
        *   **Lowercasing:** Convert all text to lowercase.
        *   **Stop Word Removal:** Remove common words that don't carry much information (e.g., "the", "a", "is").
        *   **Stemming/Lemmatization (Optional):** Reduce words to their root form.
    *   **Create Vocabulary:** Build a vocabulary of all unique words in the dataset.
    *   **Document Representation:** Represent each document as a vector of word counts (using `CountVectorizer` or `TfidfVectorizer`). This creates a document-term matrix.  Each row represents a document, and each column represents a word from the vocabulary.  The values in the matrix are the counts of each word in each document.

2.  **Calculate Word Counts:**
    *   For each document in a specific category (e.g., "comp.graphics"), sum the word counts across all documents in that category. This gives you a vector of total word counts for that category.

3.  **Estimate Parameters (MLE):**
    *   For each category, calculate the MLE estimate for the probability of each word:

        p<sub>i,c</sub><sup>MLE</sup> = count(word<sub>i</sub> in category c) / total_words_in_category(c)

    *   Where:
        *   *p<sub>i,c</sub><sup>MLE</sup>* is the MLE estimate for the probability of word *i* in category *c*.
        *   *count(word<sub>i</sub> in category c)* is the total count of word *i* in all documents belonging to category *c*.
        *   *total_words_in_category(c)* is the total number of words in all documents belonging to category *c*.

4.  **Store the Estimated Parameters:** Store the estimated probability vectors (p<sub>c</sub><sup>MLE</sup>) for each category.

### 3.2. Python Code Example (using scikit-learn):

```python
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

# Load the 20 Newsgroups dataset
categories = ['alt.atheism', 'comp.graphics', 'sci.space'] # Example categories
newsgroups_train = fetch_20newsgroups(subset='train', categories=categories, shuffle=True, random_state=42)

# Create a CountVectorizer
vectorizer = CountVectorizer(stop_words='english', lowercase=True, max_df=0.95, min_df=2) # Remove common stop words
X_train = vectorizer.fit_transform(newsgroups_train.data)
y_train = newsgroups_train.target

# Get the vocabulary
vocabulary = vectorizer.get_feature_names_out() # use get_feature_names_out instead of get_feature_names

# Function to calculate MLE estimates for a category
def calculate_mle(category_index, X, y, vocabulary):
    """
    Calculates MLE estimates for the multinomial distribution parameters
    for a given category.

    Args:
        category_index: The index of the category in the target array.
        X: The document-term matrix.
        y: The target array (category labels).
        vocabulary: The list of words in the vocabulary.

    Returns:
        A dictionary mapping each word in the vocabulary to its MLE estimate
        for the given category.
    """

    # Filter documents belonging to the specified category
    category_documents = X[y == category_index]

    # Sum the word counts across all documents in the category
    total_word_counts = category_documents.sum(axis=0).A1  # A1 converts to a 1D numpy array

    # Calculate the total number of words in the category
    total_words = np.sum(total_word_counts)

    # Calculate MLE estimates for each word
    mle_estimates = {}
    for i, word in enumerate(vocabulary):
        mle_estimates[word] = total_word_counts[i] / total_words

    return mle_estimates

# Calculate MLE estimates for each category
mle_estimates = {}
for i, category in enumerate(newsgroups_train.target_names):
    mle_estimates[category] = calculate_mle(i, X_train, y_train, vocabulary)

# Print some example MLE estimates
for category in mle_estimates:
    print(f"Category: {category}")
    print(f"MLE estimate for 'space': {mle_estimates[category].get('space', 0):.4f}") #Get returns 0 if key doesn't exist.
    print(f"MLE estimate for 'graphics': {mle_estimates[category].get('graphics', 0):.4f}")
    print("-" * 20)
```

**Explanation:**

*   The code loads the 20 Newsgroups dataset and selects a few categories.
*   `CountVectorizer` is used to create a document-term matrix.  The `stop_words='english'` argument removes common English stop words. `lowercase=True` converts all words to lowercase. `max_df` and `min_df` filter out extremely frequent or infrequent terms to prevent overfitting or noise.
*   The `calculate_mle` function calculates the MLE estimates for each word in a given category.  It sums the word counts for all documents in that category and then divides each word count by the total number of words in the category.
*   Finally, the code prints some example MLE estimates for the words "space" and "graphics" in each category.

### 3.3. Important Considerations:

*   **Zero Counts:** If a word doesn't appear in a particular category, its MLE estimate will be 0.  This can cause problems when using these estimates for classification (e.g., multiplying probabilities).  **Laplace Smoothing** (adding 1 to each count) is a common technique to address this issue.  This will be covered in MAP estimation.

*   **Vocabulary Size:** The size of the vocabulary can significantly impact the computational cost and the quality of the estimates.  Techniques like feature selection or dimensionality reduction can be used to reduce the vocabulary size.

*   **Computational Efficiency:**  For large datasets, efficient implementations using sparse matrices and optimized libraries are crucial.

## 4. Interpreting the Estimated Parameters

The estimated parameters (p<sub>i,c</sub><sup>MLE</sup>) represent the probability of observing a specific word *i* in a document belonging to category *c*.  These probabilities can be used to:

*   **Understand Category-Specific Vocabulary:** Identify the words that are most characteristic of each category (the words with the highest probability in that category).
*   **Build Classifiers:**  Use these probabilities in Bayesian classifiers (like Naive Bayes) to predict the category of a new document based on its word counts.
*   **Compare Categories:**  Compare the probabilities of different words across different categories to understand the differences between them.

For example, in the code above, we examined the probabilities of "space" and "graphics."  If the probability of "space" is higher in the "sci.space" category than in the "comp.graphics" category, it suggests that "space" is a more indicative word for the "sci.space" category.

## 5. Evaluating the Performance of the Estimated Parameters

The performance of the estimated parameters can be evaluated by using them in a classification task and measuring the accuracy, precision, recall, and F1-score.  A common approach is to use the Naive Bayes classifier:

1.  **Train the Classifier:**  Train a Naive Bayes classifier using the estimated parameters (p<sub>i,c</sub><sup>MLE</sup>) as the class-conditional probabilities.
2.  **Test the Classifier:**  Use a held-out test set to evaluate the performance of the classifier.
3.  **Metrics:**  Calculate performance metrics such as accuracy, precision, recall, and F1-score.

### 5.1. Python Code Example (extending the previous example):

```python
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Split the data into training and testing sets
X_train_counts, X_test_counts, y_train, y_test = train_test_split(X_train, newsgroups_train.target, test_size=0.2, random_state=42)

# Train a Multinomial Naive Bayes classifier
# The CountVectorizer output is already in the format that MultinomialNB expects
clf = MultinomialNB()
clf.fit(X_train_counts, y_train)

# Predict the categories for the test set
y_pred = clf.predict(X_test_counts)

# Evaluate the performance of the classifier
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")

print("Classification Report:")
print(classification_report(y_test, y_pred, target_names=newsgroups_train.target_names))
```

**Explanation:**

*   The code splits the training data into training and testing sets.
*   A `MultinomialNB` classifier is trained using the training data. Because `CountVectorizer` was used, no further transformation or parameter estimation is required from the `MultinomialNB` class - it can directly use the counts to estimate its parameters.
*   The classifier is used to predict the categories for the test set.
*   The accuracy and classification report are printed to evaluate the performance of the classifier.

**Note:**  This example uses the built-in `MultinomialNB` classifier from scikit-learn.  In a more in-depth assignment, you might be asked to implement the Naive Bayes classifier *yourself* using the MLE estimates you calculated.  This would involve calculating the posterior probabilities for each category given a new document's word counts.

## 6. Practice Questions/Exercises

1.  **Implement Laplace Smoothing:** Modify the `calculate_mle` function to implement Laplace smoothing (add-one smoothing).  How does this affect the estimated probabilities?  How does this affect classification performance?
    *   **Answer:** You would add 1 to each word count and add the vocabulary size to the total word count:

        p<sub>i,c</sub><sup>Smoothed</sup> = (count(word<sub>i</sub> in category c) + 1) / (total_words_in_category(c) + |Vocabulary|)

    Laplace smoothing avoids zero probabilities, making the model more robust. It generally improves classification performance, especially for rare words.

2.  **Experiment with Different Preprocessing Steps:**  Try different preprocessing steps, such as stemming or lemmatization.  How do these steps affect the vocabulary size and the classification performance?
    *   **Answer:** Stemming/Lemmatization reduces vocabulary size by grouping words with similar meaning. This can improve generalization performance, especially with limited data, but might also reduce the model's ability to distinguish between subtle differences in meaning.

3.  **Implement Naive Bayes from Scratch:**  Implement a Naive Bayes classifier from scratch, using the MLE estimates you calculated.  Compare the performance of your implementation to the scikit-learn `MultinomialNB` classifier.
    *   **Answer:** This involves calculating the posterior probability for each class given the word counts of a document:

        P(c | d) ∝ P(c) * ∏ P(word<sub>i</sub> | c)

        Where:
        * P(c | d) is the posterior probability of class c given document d.
        * P(c) is the prior probability of class c (estimated from the training data).
        * P(word<sub>i</sub> | c) is the conditional probability of word i given class c (your MLE estimate).
        * ∏ is the product over all words in the document.

        Classify the document as the class with the highest posterior probability.

4. **Impact of `min_df` and `max_df`:** Experiment with different values for the `min_df` and `max_df` parameters in the `CountVectorizer`. How does changing these parameters affect the size of the vocabulary, and how does that, in turn, affect the classifier's performance?

    * **Answer:**
        * `min_df`:  This parameter specifies the minimum document frequency for a term to be included in the vocabulary.  A higher `min_df` value will exclude rare terms, potentially reducing noise and improving generalization, especially if you have a small training set. However, setting it too high might remove informative words.
        * `max_df`: This parameter specifies the maximum document frequency for a term to be included in the vocabulary.  A higher `max_df` value allows more common terms (which occur in many documents) to be included, while a lower value filters out very common terms.  Setting it too low removes words that might be relevant.  Common words are already generally handled by stop word removal; this offers another way to control the vocabulary.

## 7. Important Points to Remember

*   **MLE provides point estimates for the parameters of a distribution.** It finds the parameters that maximize the likelihood of the observed data.
*   **The Multinomial distribution is a good choice for modeling word counts in text data.**
*   **Preprocessing is crucial for text data.** Cleaning and transforming the text data can significantly improve the performance of the model.
*   **Laplace smoothing is important to avoid zero probabilities.** It helps to create a more robust model.
*   **Evaluation is necessary to assess the performance of the model.** Use appropriate metrics (accuracy, precision, recall, F1-score) to evaluate the model.
*   **The 20 Newsgroups dataset is a common benchmark for text classification tasks.**

This comprehensive guide should provide a solid foundation for implementing MLE for multinomial parameter estimation on the 20 Newsgroups dataset. Remember to experiment with different parameters, preprocessing techniques, and evaluation metrics to gain a deeper understanding of the concepts. Good luck!
