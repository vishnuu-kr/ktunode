---
title: "Control configurations."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c7"
status: "completed"
scrapedAt: "2026-05-23T16:35:58.672Z"
---
# Discrete Time Control Systems: Module 1 - Analysis of Sampled Data Systems

## Topic: Control Configurations

---

### **Introduction**

Sampled-data control systems are systems where the input or output signals, or both, are sampled at discrete instants of time. This is typically done to interface analog physical systems with digital controllers. Understanding the various configurations of these systems is fundamental to their analysis and design. This module focuses on the basic building blocks and common arrangements of sampled-data control systems.

---

### **1.1 Basic Components of a Sampled-Data Control System**

Before delving into configurations, it's crucial to understand the primary components:

*   **Digital Controller:** This is the brain of the system, typically a microprocessor or a dedicated digital signal processor (DSP). It receives sampled data, performs calculations based on a digital control algorithm, and generates a digital control signal. (Refer to Ogata, Chapter 1)
*   **Digital-to-Analog Converter (DAC):** Converts the discrete digital control signal from the controller into a continuous analog signal. This is necessary to drive analog actuators. (Refer to Phillips and Nagle, Chapter 2)
*   **Analog Controller (Optional):** In some configurations, an analog controller might still be present between the DAC and the actuator.
*   **Actuator:** The physical device that converts the control signal into an action to influence the plant. Examples include motors, valves, heaters, etc.
*   **Plant:** The physical process or system being controlled (e.g., a motor, a chemical reactor, a robot arm). This is typically an analog system.
*   **Sensor:** Measures a physical variable of the plant (e.g., position, temperature, speed).
*   **Sample-and-Hold (S/H) Circuit:** Captures the sensor output at specific sampling instants and holds it constant until the next sampling instant. This provides a continuous-time staircase approximation of the sampled signal. (Refer to Ogata, Chapter 1; Kuo, Chapter 2)

---

### **1.2 Common Control Configurations**

Sampled-data control systems can be configured in various ways depending on the application, the nature of the plant, and the desired performance. The most common configurations involve the placement of the sampler and the digital controller within the feedback loop.

#### **1.2.1 Closed-Loop Sampled-Data System**

This is the most prevalent configuration, where the digital controller operates on sampled feedback signals to generate control commands for the plant.

**Block Diagram:**

```
      +---------+      +-----+      +-------+      +------+      +-------+
      | Digital |----->| DAC |----->| Actuator |----->| Plant|----->| Sensor|
      |Controller|      +-----+      +-------+      +------+      +-------+
      +---------+                                                      ^
           ^                                                           |
           |                                                           |
      +------------+      +-------------+      +--------------+      |
      |   Sampler  |<-----| Analog Signal |<-----| Actual Output|------+
      +------------+      +-------------+      +--------------+
             |
             v
      +-----------------+
      | Sample & Hold   |
      +-----------------+
```

**Explanation:**

1.  The **Plant**'s actual output is measured by the **Sensor**.
2.  The **Sensor** output (analog signal) is fed to a **Sampler**.
3.  The **Sampler** captures the sensor's output at discrete time instants ($t = nT$, where $T$ is the sampling period).
4.  A **Sample-and-Hold (S/H)** circuit typically follows the sampler. It maintains the sampled value constant until the next sampling instant. This converts the impulse train into a staircase waveform.
5.  The held signal is then processed by the **Digital Controller**.
6.  The **Digital Controller** generates a digital control signal based on the sampled feedback and its internal algorithm.
7.  The **Digital-to-Analog Converter (DAC)** converts this digital signal into a continuous analog control signal.
8.  This analog signal drives the **Actuator**, which in turn affects the **Plant**.
9.  The output of the **Plant** is the controlled variable.

**Key Considerations:**

*   **Sampling:** The act of converting a continuous-time signal into a sequence of discrete values.
*   **Quantization:** The process of mapping sampled values to a finite set of discrete levels (often occurs within the digital controller or ADC, though not explicitly shown in simplified block diagrams).
*   **Zero-Order Hold (ZOH):** The most common type of S/H circuit, which holds the last sampled value constant over the sampling interval. The transfer function of a ZOH is $G_{ZOH}(s) = \frac{1 - e^{-sT}}{s}$. (Refer to Ogata, Chapter 1; Kuo, Chapter 2)
*   **Control Objective:** To maintain the system output at a desired setpoint by appropriately processing the sampled feedback.

