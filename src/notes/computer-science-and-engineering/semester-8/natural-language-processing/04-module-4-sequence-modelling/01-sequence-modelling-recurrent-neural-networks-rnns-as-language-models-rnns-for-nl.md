---
title: "Sequence Modelling - Recurrent Neural Networks, RNNs as Language Models, RNNs for NLP tasks, Stacked and Bidirectional RNN architectures, Recursive Neural Networks, LSTM & GRU, Common RNN NLP Architectures"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 4: Sequence Modelling "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9ea"
status: "completed"
scrapedAt: "2026-05-20T17:25:34.013Z"
---
# NATURAL LANGUAGE PROCESSING - Module 4: Sequence Modelling

This module delves into **Sequence Modelling**, a crucial area in NLP that deals with data where the order of elements matters. We'll explore **Recurrent Neural Networks (RNNs)** and their various architectures, understanding how they process sequential information for tasks like language modeling.

---

## Learning Outcomes Covered in this Module:

*   **Understand the fundamental principles of sequence modelling.**
*   **Learn about Recurrent Neural Networks (RNNs) and their architecture.**
*   **Explore RNNs as Language Models.**
*   **Discover various NLP tasks where RNNs are applied.**
*   **Understand the concepts of Stacked and Bidirectional RNN architectures.**
*   **Differentiate between Recursive Neural Networks and Recurrent Neural Networks.**
*   **Study the mechanisms and benefits of LSTM and GRU networks.**
*   **Examine common RNN architectures used in NLP.**

---

## 1. Understanding the Fundamental Principles of Sequence Modelling

Sequence modelling is the task of predicting the next element in a sequence or understanding the underlying patterns within a sequence. In NLP, sequences are fundamental – words form sentences, sentences form paragraphs, and so on.

*   **Key Concept:** **Sequential Data:** Data where the order of elements is important.
    *   **Examples:**
        *   **Text:** "The cat sat on the mat." (The order of words defines the meaning.)
        *   **Time Series:** Stock prices over time.
        *   **Audio:** Sound waves.
        *   **DNA sequences.**

*   **Challenges of Traditional Feedforward Networks for Sequences:**
    *   Feedforward networks process each input independently, ignoring the context of previous inputs.
    *   They have a fixed-size input, making it difficult to handle variable-length sequences.

---

## 2. Recurrent Neural Networks (RNNs) and Their Architecture

RNNs are a class of neural networks designed to handle sequential data by maintaining a "memory" of previous inputs.

*   **Key Concept:** **Recurrence:** The output of a neuron at a given time step is fed back as input to the same neuron (or another neuron in the same layer) at the next time step.

*   **Basic RNN Architecture:**
    *   An RNN cell takes two inputs:
        1.  **Current input ($x_t$)**: The current element in the sequence (e.g., a word embedding).
        2.  **Previous hidden state ($h_{t-1}$)**: The "memory" from the previous time step.
    *   It produces two outputs:
        1.  **Current hidden state ($h_t$)**: The updated memory of the sequence up to the current time step.
        2.  **Output ($y_t$)**: The prediction at the current time step (e.g., probability distribution over vocabulary for language modeling).

    *   **Mathematical Representation:**
        *   $h_t = f(W_{hh}h_{t-1} + W_{xh}x_t + b_h)$
        *   $y_t = g(W_{hy}h_t + b_y)$

        Where:
        *   $h_t$: Hidden state at time $t$.
        *   $x_t$: Input at time $t$.
        *   $W_{hh}$: Weight matrix for the recurrent connection.
        *   $W_{xh}$: Weight matrix for the input connection.
        *   $W_{hy}$: Weight matrix for the output connection.
        *   $b_h$: Bias for the hidden state.
        *   $b_y$: Bias for the output.
        *   $f$ and $g$: Activation functions (e.g., $\tanh$, ReLU for $f$, Softmax for $g$).

*   **Unrolling the RNN:**
    *   Visualizing the RNN over time, treating each time step as a separate layer with shared weights. This helps in understanding backpropagation through time (BPTT).

*   **Important Point to Remember:** **Shared Weights:** The same set of weights ($W_{hh}, W_{xh}, W_{hy}$) are used across all time steps. This is what allows the RNN to learn patterns that are generalizable across the sequence.

---

## 3. RNNs as Language Models

A Language Model (LM) is a probability distribution over sequences of words. Its primary goal is to predict the next word given the preceding words.

*   **Key Concept:** **Next Word Prediction:** $P(w_t | w_1, w_2, ..., w_{t-1})$

*   **How RNNs function as Language Models:**
    1.  The RNN takes a sequence of words as input, one word at a time.
    2.  At each time step $t$, the RNN's hidden state $h_t$ summarizes the history of words $w_1, ..., w_t$.
    3.  The output layer (often a softmax layer) takes the hidden state $h_t$ and outputs a probability distribution over the entire vocabulary, indicating the likelihood of each word being the next word in the sequence.

