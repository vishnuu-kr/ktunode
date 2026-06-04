---
title: "Dependency Parsing - Transition-Based Dependency Parsing, Graph-Based Dependency Parsing, Evaluation"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 2: Annotating Linguistic Structures"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9e2"
status: "completed"
scrapedAt: "2026-05-20T17:25:29.834Z"
---
# Natural Language Processing: Module 2 - Annotating Linguistic Structures

## Topic: Dependency Parsing

### 1. Introduction to Dependency Parsing

Dependency parsing is the process of analyzing the grammatical structure of a sentence by identifying the relationships between words. These relationships are represented as a directed graph where words are nodes, and grammatical dependencies (e.g., subject, object, modifier) are directed edges.

**Key Concepts:**

*   **Dependency:** A directed grammatical relationship between two words, a head (governor) and a dependent (modifier).
*   **Head (Governor):** The word that governs another word.
*   **Dependent (Modifier):** The word that is governed by another word.
*   **Dependency Tree:** A directed tree where the edges represent dependency relations and the nodes represent words. The root of the tree is typically the main verb or a special "ROOT" symbol.
*   **Types of Dependencies:** Common dependency labels include:
    *   `nsubj` (nominal subject)
    *   `obj` (direct object)
    *   `iobj` (indirect object)
    *   `amod` (adjectival modifier)
    *   `advmod` (adverbial modifier)
    *   `det` (determiner)
    *   `cop` (copula, e.g., "is", "are")
    *   `aux` (auxiliary verb)
    *   `punct` (punctuation)
    *   `root` (the main predicate of the sentence)

**Example:**

Sentence: "The cat sat on the mat."

Simplified Dependency Representation:

*   `sat` (root)
    *   `cat` (nsubj)
        *   `The` (det)
    *   `on` (prep)
        *   `mat` (pobj)
            *   `the` (det)

### 2. Transition-Based Dependency Parsing

Transition-based dependency parsers process the input sentence word by word and make a sequence of "transitions" to build the dependency tree. They maintain a state consisting of an **agenda** (a list of words yet to be processed) and a **buffer** (a stack of words already processed that might have dependencies attached).

**Key Concepts:**

*   **State:** The current configuration of the parser, typically represented by:
    *   **Stack:** A list of words that have been processed and are candidates for being heads.
    *   **Buffer:** A list of words from the input sentence that have not yet been processed.
    *   **Dependencies:** The set of dependency arcs built so far.
*   **Transitions:** Actions that change the parser's state. Common transitions include:
    *   **SHIFT:** Moves the first word from the buffer onto the stack.
    *   **LEFT-ARC (or SHIFT-LEFT):** Creates a dependency from the top word on the stack (head) to the word below it on the stack (dependent). This typically attaches a modifier to its head.
    *   **RIGHT-ARC (or SHIFT-RIGHT):** Creates a dependency from the word below the top word on the stack (head) to the top word on the stack (dependent). This typically attaches a head to its modifier.
    *   **REDUCE:** Removes the top word from the stack (used in some older or specific models).

**How it Works:**

1.  **Initialization:** The stack contains a special `LEFT-WALL` symbol. The buffer contains all words of the input sentence.
2.  **Iteration:** The parser repeatedly applies transitions until the buffer is empty and only the `LEFT-WALL` and the root word remain on the stack.
3.  **Decision:** At each step, a classifier (often a machine learning model like a neural network) predicts the next optimal transition based on the current state.

**Example (Simplified):**

Sentence: "big cat"

Initial State:
*   Stack: [`LEFT-WALL`]
*   Buffer: [`big`, `cat`]
*   Dependencies: {}

1.  **SHIFT:** Move `big` to stack.
    *   Stack: [`LEFT-WALL`, `big`]
    *   Buffer: [`cat`]
    *   Dependencies: {}
2.  **SHIFT:** Move `cat` to stack.
    *   Stack: [`LEFT-WALL`, `big`, `cat`]
    *   Buffer: []
    *   Dependencies: {}
