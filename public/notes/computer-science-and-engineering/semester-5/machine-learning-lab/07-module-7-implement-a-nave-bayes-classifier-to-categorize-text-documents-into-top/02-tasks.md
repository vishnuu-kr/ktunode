---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 7: Implement a Naïve Bayes classifier to categorize text documents into topics using the 20 Newsgroups dataset. Compare the performance of Multinomial Naïve Bayes with Bernoulli Naïve Bayes."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b958"
status: "completed"
scrapedAt: "2026-05-20T16:47:21.009Z"
---
# MACHINE LEARNING LAB - Module 7: Naïve Bayes for Text Classification (20 Newsgroups Dataset)

## Overview

This module focuses on implementing and comparing Naïve Bayes classifiers for text categorization using the 20 Newsgroups dataset. We will explore Multinomial and Bernoulli Naïve Bayes models, evaluating their performance in classifying documents into different topics.

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand the principles behind Naïve Bayes classification.
*   Explain the differences between Multinomial and Bernoulli Naïve Bayes.
*   Preprocess text data for use with Naïve Bayes classifiers.
*   Implement Multinomial and Bernoulli Naïve Bayes classifiers using Python and scikit-learn.
*   Evaluate the performance of both classifiers on the 20 Newsgroups dataset.
*   Interpret the results and compare the performance of the two models.
*   Identify the strengths and weaknesses of each model in the context of text classification.

## 1. Key Concepts and Definitions

### 1.1. Naïve Bayes Classifier

*   **Definition:** A probabilistic machine learning model based on applying Bayes' theorem with strong (naïve) independence assumptions between the features.
*   **Bayes' Theorem:**  Provides a way to calculate the probability of a hypothesis (class) given the evidence (features):
    *   `P(C|X) = [P(X|C) * P(C)] / P(X)`
        *   `P(C|X)`: Posterior probability of class `C` given features `X`.
        *   `P(X|C)`: Likelihood of features `X` given class `C`.
        *   `P(C)`: Prior probability of class `C`.
        *   `P(X)`: Prior probability of features `X` (evidence).  Often treated as a normalization constant and not directly calculated for classification.

*   **Naïve Assumption:**  Assumes that the presence or absence of a particular feature is unrelated to the presence or absence of any other feature, given the class label.  This is almost always false in real-world data, but the model often performs surprisingly well despite this simplification.

### 1.2. 20 Newsgroups Dataset

*   **Description:** A dataset containing approximately 20,000 newsgroup documents, partitioned (nearly) evenly across 20 different newsgroups.
*   **Use Case:**  A popular dataset for text classification and information retrieval tasks.
*   **Categories:** Cover diverse topics such as comp.graphics, sci.space, talk.politics.guns, etc.
*   **Availability:** Easily accessible through libraries like `scikit-learn` in Python.

### 1.3. Multinomial Naïve Bayes

*   **Suitable Data:** Best suited for discrete data, such as word counts or term frequencies in text documents.
*   **Feature Representation:**  Uses term frequency (TF) as features. The number of times a word appears in a document is used.
*   **Probability Estimation:**  Estimates the probability of a word occurring given a class: `P(word | class)`.
*   **Formula:** `P(C|D) ∝ P(C) * ∏ P(word_i | C) ^ count(word_i, D)`
    *   `C`: Class
    *   `D`: Document
    *   `word_i`:  i-th word in the vocabulary
    *   `count(word_i, D)`: Number of times `word_i` appears in document `D`

### 1.4. Bernoulli Naïve Bayes

*   **Suitable Data:** Best suited for binary or boolean features, such as word presence/absence in text documents.
*   **Feature Representation:** Uses a binary feature vector representing the presence or absence of each word in the vocabulary within a document.
*   **Probability Estimation:** Estimates both the probability of a word occurring given a class: `P(word | class)` and the probability of a word *not* occurring given a class: `P(¬word | class)`.
*   **Formula:** `P(C|D) ∝ P(C) * ∏ P(word_i | C) ^ presence(word_i, D) * P(¬word_i | C) ^ (1 - presence(word_i, D))`
    *   `C`: Class
    *   `D`: Document
    *   `word_i`:  i-th word in the vocabulary
    *   `presence(word_i, D)`: 1 if `word_i` is present in `D`, 0 otherwise.
    *   `¬word_i`: indicates absence of word_i.

### 1.5. Text Preprocessing

*   **Tokenization:** Splitting text into individual words (tokens).
*   **Stop Word Removal:** Removing common words (e.g., "the," "a," "is") that provide little discriminative information.
*   **Lowercasing:** Converting all text to lowercase to treat "The" and "the" as the same word.
*   **Stemming/Lemmatization:** Reducing words to their root form (e.g., "running" -> "run").  Stemming is simpler but can produce non-words; lemmatization uses vocabulary and morphological analysis.
*   **TF-IDF (Term Frequency-Inverse Document Frequency):** A weighting scheme that assigns higher weights to words that are frequent in a document but rare across the entire corpus.  Often used with Multinomial Naïve Bayes.
*   **CountVectorizer:** A scikit-learn tool to convert a collection of text documents to a matrix of token counts.

