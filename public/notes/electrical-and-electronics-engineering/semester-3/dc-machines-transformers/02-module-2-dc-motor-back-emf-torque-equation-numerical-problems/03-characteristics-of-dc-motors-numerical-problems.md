---
title: "Characteristics of DC motors – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 2: DC motor – back emf – torque equation – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b27"
status: "completed"
scrapedAt: "2026-05-23T16:12:20.140Z"
---
# DC Machines & Transformers: Module 2 - DC Motors

## Topic: Characteristics of DC Motors – Numerical Problems

### Learning Outcomes Covered:

*   Understanding and predicting the behavior of DC motors under varying operating conditions.
*   Analyzing the relationship between speed, torque, armature current, and field flux for different types of DC motors.
*   Solving numerical problems related to DC motor characteristics.

### Course Outcomes Addressed:

*   **CO3: Analyse the performance DC motor under various load conditions (Knowledge Level: K3)** - This topic directly contributes to analyzing DC motor performance by studying their characteristic curves, which illustrate behavior under different load conditions.

### 1. Introduction to DC Motor Characteristics

The performance of a DC motor is best understood by analyzing its characteristic curves, which plot the relationship between key parameters like:

*   **Torque (T)**
*   **Speed (N)**
*   **Armature Current (Ia)**
*   **Field Flux (Φ)**

These characteristics help in selecting the appropriate type of DC motor for a specific application and in predicting its behavior under different operating conditions.

**Key Parameters:**

*   **Applied Voltage (V):** The constant voltage supplied to the motor.
*   **Back EMF (Eb):** The voltage generated in the armature winding due to its rotation in the magnetic field. $E_b = \frac{PNZ}{60A}$, where P is the number of poles, N is speed in rpm, Z is the total number of armature conductors, and A is the number of parallel paths in the armature winding.
*   **Armature Current (Ia):** The current flowing through the armature winding. $Ia = \frac{V - Eb}{Ra}$, where $Ra$ is the armature resistance.
*   **Torque Developed (T):** The mechanical torque produced by the motor. $T \propto \Phi \times Ia$. For a DC motor, the torque is directly proportional to the product of the field flux and the armature current. The proportionality constant depends on the motor's construction ($T = k \Phi Ia$, where $k$ is a motor constant).
*   **Field Flux (Φ):** The magnetic flux produced by the field winding. For shunt and compound motors, the flux depends on the field current ($If$). For series motors, the flux is directly proportional to the field current (and hence armature current at low loads).

---

### 2. Characteristics of DC Shunt Motors

In a DC shunt motor, the field winding is connected in parallel (shunt) with the armature winding. The field current is relatively constant, and hence the field flux ($\Phi$) is almost constant, irrespective of the load.

**Key Relationships:**

*   **Torque vs. Armature Current (T-Ia Characteristic):**
    *   $T \propto \Phi \times Ia$
    *   Since $\Phi$ is approximately constant in a shunt motor, $T \propto Ia$.
    *   This means the torque is directly proportional to the armature current.
    *   **Shape:** A straight line passing through the origin.
    *   **Practical Limitation:** At very high armature currents, the magnetic field in the armature can become saturated, leading to a slight deviation from linearity. The armature resistance drop also contributes to a small reduction in torque at very low speeds.

*   **Speed vs. Armature Current (N-Ia Characteristic):**
    *   $Eb = V - IaRa$
    *   $Eb \propto \Phi N$
    *   Since $\Phi$ is constant, $Eb \propto N$.
    *   Therefore, $N \propto Eb = V - IaRa$.
    *   As the armature current ($Ia$) increases (due to increased load), the back EMF ($Eb$) decreases due to the voltage drop ($IaRa$).
    *   A decrease in $Eb$ causes a decrease in speed ($N$).
    *   **Shape:** The speed drops slightly with increasing armature current. The drop is usually small (around 5-10%) and the characteristic is nearly horizontal.
    *   **Starting:** At starting ($N=0$), $Eb=0$, so $Ia = V/Ra$, which is very high.

*   **Speed vs. Torque (N-T Characteristic):**
    *   This characteristic is derived from the N-Ia and T-Ia characteristics.
    *   As torque increases, Ia increases, and as Ia increases, N decreases.
    *   **Shape:** A drooping characteristic, similar to the N-Ia characteristic but expressed in terms of torque.

**Summary of Shunt Motor Characteristics:**

| Characteristic          | Relationship                                       | Shape                                                                                                                            | Notes                                                                                                                                                                                                                                                               |
| :---------------------- | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Torque vs. Armature Current (T-Ia)** | $T \propto \Phi Ia$ (with $\Phi$ constant) $\implies T \propto Ia$ | Straight line passing through the origin.                                                                                        | High starting torque is not possible as starting torque is proportional to starting current. Good for constant speed applications. Saturation can cause a slight deviation at high loads.                                                                               |
| **Speed vs. Armature Current (N-Ia)** | $N \propto \frac{V - IaRa}{\Phi}$ (with $\Phi$ constant) $\implies N \propto V - IaRa$ | Slightly drooping from no-load to full-load. Nearly horizontal.                                                                  | Speed is relatively constant under varying load conditions. The drop in speed is due to the armature resistance drop.                                                                                                                                               |
| **Speed vs. Torque (N-T)** | Derived from N-Ia and T-Ia.                          | Drooping characteristic.                                                                                                         | Illustrates that as torque demand increases, the speed decreases.                                                                                                                                                                                                  |

**Textbook References:**

*   **P.S. Bimbhra:** Chapter on DC Motors - Characteristics of DC Shunt Motor.
*   **D P Kothari & I J Nagrath:** Chapter on DC Motors - Characteristics.

---

### 3. Characteristics of DC Series Motors

In a DC series motor, the field winding is connected in series with the armature winding. This means the field current ($If$) is equal to the armature current ($Ia$). The field flux ($\Phi$) is therefore dependent on the armature current.

**Key Relationships:**

*   **Torque vs. Armature Current (T-Ia Characteristic):**
    *   $T \propto \Phi \times Ia$
    *   Since $\Phi \propto Ia$ (at least up to the point of magnetic saturation), then $T \propto Ia^2$.
    *   **Shape:** The torque-current characteristic is a parabola passing through the origin at light loads.
    *   **Saturation:** After the magnetic circuit saturates (typically at loads above 80% of full load), the flux $\Phi$ becomes almost constant, and the characteristic approximates $T \propto Ia$, similar to a shunt motor.
    *   **Starting Torque:** The torque is proportional to the square of the armature current, resulting in very high starting torque.