3.  **LEFT-ARC (big -> cat):** Attach `big` as a modifier (`amod`) to `cat`. `big` is popped.
    *   Stack: [`LEFT-WALL`, `big`]
    *   Buffer: []
    *   Dependencies: {(`cat`, `big`, `amod`)}
4.  **RIGHT-ARC (cat <- big):** This example is often simplified where the LEFT-ARC implies the dependency. Let's assume `cat` becomes root.

A more common transition sequence for "big cat" where `cat` is the head:

Initial State:
*   Stack: [`LEFT-WALL`]
*   Buffer: [`big`, `cat`]
*   Dependencies: {}

1.  **SHIFT:** Move `big` to stack.
    *   Stack: [`LEFT-WALL`, `big`]
    *   Buffer: [`cat`]
    *   Dependencies: {}
2.  **SHIFT:** Move `cat` to stack.
    *   Stack: [`LEFT-WALL`, `big`, `cat`]
    *   Buffer: []
    *   Dependencies: {}
3.  **LEFT-ARC (`cat` is head, `big` is dependent):** Create `cat` -> `big` (amod). `big` is popped.
    *   Stack: [`LEFT-WALL`, `cat`]
    *   Buffer: []
    *   Dependencies: {(`cat`, `big`, `amod`)}
4.  **RIGHT-ARC (`cat` is head, `big` is dependent):** This is often handled by the LEFT-ARC direction. A common convention is that the arc points from head to dependent. So if `cat` is head and `big` is dependent, the arc is `cat` -> `big`. This transition would involve popping `big`.

Let's use a more standard example for transitions: "The cat sat."

Initial State:
*   Stack: [`LEFT-WALL`]
*   Buffer: [`The`, `cat`, `sat`]
*   Dependencies: {}

1.  **SHIFT:** Move `The` to stack.
    *   Stack: [`LEFT-WALL`, `The`]
    *   Buffer: [`cat`, `sat`]
    *   Dependencies: {}
2.  **SHIFT:** Move `cat` to stack.
    *   Stack: [`LEFT-WALL`, `The`, `cat`]
    *   Buffer: [`sat`]
    *   Dependencies: {}
3.  **LEFT-ARC (`cat` -> `The`, `amod`):** Incorrect, `The` is a determiner. This implies the model needs to learn correct dependencies. Let's assume it predicts correctly.
    *   **RIGHT-ARC (`cat` -> `The`, `det`):** Pop `The`.
    *   Stack: [`LEFT-WALL`, `cat`]
    *   Buffer: [`sat`]
    *   Dependencies: {(`cat`, `The`, `det`)}
4.  **SHIFT:** Move `sat` to stack.
    *   Stack: [`LEFT-WALL`, `cat`, `sat`]
    *   Buffer: []
    *   Dependencies: {(`cat`, `The`, `det`)}
5.  **LEFT-ARC (`sat` -> `cat`, `nsubj`):** Pop `cat`.
    *   Stack: [`LEFT-WALL`, `sat`]
    *   Buffer: []
    *   Dependencies: {(`cat`, `The`, `det`), (`sat`, `cat`, `nsubj`)}
6.  **RIGHT-ARC (`sat` is ROOT):** Consider `sat` as the root, no further arcs needed from it. The state would be Stack: [`LEFT-WALL`, `sat`], Buffer: []. The process finishes when the buffer is empty and the stack has only the root and the left wall.

**Important Points:**

*   **Local Decisions:** Transition-based parsers make greedy, local decisions at each step.
*   **Feature Engineering:** The accuracy heavily relies on the features extracted from the current parser state (words on stack/buffer, their POS tags, etc.).
*   **Arc-Eager vs. Arc-Standard:** Two main variants of transition systems exist, differing in when dependencies are created.
    *   **Arc-Eager:** Allows creating dependencies as soon as a potential head and dependent are on the stack.
    *   **Arc-Standard:** Requires dependents to be fully processed before attaching them to their heads.

