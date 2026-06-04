---
title: "Basic measures for Text retrieval"
subject: "DATA MINING"
module: "Module 4: Association Rule Mining "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8c2"
status: "completed"
scrapedAt: "2026-05-20T16:45:23.885Z"
---
## DATA MINING - Module 4: Association Rule Mining - Basic Measures for Text Retrieval

**Description:** This module focuses on the application of basic measures used in text retrieval, a critical component when association rule mining is applied to textual data.  We will explore how these measures help us evaluate the effectiveness of retrieving relevant documents from a large corpus. While association rule mining typically deals with transactional data, understanding text retrieval measures is crucial for extracting meaningful associations from text.

**Learning Outcomes:**

*   Understand the core concepts of Information Retrieval (IR) and its relevance to data mining.
*   Define and differentiate between Precision and Recall.
*   Define and understand the F-measure and its variations.
*   Explain the concept of Mean Average Precision (MAP).
*   Describe how these measures can be applied in the context of association rule mining with text data.
*   Understand the limitations of these measures.

### 1. Core Concepts of Information Retrieval (IR)

*   **Definition:** Information Retrieval (IR) is the process of obtaining information resources that are relevant to an information need from a collection of information resources.  The search can be based on full-text or other content-based indexing.
*   **Relevance to Data Mining:**  IR provides the foundation for finding the initial dataset when the data source is a text corpus. Data mining techniques, including association rule mining, can then be applied to the retrieved, and hopefully relevant, data.
*   **Key Components of IR Systems:**
    *   **Document Collection:** The set of documents to be searched (e.g., web pages, news articles, scientific papers).
    *   **Query:** The user's information need expressed as a search term or phrase.
    *   **Ranking Function:**  The algorithm used to determine the relevance of a document to a query. This is where the measures we'll discuss play a vital role.
    *   **Retrieval Model:** The underlying theoretical framework for how documents and queries are represented and compared (e.g., Boolean model, vector space model).
*   **Goal of IR:** To retrieve as many *relevant* documents as possible while retrieving as few *irrelevant* documents as possible.

### 2. Precision and Recall

*   **Introduction:** Precision and recall are two fundamental measures used to evaluate the effectiveness of information retrieval systems.  They provide a way to quantify the trade-off between retrieving all relevant documents and avoiding the retrieval of irrelevant ones.

*   **Definitions:**
    *   **Precision:** The proportion of retrieved documents that are relevant. In other words, how accurate are the retrieved documents?
        *   Formula: `Precision = |Relevant Documents ∩ Retrieved Documents| / |Retrieved Documents|`
    *   **Recall:** The proportion of relevant documents that are retrieved. In other words, how many of the relevant documents did the system find?
        *   Formula: `Recall = |Relevant Documents ∩ Retrieved Documents| / |Relevant Documents|`

*   **Venn Diagram Illustration:**

    ```
                                     Total Documents
                        _________________________________________________
                       |                                                 |
                       |  Relevant Documents  | Irrelevant Documents |
                       |_______________________|________________________|
                                  |                 |
                                  |                 |
         Retrieved Documents ------->|        A        |       B         |
         (System Output)        |                 |                 |
                                  |                 |                 |
                       |_______________________|________________________|

           A =  Number of relevant documents retrieved
           B =  Number of irrelevant documents retrieved
           C =  Number of relevant documents NOT retrieved
    ```

    *   Precision = A / (A + B)
    *   Recall = A / (A + C)

*   **Example:**

    Suppose you search for "Data Mining Books" and the search engine returns 20 results. You manually check these results and find that 12 of them are actually relevant books on data mining.  You also know that there are a total of 30 data mining books in the entire collection.

    *   Retrieved Documents: 20
    *   Relevant & Retrieved Documents: 12
    *   Total Relevant Documents: 30

    *   Precision = 12 / 20 = 0.6 (60%)
    *   Recall = 12 / 30 = 0.4 (40%)

    Interpretation: The system retrieved 60% of the documents it showed were relevant, but it only retrieved 40% of all the relevant documents in the collection.