**Learning Outcome Alignment:**

*   **CO1:** This configuration directly involves the pulse transfer function approach, as the digital controller and the ZOH can be represented in the z-domain.
*   **CO3:** The state-space representation of discrete-time systems is essential for analyzing such closed-loop configurations.

#### **1.2.2 Open-Loop Sampled-Data System**

In an open-loop system, the control action is not influenced by the system's output. This is less common in typical feedback control but can be found in specific applications or as a preliminary step in control system development.

**Block Diagram:**

```
      +---------+      +-----+      +-------+      +------+
      | Digital |----->| DAC |----->| Actuator |----->| Plant|----->| Output |
      |Controller|      +-----+      +-------+      +------+      +-------+
      +---------+
```

**Explanation:**

1.  The **Digital Controller** generates a control signal, which is converted to an analog signal by the **DAC**.
2.  This analog signal drives the **Actuator**.
3.  The **Actuator** acts on the **Plant**.
4.  The **Output** of the plant is observed, but it does not influence the controller's action.

**Key Considerations:**

*   **No Feedback:** The system relies on an accurate model of the plant and actuator to achieve the desired output.
*   **Susceptibility to Disturbances:** Open-loop systems are highly sensitive to external disturbances and variations in plant parameters.

**Learning Outcome Alignment:**

*   This configuration primarily involves understanding the transfer function of the combined open-loop components.

#### **1.2.3 Digital Control of an Analog Controller**

In this configuration, a digital controller is used to adjust the parameters or setpoints of an existing analog controller.

**Block Diagram:**

```
      +---------+      +-----+      +-----------------+      +-------+      +------+
      | Digital |----->| DAC |----->| Analog Controller|----->| Actuator |----->| Plant|----->| Output |
      |Controller|      +-----+      | (Parameter/SP)  |      +-------+      +------+
      +---------+                   +-----------------+
```

**Explanation:**

1.  The **Digital Controller** generates a signal to modify a parameter (e.g., gain, filter cutoff) or the setpoint of an **Analog Controller**.
2.  This signal is converted to analog by the **DAC**.
3.  The **Analog Controller** uses this information to generate its output signal, which then drives the **Actuator** and **Plant**.

**Key Considerations:**

*   **Hybrid Control:** Combines digital intelligence with analog control execution.
*   **Flexibility:** Allows for adaptive or reconfigurable control strategies.

**Learning Outcome Alignment:**

*   This configuration can be analyzed using both z-domain and s-domain techniques, depending on which part is being emphasized.

#### **1.2.4 Analog Control of a Digital System**

This is less common but possible if an analog controller is used to generate commands for a digital system (e.g., adjusting parameters of a digital filter or setting points for a digital controller). However, in the context of "sampled data systems," the focus is usually on digital controllers interacting with analog plants.

#### **1.2.5 Fully Digital System**

In some advanced scenarios, both the plant and the controller might be digital. However, the "sampled data system" concept typically implies an interface between continuous-time and discrete-time domains.

---

### **1.3 The Role of Sampling and Hold**

The sampler and hold circuits are critical in bridging the continuous-time world of physical systems and the discrete-time world of digital controllers.

*   **Sampling:** The process of converting a continuous-time signal $x(t)$ into a discrete sequence $x(nT)$ at sampling instants $t = nT$. Mathematically, this can be represented as an impulse train: $x_s(t) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t - nT)$.
*   **Hold Operation (e.g., Zero-Order Hold - ZOH):** The sampler output is a series of impulses, which cannot directly drive an analog actuator. The hold circuit reconstructs a continuous-time signal from these impulses. A ZOH holds the value of the last sampled point until the next sample. The output of a ZOH can be expressed as:
    $x_{ZOH}(t) = x(nT)$ for $nT \le t < (n+1)T$.

**Transfer Function of ZOH:**

The transfer function of a ZOH is given by:
$G_{ZOH}(s) = \frac{1 - e^{-sT}}{s}$

This function is essential for converting the discrete-time controller into an equivalent continuous-time representation for analysis or for determining the overall sampled-data system's behavior in the s-domain. (Refer to Ogata, Chapter 1; Kuo, Chapter 2)

---

### **1.4 Modeling Sampled-Data Systems in the z-domain**