*   **Speed vs. Armature Current (N-Ia Characteristic):**
    *   $Eb = V - Ia(Ra + Rse)$ (where $Rse$ is the series field resistance)
    *   $Eb \propto \Phi N$
    *   $N \propto \frac{Eb}{\Phi}$
    *   Since $\Phi \propto Ia$, then $N \propto \frac{Eb}{Ia}$.
    *   Substituting $Eb$: $N \propto \frac{V - Ia(Ra + Rse)}{Ia} = \frac{V}{Ia} - (Ra + Rse)$.
    *   **Shape:** At low armature currents (light loads), the term $\frac{V}{Ia}$ is very large, resulting in very high speeds. As $Ia$ increases, the speed decreases rapidly.
    *   **No-load Operation:** A series motor should never be operated at no-load because the armature current would be very small, leading to an extremely high speed that can damage the motor.

*   **Speed vs. Torque (N-T Characteristic):**
    *   This characteristic shows that as torque increases, the armature current increases, and consequently, the speed decreases significantly.
    *   **Shape:** A steeply drooping characteristic.

**Summary of Series Motor Characteristics:**

| Characteristic          | Relationship                                                              | Shape                                                                                                                                                                            | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Torque vs. Armature Current (T-Ia)** | $T \propto \Phi Ia$. If $\Phi \propto Ia$, then $T \propto Ia^2$.   | Parabolic shape at light loads, becoming linear at heavy loads due to saturation.                                                                                              | Very high starting torque, making it suitable for traction, cranes, hoists, and starting heavy loads. **Crucially, never operate a series motor at no load.**                                                                                                                                                                                                                                                                                              |
| **Speed vs. Armature Current (N-Ia)** | $N \propto \frac{V - Ia(Ra + Rse)}{\Phi}$. If $\Phi \propto Ia$, then $N \propto \frac{V}{Ia} - (Ra + Rse)$. | Very high speed at light loads, rapidly decreasing as current increases.                                                                                                         | The speed is highly dependent on the load. This makes it unsuitable for applications requiring constant speed. The extreme speed at light loads is dangerous.                                                                                                                                                                                                                                                                                              |
| **Speed vs. Torque (N-T)** | Derived from N-Ia and T-Ia.                                               | Steeply drooping characteristic.                                                                                                                                                 | Clearly shows the inverse relationship between speed and torque.                                                                                                                                                                                                                                                                                                                                                                                              |

**Textbook References:**

*   **P.S. Bimbhra:** Chapter on DC Motors - Characteristics of DC Series Motor.
*   **D P Kothari & I J Nagrath:** Chapter on DC Motors - Characteristics.

---

### 4. Characteristics of DC Compound Motors

DC compound motors have both series and shunt field windings. They combine some characteristics of both series and shunt motors. The behavior depends on the relative strength of the series and shunt fields.

*   **Cumulative Compound Motor:** The series field winding aids the shunt field winding, increasing the total flux.
*   **Differential Compound Motor:** The series field winding opposes the shunt field winding, decreasing the total flux. (Rarely used in practice due to unstable operation).

We will focus on **Cumulative Compound Motors**.

**Key Relationships (Cumulative Compound Motor):**

*   **Torque vs. Armature Current (T-Ia Characteristic):**
    *   $T \propto (\Phi_{sh} + \Phi_{se}) \times Ia$
    *   $\Phi_{sh}$ is constant (assuming constant field current).
    *   $\Phi_{se} \propto Ia$ (at least initially).
    *   So, $T \propto (\Phi_{sh} + k Ia) \times Ia = \Phi_{sh}Ia + k Ia^2$.
    *   **Shape:** The characteristic is between that of a shunt motor and a series motor. It has a higher starting torque than a shunt motor but lower than a series motor. It is more linear than a series motor's characteristic.

*   **Speed vs. Armature Current (N-Ia Characteristic):**
    *   $Eb = V - Ia(Ra + Rse)$
    *   $Eb \propto (\Phi_{sh} + \Phi_{se}) N$
    *   $N \propto \frac{Eb}{\Phi_{sh} + \Phi_{se}}$
    *   Since $\Phi_{se}$ increases with $Ia$, the flux increases with load.
    *   **Shape:** The speed drops less than in a series motor but more than in a shunt motor. The speed regulation is better than a series motor.

**Types of Cumulative Compound Motors based on Speed Regulation:**

*   **Shunt Characteristic Compound Motor:** The series winding is weak, so the speed drop is minimal, similar to a shunt motor.
*   **Flat Characteristic Compound Motor:** The series winding is designed such that the speed remains nearly constant from no-load to full-load.
*   **Over-Compounded Motor:** The series winding is strong enough that the speed at full load is less than the no-load speed, but the terminal voltage increases slightly with load (or speed increases with load). These are generally not seen in DC motors but can occur in generators. For motors, it implies the speed at full load is lower than the no-load speed due to the stronger series field effect.

**Summary of Cumulative Compound Motor Characteristics:**

| Characteristic          | Relationship                                                                    | Shape                                                                                              | Notes                                                                                                                                                                                |
| :---------------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Torque vs. Armature Current (T-Ia)** | $T \propto (\Phi_{sh} + k Ia) \times Ia$                                        | Between shunt and series motor characteristics.                                                    | Higher starting torque than shunt, lower than series.                                                                                                                                |
| **Speed vs. Armature Current (N-Ia)** | $N \propto \frac{Eb}{\Phi_{sh} + k Ia}$                                         | Drooping characteristic, less steep than series motor.                                             | Speed regulation is better than a series motor.                                                                                                                                      |
| **Speed vs. Torque (N-T)** | Derived from N-Ia and T-Ia.                                                     | Drooping characteristic, less steep than series motor.                                             | Balances the need for higher starting torque with reasonable speed regulation.                                                                                                       |

**Textbook References:**

*   **P.S. Bimbhra:** Chapter on DC Motors - Characteristics of DC Compound Motor.
*   **D P Kothari & I J Nagrath:** Chapter on DC Motors - Characteristics.

---

### 5. Important Points to Remember

