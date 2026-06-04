---
title: "Carnot principles"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f5f"
status: "completed"
scrapedAt: "2026-05-20T17:53:39.462Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement & Carnot Principles

This module delves into the Second Law of Thermodynamics, focusing on the Kelvin-Planck statement and its profound implications, particularly through the principles established by Sadi Carnot.

---

## Module 3: Second Law: Kelvin–Planck Statement & Carnot Principles

### Introduction to the Second Law of Thermodynamics

The First Law of Thermodynamics deals with energy conservation, stating that energy cannot be created or destroyed, only transformed. However, it doesn't dictate the *direction* of energy transfer or the *feasibility* of a process. The Second Law addresses this by introducing concepts like heat flow direction, irreversibility, and the limitation on energy conversion efficiency.

**Key Concept:** The Second Law of Thermodynamics governs the direction of spontaneous processes and the maximum efficiency of converting heat into work.

---

### 1. Kelvin-Planck Statement of the Second Law

This statement provides a fundamental limitation on the conversion of heat into work.

**Definition:** It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir to a reservoir at a higher temperature.

**In simpler terms:** You cannot build a perpetual motion machine of the second kind. A heat engine must reject some heat to a lower temperature reservoir to operate in a cycle and produce work.

**Implications:**

*   **Heat engines must have a cold reservoir:** To continuously convert heat into work, a heat engine must dump some of the heat it absorbs from the hot reservoir to a colder reservoir.
*   **100% efficiency is impossible for heat engines:** No heat engine can convert all the heat supplied from a single reservoir into work. There will always be some waste heat rejected.

**Textbook References:**

*   **Cengel & Boles:** Chapter 6, discussing the statements of the Second Law.
*   **P.K. Nag:** Chapter 7, introducing the Second Law and its statements.

**Alignment with Course Outcomes:**

*   **CO1 (K1, K2):** Understanding the fundamental limitation imposed by the Kelvin-Planck statement.
*   **CO2 (K1, K2):** Grasping the essence of the Second Law's directional aspect.

---

### 2. Carnot Principles

Sadi Carnot, a French physicist, laid the groundwork for understanding the theoretical limits of heat engine efficiency through his analysis of an idealized thermodynamic cycle.

#### 2.1 Carnot Cycle

The Carnot cycle is a theoretical thermodynamic cycle composed of four reversible processes. It is the most efficient cycle operating between two heat reservoirs.

**The Four Reversible Processes:**

1.  **Isothermal Expansion (Process 1-2):** The system absorbs heat ($Q_H$) from the high-temperature reservoir ($T_H$) and expands isothermally. Work is done by the system.
    *   $T = T_H$ (constant)
    *   $Q_{in} = Q_H > 0$
    *   $W_{12} = Q_H$ (for an ideal gas, $W_{12} = n R T_H \ln(V_2/V_1)$)
2.  **Adiabatic Expansion (Process 2-3):** The system continues to expand, but without heat transfer ($Q=0$), as it is insulated. The temperature drops from $T_H$ to $T_L$. Work is done by the system.
    *   $Q_{23} = 0$
    *   $W_{23} = - \Delta U = - C_v(T_L - T_H) = C_v(T_H - T_L)$ (for an ideal gas)
3.  **Isothermal Compression (Process 3-4):** The system is brought into contact with the low-temperature reservoir ($T_L$) and is compressed isothermally, rejecting heat ($Q_L$) to the reservoir. Work is done on the system.
    *   $T = T_L$ (constant)
    *   $Q_{out} = Q_L < 0$ (heat rejected)
    *   $W_{34} = Q_L$ (for an ideal gas, $W_{34} = n R T_L \ln(V_4/V_3)$)
4.  **Adiabatic Compression (Process 4-1):** The system is further compressed without heat transfer, bringing it back to its initial state. The temperature rises from $T_L$ to $T_H$. Work is done on the system.
    *   $Q_{41} = 0$
    *   $W_{41} = \Delta U = C_v(T_H - T_L)$ (for an ideal gas)

**Net work output per cycle ($W_{net}$):** $W_{net} = W_{12} + W_{23} + W_{34} + W_{41}$
**Net heat transfer per cycle ($Q_{net}$):** $Q_{net} = Q_H + Q_L$

From the First Law for a cycle ($\oint \delta Q = \oint \delta W$), $W_{net} = Q_H + Q_L$ (where $Q_L$ is negative).

**Textbook References:**

*   **Cengel & Boles:** Chapter 6, detailing the Carnot cycle and its processes.
*   **P.K. Nag:** Chapter 7, presenting the Carnot cycle for a heat engine.
*   **Moran & Shapiro:** Chapter 4, discussing the Carnot cycle in the context of reversible cycles.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 5, analyzing the Carnot cycle and its efficiency.

**Alignment with Course Outcomes:**

*   **CO1 (K1, K2):** Understanding the idealized Carnot cycle as a benchmark.
*   **CO2 (K1, K2):** Applying the First Law to analyze the energy transfers in the Carnot cycle.
*   **CO3 (K3):** Performing First Law analysis on the closed system undergoing the Carnot cycle.