The analysis of sampled-data systems is greatly simplified by transforming them into the z-domain. The key step is to find the **pulse transfer function** of the system.

For a typical closed-loop sampled-data system, the overall system can be represented in the z-domain by considering the pulse transfer function of the cascade combination of the ZOH and the plant.

**General Structure:**

```
      +-----+      +-------------+      +------+
      | ZOH |----->| Plant G(s)  |----->|      |
      +-----+      +-------------+      |      |-----> Y(z)
                                          |      |
      +---------+      +-----+            |      |
      | D(z)    |----->| DAC |------------+      |
      +---------+      +-----+                   |
                                                 |
          +---------------------------------------+
          ^
          |
        R(z)
```

Here, $D(z)$ is the pulse transfer function of the digital controller, and $G(z)$ is the pulse transfer function of the system consisting of the ZOH and the plant $G(s)$.

The combined pulse transfer function of the ZOH and plant is:
$G_{ZOH \cdot G}(z) = Z\{G_{ZOH}(s)G(s)\}$

This $G_{ZOH \cdot G}(z)$ represents the equivalent discrete-time transfer function of the analog part of the system.

**Learning Outcome Alignment:**

*   **CO1:** This section directly addresses the modeling and analysis of discrete-time systems using the pulse transfer function approach.

---

### **1.5 State-Space Representation of Sampled-Data Systems**

For more complex systems or when dealing with state feedback control, the state-space approach is used. A continuous-time linear time-invariant (LTI) system described by:

$\dot{x}(t) = Ax(t) + Bu(t)$
$y(t) = Cx(t) + Du(t)$

Can be discretized using zero-order hold on the input $u(t)$. Assuming $u(t) = u(nT)$ for $nT \le t < (n+1)T$, the discrete-time state-space equations are:

$x[(n+1)T] = \Phi x(nT) + \Gamma u(nT)$
$y(nT) = C_{d} x(nT) + D_{d} u(nT)$

Where:
$\Phi = e^{AT}$
$\Gamma = \int_{0}^{T} e^{A\tau} B d\tau$

$C_d$ and $D_d$ are typically $C$ and $D$ sampled at $nT$ if the output is taken at sampling instants. For a typical closed-loop system, the digital controller might be represented by its own state-space model:

$x_c[(n+1)T] = A_c x_c(nT) + B_c e(nT)$
$u(nT) = C_c x_c(nT) + D_c e(nT)$

Where $e(nT) = r(nT) - y(nT)$ is the error signal.

The combined system can then be represented in a larger state-space form. (Refer to Gopal, Chapter 3; Franklin, Powell, Workman, Chapter 4)

**Learning Outcome Alignment:**

*   **CO3:** This section is directly aligned with modeling and analyzing discrete-time systems using the state-space approach.
*   **CO4:** Understanding state-space representations is foundational for designing state feedback controllers and observers.

---

### **1.6 Control Configurations for Different Scenarios**

The choice of control configuration depends on the nature of the plant and the control objectives.

*   **Continuous-Time Plant with Digital Controller:** The most common scenario. The digital controller samples the output of the continuous-time plant (via sensor) and generates a control signal that is converted to analog to act on the plant. (As described in 1.2.1)
*   **Discrete-Time Plant with Digital Controller:** If the plant itself is inherently digital (e.g., a digital filter, a computer simulation), then a digital controller can directly interact with it without the need for DACs and DACs in the feedback path, but samplers might still be present in the forward path if the input is sampled.
*   **Digital Control of Analog Parameters:** As in 1.2.3, where a digital system influences an analog controller.
*   **Cascaded Systems:** Systems where a digital controller might be placed in series with an analog controller or another analog subsystem.

---

### **Summary of Key Concepts**

*   **Sampled-Data System:** A system with both continuous-time and discrete-time components.
*   **Digital Controller:** The core component operating in discrete time.
*   **Sampler:** Converts a continuous-time signal to a discrete sequence.
*   **Sample-and-Hold (S/H):** Reconstructs a continuous-time signal from samples, typically a staircase waveform.
*   **Zero-Order Hold (ZOH):** A common type of S/H with transfer function $\frac{1 - e^{-sT}}{s}$.
*   **Pulse Transfer Function:** The z-domain representation of a sampled-data system or its components.
*   **State-Space Representation:** An alternative modeling technique crucial for advanced control design.
*   **Closed-Loop vs. Open-Loop:** Whether the system's output is used to influence the control action.

