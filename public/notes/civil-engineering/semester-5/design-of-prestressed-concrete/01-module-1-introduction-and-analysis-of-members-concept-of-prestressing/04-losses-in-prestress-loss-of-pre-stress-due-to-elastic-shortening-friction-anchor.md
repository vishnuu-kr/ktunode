---
title: "Losses in Prestress: Loss of Pre stress due to Elastic shortening, Friction, Anchorage slip, Creep of concrete, Shrinkage of concrete and Relaxation of steel - Total Loss."
subject: "DESIGN OF PRESTRESSED CONCRETE"
module: "Module 1: Introduction and Analysis of Members: Concept of Prestressing "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fdd"
status: "completed"
scrapedAt: "2026-05-20T18:47:52.360Z"
---
# DESIGN OF PRESTRESSED CONCRETE

## Module 1: Introduction and Analysis of Members: Concept of Prestressing

### Topic: Losses in Prestress: Loss of Prestress due to Elastic Shortening, Friction, Anchorage Slip, Creep of Concrete, Shrinkage of Concrete, and Relaxation of Steel - Total Loss

---

### Learning Outcomes:

*   Understand the necessity of accounting for losses in prestress.
*   Identify and explain the various causes of prestress loss.
*   Quantify the loss of prestress due to elastic shortening.
*   Quantify the loss of prestress due to friction.
*   Quantify the loss of prestress due to anchorage slip.
*   Quantify the loss of prestress due to creep of concrete.
*   Quantify the loss of prestress due to shrinkage of concrete.
*   Quantify the loss of prestress due to relaxation of steel.
*   Calculate the total loss of prestress in a given member.

---

### 1. Introduction to Losses in Prestress

Prestressing is a technique used to induce compressive stresses in concrete members to counteract tensile stresses caused by external loads. The effectiveness of prestressing depends on the magnitude of the prestressing force maintained in the tendons throughout the service life of the structure. However, several phenomena cause a reduction in the initial prestressing force, which are collectively known as **losses in prestress**.

**Importance of Accounting for Losses:**

*   **Ensures Serviceability:** Underestimation of losses can lead to higher tensile stresses under service loads, potentially causing cracking and reducing the durability and aesthetic appearance of the structure.
*   **Accurate Design:** Proper calculation of losses is crucial for designing the prestressing force required to achieve the desired level of prestress and for determining the adequate section properties of the concrete member.
*   **Safety and Durability:** Overcoming the predicted losses ensures that the designed level of compression remains effective, contributing to the long-term safety and durability of the structure.

---

### 2. Types of Losses in Prestress

Losses in prestress can be broadly categorized into two types:

*   **Immediate Losses:** These occur almost instantly after the prestressing force is applied.
*   **Time-Dependent Losses:** These occur gradually over time due to the properties of concrete and steel.

---

### 3. Immediate Losses

#### 3.1. Loss due to Elastic Shortening of Concrete

**Concept:**
When a prestressing force is applied to a concrete member, the concrete itself shortens elastically under the compressive stress induced by the tendons. In pre-tensioned members, the tendons are bonded to the concrete and therefore shorten along with it, resulting in a loss of prestress. In post-tensioned members, if the prestressing force is applied simultaneously to all tendons, this loss is also present due to the elastic shortening of concrete under the total prestressing force.

**Calculation:**
The loss of stress in the steel due to elastic shortening is equal to the stress in the concrete at the level of the tendons.

Let:
*   $f_{sc}$ = stress in concrete at the level of tendons (due to prestressing).
*   $\Delta f_p$ = loss of stress in prestressing steel.
*   $E_s$ = modulus of elasticity of prestressing steel.
*   $E_c$ = modulus of elasticity of concrete.

