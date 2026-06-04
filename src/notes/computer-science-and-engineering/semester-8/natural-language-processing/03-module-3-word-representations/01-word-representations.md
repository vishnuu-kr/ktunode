---
title: "Word representations"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 3: Word representations"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9e4"
status: "completed"
scrapedAt: "2026-05-20T17:25:30.534Z"
---
# Natural Language Processing: Module 3 - Word Representations

## Topic: Word Representations

### 1. Introduction to Word Representations

**What are Word Representations?**

Word representations, also known as word embeddings, are numerical representations of words in a vector space. The goal is to capture the semantic and syntactic meaning of words, allowing machines to understand and process them more effectively. Instead of treating words as discrete, independent symbols, word representations place them in a continuous vector space where words with similar meanings are located close to each other.

**Why are Word Representations Important?**

*   **Enabling Machine Understanding:** Computers don't understand text natively. Word representations translate words into a format that machine learning algorithms can process.
*   **Capturing Semantic Relationships:** Similar words should have similar vector representations. This allows models to infer relationships like synonyms, antonyms, and analogies.
*   **Dimensionality Reduction:** Representing words as dense vectors is more efficient than using sparse, high-dimensional representations like one-hot encoding, especially for large vocabularies.
*   **Foundation for Downstream Tasks:** Word representations are a crucial input for many NLP tasks, including:
    *   Text Classification
    *   Sentiment Analysis
    *   Machine Translation
    *   Question Answering
    *   Named Entity Recognition

---

### 2. Traditional vs. Modern Word Representations

#### 2.1. Traditional (Sparse) Representations

*   **One-Hot Encoding:**
    *   **Definition:** Each word in the vocabulary is represented by a binary vector of the same length as the vocabulary size. Only the dimension corresponding to the specific word is set to 1, while all others are 0.
    *   **Example:**
        *   Vocabulary: ["cat", "dog", "fish", "pet"]
        *   "cat": [1, 0, 0, 0]
        *   "dog": [0, 1, 0, 0]
        *   "fish": [0, 0, 1, 0]
        *   "pet": [0, 0, 0, 1]
    *   **Pros:** Simple to understand and implement.
    *   **Cons:**
        *   **High Dimensionality:** Vectors are as large as the vocabulary, which can be millions of words.
        *   **Sparsity:** Most elements are zero, leading to inefficient storage and computation.
        *   **No Semantic Similarity:** The dot product between any two distinct one-hot vectors is always 0, failing to capture any relationship between words. For example, "king" and "queen" are just as dissimilar as "king" and "banana".

*   **Bag-of-Words (BoW):**
    *   **Definition:** Represents a document as a multiset (bag) of its words, disregarding grammar and word order but keeping track of frequency. A document is represented by a vector where each dimension corresponds to a word in the vocabulary, and the value is the count (or frequency) of that word in the document.
    *   **Example:**
        *   Document 1: "The cat sat on the mat."
        *   Document 2: "The dog sat on the mat."
        *   Vocabulary: ["The", "cat", "sat", "on", "mat", "dog"]
        *   Doc 1 Vector: [2, 1, 1, 1, 1, 0] (assuming "the" appears twice)
        *   Doc 2 Vector: [2, 0, 1, 1, 1, 1]
    *   **Pros:** Simple, effective for some tasks (e.g., topic modeling, document classification).
    *   **Cons:**
        *   **Ignores Word Order:** "The cat sat on the mat" and "The mat sat on the cat" would have the same BoW representation.
        *   **High Dimensionality & Sparsity:** Similar to one-hot encoding.
        *   **Does not capture word meaning or relationships.**

*   **TF-IDF (Term Frequency-Inverse Document Frequency):**
    *   **Definition:** A statistical measure that evaluates how important a word is to a document in a collection or corpus. It increases proportionally to the number of times a word appears in the document but is offset by the frequency of the word in the corpus.
        *   **TF (Term Frequency):** How often a term appears in a document.
        *   **IDF (Inverse Document Frequency):** Measures how rare a word is across the entire corpus.
    *   **Formula:** $TF-IDF(t, d, D) = TF(t, d) \times IDF(t, D)$
        *   $TF(t, d) = \frac{\text{Number of times term } t \text{ appears in document } d}{\text{Total number of terms in document } d}$
        *   $IDF(t, D) = \log \left( \frac{\text{Total number of documents in corpus } D}{\text{Number of documents containing term } t} \right)$
    *   **Example:** If "cat" appears frequently in one document but rarely in the corpus, its TF-IDF score will be high, indicating it's an important word for that document. If "the" appears in almost all documents, its IDF will be low, resulting in a low TF-IDF score.
    *   **Pros:** Better than raw TF for identifying important keywords.
    *   **Cons:**
        *   **Still Ignores Word Order and Context.**
        *   **High Dimensionality & Sparsity.**
        *   **Does not capture semantic similarity between words.**

