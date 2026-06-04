---
title: "Lexical Semantics, Vector Semantics, TF-IDF, Pointwise Mutual Information (PMI)"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 3: Word representations"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9e5"
status: "completed"
scrapedAt: "2026-05-20T17:25:31.227Z"
---
# NATURAL LANGUAGE PROCESSING: Module 3: Word Representations

## Topic: Lexical Semantics, Vector Semantics, TF-IDF, Pointwise Mutual Information (PMI)

### Learning Outcomes:

1.  **Understand the fundamental concepts of lexical semantics and its challenges.**
2.  **Grasp the principles of vector semantics and its advantages over traditional distributional semantics.**
3.  **Explain the TF-IDF (Term Frequency-Inverse Document Frequency) weighting scheme and its application.**
4.  **Understand the Pointwise Mutual Information (PMI) measure and its significance in capturing word associations.**
5.  **Explore the relationship between TF-IDF and PMI and their respective strengths and weaknesses.**

---

### 1. Lexical Semantics

#### Key Concepts and Definitions:

*   **Lexical Semantics:** The study of the meaning of words and the relationships between words. It's concerned with how words encode meaning in a language.
*   **Word Meaning:** Can be complex and multifaceted, involving denotation (dictionary definition) and connotation (associated feelings, ideas, or cultural implications).
*   **Semantic Relationships:**
    *   **Synonymy:** Words with similar meanings (e.g., *happy*, *joyful*, *glad*).
    *   **Antonymy:** Words with opposite meanings (e.g., *hot*, *cold*; *big*, *small*).
        *   **Gradable Antonyms:** Represent extremes on a continuum (e.g., *warm* is between *hot* and *cold*).
        *   **Complementary Antonyms:** Mutually exclusive pairs (e.g., *alive*, *dead*).
        *   **Relational Antonyms (Converse Antonyms):** Describe a relationship from opposing points of view (e.g., *buy*, *sell*; *parent*, *child*).
    *   **Hyponymy (Is-A Relationship):** A hierarchical relationship where one word is a specific type of another (e.g., *dog* is a hyponym of *animal*; *poodle* is a hyponym of *dog*). The broader term is the **hypernym**.
    *   **Meronymy (Part-Whole Relationship):** A relationship where one word is a part of another (e.g., *wheel* is a meronym of *car*; *finger* is a meronym of *hand*). The whole is the **holonym**.
    *   **Polysemy:** A single word having multiple related meanings (e.g., *bank* can refer to a financial institution or the side of a river).
    *   **Homonymy:** Words that are spelled and/or pronounced the same but have unrelated meanings (e.g., *bat* (animal) vs. *bat* (sports equipment)).
*   **Word Sense Disambiguation (WSD):** The task of identifying the correct meaning of a word in a specific context when it has multiple possible meanings.

#### Challenges in Lexical Semantics:

*   **Ambiguity:** Words can have multiple meanings (polysemy, homonymy).
*   **Context Dependence:** The meaning of a word is heavily influenced by the surrounding words and the overall context.
*   **Subjectivity:** Connotations and subjective interpretations can vary.
*   **Granularity:** Defining the precise boundaries of word meanings can be difficult.
*   **Compositionality:** Understanding how the meanings of words combine to form the meaning of phrases and sentences.

#### Example:

Consider the word "**bank**":

*   "I deposited money at the **bank**." (Financial institution - Denotation)
*   "We sat on the **bank** of the river." (River side - Denotation)

The context clearly distinguishes between the two senses. WSD aims to automate this process.

---

### 2. Vector Semantics

#### Key Concepts and Definitions:

*   **Vector Semantics (Distributional Semantics):** Represents words as vectors (numerical arrays) in a high-dimensional space. The idea is that words that appear in similar contexts should have similar meanings.
*   **Distributional Hypothesis:** "You shall know a word by the company it keeps." (J.R. Firth, 1957)
*   **Vector Space Model (VSM):** A mathematical model used to represent documents and terms as vectors in a multi-dimensional space. In vector semantics for words, the dimensions of the space correspond to features or contexts.
*   **Word Embeddings:** Dense vector representations of words, typically learned from large text corpora. Popular examples include Word2Vec, GloVe, and FastText.
*   **Semantic Similarity:** Words whose vectors are "close" in the vector space are considered semantically similar. Similarity is often measured using cosine similarity.
*   **Cosine Similarity:** A measure of similarity between two non-zero vectors of an inner product space that measures the cosine of the angle between them.
    *   Formula: $ \text{cosine similarity}(\mathbf{v}_1, \mathbf{v}_2) = \frac{\mathbf{v}_1 \cdot \mathbf{v}_2}{||\mathbf{v}_1|| \cdot ||\mathbf{v}_2||} $
    *   Ranges from -1 (perfectly dissimilar) to 1 (perfectly similar). For word vectors, it typically ranges from 0 to 1.
