---
title: "query likelihood model"
subject: "DATA ANALYTICS"
module: "Module 4: Text Processing :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b735"
status: "completed"
scrapedAt: "2026-05-20T16:44:17.247Z"
---
# DATA ANALYTICS - MODULE 4: TEXT PROCESSING - TOPIC: QUERY LIKELIHOOD MODEL

## Introduction

This module explores text processing techniques in data analytics, focusing on the Query Likelihood Model (QLM). QLM is a powerful probabilistic approach to information retrieval that estimates the probability of a query being generated from a given document. This allows us to rank documents based on their likelihood of relevance to the user's query.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the fundamental concepts of the Query Likelihood Model.
*   Calculate query likelihood scores for documents.
*   Apply smoothing techniques to improve the robustness of the QLM.
*   Explain the advantages and limitations of the Query Likelihood Model.
*   Compare the QLM with other information retrieval models like the Boolean model and vector space model.
*   Implement the Query Likelihood Model in a programming environment.

## 1. Fundamental Concepts of the Query Likelihood Model

### 1.1. Definition:

The Query Likelihood Model (QLM) is a probabilistic information retrieval model that ranks documents based on the probability of the query being generated from the document.  In essence, it treats document retrieval as a generative process:  We assume each document has its own language model, and we ask how likely each document's language model is to generate the query.  The higher the likelihood, the more relevant the document.

### 1.2. Core Idea:

*   Each document is modeled as a language model, representing the probability distribution of words within that document.
*   The probability of a query `q` given a document `d`, denoted as `P(q|d)`, is calculated.
*   Documents are ranked in descending order of `P(q|d)`.  The higher the probability, the more relevant the document is considered to be.

### 1.3. Formula:

The basic formula for query likelihood is:

`P(q|d) = P(w1, w2, ..., wn | d) = P(w1|d) * P(w2|d) * ... * P(wn|d)`

Where:

*   `q` is the query consisting of words `w1, w2, ..., wn`.
*   `d` is the document.
*   `P(wi|d)` is the probability of word `wi` appearing in document `d`.

**Assumptions:**

*   **Term Independence:**  The QLM typically assumes that the terms in the query are independent of each other given the document. This is a simplifying assumption that allows us to multiply probabilities.  While unrealistic, it significantly simplifies the calculation.
*   **Bag-of-Words:** The order of the words in the query and the document is ignored. Only the frequency of the terms matters.

### 1.4. Calculating Word Probabilities:

The basic approach to calculating `P(wi|d)` is using Maximum Likelihood Estimation (MLE):

`P(wi|d) = count(wi, d) / length(d)`

Where:

*   `count(wi, d)` is the number of times word `wi` appears in document `d`.
*   `length(d)` is the total number of words in document `d`.

**Example:**

Consider a document `d`: "the cat sat on the mat".

*   `length(d) = 6`
*   `count("the", d) = 2`
*   `P("the"|d) = 2/6 = 1/3`
*   `count("cat", d) = 1`
*   `P("cat"|d) = 1/6`

## 2. Calculating Query Likelihood Scores for Documents

### 2.1. Example:

Let's say we have two documents:

*   Document 1 (d1): "the cat sat on the mat"
*   Document 2 (d2): "a dog is a good pet"

And our query `q` is: "cat mat"

**Step 1: Calculate word probabilities for each document.**

From the previous example:

*   `P("cat"|d1) = 1/6`
*   `P("mat"|d1) = 1/6`

For Document 2:

*   `length(d2) = 6`
*   `count("cat", d2) = 0`
*   `P("cat"|d2) = 0/6 = 0`
*   `count("mat", d2) = 0`
*   `P("mat"|d2) = 0/6 = 0`

**Step 2: Calculate query likelihood for each document.**

*   `P(q|d1) = P("cat"|d1) * P("mat"|d1) = (1/6) * (1/6) = 1/36 ≈ 0.0278`
*   `P(q|d2) = P("cat"|d2) * P("mat"|d2) = 0 * 0 = 0`

**Step 3: Rank documents.**

Document 1 (d1) has a higher query likelihood score (0.0278) than Document 2 (d2) (0). Therefore, Document 1 is ranked higher and considered more relevant to the query "cat mat".

