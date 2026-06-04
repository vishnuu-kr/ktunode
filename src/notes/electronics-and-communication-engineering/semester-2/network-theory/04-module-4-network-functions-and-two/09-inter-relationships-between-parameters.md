---
title: "Inter-relationships between parameters"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da524"
status: "completed"
scrapedAt: "2026-05-23T17:41:26.497Z"
---
### **Network Theory: Module 4 - Network Functions and Two-Port Networks**

**Topic: Inter-relationships between Parameters**

Hello everyone! Welcome back to our journey into Network Theory. In this session, we're diving deep into Module 4, focusing on a very crucial aspect: **Network Functions and Two-Port Networks**. Specifically, today we’ll unravel the fascinating **inter-relationships between the parameters** that describe these two-port networks. Understanding these relationships is like having a master key to unlock various analysis techniques, and it’s fundamental for achieving several of our course objectives, particularly CO4 (identifying network functions and parameters) and even touching upon CO1 and CO2 as we'll see.

Think of a two-port network as a black box that takes electrical signals in at one port (usually called the input port) and gives signals out at another port (the output port). This black box could be anything from a simple resistor network to a complex amplifier circuit. To understand how this box behaves, we use different sets of parameters. Today, we’re going to explore how these different parameter sets are connected. Why? Because sometimes, you're given a circuit described by one set of parameters, but you need to work with another. Knowing these inter-relationships means you don't have to start from scratch every time. It’s about efficiency and deeper understanding.

#### **Recap: What are Two-Port Networks and Their Parameters?**

Before we jump into the relationships, let's quickly refresh our memory. A two-port network has two pairs of terminals, each pair constituting a port. We typically label the currents entering the ports as $I_1$ and $I_2$, and the voltages across the ports as $V_1$ and $V_2$.

The behavior of a two-port network can be described using various parameter sets. The most common ones you’ll encounter, and which our textbooks like Irwin & Nelms and Van Valkenburg detail extensively, are:

*   **Z-parameters (Impedance Parameters):** Also known as open-circuit impedance parameters. Here, we express voltages as functions of currents.
    $V_1 = z_{11}I_1 + z_{12}I_2$
    $V_2 = z_{21}I_1 + z_{22}I_2$
    The $z$ parameters represent driving-point and transfer impedances. Imagine trying to push current into port 1 with port 2 open; $z_{11}$ tells you how much voltage you need. $z_{21}$ tells you about the voltage generated at port 2 when you push current into port 1.

*   **Y-parameters (Admittance Parameters):** Also known as short-circuit admittance parameters. Here, we express currents as functions of voltages.
    $I_1 = y_{11}V_1 + y_{12}V_2$
    $I_2 = y_{21}V_1 + y_{22}V_2$
    The $y$ parameters represent driving-point and transfer admittances. If you apply voltage to port 1 with port 2 shorted, $y_{11}$ tells you the current drawn. $y_{21}$ tells you the current flowing out of port 2 when you apply voltage to port 1 with port 2 shorted.

*   **H-parameters (Hybrid Parameters):** These are called "hybrid" because they mix voltage and current variables.
    $V_1 = h_{11}I_1 + h_{12}V_2$
    $I_2 = h_{21}I_1 + h_{22}V_2$
    $h_{11}$ is input impedance, $h_{22}$ is output admittance, $h_{12}$ is reverse voltage gain, and $h_{21}$ is forward current gain. These are very practical, especially in electronics for amplifier analysis, as mentioned in Sudhakar & Shyammohan.

*   **G-parameters (Inverse Hybrid Parameters):** Similar to H-parameters, but they swap the roles of voltage and current.
    $I_1 = g_{11}V_1 + g_{12}I_2$
    $V_2 = g_{21}V_1 + g_{22}I_2$
    $g_{11}$ is input admittance, $g_{22}$ is output impedance, $g_{12}$ is reverse current gain, and $g_{21}$ is forward voltage gain.

These four sets are the most commonly used. The key here is that for a given linear, passive two-port network, these different sets of parameters *must* be related. You can’t have one set that contradicts another; they are just different ways of describing the same underlying behavior. This is a direct consequence of Kirchhoff's laws and the linear nature of the components.

