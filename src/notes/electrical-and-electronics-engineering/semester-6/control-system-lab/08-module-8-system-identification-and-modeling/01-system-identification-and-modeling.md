---
title: "System Identification and Modeling"
subject: "CONTROL SYSTEM LAB"
module: "Module 8: System Identification and Modeling"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3676e"
status: "completed"
scrapedAt: "2026-05-23T16:25:17.406Z"
---
# Module 8: System Identification and Modeling - Control System Lab

## Introduction to System Identification and Modeling

System identification is the process of developing a mathematical model of a dynamical system from experimental data. It is a crucial step in control system design, as it allows us to understand and predict the behavior of a system and subsequently design appropriate controllers.

### Key Concepts and Definitions

*   **System:** A collection of components that interact with each other to achieve a specific objective.
*   **Model:** A mathematical representation of a system that captures its input-output behavior. Models can be:
    *   **Physical Models:** Based on fundamental physical laws (e.g., Newton's laws, Kirchhoff's laws).
    *   **Black-Box Models:** Empirical models derived solely from input-output data without explicit knowledge of the system's internal structure.
    *   **Gray-Box Models:** Models that combine aspects of physical and black-box modeling, where some physical knowledge is incorporated but some parameters are identified from data.
*   **System Identification:** The process of building a mathematical model of a dynamical system based on observed input and output data.
*   **Modeling:** The process of creating a representation of a system, which may or may not be derived from experimental data. System identification is a specific form of modeling.
*   **Parameters:** Constants or variables within a model that define its behavior. In system identification, these are often estimated from data.
*   **Experimentation:** The process of applying known inputs to a system and measuring its corresponding outputs.
*   **Data Acquisition:** The process of collecting input and output data from the system under test.
*   **Model Validation:** Assessing the accuracy and usefulness of the identified model by comparing its predictions to new experimental data.

### Learning Outcomes Covered in this Module:

*   **LO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
*   **LO2: Conduct suitable experiments and determine the performance specifications.**
*   **LO3: Analyze a linear continuous time system model using simulation tools.**
*   **LO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**

### Relevance to Course Outcomes:

This module directly supports:

*   **CO1 (K3):** By teaching how to design experiments and collect data for parameter estimation.
*   **CO2 (K3):** By demonstrating how to extract performance specifications from experimental data or identified models.
*   **CO3 (K3):** By providing the foundation for analyzing system behavior using identified models in simulation environments.
*   **CO4 (K5):** By enabling the design of controllers based on models obtained through identification, a key step before controller design and implementation.

---

## 1. System Identification: The Process and Methods

System identification is a cycle that typically involves:

1.  **Experiment Design:** Deciding on the inputs to apply and how to collect data.
2.  **Data Collection:** Executing the experiment and recording data.
3.  **Model Structure Selection:** Choosing the mathematical form of the model.
4.  **Parameter Estimation:** Using algorithms to find the model parameters that best fit the data.
5.  **Model Validation:** Evaluating the quality of the identified model.

### 1.1 Experiment Design (LO1, LO2)

**Objective:** To collect informative data that allows for accurate model parameter estimation and determination of system behavior.

**Key Considerations:**

*   **Input Signal Selection:** The choice of input signal significantly impacts the quality of the identified model.
    *   **Step Input:** Simple to implement, provides a good estimate of the DC gain and settling time. However, it may not excite all modes of the system adequately. (Ogata, Chapter 3)
    *   **Impulse Input:** Theoretically ideal for capturing the system's impulse response, but difficult to implement perfectly in practice.
    *   **Sinusoidal Inputs:** Useful for frequency response analysis, can identify system dynamics at specific frequencies. Requires varying the frequency. (Nise, Chapter 2)
    *   **Pseudo-Random Binary Sequence (PRBS):** A digital signal that approximates white noise, rich in frequency content, and useful for exciting system dynamics across a wide frequency range. It's often preferred in practice.
    *   **White Noise:** Theoretically contains all frequencies with equal power, ideal for exciting all modes. However, practical noise is not truly white.