### 2.2. The Zero-Probability Problem:

The naive QLM with MLE can suffer from the "zero-probability problem." If a word in the query does not appear in the document, the entire query likelihood becomes zero. This is undesirable as it fails to distinguish between documents that might be relevant but simply lack a specific query term. In our example, `d2` gets a score of 0, even though it's a valid document.  This highlights the need for smoothing.

## 3. Smoothing Techniques

Smoothing techniques are used to address the zero-probability problem and improve the robustness of the QLM. They assign a small non-zero probability to unseen words. Common smoothing techniques include:

### 3.1. Laplace Smoothing (Add-One Smoothing):

Adds 1 to the count of each word and the vocabulary size to the document length.

`P(wi|d) = (count(wi, d) + 1) / (length(d) + |V|)`

Where:

*   `|V|` is the vocabulary size (the number of unique words in the entire corpus).

**Example (Continuing with our previous documents and query, assuming |V| = 10):**

*   `P("cat"|d1) = (1 + 1) / (6 + 10) = 2/16 = 1/8`
*   `P("mat"|d1) = (1 + 1) / (6 + 10) = 2/16 = 1/8`
*   `P(q|d1) = (1/8) * (1/8) = 1/64 ≈ 0.0156`

*   `P("cat"|d2) = (0 + 1) / (6 + 10) = 1/16`
*   `P("mat"|d2) = (0 + 1) / (6 + 10) = 1/16`
*   `P(q|d2) = (1/16) * (1/16) = 1/256 ≈ 0.0039`

Using Laplace smoothing, `d2` now has a non-zero score and can be compared more meaningfully with `d1`.  `d1` is still ranked higher.

### 3.2. Lidstone Smoothing (Add-k Smoothing):

A generalization of Laplace smoothing where `k` is added to the count of each word.

`P(wi|d) = (count(wi, d) + k) / (length(d) + k * |V|)`

*  `k` is typically a small value (e.g., 0.1, 0.5).  The choice of `k` can significantly impact performance.

### 3.3. Jelinek-Mercer Smoothing (Linear Interpolation):

Combines the document language model with a collection language model.  This is often a preferred method.

`P(wi|d) = λ * P_MLE(wi|d) + (1 - λ) * P(wi|C)`

Where:

*   `λ` is a smoothing parameter between 0 and 1.  It controls the weight given to the document language model versus the collection language model.
*   `P_MLE(wi|d)` is the maximum likelihood estimate of `wi` in document `d` (as defined earlier).
*   `P(wi|C)` is the probability of `wi` in the entire collection (corpus):  `count(wi, C) / length(C)` where `C` represents the entire collection of documents.
*  `count(wi, C)` is the number of times the word `wi` appears in the entire collection.
*  `length(C)` is the total number of words in the entire collection.

**Example (Continuing with our example, assuming λ = 0.5, length(C) = 1000, count("cat", C) = 5, count("mat", C) = 2):**

*   `P("cat"|C) = 5/1000 = 0.005`
*   `P("mat"|C) = 2/1000 = 0.002`

For Document 1:

*   `P("cat"|d1) = (0.5 * (1/6)) + (0.5 * 0.005) ≈ 0.0858`
*   `P("mat"|d1) = (0.5 * (1/6)) + (0.5 * 0.002) ≈ 0.0842`
*   `P(q|d1) = 0.0858 * 0.0842 ≈ 0.0072`

For Document 2:

*   `P("cat"|d2) = (0.5 * 0) + (0.5 * 0.005) = 0.0025`
*   `P("mat"|d2) = (0.5 * 0) + (0.5 * 0.002) = 0.001`
*   `P(q|d2) = 0.0025 * 0.001 = 0.0000025`

With Jelinek-Mercer smoothing, Document 1 still ranks higher.  The collection statistics help provide a baseline probability even when a term is unseen in a specific document.

### 3.4. Dirichlet Smoothing:

Another popular smoothing technique that also interpolates between the document language model and the collection language model, but it uses a different weighting scheme based on the length of the document.

`P(wi|d) = (count(wi, d) + μ * P(wi|C)) / (length(d) + μ)`