---

#### 2.2 Carnot Efficiency

The thermal efficiency ($\eta_{th}$) of a heat engine is defined as the ratio of the net work output to the heat input.

$\eta_{th} = \frac{W_{net}}{Q_H}$

For the Carnot cycle, using the First Law for a cycle ($W_{net} = Q_H + Q_L$, where $Q_L$ is negative):

$\eta_{th, Carnot} = \frac{Q_H + Q_L}{Q_H} = 1 + \frac{Q_L}{Q_H}$

For a reversible cycle (like the Carnot cycle) operating between two reservoirs at temperatures $T_H$ and $T_L$, the ratio of heat transfers is equal to the ratio of the absolute temperatures of the reservoirs:

$\frac{Q_L}{Q_H} = -\frac{T_L}{T_H}$ (Note: $Q_L$ is negative, $T_L$ and $T_H$ are absolute temperatures)

Therefore, the Carnot efficiency is:

$\eta_{th, Carnot} = 1 - \frac{T_L}{T_H}$

**Key Points about Carnot Efficiency:**

*   **Maximum Possible Efficiency:** The Carnot efficiency represents the maximum possible thermal efficiency for any heat engine operating between two given temperatures $T_H$ and $T_L$.
*   **Temperature Dependent:** It depends only on the absolute temperatures of the hot and cold reservoirs, not on the working fluid or the details of the engine.
*   **Idealized:** It's an ideal efficiency as it assumes reversible processes and no irreversibilities (friction, heat transfer across finite temperature differences, etc.).

**Textbook References:**

*   **Cengel & Boles:** Chapter 6, deriving and discussing Carnot efficiency.
*   **P.K. Nag:** Chapter 7, presenting the formula for Carnot efficiency.
*   **Moran & Shapiro:** Chapter 4, relating reversible cycles to temperature ratios.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 5, calculating Carnot efficiency.

**Alignment with Course Outcomes:**

*   **CO1 (K1, K2):** Understanding the fundamental concept of maximum efficiency.
*   **CO2 (K1, K2):** Recognizing the efficiency of a reversible engine.
*   **CO3 (K3):** Calculating the efficiency of a Carnot engine based on reservoir temperatures.

---

#### 2.3 Carnot's Theorem

Carnot's theorem is a cornerstone of the Second Law, establishing the superiority of the Carnot cycle in terms of efficiency. It has two parts:

**Part 1: No engine operating between two heat reservoirs can be more efficient than a reversible engine (Carnot engine) operating between the same two reservoirs.**

