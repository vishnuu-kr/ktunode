---
title: "Modular architecture - ResNet"
subject: "COMPUTER VISION"
module: "Module 3: Machine Learning for  Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3b7"
status: "completed"
scrapedAt: "2026-05-20T17:03:21.518Z"
---
# Computer Vision: Module 3 - Machine Learning for Computer Vision

## Topic: Modular Architecture - ResNet

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the limitations of traditional deep neural networks (DNNs) for very deep architectures.
*   Explain the concept of vanishing gradients and its impact on training deep networks.
*   Describe the core idea behind residual learning and how it addresses the vanishing gradient problem.
*   Explain the architecture of a Residual Network (ResNet) and its key components, including residual blocks.
*   Discuss the benefits of using ResNets in computer vision tasks.
*   Identify common variations and applications of ResNets.

---

### 1. Limitations of Traditional Deep Neural Networks (DNNs)

Deep neural networks have revolutionized computer vision. However, as we try to make these networks deeper (more layers) to capture more complex features, we encounter significant challenges.

*   **Accuracy Degradation Problem:** Counter-intuitively, simply stacking more layers onto a traditional DNN doesn't always lead to better performance. In many cases, deeper networks perform *worse* than their shallower counterparts on both training and testing sets. This is known as the "accuracy degradation problem."
    *   **Why does this happen?** It's not due to overfitting, as the degradation occurs on the training set itself. The primary culprit is the difficulty in optimizing very deep networks.

---

### 2. The Vanishing Gradient Problem

The training of neural networks relies on the backpropagation algorithm, which uses gradient descent to update weights. Gradients are calculated by propagating the error signal backward through the network.

*   **Gradient:** A measure of how much a small change in a parameter (weight or bias) affects the output of the network.
*   **Backpropagation:** The process of calculating these gradients and using them to adjust parameters to minimize the error.
*   **Vanishing Gradients:** In very deep networks, when gradients are backpropagated through many layers, they can become progressively smaller (close to zero). This happens due to the repeated multiplication of small numbers (e.g., derivatives of activation functions like sigmoid or tanh, or weights less than 1).
    *   **Impact:**
        *   **Slow Learning:** Layers closer to the input layer receive very small gradients, meaning their weights update very slowly or not at all.
        *   **Stagnation:** The network essentially stops learning, failing to capture the necessary features from the early layers.
        *   **Inability to Train Deep Networks:** This problem prevents us from effectively training truly deep networks that could potentially learn highly abstract representations.

**Example:** Imagine a chain of multiplications: 0.9 * 0.9 * 0.9 * ... (many times). The result quickly approaches zero. In backpropagation, the gradients are also multiplied across layers.

---

### 3. Residual Learning: The Core Idea

The breakthrough that led to ResNet was the concept of **residual learning**. Instead of trying to learn an entire transformation directly, ResNet aims to learn a **residual mapping**.

*   **Direct Mapping:** In a traditional network, a block of layers tries to learn a function $H(x) = F(x)$, where $x$ is the input and $F$ is the transformation learned by the layers.
*   **Residual Mapping:** ResNet reformulates this. It hypothesizes that it might be easier to learn the *residual* $F(x) = H(x) - x$, rather than $H(x)$ directly. The network then learns $F(x)$ such that $H(x) = F(x) + x$.

**The "Shortcut" or "Skip" Connection:**

The core mechanism to achieve residual learning is the **shortcut connection** (also known as an identity mapping or skip connection). This connection bypasses one or more layers and directly adds the input $x$ to the output of these layers.

*   **How it works:**
    1.  An input $x$ is passed through a block of layers (e.g., convolutional layers, batch normalization, ReLU). Let's say this block learns a function $F(x)$.
    2.  A shortcut connection takes the original input $x$ and adds it to the output of the block: $H(x) = F(x) + x$.
    3.  This sum $H(x)$ becomes the output of the residual block and is passed to the next layer.

**Key Benefit:** If the optimal function for a block is simply the identity mapping (i.e., $H(x) = x$), then the layers can learn to output $F(x) = 0$ by driving their weights towards zero. This is much easier to achieve than forcing a stack of non-linear layers to learn the identity function.