Where:

*   `μ` is a smoothing parameter (often set to the average document length in the corpus).
*   `P(wi|C)` is the probability of `wi` in the entire collection (as defined earlier).

## 4. Advantages and Limitations of the Query Likelihood Model

### 4.1. Advantages:

*   **Probabilistic Framework:**  Provides a principled probabilistic framework for ranking documents.
*   **Smoothing Techniques:**  Incorporates smoothing techniques to address the zero-probability problem and improve robustness.
*   **Flexibility:**  Easily adaptable to different types of data and applications.
*   **Interpretability:**  The query likelihood score provides a measure of how likely a document is to have generated the query.

### 4.2. Limitations:

*   **Term Independence Assumption:**  The assumption of term independence can be unrealistic, especially for longer queries.
*   **Bag-of-Words Model:**  The bag-of-words approach ignores word order and context, which can affect retrieval performance.
*   **Computational Cost:**  Calculating query likelihood scores for a large corpus can be computationally expensive, particularly with complex smoothing techniques.
*   **Parameter Tuning:**  Smoothing parameters (e.g., λ, μ, k) need to be tuned carefully to optimize performance.

## 5. Comparison with Other Information Retrieval Models

### 5.1. Boolean Model:

*   **QLM:** Ranks documents based on probabilities. Allows for partial matches and relevance ranking.
*   **Boolean Model:** Retrieves documents based on boolean logic (AND, OR, NOT).  Only exact matches are returned, no ranking.

### 5.2. Vector Space Model:

*   **QLM:**  Probabilistic model based on language models and probabilities.
*   **Vector Space Model:**  Represents documents and queries as vectors in a high-dimensional space.  Ranks documents based on similarity measures (e.g., cosine similarity).  Doesn't explicitly model probabilities.

**Key Differences:**

| Feature             | QLM                        | Boolean Model                | Vector Space Model        |
| ------------------- | -------------------------- | ------------------------------ | -------------------------- |
| Ranking             | Probabilistic Ranking      | No Ranking (Exact Match)        | Similarity-Based Ranking  |
| Model Type          | Probabilistic              | Set-Theoretic                  | Algebraic                |
| Partial Matches       | Supported                  | Not Supported                    | Supported                  |
| Term Weighting      | Implicit via Probabilities | Implicit via Boolean Operators | Explicit (e.g., TF-IDF)   |
| Term Independence   | Assumed (often)            | Assumed                         | Not Explicitly Assumed      |

## 6. Implementation

The QLM can be implemented in various programming languages like Python using libraries such as NLTK or scikit-learn.

**Example (Python with NLTK - Conceptual, requires more in-depth code for full execution):**

```python
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import math

# Example Documents
documents = {
    "d1": "the cat sat on the mat",
    "d2": "a dog is a good pet",
    "d3": "the cat likes to play with yarn"
}

# Preprocessing (Tokenization, Lowercasing, Stop Word Removal)
stop_words = set(stopwords.words('english'))

def preprocess(text):
    tokens = word_tokenize(text.lower())
    tokens = [w for w in tokens if not w in stop_words]
    return tokens

preprocessed_documents = {doc_id: preprocess(text) for doc_id, text in documents.items()}

# Create Vocabulary
vocabulary = set()
for doc_tokens in preprocessed_documents.values():
    vocabulary.update(doc_tokens)
vocabulary_size = len(vocabulary)

# Collection Statistics
all_tokens = []
for doc_tokens in preprocessed_documents.values():
  all_tokens.extend(doc_tokens)
collection_length = len(all_tokens)

def collection_prob(term):
  return all_tokens.count(term) / collection_length

# Query Likelihood with Jelinek-Mercer Smoothing
def query_likelihood(query, document, lambda_val=0.5):
    query_tokens = preprocess(query)
    doc_tokens = preprocessed_documents[document]
    doc_length = len(doc_tokens)

    probability = 1.0
    for term in query_tokens:
        # MLE estimate in the document
        doc_term_count = doc_tokens.count(term)
        doc_term_prob = doc_term_count / doc_length if doc_length > 0 else 0

        # Jelinek-Mercer Smoothing
        probability *= (lambda_val * doc_term_prob) + ((1 - lambda_val) * collection_prob(term))

    return probability

# Example Usage
query = "cat play"
for doc_id in documents:
    score = query_likelihood(query, doc_id)
    print(f"P({query}|{doc_id}) = {score}")

# Ranking (would sort the results here)

```