*   **Back EMF ($Eb$):** $Eb$ is proportional to speed ($\omega$) and flux ($\Phi$). $Eb = k \Phi \omega$.
*   **Torque ($T$):** $T$ is proportional to flux ($\Phi$) and armature current ($Ia$). $T = k \Phi Ia$.
*   **Shunt Motor:** Constant flux ($\Phi$). $T \propto Ia$, $N \propto (V - IaRa)$. Good for constant speed applications.
*   **Series Motor:** Flux depends on armature current ($\Phi \propto Ia$, before saturation). $T \propto Ia^2$, $N \propto \frac{V}{Ia} - (Ra+Rse)$. High starting torque, but **never no-load**.
*   **Compound Motor (Cumulative):** Combines characteristics of shunt and series. Better starting torque than shunt, better speed regulation than series.
*   **Speed Control:**
    *   **Shunt/Compound:** Speed can be controlled by varying flux (field weakening - increasing speed) or varying armature voltage (decreasing speed).
    *   **Series:** Speed control is primarily achieved by varying armature voltage or by changing the flux using diverter resistors or field weakening (less effective).

---

### 6. Numerical Problems and Solutions

Let's work through some practice problems to solidify understanding.

**Key Formulas Recap:**

*   $Eb = V - IaRa$
*   $T = \frac{1}{2\pi N} Eb Ia \times \frac{60}{1000}$ (in kW, $P$ in kW) or $T = \frac{Eb Ia}{2\pi N/60}$ (in Nm)
*   $T = k \Phi Ia$
*   $Eb = \frac{PNZ}{60A}$
*   $N \propto \frac{Eb}{\Phi}$

**Problem 1: DC Shunt Motor**

A 250 V DC shunt motor takes 10 A when running at 1200 rpm. The armature resistance is 0.5 $\Omega$ and the field resistance is 250 $\Omega$. Calculate:
(a) The back EMF at 1200 rpm.
(b) The torque developed.
(c) The armature current and torque if the flux is reduced by 10% and the speed is 1400 rpm.

**Solution:**

Given: $V = 250$ V, $Ia_1 = 10$ A, $N_1 = 1200$ rpm, $Ra = 0.5 \Omega$, $Rf = 250 \Omega$.

**(a) Back EMF at 1200 rpm:**
First, calculate the field current ($If$):
$If = \frac{V}{Rf} = \frac{250}{250} = 1$ A.
Since the armature current is 10 A, the total current drawn from the supply is $Ia_1 + If = 10 + 1 = 11$ A.

Now, calculate the back EMF using $V = Eb + IaRa$:
$Eb_1 = V - Ia_1 Ra = 250 - (10 \times 0.5) = 250 - 5 = 245$ V.

**(b) Torque Developed:**
$T_1 = \frac{Eb_1 Ia_1}{2\pi N_1/60}$
$T_1 = \frac{245 \times 10}{2\pi \times 1200/60} = \frac{2450}{40\pi} = \frac{245}{4\pi} \approx 19.5$ Nm.

**(c) Armature current and torque if flux is reduced by 10% and speed is 1400 rpm:**
New flux $\Phi_2 = 0.9 \Phi_1$ (where $\Phi_1$ corresponds to $Eb_1$ and $N_1$).
New speed $N_2 = 1400$ rpm.

We know $Eb \propto \Phi N$.
So, $\frac{Eb_2}{Eb_1} = \frac{\Phi_2 N_2}{\Phi_1 N_1}$
$\frac{Eb_2}{245} = \frac{0.9 \Phi_1 \times 1400}{\Phi_1 \times 1200} = 0.9 \times \frac{1400}{1200} = 0.9 \times \frac{7}{6} = 1.05$.
$Eb_2 = 245 \times 1.05 = 257.25$ V.

Now, calculate the new armature current ($Ia_2$) using $V = Eb_2 + Ia_2 Ra$:
$250 = 257.25 + Ia_2 \times 0.5$.
$Ia_2 \times 0.5 = 250 - 257.25 = -7.25$.
$Ia_2 = -14.5$ A.

**Analysis:** A negative armature current means the motor is acting as a generator, which happens when the back EMF exceeds the applied voltage. This occurs because the flux was reduced, and the speed increased such that the new back EMF is greater than the supply voltage. The motor is now trying to push current back into the supply. In a practical scenario, the supply would absorb this power.

Let's recalculate the torque for this condition. The torque is still given by $T = k \Phi Ia$.
We have $T_1 = k \Phi_1 Ia_1$.
So, $k \Phi_1 = T_1 / Ia_1 = 19.5 / 10 = 1.95$ (approximately).

For the new condition:
$T_2 = k \Phi_2 Ia_2$.
$T_2 = \frac{T_1}{\Phi_1 Ia_1} \times \Phi_2 Ia_2 = \frac{1.95 \times (0.9 \Phi_1) \times (-14.5)}{1} = 1.95 \times 0.9 \times (-14.5) \approx -25.5$ Nm.

The negative torque indicates that the motor is now acting as a generator, producing torque in the opposite direction to the initial motor action.

**Important Consideration:** The problem statement "if the flux is reduced by 10% and the speed is 1400 rpm" implies an external control. If the speed was not externally controlled but resulted from the flux change, we would first find the new speed. Here, we assume the conditions are imposed.

---

**Problem 2: DC Series Motor**

A DC series motor is connected to a 230 V supply. At a certain load, it draws 40 A and runs at 800 rpm. The armature resistance is 0.3 $\Omega$, and the series field resistance is 0.2 $\Omega$. Calculate the speed of the motor when:
(a) The load is increased so that it draws 60 A.
(b) The motor is run at no-load. (Assume magnetic saturation does not occur).

**Solution:**

Given: $V = 230$ V, $Ia_1 = 40$ A, $N_1 = 800$ rpm, $Ra = 0.3 \Omega$, $Rse = 0.2 \Omega$.
Total resistance $R_{total} = Ra + Rse = 0.3 + 0.2 = 0.5 \Omega$.

We use the relationship $N \propto \frac{V - Ia(Ra + Rse)}{\Phi}$ and $\Phi \propto Ia$ (before saturation).
So, $N \propto \frac{V - Ia R_{total}}{Ia}$.

