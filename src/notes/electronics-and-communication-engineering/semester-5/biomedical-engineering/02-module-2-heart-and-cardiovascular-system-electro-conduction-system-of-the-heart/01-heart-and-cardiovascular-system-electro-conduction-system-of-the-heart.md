---
title: "Heart and cardiovascular system: electro conduction system of the heart"
subject: "BIOMEDICAL ENGINEERING"
module: "Module 2: Heart and cardiovascular system: electro conduction system of the heart"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe9d0"
status: "completed"
scrapedAt: "2026-05-23T17:54:02.099Z"
---
# BIOMEDICAL ENGINEERING: Module 2 - Heart and Cardiovascular System: Electroconduction System of the Heart

## Introduction

The human heart is a remarkable organ that functions as a sophisticated pump, essential for circulating blood throughout the body. Its rhythmic contraction and relaxation are precisely controlled by a specialized electrical conduction system. Understanding this system is fundamental to biomedical engineering, as it forms the basis for diagnosing and treating various cardiac conditions through electrocardiography (ECG) and other related technologies.

This module delves into the intricacies of the heart's electroconduction system, its electrical properties, and how these are harnessed for diagnostic and therapeutic purposes.

---

## Learning Outcomes

By the end of this module, you will be able to:

*   Explain the electrical properties of cardiac cells.
*   Describe the components of the heart's electroconduction system and their sequence of activation.
*   Understand the generation and propagation of electrical impulses in the heart.
*   Relate the electrical activity of the heart to the electrocardiogram (ECG).
*   Recognize common abnormalities in the electroconduction system and their impact on cardiac function.
*   Appreciate the role of biomedical instrumentation in assessing and managing cardiac electrical activity.

---

## Key Concepts and Definitions

*   **Myocardium:** The muscular tissue of the heart, responsible for its contraction.
*   **Action Potential:** A rapid change in the electrical potential across the membrane of a nerve or muscle cell, which occurs when it is stimulated, serving to transmit nerve impulses or to cause muscle contraction.
*   **Depolarization:** The process where the resting membrane potential of a cell becomes less negative (more positive) due to the influx of positive ions. This triggers muscle contraction.
*   **Repolarization:** The process where the membrane potential of a cell returns to its resting state after depolarization, due to the efflux of positive ions or influx of negative ions.
*   **Resting Membrane Potential:** The electrical potential difference across the plasma membrane of a cell when it is not stimulated, typically negative inside relative to outside.
*   **Automaticity:** The ability of certain cells in the heart to spontaneously generate electrical impulses without external stimulation.
*   **Conductivity:** The ability of cardiac tissue to conduct electrical impulses from one cell to another.
*   **Refractory Period:** The period during which a cell is unable to initiate another action potential, ensuring that the heart muscle contracts in a coordinated and unidirectional manner.
*   **Electrocardiogram (ECG/EKG):** A graphical representation of the electrical activity of the heart over time, measured on the surface of the body.

---

## 1. Electrical Properties of Cardiac Cells

Cardiac muscle cells possess unique electrical properties that enable the coordinated pumping action of the heart.

### 1.1. Resting Membrane Potential

*   **Mechanism:** Maintained by the sodium-potassium pump and the differential permeability of the cell membrane to ions, primarily **potassium (K+)**. At rest, the inside of the cell is negative relative to the outside due to a higher concentration of K+ inside the cell and the outward leak of K+ ions.
*   **Typical Value:** Around -90 mV.
*   **Reference:** Khandpur, R. S. (Third edition) describes the ionic basis of resting potential, emphasizing the role of ion channels and pumps.

### 1.2. Action Potential in Cardiac Muscle Cells

Cardiac action potentials differ from those in skeletal muscle and nerve cells due to the presence of specialized ion channels and a plateau phase.

