---
title: "Introduction to FET, Construction and working of N-channel and P-Channel MOSFETs"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 3: Introduction to Electronic devices:"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da0e5"
status: "completed"
scrapedAt: "2026-05-23T17:34:30.816Z"
---
## Module 3: Introduction to Electronic Devices - Field-Effect Transistors (FETs)

Welcome, everyone! In this module, we're diving into the fascinating world of electronic devices. We've already touched upon some fundamental components, and today, we're going to explore a crucial category: **Field-Effect Transistors**, or **FETs**. You'll often hear them referred to as "FETs."

Now, why are FETs so important? Think of them as sophisticated electronic switches or amplifiers. They play a vital role in almost every electronic circuit you can imagine, from the tiny chips in your smartphone to powerful computers and even communication systems. In fact, understanding FETs is fundamental to grasping how modern electronics, like those used in the Internet of Things (IoT), function. This directly relates to our **Course Outcome 4 (CO4)**, which is about describing the fundamental concepts of electronic components and devices.

Before we get into the specifics, let's establish a connection. We've discussed DC and AC circuits, right? FETs are semiconductor devices that control the flow of current. Their behavior is governed by voltage, and this voltage creates an electric field, hence the name "Field-Effect." This is a key distinction from other types of transistors we might discuss later, like BJTs (Bipolar Junction Transistors), which are controlled by current.

### Introduction to Field-Effect Transistors (FETs)

So, what exactly is a FET? At its heart, a FET is a three-terminal semiconductor device that uses an electric field to control the conductivity of a channel, and thus the current flow through it. The three terminals are typically called:

*   **Gate (G):** This is the control terminal. Applying a voltage to the gate controls the conductivity of the channel.
*   **Source (S):** This is where the charge carriers (electrons or holes) enter the channel.
*   **Drain (D):** This is where the charge carriers leave the channel.

The beauty of FETs lies in their **voltage-controlled** nature. This means a small voltage applied to the gate can control a much larger current flowing between the drain and source. This characteristic makes them excellent amplifiers and switches.

Think of it like a water faucet. The handle of the faucet is like the gate. By turning the handle (applying voltage), you control how much water flows from the pipe (source) through the spout (drain). You don't need a lot of force on the handle to control a significant flow of water.

FETs are generally categorized into two main types:

1.  **Junction Field-Effect Transistors (JFETs):** These use a p-n junction to create the gate region.
2.  **Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs):** These are far more common and are the focus of our discussion today. They use an insulating layer (oxide) between the gate and the channel.

The learning outcomes for this section are primarily about understanding the fundamental structure and operation of these devices, which is crucial for CO4.

### MOSFETs: The Workhorses of Modern Electronics

Now, let's zoom in on MOSFETs. The name itself tells us a lot: **M**etal-**O**xide-**S**emiconductor **F**ield-**E**ffect **T**ransistor.

*   **Metal:** Historically, the gate electrode was made of metal. Today, it's often polysilicon (a form of silicon that's electrically conductive).
*   **Oxide:** A thin layer of silicon dioxide (SiO₂) acts as an insulator between the gate and the semiconductor channel. This insulation is critical because it means virtually no current flows into the gate, making MOSFETs very power-efficient.
*   **Semiconductor:** This is the main body of the transistor, usually silicon, where the conducting channel is formed.

The insulating oxide layer is a key differentiator for MOSFETs, contributing to their high input impedance and low power consumption, especially when the gate is not changing voltage. This efficiency is a cornerstone of modern portable electronics and low-power digital circuits.

MOSFETs are further divided into two primary types based on the type of charge carrier that forms the channel:

1.  **N-channel MOSFETs:** The channel is formed by electrons.
2.  **P-channel MOSFETs:** The channel is formed by holes.

We will now delve into the construction and working principles of each.

### Construction and Working of N-Channel MOSFETs

Let's start with the N-channel MOSFET. Imagine a block of P-type semiconductor material. This will form the substrate, the base of our transistor. Now, we need to create a channel for electrons to flow.

**Construction of N-Channel MOSFET:**