*   **Trade-off between Precision and Recall:**  Often, there's an inverse relationship between precision and recall.  Improving one often leads to a decrease in the other.
    *   A system can achieve perfect recall (100%) by retrieving *all* documents in the collection. However, this will likely result in very low precision because many irrelevant documents will also be retrieved.
    *   A system can achieve perfect precision (100%) by retrieving only documents that are definitely relevant. However, this might result in very low recall because many relevant documents might be missed.

### 3. F-measure

*   **Introduction:** The F-measure (also known as the F1-score or F-score) provides a single metric that balances precision and recall. It's the harmonic mean of precision and recall.

*   **Definition:** The F-measure is a measure of a test's accuracy. It considers both the precision (p) and the recall (r) of the test to compute the score: p is the number of correct positive results divided by the number of all positive results returned by the classifier, and r is the number of correct positive results divided by the number of all relevant samples (all samples that should have been identified as positive). The F1 score is the harmonic mean of the precision and recall.

*   **Formula:** `F-measure = 2 * (Precision * Recall) / (Precision + Recall)`

*   **Example (Using the previous example):**

    *   Precision = 0.6
    *   Recall = 0.4

    *   F-measure = 2 * (0.6 * 0.4) / (0.6 + 0.4) = 2 * 0.24 / 1 = 0.48

*   **Interpreting the F-measure:** The F-measure ranges from 0 to 1, with higher values indicating better performance.  A value of 1 represents perfect precision and recall. In the example above, an F-measure of 0.48 indicates a moderately effective retrieval system.

*   **Variations of the F-measure (Fβ-measure):**

    The standard F-measure gives equal weight to precision and recall.  The Fβ-measure allows you to weight precision and recall differently.

    *   Formula: `Fβ = (1 + β^2) * (Precision * Recall) / (β^2 * Precision + Recall)`
        *   If β > 1, recall is weighted more heavily than precision.
        *   If β < 1, precision is weighted more heavily than recall.
        *   If β = 1, the formula simplifies to the standard F-measure.

    *   **Example:** If you want to emphasize recall because missing a relevant document is more costly than retrieving an irrelevant one, you might use a β value of 2.  If you want to emphasize precision because retrieving irrelevant documents wastes a lot of the user's time, you might use a β value of 0.5.

### 4. Mean Average Precision (MAP)

*   **Introduction:** Mean Average Precision (MAP) provides a single-figure measure of quality across recall levels. It's especially useful when evaluating ranked retrieval results.

*   **Definition:** MAP is the average of the average precision scores for each query in a set of queries.  To understand MAP, we need to define *Average Precision (AP)* first.

    *   **Average Precision (AP):** For a single query, AP is the average of the precision scores at each relevant document retrieved.  The precision score at a relevant document is 0 if the document is not retrieved.  Then the average is computed over the number of relevant documents for a given query.

    *   **MAP:** The mean of the AP scores over all queries.

*   **Formula:**

    *   `AP = (Σ Precision@k * rel(k)) / number of relevant documents`
        *   `Precision@k` is the precision at rank k.
        *   `rel(k)` is an indicator function that equals 1 if the document at rank k is relevant and 0 otherwise.
        *   The summation is over all documents retrieved.
    *   `MAP = (Σ AP_q) / number of queries`
        *   `AP_q` is the average precision for query q.
        *   The summation is over all queries.