**(a) Speed at 60 A:**
$Ia_2 = 60$ A.
$\frac{N_2}{N_1} = \frac{(V/Ia_2) - R_{total}}{(V/Ia_1) - R_{total}}$
$\frac{N_2}{800} = \frac{(230/60) - 0.5}{(230/40) - 0.5}$
$\frac{N_2}{800} = \frac{3.833 - 0.5}{5.75 - 0.5} = \frac{3.333}{5.25}$
$N_2 = 800 \times \frac{3.333}{5.25} \approx 800 \times 0.635 \approx 508$ rpm.

**(b) Speed at no-load:**
At no-load, the armature current is very small. Let's assume $Ia_0 = 0.1$ A (to avoid division by zero and demonstrate the principle).
$\frac{N_0}{N_1} = \frac{(V/Ia_0) - R_{total}}{(V/Ia_1) - R_{total}}$
$\frac{N_0}{800} = \frac{(230/0.1) - 0.5}{(230/40) - 0.5}$
$\frac{N_0}{800} = \frac{2300 - 0.5}{5.75 - 0.5} = \frac{2299.5}{5.25}$
$N_0 = 800 \times \frac{2299.5}{5.25} \approx 800 \times 438.0 \approx 350400$ rpm.

**Result:** As expected, the no-load speed is extremely high and dangerous. This confirms why series motors must not be operated without load.

---

**Problem 3: DC Compound Motor**

A cumulative compound DC motor has the following characteristics at full load:
Speed = 1000 rpm
Torque = 150 Nm
Armature Current = 60 A
Armature resistance = 0.2 $\Omega$
Series field resistance = 0.1 $\Omega$
Shunt field current = 2 A
Field resistance = 200 $\Omega$
Supply Voltage = 230 V

Calculate the speed of the motor when it develops a torque of 100 Nm. Assume the shunt field flux is constant and the series field is unsaturated.

**Solution:**

Given: $N_1 = 1000$ rpm, $T_1 = 150$ Nm, $Ia_1 = 60$ A, $Ra = 0.2 \Omega$, $Rse = 0.1 \Omega$, $If = 2$ A, $Rf = 200 \Omega$, $V = 230$ V.
Total resistance $R_{total} = Ra + Rse = 0.2 + 0.1 = 0.3 \Omega$.

First, find the back EMF at full load ($Eb_1$):
$Eb_1 = V - Ia_1 R_{total} = 230 - (60 \times 0.3) = 230 - 18 = 212$ V.

The motor constant $k$ can be found using $T = k \Phi Ia$.
For a cumulative compound motor, the total flux $\Phi = \Phi_{sh} + \Phi_{se}$.
Since the shunt field is constant, $\Phi_{sh}$ is constant.
Since the series field is unsaturated, $\Phi_{se} \propto Ia$.
So, $\Phi = \Phi_{sh} + C Ia$, where $C$ is a constant related to the series field.
Thus, $T = k (\Phi_{sh} + C Ia) Ia = k \Phi_{sh} Ia + k C Ia^2$.

This equation shows that the torque has a shunt component ($k \Phi_{sh} Ia$) and a series component ($k C Ia^2$).

From the given values at full load:
$T_1 = 150$ Nm, $Ia_1 = 60$ A.
$Eb_1 = 212$ V.
We know $Eb \propto \Phi N$. So $\Phi N = Eb/k$.
$Eb_1 = k (\Phi_{sh} + C Ia_1) N_1$
$212 = k (\Phi_{sh} + C \times 60) \times 1000$.

And $T_1 = k (\Phi_{sh} + C Ia_1) Ia_1$
$150 = k (\Phi_{sh} + C \times 60) \times 60$.

Let $K_1 = k \Phi_{sh}$ and $K_2 = k C$.
Then $T = K_1 Ia + K_2 Ia^2$.
And $Eb = K_1 N + K_2 Ia N$.

From the full load data:
$150 = K_1 \times 60 + K_2 \times 60^2 = 60 K_1 + 3600 K_2$.
Divide by 60: $2.5 = K_1 + 60 K_2$. (Equation 1)

Also, $Eb_1 = (K_1 + K_2 Ia_1) N_1$.
$212 = (K_1 + K_2 \times 60) \times 1000$.
$0.212 = K_1 + 60 K_2$. (Equation 2)

Wait, there seems to be a contradiction in the equations derived from torque and back EMF. This often happens with simplified assumptions or if the problem values are not perfectly consistent with the model.

Let's re-examine the $Eb \propto \Phi N$ relationship:
$Eb = k \Phi N$.
We can express $\Phi$ in terms of $Ia$. Since the shunt field is constant, let $\Phi_{sh}$ be the flux due to the shunt field. Let the series field flux be $\Phi_{se} = k_s Ia$ (assuming unsaturated series field).
So, $\Phi = \Phi_{sh} + k_s Ia$.
$Eb = k (\Phi_{sh} + k_s Ia) N$.
$T = k (\Phi_{sh} + k_s Ia) Ia$.

$Eb_1 = 212$ V, $N_1 = 1000$ rpm, $Ia_1 = 60$ A.
$T_1 = 150$ Nm.

From $Eb \propto \Phi N$, we can write $\Phi N = \frac{Eb}{k}$.
So, $(\Phi_{sh} + k_s Ia_1) N_1 = \frac{Eb_1}{k}$.
$(\Phi_{sh} + k_s \times 60) \times 1000 = \frac{212}{k}$.

From $T \propto \Phi Ia$, we can write $\Phi Ia = \frac{T}{k}$.
$(\Phi_{sh} + k_s Ia_1) Ia_1 = \frac{T_1}{k}$.
$(\Phi_{sh} + k_s \times 60) \times 60 = \frac{150}{k}$.

Divide the first equation by the second:
$\frac{(\Phi_{sh} + k_s \times 60) \times 1000}{(\Phi_{sh} + k_s \times 60) \times 60} = \frac{212/k}{150/k}$.
$\frac{1000}{60} = \frac{212}{150}$.
$16.667 = 1.413$. This is not equal.

This indicates that the proportionality constants for $Eb$ and $T$ might be different, or the assumptions of simple proportionality throughout are not fully holding for the given data. However, the fundamental relationship $Eb \propto \Phi N$ and $T \propto \Phi Ia$ still applies.