#### **The Fundamental Idea: Algebraic Manipulation**

So, how do we find these relationships? It's essentially algebraic manipulation! We take the defining equations for one set of parameters and rearrange them to match the form of another set. This is where our understanding of solving simultaneous equations from basic circuit analysis comes into play.

Let's start by deriving the Z-parameters from the Y-parameters, as this is a common starting point.

**1. From Y-parameters to Z-parameters**

We have the Y-parameter equations:
(1) $I_1 = y_{11}V_1 + y_{12}V_2$
(2) $I_2 = y_{21}V_1 + y_{22}V_2$

And we want to express $V_1$ and $V_2$ in terms of $I_1$ and $I_2$. Think of this like trying to find the "cause" ($V$'s) from the "effect" ($I$'s).

We can solve these two linear equations for $V_1$ and $V_2$. Let's solve for $V_1$ from equation (1):
$y_{11}V_1 = I_1 - y_{12}V_2$
$V_1 = \frac{1}{y_{11}}I_1 - \frac{y_{12}}{y_{11}}V_2$

Now, substitute this expression for $V_1$ into equation (2):
$I_2 = y_{21}\left(\frac{1}{y_{11}}I_1 - \frac{y_{12}}{y_{11}}V_2\right) + y_{22}V_2$
$I_2 = \frac{y_{21}}{y_{11}}I_1 - \frac{y_{21}y_{12}}{y_{11}}V_2 + y_{22}V_2$

We want to isolate $V_2$:
$I_2 - \frac{y_{21}}{y_{11}}I_1 = \left(y_{22} - \frac{y_{21}y_{12}}{y_{11}}\right)V_2$
$I_2 - \frac{y_{21}}{y_{11}}I_1 = \left(\frac{y_{11}y_{22} - y_{21}y_{12}}{y_{11}}\right)V_2$

Now, let's find $V_2$:
$V_2 = \frac{y_{11}}{y_{11}y_{22} - y_{21}y_{12}}I_2 - \frac{y_{21}}{y_{11}y_{22} - y_{21}y_{12}}I_1$

Notice the term in the denominator: $y_{11}y_{22} - y_{21}y_{12}$. This is the determinant of the Y-parameter matrix, and it's going to appear frequently! Let's call it $\Delta_y$. So, $\Delta_y = y_{11}y_{22} - y_{21}y_{12}$.

Now we have $V_2$ in terms of $I_1$ and $I_2$:
$V_2 = -\frac{y_{21}}{\Delta_y}I_1 + \frac{y_{11}}{\Delta_y}I_2$

This is the second equation for the Z-parameters! Comparing this with the general Z-parameter equations ($V_2 = z_{21}I_1 + z_{22}I_2$), we can directly identify:
$z_{21} = -\frac{y_{21}}{\Delta_y}$
$z_{22} = \frac{y_{11}}{\Delta_y}$

Now we just need to find $V_1$ in terms of $I_1$ and $I_2$. We can substitute our expression for $V_2$ back into the equation for $V_1$:
$V_1 = \frac{1}{y_{11}}I_1 - \frac{y_{12}}{y_{11}}\left(-\frac{y_{21}}{\Delta_y}I_1 + \frac{y_{11}}{\Delta_y}I_2\right)$
$V_1 = \frac{1}{y_{11}}I_1 + \frac{y_{12}y_{21}}{y_{11}\Delta_y}I_1 - \frac{y_{12}y_{11}}{y_{11}\Delta_y}I_2$
$V_1 = \left(\frac{1}{y_{11}} + \frac{y_{12}y_{21}}{y_{11}\Delta_y}\right)I_1 - \frac{y_{12}}{\Delta_y}I_2$

Let's combine the terms for $I_1$:
$V_1 = \left(\frac{\Delta_y + y_{12}y_{21}}{y_{11}\Delta_y}\right)I_1 - \frac{y_{12}}{\Delta_y}I_2$
Since $\Delta_y = y_{11}y_{22} - y_{21}y_{12}$, we have $\Delta_y + y_{12}y_{21} = y_{11}y_{22}$.
So, $V_1 = \left(\frac{y_{11}y_{22}}{y_{11}\Delta_y}\right)I_1 - \frac{y_{12}}{\Delta_y}I_2$
$V_1 = \frac{y_{22}}{\Delta_y}I_1 - \frac{y_{12}}{\Delta_y}I_2$

