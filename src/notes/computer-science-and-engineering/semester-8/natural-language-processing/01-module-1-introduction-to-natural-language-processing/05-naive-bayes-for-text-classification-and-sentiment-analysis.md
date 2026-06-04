---
title: "Naive Bayes for Text Classification, and Sentiment Analysis"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 1: Introduction to Natural Language Processing "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9dd"
status: "completed"
scrapedAt: "2026-05-20T17:25:26.999Z"
---
# Natural Language Processing (NLP)

## Module 1: Introduction to Natural Language Processing

### Topic: Naive Bayes for Text Classification and Sentiment Analysis

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the fundamental principles of Naive Bayes algorithms.
*   Explain how Naive Bayes is applied to text classification.
*   Describe the process of sentiment analysis using Naive Bayes.
*   Identify the assumptions and limitations of the Naive Bayes approach.
*   Apply Naive Bayes for simple text classification and sentiment analysis tasks.

---

### 1. Introduction to Text Classification

**Text Classification** is the task of assigning predefined categories or labels to a given text document. It's a core task in NLP with applications in:

*   **Spam Detection:** Classifying emails as spam or not spam.
*   **Sentiment Analysis:** Determining the emotional tone of text (positive, negative, neutral).
*   **Topic Labeling:** Assigning topics (e.g., sports, politics, technology) to articles.
*   **Language Identification:** Identifying the language of a text.
*   **Authorship Attribution:** Determining the author of a text.

---

### 2. Naive Bayes Algorithm

**Naive Bayes** is a probabilistic classification algorithm based on **Bayes' Theorem** with a "naive" assumption of independence between features. Despite its simplicity, it often performs surprisingly well in practice, especially for text classification.

#### 2.1 Bayes' Theorem

Bayes' Theorem describes the probability of an event, based on prior knowledge of conditions that might be related to the event.

Mathematically, it's represented as:

$P(A|B) = \frac{P(B|A) * P(A)}{P(B)}$

Where:

*   $P(A|B)$: **Posterior Probability** - The probability of hypothesis A being true, given the evidence B.
*   $P(B|A)$: **Likelihood** - The probability of observing evidence B, given that hypothesis A is true.
*   $P(A)$: **Prior Probability** - The probability of hypothesis A being true, before observing any evidence.
*   $P(B)$: **Marginal Probability of Evidence** - The probability of observing evidence B.

#### 2.2 The "Naive" Assumption

The core of the Naive Bayes classifier is the assumption that all features are **conditionally independent** given the class label.

For text classification, this means that the presence of a particular word in a document is independent of the presence of other words, given the document's class.

If we have a set of features $F = \{f_1, f_2, ..., f_n\}$ and a class label $C$, the Naive Bayes classifier assumes:

$P(F|C) = P(f_1|C) * P(f_2|C) * ... * P(f_n|C)$

This assumption significantly simplifies the calculation of the joint probability, making it computationally efficient.

#### 2.3 Applying Naive Bayes to Text Classification

In text classification, our "features" are typically the **words** (or n-grams) present in a document. The "class label" is the category we want to assign to the document.

**Steps:**

1.  **Data Preparation (Corpus):**
    *   Collect a dataset of documents with pre-assigned labels (training data).
    *   Example: A collection of emails labeled as "spam" or "not spam."

2.  **Text Preprocessing:**
    *   **Tokenization:** Breaking down text into individual words or tokens.
    *   **Lowercasing:** Converting all text to lowercase.
    *   **Punctuation Removal:** Removing punctuation marks.
    *   **Stop Word Removal:** Eliminating common words (e.g., "the," "a," "is") that don't carry much meaning.
    *   **Stemming/Lemmatization (Optional but Recommended):** Reducing words to their root form (e.g., "running," "ran" -> "run").

3.  **Feature Extraction (Bag-of-Words):**
    *   The most common approach is the **Bag-of-Words (BoW)** model.
    *   It represents each document as a vector where each element corresponds to the frequency (or presence/absence) of a word from a predefined vocabulary.
    *   **Vocabulary:** The set of all unique words found in the training corpus.

    **Example:**
    *   Document 1: "This is a great movie."
    *   Document 2: "This movie is terrible."
    *   Vocabulary: {"this", "is", "a", "great", "movie", "terrible"}

    *   Document 1 BoW vector (frequency): [1, 1, 1, 1, 1, 0]
    *   Document 2 BoW vector (frequency): [1, 1, 0, 0, 1, 1]

4.  **Training the Naive Bayes Model:**
    *   **Calculate Prior Probabilities ($P(C)$):** The probability of each class occurring in the training data.
        $P(C) = \frac{\text{Number of documents in class C}}{\text{Total number of documents}}$
    *   **Calculate Likelihoods ($P(word|C)$):** The probability of a specific word appearing in a document given its class.
        *   **Multinomial Naive Bayes:** Assumes features are generated from a multinomial distribution. Counts word occurrences.
            $P(word|C) = \frac{\text{Count of 'word' in documents of class C} + \alpha}{\text{Total count of all words in documents of class C} + \alpha * |V|}$
            *   $\alpha$: Laplace smoothing (or additive smoothing) parameter to handle words not seen in a particular class. Prevents zero probabilities.
            *   $|V|$: Size of the vocabulary.
        *   **Bernoulli Naive Bayes:** Assumes features are binary (presence or absence of a word).
            $P(word|C) = \frac{\text{Number of documents in class C containing 'word'} + \alpha}{\text{Total number of documents in class C} + 2\alpha}$