Let's use the torque equation $T = K Ia$ for the shunt component and $T = K' Ia^2$ for the series component, where $K$ and $K'$ are motor constants.
$T = K Ia + K' Ia^2$.
$T_1 = 150$ Nm, $Ia_1 = 60$ A.
$150 = K \times 60 + K' \times 60^2 = 60K + 3600K'$. (Eq. A)

Now, relate speed to flux and back EMF.
$Eb_1 = 212$ V, $N_1 = 1000$ rpm.
$Eb = k \Phi N$.
Since $\Phi = \Phi_{sh} + k_s Ia$, and $Eb = V - Ia(Ra+Rse)$.
$Eb = k (\Phi_{sh} + k_s Ia) N$.
$Eb_1 = k (\Phi_{sh} + k_s Ia_1) N_1$.
$212 = k (\Phi_{sh} + k_s \times 60) \times 1000$.

The term $k \Phi_{sh}$ relates to the shunt motor action, and $k k_s$ relates to the series motor action.
Let $K_{shunt} = k \Phi_{sh}$ and $K_{series} = k k_s$.
$T = K_{shunt} Ia + K_{series} Ia^2$.
$Eb = (K_{shunt} + K_{series} Ia) N$.

$150 = K_{shunt} \times 60 + K_{series} \times 60^2 \implies 150 = 60 K_{shunt} + 3600 K_{series}$ (Eq. P1)
$212 = (K_{shunt} + K_{series} \times 60) \times 1000 \implies 0.212 = K_{shunt} + 60 K_{series}$ (Eq. P2)

From Eq. P2: $K_{shunt} = 0.212 - 60 K_{series}$.
Substitute into Eq. P1:
$150 = 60 (0.212 - 60 K_{series}) + 3600 K_{series}$
$150 = 12.72 - 3600 K_{series} + 3600 K_{series}$
$150 = 12.72$. This is a clear contradiction.

**Let's re-read the problem statement and consider the typical approach for such problems.** Often, the problem assumes a specific relationship. A common way to approach this is by comparing conditions.

We are given $T_1 = 150$ Nm at $Ia_1 = 60$ A, $N_1 = 1000$ rpm.
We need to find $N_2$ at $T_2 = 100$ Nm.
Since the shunt field is constant, and the series field is unsaturated, $\Phi = \Phi_{sh} + k_s Ia$.

Torque equation: $T = k \Phi Ia = k (\Phi_{sh} + k_s Ia) Ia$.
Let $k \Phi_{sh} = A$ and $k k_s = B$.
$T = A Ia + B Ia^2$.

$150 = A(60) + B(60^2) \implies 150 = 60A + 3600B$. (Eq. 1)
$100 = A(Ia_2) + B(Ia_2^2)$. (Eq. 2)

Back EMF equation: $Eb = k \Phi N = k (\Phi_{sh} + k_s Ia) N$.
$Eb = (A + B Ia) N$.
$Eb_1 = (A + B Ia_1) N_1$.
$212 = (A + B \times 60) \times 1000 \implies 0.212 = A + 60B$. (Eq. 3)

Now we have two equations for A and B:
From Eq. 3: $A = 0.212 - 60B$.
Substitute into Eq. 1:
$150 = 60(0.212 - 60B) + 3600B$
$150 = 12.72 - 3600B + 3600B$
$150 = 12.72$. Still a contradiction.

**It is highly probable that the provided numerical values in the question are not consistent with the ideal models of DC motors.** In an exam setting, if such a contradiction appears, it's important to state it or choose the most dominant relationship for the calculation.

Let's assume the torque equation is the primary driver for finding armature currents.
$T = A Ia + B Ia^2$.
$150 = 60A + 3600B$.
$100 = A Ia_2 + B Ia_2^2$.

And let's use the back EMF equation to relate speed and current.
$Eb = V - Ia(Ra+Rse) = 230 - Ia(0.3)$.
$Eb \propto \Phi N$. So $\Phi N = \frac{Eb}{k}$.
$\Phi = \Phi_{sh} + k_s Ia$.
$(\Phi_{sh} + k_s Ia) N = \frac{Eb}{k}$.

$N = \frac{Eb}{k(\Phi_{sh} + k_s Ia)}$.
$N = \frac{V - Ia(Ra+Rse)}{k \Phi_{sh} + k k_s Ia}$.
$N = \frac{V - Ia(Ra+Rse)}{A + B Ia}$.

We have $N_1 = 1000$ rpm when $Ia_1 = 60$ A.
$1000 = \frac{230 - 60(0.3)}{A + B(60)} = \frac{230 - 18}{A + 60B} = \frac{212}{A + 60B}$.
$A + 60B = \frac{212}{1000} = 0.212$. This is the same as Eq. 3.

Now, let's use the torque equation to find $Ia_2$ when $T_2 = 100$ Nm.
We need values for A and B. The contradiction from Eq. 1 and Eq. 3 means we cannot solve for A and B simultaneously from the given data.

**Alternative Approach (if the problem intends to use proportionality):**

Assume the torque is approximately proportional to Ia for the range of operation of interest or a dominant term can be used. However, for a compound motor, both terms are significant.

Let's try to extract $A$ and $B$ from the torque equation, and then use the speed-current relationship.
Assume the given $Eb_1$ is correct.
$A+60B = 0.212$.
If we had another torque-current point, we could solve for A and B.

**Let's assume the data is intended to be solved using the ratio method:**

We have $T = k(\Phi_{sh} + k_s Ia)Ia$.
And $N = \frac{V - Ia(Ra+Rse)}{k(\Phi_{sh} + k_s Ia)}$.

Consider two conditions:
$T_1 = k(\Phi_{sh} + k_s Ia_1)Ia_1$
$N_1 = \frac{V - Ia_1(Ra+Rse)}{k(\Phi_{sh} + k_s Ia_1)}$

$T_2 = k(\Phi_{sh} + k_s Ia_2)Ia_2$
$N_2 = \frac{V - Ia_2(Ra+Rse)}{k(\Phi_{sh} + k_s Ia_2)}$

From the $N$ equations, we can write:
$\frac{N_1}{N_2} = \frac{V - Ia_1(Ra+Rse)}{V - Ia_2(Ra+Rse)} \times \frac{\Phi_{sh} + k_s Ia_2}{\Phi_{sh} + k_s Ia_1}$.

From the $T$ equations, we can write:
$\frac{T_1}{T_2} = \frac{(\Phi_{sh} + k_s Ia_1)Ia_1}{(\Phi_{sh} + k_s Ia_2)Ia_2}$.