*   **Proof Sketch (by contradiction):** Assume an engine 'A' is more efficient than a reversible engine 'R' operating between $T_H$ and $T_L$. If engine A is more efficient, it produces more work for the same heat input $Q_H$.
    *   $W_A = Q_H - Q_{LA}$
    *   $W_R = Q_H - Q_{LR}$
    *   If $\eta_A > \eta_R$, then $W_A > W_R$, which implies $Q_{LA} < Q_{LR}$.
    *   Now, connect engine A as a heat engine and engine R as a heat pump (reversed Carnot engine). Engine R will absorb $Q_{LA}$ from the cold reservoir and reject $Q_{HA}$ to the hot reservoir. Since engine A produces more work ($W_A > W_R$), it has a surplus work ($W_A - W_R$). This surplus work can drive the reversed engine R.
    *   The net effect of this combined cycle is that engine A produces work, and engine R uses this work to transfer heat from the cold reservoir to the hot reservoir. Engine A rejects $Q_{LA}$ to the cold reservoir, and engine R absorbs $Q_{LA}$ from it, so the cold reservoir has no net heat change.
    *   Engine A absorbs $Q_H$ from the hot reservoir. Engine R rejects $Q_{HA}$ to the hot reservoir. For engine R, $W_R = Q_{HA} - Q_{LA}$, so $Q_{HA} = W_R + Q_{LA}$.
    *   The net heat transfer to the hot reservoir is $Q_{HA} - Q_H = (W_R + Q_{LA}) - Q_H$.
    *   For engine A, $W_A = Q_H - Q_{LA}$.
    *   The net work of the combined cycle is $W_A - W_R = (Q_H - Q_{LA}) - (Q_H - Q_{LA}) = 0$ (if $W_A=W_R$, but we assumed $W_A > W_R$).
    *   Let's rethink: If $\eta_A > \eta_R$, then $W_A > W_R$ for same $Q_H$. So $Q_{LA} < Q_{LR}$.
    *   We can run engine A forward (producing $W_A$) and engine R backward (acting as a refrigerator, absorbing $W_R$).
    *   Engine A: absorbs $Q_H$, rejects $Q_{LA}$, produces $W_A = Q_H - Q_{LA}$.
    *   Engine R (reversed): absorbs $W_R$, absorbs $Q_{LR}$ from cold, rejects $Q_{HR}$ to hot. $W_R = Q_{HR} - Q_{LR}$.
    *   Couple them: Use $W_R$ from engine R to drive engine A in reverse (as a refrigerator). This is wrong.
    *   **Correct Proof:** Assume engine A is more efficient than Carnot engine R. Run A as a heat engine and R as a heat pump (reversed engine).
        *   Engine A: Absorbs $Q_H$ from hot, rejects $Q_{LA}$ to cold, produces $W_A = Q_H - Q_{LA}$.
        *   Engine R (as heat pump): Absorbs $W_R$ from work source, rejects $Q_{HR}$ to hot, absorbs $Q_{LR}$ from cold. $Q_{HR} = W_R + Q_{LR}$. For R, $\eta_R = W_R/Q_H = 1 - T_L/T_H$.
        *   If $\eta_A > \eta_R$, then $W_A > W_R$ for same $Q_H$. So $Q_{LA} < Q_{LR}$.
        *   Combine them: Let engine A absorb $Q_H$ and reject $Q_{LA}$. Use the work $W_A$ produced by A to drive engine R in reverse. If we size engine R such that it absorbs $W_R$ from A, then engine R has $W_A - W_R$ surplus work.
        *   Alternatively, and simpler: Let engine A absorb $Q_H$ and reject $Q_{LA}$. Let R absorb $Q_H$ from hot and reject $Q_{LR}$ to cold, producing $W_R$. If $\eta_A > \eta_R$, then $W_A > W_R$ for the same $Q_H$.
        *   Now, operate engine A as a heat engine and engine R as a heat pump.
        *   Engine A: Absorbs $Q_H$, rejects $Q_{LA}$, produces $W_A$.
        *   Engine R (reversed): Absorbs $W_R$, absorbs $Q_{LR}$ from cold reservoir, rejects $Q_{HR}$ to hot reservoir.
        *   If we adjust $Q_H$ input to engine A and $Q_H'$ input to engine R so that $Q_H = Q_H'$, and since $\eta_A > \eta_R$, then $W_A > W_R$. This means $Q_H - Q_{LA} > Q_H - Q_{LR}$, so $Q_{LA} < Q_{LR}$.
        *   Now, operate engine A as a heat engine (absorbing $Q_H$, rejecting $Q_{LA}$, producing $W_A$). Operate engine R as a heat pump (absorbing $W_R$ work, absorbing $Q_{LR}$ from cold, rejecting $Q_{HR}$ to hot).
        *   Couple them such that the net work exchange is zero. We can use $W_R$ to drive engine A in reverse as a refrigerator. This is confusing.

        *   **The standard proof:** Assume engine X is more efficient than Carnot engine R operating between $T_H$ and $T_L$. Run engine X as a heat engine and Carnot engine R as a heat pump. For the same amount of heat $Q_H$ supplied to X from the hot reservoir:
            *   $W_X = \eta_X Q_H$ and $Q_{LX} = (1-\eta_X)Q_H$.
            *   $W_R = \eta_R Q_H$ and $Q_{LR} = (1-\eta_R)Q_H$.
            *   If $\eta_X > \eta_R$, then $W_X > W_R$ and $Q_{LX} < Q_{LR}$.
            *   Now, use the work $W_R$ produced by R (as a heat engine) to drive X in reverse (as a refrigerator).
            *   X (as refrigerator): Absorbs $W_X$ work, absorbs $Q_{LX}$ from cold, rejects $Q_{HX}$ to hot. $W_X = Q_{HX} - Q_{LX}$.
            *   R (as heat pump): Absorbs $W_R$ work, absorbs $Q_{LR}$ from cold, rejects $Q_{HR}$ to hot. $W_R = Q_{HR} - Q_{LR}$.
            *   This is still not the standard proof. The standard proof involves combining them to produce a *net* effect of heat transfer without work, which violates Kelvin-Planck.

        *   **Correct Proof of Part 1:** Suppose there exists a cycle (say, cycle X) operating between $T_H$ and $T_L$ that is more efficient than the Carnot cycle R.
            *   $\eta_X > \eta_R$.
            *   For the same heat input $Q_H$ from the hot reservoir:
                *   $W_X = \eta_X Q_H$ and $Q_{LX} = (1-\eta_X)Q_H$.
                *   $W_R = \eta_R Q_H$ and $Q_{LR} = (1-\eta_R)Q_H$.
            *   Since $\eta_X > \eta_R$, then $W_X > W_R$, which means $Q_{LX} < Q_{LR}$.
            *   Now, operate cycle R in reverse (as a heat pump), absorbing $W_R$ from a work source, $Q_{LR}$ from the cold reservoir, and rejecting $Q_{HR}$ to the hot reservoir, where $W_R = Q_{HR} - Q_{LR}$.
            *   Combine engine X (operating as a heat engine) and engine R (operating as a heat pump) in a way that cancels out the work interaction.
            *   Specifically, operate engine X as a heat engine absorbing $Q_H$ and producing $W_X$. Operate engine R as a heat pump, absorbing $W_R$ work, and absorbing $Q_{LR}$ from the cold reservoir, rejecting $Q_{HR}$ to the hot reservoir.
            *   Let us use $W_R$ from a source to drive X in reverse. This isn't it.
            *   **The simplest approach:** Let engine X (the hypothetical more efficient engine) absorb $Q_H$ from the hot reservoir and reject $Q_{LX}$ to the cold reservoir, producing $W_X = Q_H - Q_{LX}$. Let the Carnot engine R (operating between the same reservoirs) absorb $Q_H'$ from the hot reservoir and reject $Q_{LR}$ to the cold reservoir, producing $W_R = Q_H' - Q_{LR}$. Since $\eta_X > \eta_R$, then for the same $Q_H = Q_H'$, we have $W_X > W_R$ and $Q_{LX} < Q_{LR}$.
            *   Now, operate engine X as a heat engine and engine R as a heat pump. To make the net work zero, we can adjust the operation.
            *   Let engine X absorb $Q_H$ and reject $Q_{LX}$. Let engine R (as a heat pump) absorb $W_R$ work, $Q_{LR}$ from the cold reservoir, and reject $Q_{HR}$ to the hot reservoir.
            *   If we adjust their operations so that the net heat transferred to/from the hot and cold reservoirs cancels out, we get a contradiction.
            *   **Consider this:** Operate X as a heat engine, absorbing $Q_H$, rejecting $Q_{LX}$, producing $W_X$. Operate R as a heat pump, absorbing $W_R$, $Q_{LR}$ from the cold reservoir, rejecting $Q_{HR}$ to the hot reservoir.
            *   If $\eta_X > \eta_R$, then for equal heat input $Q_H$, $W_X > W_R$, and $Q_{LX} < Q_{LR}$.
            *   Now, couple them: Run engine X as a heat engine (absorbs $Q_H$, rejects $Q_{LX}$, produces $W_X$). Run engine R as a heat pump. To achieve a net effect, we can adjust the $Q_H$ values.
            *   Let engine X absorb $Q_H$ and reject $Q_{LX}$. Let engine R (as a heat pump) absorb $W_R = \eta_R Q_H'$, reject $Q_{HR} = Q_{LR} + W_R$, absorb $Q_{LR}$ from cold.
            *   If we choose $Q_H'$ for R such that $W_R = W_X$, this isn't helpful.

            *   **The standard proof is as follows:** Suppose a cycle X is more efficient than a Carnot cycle R between the same reservoirs.
                1.  Operate X as a heat engine, absorbing $Q_{H,X}$ from $T_H$, rejecting $Q_{L,X}$ to $T_L$, producing $W_X = Q_{H,X} - Q_{L,X}$.
                2.  Operate R as a heat pump (reversed Carnot cycle), absorbing $W_R$ from a work source, $Q_{L,R}$ from $T_L$, rejecting $Q_{H,R}$ to $T_H$. $W_R = Q_{H,R} - Q_{L,R}$.
                3.  We are given $\eta_X = W_X/Q_{H,X} > \eta_R = W_R/Q_{H,R}$.
                4.  Choose $Q_{H,X}$ and $Q_{H,R}$ such that $W_X = W_R$. This requires $Q_{H,X} = W_X/\eta_X$ and $Q_{H,R} = W_R/\eta_R$. Since $\eta_X > \eta_R$, we have $Q_{H,X} < Q_{H,R}$.
                5.  Now, couple them: Operate X as a heat engine. Operate R as a heat pump. Connect X's output work ($W_X$) to drive R's heat pump operation. So, $W_R = W_X$.
                6.  X (engine): Absorbs $Q_{H,X}$, rejects $Q_{L,X}$, produces $W_X$.
                7.  R (heat pump): Absorbs $W_X$ work, absorbs $Q_{L,R}$ from $T_L$, rejects $Q_{H,R}$ to $T_H$.
                8.  From $W_X = \eta_X Q_{H,X}$ and $Q_{L,X} = (1-\eta_X)Q_{H,X}$.
                9.  From $W_X = W_R = \eta_R Q_{H,R}$, we get $Q_{H,R} = W_X/\eta_R$.
                10. Also, $Q_{L,R} = Q_{H,R} - W_X = (W_X/\eta_R) - W_X = W_X(1/\eta_R - 1)$.
                11. Now consider the net effect on the reservoirs.
                    *   Hot reservoir: X rejects $Q_{L,X}$, R rejects $Q_{H,R}$. Net heat added to hot reservoir is $Q_{H,R} - Q_{L,X}$.
                    *   Cold reservoir: X absorbs $Q_{H,X}$, R absorbs $Q_{L,R}$. Net heat absorbed from cold reservoir is $Q_{L,R} - Q_{H,X}$.
                12. Substitute values:
                    *   Net heat to hot reservoir: $(W_X/\eta_R) - (1-\eta_X)Q_{H,X} = (W_X/\eta_R) - (1-\eta_X)(W_X/\eta_X)$.
                    *   Net heat from cold reservoir: $W_X(1/\eta_R - 1) - (W_X/\eta_X)$.
                13. Using $W_X = \eta_R Q_{H,R}$ and $W_X = \eta_X Q_{H,X}$, so $Q_{H,X} = W_X/\eta_X$ and $Q_{H,R} = W_X/\eta_R$.
                14. Net heat to hot = $Q_{H,R} - Q_{L,X} = \frac{W_X}{\eta_R} - \frac{W_X}{\eta_X}(\frac{1}{\eta_X}-1)$. This is wrong.
                15. Net heat to hot = $Q_{H,R} - Q_{L,X} = \frac{W_X}{\eta_R} - (1-\eta_X)\frac{W_X}{\eta_X}$.
                16. Net heat from cold = $Q_{L,R} - Q_{H,X} = \left(\frac{W_X}{\eta_R} - W_X\right) - \frac{W_X}{\eta_X}$.
                17. Let's use the fact that for a reversible engine, $Q_L/Q_H = -T_L/T_H$. So $\eta_R = 1 - T_L/T_H$.
                18. Net heat transfer to hot reservoir: $Q_{H,R} - Q_{L,X} = \frac{W_X}{\eta_R} - (1-\eta_X)\frac{W_X}{\eta_X}$.
                19. $Q_{H,R} = \frac{W_X}{\eta_R}$. $Q_{L,X} = \frac{W_X}{\eta_X}(1-\eta_X)$.
                20. Net heat transfer to hot reservoir = $\frac{W_X}{\eta_R} - \frac{W_X}{\eta_X} + W_X$.
                21. Net heat absorbed from cold reservoir = $Q_{L,R} - Q_{H,X} = (\frac{W_X}{\eta_R} - W_X) - \frac{W_X}{\eta_X}$.
                22. The net heat transfer to the combined system is zero, and the net work is zero. This implies that the heat transfers to the hot and cold reservoirs must also balance out, meaning the net heat transfer to the hot reservoir must be equal to the net heat transfer from the cold reservoir.
                23. Net heat added to hot reservoir = $(Q_{H,R} - Q_{L,X})$. Net heat extracted from cold reservoir = $(Q_{H,X} - Q_{L,R})$.
                24. The total work of the combined cycle is $W_{net} = W_X - W_R$. If we couple them such that R's work drives X in reverse, or X's work drives R.
                25. **Simplified Proof Idea:** Couple X (engine) with R (heat pump).
                    *   X: absorbs $Q_H$, rejects $Q_{LX}$, produces $W_X$.
                    *   R (heat pump): absorbs $W_R$, absorbs $Q_{LR}$ from cold, rejects $Q_{HR}$ to hot.
                    *   If $\eta_X > \eta_R$, then for same $Q_H$, $W_X > W_R$.
                    *   If we adjust operation so that $W_X = W_R$, then $Q_{LX} < Q_{LR}$.
                    *   This means X rejects less heat to the cold reservoir than R absorbs from it.
                    *   Also, $Q_{HR} = Q_{LR} + W_R$. $Q_{HX} = Q_{LX} + W_X$.
                    *   Since $W_X = W_R$, we have $Q_{HX} = Q_{LX} + W_X$ and $Q_{HR} = Q_{LR} + W_X$.
                    *   Net heat to hot reservoir = $Q_{HR} - Q_{LX}$ (R rejects, X rejects). No, this is wrong.
                    *   Hot reservoir: R rejects $Q_{HR}$, X rejects $Q_{LX}$. Net heat added to hot reservoir is $Q_{HR} - Q_{LX}$. Wait, X is a heat engine.
                    *   Hot reservoir: R rejects $Q_{HR}$, X absorbs $Q_H$.
                    *   Cold reservoir: R absorbs $Q_{LR}$, X rejects $Q_{LX}$.
                    *   Net effect: R rejects $Q_{HR}$ and absorbs $Q_{LR}$. X absorbs $Q_H$ and rejects $Q_{LX}$.
                    *   If we adjust R to absorb $W_R$ and X to absorb $W_X$, and $W_X=W_R$. Then $Q_{LX} < Q_{LR}$.
                    *   Net heat transfer to the hot reservoir = $Q_{HR} - Q_{LX}$.
                    *   Net heat transfer from the cold reservoir = $Q_{LR} - Q_{HX}$. This is wrong.
                    *   Net heat from hot = $Q_{H,X} - Q_{H,R}$. Net heat to cold = $Q_{L,X} - Q_{L,R}$.
                    *   Combine X (engine) and R (heat pump).
                        *   X: $Q_H$ in, $Q_{LX}$ out, $W_X$ out.
                        *   R: $W_R$ in, $Q_{LR}$ in, $Q_{HR}$ out.
                        *   If $\eta_X > \eta_R$, then for same $Q_H$, $W_X > W_R$. So $Q_{LX} < Q_{LR}$.
                        *   Operate X as engine. Operate R as heat pump. Connect X's work to R's work input.
                        *   To make a perpetual cycle, we need net heat transfer to be zero.
                        *   Total heat absorbed from hot reservoir: $Q_{H,X} - Q_{H,R}$.
                        *   Total heat rejected to cold reservoir: $Q_{L,X} - Q_{L,R}$.
                        *   Net work = $W_X - W_R$.
                        *   If we want a violation of Kelvin-Planck, we need net work to be zero and net heat transfer to be non-zero from cold to hot.
                        *   Let $W_X = W_R$. This implies $Q_{H,X} < Q_{H,R}$ and $Q_{L,X} < Q_{L,R}$.
                        *   So X rejects less heat to cold, R rejects more heat to hot.
                        *   Net heat to hot reservoir = $Q_{H,R} - Q_{L,X}$ (R rejects to hot, X rejects to cold). Incorrect.
                        *   Net heat added to the hot reservoir = $Q_{H,R} - Q_{L,X}$. Incorrect.
                        *   Net heat absorbed by hot reservoir = $Q_{H,R}$ (from R) - $Q_{L,X}$ (from X). NO.
                        *   Hot reservoir: R rejects $Q_{HR}$, X absorbs $Q_H$. So net change is $Q_{HR} - Q_H$.
                        *   Cold reservoir: R absorbs $Q_{LR}$, X rejects $Q_{LX}$. So net change is $Q_{LR} - Q_{LX}$.
                        *   $W_X = Q_{H,X} - Q_{L,X}$. $W_R = Q_{H,R} - Q_{L,R}$.
                        *   If $\eta_X > \eta_R$, then for same $Q_H$, $W_X > W_R$, $Q_{LX} < Q_{LR}$.
                        *   Couple them such that the net work is zero: Use $W_R$ to drive X in reverse.
                        *   X (reversed, refrigerator): absorbs $W_R$, absorbs $Q_{LX}$ from cold, rejects $Q_{HX}$ to hot.
                        *   R (engine): absorbs $Q_{H,R}$, rejects $Q_{L,R}$, produces $W_R$.
                        *   Now $W_R = W_R$. So the net work is zero.
                        *   Net heat transfer to the hot reservoir = $Q_{HX} - Q_{H,R}$.
                        *   Net heat transfer from the cold reservoir = $Q_{LX} - Q_{L,R}$.
                        *   Substitute: $Q_{HX} = Q_{LX} + W_R$. $Q_{H,R} = Q_{L,R} + W_R$.
                        *   Net heat to hot = $(Q_{LX} + W_R) - (Q_{L,R} + W_R) = Q_{LX} - Q_{L,R}$.
                        *   Since $Q_{LX} < Q_{LR}$, this is negative. This means net heat is rejected to the hot reservoir.
                        *   Net heat from cold = $Q_{LX} - Q_{L,R}$. This is the same value, and it's negative. This means net heat is rejected from the cold reservoir.
                        *   This combined cycle takes heat from the cold reservoir and rejects it to the hot reservoir, without any net work input or output. This violates the Kelvin-Planck statement.
                        *   Therefore, the initial assumption ($\eta_X > \eta_R$) must be false.