*   **Advantages over Traditional Lexical Semantics:**
    *   **Captures nuances of meaning:** Represents words on a continuum, not just discrete categories.
    *   **Quantifiable similarity:** Provides a numerical measure of how similar words are.
    *   **Generalization:** Can handle words not explicitly defined in a lexicon.
    *   **Discoveries:** Can reveal unexpected semantic relationships.
    *   **Scalability:** Can be learned from massive datasets.

#### How Word Vectors are Learned (High-Level):

1.  **Co-occurrence Matrix:** Build a matrix where rows represent words and columns represent context words (or documents). The cell value indicates how often a word appears in the context of another.
2.  **Dimensionality Reduction:** Apply techniques like Singular Value Decomposition (SVD) or Non-negative Matrix Factorization (NMF) to reduce the high dimensionality of the co-occurrence matrix to a lower-dimensional dense vector space.
3.  **Neural Network Models (e.g., Word2Vec):** Train shallow neural networks to predict context words given a target word (Skip-gram) or predict a target word given its context words (CBOW). The learned weights of the hidden layer become the word embeddings.

#### Example:

Consider the vectors for "king", "queen", "man", and "woman". In a well-trained vector space, you might observe relationships like:

$ \mathbf{vector}(\text{"king"}) - \mathbf{vector}(\text{"man"}) + \mathbf{vector}(\text{"woman"}) \approx \mathbf{vector}(\text{"queen"}) $

This demonstrates that vector semantics can capture analogies and relational similarities. Words like "king" and "queen" would be close in vector space, as would "man" and "woman."

---

### 3. TF-IDF (Term Frequency-Inverse Document Frequency)

#### Key Concepts and Definitions:

*   **TF-IDF:** A numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. It's a statistical measure used to evaluate the importance of a word in a document relative to the corpus.
*   **Term Frequency (TF):** Measures how often a term appears in a document. A higher TF indicates greater relevance of the term to that specific document.
    *   $ \text{TF}(t, d) = \frac{\text{Number of times term } t \text{ appears in document } d}{\text{Total number of terms in document } d} $
    *   *Variants exist, like logarithmic scaling or boolean counts.*
*   **Inverse Document Frequency (IDF):** Measures how common or rare a term is across the entire corpus. It downweights terms that appear in many documents (common words like "the", "a", "is") and upweights terms that appear in few documents (more specific or rare words).
    *   $ \text{IDF}(t, D) = \log \left( \frac{\text{Total number of documents in corpus } D}{\text{Number of documents containing term } t} \right) $
    *   *The logarithm is used to dampen the effect of very large document counts. Adding 1 to the denominator (or numerator) is common to avoid division by zero if a term is not in the corpus.*
*   **TF-IDF Score:** The product of TF and IDF.
    *   $ \text{TF-IDF}(t, d, D) = \text{TF}(t, d) \times \text{IDF}(t, D) $
*   **Application:**
    *   **Information Retrieval:** Ranking documents based on their relevance to a search query.
    *   **Text Summarization:** Identifying important keywords in a document.
    *   **Keyword Extraction:** Selecting representative words for a document.
    *   **Document Similarity:** Calculating similarity between documents.

#### Example:

Consider a corpus of two documents:

*   **Document 1:** "The cat sat on the mat."
*   **Document 2:** "The dog chased the cat."

Let's calculate TF-IDF for the word "cat" in Document 1.

*   **TF("cat", Doc 1):**
    *   Number of times "cat" appears in Doc 1 = 1
    *   Total number of terms in Doc 1 = 6
    *   $ \text{TF} = \frac{1}{6} $

*   **IDF("cat", Corpus):**
    *   Total number of documents = 2
    *   Number of documents containing "cat" = 2 (Doc 1 and Doc 2)
    *   $ \text{IDF} = \log \left( \frac{2}{2} \right) = \log(1) = 0 $

*   **TF-IDF("cat", Doc 1, Corpus):**
    *   $ \text{TF-IDF} = \frac{1}{6} \times 0 = 0 $

This result indicates that "cat" is not particularly distinctive in this small corpus because it appears in both documents.

Now, let's consider a more illustrative example with a hypothetical corpus:

*   **Document A:** "Artificial intelligence is a field of computer science."
*   **Document B:** "Machine learning is a subfield of artificial intelligence."
*   **Document C:** "Natural language processing uses machine learning techniques."

