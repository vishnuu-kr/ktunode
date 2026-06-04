---
title: "Evaluate and compare the performance of both models using metrics such as accuracy and F1-score."
subject: "MACHINE LEARNING LAB"
module: "Module 7: Implement a Naïve Bayes classifier to categorize text documents into topics using the 20 Newsgroups dataset. Compare the performance of Multinomial Naïve Bayes with Bernoulli Naïve Bayes."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b95b"
status: "completed"
scrapedAt: "2026-05-20T16:47:23.157Z"
---
# MACHINE LEARNING LAB - Module 7: Naïve Bayes Classifier for Text Categorization

## Topic: Evaluating and Comparing Multinomial and Bernoulli Naïve Bayes on the 20 Newsgroups Dataset

### Learning Outcomes:

*   Understand the 20 Newsgroups dataset and its characteristics.
*   Implement Multinomial Naïve Bayes classifier for text categorization.
*   Implement Bernoulli Naïve Bayes classifier for text categorization.
*   Preprocess text data for Naïve Bayes classifiers (e.g., tokenization, stop word removal, TF-IDF).
*   Evaluate the performance of both models using accuracy and F1-score.
*   Compare and contrast the performance of Multinomial and Bernoulli Naïve Bayes.
*   Identify the strengths and weaknesses of each classifier for text categorization.

### 1. Introduction to the 20 Newsgroups Dataset

*   **Definition:** The 20 Newsgroups dataset is a collection of approximately 20,000 newsgroup documents, partitioned (nearly) evenly across 20 different newsgroups. It is a popular dataset for text classification and information retrieval research.
*   **Characteristics:**
    *   **Structure:** Each document belongs to one of the 20 newsgroups, representing different topics.
    *   **Content:** The documents are primarily text, consisting of news articles and discussions.
    *   **Applications:** Used for text classification, topic modeling, and information retrieval.
    *   **Availability:** Freely available and widely used in machine learning research.

*   **Newsgroups (Examples):**
    *   `alt.atheism`
    *   `comp.graphics`
    *   `comp.os.ms-windows.misc`
    *   `comp.sys.ibm.pc.hardware`
    *   `comp.sys.mac.hardware`
    *   `comp.windows.x`
    *   `misc.forsale`
    *   `rec.autos`
    *   `rec.motorcycles`
    *   `rec.sport.baseball`
    *   `rec.sport.hockey`
    *   `sci.crypt`
    *   `sci.electronics`
    *   `sci.med`
    *   `sci.space`
    *   `soc.religion.christian`
    *   `talk.politics.guns`
    *   `talk.politics.mideast`
    *   `talk.politics.misc`
    *   `talk.religion.misc`

### 2. Naïve Bayes Classifiers: A Review

*   **Key Concept:** Naïve Bayes is a probabilistic classifier based on Bayes' theorem with strong (naïve) independence assumptions between the features.
*   **Bayes' Theorem:**  P(C|X) = [P(X|C) * P(C)] / P(X)
    *   P(C|X): Posterior probability of class C given features X.
    *   P(X|C): Likelihood of features X given class C.
    *   P(C): Prior probability of class C.
    *   P(X): Marginal probability of features X (evidence).

*   **Naïve Assumption:** Assumes that features are conditionally independent given the class.  This simplifies calculations but is often not true in reality (hence "Naïve").

### 3. Multinomial Naïve Bayes

*   **Application:** Commonly used for text classification, where features represent the frequency (count) of words in a document.
*   **Feature Representation:** Uses word counts or term frequencies (TF) to represent documents.
*   **Probability Estimation:** Estimates the probability of a word appearing in a document of a particular class.
*   **Mathematical Formulation:**
    *   P(w<sub>i</sub> | c) = (count(w<sub>i</sub>, c) + α) / (Σ count(w<sub>j</sub>, c) + α * |V|)
        *   `w<sub>i</sub>`: The i-th word.
        *   `c`:  The class.
        *   `count(w<sub>i</sub>, c)`: The number of times word `w<sub>i</sub>` appears in documents of class `c`.
        *   `α`: Add-k smoothing parameter (typically α = 1 for Laplace smoothing). Prevents zero probabilities when a word doesn't appear in a particular class during training.
        *   `V`: The vocabulary (set of all unique words).

*   **Advantages:**
    *   Effective for text data with varying word counts.
    *   Computationally efficient.
    *   Simple to implement.

*   **Disadvantages:**
    *   Assumes independence between words.
    *   Sensitive to irrelevant features.

### 4. Bernoulli Naïve Bayes

*   **Application:**  Also used for text classification, but focuses on the presence or absence of words rather than their frequencies.
*   **Feature Representation:** Uses binary features to represent whether a word is present (1) or absent (0) in a document.
*   **Probability Estimation:** Estimates the probability of a word being present or absent in a document of a particular class.
*   **Mathematical Formulation:**
    *   P(w<sub>i</sub> | c) = (number of documents in class `c` containing `w<sub>i</sub>` + α) / (number of documents in class `c` + 2 * α)
        *   `w<sub>i</sub>`: The i-th word.
        *   `c`: The class.
        *   `α`: Add-k smoothing parameter (typically α = 1 for Laplace smoothing).

