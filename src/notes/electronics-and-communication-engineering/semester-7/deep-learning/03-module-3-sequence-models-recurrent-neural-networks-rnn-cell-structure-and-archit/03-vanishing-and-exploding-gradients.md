---
title: "Vanishing and exploding gradients."
subject: "DEEP LEARNING"
module: "Module 3: Sequence models, Recurrent Neural Networks (RNN): cell structure and architecture"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff149"
status: "completed"
scrapedAt: "2026-05-23T18:05:52.890Z"
---
# Deep Learning: Module 3 - Sequence Models, RNNs: Cell Structure and Architecture

## Topic: Vanishing and Exploding Gradients

### 1. Introduction to Vanishing and Exploding Gradients

**Context:** Recurrent Neural Networks (RNNs) are designed to process sequential data. This means they maintain a hidden state that carries information from previous time steps to the current one. During training, the error is backpropagated through time (BPTT) to update the network's weights.

**The Problem:** The core issue of vanishing and exploding gradients arises during the backpropagation process in RNNs. It refers to the phenomenon where the gradients, used to update the network's weights, become either extremely small (vanish) or extremely large (explode) as they are propagated through many time steps.

**Learning Outcome Alignment:** This topic directly addresses the understanding of how RNNs learn and the challenges associated with it, contributing to CO3 (Solve real-world problems using RNN).

**Key Concepts:**

*   **Backpropagation Through Time (BPTT):** The algorithm used to train RNNs. It unrolls the network over time and applies standard backpropagation.
*   **Gradient:** The derivative of the loss function with respect to a weight. It indicates the direction and magnitude of change needed for the weight to minimize the loss.
*   **Time Steps:** Discrete points in a sequence (e.g., words in a sentence, frames in a video).
*   **Hidden State ($h_t$):** The internal memory of an RNN at time step $t$, computed using the input at $t$ and the hidden state at $t-1$.

**Textbook References:**

*   **Magnus Ekman, *Learning Deep Learning* (2022):** Discusses the fundamental challenges in training deep neural networks, including RNNs, and how gradients propagate.
*   **Aurelien Geron, *Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow* (2nd ed., 2019):** Provides practical insights into the difficulties of training RNNs and introduces solutions.
*   **Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning* (2016):** Offers a theoretical foundation for understanding gradient flow in deep networks.

---

### 2. Understanding Vanishing Gradients

**What it is:** When gradients become vanishingly small, they approach zero. This means that as errors are backpropagated through many time steps, the updates to the weights associated with earlier time steps become negligible.

**Why it happens:**

*   **Repeated Multiplication by Small Numbers:** In a standard RNN, the gradient of the loss with respect to a weight at an earlier time step involves multiplying by the Jacobian matrices of the recurrent connections. If these matrices have eigenvalues less than 1 (which is common with activation functions like sigmoid and tanh, especially when inputs are small), repeated multiplication will cause the gradient to shrink exponentially.

    *   **Mathematical Intuition (Simplified):** Consider a simple RNN with a single neuron and a recurrent connection. If the weight for the recurrent connection is $w$, and the activation function derivative is small, then the gradient component can be roughly multiplied by $w$ for each time step backward. If $|w| < 1$, this product shrinks quickly.

*   **Activation Functions:** Activation functions like the sigmoid and tanh have derivatives that are close to zero in their saturation regions (i.e., when their inputs are very large or very small). If the recurrent states consistently fall into these regions, the gradients will diminish.

**Consequences of Vanishing Gradients:**

*   **Difficulty Learning Long-Term Dependencies:** The network struggles to capture relationships between elements that are far apart in the sequence. For example, in a sentence, if the sentiment depends on a word at the beginning of a very long sentence, a network suffering from vanishing gradients won't be able to connect that early word to the final prediction.
*   **Slow Convergence or Stagnation:** Training becomes very slow or stops altogether because the weights are not being updated effectively.

**Example:** Imagine an RNN trying to predict the next word in a very long sentence. If the sentence starts with "The weather today is...", and the crucial information about the location (e.g., "in Paris") is many words later, the RNN might "forget" the initial context due to vanishing gradients.

**Important Point to Remember:** Vanishing gradients prevent the network from learning from past information that is far away in the sequence.

**Textbook References:**

*   **Michael Nielsen, *Neural Networks and Deep Learning* (2019):** Explains gradient descent and backpropagation, implicitly highlighting how chain rule multiplications can lead to vanishing gradients.
*   **Astan Zhang and Zachary and Alexander Semola, *Dive deep into machine learning* (2019):** Likely provides a more in-depth mathematical exposition on how activation functions contribute to vanishing gradients.

---

### 3. Understanding Exploding Gradients

**What it is:** When gradients become excessively large, they move away from zero, often to values that cause numerical overflow or extremely large weight updates.

