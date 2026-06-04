---
title: "finite automata and language model"
subject: "DATA ANALYTICS"
module: "Module 4: Text Processing :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b734"
status: "completed"
scrapedAt: "2026-05-20T16:44:16.547Z"
---
# DATA ANALYTICS - Module 4: Text Processing - Finite Automata and Language Models

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of Finite Automata (FA) and its types.
*   Design and implement Finite Automata for simple pattern recognition.
*   Explain the concept of Language Models and their role in text processing.
*   Understand and apply N-gram language models.
*   Evaluate the performance of language models using metrics like perplexity.
*   Understand the limitations of Finite Automata and simple Language Models.

## 1. Finite Automata (FA)

### 1.1. Definition:

*   A Finite Automaton (FA) is a mathematical model of a system with discrete inputs, outputs, states, and a set of transitions from state to state that occur on input symbols from an alphabet.
*   It is a state machine that accepts or rejects strings of symbols. It is a theoretical computing machine or abstract machine.

### 1.2. Key Concepts and Definitions:

*   **Alphabet (Σ):** A finite set of symbols.  Example: Σ = {0, 1}, Σ = {a, b, c}
*   **String:** A finite sequence of symbols from an alphabet. Example: "0101" is a string over Σ = {0, 1}
*   **Language:** A set of strings over an alphabet. Example: The language of all strings containing '1' over Σ = {0, 1}
*   **State (Q):** A condition of the automaton at a given time.
*   **Start State (q0):** The initial state of the automaton.  Only one start state.
*   **Accept State (F):**  A state that indicates the automaton has successfully recognized a string. Can be more than one.
*   **Transition Function (δ):**  A function that maps a state and an input symbol to a next state. δ(q, a) = q'  (From state q, upon reading input a, transition to state q')

### 1.3. Formal Definition of a Finite Automaton:

A Finite Automaton (FA) is a 5-tuple:

*   M = (Q, Σ, δ, q0, F)
    *   Q: A finite set of states.
    *   Σ: A finite set of input symbols (the alphabet).
    *   δ: The transition function: Q x Σ -> Q
    *   q0: The start state (q0 ∈ Q).
    *   F: A set of accept (or final) states (F ⊆ Q).

### 1.4. Types of Finite Automata:

*   **Deterministic Finite Automaton (DFA):**
    *   For each state and input symbol, there is exactly one transition.
    *   No epsilon (ε) transitions are allowed (transitions without consuming an input symbol).
    *   Easier to implement.
*   **Non-Deterministic Finite Automaton (NFA):**
    *   For each state and input symbol, there can be zero, one, or multiple transitions.
    *   Epsilon (ε) transitions are allowed.
    *   More flexible and sometimes easier to design for complex patterns, but more complex to implement directly.

### 1.5. Example: DFA

Let's design a DFA that accepts strings over the alphabet Σ = {0, 1} that contain the substring "101".

*   Q = {q0, q1, q2, q3}
*   Σ = {0, 1}
*   q0 = q0
*   F = {q3}
*   δ (Transition Function):

| State | Input 0 | Input 1 |
|---|---|---|
| q0 | q0 | q1 |
| q1 | q2 | q1 |
| q2 | q0 | q3 |
| q3 | q3 | q3 |

*   **Explanation of the states:**
    *   q0: Haven't seen any part of "101" yet.
    *   q1: Have seen "1".
    *   q2: Have seen "10".
    *   q3: Have seen "101" (accepting state).

**Example Strings:**

*   "00101": Accepted (Transitions: q0 -> q0 -> q0 -> q1 -> q2 -> q3)
*   "1101": Accepted (Transitions: q0 -> q1 -> q1 -> q2 -> q3)
*   "010": Rejected (Transitions: q0 -> q0 -> q1 -> q2)

### 1.6. Example: NFA

Let's design an NFA that accepts strings over the alphabet Σ = {0, 1} that end in "01".

*   Q = {q0, q1, q2}
*   Σ = {0, 1}
*   q0 = q0
*   F = {q2}
*   δ (Transition Function):