Let $\Phi_{sh} = \Phi_{sh\_ref}$ and $k_s = k_{s\_ref}$ be constants related to the motor construction.
Let $k \Phi_{sh\_ref} = K_{shunt}$ and $k k_{s\_ref} = K_{series}$.
$\Phi_{sh} = K_{shunt}/k$ and $k_s = K_{series}/k$.

$T = k(\frac{K_{shunt}}{k} + \frac{K_{series}}{k} Ia)Ia = (K_{shunt} + K_{series} Ia)Ia$.
$N = \frac{V - Ia(Ra+Rse)}{k(\frac{K_{shunt}}{k} + \frac{K_{series}}{k} Ia)} = \frac{V - Ia(Ra+Rse)}{K_{shunt} + K_{series} Ia}$.

We have $N_1 = 1000$ rpm, $Ia_1 = 60$ A.
$1000 = \frac{230 - 60(0.3)}{K_{shunt} + K_{series}(60)} = \frac{212}{K_{shunt} + 60K_{series}}$.
$K_{shunt} + 60K_{series} = 0.212$. (Eq. 3')

We have $T_1 = 150$ Nm, $Ia_1 = 60$ A.
$150 = (K_{shunt} + K_{series}(60)) \times 60$.
$150 = (0.212) \times 60 = 12.72$. This is the contradiction again.

**Assuming the problem meant that the shunt field flux itself is constant, but the proportionality constant for torque might be different from back emf.**

Let's try to use the structure $T = X Ia + Y Ia^2$ and $N = \frac{Z - W Ia}{X' + Y' Ia}$. This gets complex.

**Let's assume the intention is to use the ratios and the fact that for a compound motor, $N \propto \frac{Eb}{\Phi}$.**
The flux $\Phi$ is due to the shunt field and the series field.
$\Phi = \Phi_{sh} + \Phi_{se}$.
$Eb = V - Ia(Ra+Rse)$.
$T = k(\Phi_{sh} + \Phi_{se})Ia$.

We are given that the shunt field is constant and the series field is unsaturated.
So, $\Phi_{sh} = \Phi_{sh\_const}$ and $\Phi_{se} = k_s Ia$.
$Eb = V - Ia(Ra+Rse)$.
$T = k(\Phi_{sh\_const} + k_s Ia)Ia$.
$N \propto \frac{Eb}{\Phi} \implies N = \frac{k_1 Eb}{\Phi_{sh\_const} + k_s Ia}$, where $k_1$ is a constant.

$N \propto \frac{V - Ia(Ra+Rse)}{\Phi_{sh\_const} + k_s Ia}$.

Let's use the given data to find the terms $\Phi_{sh\_const}$ and $k_s$ in relation to the constants $k$.

From $T_1 = 150$ Nm, $Ia_1 = 60$ A:
$150 = k(\Phi_{sh\_const} + k_s \times 60) \times 60$.
$\frac{150}{60} = k(\Phi_{sh\_const} + 60 k_s)$.
$2.5 = k \Phi_{sh\_const} + 60 k k_s$.

From $N_1 = 1000$ rpm, $Ia_1 = 60$ A, $Eb_1 = 212$ V:
$N_1 = \frac{k_2 Eb_1}{\Phi_{sh\_const} + k_s Ia_1}$, where $k_2$ is another constant.
$1000 = \frac{k_2 \times 212}{\Phi_{sh\_const} + k_s \times 60}$.
$1000 (\Phi_{sh\_const} + 60 k_s) = 212 k_2$.
$\Phi_{sh\_const} + 60 k_s = \frac{212 k_2}{1000}$.

Substitute $\Phi_{sh\_const} + 60 k_s = \frac{2.5}{k}$ from the torque equation into the speed equation:
$\frac{2.5}{k} = \frac{212 k_2}{1000}$.
$k_2 = \frac{2.5 \times 1000}{212 k} = \frac{2500}{212 k}$.

Now we have a relationship between $k$ and $k_2$. Let's assume the constant $k$ in $T = k \Phi Ia$ and $Eb = k \Phi N$ is the same.

Let $K = k \Phi_{sh\_const}$ and $K_s = k k_s$.
$T = (K + K_s Ia) Ia$.
$Eb = (K + K_s Ia) N$.

$T_1 = 150$, $Ia_1 = 60$, $N_1 = 1000$, $Eb_1 = 212$.
$150 = (K + K_s \times 60) \times 60$.
$2.5 = K + 60 K_s$.

$Eb_1 = (K + K_s \times 60) N_1$.
$212 = (K + 60 K_s) \times 1000$.
$0.212 = K + 60 K_s$.

Again, $2.5 = 0.212$, which is a contradiction.

**Given the recurring contradiction, it's possible the problem statement is flawed or requires a specific interpretation not immediately obvious.** However, if forced to proceed:

**Let's assume the $T \propto \Phi Ia$ relationship and the $N \propto Eb/\Phi$ relationship hold with consistent proportionality constants, and try to resolve the inconsistency by prioritizing one condition to find parameters.**

Let's use the torque equation to find the armature current ($Ia_2$) for the new torque ($T_2=100$ Nm).
We need constants for the torque equation $T = A Ia + B Ia^2$.
We have one point: $150 = 60A + 3600B$.
We need another point or a way to find A and B.

If we assume the shunt component of torque is dominant at some point, or the series component is dominant, we can make approximations. But this is not ideal.

**Let's revisit the equations and assume a consistent proportionality.**
$Eb = k \Phi N$ and $T = k \Phi Ia$.
From these, $N = \frac{Eb}{k \Phi}$ and $Ia = \frac{T}{k \Phi}$.

$N \propto \frac{Eb}{\Phi}$ and $T \propto \Phi Ia$.
Let $\Phi = \Phi_{sh} + k_s Ia$. $\Phi_{sh}$ is constant.
$N = \frac{C_1 (V - Ia(Ra+Rse))}{\Phi_{sh} + k_s Ia}$.
$T = C_2 (\Phi_{sh} + k_s Ia) Ia$.

Using the given values:
$1000 = \frac{C_1 (230 - 60(0.3))}{\Phi_{sh} + k_s (60)} = \frac{C_1 \times 212}{\Phi_{sh} + 60 k_s}$.
$1000 (\Phi_{sh} + 60 k_s) = 212 C_1$. (Eq. S)

$150 = C_2 (\Phi_{sh} + k_s (60)) \times 60$.
$2.5 = C_2 (\Phi_{sh} + 60 k_s)$. (Eq. T)

From Eq. T, $\Phi_{sh} + 60 k_s = \frac{2.5}{C_2}$.
Substitute into Eq. S:
$1000 \times \frac{2.5}{C_2} = 212 C_1$.
$\frac{2500}{C_2} = 212 C_1 \implies \frac{C_1}{C_2} = \frac{2500}{212 \times 212} = \frac{2500}{44944} \approx 0.0556$.
This constant ratio might not be directly helpful without knowing one of the constants.

**Let's assume the constants for the torque expression are correct and proceed with finding $Ia_2$.**
Assume the problem can be solved by finding $Ia_2$ using the torque relation and then calculating $N_2$.

$T = A Ia + B Ia^2$.
$150 = 60A + 3600B$.
We need another point or relation for A and B.

Let's assume that the ratio of shunt to series torque components is related to the flux.
The total flux $\Phi = \Phi_{sh} + \Phi_{se}$.
Torque $T = T_{shunt} + T_{series}$.
$T_{shunt} \propto \Phi_{sh} Ia$.
$T_{series} \propto \Phi_{se} Ia$.
Since $\Phi_{se} = k_s Ia$, $T_{series} \propto Ia^2$.
$\Phi_{sh}$ is constant.

The problem states the shunt field is constant. This means the flux $\Phi_{sh}$ is fixed.
Let's assume the proportionality constant for torque is the same, $k$.
$T = k (\Phi_{sh} + k_s Ia) Ia = k \Phi_{sh} Ia + k k_s Ia^2$.
Let $A = k \Phi_{sh}$ and $B = k k_s$.
$T = A Ia + B Ia^2$.

From $Eb = k \Phi N = k (\Phi_{sh} + k_s Ia) N$.
$Eb = (A + B Ia) N$.
Given $V=230$, $Ra=0.2$, $Rse=0.1$.
$Eb = 230 - Ia(0.3)$.

$230 - Ia(0.3) = (A + B Ia) N$.

We have:
1. $150 = A(60) + B(60^2) \implies 150 = 60A + 3600B$.
2. $230 - 60(0.3) = (A + B \times 60) \times 1000 \implies 212 = (A+60B) \times 1000 \implies A+60B = 0.212$.

Substitute $A = 0.212 - 60B$ into the first equation:
$150 = 60(0.212 - 60B) + 3600B$
$150 = 12.72 - 3600B + 3600B$
$150 = 12.72$.

**Conclusion regarding Problem 3:** The numerical values provided are inconsistent with the fundamental relationships of DC motors. This often happens in textbook problems. If this were an exam, I would state the inconsistency.

**However, if we MUST find an answer, we have to make a simplifying assumption or ignore one piece of information.**

**Assumption to proceed:** Let's assume the torque equation $T = A Ia + B Ia^2$ and the speed equation $N = \frac{V-Ia(Ra+Rse)}{A+B Ia}$ are correct and try to solve for $A$ and $B$ using one of the equations and an assumed value from another. This is not mathematically sound.

**Let's try another approach that might be intended:**
Use the ratio method for torque and speed, but acknowledge the flux term is variable.
$\frac{T_1}{T_2} = \frac{(\Phi_1)Ia_1}{(\Phi_2)Ia_2}$.
$\frac{N_1}{N_2} = \frac{Eb_1/\Phi_1}{Eb_2/\Phi_2} = \frac{Eb_1 \Phi_2}{Eb_2 \Phi_1}$.

We know $\Phi_1 = \Phi_{sh} + k_s Ia_1$ and $\Phi_2 = \Phi_{sh} + k_s Ia_2$.
And $Eb_1 = V - Ia_1(Ra+Rse)$, $Eb_2 = V - Ia_2(Ra+Rse)$.

$150 = k (\Phi_{sh} + k_s 60) 60$.
$100 = k (\Phi_{sh} + k_s Ia_2) Ia_2$.

$N_1 = \frac{C (V - Ia_1(Ra+Rse))}{\Phi_{sh} + k_s Ia_1} = \frac{C \times 212}{\Phi_{sh} + 60 k_s}$.
$N_2 = \frac{C (V - Ia_2(Ra+Rse))}{\Phi_{sh} + k_s Ia_2}$.

From the first torque equation: $\Phi_{sh} + 60 k_s = \frac{150}{60k} = \frac{2.5}{k}$.
Substitute this into the speed equation for $N_1$:
$1000 = \frac{C \times 212}{2.5/k} = \frac{212 C k}{2.5}$.

This leads back to the same dependency on constants $C$ and $k$.

**Let's try to solve for $Ia_2$ first, assuming the torque relationship $T=A Ia + B Ia^2$.**
We have one point $(Ia_1, T_1) = (60, 150)$.
We need another point or a relation between A and B.

If we assume the motor operates with approximately constant flux if it were a shunt motor, $T \propto Ia$.
If we assume it operates like a series motor, $T \propto Ia^2$.

A compound motor has characteristics between the two.
Let's assume the torque equation from Problem 3 means:
$T = k \Phi Ia$.
$Eb = k \Phi N$.

From $T_1=150$ at $Ia_1=60$, $N_1=1000$, $Eb_1=212$.
$\Phi_1 = \frac{Eb_1}{k N_1} = \frac{212}{k \times 1000} = \frac{0.212}{k}$.
Also, $T_1 = k \Phi_1 Ia_1$.
$150 = k \times (\frac{0.212}{k}) \times 60 = 0.212 \times 60 = 12.72$.
This is the fundamental contradiction.

**Final attempt to salvage Problem 3 by prioritizing speed-current relationship and torque as the independent variable for current calculation.**

Let's assume the question implies that the relationship between flux and current can be derived from the given torque and speed points, though it leads to contradictions.

We have $T = k \Phi Ia$ and $N = \frac{Eb}{k \Phi}$.
This implies $\Phi = \frac{Eb}{kN}$.
Substitute this into the torque equation: $T = k \left(\frac{Eb}{kN}\right) Ia = \frac{Eb \cdot Ia}{N}$.
This is a known torque equation: $T = \frac{Eb \cdot Ia}{N} \times \frac{60}{2\pi}$ for units consistency, or simply $T \propto \frac{Eb \cdot Ia}{N}$.

Let's use this: $\frac{T_1}{T_2} = \frac{Eb_1 Ia_1 / N_1}{Eb_2 Ia_2 / N_2}$.

We know $T_1=150, Ia_1=60, N_1=1000, Eb_1=212$.
We want $N_2$ when $T_2=100$. We need $Ia_2$ and $Eb_2$.
$Eb_2 = V - Ia_2(Ra+Rse) = 230 - Ia_2(0.3)$.
$\Phi = \Phi_{sh} + k_s Ia$.
$N \propto \frac{Eb}{\Phi} \implies N = C \frac{Eb}{\Phi_{sh} + k_s Ia}$.
$T \propto \Phi Ia \implies T = k (\Phi_{sh} + k_s Ia) Ia$.

Let's assume the flux per ampere of series field and the shunt flux are related to the constants from the torque equation $T = A Ia + B Ia^2$.
$A = k \Phi_{sh}$ and $B = k k_s$.
$T_1 = 150 = 60A + 3600B$.
$T_2 = 100 = Ia_2 A + Ia_2^2 B$.

And $N = \frac{V - Ia(Ra+Rse)}{A+B Ia}$.
$N_1 = 1000 = \frac{212}{A+60B}$. So $A+60B = 0.212$.

We have the system:
1) $150 = 60A + 3600B$
2) $0.212 = A + 60B$

