---
title: "Encoder-Decoder Model with RNNs, Attention models, Transformers"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 4: Sequence Modelling "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9eb"
status: "completed"
scrapedAt: "2026-05-20T17:25:34.712Z"
---
# Natural Language Processing: Module 4 - Sequence Modelling

## Topic: Encoder-Decoder Model with RNNs, Attention Models, Transformers

---

### Learning Outcomes:

1.  **Understand the fundamental architecture of the Encoder-Decoder model.**
2.  **Explain the role of Recurrent Neural Networks (RNNs) in sequence modelling.**
3.  **Describe the limitations of the basic Encoder-Decoder model and the motivation for attention mechanisms.**
4.  **Explain how attention mechanisms work and their benefits in sequence-to-sequence tasks.**
5.  **Understand the architecture of the Transformer model.**
6.  **Explain the concepts of self-attention, multi-head attention, and positional encoding in the Transformer.**
7.  **Compare and contrast RNN-based Encoder-Decoder models with Transformer models.**

---

### 1. Encoder-Decoder Model with RNNs

The **Encoder-Decoder model** is a powerful neural network architecture designed for **sequence-to-sequence (seq2seq)** tasks. These tasks involve transforming an input sequence into an output sequence, where the lengths of the input and output sequences can differ.

**Key Concepts & Definitions:**

*   **Sequence-to-Sequence (Seq2Seq) Tasks:** Problems where the output is also a sequence, e.g., machine translation, text summarization, question answering.
*   **Encoder:** A neural network that processes the input sequence and compresses it into a fixed-length "context vector" or "thought vector."
*   **Decoder:** A neural network that takes the context vector from the encoder and generates the output sequence, one element at a time.
*   **Context Vector:** A fixed-size representation that captures the semantic meaning of the entire input sequence.

**Architecture:**

*   **Encoder:**
    *   Typically implemented using Recurrent Neural Networks (RNNs) like Vanilla RNNs, LSTMs, or GRUs.
    *   Processes the input sequence element by element.
    *   At each time step, it updates its hidden state based on the current input and its previous hidden state.
    *   The final hidden state of the encoder after processing the entire input sequence serves as the context vector.
*   **Decoder:**
    *   Also typically implemented using RNNs.
    *   Initialized with the context vector from the encoder.
    *   At each time step, it generates an output element (e.g., a word in translation) and updates its hidden state.
    *   The output of the decoder at time step *t* is often conditioned on its hidden state and the output of the previous time step (or a special `<start>` token at the beginning).
    *   The decoding process stops when a special `<end>` token is generated or a maximum length is reached.

**Example: Machine Translation (English to French)**

*   **Input Sequence (English):** "Hello world"
*   **Encoder:** Reads "Hello" and then "world", updating its hidden state at each step. The final hidden state encapsulates the meaning of "Hello world".
*   **Context Vector:** The final hidden state of the encoder.
*   **Decoder:**
    *   Takes the context vector and a `<start>` token.
    *   Generates the first French word (e.g., "Bonjour").
    *   Takes its current hidden state and the generated word ("Bonjour").
    *   Generates the next French word (e.g., "le").
    *   ...and so on, until it generates an `<end>` token.
*   **Output Sequence (French):** "Bonjour le monde"

**Diagram:**

```
       Input Sequence (x1, x2, ..., xn)
                  |
                  v
              [ ENCODER RNN ] ----> Context Vector (c)
                  |
                  v
        [ DECODER RNN ] ---> Output Sequence (y1, y2, ..., ym)
        (initial state = c)
```

---

### 2. Role of Recurrent Neural Networks (RNNs) in Sequence Modelling

RNNs are fundamental to early seq2seq models because of their ability to process sequential data.

**Key Concepts & Definitions:**

*   **Recurrent Neural Network (RNN):** A type of neural network designed to handle sequential data by maintaining a "hidden state" that captures information from previous time steps.
*   **Hidden State (h_t):** A vector at time step *t* that summarizes the information seen in the sequence up to that point. It's computed as a function of the current input and the previous hidden state: `h_t = f(h_{t-1}, x_t)`.
*   **Vanishing/Exploding Gradients:** A common problem in training deep RNNs where gradients become either very small or very large during backpropagation, making it difficult to learn long-term dependencies.
*   **Long Short-Term Memory (LSTM):** A type of RNN with a more complex internal structure (gates: input, forget, output) that helps mitigate the vanishing gradient problem and capture long-range dependencies.
*   **Gated Recurrent Unit (GRU):** A simplified version of LSTM with fewer gates (update, reset) that also performs well in capturing long-term dependencies.

