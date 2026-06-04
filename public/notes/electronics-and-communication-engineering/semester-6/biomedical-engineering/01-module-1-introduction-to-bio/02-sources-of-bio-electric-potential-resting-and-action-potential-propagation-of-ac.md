---
title: "Sources of bio-electric potential: Resting and action potential, propagation of action potentials. Various bioelectric potentials (ECG, EEG, EMG, ERG, EOG, EGG concept only.)"
subject: "BIOMEDICAL ENGINEERING"
module: "Module 1: Introduction to bio"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff08b"
status: "completed"
scrapedAt: "2026-05-23T17:59:23.855Z"
---
# BIOMEDICAL ENGINEERING: Module 1 - Introduction to Bio

## Topic: Sources of Bio-electric Potential and Various Bioelectric Potentials

---

### 1. Introduction to Bio-electric Potential

Bio-electric potentials are electrical phenomena occurring within living organisms. They arise from the movement of ions across cell membranes and are fundamental to the functioning of many biological systems, particularly the nervous and muscular systems. Understanding these potentials is crucial for diagnosing and monitoring various physiological processes and diseases.

**Key Concept:** The basis of all bio-electric potentials lies in the electrochemical gradient across cell membranes.

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 1: Introduction to Biomedical Instrumentation - discusses bio-potentials generally).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 2: Bioelectric Phenomena - provides foundational information).

---

### 2. Sources of Bio-electric Potential: Resting and Action Potential

#### 2.1 Resting Membrane Potential (RMP)

The resting membrane potential is the electrical potential difference across the plasma membrane of a neuron or muscle cell when it is in its quiescent state (not actively transmitting an impulse).

**Key Concepts & Definitions:**

*   **Plasma Membrane:** A selectively permeable barrier that controls the passage of ions and molecules into and out of the cell.
*   **Ions:** Electrically charged atoms or molecules (e.g., Na⁺, K⁺, Cl⁻, Ca²⁺).
*   **Concentration Gradient:** The difference in the concentration of a particular ion across the membrane.
*   **Electrochemical Gradient:** The combined force exerted by both the concentration gradient and the electrical gradient on an ion.
*   **Sodium-Potassium Pump (Na⁺/K⁺-ATPase):** An active transport mechanism that pumps 3 Na⁺ ions out of the cell and 2 K⁺ ions into the cell for every ATP molecule consumed. This pump is crucial for maintaining the ion gradients.
*   **Ion Channels:** Transmembrane proteins that allow specific ions to pass through the membrane. These can be passive (always open) or gated (open and close in response to stimuli).
*   **Permeability:** The ease with which ions can cross the membrane. At rest, the membrane is significantly more permeable to K⁺ than to Na⁺.

**How RMP is Established:**

1.  **Unequal Distribution of Ions:**
    *   **Inside the cell:** High concentration of K⁺, proteins (anions), and a net negative charge.
    *   **Outside the cell:** High concentration of Na⁺, Cl⁻, and a net positive charge.
2.  **Selective Membrane Permeability:** At rest, the cell membrane has many open K⁺ channels and very few open Na⁺ channels.
3.  **Outward Movement of K⁺:** Driven by its concentration gradient, K⁺ ions move out of the cell through the open K⁺ channels. This efflux of positive charge makes the inside of the cell more negative relative to the outside.
4.  **Sodium-Potassium Pump:** Continuously works to counteract the passive leakage of ions, pumping Na⁺ out and K⁺ in, thus maintaining the concentration gradients and contributing to the negative charge inside the cell.

**Typical RMP Values:**
*   Neurons: -70 mV
*   Skeletal Muscle Cells: -90 mV

**Reference:**
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 2: Bioelectric Phenomena).
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Discusses cell membrane potential as a fundamental bio-potential).

---

#### 2.2 Action Potential (AP)

An action potential is a rapid, transient, all-or-none electrical signal that occurs when a cell membrane reaches a threshold potential. It is the basis of nerve impulse transmission and muscle contraction.

**Key Concepts & Definitions:**

*   **Threshold Potential:** The membrane potential (typically around -55 mV) that, if reached, triggers an action potential.
*   **Depolarization:** A rapid increase in membrane potential (becomes less negative or more positive). This occurs due to the opening of voltage-gated Na⁺ channels.
*   **Repolarization:** A rapid decrease in membrane potential (returns to negative values). This occurs due to the inactivation of voltage-gated Na⁺ channels and the opening of voltage-gated K⁺ channels.
*   **Hyperpolarization (Undershoot):** A transient period where the membrane potential becomes more negative than the resting potential. This is due to the slow closing of voltage-gated K⁺ channels.
*   **Refractory Period:** The period during which the membrane is less excitable and cannot generate another action potential or requires a much stronger stimulus.
    *   **Absolute Refractory Period:** During depolarization and most of repolarization, when no new AP can be generated, regardless of stimulus strength.
    *   **Relative Refractory Period:** During hyperpolarization, when a stronger-than-normal stimulus is required to generate an AP.