| State | Input 0 | Input 1 | ε |
|---|---|---|---|
| q0 | {q0}  | {q0, q1} | {} |
| q1 | {q2} | {} | {} |
| q2 | {} | {} | {} |

*   **Explanation of the states:**
    *   q0: Haven't seen the last "01" yet (or can be the starting state).  Can loop back to itself on 0 and 1.  Upon seeing a "1" might also lead to q1 (beginning of a possible "01" ending).
    *   q1:  Last symbol seen was "1".  If followed by "0", we've seen the ending "01".
    *   q2:  Accepting state, means we've seen a string ending in "01".

**Example Strings:**

*   "101": Accepted (Possible Transitions: q0 -> q0 -> q0 -> q1 -> q2 or q0 -> q1 -> q2)
*   "00101": Accepted (One of the possible paths: q0 -> q0 -> q0 -> q1 -> q2)
*   "010": Rejected.

### 1.7. Important points to remember about FAs:

*   FAs have limited memory (they can only remember the current state).
*   FAs can only recognize regular languages.
*   NFAs can be converted to DFAs, but sometimes at the cost of a larger number of states.
*   DFAs are often more efficient to implement.

## 2. Language Models

### 2.1. Definition:

*   A Language Model (LM) is a probabilistic model that assigns a probability to a sequence of words.
*   It predicts the likelihood of a given sentence being grammatically correct and semantically meaningful.
*   Used in various NLP tasks such as speech recognition, machine translation, text generation, and spelling correction.

### 2.2. Key Concepts:

*   **Probability of a Sentence:**  P(w1, w2, ..., wn), where w1, w2, ..., wn are words in the sentence.
*   **Chain Rule of Probability:** Decomposes the probability of a sentence into the product of conditional probabilities:
    P(w1, w2, ..., wn) = P(w1) * P(w2 | w1) * P(w3 | w1, w2) * ... * P(wn | w1, w2, ..., wn-1)

### 2.3. N-gram Language Models

*   An N-gram language model simplifies the calculation of sentence probability by approximating the conditional probability of a word given its entire history by the conditional probability of the word given only the preceding N-1 words.
*   **Formula:**  P(wi | w1, w2, ..., wi-1) ≈ P(wi | wi-N+1, wi-N+2, ..., wi-1)
*   **Types:**
    *   **Unigram (N=1):**  P(wi | w1, w2, ..., wi-1) ≈ P(wi)
    *   **Bigram (N=2):**  P(wi | w1, w2, ..., wi-1) ≈ P(wi | wi-1)
    *   **Trigram (N=3):**  P(wi | w1, w2, ..., wi-1) ≈ P(wi | wi-2, wi-1)
    *   And so on...

### 2.4. Calculating N-gram Probabilities:

*   **Bigram Example:**
    *   P(wi | wi-1) = count(wi-1, wi) / count(wi-1)
    *   Where count(wi-1, wi) is the number of times the bigram "wi-1 wi" appears in the training corpus, and count(wi-1) is the number of times the word "wi-1" appears in the corpus.
*   **General N-gram Formula:**
    *   P(wi | wi-N+1, wi-N+2, ..., wi-1) = count(wi-N+1, wi-N+2, ..., wi-1, wi) / count(wi-N+1, wi-N+2, ..., wi-1)

### 2.5. Example: Bigram Language Model

Let's say we have the following corpus (training text):

"I am Sam Sam I am I do not like green eggs and ham"

Calculate the probabilities for the following:

*   P(Sam | I)
*   P(am | Sam)
*   P(I | Sam)

**Calculations:**

1.  **Count the bigrams and unigrams:**

    | Bigram | Count |
    |---|---|
    | I am | 2 |
    | am Sam | 1 |
    | Sam Sam | 1 |
    | Sam I | 1 |
    | I do | 1 |
    | do not | 1 |
    | not like | 1 |
    | like green | 1 |
    | green eggs | 1 |
    | eggs and | 1 |
    | and ham | 1 |

    | Unigram | Count |
    |---|---|
    | I | 3 |
    | am | 2 |
    | Sam | 2 |
    | do | 1 |
    | not | 1 |
    | like | 1 |
    | green | 1 |
    | eggs | 1 |
    | and | 1 |
    | ham | 1 |