5.  **Classification (Prediction):**
    *   For a new, unseen document, we want to predict its class $C_{best}$.
    *   We calculate the posterior probability for each class:
        $P(C | Document) \propto P(C) * P(Document | C)$
    *   Using the naive assumption, $P(Document | C)$ is the product of the likelihoods of each word in the document:
        $P(Document | C) = \prod_{word \in Document} P(word|C)$
    *   To avoid underflow from multiplying many small probabilities, we often work with **log probabilities**:
        $\log P(Document | C) = \sum_{word \in Document} \log P(word|C)$
    *   The class with the highest posterior probability (or log posterior probability) is assigned to the document.

    $C_{best} = \arg\max_{C} P(C) * \prod_{word \in Document} P(word|C)$

---

### 3. Naive Bayes for Sentiment Analysis

**Sentiment Analysis** is a specific application of text classification focused on identifying and extracting subjective information from text, particularly the opinions and emotions expressed.

*   **Objective:** To determine the sentiment of a piece of text, typically categorized as:
    *   **Positive:** Expresses favorable emotions or opinions.
    *   **Negative:** Expresses unfavorable emotions or opinions.
    *   **Neutral:** Expresses neither positive nor negative sentiment.

#### 3.1 Applying Naive Bayes to Sentiment Analysis

The process is very similar to general text classification, but the labels and the training data are tailored for sentiment.

1.  **Data Preparation:**
    *   Collect a corpus of text documents (e.g., movie reviews, product reviews, tweets) labeled with their sentiment (positive, negative, neutral).
    *   Example Training Data:
        *   "I loved this movie! The acting was superb." -> **Positive**
        *   "The plot was predictable and the ending was disappointing." -> **Negative**
        *   "The film is scheduled to be released next month." -> **Neutral**

2.  **Text Preprocessing:** Apply the same preprocessing steps (tokenization, lowercasing, etc.) as before.

3.  **Feature Extraction:** Use the Bag-of-Words model. The features are the words in the reviews.

4.  **Training:**
    *   Calculate prior probabilities for each sentiment class (e.g., $P(\text{Positive}), P(\text{Negative}), P(\text{Neutral})$).
    *   Calculate likelihoods for each word given each sentiment class (e.g., $P(\text{"loved"}|\text{Positive}), P(\text{"loved"}|\text{Negative}), P(\text{"terrible"}|\text{Positive}), P(\text{"terrible"}|\text{Negative})$).
    *   Use Laplace smoothing to handle unseen words.

5.  **Prediction:** For a new review, calculate the posterior probability for each sentiment class and assign the class with the highest probability.

    **Example Scenario:** Classifying the review: "The acting was amazing, but the story was boring."

    *   We would calculate:
        *   $P(\text{Positive} | \text{"The acting was amazing, but the story was boring."})$
        *   $P(\text{Negative} | \text{"The acting was amazing, but the story was boring."})$
        *   $P(\text{Neutral} | \text{"The acting was amazing, but the story was boring."})$
    *   The model would compare these probabilities and assign the most likely sentiment.

---

### 4. Assumptions and Limitations of Naive Bayes

#### 4.1 Key Assumptions

*   **Conditional Independence of Features:** This is the most significant assumption. It assumes that the occurrence of one word is independent of the occurrence of another word, given the class. This is rarely true in natural language, where word order and context matter.
*   **Feature Representation:** Assumes features are independent and equally important.

#### 4.2 Limitations

*   **The "Independence" Problem:** The naive assumption can lead to inaccuracies. For example, "not good" should be negative, but if "not" is treated independently, it might be associated with positive likelihoods if it appears frequently with positive words by chance.
*   **Zero Frequency Problem:** If a word in the test set does not appear in the training set for a particular class, its likelihood will be zero, making the entire posterior probability zero. Laplace smoothing helps mitigate this.
*   **Data Sparsity:** With a limited training dataset, the probability estimates might not be reliable, especially for words that appear infrequently.
*   **Word Order and Context Ignored:** The Bag-of-Words model loses information about the order of words and their relationships (e.g., negation, sarcasm).

#### 4.3 Strengths

*   **Simplicity and Efficiency:** Easy to implement and computationally fast, making it suitable for large datasets.
*   **Good Performance on Text Data:** Despite its assumptions, it often performs well on text classification tasks.
*   **Requires Less Training Data:** Compared to more complex models, it can often achieve reasonable performance with smaller training datasets.
*   **Handles High-Dimensional Data:** Works well even with a large number of features (words).

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary assumption made by the Naive Bayes algorithm that gives it its name?