*   **Excitation Level:** The amplitude of the input signal should be sufficient to overcome system noise but not so large as to cause nonlinear behavior or saturation.
*   **Sampling Rate:** For discrete-time identification, the sampling rate must be at least twice the highest frequency present in the system (Nyquist-Shannon sampling theorem). A common rule of thumb is to sample at 5-10 times the system's dominant pole frequency or bandwidth. (Nagrath & Gopal, Chapter 3)
*   **Experiment Duration:** The experiment must be long enough to capture the system's transient and steady-state responses.
*   **Data Preprocessing:** Raw data might need filtering to remove noise or outliers before model estimation.

**Example (LO1): Identifying a First-Order System**

Consider a simple RC circuit (voltage input, current output). We want to identify its transfer function $G(s) = \frac{K}{Ts+1}$.

*   **Experiment:** Apply a step voltage input to the RC circuit.
*   **Data Collection:** Record the input voltage and output current over time.
*   **Parameter Estimation:**
    *   Observe the initial value of the current ($I_{initial}$). This gives the DC gain $K = \frac{I_{initial}}{V_{input\_step}}$.
    *   Observe the time it takes for the current to reach approximately 63.2% of its final value. This time constant $\tau$ is the system's time constant.
    *   Alternatively, using the identified model parameters, we can simulate the step response and compare it to the experimental data.

**Example (LO2): Determining Performance Specifications from Step Response**

From the step response data collected in the RC circuit example:

*   **Rise Time ($T_r$):** Time taken for the output to rise from 10% to 90% of its final value.
*   **Settling Time ($T_s$):** Time taken for the output to settle within a specified tolerance band (e.g., 2% or 5%) of its final value.
*   **Steady-State Value:** The final value the output reaches.
*   **DC Gain:** The ratio of the steady-state output to the steady-state input.

---

## 2. Model Structure Selection

Once data is collected, we need to choose a mathematical form for our model.

### 2.1 Types of Models

*   **Transfer Function Models (Linear Time-Invariant - LTI):**
    *   **Rational Transfer Functions:** Ratios of polynomials in $s$ (for continuous-time) or $z$ (for discrete-time).
        *   Continuous-time: $G(s) = \frac{b_m s^m + \dots + b_0}{a_n s^n + \dots + a_0}$
        *   Discrete-time: $G(z) = \frac{b_m z^m + \dots + b_0}{a_n z^n + \dots + a_0}$
    *   **State-Space Models:** Represent the system using first-order differential equations in terms of state variables.
        *   Continuous-time:
            $\dot{x}(t) = Ax(t) + Bu(t)$
            $y(t) = Cx(t) + Du(t)$
        *   Discrete-time:
            $x[k+1] = Ax[k] + Bu[k]$
            $y[k] = Cx[k] + Du[k]$
        (Nise, Chapter 4)

*   **Nonlinear Models:** If the system exhibits nonlinear behavior, linear models may not be sufficient. These can include polynomial models, neural networks, etc.

### 2.2 Selecting Model Order and Structure

*   **Prior Knowledge:** If we have a physical understanding of the system, we can infer the likely model structure (e.g., a mechanical system might have second-order dynamics). (Ogata, Chapter 5)
*   **Data Characteristics:** Observing the transient response can suggest the order. A system with oscillations might require higher-order terms or complex poles.
*   **Model Complexity vs. Fit:** A higher-order model can fit the data better but may also fit the noise, leading to poor generalization. Cross-validation techniques are often used to select an appropriate order.
*   **Akaike Information Criterion (AIC) or Bayesian Information Criterion (BIC):** Statistical criteria that balance model fit with model complexity.

**Example (LO1): Choosing Model Structure for a Motor Control System**

A DC motor's dynamics can often be modeled by a second-order transfer function relating armature voltage to angular velocity. This is based on physical principles involving electrical and mechanical equations.

---

## 3. Parameter Estimation Techniques

The core of system identification is estimating the unknown parameters in the selected model structure.

### 3.1 Least Squares Estimation

This is a fundamental method that minimizes the sum of the squared errors between the model's output and the actual system output.