The strain in the concrete at the level of the tendons is $\epsilon_c = \frac{f_{sc}}{E_c}$.
Since the steel is bonded to the concrete, the steel also experiences this strain.
Therefore, the loss of stress in the steel is $\Delta f_p = \epsilon_c \times E_s = \frac{f_{sc}}{E_c} \times E_s = \frac{E_s}{E_c} f_{sc}$.

The ratio $\frac{E_s}{E_c}$ is often denoted by $\alpha_e$ (modular ratio).

$\Delta f_p = \alpha_e f_{sc}$

**Important Considerations:**

*   **Pre-tensioned Members:** $f_{sc}$ is the stress in concrete due to the initial prestressing force.
*   **Post-tensioned Members:**
    *   **Single Tendon:** If prestressing is applied using a single tendon, the loss is calculated based on the stress in concrete due to that tendon.
    *   **Multiple Tendons (Anchored Simultaneously):** The loss is calculated based on the stress in concrete due to the *total* prestressing force.
    *   **Multiple Tendons (Anchored Sequentially):** The loss in each tendon is calculated based on the stress in concrete due to the tendons already anchored. This makes the calculation more complex, and often the loss due to the final total prestressing force is a reasonable approximation.

**Example:**
A pre-tensioned concrete beam is subjected to an initial prestressing force of $P_0 = 1000$ kN. The stress in the concrete at the centroid of the tendons is $f_{sc} = 10$ N/mm². Given $E_s = 200$ GPa and $E_c = 30$ GPa, calculate the loss of prestress due to elastic shortening.

*   $\alpha_e = \frac{E_s}{E_c} = \frac{200}{30} \approx 6.67$
*   $\Delta f_p = \alpha_e f_{sc} = 6.67 \times 10 \text{ N/mm}^2 = 66.7 \text{ N/mm}^2$.
*   Loss of force = $\Delta f_p \times A_p$, where $A_p$ is the area of prestressing steel.

#### 3.2. Loss due to Friction (Post-tensioned Members Only)

**Concept:**
In post-tensioned members, the tendons are passed through ducts or sheaths. Due to the curvature of the tendons and irregularities in the duct, a frictional resistance develops between the tendon and the duct as the tendon is tensioned and anchored. This friction causes a gradual reduction in the prestressing force along the length of the tendon from the point of tensioning.

**Causes of Friction:**

*   **Curvature Effect:** Friction due to the bending of tendons around curves (e.g., in continuous beams or curved members).
*   **Wobble Effect:** Irregularities in the alignment of ducts along the straight portions of the tendon, causing a slight deviation and resulting in friction.

**Calculation:**
The loss of prestress due to friction can be represented by an exponential decay function.

Let:
*   $P_x$ = prestressing force at a distance $x$ from the jacking end.
*   $P_0$ = initial prestressing force at the jacking end.
*   $\mu$ = coefficient of friction between the tendon and the duct (depends on the material of the duct, sheath, and presence of grease).
*   $k$ = wobble coefficient (accounts for the irregularity of the duct).
*   $x$ = distance along the tendon from the jacking end.
*   $\theta$ = total angle of curvature in radians over the length $x$.

The relationship is given by:
$P_x = P_0 e^{-(\mu \theta + kx)}$

**Loss of prestress along the length:**
The loss of prestress at a distance $x$ from the jacking end is $P_0 - P_x$.

**Specific Cases:**

*   **Straight tendons:** If the tendon is straight ($\theta = 0$), the loss is only due to the wobble effect: $P_x = P_0 e^{-kx}$.
*   **Curved tendons:** Both $\mu$ and $k$ contribute to the loss.

**Simplified approach for design codes (often used):**
For design purposes, codes often provide empirical formulas or specify maximum allowable losses. A common approach is to calculate the loss at the anchor block (e.g., $x = L$, the total length) and at the other end of the member if jacking is done from one end.

**Loss at the anchor block (end $L$):**
$P_L = P_0 e^{-(\mu \theta_L + kL)}$ (if jacking from one end)
$\Delta P_{friction} = P_0 - P_L$