*   **Phases of the Cardiac Action Potential (Ventricular Myocyte):**
    *   **Phase 0 (Rapid Depolarization):** Opening of voltage-gated **sodium (Na+) channels**. Rapid influx of Na+ causes a rapid rise in membrane potential. This is the most crucial phase for excitation-contraction coupling. (Corresponds to the QRS complex on ECG).
    *   **Phase 1 (Initial Repolarization):** Transient inactivation of Na+ channels and opening of transient outward **potassium (K+) channels**. Small outward K+ current causes a brief dip in potential.
    *   **Phase 2 (Plateau Phase):** Opening of **calcium (Ca2+) channels** and simultaneous inactivation of Na+ channels. Inward Ca2+ current balances the outward K+ current, maintaining a relatively stable, depolarized potential. This prolonged depolarization is essential for allowing sufficient time for blood ejection from the ventricles.
    *   **Phase 3 (Rapid Repolarization):** Inactivation of Ca2+ channels and opening of delayed outward **potassium (K+) channels**. Outward K+ current dominates, returning the membrane potential to its negative resting value. (Corresponds to the T wave on ECG).
    *   **Phase 4 (Resting Membrane Potential):** The cell is at its resting potential, maintained by the sodium-potassium pump.

*   **Automaticity of Sinoatrial (SA) and Atrioventricular (AV) Nodes:**
    *   Unlike ventricular myocytes, the SA and AV nodes have **"funny current" (If)** channels, which are permeable to both Na+ and K+.
    *   These channels open when the membrane potential is negative, causing a slow, gradual depolarization during diastole (Phase 4).
    *   Once the threshold potential is reached, voltage-gated Ca2+ channels open, leading to rapid depolarization (Phase 0), causing the SA and AV nodes to act as pacemakers.
    *   **Reference:** Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004) provides detailed diagrams and explanations of these ionic mechanisms.

*   **Coupling:** The electrical excitation (action potential) triggers mechanical contraction through a process called **excitation-contraction coupling**, where the influx of calcium ions during the plateau phase leads to the release of more calcium from the sarcoplasmic reticulum, initiating the sliding filament mechanism of muscle contraction.

---

## 2. The Electroconduction System of the Heart

The electroconduction system is a specialized network of cardiac cells responsible for generating and propagating the electrical impulse that initiates and coordinates the heart's contractions.

### 2.1. Components of the Conduction System

The impulse originates in the sinoatrial (SA) node and travels through the following components in a specific sequence:

1.  **Sinoatrial (SA) Node:**
    *   **Location:** Upper wall of the right atrium, near the superior vena cava.
    *   **Function:** The primary pacemaker of the heart. It possesses the highest rate of automaticity, initiating the electrical impulse at a rate of 60-100 beats per minute (bpm).
    *   **Characteristics:** Specialized cardiac cells with a less negative resting potential and a slow depolarization phase (Phase 4).
    *   **Reference:** Webster, J. G. (5th edition, 2020) discusses the SA node as the intrinsic pacemaker and its role in initiating the cardiac cycle.

2.  **Internodal Pathways:**
    *   **Function:** Conduct the electrical impulse from the SA node to the AV node, typically through three pathways in the atrial walls (anterior, middle, and posterior). These pathways allow for rapid spread of excitation across the atria, causing atrial contraction.

3.  **Atrioventricular (AV) Node:**
    *   **Location:** Floor of the right atrium, near the interatrial septum.
    *   **Function:** Receives the impulse from the atria and delays its transmission to the ventricles. This delay is crucial to allow the atria to complete their contraction and empty blood into the ventricles before ventricular contraction begins.
    *   **Characteristics:** Slower conduction velocity compared to internodal pathways and SA node due to fewer gap junctions and smaller cell size. Its automaticity is lower than the SA node (40-60 bpm).
    *   **Reference:** Carr, J. J. (4th edition, 2020) elaborates on the AV node's function in delaying the impulse, which is vital for efficient ventricular filling.

4.  **Bundle of His (AV Bundle):**
    *   **Location:** Extends from the AV node down through the interventricular septum.
    *   **Function:** Carries the electrical impulse from the AV node into the ventricles. It is the only electrical connection between the atria and ventricles.

5.  **Bundle Branches:**
    *   **Right Bundle Branch:** Conducts the impulse down the right side of the interventricular septum.
    *   **Left Bundle Branch:** Conducts the impulse down the left side of the interventricular septum. The left bundle branch then further divides into anterior and posterior fascicles.
    *   **Function:** Distribute the impulse rapidly to both ventricles, ensuring coordinated ventricular depolarization.

6.  **Purkinje Fibers:**
    *   **Location:** Terminal network of fibers that spread throughout the ventricular myocardium from the bundle branches.
    *   **Function:** Conduct the impulse to the ventricular muscle cells, triggering their contraction. They have the fastest conduction velocity in the heart, ensuring rapid and synchronized ventricular depolarization. Their automaticity is the lowest (20-40 bpm), meaning they only act as pacemakers if the SA and AV nodes fail.
    *   **Reference:** Aston, R. (1st edition, 2007) highlights the specialized structure and rapid conduction properties of Purkinje fibers.

