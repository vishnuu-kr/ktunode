---
title: "Armature reaction - cross magnetising & demagnetising effect (computation of ampere-turns not required) – compensating winding – interpoles – commutation (concept only) – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 1: Constructional details of dc machines "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b21"
status: "completed"
scrapedAt: "2026-05-23T16:12:16.474Z"
---
# DC MACHINES & TRANSFORMERS - Module 1: Constructional Details of DC Machines

## Topic: Armature Reaction, Commutation, Compensating Windings, and Interpoles

---

### **Introduction**

This module delves into the crucial aspects of DC machines that influence their operation and performance, particularly focusing on the effects of the armature current on the main magnetic field and the process of commutation. Understanding these phenomena is essential for analyzing and predicting the behavior of DC generators and motors.

---

### **1. Armature Reaction**

**Definition:** Armature reaction refers to the effect of the magnetic field produced by the armature current on the magnetic field produced by the main field poles of a DC machine.

*   **Key Concepts:**
    *   The armature winding, carrying current, acts as a series of current loops.
    *   Each current loop produces its own magnetic field.
    *   This magnetic field interacts with the main field flux produced by the field poles.
    *   The resultant magnetic field distribution in the air gap is modified due to this interaction.

*   **Types of Armature Reaction:**
    *   **Demagnetizing Effect:** This effect weakens the main field flux.
    *   **Cross-Magnetizing Effect:** This effect distorts the main field flux, causing it to bulge outwards between the poles.

*   **Visual Representation (Conceptual):**
    *   Imagine the main field flux lines as straight and uniform between the North and South poles.
    *   When armature current flows, it generates its own magnetic field.
    *   The demagnetizing effect acts in opposition to the main field, thinning the flux lines.
    *   The cross-magnetizing effect causes the flux lines to bend towards the trailing pole tips and away from the leading pole tips.

*   **Impact on DC Machines:**
    *   **Generators:**
        *   Demagnetizing effect reduces the generated EMF.
        *   Cross-magnetizing effect can lead to sparking at the commutator.
    *   **Motors:**
        *   Demagnetizing effect reduces the torque.
        *   Cross-magnetizing effect can lead to sparking at the commutator.

*   **Reference Textbooks:**
    *   **P.S. Bimbhra (Chapter 5: Armature Reaction and Commutation):** Provides a detailed explanation of the magnetic field produced by armature conductors and its interaction with the main field.
    *   **D.P. Kothari & I.J. Nagrath (Chapter 5: Armature Reaction):** Explains the concept of armature flux and its components, as well as the demagnetizing and cross-magnetizing effects.
    *   **J.B. Gupta (Chapter 5: Armature Reaction and Commutation):** Offers a clear conceptual understanding of how armature currents affect the magnetic field in the air gap.

*   **Important Point:** Armature reaction is an inherent phenomenon in DC machines and cannot be eliminated entirely. However, its effects can be minimized or compensated for.

---

### **2. Compensating Windings**

**Definition:** Compensating windings are a series of conductors embedded in slots on the pole faces of the DC machine, connected in series with the armature winding. They are designed to counteract the cross-magnetizing effect of the armature reaction.

*   **Purpose:** To neutralize the cross-magnetizing effect of the armature reaction, especially under heavy loads and at high speeds.
*   **Placement:** Embedded in slots on the pole faces, typically on the main poles.
*   **Connection:** Connected in series with the armature winding.
*   **Operation:** The current in the compensating winding flows in such a direction that it produces a magnetic field that opposes and cancels out the cross-magnetizing field produced by the armature conductors.
*   **Effect:**
    *   Eliminates or significantly reduces the cross-magnetizing effect.
    *   Helps maintain a uniform flux distribution in the air gap.
    *   Reduces sparking at the commutator.

*   **Reference Textbooks:**
    *   **P.S. Bimbhra (Chapter 5):** Discusses the construction and function of compensating windings in detail.
    *   **D.P. Kothari & I.J. Nagrath (Chapter 5):** Explains how compensating windings are used to nullify the cross-magnetizing ampere-turns.
    *   **K Murugesh Kumar (Chapter 5: Armature Reaction and Commutation):** Provides insights into the design and placement of compensating windings.

*   **Important Point:** Compensating windings are primarily effective against the cross-magnetizing effect and do not fully counteract the demagnetizing effect.