And there we have it! The Z-parameters in terms of Y-parameters:
$z_{11} = \frac{y_{22}}{\Delta_y}$
$z_{12} = -\frac{y_{12}}{\Delta_y}$
$z_{21} = -\frac{y_{21}}{\Delta_y}$
$z_{22} = \frac{y_{11}}{\Delta_y}$

Where $\Delta_y = y_{11}y_{22} - y_{21}y_{12}$.

**Key Takeaway:** Notice that the Z-parameters are obtained by taking the *cofactors* of the Y-parameter matrix and dividing by the determinant of the Y-parameter matrix. This is a pattern we'll see when converting between reciprocal parameter sets.

#### **2. From Z-parameters to Y-parameters**

This is just the reverse process. We have:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

We want to express $I_1$ and $I_2$ in terms of $V_1$ and $V_2$. We can use Cramer's rule or substitution. Let's define the determinant of the Z-parameter matrix as $\Delta_z = z_{11}z_{22} - z_{12}z_{21}$.

Solving for $I_1$ and $I_2$ gives:
$I_1 = \frac{z_{22}}{\Delta_z}V_1 - \frac{z_{12}}{\Delta_z}V_2$
$I_2 = -\frac{z_{21}}{\Delta_z}V_1 + \frac{z_{11}}{\Delta_z}V_2$

Comparing these with the Y-parameter equations ($I_1 = y_{11}V_1 + y_{12}V_2$ and $I_2 = y_{21}V_1 + y_{22}V_2$), we get:
$y_{11} = \frac{z_{22}}{\Delta_z}$
$y_{12} = -\frac{z_{12}}{\Delta_z}$
$y_{21} = -\frac{z_{21}}{\Delta_z}$
$y_{22} = \frac{z_{11}}{\Delta_z}$

Where $\Delta_z = z_{11}z_{22} - z_{12}z_{21}$.
Again, notice the cofactor relationship with the determinant. This confirms our earlier observation.

**Analogy:** Imagine you have a system where you measure force and displacement. Z-parameters are like saying "voltage = impedance * current" – you measure the 'effort' (voltage) required to achieve a certain 'flow' (current), keeping one port's 'flow' fixed. Y-parameters are like "current = admittance * voltage" – you measure the 'flow' (current) generated by a certain 'effort' (voltage), keeping one port's 'effort' fixed. The relationship between them is like converting between these measurement perspectives using the fundamental properties of the system.

#### **3. Inter-relationships with H-parameters**

H-parameters mix voltage and current. Let's derive them from Z-parameters first.
We have:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

The H-parameter equations are:
$V_1 = h_{11}I_1 + h_{12}V_2$
$I_2 = h_{21}I_1 + h_{22}V_2$

We need to express $V_1$ and $I_2$ using $I_1$ and $V_2$.
From the Z-parameter equations, let's solve for $I_1$ and $I_2$ in terms of $V_1$ and $V_2$ (which we already did for Y-parameters, but using Z-parameters):
$I_1 = \frac{z_{22}}{\Delta_z}V_1 - \frac{z_{12}}{\Delta_z}V_2$
$I_2 = -\frac{z_{21}}{\Delta_z}V_1 + \frac{z_{11}}{\Delta_z}V_2$

Now, look at the H-parameter equations again. The first one directly relates $V_1$ to $I_1$ and $V_2$. The second one relates $I_2$ to $I_1$ and $V_2$.
This means we need to manipulate the Z-parameter equations to get the H-parameter form.

Let's start with the Z-parameter equations and try to get $V_1$ in terms of $I_1$ and $V_2$.
$V_1 = z_{11}I_1 + z_{12}I_2$
We need to substitute $I_2$. From the second Z-parameter equation, $V_2 = z_{21}I_1 + z_{22}I_2$, we can express $I_2$:
$z_{22}I_2 = V_2 - z_{21}I_1$
$I_2 = \frac{V_2}{z_{22}} - \frac{z_{21}}{z_{22}}I_1$