1.  **Substrate:** We start with a piece of P-type semiconductor material, called the **substrate**.
2.  **Source and Drain Regions:** Two heavily doped N-type regions are diffused into the P-type substrate. These are the **source** and **drain**. They are positioned close to each other, separated by a portion of the P-type substrate. This portion of P-type substrate between the source and drain is crucial; it will become the channel.
3.  **Gate:** A thin layer of silicon dioxide (SiO₂) is grown or deposited on the surface of the substrate, covering the area between the source and drain. A metallic or polysilicon layer is then deposited on top of this oxide layer. This forms the **gate** electrode.
4.  **Insulation:** The SiO₂ layer acts as an excellent insulator, preventing current from flowing directly between the gate and the substrate (or the channel).
5.  **Connections:** Terminals are connected to the source, drain, and gate.

So, we have a P-type substrate, two N+ regions (source and drain), and an insulated gate positioned above the channel region.

**Working of N-Channel MOSFET:**

There are two main modes of operation for MOSFETs: **depletion mode** and **enhancement mode**. The device we just described is typically an **enhancement-mode N-channel MOSFET**, which is the most common type. Let's understand how it works.

*   **No Gate Voltage (V<sub>GS</sub> = 0):**
    When no voltage is applied between the gate and the source (V<sub>GS</sub> = 0), there is no conductive path between the N-type source and the N-type drain because they are separated by the P-type substrate. Even if we apply a voltage between drain and source (V<sub>DS</sub>), no significant current flows. It’s like the faucet is completely off.

*   **Applying a Positive Gate Voltage (V<sub>GS</sub> > 0):**
    Now, imagine we apply a positive voltage to the gate with respect to the source (V<sub>GS</sub> > 0). What happens? The positive voltage on the gate attracts free electrons from the P-type substrate towards the surface beneath the gate oxide. Simultaneously, it repels the positive holes in the P-type substrate away from this region.
    As V<sub>GS</sub> increases, more and more electrons accumulate in the region directly under the gate oxide. When V<sub>GS</sub> reaches a certain threshold voltage, known as the **threshold voltage (V<sub>th</sub>)**, a sufficient number of electrons gather to form a continuous N-type **channel** that connects the source and drain.
    This channel effectively bridges the gap between the N+ source and N+ drain regions. Now, if we apply a voltage between the drain and source (V<sub>DS</sub> > 0), electrons will flow from the source, through this newly formed channel, to the drain. This constitutes the drain current (I<sub>D</sub>).

    *   **Analogy:** Think of spreading butter on a piece of toast. The toast is the P-type substrate. The butter you spread is like the accumulated electrons under the gate. When you spread enough butter (positive gate voltage), you create a smooth surface (the channel) on which you can easily slide something (current flow).

*   **Controlling the Drain Current (I<sub>D</sub>):**
    The magnitude of the drain current (I<sub>D</sub>) is controlled by the gate-to-source voltage (V<sub>GS</sub>).
    *   As V<sub>GS</sub> increases above V<sub>th</sub>, the channel becomes wider and more conductive, allowing a larger drain current to flow for a given V<sub>DS</sub>.
    *   If V<sub>GS</sub> is less than V<sub>th</sub>, the channel is not formed, and I<sub>D</sub> is practically zero.

    This is how the gate voltage controls the drain current, acting as the control knob of our electronic faucet. This voltage-controlled characteristic is fundamental to its use as an amplifier.

**Types of N-Channel MOSFETs:**

*   **Enhancement Mode:** As described above, the channel is normally *off* and needs to be *induced* by applying a gate voltage greater than the threshold voltage. This is the most common type.
*   **Depletion Mode:** In this type, a channel is already present even with V<sub>GS</sub> = 0. Applying a negative gate voltage (for N-channel) depletes the carriers from the channel, reducing conductivity and current. Applying a positive gate voltage can enhance the channel, increasing conductivity.

### Construction and Working of P-Channel MOSFETs

Now, let's flip things around for the P-channel MOSFET. The principles are very similar, but the doping types and voltage polarities are reversed.

**Construction of P-Channel MOSFET:**