### 2.2. Sequence of Electrical Activation

The normal sequence of electrical activation is as follows:

1.  SA Node fires.
2.  Atrial depolarization (spreading through internodal pathways).
3.  AV node delay.
4.  Ventricular depolarization begins in the septum (Bundle of His and Bundle Branches).
5.  Ventricular depolarization spreads through Purkinje fibers to the ventricular myocardium.
6.  Ventricular repolarization.

### 2.3. Automaticity and Rhythmicity

*   **Automaticity:** The ability of cardiac cells to spontaneously generate action potentials. This property is most prominent in the SA node.
*   **Rhythmicity:** The regular recurrence of these automatic impulses.
*   **Pacemaker Hierarchy:** The SA node is the primary pacemaker. If it fails, the AV node can take over (junctional rhythm), and if both fail, the Purkinje fibers can act as a latent pacemaker (ventricular rhythm). However, the inherent rates decrease down this hierarchy.
*   **Role of the Autonomic Nervous System:**
    *   **Sympathetic Nervous System:** Increases heart rate and contractility by releasing norepinephrine.
    *   **Parasympathetic Nervous System:** Decreases heart rate by releasing acetylcholine.

---

## 3. The Electrocardiogram (ECG)

The ECG is a non-invasive diagnostic tool that records the electrical activity of the heart as voltage changes over time. It provides valuable information about the heart's rhythm, conduction, and the state of the cardiac muscle.

### 3.1. ECG Components and Their Correlation to Electrical Events

*   **P wave:** Represents atrial depolarization.
*   **PR Interval:** The time from the beginning of atrial depolarization to the beginning of ventricular depolarization. It includes the AV node delay.
*   **QRS Complex:** Represents ventricular depolarization. The delay in the AV node is reflected in the PR interval.
*   **ST Segment:** Represents the period when the ventricles are fully depolarized (plateau phase of ventricular action potential).
*   **T wave:** Represents ventricular repolarization.
*   **QT Interval:** The duration of ventricular electrical activity, from the beginning of ventricular depolarization to the end of ventricular repolarization.

### 3.2. Standard ECG Leads

*   **Limb Leads:** (I, II, III, aVR, aVL, aVF) record electrical activity in the frontal plane.
*   **Precordial (Chest) Leads:** (V1-V6) record electrical activity in the horizontal plane.
*   **Reference:** Khandpur (Third edition) and Cromwell et al. (2nd Edition, 2004) detail the placement of electrodes and the information obtained from different ECG leads.

### 3.3. Significance of ECG in Diagnosis

*   **Heart Rate and Rhythm:** Can identify bradycardia (slow heart rate), tachycardia (fast heart rate), and arrhythmias (irregular heart rhythms).
*   **Conduction Abnormalities:** Can detect blocks in the conduction system (e.g., AV block, bundle branch blocks).
*   **Myocardial Ischemia and Infarction:** Changes in the ST segment and T wave can indicate reduced blood flow or damage to the heart muscle.
*   **Chamber Hypertrophy:** Enlargement of the atria or ventricles can cause characteristic ECG changes.
*   **Electrolyte Imbalances:** Can sometimes be reflected in ECG abnormalities.

---

## 4. Abnormalities in the Electroconduction System

Disruptions in the normal functioning of the electroconduction system can lead to various cardiac abnormalities.

### 4.1. Heart Rate and Rhythm Abnormalities (Arrhythmias)

*   **Bradycardia:** SA node rate < 60 bpm.
*   **Tachycardia:** SA node rate > 100 bpm.
*   **Atrial Fibrillation:** Rapid, irregular atrial electrical activity, leading to irregular ventricular response.
*   **Ventricular Tachycardia:** Rapid, abnormal rhythm originating in the ventricles.
*   **Pacemaker Malfunction:** Failure of the SA node or other pacemakers to initiate impulses appropriately.

### 4.2. Conduction Blocks

*   **SA Node Block:** Failure of SA node impulses to reach the atria.
*   **AV Node Block:**
    *   **First-degree AV block:** Prolonged PR interval.
    *   **Second-degree AV block:** Some atrial impulses fail to conduct to the ventricles (e.g., Wenckebach, Mobitz Type II).
    *   **Third-degree (Complete) AV block:** No atrial impulses conduct to the ventricles; the AV junction or ventricles take over as pacemakers.