*   **Example:**

    Suppose you have two queries and the following retrieval results (R = Relevant, N = Not Relevant):

    *   Query 1: R, N, R, R, N, N, N, R, N, N (4 relevant documents retrieved out of 4 total relevant in the collection)
    *   Query 2: N, R, N, N, R, N, N, N, R, N (3 relevant documents retrieved out of 4 total relevant in the collection)

    1.  **Calculate Precision@k for Query 1:**
        *   Rank 1 (R): Precision@1 = 1/1 = 1
        *   Rank 2 (N): Precision@2 = 1/2 = 0.5 (but rel(2) = 0 since the document is not relevant)
        *   Rank 3 (R): Precision@3 = 2/3 = 0.667
        *   Rank 4 (R): Precision@4 = 3/4 = 0.75
        *   Rank 5 (N): Precision@5 = 3/5 = 0.6 (but rel(5) = 0)
        *   Rank 6 (N): Precision@6 = 3/6 = 0.5 (but rel(6) = 0)
        *   Rank 7 (N): Precision@7 = 3/7 = 0.429 (but rel(7) = 0)
        *   Rank 8 (R): Precision@8 = 4/8 = 0.5
        *   Rank 9 (N): Precision@9 = 4/9 = 0.444 (but rel(9) = 0)
        *   Rank 10 (N): Precision@10 = 4/10 = 0.4 (but rel(10) = 0)

    2.  **Calculate AP for Query 1:**
        *   AP = ( (1 * 1) + (0.667 * 1) + (0.75 * 1) + (0.5 * 1) ) / 4  = (1 + 0.667 + 0.75 + 0.5) / 4 = 2.917/4 = 0.729

    3.  **Calculate Precision@k for Query 2:**
        *   Rank 1 (N): Precision@1 = 0/1 = 0 (but rel(1) = 0)
        *   Rank 2 (R): Precision@2 = 1/2 = 0.5
        *   Rank 3 (N): Precision@3 = 1/3 = 0.33 (but rel(3) = 0)
        *   Rank 4 (N): Precision@4 = 1/4 = 0.25 (but rel(4) = 0)
        *   Rank 5 (R): Precision@5 = 2/5 = 0.4
        *   Rank 6 (N): Precision@6 = 2/6 = 0.33 (but rel(6) = 0)
        *   Rank 7 (N): Precision@7 = 2/7 = 0.286 (but rel(7) = 0)
        *   Rank 8 (N): Precision@8 = 2/8 = 0.25 (but rel(8) = 0)
        *   Rank 9 (R): Precision@9 = 3/9 = 0.33
        *   Rank 10 (N): Precision@10 = 3/10 = 0.3 (but rel(10) = 0)

    4.  **Calculate AP for Query 2:**
        *   AP = ( (0.5 * 1) + (0.4 * 1) + (0.33 * 1) ) / 4 = (0.5 + 0.4 + 0.33) / 4 = 1.23/4 = 0.308

    5.  **Calculate MAP:**
        *   MAP = (0.729 + 0.308) / 2 = 0.5185

    Interpretation:  A MAP of 0.5185 indicates that, on average, the system retrieves relevant documents earlier in the ranked list than irrelevant ones, but there's still room for improvement.

*   **Advantages of MAP:**

    *   Considers the rank of the retrieved documents, giving higher scores to relevant documents that appear higher in the ranking.
    *   Provides a single number for overall system performance.
    *   Widely used in IR evaluation.

### 5. Application in Association Rule Mining with Text Data

*   **Pre-processing Text Data:** Before applying association rule mining, text data needs to be pre-processed:
    *   **Tokenization:** Breaking down the text into individual words or terms.
    *   **Stop Word Removal:** Removing common words (e.g., "the," "a," "is") that don't carry much meaning.
    *   **Stemming/Lemmatization:** Reducing words to their root form (e.g., "running" -> "run").
    *   **TF-IDF (Term Frequency-Inverse Document Frequency):**  A weighting scheme to reflect the importance of a term in a document relative to the entire collection.  Documents can be converted to a numerical vector representation using TF-IDF values, with each vector element representing a term in the corpus.
*   **Association Rule Mining:**  Association rules can then be mined from the pre-processed text data.  For example, an association rule might be: "If a document contains 'data mining' and 'classification', then it is likely to also contain 'machine learning'."
*   **Using Retrieval Measures to Evaluate Rules:**
    *   Precision and recall (or MAP) can be used to evaluate the effectiveness of the discovered association rules.  For example, if a rule predicts that documents containing certain keywords are relevant to a particular topic, the precision and recall of this prediction can be assessed.
    *   Consider using the antecedent of the association rule as a query and evaluate the retrieval results for documents containing the consequent.

*   **Example:**

    Suppose you are mining association rules from a collection of research papers. One rule you discover is:

    `{Information Retrieval, Text Mining} => {Machine Learning}`

    To evaluate this rule:

    1.  Use "{Information Retrieval, Text Mining}" as a query to retrieve documents from your corpus.
    2.  Calculate the precision and recall of the retrieved documents with respect to the presence of "Machine Learning".  How many of the retrieved documents actually mention "Machine Learning"?  How many documents mentioning "Machine Learning" were retrieved by the query?
    3.  A high precision and recall would indicate that the association rule is a good predictor.

