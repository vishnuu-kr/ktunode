---
title: "Introduction to State estimation in power system, Maximum Likelihood Weighted Least Squares Estimation - State Estimation of an AC Network - Sources of Error in State Estimation - Detection and Identification of Bad"
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 4: Introduction to State estimation in power system, Maximum Likelihood Weighted Least Squares Estimation "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f3685f"
status: "completed"
scrapedAt: "2026-05-23T16:39:18.483Z"
---
# Module 4: Introduction to State Estimation in Power Systems, Maximum Likelihood Weighted Least Squares Estimation

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the fundamental concepts of power system state estimation.
*   Explain the need for state estimation in modern power systems.
*   Describe the process of state estimation for an AC network.
*   Identify common sources of errors in state estimation.
*   Discuss methods for detecting and identifying bad data.
*   Understand the principles of Maximum Likelihood and Weighted Least Squares estimation.
*   Apply Weighted Least Squares for power system state estimation.

---

## 1. Introduction to State Estimation in Power Systems

### 1.1 What is Power System State Estimation?

**Definition:** Power System State Estimation (PSSE) is the process of determining the most probable values of the state variables of a power system based on real-time, potentially noisy, and redundant measurements.

**State Variables:** In an AC power system, the fundamental quantities that define its operating state are the voltage magnitudes and voltage phase angles at each bus. These are collectively known as the *state vector* ($\mathbf{x}$).

*   For a system with $n$ buses, there are $2n$ state variables (voltage magnitudes and angles).
*   However, due to the nature of AC power flow equations and the ability to arbitrarily set one angle to zero (reference bus), we typically consider $n-1$ independent voltage phase angles and $n$ voltage magnitudes as the state variables, totaling $2n-1$ states.

### 1.2 Why is State Estimation Necessary?

Modern power systems are complex, dynamic, and operated under stringent security and economic constraints. Real-time information about the system's state is crucial for effective operation and control.

*   **Real-time Monitoring and Control:** Operators need an accurate picture of the system's condition to make informed decisions regarding load dispatch, generation scheduling, and contingency analysis.
*   **Data Redundancy:** The power system is equipped with a large number of sensors (SCADA systems) that collect measurements (voltages, currents, power flows, power injections). These measurements are often redundant, meaning more measurements are available than the minimum required to determine the state. This redundancy is essential for improving accuracy and detecting errors.
*   **Measurement Inaccuracies:** Real-world measurements are never perfect. They are subject to various errors due to instrument limitations, noise, communication channel issues, and data transmission problems.
*   **Missing Measurements:** Sometimes, due to equipment failure or communication outages, certain measurements might be unavailable. State estimation can still provide a reliable estimate of the state using the available data.
*   **Foundation for Other Applications:** PSSE provides the accurate and reliable "snapshot" of the system that is essential for many other power system applications, including:
    *   **Contingency Analysis:** Assessing the impact of potential equipment failures (e.g., line outages, generator trips).
    *   **Security Assessment:** Ensuring the system remains stable under various operating conditions.
    *   **Economic Dispatch:** Optimizing generation to meet demand at minimum cost.
    *   **Optimal Power Flow (OPF):** Determining the best operating point for economic and security reasons.
    *   **Load Forecasting:** Predicting future power demand.

**Alignment with Course Outcomes:** This section directly addresses **CO5: Analyse various state estimation methods** by introducing the fundamental concept and purpose of state estimation. The need for state estimation also indirectly supports **CO4: Analyse security issues in power system networks** as accurate state information is vital for security assessment.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 1.3 Textual References

*   **Wood & Wollenberg (3rd Ed., 2023):** Chapter 11, "State Estimation," provides a comprehensive overview of the fundamentals, necessity, and different approaches to state estimation.
*   **Abur & Gomez (2004):** Chapter 1, "Introduction to State Estimation," lays out the foundational concepts and mathematical background, while Chapter 2, "State Estimation Algorithms," delves into various algorithms.

---

## 2. State Estimation of an AC Network

The core of state estimation is to find the state vector $\mathbf{x}$ that best fits the available measurements $\mathbf{z}$. This is typically formulated as an optimization problem.

### 2.1 Power Flow Equations

The relationship between the state variables (voltage magnitudes $V_i$ and angles $\delta_i$ at bus $i$) and the system measurements (power injections $P_i, Q_i$, line flows $P_{ij}, Q_{ij}$, etc.) is governed by the power flow equations.

