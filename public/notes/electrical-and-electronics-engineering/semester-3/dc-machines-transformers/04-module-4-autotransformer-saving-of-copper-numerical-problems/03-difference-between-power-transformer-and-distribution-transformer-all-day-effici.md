---
title: "Difference between power transformer and distribution transformer – all-day efficiency – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 4: Autotransformer – saving of copper – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b34"
status: "completed"
scrapedAt: "2026-05-23T16:12:28.135Z"
---
# DC MACHINES & TRANSFORMERS: Module 4 - Autotransformer & Transformer Types

This module delves into the specifics of autotransformers, focusing on their copper savings, and then transitions to a comparison between power and distribution transformers, introducing the concept of all-day efficiency with accompanying numerical problems.

---

## 1. Difference Between Power Transformer and Distribution Transformer

While both power transformers and distribution transformers are static electrical devices used to change voltage levels, they are designed and operated with distinct purposes and characteristics. Understanding these differences is crucial for selecting the appropriate transformer for a given application.

### 1.1 Key Differences

| Feature               | Power Transformer                                    | Distribution Transformer                               |
| :-------------------- | :--------------------------------------------------- | :----------------------------------------------------- |
| **Location**          | At generating stations and substations.              | Near the consumer premises (e.g., pole-mounted, pad-mounted). |
| **Size**              | Very large (high power ratings, KVA/MVA).            | Relatively small (lower power ratings, KVA).           |
| **Voltage Ratings**   | High voltage, both primary and secondary (e.g., 400kV, 220kV, 132kV). | Typically step-down from transmission/sub-transmission voltage to distribution voltage (e.g., 33kV to 400/230V). |
| **Load Factor**       | Operated at or near full load for most of the time. | Operated at varying loads, often much lower than full load, for extended periods. |
| **Efficiency**        | Designed for maximum efficiency at or near full load. | Designed for maximum efficiency at approximately 50-70% of full load, to account for varying load conditions. |
| **Losses**            | Copper losses are predominant at full load.          | Iron losses (core losses) are more significant due to continuous operation at nearly constant voltage. |
| **Purpose**           | To step up voltage for efficient transmission over long distances. | To step down voltage for safe and efficient distribution to consumers. |
| **Cooling**           | Forced oil cooling, forced air cooling, etc., are common. | Natural oil cooling, natural air cooling are typically used. |
| **Connections**       | Can be Delta-Star, Star-Star, etc.                   | Primarily Star-Delta for stepping down from high voltage to distribution voltage. |
| **Regulations**       | Voltage regulation is critical and tightly controlled. | Voltage regulation is important but may have slightly wider tolerance. |

### 1.2 Conceptual Basis from Textbooks:

*   **Bimbhra (Chapter 7 - Transformers):** Bimbhra likely discusses the design considerations for transformers, emphasizing how power transformers are optimized for continuous high-power transfer, while distribution transformers are designed for fluctuating loads and are kept energized continuously.
*   **Kothari & Nagrath (Chapter 4 - Transformers):** This textbook would provide a detailed comparison of transformer types, highlighting efficiency optimization curves and loss components (copper vs. iron) relevant to the operational profiles of power and distribution transformers.
*   **K Murugesh Kumar (Chapter 10 - Transformer):** Murugesh Kumar's text would likely elaborate on the constructional differences and the specific application environments that dictate the design choices for each type.
*   **J.B. Gupta (Chapter 4 - Transformer):** Gupta's book would offer a comprehensive overview of transformer applications, clearly differentiating the roles of power and distribution transformers in the power system network.

---

## 2. All-Day Efficiency

All-day efficiency (also known as energy efficiency) is a more practical measure of a transformer's efficiency over a 24-hour period, considering the varying loads that distribution transformers typically experience. It is calculated based on the total energy input and output over a day.

### 2.1 Definition and Formula

All-day efficiency is defined as the ratio of the total energy output in a day to the total energy input in a day.

$$ \text{All-day Efficiency} (\eta_{ad}) = \frac{\text{Total Energy Output (in kWh)}}{\text{Total Energy Input (in kWh)}} $$

Since the energy input is the sum of energy output and energy losses:

$$ \text{All-day Efficiency} (\eta_{ad}) = \frac{\text{Total Energy Output (in kWh)}}{\text{Total Energy Output (in kWh)} + \text{Total Losses (in kWh)}} $$

