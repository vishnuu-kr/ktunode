---
title: "Glass Electrode & pH Measurement"
subject: "CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE"
module: "Module 1: Electrochemistry  and Corrosion  Science"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f9400"
status: "completed"
scrapedAt: "2026-05-23T16:01:26.059Z"
---
# Module 1: Electrochemistry and Corrosion Science

## Topic: The Glass Electrode and pH Measurement

Welcome, everyone! Today, we're diving into a fundamental topic in electrochemistry that's absolutely crucial for many applications in information science and electrical engineering: **pH measurement using the glass electrode**. You might wonder, "Why pH? And why a glass electrode?" Well, understanding how we measure this property, which essentially tells us about the acidity or alkalinity of a solution, is key to controlling processes, analyzing materials, and ensuring the reliability of systems. Think about everything from the battery in your phone to the semiconductors used in computers – the environment they operate in, and the materials they're made from, are often sensitive to pH.

This topic directly ties into our **Course Outcome 1 (CO1)**, where we aim to explain basic concepts of electrochemistry and explore their applications. pH measurement is a prime example of an electrochemical technique with widespread applications. It also touches upon **Course Outcome 3 (CO3)**, as it's an analytical technique used for characterizing solutions and materials.

### Understanding pH: The Foundation

Before we get to the electrode itself, let's quickly refresh what pH actually is. In simple terms, pH is a measure of the concentration of hydrogen ions ($H^+$) in an aqueous solution. The scale typically ranges from 0 to 14.

*   **pH < 7:** Acidic solution (higher concentration of $H^+$ ions)
*   **pH = 7:** Neutral solution
*   **pH > 7:** Alkaline or basic solution (lower concentration of $H^+$ ions)

Chemically, it's defined as the negative logarithm (base 10) of the hydrogen ion activity. However, for practical purposes in many solutions, we approximate activity with concentration. So, the fundamental relationship is:

$pH = -\log_{10}[H^+]$

Why is this important for us? In many electronic devices and manufacturing processes, controlling the pH of solutions is critical. For instance, in the fabrication of semiconductors, the etching and cleaning processes often rely on solutions with very specific pH values. Even in biological systems, which are increasingly being integrated with electronic devices (biosensors, for example), pH is a vital parameter.

### The Electrochemical Basis of pH Measurement

At its core, measuring pH is an electrochemical process. We're essentially measuring a potential difference that arises due to the concentration of $H^+$ ions. This potential difference is what a pH meter detects.

Think about it this way: when you have a difference in ion concentration across a barrier, a voltage can develop. This is the principle behind many electrochemical cells. The glass electrode is designed to exploit this very phenomenon.

### Introducing the Glass Electrode: A Selective Barrier

So, how does the glass electrode work? The "magic" lies in a special type of glass that exhibits a unique property: it's selectively permeable to $H^+$ ions. This isn't just any glass; it's typically a high-silica glass, often containing lithium and sodium oxides, formulated to create this $H^+$ ion sensitivity.

The glass electrode is essentially a sensor that converts the chemical activity of hydrogen ions into an electrical potential. Let's break down its construction and the electrochemical principles involved.

**Construction of a Glass Electrode:**

A typical glass electrode consists of two main parts:

1.  **The Glass Bulb:** This is the heart of the electrode. It's a thin-walled bulb made of the special pH-sensitive glass, filled with a solution of known, constant $H^+$ concentration (e.g., a dilute HCl solution, pH 7). Inside this bulb, there's an internal reference electrode (often a silver/silver chloride wire, Ag/AgCl) immersed in the internal solution. This internal electrode provides a stable, known potential.

2.  **The Body:** The glass bulb is sealed into a non-conductive glass or plastic tube. The external connection is made through the internal reference electrode.

**The Working Principle: A "Hidden" Potential**

Now, imagine dipping this glass electrode into a solution whose pH we want to measure. What happens?

*   **Ion Exchange at the Glass Surface:** The special glass membrane has a hydrated layer on its surface when it comes into contact with an aqueous solution. This hydrated layer contains mobile ions, including $Na^+$ and $H^+$. The key is that $H^+$ ions from the solution can exchange with loosely bound cations (like $Na^+$) in the hydrated layer of the glass membrane.

*   **Potential Development:** This ion exchange is not uniform across the membrane. There's a difference in the concentration of $H^+$ ions between the *inside* of the glass bulb (the internal buffer solution) and the *outside* (the sample solution). According to the **Nernst equation**, a potential difference develops across the glass membrane, and this potential is directly proportional to the difference in $H^+$ ion activity (or concentration) on either side.

    Specifically, a potential, called the **membrane potential** or **glass potential**, is generated. This potential arises from the difference in the rate of diffusion of $H^+$ ions across the membrane. The $H^+$ ions can move across the hydrated surface layer, creating an electrical double layer. The magnitude of this potential is related to the $H^+$ concentration difference.

    As described by Atkins in "Physical Chemistry," this potential can be thought of as arising from the asymmetry in ion distribution and mobility across the membrane. The glass itself acts as a selective barrier, allowing for a potential difference that is directly related to the hydrogen ion activity.

*   **The Combined Cell:** The glass electrode, when used for pH measurement, is actually part of a complete electrochemical cell. It's used in conjunction with a **reference electrode**.

    *   **Glass Electrode:** Provides a variable potential that depends on the pH of the external solution.
    *   **Reference Electrode:** Provides a stable, constant potential, independent of the solution's pH. A common reference electrode is the **calomel electrode** (mercury/mercurous chloride) or the **silver/silver chloride electrode** (Ag/AgCl).

The total potential difference measured by the pH meter is the sum of the potentials of the glass electrode and the reference electrode, minus any liquid junction potential.

**The Key Equation:**

The relationship between the measured potential ($E$) and the pH is given by a modified Nernst equation:

$E = E_{internal} + E_{junction} + E_{glass}$

where:
*   $E_{internal}$ is the potential of the internal reference electrode.
*   $E_{junction}$ is the liquid junction potential (which we try to minimize).
*   $E_{glass}$ is the potential across the glass membrane, which is proportional to the pH.

For a constant internal reference and negligible junction potential, $E_{glass}$ can be expressed as:

$E_{glass} = k \cdot pH$

where $k$ is a constant related to temperature and the properties of the glass.

So, the total measured potential becomes:

$E_{measured} = Constant + (Slope) \cdot pH$

This linear relationship is what allows us to calibrate the pH meter.