For an AC network, the power injection at bus $i$ can be expressed as:

$P_i = V_i \sum_{k=1}^{n} V_k (G_{ik} \cos(\delta_i - \delta_k) + B_{ik} \sin(\delta_i - \delta_k))$
$Q_i = V_i \sum_{k=1}^{n} V_k (G_{ik} \sin(\delta_i - \delta_k) - B_{ik} \cos(\delta_i - \delta_k))$

where:
*   $V_i, \delta_i$ are voltage magnitude and angle at bus $i$.
*   $G_{ik}, B_{ik}$ are the real and imaginary parts of the bus admittance matrix element $Y_{ik}$.

These equations are non-linear. For state estimation, we often linearize them around a flat voltage profile or an existing operating point using Taylor series expansion.

### 2.2 Measurement Model

The measurements $\mathbf{z}$ are related to the state vector $\mathbf{x}$ through a measurement function $\mathbf{h}(\mathbf{x})$:

$\mathbf{z} = \mathbf{h}(\mathbf{x}) + \mathbf{e}$

where:
*   $\mathbf{z}$ is the **measurement vector** (a vector of all observed measurements).
*   $\mathbf{h}(\mathbf{x})$ is the **measurement function** that predicts the measurements based on the state vector $\mathbf{x}$. This function represents the power flow equations evaluated at the estimated state.
*   $\mathbf{e}$ is the **measurement error vector**, representing the difference between actual and true measurements.

**Example Measurement Types:**

*   **Bus Voltage Magnitude:** $z_i = V_i + e_i$
*   **Real Power Injection at Bus $i$:** $z_{P_i} = P_i(\mathbf{x}) + e_{P_i}$
*   **Real Power Flow on Line $i-j$:** $z_{P_{ij}} = P_{ij}(\mathbf{x}) + e_{P_{ij}}$

### 2.3 The State Estimation Problem

Given a set of $m$ measurements $\mathbf{z} = [z_1, z_2, ..., z_m]^T$, we want to find the state vector $\mathbf{x} = [\delta_1, ..., \delta_{n-1}, V_1, ..., V_n]^T$ that best explains these measurements.

The objective is to minimize the difference between the actual measurements $\mathbf{z}$ and the predicted measurements $\mathbf{h}(\mathbf{x})$, while considering the uncertainties (errors) in the measurements.

### 2.4 Weighted Least Squares (WLS) Estimation

WLS is a widely used method for state estimation. It aims to minimize a weighted sum of the squared differences between the actual and predicted measurements. The weights are inversely proportional to the variance of the measurement errors, giving more importance to more accurate measurements.

The objective function for WLS is:

$J(\mathbf{x}) = (\mathbf{z} - \mathbf{h}(\mathbf{x}))^T \mathbf{W}^{-1} (\mathbf{z} - \mathbf{h}(\mathbf{x}))$

where:
*   $\mathbf{W}$ is the **covariance matrix** of the measurement errors $\mathbf{e}$. For uncorrelated errors, $\mathbf{W}$ is a diagonal matrix where $W_{ii} = \sigma_i^2$, the variance of the $i$-th measurement.
*   $\mathbf{W}^{-1}$ is the **weight matrix**, often denoted by $\mathbf{R}^{-1}$, where $\mathbf{R}$ is the covariance matrix of the measurement errors. The diagonal elements of $\mathbf{R}^{-1}$ are $1/\sigma_i^2$.

To minimize $J(\mathbf{x})$, we set its gradient with respect to $\mathbf{x}$ to zero:

$\frac{\partial J(\mathbf{x})}{\partial \mathbf{x}} = -2 \mathbf{H}^T \mathbf{R}^{-1} (\mathbf{z} - \mathbf{h}(\mathbf{x})) = 0$

where $\mathbf{H} = \frac{\partial \mathbf{h}(\mathbf{x})}{\partial \mathbf{x}}$ is the **Jacobian matrix** of the measurement functions, evaluated at the current estimate of $\mathbf{x}$.

This results in a system of non-linear equations:

$\mathbf{H}^T \mathbf{R}^{-1} \mathbf{h}(\mathbf{x}) = \mathbf{H}^T \mathbf{R}^{-1} \mathbf{z}$