### 2.2 Calculation of Losses Over a Day

For a distribution transformer, the losses can be categorized into:

1.  **Iron Losses ($P_i$)**: These losses are constant and occur as long as the transformer is energized (i.e., for 24 hours). They are also known as core losses or no-load losses.
2.  **Copper Losses ($P_{cu}$)**: These losses vary with the square of the load current. If the transformer carries a load $x$ times the full load, then the copper loss is $x^2 P_{cu,full\_load}$.

To calculate the all-day efficiency, we need to consider the energy loss due to iron and copper losses over the 24-hour cycle.

**Energy lost due to Iron Losses ($E_i$)**:
$E_i = P_i \times 24$ (where $P_i$ is in kW)

**Energy lost due to Copper Losses ($E_{cu}$)**:
This depends on the load cycle. If the transformer operates at a load $x_1$ for $t_1$ hours, $x_2$ for $t_2$ hours, and so on, such that $\sum t_i = 24$ hours, then:
$E_{cu} = (x_1^2 P_{cu,full\_load} \times t_1) + (x_2^2 P_{cu,full\_load} \times t_2) + \dots$

**Total Energy Output ($E_{out}$)**:
This is the sum of the energy delivered at each load level. If the transformer delivers $S_1$ kVA at a power factor $pf_1$ for $t_1$ hours, $S_2$ kVA at $pf_2$ for $t_2$ hours, etc.:
$E_{out} = (S_1 \times pf_1 \times t_1) + (S_2 \times pf_2 \times t_2) + \dots$ (where $S$ is in kVA, and output is in kWh)

### 2.3 Why All-Day Efficiency is Important for Distribution Transformers

Distribution transformers are connected to the supply mains continuously and are designed to supply varying loads. They are often lightly loaded for a significant portion of the day. Therefore, a transformer with high full-load efficiency but also high iron losses might have poor all-day efficiency. Conversely, a transformer with slightly lower full-load efficiency but very low iron losses might be more efficient on an all-day basis. This is why distribution transformers are designed to have maximum efficiency at a load that is around 50-70% of their full load capacity, considering typical daily load cycles.

### 2.4 Conceptual Basis from Textbooks:

*   **Bimbhra (Chapter 7 - Transformers):** Bimbhra would explain the concept of all-day efficiency as a more realistic measure for distribution transformers, detailing how to calculate it by considering the load cycle and different types of losses.
*   **Kothari & Nagrath (Chapter 4 - Transformers):** This is a prime area where Kothari & Nagrath would excel, providing detailed examples of load cycles and the calculation of all-day efficiency, emphasizing the trade-off between iron and copper losses.
*   **K Murugesh Kumar (Chapter 10 - Transformer):** Murugesh Kumar would likely focus on the practical implications of all-day efficiency in selecting distribution transformers for optimal energy consumption.
*   **J.B. Gupta (Chapter 4 - Transformer):** Gupta would likely present the concept and numerical examples, stressing the importance of minimizing total energy losses over a 24-hour period for economic operation.

---

## 3. Numerical Problems

Let's work through some examples to solidify the understanding of all-day efficiency.

**Example 1: Calculating All-Day Efficiency**

A 100 kVA, 11000/440 V, 50 Hz single-phase distribution transformer has iron losses of 1.5 kW and full-load copper losses of 2.5 kW. The transformer is loaded as follows:

*   1/4 of full load for 6 hours
*   1/2 of full load for 8 hours
*   3/4 of full load for 6 hours
*   Full load for 4 hours

Assume the power factor is unity throughout. Calculate the all-day efficiency.

**Solution:**

**Given:**
*   Rating: 100 kVA
*   $P_i = 1.5$ kW
*   $P_{cu,fl} = 2.5$ kW

**Load Cycle and Corresponding Copper Losses:**

