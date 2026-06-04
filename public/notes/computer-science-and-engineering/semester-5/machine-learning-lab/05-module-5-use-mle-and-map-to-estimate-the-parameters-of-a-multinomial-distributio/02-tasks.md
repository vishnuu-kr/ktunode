---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 5: Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b94a"
status: "completed"
scrapedAt: "2026-05-20T16:47:12.322Z"
---
# MACHINE LEARNING LAB - Module 5: Multinomial Distribution Parameter Estimation (MLE & MAP) with 20 Newsgroups Dataset

**Topic:** Use MLE and MAP to estimate the parameters of a multinomial distribution on the 20 Newsgroups dataset. Explore the impact of different priors on the estimation.

**Learning Outcomes:**

*   Understand the multinomial distribution and its relevance to text data.
*   Apply Maximum Likelihood Estimation (MLE) to estimate the parameters of a multinomial distribution.
*   Apply Maximum a Posteriori (MAP) estimation to estimate the parameters of a multinomial distribution using different priors.
*   Implement MLE and MAP estimation on the 20 Newsgroups dataset.
*   Evaluate the impact of different priors on the parameter estimates and the resulting model performance.
*   Preprocess text data appropriately for use with multinomial models.
*   Explain the concepts of smoothing (e.g., Laplace smoothing) and their importance.

## 1. Introduction to Multinomial Distribution and its Relevance to Text Data

### 1.1 Key Concepts and Definitions

*   **Multinomial Distribution:** A generalization of the binomial distribution, where each trial can result in one of *k* possible outcomes, with probabilities *p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>k</sub>*, where Σ*p<sub>i</sub>* = 1. The multinomial distribution describes the probability of observing *n<sub>1</sub>* occurrences of outcome 1, *n<sub>2</sub>* occurrences of outcome 2, ..., *n<sub>k</sub>* occurrences of outcome *k* in *n* independent trials, where Σ*n<sub>i</sub>* = *n*.

    *   **Formula:**  P(N<sub>1</sub>=n<sub>1</sub>, ..., N<sub>k</sub>=n<sub>k</sub>) = (n! / (n<sub>1</sub>! * ... * n<sub>k</sub>!)) * (p<sub>1</sub><sup>n<sub>1</sub></sup> * ... * p<sub>k</sub><sup>n<sub>k</sub></sup>)
*   **Application to Text Data:** In the context of text, each word can be considered an outcome. We can model the distribution of words in a document using a multinomial distribution. Each document is considered a sample from a multinomial distribution.  The *k* outcomes represent the vocabulary (unique words), and *n<sub>i</sub>* is the count of the *i*-th word in the document. *p<sub>i</sub>* represents the probability of the *i*-th word appearing in the document (according to that specific multinomial distribution for the documents of some class).
*   **Vocabulary:** The set of all unique words in a dataset.
*   **Document:** A single text unit (e.g., a news article, an email).
*   **Corpus:** A collection of documents.
*   **Bag-of-Words (BoW):** A representation of text that ignores word order but retains the frequency of words in each document. The multinomial distribution works well with Bag of Words.

### 1.2 Why Multinomial Distribution for Text?

*   **Simplicity:** The multinomial distribution provides a relatively simple yet effective model for text data, capturing the frequency of words in documents.
*   **Interpretability:**  The parameters of the multinomial distribution (the probabilities *p<sub>i</sub>* for each word) are directly interpretable as the likelihood of a word occurring in a document.
*   **Foundation for More Complex Models:** The multinomial distribution forms the basis for more advanced text classification models like Naive Bayes classifiers.

## 2. Maximum Likelihood Estimation (MLE) for Multinomial Distribution

### 2.1 Key Concepts and Definitions

*   **Likelihood Function:**  The likelihood function, L(θ|data), represents the probability of observing the given data, assuming a specific set of parameters θ for the model.  In this case, θ represents the probabilities *p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>k</sub>* for each word in the vocabulary.

*   **MLE Principle:**  MLE aims to find the parameters θ that maximize the likelihood function.  In other words, it finds the parameters that make the observed data most probable.

### 2.2 MLE for Multinomial Distribution Parameters