*   **Objective:** Minimize $J = \sum_{k=1}^{N} e^2[k]$, where $e[k]$ is the error at time step $k$.
*   **Linear Regression:** If the model is linear in its parameters, it can be formulated as a linear regression problem.
    *   The model can be written as $y[k] = \phi[k]^T \theta$, where $\phi[k]$ is a vector of past inputs, outputs, and regressors, and $\theta$ is the vector of parameters to be estimated.
    *   The least squares solution is $\hat{\theta} = (\Phi^T \Phi)^{-1} \Phi^T Y$, where $\Phi$ is the matrix of $\phi[k]^T$ and $Y$ is the vector of outputs.
    (Nagrath & Gopal, Chapter 10 - Estimation Methods)

**Example (LO1, LO3): Estimating Parameters for $y[k] = a_1 y[k-1] + b_0 u[k]$**

This is a discrete-time model of a first-order system. We want to estimate $a_1$ and $b_0$.

*   The model can be written as: $y[k] = \begin{bmatrix} y[k-1] & u[k] \end{bmatrix} \begin{bmatrix} a_1 \\ b_0 \end{bmatrix}$
*   So, $\phi[k]^T = \begin{bmatrix} y[k-1] & u[k] \end{bmatrix}$ and $\theta = \begin{bmatrix} a_1 \\ b_0 \end{bmatrix}$.
*   We collect data pairs $(u[k], y[k])$ and form the matrix $\Phi$ and vector $Y$.
*   Using $\hat{\theta} = (\Phi^T \Phi)^{-1} \Phi^T Y$, we can find the estimates for $a_1$ and $b_0$.

### 3.2 Recursive Least Squares (RLS)

RLS is an extension of least squares that updates the parameter estimates recursively as new data arrives. This is useful for online identification or when data is processed sequentially.

*   **Algorithm:** Iteratively updates $\hat{\theta}$ and the covariance matrix $P$.
*   **Advantage:** Computationally efficient for large datasets; suitable for adaptive control.
    (Nise, Chapter 8 - State-Space Methods, often discussed in advanced texts for parameter estimation)

### 3.3 Maximum Likelihood Estimation (MLE)

This method finds the parameters that maximize the probability of observing the given data, assuming a specific probability distribution for the noise (often Gaussian).

*   Often leads to the same estimates as least squares for Gaussian noise.
*   More general and can handle different noise models.

### 3.4 Instrumental Variables (IV) Method

Used when there is correlation between the input signal and the noise, which can bias least squares estimates. It introduces "instrumental variables" that are correlated with the input but uncorrelated with the noise.

---

## 4. Model Validation

After estimating the parameters, it's crucial to check if the identified model accurately represents the system.

### 4.1 Prediction Error Methods

*   **One-Step-Ahead Prediction:** Predict $y[k]$ using $u[1], \dots, u[k]$ and $y[1], \dots, y[k-1]$.
*   **Simulation-Based Prediction:** Predict $y[k]$ using the identified model and previously predicted outputs $y_{pred}[k-1], y_{pred}[k-2], \dots$ and current input $u[k]$. This is a better test of the model's long-term behavior.

### 4.2 Metrics for Model Validation

*   **Mean Squared Error (MSE) or Root Mean Squared Error (RMSE):** Measures the average error between the model's output and the actual system output.
*   **Final Prediction Error (FPE):** A criterion that balances model fit with complexity.
*   **Correlation Analysis:** Examine the correlation between the prediction error and the input signal. If they are correlated, it suggests the model has not captured all the input's influence.
*   **Residual Analysis:** The prediction errors (residuals) should ideally be white noise, meaning they are uncorrelated and have zero mean.

### 4.3 Cross-Validation

*   Divide the collected data into a "training set" and a "validation set."
*   Identify the model using the training set.
*   Validate the model's performance on the validation set. This is crucial to avoid overfitting.

**Example (LO3): Validating the RC Circuit Model**

*   **Data:** Collect data using a PRBS input.
*   **Identification:** Use RLS to estimate $K$ and $\tau$ for $G(s) = \frac{K}{Ts+1}$.
*   **Validation:**
    1.  Apply a new, different input signal (e.g., a sine wave) to the actual RC circuit and record the output.
    2.  Using the identified $K$ and $\tau$, simulate the response of the model to this new input.
    3.  Compare the simulated output with the actual output. Calculate RMSE.
    4.  Check if the residuals (difference between actual and simulated output) are white noise.