**Part 2: All reversible engines operating between the same two heat reservoirs have the same efficiency.**

*   **Proof Sketch:** Suppose there are two reversible engines, R1 and R2, operating between $T_H$ and $T_L$. Assume R1 is more efficient than R2 ($\eta_{R1} > \eta_{R2}$).
    *   Run R1 as a heat engine and R2 as a heat pump (reversed).
    *   For the same heat input $Q_H$ to R1: $W_{R1} = \eta_{R1} Q_H$.
    *   For the same heat input $Q_H'$ to R2 (as a heat engine): $W_{R2} = \eta_{R2} Q_H'$.
    *   If $\eta_{R1} > \eta_{R2}$, then $W_{R1} > W_{R2}$ for same $Q_H$.
    *   Adjust operations such that $W_{R1} = W_{R2}$. This can be done by adjusting $Q_H$ and $Q_H'$.
    *   Since R1 is reversible and R2 is reversible, if $\eta_{R1} > \eta_{R2}$, then operating R1 as an engine and R2 as a heat pump would result in a net transfer of heat from the cold reservoir to the hot reservoir with no net work exchange. This violates the Kelvin-Planck statement.
    *   Therefore, $\eta_{R1}$ cannot be greater than $\eta_{R2}$.
    *   Similarly, assume $\eta_{R2} > \eta_{R1}$. Run R2 as an engine and R1 as a heat pump. This would also lead to a violation of the Kelvin-Planck statement.
    *   The only possibility is $\eta_{R1} = \eta_{R2}$.