*   **Advantages:**
    *   Can be useful when presence/absence is more important than frequency.
    *   Handles binary data well.

*   **Disadvantages:**
    *   Loses information about word frequency.
    *   May perform poorly with high-frequency words.

### 5. Text Preprocessing Techniques

*   **Tokenization:** Breaking down the text into individual words or tokens.
    *   Example: "This is a sentence."  ->  ["This", "is", "a", "sentence", "."]
*   **Stop Word Removal:** Removing common words (e.g., "the," "a," "is") that do not contribute significantly to the meaning of the text.
*   **Lowercasing:** Converting all text to lowercase to treat words like "The" and "the" as the same.
*   **Stemming/Lemmatization:** Reducing words to their root form.
    *   **Stemming:** A simple heuristic process that chops off the ends of words. (e.g., "running" -> "run")
    *   **Lemmatization:** A more sophisticated process that uses vocabulary and morphological analysis to return the dictionary form of a word (lemma). (e.g., "better" -> "good")
*   **TF-IDF (Term Frequency-Inverse Document Frequency):** A weighting scheme that assigns higher weights to words that are frequent in a document but rare in the overall corpus.

    *   **TF (Term Frequency):**  The number of times a term appears in a document.
    *   **IDF (Inverse Document Frequency):**  log(Total number of documents / Number of documents containing the term).  Helps to downweight common words.

### 6. Implementation Steps (Conceptual)

1.  **Load the 20 Newsgroups Dataset:** Use libraries like `sklearn.datasets.fetch_20newsgroups`.
2.  **Split the Data:** Divide the dataset into training and testing sets.
3.  **Preprocess the Text:** Apply tokenization, stop word removal, lowercasing, and optionally stemming/lemmatization.  TF-IDF vectorization is highly recommended.
4.  **Vectorize the Text:**
    *   **MultinomialNB:** Use `CountVectorizer` (to get raw counts) or `TfidfVectorizer` from scikit-learn to convert text data into a matrix of token counts or TF-IDF features.  `TfidfVectorizer` is generally preferred as it weights terms according to their importance.
    *   **BernoulliNB:**  Use `CountVectorizer` or `TfidfVectorizer` with the `binary=True` parameter to create binary features indicating presence or absence of terms.
5.  **Train the Models:**
    *   Instantiate a `MultinomialNB` object and fit it to the training data.
    *   Instantiate a `BernoulliNB` object and fit it to the training data.
6.  **Make Predictions:**  Use the trained models to predict the newsgroup category for the test set.
7.  **Evaluate the Performance:** Calculate accuracy and F1-score for both models.
8.  **Compare the Results:** Analyze the performance metrics to determine which model performs better.

### 7. Evaluation Metrics: Accuracy and F1-Score

*   **Accuracy:** The ratio of correctly classified instances to the total number of instances.

    *   Accuracy = (True Positives + True Negatives) / (Total Number of Instances)
*   **F1-Score:** The harmonic mean of precision and recall.

    *   **Precision:** The ratio of correctly predicted positive instances to the total number of instances predicted as positive.  (True Positives / (True Positives + False Positives))
    *   **Recall:** The ratio of correctly predicted positive instances to the total number of actual positive instances. (True Positives / (True Positives + False Negatives))
    *   **F1-Score = 2 * (Precision * Recall) / (Precision + Recall)**

*   **Why use F1-score?** F1-score is useful when dealing with imbalanced datasets, where one class has significantly more instances than the others.  Accuracy can be misleading in such cases.

### 8. Comparing Multinomial and Bernoulli Naïve Bayes

| Feature        | Multinomial Naïve Bayes                                 | Bernoulli Naïve Bayes                                   |
|----------------|----------------------------------------------------------|-----------------------------------------------------------|
| Feature Type  | Word counts or TF-IDF values                              | Binary (presence/absence of words)                       |
| Data            | Text data with varying word frequencies                    | Text data where presence/absence is important             |
| Performance   | Generally performs better when word frequency matters      | May perform better with short texts or binary features      |
| Sensitivity   | Sensitive to word frequency                               | Less sensitive to word frequency                          |
| Use Case        | Document classification, spam filtering                     | Sentiment analysis, feature selection                   |

*   **When to use MultinomialNB:** When word frequency is a strong indicator of the class.  TF-IDF vectorization often improves performance.
*   **When to use BernoulliNB:** When the presence or absence of words is more important than their frequency.  Consider using when dealing with short documents.

### 9. Example Python Code Snippet (Illustrative)

