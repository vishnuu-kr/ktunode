---
title: "DC generator - principle of operation of DC generator – emf equation – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 1: Constructional details of dc machines "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b1e"
status: "completed"
scrapedAt: "2026-05-23T16:12:14.324Z"
---
# DC MACHINES & TRANSFORMERS - Module 1: Constructional Details of DC Machines

## Topic: DC Generator - Principle of Operation, EMF Equation, and Numerical Problems

---

### **1. Introduction to DC Generators**

A DC generator is an electrical machine that converts mechanical energy into direct current (DC) electrical energy. This conversion is based on the principle of electromagnetic induction.

**Key Concept:** Faraday's Law of Electromagnetic Induction.

---

### **2. Principle of Operation of a DC Generator**

The operation of a DC generator is based on **Faraday's Law of Electromagnetic Induction**, which states that an electromotive force (EMF) is induced in a conductor whenever it cuts magnetic flux.

*   **Electromagnetic Induction:** When a conductor moves through a magnetic field, or when a magnetic field changes around a stationary conductor, an EMF is induced across the conductor.
*   **Faraday's First Law:** The magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux linking the conductor.
*   **Faraday's Second Law:** The induced EMF is equal to the rate of change of magnetic flux linkage.
*   **Lenz's Law:** The direction of the induced EMF (and hence the induced current) is such that it opposes the cause producing it.

**How it Works in a DC Generator:**

1.  **Magnetic Field:** A stationary magnetic field is produced by field windings, usually wound around salient poles on the stator (yoke and poles).
2.  **Conductor Movement:** The armature, which consists of conductors wound on a rotating core, rotates within this magnetic field.
3.  **EMF Induction:** As the armature conductors cut the magnetic flux lines from the field poles, an EMF is induced in them.
4.  **AC to DC Conversion:** The EMF induced in the armature conductors is alternating in nature because as the armature rotates, the conductors cut the flux first in one direction and then in the opposite direction. To obtain a DC output, a **commutator** is used. The commutator is a mechanical rectifier that reverses the connections of the armature coils at the precise moment the induced EMF reverses polarity, thus ensuring a unidirectional (DC) output from the brushes.

**Relevant Textbooks:**
*   *Electrical Machinery* by P.S. Bimbhra (Chapter on DC Generators)
*   *Electric Machines* by D P Kothari & I J Nagrath (Chapter on DC Generators)
*   *DC Machines & Transformers* by K Murugesh Kumar (Chapter on DC Generators)
*   *Theory & Performance of Electrical Machines* by J.B. Gupta (Chapter on DC Generators)

---

### **3. Electromotive Force (EMF) Equation of a DC Generator**

The EMF induced in a DC generator can be calculated using its fundamental EMF equation.

**Derivation:**

Let:
*   $P$ = Number of magnetic poles
*   $\phi$ = Flux per pole (in Webers, Wb)
*   $Z$ = Total number of armature conductors
*   $N$ = Speed of the armature in revolutions per minute (RPM)
*   $A$ = Number of parallel paths in the armature winding

**Steps:**

1.  **Flux Cut per Revolution:**
    *   Each conductor cuts a flux of $P \phi$ Webers in one revolution (as it passes under all $P$ poles).

2.  **EMF Induced in One Conductor:**
    *   The average EMF induced in one conductor is the rate of change of flux linkage.
    *   Time taken for one revolution in seconds = $60/N$.
    *   Average EMF induced in one conductor = $\frac{\text{Total flux cut by the conductor in one revolution}}{\text{Time taken for one revolution}}$
    *   Average EMF induced in one conductor = $\frac{P \phi}{60/N} = \frac{P \phi N}{60}$ Volts.

3.  **EMF Induced in All Conductors:**
    *   The total EMF generated ($E_g$) is the EMF induced in any one of the parallel paths.
    *   Number of conductors in series in each parallel path = $Z/A$.
    *   Therefore, the total generated EMF $E_g$ is the EMF induced in $(Z/A)$ conductors connected in series.
    *   $E_g = \frac{P \phi N}{60} \times \frac{Z}{A}$ Volts.

    **The Fundamental EMF Equation of a DC Generator:**

    $$E_g = \frac{P \phi Z N}{60A} \quad \text{Volts}$$

**Important Points:**

*   **Wave Winding:** For wave-wound armatures, $A = 2$.
*   **Lap Winding:** For lap-wound armatures, $A = P$.
*   **If $A = P$ (Lap Winding), the equation becomes:** $E_g = \frac{\phi Z N}{60}$ Volts. This shows that for a lap winding, the generated EMF is independent of the number of poles.
*   **If $A = 2$ (Wave Winding), the equation becomes:** $E_g = \frac{P \phi Z N}{120}$ Volts.

**Relationship between Speed and Flux:**
From the EMF equation, $E_g \propto \phi N$. If the flux $\phi$ is kept constant, then $E_g \propto N$. If the speed $N$ is kept constant, then $E_g \propto \phi$.

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding the EMF equation requires knowledge of the machine's parameters ($P, \phi, Z, N, A$), which relates to its construction.
*   **CO2 (K3):** Analyzing performance under load requires understanding the generated EMF and its relationship with speed and flux, which is crucial for load calculations.

---

### **4. Numerical Problems and Examples**

Let's work through some examples to solidify the understanding of the EMF equation.