1.  **Substrate:** We start with a block of N-type semiconductor material. This is our substrate.
2.  **Source and Drain Regions:** Two heavily doped P-type regions are diffused into the N-type substrate. These are the **source** and **drain**.
3.  **Gate:** Similar to the N-channel MOSFET, a thin insulating layer of silicon dioxide (SiO₂) is placed over the substrate between the source and drain, and then a gate electrode (metal or polysilicon) is deposited on top.
4.  **Insulation:** Again, the SiO₂ layer isolates the gate from the channel.
5.  **Connections:** Terminals are connected to the source, drain, and gate.

So, for a P-channel MOSFET, we have an N-type substrate, two P+ regions (source and drain), and an insulated gate positioned above the channel region.

**Working of P-Channel MOSFET:**

Again, we'll focus on the enhancement mode, which is most common.

*   **No Gate Voltage (V<sub>GS</sub> = 0):**
    When V<sub>GS</sub> = 0, there's no conductive path between the P-type source and the P-type drain (separated by the N-type substrate). Applying a voltage V<sub>DS</sub> (with drain negative relative to source) will not cause significant current flow.

*   **Applying a Negative Gate Voltage (V<sub>GS</sub> < 0):**
    To create a channel in a P-channel MOSFET, we need to apply a *negative* voltage to the gate with respect to the source (V<sub>GS</sub> < 0). This negative gate voltage repels the majority carriers in the N-type substrate (electrons) away from the surface under the gate. It also attracts the minority carriers in the substrate (holes) to accumulate in this region.
    When V<sub>GS</sub> becomes sufficiently negative, reaching a negative threshold voltage (V<sub>th</sub>, which is negative for P-channel enhancement mode), enough holes gather to form a P-type **channel** connecting the source and drain.
    Now, if we apply a voltage V<sub>DS</sub> (with drain negative relative to source), holes will flow from the source, through this P-type channel, to the drain. This constitutes the drain current (I<sub>D</sub>), which is now a flow of positive charge carriers (holes).

    *   **Analogy:** Imagine a muddy path (N-type substrate). You want to create a clear walkway for people (holes). You use a tool (negative gate voltage) to push the mud (electrons) aside. When you push enough mud away, you create a clear path (the P-channel) for people to walk through.

*   **Controlling the Drain Current (I<sub>D</sub>):**
    The magnitude of the drain current (I<sub>D</sub>) is controlled by the gate-to-source voltage (V<sub>GS</sub>).
    *   As V<sub>GS</sub> becomes more negative (further below V<sub>th</sub>), the P-channel becomes wider and more conductive, allowing a larger drain current to flow for a given V<sub>DS</sub>.
    *   If V<sub>GS</sub> is greater than V<sub>th</sub> (i.e., less negative or positive), the channel is not formed, and I<sub>D</sub> is practically zero.

**Types of P-Channel MOSFETs:**

*   **Enhancement Mode:** The channel is normally *off* and needs to be *induced* by a negative gate voltage greater than the threshold voltage. This is the most common type.
*   **Depletion Mode:** A P-channel is already present with V<sub>GS</sub> = 0. Applying a positive gate voltage depletes the holes, reducing conductivity. Applying a negative gate voltage enhances the channel.

### Key Takeaways and Exam Relevance

Remember these crucial points about MOSFETs:

*   **Voltage Controlled:** This is their defining characteristic. A small gate voltage controls a larger drain current. This is key for **CO4**.
*   **High Input Impedance:** Due to the insulating oxide layer, the gate draws virtually no DC current. This is why they are so power-efficient.
*   **Two Main Types:** N-channel (electron conduction) and P-channel (hole conduction).
*   **Two Operating Modes:** Enhancement (channel induced by gate voltage) and Depletion (channel pre-existing). Enhancement mode is far more common in digital and most analog circuits.
*   **Threshold Voltage (V<sub>th</sub>):** The minimum gate-to-source voltage required to form the channel and allow current flow in enhancement mode MOSFETs.

**Exam-oriented points:**