*   **Bundle Branch Block:** Impaired conduction through the right or left bundle branch, leading to asynchronous ventricular depolarization. This is often visible as widening of the QRS complex on the ECG.
*   **Reference:** Webster (5th edition, 2020) provides extensive information on interpreting various ECG abnormalities, including different types of blocks and arrhythmias.

### 4.3. Myoelectric Abnormalities

*   While the primary focus of this topic is the electroconduction system, it's worth noting that myoelectric potentials are generated by muscle activity. In the context of the heart, **myocardial infarction** can lead to alterations in the electrical properties of the damaged tissue, affecting both conduction and the resulting ECG.

---

## 5. Biomedical Instrumentation for Cardiac Assessment

Biomedical instrumentation plays a crucial role in diagnosing and monitoring cardiac electrical activity.

### 5.1. Electrocardiograph (ECG Machine)

*   **Princ of Operation:** Detects and amplifies the small electrical signals produced by the heart's activity. These signals are then filtered, processed, and displayed as a waveform on a screen or paper.
*   **Components:** Electrodes, amplifier, filter, signal conditioner, display, and recorder.
*   **Reference:** Khandpur (Third edition) provides detailed schematics and operational principles of ECG machines. Cromwell et al. (2nd Edition, 2004) also offer insights into the instrumentation aspects.

### 5.2. Holter Monitor

*   **Function:** A portable ECG recorder that continuously monitors and records a patient's heart rhythm for 24-48 hours or longer.
*   **Application:** Used to detect intermittent arrhythmias that might not be captured by a standard 12-lead ECG.

### 5.3. Implantable Cardiac Pacemakers and Defibrillators

*   **Pacemakers:** Devices implanted to provide electrical pulses to the heart when its natural pacemaker is malfunctioning or the conduction system is blocked. They can sense the heart's electrical activity and deliver stimulation as needed.
*   **Implantable Cardioverter-Defibrillators (ICDs):** Similar to pacemakers but can also deliver a high-energy shock to correct life-threatening ventricular arrhythmias like ventricular tachycardia and fibrillation.
*   **Reference:** Carr (4th edition, 2020) and Aston (1st edition, 2007) discuss the principles and applications of cardiac implantable electronic devices.

### 5.4. Electrophysiology Studies (EPS)

*   **Function:** An invasive procedure where catheters with electrodes are inserted into the heart to record electrical activity directly from within the heart chambers and to stimulate the heart to assess conduction pathways and induce arrhythmias.
*   **Application:** Used to diagnose the cause of arrhythmias and to guide treatment, such as catheter ablation.

---

## 6. Relating to Course Outcomes

This module directly addresses the following course outcomes:

*   **CO1: Outline the basic bioelectric potentials and their implications in diagnostics.**
    *   *Covered by: Sections 1 (Electrical Properties of Cardiac Cells) and 3 (The Electrocardiogram).* The action potential, resting membrane potential, and their ECG manifestations are explained.
*   **CO2: Summarize the principles used for diagnosis of abnormalities in the cardiovascular system.**
    *   *Covered by: Sections 3 (The Electrocardiogram) and 4 (Abnormalities in the Electroconduction System).* ECG interpretation for arrhythmias, blocks, and other cardiac issues is discussed.
*   **CO3: Identify the techniques used for diagnosis and therapy in the neuromuscular and myoelectric systems.**
    *   *Partially covered by: Section 5 (Biomedical Instrumentation).* While the focus is cardiac conduction, the principles of ECG, Holter monitoring, and implantable devices are relevant diagnostic and therapeutic techniques. Myoelectric aspects are less emphasized in this specific topic but are broadly relevant to neuromuscular systems.
*   **CO4: Illustrate the principle and working of different types of bio medical equipment/devices.**
    *   *Covered by: Section 5 (Biomedical Instrumentation).* ECG machines, Holter monitors, pacemakers, and ICDs are explained.
*   **CO5: State various diagnostic medical imaging techniques.**
    *   *Not directly covered by this specific topic.* This module focuses on electrophysiology rather than imaging modalities like X-ray, CT, or MRI, which are typically covered in separate modules.

---

## Important Points to Remember