Since the power flow equations are non-linear, this system is usually solved iteratively. For each iteration, we linearize $\mathbf{h}(\mathbf{x})$ around the current estimate $\mathbf{x}^{(k)}$:

$\mathbf{h}(\mathbf{x}) \approx \mathbf{h}(\mathbf{x}^{(k)}) + \mathbf{H}^{(k)}(\mathbf{x} - \mathbf{x}^{(k)})$

Substituting this into the equation above:

$\mathbf{H}^{(k)T} \mathbf{R}^{-1} [\mathbf{h}(\mathbf{x}^{(k)}) + \mathbf{H}^{(k)}(\mathbf{x} - \mathbf{x}^{(k)})] = \mathbf{H}^{(k)T} \mathbf{R}^{-1} \mathbf{z}$

Rearranging to solve for the update $\Delta \mathbf{x} = \mathbf{x} - \mathbf{x}^{(k)}$:

$\mathbf{H}^{(k)T} \mathbf{R}^{-1} \mathbf{H}^{(k)} \Delta \mathbf{x} = \mathbf{H}^{(k)T} \mathbf{R}^{-1} (\mathbf{z} - \mathbf{h}(\mathbf{x}^{(k)}))$

This is the **normal equation** for WLS. Let $\mathbf{G} = \mathbf{H}^T \mathbf{R}^{-1} \mathbf{H}$. The equation becomes:

$\mathbf{G} \Delta \mathbf{x} = \mathbf{H}^T \mathbf{R}^{-1} (\mathbf{z} - \mathbf{h}(\mathbf{x}^{(k)}))$

The state vector is updated as $\mathbf{x}^{(k+1)} = \mathbf{x}^{(k)} + \Delta \mathbf{x}$. The process continues until the change in the state vector or the objective function is sufficiently small.

**The WLS estimator is given by:**

$\hat{\mathbf{x}} = (\mathbf{H}^T \mathbf{R}^{-1} \mathbf{H})^{-1} \mathbf{H}^T \mathbf{R}^{-1} \mathbf{z}$

**Important Property:** The WLS estimator is the Minimum Variance Unbiased Estimator (MVUE) if the measurement errors are Gaussian and additive.

**Alignment with Course Outcomes:** This section is crucial for **CO5: Analyse various state estimation methods**, specifically covering the WLS approach. The power flow equations and the linearization process also relate to understanding the AC network's behavior, which is fundamental to power system analysis in general.

---

## 3. Maximum Likelihood (ML) Estimation

Maximum Likelihood estimation is a general method for estimating the parameters of a statistical model. For state estimation, it aims to find the state vector $\mathbf{x}$ that maximizes the likelihood of observing the given measurements $\mathbf{z}$.

### 3.1 Likelihood Function

The likelihood function $L(\mathbf{x}; \mathbf{z})$ is the probability of observing the data $\mathbf{z}$ given a specific state $\mathbf{x}$. If we assume the measurement errors $\mathbf{e}$ are independent and follow a probability distribution $f(\cdot)$, then the likelihood function is:

$L(\mathbf{x}; \mathbf{z}) = \prod_{i=1}^{m} f(z_i - h_i(\mathbf{x}))$

where $h_i(\mathbf{x})$ is the $i$-th component of $\mathbf{h}(\mathbf{x})$.

It is often more convenient to work with the logarithm of the likelihood function, called the log-likelihood function:

$\ln L(\mathbf{x}; \mathbf{z}) = \sum_{i=1}^{m} \ln f(z_i - h_i(\mathbf{x}))$

### 3.2 ML for Gaussian Errors

If we assume that the measurement errors $\mathbf{e}$ are independent and normally (Gaussian) distributed with mean zero and variance $\sigma_i^2$ for each measurement $i$, the probability density function (PDF) for the $i$-th error is:

$f(e_i) = \frac{1}{\sqrt{2\pi \sigma_i^2}} \exp\left(-\frac{e_i^2}{2\sigma_i^2}\right)$

The likelihood function is:

$L(\mathbf{x}; \mathbf{z}) = \prod_{i=1}^{m} \frac{1}{\sqrt{2\pi \sigma_i^2}} \exp\left(-\frac{(z_i - h_i(\mathbf{x}))^2}{2\sigma_i^2}\right)$

The log-likelihood function is:

$\ln L(\mathbf{x}; \mathbf{z}) = \sum_{i=1}^{m} \left[ -\frac{1}{2} \ln(2\pi \sigma_i^2) - \frac{(z_i - h_i(\mathbf{x}))^2}{2\sigma_i^2} \right]$