**How RNNs are used in Encoder-Decoder:**

*   **Encoder:** An RNN (LSTM/GRU) iterates through the input sequence, updating its hidden state at each step. The final hidden state is the context vector.
*   **Decoder:** An RNN (LSTM/GRU) is initialized with the context vector. At each step, it uses its current hidden state and the previous output to predict the next output token and update its hidden state.

**Why RNNs are suitable:**

*   **Sequential Processing:** They naturally process data in order, which is crucial for language.
*   **Memory:** The hidden state acts as a memory, allowing the model to remember past information.
*   **Variable Length Sequences:** They can handle input and output sequences of different lengths.

---

### 3. Limitations of Basic Encoder-Decoder Model and Motivation for Attention

The basic Encoder-Decoder model has a significant bottleneck: the fixed-length context vector.

**Limitations:**

*   **Information Bottleneck:** Compressing the entire input sequence into a single fixed-size context vector can lead to loss of information, especially for long input sequences. The model might struggle to remember details from the beginning of a long sentence when generating the end of the output.
*   **Difficulty with Long Sequences:** As the input sequence length increases, the performance of the model degrades because the single context vector becomes insufficient to represent all the information.
*   **Equal Importance Assumption:** The context vector treats all parts of the input sequence as equally important when generating each part of the output, which is often not true. For instance, when translating a sentence, specific words in the source sentence are more relevant to specific words in the target sentence.

**Motivation for Attention:**

To overcome the limitations of the fixed context vector, attention mechanisms were introduced. The core idea is to allow the decoder to "look back" at the entire input sequence at each step of generating the output and selectively focus on the most relevant parts of the input.

**Analogy:** Imagine translating a long paragraph. You wouldn't just read the whole paragraph once, summarize it in your head, and then try to translate it from memory. Instead, you would constantly refer back to specific parts of the original text that are most relevant to the word or phrase you're currently translating. Attention mimics this human behavior.

---

### 4. How Attention Mechanisms Work and Their Benefits

Attention mechanisms enable the decoder to dynamically focus on different parts of the input sequence at each decoding step.

**Key Concepts & Definitions:**

*   **Attention Mechanism:** A mechanism that allows a model to weigh the importance of different parts of the input sequence when producing each element of the output sequence.
*   **Alignment Scores (or Attention Scores):** Scores calculated to determine how well each input element aligns with the current state of the decoder.
*   **Attention Weights:** Probability distributions derived from alignment scores, indicating the importance of each input element for the current output generation.
*   **Context Vector (Weighted):** A dynamically computed context vector for each decoder step, formed by a weighted sum of encoder hidden states, where weights are the attention weights.

**How it works (simplified process for a decoder step):**

1.  **Encoder Hidden States:** The encoder produces a sequence of hidden states (e.g., $h_1, h_2, ..., h_n$), one for each input token. These are the "values" the decoder can attend to.
2.  **Decoder Hidden State:** At a given decoding step *t*, the decoder has its current hidden state ($s_t$).
3.  **Calculate Alignment Scores:** For each encoder hidden state $h_i$, compute an alignment score $e_{ti}$ between $s_t$ and $h_i$. This is typically done using a scoring function:
    *   **Dot Product:** $e_{ti} = s_t^T h_i$
    *   **General:** $e_{ti} = s_t^T W h_i$ (where W is a learned weight matrix)
    *   **Concat:** $e_{ti} = v^T \tanh(W_1 s_t + W_2 h_i)$ (where v, W1, W2 are learned parameters)
4.  **Compute Attention Weights:** Normalize the alignment scores using a softmax function to obtain attention weights $\alpha_{ti}$:
    $\alpha_{ti} = \frac{\exp(e_{ti})}{\sum_{j=1}^{n} \exp(e_{tj})}$
    These weights sum to 1 across all input tokens.