*   The heart's electrical activity is driven by the movement of ions across cell membranes, leading to action potentials.
*   The SA node is the natural pacemaker, initiating the impulse that spreads through the specialized conduction system.
*   The AV node's delay is crucial for efficient ventricular filling.
*   The ECG is a graphical representation of the heart's electrical activity, with specific waves and intervals corresponding to different electrical events.
*   Abnormalities in the conduction system can lead to arrhythmias and conduction blocks, detectable by ECG.
*   Biomedical instruments like ECG machines and pacemakers are essential for diagnosing and managing cardiac electrical disorders.

---

## Practice Questions and Exercises

**Question 1:**
Describe the role of the SA node in the electroconduction system of the heart. What is its intrinsic rate of firing?

**Answer:**
The SA node is the primary pacemaker of the heart. It initiates the electrical impulse that triggers the coordinated contraction of the atria and ventricles. Its intrinsic rate of firing is between 60 and 100 beats per minute (bpm) under normal physiological conditions.

**Question 2:**
What is the significance of the AV node's delay in the normal cardiac cycle?

**Answer:**
The AV node's delay is crucial for efficient ventricular filling. It slows down the conduction of the electrical impulse from the atria to the ventricles, allowing the atria to complete their contraction and pump blood into the ventricles before the ventricles begin to contract. This ensures that the maximum amount of blood is delivered to the ventricles.

**Question 3:**
Match the ECG component with the corresponding electrical event:
    a. P wave
    b. QRS Complex
    c. T wave

    1. Ventricular Repolarization
    2. Ventricular Depolarization
    3. Atrial Depolarization

**Answer:**
    a. 3. Atrial Depolarization
    b. 2. Ventricular Depolarization
    c. 1. Ventricular Repolarization

**Question 4:**
Explain the difference between a first-degree AV block and a third-degree AV block, as observed on an ECG.

**Answer:**
*   **First-degree AV block:** Characterized by a consistently prolonged PR interval (greater than 0.20 seconds). All atrial impulses are conducted to the ventricles, but with a delay.
*   **Third-degree (Complete) AV block:** Characterized by a complete absence of conduction between the atria and ventricles. The atria and ventricles beat independently. On an ECG, P waves will not be related to QRS complexes, and there will be a slow, escape rhythm originating from either the AV junction or the ventricles.

**Question 5:**
A patient presents with a very slow heart rate (e.g., 35 bpm) with intermittently dropped beats and a widened QRS complex on ECG. What type of conduction abnormality might this suggest? Briefly explain the potential implications for cardiac output.

**Answer:**
This presentation might suggest a **high-grade AV block (e.g., Mobitz Type II second-degree AV block or third-degree AV block)** in combination with a **bundle branch block**.
*   **Implications for Cardiac Output:** A slow heart rate (bradycardia) directly reduces cardiac output (Cardiac Output = Heart Rate x Stroke Volume). If the electrical impulse is not efficiently conducted to the ventricles (bundle branch block), ventricular contraction may be asynchronous, further reducing stroke volume. Combined, these factors can significantly impair the heart's ability to pump enough blood to meet the body's needs, leading to symptoms like dizziness, fatigue, and syncope.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Further Reading and References

*   **Handbook of Biomedical Instrumentation by R. S. Khandpur (Tata Mc Graw Hill, Third edition):** Excellent for detailed instrumentation principles and signal acquisition.
*   **Biomedical Instrumentation and Measurement by Leslie Cromwell, Fred J. Weibell, Erich A. Pfeiffer (PHI, 2nd Edition, 2004):** Comprehensive coverage of physiological signals and instrumentation, including the cardiovascular system.
*   **Medical Instrumentation application and design by John G Webster (John Wiley, 5th edition 2020):** A classic and authoritative text with in-depth coverage of medical devices and their physiological underpinnings.
*   **Introduction to Biomedical Equipment Technology by J. J. Carr (Pearson Education, 4th edition 2020):** Provides a broad overview of biomedical equipment, with relevant sections on cardiac devices.
*   **Principle of Biomedical Instrumentation and Measurement by Richard Aston (Merrill Education/Prentice Hall, 1st edition 2007):** Good for understanding the fundamental principles behind measurement techniques.
*   **Introduction to Biomedical Instrumentation by Barbara Christe (Cambridge University Press, 2nd edition 2017):** Offers a clear and accessible introduction to the field.