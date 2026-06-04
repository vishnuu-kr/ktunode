---
title: "N-gram Language Models"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 1: Introduction to Natural Language Processing "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9dc"
status: "completed"
scrapedAt: "2026-05-20T17:25:26.300Z"
---
# Natural Language Processing: Module 1 - Introduction to NLP
## Topic: N-gram Language Models

---

### 1. Learning Outcomes Covered

This set of notes aims to cover the following learning outcomes:

*   **Understand the fundamental concept of language modeling and its role in NLP.**
*   **Explain the principles behind N-gram language models.**
*   **Define and differentiate between unigrams, bigrams, trigrams, and higher-order N-grams.**
*   **Describe how N-gram probabilities are calculated using the Maximum Likelihood Estimation (MLE).**
*   **Identify the strengths and weaknesses of N-gram language models.**
*   **Discuss common challenges and techniques for smoothing N-gram models.**
*   **Recognize applications of N-gram language models in various NLP tasks.**

---

### 2. Key Concepts and Definitions

This section breaks down the core ideas related to N-gram language models.

#### 2.1. What is a Language Model?

*   **Definition:** A language model (LM) is a probabilistic model that assigns a probability to a sequence of words. In simpler terms, it predicts the likelihood of a word appearing given the preceding words.
*   **Core Task:** To model the probability distribution over sequences of words. For a sequence of words $W = w_1, w_2, \dots, w_n$, the LM estimates $P(W) = P(w_1, w_2, \dots, w_n)$.
*   **Why is it important?** Language models are foundational to many NLP tasks, enabling machines to understand, generate, and process human language effectively.

#### 2.2. The Chain Rule of Probability

*   **Concept:** The chain rule allows us to decompose the probability of a sequence of events into a product of conditional probabilities.
*   **Formula:** $P(w_1, w_2, \dots, w_n) = P(w_1) \times P(w_2|w_1) \times P(w_3|w_1, w_2) \times \dots \times P(w_n|w_1, w_2, \dots, w_{n-1})$
*   **Application to Language Models:** This rule is crucial for calculating the probability of a sentence.

#### 2.3. The Markov Assumption and N-grams

*   **Problem with the Chain Rule:** Directly calculating $P(w_i|w_1, \dots, w_{i-1})$ requires considering all preceding words. This leads to an exponential increase in the number of parameters and data sparsity issues, as many sequences will never be observed in training data.
*   **The Markov Assumption:** To simplify this, N-gram models make a simplifying assumption: the probability of the next word depends only on the preceding **N-1** words.
*   **N-gram:** An N-gram is a contiguous sequence of N items from a given sample of text or speech. In NLP, these items are typically words.

#### 2.4. Types of N-grams

