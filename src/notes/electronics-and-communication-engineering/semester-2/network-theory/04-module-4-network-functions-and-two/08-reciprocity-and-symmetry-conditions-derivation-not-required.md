---
title: "Reciprocity and symmetry conditions (derivation not required)"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da523"
status: "completed"
scrapedAt: "2026-05-23T17:41:25.702Z"
---
# NETWORK THEORY: MODULE 4 - NETWORK FUNCTIONS AND TWO-PORT NETWORKS

## Topic: Reciprocity and Symmetry Conditions

Welcome, everyone, to Module 4! Today, we're diving into some really insightful properties of electrical networks, specifically focusing on **Reciprocity** and **Symmetry**. These concepts are incredibly useful because they tell us a lot about how a network will behave without having to do incredibly complex calculations every single time. Think of them as shortcuts, or rather, as deep insights into the fundamental nature of the circuits we're working with.

We've been talking about network functions and parameters for single-port and two-port networks in this module. Understanding reciprocity and symmetry helps us classify and predict the behavior of these networks, which directly relates to our learning outcome of identifying network functions and parameters (CO4, K2). It also builds on our ability to analyze networks using various methods (CO1, K4) and apply theorems (CO2, K3).

### What is Reciprocity in a Network?

Let's start with **Reciprocity**. Imagine you have a network, and you apply a voltage source at one point and measure a current at another. Reciprocity tells us something very special about the relationship between where you apply the input and where you measure the output.

**The Core Idea of Reciprocity:** A network is reciprocal if the ratio of the output current to the input voltage remains the same when you interchange the source and the observation point.

Let's make this more concrete. Consider a two-port network. We typically use voltage ($V$) and current ($I$) at the input and output ports. Let's say we connect a voltage source $V_1$ at port 1 and measure the current $I_2$ flowing out of port 2. The ratio $I_2 / V_1$ (with port 2 terminated appropriately, usually with an open circuit for this type of measurement) is a specific transfer characteristic.

Now, if the network is **reciprocal**, and we were to move that same voltage source $V_1$ to port 2 and measure the current $I_1$ flowing out of port 1 (with port 1 open-circuited), we would find that the ratio $I_1 / V_2$ is exactly the same as the original $I_2 / V_1$.

**Analogy Time:** Think of a conversation. If you ask a question ($V_1$) and get an answer ($I_2$), in a reciprocal "conversation," if someone else asks a similar question ($V_2$) at the other end, you'd give the same kind of answer ($I_1$) back. It's about the symmetry of influence.

**Why is this important?** For many practical circuits, especially those built with passive components like resistors, inductors, and capacitors, reciprocity holds true. This means if a signal injected at point A causes a response at point B, then injecting the same signal at point B will cause the exact same response at point A. This is a powerful simplification in analysis. For instance, Van Valkenburg, in his classic "Network Analysis," emphasizes that linearity and time-invariance are key conditions for reciprocity, alongside the absence of active devices like transistors or dependent sources that introduce inherent directionality.

**Reciprocity Condition in Terms of Network Parameters:**

Different two-port parameters have specific conditions for reciprocity. This is where it gets really useful for our coursework.

*   **Z-parameters (Impedance Parameters):** For a network described by $V_1 = z_{11}I_1 + z_{12}I_2$ and $V_2 = z_{21}I_1 + z_{22}I_2$, the network is reciprocal if and only if $z_{12} = z_{21}$. This is the most common way to check for reciprocity. If the "forward" transfer impedance ($z_{21}$) equals the "reverse" transfer impedance ($z_{12}$), the network is reciprocal.

*   **Y-parameters (Admittance Parameters):** Similarly, for $I_1 = y_{11}V_1 + y_{12}V_2$ and $I_2 = y_{21}V_1 + y_{22}V_2$, reciprocity holds if $y_{12} = y_{21}$. This is the forward transfer admittance matching the reverse transfer admittance.

*   **H-parameters (Hybrid Parameters):** For $V_1 = h_{11}I_1 + h_{12}V_2$ and $I_2 = h_{21}I_1 + h_{22}V_2$, reciprocity occurs when $h_{12} = -h_{21}$. Notice the negative sign here, which is a crucial detail!

*   **G-parameters (Inverse Hybrid Parameters):** For $I_1 = g_{11}V_1 + g_{12}I_2$ and $V_2 = g_{21}V_1 + g_{22}I_2$, reciprocity is satisfied when $g_{12} = -g_{21}$.

