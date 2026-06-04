---
title: "polarization of BEC channels"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff23a"
status: "completed"
scrapedAt: "2026-05-23T18:05:29.459Z"
---
# CODING THEORY: Module 4 - Review on Convolutional Codes

## Topic: Polarization of BEC Channels

This topic focuses on understanding how the Binary Erasure Channel (BEC) exhibits polarization properties, which are fundamental to the operation of polar codes. While this module's primary focus is on convolutional codes, the concept of channel polarization is a crucial precursor to understanding modern coding techniques like polar codes, as mentioned in Learning Outcome 6.

---

### 1. Introduction to Channel Polarization

Channel polarization is a phenomenon where, under repeated application of a certain transformation, the channels become either very good (approaching the noiseless channel) or very bad (approaching the completely noisy channel). This concept was introduced by Arikan in the context of polar codes.

**Key Concept:** **Channel Transformation:** A process that takes multiple independent channels and combines them to create new, potentially better or worse, channels.

**Reference:**
*   **Pfister, H. (2010). A Brief Introduction to Polar Codes.** This reference is highly relevant as it directly addresses the foundational concepts of polar codes, including polarization.
*   **Gazi, O. (2018). Polar Codes: A Non-Trivial Approach to Channel Coding.** This book provides a deeper dive into the theory and applications of polar codes, including the mathematical underpinnings of polarization.

---

### 2. The Binary Erasure Channel (BEC)

The BEC is a simple channel model where an input bit can be transmitted correctly, erased (lost), or flipped. For our discussion on polarization, we primarily focus on the "erasure" aspect.

**Definition:** A Binary Erasure Channel (BEC) with erasure probability $ \epsilon $ is a channel where:
*   With probability $ 1 - \epsilon $, the input bit $ X $ is transmitted correctly as $ Y = X $.
*   With probability $ \epsilon $, the input bit $ X $ is erased, and the output is a special "erasure" symbol, often denoted by '?'.

**Channel Transition Probabilities (for an input bit $x$):**
*   $ P(Y=0 | X=0) = 1 - \epsilon $
*   $ P(Y=1 | X=1) = 1 - \epsilon $
*   $ P(Y='?' | X=0) = \epsilon $
*   $ P(Y='?' | X=1) = \epsilon $

**Example:**
If $ \epsilon = 0.3 $, then:
*   $ P(\text{correct transmission}) = 0.7 $
*   $ P(\text{erasure}) = 0.3 $

**Relevance to Learning Outcomes:**
*   **CO1 (K2):** Understanding BEC as a channel model is foundational.
*   **CO6 (K2):** BEC is a simple channel that demonstrates polarization, a key characteristic of polar codes.

**Reference:**
*   **Lin, S., & Costello, D. J. Jr. (2004). Error Control Coding: Fundamentals and Applications.** This textbook covers various channel models, including the BEC, and their properties in the context of error control coding.
*   **Haykin, S. (2001). Communication Systems.** Provides a broad overview of communication principles, including channel models like BEC.

---

### 3. Polarization of BEC Channels: The Binning Process

The core idea behind polarization is to take multiple independent and identically distributed (i.i.d.) copies of a BEC and combine them through a specific transformation to create new channels that are either very good or very bad.