*   **Voltage-Gated Ion Channels:** Ion channels whose opening and closing are controlled by changes in membrane potential.

**Phases of an Action Potential:**

1.  **Resting State:** Membrane potential is at RMP (-70 mV).
2.  **Depolarization:** Stimulus causes local depolarization. If the threshold potential (-55 mV) is reached:
    *   Voltage-gated Na⁺ channels open rapidly.
    *   Na⁺ rushes into the cell, causing a rapid increase in membrane potential (to about +30 mV).
3.  **Repolarization:**
    *   Voltage-gated Na⁺ channels inactivate.
    *   Voltage-gated K⁺ channels open slowly.
    *   K⁺ rushes out of the cell, causing the membrane potential to decrease back towards RMP.
4.  **Hyperpolarization (Undershoot):**
    *   Voltage-gated K⁺ channels close slowly.
    *   K⁺ efflux continues slightly longer, making the membrane potential more negative than RMP.
5.  **Return to Resting State:** Na⁺/K⁺ pump and passive K⁺ permeability restore RMP.

**All-or-None Principle:** An action potential is either generated fully or not at all. A stimulus below the threshold will not trigger an AP, while any stimulus at or above the threshold will elicit an AP of the same magnitude and duration.

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 1: Introduction to Biomedical Instrumentation - covers the basic electrical phenomena).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 2: Bioelectric Phenomena - detailed explanation of APs).
*   Webster, J. G. (3rd edition). *Medical Instrumentation: Application and Design*. John Wiley. (Chapter 2: Bioelectric Signals - provides a good overview).

---

#### 2.3 Propagation of Action Potentials

Action potentials are propagated along excitable cells (neurons and muscle fibers) without decrement, ensuring rapid transmission of signals.

**Key Concepts & Definitions:**

*   **Unidirectional Propagation:** In neurons, APs typically propagate from the cell body (axon hillock) towards the axon terminal.
*   **Continuous Conduction:** Occurs in unmyelinated axons. The action potential spreads sequentially from one segment of the axon membrane to the adjacent segment. Each new segment undergoes depolarization and repolarization. This is relatively slow.
*   **Saltatory Conduction:** Occurs in myelinated axons.
    *   **Myelin Sheath:** An insulating layer formed by glial cells (Schwann cells in the peripheral nervous system, oligodendrocytes in the central nervous system) around the axon.
    *   **Nodes of Ranvier:** Gaps in the myelin sheath where the axon membrane is exposed and contains a high concentration of voltage-gated ion channels.
    *   **Mechanism:** The action potential "jumps" from one node of Ranvier to the next. Depolarization at one node causes a sufficient electrical current to flow through the axon's interior to depolarize the next node to threshold.
    *   **Advantages:** Significantly faster and more energy-efficient than continuous conduction.

**Reference:**
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 2: Bioelectric Phenomena).
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Discusses signal propagation in excitable tissues).

---

### 3. Various Bio-electric Potentials (Concept Only)

These are electrical signals generated by specific organs or tissues, which can be measured non-invasively using electrodes placed on the body surface.

#### 3.1 Electrocardiogram (ECG/EKG)

*   **Concept:** Records the electrical activity of the heart. The synchronized depolarization and repolarization of cardiac muscle cells create electrical currents that spread through the body and can be detected by electrodes on the skin.
*   **What it Measures:** The overall electrical activity of the heart, reflecting the sequence of atrial and ventricular depolarization and repolarization.
*   **Diagnostic Implications:** Detects arrhythmias, myocardial infarction (heart attack), conduction abnormalities, chamber hypertrophy, and electrolyte imbalances.
*   **Relation to Course Outcomes:** CO1 (basic bioelectric potentials), CO2 (cardiovascular system diagnosis).

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 12: Electrocardiograph).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 10: Electrocardiography).

#### 3.2 Electroencephalogram (EEG)

