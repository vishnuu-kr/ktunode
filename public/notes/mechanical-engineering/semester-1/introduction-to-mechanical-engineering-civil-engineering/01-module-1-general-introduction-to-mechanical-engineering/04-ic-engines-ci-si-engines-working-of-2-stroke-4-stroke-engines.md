---
title: "IC Engines: CI & SI Engines, working of 2-Stroke & 4-Stroke engines."
subject: "INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING"
module: "Module 1: General introduction to Mechanical Engineering :"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e834ec"
status: "completed"
scrapedAt: "2026-05-20T17:38:46.655Z"
---
# Module 1: General Introduction to Mechanical Engineering - IC Engines

Welcome, everyone! Today, we're diving into a core component of mechanical engineering that powers much of our modern world: **Internal Combustion Engines (IC Engines)**. Think about the vehicle you traveled in to get here, or the lawnmower in your garage – chances are, an IC engine is at the heart of it. This topic is fundamental, and understanding it directly links to our understanding of **thermodynamics** and its applications, as stated in **Course Outcome 2**. We'll also touch upon how these engines are built and maintained, linking to broader **mechanical engineering principles (CO1)**.

---

## 1. What is an Internal Combustion Engine?

At its simplest, an internal combustion engine is a heat engine where the combustion of a fuel occurs with an oxidizer (usually air) in a combustion chamber that is an integral part of the working fluid flow circuit. In simpler terms, the burning of the fuel happens *inside* the engine itself, and the expanding hot gases produced by this combustion directly push on a movable part, like a piston. This pushing action is what generates mechanical work.

Contrast this with **external combustion engines**, like steam engines, where the fuel is burned *outside* the engine to heat a working fluid (water in the case of steam engines), and *that* fluid then does the work. IC engines are generally more compact and efficient for many applications, especially in transportation.

**Key Concept:** The "internal" in internal combustion is crucial. The fuel burns *inside* the engine, and that's where the power is generated.

---

## 2. Types of IC Engines: CI vs. SI Engines

Now, not all IC engines are created equal. The primary way we categorize them is based on *how* the fuel ignites. This leads us to two main types: **Spark Ignition (SI) Engines** and **Compression Ignition (CI) Engines**.

### 2.1 Spark Ignition (SI) Engines

You've likely heard of these more commonly as **petrol engines** or **gasoline engines**.

*   **How they work:** In an SI engine, a mixture of fuel (like petrol) and air is drawn into the cylinder and compressed. Then, a **spark plug** creates a spark, igniting this compressed mixture. The rapid combustion causes a sharp increase in pressure, which pushes the piston down, generating power.
*   **Fuel:** Typically uses volatile fuels like petrol, gasoline, or natural gas.
*   **Ignition Method:** Spark plug.
*   **Compression Ratio:** Generally lower compression ratios (typically around 8:1 to 12:1). This is because if you compress the fuel-air mixture too much, it can ignite spontaneously before the spark, a phenomenon called **knocking** or **detonation**, which is undesirable and damaging.
*   **Applications:** Cars, motorcycles, light aircraft, portable generators. Think of most passenger vehicles you see on the road.
*   **Analogy:** Imagine a tiny, controlled explosion happening every time the spark plug fires. It’s like striking a match to ignite a very specific, pre-mixed fuel and air.

### 2.2 Compression Ignition (CI) Engines

These are more commonly known as **diesel engines**.

*   **How they work:** In a CI engine, only air is drawn into the cylinder and compressed. Because diesel fuel is less volatile than petrol, it can be compressed to much higher pressures and temperatures without igniting. At the peak of the compression stroke, when the air is very hot, **diesel fuel is injected** directly into the cylinder in a finely atomized spray. The heat of the compressed air is enough to ignite the fuel spontaneously – no spark plug is needed! This ignition method is called **auto-ignition**.
*   **Fuel:** Primarily uses diesel fuel.
*   **Ignition Method:** Compression of air to a high temperature, followed by fuel injection.
*   **Compression Ratio:** Much higher compression ratios (typically 14:1 to 25:1). This high compression is what heats the air sufficiently for ignition.
*   **Applications:** Trucks, buses, heavy machinery (tractors, excavators), trains, ships, and many power generators. They are favoured for their higher torque and fuel efficiency, especially under heavy loads.
*   **Analogy:** Think of pumping up a bicycle tire very vigorously. The pump and the air inside get quite hot. A diesel engine does something similar with air inside the cylinder, making it hot enough to instantly ignite the diesel fuel that's sprayed in.