### 3. Graph-Based Dependency Parsing

Graph-based dependency parsers construct the dependency tree by scoring all possible dependency arcs between words in a sentence and then finding the highest-scoring tree among them.

**Key Concepts:**

*   **Complete Graph:** Initially, a complete directed graph is formed where every word can potentially be an ancestor of every other word.
*   **Scoring Arcs:** A model (typically a rich feature-based or neural network model) assigns a score to each potential dependency arc (head, dependent, relation\_type).
*   **Finding the Best Tree:** Once all potential arcs are scored, an algorithm like the **Chu-Liu/Edmonds' algorithm** is used to find the maximum spanning arborescence (a directed tree rooted at a single node) from the set of all possible arcs. This algorithm ensures that the resulting structure is a valid tree (no cycles, exactly one root).
*   **Macaroni Charts:** A way to visualize potential arcs, often used in early graph-based parsers.

**How it Works:**

1.  **Candidate Arc Generation:** For every pair of words (i, j) in the sentence, consider a potential arc from word i to word j.
2.  **Scoring:** For each potential arc (i, j), a scoring function `score(i, j, relation_type)` is computed. This score is a function of features of words i and j, their context, and the relation type.
3.  **Tree Formation:** Use Chu-Liu/Edmonds' algorithm to find the highest-scoring directed tree covering all words in the sentence, with a single root.

**Example (Conceptual):**

Sentence: "The cat sat."

Potential Arcs and Scores (Simplified):

| Head | Dependent | Relation | Score |
| :--- | :-------- | :------- | :---- |
| `sat` | `cat`     | `nsubj`  | 0.9   |
| `cat` | `The`     | `det`    | 0.8   |
| `sat` | `The`     | `det`    | 0.1   |
| `sat` | `cat`     | `obj`    | 0.05  |
| ...  | ...       | ...      | ...   |

The Chu-Liu/Edmonds algorithm would select the set of arcs that form a valid tree and maximize the sum of scores. In this case, it would likely pick:
*   `sat` -> `cat` (nsubj, score 0.9)
*   `cat` -> `The` (det, score 0.8)

The resulting tree: `sat` (root) -> `cat` -> `The`.

**Important Points:**

*   **Global Optimization:** Graph-based parsers perform a global optimization, considering all possible trees.
*   **Computational Complexity:** Chu-Liu/Edmonds' algorithm has a polynomial time complexity (e.g., O(V^3) or O(V^2 log V) with optimizations, where V is the number of words).
*   **Rich Feature Sets:** Historically, graph-based parsers excelled due to their ability to incorporate rich, hand-crafted features. Modern neural approaches have blurred this distinction.

### 4. Evaluation of Dependency Parsers

Evaluating dependency parsers involves comparing their output against a gold standard (human-annotated) dependency tree. Common metrics focus on the accuracy of the identified head-dependent relationships and the correctness of the dependency labels.

**Key Concepts:**

*   **Gold Standard:** A dependency tree annotated by human experts for a given sentence.
*   **Predicted Tree:** The dependency tree generated by the parser for the same sentence.
*   **Labeled Attachment Score (LAS):** The percentage of words for which both the head and the dependency label are correctly predicted. This is the most common and stringent metric.
*   **Unlabeled Attachment Score (UAS):** The percentage of words for which only the head is correctly predicted, regardless of the dependency label.
*   **Macro-Averages vs. Micro-Averages:**
    *   **Micro-average:** Aggregates counts of true positives, false positives, and false negatives across all dependency labels to compute precision, recall, and F1-score. Gives equal weight to each dependency instance.
    *   **Macro-average:** Computes precision, recall, and F1-score for each dependency label independently and then averages these scores. Gives equal weight to each dependency label type.
*   **Precision:** Proportion of predicted dependencies that are correct.
    *   $P = \frac{\text{True Positives}}{\text{True Positives} + \text{False Positives}}$
*   **Recall:** Proportion of correct dependencies that were predicted.
    *   $R = \frac{\text{True Positives}}{\text{True Positives} + \text{False Negatives}}$