Now substitute this $I_2$ into the first Z-parameter equation:
$V_1 = z_{11}I_1 + z_{12}\left(\frac{V_2}{z_{22}} - \frac{z_{21}}{z_{22}}I_1\right)$
$V_1 = z_{11}I_1 + \frac{z_{12}}{z_{22}}V_2 - \frac{z_{12}z_{21}}{z_{22}}I_1$
$V_1 = \left(z_{11} - \frac{z_{12}z_{21}}{z_{22}}\right)I_1 + \frac{z_{12}}{z_{22}}V_2$
$V_1 = \left(\frac{z_{11}z_{22} - z_{12}z_{21}}{z_{22}}\right)I_1 + \frac{z_{12}}{z_{22}}V_2$
$V_1 = \frac{\Delta_z}{z_{22}}I_1 + \frac{z_{12}}{z_{22}}V_2$

Comparing this with $V_1 = h_{11}I_1 + h_{12}V_2$:
$h_{11} = \frac{\Delta_z}{z_{22}} = \frac{z_{11}z_{22} - z_{12}z_{21}}{z_{22}}$
$h_{12} = \frac{z_{12}}{z_{22}}$

Now let's work on the second H-parameter equation: $I_2 = h_{21}I_1 + h_{22}V_2$.
We can use the expression for $I_2$ we derived from Z-parameters:
$I_2 = -\frac{z_{21}}{\Delta_z}V_1 + \frac{z_{11}}{\Delta_z}V_2$
This doesn't look like the H-parameter form yet. We need $I_2$ in terms of $I_1$ and $V_2$. Let's go back to the Z-parameter equations:
$V_2 = z_{21}I_1 + z_{22}I_2$
We want to express $I_2$ in terms of $I_1$ and $V_2$. This is already done by isolating $I_2$ from this equation:
$z_{22}I_2 = V_2 - z_{21}I_1$
$I_2 = \frac{V_2}{z_{22}} - \frac{z_{21}}{z_{22}}I_1$
$I_2 = -\frac{z_{21}}{z_{22}}I_1 + \frac{1}{z_{22}}V_2$

Comparing this with $I_2 = h_{21}I_1 + h_{22}V_2$:
$h_{21} = -\frac{z_{21}}{z_{22}}$
$h_{22} = \frac{1}{z_{22}}$

So, from Z-parameters to H-parameters:
$h_{11} = \frac{\Delta_z}{z_{22}}$
$h_{12} = \frac{z_{12}}{z_{22}}$
$h_{21} = -\frac{z_{21}}{z_{22}}$
$h_{22} = \frac{1}{z_{22}}$

Where $\Delta_z = z_{11}z_{22} - z_{12}z_{21}$.

**Example:** Consider a simple circuit with a resistor $R$ in series with an inductor $L$. If we consider this as a two-port network (input across $R+L$, output across $L$), we can find its Z-parameters. $V_1 = I_1(R+j\omega L)$, $V_2 = I_1(j\omega L)$. So, $z_{11} = R+j\omega L$, $z_{12} = j\omega L$, $z_{21} = j\omega L$, $z_{22} = j\omega L$. If we want to find its H-parameters, we'd use these relations. For instance, $h_{22} = 1/z_{22} = 1/(j\omega L)$. This parameter is the output admittance when the input is driven by a current source and the output voltage is controlled. Here, it's the admittance of the inductor when voltage is applied.

#### **4. Inter-relationships with G-parameters**

G-parameters are derived similarly. The G-parameter equations are:
$I_1 = g_{11}V_1 + g_{12}I_2$
$V_2 = g_{21}V_1 + g_{22}I_2$

Let's derive them from Z-parameters. We need to express $I_1$ and $V_2$ using $V_1$ and $I_2$.
The Z-parameter equations are:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

From the first Z-parameter equation, isolate $I_1$:
$z_{11}I_1 = V_1 - z_{12}I_2$
$I_1 = \frac{V_1}{z_{11}} - \frac{z_{12}}{z_{11}}I_2$

Comparing this with $I_1 = g_{11}V_1 + g_{12}I_2$:
$g_{11} = \frac{1}{z_{11}}$
$g_{12} = -\frac{z_{12}}{z_{11}}$