*   **Example:**
    *   Input sequence: "The cat sat"
    *   Time step 1: Input "The", output probability for next word.
    *   Time step 2: Input "cat", hidden state updated with "The", output probability for next word.
    *   Time step 3: Input "sat", hidden state updated with "The cat", output probability for next word. The model might predict "on" with high probability.

*   **Training:** The RNN is trained by minimizing the cross-entropy loss between the predicted probabilities and the actual next word in the training data.

---

## 4. RNNs for NLP Tasks

RNNs are versatile and can be applied to a wide range of NLP tasks.

*   **Key NLP Tasks:**

    *   **Text Generation:** Generating new text that mimics the style and content of the training data.
        *   *Example:* Generating creative writing, chatbot responses.
    *   **Sentiment Analysis:** Classifying the sentiment of a piece of text (positive, negative, neutral).
        *   *How:* The final hidden state of the RNN is used as input to a classifier.
        *   *Example:* "This movie was amazing!" -> Positive.
    *   **Machine Translation:** Translating text from one language to another.
        *   *How:* An encoder-decoder architecture using RNNs is common. The encoder RNN processes the source sentence, and the decoder RNN generates the target sentence.
        *   *Example:* "Bonjour le monde" -> "Hello world".
    *   **Speech Recognition:** Transcribing spoken language into text.
        *   *How:* RNNs process sequences of acoustic features.
        *   *Example:* Audio of "hello" -> Text "hello".
    *   **Named Entity Recognition (NER):** Identifying and classifying named entities (persons, organizations, locations) in text.
        *   *How:* Each word in the input sequence is tagged.
        *   *Example:* "Barack Obama" -> PERSON.
    *   **Question Answering:** Providing answers to questions based on a given text.
        *   *How:* RNNs can encode both the question and the context.

---

## 5. Stacked and Bidirectional RNN Architectures

To improve the modeling capacity and capture richer contextual information, we use enhanced RNN architectures.

### 5.1 Stacked RNNs (Deep RNNs)

*   **Key Concept:** **Multiple Layers:** Connecting multiple RNN layers on top of each other. The output (hidden state) of one RNN layer becomes the input to the next RNN layer at each time step.

*   **Architecture:**
    *   Layer 1 RNN processes the input sequence.
    *   Layer 2 RNN takes the hidden states from Layer 1 as its input.
    *   This continues for $N$ layers.

*   **Benefits:**
    *   **Hierarchical Feature Extraction:** Deeper layers can learn more abstract and complex patterns.
    *   **Increased Model Capacity:** Allows for learning more intricate relationships within the sequence.

*   **Diagrammatic Idea:**
    `Input -> RNN Layer 1 -> RNN Layer 2 -> ... -> RNN Layer N -> Output`

### 5.2 Bidirectional RNNs (Bi-RNNs)

*   **Key Concept:** **Past and Future Context:** Processes the sequence in both forward and backward directions.

*   **Architecture:**
    *   **Forward RNN:** Processes the sequence from $t=1$ to $T$.
    *   **Backward RNN:** Processes the sequence from $t=T$ to $1$.
    *   The hidden states from both the forward and backward RNNs are concatenated (or combined in another way) at each time step to form the final hidden state.

*   **Benefits:**
    *   **Rich Contextual Understanding:** Captures dependencies from both preceding and succeeding elements. This is crucial for many NLP tasks where context from both sides is important.
    *   *Example:* For sentiment analysis of "The acting was great, but the plot was terrible," understanding "terrible" requires looking at the entire sentence, not just what came before.

*   **Mathematical Representation (concatenation):**
    *   $h_t = [h_t^{\rightarrow}; h_t^{\leftarrow}]$

    Where:
    *   $h_t^{\rightarrow}$: Hidden state from the forward RNN at time $t$.
    *   $h_t^{\leftarrow}$: Hidden state from the backward RNN at time $t$.

*   **Important Point to Remember:** Bi-RNNs are particularly useful for tasks where the meaning of a word or phrase depends on context from both before and after it.

---

## 6. Recursive Neural Networks vs. Recurrent Neural Networks

While both deal with sequences, their fundamental approach differs.

### 6.1 Recursive Neural Networks (RvNNs)

*   **Key Concept:** **Tree Structure:** RvNNs operate on data that can be represented as a tree structure, often derived from syntactic parse trees of sentences. They apply the same set of weights recursively over this tree.

*   **How they work:**
    *   RvNNs combine the representations of child nodes to form the representation of their parent node.
    *   This process is applied recursively up to the root of the tree.