*   **F1-Score:** Harmonic mean of precision and recall.
    *   $F1 = 2 \times \frac{P \times R}{P + R}$

**Calculating LAS/UAS:**

For each word in the sentence (excluding the ROOT symbol):
*   **Correct Prediction:** The predicted head matches the gold-standard head AND (for LAS) the predicted label matches the gold-standard label.
*   **Incorrect Prediction:**
    *   Predicted head is wrong, but label is correct.
    *   Predicted head is correct, but label is wrong (for LAS).
    *   Both predicted head and label are wrong (for LAS).
    *   Neither head nor label matches (for LAS).

The scores are then calculated as:

*   $LAS = \frac{\text{Number of correctly predicted (head + label)}}{\text{Total number of words}}$
*   $UAS = \frac{\text{Number of correctly predicted heads}}{\text{Total number of words}}$

**Example Calculation:**

Sentence: "The cat sat."
Gold Standard: `sat` (root), `cat` (nsubj) <- `sat`, `The` (det) <- `cat`
Predicted: `sat` (root), `cat` (obj) <- `sat`, `The` (det) <- `cat`

Let's evaluate word "cat":
*   Gold Head: `sat`, Gold Label: `nsubj`
*   Predicted Head: `sat`, Predicted Label: `obj`

*   **UAS:** Predicted head (`sat`) matches gold head (`sat`). **Correct.**
*   **LAS:** Predicted head (`sat`) matches gold head (`sat`), BUT predicted label (`obj`) does NOT match gold label (`nsubj`). **Incorrect.**

Let's evaluate word "The":
*   Gold Head: `cat`, Gold Label: `det`
*   Predicted Head: `cat`, Predicted Label: `det`

*   **UAS:** Predicted head (`cat`) matches gold head (`cat`). **Correct.**
*   **LAS:** Predicted head (`cat`) matches gold head (`cat`) AND predicted label (`det`) matches gold label (`det`). **Correct.**

Assuming "sat" is the root and doesn't have a head dependency to evaluate in the same way:

*   Total words to evaluate: 2 (`cat`, `The`)
*   UAS Correct: 2 (`cat`, `The`)
*   LAS Correct: 1 (`The`)

*   **UAS:** 2 / 2 = 1.00 or 100%
*   **LAS:** 1 / 2 = 0.50 or 50%

**Important Points:**