| Load Fraction (x) | Load (kVA) | Time (hours) (t) | Copper Loss ($P_{cu} = x^2 P_{cu,fl}$) (kW) | Energy Output ($E_{out} = x \times S_{fl} \times pf \times t$) (kWh) | Energy Loss (Copper) ($E_{cu} = P_{cu} \times t$) (kWh) |
| :---------------- | :--------- | :--------------- | :---------------------------------------- | :--------------------------------------------------------- | :------------------------------------------------- |
| 1/4               | 25         | 6                | $(1/4)^2 \times 2.5 = 0.15625$              | $(1/4) \times 100 \times 1 \times 6 = 150$                   | $0.15625 \times 6 = 0.9375$                          |
| 1/2               | 50         | 8                | $(1/2)^2 \times 2.5 = 0.625$               | $(1/2) \times 100 \times 1 \times 8 = 400$                   | $0.625 \times 8 = 5.0$                             |
| 3/4               | 75         | 6                | $(3/4)^2 \times 2.5 = 1.40625$              | $(3/4) \times 100 \times 1 \times 6 = 450$                   | $1.40625 \times 6 = 8.4375$                         |
| 1                 | 100        | 4                | $(1)^2 \times 2.5 = 2.5$                  | $1 \times 100 \times 1 \times 4 = 400$                     | $2.5 \times 4 = 10.0$                              |

**Total Energy Calculations:**

*   **Total Energy Output ($E_{out}$)**: $150 + 400 + 450 + 400 = 1400$ kWh
*   **Total Energy Lost due to Copper Losses ($E_{cu}$)**: $0.9375 + 5.0 + 8.4375 + 10.0 = 24.375$ kWh
*   **Energy Lost due to Iron Losses ($E_i$)**: $P_i \times 24 = 1.5 \times 24 = 36$ kWh

**Total Energy Input:**
Total Energy Input = Total Energy Output + Total Losses
Total Energy Input = $1400 + 24.375 + 36 = 1460.375$ kWh

**All-Day Efficiency:**
$$ \eta_{ad} = \frac{\text{Total Energy Output}}{\text{Total Energy Input}} = \frac{1400}{1460.375} $$
$$ \eta_{ad} \approx 0.95865 \text{ or } 95.865\% $$

---

**Example 2: Finding Maximum All-Day Efficiency Load**

A 50 kVA, 11000/440 V transformer has iron losses of 0.4 kW and full-load copper losses of 0.8 kW. Find the load at which the all-day efficiency is maximum.

**Solution:**

For maximum all-day efficiency, the daily energy loss due to iron losses should be equal to the daily energy loss due to copper losses.

Let $P_i$ be the iron loss and $P_{cu,fl}$ be the full-load copper loss.
Let $P_{out}$ be the output power in kW.
Let $S_{fl}$ be the full-load apparent power in kVA.
Let $x$ be the load fraction (output power / full load power).

The output power at load $x$ is $P_{out}(x) = x \times S_{fl} \times pf$.
Assuming unity power factor, $P_{out}(x) = x \times S_{fl}$.

The copper loss at load $x$ is $P_{cu}(x) = x^2 P_{cu,fl}$.

For maximum all-day efficiency, we equate the energy losses:
Energy lost due to iron losses over 24 hours = Energy lost due to copper losses over 24 hours.

If we assume a typical 24-hour operation where the transformer is continuously energized (so iron losses occur for 24 hours), and the copper losses are proportional to the load squared over the entire period, we can simplify this.

The condition for maximum all-day efficiency occurs when **iron losses are equal to copper losses**. This is because iron losses are constant over time, while copper losses vary with the load. To balance these, the operating point where they are equal is often the most efficient for an entire day's operation.

So, we set:
$P_i = P_{cu}(x)$
$P_i = x^2 P_{cu,fl}$

$$ x^2 = \frac{P_i}{P_{cu,fl}} $$
$$ x = \sqrt{\frac{P_i}{P_{cu,fl}}} $$

**Given:**
*   $P_i = 0.4$ kW
*   $P_{cu,fl} = 0.8$ kW

$$ x = \sqrt{\frac{0.4}{0.8}} = \sqrt{0.5} $$
$$ x \approx 0.707 $$

This means the transformer will have maximum all-day efficiency when it is operating at approximately 70.7% of its full load.

The output power at this load fraction is:
Output power = $x \times S_{fl} \times pf = 0.707 \times 50 \text{ kVA} \times 1 = 35.35$ kW (assuming unity power factor).

So, the load at which the all-day efficiency is maximum is **35.35 kW**.

---

### Practice Questions

**Question 1:**
A 150 kVA, 11 kV/415 V single-phase transformer has iron losses of 1.8 kW and full-load copper losses of 2.8 kW. Calculate the all-day efficiency if the transformer is loaded as follows:
*   At 3/4 of full load for 5 hours
*   At 1/2 of full load for 7 hours
*   At 1/4 of full load for 6 hours
*   No load for 6 hours
Assume the power factor is 0.9 lagging throughout.

