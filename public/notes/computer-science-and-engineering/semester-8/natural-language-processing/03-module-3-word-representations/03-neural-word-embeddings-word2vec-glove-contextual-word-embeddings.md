---
title: "Neural Word embeddings - Word2vec, GloVe, Contextual Word Embeddings"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 3: Word representations"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9e6"
status: "completed"
scrapedAt: "2026-05-20T17:25:31.918Z"
---
# Natural Language Processing: Module 3 - Word Representations

## Topic: Neural Word Embeddings - Word2Vec, GloVe, Contextual Word Embeddings

---

### **Learning Outcomes:**

*   **Understand the limitations of traditional word representations (e.g., One-Hot Encoding).**
*   **Explain the core principles behind neural word embeddings.**
*   **Describe the architectures and training methodologies of Word2Vec (Skip-gram and CBOW).**
*   **Explain the GloVe (Global Vectors for Word Representation) model and its advantages.**
*   **Understand the concept of contextual word embeddings and their benefits.**
*   **Discuss popular contextual word embedding models (e.g., ELMo, BERT).**
*   **Identify use cases and applications of neural word embeddings.**

---

### **1. Limitations of Traditional Word Representations**

Traditional methods for representing words often struggle to capture semantic relationships.

*   **One-Hot Encoding:**
    *   **Definition:** Each word is represented by a unique vector with a single '1' at its corresponding index and '0's elsewhere.
    *   **Example:**
        *   "cat" -> `[0, 0, 1, 0, 0, ...]`
        *   "dog" -> `[0, 1, 0, 0, 0, ...]`
    *   **Limitations:**
        *   **High Dimensionality:** Vectors are as long as the vocabulary size, leading to very sparse and large vectors.
        *   **No Semantic Similarity:** All words are orthogonal (dot product is 0), meaning no inherent relationship is captured between "cat" and "dog" (e.g., they are both animals).
        *   **No Contextual Information:** The representation is independent of the word's usage in a sentence.

---

### **2. Core Principles Behind Neural Word Embeddings**

Neural word embeddings aim to represent words as dense, low-dimensional vectors in a continuous vector space. The key idea is that words with similar meanings or that appear in similar contexts should have similar vector representations.

*   **Distributional Hypothesis:** "You shall know a word by the company it keeps." (J.R. Firth)
    *   Words that appear in similar contexts tend to have similar meanings.
    *   Neural embedding models learn these relationships by observing word co-occurrences.
*   **Dense Vector Representations:**
    *   Unlike sparse One-Hot vectors, embeddings are dense, meaning most values are non-zero.
    *   They are typically low-dimensional (e.g., 50-300 dimensions), making them computationally efficient.
*   **Semantic Similarity:**
    *   Words with similar meanings are mapped to nearby points in the vector space.
    *   This allows for analogies (e.g., `vector("king") - vector("man") + vector("woman")` is close to `vector("queen")`).
*   **Learning through Prediction:**
    *   Most neural embedding models are trained by predicting a word based on its context, or predicting context words based on a target word. This is a form of self-supervised learning.

---

### **3. Word2Vec**

Word2Vec is a popular neural network-based technique for learning word embeddings, developed by Google. It offers two main architectures: Continuous Bag-of-Words (CBOW) and Skip-gram.

#### **3.1. Continuous Bag-of-Words (CBOW)**

*   **Goal:** Predict the target word given its surrounding context words.
*   **Architecture:**
    *   **Input Layer:** One-hot encoded context words.
    *   **Projection Layer (Hidden Layer):** A shared weight matrix $W_{in}$ (input-to-hidden) projects the one-hot encoded context words into dense vectors. These vectors are then averaged.
    *   **Output Layer:** Another weight matrix $W_{out}$ (hidden-to-output) is used to predict the target word's probability distribution.
*   **Training Process:**
    1.  Take a window of context words surrounding a target word.
    2.  Feed the one-hot representations of context words into the network.
    3.  Average the resulting dense vectors from the projection layer.
    4.  The averaged vector is then fed through the output layer.
    5.  The network predicts the probability of each word in the vocabulary being the target word using a softmax function.
    6.  The model is trained to maximize the probability of the actual target word.
