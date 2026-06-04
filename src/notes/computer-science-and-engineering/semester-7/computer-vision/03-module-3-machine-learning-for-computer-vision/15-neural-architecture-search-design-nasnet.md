---
title: "Neural Architecture Search Design - NASNet"
subject: "COMPUTER VISION"
module: "Module 3: Machine Learning for  Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3b8"
status: "completed"
scrapedAt: "2026-05-20T17:03:22.217Z"
---
# Computer Vision: Module 3 - Machine Learning for Computer Vision

## Topic: Neural Architecture Search Design - NASNet

### Learning Outcomes

*   Understand the fundamental principles of Neural Architecture Search (NAS).
*   Learn about the challenges and motivations behind NAS.
*   Explore the architecture of NASNet, a pioneering NAS algorithm.
*   Analyze the search space and search strategy employed in NASNet.
*   Understand the transferability and effectiveness of NASNet.

---

### 1. Introduction to Neural Architecture Search (NAS)

#### 1.1 What is Neural Architecture Search (NAS)?

*   **Definition:** Neural Architecture Search (NAS) is a machine learning technique that automates the design of neural network architectures. Instead of human experts manually designing architectures, NAS algorithms systematically explore a predefined search space of possible architectures to find the one that performs best on a given task and dataset.
*   **Goal:** To discover neural network architectures that achieve state-of-the-art performance with minimal human intervention, potentially leading to more efficient and accurate models.

#### 1.2 Motivations for NAS

*   **Complexity of Manual Design:** Designing high-performing neural networks is a complex, time-consuming, and iterative process requiring significant expertise.
*   **Task-Specific Architectures:** Different computer vision tasks (e.g., image classification, object detection, semantic segmentation) often benefit from specialized architectures. NAS can find these task-specific optimal designs.
*   **Efficiency and Resource Constraints:** NAS can optimize architectures not only for accuracy but also for computational efficiency (e.g., FLOPs, latency, number of parameters), which is crucial for deployment on edge devices or real-time applications.
*   **Discovering Novel Designs:** NAS can uncover architectural patterns and building blocks that human designers might not have conceived.

#### 1.3 Challenges in NAS

*   **Massive Search Space:** The space of possible neural network architectures is astronomically large, making exhaustive search infeasible.
*   **High Computational Cost:** Evaluating each candidate architecture typically requires training it on a dataset, which is computationally expensive and time-consuming.
*   **Defining the Search Space:** Deciding what types of operations, connections, and layer configurations to include in the search space is crucial for the success of NAS.
*   **Search Strategy:** Efficiently navigating the vast search space to find good architectures without getting stuck in local optima is a significant challenge.
*   **Performance Estimation:** Accurately and efficiently estimating the performance of an untrained or partially trained architecture is an active research area.

---

### 2. NASNet: A Pioneering NAS Algorithm

#### 2.1 Overview of NASNet

*   **NASNet (Neural Architecture Search Network)** was one of the first successful NAS algorithms that demonstrated state-of-the-art performance on image classification tasks.
*   **Key Idea:** Instead of searching for an entire network from scratch, NASNet focuses on designing reusable architectural building blocks (called "cells") that are then stacked to form the final network. This significantly reduces the complexity of the search space.

#### 2.2 Types of Cells in NASNet

NASNet defines two types of cells:

*   **Normal Cell:** Designed to preserve the spatial resolution of the feature maps.
*   **Reduction Cell:** Designed to reduce the spatial resolution of the feature maps (e.g., by downsampling).

**Example:** For an image classification network, reduction cells would typically be placed after certain blocks to progressively decrease the spatial dimensions and increase the channel depth, eventually leading to a final classification layer.

#### 2.3 Architecture of a NASNet Cell

*   **Cell Structure:** A cell in NASNet is a directed acyclic graph (DAG) where nodes represent feature maps and edges represent operations.
*   **Operations:** A limited set of predefined operations is used, such as:
    *   3x3 Convolution (with stride 1 or 2)
    *   5x5 Convolution (with stride 1 or 2)
    *   3x3 Depthwise Separable Convolution (with stride 1 or 2)
    *   3x3 Max Pooling
    *   3x3 Average Pooling
    *   Identity Mapping (skip connection)
*   **Cell Construction:** A cell is constructed by selecting a sequence of operations and combining their outputs. The goal is to find the optimal sequence of operations and connections.

**Visual Representation of a Cell:**

Imagine a cell as a grid where each cell can contain an operation. Edges connect the output of one operation to the input of another.

```
Input -> Operation A -> Feature Map 1
       |
       -> Operation B -> Feature Map 2
              /
             /
Output <- Concatenate(Feature Map 1, Feature Map 2)
```

*   **Search for Cell Structure:** NASNet uses a reinforcement learning (RL) based approach to search for the optimal cell structure.

---

### 3. Search Space and Search Strategy in NASNet

#### 3.1 The Search Space

*   **Cell-Based Search:** Instead of searching for the entire network architecture, NASNet searches for the structure of a single "normal" cell and a single "reduction" cell.
*   **Fixed Number of Nodes:** Each cell has a fixed number of internal nodes (e.g., 5 nodes in the original NASNet paper, plus the input nodes).
*   **Operation Selection:** For each connection between nodes, the search space involves selecting one operation from a predefined set of 2-5 operations.
*   **Combination Strategy:** The outputs of nodes are combined (e.g., by element-wise addition or concatenation) to form the input for subsequent nodes or the cell's output.

**Example of Search Space Element:**

Consider a cell with two input nodes and a target output node. The search process might decide:

*   Input 1 -> 3x3 Conv (stride 1) -> Intermediate Node 1
*   Input 2 -> 5x5 Conv (stride 1) -> Intermediate Node 2
*   Intermediate Node 1 + Intermediate Node 2 -> Output