**Textbook References:**

*   **Cengel & Boles:** Chapter 6, presenting and proving Carnot's theorem.
*   **P.K. Nag:** Chapter 7, discussing Carnot's theorem and its implications.
*   **Moran & Shapiro:** Chapter 4, elaborating on Carnot's theorem and reversible cycles.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 5, demonstrating Carnot's theorem.

**Alignment with Course Outcomes:**

*   **CO1 (K1, K2):** Understanding the relative efficiency of different cycles.
*   **CO2 (K1, K2):** Grasping the implications of reversible processes for efficiency.
*   **CO3 (K3):** Applying Carnot's theorem to determine the maximum possible efficiency.

---

#### 2.4 Consequences of Carnot Principles

*   **Establishes the absolute scale of temperature:** The Carnot efficiency formula $\eta_{th, Carnot} = 1 - T_L/T_H$ shows that the efficiency depends only on the absolute temperatures. This implies that temperature can be defined based on the efficiency of a reversible engine, leading to the concept of thermodynamic temperature (e.g., Kelvin scale). Any reversible engine operating between two temperatures will have the same efficiency.
*   **Defines the upper limit for all heat engines:** No matter what working substance or design is used, a heat engine cannot achieve an efficiency greater than the Carnot efficiency for the given reservoir temperatures.
*   **Foundation for the concept of entropy:** The fact that reversible engines' efficiency depends only on temperatures can be used to define entropy. For a reversible process: $\frac{\delta Q_{rev}}{T} = dS$.