*   **Concept:** Records the electrical activity of the brain, primarily originating from the cerebral cortex. It reflects the synchronous firing of large populations of neurons.
*   **What it Measures:** The collective postsynaptic potentials of cortical neurons. Different brain states (e.g., sleep, wakefulness) and brain activity patterns (e.g., alpha, beta, theta, delta waves) are associated with specific EEG rhythms.
*   **Diagnostic Implications:** Diagnoses epilepsy, sleep disorders, brain tumors, stroke, brain death, and monitors brain activity during surgery.
*   **Relation to Course Outcomes:** CO1 (basic bioelectric potentials), CO4 (bio-medical equipment/devices).

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 13: Electroencephalograph).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 11: Electroencephalography).

#### 3.3 Electromyogram (EMG)

*   **Concept:** Records the electrical activity generated by skeletal muscles during voluntary or involuntary contractions.
*   **What it Measures:** The electrical signals produced by muscle fibers when they are activated by motor neurons. These signals are often measured using needle electrodes inserted into the muscle or surface electrodes placed on the skin over the muscle.
*   **Diagnostic Implications:** Diagnoses muscle diseases (myopathies), nerve damage (neuropathies), neuromuscular junction disorders (e.g., myasthenia gravis), and radiculopathy. Also used in rehabilitation and biofeedback.
*   **Relation to Course Outcomes:** CO1 (basic bioelectric potentials), CO3 (neuromuscular and myoelectric systems diagnosis).

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 14: Electromyograph).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 12: Electromyography).

#### 3.4 Electroretinogram (ERG)

*   **Concept:** Records the electrical response of the retina to light stimulation.
*   **What it Measures:** The electrical potential generated by the various cell layers of the retina (photoreceptors, bipolar cells, ganglion cells) when exposed to a flash of light.
*   **Diagnostic Implications:** Diagnoses inherited retinal diseases (e.g., retinitis pigmentosa), metabolic retinopathies, and other conditions affecting retinal function.
*   **Relation to Course Outcomes:** CO1 (basic bioelectric potentials), CO4 (bio-medical equipment/devices).

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 16: Electrooculograph and Electroretinograph).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 14: Electro-oculography and Electroretinography).

#### 3.5 Electrooculogram (EOG)

*   **Concept:** Records the electrical potential difference between the front (cornea) and back (retina) of the eye. This potential changes as the eye moves in its socket.
*   **What it Measures:** The "corneo-retinal standing potential," which is relatively stable in darkness but changes with the position of the eye in relation to electrodes placed on the skin near the eyes. It is used to assess the movement of the eyeball.
*   **Diagnostic Implications:** Used to diagnose certain retinal dystrophies and assess eye movement disorders.
*   **Relation to Course Outcomes:** CO1 (basic bioelectric potentials), CO4 (bio-medical equipment/devices).

**Reference:**
*   Khandpur, R. S. (Third Edition). *Handbook of Biomedical Instrumentation*. Tata Mc Graw Hill. (Chapter 16: Electrooculograph and Electroretinograph).
*   Cromwell, L., Weibell, F. J., & Pfeiffer, E. A. (2nd Edition, 2004). *Biomedical Instrumentation and Measurement*. PHI. (Chapter 14: Electro-oculography and Electroretinography).

#### 3.6 Electroglottogram (EGG)

*   **Concept:** Records the electrical impedance changes across the larynx or vocal tract as air passes through during speech or breathing.
*   **What it Measures:** Primarily related to the degree of contact between the vocal cords. It measures the electrical impedance between two electrodes placed on the anterior neck. When the vocal cords close, impedance decreases; when they open, impedance increases.
*   **Diagnostic Implications:** Used in speech therapy and voice research to assess vocal cord function, particularly in diagnosing dysphonia (voice disorders).
*   **Relation to Course Outcomes:** CO1 (basic bioelectric potentials), CO4 (bio-medical equipment/devices).

**Reference:**
*   While less common in general instrumentation books, EGG principles are related to bioimpedance measurements. Aston, R. *Principle of Biomedical Instrumentation and Measurement* might cover bioimpedance.

---

### 4. Important Points to Remember

*   **Ion Gradients are Key:** The unequal distribution of ions (Na⁺, K⁺) across the cell membrane is the fundamental basis for both resting and action potentials.
*   **Membrane Permeability:** Changes in membrane permeability to specific ions, regulated by ion channels, drive the electrical events.
*   **Action Potential is All-or-None:** Once triggered, an AP has a consistent amplitude and duration. Stimulus intensity is encoded by the frequency of APs, not their amplitude.
*   **Myelination Speeds Conduction:** Saltatory conduction in myelinated axons is significantly faster than continuous conduction in unmyelinated axons.
*   **Non-invasive Measurement:** Most bio-potentials (ECG, EEG, EMG) are measured non-invasively using surface electrodes, making them valuable diagnostic tools.
*   **Different Organs, Different Signals:** Each bio-potential (ECG, EEG, EMG, etc.) reflects the electrical activity of a specific organ or tissue and has unique diagnostic applications.