*   **Applications:**
    *   Analyzing sentence structure and meaning based on grammatical parsing.
    *   Sentiment analysis where the sentiment of a phrase is composed from its sub-phrases.

*   **Example:**
    *   Consider the sentence "The cat sat on the mat."
    *   A parse tree might group "on the mat" and then combine it with "sat" to form "sat on the mat," and so on.

*   **Key Difference from RNNs:**
    *   **RNNs:** Process sequential linear data.
    *   **RvNNs:** Process hierarchical tree-structured data.

### 6.2 Recurrent Neural Networks (RNNs)

*   **Key Concept:** **Linear Sequence:** Process data that arrives in a linear order over time.

*   **How they work:** As described earlier, they maintain a hidden state that is updated at each time step.

*   **Applications:** Wide range of sequential tasks like language modeling, speech recognition.

*   **Important Distinction:** The "recurrent" nature of RNNs refers to the looping mechanism, while the "recursive" nature of RvNNs refers to the repeated application of the same function over a hierarchical structure.

---

## 7. LSTM & GRU: Addressing the Vanishing Gradient Problem

Basic RNNs suffer from the **vanishing gradient problem**, making it difficult to learn long-term dependencies. Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks are designed to overcome this.

### 7.1 Long Short-Term Memory (LSTM)

*   **Key Concept:** **Gating Mechanisms:** LSTMs introduce "gates" that control the flow of information, allowing them to selectively remember or forget information over long sequences.

*   **Core Components:**
    *   **Cell State ($C_t$):** The "memory" of the LSTM. It runs straight through the chain, with minimal linear interactions, allowing information to flow unchanged.
    *   **Hidden State ($h_t$):** The output of the LSTM at the current time step.
    *   **Gates:**
        1.  **Forget Gate ($f_t$):** Decides what information to throw away from the cell state. It looks at $h_{t-1}$ and $x_t$ and outputs a number between 0 and 1 for each number in the cell state $C_{t-1}$. (0 means "forget it completely", 1 means "completely keep it").
            *   $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$
        2.  **Input Gate ($i_t$):** Decides which new information to store in the cell state. It has two parts:
            *   A sigmoid layer deciding which values to update ($i_t$).
            *   A $\tanh$ layer creating a vector of new candidate values ($\tilde{C}_t$) to be added to the state.
            *   $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$
            *   $\tilde{C}_t = \tanh(W_C \cdot [h_{t-1}, x_t] + b_C)$
        3.  **Update Cell State:** Combine the old and new information.
            *   $C_t = f_t * C_{t-1} + i_t * \tilde{C}_t$
        4.  **Output Gate ($o_t$):** Decides what parts of the cell state to output.
            *   $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$
            *   $h_t = o_t * \tanh(C_t)$

    Where:
    *   $\sigma$ is the sigmoid function.
    *   $W$ and $b$ are learnable weight matrices and bias vectors.
    *   $*$ denotes element-wise multiplication.
    *   $[h_{t-1}, x_t]$ denotes concatenation of the hidden state and input.

*   **Benefits:**
    *   Effectively captures long-term dependencies.
    *   Mitigates the vanishing gradient problem.

### 7.2 Gated Recurrent Unit (GRU)

*   **Key Concept:** **Simplified Gating:** GRUs are a simpler version of LSTMs, with fewer parameters and a more streamlined architecture. They combine the forget and input gates into a single "update gate" and merge the cell state and hidden state.

*   **Core Components:**
    *   **Update Gate ($z_t$):** Controls how much of the previous hidden state to keep and how much of the new candidate hidden state to incorporate.
        *   $z_t = \sigma(W_z \cdot [h_{t-1}, x_t] + b_z)$
    *   **Reset Gate ($r_t$):** Controls how much of the previous hidden state to forget when computing the new candidate hidden state.
        *   $r_t = \sigma(W_r \cdot [h_{t-1}, x_t] + b_r)$
    *   **Candidate Hidden State ($\tilde{h}_t$):** Computes the new candidate values for the hidden state.
        *   $\tilde{h}_t = \tanh(W_h \cdot [r_t * h_{t-1}, x_t] + b_h)$
    *   **Update Hidden State:** Combines the previous hidden state and the candidate hidden state.
        *   $h_t = (1 - z_t) * h_{t-1} + z_t * \tilde{h}_t$

*   **Benefits:**
    *   Achieves performance comparable to LSTMs on many tasks.
    *   Has fewer parameters, leading to faster training and less risk of overfitting.

*   **Important Distinction:** GRUs are generally simpler and computationally less expensive than LSTMs, making them a good choice when computational resources are limited or for datasets where the complexity of LSTMs might not be necessary.

---

## 8. Common RNN NLP Architectures