**When does Reciprocity NOT Hold?**
Reciprocity fails in networks containing **active devices** (like transistors, operational amplifiers) or **non-linear components**. Also, if a network contains components with **directional properties**, like a **diode** or a **gyrator**, reciprocity will be violated. Think of a diode – it lets current flow in one direction but blocks it in the other. If you swap the "source" and "observer" points in a circuit with a diode, you won't get the same result. This is a key insight from textbooks like Kuo's "Network Analysis and Synthesis."

### What is Symmetry in a Network?

Now let's move on to **Symmetry**. While reciprocity deals with interchanging input and output ports, symmetry is about the internal structure of the network itself. A symmetrical network looks the same whether you view it from port 1 or port 2.

**The Core Idea of Symmetry:** A network is symmetrical if its characteristics are the same when viewed from either port.

Again, let's use our two-port network example. If we connect a voltage source at port 1 and measure current at port 1 (which means port 2 is open-circuited, and we're looking at the input impedance, $z_{11}$), and then we swap and connect the source at port 2 and measure current at port 2 (with port 1 open-circuited, looking at $z_{22}$), symmetry implies these input impedances should be the same.

**Analogy Time:** Imagine a perfectly balanced scale. No matter which side you put a weight on, the scale will respond in the same way. Or think about a perfectly symmetrical building; if you approach it from the front or the back, the facade looks identical.

**Symmetry Condition in Terms of Network Parameters:**

Similar to reciprocity, symmetry imposes conditions on the network parameters:

*   **Z-parameters:** A network is symmetrical if $z_{11} = z_{22}$. The input impedance looking into port 1 is the same as the input impedance looking into port 2.

*   **Y-parameters:** For symmetry, $y_{11} = y_{22}$. The input admittance looking into port 1 is the same as the input admittance looking into port 2.

*   **H-parameters:** Symmetry requires $h_{11} = h_{22}$.

*   **G-parameters:** Symmetry holds if $g_{11} = g_{22}$.

**What about the relationship between Reciprocity and Symmetry?**

This is a great point to ponder! Are they the same? Not at all!

*   A network can be **reciprocal but not symmetrical**. Imagine a simple series RL circuit connected to port 1 and a resistor connected to port 2, and they are somehow coupled in a way that $z_{12} = z_{21}$ but $z_{11} \neq z_{22}$.
*   A network can be **symmetrical but not reciprocal**. This is less common with passive circuits but can happen with specific configurations.
*   A network can be **both reciprocal and symmetrical**. This is often the case for many simple passive networks like a simple T-network or Pi-network made of only resistors, inductors, or capacitors.
*   A network can be **neither reciprocal nor symmetrical**. This is true for networks with active components or directional elements.

**When does Symmetry NOT Hold?**

Symmetry is often broken when different components are connected to the input and output ports. For example, if you have a resistor $R_1$ in series with the input and a different resistor $R_2$ in series with the output, and some transfer impedance in between, the input impedances $z_{11}$ and $z_{22}$ will likely be different.

**Exam Focus:** This is crucial for exams! You'll be given network parameters and asked to determine if the network is reciprocal or symmetrical. You just need to check the conditions:
*   Reciprocal: $z_{12}=z_{21}$ OR $y_{12}=y_{21}$ OR $h_{12}=-h_{21}$ OR $g_{12}=-g_{21}$.
*   Symmetrical: $z_{11}=z_{22}$ OR $y_{11}=y_{22}$ OR $h_{11}=h_{22}$ OR $g_{11}=g_{22}$.

**Relatable Example:** Let's think about Wi-Fi. Most Wi-Fi routers are designed to be somewhat symmetrical in their antenna placement. If you connect to the Wi-Fi from your laptop in one room, you get a certain signal strength. If you could somehow place your laptop where the router is and the router where your laptop is, you'd expect a similar signal experience, assuming the environment is the same. That's a loose analogy for symmetry. Reciprocity is like if you could speak into your phone and get a response from the other end, and then they speak into their phone and you get the exact same quality of response back. In wired networks, especially with passive components, this is often true.

**Connecting to Course Outcomes:**

*   **CO4 (Identify network functions and parameters):** Understanding reciprocity and symmetry is directly tied to knowing the properties of these parameters. If we know $z_{11}, z_{12}, z_{21}, z_{22}$, we can immediately tell if the network is reciprocal and symmetrical.
*   **CO2 (Apply network theorems):** Reciprocity is a powerful theorem in itself. Knowing a network is reciprocal allows us to simplify many analysis problems. For example, in mesh or nodal analysis, if we know the network is reciprocal, we can often predict relationships between currents and voltages that might not be immediately obvious.
*   **CO1 (Analyze electrical networks):** The conditions for reciprocity and symmetry are derived from the fundamental equations that govern network analysis. They provide a higher-level understanding of the network's behavior, which complements detailed analytical methods.

