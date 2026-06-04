---
title: "Vapour Pressure: Effect of temperature on vapour pressure – Antoine Equation, Clausius-Clapeyron equation."
subject: "PROCESS CALCULATIONS"
module: "Module 1: Basic Concepts: Introduction to Chemical Engineering, Chemical process Industry, Unit Operations and Unit Processes."
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912fae"
status: "completed"
scrapedAt: "2026-05-20T18:38:13.771Z"
---
# PROCESS CALCULATIONS: Module 1 - Basic Concepts

## Topic: Vapour Pressure: Effect of Temperature on Vapour Pressure – Antoine Equation, Clausius-Clapeyron Equation

Welcome, everyone, to our journey into the fascinating world of Process Calculations! Today, we're going to dive into a fundamental concept that underpins many chemical engineering operations: **Vapour Pressure**. Understanding how vapour pressure behaves, especially with changes in temperature, is crucial for almost everything we do, from designing distillation columns to ensuring safe storage of volatile liquids. This topic directly links to **CO1: Explain fundamentals of Chemical Engineering, units and dimensions and estimate chemical composition and other physical quantities of solids, liquids, solutions, gases and mixtures** because vapour pressure is a key physical property of liquids and solutions, influencing their behavior in mixtures and processes.

### What is Vapour Pressure? Let's Get Our Hands Dirty (Metaphorically!)

Imagine you have a sealed bottle of your favorite soda. When you first open it, you hear that "psst" sound. That's the release of gas. But even in the sealed bottle, there's something going on. Some of the liquid at the surface has enough energy to escape into the gas phase, becoming vapour. This vapour then fills the space above the liquid. As more vapour forms, it starts to collide with the liquid surface and condense back into the liquid phase. Eventually, a point is reached where the rate of vaporization (liquid turning into vapour) equals the rate of condensation (vapour turning into gas). This is called **dynamic equilibrium**.

At this equilibrium, the pressure exerted by the vapour molecules in the space above the liquid is known as the **vapour pressure** of the liquid.

Think of it like a busy marketplace. People are entering (vaporizing) and leaving (condensing) the market. When the number of people entering equals the number of people leaving, the crowd size (vapour pressure) remains constant, even though individuals are constantly moving.

**Why is this important for us?** Well, if you're designing a process to separate components of a mixture, like in distillation, you're essentially playing with these vapour pressures to make one component vaporize more readily than another. This directly relates to **CO2: Develop and solve basic material balance equations for the unit operations employed in process industries** and **CO3: Develop and solve basic material balance equations for the unit processes employed in process industries**, as separation processes are core unit operations and processes.

### The Burning Question: How Does Temperature Affect Vapour Pressure?

This is where things get really interesting and directly applicable to our problem-solving. As you increase the temperature of a liquid, its molecules gain more kinetic energy. This means more molecules at the surface will have enough energy to overcome the intermolecular forces holding them in the liquid phase and escape into the vapour phase.

So, what happens to the vapour pressure as temperature increases? **It increases!** And not just a little bit; it often increases quite significantly.

Consider a pot of water on the stove. At room temperature, there's a very low vapour pressure. As you heat it up, more water turns into steam, and the pressure in the pot (if it were sealed) would rise. When the water boils, its vapour pressure becomes equal to the external atmospheric pressure. This boiling phenomenon is a direct consequence of vapour pressure reaching a critical point.

This relationship is fundamental to many calculations in **CO4: Develop and solve energy balance equations for various physical and chemical processes**, as heat input is directly linked to temperature changes and subsequent phase transitions.

### Quantifying the Relationship: The Antoine Equation

Now, while we know vapour pressure increases with temperature, we need a way to calculate it quantitatively. For many common substances, especially over moderate temperature ranges, the **Antoine equation** is our go-to tool. It's a semi-empirical equation, meaning it's based on experimental data but has a theoretical underpinning.

The Antoine equation is generally expressed as:

$$ \log_{10}(P) = A - \frac{B}{C + T} $$

Where:
*   **P** is the vapour pressure.
*   **T** is the temperature.
*   **A, B, and C** are constants specific to the substance.

These constants (A, B, C) are determined experimentally for each chemical. You'll find tables of these constants in your textbooks, like the ones by Narayanan & Lakshmikutty, and Bhatt & Vora.

**Let's break down what this equation tells us:**

*   The **logarithm of vapour pressure** is related to temperature. This form is convenient because vapour pressures can vary over many orders of magnitude.
*   The term $\frac{B}{C + T}$ shows that as **T increases**, the entire fraction **decreases**.
*   Subtracting a decreasing term from a constant (A) means that **$A - \frac{B}{C + T}$ increases as T increases**.
*   And since $\log_{10}(P)$ increases, it means **P itself increases as T increases**. So, it mathematically confirms our intuition!