---

## 5. Analyzing Linear Continuous Time System Models using Simulation Tools (LO3)

Once a linear continuous-time model (typically a transfer function or state-space representation) is identified, simulation tools like MATLAB/Simulink are essential for analysis.

### 5.1 Representing Models in MATLAB

*   **Transfer Function:**
    *   `num = [b_m, ..., b_0]`
    *   `den = [a_n, ..., a_0]`
    *   `G = tf(num, den)`
*   **State-Space:**
    *   `A = [...]`
    *   `B = [...]`
    *   `C = [...]`
    *   `D = [...]`
    *   `sys = ss(A, B, C, D)`

### 5.2 Simulation of System Responses

*   **Step Response:**
    *   `step(G)` or `step(sys)`: Displays the step response.
    *   `step(G, t)`: Simulates the step response at specified time points `t`.
*   **Impulse Response:**
    *   `impulse(G)` or `impulse(sys)`
*   **Sinusoidal Response:**
    *   `lsim(G, u, t)`: Simulates the response to an arbitrary input signal `u` at time points `t`. This can be used to simulate with sine waves or other signals.
*   **Frequency Response:**
    *   `bode(G)` or `bode(sys)`: Generates Bode plots (magnitude and phase vs. frequency).
    *   `nyquist(G)` or `nyquist(sys)`: Generates Nyquist plots.
    *   `sigma(G)` or `sigma(sys)`: Generates Root Locus plots.

### 5.3 Stability Analysis

*   **Poles and Zeros:**
    *   `pzmap(G)` or `pzmap(sys)`: Displays pole-zero map.
    *   Poles in the left-half of the s-plane indicate stability.
*   **Bode/Nyquist Criteria:** Can be used to assess stability margins.

**Example (LO3): Analyzing an Identified DC Motor Model**

Assume an identified transfer function for a DC motor (voltage to angular velocity) is $G(s) = \frac{10}{s^2 + 2s + 10}$.

*   **MATLAB Code:**
    ```matlab
    num = [10];
    den = [1, 2, 10];
    G_motor = tf(num, den);

    % Step Response
    figure;
    step(G_motor);
    title('Step Response of DC Motor Model');
    grid on;

    % Bode Plot
    figure;
    bode(G_motor);
    title('Bode Plot of DC Motor Model');
    grid on;

    % Pole-Zero Map
    figure;
    pzmap(G_motor);
    title('Pole-Zero Map of DC Motor Model');
    grid on;
    ```
*   **Analysis:**
    *   The step response will show how the motor's speed changes when a constant voltage is applied. We can observe overshoot and settling time.
    *   The Bode plot reveals the system's gain and phase characteristics at different frequencies, indicating bandwidth and phase margin.
    *   The pole-zero map shows the poles at $-1 \pm j3$. Since the real parts are negative, the system is stable. The location of poles indicates the damping and natural frequency.

---

## 6. Designing Controllers for Performance Requirements (LO4)

Based on the analysis of the identified model, controllers can be designed to improve performance.

### 6.1 Performance Specifications

*   **Transient Response:** Rise time, settling time, overshoot, peak time.
*   **Steady-State Accuracy:** Steady-state error for specific inputs (step, ramp).
*   **Stability:** Sufficient gain and phase margins.
*   **Disturbance Rejection:** Ability to reject external disturbances.
*   **Robustness:** Performance in the presence of model uncertainties.

### 6.2 Controller Types

*   **Proportional (P) Controller:** $C(s) = K_p$. Reduces rise time, increases bandwidth, but can increase overshoot and may not eliminate steady-state error.
*   **Proportional-Integral (PI) Controller:** $C(s) = K_p + \frac{K_i}{s}$. Eliminates steady-state error for step inputs but can slow down transient response.
*   **Proportional-Derivative (PD) Controller:** $C(s) = K_p + K_d s$. Improves transient response by adding damping, reduces overshoot and settling time, but does not affect steady-state error.
*   **Proportional-Integral-Derivative (PID) Controller:** $C(s) = K_p + \frac{K_i}{s} + K_d s$. Combines the benefits of P, I, and D controllers, offering flexibility in tuning.
    (Nise, Chapter 6 - PID Controllers)