2.  **Calculate the probabilities:**

    *   P(Sam | I) = count(I Sam) / count(I) = 1 / 3 = 0.333
    *   P(am | Sam) = count(Sam am) / count(Sam) = 0 / 2 = 0 (This is a zero probability issue)
    *   P(I | Sam) = count(Sam I) / count(Sam) = 1 / 2 = 0.5

### 2.6. Smoothing Techniques

*   **Problem:**  N-gram models suffer from the "zero probability" problem. If an N-gram hasn't been seen in the training data, its probability will be zero, which can lead to the entire sentence having a probability of zero.
*   **Solution:** Smoothing techniques adjust probabilities to avoid zero probabilities and improve the model's generalization ability.
*   **Common Smoothing Techniques:**
    *   **Add-k Smoothing (Laplace Smoothing/Add-One Smoothing):** Adds a small constant value (k) to the counts of all N-grams.
        *   P(wi | wi-1) = (count(wi-1, wi) + k) / (count(wi-1) + k * V)
        *   Where V is the size of the vocabulary (total number of unique words).
    *   **Add-One Smoothing (k=1)**
    *   **Good-Turing Smoothing:**  Uses the frequency of frequencies to estimate probabilities.
    *   **Kneser-Ney Smoothing:**  A more advanced smoothing technique that considers the absolute counts and the number of distinct contexts in which a word appears.

### 2.7. Example with Add-One Smoothing (Laplace Smoothing)

Using the same corpus as before:

"I am Sam Sam I am I do not like green eggs and ham"

Calculate P(am | Sam) using Add-One smoothing.  Vocabulary size (V) = 10

1.  **Original Counts:**

    *   count(Sam am) = 0
    *   count(Sam) = 2

2.  **Apply Add-One Smoothing:**

    *   P(am | Sam) = (count(Sam am) + 1) / (count(Sam) + V) = (0 + 1) / (2 + 10) = 1 / 12 = 0.0833

### 2.8. Evaluating Language Models

*   **Perplexity:** A common metric for evaluating the performance of a language model.  Lower perplexity indicates a better model.
    *   Perplexity(W) = P(w1, w2, ..., wn)^(-1/N)
    *   Where W is the test set (sequence of words), and N is the number of words in the test set.
    *   In practice, perplexity is calculated using log probabilities to avoid underflow:
        * Perplexity(W) = exp { - (1/N) * sum(log P(wi | w1, w2, ... wi-1))}
*   **Held-Out Data:** Evaluate the model on a dataset that was not used for training (test set).

### 2.9. Important points to remember about Language Models:

*   N-gram models make a Markov assumption (the future is independent of the past given the present).
*   Smoothing is crucial to handle unseen N-grams.
*   The choice of N (in N-gram models) depends on the task and the size of the training data.  Larger N captures longer dependencies but requires more data to train effectively.
*   Perplexity is a common metric for evaluating language models.
*   Language Models are fundamental building blocks in many NLP applications.

## 3. Limitations

### 3.1. Limitations of Finite Automata:

*   **Limited Memory:**  FAs can only remember the current state. They cannot remember arbitrary amounts of information from the input string.
*   **Cannot Recognize Non-Regular Languages:** FAs cannot recognize languages that require counting or recursion, such as languages with balanced parentheses or palindromes. For example, a FA cannot effectively determine if a string has an equal number of '0's and '1's.
*   **State Explosion:**  For some complex patterns, the number of states required in an FA can grow exponentially, making it impractical.

### 3.2. Limitations of Simple Language Models (N-gram Models):