```python
from sklearn.datasets import fetch_20newsgroups
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.metrics import accuracy_score, f1_score

# Load the dataset
newsgroups = fetch_20newsgroups(subset='all', remove=('headers', 'footers', 'quotes'))

# Split the data
X_train, X_test, y_train, y_test = train_test_split(newsgroups.data, newsgroups.target, test_size=0.3, random_state=42)

# Vectorize the text data using TF-IDF for MultinomialNB
tfidf_vectorizer = TfidfVectorizer()
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_test_tfidf = tfidf_vectorizer.transform(X_test)

# Train Multinomial Naïve Bayes
mnb = MultinomialNB()
mnb.fit(X_train_tfidf, y_train)
y_pred_mnb = mnb.predict(X_test_tfidf)

# Vectorize the text data (binary) for BernoulliNB
binary_vectorizer = TfidfVectorizer(binary=True) # Key difference for BernoulliNB
X_train_binary = binary_vectorizer.fit_transform(X_train)
X_test_binary = binary_vectorizer.transform(X_test)

# Train Bernoulli Naïve Bayes
bnb = BernoulliNB()
bnb.fit(X_train_binary, y_train)
y_pred_bnb = bnb.predict(X_test_binary)


# Evaluate performance
print("MultinomialNB Accuracy:", accuracy_score(y_test, y_pred_mnb))
print("MultinomialNB F1-Score:", f1_score(y_test, y_pred_mnb, average='weighted'))

print("BernoulliNB Accuracy:", accuracy_score(y_test, y_pred_bnb))
print("BernoulliNB F1-Score:", f1_score(y_test, y_pred_bnb, average='weighted'))
```

**Explanation:**

*   The code loads the 20 Newsgroups dataset.
*   It splits the data into training and testing sets.
*   `TfidfVectorizer` is used to convert the text data into TF-IDF features (for MultinomialNB) and binary features (for BernoulliNB). The `binary=True` parameter is crucial for BernoulliNB.
*   `MultinomialNB` and `BernoulliNB` models are trained on the respective vectorized data.
*   Predictions are made on the test set.
*   Accuracy and F1-score are calculated to evaluate the performance of both models.  `average='weighted'` is used in `f1_score` to account for class imbalance in the dataset.

### 10. Practice Questions/Exercises

1.  **Question:** What is the "naïve" assumption in the Naïve Bayes classifier, and why is it important?
    *   **Answer:** The "naïve" assumption is that features are conditionally independent given the class. This assumption simplifies the calculations required for classification.  While often unrealistic, it allows for efficient computation, especially with high-dimensional data like text.

2.  **Question:**  Why is TF-IDF vectorization often used before training a Multinomial Naïve Bayes classifier on text data?
    *   **Answer:** TF-IDF helps to weigh words according to their importance in the document and the corpus. Common words are downweighted, and words that are frequent in a document but rare in the corpus are given higher weights. This can improve the performance of the classifier by focusing on the most informative features.

3.  **Question:** In what scenarios might Bernoulli Naïve Bayes be preferred over Multinomial Naïve Bayes for text classification?
    *   **Answer:** Bernoulli Naïve Bayes might be preferred when the presence or absence of words is more important than their frequency, such as in short documents or when dealing with binary features.  Another good use case is when only keywords are of interest.

4.  **Question:** Explain the purpose of add-k smoothing (Laplace smoothing) in Naïve Bayes classifiers.
    *   **Answer:** Add-k smoothing (Laplace smoothing) is used to prevent zero probabilities when a word does not appear in a particular class during training.  It adds a small value (k) to the numerator and a corresponding adjustment to the denominator in the probability estimation formula.  This avoids multiplying by zero when calculating the posterior probability, which can lead to incorrect classifications.

5.  **Question:**  How would you handle class imbalance in the 20 Newsgroups dataset when evaluating the performance of Naïve Bayes classifiers?
    *   **Answer:**  To handle class imbalance, you can use the following techniques:
        *   **Weighted Metrics:**  Use metrics like the F1-score with a weighted average, which accounts for the class imbalance.  (e.g., `f1_score(y_test, y_pred, average='weighted')`)
        *   **Resampling Techniques:**  Oversample the minority classes or undersample the majority classes to create a more balanced dataset.  This can be done before training the classifier.
        *   **Cost-Sensitive Learning:**  Assign higher misclassification costs to the minority classes during training.  Some libraries offer built-in support for cost-sensitive learning.

### 11. Important Points to Remember

*   **Preprocessing is Crucial:** The performance of Naïve Bayes classifiers heavily depends on the quality of text preprocessing. Experiment with different techniques to find the optimal configuration.
*   **Choice of Vectorization:**  `TfidfVectorizer` is generally a good starting point. Consider `CountVectorizer` if you specifically want to use raw counts. Remember to set `binary=True` for BernoulliNB.
*   **Evaluate with Appropriate Metrics:** Use accuracy and F1-score (with weighted averaging) to evaluate the performance of the models, especially when dealing with potentially imbalanced datasets.
*   **Understand the Assumptions:** Be aware of the independence assumptions made by Naïve Bayes and their potential impact on performance.
*   **Experiment with Hyperparameters:**  Tune the hyperparameters of the vectorizer (e.g., `ngram_range`, `max_df`, `min_df`) and the Naïve Bayes classifier (e.g., `alpha`) to optimize performance.