Now for the second equation. Substitute the expression for $I_1$ into the second Z-parameter equation:
$V_2 = z_{21}\left(\frac{V_1}{z_{11}} - \frac{z_{12}}{z_{11}}I_2\right) + z_{22}I_2$
$V_2 = \frac{z_{21}}{z_{11}}V_1 - \frac{z_{21}z_{12}}{z_{11}}I_2 + z_{22}I_2$
$V_2 = \frac{z_{21}}{z_{11}}V_1 + \left(z_{22} - \frac{z_{21}z_{12}}{z_{11}}\right)I_2$
$V_2 = \frac{z_{21}}{z_{11}}V_1 + \left(\frac{z_{11}z_{22} - z_{21}z_{12}}{z_{11}}\right)I_2$
$V_2 = \frac{z_{21}}{z_{11}}V_1 + \frac{\Delta_z}{z_{11}}I_2$

Comparing this with $V_2 = g_{21}V_1 + g_{22}I_2$:
$g_{21} = \frac{z_{21}}{z_{11}}$
$g_{22} = \frac{\Delta_z}{z_{11}}$

So, from Z-parameters to G-parameters:
$g_{11} = \frac{1}{z_{11}}$
$g_{12} = -\frac{z_{12}}{z_{11}}$
$g_{21} = \frac{z_{21}}{z_{11}}$
$g_{22} = \frac{\Delta_z}{z_{11}}$

Where $\Delta_z = z_{11}z_{22} - z_{12}z_{21}$.

#### **Relationship Summary: A Powerful Table!**

It's really useful to summarize these relationships. While deriving them is important for understanding, for quick recall and exam purposes, having a table of these conversions is invaluable. Textbooks like Franklin F. Kuo provide such tables, and you should definitely make your own.

Here's a simplified view of how the parameters are related, often expressed in terms of Z or Y parameters, as they are the fundamental ones from which others can be derived.

**From Y to Z:**
$z_{11} = \frac{y_{22}}{\Delta_y}$, $z_{12} = -\frac{y_{12}}{\Delta_y}$, $z_{21} = -\frac{y_{21}}{\Delta_y}$, $z_{22} = \frac{y_{11}}{\Delta_y}$
where $\Delta_y = y_{11}y_{22} - y_{12}y_{21}$

**From Z to Y:**
$y_{11} = \frac{z_{22}}{\Delta_z}$, $y_{12} = -\frac{z_{12}}{\Delta_z}$, $y_{21} = -\frac{z_{21}}{\Delta_z}$, $y_{22} = \frac{z_{11}}{\Delta_z}$
where $\Delta_z = z_{11}z_{22} - z_{12}z_{21}$

**From Z to H:**
$h_{11} = \frac{\Delta_z}{z_{22}}$, $h_{12} = \frac{z_{12}}{z_{22}}$, $h_{21} = -\frac{z_{21}}{z_{22}}$, $h_{22} = \frac{1}{z_{22}}$

**From H to Z:**
$z_{11} = \frac{h_{11}}{\Delta_h}$, $z_{12} = \frac{h_{12}}{\Delta_h}$, $z_{21} = -\frac{h_{21}}{\Delta_h}$, $z_{22} = \frac{1}{\Delta_h}$
where $\Delta_h = h_{11}h_{22} - h_{12}h_{21}$

**From Y to H:**
$h_{11} = \frac{1}{y_{11}}$, $h_{12} = -\frac{y_{12}}{y_{11}}$, $h_{21} = \frac{y_{21}}{y_{11}}$, $h_{22} = \frac{\Delta_y}{y_{11}}$

**From H to Y:**
$y_{11} = \frac{h_{22}}{\Delta_h}$, $y_{12} = -\frac{h_{12}}{\Delta_h}$, $y_{21} = \frac{h_{21}}{\Delta_h}$, $y_{22} = \frac{h_{11}}{\Delta_h}$

And similarly for G-parameters. You can derive them by algebraic manipulation as we did, or by using these intermediate relationships. For instance, to get G from Z, you could go Z -> Y -> G, or Z -> H -> Y -> G, etc., though direct derivation is usually more efficient.

