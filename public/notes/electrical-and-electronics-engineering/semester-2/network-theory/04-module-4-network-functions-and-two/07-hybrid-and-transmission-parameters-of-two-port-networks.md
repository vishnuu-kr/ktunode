---
title: "Hybrid and Transmission parameters of two-port networks"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f988b"
status: "completed"
scrapedAt: "2026-05-23T16:08:47.848Z"
---
# NETWORK THEORY: Module 4 - Network Functions and Two-Port Networks

## Topic: Hybrid and Transmission Parameters of Two-Port Networks

Welcome back, everyone! In our journey through Network Theory, we've already established the fundamental building blocks of electrical circuits. Now, as we delve into Module 4, we're going to focus on something incredibly important and practical: **Two-Port Networks**. Think of a two-port network as a "black box" that has two distinct pairs of terminals – an input port and an output port. This concept is absolutely central to understanding how complex circuits and systems interact. We've touched upon basic two-port parameters like the Z (impedance) and Y (admittance) parameters, which are excellent for analysis but sometimes can be a bit cumbersome. Today, we're going to explore two more powerful sets of parameters that are incredibly useful in different scenarios: **Hybrid Parameters (h-parameters)** and **Transmission Parameters (ABCD parameters)**.

This topic directly addresses **Course Outcome 4 (CO4)**: "Identify the network functions and parameters of single-port and two-port networks" at a **Knowledge Level K2 (Understanding)**. By understanding hybrid and transmission parameters, you'll gain a deeper appreciation for characterizing the behavior of these "black box" networks, which is crucial for understanding how different circuit blocks connect and interact in larger systems.

Let's start by recalling what a two-port network is. Imagine a device like an amplifier, a filter, or even a simple transformer. We're interested in how it behaves when we connect a signal source to its input and a load to its output, without necessarily caring about the internal workings. A two-port network representation allows us to do just that. We define four variables: the voltage and current at the input port ($V_1, I_1$) and the voltage and current at the output port ($V_2, I_2$).

### 1. Hybrid Parameters (h-parameters): The "Mixed" Approach

The name "hybrid" itself tells you something important: these parameters are a mix of impedance and admittance concepts. Why do we need another set of parameters? Well, sometimes, depending on the application and the components within the two-port network, using impedance (voltage/current) or admittance (current/voltage) might lead to awkward equations. For instance, in some active circuits like transistors, it's more natural to relate input voltage to output current and output voltage to input current. This is precisely where hybrid parameters shine.

Consider our generic two-port network. We can express the terminal voltages and currents using a set of linear equations. For hybrid parameters, we choose to express the input voltage ($V_1$) and the output current ($I_2$) in terms of the input current ($I_1$) and the output voltage ($V_2$). This choice is strategic and often mirrors the characteristics of active devices.

The defining equations for hybrid parameters are:

$V_1 = h_{11}I_1 + h_{12}V_2$
$I_2 = h_{21}I_1 + h_{22}V_2$

Here's a breakdown of what each parameter signifies, and this is a good point to jot down for exam recall:

*   **$h_{11}$**: This parameter relates input voltage to input current when the output is short-circuited (i.e., $V_2 = 0$). So, $h_{11} = \frac{V_1}{I_1}\Big|_{V_2=0}$. This looks like an **impedance**, specifically the **input impedance with the output short-circuited**. Think of it as the "resistance" the input source sees when the output terminals are directly connected together.
*   **$h_{12}$**: This parameter relates input voltage to output voltage when the input is open-circuited (i.e., $I_1 = 0$). So, $h_{12} = \frac{V_1}{V_2}\Big|_{I_1=0}$. This is a **voltage ratio**, specifically the **reverse voltage gain with the input open-circuited**. It tells us how much of the output voltage "feeds back" to the input, normalized by the output voltage.
*   **$h_{21}$**: This parameter relates output current to input current when the output is short-circuited (i.e., $V_2 = 0$). So, $h_{21} = \frac{I_2}{I_1}\Big|_{I_1=0}$. This is a **current ratio**, specifically the **forward current gain with the output short-circuited**. This is a very important parameter for amplifiers, as it tells us how much the input current is amplified to produce the output current.
*   **$h_{22}$**: This parameter relates output current to output voltage when the input is open-circuited (i.e., $I_1 = 0$). So, $h_{22} = \frac{I_2}{V_2}\Big|_{I_1=0}$. This looks like an **admittance**, specifically the **output admittance with the input open-circuited**. It represents how the output port conducts current when a voltage is applied to it, with no current coming into the input.