---

### 5. Practice Questions and Exercises

**Short Answer Questions:**

1.  Define resting membrane potential and explain the primary factors contributing to its establishment. (KL2)
2.  Describe the key events occurring during the depolarization and repolarization phases of an action potential. (KL2)
3.  What is saltatory conduction, and why is it important for nervous system function? (KL2)
4.  Briefly explain the physiological basis for ECG signals. (KL2)
5.  What type of bio-potential is measured by an EEG, and what does it represent? (KL2)

**Longer Answer Questions:**

6.  Discuss the role of the sodium-potassium pump and ion channels in maintaining the resting membrane potential. (KL2)
7.  Compare and contrast continuous conduction and saltatory conduction of action potentials. (KL2)
8.  For each of the following bio-potentials, state the organ system it relates to and one common diagnostic application: ECG, EEG, EMG. (KL2)

**Exercises:**

9.  Draw a diagram illustrating the changes in membrane potential during an action potential, labeling the different phases (resting, depolarization, repolarization, hyperpolarization) and the approximate voltage levels. (KL2)
10. If a neuron's membrane potential changes from -70 mV to -40 mV, what is this process called, and what type of ion movement is primarily responsible? (KL2)

---

### 6. Answers to Practice Questions and Exercises

**Short Answer Questions:**

1.  **Resting membrane potential (RMP)** is the stable electrical potential difference across the plasma membrane of an excitable cell at rest. It is established by:
    *   Unequal distribution of ions (higher K⁺ inside, higher Na⁺ outside).
    *   Selective permeability of the membrane (higher permeability to K⁺ than Na⁺ at rest).
    *   The action of the sodium-potassium pump.
2.  **Depolarization:** Rapid influx of Na⁺ ions into the cell through voltage-gated Na⁺ channels, making the inside of the membrane less negative (or positive). **Repolarization:** Inactivation of Na⁺ channels and opening of voltage-gated K⁺ channels, leading to an efflux of K⁺ ions and a return of the membrane potential to negative values.
3.  **Saltatory conduction** is the propagation of an action potential along a myelinated axon, where the impulse jumps from one Node of Ranvier to the next. It is important because it significantly increases the speed of nerve impulse transmission and conserves energy.
4.  ECG signals are generated by the coordinated electrical activity (depolarization and repolarization) of cardiac muscle cells. These electrical currents spread through the body and are detected by electrodes on the skin.
5.  EEG measures the electrical activity of the brain, primarily originating from the synchronized postsynaptic potentials of cortical neurons. It reflects brain states and functional activity.

**Longer Answer Questions:**

6.  The **sodium-potassium pump** actively transports 3 Na⁺ ions out of the cell and 2 K⁺ ions into the cell for every ATP molecule, thus maintaining the concentration gradients. At rest, the membrane has **passive K⁺ channels** that are open, allowing K⁺ to diffuse out down its concentration gradient, leaving behind negative charges. The membrane is less permeable to Na⁺, which leaks in, but the pump and K⁺ efflux create a net negative charge inside, establishing the RMP.
7.  **Continuous conduction** occurs in unmyelinated axons, where the AP spreads sequentially from one membrane segment to the next. It is slower. **Saltatory conduction** occurs in myelinated axons, where the AP "jumps" between Nodes of Ranvier. It is much faster due to the insulating effect of myelin and the high density of voltage-gated channels at the nodes.
8.  *   **ECG:** Cardiovascular system. Diagnoses arrhythmias, myocardial infarction.
    *   **EEG:** Nervous system (brain). Diagnoses epilepsy, sleep disorders.
    *   **EMG:** Neuromuscular system. Diagnoses muscle diseases, nerve damage.

**Exercises:**

9.  **(Diagram not possible in text, but description is):** The diagram would show a graph with time on the x-axis and membrane potential (mV) on the y-axis.
    *   Start at resting potential (e.g., -70 mV).
    *   A rapid upward deflection to a peak (e.g., +30 mV) representing depolarization.
    *   A rapid downward deflection back to resting potential and then below it (hyperpolarization, e.g., -80 mV) representing repolarization and undershoot.
    *   A return to the resting potential.
    *   Label the phases: Resting, Depolarization, Repolarization, Hyperpolarization, Return to Resting.
10. This process is called **depolarization**. The primary ion movement responsible is the influx of **sodium (Na⁺) ions** into the cell through voltage-gated Na⁺ channels.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