*   **Analogy:** "The cat sat on the ____." (predict "mat")
*   **Strengths:** Faster to train, good for frequent words.
*   **Weaknesses:** Can be less effective for rare words.

#### **3.2. Skip-gram**

*   **Goal:** Predict the surrounding context words given a target word.
*   **Architecture:**
    *   **Input Layer:** One-hot encoded target word.
    *   **Projection Layer (Hidden Layer):** A weight matrix $W_{in}$ projects the target word into a dense vector.
    *   **Output Layer:** A weight matrix $W_{out}$ is used to predict the probability distribution of context words. The model predicts multiple context words for each input word.
*   **Training Process:**
    1.  Take a target word.
    2.  Feed its one-hot representation into the network.
    3.  The network predicts the probability of each word in the vocabulary being a context word for the target word.
    4.  The model is trained to maximize the probability of the actual context words.
*   **Analogy:** Given "mat", predict "cat", "sat", "on", "the".
*   **Strengths:** Works well with small datasets, effective at representing rare words and learning semantic relationships.
*   **Weaknesses:** Slower to train than CBOW.

#### **3.3. Word2Vec Training Improvements**

*   **Negative Sampling:** Instead of updating all other words in the vocabulary (which is computationally expensive with softmax), negative sampling selects a small number of negative samples (words that are *not* the target) and trains the model to distinguish the positive (target) word from these negative samples. This significantly speeds up training.
*   **Hierarchical Softmax:** Uses a Huffman tree to represent the output layer, making predictions more efficient than a standard softmax for large vocabularies.

#### **3.4. Word2Vec Key Concepts & Properties**

*   **Vector Arithmetic:** Word vectors exhibit linear substructures that capture semantic relationships.
    *   `vector("man") - vector("woman") + vector("king") ≈ vector("queen")`
    *   `vector("Paris") - vector("France") + vector("Germany") ≈ vector("Berlin")`
*   **Dimensionality Reduction:** Transforms sparse, high-dimensional representations into dense, low-dimensional ones.

---

### **4. GloVe (Global Vectors for Word Representation)**

GloVe is another prominent model for learning word embeddings, developed at Stanford. Unlike Word2Vec, which is purely based on local context windows, GloVe leverages global corpus statistics.

*   **Core Idea:** Word embeddings are learned by factorizing a matrix of aggregated global word-word co-occurrence statistics.
*   **Co-occurrence Matrix:**
    *   **Definition:** A matrix $X$, where $X_{ij}$ represents the number of times word $j$ appears in the context of word $i$.
    *   **Context Definition:** The "context" can be defined by a window of words around the target word. The weight of co-occurrence often decreases with distance.
*   **Training Objective:** The model aims to learn word vectors $w_i$ and bias terms $b_i$ such that their dot product, plus bias terms, reconstructs the logarithm of their co-occurrence counts.
    *   Objective: $\sum_{i,j} f(X_{ij})(w_i^T w_j + b_i + b_j - \log X_{ij})^2$
    *   $f(X_{ij})$ is a weighting function that gives less weight to very frequent co-occurrences (e.g., "the" and "a") and to very rare co-occurrences.
*   **Advantages:**
    *   **Leverages Global Statistics:** Captures richer semantic meaning by considering the entire corpus, not just local windows.
    *   **Combines Local and Global Approaches:** Aims to achieve the best of both worlds.
    *   **Analogy:** Similar to Word2Vec, GloVe vectors also exhibit meaningful linear relationships.
*   **Training:** GloVe can be trained efficiently on large corpora.

---

### **5. Contextual Word Embeddings**

Traditional word embeddings (Word2Vec, GloVe) generate a single, static vector for each word, regardless of its context. This fails to capture **polysemy** (words with multiple meanings). Contextual word embeddings address this by generating embeddings that are dependent on the surrounding words in a sentence.

*   **The Problem of Polysemy:**
    *   Example: "The **bank** of the river was steep." vs. "I need to go to the **bank** to deposit money."
    *   In static embeddings, "bank" has the same vector in both cases, failing to distinguish between the two meanings.