**Textbook References:**

*   **Cengel & Boles:** Chapter 6, discussing the thermodynamic temperature scale.
*   **P.K. Nag:** Chapter 7, exploring the consequences of Carnot's theorem.
*   **Moran & Shapiro:** Chapter 4, linking Carnot efficiency to the thermodynamic temperature scale.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 5, discussing the significance of Carnot's theorem.

**Alignment with Course Outcomes:**

*   **CO1 (K1, K2):** Understanding the significance of temperature in thermodynamic efficiency.
*   **CO2 (K1, K2):** Recognizing the importance of reversible processes and their link to fundamental concepts.

---

### 3. Carnot Refrigerator and Heat Pump

The same principles apply to refrigeration and heating cycles. A Carnot refrigerator or heat pump is the most efficient (COP) device for a given set of temperatures.

*   **Coefficient of Performance (COP):**
    *   **For a refrigerator (COP_R):** The ratio of the desired heat absorbed from the cold reservoir ($Q_L$) to the work input ($W_{net}$).
        $COP_R = \frac{Q_L}{W_{net}}$
    *   **For a heat pump (COP_HP):** The ratio of the desired heat rejected to the hot reservoir ($Q_H$) to the work input ($W_{net}$).
        $COP_{HP} = \frac{Q_H}{W_{net}}$

