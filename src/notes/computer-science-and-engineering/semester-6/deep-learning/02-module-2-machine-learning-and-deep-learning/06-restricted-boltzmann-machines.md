---
title: "Restricted Boltzmann Machines"
subject: "DEEP LEARNING"
module: "Module 2: Machine Learning and Deep learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb31"
status: "completed"
scrapedAt: "2026-05-20T16:52:18.997Z"
---
# DEEP LEARNING - Module 2: Machine Learning and Deep Learning - Restricted Boltzmann Machines (RBMs)

## Learning Outcomes:

*   Understand the architecture and components of Restricted Boltzmann Machines (RBMs).
*   Explain the concepts of energy-based models and how RBMs fit within that framework.
*   Describe the learning algorithm (Contrastive Divergence) for RBMs.
*   Apply RBMs for dimensionality reduction and feature learning.
*   Understand the limitations and advantages of RBMs.

## 1. Introduction to Restricted Boltzmann Machines (RBMs)

*   **Definition:** A Restricted Boltzmann Machine (RBM) is a generative stochastic neural network that can learn a probability distribution over its set of inputs.  It is an energy-based model, meaning it defines a probability distribution by associating an energy to each possible state.

*   **Key Characteristics:**
    *   **Two Layers:** Visible Layer (input) and Hidden Layer.
    *   **Undirected Connections:** Connections between visible and hidden units are undirected, meaning influence goes both ways.
    *   **Bipartite Graph:**  Connections are ONLY between visible and hidden units.  There are NO connections within a layer (no visible-to-visible or hidden-to-hidden connections). This restriction is what makes it "restricted".
    *   **Stochastic Units:** Visible and hidden units are stochastic (binary or Gaussian). Each unit has a probability of being active (1) or inactive (0), determined by the units it's connected to.

## 2. Architecture and Components

*   **Visible Layer (v):**
    *   Represents the observed data (input).  The number of visible units typically corresponds to the dimensionality of the input data.
    *   Each unit, v<sub>i</sub>, represents a feature of the input data.
    *   Can use binary (0 or 1) or real-valued (Gaussian) units, depending on the nature of the input data.  Binary units are suitable for binary features, while Gaussian units are suitable for continuous features.

*   **Hidden Layer (h):**
    *   Represents learned features or abstract representations of the input data.
    *   Each unit, h<sub>j</sub>, represents a learned feature.
    *   Typically uses binary units.
    *   The number of hidden units determines the model's capacity to learn complex features.  More hidden units allow for more complex representations but can also lead to overfitting.

*   **Weights (W):**
    *   W<sub>ij</sub> represents the weight connecting visible unit v<sub>i</sub> to hidden unit h<sub>j</sub>.
    *   These weights are learned during the training process and capture the relationships between visible and hidden units.

*   **Biases (a and b):**
    *   **Visible Bias (a<sub>i</sub>):** Associated with each visible unit v<sub>i</sub>. Influences the probability of that unit being active, independent of the hidden units.
    *   **Hidden Bias (b<sub>j</sub>):** Associated with each hidden unit h<sub>j</sub>. Influences the probability of that unit being active, independent of the visible units.

*   **Mathematical Representation:**
    *   Let **v** be the vector of visible unit states and **h** be the vector of hidden unit states. The RBM defines a joint probability distribution P(**v**, **h**) over visible and hidden units.

## 3. Energy-Based Models and RBMs

*   **Energy Function:** Energy-based models define a probability distribution through an energy function E(**v**, **h**). Lower energy states are considered more probable.

*   **Energy Function for RBMs:**
    E(**v**, **h**) = -  ∑<sub>i</sub> a<sub>i</sub>v<sub>i</sub> - ∑<sub>j</sub> b<sub>j</sub>h<sub>j</sub> - ∑<sub>i</sub>∑<sub>j</sub> v<sub>i</sub>W<sub>ij</sub>h<sub>j</sub>

    *   The first term (- ∑<sub>i</sub> a<sub>i</sub>v<sub>i</sub>) represents the energy associated with the visible biases.
    *   The second term (- ∑<sub>j</sub> b<sub>j</sub>h<sub>j</sub>) represents the energy associated with the hidden biases.
    *   The third term (- ∑<sub>i</sub>∑<sub>j</sub> v<sub>i</sub>W<sub>ij</sub>h<sub>j</sub>) represents the energy associated with the interactions between visible and hidden units (weighted connections).