### 6.3 Controller Design Methods

*   **Root Locus Design:** Adjust controller parameters to place the closed-loop poles in desired locations for specified transient response.
*   **Frequency Response Design (Bode/Nyquist):** Design controllers to meet stability margin requirements (gain margin, phase margin) and bandwidth specifications.
*   **Pole Placement (State-Space):** Design a state feedback controller $u = -Kx$ to place closed-loop poles arbitrarily. Requires a controllable system.
*   **PID Tuning Rules:** Ziegler-Nichols, Cohen-Coon, auto-tuning methods.

### 6.4 Simulation for Controller Design and Verification

*   **Cascade Control:** Connect the designed controller $C(s)$ in series with the identified system $G(s)$ to form the open-loop system $L(s) = C(s)G(s)$.
*   **Closed-Loop System:** Form the closed-loop transfer function $T(s) = \frac{L(s)}{1+L(s)}$ (for unity feedback).
*   **Simulate Closed-Loop Response:** Use `step(T)`, `impulse(T)`, `lsim(T, u, t)` to evaluate if the closed-loop system meets the performance specifications.

**Example (LO4): Designing a PI Controller for the DC Motor**

**System:** $G(s) = \frac{10}{s^2 + 2s + 10}$
**Requirement:** Reduce settling time and eliminate steady-state error for a step input.

**Design using MATLAB (Root Locus Approach):**

1.  **Initial Analysis:** The open-loop system $G(s)$ has poles at $-1 \pm j3$. For a step input, the closed-loop system will have some settling time and potentially a steady-state error if it's not a Type 1 system (which it isn't).

2.  **PI Controller:** $C(s) = K_p + \frac{K_i}{s} = \frac{K_p s + K_i}{s}$.
    The open-loop transfer function with PI controller is $L(s) = \frac{K_p s + K_i}{s} \cdot \frac{10}{s^2 + 2s + 10} = \frac{10 K_p s + 10 K_i}{s(s^2 + 2s + 10)}$.
    This adds a pole at the origin, making the system Type 1 and ensuring zero steady-state error for a step input.

3.  **Root Locus:** We can use the `rlocus` command to see how the closed-loop poles move as we vary $K_p$ and $K_i$. The goal is to select parameters that provide a good trade-off between transient response (e.g., damping ratio $\zeta$, natural frequency $\omega_n$) and stability margins.

4.  **Manual Tuning/Optimization:**
    Let's try to place the dominant closed-loop poles to achieve a certain damping ratio, say $\zeta = 0.7$. The desired closed-loop poles are $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2}$.
    If we aim for a settling time $T_s \approx \frac{4}{\zeta \omega_n}$, we can try to place poles at $-2 \pm j2$ (where $\zeta = 0.707$, $\omega_n \approx 2.8$).

    *   The characteristic equation is $1 + L(s) = 0$.
        $1 + \frac{10 K_p s + 10 K_i}{s(s^2 + 2s + 10)} = 0$
        $s(s^2 + 2s + 10) + 10 K_p s + 10 K_i = 0$
        $s^3 + 2s^2 + 10s + 10 K_p s + 10 K_i = 0$
        $s^3 + 2s^2 + (10 + 10 K_p)s + 10 K_i = 0$

    *   Let's try a different approach using MATLAB's `pid` and `feedback` functions.

    ```matlab
    % Identified System
    num = [10];
    den = [1, 2, 10];
    G_motor = tf(num, den);

    % --- PI Controller Design ---
    % Trial 1: Tune parameters manually or using a simple method
    Kp1 = 5; Ki1 = 5;
    C_pi1 = pid(Kp1, Ki1);
    L1 = C_pi1 * G_motor;
    T1 = feedback(L1, 1); % Closed-loop transfer function (unity feedback)

    figure;
    step(T1);
    title('Closed-Loop Step Response with PI Controller (Kp=5, Ki=5)');
    grid on;
    legend('PI Controlled');

    % Analyze T1 response: Get settling time, overshoot
    stepinfo_T1 = stepinfo(T1);
    disp('PI Controller (Kp=5, Ki=5):');
    disp(stepinfo_T1);

    % --- PID Controller Design (Example) ---
    % Let's try to improve transient response further with a PID
    Kp2 = 8; Ki2 = 10; Kd2 = 0.5;
    C_pid2 = pid(Kp2, Ki2, Kd2);
    L2 = C_pid2 * G_motor;
    T2 = feedback(L2, 1);

    figure;
    hold on;
    step(T1);
    step(T2);
    title('Comparison of Step Responses');
    grid on;
    legend('PI Controlled (Kp=5, Ki=5)', 'PID Controlled (Kp=8, Ki=10, Kd=0.5)');
    hold off;

    stepinfo_T2 = stepinfo(T2);
    disp('PID Controller (Kp=8, Ki=10, Kd=0.5):');
    disp(stepinfo_T2);
    ```