**Analogy Time!** Imagine you're a tailor fitting a suit.
*   $h_{11}$: This is like measuring the **chest circumference** of the client ($V_1$) based on how much they are "breathing in" ($I_1$) when you hold the tape measure taut around their back ($V_2=0$).
*   $h_{12}$: This is like noticing how much of the **shoulder breadth** ($V_1$) is influenced by the **overall width of the suit** ($V_2$), when the client isn't actively "holding their breath" ($I_1=0$). It's a measure of how the fit at the shoulders is affected by the general fit of the suit.
*   $h_{21}$: This is like measuring how much the **overall width of the jacket** ($I_2$) is dictated by the **client's chest measurement** ($I_1$), when you're holding the jacket closed at the back ($V_2=0$). It’s the amplification of chest size to jacket size.
*   $h_{22}$: This is like measuring how much the **bottom hem of the jacket flares out** ($I_2$) as you pull it outwards ($V_2$), when the client isn't "holding onto the lapel" ($I_1=0$). It's the jacket's tendency to open at the bottom when you tug on it.

**Relating to Textbooks:** Our friends at Wiley, like Irwin & Nelms (12/e) and Kuo (2/e), extensively cover these definitions. They emphasize that the choice of independent and dependent variables ($V_1, I_1$ vs. $V_2, I_2$) is what distinguishes different parameter sets. Hybrid parameters are particularly favored for analyzing active circuits, like those using transistors, because transistors are often characterized by their input voltage, output voltage, input current, and output current, making the $h$-parameter formulation a natural fit.

**Exam Focus:** When you see questions asking to derive $h$-parameters or to analyze circuits using $h$-parameters, remember to set the appropriate terminal condition (open circuit for $I_1=0$ or $V_2=0$, short circuit for $V_2=0$). The "hybrid" nature means you'll often use a mix of voltage and current measurements or calculations.

### 2. Transmission Parameters (ABCD Parameters): The "Forward" View

Now, let's shift our perspective. What if we're more interested in how a signal propagates *through* a network, from input to output, rather than how input and output variables are related in a mixed fashion? This is where Transmission parameters, also known as ABCD parameters or general circuit parameters, come into play. These are particularly useful in cascaded networks, like in communication systems or power transmission lines, where we chain multiple two-port networks together.

For transmission parameters, we express the input variables ($V_1, I_1$) in terms of the output variables ($V_2, I_2$). This gives us a "forward" view, showing how the output conditions dictate the input conditions.

The defining equations for transmission parameters are:

$V_1 = AV_2 - BI_2$
$I_1 = CV_2 - DI_2$

*(Note the minus signs here. Some conventions might use plus signs and define $I_2$ as flowing out of the network. The common convention used in many texts like Van Valkenburg (Revised 3/e) and Sudhakar & Shyammohan (5/e) has these negative signs when defining $I_2$ as current flowing *into* the output port. Always check the convention being used in your problem or textbook!)*

Let's break down the meaning of these ABCD parameters:

*   **A**: This parameter relates the input voltage to the output voltage when the output is open-circuited (i.e., $I_2 = 0$). So, $A = \frac{V_1}{V_2}\Big|_{I_2=0}$. This is the **open-circuit forward voltage ratio**. It tells us how much input voltage is needed to establish a certain output voltage across an open circuit.
*   **B**: This parameter relates the input voltage to the output current when the output is short-circuited (i.e., $V_2 = 0$). So, $B = -\frac{V_1}{I_2}\Big|_{V_2=0}$. This is the **short-circuit forward transfer impedance**. The negative sign is there because $I_2$ is usually defined flowing *into* the network, so a positive output current implies current flowing *out* of the load. It tells us about the voltage drop at the input due to the output current.
*   **C**: This parameter relates the input current to the output voltage when the output is open-circuited (i.e., $I_2 = 0$). So, $C = \frac{I_1}{V_2}\Big|_{I_2=0}$. This is the **open-circuit forward transfer admittance**. It tells us how much input current is needed to establish a certain output voltage across an open circuit.
*   **D**: This parameter relates the input current to the output current when the output is short-circuited (i.e., $V_2 = 0$). So, $D = -\frac{I_1}{I_2}\Big|_{V_2=0}$. This is the **short-circuit forward current ratio**. Similar to B, the negative sign is convention-dependent but common when $I_2$ is defined as flowing into the network. It tells us how the input current relates to the output current under a short-circuit condition.

**Analogy Time Again!** Let's think about a busy subway system.
*   **A**: Imagine you're at the entrance (Port 1) of a large subway station complex. 'A' is like the ratio of the **overall distance from the main entrance to the furthest platform** ($V_1$) to the **distance from the main entrance to the ticket booth** ($V_2$), assuming everyone just walks through the ticket booth and exits the station complex without buying anything ($I_2=0$). It's about the "voltage" or path length scaling.
*   **B**: This is like the **"impedance"** of the system – how much you need to push at the entrance ($V_1$) to get a certain number of people to exit at the ticket booth ($I_2$), assuming the ticket booth is jammed with people ($V_2=0$). It relates the input "effort" (voltage) to the output "flow" (current).
*   **C**: This is like the **"admittance"** – how much **effort you need to exert at the entrance** ($I_1$) to get a certain number of people to flow through the ticket booth ($V_2$), again, assuming the ticket booth is empty ($I_2=0$). It's about how efficiently input current translates to output voltage.
*   **D**: This is the **"current amplification"** factor. It's how much **flow you have at the entrance** ($I_1$) compared to the **flow at the ticket booth** ($I_2$), assuming the ticket booth is jammed ($V_2=0$).

**Relating to Textbooks:** Van Valkenburg and Sudhakar & Shyammohan are great resources for understanding the derivation and application of ABCD parameters, especially in the context of cascaded networks. The fact that you can multiply ABCD matrices for cascaded networks makes them extremely powerful for system analysis. For instance, if you have three two-port networks in series, the overall ABCD parameters are simply the product of their individual ABCD matrices. This is a concept you'll frequently encounter in exams involving cascaded systems. Joseph A. Edminister's Schaum's Outline also provides clear examples of this cascading property.

**Exam Focus:** Transmission parameters are often tested in the context of cascading. You'll be asked to find the overall ABCD parameters of a system made of multiple two-port networks. Remember the matrix multiplication rule for cascaded systems. Also, understanding the physical meaning of A, B, C, and D can help you predict the behavior of a system even without extensive calculations. For instance, a low 'B' value might indicate a system that doesn't cause much voltage loss.

### 3. Interconversion Between Parameter Sets

It's not uncommon to be given a two-port network characterized by one set of parameters (say, Z-parameters) and then asked to find its h-parameters or ABCD parameters. This is where interconversion formulas come in handy. These formulas are derived by manipulating the defining equations of each parameter set. While you'll want to have the key formulas memorized for exams, it's more important to understand *how* they are derived. This understanding helps prevent errors and allows you to re-derive them if you forget.

For example, let's see how to convert from Z-parameters to h-parameters.
We know:
$V_1 = Z_{11}I_1 + Z_{12}I_2$
$V_2 = Z_{21}I_1 + Z_{22}I_2$

And we want:
$V_1 = h_{11}I_1 + h_{12}V_2$
$I_2 = h_{21}I_1 + h_{22}V_2$

From the Z-parameter equations, we need to express $V_1$ in terms of $I_1$ and $V_2$, and $I_2$ in terms of $I_1$ and $V_2$.
Let's rearrange the second Z-parameter equation to solve for $I_2$:
$Z_{22}I_2 = -Z_{21}I_1 - V_2$
$I_2 = -\frac{Z_{21}}{Z_{22}}I_1 - \frac{1}{Z_{22}}V_2$