**What about reciprocity?**
A two-port network is reciprocal if the transfer characteristic is the same in both directions. For example, in a reciprocal network, $z_{21} = z_{12}$ and $y_{21} = y_{12}$.
In reciprocal networks:
- If Z-parameters are known, $z_{12} = z_{21}$.
- If Y-parameters are known, $y_{12} = y_{21}$.
- If H-parameters are known, $h_{12} = -h_{21}$.
- If G-parameters are known, $g_{12} = -g_{21}$.

This condition $z_{12}=z_{21}$ or $y_{12}=y_{21}$ is very important. If your calculated parameters from a circuit do not satisfy this, it means the circuit is not reciprocal (e.g., it contains a non-reciprocal component like a vacuum tube amplifier or a transistor in a certain configuration, or even a diode).

**Exam Focus:**
Many questions in exams will involve converting between parameter sets. You might be given a circuit, asked to find its Z-parameters, and then asked to find its H-parameters. Or you might be given the H-parameters of a component and asked to integrate it into a larger circuit that's easier to analyze with Z-parameters.
**Common Pitfall:** Sign errors! Especially when converting between Z and Y, or Z and H parameters where negative signs appear. Double-check your algebra. Also, ensure you correctly calculate the determinants $\Delta_z, \Delta_y, \Delta_h$.

**Connecting to Course Outcomes:**
*   **CO4 (Identify network functions and parameters):** This entire topic is about understanding different ways to characterize a network. We're identifying these parameters and their relationships.
*   **CO1 & CO2 (Analyze networks using mesh/node and network theorems):** While not directly using mesh/node methods here, understanding these parameters allows us to simplify analysis. For example, if a complex circuit can be broken down into simpler two-port networks with known parameters, we can use these inter-relationships to re-parameterize them and combine them efficiently. Think of cascading or parallel connections of two-port networks, where parameter conversion is essential.

#### **Example: A Simple Series Resistor**

Let's consider a simple resistor $R$ connected in series with the input and output of a two-port network.
Input port: $V_1, I_1$. Output port: $V_2, I_2$.
The resistor adds $R$ to the input voltage. So, $V_{1, new} = V_{1, old} + RI_1$. If we describe the original network with Z-parameters: $V_{1, old} = z_{11}I_1 + z_{12}I_2$, $V_{2, old} = z_{21}I_1 + z_{22}I_2$.
The new network has:
$V_{1, new} = (z_{11}+R)I_1 + z_{12}I_2$
$V_{2, new} = z_{21}I_1 + z_{22}I_2$
So, the new Z-parameters are $z'_{11} = z_{11}+R$, $z'_{12} = z_{12}$, $z'_{21} = z_{21}$, $z'_{22} = z_{22}$.
This shows how parameters change when we add simple components or modify the network configuration. Understanding inter-relationships helps us build complex analyses from simpler building blocks.

**Final Thoughts:**
Mastering the inter-relationships between these parameters is crucial for a deep understanding of two-port network analysis. It empowers you to switch between different analysis methods and to correctly interpret the behavior of various circuits. Remember the cofactor and determinant relationships, and always be careful with signs.

---

### **Sample Questions with Answers**

**Q1. Conceptual Question:** Explain why understanding the inter-relationships between Z, Y, H, and G parameters is important for analyzing electrical networks.

**Answer:** Understanding the inter-relationships between two-port network parameters (Z, Y, H, G) is important because it allows us to:
1.  **Flexibility in Analysis:** Different circuits are more conveniently represented by different parameter sets. For example, series-parallel networks are often easier with Z or Y parameters, while transistor circuits are often analyzed with H-parameters. Knowing the conversions allows us to select the most suitable parameter set for a given problem.
2.  **Interconnection of Networks:** When analyzing complex systems composed of cascaded or parallel-connected two-port networks, we often need to convert parameters to perform the interconnection analysis (e.g., summing parameters for parallel connections, matrix multiplication for cascaded connections).
3.  **Verification and Consistency:** The relationships ensure that different ways of describing the same linear network are consistent. If you derive parameters using different methods, these relationships help verify your results.
4.  **Device Characterization:** Many active and passive devices are characterized using specific parameter sets (e.g., transistors using H-parameters). Converting these to other parameter sets (like Z or Y) is necessary for integrating them into broader network analysis.
This is directly related to **CO4**, as it shows how different parameters are inherently linked and how one can derive or convert between them.