Let's find TF-IDF for "artificial intelligence" in Document A.

*   **TF("artificial intelligence", Doc A):** Assume it appears once. Total words in Doc A = 7. $ \text{TF} = \frac{1}{7} $.
*   **IDF("artificial intelligence", Corpus):**
    *   Total documents = 3
    *   Documents containing "artificial intelligence" = 2 (Doc A, Doc B)
    *   $ \text{IDF} = \log \left( \frac{3}{2} \right) \approx 0.405 $

*   **TF-IDF("artificial intelligence", Doc A, Corpus):**
    *   $ \text{TF-IDF} = \frac{1}{7} \times 0.405 \approx 0.0578 $

Now, consider the word "the":

*   **TF("the", Doc A):** Assume it appears twice. $ \text{TF} = \frac{2}{7} $.
*   **IDF("the", Corpus):**
    *   Documents containing "the" = 3 (Doc A, Doc B, Doc C)
    *   $ \text{IDF} = \log \left( \frac{3}{3} \right) = \log(1) = 0 $
*   **TF-IDF("the", Doc A, Corpus):** $ \frac{2}{7} \times 0 = 0 $.

This clearly shows how common words are downweighted to zero, while more specific terms like "artificial intelligence" get higher scores if they appear frequently in a document but not too frequently in the corpus.

#### Important Point to Remember:

*   TF-IDF assigns a weight to each word in each document, reflecting its importance within that document and the corpus. It treats words as independent features.

---

### 4. Pointwise Mutual Information (PMI)

#### Key Concepts and Definitions:

*   **Pointwise Mutual Information (PMI):** A measure of the association between two random variables. In NLP, it's used to measure the association between two words. It quantifies how much more likely two words are to co-occur than if they were independent.
*   **Intuition:** If two words co-occur more often than expected by chance, they have high PMI. If they co-occur less often, they have low or negative PMI.
*   **Formula:**
    $ \text{PMI}(w_1, w_2) = \log \left( \frac{P(w_1, w_2)}{P(w_1)P(w_2)} \right) $
    Where:
    *   $ P(w_1, w_2) $ is the probability of words $ w_1 $ and $ w_2 $ co-occurring.
    *   $ P(w_1) $ is the probability of word $ w_1 $ appearing.
    *   $ P(w_2) $ is the probability of word $ w_2 $ appearing.
*   **Estimating Probabilities from a Corpus:**
    *   $ P(w_1, w_2) \approx \frac{\text{count}(w_1, w_2)}{\text{Total number of word pairs in corpus}} $
    *   $ P(w_1) \approx \frac{\text{count}(w_1)}{\text{Total number of words in corpus}} $
    *   $ P(w_2) \approx \frac{\text{count}(w_2)}{\text{Total number of words in corpus}} $
*   **Positive PMI:** Indicates that the words co-occur more than expected by chance, suggesting a positive association.
*   **Zero PMI:** Indicates that the words co-occur exactly as expected by chance (independent).
*   **Negative PMI:** Indicates that the words co-occur less often than expected by chance.
*   **Challenges with PMI:**
    *   **Sparsity:** Words that rarely co-occur will have zero counts, leading to zero or undefined PMI values.
    *   **Zero Counts:** To address this, "shifted PMI" or adding a small constant (smoothing) is often used.
        *   $ \text{PMI}^{+}(w_1, w_2) = \max(0, \text{PMI}(w_1, w_2)) $ (Shifted PMI)
    *   **Data Sparsity:** Requires large corpora to get reliable estimates.

#### Example:

Consider a corpus: "The quick brown fox jumps over the lazy dog."

Let's look at PMI for "quick" and "fox".

*   Assume total words = 9. Total word pairs (considering adjacent pairs) = 8.
*   $ \text{count}(\text{"quick"}) = 1 $
*   $ \text{count}(\text{"fox"}) = 1 $
*   $ \text{count}(\text{"quick"}, \text{"fox"}) = 1 $ (assuming "quick fox" is a pair)

*   $ P(\text{"quick"}) = \frac{1}{9} $
*   $ P(\text{"fox"}) = \frac{1}{9} $
*   $ P(\text{"quick"}, \text{"fox"}) = \frac{1}{8} $ (or more appropriately, if we consider all pairs, $ \frac{1}{9 \times 8} $ if we are looking at probabilities of observing a word in a specific position)

Let's use a simplified probability estimation directly from counts for clarity, assuming a very large corpus.