*   **Analysis of Results:** Compare the step responses of the controlled system with the original system and with different controllers. Evaluate if the settling time, overshoot, and steady-state error meet the desired requirements. The PID controller generally offers more flexibility to meet complex specifications.

---

## Important Points to Remember

*   System identification is an iterative process. You may need to repeat steps of data collection, model selection, and estimation.
*   The quality of the input signal is paramount for successful identification.
*   Always validate your identified model using data that was not used for estimation.
*   Simulation tools are indispensable for analyzing identified models and designing controllers.
*   The choice of model structure should be based on prior knowledge, data characteristics, and a balance between accuracy and simplicity.
*   Understand the trade-offs between different parameter estimation techniques.
*   Performance specifications should guide both experimentation and controller design.

---

## Practice Questions

**Question 1:**
You are given an experimental setup that behaves like a first-order system with a delay.
*   **a) Identify and conduct suitable experiments to determine the parameters to model a physical system.** Describe the input signal you would use, why you would choose it, and what data you would collect. (LO1)
*   **b) Describe how you would estimate the parameters of a first-order plus dead time (FOPDT) model** $G(s) = \frac{K e^{-Ls}}{Ts+1}$ from your collected data. (LO1)
*   **c) Once you have the identified FOPDT model parameters (K, T, L), how would you use MATLAB to simulate its response to a step input and analyze its transient behavior (e.g., settling time, overshoot)?** (LO3)

**Answer 1:**
*   **a) Experiment Design:**
    *   **Input Signal:** A **step input** is a suitable choice for a first-order system with delay. It is simple to implement and provides clear information about the system's gain and time constant. Alternatively, a **PRBS signal** could be used for richer frequency excitation and potentially more accurate parameter estimation, especially if the system has unmodeled dynamics or noise.
    *   **Data Collection:** Record the input signal (step voltage or digital signal) and the output signal (e.g., position, velocity, temperature) over time. The data should be sampled at a rate at least 5-10 times faster than the system's expected dominant time constant. The experiment duration must be long enough to capture the full transient response and reach steady-state.
*   **b) Parameter Estimation for FOPDT Model:**
    1.  **Delay (L):** Visually inspect the recorded data. The delay ($L$) is the time from the start of the input step until the output begins to change.
    2.  **DC Gain (K):** Once the output has settled to its steady-state value, the DC gain ($K$) can be estimated as the ratio of the steady-state output change to the input step magnitude: $K = \frac{Y_{ss} - Y_{initial}}{U_{step}}$.
    3.  **Time Constant (T):** After the delay has passed and the output starts responding, measure the time it takes for the output to reach approximately 63.2% of its total change from the output value at the end of the delay. This time is the time constant $T$.
    *   Alternatively, one could use system identification toolboxes in MATLAB/Simulink, which employ methods like least squares or prediction error methods to estimate parameters from the input-output data.