Now, substitute this expression for $I_2$ into the first Z-parameter equation:
$V_1 = Z_{11}I_1 + Z_{12}\left(-\frac{Z_{21}}{Z_{22}}I_1 - \frac{1}{Z_{22}}V_2\right)$
$V_1 = Z_{11}I_1 - \frac{Z_{12}Z_{21}}{Z_{22}}I_1 - \frac{Z_{12}}{Z_{22}}V_2$
$V_1 = \left(Z_{11} - \frac{Z_{12}Z_{21}}{Z_{22}}\right)I_1 - \left(\frac{Z_{12}}{Z_{22}}\right)V_2$

Comparing this with $V_1 = h_{11}I_1 + h_{12}V_2$, we get:
$h_{11} = Z_{11} - \frac{Z_{12}Z_{21}}{Z_{22}} = \frac{Z_{11}Z_{22} - Z_{12}Z_{21}}{Z_{22}}$
$h_{12} = -\frac{Z_{12}}{Z_{22}}$

Now we need to get $I_2$ in terms of $I_1$ and $V_2$. We already have $I_2 = -\frac{Z_{21}}{Z_{22}}I_1 - \frac{1}{Z_{22}}V_2$.
Comparing this with $I_2 = h_{21}I_1 + h_{22}V_2$, we get:
$h_{21} = -\frac{Z_{21}}{Z_{22}}$
$h_{22} = -\frac{1}{Z_{22}}$

This process of algebraic manipulation is key. You'll find similar derivations for all conversions. The determinant of the Z-parameter matrix, $\Delta Z = Z_{11}Z_{22} - Z_{12}Z_{21}$, often appears in these conversion formulas, as noted in materials like Ravish R (2/e).

**Important Conversion Formulas (for quick recall):**

It's good practice to have these handy. Some common ones:

**From Z to h:**
$h_{11} = \frac{\Delta Z}{Z_{22}}$, $h_{12} = -\frac{Z_{12}}{Z_{22}}$, $h_{21} = -\frac{Z_{21}}{Z_{22}}$, $h_{22} = \frac{1}{Z_{22}}$

**From Y to h:**
$h_{11} = \frac{1}{Y_{11}}$, $h_{12} = -\frac{Y_{12}}{Y_{11}}$, $h_{21} = \frac{Y_{21}}{Y_{11}}$, $h_{22} = \frac{\Delta Y}{Y_{11}}$

**From h to Z:**
$Z_{11} = \frac{h_{11}}{\Delta h}$, $Z_{12} = \frac{h_{12}}{\Delta h}$, $Z_{21} = -\frac{h_{21}}{\Delta h}$, $Z_{22} = \frac{1}{\Delta h}$
where $\Delta h = h_{11}h_{22} - h_{12}h_{21}$

