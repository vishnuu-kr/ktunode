---
title: "CNN-Architectural Overview"
subject: "DEEP LEARNING"
module: "Module 3: CNN"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb35"
status: "completed"
scrapedAt: "2026-05-20T16:52:21.127Z"
---
# DEEP LEARNING - Module 3: CNN - CNN Architectural Overview

These notes cover the architectural overview of Convolutional Neural Networks (CNNs).

**Learning Outcomes:**

*   Understand the core components of a CNN architecture (convolutional layers, pooling layers, activation functions, fully connected layers).
*   Explain the purpose and function of each component.
*   Describe the forward pass process in a CNN.
*   Explain different types of pooling and their impact.
*   Understand the concept of receptive field and its importance.
*   Understand the parameters involved in each layer type and how they affect the size of the output.

## 1. Introduction to Convolutional Neural Networks (CNNs)

*   **What is a CNN?** CNNs are a class of deep neural networks, most commonly applied to analyzing visual imagery. They are also used for other tasks such as natural language processing and audio processing.
*   **Why CNNs for Image Data?** CNNs exploit the spatial structure of images. They are designed to automatically and adaptively learn spatial hierarchies of features from images.  This is unlike standard multi-layer perceptrons which treat all pixels as independent inputs.
*   **Key Advantages:**
    *   **Parameter Sharing:** The same filter (kernel) is applied across different parts of the input image, reducing the number of learnable parameters.
    *   **Translation Invariance/Equivariance:** CNNs can recognize patterns regardless of their location in the image (to a certain degree). Convolutional layers are *equivariant* to translation, meaning a translation in the input will result in a corresponding translation in the output feature map. With pooling layers, this equivariance can be relaxed to invariance.
    *   **Hierarchical Feature Learning:** CNNs learn features at different levels of abstraction, from simple edges and corners to complex object parts.

## 2. Core Components of a CNN Architecture

*   **Convolutional Layer:**
    *   **Definition:** The core building block of a CNN. It applies a set of learnable filters (kernels) to the input image or feature map.
    *   **Process:** The filter slides across the input, performing element-wise multiplication and summing the results. This operation is called convolution. The output is a feature map.
    *   **Parameters:**
        *   **Number of Filters (Kernels):**  Determines how many different features the layer will learn. Each filter produces one feature map.
        *   **Filter Size (Kernel Size):** The dimensions of the filter (e.g., 3x3, 5x5).  Smaller filters capture finer details, while larger filters capture broader patterns.
        *   **Stride:** The number of pixels the filter moves in each step. A stride of 1 moves the filter one pixel at a time, while a stride of 2 moves it two pixels at a time.  Larger strides reduce the spatial dimensions of the output.
        *   **Padding:** Adding extra layers of "pixels" (usually zeros) around the input image.  Padding can be used to control the output size and prevent information loss at the edges of the image.
            *   **Valid Padding:** No padding is applied. The output size is smaller than the input.
            *   **Same Padding:** Padding is added so that the output size is the same as the input size (when stride is 1).
    *   **Example:** Consider a 5x5 image and a 3x3 filter with a stride of 1 and no padding (valid padding). The output feature map will be 3x3.

*   **Activation Function:**
    *   **Definition:** A non-linear function applied to the output of each convolutional layer.
    *   **Purpose:** Introduces non-linearity into the network, allowing it to learn complex patterns. Without activation functions, the CNN would simply be a linear model.
    *   **Common Activation Functions:**
        *   **ReLU (Rectified Linear Unit):**  f(x) = max(0, x).  Simple, efficient, and widely used.
        *   **Sigmoid:** f(x) = 1 / (1 + exp(-x)).  Outputs a value between 0 and 1.  Can suffer from vanishing gradients.
        *   **Tanh (Hyperbolic Tangent):** f(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x)).  Outputs a value between -1 and 1. Similar to Sigmoid but can be better performing because it's centered at zero.
        *   **Leaky ReLU:** f(x) = x if x > 0 else alpha * x, where alpha is a small constant (e.g., 0.01). Addresses the "dying ReLU" problem.

*   **Pooling Layer:**
    *   **Definition:**  Reduces the spatial size of the feature maps.
    *   **Purpose:**
        *   Reduces the number of parameters and computations in the network.
        *   Helps to control overfitting.
        *   Makes the network more robust to small variations in the input (translation invariance).
    *   **Types of Pooling:**
        *   **Max Pooling:** Selects the maximum value from each region of the feature map.
        *   **Average Pooling:** Calculates the average value from each region of the feature map.
    *   **Parameters:**
        *   **Pool Size:** The size of the region to pool over (e.g., 2x2).
        *   **Stride:**  The number of pixels the pooling window moves in each step.
    *   **Example:** A 2x2 max pooling layer with a stride of 2 applied to a 4x4 feature map will result in a 2x2 output.