**The Transformation (Arikan's Transformation):**
Consider $ n $ independent BECs, each with erasure probability $ \epsilon $. We can combine these $ n $ channels using a specific coding scheme to create $ n $ new channels. This transformation is typically achieved through a recursive construction, similar to how recursive codes are built.

Let $ W $ represent a BEC with erasure probability $ \epsilon $. We want to transform $ W^{\otimes n} $ ( $ n $ i.i.d. copies of $ W $) into $ n $ new channels $ W_i^{(n)} $ for $ i = 1, \ldots, n $.

**Key Idea:** For large $ n $, the erasure probabilities of these $ n $ new channels will cluster around two values: one close to 0 (good channel) and one close to 1 (bad channel).

**The Polarization Kernel:**
The behavior of the polarization process is described by a polarization kernel function. For the BEC, this kernel is derived from the mutual information between the input and output.

Let $ I(W) $ be the mutual information of a single BEC channel $ W $ with erasure probability $ \epsilon $.
*   $ I(W) = 1 - \epsilon $ (mutual information between input bit and output bit, considering only correct transmissions)

The polarization kernel, denoted by $ \phi $, describes how the mutual information of the transformed channels evolves. For the BEC, this kernel is relatively simple.

**Recursive Construction (Simplified View):**
The transformation can be thought of as a recursive process. Imagine we have two channels, $ W_1 $ and $ W_2 $. We can combine them to create two new channels, $ W_{12,1} $ and $ W_{12,2} $.

For BECs, a common transformation involves what's sometimes called "bit-flipping" or a similar operation that effectively exchanges information between the two channels.

Let $ W(\epsilon) $ denote a BEC with erasure probability $ \epsilon $.
The transformation combines two $ W(\epsilon) $ channels to produce two new channels: $ W_1^{(2)}(\epsilon) $ and $ W_2^{(2)}(\epsilon) $.

The erasure probabilities of these new channels, $ \epsilon_1 $ and $ \epsilon_2 $, are related to the original $ \epsilon $ by the polarization kernel:

$ \epsilon_1 = 2\epsilon(1-\epsilon) $
$ \epsilon_2 = \epsilon^2 + (1-\epsilon)^2 $

**Analysis of the Kernel:**
*   If $ \epsilon < 0.5 $, then $ \epsilon_1 < \epsilon $ and $ \epsilon_2 > \epsilon $.
*   If $ \epsilon > 0.5 $, then $ \epsilon_1 > \epsilon $ and $ \epsilon_2 < \epsilon $.
*   If $ \epsilon = 0.5 $, then $ \epsilon_1 = 0.5 $ and $ \epsilon_2 = 0.5 $.

**Example:**
Let $ \epsilon = 0.2 $.
Applying the transformation once:
$ \epsilon_1 = 2(0.2)(1-0.2) = 2(0.2)(0.8) = 0.32 $
$ \epsilon_2 = (0.2)^2 + (1-0.2)^2 = 0.04 + (0.8)^2 = 0.04 + 0.64 = 0.68 $

This calculation seems counterintuitive at first glance if we only look at erasure probabilities directly. The actual polarization kernel relates to how the *distribution* of channel states evolves. The fundamental insight is that repeated application of these transformations leads to extreme values.

**Correct Polarization Kernel for BECs (Arikan):**
The polarization phenomenon is better understood through the evolution of the *mutual information* or the *capacity* of the channels.

Let $ I(W(\epsilon)) = 1 - \epsilon $ be the mutual information of a BEC with erasure probability $ \epsilon $.
When two such channels are combined (using Arikan's construction), two new channels are formed with mutual information $ I_1 $ and $ I_2 $, where:

$ I_1 = 2I(W(\epsilon)) - I(W(2\epsilon(1-\epsilon))) $
$ I_2 = I(W(\epsilon^2)) + I(W((1-\epsilon)^2)) $

This formulation is more complex. A more direct way to understand polarization is by observing the distribution of the *channel parameters*.

**Let's use the original Arikan's paper on BEC polarization:**
For a BEC with erasure probability $ \epsilon $, let the sequence of channel parameters be $ \epsilon^{(1)} = \epsilon $.
After one application of the polarization transform, we get two channels with parameters $ \epsilon^{(2)}_1 $ and $ \epsilon^{(2)}_2 $:

$ \epsilon^{(2)}_1 = 2\epsilon^{(1)}(1-\epsilon^{(1)}) $
$ \epsilon^{(2)}_2 = \epsilon^{(1)2} + (1-\epsilon^{(1)})^2 $

If we start with $ n $ i.i.d. BECs of parameter $ \epsilon_0 $, after $ m $ stages of polarization, we get $ n $ channels. For large $ m $, a fraction of these channels will have parameters close to 0 (good channels), and another fraction will have parameters close to 1 (bad channels).

**Example Revisited with Correct Kernel:**
Let $ \epsilon = 0.2 $.
After 1 stage:
$ \epsilon^{(2)}_1 = 2(0.2)(1-0.2) = 0.32 $
$ \epsilon^{(2)}_2 = (0.2)^2 + (1-0.2)^2 = 0.04 + 0.64 = 0.68 $

This still doesn't show extreme values. The polarization is observed when we iterate this process *many times*.

Let's consider the *good* channel parameter $ \epsilon_g $ and the *bad* channel parameter $ \epsilon_b $.
Start with $ \epsilon_0 $.
Stage 1: $ \epsilon_{g,1} = 2\epsilon_0(1-\epsilon_0) $, $ \epsilon_{b,1} = \epsilon_0^2 + (1-\epsilon_0)^2 $
Stage 2:
The new good channel is derived from the previous good channel: $ \epsilon_{g,2} = 2\epsilon_{g,1}(1-\epsilon_{g,1}) $.
The new bad channel is derived from the previous bad channel: $ \epsilon_{b,2} = \epsilon_{b,1}^2 + (1-\epsilon_{b,1})^2 $.

**Example Iteration:**
Start with $ \epsilon_0 = 0.2 $.
Stage 1: $ \epsilon_{g,1} = 0.32 $, $ \epsilon_{b,1} = 0.68 $.
Stage 2:
$ \epsilon_{g,2} = 2(0.32)(1-0.32) = 2(0.32)(0.68) = 0.4352 $
$ \epsilon_{b,2} = (0.68)^2 + (1-0.68)^2 = 0.4624 + (0.32)^2 = 0.4624 + 0.1024 = 0.5648 $

We are not seeing polarization yet. The key is that the *number* of channels at each stage is doubled. We start with $ n $ channels. After one stage, we have $ n $ good channels and $ n $ bad channels, for a total of $ 2n $ channels.

**Correct Understanding of Polarization:**
The process takes $ N $ i.i.d. BEC channels with parameter $ \epsilon $. After $ \log_2 N $ stages of Arikan's transformation, we obtain $ N $ new channels. The distribution of their erasure probabilities converges such that a fraction $ p $ of these channels will have erasure probability approaching 0, and a fraction $ 1-p $ will have erasure probability approaching 1.

**The fraction $ p $ of good channels is $ 1 - \epsilon $.** (This is the capacity of the BEC channel).

**Key Insight:** The transformation effectively separates the channels into two groups: those that become very reliable (low erasure probability) and those that become very unreliable (high erasure probability).

**Reference:**
*   **Richardson, T., & Urbanke, R. (2008). Modern Coding Theory.** This book provides a rigorous mathematical treatment of channel polarization and its connection to coding theory.
*   **Roth, R. M. (2006). Introduction to Coding Theory.** May offer foundational concepts that help understand how channel properties influence code performance.
*   **Pfister, H. (2010). A Brief Introduction to Polar Codes.** Crucial for understanding the initial concepts of polarization in a pedagogical way.

---

### 4. Polarisable Channels

A channel is called "polarisable" if this phenomenon occurs. The BEC is a prime example of a polarisable channel.

**Definition:** A channel is polarisable if repeated application of a specific combining transformation on multiple i.i.d. copies of the channel results in a set of new channels whose transition probabilities (or mutual information, or error probabilities) cluster around two extreme values: 0 and 1.

**Why BECs are polarisable:**
The BEC has a simple structure that allows for a clear mathematical demonstration of polarization. The mutual information of the BEC is $ 1-\epsilon $. The transformation is designed such that the mutual information of the resulting channels either increases towards 1 or decreases towards 0, depending on how the original channels were combined.

**Key Point:** The BEC is polarisable because its channel transformation (Arikan's kernel) leads to a divergence of channel characteristics.

**Reference:**
*   **Gazi, O. (2018). Polar Codes: A Non-Trivial Approach to Channel Coding.** This book would explore the properties of polarisable channels in detail.

---

### 5. Significance in Coding Theory

The polarization of BEC channels is the fundamental principle behind **polar codes**.

**How it's used:**
1.  **Channel Decomposition:** A complex channel is decomposed into a set of simpler, polarized channels.
2.  **Channel Selection:** The most reliable channels (those with low erasure probability) are used for transmitting information bits. The less reliable channels are used for synthetic erasures or can be discarded.
3.  **Construction of Polar Codes:** By choosing the best $ K $ channels out of $ N $ polarized channels, a polar code can be constructed that can achieve the channel capacity.

**Relevance to Learning Outcomes:**
*   **CO6 (K2):** Understanding polarization is essential for illustrating and understanding polar codes.

**Important Note:** While this module focuses on convolutional codes, understanding channel polarization is vital for comprehending modern coding techniques that outperform traditional codes in terms of approaching channel capacity. This knowledge directly supports CO6.

**Reference:**
*   **Thangaraj, A. (NPTEL Course). LDPC and Polar Codes in 5G Standard.** This NPTEL course is highly practical and would directly link channel polarization to the design of modern communication standards.

---

### 6. Summary of Key Points

*   **Channel Polarization:** The phenomenon where repeated transformations of i.i.d. channels result in a set of channels that are either very good (near noiseless) or very bad (near completely noisy).
*   **Binary Erasure Channel (BEC):** A simple channel model characterized by an erasure probability $ \epsilon $.
*   **Arikan's Transformation:** The specific method used to combine multiple BECs to induce polarization.
*   **Polarisable Channels:** Channels like the BEC that exhibit polarization.
*   **Significance:** The polarization of BEC channels is the theoretical basis for polar codes, which are capable of achieving channel capacity.

---

### 7. Practice Questions

**Question 1:**
What is the defining characteristic of a polarisable channel?
**Answer:** A polarisable channel is one where repeated application of a specific combining transformation on multiple i.i.d. copies of the channel causes the resulting channels' error probabilities (or related metrics like mutual information) to converge to either 0 or 1.

**Question 2:**
In the context of BEC polarization, what does the fraction of "good" channels approach as the number of transformations increases?
**Answer:** The fraction of "good" channels approaches the channel capacity of the BEC. For a BEC with erasure probability $ \epsilon $, the capacity is $ 1 - \epsilon $.

**Question 3:**
Briefly explain how the polarization of BEC channels is used in the construction of polar codes.
**Answer:** Polar codes exploit channel polarization by applying Arikan's transformation to multiple BECs. The resulting polarized channels are then ranked based on their reliability (low erasure probability). The most reliable channels are selected for transmitting information bits, effectively creating a code that can operate at the channel capacity.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding channel models like BEC is a prerequisite for understanding coding theory concepts.
*   **CO2 (K2):** While this topic doesn't directly cover error detection/correction capabilities of *linear codes*, it lays the groundwork for understanding how modern codes achieve these capabilities through channel manipulation.
*   **CO3 (K3):** Not directly applicable, as this topic is theoretical and introductory to polar codes, not application of block codes.
*   **CO4 (K3):** Not directly applicable, as this topic is about channel properties, not code construction techniques to reduce structural complexity.
*   **CO5 (K3):** Not directly applicable, as this topic is about polar codes, not convolutional codes.
*   **CO6 (K2):** **Directly applicable.** This topic explains the fundamental principle behind polar codes, which is a modern error correcting code. Understanding polarization is key to illustrating how polar codes work.

---

This concludes the study notes for the "Polarization of BEC Channels" topic. It's important to remember that while this module reviews convolutional codes, understanding channel polarization is a vital stepping stone for comprehending the advancements in modern coding theory, particularly polar codes, as required by CO6.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