From (2), $A = 0.212 - 60B$.
Substitute into (1):
$150 = 60(0.212 - 60B) + 3600B$
$150 = 12.72 - 3600B + 3600B$
$150 = 12.72$.

**This problem is unsolvable as stated due to inconsistent data.**

**If the problem intended a solvable scenario, it might have provided two torque points, or two speed points, or stated specific values for $A$ and $B$, or $\Phi_{sh}$ and $k_s$.**

**Let's assume a hypothetical scenario for learning purposes:**
Suppose the constants were $A = 0.5$ and $B = 0.01$.
Then $T = 0.5 Ia + 0.01 Ia^2$.
And $N = \frac{230 - 0.3 Ia}{0.5 + 0.01 Ia}$.

If at $Ia_1 = 60$ A:
$T_1 = 0.5(60) + 0.01(60^2) = 30 + 0.01(3600) = 30 + 36 = 66$ Nm.
$N_1 = \frac{230 - 0.3(60)}{0.5 + 0.01(60)} = \frac{230 - 18}{0.5 + 0.6} = \frac{212}{1.1} \approx 192.7$ rpm.

Now, if we wanted to find speed for $T_2 = 100$ Nm.
$100 = 0.5 Ia_2 + 0.01 Ia_2^2$.
$0.01 Ia_2^2 + 0.5 Ia_2 - 100 = 0$.
$Ia_2^2 + 50 Ia_2 - 10000 = 0$.
Using the quadratic formula: $Ia_2 = \frac{-50 \pm \sqrt{50^2 - 4(1)(-10000)}}{2(1)} = \frac{-50 \pm \sqrt{2500 + 40000}}{2} = \frac{-50 \pm \sqrt{42500}}{2}$.
$Ia_2 = \frac{-50 \pm 206.16}{2}$.
Since current must be positive, $Ia_2 = \frac{-50 + 206.16}{2} = \frac{156.16}{2} \approx 78.08$ A.