*   **Probability Distribution:** The joint probability distribution P(**v**, **h**) is defined using the energy function and a normalization factor called the partition function (Z):

    P(**v**, **h**) =  exp(-E(**v**, **h**)) / Z

    where Z = ∑<sub>v</sub>∑<sub>h</sub> exp(-E(**v**, **h**))  (summing over all possible states of v and h)

*   **Marginal Probability (P(v)):** To use the RBM as a generative model, we need to calculate the probability of a given visible vector **v**:

    P(**v**) =  ∑<sub>h</sub> P(**v**, **h**) = ∑<sub>h</sub> exp(-E(**v**, **h**)) / Z

*   **Conditional Probabilities:** Because of the RBM's restricted connections, conditional probabilities are easy to compute:

    *   P(h<sub>j</sub> = 1 | **v**) = sigmoid(b<sub>j</sub> + ∑<sub>i</sub> W<sub>ij</sub>v<sub>i</sub>)
    *   P(v<sub>i</sub> = 1 | **h**) = sigmoid(a<sub>i</sub> + ∑<sub>j</sub> W<sub>ij</sub>h<sub>j</sub>)

    where sigmoid(x) = 1 / (1 + exp(-x))

    **Important Note:** These conditional probabilities are independent of each other due to the bipartite graph structure.  Knowing **v**, all the h<sub>j</sub> are independent. Knowing **h**, all the v<sub>i</sub> are independent.  This independence greatly simplifies computation.

## 4. Learning Algorithm: Contrastive Divergence (CD)

*   **Goal:**  The goal of learning is to adjust the weights (W), visible biases (a), and hidden biases (b) to maximize the probability of the observed data (training data).  This is equivalent to minimizing the difference between the model's distribution and the data distribution.

*   **Challenges:** Computing the partition function (Z) is computationally intractable, making direct maximum likelihood estimation difficult.

*   **Contrastive Divergence (CD):** An approximate learning algorithm that avoids explicitly computing the partition function.  It compares the model's predictions to the observed data.

*   **CD-k Algorithm (k iterations):**

    1.  **Initialization:** Initialize weights (W), visible biases (a), and hidden biases (b) randomly.
    2.  **For each training example v:**
        a.  **Positive Phase (Data Phase):** Compute the conditional probability of the hidden units given the visible units: P(h<sub>j</sub> = 1 | **v**). Sample the hidden units **h** from this distribution.  This is often called "reconstruction."
        b.  **Negative Phase (Reconstruction Phase):**  Compute the conditional probability of the visible units given the hidden units: P(v<sub>i</sub> = 1 | **h**). Sample the visible units **v'** from this distribution (this is the "reconstruction").
        c.  **Iterative Reconstruction (k steps):** Perform *k* more alternating Gibbs sampling steps, using **v'** as the new visible units and repeating steps (a) and (b) *k* times. This leads to **v<sub>k</sub>**, the *k*-th reconstruction.  Often, *k* = 1 is sufficient.
        d.  **Update Parameters:** Update the weights and biases based on the difference between the data phase and the reconstruction phase:

            *   ΔW<sub>ij</sub> = learning_rate * ( <v<sub>i</sub>h<sub>j</sub>><sub>data</sub> - <v<sub>i</sub>h<sub>j</sub>><sub>reconstruction</sub> )
            *   Δa<sub>i</sub> = learning_rate * ( <v<sub>i</sub>><sub>data</sub> - <v<sub>i</sub>><sub>reconstruction</sub> )
            *   Δb<sub>j</sub> = learning_rate * ( <h<sub>j</sub>><sub>data</sub> - <h<sub>j</sub>><sub>reconstruction</sub> )

            where  <...> represents the expectation (average) over the samples.  For binary units, the expectation is simply the probability.

    3.  **Repeat** step 2 for multiple epochs (iterations over the entire training dataset).

*   **Intuition:**  CD attempts to minimize the difference between the distributions generated by the data and the model. By repeatedly sampling and reconstructing, the RBM gradually learns to represent the underlying structure of the data.  The algorithm moves probability mass towards the data and away from regions that don't resemble the data.

## 5. Applications of RBMs

