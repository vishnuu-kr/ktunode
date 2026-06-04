---
title: "Noise in images"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: The image, its representation and properties "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc2a"
status: "completed"
scrapedAt: "2026-05-20T16:52:41.775Z"
---
## DIGITAL IMAGE PROCESSING - MODULE 1: The Image, its Representation and Properties - Noise in Images

**Learning Outcomes:**

*   Understand the concept of noise in digital images and its sources.
*   Identify and classify different types of noise models (Gaussian, Salt & Pepper, Uniform, Speckle, and Periodic).
*   Describe the properties of each noise model, including their probability density functions (PDFs).
*   Analyze the impact of different noise types on image quality.
*   Explain the importance of noise reduction techniques in image processing.

---

**1. Introduction to Noise in Digital Images**

*   **Definition:** Noise in digital images refers to random variations in brightness or color information. It is unwanted information that degrades the quality of an image.
*   **Sources of Noise:**
    *   **Image Acquisition:**
        *   **Sensor Noise:** Variations in the response of image sensors (e.g., CCD, CMOS) due to thermal effects or manufacturing imperfections.
        *   **Quantization Noise:** Errors introduced during the conversion of continuous analog signals to discrete digital values.
        *   **Shot Noise:** Random fluctuations in the number of photons detected by the sensor in a given time period (especially significant in low-light conditions).
    *   **Transmission:**
        *   **Channel Noise:** Errors introduced during the transmission of image data over communication channels (e.g., network errors, electromagnetic interference).
    *   **Scanning:**
        *   Imperfections in the scanning process.
    *   **Environmental Factors:**
        *   Lighting conditions, temperature, and other external factors.
*   **Impact of Noise:**
    *   Reduces image clarity and visual appeal.
    *   Obscures details and fine structures.
    *   Can negatively affect subsequent image processing tasks (e.g., segmentation, feature extraction).

**2. Types of Noise Models**

*   **Noise Model:** A mathematical representation of the statistical properties of noise.

    *Choosing the correct noise model is essential for effective denoising techniques.*

    Here are some common types:

    *   **2.1 Gaussian Noise (Additive Noise):**
        *   **Description:** Random variations in pixel values following a Gaussian (normal) distribution. Each pixel value is the sum of the original pixel value and a random value taken from a gaussian distribution.
        *   **PDF (Probability Density Function):**

            ```
            p(z) = (1 / (σ * sqrt(2π))) * exp(-((z - μ)^2) / (2 * σ^2))
            ```

            Where:
            *   `z` is the pixel value.
            *   `μ` is the mean (average) of the noise. Often zero-mean (μ = 0).
            *   `σ` is the standard deviation of the noise (higher σ means more noise).
        *   **Properties:**
            *   Symmetrical distribution.
            *   Commonly occurs due to thermal noise in sensors.
            *   Easy to model mathematically.
        *   **Example:** Electronic circuit noise.
        *   **Characteristics:** Each pixel in the noisy image is the sum of its true value and a random value drawn from a Gaussian (normal) distribution.
    *   **2.2 Salt & Pepper Noise (Impulse Noise):**
        *   **Description:** Randomly occurring black (pepper) and white (salt) pixels interspersed throughout the image. Pixels are either at their maximum or minimum possible value.
        *   **PDF:**

            ```
            p(z) =  { Pa,  for z = A (Salt)
                      Pb,  for z = B (Pepper)
                      0, otherwise
                    }
            ```

            Where:
            *   `A` is the maximum pixel value (e.g., 255 for 8-bit images).
            *   `B` is the minimum pixel value (e.g., 0 for 8-bit images).
            *   `Pa` is the probability of a salt pixel.
            *   `Pb` is the probability of a pepper pixel.
        *   **Properties:**
            *   Appears as bright and dark dots.
            *   Often caused by faulty sensors or transmission errors.
            *   Easy to identify visually.
        *   **Example:**  Digital transmission errors.
    *   **2.3 Uniform Noise:**
        *   **Description:** Noise values are uniformly distributed over a specified range.  All noise values within the range have equal probability.
        *   **PDF:**

            ```
            p(z) =  { 1 / (b - a),  for a <= z <= b
                      0,             otherwise
                    }
            ```

            Where:
            *   `a` is the lower bound of the noise range.
            *   `b` is the upper bound of the noise range.
        *   **Properties:**
            *   Creates a speckled or granular appearance.
            *   Can occur due to quantization errors.
        *   **Example:**  Discretization errors in digital systems.
    *   **2.4 Speckle Noise (Multiplicative Noise):**
        *   **Description:** Multiplicative noise, meaning the noise is proportional to the signal intensity.  The noise level is dependent on the image data.
        *   **Model:** `g(x, y) = f(x, y) * η(x, y)`, where `g(x, y)` is the noisy image, `f(x, y)` is the original image, and `η(x, y)` is the speckle noise.
        *   **PDF:**  Speckle noise often follows a Gamma distribution.  The exact PDF depends on the specific physical process generating the noise.
        *   **Properties:**
            *   Gives images a granular or mottled texture.
            *   Common in synthetic aperture radar (SAR) images and ultrasound images.
        *   **Example:**  SAR imaging, medical ultrasound.
        *   **Characteristics:** Speckle noise is multiplicative and signal-dependent. The standard deviation of the speckle is proportional to the local mean gray level value in the image.
    *   **2.5 Periodic Noise:**
        *   **Description:**  Noise with a regular, repeating pattern.
        *   **Characteristics:** Often caused by electrical interference or periodic variations in the image acquisition system.  Can be visualized as regular lines or patterns in the image.  The noise signal itself is periodic.
        *   **Detection:**  Easily detectable in the frequency domain (Fourier transform), as it appears as distinct peaks.
        *   **Example:**  Electrical interference from power lines or fluorescent lighting.