*   **How they work:**
    *   Contextual embedding models are typically built on top of powerful sequence models, most notably **Recurrent Neural Networks (RNNs)** or **Transformers**.
    *   These models process the entire sentence (or a significant portion of it) and generate embeddings for each word that are influenced by the other words in the sequence.

#### **5.1. ELMo (Embeddings from Language Models)**

*   **Architecture:** Uses a deep, bidirectional LSTM (biLSTM) trained as a language model.
    *   **Bidirectional:** It processes the sentence from left-to-right and right-to-left independently.
    *   **Deep:** It uses multiple layers of LSTMs.
*   **Embedding Generation:**
    *   For each word, ELMo generates an embedding that is a *linear combination* of the representations from each layer of the biLSTM.
    *   The coefficients of this linear combination are *learned* for downstream tasks, allowing the model to pick the most relevant contextual representation.
*   **Key Features:**
    *   **Context-Dependent:** Generates different embeddings for the same word in different contexts.
    *   **Deep Representations:** Captures different levels of linguistic information (e.g., syntax from lower layers, semantics from higher layers).
    *   **Task-Specific Weights:** The weighted sum of layer representations is adapted to the specific NLP task.

#### **5.2. BERT (Bidirectional Encoder Representations from Transformers)**

*   **Architecture:** Based on the **Transformer** architecture, specifically the **Encoder** part.
    *   **Self-Attention Mechanism:** Allows BERT to weigh the importance of different words in the input sequence when generating representations for each word. This is crucial for capturing long-range dependencies.
    *   **Truly Bidirectional:** Unlike ELMo's independent left-to-right and right-to-left LSTMs, BERT uses a masked language model objective to learn a deeply bidirectional representation.
*   **Training Objectives:**
    1.  **Masked Language Model (MLM):** Randomly masks out a percentage of input tokens, and the model is trained to predict the original masked tokens based on the surrounding unmasked tokens.
    2.  **Next Sentence Prediction (NSP):** The model is given two sentences and trained to predict whether the second sentence is the actual next sentence in the original corpus.
*   **Embedding Generation:**
    *   BERT produces contextual embeddings for each token as the output of its Transformer encoder layers.
    *   These embeddings are often used directly or further fine-tuned for specific downstream tasks.
*   **Key Features:**
    *   **State-of-the-Art Performance:** Achieved breakthrough results across many NLP benchmarks.
    *   **Deeply Bidirectional Context:** Learns rich representations by considering both left and right context simultaneously.
    *   **Transfer Learning:** Pre-trained BERT models can be fine-tuned on smaller datasets for various NLP tasks with remarkable success.
    *   **Tokenization:** Uses WordPiece tokenization, which can handle out-of-vocabulary words by breaking them into subword units.

#### **5.3. Other Contextual Models:**

*   **GPT (Generative Pre-trained Transformer) series:** While primarily a generative model, its Transformer decoder architecture also produces contextual embeddings. GPT-2 and GPT-3 are notable examples. They are typically unidirectional (left-to-right).
*   **RoBERTa, XLNet, ALBERT:** These are variations and improvements upon BERT, offering different training strategies or architectural modifications to further enhance performance and efficiency.

---

### **6. Use Cases and Applications of Neural Word Embeddings**

Neural word embeddings have revolutionized NLP and are fundamental to many modern applications.

*   **Sentiment Analysis:** Understanding the emotional tone of text.
*   **Text Classification:** Categorizing documents into predefined classes (e.g., spam detection, topic labeling).
*   **Machine Translation:** Translating text from one language to another.
*   **Question Answering:** Finding answers to questions within a given text.
*   **Named Entity Recognition (NER):** Identifying and classifying named entities (e.g., persons, organizations, locations).
*   **Text Summarization:** Generating concise summaries of longer texts.
*   **Information Retrieval:** Improving search engine results.
*   **Word Similarity and Analogy Tasks:** Evaluating the quality of embeddings.
*   **Chatbots and Virtual Assistants:** Understanding user queries and generating natural responses.

---

### **Practice Questions & Exercises**

**Question 1: Multiple Choice**