*   **c) Simulation and Analysis in MATLAB:**
    *   **Model Creation:**
        ```matlab
        K = % Identified DC Gain
        T = % Identified Time Constant
        L = % Identified Delay
        num = [K];
        den = [T, 1];
        sys_first_order = tf(num, den);
        sys_fopdt = c2d(sys_first_order, Ts, 'zoh') * exp(-L/Ts); % Discretize for delay
        % OR using delay object directly for continuous time
        sys_fopdt_cont = K * exp(-L*s) / (T*s + 1); % For symbolic or TF with delay
        ```
        *(Note: Directly creating a TF with delay in MATLAB often involves symbolic math or specific functions. A common practical approach is to use `pade` for approximating the delay or to use discrete-time models with delay. For continuous-time, `tf('s')` can be used.)*
        ```matlab
        s = tf('s');
        G_fopdt = K * exp(-L*s) / (T*s + 1);
        ```
    *   **Simulation:**
        ```matlab
        % Simulate step response
        figure;
        step(G_fopdt);
        title('Step Response of Identified FOPDT System');
        grid on;
        ```
    *   **Analysis:** The `step` command output will show the response. `stepinfo(G_fopdt)` can be used to programmatically extract metrics like:
        *   `RiseTime`: Time from 10% to 90% of final value.
        *   `SettlingTime`: Time to settle within 2% (or 5%) of final value.
        *   `Overshoot`: Percentage overshoot.
        *   `Peak`: Peak value of the response.
        *   `PeakTime`: Time at which the peak occurs.

---

**Question 2:**
Explain the purpose of model validation in system identification. What are at least two common methods for validating an identified model? (LO3)

**Answer 2:**
**Purpose of Model Validation:**
Model validation is a crucial step in system identification to ensure that the identified mathematical model accurately represents the real system's behavior. It answers the question: "How well does the identified model predict the system's response to inputs it hasn't seen before?" An unvalidated model might appear to fit the training data well but could fail significantly when used for analysis, simulation, or controller design, potentially leading to poor or unstable system performance.

**Common Methods for Model Validation:**

1.  **Prediction Accuracy on New Data (Simulation-Based Validation):**
    *   **Description:** Apply a new input signal (different from the one used for identification) to both the actual system and the identified model. Compare the model's predicted output with the actual system's output.
    *   **Metrics:** Calculate metrics like Root Mean Squared Error (RMSE) or Mean Squared Error (MSE) between the predicted and actual outputs. A low RMSE indicates good prediction accuracy.
    *   **Procedure:**
        *   Collect a separate "validation dataset" by applying a known input to the system.
        *   Use the identified model to simulate the output for this validation input.
        *   Calculate the error between the simulated output and the actual output.
        *   Ensure the error signal is as close to zero-mean white noise as possible, indicating the model has captured the deterministic part of the system's dynamics.

2.  **Correlation Analysis of Residuals:**
    *   **Description:** The residuals are the differences between the actual system output and the model's predicted output. For a good model, these residuals should ideally be uncorrelated with the system's input and past residuals. In other words, the residuals should resemble white noise.
    *   **Metrics:** Compute the autocorrelation function of the residuals and the cross-correlation function between the residuals and the input signal.
    *   **Procedure:**
        *   Calculate the residuals: $e[k] = y_{actual}[k] - y_{model}[k]$.
        *   Calculate the autocorrelation of $e[k]$: $R_e(\tau)$. For a good model, $R_e(\tau)$ should be close to zero for $\tau \neq 0$, and close to the variance of $e[k]$ at $\tau = 0$.
        *   Calculate the cross-correlation between $e[k]$ and the input $u[k]$: $R_{eu}(\tau)$. This should also be close to zero for all $\tau$. If significant correlations exist, it means the model has not fully captured the input's influence on the output, and the model structure or parameters may need refinement.

---

**Question 3:**
Consider a system identified by the transfer function $G(s) = \frac{5}{2s+1}$. You are asked to design a controller to meet the following performance specifications for a closed-loop system (unity feedback):
*   **Settling Time ($T_s$) < 2 seconds**
*   **Overshoot (< 10%)**
*   **Zero steady-state error for a step input.**