To maximize $\ln L(\mathbf{x}; \mathbf{z})$, we need to minimize the term involving the squared errors. Ignoring the constant terms (which do not depend on $\mathbf{x}$), we aim to minimize:

$\sum_{i=1}^{m} \frac{(z_i - h_i(\mathbf{x}))^2}{\sigma_i^2}$

This is exactly the objective function of the Weighted Least Squares (WLS) estimator:

$J_{WLS}(\mathbf{x}) = (\mathbf{z} - \mathbf{h}(\mathbf{x}))^T \mathbf{R}^{-1} (\mathbf{z} - \mathbf{h}(\mathbf{x})) = \sum_{i=1}^{m} \frac{(z_i - h_i(\mathbf{x}))^2}{\sigma_i^2}$

**Conclusion:** For independent, additive Gaussian errors, the Maximum Likelihood estimator is equivalent to the Weighted Least Squares estimator.

**Alignment with Course Outcomes:** This section directly contributes to **CO5: Analyse various state estimation methods** by explaining the ML approach and its connection to WLS, which is a key estimation technique.

### 3.3 Textual References

*   **Abur & Gomez (2004):** Chapter 2, "State Estimation Algorithms," elaborates on ML estimation and its relationship with WLS.
*   **Wood & Wollenberg (3rd Ed., 2023):** Discusses various estimation philosophies, including ML, within the context of state estimation.

---

## 4. Sources of Error in State Estimation

Despite the use of advanced estimation techniques, state estimation results can be affected by various errors. Identifying these sources is crucial for understanding the limitations and improving the accuracy of the estimates.

### 4.1 Measurement Errors

These are inherent inaccuracies in the data collected from the power system.

*   **Instrumental Errors:** Limitations of transducers, meters, and communication equipment. Calibration drift, temperature effects, and quantization errors.
*   **Random Errors (Noise):** Unpredictable fluctuations in the measurement signal due to electrical noise, interference, and communication channel characteristics.
*   **Systematic Errors (Bias):** Consistent deviation from the true value, often due to incorrect instrument calibration or a persistent bias in the measurement system.
*   **Gross Errors (Bad Data):** Significant deviations from the true value, often caused by sensor failures, incorrect settings, or communication malfunctions. These are the most problematic for state estimation.

### 4.2 Modeling Errors

The mathematical models used to represent the power system may not perfectly reflect reality.

*   **Power Flow Model Simplifications:**
    *   **Neglecting Transmission Line/Transformer Shunt Admittances:** Often assumed for simplicity but can affect accuracy, especially in heavily loaded systems.
    *   **Assuming Flat Voltage Profile Initial Guess:** While WLS converges, a poor initial guess can increase the number of iterations and affect accuracy.
    *   **Ignoring Load and Generator Dynamics:** State estimation is typically a quasi-steady-state process, assuming constant loads and generation between snapshots.
*   **Parameter Errors:** Inaccuracies in the system's parameters like line resistances and reactances, transformer tap settings, and shunt compensation.
*   **Network Topology Errors:** Incorrect representation of which lines are in service, bus connections, or tap positions in the SCADA system or the state estimation software.

### 4.3 Data Processing Errors

Errors can occur during the collection, transmission, and processing of measurement data.

*   **Data Transmission Errors:** Corruption of data during transmission over communication networks.
*   **Data Conversion Errors:** Errors introduced during the conversion of analog measurements to digital values.
*   **Time Synchronization Errors:** If measurements from different locations are not precisely synchronized, it can lead to discrepancies, especially in dynamic situations.

### 4.4 Bad Data

As mentioned, gross errors or bad data are a significant concern. They can severely distort the estimated state and lead to incorrect operational decisions.

**Types of Bad Data:**

*   **Grossly Erroneous Measurement:** A single measurement value is significantly wrong.
*   **Data Point Error:** An incorrect value associated with a measurement, e.g., wrong bus number or line identifier.
*   **Topology Error:** Incorrectly indicating that a line is out of service when it is in service, or vice-versa.

**Alignment with Course Outcomes:** This section directly addresses **CO4: Analyse security issues in power system networks** by highlighting how errors, particularly bad data, can compromise the security and reliability of system operation. It also provides context for **CO5: Analyse various state estimation methods** by explaining the challenges these methods must overcome.