Which of the following is a primary limitation of One-Hot Encoding for word representation?

a) High dimensionality and sparsity
b) Inability to capture semantic similarity
c) Lack of contextual information
d) All of the above

**Question 2: True or False**

The CBOW model in Word2Vec predicts context words given a target word.

**Question 3: Short Answer**

Explain the core idea behind the distributional hypothesis and how it relates to neural word embeddings.

**Question 4: Comparison**

Briefly compare and contrast Word2Vec (Skip-gram) and GloVe in terms of their training objectives and the data they leverage.

**Question 5: Scenario**

Consider the word "run." How would a static word embedding model represent "run" differently than a contextual word embedding model like BERT in the following sentences?

*   "He likes to **run** marathons." (verb)
*   "She took a **run** in the park." (noun)

**Question 6: Conceptual Understanding**

What problem do contextual word embeddings solve that static embeddings (like Word2Vec and GloVe) do not?

---

### **Answers to Practice Questions**

**Answer 1:** d) All of the above

*   One-hot encoding creates very large, sparse vectors, making them inefficient.
*   All words are orthogonal, meaning no semantic similarity is captured.
*   The representation is fixed and doesn't change based on context.

**Answer 2:** False. The Skip-gram model predicts context words given a target word. CBOW predicts the target word given context words.

**Answer 3:** The distributional hypothesis states that words appearing in similar contexts tend to have similar meanings. Neural word embeddings learn these contextual relationships by analyzing word co-occurrences in a large corpus. By mapping words with similar neighboring words to nearby points in a vector space, these embeddings implicitly capture semantic similarity.

**Answer 4:**

*   **Word2Vec (Skip-gram):** Focuses on **local context windows**. It trains by predicting the surrounding context words given a target word, optimizing a neural network's weights to achieve this prediction task. It primarily learns from the immediate neighbors of a word.
*   **GloVe:** Leverages **global corpus statistics**. It factorizes a word-word co-occurrence matrix, aiming to reconstruct the logarithm of these counts using word vectors. It considers the overall frequency of co-occurrences across the entire corpus, which can provide a more global understanding of word relationships.

**Answer 5:**

*   **Static Word Embedding (e.g., Word2Vec, GloVe):** Both sentences would likely result in the *same* vector representation for "run." The model assigns a single vector to each word in its vocabulary, irrespective of its grammatical function or meaning in a specific sentence.
*   **Contextual Word Embedding (e.g., BERT):** BERT would generate *different* vector representations for "run" in each sentence.
    *   In "He likes to **run** marathons," the embedding for "run" would capture its meaning as a physical activity (a verb).
    *   In "She took a **run** in the park," the embedding for "run" would capture its meaning as a noun referring to an instance or period of running.
    This difference in embeddings reflects the model's ability to understand and represent the word's meaning based on its surrounding words.

**Answer 6:** Contextual word embeddings solve the problem of **polysemy** (words having multiple meanings) and **homographs** (words spelled the same but with different meanings or pronunciations). Static embeddings assign a single vector to a word, failing to differentiate between its various senses. Contextual embeddings, by processing the entire sentence, generate dynamic representations that capture the specific meaning of a word as used in that particular context.

---

### **Important Points to Remember**

*   **Embeddings are Learned, Not Hand-Coded:** They are derived from data.
*   **Dense vs. Sparse:** Embeddings are dense, low-dimensional, and capture relationships, unlike sparse, high-dimensional One-Hot vectors.
*   **Distributional Hypothesis is Key:** "You shall know a word by the company it keeps."
*   **Word2Vec:** Two models (CBOW, Skip-gram), fast training with Negative Sampling.
*   **GloVe:** Leverages global co-occurrence statistics for training.
*   **Static Embeddings (Word2Vec, GloVe):** One vector per word.
*   **Contextual Embeddings (ELMo, BERT):** Dynamic vectors that depend on sentence context, crucial for handling polysemy.
*   **Transformers (BERT):** Self-attention mechanism is powerful for capturing long-range dependencies.
*   **Transfer Learning:** Pre-trained contextual models (like BERT) are highly effective for fine-tuning on downstream NLP tasks.