5.  **Compute Context Vector:** Calculate a weighted context vector $c_t$ for the current decoder step by taking a weighted sum of the encoder hidden states:
    $c_t = \sum_{i=1}^{n} \alpha_{ti} h_i$
6.  **Generate Output:** The decoder uses this context vector $c_t$, along with its current hidden state $s_t$, to generate the output token for step *t*.

**Benefits:**

*   **Handles Long Sequences Better:** Reduces the information bottleneck by allowing the decoder to access all encoder hidden states.
*   **Improved Performance:** Significantly boosts performance in seq2seq tasks like machine translation.
*   **Interpretability:** Attention weights can be visualized, showing which parts of the input were most important for generating specific parts of the output, providing insights into the model's decision-making.
*   **Alignment Learning:** Implicitly learns soft alignments between input and output sequences.

**Example: Machine Translation (English to French) with Attention**

Input: "The cat sat on the mat."
Output: "Le chat s'est assis sur le tapis."

When generating "chat" (cat), the attention mechanism would likely assign high weights to the encoder hidden state corresponding to the word "cat" in the English sentence. Similarly, for "tapis" (mat), it would focus on "mat."

---

### 5. Understanding the Architecture of the Transformer Model

The **Transformer** is a revolutionary neural network architecture that dispenses with recurrence and relies entirely on **attention mechanisms** to process sequences. It has become the de facto standard for many NLP tasks.

**Key Concepts & Definitions:**

*   **Self-Attention:** An attention mechanism that relates different positions of a single sequence to compute a representation of the sequence. It allows the model to weigh the importance of other words in the *same* sequence when processing a particular word.
*   **Multi-Head Attention:** An extension of self-attention where the attention mechanism is run in parallel multiple times with different learned linear projections of the queries, keys, and values. This allows the model to jointly attend to information from different representation subspaces at different positions.
*   **Positional Encoding:** Since the Transformer has no recurrence, it needs a way to inject positional information into the input embeddings. Positional encodings are added to the input embeddings to provide information about the relative or absolute position of tokens in the sequence.
*   **Encoder Stack:** Composed of multiple identical layers. Each layer has two main sub-layers: a multi-head self-attention mechanism and a position-wise fully connected feed-forward network. A residual connection and layer normalization are applied around each sub-layer.
*   **Decoder Stack:** Also composed of multiple identical layers. Each layer has three main sub-layers: a masked multi-head self-attention mechanism (to prevent attending to future tokens), a multi-head attention mechanism over the output of the encoder stack, and a position-wise fully connected feed-forward network. Residual connections and layer normalization are also applied.
*   **Masking:** Used in the decoder's self-attention to prevent positions from attending to subsequent positions, ensuring that the prediction for position *i* depends only on known outputs at positions less than *i*.
*   **Feed-Forward Networks:** Position-wise fully connected networks applied independently to each position. They usually consist of two linear transformations with a ReLU activation in between.

**Architecture Overview:**

The Transformer follows the Encoder-Decoder structure, but both the encoder and decoder are built using stacks of identical layers, heavily relying on attention.

**Encoder:**

*   **Input Embedding:** Input tokens are converted to embeddings.
*   **Positional Encoding:** Positional encodings are added to the input embeddings.
*   **Encoder Layers (N times):**
    *   **Multi-Head Self-Attention:** Allows each word in the input sequence to attend to all other words (including itself) to capture contextual relationships.
    *   **Add & Norm:** Residual connection followed by layer normalization.
    *   **Feed-Forward Network:** Processes the output of the self-attention layer.
    *   **Add & Norm:** Residual connection followed by layer normalization.
*   **Output:** A sequence of contextualized representations for the input sequence.

**Decoder:**

*   **Output Embedding:** Target tokens are converted to embeddings.
*   **Positional Encoding:** Positional encodings are added.
*   **Decoder Layers (N times):**
    *   **Masked Multi-Head Self-Attention:** Attends to previous output tokens in the target sequence, masked to prevent looking ahead.
    *   **Add & Norm:** Residual connection and layer normalization.
    *   **Multi-Head Encoder-Decoder Attention:** Attends to the output of the encoder stack. This is where the decoder "looks at" the input.
    *   **Add & Norm:** Residual connection and layer normalization.
    *   **Feed-Forward Network:** Processes the output of the attention layers.
    *   **Add & Norm:** Residual connection and layer normalization.