### 4.5 Textual References

*   **Wood & Wollenberg (3rd Ed., 2023):** Chapter 11 discusses sources of error and their impact on state estimation.
*   **Abur & Gomez (2004):** Chapter 1 and Chapter 7, "Bad Data Detection and Identification," provide detailed insights into measurement errors and techniques for handling them.
*   **Grainger & Stevenson (1994):** While focused on power system analysis, this book provides foundational knowledge on system modeling and measurement principles that indirectly relate to sources of error.

---

## 5. Detection and Identification of Bad Data

The presence of bad data can significantly degrade the performance of state estimation. Therefore, methods are needed to detect and identify these erroneous measurements.

### 5.1 Detection of Bad Data

The primary goal of detection is to determine if any measurement is "bad" and needs to be excluded from the estimation process.

#### 5.1.1 Residual Analysis (The $\chi^2$ Test)

The **residual** for each measurement $i$ is the difference between the actual measurement $z_i$ and the estimated measurement $\hat{z}_i = h_i(\hat{\mathbf{x}})$, where $\hat{\mathbf{x}}$ is the estimated state vector.

$r_i = z_i - \hat{z}_i = z_i - h_i(\hat{\mathbf{x}})$

The residuals represent the "errors" that the estimator could not account for using the given model and data. Under the assumption of Gaussian measurement errors, the residuals for good data are expected to be small.

The sum of squared residuals, weighted by their variances, is a key statistic. For WLS, the objective function $J(\hat{\mathbf{x}})$ is precisely this sum:

$J(\hat{\mathbf{x}}) = \sum_{i=1}^{m} \frac{r_i^2}{\sigma_i^2}$

**The $\chi^2$ Test:** If the measurement errors are independent and normally distributed with variances $\sigma_i^2$, and if all measurements are good, then the statistic $\sum_{i=1}^{m} r_i^2/\sigma_i^2$ (or $\sum_{i=1}^{m} w_i r_i^2$ where $w_i=1/\sigma_i^2$) follows a $\chi^2$ distribution with $m-n$ degrees of freedom (where $n$ is the number of state variables).

*   **Procedure:**
    1.  Perform a WLS state estimation to obtain $\hat{\mathbf{x}}$ and calculate the residuals $r_i$.
    2.  Calculate the test statistic $J = \sum_{i=1}^{m} w_i r_i^2$.
    3.  Compare $J$ with a pre-determined threshold value from the $\chi^2$ distribution at a chosen significance level (e.g., 95% confidence interval) with $m-n$ degrees of freedom.
    4.  If $J$ exceeds the threshold, it indicates that at least one measurement is likely bad (detection is successful). If $J$ is below the threshold, it's assumed all measurements are good.

#### 5.1.2 Normalized Residuals

To facilitate comparison between residuals with different variances, normalized residuals are often used:

$\bar{r}_i = \frac{r_i}{\sigma_i} = \frac{r_i}{\sqrt{W_{ii}^{-1}}}$

Or, if the covariance matrix $\mathbf{R}$ is used directly (and is diagonal):

$\bar{r}_i = \frac{r_i}{\sigma_i}$

In WLS, the quantity $\frac{r_i^2}{\sigma_i^2}$ directly relates to the $\chi^2$ distribution.

### 5.2 Identification of Bad Data

Once bad data is detected, the next step is to identify which specific measurement(s) are erroneous.

#### 5.2.1 Generalized Likelihood Ratio (GLR) Test (or Data Consistency Check)

The GLR test is a statistical method for identifying a single bad data point. It involves re-estimating the state vector after sequentially removing each measurement and observing the impact on the objective function.

*   **Procedure:**
    1.  Calculate the objective function $J_0 = J(\hat{\mathbf{x}})$ from the initial full estimation.
    2.  For each measurement $i=1, \dots, m$:
        a.  Remove the $i$-th measurement ($z_i$) and its corresponding weight ($w_i$) from the vectors $\mathbf{z}$ and $\mathbf{R}^{-1}$.
        b.  Perform a new WLS estimation with the remaining $m-1$ measurements to obtain $\hat{\mathbf{x}}_i$ and calculate the objective function $J_i = J(\hat{\mathbf{x}}_i)$.
        c.  Calculate the increment in the objective function due to removing measurement $i$: $\Delta J_i = J_0 - J_i$.
    3.  The measurement $k$ that yields the largest $\Delta J_k$ is most likely the bad data point.
    4.  A threshold is typically applied. If $\Delta J_k$ exceeds a certain value, measurement $k$ is flagged as bad.