If jacking is from both ends, the calculation becomes more complex, considering the force distribution.

**Example:**
In a post-tensioned beam, the tendon is curved. The total angle of curvature over a length of 20 m is $0.2$ radians. The wobble coefficient $k = 0.002$ per meter. The coefficient of friction $\mu = 0.3$. The initial prestressing force is $P_0 = 1200$ kN. Calculate the force at the end of the 20 m length.

*   $\Delta P_{friction} = P_0 (1 - e^{-(\mu \theta + kx)})$
*   $\Delta P_{friction} = 1200 \left(1 - e^{-(0.3 \times 0.2 + 0.002 \times 20)}\right)$
*   $\Delta P_{friction} = 1200 \left(1 - e^{-(0.06 + 0.04)}\right)$
*   $\Delta P_{friction} = 1200 \left(1 - e^{-0.1}\right)$
*   $\Delta f_p \approx 1200 (1 - 0.9048) = 1200 \times 0.0952 = 114.24$ kN.
*   Force at the end = $P_0 - \Delta P_{friction} = 1200 - 114.24 = 1085.76$ kN.

**Important Points:**

*   Friction losses are significant and must be accounted for in post-tensioned members.
*   Proper grouting of ducts after tensioning in post-tensioned members helps reduce friction and bond protection.
*   The coefficient of friction and wobble coefficient are empirical and vary depending on the construction practices and materials used.

#### 3.3. Loss due to Anchorage Slip (Post-tensioned Members Only)

**Concept:**
In post-tensioned construction, the prestressing force is transferred to the concrete by anchorages at the ends of the tendons. When the jack is released, there is a slight backward movement or "slip" of the anchorage device relative to the concrete, which reduces the effective prestressing force in the steel.

**Calculation:**
This loss is usually determined experimentally or based on experience with specific anchorage systems. It is typically expressed as a fixed amount of slip or a loss of stress in the steel.

Let:
*   $\Delta_{slip}$ = total slip of the anchorage device (e.g., in mm).
*   $L$ = length of the tendon.
*   $\Delta f_p$ = loss of stress in prestressing steel due to anchorage slip.

The strain corresponding to the slip is $\epsilon_{slip} = \frac{\Delta_{slip}}{L}$.
The loss of stress is $\Delta f_p = \epsilon_{slip} \times E_s = \frac{\Delta_{slip}}{L} E_s$.

**Example:**
In a post-tensioned member, the anchorage slip is observed to be $6$ mm. The prestressing tendon is $15$ m long, and the modulus of elasticity of steel is $E_s = 200$ GPa. Calculate the loss of prestress due to anchorage slip.

*   $L = 15 \text{ m} = 15000 \text{ mm}$
*   $\Delta_{slip} = 6 \text{ mm}$
*   $E_s = 200 \text{ GPa} = 200,000 \text{ N/mm}^2$
*   $\Delta f_p = \frac{\Delta_{slip}}{L} E_s = \frac{6 \text{ mm}}{15000 \text{ mm}} \times 200,000 \text{ N/mm}^2 = 0.0004 \times 200,000 \text{ N/mm}^2 = 80 \text{ N/mm}^2$.

**Important Points:**

*   The magnitude of anchorage slip depends on the type of anchorage system used (e.g., wedge type, cone type).
*   This loss is usually a fixed value for a given system and is applied at the anchorage.

---

### 4. Time-Dependent Losses

These losses occur over time and are related to the time-dependent behavior of concrete and steel.

#### 4.1. Loss due to Creep of Concrete

**Concept:**
Creep is the phenomenon of plastic deformation of concrete under sustained stress over a long period. When concrete creeps, it shortens. If the prestressing tendons are bonded to the concrete, they are forced to shorten with the concrete, resulting in a loss of prestress.

**Factors Affecting Creep:**

