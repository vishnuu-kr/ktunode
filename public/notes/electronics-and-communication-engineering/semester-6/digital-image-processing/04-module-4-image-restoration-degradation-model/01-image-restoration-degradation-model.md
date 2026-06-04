---
title: "Image Restoration: Degradation model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee29"
status: "completed"
scrapedAt: "2026-05-23T18:00:45.043Z"
---
# DIGITAL IMAGE PROCESSING: Module 4 - Image Restoration: Degradation Model

This module focuses on understanding the process of image restoration, specifically by analyzing and modeling the degradation that occurs to an image. We will explore how to mathematically represent these degradation processes and how this understanding is crucial for reversing them.

---

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the concept of image degradation and its various sources.
*   Model the image degradation process mathematically.
*   Identify and differentiate between common degradation models.
*   Recognize the role of the degradation model in image restoration.
*   Relate the degradation model to the overall image processing pipeline.

---

## Introduction to Image Restoration

**Definition:** Image restoration is the process of recovering an image that has been degraded by removing or reducing the known degradations that have affected it. The goal is to bring the degraded image as close as possible to its original, pristine state.

**Key Idea:** To restore a degraded image, we first need to understand *how* it was degraded. This involves modeling the degradation process.

**(CO1: Explain different components of image processing system (Knowledge Level: K2))**
Image restoration is a crucial component within the broader image processing system. It typically follows acquisition and preprocessing stages and precedes further analysis or interpretation. Understanding the degradation model helps us select the appropriate restoration algorithms.

---

## The Degradation Model

The degradation process in an image can be broadly characterized by a **degradation model**, which describes how the original image is transformed into the degraded image. This model is fundamental to the entire restoration process.

### The General Degradation Model

According to Gonzalez & Woods (4th Ed.), the degraded image, $g(x, y)$, can be modeled as a combination of the original image, $f(x, y)$, a degradation function, and additive noise, $\eta(x, y)$.

**Mathematical Representation:**

*   **Linear Degradation:**
    $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

    Where:
    *   $g(x, y)$: The degraded image.
    *   $f(x, y)$: The original, undegraded image.
    *   $h(x, y)$: The degradation function (also known as the point spread function or kernel). This function describes how the blurring or distortion occurs.
    *   $*$ : Represents the linear convolution operation.
    *   $\eta(x, y)$: Additive noise (e.g., Gaussian noise, salt-and-pepper noise).

*   **Non-linear Degradation:**
    $g(x, y) = s(f(x, y)) * h(x, y) + \eta(x, y)$
    (While more complex, the linear model is more common for initial understanding and restoration techniques.)

**(CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3))**
The degradation model heavily relies on the concept of **convolution**. Convolution is a mathematical operation that combines two functions to produce a third function that expresses how the shape of one is modified by the other. In image processing, it's used to apply filters, including those that cause blurring. The model can also be represented in the frequency domain using the Fourier Transform, where convolution becomes element-wise multiplication.

### Components of the Degradation Model

1.  **Original Image ($f(x, y)$):** The ideal, uncorrupted image we aim to recover.
2.  **Degradation Function ($h(x, y)$):** This function models the spatial characteristics of the degradation. It captures the blurring or geometric distortion. Examples include:
    *   **Blurring due to motion:** Elongated or streaked blur.
    *   **Blurring due to out-of-focus optics:** Circular blur.
    *   **Geometric transformations:** Rotation, scaling, shearing.
3.  **Additive Noise ($\eta(x, y)$):** Random variations in pixel values that are superimposed on the image. This noise can arise from various sources during image acquisition or transmission.

### Understanding the Degradation Function ($h(x, y)$)

The nature of $h(x, y)$ determines the type of degradation.

*   **Point Spread Function (PSF):** When $h(x, y)$ is a delta function (a single impulse), it signifies no degradation. Any deviation from a delta function represents some form of blurring.
*   **Properties of $h(x, y)$:**
    *   **Symmetric:** Often results in symmetric blurring.
    *   **Impulse response:** It's the output of the system when the input is a single point (impulse).
    *   **Normalized:** The sum of the values in $h(x, y)$ is often normalized to 1 to preserve the overall brightness of the image.

---

## Common Degradation Models

Let's explore some specific models for $h(x, y)$:

### 1. Blurring Models

These models represent situations where the image loses its sharpness.