**Crucial Distinction:** The fundamental difference lies in how ignition is achieved: **spark ignition for SI engines** and **compression ignition for CI engines**. This difference dictates many other design aspects, including compression ratios and fuel types.

---

## 3. Working of 2-Stroke and 4-Stroke Engines

Another critical distinction is how many "strokes" of the piston it takes to complete one power cycle. A **stroke** is a single, continuous movement of the piston, either from top to bottom or bottom to top within the cylinder.

### 3.1 4-Stroke Engines

These are the most common type in modern vehicles due to their efficiency and cleaner emissions. As the name suggests, they complete a power cycle in four strokes of the piston, which corresponds to two full rotations of the crankshaft.

Let's break down these four strokes:

1.  **Intake Stroke:**
    *   The piston moves **downward** from the Top Dead Centre (TDC) to the Bottom Dead Centre (BDC).
    *   The **intake valve opens**, and the exhaust valve remains closed.
    *   A mixture of fuel and air (in SI engines) or just air (in CI engines) is **sucked into the cylinder** due to the vacuum created by the descending piston.
    *   *Think of it like drawing air into a syringe.*

2.  **Compression Stroke:**
    *   The piston moves **upward** from BDC to TDC.
    *   Both the **intake and exhaust valves are closed**.
    *   The fuel-air mixture (or air) is **compressed**, leading to an increase in pressure and temperature.
    *   *This is like pushing the plunger back into the syringe, compressing the air inside.*

3.  **Power (Combustion/Expansion) Stroke:**
    *   At or near TDC, ignition occurs. In SI engines, the spark plug fires. In CI engines, fuel is injected.
    *   The fuel burns rapidly, creating a high-pressure gas.
    *   This high-pressure gas **pushes the piston forcefully downward** from TDC to BDC.
    *   Both valves remain **closed**.
    *   This is the stroke that **produces useful work**.
    *   *Imagine the compressed air in the syringe suddenly being heated and expanding, pushing the plunger out forcefully.*

4.  **Exhaust Stroke:**
    *   The piston moves **upward** from BDC to TDC.
    *   The **exhaust valve opens**, and the intake valve remains closed.
    *   The upward movement of the piston **pushes the burnt gases out** of the cylinder through the exhaust port.
    *   *This is like pushing the plunger to expel the air from the syringe.*

After the exhaust stroke, the cycle repeats.

**Remember this:** For every one power stroke, there are three other strokes (intake, compression, exhaust) that don't produce power but are essential for the cycle. This means the crankshaft rotates twice for each power stroke.

### 3.2 2-Stroke Engines

These engines are simpler in design and achieve a power stroke in just two strokes of the piston (one up and one down), meaning one full rotation of the crankshaft. They are often found in smaller applications like chainsaws, leaf blowers, and some older motorcycles.

Here’s how they work, combining functions:

1.  **Upstroke (Compression & Intake):**
    *   The piston moves **upward** from BDC to TDC.
    *   As the piston moves up, it **compresses the fuel-air mixture** already present in the cylinder above the piston.
    *   Simultaneously, the upward movement of the piston creates a vacuum in the **crankcase** (the space below the piston).
    *   This vacuum draws a fresh fuel-air mixture from the carburetor into the crankcase through an **intake port**, which is uncovered by the piston as it rises.
    *   Near TDC, ignition occurs, and the power stroke begins.

2.  **Downstroke (Power & Exhaust/Transfer):**
    *   The burning gases expand and **push the piston forcefully downward** from TDC to BDC.
    *   As the piston moves down, it first **uncovers the exhaust port**, allowing burnt gases to escape.
    *   Shortly after, it **uncovers the transfer ports**.
    *   The downward movement of the piston also compresses the fresh fuel-air mixture that was drawn into the crankcase during the upstroke.
    *   This compressed fresh mixture is then **forced from the crankcase, through the transfer ports, and into the cylinder** above the piston. This incoming fresh charge helps push out the remaining exhaust gases (a process called **scavenging**) and fills the cylinder for the next compression stroke.