Suppose in a large corpus:
*   $ \text{count}(\text{"quick"}) = 1000 $
*   $ \text{count}(\text{"fox"}) = 5000 $
*   $ \text{count}(\text{"quick fox"}) = 800 $ (They appear together often)
*   Total words in corpus = $ 10^9 $

*   $ P(\text{"quick"}) = \frac{1000}{10^9} $
*   $ P(\text{"fox"}) = \frac{5000}{10^9} $
*   $ P(\text{"quick"}, \text{"fox"}) = \frac{800}{10^9} $

$ \text{PMI}(\text{"quick"}, \text{"fox"}) = \log \left( \frac{\frac{800}{10^9}}{\frac{1000}{10^9} \times \frac{5000}{10^9}} \right) = \log \left( \frac{800 \times 10^9}{1000 \times 5000} \right) = \log \left( \frac{8 \times 10^{11}}{5 \times 10^6} \right) = \log(1.6 \times 10^5) $
This would be a large positive number, indicating strong association.

Now consider PMI for "quick" and "lazy":
*   $ \text{count}(\text{"quick lazy"}) = 10 $ (They appear together rarely)

$ \text{PMI}(\text{"quick"}, \text{"lazy"}) = \log \left( \frac{\frac{10}{10^9}}{\frac{1000}{10^9} \times \frac{?}{10^9}} \right) $ - This demonstrates the problem with zero counts if "lazy" doesn't appear. If "lazy" appears, say 2000 times:

$ \text{PMI}(\text{"quick"}, \text{"lazy"}) = \log \left( \frac{\frac{10}{10^9}}{\frac{1000}{10^9} \times \frac{2000}{10^9}} \right) = \log \left( \frac{10 \times 10^9}{1000 \times 2000} \right) = \log \left( \frac{10^{10}}{2 \times 10^6} \right) = \log(5 \times 10^3) $
This would also be positive but likely less than for "quick fox".

#### Important Point to Remember:

*   PMI measures the *strength of association* between two words based on their co-occurrence probability relative to their individual probabilities. It highlights how much "surprise" there is in observing two words together.

---

### 5. Relationship Between TF-IDF and PMI

#### Key Concepts:

*   **TF-IDF:** Focuses on the importance of a word *within a specific document* relative to the entire corpus. It's a **term-document** measure.
*   **PMI:** Focuses on the *association strength between two words* based on their co-occurrence across the entire corpus. It's a **word-word** measure.
*   **No Direct Equivalence:** They serve different purposes and are calculated differently. You cannot directly convert TF-IDF scores into PMI scores or vice-versa.
*   **Complementary Strengths:**
    *   TF-IDF is good for identifying keywords and ranking documents for relevance. It captures term specificity.
    *   PMI is good for identifying semantic relationships, collocations, and word associations. It captures co-occurrence patterns.
*   **Potential Connections (Indirect):**
    *   Words with high TF-IDF in documents related to a particular topic might also have high PMI with other words in that topic, but this is not guaranteed.
    *   A word that has a high TF-IDF in many documents within a specific context might also indicate a strong association (high PMI) with other words that also appear in those documents.

#### Example Analogy:

Imagine a library:

*   **TF-IDF:** Is like assessing how important a specific book is for a particular subject area within the library. A rare book on a niche topic might have high TF-IDF for that subject.
*   **PMI:** Is like assessing how often two books are borrowed together by the same person. If a book on "Quantum Physics" is often borrowed with a book on "String Theory," they have a high PMI, indicating an association.

#### Differences Summarized:

| Feature           | TF-IDF                                    | PMI                                               |
| :---------------- | :---------------------------------------- | :------------------------------------------------ |
| **Purpose**       | Word importance in a document             | Association strength between two words            |
| **Focus**         | Term-Document                             | Word-Word                                         |
| **Calculation**   | Term Frequency, Inverse Document Frequency | Probabilities of co-occurrence vs. individual occ. |
| **Context**       | Importance within a single document       | Strength of co-occurrence across corpus           |
| **Key Use Cases** | Information Retrieval, Keyword Extraction | Collocation identification, Semantic relations    |
| **Independence**  | Treats words as independent features      | Explicitly measures dependence/association        |

---

### Practice Questions and Exercises

1.  **Lexical Semantics:**
    *   Provide an example of a word that exhibits polysemy.
    *   Explain the difference between synonymy and hyponymy.

2.  **Vector Semantics:**
    *   If the cosine similarity between the word vectors for "king" and "queen" is 0.85, and the similarity between "king" and "dog" is 0.20, what does this tell you about their semantic relationship?
    *   What is the core idea behind the distributional hypothesis?