*   **Limited Context:** N-gram models only consider a limited history (N-1 words). They cannot capture long-range dependencies in the text.
*   **Data Sparsity:**  N-gram models suffer from data sparsity, especially for larger values of N.  Many possible N-grams may not be observed in the training data.
*   **Out-of-Vocabulary (OOV) Words:**  Words that are not present in the training vocabulary cannot be handled directly by N-gram models.  Requires special handling, such as replacing rare words with a special `<UNK>` token.
*   **Lack of Semantic Understanding:** N-gram models are based on statistical co-occurrence and do not have any explicit understanding of the meaning of the words or sentences.  They simply predict the likelihood of a word given its preceding words.
*   **Sensitivity to Training Data:**  The performance of N-gram models is highly dependent on the quality and size of the training data.  Biases in the training data can be reflected in the model's predictions.

## 4. Practice Questions/Exercises

**1. Finite Automata:**

a) Design a DFA that accepts strings over the alphabet Σ = {a, b} that start with "ab".

b) Design an NFA that accepts strings over the alphabet Σ = {0, 1} that contain either "00" or "11".

**2. Language Models:**

a) Given the corpus: "the cat sat on the mat".  Calculate the bigram probabilities P(cat | the), P(mat | the), P(on | sat).

b) Using the same corpus, calculate P(cat | the) using Add-One smoothing.

c) Explain the concept of perplexity and how it is used to evaluate language models.

**Answers:**

**1. Finite Automata:**

a) DFA for strings starting with "ab":

*   Q = {q0, q1, q2, q3}
*   Σ = {a, b}
*   q0 = q0
*   F = {q2}
*   δ:

| State | Input a | Input b |
|---|---|---|
| q0 | q1 | q3 |
| q1 | q3 | q2 |
| q2 | q2 | q2 |
| q3 | q3 | q3 |

b) NFA for strings containing "00" or "11":

*   Q = {q0, q1, q2, q3, q4}
*   Σ = {0, 1}
*   q0 = q0
*   F = {q3, q4}
*   δ:

| State | Input 0 | Input 1 |
|---|---|---|
| q0 | {q0, q1} | {q0, q2} |
| q1 | {q3} | {} |
| q2 | {} | {q4} |
| q3 | {q3} | {q3} |
| q4 | {q4} | {q4} |

**2. Language Models:**

a) Bigram probabilities:

*   Corpus: "the cat sat on the mat"

    | Bigram | Count |
    |---|---|
    | the cat | 1 |
    | cat sat | 1 |
    | sat on | 1 |
    | on the | 1 |
    | the mat | 1 |

    | Unigram | Count |
    |---|---|
    | the | 2 |
    | cat | 1 |
    | sat | 1 |
    | on | 1 |
    | mat | 1 |

    *   P(cat | the) = count(the cat) / count(the) = 1 / 2 = 0.5
    *   P(mat | the) = count(the mat) / count(the) = 1 / 2 = 0.5
    *   P(on | sat) = count(sat on) / count(sat) = 1 / 1 = 1

b)  P(cat | the) with Add-One smoothing:

*   V (vocabulary size) = 5 (the, cat, sat, on, mat)
*   P(cat | the) = (count(the cat) + 1) / (count(the) + V) = (1 + 1) / (2 + 5) = 2 / 7 = 0.286

c) Perplexity explanation:

Perplexity is a metric used to evaluate the performance of a language model. It measures how well the language model predicts a sample of text.  Lower perplexity indicates a better model, meaning the model is more confident in its predictions.  It can be interpreted as the average number of choices the model has to consider for each word.  It is calculated as the inverse probability of the test set, normalized by the number of words in the test set.

## 5. Important Points to Remember

*   Finite Automata are useful for pattern matching but have limited memory and cannot handle complex languages.
*   Language Models predict the probability of sequences of words and are widely used in NLP.
*   N-gram models are a simple type of language model that considers only a limited history of words.
*   Smoothing techniques are essential to avoid zero probabilities in N-gram models.
*   Perplexity is a common metric for evaluating the performance of language models.
*   Consider the limitations of both Finite Automata and simple Language Models when choosing the appropriate technique for a specific text processing task.