*   **Unigram (1-gram):**
    *   **Definition:** A unigram is a sequence of one word.
    *   **Assumption:** The probability of a word depends on nothing (i.e., it's independent of its context).
    *   **Calculation:** $P(w_i | w_1, \dots, w_{i-1}) \approx P(w_i)$
    *   **Example:** For the sentence "The quick brown fox", the unigrams are "The", "quick", "brown", "fox".

*   **Bigram (2-gram):**
    *   **Definition:** A bigram is a sequence of two words.
    *   **Assumption:** The probability of a word depends only on the immediately preceding word.
    *   **Calculation:** $P(w_i | w_1, \dots, w_{i-1}) \approx P(w_i | w_{i-1})$
    *   **Example:** For "The quick brown fox", the bigrams are ("The", "quick"), ("quick", "brown"), ("brown", "fox").

*   **Trigram (3-gram):**
    *   **Definition:** A trigram is a sequence of three words.
    *   **Assumption:** The probability of a word depends only on the two immediately preceding words.
    *   **Calculation:** $P(w_i | w_1, \dots, w_{i-1}) \approx P(w_i | w_{i-2}, w_{i-1})$
    *   **Example:** For "The quick brown fox", the trigrams are ("The", "quick", "brown"), ("quick", "brown", "fox").

*   **N-gram (General):**
    *   **Definition:** A sequence of N words.
    *   **Assumption:** The probability of a word depends only on the N-1 preceding words.
    *   **Calculation:** $P(w_i | w_1, \dots, w_{i-1}) \approx P(w_i | w_{i-N+1}, \dots, w_{i-1})$

#### 2.5. Calculating N-gram Probabilities: Maximum Likelihood Estimation (MLE)

*   **Concept:** MLE is a method for estimating the parameters of a statistical model. For N-gram models, it involves counting occurrences of N-grams in a training corpus.
*   **Formula:** The probability of a word $w_i$ given the preceding N-1 words ($w_{i-N+1}, \dots, w_{i-1}$) is calculated as:

    $P(w_i | w_{i-N+1}, \dots, w_{i-1}) = \frac{\text{Count}(w_{i-N+1}, \dots, w_{i-1}, w_i)}{\text{Count}(w_{i-N+1}, \dots, w_{i-1})}$

*   **Example (Bigram):**
    *   **Corpus:** "The quick brown fox jumps over the lazy dog. The quick brown dog barks."
    *   **Calculate P("quick" | "The"):**
        *   Count("The", "quick") = 2
        *   Count("The") = 2
        *   $P(\text{"quick"} | \text{"The"}) = \frac{2}{2} = 1.0$

    *   **Calculate P("brown" | "quick"):**
        *   Count("quick", "brown") = 2
        *   Count("quick") = 2
        *   $P(\text{"brown"} | \text{"quick"}) = \frac{2}{2} = 1.0$

*   **Important Note:** To handle the beginning of sentences, a special "start-of-sentence" token (e.g., `<s>`) is often prepended to each sentence.

#### 2.6. Strengths of N-gram Language Models

*   **Simplicity and Intuitiveness:** Easy to understand and implement.
*   **Computational Efficiency:** Relatively fast to train and use, especially for smaller N values.
*   **Effective for Short Dependencies:** Work well for capturing local word dependencies.
*   **Good Baseline:** Often serve as a strong baseline for more complex models.

#### 2.7. Weaknesses of N-gram Language Models

*   **Data Sparsity:**
    *   **Problem:** For larger N, the number of possible N-grams becomes enormous. Even with large corpora, many valid N-grams may not appear in the training data, leading to zero probabilities.
    *   **Consequence:** A zero probability for an unseen but plausible N-gram can make an entire sentence have a zero probability, which is problematic.

*   **Limited Context:**
    *   **Problem:** They only consider a fixed, short context (N-1 words). They cannot capture long-range dependencies in language, which are crucial for understanding meaning.
    *   **Example:** "The **man** who came from France and **is** now living in London..." Here, "is" depends on "man", which is far away. An N-gram model with small N would struggle to capture this.

*   **Lack of Semantic Understanding:** N-grams are purely statistical and do not understand the meaning or relationships between words.

#### 2.8. Smoothing Techniques

*   **Purpose:** To address the data sparsity problem by redistributing probability mass from observed N-grams to unobserved ones. This ensures that no N-gram has a zero probability.
*   **General Idea:** Give a small amount of probability to unseen events.

*   **Common Smoothing Techniques:**

    *   **Add-One Smoothing (Laplace Smoothing):**
        *   **Concept:** Add 1 to all counts (including the unseen N-grams).
        *   **Formula:** $P(w_i | w_{i-N+1}, \dots, w_{i-1}) = \frac{\text{Count}(w_{i-N+1}, \dots, w_{i-1}, w_i) + 1}{\text{Count}(w_{i-N+1}, \dots, w_{i-1}) + |V|}$
            *   $|V|$ is the size of the vocabulary.
        *   **Drawback:** Can over-smooth and give too much probability mass to unseen N-grams, especially with large vocabularies.

    *   **Add-K Smoothing (Lidstone Smoothing):**
        *   **Concept:** Similar to Add-One, but adds a small value 'k' (where $0 < k < 1$).
        *   **Formula:** $P(w_i | w_{i-N+1}, \dots, w_{i-1}) = \frac{\text{Count}(w_{i-N+1}, \dots, w_{i-1}, w_i) + k}{\text{Count}(w_{i-N+1}, \dots, w_{i-1}) + k|V|}$
        *   **Note:** Add-One smoothing is a special case of Add-K where $k=1$.

    *   **Good-Turing Smoothing:**
        *   **Concept:** Based on the frequency of frequencies. It uses the counts of things seen once to estimate the probability of things seen zero times.
        *   **Key Idea:** The number of N-grams that appear *once* ($N_1$) is used to estimate the probability of N-grams that appear *zero* times ($N_0$).
        *   **Formula (Simplified):** $P_{GT}(w_i | \text{context}) = \frac{N_1(w_{i-N+1}, \dots, w_{i-1}, w_i)}{N(w_{i-N+1}, \dots, w_{i-1})} \text{ if } \text{Count} > 0$
            *   For counts of 0, it uses a discounting factor based on counts of 1.
        *   **More formally:** $c^*(x) = \frac{(f+1)N_{f+1}}{N_f}$ where $N_f$ is the number of items with frequency $f$, and $c^*(x)$ is the "smoothed" count for an item $x$. The probability is then $\frac{c^*(x)}{N}$ where $N$ is the total number of items.

    *   **Kneser-Ney Smoothing:**
        *   **Concept:** One of the most effective smoothing techniques. It's a form of "backoff" smoothing that considers the probability of a word appearing in a novel context.
        *   **Key Idea:** Instead of just giving a fixed probability to unseen N-grams, it estimates the probability of a word appearing in *any* new context. This is based on how many different contexts a word has appeared in.
        *   **Backoff:** If an N-gram is not observed, "back off" to an (N-1)-gram.
        *   **Intuition:** If a word like "chameleon" has never appeared after "the quick brown", but "chameleon" appears in many different contexts (e.g., "a tiny chameleon", "the green chameleon"), it's more likely to be a plausible word than a completely new, made-up word. Kneser-Ney captures this.

#### 2.9. Applications of N-gram Language Models

*   **Speech Recognition:** Predicting the most likely sequence of words from acoustic signals.
*   **Machine Translation:** Generating fluent and grammatically correct translations.
*   **Spell Correction:** Identifying and correcting spelling errors based on word probabilities.
*   **Text Generation:** Creating new text that resembles human-written text.
*   **Autocompletion/Autocorrection:** Suggesting the next word as the user types.
*   **Information Retrieval:** Ranking documents based on the likelihood of query terms appearing together.

---

### 3. Practice Questions and Exercises

**Question 1:**
What is the core problem that N-gram models try to solve compared to using the full chain rule of probability for language modeling?

**Question 2:**
Consider the following corpus: "I love NLP. NLP is fun. I love programming."
Calculate the following bigram probabilities using Maximum Likelihood Estimation:
a) $P(\text{"NLP"} | \text{"love"})$
b) $P(\text{"fun"} | \text{"is"})$
c) $P(\text{"is"} | \text{"NLP"})$