*   When asked about the construction, be sure to mention the substrate, source/drain regions, the gate, and the crucial insulating oxide layer.
*   For working, explain how applying the correct polarity and sufficient magnitude of gate voltage creates the conductive channel.
*   Understand the difference in voltage polarities for N-channel (positive V<sub>GS</sub>) and P-channel (negative V<sub>GS</sub>) enhancement mode MOSFETs. This is a common point of confusion.
*   Know the definition of the threshold voltage and its significance.
*   Be able to draw a simplified schematic of both N-channel and P-channel enhancement mode MOSFETs, labeling the terminals and indicating doping types.

These devices are fundamental to many applications, from simple switching circuits to complex integrated circuits (ICs) that power our digital world, including many aspects of the Internet of Things (**CO6**). Understanding how they work provides a solid foundation for many areas of electrical and electronics engineering.

---

### Sample Questions and Answers

**1. Conceptual Question:** Explain the primary difference between a MOSFET and a Bipolar Junction Transistor (BJT) in terms of their control mechanism.

**Answer:** The primary difference lies in their control mechanism. MOSFETs are **voltage-controlled** devices, meaning the current flow between the drain and source is controlled by the voltage applied to the gate terminal. In contrast, BJTs are **current-controlled** devices, where the current flowing between the collector and emitter is controlled by the small current flowing into the base terminal.

**2. Construction Question:** Describe the basic construction of an enhancement-mode N-channel MOSFET.

**Answer:** An enhancement-mode N-channel MOSFET is constructed on a P-type semiconductor substrate. Two heavily doped N-type regions are diffused into the substrate, forming the source and drain terminals. A thin insulating layer of silicon dioxide (SiO₂) is grown or deposited over the region between the source and drain. A conductive gate electrode (typically metal or polysilicon) is placed on top of this oxide layer. The SiO₂ layer isolates the gate from the semiconductor channel.

**3. Working Principle Question:** How is a conductive channel formed in an enhancement-mode N-channel MOSFET when a voltage is applied to the gate?

**Answer:** In an enhancement-mode N-channel MOSFET, a conductive channel is formed when a positive voltage is applied to the gate terminal with respect to the source (V<sub>GS</sub> > 0). This positive gate voltage attracts free electrons from the P-type substrate towards the surface beneath the gate oxide, while repelling holes. Once the gate-to-source voltage (V<sub>GS</sub>) exceeds the threshold voltage (V<sub>th</sub>), a sufficient concentration of electrons accumulates to create a continuous N-type channel, connecting the N-type source and drain regions. This allows current to flow from drain to source when a V<sub>DS</sub> is applied.

**4. Comparison Question:** What is the significance of the insulating oxide layer in a MOSFET?

**Answer:** The insulating oxide layer (typically silicon dioxide) between the gate and the channel is crucial because it provides a very high input impedance to the MOSFET. This means that virtually no DC current flows into the gate terminal, regardless of the gate voltage (as long as it doesn't exceed breakdown limits). This high input impedance makes MOSFETs highly efficient in terms of power consumption and allows them to be easily interfaced with other circuits without significantly loading them.

**5. Application/Concept Question:** Why are MOSFETs often preferred over BJTs in digital logic circuits and low-power applications?

**Answer:** MOSFETs are often preferred in digital logic circuits and low-power applications due to their **voltage-controlled nature** and **extremely low gate current (high input impedance)**. This means they consume very little power when idle (e.g., when the gate voltage is constant), which is critical for battery-powered devices and large-scale integrated circuits. Their switching speeds are also generally very high. Their ability to be easily scaled down also makes them ideal for modern integrated circuit manufacturing.

**6. Polarity Question (Exam-oriented pitfall):** For a P-channel enhancement-mode MOSFET, what polarity of gate-to-source voltage (V<sub>GS</sub>) is required to turn it ON, and what type of charge carriers form the channel?

**Answer:** For a P-channel enhancement-mode MOSFET to turn ON, a **negative** gate-to-source voltage (V<sub>GS</sub> < 0) is required. The channel formed is a **P-type channel**, consisting of holes. This is because the negative gate voltage attracts holes from the N-type substrate to the region under the gate, while repelling electrons.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