**Mathematical Basis:** It can be shown that $\Delta J_i \approx \frac{r_i^2}{\sigma_i^2(1-w_i H_i (H^T W^{-1} H)^{-1} H_i^T)}$, where $H_i$ is the $i$-th row of the Jacobian $\mathbf{H}$, and $w_i = 1/\sigma_i^2$. For large systems and redundant measurements, $1-w_i H_i (H^T W^{-1} H)^{-1} H_i^T \approx 1$. Thus, $\Delta J_i$ is approximately proportional to $r_i^2/\sigma_i^2$. This means the measurement with the largest normalized residual squared is the most likely candidate for bad data.

#### 5.2.2 Direct Comparison of Residuals (Maximum Normalized Residual)

A simpler, though less statistically rigorous, method is to directly examine the normalized residuals.

*   **Procedure:**
    1.  Perform WLS estimation and calculate the normalized residuals $\bar{r}_i = r_i/\sigma_i$ for all measurements.
    2.  Identify the measurement $k$ with the largest absolute normalized residual $|\bar{r}_k|$.
    3.  If $|\bar{r}_k|$ exceeds a pre-defined threshold (e.g., 3 or 4), then measurement $k$ is flagged as bad.

**Important Note:** This method is effective for detecting a single bad data point. If multiple bad data points exist, their effects can mask each other, and this method might fail to identify all of them.

#### 5.2.3 Iterative Removal

If bad data is identified and removed, the state estimation should be re-run with the remaining data. This process is repeated until no more bad data is detected.

**Alignment with Course Outcomes:** This section is directly relevant to **CO4: Analyse security issues in power system networks** by providing methods to improve the reliability of information used for security analysis. It also strengthens **CO5: Analyse various state estimation methods** by detailing how to handle errors within the estimation framework.

### 5.3 Textual References

*   **Abur & Gomez (2004):** Chapter 7, "Bad Data Detection and Identification," offers an in-depth treatment of statistical tests and practical methods for bad data handling.
*   **Wood & Wollenberg (3rd Ed., 2023):** Chapter 11 discusses practical aspects of bad data detection and mitigation strategies.

---

## 6. Key Concepts and Definitions to Remember

*   **State Vector ($\mathbf{x}$):** Vector of voltage magnitudes and phase angles at each bus.
*   **Measurement Vector ($\mathbf{z}$):** Vector of actual measurements obtained from sensors.
*   **Measurement Function ($\mathbf{h}(\mathbf{x})$):** Function that relates the state vector to expected measurements using power flow equations.
*   **Measurement Error ($\mathbf{e}$):** Difference between actual and true measurements.
*   **Covariance Matrix ($\mathbf{R}$):** Matrix describing the variance and covariance of measurement errors. Diagonal elements $\sigma_i^2$ represent the variance of the $i$-th measurement.
*   **Weight Matrix ($\mathbf{R}^{-1}$):** Inverse of the covariance matrix, where diagonal elements $w_i = 1/\sigma_i^2$ are the weights for each measurement.
*   **Jacobian Matrix ($\mathbf{H}$):** Matrix of partial derivatives of the measurement functions with respect to the state variables.
*   **Weighted Least Squares (WLS):** An estimation method that minimizes the weighted sum of squared measurement errors.
*   **Maximum Likelihood (ML):** An estimation method that finds the parameters that maximize the probability of observing the given data. Equivalent to WLS for Gaussian errors.
*   **Residual ($r_i$):** Difference between the actual measurement and the estimated measurement ($z_i - h_i(\hat{\mathbf{x}})$).
*   **Normalized Residual ($\bar{r}_i$):** Residual divided by the standard deviation of the measurement ($\bar{r}_i = r_i / \sigma_i$).
*   **$\chi^2$ Test:** A statistical test to detect the presence of bad data based on the sum of squared normalized residuals.
*   **Generalized Likelihood Ratio (GLR) Test:** A statistical test to identify the specific measurement(s) that are likely erroneous.

---

## 7. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the primary purpose of state estimation in a power system operation center. Why is it preferred over simply using raw measurements?