*   **Magnitude of sustained stress:** Higher stress leads to more creep.
*   **Age of concrete at loading:** Younger concrete creeps more.
*   **Type of cement and aggregates.**
*   **Environmental conditions:** Humidity, temperature.
*   **Section of the member and ratio of surface area to volume.**

**Calculation:**
The loss of stress due to creep can be estimated as:

$\Delta f_p = K_{creep} \times E_s \times (\text{creep strain})$

A more common approach is to relate it to the loss of stress in the concrete.

$\Delta f_p = \alpha_e \times (\text{stress change in concrete due to creep})$

Alternatively, a simplified approach is often used based on empirical coefficients:

$\Delta f_p = \alpha_e \times (\text{stress in concrete at the time of prestressing, but after elastic shortening})$

Or, using specific creep coefficients provided by design codes. For example, based on IS 1343 (Indian Standard):

$\Delta f_p = \frac{E_s}{E_c} \times (\text{stress in steel corresponding to creep strain in concrete})$

A commonly used simplified formula based on British standards (CP110) and others is:

$\Delta f_p = \alpha_e \times \text{stress in concrete at the level of tendons}$

This formula often incorporates the effect of creep implicitly. However, a more direct approach for calculating creep strain is:

$\text{Creep strain} = \phi \times \epsilon_{elastic}$, where $\phi$ is the creep coefficient and $\epsilon_{elastic}$ is the initial elastic strain.

Loss of stress due to creep = $E_s \times \text{creep strain} = E_s \times \phi \times \epsilon_{elastic} = E_s \times \phi \times \frac{f_{sc}}{E_c} = \alpha_e \times \phi \times f_{sc}$

Where $f_{sc}$ is the sustained stress in concrete at the level of the tendon.

**Example:**
Consider a post-tensioned beam where the sustained stress in concrete at the level of the tendons is $f_{sc} = 12$ N/mm². The modular ratio $\alpha_e = 6$ and the creep coefficient $\phi = 2.0$. Calculate the loss of prestress due to creep.

*   $\Delta f_p = \alpha_e \times \phi \times f_{sc}$
*   $\Delta f_p = 6 \times 2.0 \times 12 \text{ N/mm}^2 = 144 \text{ N/mm}^2$.

**Important Points:**

*   Creep is a significant factor, especially for members subjected to sustained loads for extended periods.
*   The creep coefficient can vary widely. Design codes provide guidelines for its estimation.
*   The presence of shrinkage also interacts with creep, affecting the overall strain.

#### 4.2. Loss due to Shrinkage of Concrete

**Concept:**
Shrinkage is the reduction in the volume of concrete due to the loss of moisture from the cement paste. When concrete shrinks, it tends to shorten. If the tendons are bonded to the concrete, they are subjected to a tensile strain, which leads to a reduction in the compressive prestressing force.

**Factors Affecting Shrinkage:**

*   **Ambient humidity:** Lower humidity leads to more shrinkage.
*   **Type of cement and aggregates.**
*   **Water-cement ratio:** Lower water-cement ratio leads to more shrinkage.
*   **Size and shape of the member:** Smaller members with higher surface area to volume ratio shrink more.
*   **Curing conditions.**

**Calculation:**
The loss of prestress due to shrinkage is calculated as the product of the modulus of elasticity of steel and the shrinkage strain.

$\Delta f_p = E_s \times \epsilon_{sh}$

Where $\epsilon_{sh}$ is the shrinkage strain.

Shrinkage strain is often estimated using empirical formulas based on factors like member size and ambient humidity. For example, in IS 1343, shrinkage strain can range from $110 \times 10^{-6}$ to $320 \times 10^{-6}$ depending on conditions.

For bonded tendons, the shrinkage strain in the concrete is transferred to the steel.

$\Delta f_p = \alpha_e \times (\text{stress in concrete at the level of tendons due to shrinkage})$

However, a direct calculation using shrinkage strain is more common:

$\Delta f_p = E_s \times \epsilon_{sh}$

**Example:**
In a concrete member, the estimated shrinkage strain is $\epsilon_{sh} = 200 \times 10^{-6}$. The modulus of elasticity of steel is $E_s = 200$ GPa. Calculate the loss of prestress due to shrinkage.

*   $E_s = 200 \text{ GPa} = 200,000 \text{ N/mm}^2$
*   $\Delta f_p = E_s \times \epsilon_{sh} = 200,000 \text{ N/mm}^2 \times (200 \times 10^{-6})$
*   $\Delta f_p = 200,000 \times 0.0002 = 40 \text{ N/mm}^2$.

**Important Points:**

*   Shrinkage losses are significant and occur over time.
*   The magnitude of shrinkage strain needs careful estimation based on relevant codes and environmental conditions.
*   In post-tensioned members, shrinkage of the concrete member itself can induce stresses in the tendon due to bond after grouting.

#### 4.3. Loss due to Relaxation of Steel

**Concept:**
Relaxation of steel is the reduction in stress in the prestressing steel under a constant strain over a period of time. High-tensile steel wires or strands used for prestressing, when held at a high stress level, tend to lose some of their stress over time due to the rearrangement of atoms within the steel structure.

**Factors Affecting Relaxation:**

*   **Initial stress in the steel:** Higher initial stress leads to more relaxation.
*   **Type of steel:** Different grades of prestressing steel exhibit different relaxation properties.
*   **Temperature:** Elevated temperatures can increase relaxation.

**Calculation:**
The loss of stress due to relaxation is typically determined experimentally and provided by manufacturers or specified in design codes. It is usually expressed as a percentage of the initial stress or as a stress value for a specific duration.

For example, Indian Standard IS 1343 specifies a loss of relaxation for stress levels of 70% and 80% of the ultimate tensile strength.

$\Delta f_p = \text{Relaxation loss}$ (from tables or empirical formulas)

A common empirical formula for relaxation loss is:
$\Delta f_p = \sigma_{sp} \times \left( \frac{\log_{10}(t) - \log_{10}(t_0)}{k_{rel}} \right)$, where $\sigma_{sp}$ is the initial stress, $t$ is the time, $t_0$ is the initial time, and $k_{rel}$ is a material constant.

However, design codes often provide simplified values or specify that for stress levels below a certain threshold, relaxation is negligible.

**Example:**
A prestressing tendon is initially stressed to $1200$ N/mm². For the specific grade of steel and service conditions, the loss due to relaxation over the service life is specified as $5\%$ of the initial stress. Calculate the loss of prestress due to relaxation.

*   Initial stress, $\sigma_{sp} = 1200$ N/mm².
*   Percentage loss = $5\%$.
*   $\Delta f_p = 0.05 \times 1200 \text{ N/mm}^2 = 60 \text{ N/mm}^2$.

**Important Points:**

*   Relaxation is a property of the prestressing steel itself.
*   Using low-relaxation steels is recommended to minimize this loss.
*   The magnitude of relaxation loss is typically in the range of 5-10% of the initial stress.

---

### 5. Total Loss of Prestress

The total loss of prestress is the sum of all the individual losses. The order in which these losses are considered can sometimes affect the final result, especially for time-dependent losses.

**For Pre-tensioned Members:**

Total Loss = Loss due to Elastic Shortening + Loss due to Shrinkage + Loss due to Creep + Loss due to Relaxation of Steel.

**For Post-tensioned Members:**

Total Loss = Loss due to Elastic Shortening + Loss due to Friction + Loss due to Anchorage Slip + Loss due to Shrinkage + Loss due to Creep + Loss due to Relaxation of Steel.

**General Formula for Total Loss ($\Delta P_{total}$):**