*   **Fully Connected Layer (FC Layer):**
    *   **Definition:**  A traditional multi-layer perceptron layer.
    *   **Purpose:**  Connects every neuron in the previous layer to every neuron in the current layer.  Used for classification or regression tasks.
    *   **Process:**  The output of the convolutional and pooling layers is flattened into a 1D vector and fed into the FC layers.
    *   **Parameters:** The number of neurons in each fully connected layer.

## 3. Forward Pass in a CNN

The forward pass in a CNN involves the following steps:

1.  **Input Image:** The input image is fed into the first convolutional layer.
2.  **Convolution:** The convolutional layer applies filters to the input image to produce feature maps.
3.  **Activation:** An activation function is applied to the feature maps.
4.  **Pooling (Optional):**  A pooling layer reduces the spatial size of the feature maps.
5.  **Repeat Steps 2-4:**  Multiple convolutional and pooling layers can be stacked together to learn hierarchical features.
6.  **Flattening:**  The output of the last convolutional/pooling layer is flattened into a 1D vector.
7.  **Fully Connected Layers:**  The flattened vector is fed into one or more fully connected layers.
8.  **Output Layer:** The output layer produces the final prediction (e.g., class probabilities for image classification).

## 4. Receptive Field

*   **Definition:** The receptive field of a neuron in a CNN is the region of the input image that affects the neuron's activation.
*   **Importance:** Understanding the receptive field is crucial for understanding what features the network is learning.
*   **Calculation:** The receptive field size increases as you go deeper into the network.  It is affected by the kernel size, stride, and pooling layers.
*   **Example:**  Consider a CNN with two convolutional layers, each with a 3x3 kernel and a stride of 1.  The receptive field of a neuron in the second convolutional layer is 5x5. This is because each neuron in the second layer "sees" a 3x3 region in the first layer, and each neuron in the first layer "sees" a 3x3 region in the input image. Therefore, it ends up being ((3 - 1) * 1) + ((3 - 1) * 1) + 1 = 5.

## 5. Parameters and Output Size Calculation

It's crucial to understand how the parameters of each layer affect the output size.

*   **Convolutional Layer:**

    *   **Input:**  `H_in x W_in x C_in` (Height x Width x Channels)
    *   **Parameters:**
        *   `F` (Number of Filters)
        *   `K` (Kernel Size - assume square kernel: K x K)
        *   `S` (Stride)
        *   `P` (Padding)
    *   **Output:** `H_out x W_out x C_out`
        *   `H_out = floor((H_in - K + 2P) / S) + 1`
        *   `W_out = floor((W_in - K + 2P) / S) + 1`
        *   `C_out = F` (Number of filters)

*   **Pooling Layer:**

    *   **Input:**  `H_in x W_in x C_in`
    *   **Parameters:**
        *   `F` (Pool Size - assume square pool: F x F)
        *   `S` (Stride)
    *   **Output:** `H_out x W_out x C_out`
        *   `H_out = floor((H_in - F) / S) + 1`
        *   `W_out = floor((W_in - F) / S) + 1`
        *   `C_out = C_in` (Number of channels remains the same)

## 6. Important Points to Remember

*   **CNNs are designed for structured data, especially images.**
*   **Convolutional layers learn spatial hierarchies of features.**
*   **Pooling layers reduce dimensionality and increase translation invariance.**
*   **Activation functions introduce non-linearity.**
*   **The receptive field determines the region of the input that affects a neuron's activation.**
*   **Understanding parameter count and output size is critical for designing CNN architectures.**

## 7. Practice Questions/Exercises

**Question 1:**

Calculate the output size of a convolutional layer with the following parameters:

*   Input Size: 32x32x3
*   Number of Filters: 64
*   Kernel Size: 3x3
*   Stride: 1
*   Padding: 1

**Answer:**

*   `H_out = floor((32 - 3 + 2*1) / 1) + 1 = floor(31) + 1 = 32`
*   `W_out = floor((32 - 3 + 2*1) / 1) + 1 = floor(31) + 1 = 32`
*   `C_out = 64`
*   Output Size: 32x32x64

**Question 2:**

What is the purpose of a pooling layer in a CNN?  Explain two types of pooling.

**Answer:**

The purpose of a pooling layer is to reduce the spatial size of the feature maps, which reduces the number of parameters and computations, helps to control overfitting, and makes the network more robust to small variations in the input.

*   **Max Pooling:** Selects the maximum value from each region of the feature map.
*   **Average Pooling:** Calculates the average value from each region of the feature map.

**Question 3:**

What is the receptive field and why is it important?

**Answer:**

The receptive field of a neuron in a CNN is the region of the input image that affects the neuron's activation. It is important because understanding the receptive field is crucial for understanding what features the network is learning.

**Question 4:**

True or False: Convolutional layers are translation invariant.

**Answer:**

False. Convolutional layers are translation *equivariant*, not invariant. A translation in the input will result in a corresponding translation in the output feature map. Pooling layers are used to achieve some level of translation invariance.

**Question 5:**

Why are activation functions important in CNNs?

**Answer:**

Activation functions introduce non-linearity into the network, allowing it to learn complex patterns. Without activation functions, the CNN would simply be a linear model and unable to learn complex relationships in the input data.