**Answer:**
The primary purpose of state estimation is to provide a reliable, accurate, and consistent picture of the power system's operating state (voltage magnitudes and phase angles at all buses) by processing potentially noisy, redundant, and possibly erroneous real-time measurements. It is preferred over raw measurements because:
1.  **Error Correction:** It filters out random errors and noise.
2.  **Bad Data Handling:** It can detect and reject grossly erroneous measurements.
3.  **Data Reconciliation:** It reconciles data from various sources and types of measurements.
4.  **Completeness:** It can estimate unmeasured quantities.
5.  **Consistency:** It ensures that the estimated state adheres to the fundamental physical laws of power flow.

---

**Question 2 (WLS Formulation):**
Consider a simple DC network with two buses (1 and 2) and a single line between them. Let the state variables be the voltage at bus 1 ($V_1$) and bus 2 ($V_2$). Assume bus 1 is the reference bus ($\delta_1=0, \delta_2=0$). Let $R$ be the resistance of the line.
We have the following measurements:
*   $z_1$: Voltage at bus 2 ($V_2$). Assume variance $\sigma_1^2$.
*   $z_2$: Current flow from bus 1 to bus 2 ($I_{12}$). Assume variance $\sigma_2^2$.

The measurement functions are:
*   $h_1(\mathbf{x}) = V_2$
*   $h_2(\mathbf{x}) = (V_1 - V_2)/R$

The state vector is $\mathbf{x} = [V_1, V_2]^T$. We usually fix $V_1=1.0$ (per unit) as the reference. So, the state vector effectively becomes $\mathbf{x} = [V_2]^T$, and $V_1$ is known.

Let $V_1 = 1.0$.
Measurement $z_1 = 0.98$ p.u., $\sigma_1^2 = 0.0001$ p.u.$^2$.
Measurement $z_2 = 10.2$ A, $\sigma_2^2 = 0.01$ A$^2$.
Line resistance $R = 0.1$ $\Omega$.

a) Formulate the Weighted Least Squares objective function $J(\mathbf{x})$ for estimating $V_2$.
b) Write down the equations needed to solve for the optimal $V_2$ using WLS.

**Answer:**
a) The state vector is $\mathbf{x} = [V_2]^T$. The measurements are $\mathbf{z} = [z_1, z_2]^T$.
The measurement functions are:
*   $h_1(\mathbf{x}) = V_2$
*   $h_2(\mathbf{x}) = (1.0 - V_2)/0.1 = 10(1.0 - V_2)$

The weight matrix is $\mathbf{R}^{-1} = \begin{bmatrix} 1/\sigma_1^2 & 0 \\ 0 & 1/\sigma_2^2 \end{bmatrix} = \begin{bmatrix} 1/0.0001 & 0 \\ 0 & 1/0.01 \end{bmatrix} = \begin{bmatrix} 10000 & 0 \\ 0 & 100 \end{bmatrix}$.

The WLS objective function is:
$J(V_2) = (\mathbf{z} - \mathbf{h}(V_2))^T \mathbf{R}^{-1} (\mathbf{z} - \mathbf{h}(V_2))$
$J(V_2) = \begin{bmatrix} z_1 - V_2 \\ z_2 - 10(1.0 - V_2) \end{bmatrix}^T \begin{bmatrix} 10000 & 0 \\ 0 & 100 \end{bmatrix} \begin{bmatrix} z_1 - V_2 \\ z_2 - 10(1.0 - V_2) \end{bmatrix}$
$J(V_2) = 10000(z_1 - V_2)^2 + 100(z_2 - 10(1.0 - V_2))^2$

b) To find the optimal $V_2$, we set the derivative of $J(V_2)$ with respect to $V_2$ to zero:
$\frac{dJ}{dV_2} = 0$

$\frac{dJ}{dV_2} = 10000 \cdot 2(z_1 - V_2)(-1) + 100 \cdot 2(z_2 - 10(1.0 - V_2))(-10(-1))$
$\frac{dJ}{dV_2} = -20000(z_1 - V_2) + 2000(z_2 - 10(1.0 - V_2))$

Setting the derivative to zero:
$-20000(z_1 - V_2) + 2000(z_2 - 10(1.0 - V_2)) = 0$
Divide by 2000:
$-10(z_1 - V_2) + (z_2 - 10(1.0 - V_2)) = 0$
$-10z_1 + 10V_2 + z_2 - 10 + 10V_2 = 0$
$20V_2 = 10z_1 - z_2 + 10$
$V_2 = \frac{10z_1 - z_2 + 10}{20}$