**Question 3:**
Explain the concept of data sparsity in N-gram models. Give an example of a situation where this problem would arise.

**Question 4:**
What is the purpose of smoothing techniques in N-gram language models? Briefly describe the intuition behind Kneser-Ney smoothing.

**Question 5:**
If you have a vocabulary of 10,000 words, and you are using Add-One smoothing for a bigram model, how would you calculate $P(\text{"hello"} | \text{"good"})$ if the bigram ("good", "hello") never appeared in your training corpus?

---

### 4. Answers to Practice Questions

**Answer 1:**
The core problem that N-gram models solve is the **data sparsity** and **computational complexity** associated with using the full chain rule of probability. The full chain rule requires estimating probabilities conditioned on all preceding words, leading to an exponential number of parameters and a high likelihood of encountering unseen sequences. N-gram models simplify this by making the **Markov assumption**, where the probability of a word depends only on a fixed, small number (N-1) of preceding words, thus reducing the number of parameters and making estimations more feasible.

**Answer 2:**
Corpus: "I love NLP. NLP is fun. I love programming."
Vocabulary (unique words): {"I", "love", "NLP", "is", "fun", "programming"}

To calculate probabilities, we need counts. Let's add `<s>` for sentence beginnings:
"<s> I love NLP. <s> NLP is fun. <s> I love programming."

Bigrams:
(<s>, I), (I, love), (love, NLP)
(<s>, NLP), (NLP, is), (is, fun)
(<s>, I), (I, love), (love, programming)

Counts:
Count(I, love) = 2
Count(love) = 2
Count(NLP, is) = 1
Count(is) = 1
Count(is, fun) = 1
Count(NLP) = 1