---

### 4. Architecture of a Residual Network (ResNet)

ResNets are built using **residual blocks**. These blocks are then stacked to create very deep networks.

**The Residual Block:**

A basic residual block consists of:

1.  **Input:** $x$
2.  **Main Path:**
    *   A series of convolutional layers (often 2 or 3).
    *   Batch Normalization after each convolution.
    *   ReLU activation after each Batch Normalization.
    *   The output of this path is $F(x)$.
3.  **Shortcut Connection:**
    *   The input $x$ is passed directly (identity mapping) or through a 1x1 convolution if the dimensions need to match (more on this below).
4.  **Addition:** The output of the main path $F(x)$ is added element-wise to the output of the shortcut connection.
5.  **Activation:** A final ReLU activation is applied to the sum.
    *   Output: $H(x) = \text{ReLU}(F(x) + x)$

**Convolutional Layers in the Main Path:**

*   Typically uses **bottleneck design** for deeper networks to reduce computational cost.
    *   A 1x1 convolution to reduce dimensions.
    *   A 3x3 convolution for feature learning.
    *   A 1x1 convolution to restore dimensions.
*   **Batch Normalization (BN):** Applied after each convolution. BN helps stabilize training by normalizing the activations, allowing for higher learning rates and mitigating the vanishing gradient problem further.
*   **ReLU:** Used as the activation function.

**Handling Dimension Mismatch in Shortcut Connections:**

If the dimensions of $x$ (input) and $F(x)$ (output of main path) don't match (e.g., due to changes in the number of channels or spatial resolution from strided convolutions), the shortcut connection needs to be adjusted.

*   **Projection Shortcut:** A 1x1 convolution is applied to the input $x$ to match the dimensions of $F(x)$. This introduces a trainable parameter, allowing the network to learn the projection.
    *   $H(x) = F(x) + W_s x$, where $W_s$ is the 1x1 convolution.
*   **Zero-Padding Shortcut:** For some ResNet variants, zero-padding is used to match dimensions, but projection is more common.

**Example ResNet Architectures:**

ResNets are often denoted by the number of layers they contain, such as ResNet-18, ResNet-34, ResNet-50, ResNet-101, ResNet-152.

*   **ResNet-18/34:** Use basic residual blocks with two 3x3 convolutional layers.
*   **ResNet-50/101/152:** Use bottleneck residual blocks (1x1 conv, 3x3 conv, 1x1 conv) to improve efficiency.

**Overall Structure:**

A typical ResNet architecture consists of:

1.  **Initial Convolutional Layer:** A standard convolutional layer with a large kernel (e.g., 7x7) and stride (e.g., 2) followed by Max Pooling.
2.  **Stacked Residual Blocks:** Groups of residual blocks are stacked. Often, the first block in a group uses a stride of 2 in its convolutional layers (and a projection shortcut) to downsample the feature maps and increase the number of channels.
3.  **Global Average Pooling (GAP):** Replaces the fully connected layers at the end of traditional CNNs. GAP averages each feature map into a single value, significantly reducing the number of parameters and making the network more robust to spatial translations.
4.  **Fully Connected Layer:** A single fully connected layer for classification.

---

### 5. Benefits of Using ResNets

*   **Enables Training of Very Deep Networks:** The residual learning framework effectively mitigates the vanishing gradient problem, allowing for the successful training of networks with hundreds or even over a thousand layers.
*   **Improved Accuracy:** Deeper ResNets consistently achieve state-of-the-art performance on various computer vision tasks, including image classification, object detection, and segmentation.
*   **Better Feature Representation:** Deeper networks can learn more complex and abstract features that are crucial for understanding visual data.
*   **Reduced Overfitting (in some cases):** While deeper networks have more parameters, the identity mapping acts as a form of regularization. Also, GAP significantly reduces parameters compared to fully connected layers.
*   **Easier Optimization:** Residual connections make the optimization landscape smoother, facilitating the discovery of better solutions.

---