#### 2.2. Modern (Dense) Representations (Word Embeddings)

*   **Key Idea:** Represent words as dense, low-dimensional vectors in a continuous vector space. These vectors are learned from large corpora of text.

*   **Properties of Good Word Embeddings:**
    *   **Semantic Similarity:** Words with similar meanings should have vectors that are close in the vector space (e.g., cosine similarity).
    *   **Syntactic Similarity:** Embeddings can capture grammatical relationships.
    *   **Analogies:** Vector arithmetic can capture analogies, e.g., `vector("king") - vector("man") + vector("woman") ≈ vector("queen")`.

---

### 3. Popular Word Embedding Techniques

#### 3.1. Word2Vec (Mikolov et al., 2013)

*   **Concept:** A neural network-based approach that learns word embeddings by predicting a target word given its context words, or predicting context words given a target word.

*   **Two Architectures:**

    *   **Continuous Bag-of-Words (CBOW):**
        *   **Goal:** Predict the target word based on its surrounding context words.
        *   **Input:** A window of context words.
        *   **Output:** The probability distribution over the vocabulary for the target word.
        *   **How it works:** The vectors of the context words are averaged (or summed), and this combined vector is used to predict the target word.
        *   **Analogy:** Imagine guessing the word "cat" from "The [ ] sat on the mat."

    *   **Skip-gram:**
        *   **Goal:** Predict the surrounding context words given a target word.
        *   **Input:** A single target word.
        *   **Output:** Probability distributions over the vocabulary for each context word.
        *   **How it works:** The vector of the target word is used to predict all words within a defined context window.
        *   **Analogy:** Imagine predicting words like "The", "sat", "on", "the", "mat" from the word "cat".
        *   **Generally performs better than CBOW for semantic relationships.**

*   **Training:** Word2Vec models are typically trained using negative sampling or hierarchical softmax for efficiency.
    *   **Negative Sampling:** Instead of updating all weights in the output layer (which can be huge), for each training sample, we update the weights for the target word and a few randomly sampled "negative" words (words that are not the target).
    *   **Hierarchical Softmax:** Uses a binary tree to represent the output layer, making prediction and training more efficient.

*   **Key Features of Word2Vec Embeddings:**
    *   **Dense vectors:** Typically 50-300 dimensions.
    *   **Capture semantic and syntactic relationships.**
    *   **Pre-trained embeddings are widely available.**

#### 3.2. GloVe (Global Vectors for Word Representation) (Pennington et al., 2014)

*   **Concept:** An unsupervised learning algorithm that learns word embeddings by factorizing a global word-word co-occurrence matrix from a corpus. It combines the benefits of global matrix factorization (like Latent Semantic Analysis - LSA) and local context window methods (like Word2Vec).

*   **How it works:**
    1.  **Construct a co-occurrence matrix:** Count how often words appear together within a specified context window across the entire corpus.
    2.  **Factorize the matrix:** The model aims to learn word vectors such that their dot product is related to the logarithm of their co-occurrence probability. Specifically, it tries to minimize a cost function that relates the dot product of two word vectors to the logarithm of their co-occurrence count.
    *   $J = \sum_{i,j} f(X_{ij}) (w_i^T \tilde{w}_j + b_i + \tilde{b}_j - \log X_{ij})^2$
        *   $X_{ij}$: Co-occurrence count of word $i$ and word $j$.
        *   $w_i, \tilde{w}_j$: Word vectors for word $i$ and word $j$.
        *   $b_i, \tilde{b}_j$: Bias terms.
        *   $f(X_{ij})$: A weighting function that gives less weight to very frequent co-occurrences (e.g., "the" and "a") and very rare co-occurrences.