**A common pitfall** here is getting the units of P and T wrong, or using constants that are not valid for the temperature range you are working with. Always check the units specified for the Antoine constants! Often, P is in mmHg or bar, and T is in °C or K.

**Example:** Imagine you need to know the vapour pressure of ethanol at 50°C. You would look up the Antoine constants for ethanol, ensuring they are valid for the temperature range including 50°C, plug them into the equation, and calculate P. This is a direct application of **CO1** where we estimate physical quantities.

**Quick Recall Tip:** The Antoine equation is an *empirical* relationship that's excellent for *moderate temperature ranges* and *specific pure substances*. It's a fundamental tool for predicting phase behaviour.

### A Deeper Dive: The Clausius-Clapeyron Equation

While Antoine is great for practical calculations, for a more fundamental understanding of the temperature dependence of vapour pressure, we turn to the **Clausius-Clapeyron equation**. This equation is derived from thermodynamic principles and provides a more general relationship between vapour pressure and temperature, particularly useful for understanding phase transitions.

The integrated form of the Clausius-Clapeyron equation is often written as:

$$ \ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) $$

Where:
*   **$P_1$ and $P_2$** are the vapour pressures at temperatures **$T_1$ and $T_2$** respectively.
*   **$\Delta H_{vap}$** is the molar enthalpy of vaporization (the energy required to vaporize one mole of the substance). This is assumed to be constant over the temperature range.
*   **R** is the ideal gas constant.
*   **$T_1$ and $T_2$** are the absolute temperatures (in Kelvin).

**What does this equation signify?**

It establishes a linear relationship between the natural logarithm of the vapour pressure ratio and the reciprocal of the absolute temperature. It tells us that if we know the vapour pressure at one temperature, we can estimate it at another temperature, provided the enthalpy of vaporization is known and constant.

**Analogy:** Think of climbing a mountain. The higher you go (increase in temperature), the less effort (intermolecular forces) it takes for a particle to "escape" to the summit (vapour phase). The "steepness" of this climb is related to the $\Delta H_{vap}$. A substance with a high $\Delta H_{vap}$ will have a slower increase in vapour pressure with temperature compared to a substance with a low $\Delta H_{vap}$.

**Key Assumptions and Considerations for Clausius-Clapeyron:**

1.  **Constant Enthalpy of Vaporization:** This is the most significant assumption. In reality, $\Delta H_{vap}$ does change with temperature. However, over small temperature intervals, this assumption is often acceptable. This is why Clausius-Clapeyron is more fundamentally derived but Antoine is often preferred for engineering accuracy over broader ranges.
2.  **Ideal Gas Behaviour of Vapour:** The vapour phase is assumed to behave as an ideal gas.
3.  **Liquid Phase is Incompressible:** The volume of the liquid is considered negligible compared to the volume of the vapour.

**How does this link to our Course Outcomes?**

*   **CO1:** Understanding $\Delta H_{vap}$ helps us quantify the energy required for phase changes, a core physical property.
*   **CO4:** This equation is intrinsically linked to energy balances, as $\Delta H_{vap}$ is a heat term. Calculating vapour pressure changes directly impacts energy required for vaporization or condensation in processes.

**When to Use Which Equation?**

*   **Antoine Equation:** Best for practical engineering calculations for pure substances over specific, moderate temperature ranges where tabulated constants are available. It's often the first choice for accurate prediction.
*   **Clausius-Clapeyron Equation:** Useful for theoretical understanding, estimating vapour pressure when only one data point and $\Delta H_{vap}$ are known, or for understanding the *rate* of change of vapour pressure with temperature. It's more about the *physics* of the phase change.

**Exam Focus:** You will definitely be asked to use both equations! Pay close attention to the units and the provided constants or data. Sometimes, a problem might give you two data points (P, T) and ask you to calculate $\Delta H_{vap}$ using the Clausius-Clapeyron equation, effectively treating it as a linear regression problem.

### Connecting to Unit Operations: Why Does This Matter in Practice?

Think about a **distillation column**. It separates components based on their different boiling points. The boiling point of a liquid is defined as the temperature at which its vapour pressure equals the surrounding atmospheric pressure. If we increase the temperature, the vapour pressure increases, and eventually, it will equal the external pressure, causing boiling. Understanding how vapour pressure changes with temperature (using Antoine or Clausius-Clapeyron) is fundamental to predicting distillation behaviour, calculating heat duties for reboilers and condensers, and designing efficient separation processes. This ties directly into **CO2** and **CO3**.

Consider a **storage tank for a volatile solvent**. If the temperature rises, the vapour pressure of the solvent inside the tank increases. This increased pressure can stress the tank, potentially leading to rupture or requiring a more robust (and expensive) tank design. Understanding this vapour pressure behaviour is vital for safety and design, falling under **CO1** and **CO4**.