$\Delta P_{total} = \Delta f_{p, \text{elastic}} + \Delta f_{p, \text{friction}} + \Delta f_{p, \text{slip}} + \Delta f_{p, \text{shrinkage}} + \Delta f_{p, \text{creep}} + \Delta f_{p, \text{relaxation}}$

The loss is usually expressed in terms of stress in the steel ($\text{N/mm}^2$) or as a percentage of the initial prestressing force.

**Important Note on Sequential Calculation:**

*   **Elastic Shortening:** Occurs first (or concurrently with initial tensioning).
*   **Friction and Anchorage Slip:** Occur during the tensioning process.
*   **Shrinkage, Creep, and Relaxation:** Are time-dependent and occur after initial tensioning and anchoring.

In many practical design scenarios, the total loss is estimated by summing up the individual losses calculated based on the initial prestressing force. However, a more rigorous approach might consider how some losses affect the stresses that cause other losses (e.g., the stress in concrete for creep and shrinkage is reduced due to elastic shortening). Design codes often provide simplified methodologies that are sufficiently accurate for practical purposes.

**Example Calculation of Total Loss:**

Consider a pre-tensioned concrete beam with the following data:

*   Initial prestressing force, $P_0 = 1500$ kN.
*   Area of prestressing steel, $A_p = 300$ mm².
*   Initial stress in steel, $\sigma_{sp} = \frac{1500 \times 1000}{300} = 5000$ N/mm² (Assuming this is not the stress but the force). Let's assume the initial stress in steel is $f_{po} = 1000$ N/mm².
*   Stress in concrete at the centroid of tendons, $f_{sc} = 12$ N/mm².
*   Modular ratio, $\alpha_e = 6$.
*   Shrinkage strain, $\epsilon_{sh} = 300 \times 10^{-6}$.
*   Creep coefficient, $\phi = 1.5$.
*   Loss due to relaxation of steel (at 70% of $f_{po}$), given as $5\%$ of initial stress.

**Calculations:**

1.  **Loss due to Elastic Shortening ($\Delta f_{p, \text{elastic}}$):**
    $\Delta f_{p, \text{elastic}} = \alpha_e f_{sc} = 6 \times 12 \text{ N/mm}^2 = 72 \text{ N/mm}^2$.

2.  **Loss due to Shrinkage ($\Delta f_{p, \text{shrinkage}}$):**
    $\Delta f_{p, \text{shrinkage}} = E_s \times \epsilon_{sh} = 200,000 \text{ N/mm}^2 \times (300 \times 10^{-6}) = 60 \text{ N/mm}^2$.

3.  **Loss due to Creep ($\Delta f_{p, \text{creep}}$):**
    Loss due to creep is based on the sustained stress in concrete. Assuming the sustained stress in concrete at the level of tendons is $f_{sc} = 12$ N/mm².
    $\Delta f_{p, \text{creep}} = \alpha_e \times \phi \times f_{sc} = 6 \times 1.5 \times 12 \text{ N/mm}^2 = 108 \text{ N/mm}^2$.
    *(Note: Some codes might use a reduced stress for creep calculation as elastic shortening has already occurred).*

4.  **Loss due to Relaxation ($\Delta f_{p, \text{relaxation}}$):**
    Assuming loss is $5\%$ of initial stress.
    $\Delta f_{p, \text{relaxation}} = 0.05 \times f_{po} = 0.05 \times 1000 \text{ N/mm}^2 = 50 \text{ N/mm}^2$.

**Total Loss in Stress:**
$\Delta f_{p, \text{total}} = 72 + 60 + 108 + 50 = 290 \text{ N/mm}^2$.

**Total Loss in Force:**
$\Delta P_{total} = \Delta f_{p, \text{total}} \times A_p = 290 \text{ N/mm}^2 \times 300 \text{ mm}^2 = 87,000 \text{ N} = 87 \text{ kN}$.