The NAS algorithm searches for the best operations to perform at each step and how to combine intermediate results.

#### 3.2 Search Strategy: Reinforcement Learning (RL)

*   **Controller Network:** NASNet employs a separate neural network, often a recurrent neural network (RNN), called the "controller," to propose candidate architectures.
*   **Action Space:** The controller outputs a sequence of actions (e.g., choosing an operation for a specific connection in the cell).
*   **State Space:** The state of the controller depends on the previously generated architecture components.
*   **Reward Signal:** After the controller proposes a cell architecture, it is trained on the target dataset. The accuracy of this trained cell on a validation set serves as the reward signal.
*   **Policy Gradient:** The controller is updated using policy gradient methods (e.g., REINFORCE algorithm) to increase the probability of generating architectures that lead to higher rewards.
*   **Two Phases:**
    1.  **Search Phase:** The controller proposes candidate cell architectures, which are trained and evaluated to get reward signals.
    2.  **Training Phase:** The best cell architectures discovered during the search phase are used to construct the final NASNet model, which is then trained from scratch on the target dataset.

#### 3.3 Sample Efficiency Improvements

*   **Weight Sharing:** To speed up the search, NASNet shares weights among all candidate architectures. This means that a single set of weights is updated for all proposed cells, making the training of each proposed architecture much faster.
*   **Nesting Search:** NASNet also proposes a "nested" search approach. Instead of searching for a single cell, it searches for an "m-class" architecture where the final feature map is divided into `m` groups, and each group is generated using a separately searched cell. This allows for more complex and efficient architectures.

---

### 4. Transferability and Effectiveness of NASNet

#### 4.1 Transfer Learning with NASNet

*   **Pre-trained NASNet:** Once a NASNet architecture is found and trained on a large dataset like ImageNet, the learned cell structures can be highly effective when transferred to other computer vision tasks and datasets.
*   **Benefits of Transfer:** Transferring NAS-designed cells can lead to:
    *   Faster convergence on new tasks.
    *   Improved performance on the new tasks, even with smaller datasets.
    *   Reduced need for extensive manual architecture tuning for new problems.

#### 4.2 Effectiveness on Various Tasks

*   **Image Classification:** NASNet achieved state-of-the-art results on ImageNet and CIFAR-10, outperforming manually designed architectures like ResNet and Inception.
*   **Object Detection and Segmentation:** The principles of NAS and the learned cell structures from NASNet have been successfully applied to object detection and semantic segmentation tasks, demonstrating its broad applicability.

#### 4.3 NASNet-A, NASNet-B, and NASNet-C

*   **Different Search Objectives:** The original NASNet paper introduced different variants by optimizing for different criteria:
    *   **NASNet-A:** Optimized for latency on mobile CPUs.
    *   **NASNet-B:** Optimized for accuracy on ImageNet.
    *   **NASNet-C:** A larger version of NASNet-B, further improving accuracy.
*   **Trade-offs:** These variants highlight the ability of NAS to balance accuracy and computational efficiency based on specific deployment requirements.

**Important Point:** The success of NASNet demonstrated that automated architecture search could indeed find superior architectures compared to human designs, paving the way for many subsequent NAS algorithms.

---

### 5. Practice Questions and Exercises

**Question 1:** What is the primary goal of Neural Architecture Search (NAS)?
**Answer:** The primary goal of NAS is to automate the design of neural network architectures, finding optimal configurations that perform well on specific tasks and datasets, potentially exceeding human-designed architectures in performance and efficiency.

**Question 2:** Explain the concept of "cells" in NASNet. Why was this approach used instead of searching for an entire network architecture?
**Answer:** In NASNet, "cells" are reusable architectural building blocks designed to perform specific transformations on feature maps. Instead of searching for an entire network, NASNet searches for the optimal structure of a "normal" cell (preserving resolution) and a "reduction" cell (reducing resolution). This approach was used because it significantly reduces the complexity and size of the search space, making the search more computationally feasible.

**Question 3:** Describe the role of the "controller" in NASNet's search strategy.
**Answer:** The controller (typically an RNN) in NASNet is responsible for proposing candidate cell architectures. It generates a sequence of actions that define the connections and operations within a cell. The controller learns to propose better architectures by receiving a reward signal (e.g., accuracy on a validation set) for the architectures it generates and updating its parameters using policy gradient methods.

**Question 4:** What are the advantages of using weight sharing in NASNet's search phase?
**Answer:** Weight sharing in NASNet's search phase significantly improves sample efficiency and reduces the overall computational cost. By sharing weights among all candidate architectures proposed by the controller, each candidate architecture can be evaluated much faster as it doesn't require training a full set of weights from scratch.

**Question 5:** How does NASNet's search for cell structures contribute to the transferability of learned architectures?
**Answer:** By designing effective and reusable cell structures that are optimized for certain tasks (e.g., ImageNet classification), these learned cell structures can be effectively transferred to new tasks and datasets. This means that a NASNet architecture, once found, can serve as a strong starting point or backbone for other computer vision problems, leading to better performance and faster convergence.

---

### 6. Important Points to Remember

*   **NAS automates architecture design.**
*   **NASNet uses a cell-based search to manage complexity.**
*   **Normal cells preserve resolution; reduction cells reduce it.**
*   **Reinforcement Learning (RL) is a common search strategy for NAS.**
*   **Controllers propose architectures, and rewards guide their learning.**
*   **Weight sharing significantly speeds up the NAS process.**
*   **NASNet demonstrated state-of-the-art performance and good transferability.**
*   **NAS can be tailored to optimize for accuracy, latency, or other metrics.**

---