*   **Formula for MLE Estimate:**  For a multinomial distribution, the MLE estimate for the probability of the *i*-th outcome (word) is:

    *   p<sub>i</sub><sup>MLE</sup> = n<sub>i</sub> / n

        where:
        *   *n<sub>i</sub>* is the number of times the *i*-th outcome (word) appears in the data (e.g., a collection of documents from a single class).
        *   *n* is the total number of trials (total number of words in the same documents).

*   **Derivation (Simplified):**  The MLE estimate is obtained by maximizing the log-likelihood function (easier to differentiate) with respect to each *p<sub>i</sub>*, subject to the constraint that Σ*p<sub>i</sub>* = 1.  This is typically done using Lagrange multipliers.

### 2.3 Implementation Example (Python)

```python
import numpy as np

def mle_multinomial(counts):
  """
  Estimates the parameters of a multinomial distribution using MLE.

  Args:
    counts: A NumPy array of word counts.

  Returns:
    A NumPy array of probabilities (parameter estimates).
  """
  total_count = np.sum(counts)
  probabilities = counts / total_count
  return probabilities

# Example usage:
word_counts = np.array([10, 5, 2, 8, 1])  # Counts of 5 different words
probabilities = mle_multinomial(word_counts)
print("MLE Probabilities:", probabilities) #Should add up to 1.0
```

## 3. Maximum a Posteriori (MAP) Estimation for Multinomial Distribution

### 3.1 Key Concepts and Definitions

*   **Prior Distribution:** A prior distribution, P(θ), represents our prior belief or knowledge about the parameters θ *before* observing any data. It expresses our initial assumptions about the parameter values.
*   **Posterior Distribution:** The posterior distribution, P(θ|data), represents our updated belief about the parameters θ *after* observing the data. It combines the information from the prior distribution and the likelihood function.
*   **Bayes' Theorem:**  The foundation for MAP estimation:

    *   P(θ|data) = [P(data|θ) * P(θ)] / P(data)
    *   Posterior = (Likelihood * Prior) / Evidence

*   **MAP Principle:** MAP aims to find the parameters θ that maximize the posterior distribution P(θ|data).  It finds the parameters that are most probable *given* the observed data and our prior beliefs.

### 3.2 MAP for Multinomial Distribution Parameters

*   **Dirichlet Prior:** A common prior distribution for the parameters of a multinomial distribution is the Dirichlet distribution. It's conjugate prior to the Multinomial, meaning the posterior distribution is also a Dirichlet distribution.

    *   **Dirichlet Distribution:** Defined by a parameter vector *α* = (*α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>k</sub>*), where *α<sub>i</sub>* > 0 for all *i*. The probability density function is:

        *   P(p<sub>1</sub>, ..., p<sub>k</sub>; α<sub>1</sub>, ..., α<sub>k</sub>) ∝ p<sub>1</sub><sup>α<sub>1</sub>-1</sup> * ... * p<sub>k</sub><sup>α<sub>k</sub>-1</sup>

*   **MAP Estimate with Dirichlet Prior:**  The MAP estimate for the probability of the *i*-th outcome (word) with a Dirichlet prior is:

    *   p<sub>i</sub><sup>MAP</sup> = (n<sub>i</sub> + α<sub>i</sub> - 1) / (n + Σ α<sub>j</sub> - k)

        where:
        *   *n<sub>i</sub>* is the number of times the *i*-th outcome (word) appears in the data.
        *   *n* is the total number of trials (total number of words).
        *   *α<sub>i</sub>* is the parameter of the Dirichlet prior corresponding to the *i*-th outcome (word).
        *   *k* is the number of categories (number of words in vocabulary).

*   **Laplace Smoothing (Add-One Smoothing):** A special case of MAP estimation with a Dirichlet prior where all *α<sub>i</sub>* = 1.  This adds 1 to the count of each word and *k* to the total count:

    *   p<sub>i</sub><sup>Laplace</sup> = (n<sub>i</sub> + 1) / (n + k)

### 3.3 Benefits of MAP Estimation

*   **Handles Zero Counts:**  MLE assigns a probability of 0 to words that don't appear in the training data. MAP, especially with a Dirichlet prior, avoids this issue by smoothing the probabilities and ensuring that all words have a non-zero probability.  This is crucial for generalization to new data.
*   **Incorporates Prior Knowledge:** MAP allows us to incorporate our prior beliefs about the word probabilities, which can be helpful when we have limited data or strong expectations.
*   **Regularization:** MAP can be seen as a form of regularization, preventing overfitting by shrinking the parameter estimates towards the prior values.