**Answer:**
First, calculate copper losses at different loads:
*   $P_{cu, 3/4} = (3/4)^2 \times 2.8 = 0.5625 \times 2.8 = 1.575$ kW
*   $P_{cu, 1/2} = (1/2)^2 \times 2.8 = 0.25 \times 2.8 = 0.7$ kW
*   $P_{cu, 1/4} = (1/4)^2 \times 2.8 = 0.0625 \times 2.8 = 0.175$ kW

Calculate energy output:
*   $E_{out, 3/4} = (3/4) \times 150 \times 0.9 \times 5 = 506.25$ kWh
*   $E_{out, 1/2} = (1/2) \times 150 \times 0.9 \times 7 = 472.5$ kWh
*   $E_{out, 1/4} = (1/4) \times 150 \times 0.9 \times 6 = 202.5$ kWh
*   $E_{out, no\_load} = 0$ kWh

Total Energy Output = $506.25 + 472.5 + 202.5 + 0 = 1181.25$ kWh

Calculate energy losses:
*   Energy lost due to Copper losses:
    *   $E_{cu, 3/4} = 1.575 \times 5 = 7.875$ kWh
    *   $E_{cu, 1/2} = 0.7 \times 7 = 4.9$ kWh
    *   $E_{cu, 1/4} = 0.175 \times 6 = 1.05$ kWh
    *   $E_{cu, no\_load} = 0$ kWh
    Total $E_{cu} = 7.875 + 4.9 + 1.05 + 0 = 13.825$ kWh
*   Energy lost due to Iron losses: $E_i = 1.8 \times 24 = 43.2$ kWh

Total Energy Input = Total Energy Output + Total Copper Losses + Total Iron Losses
Total Energy Input = $1181.25 + 13.825 + 43.2 = 1238.275$ kWh

All-day efficiency = $\frac{1181.25}{1238.275} \times 100 \% \approx 95.39\%$

**Question 2:**
A 20 kVA, 6600/220 V transformer has iron losses of 180 W and copper losses of 220 W at full load. Determine the load at which the transformer has maximum all-day efficiency. Also, calculate this maximum all-day efficiency if the transformer is loaded as follows:
*   1/2 full load for 10 hours
*   Full load for 5 hours
*   No load for 9 hours
Assume power factor is unity.

**Answer:**
For maximum all-day efficiency, $P_i = P_{cu}$.
$P_i = 180$ W
$P_{cu,fl} = 220$ W
Load fraction $x = \sqrt{\frac{P_i}{P_{cu,fl}}} = \sqrt{\frac{180}{220}} = \sqrt{\frac{9}{11}} \approx 0.9045$

The load at which maximum all-day efficiency occurs is $0.9045 \times 20$ kVA $= 18.09$ kVA.

Now, calculate the all-day efficiency for the given load cycle:
*   Load = 1/2 full load (10 kVA), time = 10 hours
    *   Copper loss at 1/2 load = $(1/2)^2 \times 220 = 55$ W
    *   Energy output = $(1/2) \times 20 \times 1 \times 10 = 100$ kWh
    *   Energy copper loss = $55 \times 10 / 1000 = 0.55$ kWh
*   Load = Full load (20 kVA), time = 5 hours
    *   Copper loss at full load = 220 W
    *   Energy output = $20 \times 1 \times 5 = 100$ kWh
    *   Energy copper loss = $220 \times 5 / 1000 = 1.1$ kWh
*   Load = No load, time = 9 hours
    *   Energy output = 0 kWh
    *   Energy copper loss = 0 kWh

Total Energy Output = $100 + 100 + 0 = 200$ kWh
Total Energy Copper Loss = $0.55 + 1.1 + 0 = 1.65$ kWh
Total Energy Iron Loss = $180 \times 24 / 1000 = 4.32$ kWh

Total Energy Input = $200 + 1.65 + 4.32 = 205.97$ kWh

Maximum All-Day Efficiency = $\frac{200}{205.97} \times 100 \% \approx 97.10\%$

---

## 4. Autotransformer - Saving of Copper (Brief Review)

While the primary focus of this section is transformer types and all-day efficiency, it's important to recall the concept of autotransformers from earlier in the module, as it relates to efficiency and material usage.

### 4.1 Principle of Operation