*   **a) Propose a controller structure (e.g., P, PI, PD, PID) that would be suitable for this system and the given specifications.** Justify your choice. (LO4)
*   **b) Explain how you would use MATLAB to simulate the step response of the closed-loop system with your proposed controller and verify if the specifications are met.** (LO3, LO4)

**Answer 3:**
*   **a) Suitable Controller Structure:**
    The system $G(s) = \frac{5}{2s+1}$ is a first-order system. Its step response will not have overshoot and will have a settling time of approximately $4 \times T = 4 \times 2 = 8$ seconds.
    *   **Zero steady-state error for a step input:** The current system is not Type 1 (it has no pole at $s=0$). Therefore, a controller with an integrator is required to achieve zero steady-state error.
    *   **Settling Time (< 2 seconds) and Overshoot (< 10%):** A pure P controller would reduce the settling time but might not eliminate steady-state error if it were a higher-order system. A PD controller could improve transient response (reduce settling time and potential overshoot if it existed) but wouldn't help with steady-state error. A PI controller will eliminate steady-state error but might slow down the transient response. A **PID controller** or a **PI controller** would be most suitable.
    *   **Justification:** A **PI controller** ($C(s) = K_p + \frac{K_i}{s}$) is sufficient here because:
        1.  The integrator ($\frac{K_i}{s}$) ensures zero steady-state error for a step input.
        2.  The proportional gain ($K_p$) can be tuned to improve the transient response (reduce settling time). While a PD or PID would offer more flexibility for overshoot, for a first-order system, a PI controller is often adequate to achieve performance improvements. If we strictly need to reduce the settling time from 8s to < 2s, tuning $K_p$ is the primary means.

*   **b) MATLAB Simulation and Verification:**

    1.  **Define the System and PI Controller:**
        ```matlab
        s = tf('s');
        G_sys = 5 / (2*s + 1);

        % Design a PI controller (initial guess for tuning)
        Kp = 0.5; % Proportional gain
        Ki = 0.2; % Integral gain
        C_pi = pid(Kp, Ki); % Creates a PI controller object
        ```

    2.  **Form the Closed-Loop System:**
        ```matlab
        L_open_loop = C_pi * G_sys; % Open-loop transfer function
        T_closed_loop = feedback(L_open_loop, 1); % Closed-loop transfer function (unity feedback)
        ```

    3.  **Simulate the Step Response:**
        ```matlab
        figure;
        step(T_closed_loop);
        title('Step Response of Closed-Loop System with PI Controller');
        grid on;
        ```

    4.  **Analyze Performance Specifications:**
        ```matlab
        stepinfo_result = stepinfo(T_closed_loop);

        % Extract and display results
        settlingTime = stepinfo_result.SettlingTime;
        overshoot = stepinfo_result.Overshoot;
        steadyStateError = 1 - stepinfo_result.SettlingMin; % Approximation for step input

        fprintf('Settling Time: %.4f seconds\n', settlingTime);
        fprintf('Overshoot: %.2f%%\n', overshoot);
        % For a PI controller on a first-order system, steady-state error for step is zero.
        % Check the actual steady-state value from stepinfo:
        fprintf('Steady-State Value: %.4f\n', stepinfo_result.LastEyeLevel);
        ```

    5.  **Tune Controller Parameters:**
        *   If the `settlingTime` is not less than 2 seconds or `overshoot` is too high (though unlikely for a PI on a 1st-order system), adjust `Kp` and `Ki`.
        *   Increasing `Kp` generally reduces settling time but might increase overshoot (if it were a higher order system).
        *   Increasing `Ki` generally improves steady-state accuracy and can reduce overshoot but might slow down the transient response.
        *   **Iteratively:** Modify `Kp` and `Ki`, re-simulate (`step(T_closed_loop)`), and check `stepinfo_result` until the specifications are met. For instance, try increasing Kp to reduce settling time. If the system becomes unstable or overshoot increases beyond limits, reduce Kp or adjust Ki.

---

This comprehensive set of notes covers the core aspects of system identification and modeling relevant to a Control System Lab, aligning with the specified learning and course outcomes and referencing standard control engineering textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