Then, $N_2 = \frac{230 - 0.3(78.08)}{0.5 + 0.01(78.08)} = \frac{230 - 23.424}{0.5 + 0.7808} = \frac{206.576}{1.2808} \approx 161.28$ rpm.

This demonstrates the method if consistent data were provided.

---

### 7. Practice Questions

1.  **DC Shunt Motor:** A 220 V DC shunt motor has an armature resistance of 0.4 $\Omega$ and field resistance of 150 $\Omega$. When running at 1500 rpm, it draws an armature current of 8 A. Calculate the torque developed by the motor. If the load torque is reduced by 30%, estimate the new speed. (Assume flux is constant).
    *   **Answer:** $T \approx 13.84$ Nm. New speed $\approx 1530$ rpm.

2.  **DC Series Motor:** A DC series motor draws 20 A and develops a torque of 100 Nm at 1200 rpm from a 230 V supply. The total resistance of the armature and series field is 1 $\Omega$. Calculate the torque and speed when the current is 30 A. Assume the magnetic flux is proportional to the field current.
    *   **Answer:** $T \approx 225$ Nm. New speed $\approx 760$ rpm.

3.  **DC Compound Motor (Conceptual):** Describe how the starting torque and speed regulation of a cumulative compound DC motor compare with those of a DC shunt motor and a DC series motor. Explain the reasons behind these differences.

    *   **Answer:**
        *   **Starting Torque:** Cumulative Compound > Shunt (due to series field contribution). Series > Cumulative Compound (due to $T \propto Ia^2$).
        *   **Speed Regulation:** Shunt < Cumulative Compound < Series. Shunt motors have near-constant speed. Series motors have highly variable speed. Cumulative compound motors offer a compromise.

---

### 8. Key Takeaways for Exam Preparation

*   **Master the fundamental equations:** $Eb = V - IaRa$ (shunt) or $Eb = V - Ia(Ra+Rse)$ (series/compound), $T = k \Phi Ia$.
*   **Understand the flux dependency:** Shunt motor ($\Phi$ constant), Series motor ($\Phi \propto Ia$ before saturation), Compound motor ($\Phi = \Phi_{sh} + \Phi_{se}$).
*   **Sketch and interpret characteristics:** Know the shape and meaning of T-Ia, N-Ia, and N-T curves for all three types.
*   **Identify application suitability:** Shunt for constant speed, Series for high starting torque (traction, cranes), Compound for applications needing higher starting torque than shunt and better speed regulation than series.
*   **Practice numerical problems:** Be comfortable calculating Eb, Ia, T, and N for different conditions and motor types. Pay attention to units.
*   **Watch out for inconsistent data:** If numerical data leads to contradictions, state it and try to proceed with the most relevant equations or assumptions.

This comprehensive set of notes should provide a strong foundation for understanding the characteristics of DC motors and solving related numerical problems. Remember to consult your textbooks for further details and examples.