3.  **TF-IDF:**
    *   A document has 5 occurrences of the word "apple", and the document has a total of 100 words. The corpus has 1000 documents, and "apple" appears in 50 of them. Calculate the TF-IDF score for "apple" in this document. (Use $ \log_{10} $ for IDF).
    *   Why is TF-IDF useful for keyword extraction?

4.  **PMI:**
    *   Given the following probabilities in a corpus: $ P(\text{"hot"}) = 0.001 $, $ P(\text{"dog"}) = 0.005 $, $ P(\text{"hot dog"}) = 0.0002 $. Calculate the PMI for "hot dog".
    *   What problem does shifted PMI ($ \text{PMI}^{+} $) try to solve?

5.  **Relationship:**
    *   Can TF-IDF be used to measure the association between two words directly? Explain why or why not.
    *   In what scenario would you prefer using TF-IDF, and in what scenario would you prefer using PMI?

---

### Answers to Practice Questions

1.  **Lexical Semantics:**
    *   **Polysemy Example:** The word "**run**" can refer to:
        *   Moving rapidly on foot.
        *   Operating a machine.
        *   Managing a business.
        *   A tear in stockings.
    *   **Synonymy vs. Hyponymy:**
        *   **Synonymy:** Words with similar meanings (e.g., *big*, *large*). They are often interchangeable.
        *   **Hyponymy:** A hierarchical "is-a" relationship. *Dog* is a hyponym of *animal*. A *dog* "is an" *animal*, but an *animal* is not necessarily a *dog*.

2.  **Vector Semantics:**
    *   A cosine similarity of 0.85 between "king" and "queen" indicates a strong semantic similarity. A similarity of 0.20 between "king" and "dog" indicates a much weaker semantic similarity.
    *   The core idea is that words that appear in similar linguistic contexts tend to have similar meanings.

3.  **TF-IDF:**
    *   **Calculation:**
        *   $ \text{TF}(\text{"apple"}, \text{doc}) = \frac{5}{100} = 0.05 $
        *   $ \text{IDF}(\text{"apple"}, \text{corpus}) = \log_{10} \left( \frac{1000}{50} \right) = \log_{10}(20) \approx 1.301 $
        *   $ \text{TF-IDF} = 0.05 \times 1.301 = 0.06505 $
    *   TF-IDF is useful for keyword extraction because it highlights words that are frequent in a document (high TF) but relatively rare in the overall corpus (high IDF), thus distinguishing them as important and specific to that document.

4.  **PMI:**
    *   **Calculation:**
        *   $ P(\text{"hot"}) = 0.001 $
        *   $ P(\text{"dog"}) = 0.005 $
        *   $ P(\text{"hot dog"}) = 0.0002 $
        *   $ \text{PMI}(\text{"hot dog"}) = \log \left( \frac{0.0002}{0.001 \times 0.005} \right) = \log \left( \frac{0.0002}{0.000005} \right) = \log(40) \approx 1.602 $ (using natural log) or $ \log_{10}(40) \approx 1.602 $. (The base of the logarithm affects the scale but not the relative ordering).
    *   Shifted PMI ($ \text{PMI}^{+} $) tries to solve the problem of **zero counts** and **negative PMI values**. If two words never co-occur in the corpus, their PMI would be undefined or negative infinity. $ \text{PMI}^{+} $ sets these values to 0, effectively ignoring pairs that don't co-occur or have very low co-occurrence.

5.  **Relationship:**
    *   No, TF-IDF cannot be used to measure the association between two words directly. TF-IDF calculates the importance of a *single word* within a *document* relative to a corpus. It does not consider the relationship between pairs of words.
    *   **Prefer TF-IDF:** When you need to identify the most important terms in a document for tasks like search result ranking, document summarization, or keyword extraction.
    *   **Prefer PMI:** When you want to discover relationships between words, identify common collocations (words that frequently appear together, e.g., "strong coffee," "heavy rain"), or understand semantic associations.

---

### Important Points to Remember:

*   **Lexical Semantics** deals with word meaning and relationships, but often struggles with ambiguity and context.
*   **Vector Semantics** represents words as numerical vectors, capturing semantic similarity through proximity in a high-dimensional space. It's based on the distributional hypothesis.
*   **TF-IDF** is a weighting scheme that highlights the importance of a word in a document relative to a corpus, good for identifying keywords.
*   **PMI** measures the statistical association between two words, indicating how much more likely they are to co-occur than by chance, useful for finding word relationships.
*   TF-IDF and PMI serve different purposes: **TF-IDF for term importance**, **PMI for word association**.