*   **Linear Layer & Softmax:** Transforms the decoder output into probability distributions over the vocabulary to predict the next token.

**Diagram:**

```
Input Sequence      Encoder Stack (N layers)      Output Sequence (shifted right)
(Embed + PosEnc) --------> [ Multi-Head Self-Attn ] --------> (Embed + PosEnc)
                           [ Feed Forward           ]
                           [ Add & Norm             ]
                                       |
                                       v
                            Encoder Output (K, V for Decoder)

                                       |
                                       v
Decoder Stack (N layers)  <--------- [ Masked Multi-Head Self-Attn ]
(Shifted Output Embed + PosEnc)      [ Encoder-Decoder Attn      ]
                                     [ Feed Forward              ]
                                     [ Add & Norm                ]
                                                |
                                                v
                                     Linear + Softmax --------> Output Token
```

---

### 6. Concepts of Self-Attention, Multi-Head Attention, and Positional Encoding

These are the core building blocks of the Transformer.

**a) Self-Attention**

Self-attention allows each element in a sequence to attend to other elements in the *same* sequence to compute its representation.

**Key Concepts & Definitions:**

*   **Query (Q):** Represents what you are looking for.
*   **Key (K):** Represents what an element contains.
*   **Value (V):** Represents the actual content of an element.
*   **Scaled Dot-Product Attention:** The core attention function:
    `Attention(Q, K, V) = softmax( (QK^T) / sqrt(d_k) ) * V`
    *   $Q, K, V$ are matrices derived from the input sequence (e.g., word embeddings + positional encodings).
    *   $d_k$ is the dimension of keys (and queries). Scaling by $\sqrt{d_k}$ helps prevent vanishing gradients during softmax.

**How it works:**

1.  **Linear Projections:** The input embeddings (with positional encodings) are linearly projected to create $Q$, $K$, and $V$ matrices.
2.  **Score Calculation:** For each query vector, compute similarity scores with all key vectors. This is typically done using a dot product: $Q K^T$.
3.  **Scaling:** Divide the scores by $\sqrt{d_k}$.
4.  **Softmax:** Apply softmax to the scaled scores to obtain attention weights. These weights indicate how much "attention" each element should pay to every other element.
5.  **Weighted Sum:** Multiply the attention weights by the value vectors and sum them up. This produces the output representation for each element, incorporating context from other elements in the sequence.

**Example:** In the sentence "The animal didn't cross the street because it was too tired.", when processing the word "it", self-attention can help determine that "it" refers to "the animal". The attention weights for "it" would be high for "animal".

**b) Multi-Head Attention**

Instead of performing a single attention function, multi-head attention performs attention multiple times in parallel with different learned linear projections.

**Key Concepts & Definitions:**

*   **Multiple Attention "Heads":** Each head learns different linear projections for $Q, K, V$.
*   **Concatenation and Projection:** The outputs from all heads are concatenated and then linearly projected to produce the final output.

**How it works:**

1.  **Split Q, K, V:** The $Q, K, V$ matrices are linearly projected $h$ times into smaller dimension subspaces, creating $h$ sets of ($Q_i, K_i, V_i$) for $i=1...h$.
2.  **Parallel Attention:** Apply the scaled dot-product attention function independently to each set:
    `head_i = Attention(Q_i, K_i, V_i)`
3.  **Concatenate:** Concatenate the outputs of all heads:
    `Concat(head_1, head_2, ..., head_h)`
4.  **Final Linear Projection:** Linearly project the concatenated output to the desired dimension:
    `MultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O`
    where $W^O$ is a learned weight matrix.

**Benefits:**

*   **Captures Diverse Relationships:** Allows the model to jointly attend to information from different representation subspaces at different positions. For example, one head might focus on syntactic relationships, while another focuses on semantic relationships.
*   **Enriched Representations:** The combined output provides a richer representation of the sequence.

**c) Positional Encoding**