---

### **Important Points to Remember**

*   The **sampling period (T)** is a critical parameter that affects system stability and performance.
*   The **ZOH** introduces a delay and frequency distortion, which must be accounted for in the analysis.
*   The transformation from the s-domain to the z-domain is essential for analyzing the behavior of sampled-data systems.
*   **Nyquist-Shannon sampling theorem** dictates the minimum sampling rate required to avoid aliasing. (Though not explicitly a "configuration" point, it's fundamental to sampling).
*   The choice of configuration dictates the complexity of analysis and the types of control strategies that can be implemented.

---

### **Practice Questions and Exercises**

**Question 1:**
Draw the block diagram of a typical closed-loop sampled-data control system and identify each component. Explain the function of the Sampler and Sample-and-Hold circuit.

**Answer:**
(See Section 1.2.1 for the block diagram and explanation). The Sampler converts a continuous-time signal into a sequence of discrete values at specific time instants. The Sample-and-Hold circuit holds the last sampled value constant until the next sample arrives, effectively creating a staircase approximation of the signal.

**Question 2:**
What is the transfer function of a Zero-Order Hold (ZOH)? Why is it important in the analysis of sampled-data systems?

**Answer:**
The transfer function of a ZOH is $G_{ZOH}(s) = \frac{1 - e^{-sT}}{s}$. It's important because it represents the hold operation that bridges the discrete-time controller output to the continuous-time plant input, and it introduces characteristics (like a delay and frequency response modifications) that must be included in the system model for accurate analysis and design.

**Question 3:**
Consider a continuous-time plant with transfer function $G(s) = \frac{1}{s+a}$. If this plant is controlled by a digital controller $D(z)$ via a Zero-Order Hold, what is the pulse transfer function of the ZOH and plant cascade, $G_{ZOH \cdot G}(z)$? (You will need to know how to perform the z-transform of $G_{ZOH}(s)G(s)$ for this).

**Hint:** $Z\{\frac{1-e^{-sT}}{s} \frac{1}{s+a}\} = (1-z^{-1})Z\{\frac{1}{s(s+a)}\}$. Using partial fraction expansion for $\frac{1}{s(s+a)} = \frac{1}{a}(\frac{1}{s} - \frac{1}{s+a})$, and recalling $Z\{\frac{1}{s}\} = \frac{z}{z-1}$ and $Z\{\frac{1}{s+a}\} = \frac{z}{z-e^{-aT}}$, you can derive the pulse transfer function.

**Answer:**
$G_{ZOH \cdot G}(z) = Z\{\frac{1-e^{-sT}}{s} \frac{1}{s+a}\} = (1-z^{-1}) Z\{\frac{1}{a}(\frac{1}{s} - \frac{1}{s+a})\}$
$G_{ZOH \cdot G}(z) = \frac{1}{a} (1-z^{-1}) (\frac{z}{z-1} - \frac{z}{z-e^{-aT}})$
$G_{ZOH \cdot G}(z) = \frac{1}{a} (\frac{z-1}{z}) z (\frac{1}{z-1} - \frac{1}{z-e^{-aT}})$
$G_{ZOH \cdot G}(z) = \frac{1}{a} (\frac{z-1}{z}) z \frac{z-e^{-aT} - (z-1)}{(z-1)(z-e^{-aT})}$
$G_{ZOH \cdot G}(z) = \frac{1}{a} (\frac{z-1}{z}) z \frac{1-e^{-aT}}{(z-1)(z-e^{-aT})}$
$G_{ZOH \cdot G}(z) = \frac{1-e^{-aT}}{a(z-e^{-aT})}$

**Question 4:**
Describe a scenario where a state-space representation of a sampled-data system would be more beneficial than a pulse transfer function approach.

**Answer:**
A state-space representation is often more beneficial when designing controllers that involve state feedback, especially for multi-input, multi-output (MIMO) systems. It's also essential for designing observers, analyzing controllability and observability, and understanding the internal dynamics of the system, which might not be fully captured by the input-output transfer function. For instance, if you need to implement a digital controller based on full state feedback of the plant's internal states, the state-space model is indispensable. (Refer to Gopal, Chapter 3).

---

This concludes Module 1, Topic: Control Configurations. The subsequent modules will build upon these foundational concepts to delve into analysis techniques and controller design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