**Remaining Prestress Force:**
$P_{\text{remaining}} = P_0 - \Delta P_{total} = 1500 \text{ kN} - 87 \text{ kN} = 1413 \text{ kN}$.

---

### 6. Important Points to Remember

*   **Pre-tensioned vs. Post-tensioned:** Friction and anchorage slip are unique to post-tensioned members.
*   **Immediate vs. Time-Dependent:** Understand the distinction and the typical sequence of events.
*   **Modular Ratio ($\alpha_e = E_s/E_c$):** A key factor in calculating losses related to concrete deformation.
*   **Friction and Wobble:** Critical for post-tensioned members with curved tendons.
*   **Creep and Shrinkage:** Directly related to the properties of concrete and environmental factors.
*   **Relaxation:** A property of high-tensile steel.
*   **Design Codes:** Always refer to the relevant design codes (e.g., IS 1343, Eurocode 2, ACI 318) for specific coefficients, formulas, and limitations.
*   **Total Loss:** Summation of all contributing losses.

---

### 7. Practice Questions

**Question 1:**
A pre-tensioned concrete beam is stressed using wires. The initial prestress in the wires is $1200$ N/mm². Due to the application of prestress, the concrete at the level of wires is stressed to $15$ N/mm². If $E_s = 210$ GPa and $E_c = 35$ GPa, calculate the loss of prestress due to elastic shortening of concrete.

**Answer 1:**
*   Modular ratio, $\alpha_e = \frac{E_s}{E_c} = \frac{210}{35} = 6$.
*   Loss of prestress, $\Delta f_p = \alpha_e f_{sc} = 6 \times 15 \text{ N/mm}^2 = 90 \text{ N/mm}^2$.

**Question 2:**
In a post-tensioned member, the tendon follows a curved path. The coefficient of friction is $\mu = 0.35$ and the wobble coefficient is $k = 0.0015$ per meter. The total length of the tendon is $25$ m, and the total angle of curvature is $0.15$ radians. If the initial prestressing force is $P_0 = 1600$ kN, calculate the force in the tendon at the other end.

**Answer 2:**
*   Force at the end, $P_x = P_0 e^{-(\mu \theta + kx)}$.
*   $P_{25} = 1600 \text{ kN} \times e^{-(0.35 \times 0.15 + 0.0015 \times 25)}$.
*   $P_{25} = 1600 \times e^{-(0.0525 + 0.0375)}$.
*   $P_{25} = 1600 \times e^{-0.09}$.
*   $P_{25} \approx 1600 \times 0.9139 = 1462.24$ kN.

**Question 3:**
A prestressing tendon is subjected to an initial stress of $1300$ N/mm². The loss due to relaxation of steel for this grade of steel is $7\%$ of the initial stress. Calculate the loss of prestress due to relaxation.

**Answer 3:**
*   Loss of prestress, $\Delta f_p = 0.07 \times 1300 \text{ N/mm}^2 = 91 \text{ N/mm}^2$.

**Question 4:**
For a concrete member, the estimated shrinkage strain is $250 \times 10^{-6}$. The modulus of elasticity of the prestressing steel is $E_s = 200$ GPa. Calculate the loss of prestress due to shrinkage.

**Answer 4:**
*   $E_s = 200,000 \text{ N/mm}^2$.
*   Loss of prestress, $\Delta f_p = E_s \times \epsilon_{sh} = 200,000 \text{ N/mm}^2 \times (250 \times 10^{-6})$.
*   $\Delta f_p = 50 \text{ N/mm}^2$.

**Question 5:**
A post-tensioned member has the following losses: elastic shortening = $60$ N/mm², friction = $30$ N/mm², anchorage slip = $20$ N/mm², creep = $70$ N/mm², shrinkage = $40$ N/mm², and relaxation = $30$ N/mm². Calculate the total loss of prestress.

**Answer 5:**
*   Total Loss = $60 + 30 + 20 + 70 + 40 + 30 = 250$ N/mm².

---