Since the Transformer processes all tokens in parallel without recurrence, it needs a mechanism to inform the model about the order of tokens.

**Key Concepts & Definitions:**

*   **Injecting Positional Information:** Added to the input embeddings before they are fed into the encoder/decoder layers.
*   **Sinusoidal Functions:** The original Transformer paper uses sine and cosine functions of different frequencies to generate positional encodings.
    *   For a position *pos* and dimension *i*:
        $PE(pos, 2i) = \sin(pos / 10000^{2i / d_{model}})$
        $PE(pos, 2i+1) = \cos(pos / 10000^{2i / d_{model}})$
        where $d_{model}$ is the dimension of the embeddings.
*   **Learned Positional Embeddings:** Alternatively, positional embeddings can be learned during training.

**Why it's important:**

*   **Order Awareness:** Enables the model to understand the order of words in a sentence, which is crucial for meaning.
*   **Generalization:** Sinusoidal encodings allow the model to generalize to sequence lengths not seen during training, as they can generate encodings for any position.

---

### 7. Comparing RNN-based Encoder-Decoder with Transformer Models

Both architectures aim to solve seq2seq problems, but they differ significantly in their approach.

| Feature           | RNN-based Encoder-Decoder (with Attention)                      | Transformer Model                                                                |
| :---------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **Core Mechanism**| Recurrence (sequential processing) and Attention                | Self-Attention and Feed-Forward Networks (parallel processing)                   |
| **Sequence Processing** | Sequential, one token at a time                                 | Parallel, all tokens processed simultaneously (via attention)                    |
| **Handling Long Sequences** | Better than basic RNNs due to attention, but can still struggle with very long sequences due to sequential nature and potential gradient issues. | Highly effective due to parallel processing and ability to directly model long-range dependencies. |
| **Parallelization** | Limited parallelization within sequences due to recurrence.     | High parallelization potential, leading to faster training on GPUs.             |
| **Computational Complexity** | For sequence length $n$ and embedding size $d$: $O(n^2 d)$ per layer in theory, but often closer to $O(nd)$ due to sequential processing. | For sequence length $n$ and embedding size $d$: $O(n^2 d)$ per layer (due to self-attention matrix calculation). |
| **Context Capture** | Context vector in basic model is a bottleneck. Attention helps by providing dynamic context. | Self-attention allows direct modeling of relationships between all pairs of tokens. |
| **Positional Information** | Inherently handled by the sequential nature of RNNs.          | Requires explicit positional encoding.                                           |
| **Interpretability**| Attention weights can show input-output alignment.            | Self-attention weights can show intra-sequence relationships.                  |
| **Memory Usage**  | Can be high for very long sequences due to storing intermediate states. | Can be high due to the $O(n^2)$ attention matrix, especially for very long sequences. |
| **Dominant Use Cases** | Machine Translation, Speech Recognition, Text Summarization (historically and still relevant). | State-of-the-art in Machine Translation, Text Generation, Question Answering, Text Classification, etc. Foundation for models like BERT, GPT. |

**Key Takeaways for Comparison:**

*   **Parallelism:** Transformer's primary advantage is its ability to process sequences in parallel, leading to significantly faster training.
*   **Long-Range Dependencies:** Transformers excel at capturing long-range dependencies due to direct attention between any two positions, whereas RNNs struggle more with this.
*   **Architecture Simplicity:** While the concepts (multi-head attention, positional encoding) are complex, the overall structure of the Transformer (stacks of identical layers) is arguably cleaner than managing recurrent states.

---

### Practice Questions

**Section 1: Encoder-Decoder with RNNs**

1.  What are the two main components of an Encoder-Decoder model?
2.  Explain the role of the context vector in the basic Encoder-Decoder architecture. What is its main limitation?
3.  Why are RNNs (like LSTMs or GRUs) commonly used in Encoder-Decoder models?

**Section 2: Attention Mechanisms**

4.  What problem does the attention mechanism aim to solve in Encoder-Decoder models?
5.  Describe the general steps involved in computing the context vector using an attention mechanism at a single decoder step.
6.  What are the benefits of using attention mechanisms?

**Section 3: Transformers**