### 3.4 Implementation Example (Python)

```python
import numpy as np

def map_multinomial(counts, alpha):
  """
  Estimates the parameters of a multinomial distribution using MAP with a Dirichlet prior.

  Args:
    counts: A NumPy array of word counts.
    alpha: A NumPy array of Dirichlet prior parameters (same length as counts).

  Returns:
    A NumPy array of probabilities (parameter estimates).
  """
  n = np.sum(counts)
  k = len(counts)
  probabilities = (counts + alpha - 1) / (n + np.sum(alpha) - k)
  return probabilities

# Example Usage:
word_counts = np.array([10, 5, 2, 8, 0]) #Note the 0 count
alpha = np.array([2, 2, 2, 2, 2])  # Dirichlet prior parameters (all alpha_i = 2)
probabilities = map_multinomial(word_counts, alpha)
print("MAP Probabilities:", probabilities)
```

## 4. Implementing MLE and MAP on the 20 Newsgroups Dataset

### 4.1 20 Newsgroups Dataset

*   **Description:** A popular dataset for text classification and information retrieval. It contains approximately 20,000 newsgroup documents, partitioned (nearly) evenly across 20 different newsgroups.
*   **Structure:**  The dataset is organized into directories, one for each newsgroup.  Each file within a directory represents a single newsgroup post.

### 4.2 Preprocessing Steps

1.  **Data Loading:** Load the documents from the 20 Newsgroups dataset.  Libraries like `sklearn.datasets.fetch_20newsgroups` can be used.
2.  **Text Cleaning:**
    *   **Lowercasing:** Convert all text to lowercase.
    *   **Punctuation Removal:** Remove punctuation marks.
    *   **Stop Word Removal:** Remove common words (e.g., "the", "a", "is") that don't carry much information. Libraries like `nltk.corpus.stopwords` or `sklearn.feature_extraction.text.ENGLISH_STOP_WORDS` can be used.
    *   **Stemming/Lemmatization (Optional):** Reduce words to their root form (e.g., "running" to "run").
3.  **Tokenization:** Split the text into individual words (tokens).
4.  **Vocabulary Creation:** Create a vocabulary of unique words from the entire dataset.
5.  **Document Representation:** Represent each document as a vector of word counts (Bag-of-Words representation). Libraries like `sklearn.feature_extraction.text.CountVectorizer` can be used for this.
6.  **Term Frequency - Inverse Document Frequency (TF-IDF) (Optional):**  Instead of just using counts, consider using TF-IDF to weight words based on their importance within a document and across the entire corpus.

### 4.3 Implementation Steps

1.  **Split Data:** Divide the dataset into training and testing sets.
2.  **Train MLE/MAP Models:**
    *   For each newsgroup (class):
        *   Collect all documents belonging to that newsgroup from the *training* set.
        *   Calculate the word counts for the documents in that newsgroup.
        *   Estimate the parameters (word probabilities) of the multinomial distribution using either MLE or MAP (with different priors).