---

### **3. Interpoles**

**Definition:** Interpoles (also known as commutating poles) are small auxiliary poles placed midway between the main poles, on the interpolar axis. They are connected in series with the armature and are designed to neutralize the armature reaction and improve commutation.

*   **Purpose:**
    *   To neutralize the demagnetizing ampere-turns in the interpolar region.
    *   To produce a small counter-flux at the commutator surface that aids in the reversal of current in the short-circuited coil (improving commutation).
*   **Placement:** Located on the interpolar axis (the neutral axis).
*   **Connection:** Connected in series with the armature winding.
*   **Operation:**
    *   The polarity of an interpole is the same as the polarity of the main pole ahead of it in the direction of rotation of the armature.
    *   The magnetic field produced by the interpole in the interpolar region opposes the armature flux in that region, thereby neutralizing the demagnetizing effect and reducing sparking.
    *   The interpole also generates a voltage in the short-circuited coil, which helps to reverse the current in the coil more rapidly and smoothly. This voltage is called the **interpole voltage** or **emfs of reversal**.

*   **Reference Textbooks:**
    *   **P.S. Bimbhra (Chapter 5):** Explains the principle of operation of interpoles and their role in improving commutation.
    *   **D.P. Kothari & I.J. Nagrath (Chapter 5):** Provides a comprehensive explanation of how interpoles counteract armature demagnetizing AT and facilitate spark-free commutation.
    *   **J.B. Gupta (Chapter 5):** Illustrates the magnetic field distribution with and without interpoles.

*   **Important Point:** Interpoles are highly effective in improving commutation and are commonly used in modern DC machines. However, they are most effective at their designed speed and load.

---

### **4. Commutation**

**Definition:** Commutation is the process of reversing the direction of current in the armature coils as they move from one commutator segment to the next. This reversal is necessary for the continuous operation of a DC machine.

*   **Concept:**
    *   As the armature rotates, each coil passes under a succession of main poles of alternating polarity.
    *   When a coil is connected to a commutator segment, it carries current in one direction.
    *   As the commutator rotates, the brushes move to the next segment, effectively connecting the coil to the opposite polarity.
    *   During this transition, the coil is momentarily short-circuited by the brushes.
    *   The current in the short-circuited coil needs to be reversed from its initial value to the value in the opposite direction.

*   **Ideal Commutation:** In an ideal scenario, the current reversal would be linear and smooth, with no sparking at the brushes.

*   **Difficulties in Commutation:**
    *   **Self-Inductance of the Coil:** The short-circuited coil possesses self-inductance. When the current tries to reverse, the self-inductance opposes this change, leading to a voltage of self-induction.
    *   **Armature Reaction:** The demagnetizing effect of armature reaction can further complicate the current reversal process.
    *   **Sparking:** If the current reversal is not completed before the coil comes into contact with the next commutator segment, a spark will occur between the brush and the commutator. This sparking can damage the commutator and brushes, reduce the efficiency of the machine, and limit the maximum output.

*   **Methods to Improve Commutation:**
    *   **Interpoles:** (As discussed above) Produce an emf that aids in reversing the current.
    *   **Compole Windings:** (Similar to interpoles but embedded in pole faces)
    *   **Brush Shifting:** Moving the brushes ahead of or behind the geometric neutral axis. (This method is less effective and can lead to other issues).
    *   **Resistance Commutation:** Using brushes with high resistance material.

*   **Reference Textbooks:**
    *   **P.S. Bimbhra (Chapter 5):** Provides a thorough explanation of the process of commutation and the factors affecting it.
    *   **D.P. Kothari & I.J. Nagrath (Chapter 5):** Explains the inductive voltage and how interpoles provide the required e.m.f. for commutation.
    *   **J.B. Gupta (Chapter 5):** Focuses on the concept of self-induced emf and the methods to achieve satisfactory commutation.

*   **Important Point:** Effective commutation is critical for the reliable and efficient operation of DC machines.

---

### **5. Numerical Problems**

While computation of ampere-turns is not required for understanding the concepts, numerical problems are often used to quantify the effects and evaluate the performance improvements achieved by compensating windings and interpoles.

**Example Problem Types (Conceptual Understanding):**