### 1.6. Smoothing (Laplace/Additive Smoothing)

*   **Purpose:** To avoid zero probabilities for words that are not seen in a particular class during training.
*   **Mechanism:** Adds a small value (alpha) to the count of each word for each class.
*   **Effect:** Prevents the classifier from assigning zero probability to documents containing unseen words.
*   **Formula:** `P(word | class) = (count(word, class) + alpha) / (count(all words in class, class) + alpha * |vocabulary|)`
    *   `alpha`: Smoothing parameter (typically 1 for Laplace smoothing).
    *   `|vocabulary|`: Size of the vocabulary.

### 1.7. Evaluation Metrics

*   **Accuracy:**  The proportion of correctly classified documents.
*   **Precision:** The proportion of documents classified as belonging to a class that actually belong to that class.
    *   `Precision = True Positives / (True Positives + False Positives)`
*   **Recall:** The proportion of documents belonging to a class that are correctly classified as belonging to that class.
    *   `Recall = True Positives / (True Positives + False Negatives)`
*   **F1-score:** The harmonic mean of precision and recall.
    *   `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`
*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the number of correct and incorrect predictions for each class.

## 2. Implementing Naïve Bayes with 20 Newsgroups Dataset

Here's a Python code example using scikit-learn to implement and compare Multinomial and Bernoulli Naïve Bayes.  This is a simplified example, and you'll want to experiment with different preprocessing steps and hyperparameter settings.

```python
from sklearn.datasets import fetch_20newsgroups
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.metrics import accuracy_score, classification_report
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Download necessary NLTK data (run this only once)
# nltk.download('stopwords')
# nltk.download('wordnet')

# 1. Load the 20 Newsgroups dataset
categories = ['alt.atheism', 'soc.religion.christian',
              'comp.graphics', 'sci.med']  # Reduced categories for faster execution
newsgroups_train = fetch_20newsgroups(subset='train', categories=categories, remove=('headers', 'footers', 'quotes'))
newsgroups_test = fetch_20newsgroups(subset='test', categories=categories, remove=('headers', 'footers', 'quotes'))

# 2. Preprocessing
stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()

def preprocess_text(text):
    text = text.lower()
    tokens = nltk.word_tokenize(text)
    tokens = [lemmatizer.lemmatize(token) for token in tokens if token.isalpha() and token not in stop_words]
    return " ".join(tokens)

train_data = [preprocess_text(doc) for doc in newsgroups_train.data]
test_data = [preprocess_text(doc) for doc in newsgroups_test.data]


# 3. Feature Extraction and Model Training (Multinomial NB)
tfidf_vectorizer = TfidfVectorizer()
X_train_tfidf = tfidf_vectorizer.fit_transform(train_data)
X_test_tfidf = tfidf_vectorizer.transform(test_data)

multinomial_nb = MultinomialNB()
multinomial_nb.fit(X_train_tfidf, newsgroups_train.target)
y_pred_multinomial = multinomial_nb.predict(X_test_tfidf)

# 4. Feature Extraction and Model Training (Bernoulli NB)
count_vectorizer = CountVectorizer(binary=True) # Important: binary=True for Bernoulli
X_train_bernoulli = count_vectorizer.fit_transform(train_data)
X_test_bernoulli = count_vectorizer.transform(test_data)

bernoulli_nb = BernoulliNB()
bernoulli_nb.fit(X_train_bernoulli, newsgroups_train.target)
y_pred_bernoulli = bernoulli_nb.predict(X_test_bernoulli)


# 5. Evaluation
print("Multinomial Naive Bayes:")
print("Accuracy:", accuracy_score(newsgroups_test.target, y_pred_multinomial))
print(classification_report(newsgroups_test.target, y_pred_multinomial, target_names=newsgroups_train.target_names))

print("\nBernoulli Naive Bayes:")
print("Accuracy:", accuracy_score(newsgroups_test.target, y_pred_bernoulli))
print(classification_report(newsgroups_test.target, y_pred_bernoulli, target_names=newsgroups_train.target_names))
```

**Explanation:**

1.  **Data Loading:** Loads the 20 Newsgroups dataset using `fetch_20newsgroups`. We use a subset of categories for demonstration.  The `remove` argument removes headers, footers, and quotes, which can improve performance.

2.  **Preprocessing:**
    *   Converts text to lowercase.
    *   Tokenizes the text into words.
    *   Removes stop words using `nltk.corpus.stopwords`.
    *   Lemmatizes words to their base form using `nltk.stem.WordNetLemmatizer`.
    *   Keeps only alphabetic tokens.
    *   Joins the tokens back into a string.