3.  **Classification (Inference):**
    *   For each document in the *testing* set:
        *   Preprocess the document.
        *   Calculate the probability of the document belonging to each newsgroup using the estimated multinomial parameters. This means calculating the likelihood of the document given the parameters estimated in step 2 for each class. P(doc | class_parameters).  Since we're working with probabilities, it is better to use the *log* probabilities.
        *   Assign the document to the newsgroup with the highest probability.  (For MLE, this is the same as Naive Bayes with no prior. With MAP and a Dirichlet prior, it's the same as Naive Bayes with Laplace/Lidstone smoothing).
4.  **Evaluation:**
    *   Calculate the accuracy of the classification model on the testing set.
    *   Evaluate other metrics like precision, recall, and F1-score.

### 4.4 Code Snippet (Conceptual - Requires sklearn setup)

```python
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
import numpy as np

# Load the 20 Newsgroups dataset
newsgroups = fetch_20newsgroups(subset='all', remove=('headers', 'footers', 'quotes'))

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(newsgroups.data, newsgroups.target, test_size=0.2, random_state=42)

# Create a CountVectorizer to convert text to a bag-of-words representation
vectorizer = CountVectorizer(stop_words='english', lowercase=True, max_df=0.95, min_df=2)  #Example parameters, adjust as needed.
X_train_counts = vectorizer.fit_transform(X_train)
X_test_counts = vectorizer.transform(X_test)


def train_multinomial_mle(X, y, num_classes):
    """
    Trains multinomial models for each class using MLE.

    Args:
        X: Sparse matrix of document word counts (training data).
        y: Array of class labels (training data).
        num_classes: Number of classes.

    Returns:
        A list of arrays, where each array contains the MLE probabilities for a class.
        A list containing the vocab to index mapping.
    """
    models = []
    vocab = vectorizer.vocabulary_
    for class_label in range(num_classes):
        # Get the indices of the documents that belong to the current class
        class_indices = np.where(y == class_label)[0]

        # Sum the word counts across all documents in the class
        class_counts = X[class_indices].sum(axis=0).A1  # Convert to 1D numpy array

        # Calculate the MLE probabilities
        probabilities = mle_multinomial(class_counts)
        models.append(probabilities)
    return models, vocab

def train_multinomial_map(X, y, num_classes, alpha):
    """
    Trains multinomial models for each class using MAP with a Dirichlet prior.

    Args:
        X: Sparse matrix of document word counts (training data).
        y: Array of class labels (training data).
        num_classes: Number of classes.
        alpha: A numpy array of Dirichlet prior parameters (same length as vocabulary).

    Returns:
        A list of arrays, where each array contains the MAP probabilities for a class.
        A list containing the vocab to index mapping.
    """
    models = []
    vocab = vectorizer.vocabulary_
    for class_label in range(num_classes):
        # Get the indices of the documents that belong to the current class
        class_indices = np.where(y == class_label)[0]

        # Sum the word counts across all documents in the class
        class_counts = X[class_indices].sum(axis=0).A1  # Convert to 1D numpy array

        # Calculate the MAP probabilities
        probabilities = map_multinomial(class_counts, alpha)
        models.append(probabilities)
    return models, vocab


def predict(X, models, vocab, num_classes):
  """
  Predicts the class labels for a set of documents using multinomial models.

  Args:
    X: Sparse matrix of document word counts (testing data).
    models: A list of arrays, where each array contains the MLE/MAP probabilities for a class.
    vocab: Vocabulary to index mapping from the count vectorizer.
    num_classes: Number of classes.

  Returns:
    A NumPy array of predicted class labels.
  """
  num_documents = X.shape[0]
  predictions = np.zeros(num_documents, dtype=int)

  for i in range(num_documents):
    # Calculate the log-likelihood of the document belonging to each class
    log_likelihoods = np.zeros(num_classes)
    for class_label in range(num_classes):
        log_likelihoods[class_label] = np.sum(np.log(models[class_label]) * X[i].A1)  # A1 converts to 1D numpy array

    # Predict the class with the highest log-likelihood
    predictions[i] = np.argmax(log_likelihoods)

  return predictions

# Train the MLE model
num_classes = len(newsgroups.target_names)
mle_models, vocab = train_multinomial_mle(X_train_counts, y_train, num_classes)

#Train the MAP model
alpha = np.ones(len(vocab)) # Laplacian smoothing - alpha_i = 1 for each word.
map_models, vocab = train_multinomial_map(X_train_counts, y_train, num_classes, alpha) #Alternatively, can use different priors per word, which is usually not needed.


# Make predictions on the test set
mle_predictions = predict(X_test_counts, mle_models, vocab, num_classes)
map_predictions = predict(X_test_counts, map_models, vocab, num_classes)


# Evaluate the performance of the model
from sklearn.metrics import accuracy_score, classification_report

mle_accuracy = accuracy_score(y_test, mle_predictions)
print(f"MLE Accuracy: {mle_accuracy}")

map_accuracy = accuracy_score(y_test, map_predictions)
print(f"MAP Accuracy: {map_accuracy}")

print("MLE Classification Report:\n", classification_report(y_test, mle_predictions, target_names=newsgroups.target_names))
print("MAP Classification Report:\n", classification_report(y_test, map_predictions, target_names=newsgroups.target_names))
```

## 5. Exploring the Impact of Different Priors on Estimation

### 5.1 Prior Selection

*   **Uniform Prior (Laplace Smoothing):**  All *α<sub>i</sub>* = 1.  Assumes all words are equally likely a priori.
*   **Informative Priors:**  Use prior knowledge about the words to set the *α<sub>i</sub>* values. For example, if you know that certain words are more likely to appear in certain newsgroups, you can assign higher *α<sub>i</sub>* values to those words for those newsgroups.  This is less common in basic applications.
*   **Larger *α* Values:**  Stronger prior belief. The estimated probabilities will be more strongly influenced by the prior and less by the data. This will "smooth" the probability distribution more heavily.
*   **Smaller *α* Values:**  Weaker prior belief. The estimated probabilities will be more strongly influenced by the data.

### 5.2 Impact on Parameter Estimates

*   **Smoothing Effect:**  Priors prevent zero probabilities, especially important for words not seen in the training data.
*   **Bias:**  Priors introduce bias towards the prior beliefs.  If the prior is inaccurate, the estimates can be worse than MLE.
*   **Regularization:** Priors can act as regularization, preventing overfitting to the training data, especially with small datasets.

### 5.3 Evaluation Metrics

*   **Accuracy:**  Overall classification accuracy.
*   **Precision:**  The proportion of correctly classified documents among all documents predicted to belong to a class.
*   **Recall:**  The proportion of correctly classified documents among all documents that actually belong to a class.
*   **F1-Score:**  The harmonic mean of precision and recall.

### 5.4 Experimentation

*   **Vary *α* values:** Experiment with different *α* values for the Dirichlet prior and observe the impact on the classification performance.
*   **Compare MLE and MAP:** Compare the performance of MLE and MAP with different priors.
*   **Analyze Misclassifications:** Analyze the documents that are misclassified by different models to understand the impact of the priors on the model's decision-making process.

## 6. Practice Questions and Exercises

1.  **Explain the difference between MLE and MAP estimation.**
    *   *Answer:* MLE finds the parameters that maximize the likelihood of the observed data. MAP finds the parameters that maximize the posterior probability, considering both the likelihood of the data and a prior belief about the parameters.
2.  **What is the purpose of Laplace smoothing? How does it relate to MAP estimation with a Dirichlet prior?**
    *   *Answer:* Laplace smoothing prevents zero probabilities by adding 1 to each word count. It's a special case of MAP estimation with a Dirichlet prior where all α<sub>i</sub> = 1.
3.  **How does the choice of the prior affect the parameter estimates in MAP estimation?**
    *   *Answer:* The prior introduces bias towards the prior belief. Larger α values indicate a stronger prior, causing the estimates to be more influenced by the prior and less by the data.
4.  **Implement MLE and MAP estimation on a smaller subset of the 20 Newsgroups dataset.  Compare the results with different Dirichlet priors (e.g., uniform prior, α = 0.1, α = 10).**
    *   *Answer:* (Requires coding. The code skeleton is given in Section 4.4. Experiment with different alpha values.)
5.  **What are the advantages and disadvantages of using a Dirichlet prior with large α values?**
    *   *Answer:* Advantages: Provides strong smoothing, avoids zero probabilities, can be helpful with very small datasets. Disadvantages: Can introduce significant bias if the prior is inaccurate, potentially leading to lower accuracy than MLE.

## 7. Important Points to Remember

*   **Data Preprocessing is Crucial:** The quality of text data significantly impacts the performance of multinomial models. Proper preprocessing steps are essential.
*   **Smoothing is Important:**  Always use smoothing techniques (e.g., Laplace smoothing) to avoid zero probabilities and improve generalization.
*   **Prior Selection Matters:** Choose priors that reflect your prior knowledge or use a uniform prior if you have no prior beliefs. Experiment with different priors to find the best performing one.
*   **Evaluate Carefully:** Use appropriate evaluation metrics to assess the performance of the models and compare the impact of different priors.
*   **Log Probabilities:**  When dealing with probabilities in real-world applications, it's often better to work with log probabilities to avoid underflow issues, as the product of many small probabilities can result in a number that's too small for the computer to represent accurately.