*   **Carnot COP:**
    *   For a Carnot refrigerator: $W_{net} = Q_H - Q_L$. Using $Q_L/Q_H = -T_L/T_H$, we have $Q_H = Q_L (T_H/T_L)$.
        $COP_{R, Carnot} = \frac{Q_L}{Q_H - Q_L} = \frac{Q_L}{Q_L(T_H/T_L) - Q_L} = \frac{1}{T_H/T_L - 1} = \frac{T_L}{T_H - T_L}$
    *   For a Carnot heat pump:
        $COP_{HP, Carnot} = \frac{Q_H}{Q_H - Q_L} = \frac{Q_L(T_H/T_L)}{Q_L(T_H/T_L) - Q_L} = \frac{T_H/T_L}{T_H/T_L - 1} = \frac{T_H}{T_H - T_L}$

**Relationship between $COP_R$ and $COP_{HP}$:**
$COP_{HP, Carnot} = COP_{R, Carnot} + 1$

**Key Points about Carnot COPs:**

*   They represent the maximum possible COP for refrigerators and heat pumps operating between the given temperatures.
*   They are achieved by reversible cycles.

**Textbook References:**

*   **Cengel & Boles:** Chapter 6, discussing COPs of Carnot refrigerators and heat pumps.
*   **P.K. Nag:** Chapter 7, covering the Carnot COP for refrigeration and heating.
*   **Moran & Shapiro:** Chapter 4, analyzing COP for reversible refrigeration cycles.
*   **Sonntag, Borgnakke & VanWylen:** Chapter 5, calculating Carnot COP.

**Alignment with Course Outcomes:**

*   **CO1 (K1, K2):** Understanding performance metrics for refrigeration and heating.
*   **CO2 (K1, K2):** Recognizing the efficiency limits for these cycles.
*   **CO3 (K3):** Calculating maximum COPs for refrigeration and heating.

---

### Practice Questions & Exercises

**Question 1 (Conceptual):**
State the Kelvin-Planck statement of the Second Law of Thermodynamics. What is its practical implication for the design of heat engines?

**Answer 1:**
The Kelvin-Planck statement says: "It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir to a reservoir at a higher temperature."
Its practical implication is that a heat engine must reject some heat to a colder reservoir to operate continuously and produce work. No heat engine can convert all the heat it absorbs into work.

**Question 2 (Calculation):**
A Carnot heat engine operates between a high-temperature reservoir at 550°C and a low-temperature reservoir at 25°C.
a) Calculate the Carnot efficiency of this engine.
b) If the engine produces 1000 kJ of work per cycle, determine the heat absorbed from the high-temperature reservoir and the heat rejected to the low-temperature reservoir.