3.  **Multinomial NB:**
    *   Uses `TfidfVectorizer` to convert the preprocessed text into TF-IDF feature vectors.
    *   Creates a `MultinomialNB` object.
    *   Trains the model on the training data.
    *   Predicts the classes for the test data.

4.  **Bernoulli NB:**
    *   Uses `CountVectorizer` with `binary=True` to create binary feature vectors (presence/absence of words).  This is *crucial* for Bernoulli NB to work correctly.
    *   Creates a `BernoulliNB` object.
    *   Trains the model on the training data.
    *   Predicts the classes for the test data.

5.  **Evaluation:**
    *   Calculates and prints the accuracy of both models.
    *   Generates and prints a classification report (precision, recall, F1-score) for each model.

## 3. Comparing Multinomial and Bernoulli Naïve Bayes

| Feature          | Multinomial Naïve Bayes                                   | Bernoulli Naïve Bayes                                        |
| ---------------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| Feature Type     | Word counts, Term Frequencies                             | Binary (Presence/Absence)                                   |
| Data Suitability | Discrete data                                              | Boolean/Binary data                                          |
| Probability      | `P(word | class)`                                           | `P(word | class)` and `P(¬word | class)`                          |
| Vectorization    | `TfidfVectorizer` or `CountVectorizer`                    | `CountVectorizer(binary=True)`                             |
| Performance      | Often performs well with TF-IDF features in text          | Can be useful when the absence of a word is informative      |
| Complexity       | Simpler and often faster than Bernoulli NB                | Considers both presence and absence, potentially more complex |

**When to use which:**

*   **Multinomial Naïve Bayes:** Generally a good starting point for text classification tasks.  Works well with TF-IDF features.
*   **Bernoulli Naïve Bayes:** Might be considered when the absence of certain words is a strong indicator of a particular class. For example, the absence of certain technical terms in a medical document.

## 4. Practice Questions and Exercises

1.  **Explain the "naïve" assumption in Naïve Bayes classification. Why is it considered "naïve"?**
    *   *Answer:* The "naïve" assumption is that features are conditionally independent given the class label. This means the presence or absence of one feature doesn't affect the presence or absence of any other feature, assuming you know the class. It's "naïve" because features are rarely truly independent in real-world datasets.

2.  **What is the purpose of smoothing in Naïve Bayes? How does it work?**
    *   *Answer:* Smoothing prevents zero probabilities by adding a small constant (alpha) to the word counts.  This ensures that unseen words during training don't cause the entire probability of a class to become zero.

3.  **What are the key differences between Multinomial and Bernoulli Naïve Bayes?  Give an example scenario where you would prefer one over the other.**
    *   *Answer:* Multinomial NB uses word counts, Bernoulli NB uses binary presence/absence.  Multinomial NB is generally preferred for text with TF-IDF features. Bernoulli NB might be preferable when the absence of a word is significant.
    *   *Example:* Classifying spam vs. not spam: if the *absence* of keywords like "urgent," "free," and "discount" strongly indicates not spam, Bernoulli might perform well.

4.  **Modify the provided code to use stemming instead of lemmatization.  How does this affect performance?**
    *   *Answer:* Replace the lemmatizer with a stemmer (e.g., `PorterStemmer` from `nltk.stem`). You'll need to import it first (`from nltk.stem import PorterStemmer`). Stemming is usually faster but can result in non-words, potentially degrading performance slightly depending on the dataset.

5.  **Experiment with different values of the `alpha` parameter in `MultinomialNB` and `BernoulliNB`.  How does this affect the results?**
    *   *Answer:*  Varying `alpha` affects the degree of smoothing.  Higher values of `alpha` provide more smoothing, which can help prevent overfitting but might also reduce the model's ability to distinguish between classes.  Lower values (closer to zero) can lead to overfitting, especially with small datasets.

6.  **Why is it important to use `binary=True` in `CountVectorizer` when using Bernoulli Naïve Bayes?**
    *   *Answer:* Bernoulli Naïve Bayes is designed for binary features (0 or 1), representing the presence or absence of a term. Setting `binary=True` in `CountVectorizer` ensures that the output matrix contains only binary values, indicating whether each term is present in each document or not, regardless of how many times the term appears.

## 5. Important Points to Remember

*   The Naïve Bayes assumption is rarely true in real-world data, but the classifier often performs well.
*   Preprocessing is crucial for text classification. Experiment with different techniques.
*   Choose the appropriate Naïve Bayes variant based on the nature of the features.
*   Smoothing is essential to avoid zero probabilities.
*   Evaluate the model using appropriate metrics like accuracy, precision, recall, and F1-score.
*   The 20 Newsgroups dataset is a valuable resource for learning and experimenting with text classification.
*   Consider cross-validation for more robust evaluation.
*   TF-IDF often works well with Multinomial Naïve Bayes.
*   Pay attention to feature scaling and normalization, as they can affect the performance of some classifiers.