*   **Dimensionality Reduction:**  RBMs can be used to reduce the dimensionality of data by learning a compressed representation in the hidden layer. The hidden layer activations can be used as features for other machine learning tasks.  The number of hidden units is typically smaller than the number of visible units, achieving dimensionality reduction.

*   **Feature Learning:** RBMs can learn useful features from unlabeled data. The weights connecting the visible and hidden layers represent the learned features. These features can be used for tasks like classification, clustering, and information retrieval.

*   **Collaborative Filtering:** RBMs have been used in recommender systems (e.g., Netflix) to model user preferences and predict which items a user might like.  Visible units represent items, and hidden units represent user preferences.

*   **Deep Belief Networks (DBNs) and Deep Boltzmann Machines (DBMs):** RBMs are often used as building blocks for deeper models like DBNs and DBMs. DBNs are created by stacking RBMs on top of each other, and DBMs are deeper extensions of RBMs with undirected connections between layers.

*   **Image and Speech Recognition:** RBMs have been applied to image and speech recognition tasks by learning features from raw pixel data or audio signals.

## 6. Advantages and Limitations

*   **Advantages:**
    *   **Unsupervised Feature Learning:**  RBMs can learn useful features from unlabeled data.
    *   **Generative Model:**  RBMs can generate new samples that resemble the training data.
    *   **Simple and Efficient Learning (Contrastive Divergence):**  The CD algorithm is relatively simple and computationally efficient.
    *   **Building Block for Deep Models:**  RBMs can be stacked to create deeper and more powerful models.

*   **Limitations:**
    *   **Training Complexity:**  Training RBMs can still be computationally expensive, especially for large datasets.
    *   **Contrastive Divergence is an Approximation:**  CD is an approximate learning algorithm and may not always converge to the optimal solution.
    *   **Limited Representation Power:**  RBMs with a single hidden layer may not be able to capture all the complexities of the data.
    *   **Hyperparameter Tuning:** RBMs have several hyperparameters (e.g., learning rate, number of hidden units, number of CD steps) that need to be tuned.
    *   **Replacement by More Advanced Techniques:** In many application areas, other deep learning techniques (e.g., autoencoders, GANs, VAEs) have superseded RBMs due to improved performance and training stability.

## 7. Important Points to Remember

*   RBMs are energy-based models that define a probability distribution using an energy function.
*   The bipartite graph structure of RBMs simplifies the computation of conditional probabilities.
*   Contrastive Divergence is an approximate learning algorithm that avoids computing the partition function directly.
*   RBMs can be used for dimensionality reduction, feature learning, and as building blocks for deeper models.
*   RBMs have been largely surpassed by other, more modern deep learning techniques.

## 8. Practice Questions and Exercises

**Question 1:** What are the key differences between Boltzmann Machines and Restricted Boltzmann Machines?

**Answer:** The main difference is the connectivity between units within a layer. Boltzmann Machines allow connections between all units, while Restricted Boltzmann Machines only allow connections between visible and hidden units (no intra-layer connections). This restriction makes RBMs easier to train.

**Question 2:** Explain the purpose of the visible and hidden biases in an RBM.

**Answer:** The visible biases influence the probability of a visible unit being active, independent of the hidden units. The hidden biases influence the probability of a hidden unit being active, independent of the visible units. They provide an inherent bias for each unit to be on or off.

**Question 3:** Describe the positive and negative phases of the Contrastive Divergence algorithm.

**Answer:**
*   **Positive Phase (Data Phase):** Given the input data (visible units), compute the conditional probability of the hidden units and sample their states.
*   **Negative Phase (Reconstruction Phase):** Given the sampled hidden units, compute the conditional probability of the visible units and sample their states to reconstruct the input.

**Question 4:** Why is the computation of the partition function challenging in RBMs?

**Answer:** The partition function involves summing over all possible states of the visible and hidden units, which grows exponentially with the number of units. This makes direct computation intractable for even moderately sized RBMs.

**Question 5:** How can RBMs be used for dimensionality reduction?

**Answer:** By training an RBM with fewer hidden units than visible units, the hidden layer learns a compressed representation of the input data. The activations of the hidden units can then be used as lower-dimensional features.

**Exercise:**

1.  Describe a scenario where using an RBM would be appropriate and one where it would not.
2.  Research and explain one specific real-world application (other than those mentioned in the notes) of an RBM, even if it is historical. What were the challenges involved, and what advantages did RBMs offer in that context?