#### a) Motion Blur

This occurs when either the camera or the object moves during the exposure time. The PSF for motion blur depends on the direction and length of the motion.

*   **Linear Motion Blur:** If the motion is in a straight line of length 'a' and angle '$\beta$', the PSF can be approximated as a rectangular pulse along the direction of motion.

    **Gonzalez & Woods (4th Ed.) Example:** For horizontal motion of length 'a':
    $h(x, y) = 1/a$, for $0 \le x \le a$ and $y = 0$
    $h(x, y) = 0$, otherwise.

    **(CO4: Analyze the filtering and restoration of images (Knowledge Level: K3))**
    Motion blur is a prime example where understanding the degradation model (the specific PSF) is crucial for selecting the appropriate inverse filter or Wiener filter for restoration.

#### b) Out-of-Focus Blur

This occurs when the camera's focal plane is not aligned with the object plane, resulting in a circular blur. The PSF is typically a circular disk.

*   **PSF for Out-of-Focus Blur:** A uniform disk of radius 'b'.

    $h(x, y) = \frac{1}{\pi b^2}$, for $x^2 + y^2 \le b^2$
    $h(x, y) = 0$, otherwise.

#### c) Gaussian Blur

This is a common blurring effect that can occur due to atmospheric turbulence or slight camera imperfections. The PSF is a Gaussian function.

*   **PSF for Gaussian Blur:**
    $h(x, y) = \frac{1}{2 \pi \sigma^2} e^{-\frac{x^2 + y^2}{2 \sigma^2}}$

    Where $\sigma$ is the standard deviation of the Gaussian function.

### 2. Noise Models

Noise is another significant factor in image degradation. While the degradation model primarily focuses on blurring, noise is incorporated as an additive term. Common noise models include:

*   **Gaussian Noise:** Pixel values are distributed according to a Gaussian (normal) distribution.
*   **Salt-and-Pepper Noise (Impulse Noise):** Randomly distributed white (salt) and black (pepper) pixels.
*   **Rayleigh Noise:** Occurs in radar imagery.
*   **Gamma Noise:** Used in optical imaging.
*   **Exponential Noise:** Similar to Gamma noise.

**Reference:** Anil K Jain's "Fundamentals of digital image processing" (PHI, 1988) provides detailed mathematical formulations and statistical properties of various noise types, which are essential for understanding the $\eta(x, y)$ term in the degradation model.

---

## The Degradation and Restoration Problem

**The Goal of Restoration:** Given the degraded image $g(x, y)$ and some knowledge of the degradation function $h(x, y)$ and the noise $\eta(x, y)$, the objective is to estimate the original image $f(x, y)$.

**The Challenge:** The degradation process is often non-invertible, especially when noise is present. We are essentially trying to solve for $f(x, y)$ in the equation:

$g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

**Inverse Filtering (Ideal Case):** If there were no noise ($\eta(x, y) = 0$) and $h(x, y)$ was known, we could theoretically recover $f(x, y)$ by convolving $g(x, y)$ with the inverse filter $h^{-1}(x, y)$. However, this is rarely practical due to noise amplification and the difficulty of finding a true inverse.

**(CO4: Analyze the filtering and restoration of images (Knowledge Level: K3))**
The degradation model provides the mathematical framework for developing various restoration filters, such as inverse filtering, Wiener filtering, and various spatial domain filters. The choice of filter is dictated by the type of degradation and noise present.

---

## Relationship to Image Processing System Components

**(CO1: Explain different components of image processing system (Knowledge Level: K2))**

*   **Image Acquisition:** The initial acquisition process is where degradation (blurring, noise) often begins. Understanding the acquisition system (e.g., lens quality, sensor noise) helps in modeling $h(x, y)$ and $\eta(x, y)$.
*   **Preprocessing:** Image restoration can be considered a form of sophisticated preprocessing.
*   **Image Analysis/Interpretation:** The output of the restoration process is a cleaner image, which is then fed into subsequent stages for feature extraction, segmentation, etc. A well-restored image improves the accuracy of these later steps.

---

## Key Concepts and Definitions