**Why it happens:**

*   **Repeated Multiplication by Large Numbers:** Similar to vanishing gradients, but in this case, the Jacobian matrices of the recurrent connections have eigenvalues greater than 1. Repeated multiplication of these large eigenvalues as gradients are backpropagated leads to exponential growth of the gradient values.

    *   **Mathematical Intuition (Simplified):** If the recurrent weight $w$ is significantly greater than 1, then repeated multiplication by $w$ will cause the gradient to grow rapidly.

*   **Unstable Weights:** Large weights in the recurrent connections can amplify small errors or activations into very large ones.

**Consequences of Exploding Gradients:**

*   **Training Instability:** The network's weights can fluctuate wildly, preventing it from converging to a good solution. The loss function might jump around erratically.
*   **Numerical Overflow:** The gradient values can become so large that they exceed the maximum representable value for floating-point numbers, leading to "NaN" (Not a Number) or "Inf" (Infinity) errors.

**Example:** Consider an RNN trying to generate text. If exploding gradients occur, the generated text might become nonsensical gibberish very quickly, with characters or words repeating or changing drastically without reason.

**Important Point to Remember:** Exploding gradients make the training process unstable and prevent the network from learning effectively due to extreme weight updates.

**Textbook References:**

*   **Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning* (2016):** Dedicates sections to the challenges of training deep recurrent networks, including exploding gradients.
*   **Charu C. Aggarwal, *Neural Networks and Deep Learning: A Textbook* (2019):** Likely provides a rigorous mathematical analysis of how weight magnitudes can lead to exploding gradients.

---

### 4. Causes and Visualizations

**Common Causes:**

*   **Deep Recurrent Structure:** The "depth" of an RNN is its length in time. The deeper (longer) the sequence, the more multiplications occur during backpropagation.
*   **Weight Initialization:** Poorly initialized weights, especially those with large magnitudes for recurrent connections, can predispose the network to exploding gradients.
*   **Activation Functions:** While tanh and sigmoid can contribute to vanishing gradients, certain combinations or specific weight values can amplify gradients with them as well.
*   **Learning Rate:** An excessively high learning rate can exacerbate the problem of exploding gradients by making large updates even larger.

**Visualizing Gradients:**

*   **Gradient Norm:** Monitoring the norm (magnitude) of the gradients during training can reveal if they are consistently too large (exploding) or too small (vanishing). A plot of gradient norm over time steps or epochs can be very informative.
*   **Weight Histograms:** Observing the distribution of weights can indicate if they are growing too large.

**Textbook References:**

*   **Aurelien Geron, *Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow* (2nd ed., 2019):** Practical examples often include visualizing training progress, which can implicitly show gradient issues.
*   **David Foster, *Generative Deep Learning* (2022):** May touch upon gradient behavior in the context of generative models that often utilize RNNs.

---

### 5. Solutions and Mitigation Strategies

The primary goal of mitigation strategies is to control the magnitude of gradients during training.

#### 5.1 Gradient Clipping

**Concept:** Gradient clipping is a technique to prevent exploding gradients by limiting the magnitude of gradients. If the norm of the gradient exceeds a predefined threshold, it is scaled down so that its norm equals the threshold.

**How it works:**

1.  Calculate the gradient of the loss with respect to the network's parameters.
2.  Compute the L2 norm of the gradient vector: $||g||_2 = \sqrt{\sum_i g_i^2}$.
3.  Define a clipping threshold, `max_grad_norm`.
4.  If $||g||_2 > \text{max\_grad\_norm}$, then rescale the gradient: $g_{\text{clipped}} = g \times \frac{\text{max\_grad\_norm}}{||g||_2}$.
5.  Otherwise, use the original gradient: $g_{\text{clipped}} = g$.
6.  Update the weights using the clipped gradient: $\theta \leftarrow \theta - \text{learning\_rate} \times g_{\text{clipped}}$.

**Benefits:**

*   Effectively prevents exploding gradients.
*   Relatively simple to implement.

**Drawbacks:**

*   Doesn't directly solve vanishing gradients.
*   Choosing the right `max_grad_norm` can be empirical.

**Textbook References:**

*   **Aurelien Geron, *Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow* (2nd ed., 2019):** Likely includes practical code examples of implementing gradient clipping in TensorFlow/Keras.
*   **Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning* (2016):** Provides theoretical justification for gradient clipping.

#### 5.2 Gated Recurrent Units (GRUs) and Long Short-Term Memory (LSTM) Networks

These are specialized types of RNNs designed to overcome the vanishing gradient problem by introducing gating mechanisms that control the flow of information.

**5.2.1 Long Short-Term Memory (LSTM)**

**Concept:** LSTMs have a more complex cell structure than standard RNNs, featuring a "cell state" and three primary "gates" (forget, input, output) that regulate the flow of information into and out of the cell state.