### Summary of Key Takeaways

*   **Vapour pressure** is the pressure exerted by a vapour in dynamic equilibrium with its condensed phase at a given temperature.
*   Vapour pressure **increases significantly with increasing temperature** due to increased molecular kinetic energy.
*   The **Antoine Equation** is a widely used, empirical relationship to predict vapour pressure for pure substances over moderate temperature ranges, using substance-specific constants.
*   The **Clausius-Clapeyron Equation** is a thermodynamically derived equation that relates vapour pressure to temperature via the enthalpy of vaporization, useful for theoretical understanding and estimations when limited data is available.
*   Accurate prediction of vapour pressure is critical for the design and operation of various chemical engineering unit operations and processes, from separations to storage.

Remember, mastering these fundamental relationships is the bedrock of process calculations. You'll be using these concepts repeatedly as we move through material and energy balances!

---

## Sample Questions and Answers

Here are a few practice questions to test your understanding:

**Question 1 (Conceptual - CO1, CO4):**
Explain why the vapour pressure of a liquid generally increases with temperature. Relate this to the energy required for phase change.

**Answer:**
As the temperature of a liquid increases, its molecules gain kinetic energy. A greater fraction of molecules at the surface will possess sufficient energy to overcome the intermolecular attractive forces holding them in the liquid phase. This leads to an increased rate of vaporization, and consequently, a higher concentration of vapour molecules above the liquid at equilibrium, resulting in an increased vapour pressure. The energy required for this phase change is the enthalpy of vaporization ($\Delta H_{vap}$). A higher temperature provides more of this latent energy to the molecules, making it easier for them to transition into the vapour phase.

**Question 2 (Application - CO1, CO2):**
The vapour pressure of water at 100°C is 760 mmHg. If the enthalpy of vaporization of water is approximately 40.7 kJ/mol, estimate the vapour pressure of water at 110°C using the Clausius-Clapeyron equation. Assume $\Delta H_{vap}$ is constant.

**Given:**
$P_1 = 760$ mmHg
$T_1 = 100^\circ\text{C} = 100 + 273.15 = 373.15$ K
$T_2 = 110^\circ\text{C} = 110 + 273.15 = 383.15$ K
$\Delta H_{vap} = 40.7$ kJ/mol $= 40700$ J/mol
$R = 8.314$ J/(mol·K)

**Solution:**
Using the Clausius-Clapeyron equation:
$$ \ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) $$

Substitute the given values:
$$ \ln\left(\frac{P_2}{760}\right) = -\frac{40700}{8.314}\left(\frac{1}{383.15} - \frac{1}{373.15}\right) $$
$$ \ln\left(\frac{P_2}{760}\right) = -4895.36 \times (0.0026099 - 0.0026797) $$
$$ \ln\left(\frac{P_2}{760}\right) = -4895.36 \times (-0.0000698) $$
$$ \ln\left(\frac{P_2}{760}\right) \approx 0.3417 $$

To find $P_2$, take the exponential of both sides:
$$ \frac{P_2}{760} = e^{0.3417} $$
$$ \frac{P_2}{760} \approx 1.4074 $$
$$ P_2 \approx 1.4074 \times 760 $$
$$ P_2 \approx 1069.6 \text{ mmHg} $$

**Answer:** The estimated vapour pressure of water at 110°C is approximately 1070 mmHg.

**Question 3 (Comparison & Application - CO1, CO5):**
The Antoine equation for benzene is given by:
$\log_{10}(P) = 6.85960 - \frac{1203.53}{T + 219.88}$, where P is in mmHg and T is in °C.
Calculate the vapour pressure of benzene at 70°C. If a distillation column operates at 1 atm (760 mmHg), would benzene boil at 70°C? Explain.

**Solution:**
Using the Antoine equation:
$T = 70^\circ\text{C}$
$$ \log_{10}(P) = 6.85960 - \frac{1203.53}{70 + 219.88} $$
$$ \log_{10}(P) = 6.85960 - \frac{1203.53}{289.88} $$
$$ \log_{10}(P) = 6.85960 - 4.1517 $$
$$ \log_{10}(P) = 2.7079 $$

To find P, take the antilog (10 to the power of both sides):
$$ P = 10^{2.7079} $$
$$ P \approx 510.5 \text{ mmHg} $$

**Explanation:**
The boiling point of a substance is the temperature at which its vapour pressure equals the external pressure. The external pressure in this case is 1 atm, which is 760 mmHg. At 70°C, the vapour pressure of benzene is approximately 510.5 mmHg. Since the vapour pressure (510.5 mmHg) is **less than** the external pressure (760 mmHg), benzene will **not boil** at 70°C. It requires a higher temperature for its vapour pressure to reach 760 mmHg. This highlights how vapour pressure data is essential for predicting boiling points, a key aspect of CO1 and CO2.