**Key Features and Trade-offs of 2-Stroke Engines:**

*   **Simplicity:** Fewer moving parts (no complex valve train).
*   **Higher Power-to-Weight Ratio:** Power stroke every revolution.
*   **Lower Efficiency:** Some unburnt fuel-air mixture can escape with exhaust gases (poor scavenging), and some exhaust gases can remain in the cylinder.
*   **Higher Emissions:** Due to incomplete combustion and oil mixing with fuel (lubrication is usually done by mixing oil with the fuel).
*   **Lubrication:** Often mixed with the fuel, which means oil is burned along with the fuel.

**Important Note:** While simpler, the scavenging process in 2-stroke engines isn't perfect. Some fresh charge can escape through the exhaust port before combustion, and some exhaust gas can remain in the cylinder, leading to reduced efficiency and higher emissions.

---

## 4. Connecting to Course Outcomes

Let's quickly recap how this fits into our broader learning objectives:

*   **CO1 (Relevance of Mechanical Engineering):** IC engines are a prime example of applied mechanical engineering principles – thermodynamics, fluid mechanics, material science, and manufacturing. Understanding them shows you a major output of the discipline.
*   **CO2 (Thermodynamics Applications):** The entire working of an IC engine is a thermodynamic cycle. We convert chemical energy (fuel) into thermal energy (combustion) and then into mechanical energy (piston movement). Understanding these engines directly helps you grasp concepts like cycles, efficiency, and heat transfer.
*   **CO3 (Manufacturing Processes):** The high precision required to manufacture engine components like pistons, cylinders, and crankshafts highlights the importance of various manufacturing processes.
*   **CO4 & CO5 & CO6 (Civil Engineering Link):** While this topic is primarily Mechanical Engineering, understanding how things like power plants (often using large diesel engines) or construction equipment operate touches upon the infrastructure that Civil Engineers build and maintain. The materials used in engines, as discussed in books like "Engineering Materials" by Rangwala or "Building Materials" by Duggal, also draw parallels. For instance, the high-strength alloys used in engine pistons are a testament to material science, a field that also informs the selection of materials in civil structures.

---

## Sample Questions and Answers

Here are a few questions that test your understanding, common in exams:

**Q1. What is the primary difference between a Spark Ignition (SI) engine and a Compression Ignition (CI) engine?**

**Answer:** The primary difference lies in the method of ignition. An SI engine uses a spark plug to ignite a pre-mixed fuel-air mixture, while a CI engine relies on the heat generated by highly compressing air to spontaneously ignite injected fuel.

**Q2. How many rotations of the crankshaft are required for a complete power cycle in a 4-stroke engine?**

**Answer:** Two complete rotations of the crankshaft are required for a 4-stroke engine to complete one power cycle. This is because it takes four strokes of the piston (two up, two down) to achieve this, and each stroke corresponds to half a crankshaft rotation.

**Q3. Explain the function of the transfer ports in a 2-stroke engine.**

**Answer:** In a 2-stroke engine, the transfer ports are passages that connect the crankcase to the cylinder above the piston. During the downstroke of the piston, after it uncovers the exhaust port, it also uncovers the transfer ports. The fresh fuel-air mixture, which has been compressed in the crankcase by the descending piston, is then forced through these ports into the cylinder. This incoming fresh charge helps to push out the remaining exhaust gases from the cylinder, a process known as scavenging.

**Q4. Why do diesel engines typically have higher compression ratios than petrol engines?**

**Answer:** Diesel engines use compression ignition. They require very high air temperatures within the cylinder to auto-ignite the injected diesel fuel. To achieve these high temperatures, they must compress the air to a much higher degree, hence their higher compression ratios. Petrol engines, using spark ignition, would experience knocking if their fuel-air mixture were compressed to such high ratios before the spark.

**Q5. In a 4-stroke engine, during which stroke is useful work produced?**

**Answer:** Useful work is produced during the **Power stroke** (also called the Combustion or Expansion stroke). This is when the high-pressure gases generated by combustion push the piston downwards.

---

This covers the foundational aspects of IC engines, differentiating between SI and CI types and explaining the working principles of both 2-stroke and 4-stroke engines. Remember these core concepts as we build upon them in future modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