### 6. Limitations of these Measures

*   **Binary Relevance Assumption:**  Precision and recall (in their basic forms) assume that a document is either relevant or irrelevant.  In reality, relevance is often a matter of degree.
*   **User-Specific Relevance:** Relevance is subjective and depends on the user's information need.  What is relevant to one user might not be relevant to another.
*   **Difficulty in Assessing Relevance:**  Accurately assessing the relevance of documents requires human judgment, which can be time-consuming and expensive, especially for large collections.
*   **Ignoring the Cost of Retrieval:** These measures don't account for the cost of retrieving documents.  For example, retrieving documents from a local database is much faster than retrieving them from the web.
*   **MAP sensitive to document set size:** MAP scores can be difficult to compare across document sets of very different sizes.

### 7. Important Points to Remember

*   Precision and recall are inversely related.
*   The F-measure provides a single metric that balances precision and recall.
*   MAP is useful for evaluating ranked retrieval results.
*   These measures are essential for evaluating information retrieval systems and association rule mining applied to textual data.
*   These are just basic measures, and there are other more sophisticated measures available.
*   Understanding these limitations is crucial for interpreting the results and choosing the right evaluation metrics.

### 8. Practice Questions/Exercises

**Question 1:**

A search engine retrieves 50 documents in response to a query.  You manually examine the results and find that 30 of the retrieved documents are relevant.  You know that there are a total of 60 relevant documents in the entire collection.

a)  What is the precision of the search engine for this query?
b)  What is the recall of the search engine for this query?
c)  What is the F1-score?

**Answer:**

a) Precision = 30 / 50 = 0.6
b) Recall = 30 / 60 = 0.5
c) F1-score = 2 * (0.6 * 0.5) / (0.6 + 0.5) = 2 * 0.3 / 1.1 = 0.6 / 1.1 = 0.545

**Question 2:**

Explain the trade-off between precision and recall.  Give an example of a scenario where you might prioritize precision over recall, and a scenario where you might prioritize recall over precision.

**Answer:**

The trade-off between precision and recall is that increasing one often decreases the other.

*   **Prioritize Precision:**  A scenario where precision is more important is in medical diagnosis.  You want to be very sure about the diagnosis before prescribing treatment.  A false positive (high recall, low precision) could lead to unnecessary and potentially harmful treatment.
*   **Prioritize Recall:**  A scenario where recall is more important is in legal e-discovery.  You want to ensure that you find all relevant documents, even if it means retrieving some irrelevant ones.  Missing a relevant document could have serious legal consequences.

**Question 3:**

You have two different information retrieval systems.  For a set of queries, their MAP scores are as follows:

*   System A: MAP = 0.75
*   System B: MAP = 0.60

Which system is generally better? Explain why.

**Answer:**

System A is generally better.  MAP (Mean Average Precision) provides a single-figure measure of the average precision across a set of queries, taking into account the ranking of relevant documents. A higher MAP score indicates that, on average, the system retrieves relevant documents earlier in the ranked list than irrelevant documents.  Therefore, System A is likely to provide a better user experience.

**Question 4:**

Describe how precision and recall can be used to evaluate an association rule mined from text data.

**Answer:**

To evaluate an association rule mined from text data using precision and recall:

1.  Treat the antecedent (left-hand side) of the association rule as a query.
2.  Retrieve documents from the corpus using this query.
3.  Examine the retrieved documents to see if they contain the consequent (right-hand side) of the rule.
4.  Calculate precision:  The proportion of retrieved documents containing the consequent.  This indicates how reliable the rule is at predicting the presence of the consequent.
5.  Calculate recall: The proportion of all documents containing the consequent that were retrieved by the query. This indicates how well the rule captures documents related to the consequent.

**Question 5:**

What are some limitations of using basic precision and recall for evaluating information retrieval systems?

**Answer:**

Some limitations include:

*   **Binary relevance assumption:** It assumes documents are either fully relevant or irrelevant, ignoring degrees of relevance.
*   **Subjectivity of relevance:** Relevance is user-dependent and can vary greatly.
*   **Cost of relevance assessment:**  Manual assessment is time-consuming and expensive.
*   **Ignoring retrieval costs:** Doesn't consider the time or resources needed to retrieve the documents.