**Explanation:**

1.  **Preprocessing:** Cleans the text by tokenizing, lowercasing, and removing stop words.
2.  **Vocabulary Creation:** Identifies the unique words in the collection.
3.  **Collection Statistics**: Calculates statistics about the entire corpus.
4.  **`query_likelihood()` function:**
    *   Takes a query, document ID, and smoothing parameter as input.
    *   Calculates the probability of each term in the query appearing in the document, using Jelinek-Mercer smoothing.
    *   Multiplies the probabilities to get the overall query likelihood score.
5.  **Example Usage:** Shows how to calculate query likelihood scores for each document and rank them.

**Note:** This is a simplified example.  A full implementation would require handling edge cases, more robust preprocessing, and potentially using libraries for efficiency. It would also require proper indexing of the documents.

## 7. Practice Questions/Exercises

1.  **Question:** Explain the purpose of smoothing in the Query Likelihood Model. Why is it necessary?

    **Answer:** Smoothing addresses the zero-probability problem, where a word in the query does not appear in the document, resulting in a zero likelihood score. It's necessary to provide more realistic ranking and prevent relevant documents from being unfairly penalized.

2.  **Question:**  Consider the following document: "the quick brown fox jumps over the lazy dog".  Calculate `P("fox"|d)` using Maximum Likelihood Estimation.

    **Answer:**  `length(d) = 9`, `count("fox", d) = 1`, so `P("fox"|d) = 1/9`.

3.  **Question:**  Compare and contrast Laplace smoothing and Jelinek-Mercer smoothing. What are the key differences?

    **Answer:**  Laplace smoothing adds a constant value to all word counts, regardless of the corpus. Jelinek-Mercer smoothing interpolates between the document language model and the collection language model, providing a more nuanced smoothing approach that takes into account the global distribution of words. Jelinek-Mercer typically performs better.

4.  **Question:**  Explain the assumption of term independence in the QLM. How does this assumption affect the model's performance?

    **Answer:**  The QLM assumes that the terms in the query are independent of each other given the document. This simplifies the probability calculation, but it can negatively affect performance because it ignores the relationships between words and their context.

5. **Question:**  Given a query "red shoes", document "red and blue shoes" and a collection of documents containing 1000 words and the word "red" occurring 50 times, and "shoes" occurring 20 times, calculate the query likelihood using Jelinek-Mercer smoothing with λ = 0.6.

    **Answer:**

    *   Collection Statistics: `P("red"|C) = 50/1000 = 0.05`, `P("shoes"|C) = 20/1000 = 0.02`
    *   Document: `d = "red and blue shoes"`, `length(d) = 4`
    *   MLE: `P("red"|d) = 1/4 = 0.25`, `P("shoes"|d) = 1/4 = 0.25`
    *   Jelinek-Mercer:
        *   `P("red"|d) = (0.6 * 0.25) + (0.4 * 0.05) = 0.15 + 0.02 = 0.17`
        *   `P("shoes"|d) = (0.6 * 0.25) + (0.4 * 0.02) = 0.15 + 0.008 = 0.158`
    *   Query Likelihood: `P("red shoes"|d) = 0.17 * 0.158 ≈ 0.0269`

## 8. Important Points to Remember

*   The Query Likelihood Model is a probabilistic information retrieval model.
*   Smoothing techniques are crucial to address the zero-probability problem.
*   The term independence assumption is a simplifying assumption that can affect performance.
*   Different smoothing techniques have their own advantages and disadvantages.
*   The QLM can be implemented in various programming languages.
*   Experiment with different smoothing parameters to optimize retrieval performance.

This module provides a solid foundation in the Query Likelihood Model. Further exploration of advanced smoothing techniques, document indexing strategies, and evaluation metrics will enhance your understanding and practical skills in this area. Remember to practice implementing the QLM to solidify your learning.