*   **LAS is the primary metric:** It's more informative as it assesses both structural and relational accuracy.
*   **ROUT nodes:** Often excluded from LAS/UAS calculation as they are the sentence's root and don't have a head dependency in the same sense.
*   **Punctuation:** The handling of punctuation (whether it's included in the evaluation or treated specially) can affect scores.

---

### Practice Questions and Exercises

**Question 1:**
What are the two main categories of dependency parsing algorithms? Briefly describe their fundamental differences.

**Question 2:**
Consider the sentence: "The quick brown fox jumps over the lazy dog."
If a transition-based parser is building the dependency tree, what would be a typical sequence of **SHIFT** and **LEFT-ARC/RIGHT-ARC** transitions to attach "quick" as an adjectival modifier (`amod`) to "fox"? Assume "fox" will be the head.

**Question 3:**
Explain the role of the **Chu-Liu/Edmonds' algorithm** in graph-based dependency parsing.

**Question 4:**
Define **Labeled Attachment Score (LAS)** and **Unlabeled Attachment Score (UAS)**. Which metric is generally considered more comprehensive, and why?

**Question 5:**
Sentence: "She reads books."
Gold Standard: `reads` (root), `She` (nsubj) <- `reads`, `books` (obj) <- `reads`
Parser Output: `reads` (root), `She` (nsubj) <- `reads`, `books` (advmod) <- `reads`

Calculate the UAS and LAS for this parser output.

---

### Answers

**Answer 1:**
The two main categories are:
1.  **Transition-Based Dependency Parsing:** These parsers process the sentence word by word, making a sequence of local decisions (transitions) to build the dependency tree incrementally. They rely on a classifier to choose the best transition at each step.
2.  **Graph-Based Dependency Parsing:** These parsers consider all possible dependency arcs between words, score them, and then use an algorithm (like Chu-Liu/Edmonds') to select the highest-scoring valid dependency tree. They perform a global optimization.

**Answer 2:**
Assuming "fox" is on the stack, and "quick" is the next word in the buffer:
1.  **SHIFT:** Move "quick" from the buffer to the stack.
    *   Stack: [... `fox`, `quick`]
    *   Buffer: [`jumps`, ...]
2.  **LEFT-ARC (head `fox` -> dependent `quick`):** Create the dependency `fox` -> `quick` with the label `amod`. "quick" is popped from the stack.
    *   Stack: [... `fox`]
    *   Buffer: [`jumps`, ...]
    *   Dependencies: {(`fox`, `quick`, `amod`)}

*(Note: The exact stack and buffer contents depend on previous steps. The key is the SHIFT of "quick" and then the LEFT-ARC from "fox" to "quick").*

**Answer 3:**
The Chu-Liu/Edmonds' algorithm is crucial in graph-based dependency parsing because it takes a set of scored potential dependency arcs (a weighted directed graph) and finds the **maximum spanning arborescence**. This means it selects a subset of arcs that form a valid directed tree (with a single root and no cycles) while maximizing the sum of the scores of the selected arcs. It ensures the parser outputs a coherent and optimal tree structure.

**Answer 4:**
*   **Unlabeled Attachment Score (UAS):** Measures the accuracy of the grammatical heads predicted for each word. It counts how many words have their correct head identified, irrespective of the dependency relation label.
*   **Labeled Attachment Score (LAS):** Measures the accuracy of both the grammatical head and the dependency relation label. It counts how many words have both their correct head and their correct relation label predicted.

**LAS** is generally considered more comprehensive because it assesses the complete correctness of the dependency arc (both structure and grammatical function). A high UAS but low LAS might indicate a parser that gets the general structure right but mislabels the relationships between words.

**Answer 5:**
Sentence: "She reads books."
Gold Standard: `reads` (root), `She` (nsubj) <- `reads`, `books` (obj) <- `reads`
Parser Output: `reads` (root), `She` (nsubj) <- `reads`, `books` (advmod) <- `reads`

Let's analyze the dependencies:
1.  **"She":**
    *   Gold: Head=`reads`, Label=`nsubj`
    *   Output: Head=`reads`, Label=`nsubj`
    *   UAS: Correct (head matches)
    *   LAS: Correct (head and label match)

2.  **"books":**
    *   Gold: Head=`reads`, Label=`obj`
    *   Output: Head=`reads`, Label=`advmod`
    *   UAS: Correct (head matches)
    *   LAS: Incorrect (label does not match)

Total words to evaluate: 2 (`She`, `books`)

*   **UAS Calculation:**
    *   Correctly predicted heads: 2 (`She`, `books`)
    *   Total words: 2
    *   UAS = 2 / 2 = 1.00 (or 100%)

*   **LAS Calculation:**
    *   Correctly predicted (head + label): 1 (`She`)
    *   Total words: 2
    *   LAS = 1 / 2 = 0.50 (or 50%)

---

### Important Points to Remember

*   **Dependency Parsing:** Focuses on head-dependent relationships between words.
*   **Transition-Based Parsers:** Incremental, state-based, rely on a sequence of transitions (SHIFT, ARC). Can be greedy.
*   **Graph-Based Parsers:** Global optimization, score all possible arcs, find the best tree using algorithms like Chu-Liu/Edmonds'.
*   **Evaluation Metrics:** LAS (head + label accuracy) is the most important. UAS (head accuracy) is also used.
*   **Gold Standard:** Essential for evaluating parser performance.
*   **Features:** Crucial for both types of parsers; historically a strength of graph-based, now largely dominated by deep learning representations.