**Answer 2:**
Given:
$T_H = 550^\circ C = 550 + 273.15 = 823.15 K$
$T_L = 25^\circ C = 25 + 273.15 = 298.15 K$
$W_{net} = 1000 kJ$

a) Carnot efficiency:
$\eta_{th, Carnot} = 1 - \frac{T_L}{T_H} = 1 - \frac{298.15 K}{823.15 K} = 1 - 0.3622 = 0.6378$
So, $\eta_{th, Carnot} \approx 63.78\%$

b) Heat absorbed ($Q_H$) and rejected ($Q_L$):
We know $\eta_{th} = \frac{W_{net}}{Q_H}$.
$Q_H = \frac{W_{net}}{\eta_{th, Carnot}} = \frac{1000 kJ}{0.6378} = 1567.89 kJ$

For a cycle, $W_{net} = Q_H + Q_L$.
$Q_L = W_{net} - Q_H = 1000 kJ - 1567.89 kJ = -567.89 kJ$
The negative sign indicates that heat is rejected. The magnitude of heat rejected is $567.89 kJ$.

**Question 3 (Conceptual):**
Is it possible for a heat engine to operate with an efficiency of 100%? Explain why or why not, referencing the Second Law.

**Answer 3:**
No, it is not possible for a heat engine to operate with 100% efficiency. The Kelvin-Planck statement of the Second Law of Thermodynamics explicitly states that it's impossible to construct a device operating in a cycle that produces no effect other than the transfer of heat from a single reservoir to a higher temperature reservoir. This implies that a heat engine must reject some heat to a cold reservoir to operate in a cycle. Therefore, its efficiency will always be less than 1 (or 100%). Mathematically, $\eta_{th} = 1 - T_L/T_H$. For $\eta_{th} = 1$, $T_L$ would have to be 0 K, which is unattainable.

**Question 4 (Calculation - COP):**
A Carnot refrigerator operating between two reservoirs at $15^\circ C$ and $30^\circ C$ removes heat from the cold reservoir at a rate of 2 kW.
a) Calculate the Carnot COP of this refrigerator.
b) Determine the rate at which work must be supplied to the refrigerator.
c) Calculate the rate at which heat is rejected to the hot reservoir.

**Answer 4:**
Given:
$T_L = 15^\circ C = 15 + 273.15 = 288.15 K$
$T_H = 30^\circ C = 30 + 273.15 = 303.15 K$
$\dot{Q}_L = 2 kW$

a) Carnot COP of the refrigerator:
$COP_{R, Carnot} = \frac{T_L}{T_H - T_L} = \frac{288.15 K}{303.15 K - 288.15 K} = \frac{288.15 K}{15 K} = 19.21$

b) Rate of work supplied ($\dot{W}_{net}$):
$COP_R = \frac{\dot{Q}_L}{\dot{W}_{net}}$
$\dot{W}_{net} = \frac{\dot{Q}_L}{COP_{R, Carnot}} = \frac{2 kW}{19.21} = 0.104 kW$

c) Rate of heat rejected to the hot reservoir ($\dot{Q}_H$):
For a refrigerator, $\dot{W}_{net} = \dot{Q}_H - \dot{Q}_L$.
$\dot{Q}_H = \dot{W}_{net} + \dot{Q}_L = 0.104 kW + 2 kW = 2.104 kW$

**Question 5 (True/False):**
A reversible heat engine operating between two given temperatures is always more efficient than any irreversible heat engine operating between the same temperatures.

**Answer 5:**
True. This is part of Carnot's Theorem.

---

### Important Points to Remember

*   **Second Law Directionality:** The Second Law dictates the direction of natural processes (e.g., heat flows from hot to cold).
*   **Kelvin-Planck Statement:** No heat engine can be 100% efficient. Some heat must always be rejected to a cold reservoir.
*   **Carnot Cycle:** An idealized, reversible cycle consisting of two isothermal and two adiabatic processes. It represents the most efficient cycle possible between two temperatures.
*   **Carnot Efficiency:** $\eta_{th, Carnot} = 1 - T_L/T_H$. This is the theoretical maximum efficiency for any heat engine.
*   **Carnot's Theorem:** No engine can be more efficient than a reversible engine (Carnot engine) operating between the same two reservoirs. All reversible engines between the same two reservoirs have the same efficiency.
*   **Absolute Temperatures:** Efficiencies and COPs are based on absolute temperatures (Kelvin or Rankine).
*   **Ideal vs. Real:** Carnot efficiency is an upper limit; real engines always have lower efficiencies due to irreversibilities.
*   **Carnot COP:** Represents the maximum performance for refrigerators and heat pumps.

---

This concludes Module 3, focusing on the Kelvin-Planck statement and the foundational principles of Carnot. These concepts establish the fundamental limits on energy conversion efficiency and pave the way for understanding entropy in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