**From ABCD to h:**
$h_{11} = \frac{A}{C}$, $h_{12} = \frac{\Delta Z_{ABCD}}{C}$, $h_{21} = -\frac{1}{C}$, $h_{22} = \frac{D}{C}$
where $\Delta Z_{ABCD} = AD - BC$ (This is usually equal to 1 for passive networks, but it's a general relationship).

**From h to ABCD:**
$A = \frac{h_{11}}{\Delta h}$, $B = \frac{1}{\Delta h}$, $C = \frac{h_{21}}{\Delta h}$, $D = \frac{h_{22}}{\Delta h}$

**Remember this:** The choice of parameters often depends on the specific problem context or the type of circuit you're analyzing. Understanding the physical meaning of each parameter set and how to convert between them is a key skill for any network analyst.

### 4. Reciprocal and Passive Networks

A crucial concept when dealing with two-port networks is whether they are **reciprocal** or **non-reciprocal**.

*   A two-port network is **reciprocal** if the ratio of response to excitation is the same when the input and output ports are interchanged. In terms of parameters:
    *   For Z-parameters: $Z_{12} = Z_{21}$
    *   For Y-parameters: $Y_{12} = Y_{21}$
    *   For h-parameters: $h_{12} = -h_{21}$
    *   For ABCD parameters: $A=D$ and $\Delta Z = AD-BC = 1$ (This is a very important relationship for reciprocal networks!)

*   Most passive networks (composed solely of resistors, capacitors, inductors, and transformers) are **reciprocal**.
*   Active networks, especially those containing unilateral devices like transistors (which are designed to amplify in one direction), are often **non-reciprocal**.

**Example Scenario:** Imagine a two-way radio communication system. The antenna might act as a reciprocal two-port network – what you transmit out is related to what you receive in a symmetrical way. However, the internal amplifier circuits are designed to amplify signals going *in* one direction (from receiver to speaker) and not the other way around. These would be non-reciprocal.

**Exam Tip:** You'll often be asked to determine if a network is reciprocal based on its given parameters. Just check the conditions mentioned above. For example, if you're given Z-parameters and $Z_{12} \neq Z_{21}$, the network is non-reciprocal.

### 5. Interconnecting Two-Port Networks

The real power of two-port parameter representation is in analyzing complex circuits by breaking them down into simpler, interconnected two-port blocks. We can connect two-port networks in series, parallel, or cascade.

*   **Series Connection:** Two networks are in series if they share a common connection on one side, and the current entering the first network's output port is the same as the current leaving the second network's input port. This is often best analyzed using Z-parameters. If network 1 has $Z^{(1)}$ and network 2 has $Z^{(2)}$, the overall Z-parameters $Z$ are the sum of the individual Z-parameters: $Z = Z^{(1)} + Z^{(2)}$.

*   **Parallel Connection:** Two networks are in parallel if their input ports are connected together, and their output ports are connected together. This is usually best analyzed using Y-parameters. If network 1 has $Y^{(1)}$ and network 2 has $Y^{(2)}$, the overall Y-parameters $Y$ are the sum: $Y = Y^{(1)} + Y^{(2)}$.

*   **Cascade Connection:** This is perhaps the most common and powerful interconnection. Network 1's output port is connected to Network 2's input port. This is typically analyzed using ABCD parameters. If network 1 has $ABCD^{(1)}$ and network 2 has $ABCD^{(2)}$, the overall ABCD parameters $ABCD$ are the matrix product: $ABCD = ABCD^{(1)} \times ABCD^{(2)}$.

**Visualizing Cascade:** Think of an audio system: the microphone pre-amplifier, the power amplifier, and the speaker are often modeled as individual two-port networks. Connecting them in cascade means the output of the first feeds the input of the second. Using ABCD parameters makes it straightforward to calculate the overall voltage gain and impedance transformation from the microphone input to the speaker output.

### Summary and Key Takeaways

As we wrap up this segment on hybrid and transmission parameters, let's reinforce the core ideas:

*   **Hybrid (h) parameters** are useful for active circuits where input voltage and output current are more natural variables. They offer a mix of impedance and admittance characteristics. Remember $V_1 = h_{11}I_1 + h_{12}V_2$ and $I_2 = h_{21}I_1 + h_{22}V_2$.
*   **Transmission (ABCD) parameters** are excellent for analyzing cascaded networks and understanding signal flow. They express input variables in terms of output variables. Remember $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$.
*   Understanding the **physical meaning** of each parameter ($h_{11}$ as input impedance, $h_{21}$ as current gain, A as voltage ratio, B as transfer impedance, etc.) is crucial for applying them correctly.
*   **Interconversion** formulas are essential for switching between parameter sets as needed. The determinant of the parameter matrix often plays a role.
*   The concept of **reciprocity** ($Z_{12}=Z_{21}$, $h_{12}=-h_{21}$, $A=D$) is fundamental, with passive networks generally being reciprocal and active networks often being non-reciprocal.
*   **Interconnecting networks** in series (Z-parameters add), parallel (Y-parameters add), or cascade (ABCD matrices multiply) is a powerful analytical technique.

Mastering these parameters will equip you to analyze a wide range of electrical systems with confidence.

---

### Sample Questions with Answers

Here are a few practice questions to solidify your understanding, covering both conceptual and exam-oriented aspects.

**Question 1 (Conceptual - Understanding CO4):**
For a two-port network, what does the hybrid parameter $h_{21}$ represent physically?
**Answer:**
The hybrid parameter $h_{21}$ represents the **forward current gain** of the two-port network under **short-circuit output conditions** ($V_2 = 0$). It tells us how much the output current ($I_2$) is amplified relative to the input current ($I_1$), which is a key characteristic for amplifier circuits.

**Question 2 (Exam-Oriented - Interconversion):**
A two-port network is described by the following Z-parameters:
$Z_{11} = 2 \Omega$, $Z_{12} = 1 \Omega$, $Z_{21} = 0.5 \Omega$, $Z_{22} = 3 \Omega$.
Find the hybrid parameters ($h_{11}, h_{12}, h_{21}, h_{22}$) for this network.
**Solution:**
We use the conversion formulas from Z to h parameters:
$\Delta Z = Z_{11}Z_{22} - Z_{12}Z_{21} = (2 \times 3) - (1 \times 0.5) = 6 - 0.5 = 5.5 \Omega^2$.

$h_{11} = \frac{\Delta Z}{Z_{22}} = \frac{5.5}{3} \Omega$
$h_{12} = -\frac{Z_{12}}{Z_{22}} = -\frac{1}{3}$ (dimensionless)
$h_{21} = -\frac{Z_{21}}{Z_{22}} = -\frac{0.5}{3} = -\frac{1}{6}$ (dimensionless)
$h_{22} = \frac{1}{Z_{22}} = \frac{1}{3} S$ (Siemens, unit of admittance)

So, the hybrid parameters are: $h_{11} = \frac{11}{6} \Omega$, $h_{12} = -\frac{1}{3}$, $h_{21} = -\frac{1}{6}$, $h_{22} = \frac{1}{3} S$.

**Question 3 (Conceptual - Reciprocity & CO4):**
A two-port network has the following transmission parameters:
$A=2$, $B=10 \Omega$, $C=0.5 S$, $D=3$.
Is this network reciprocal? Justify your answer.
**Answer:**
For a two-port network to be reciprocal, its transmission parameters must satisfy the condition $A=D$ and $AD-BC=1$.
In this case, $A=2$ and $D=3$. Since $A \neq D$, the network is **non-reciprocal**. (We don't even need to check $AD-BC$, but for completeness: $AD-BC = (2 \times 3) - (10 \times 0.5) = 6 - 5 = 1$. So, one condition is met, but not both, confirming non-reciprocity).

**Question 4 (Exam-Oriented - Cascading & CO4):**
Two two-port networks, Network 1 and Network 2, are connected in cascade. Network 1 has ABCD parameters $ABCD^{(1)} = \begin{bmatrix} 2 & 10 \\ 0.5 & 3 \end{bmatrix}$ and Network 2 has ABCD parameters $ABCD^{(2)} = \begin{bmatrix} 1 & 5 \\ 0.2 & 1 \end{bmatrix}$.
Find the ABCD parameters of the overall cascaded network.
**Solution:**
For a cascade connection, the overall ABCD parameters are the matrix product of the individual ABCD parameters, in the order of connection: $ABCD = ABCD^{(1)} \times ABCD^{(2)}$.

$ABCD = \begin{bmatrix} 2 & 10 \\ 0.5 & 3 \end{bmatrix} \begin{bmatrix} 1 & 5 \\ 0.2 & 1 \end{bmatrix}$

Performing matrix multiplication:
$A = (2 \times 1) + (10 \times 0.2) = 2 + 2 = 4$
$B = (2 \times 5) + (10 \times 1) = 10 + 10 = 20 \Omega$
$C = (0.5 \times 1) + (3 \times 0.2) = 0.5 + 0.6 = 1.1 S$
$D = (0.5 \times 5) + (3 \times 1) = 2.5 + 3 = 5.5$

So, the ABCD parameters of the overall cascaded network are:
$A=4$, $B=20 \Omega$, $C=1.1 S$, $D=5.5$.