### 6. Common Variations and Applications of ResNets

**Variations:**

*   **ResNeXt:** Introduced "cardinality" as a new dimension, grouping residual blocks into parallel paths to increase model capacity without increasing depth.
*   **Wide ResNets:** Explore wider layers (more channels) rather than just deeper layers, often achieving better performance with fewer layers.
*   **DenseNets:** Another skip-connection based architecture where each layer is connected to all preceding layers.
*   **SE-ResNet (Squeeze-and-Excitation ResNet):** Incorporates Squeeze-and-Excitation modules to adaptively recalibrate channel-wise feature responses.

**Applications:**

ResNets are widely used in numerous computer vision tasks:

*   **Image Classification:** (e.g., ImageNet)
*   **Object Detection:** (e.g., Faster R-CNN, YOLO with ResNet backbone)
*   **Semantic Segmentation:** (e.g., U-Net with ResNet encoder)
*   **Instance Segmentation:** (e.g., Mask R-CNN)
*   **Image Generation:** (e.g., as discriminators in GANs)
*   **Medical Imaging Analysis:**
*   **Facial Recognition:**
*   **Action Recognition:**

---

### Practice Questions/Exercises

**Question 1:** What is the primary problem that residual learning in ResNets aims to solve?

**Question 2:** Explain the concept of a "shortcut connection" in a ResNet. How does it differ from the layers in the main path of a residual block?

**Question 3:** Why is it often necessary to use a 1x1 convolution in the shortcut connection?

**Question 4:** What is Global Average Pooling (GAP) and why is it used in ResNets?

**Question 5:** Name two computer vision tasks where ResNets have been successfully applied.

---

### Answers to Practice Questions

**Answer 1:** Residual learning aims to solve the **accuracy degradation problem** and the **vanishing gradient problem** encountered when training very deep neural networks. It makes it easier to train deeper models by allowing them to learn residual mappings.

**Answer 2:** A shortcut connection (or skip connection) bypasses one or more layers in the main path of a residual block and adds its input directly to the output of those layers. In contrast, the layers in the main path learn a specific transformation (e.g., through convolutions and activations). The shortcut connection provides an "easier" path for gradients and allows the network to learn an identity mapping if needed.

**Answer 3:** A 1x1 convolution is often used in the shortcut connection when the dimensions (number of channels or spatial resolution) of the input $x$ do not match the dimensions of the output of the main path $F(x)$. The 1x1 convolution acts as a "projection" to align the dimensions so that element-wise addition can be performed.

**Answer 4:** Global Average Pooling (GAP) is a technique used at the end of a convolutional neural network that replaces fully connected layers. It takes each feature map produced by the final convolutional layer and calculates the average of all its values, resulting in a single number per feature map. This is used in ResNets to significantly reduce the number of parameters, making the model more efficient and less prone to overfitting, and also to bridge the gap between convolutional features and the final classification layer.

**Answer 5:** Two common computer vision tasks where ResNets are applied are:
1.  **Image Classification**
2.  **Object Detection**
    (Other valid answers include Semantic Segmentation, Instance Segmentation, etc.)

---

### Important Points to Remember

*   **Vanishing Gradients:** The primary hurdle in training deep networks, causing slow learning in early layers.
*   **Accuracy Degradation:** Deeper traditional networks can perform *worse* than shallower ones.
*   **Residual Learning:** The core idea is to learn $F(x) = H(x) - x$, making it easier for layers to learn an identity mapping ($F(x)=0$).
*   **Shortcut/Skip Connections:** The mechanism that enables residual learning by adding the input to the output of a block.
*   **Bottleneck Design:** Efficient blocks for deeper ResNets (1x1 -> 3x3 -> 1x1 convolutions).
*   **Batch Normalization:** Crucial for stabilizing training and enabling higher learning rates.
*   **Global Average Pooling (GAP):** Replaces fully connected layers, reducing parameters and overfitting.
*   **ResNets are Modular:** Built by stacking identical residual blocks.
*   **Impact:** ResNets enabled the training of truly deep networks, leading to significant advancements in computer vision.