1.  **Armature Reaction Effects:** Problems might involve calculating the reduction in terminal voltage of a generator or the increase in speed of a motor due to the demagnetizing effect of armature reaction under a given load.
2.  **Interpole/Compensating Winding Design (Conceptual):** While not calculating AT, problems might ask to determine the number of interpole turns required to neutralize the demagnetizing AT of the armature, given the armature current and the number of conductors.
3.  **Commutation Improvement:** Problems could focus on calculating the voltage of self-induction in a coil during commutation and determining the required interpolar voltage to achieve spark-free commutation.

---

### **Practice Questions & Answers**

**Question 1:**
What is the primary purpose of compensating windings in a DC machine?
a) To reduce the speed of the motor.
b) To neutralize the cross-magnetizing effect of armature reaction.
c) To increase the generated voltage in a generator.
d) To improve the efficiency of the field winding.

**Answer:**
b) To neutralize the cross-magnetizing effect of armature reaction.

**Question 2:**
Interpoles are placed on the:
a) Main poles.
b) Commutator segments.
c) Interpolar axis.
d) Armature core.

**Answer:**
c) Interpolar axis.

**Question 3:**
The demagnetizing effect of armature reaction tends to ____ the main field flux.
a) Strengthen
b) Weaken
c) Distort
d) Eliminate

**Answer:**
b) Weaken

**Question 4:**
What phenomenon is the main concern during the process of commutation?
a) Voltage regulation.
b) Torque production.
c) Sparking at the brushes.
d) Field weakening.

**Answer:**
c) Sparking at the brushes.

**Question 5:**
Explain the difference between the cross-magnetizing and demagnetizing effects of armature reaction.

**Answer:**
The **cross-magnetizing effect** distorts the main magnetic field, causing it to bulge between the poles. The **demagnetizing effect** weakens the main magnetic field by producing flux that opposes the main field flux.

---

### **Alignment with Course Outcomes**

*   **CO1: Describe the constructional details of DC machines (Knowledge Level: K2)**
    *   This module directly contributes by explaining the function and placement of interpoles and compensating windings, which are constructional features. The conceptual understanding of armature reaction also relates to the internal workings.

*   **CO2: Analyse the performance DC generator under various load conditions (Knowledge Level: K3)**
    *   Understanding armature reaction (demagnetizing effect) is crucial for analyzing how the generated voltage is affected under load. The role of interpoles and compensating windings in improving commutation and maintaining voltage stability under load is also covered.

*   **CO3: Analyse the performance DC motor under various load conditions (Knowledge Level: K3)**
    *   Similarly, armature reaction affects motor torque. The demagnetizing effect reduces the field strength, impacting motor speed. The improvement in commutation by interpoles and compensating windings ensures smooth operation and prevents sparking under load.

*   **CO4: Analyse the performance of 1-phase transformer and auto-transformer under various load conditions. (Knowledge Level: K3)**
    *   While this module focuses on DC machines, the underlying principles of magnetic field interaction and flux distortion are analogous to transformer operation, particularly in understanding leakage flux and its effects. However, the direct relevance is primarily to DC machines.

*   **CO5: Describe the constructional details and operation of 3-phase transformers. (Knowledge Level: K2)**
    *   Similar to CO4, the foundational concepts of magnetic fields and their interaction are transferable, but the direct application is to DC machines.

---

### **Key Points to Remember**

*   **Armature Reaction:** Inherent interaction of armature flux with main field flux, causing demagnetization and cross-magnetization.
*   **Demagnetizing Effect:** Weakens the main field flux, reducing generated EMF (generator) or torque (motor).
*   **Cross-Magnetizing Effect:** Distorts the main field, leading to non-uniform flux distribution and potential sparking.
*   **Compensating Windings:** Placed on pole faces, cancel the cross-magnetizing effect.
*   **Interpoles:** Placed on the interpolar axis, neutralize demagnetizing effect and aid commutation by providing a counter-flux.
*   **Commutation:** Process of current reversal in armature coils; affected by self-inductance and armature reaction. Sparking is a major problem during commutation.
*   **Interpoles are crucial for improving commutation and ensuring spark-free operation.**

---

This comprehensive study note covers the essential aspects of armature reaction, compensating windings, interpoles, and commutation in DC machines, aligning with the provided learning outcomes and course objectives. The conceptual explanations and references to standard textbooks will aid in a thorough understanding of this critical module.