**Key Components of an LSTM Cell:**

*   **Cell State ($C_t$):** The "memory" of the LSTM. It runs through the entire chain, with only minor linear interactions. Information can be added or removed from the cell state via gates. This linear path helps maintain gradients over long sequences.
*   **Forget Gate ($f_t$):** Decides what information to throw away from the cell state. It takes the current input $x_t$ and the previous hidden state $h_{t-1}$ and outputs a number between 0 and 1 for each number in the cell state $C_{t-1}$.
    *   $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$
*   **Input Gate ($i_t$):** Decides which new information to store in the cell state. It has two parts:
    *   The sigmoid layer ($i_t$) decides which values to update.
    *   The tanh layer creates a vector of new candidate values ($\tilde{C}_t$) that could be added to the state.
    *   $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$
    *   $\tilde{C}_t = \tanh(W_C \cdot [h_{t-1}, x_t] + b_C)$
*   **Updating the Cell State:** The old cell state $C_{t-1}$ is updated to the new cell state $C_t$. The old state is forgotten by multiplying with $f_t$, and the new candidate values are added, scaled by $i_t$.
    *   $C_t = f_t \times C_{t-1} + i_t \times \tilde{C}_t$
*   **Output Gate ($o_t$):** Decides what to output. It uses the current input $x_t$ and previous hidden state $h_{t-1}$ to decide which parts of the cell state to output. The cell state is put through $\tanh$ (to push values between -1 and 1) and then multiplied by the output of the sigmoid gate.
    *   $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$
    *   $h_t = o_t \times \tanh(C_t)$

**How LSTMs Help Vanishing Gradients:** The cell state ($C_t$) acts as a highway for information. The forget gate ($f_t$) allows information to pass through unchanged (if $f_t \approx 1$), meaning gradients can flow through these "unfiltered" paths without being significantly diminished. The additive interactions in updating the cell state also contribute to a more stable gradient flow compared to the multiplicative interactions in standard RNNs.

**Textbook References:**

*   **Aurelien Geron, *Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow* (2nd ed., 2019):** Provides a comprehensive explanation and implementation of LSTMs.
*   **Magnus Ekman, *Learning Deep Learning* (2022):** Discusses advanced sequence models like LSTMs and their role in handling long-term dependencies.
*   **Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning* (2016):** Offers a deep dive into the mathematical formulation and advantages of LSTMs.

**5.2.2 Gated Recurrent Unit (GRU)**

**Concept:** GRUs are a simplified version of LSTMs. They also use gating mechanisms but have a simpler structure, combining the forget and input gates into a single "update gate" and merging the cell state and hidden state.

**Key Components of a GRU Cell:**

*   **Update Gate ($z_t$):** This gate controls how much of the previous hidden state to keep and how much of the new candidate hidden state to add. It combines the functionality of the forget and input gates in LSTMs.
    *   $z_t = \sigma(W_z \cdot [h_{t-1}, x_t] + b_z)$
*   **Reset Gate ($r_t$):** This gate controls how much of the previous hidden state to forget when computing the new candidate hidden state.
    *   $r_t = \sigma(W_r \cdot [h_{t-1}, x_t] + b_r)$
*   **Candidate Hidden State ($\tilde{h}_t$):** This is a candidate for the new hidden state, calculated using the reset gate to decide how much of the previous hidden state to consider.
    *   $\tilde{h}_t = \tanh(W_{\tilde{h}} \cdot [r_t \times h_{t-1}, x_t] + b_{\tilde{h}})$
*   **New Hidden State ($h_t$):** The final hidden state is a linear interpolation between the previous hidden state and the candidate hidden state, controlled by the update gate.
    *   $h_t = (1 - z_t) \times h_{t-1} + z_t \times \tilde{h}_t$

**How GRUs Help Vanishing Gradients:** Similar to LSTMs, the gating mechanisms in GRUs allow for more controlled information flow and gradient propagation. The update gate, in particular, can keep a large portion of the previous hidden state (when $z_t \approx 1$), thereby facilitating the flow of gradients over longer sequences.

**Benefits of GRUs over LSTMs:**

*   Fewer parameters, leading to faster training and potentially better generalization on smaller datasets.
*   Simpler architecture.

**Textbook References:**

*   **Aurelien Geron, *Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow* (2nd ed., 2019):** Covers GRUs as an alternative to LSTMs.
*   **Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning* (2016):** Provides a thorough comparison of LSTMs and GRUs.

#### 5.3 Other Techniques