**Example 1:**

A 4-pole DC generator has an armature winding with 50 conductors. The flux per pole is 0.02 Wb. If the armature is rotated at 1200 RPM, calculate the generated EMF if the winding is (a) lap-connected and (b) wave-connected.

**Given:**
*   $P = 4$
*   $Z = 50$
*   $\phi = 0.02$ Wb
*   $N = 1200$ RPM

**Formula:** $E_g = \frac{P \phi Z N}{60A}$

**(a) Lap-connected armature:**
For lap winding, $A = P = 4$.
$E_g = \frac{4 \times 0.02 \times 50 \times 1200}{60 \times 4}$
$E_g = \frac{4 \times 0.02 \times 50 \times 1200}{240}$
$E_g = \frac{480}{240} = 160$ Volts.

**(b) Wave-connected armature:**
For wave winding, $A = 2$.
$E_g = \frac{4 \times 0.02 \times 50 \times 1200}{60 \times 2}$
$E_g = \frac{4 \times 0.02 \times 50 \times 1200}{120}$
$E_g = \frac{480}{120} = 320$ Volts.

---

**Example 2:**

A DC generator has 200 conductors on its armature. The machine is lap-wound with 4 poles. The flux per pole is 0.01 Wb. What is the speed of the generator if it generates an EMF of 200 V?

**Given:**
*   $Z = 200$
*   $P = 4$
*   $\phi = 0.01$ Wb
*   $E_g = 200$ V
*   Lap-wound, so $A = P = 4$

**Formula:** $E_g = \frac{P \phi Z N}{60A}$

$200 = \frac{4 \times 0.01 \times 200 \times N}{60 \times 4}$
$200 = \frac{8 \times N}{240}$
$200 = \frac{N}{30}$
$N = 200 \times 30 = 6000$ RPM.

---

**Example 3:**

A wave-wound armature has 60 slots and each slot contains 4 conductors. If the armature is driven at 900 RPM, and the flux per pole is 0.05 Wb, calculate the generated EMF for a 4-pole DC generator.

**Given:**
*   Number of slots = 60
*   Conductors per slot = 4
*   Total conductors, $Z = 60 \times 4 = 240$
*   $N = 900$ RPM
*   $\phi = 0.05$ Wb
*   $P = 4$
*   Wave-wound, so $A = 2$

**Formula:** $E_g = \frac{P \phi Z N}{60A}$

$E_g = \frac{4 \times 0.05 \times 240 \times 900}{60 \times 2}$
$E_g = \frac{4 \times 0.05 \times 240 \times 900}{120}$
$E_g = \frac{432000}{120} = 3600$ Volts.

---

### **5. Practice Questions/Exercises**

1.  A 6-pole DC generator has 500 armature conductors. It is wave-wound. If the flux per pole is 0.04 Wb and the armature is rotating at 1000 RPM, calculate the induced EMF.
    *   **Answer:** $E_g = \frac{6 \times 0.04 \times 500 \times 1000}{60 \times 2} = 10000$ Volts.

2.  A 4-pole DC generator with an armature containing 400 conductors is lap-connected. If the flux per pole is 0.025 Wb, find the speed at which the generator must be rotated to produce an induced EMF of 240 V.
    *   **Answer:** $N = \frac{240 \times 60 \times 4}{4 \times 0.025 \times 400} = 1440$ RPM.

3.  A DC generator has 10 poles and its armature is lap-wound with 1200 conductors. If the armature is driven at 500 RPM and the flux per pole is 0.08 Wb, what is the total EMF generated?
    *   **Answer:** $E_g = \frac{10 \times 0.08 \times 1200 \times 500}{60 \times 10} = 8000$ Volts.

4.  A 2-pole DC generator has 300 armature conductors. Calculate the generated EMF when it is driven at 1500 RPM, given that the flux per pole is 0.01 Wb. The armature is wave-wound.
    *   **Answer:** $E_g = \frac{2 \times 0.01 \times 300 \times 1500}{60 \times 2} = 750$ Volts.

---

### **6. Important Points to Remember**

*   **Princ:** DC generators operate on the principle of electromagnetic induction (Faraday's Law).
*   **Output:** The induced EMF in the armature is AC, which is converted to DC using a commutator.
*   **EMF Equation:** $E_g = \frac{P \phi Z N}{60A}$
    *   $P$: Number of poles
    *   $\phi$: Flux per pole (Wb)
    *   $Z$: Total number of armature conductors
    *   $N$: Speed of armature (RPM)
    *   $A$: Number of parallel paths in armature winding
*   **Winding Types:**
    *   **Lap Winding:** $A = P$. Suitable for high current, low voltage applications.
    *   **Wave Winding:** $A = 2$. Suitable for low current, high voltage applications.
*   **EMF Variation:** Generated EMF is directly proportional to flux per pole ($\phi$) and speed ($N$), provided other factors are constant.

---

### **7. Course Outcome Alignment**

*   **CO1 (K2):** This topic directly addresses the constructional aspects by defining parameters like the number of poles ($P$), armature conductors ($Z$), and the implications of different winding types ($A$) on the EMF equation.
*   **CO2 (K3):** Understanding the EMF equation is fundamental to analyzing the performance of a DC generator under various conditions. For example, if load demands a certain voltage, the required speed or field flux can be determined. This is the basis for load analysis.

---