An autotransformer uses a single winding that acts as both primary and secondary windings. A portion of this winding is common to both. This allows for electrical connection and electromagnetic induction to transfer energy.

### 4.2 Saving of Copper

Autotransformers can achieve significant savings in copper compared to conventional two-winding transformers of the same rating. This is because a portion of the power is transferred by conduction, not just induction.

The saving of copper is directly related to the ratio of voltages and the proportion of power transferred by conduction.

Let:
*   $S$ be the apparent power rating of the transformer (kVA).
*   $V_1$ be the primary voltage.
*   $V_2$ be the secondary voltage.
*   $k = V_2/V_1$ be the transformation ratio.

For a two-winding transformer, the copper used is proportional to the sum of the copper in the primary and secondary windings.

For an autotransformer, the copper saving is approximately proportional to $(1 - k)$ or $(1 - 1/k)$, depending on whether it's a step-down or step-up autotransformer.

The saving in copper weight is roughly proportional to $1 - |k-1|$.
The greater the ratio $|k-1|$ approaches zero (i.e., $k$ is close to 1), the greater the saving of copper.

### 4.3 Relevance to Efficiency

Autotransformers are generally more efficient than two-winding transformers of the same rating and voltage ratio, especially when the voltage ratio is close to unity. This is due to lower winding resistance and reduced iron core losses, as the net flux in the core is smaller for the same throughput power when a portion is transferred by conduction.

### 4.4 Conceptual Basis from Textbooks:

*   **Bimbhra (Chapter 7 - Transformers):** Bimbhra would have covered the theoretical basis for copper saving in autotransformers, providing the formulas and graphical representations of savings versus voltage ratio.
*   **Kothari & Nagrath (Chapter 4 - Transformers):** Similar to Bimbhra, this textbook would offer detailed derivations and comparisons of copper usage and efficiency between conventional and autotransformers.
*   **K Murugesh Kumar (Chapter 10 - Transformer):** Murugesh Kumar would likely focus on the practical advantages and limitations of autotransformers, including their cost-effectiveness due to reduced copper.
*   **J.B. Gupta (Chapter 4 - Transformer):** Gupta would provide a comparative analysis, emphasizing the applications where autotransformers are preferred due to their copper-saving and efficiency benefits.

---

## 5. Important Points to Remember

*   **Power vs. Distribution Transformers:** Power transformers are for bulk power transfer at high voltages and are operated near full load. Distribution transformers are for final voltage reduction near consumers, operated at variable loads, and designed for higher all-day efficiency at partial loads.
*   **All-Day Efficiency:** This is a crucial metric for distribution transformers, calculated based on energy input/output over 24 hours, factoring in a load cycle.
*   **Losses:** Iron losses are constant, while copper losses vary with the square of the load. For all-day efficiency, it's critical to balance these losses over the operational cycle.
*   **Maximum All-Day Efficiency:** Occurs when the daily energy lost due to iron losses equals the daily energy lost due to copper losses. For a constant iron loss and varying copper loss, this generally corresponds to the operating point where iron loss ($P_i$) equals copper loss ($P_{cu}$).
*   **Autotransformer Copper Saving:** Significant savings in copper are achieved when the voltage ratio ($k$) is close to 1, as a portion of the power is transferred by conduction.

---

## Linking to Course Outcomes:

*   **CO1: Describe the constructional details of DC machines (Knowledge Level: K2)** - While this module focuses on transformers, understanding transformer construction is fundamental to understanding their operation and differences. The distinction between power and distribution transformers implies differences in construction related to cooling, insulation, and size.
*   **CO2: Analyse the performance DC generator under various load conditions (Knowledge Level: K3)** - Not directly addressed in this module.
*   **CO3: Analyse the performance DC motor under various load conditions (Knowledge Level: K3)** - Not directly addressed in this module.
*   **CO4: Analyse the performance of 1-phase transformer and auto-transformer under various load conditions. (Knowledge Level: K3)** - This module directly addresses the performance analysis through the concept of all-day efficiency and the application context of distribution transformers. The comparison with autotransformers also falls under this CO.
*   **CO5: Describe the constructional details and operation of 3-phase transformers. (Knowledge Level: K2)** - Not directly addressed in this module, which focuses on single-phase distribution transformers and autotransformers.

This module strongly contributes to CO4 by delving into transformer performance metrics like all-day efficiency and by implicitly comparing the operational characteristics of different transformer types.