a) $P(\text{"NLP"} | \text{"love"}) = \frac{\text{Count}(\text{"love"}, \text{"NLP"})}{\text{Count}(\text{"love"})} = \frac{1}{2} = 0.5$

b) $P(\text{"fun"} | \text{"is"}) = \frac{\text{Count}(\text{"is"}, \text{"fun"})}{\text{Count}(\text{"is"})} = \frac{1}{1} = 1.0$

c) $P(\text{"is"} | \text{"NLP"}) = \frac{\text{Count}(\text{"NLP"}, \text{"is"})}{\text{Count}(\text{"NLP"})} = \frac{1}{1} = 1.0$

**Answer 3:**
**Data sparsity** is the problem where many possible N-grams (sequences of N words) may not appear in the training corpus, even if they are grammatically correct and semantically plausible. This leads to zero probabilities for these unseen N-grams.

**Example:** Consider a bigram model trained on a corpus of news articles. The N-gram ("quantum", "computing") might appear frequently. However, the N-gram ("quantum", "fluffy") is unlikely to appear in news articles. If a text generation system using this model generates "quantum" and then needs to predict the next word, it would assign a zero probability to "fluffy" even if it's a valid word. This zero probability makes the entire sequence have zero probability, which is undesirable.

**Answer 4:**
The purpose of **smoothing techniques** is to address the data sparsity problem by redistributing probability mass from observed N-grams to unobserved or unseen N-grams. This ensures that all possible word sequences have a non-zero probability, making the language model more robust.

**Kneser-Ney smoothing** is based on the idea of using **"backoff"** and considering the **number of novel contexts** a word appears in. If an N-gram is not seen, Kneser-Ney doesn't just assign a fixed small probability. Instead, it estimates the probability of a word appearing in *any* new context. This probability is proportional to how many different (N-1)-gram contexts the word has appeared in during training. Intuitively, words that appear in a wider variety of contexts are more likely to be plausible in new, unseen contexts.

**Answer 5:**
Using Add-One smoothing (Laplace smoothing) for a bigram model, the formula for calculating the probability of a word $w_i$ given the preceding word $w_{i-1}$ is:

$P(w_i | w_{i-1}) = \frac{\text{Count}(w_{i-1}, w_i) + 1}{\text{Count}(w_{i-1}) + |V|}$

Where:
*   $\text{Count}(w_{i-1}, w_i)$ is the number of times the bigram ($w_{i-1}$, $w_i$) appears in the corpus.
*   $\text{Count}(w_{i-1})$ is the number of times the unigram $w_{i-1}$ appears in the corpus.
*   $|V|$ is the size of the vocabulary.

Given:
*   Vocabulary size $|V| = 10,000$
*   The bigram ("good", "hello") never appeared in the corpus, so $\text{Count}(\text{"good"}, \text{"hello"}) = 0$.

Let's assume $\text{Count}(\text{"good"})$ from the corpus is, for example, 500 (this value would be needed from the corpus).

Then, the probability would be:

$P(\text{"hello"} | \text{"good"}) = \frac{0 + 1}{\text{Count}(\text{"good"}) + 10000} = \frac{1}{500 + 10000} = \frac{1}{10500}$

**Note:** The exact numerical answer depends on the count of the unigram "good" in the corpus. The important part is applying the formula correctly.

---

### 5. Important Points to Remember

*   **Language Model Goal:** Assign probabilities to sequences of words.
*   **N-gram Assumption:** Probability of a word depends only on the preceding N-1 words.
*   **MLE Calculation:** Count-based estimation: $\frac{\text{Count(N-gram)}}{\text{Count(Context)}}$.
*   **Data Sparsity:** The biggest challenge; leads to zero probabilities for unseen N-grams.
*   **Smoothing:** Essential to overcome data sparsity by redistributing probability mass.
*   **Context Length:** N-grams capture only local context; struggle with long-range dependencies.
*   **Vocabulary Size:** Impacts the severity of sparsity and the effectiveness of smoothing.
*   **Types of N-grams:** Unigrams, Bigrams, Trigrams, etc. Higher N captures more context but exacerbates sparsity.
*   **Applications:** Speech recognition, MT, spell correction, text generation.
*   **Kneser-Ney:** A sophisticated and effective smoothing technique for N-grams.