---

**Q2. Calculation Question:** A two-port network is described by the following Y-parameters:
$y_{11} = 0.1$ S, $y_{12} = -0.01$ S, $y_{21} = 0.5$ S, $y_{22} = 0.02$ S.
Find the Z-parameters for this network.

**Solution:**
First, calculate the determinant of the Y-parameter matrix:
$\Delta_y = y_{11}y_{22} - y_{12}y_{21}$
$\Delta_y = (0.1)(0.02) - (-0.01)(0.5)$
$\Delta_y = 0.002 - (-0.005)$
$\Delta_y = 0.002 + 0.005 = 0.007$ S$^2$

Now, use the conversion formulas from Y to Z parameters:
$z_{11} = \frac{y_{22}}{\Delta_y} = \frac{0.02}{0.007} = \frac{20}{7} \approx 2.857 \, \Omega$
$z_{12} = -\frac{y_{12}}{\Delta_y} = -\frac{-0.01}{0.007} = \frac{0.01}{0.007} = \frac{10}{7} \approx 1.429 \, \Omega$
$z_{21} = -\frac{y_{21}}{\Delta_y} = -\frac{0.5}{0.007} = -\frac{500}{7} \approx -71.429 \, \Omega$
$z_{22} = \frac{y_{11}}{\Delta_y} = \frac{0.1}{0.007} = \frac{100}{7} \approx 14.286 \, \Omega$

So, the Z-parameters are:
$z_{11} = \frac{20}{7} \, \Omega$, $z_{12} = \frac{10}{7} \, \Omega$, $z_{21} = -\frac{500}{7} \, \Omega$, $z_{22} = \frac{100}{7} \, \Omega$.
This question tests direct application of formulas, crucial for **CO4**.

---

**Q3. Conceptual/Calculation Question:** A two-port network has the following H-parameters: $h_{11} = 100 \Omega$, $h_{12} = 0.01$, $h_{21} = -50$, $h_{22} = 0.002$ S.
(a) Is this network reciprocal? Justify your answer.
(b) Convert these H-parameters to Z-parameters.

**Solution:**
(a) A two-port network is reciprocal if $h_{12} = -h_{21}$ when it is characterized by H-parameters.
In this case, $h_{12} = 0.01$ and $h_{21} = -50$.
Since $0.01 \neq -(-50)$, which is $50$, the condition $h_{12} = -h_{21}$ is not met.
Therefore, the network is **not reciprocal**. This would happen, for instance, if the network contained a unilateral device like a transistor configured for amplification.

(b) To convert from H-parameters to Z-parameters, we first need the determinant of the H-parameter matrix:
$\Delta_h = h_{11}h_{22} - h_{12}h_{21}$
$\Delta_h = (100)(0.002) - (0.01)(-50)$
$\Delta_h = 0.2 - (-0.5)$
$\Delta_h = 0.2 + 0.5 = 0.7$

Now, use the conversion formulas from H to Z parameters:
$z_{11} = \frac{h_{11}}{\Delta_h} = \frac{100}{0.7} = \frac{1000}{7} \approx 142.86 \, \Omega$
$z_{12} = \frac{h_{12}}{\Delta_h} = \frac{0.01}{0.7} = \frac{1}{70} \approx 0.0143 \, \Omega$
$z_{21} = -\frac{h_{21}}{\Delta_h} = -\frac{-50}{0.7} = \frac{50}{0.7} = \frac{500}{7} \approx 71.43 \, \Omega$
$z_{22} = \frac{1}{\Delta_h} = \frac{1}{0.7} = \frac{10}{7} \approx 1.429 \, \Omega$

So, the Z-parameters are:
$z_{11} = \frac{1000}{7} \, \Omega$, $z_{12} = \frac{1}{70} \, \Omega$, $z_{21} = \frac{500}{7} \, \Omega$, $z_{22} = \frac{10}{7} \, \Omega$.
This question tests both the understanding of reciprocity conditions and the application of conversion formulas, relevant for **CO4** and general understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