*   **Key Features of GloVe Embeddings:**
    *   **Leverages global statistics:** Captures global word co-occurrence patterns more directly.
    *   **Often performs well on analogy tasks and word similarity tasks.**
    *   **Pre-trained embeddings are readily available.**

#### 3.3. FastText (Bojanowski et al., 2016)

*   **Concept:** An extension of Word2Vec that considers words as being composed of **character n-grams**. This allows it to handle out-of-vocabulary (OOV) words and better represent morphologically rich languages.

*   **How it works:**
    1.  **Represent words as bags of character n-grams:** For example, the word "apple" might be represented by its n-grams: "<ap", "app", "ppl", "ple", "le>", and the whole word "<apple>".
    2.  **Learn embeddings for each n-gram:** The word's vector is the sum of the vectors of its constituent character n-grams.
    3.  **Training:** Similar to Word2Vec, FastText uses CBOW or Skip-gram architectures, but instead of learning embeddings for whole words, it learns embeddings for character n-grams.

*   **Key Features of FastText Embeddings:**
    *   **Handles Out-of-Vocabulary (OOV) words:** Can generate embeddings for words not seen during training by composing them from known n-grams.
    *   **Captures subword information:** Useful for morphologically rich languages (languages where words have many prefixes/suffixes) and for identifying relationships based on word parts.
    *   **Effective for tasks with many rare words or typos.**

---

### 4. Evaluating Word Representations

*   **Intrinsic Evaluation:**
    *   **Definition:** Evaluates the quality of word representations independently of any downstream NLP task. This is usually done by testing them on specific linguistic tasks.
    *   **Common Tasks:**
        *   **Word Similarity:** Measure how well the cosine similarity of word vectors correlates with human judgments of word similarity (e.g., using datasets like SimLex-999, WordSim-353).
        *   **Word Analogy:** Measure how well the vector arithmetic captures analogies (e.g., "man" is to "woman" as "king" is to "queen"). Tested on datasets like Google Analogy Test Set.
        *   **Named Entity Recognition (NER) Accuracy:** Evaluates how well embeddings help in identifying entities.
        *   **Part-of-Speech (POS) Tagging Accuracy:** Evaluates how well embeddings help in assigning grammatical tags.

*   **Extrinsic Evaluation:**
    *   **Definition:** Evaluates the quality of word representations by using them as features in a downstream NLP task and measuring the performance on that task.
    *   **Common Tasks:**
        *   Text Classification (e.g., sentiment analysis, spam detection)
        *   Machine Translation
        *   Question Answering
        *   Named Entity Recognition

---

### 5. Using Pre-trained Word Embeddings

*   **Benefits:**
    *   **Saves computation:** Training word embeddings from scratch on massive corpora is computationally expensive and time-consuming.
    *   **Leverages large-scale data:** Pre-trained embeddings are trained on vast datasets (e.g., Wikipedia, Google News), capturing a wide range of linguistic knowledge.
    *   **Good starting point:** They provide a solid foundation for many NLP tasks, especially when your own dataset is small.

*   **How to use them:**
    1.  **Download pre-trained vectors:** Obtain files containing word vectors (e.g., from Google's Word2Vec, GloVe, or FastText websites).
    2.  **Load the embeddings:** Load these vectors into a dictionary or embedding matrix in your NLP model.
    3.  **Incorporate into your model:** Use these embeddings as the initial weights for the embedding layer in a neural network, or as features for other machine learning models.
    4.  **Fine-tuning (Optional):** You can choose to either keep the pre-trained embeddings fixed or fine-tune them (update their weights) along with the rest of your model during training on your specific task. Fine-tuning can adapt the embeddings to the specific domain of your data.

*   **Popular Pre-trained Embeddings:**
    *   **Word2Vec:** Google News vectors (trained on ~100 billion words).
    *   **GloVe:** Common Crawl, Wikipedia, Twitter.
    *   **FastText:** Wikipedia, Common Crawl.

---

### 6. Limitations of Static Word Embeddings (Word2Vec, GloVe, FastText)

*   **Polysemy (Multiple Meanings):** These models assign a single vector to each word. However, words can have multiple meanings (e.g., "bank" can refer to a financial institution or a river bank). Static embeddings cannot distinguish between these different senses.
*   **Context Independence:** The embedding for a word is the same regardless of the context it appears in.
*   **Lack of Compositionality:** While analogies can be captured, these embeddings don't inherently provide a principled way to combine word vectors to form meaningful sentence or phrase vectors.

---

### 7. Learning Outcomes Covered

*   **Understanding the need for word representations:** Why we need to represent words numerically for NLP.
*   **Comparing traditional and modern word representations:** One-hot encoding, BoW, TF-IDF vs. dense embeddings.
*   **Explaining the principles behind popular word embedding techniques:** Word2Vec (CBOW, Skip-gram), GloVe, FastText.
*   **Discussing the evaluation methods for word representations:** Intrinsic and extrinsic evaluation.
*   **Recognizing the benefits of using pre-trained word embeddings.**
*   **Identifying the limitations of static word embeddings.**

---

### Practice Questions & Exercises

**Question 1:**
What is the primary limitation of one-hot encoding as a word representation?
A) It leads to very short vectors.
B) It doesn't capture semantic similarity.
C) It is computationally too expensive for large vocabularies.
D) It requires a very small corpus for training.