*   **Image Restoration:** The process of recovering a degraded image.
*   **Degradation Model:** A mathematical representation of how an image is corrupted.
*   **Point Spread Function (PSF):** The impulse response of the degradation process, describing the blurring effect.
*   **Convolution:** A mathematical operation central to modeling spatial degradations.
*   **Additive Noise:** Random variations added to the image signal.
*   **Inverse Filter:** A filter designed to undo the effect of the degradation function.
*   **Wiener Filter:** A statistical filter that aims to minimize the mean squared error between the estimated and original image, taking into account both the degradation and noise.

---

## Important Points to Remember

*   **Modeling is Key:** Image restoration is entirely dependent on accurately modeling the degradation process.
*   **$h(x, y)$ and $\eta(x, y)$:** The two primary components to model are the degradation function (blurring) and the noise.
*   **Frequency Domain:** Convolution in the spatial domain becomes multiplication in the frequency domain, which simplifies some restoration approaches.
*   **Noise Amplification:** Simple inverse filtering often amplifies noise, necessitating more sophisticated techniques like Wiener filtering.
*   **Prior Knowledge:** The success of restoration depends heavily on the accuracy of our knowledge about $h(x, y)$ and the statistical properties of $\eta(x, y)$.

---

## Practice Questions and Exercises

**Question 1:**
Describe the general mathematical model for image degradation. What are the two main components that contribute to the degraded image?

**Answer 1:**
The general mathematical model for image degradation can be represented as:
$g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$
The two main components are:
1.  **Degradation Function ($h(x, y)$):** This models the blurring or geometric distortion of the original image.
2.  **Additive Noise ($\eta(x, y)$):** This represents random variations added to the image signal.

**Question 2:**
What is a Point Spread Function (PSF)? Give an example of a common PSF used in image restoration.

**Answer 2:**
A Point Spread Function (PSF) is the impulse response of a system that describes how a single point source of light is spread out by the imaging system. In image processing, it characterizes the blurring introduced by the degradation process. An example of a common PSF is the **Gaussian PSF**, used to model Gaussian blur, given by:
$h(x, y) = \frac{1}{2 \pi \sigma^2} e^{-\frac{x^2 + y^2}{2 \sigma^2}}$

**Question 3:**
If an image is degraded only by Gaussian blur with parameter $\sigma$ and no noise, how would you ideally try to restore it? What is the limitation of this approach?

**Answer 3:**
Ideally, if the degradation is known and there's no noise, one would use **inverse filtering**. In the frequency domain, this would involve dividing the Fourier Transform of the degraded image by the Fourier Transform of the Gaussian PSF.
The limitation is that in real-world scenarios, **noise is almost always present**. Simple inverse filtering is highly susceptible to amplifying this noise, leading to an unacceptable restoration.

**Question 4 (Conceptual):**
How does understanding the degradation model contribute to the overall image processing system? Relate this to at least two other components of an image processing system.

**Answer 4:**
Understanding the degradation model is crucial for effective image restoration, which is a key stage in image processing.
*   **Image Acquisition:** Knowledge of the acquisition process (e.g., camera settings, lens type) informs the specific parameters of the degradation model ($h(x, y)$ and $\eta(x, y)$). For instance, knowing the camera was out of focus helps choose an appropriate circular PSF.
*   **Image Analysis/Interpretation:** A well-restored image, achieved by correctly modeling and counteracting degradation, provides a cleaner input for subsequent analysis tasks like segmentation or object recognition. If degradation is not properly handled, it can lead to misinterpretations or inaccurate results in these later stages.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References

*   **Gonzalez, Rafael C., and Richard E. Woods.** *Digital Image Processing*. Pearson Education, 4th edition. (Chapter 5, especially section 5.1: Image Restoration - Introduction, and section 5.2: Noise Reduction - though noise is part of degradation, the models are discussed here).
*   **Jayaraman, S., S. Esakkirajan, and T. Veerakumar.** *Digital Image Processing*. McGraw Hill, 1st edition. (Likely covers similar foundational aspects of degradation models).
*   **Jain, Anil K.** *Fundamentals of Digital Image Processing*. PHI, 1988. (Chapter 7, Noise, and Chapter 8, Image Enhancement - provides detailed statistical models of noise).
*   **Castleman, Kenneth R.** *Digital Image Processing*. Pearson Education, 2/e, 2003. (Likely covers noise models and basic restoration concepts).
*   **Pratt, William K.** *Digital Image Processing*. John Wiley, 4/e, 2007. (Provides comprehensive coverage of image processing techniques, including restoration).

---