*   **Weight Initialization:** Using initialization schemes like Xavier or He initialization can help keep activations and gradients within a reasonable range.
*   **Activation Functions:** While tanh and sigmoid are common, ReLU (Rectified Linear Unit) and its variants (Leaky ReLU, etc.) have derivatives that are either 0 or 1, which can alleviate vanishing gradients in feedforward layers. However, their use in the recurrent part of an RNN cell needs careful consideration.
*   **Residual Connections:** Incorporating residual connections (as in ResNets) can create shortcut paths for gradients, helping them to flow more easily through deep architectures, including RNNs unfolded over many time steps.

**Course Outcome Alignment:** This section directly addresses the mechanisms that allow RNNs to learn effectively, crucial for CO3.

---

### 6. Practice Questions

**Question 1 (Conceptual):**
Explain the core difference between vanishing and exploding gradients in the context of Recurrent Neural Networks.

**Question 2 (Conceptual):**
Why do standard RNNs struggle with learning long-term dependencies, and how do activation functions contribute to this problem?

**Question 3 (Application):**
Describe the purpose of the forget gate and the cell state in an LSTM. How do these components help mitigate the vanishing gradient problem?

**Question 4 (Application):**
If you observe that the loss function in your RNN training fluctuates wildly and sometimes becomes "NaN", which gradient problem are you most likely facing, and what is the primary mitigation technique you would use first?

**Question 5 (Comparison):**
What are the main differences in architecture between an LSTM and a GRU, and how do these differences affect their performance and complexity?

---

### 7. Answers to Practice Questions

**Answer 1:**
Vanishing gradients occur when the gradients become extremely small during backpropagation, making it difficult for the network to learn from past inputs. Exploding gradients occur when gradients become extremely large, leading to unstable training and potential numerical overflow. Both are caused by the repeated multiplication of gradients across many time steps in an RNN.

**Answer 2:**
Standard RNNs struggle with long-term dependencies because during backpropagation through time, gradients are repeatedly multiplied by the recurrent weights. If these weights are small (or the activation function's derivative is small), the gradient diminishes exponentially as it propagates backward, failing to update weights associated with early time steps. Activation functions like sigmoid and tanh have derivatives close to zero in their saturation regions, which exacerbates this shrinking effect.

**Answer 3:**
*   **Cell State ($C_t$):** The LSTM's cell state acts as a conveyor belt for information throughout the sequence. It is designed to pass information through with minimal modification, allowing gradients to flow unimpeded over long time spans.
*   **Forget Gate ($f_t$):** The forget gate decides which pieces of information should be discarded from the cell state. By learning to keep relevant information (by outputting values close to 1), it prevents crucial gradients from vanishing. The ability to selectively forget or retain information via learned gates allows LSTMs to maintain a stable gradient flow.

**Answer 4:**
If the loss function fluctuates wildly and becomes "NaN", you are most likely facing **exploding gradients**. The primary mitigation technique to use first is **gradient clipping**. This technique caps the magnitude of gradients, preventing them from becoming excessively large and causing instability or overflow.

**Answer 5:**
The main differences between LSTM and GRU are:
*   **Cell State:** LSTMs have a separate "cell state" that acts as a memory. GRUs merge the cell state and hidden state into a single "hidden state".
*   **Gates:** LSTMs have three gates: forget, input, and output gates. GRUs have only two gates: an update gate (combining forget and input functionality) and a reset gate.
*   **Complexity:** GRUs have fewer parameters than LSTMs, making them computationally less expensive and faster to train. They can also perform comparably to LSTMs on many tasks.

---

### 8. Key Points to Remember

*   **Vanishing Gradients:** Gradients become close to zero, hindering learning of long-term dependencies.
*   **Exploding Gradients:** Gradients become very large, causing training instability and numerical errors.
*   **Cause:** Repeated multiplication of gradients during backpropagation through time in RNNs.
*   **Gradient Clipping:** A technique to prevent exploding gradients by limiting their maximum norm.
*   **LSTMs and GRUs:** Specialized RNN architectures with gating mechanisms designed to control information flow and mitigate vanishing gradients by providing more stable gradient paths.
*   **Cell State (LSTM):** A key component that acts as a memory highway, facilitating gradient flow.
*   **Gates (LSTM/GRU):** Learn to selectively pass or block information, crucial for managing gradients.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Further Reading & Exploration

*   **Original LSTM Paper:** Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. *Neural computation*, 9(8), 1735-1780.
*   **GRU Paper:** Cho, K., Van Merriënboer, B., Gulcehre, C., Bahdanau, D., Bougares, F., Schwenk, H., & Bengio, Y. (2014). Learning phrase representations using RNN encoder-decoder for statistical machine translation. *arXiv preprint arXiv:1406.1078*.
*   **Online Resources:** Blogs and tutorials on LSTMs and GRUs often provide intuitive explanations and code examples. (e.g., Christopher Olah's blog "Understanding LSTM Networks").

This concludes the study notes for Vanishing and Exploding Gradients in RNNs. Remember to practice implementing these concepts and observe their impact on model performance.