Combining the fundamental RNNs, LSTMs, GRUs, and the architectural enhancements (stacked, bidirectional) leads to powerful NLP models.

*   **Encoder-Decoder Architectures (Seq2Seq):**
    *   **Concept:** Used for tasks like machine translation, summarization, and question generation.
    *   **Components:**
        1.  **Encoder:** An RNN (LSTM or GRU) that processes the input sequence and produces a fixed-length context vector (often the final hidden state).
        2.  **Decoder:** Another RNN that takes the context vector as its initial hidden state and generates the output sequence, one element at a time.
    *   **Enhancements:** Attention mechanisms are often added to allow the decoder to selectively focus on different parts of the input sequence at each output step, significantly improving performance.
    *   **Example:** Machine Translation: "Je suis étudiant" (French) -> Encoder -> Context Vector -> Decoder -> "I am a student" (English).

*   **Convolutional Neural Networks (CNNs) with RNNs:**
    *   **Concept:** CNNs can be used to extract local features (e.g., n-grams) from text, and these features can then be fed into an RNN for sequence modeling.
    *   **Use Case:** Text classification, sentiment analysis.

*   **RNNs for Text Classification:**
    *   **Architecture:** A unidirectional or bidirectional RNN (LSTM/GRU) processes the text. The final hidden state (or a pooling of all hidden states) is fed into a feedforward classifier.
    *   **Example:** Sentiment analysis of movie reviews.

*   **RNNs for Sequence Tagging (e.g., NER, POS Tagging):**
    *   **Architecture:** A bidirectional RNN (often Bi-LSTM or Bi-GRU) is used to encode the sequence. The output of the RNN at each time step is passed to a classification layer (e.g., Softmax) to predict the tag for that specific word.
    *   **Example:** "Barack Obama visited London."
        *   Bi-LSTM processes the sentence.
        *   For "Barack": output of Bi-LSTM goes to classifier predicting "B-PER" (Beginning of Person).
        *   For "Obama": output of Bi-LSTM goes to classifier predicting "I-PER" (Inside Person).
        *   For "London": output of Bi-LSTM goes to classifier predicting "B-LOC" (Beginning of Location).

---

## Practice Questions

1.  **What is the primary advantage of using an RNN over a simple feedforward network for sequence modeling?**
    *   **Answer:** RNNs have a recurrent connection that allows them to maintain a hidden state, effectively remembering past inputs and processing sequential data. Feedforward networks treat each input independently.

2.  **Explain the role of the "forget gate" in an LSTM cell.**
    *   **Answer:** The forget gate decides which information from the previous cell state ($C_{t-1}$) should be discarded. It outputs a value between 0 and 1 for each element in the cell state, where 0 means complete forgetting and 1 means complete retention.

3.  **If you were building a model to predict the next word in a sentence, would you prioritize a unidirectional RNN or a Bidirectional RNN? Justify your answer.**
    *   **Answer:** A unidirectional RNN would be more appropriate for strict next-word prediction. A Bidirectional RNN processes context from both directions, which is useful for tasks where the meaning of a word depends on future words, but for pure next-word prediction, only past context is available.

4.  **How does a GRU differ from an LSTM in its architecture?**
    *   **Answer:** A GRU is a simplified version of an LSTM. It combines the forget and input gates into a single "update gate" and merges the cell state and hidden state. It has fewer parameters than an LSTM.

5.  **Consider the task of sentiment analysis. Why might a Bidirectional LSTM be preferred over a standard unidirectional LSTM for this task?**
    *   **Answer:** For sentiment analysis, the sentiment of a word or phrase can depend on words that appear *after* it. A Bidirectional LSTM captures context from both preceding and succeeding words, leading to a more comprehensive understanding of the overall sentiment. For instance, in "The movie was good, but the ending was awful," understanding the sentiment of "good" is influenced by "awful."

---

## Important Points to Remember:

*   **RNNs are designed for sequential data** due to their recurrent connections and internal "memory" (hidden state).
*   **Shared weights** across time steps are crucial for RNNs to generalize patterns in sequences.
*   **Vanishing/Exploding Gradients** are significant problems for basic RNNs, limiting their ability to learn long-term dependencies.
*   **LSTMs and GRUs** are advanced RNN variants that use gating mechanisms to effectively combat vanishing gradients and capture long-term dependencies.
*   **Bidirectional RNNs** enhance context understanding by processing sequences in both forward and backward directions.
*   **Stacked RNNs** allow for learning hierarchical features.
*   **Encoder-Decoder architectures** are fundamental for sequence-to-sequence tasks like machine translation.
*   **RvNNs** operate on tree structures, contrasting with RNNs' linear sequence processing.

---
This concludes Module 4 on Sequence Modelling. You should now have a solid understanding of RNNs, their variants, and their applications in Natural Language Processing.