7.  What fundamental change did the Transformer architecture introduce compared to RNN-based seq2seq models?
8.  Explain the concept of self-attention. How does it differ from standard attention mechanisms used in RNN-based models?
9.  What is the purpose of positional encoding in the Transformer?
10. What is the role of "masking" in the Transformer's decoder?
11. What are the advantages of Multi-Head Attention over single-head attention?

**Section 4: Comparison**

12. Compare and contrast the parallelization capabilities of RNN-based models and Transformers.
13. Which architecture is generally better at capturing very long-range dependencies and why?

---

### Answers to Practice Questions

**Section 1: Encoder-Decoder with RNNs**

1.  The two main components are the **Encoder** and the **Decoder**.
2.  The context vector is a **fixed-length representation that summarizes the entire input sequence**. Its main limitation is being an **information bottleneck**, leading to information loss for long sequences and difficulty in retaining information from the beginning of the sequence.
3.  RNNs are used because they can **process sequential data by maintaining a hidden state that captures information from previous time steps**. This sequential nature is well-suited for language, and LSTMs/GRUs help mitigate the vanishing gradient problem, allowing them to capture longer dependencies than vanilla RNNs.

**Section 2: Attention Mechanisms**

4.  The attention mechanism aims to solve the problem of the **information bottleneck caused by the fixed-length context vector** in basic Encoder-Decoder models, allowing the decoder to dynamically focus on relevant parts of the input.
5.  At a single decoder step:
    *   Calculate **alignment scores** between the decoder's current hidden state and each of the encoder's hidden states.
    *   Compute **attention weights** by normalizing these scores using a softmax function.
    *   Calculate a **weighted context vector** by taking a weighted sum of the encoder hidden states, using the attention weights.
6.  Benefits include **handling long sequences more effectively**, **improving performance** on seq2seq tasks, and providing **interpretability** through visualizations of attention weights.

**Section 3: Transformers**

7.  The Transformer architecture **dispenses with recurrence and convolution, relying entirely on attention mechanisms (specifically self-attention)** to model dependencies in sequences.
8.  **Self-attention** is an attention mechanism that relates different positions of a **single sequence** to compute a representation of the sequence. It allows each word in a sentence to attend to all other words (including itself) in the *same* sentence, capturing intra-sentence relationships. This differs from standard attention in RNN-based models, which typically focus on the relationship between the decoder's current state and the *entire* encoder output sequence.
9.  Positional encoding is used to **inject information about the relative or absolute position of tokens in the sequence**, as the Transformer's parallel processing mechanism does not inherently preserve order.
10. Masking in the decoder's self-attention prevents positions from attending to **subsequent positions** (future tokens) in the target sequence. This ensures that the prediction for a given position only depends on the already generated output tokens.
11. Multi-Head Attention allows the model to **jointly attend to information from different representation subspaces at different positions**. Each "head" can learn to focus on different types of relationships (e.g., syntactic, semantic), leading to richer and more robust representations.

**Section 4: Comparison**

12. **RNN-based models** have limited parallelization within a sequence due to their sequential processing nature. The Transformer, by processing all tokens in parallel via self-attention, offers **much higher parallelization capabilities**, leading to faster training times.
13. The **Transformer** is generally better at capturing very long-range dependencies because its self-attention mechanism allows any two positions in the sequence to interact directly, regardless of their distance. RNNs, despite improvements with LSTMs/GRUs, can still struggle to propagate information over very long sequences due to the sequential nature of information flow and potential gradient issues.

---

### Important Points to Remember:

*   **Encoder-Decoder:** A fundamental architecture for sequence-to-sequence tasks.
*   **Context Vector Bottleneck:** The primary limitation of basic encoder-decoder models.
*   **Attention:** Solves the bottleneck by allowing dynamic focus on input parts.
*   **Transformer:** Replaces recurrence with self-attention for better parallelization and long-range dependency modeling.
*   **Self-Attention:** Core of Transformer; relates elements within the *same* sequence.
*   **Positional Encoding:** Crucial for Transformers to understand sequence order.
*   **Multi-Head Attention:** Enhances Transformer's ability to capture diverse relationships.
*   **Parallelization:** A key advantage of Transformers over RNNs.
*   **Interpretability:** Attention weights can offer insights into model behavior.