This is the solution for $V_2$ (and thus $\hat{V_2}$).

---

**Question 3 (Bad Data Detection):**
Suppose after performing a state estimation, you obtain the following normalized residuals for five measurements:
$\bar{r}_1 = 0.5$, $\bar{r}_2 = -0.8$, $\bar{r}_3 = 3.5$, $\bar{r}_4 = -1.2$, $\bar{r}_5 = 1.0$.
Assume these measurements are from a system with sufficient redundancy.

a) Which measurement is most likely to be a bad data point based on the normalized residuals?
b) If the threshold for detection is set at 3.0 for $|\bar{r}_i|$, what is the conclusion?

**Answer:**
a) The measurement with the largest absolute normalized residual is the most likely bad data point.
$|\bar{r}_1| = 0.5$
$|\bar{r}_2| = 0.8$
$|\bar{r}_3| = 3.5$
$|\bar{r}_4| = 1.2$
$|\bar{r}_5| = 1.0$
Measurement 3 has the largest absolute normalized residual ($|\bar{r}_3| = 3.5$).

b) Since the threshold for detection is 3.0 and $|\bar{r}_3| = 3.5 > 3.0$, measurement 3 is detected as a bad data point.

---

**Question 4 (State Estimation vs. Raw Data):**
If a power system operator has access to a full set of raw voltage and power flow measurements, why would they still need a state estimator? Discuss the potential issues with relying solely on raw measurements.

**Answer:**
Relying solely on raw measurements presents several issues:
1.  **Noise and Inaccuracies:** Raw measurements are inherently noisy and subject to instrumental errors, leading to an inaccurate representation of the system state.
2.  **Lack of Redundancy Handling:** Raw measurements are not processed to account for their different accuracy levels (variances). A less accurate measurement might have an undue influence on decisions.
3.  **Inconsistency:** Raw measurements, especially from different sources or taken at slightly different times, may not be perfectly consistent with the physical laws governing power flow.
4.  **Missing Data:** If some sensors fail, raw data will have gaps. State estimation can use existing data to infer the missing values.
5.  **Bad Data Impact:** A single grossly erroneous measurement (bad data) can severely distort the perceived system state, leading to incorrect operational decisions, potential instability, or economic losses, without any mechanism for detection or rejection.
A state estimator reconciles these issues by providing a single, coherent, and reliable estimate of the system state that is consistent with the power system model and accounts for the statistical properties of the measurements.

---

## 8. Important Points to Remember

*   State estimation is fundamental for real-time power system monitoring and control, providing a reliable snapshot of the system state.
*   The state vector for an AC network typically consists of voltage magnitudes and phase angles at each bus.
*   WLS is a common and effective state estimation technique, minimizing the weighted sum of squared errors.
*   ML estimation for Gaussian errors is equivalent to WLS.
*   Sources of error can be from measurements, models, or data processing.
*   Bad data is a critical issue that must be detected and identified to ensure accurate state estimates.
*   Residual analysis ($\chi^2$ test) is used for detecting bad data, while methods like GLR or maximum normalized residual are used for identification.
*   Redundancy in measurements is crucial for the effectiveness of state estimation and bad data detection.

---

## 9. Alignment with Course Outcomes

*   **CO1: Analyse various methods of generation scheduling.**
    *   While not directly covered in this module, accurate state estimation (from this module) provides the essential real-time system information needed for effective generation scheduling algorithms.
*   **CO2: Formulate hydro-thermal scheduling problems.**
    *   Similar to CO1, state estimation provides the system load and network flow information that is input to scheduling problems.
*   **CO3: Evaluate power exchange in interconnected power systems.**
    *   Accurate state estimation is crucial for calculating the flows and voltages necessary to evaluate power exchanges between different areas or utilities.
*   **CO4: Analyse security issues in power system networks.**
    *   This module is highly relevant. State estimation provides the foundation for contingency analysis and security assessment. Detecting and handling bad data directly improves the reliability of security analysis, a key aspect of system security.
*   **CO5: Analyse various state estimation methods.**
    *   This module directly covers the principles of state estimation, WLS estimation, ML estimation, and introduces the concepts of error sources and bad data handling, fulfilling this outcome comprehensively.

---