**Question 2:**
Explain the Bag-of-Words model in the context of text classification.

**Question 3:**
Describe two common preprocessing steps applied to text data before using Naive Bayes for classification.

**Question 4:**
Why is Laplace smoothing important in Naive Bayes text classification?

**Question 5:**
Consider the following simplified training data for sentiment analysis:

*   **Positive Documents:**
    *   "This is a great film."
    *   "I loved the movie."
*   **Negative Documents:**
    *   "This film was terrible."
    *   "I hated the movie."

Let's assume a vocabulary of {"this", "is", "a", "great", "film", "i", "loved", "the", "movie", "was", "terrible", "hated"}.

**(a)** Calculate $P(\text{Positive})$ and $P(\text{Negative})$ assuming no smoothing.
**(b)** Imagine you want to calculate $P(\text{"great"}|\text{Positive})$ and $P(\text{"loved"}|\text{Positive})$ using a simple frequency count (no smoothing for this part).
**(c)** If a new document "great movie" arrives, how would you conceptually decide its sentiment using Naive Bayes? (You don't need to calculate the actual probabilities, just describe the process).

---

### Answers to Practice Questions

**Answer 1:**
The primary assumption is the **conditional independence of features** given the class. This means that the presence of one word in a document is assumed to be independent of the presence of other words, given the document's category.

**Answer 2:**
The Bag-of-Words (BoW) model represents a document as an unordered collection of its words, disregarding grammar and word order. It creates a vocabulary of all unique words in the corpus and then represents each document as a vector where each dimension corresponds to a word in the vocabulary, and the value in that dimension indicates the frequency (or presence/absence) of that word in the document.

**Answer 3:**
Two common preprocessing steps are:
1.  **Tokenization:** Breaking down the text into individual words or tokens.
2.  **Stop Word Removal:** Removing common words (like "the", "a", "is") that don't significantly contribute to the meaning or sentiment.
3.  **Lowercasing:** Converting all text to lowercase to ensure that words like "Movie" and "movie" are treated as the same.

**Answer 4:**
Laplace smoothing (or additive smoothing) is important to handle the **zero-frequency problem**. If a word in a new document has not been seen in the training data for a specific class, its likelihood for that class would be zero. This would cause the entire posterior probability for that class to become zero, regardless of other words. Smoothing adds a small value (alpha) to all word counts, ensuring that no probability is exactly zero.

**Answer 5:**

**(a)** Calculate $P(\text{Positive})$ and $P(\text{Negative})$ assuming no smoothing.

*   Total number of documents = 4
*   Number of Positive documents = 2
*   Number of Negative documents = 2

*   $P(\text{Positive}) = \frac{\text{Number of Positive documents}}{\text{Total number of documents}} = \frac{2}{4} = 0.5$
*   $P(\text{Negative}) = \frac{\text{Number of Negative documents}}{\text{Total number of documents}} = \frac{2}{4} = 0.5$

**(b)** Calculate $P(\text{"great"}|\text{Positive})$ and $P(\text{"loved"}|\text{Positive})$ using simple frequency counts.

*   Let's consider the Multinomial Naive Bayes approach for simplicity of illustration.
*   **Positive Document 1:** "This is a great film." (Words: this, is, a, great, film)
*   **Positive Document 2:** "I loved the movie." (Words: i, loved, the, movie)
*   Total words in Positive documents = 5 + 4 = 9
*   Count of "great" in Positive documents = 1
*   Count of "loved" in Positive documents = 1

*   $P(\text{"great"}|\text{Positive}) = \frac{\text{Count of 'great' in Positive docs}}{\text{Total words in Positive docs}} = \frac{1}{9}$
*   $P(\text{"loved"}|\text{Positive}) = \frac{\text{Count of 'loved' in Positive docs}}{\text{Total words in Positive docs}} = \frac{1}{9}$

**(c)** For a new document "great movie":

1.  We would calculate the score for the Positive class:
    *   Score(Positive) $\propto P(\text{Positive}) * P(\text{"great"}|\text{Positive}) * P(\text{"movie"}|\text{Positive})$
2.  We would calculate the score for the Negative class:
    *   Score(Negative) $\propto P(\text{Negative}) * P(\text{"great"}|\text{Negative}) * P(\text{"movie"}|\text{Negative})$

    *(To do the actual calculation, we would need the probabilities for "great" and "movie" given the Negative class, which would require counting words in the negative documents. The process involves plugging in these probabilities into the formula. The sentiment would be assigned to the class that yields the highest score.)*

---

### Important Points to Remember

*   **Naive Bayes = Probabilistic + Independence Assumption.**
*   The **Bag-of-Words** model is a common way to represent text as features.
*   **Laplace Smoothing** is crucial to prevent zero probabilities for unseen words.
*   While the independence assumption is strong, Naive Bayes is **surprisingly effective** for text tasks like sentiment analysis and spam detection due to its simplicity and efficiency.
*   Be aware of the limitations: it **ignores word order, context, and semantic nuances** like negation.
*   For sentiment analysis, the **labels are key**: your training data must be accurately labeled with sentiment categories.