**3. Analyzing the Impact of Noise on Image Quality**

*   **Visual Inspection:** Observe the image for signs of noise, such as graininess, speckles, or colored artifacts.
*   **Signal-to-Noise Ratio (SNR):** A measure of the strength of the desired signal (image) relative to the strength of the noise.
    *   **Formula:**  `SNR = Ps / Pn`, where `Ps` is the signal power and `Pn` is the noise power.
    *   Higher SNR indicates better image quality (less noise).
*   **Peak Signal-to-Noise Ratio (PSNR):** A common metric used to evaluate the effectiveness of image denoising algorithms.
    *   **Formula:** `PSNR = 10 * log10((MAX^2) / MSE)`
        *   `MAX` is the maximum possible pixel value (e.g., 255 for 8-bit images).
        *   `MSE` is the Mean Squared Error between the original and the denoised image.
*   **Mean Squared Error (MSE):** Measures the average squared difference between the original and noisy/denoised image.  Lower MSE indicates better quality.
    *   **Formula:** `MSE = (1 / (M * N)) * ΣΣ (I(i, j) - K(i, j))^2`
        *   `M` and `N` are the dimensions of the image.
        *   `I(i, j)` is the pixel value in the original image.
        *   `K(i, j)` is the pixel value in the noisy/denoised image.

**4. Importance of Noise Reduction Techniques**

*   **Improved Visual Quality:** Noise reduction enhances the visual appeal and clarity of images.
*   **Enhanced Feature Extraction:** Reduces the likelihood of detecting false or irrelevant features due to noise.
*   **Better Image Analysis:** Improves the accuracy of image segmentation, object recognition, and other analytical tasks.
*   **Preprocessing Step:** Noise reduction is often a crucial preprocessing step for many image processing applications.
*   **Data Compression:** Denoising before compression can improve the compression ratio by removing random variations.

**5. Practice Questions/Exercises**

1.  **Question:** An image contains random bright and dark pixels throughout. Which type of noise is most likely present?
    *   **Answer:** Salt & Pepper Noise (Impulse Noise)

2.  **Question:** Explain the difference between additive and multiplicative noise, providing an example of each.
    *   **Answer:** Additive noise adds to the original image signal (e.g., Gaussian noise from sensor thermal noise). Multiplicative noise scales the original image signal (e.g., Speckle noise in SAR images).

3.  **Question:** What is the probability density function (PDF) of Gaussian noise and why is it important?
    *   **Answer:** The PDF of Gaussian noise is a Gaussian (normal) distribution.  It is important because it allows us to statistically model and characterize the noise, which is crucial for designing effective noise reduction filters.

4.  **Question:**  An image has a PSNR of 20 dB. Is this image considered to have high or low noise?
    *   **Answer:**  A PSNR of 20 dB is generally considered to indicate a noisy image.  Higher PSNR values (e.g., 30 dB or higher) indicate better image quality.

5.  **Question:** Describe the appearance of an image corrupted by uniform noise.
    *   **Answer:** An image corrupted by uniform noise appears speckled or granular because all noise values within a defined range are equally likely to occur.

6. **Question:** How can periodic noise be identified in the frequency domain?
    * **Answer:** Periodic noise manifests as distinct, prominent peaks in the frequency spectrum (obtained via Fourier Transform) corresponding to the repeating frequency components of the noise.

**6. Important Points to Remember**

*   Noise is an inherent problem in digital image processing.
*   Understanding the types of noise and their characteristics is essential for choosing appropriate noise reduction techniques.
*   SNR and PSNR are useful metrics for evaluating image quality and the effectiveness of denoising algorithms.
*   Noise reduction is a critical preprocessing step for many image processing applications.
*   The best noise reduction technique depends on the specific type of noise present in the image.