**Important Takeaway:** Reciprocity and symmetry are inherent properties of a network's structure and the components used. They are not about the source you apply, but about the network itself. Passive networks (R, L, C only) are generally reciprocal. Symmetry depends on whether the network looks the same from both ports, often related to how components are arranged.

Let's summarize the conditions again for quick recall:

**Reciprocity Conditions:**
*   Z-parameters: $z_{12} = z_{21}$
*   Y-parameters: $y_{12} = y_{21}$
*   H-parameters: $h_{12} = -h_{21}$
*   G-parameters: $g_{12} = -g_{21}$

**Symmetry Conditions:**
*   Z-parameters: $z_{11} = z_{22}$
*   Y-parameters: $y_{11} = y_{22}$
*   H-parameters: $h_{11} = h_{22}$
*   G-parameters: $g_{11} = g_{22}$

Remember these conditions! They are frequently tested and are the keys to unlocking deeper understanding of two-port networks. Sudhakar and Shyammohan, in their book, provide excellent examples illustrating these conditions, often with simple T and Pi networks, which are fundamental building blocks.

---

### Sample Questions with Answers

**Q1. A two-port network is described by its Z-parameters: $z_{11} = 10\Omega$, $z_{12} = 5\Omega$, $z_{21} = 2\Omega$, $z_{22} = 8\Omega$. Is this network reciprocal? Is it symmetrical?**

**Answer:**
To check for reciprocity using Z-parameters, we need to see if $z_{12} = z_{21}$.
Here, $z_{12} = 5\Omega$ and $z_{21} = 2\Omega$.
Since $5\Omega \neq 2\Omega$, the network is **not reciprocal**.

To check for symmetry using Z-parameters, we need to see if $z_{11} = z_{22}$.
Here, $z_{11} = 10\Omega$ and $z_{22} = 8\Omega$.
Since $10\Omega \neq 8\Omega$, the network is **not symmetrical**.

**Q2. Which of the following types of components would typically violate the reciprocity condition in a network?**
(a) Resistor
(b) Inductor
(c) Diode
(d) Capacitor

**Answer:**
(c) Diode

**Reasoning:**
Resistors, inductors, and capacitors are passive linear components. Networks made purely of these are generally reciprocal. Diodes, however, are semiconductor devices that allow current to flow predominantly in one direction. This directional property introduces asymmetry in the network's response, violating the reciprocity condition. If you apply a voltage, you'll get a current, but swapping the input and output ports will likely yield a very different (or no) result.

**Q3. For a two-port network characterized by H-parameters, what is the condition for reciprocity?**

**Answer:**
The condition for reciprocity for a network described by H-parameters ($V_1 = h_{11}I_1 + h_{12}V_2$ and $I_2 = h_{21}I_1 + h_{22}V_2$) is:
$h_{12} = -h_{21}$

**Reasoning:**
This specific condition arises from the definitions of the H-parameters and the general principle of reciprocity. It highlights that the forward "voltage amplification" or "reverse voltage feedback" term ($h_{12}$) must be the negative of the reverse "current amplification" ($h_{21}$) for the network to be reciprocal.

**Q4. Consider a simple T-network consisting of three resistors: $R_a$ in the series arm from port 1, $R_b$ in the series arm from port 2, and $R_c$ in the common shunt arm between the ports. If $R_a = R_b$, would this network be reciprocal? Would it be symmetrical?**

**Answer:**
Let's analyze the Z-parameters for a T-network:
$z_{11} = R_a + R_c$
$z_{12} = R_c$
$z_{21} = R_c$
$z_{22} = R_b + R_c$

**Reciprocity:** The condition is $z_{12} = z_{21}$.
In this case, $z_{12} = R_c$ and $z_{21} = R_c$.
So, $z_{12} = z_{21}$ is always true for any values of $R_a, R_b, R_c$.
Therefore, the network is **reciprocal**, regardless of whether $R_a = R_b$.

**Symmetry:** The condition is $z_{11} = z_{22}$.
This means $R_a + R_c = R_b + R_c$.
This simplifies to $R_a = R_b$.
The problem states that $R_a = R_b$.
Therefore, the network is **symmetrical** under the given condition ($R_a = R_b$).

**Conclusion:** Yes, if $R_a = R_b$, the network is both reciprocal and symmetrical. If $R_a \neq R_b$, it's reciprocal but not symmetrical.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