**Question 2:**
In the context of Word2Vec, which architecture predicts the context words given a target word?
A) Continuous Bag-of-Words (CBOW)
B) Skip-gram
C) Bag-of-Words (BoW)
D) TF-IDF

**Question 3:**
Which word embedding technique represents words as bags of character n-grams to handle out-of-vocabulary words?
A) Word2Vec
B) GloVe
C) FastText
D) Latent Semantic Analysis (LSA)

**Question 4:**
Explain the core idea behind GloVe word embeddings and how it differs from Word2Vec.

**Question 5:**
Imagine you are building a sentiment analysis model for product reviews. You have a small dataset. What is the most practical approach regarding word representations, and why?

**Question 6:**
Provide an example of a word analogy that can be captured by word embeddings, using vector arithmetic.

**Question 7:**
What is polysemy, and why is it a challenge for static word embeddings like Word2Vec and GloVe?

---

### Answers to Practice Questions

**Answer 1:**
B) It doesn't capture semantic similarity.
*Explanation:* One-hot vectors are orthogonal, meaning their dot product is zero, failing to capture any relationship between words. They also lead to high dimensionality and sparsity.

**Answer 2:**
B) Skip-gram
*Explanation:* The Skip-gram model takes a target word and tries to predict its surrounding context words. CBOW predicts the target word from its context.

**Answer 3:**
C) FastText
*Explanation:* FastText's innovation is using character n-grams, which allows it to represent and generate embeddings for words not seen during training, thus handling OOV words.

**Answer 4:**
The core idea of GloVe is to factorize a global word-word co-occurrence matrix. It leverages statistics about how often words appear together across the entire corpus. In contrast, Word2Vec (especially Skip-gram and CBOW) learns embeddings by predicting words based on their local context windows, focusing on prediction tasks rather than direct co-occurrence matrix factorization.

**Answer 5:**
The most practical approach would be to use **pre-trained word embeddings** (e.g., pre-trained Word2Vec, GloVe, or FastText vectors).
*Reasoning:* Because the dataset is small, training word embeddings from scratch would likely lead to poor representations due to insufficient data. Pre-trained embeddings are trained on massive corpora, capturing general linguistic knowledge and semantic relationships, which can significantly improve the performance of the sentiment analysis model even with a small dataset. You could also consider fine-tuning these pre-trained embeddings on your specific dataset if computational resources allow.

**Answer 6:**
A classic example is the analogy:
`vector("king") - vector("man") + vector("woman") ≈ vector("queen")`
This demonstrates that the vector difference between "king" and "man" captures the concept of "royalty associated with maleness," and when "woman" is added, it shifts to the concept of "royalty associated with femaleness," resulting in a vector close to "queen." Other examples include "France" - "Paris" + "Berlin" ≈ "Germany".

**Answer 7:**
Polysemy is the phenomenon where a single word has multiple distinct meanings. For example, the word "bank" can refer to a financial institution or the edge of a river. This is a challenge for static word embeddings because they assign a **single, fixed vector representation** to each word, regardless of its context. Therefore, the embedding for "bank" will be a blend of its different meanings, and the model cannot differentiate which meaning is intended in a particular sentence. This limitation has led to the development of contextualized word embeddings (like ELMo, BERT).
