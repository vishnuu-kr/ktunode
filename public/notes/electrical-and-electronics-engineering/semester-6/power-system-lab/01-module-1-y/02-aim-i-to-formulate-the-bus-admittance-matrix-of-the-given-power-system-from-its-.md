---
title: "Aim: (i) To formulate the bus admittance matrix of the given power system from its single line diagram, using basic MATLAB programming."
subject: "POWER SYSTEM LAB"
module: "Module 1: Y"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367de"
status: "completed"
scrapedAt: "2026-05-23T16:30:37.725Z"
---
# POWER SYSTEM LAB: Module 1: Y - Bus Admittance Matrix Formulation

## 1. Aim of the Experiment

**(i) To formulate the bus admittance matrix of the given power system from its single line diagram, using basic MATLAB programming.**

This experiment focuses on building the fundamental representation of a power system network in a form suitable for computational analysis. The bus admittance matrix (Ybus) is a cornerstone of power system analysis techniques like load flow and short-circuit calculations.

## 2. Learning Outcomes (LOs) Covered

By the end of this experiment, you will be able to:

*   **LO 1:** Understand the concept of bus and branch representation in power system networks.
*   **LO 2:** Define and understand the physical meaning of bus admittances and branch admittances.
*   **LO 3:** Identify different types of components that form branches in a power system (e.g., transmission lines, transformers).
*   **LO 4:** Relate the single-line diagram of a power system to its nodal representation.
*   **LO 5:** Develop a systematic approach to construct the bus admittance matrix from a given single-line diagram.
*   **LO 6:** Implement basic MATLAB programming to generate the bus admittance matrix.
*   **LO 7:** Understand how the Ybus matrix captures the connectivity and parameters of a power system.

## 3. Course Outcomes (COs) Addressed

This experiment directly contributes to the following Course Outcomes:

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3)**
    *   **Explanation:** The formulation of the Ybus matrix is the **first crucial step in developing a mathematical model** of the power system network. This matrix serves as the input for various steady-state (e.g., load flow) and transient analysis algorithms. By understanding how to construct it, you are building the foundation for using "dedicated software" or even writing your own basic analysis tools.
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance. (Knowledge Level: K3)**
    *   **Explanation:** While this experiment doesn't involve direct testing of components, the **admittance values used in the Ybus formulation are derived from component parameters** (e.g., impedance of transmission lines, leakage reactance of transformers). These parameters are typically obtained through laboratory tests or from manufacturer specifications, which are based on industry standards. Understanding how these component parameters translate into the Ybus matrix indirectly relates to analyzing their performance within the overall system.

## 4. Key Concepts and Definitions

### 4.1. Power System Network Representation

*   **Nodes (Buses):** Points in a power system where one or more components are connected. These can be generators, loads, transformers, or connection points of transmission lines. In a simplified model, buses represent major connection points.
*   **Branches:** Components connecting two buses. These typically include transmission lines, transformers, and sometimes shunt elements like capacitors or reactors.

### 4.2. Admittance

*   **Definition:** Admittance (Y) is the reciprocal of impedance (Z). It measures how easily current flows through a circuit element. Its unit is Siemens (S).
    *   $Y = 1/Z$
*   **Conductance (G):** The real part of admittance, representing power dissipation (losses).
*   **Susceptance (B):** The imaginary part of admittance, representing reactive power flow.
    *   $Y = G + jB$

### 4.3. Bus Admittance Matrix (Ybus)

*   **Definition:** The Ybus matrix is a square matrix representing the nodal admittance network of a power system. For a power system with 'n' buses, the Ybus matrix is an $n \times n$ matrix, denoted as $[Y]$.
*   **Elements of Ybus:**
    *   **Off-diagonal elements ($Y_{ij}$ where $i \neq j$):** Represent the **mutual admittance** between bus $i$ and bus $j$. It is the negative of the admittance of the branch connecting bus $i$ and bus $j$.
        *   $Y_{ij} = -y_{ij}$ (where $y_{ij}$ is the admittance of the branch connecting bus $i$ and bus $j$).
    *   **Diagonal elements ($Y_{ii}$):** Represent the **self-admittance** (or driving point admittance) of bus $i$. It is the sum of all admittances connected to bus $i$, including the admittances of branches connected to bus $i$ and any shunt admittances directly connected to bus $i$.
        *   $Y_{ii} = \sum_{k=1, k\neq i}^{n} y_{ik} + y_{sh\_i}$ (where $y_{ik}$ is the admittance of the branch connecting bus $i$ to bus $k$, and $y_{sh\_i}$ is any shunt admittance connected to bus $i$).

### 4.4. Branch Admittance ($y_{ij}$)

*   **Transmission Lines:**
    *   Transmission lines are typically represented by their series impedance ($z_{ij}$) and shunt admittance ($y_{sh\_ij}$).
    *   The branch admittance is often considered as the reciprocal of the series impedance: $y_{ij} = 1 / z_{ij}$.
    *   The series impedance is usually given in per unit (p.u.) or Ohms. If given in Ohms, it needs to be converted to p.u. using the system base voltage and MVA.
    *   **shunt admittance ($y_{sh\_ij}$):** This is usually split equally between the two ends of the line, i.e., $y_{sh\_ij}/2$ at bus $i$ and $y_{sh\_ij}/2$ at bus $j$. This is important for the diagonal elements of Ybus.

*   **Transformers:**
    *   Transformers are represented by their series leakage impedance ($z_T$).
    *   The branch admittance for a transformer is $y_T = 1 / z_T$.
    *   **Tap-changing transformers:** If a transformer has off-nominal taps, the effective impedance is modified. For a tap ratio 'a' at one end, the admittance is $y_T \times a$ or $y_T / a$.

### 4.5. Shunt Elements

*   **Shunt Capacitors/Reactors:** These are connected directly to a bus and contribute to the diagonal elements of the Ybus matrix.
    *   A shunt capacitor adds capacitive susceptance ($+jB_C$) to the bus.
    *   A shunt reactor adds inductive susceptance ($-jB_R$) to the bus.

### 4.6. Per Unit System

*   **Importance:** The per unit system is crucial for simplifying calculations in power system analysis. It normalizes system quantities (voltage, current, power, impedance) with respect to chosen base values.
*   **Calculating per unit impedance/admittance:**
    *   $Z_{pu} = Z_{actual} \times (V_{base}^2 / S_{base})$
    *   $Y_{pu} = Y_{actual} \times (S_{base} / V_{base}^2) = 1 / Z_{pu}$

## 5. Procedure for Formulating Ybus

Given a single-line diagram of a power system with 'n' buses:

1.  **Number the Buses:** Assign a unique number to each bus from 1 to 'n'.
2.  **Identify Branches and Their Admittances:**
    *   For each transmission line connecting bus $i$ and bus $j$ with series impedance $z_{ij}$, calculate its per unit admittance $y_{ij} = 1/z_{ij}$. If the line has shunt capacitance, split its admittance $y_{sh\_ij}$ equally between bus $i$ and bus $j$ (i.e., $y_{sh\_ij}/2$ at each end).
    *   For each transformer connecting bus $i$ and bus $j$ with series impedance $z_T$, calculate its per unit admittance $y_T = 1/z_T$.
    *   For any shunt elements connected directly to a bus $i$ (e.g., shunt capacitor/reactor with admittance $y_{sh\_i}$), note these admittances.
3.  **Initialize the Ybus Matrix:** Create an $n \times n$ zero matrix in MATLAB.
4.  **Populate Off-Diagonal Elements ($Y_{ij}$, $i \neq j$):**
    *   For every branch connecting bus $i$ and bus $j$ with admittance $y_{ij}$, set:
        *   $Y_{ij} = Y_{ij} - y_{ij}$
        *   $Y_{ji} = Y_{ji} - y_{ij}$
    *   **Important:** Note that the off-diagonal elements are negative of the branch admittance connecting the two buses.
5.  **Populate Diagonal Elements ($Y_{ii}$):**
    *   For each bus $i$, the diagonal element $Y_{ii}$ is the sum of all admittances connected to it.
    *   For each branch connecting bus $i$ to bus $j$ with admittance $y_{ij}$, add $y_{ij}$ to $Y_{ii}$.
    *   If the branch between $i$ and $j$ has shunt admittance $y_{sh\_ij}$, add $y_{sh\_ij}/2$ to both $Y_{ii}$ and $Y_{jj}$.
    *   Add any shunt admittance $y_{sh\_i}$ connected directly to bus $i$ to $Y_{ii}$.
    *   $Y_{ii} = \sum_{k=1, k \neq i}^{n} y_{ik} + \sum_{k=1, k \neq i}^{n} (y_{sh\_ik}/2) + y_{sh\_i}$

## 6. MATLAB Implementation

MATLAB is ideal for matrix operations, making it suitable for Ybus formulation.

**Basic MATLAB Commands:**

*   `zeros(n, n)`: Creates an $n \times n$ matrix of zeros.
*   `real(z)`: Extracts the real part of a complex number `z`.
*   `imag(z)`: Extracts the imaginary part of a complex number `z`.
*   `1j`: Represents the imaginary unit 'j'.
*   `A(i, j)`: Accesses the element at the i-th row and j-th column of matrix `A`.
*   `A(i, j) = value`: Assigns `value` to the element at the i-th row and j-th column of matrix `A`.

**Example MATLAB Script Structure:**

```matlab
% Define the number of buses
num_buses = 3;

% Initialize the Ybus matrix with zeros
Ybus = zeros(num_buses, num_buses);

% --- Define branch data ---
% Each row represents a branch: [from_bus, to_bus, R_pu, X_pu, B_sh_pu]
% R_pu and X_pu are series resistance and reactance in per unit.
% B_sh_pu is the total shunt susceptance (charging susceptance) in per unit.

% Example data:
% Branch 1: Bus 1 to Bus 2, z = 0.02 + j*0.1, B_sh = 0.05
% Branch 2: Bus 1 to Bus 3, z = 0.01 + j*0.05, B_sh = 0.03
% Branch 3: Bus 2 to Bus 3, z = 0.03 + j*0.15, B_sh = 0.06

branch_data = [
    1, 2, 0.02, 0.10, 0.05; % Branch 1: Bus 1-2
    1, 3, 0.01, 0.05, 0.03; % Branch 2: Bus 1-3
    2, 3, 0.03, 0.15, 0.06  % Branch 3: Bus 2-3
];

% --- Populate Ybus matrix ---

% Loop through each branch
for k = 1:size(branch_data, 1)
    from_bus = branch_data(k, 1);
    to_bus = branch_data(k, 2);
    R_pu = branch_data(k, 3);
    X_pu = branch_data(k, 4);
    B_sh_pu = branch_data(k, 5);

    % Calculate series impedance and admittance
    z_series_pu = R_pu + 1j * X_pu;
    y_series_pu = 1 / z_series_pu;

    % Calculate half of the shunt admittance
    y_shunt_half_pu = 1j * B_sh_pu / 2;

    % Update off-diagonal elements
    Ybus(from_bus, to_bus) = Ybus(from_bus, to_bus) - y_series_pu;
    Ybus(to_bus, from_bus) = Ybus(to_bus, from_bus) - y_series_pu;

    % Update diagonal elements
    Ybus(from_bus, from_bus) = Ybus(from_bus, from_bus) + y_series_pu + y_shunt_half_pu;
    Ybus(to_bus, to_bus) = Ybus(to_bus, to_bus) + y_series_pu + y_shunt_half_pu;
end

% --- Display the Ybus matrix ---
disp('Bus Admittance Matrix (Ybus):');
disp(Ybus);
```

**Note on Shunt Elements:** The above example assumes shunt elements are only associated with transmission lines (charging susceptance). If there are dedicated shunt capacitors or reactors at a bus, you would add their admittance to the corresponding diagonal element.

**Example with Shunt Element:**

Suppose Bus 1 has a shunt capacitor of $0.02$ p.u. susceptance.
After populating the Ybus from branches, you would add:
`Ybus(1, 1) = Ybus(1, 1) + 1j * 0.02;`

## 7. Example Problem

Consider the following single-line diagram of a 3-bus power system. All impedances are given in per unit. Assume no shunt capacitance for transmission lines for simplicity in this example.

```
      (Bus 1) --- Z12=0.1+j0.4 --- (Bus 2)
         |                         |
         | Z13=0.05+j0.2           | Z23=0.08+j0.3
         |                         |
      (Bus 3) ---------------------
```

**Given:**
*   Branch 1-2: $Z_{12} = 0.1 + j0.4$ p.u.
*   Branch 1-3: $Z_{13} = 0.05 + j0.2$ p.u.
*   Branch 2-3: $Z_{23} = 0.08 + j0.3$ p.u.
*   No shunt admittances for transmission lines.
*   No other shunt elements.

**Formulate the Bus Admittance Matrix (Ybus).**

**Solution:**

1.  **Number of Buses:** $n = 3$.
2.  **Initialize Ybus:** Create a $3 \times 3$ zero matrix.
    `Ybus = zeros(3, 3);`

3.  **Calculate Branch Admittances:**
    *   $y_{12} = 1 / (0.1 + j0.4) = 1 / 0.4123 \angle 75.96^\circ \approx 0.2425 \angle -75.96^\circ \approx 0.0588 - j0.2353$
    *   $y_{13} = 1 / (0.05 + j0.2) = 1 / 0.2062 \angle 75.96^\circ \approx 0.4850 \angle -75.96^\circ \approx 0.1177 - j0.4706$
    *   $y_{23} = 1 / (0.08 + j0.3) = 1 / 0.3105 \angle 75.07^\circ \approx 0.3221 \angle -75.07^\circ \approx 0.0832 - j0.3100$

4.  **Populate Ybus:**

    *   **Branch 1-2 ($y_{12}$):**
        *   Off-diagonal: $Y_{12} = -y_{12}$, $Y_{21} = -y_{12}$
        *   Diagonal: $Y_{11} = Y_{11} + y_{12}$, $Y_{22} = Y_{22} + y_{12}$

    *   **Branch 1-3 ($y_{13}$):**
        *   Off-diagonal: $Y_{13} = -y_{13}$, $Y_{31} = -y_{13}$
        *   Diagonal: $Y_{11} = Y_{11} + y_{13}$, $Y_{33} = Y_{33} + y_{13}$

    *   **Branch 2-3 ($y_{23}$):**
        *   Off-diagonal: $Y_{23} = -y_{23}$, $Y_{32} = -y_{23}$
        *   Diagonal: $Y_{22} = Y_{22} + y_{23}$, $Y_{33} = Y_{33} + y_{23}$

    **Calculations:**

    *   $Y_{11} = y_{12} + y_{13} = (0.0588 - j0.2353) + (0.1177 - j0.4706) = 0.1765 - j0.7059$
    *   $Y_{22} = y_{12} + y_{23} = (0.0588 - j0.2353) + (0.0832 - j0.3100) = 0.1420 - j0.5453$
    *   $Y_{33} = y_{13} + y_{23} = (0.1177 - j0.4706) + (0.0832 - j0.3100) = 0.2009 - j0.7806$

    *   $Y_{12} = -y_{12} = -(0.0588 - j0.2353) = -0.0588 + j0.2353$
    *   $Y_{21} = -y_{12} = -0.0588 + j0.2353$

    *   $Y_{13} = -y_{13} = -(0.1177 - j0.4706) = -0.1177 + j0.4706$
    *   $Y_{31} = -y_{13} = -0.1177 + j0.4706$

    *   $Y_{23} = -y_{23} = -(0.0832 - j0.3100) = -0.0832 + j0.3100$
    *   $Y_{32} = -y_{23} = -0.0832 + j0.3100$

    **Final Ybus Matrix:**
    $$
    [Y] = \begin{bmatrix}
    0.1765 - j0.7059 & -0.0588 + j0.2353 & -0.1177 + j0.4706 \\
    -0.0588 + j0.2353 & 0.1420 - j0.5453 & -0.0832 + j0.3100 \\
    -0.1177 + j0.4706 & -0.0832 + j0.3100 & 0.2009 - j0.7806
    \end{bmatrix}
    $$

## 8. Practice Questions/Exercises

**Question 1:**
Consider a 2-bus system with a single transmission line connecting Bus 1 and Bus 2.
*   Line impedance: $Z_{12} = 0.02 + j0.08$ p.u.
*   Line charging susceptance: $B_{sh\_12} = 0.03$ p.u.
Formulate the bus admittance matrix for this system.

**Answer 1:**
1.  **Number of Buses:** $n = 2$.
2.  **Branch Admittances:**
    *   $z_{12} = 0.02 + j0.08$ p.u.
    *   $y_{12} = 1 / (0.02 + j0.08) = 1 / 0.08246 \angle 75.96^\circ \approx 12.127 \angle -75.96^\circ \approx 2.927 - j11.718$
    *   $y_{shunt\_half\_12} = j0.03 / 2 = j0.015$ p.u.
3.  **Ybus Calculation:**
    *   $Y_{11} = y_{12} + y_{shunt\_half\_12} = (2.927 - j11.718) + j0.015 = 2.927 - j11.703$
    *   $Y_{22} = y_{12} + y_{shunt\_half\_12} = (2.927 - j11.718) + j0.015 = 2.927 - j11.703$
    *   $Y_{12} = -y_{12} = -(2.927 - j11.718) = -2.927 + j11.718$
    *   $Y_{21} = -y_{12} = -2.927 + j11.718$

    $$
    [Y] = \begin{bmatrix}
    2.927 - j11.703 & -2.927 + j11.718 \\
    -2.927 + j11.718 & 2.927 - j11.703
    \end{bmatrix}
    $$

**Question 2:**
Modify the MATLAB code provided in Section 6 to handle a 4-bus system with the following branch data:
*   Branch 1-2: $R=0.01, X=0.05, B_{sh}=0.02$
*   Branch 1-3: $R=0.02, X=0.08, B_{sh}=0.03$
*   Branch 2-4: $R=0.015, X=0.06, B_{sh}=0.025$
*   Branch 3-4: $R=0.02, X=0.07, B_{sh}=0.03$
*   Also, add a shunt capacitor of $0.01$ p.u. susceptance to Bus 2.

**Answer 2:**
The modified `branch_data` and the additional line for the shunt capacitor would be:

```matlab
% Define the number of buses
num_buses = 4; % Modified

% Initialize the Ybus matrix with zeros
Ybus = zeros(num_buses, num_buses);

% Define branch data
branch_data = [
    1, 2, 0.01, 0.05, 0.02;
    1, 3, 0.02, 0.08, 0.03;
    2, 4, 0.015, 0.06, 0.025;
    3, 4, 0.02, 0.07, 0.03
];

% --- Populate Ybus matrix ---
for k = 1:size(branch_data, 1)
    from_bus = branch_data(k, 1);
    to_bus = branch_data(k, 2);
    R_pu = branch_data(k, 3);
    X_pu = branch_data(k, 4);
    B_sh_pu = branch_data(k, 5);

    z_series_pu = R_pu + 1j * X_pu;
    y_series_pu = 1 / z_series_pu;
    y_shunt_half_pu = 1j * B_sh_pu / 2;

    Ybus(from_bus, to_bus) = Ybus(from_bus, to_bus) - y_series_pu;
    Ybus(to_bus, from_bus) = Ybus(to_bus, from_bus) - y_series_pu;

    Ybus(from_bus, from_bus) = Ybus(from_bus, from_bus) + y_series_pu + y_shunt_half_pu;
    Ybus(to_bus, to_bus) = Ybus(to_bus, to_bus) + y_series_pu + y_shunt_half_pu;
end

% Add shunt capacitor to Bus 2
shunt_cap_bus2_pu = 0.01;
Ybus(2, 2) = Ybus(2, 2) + 1j * shunt_cap_bus2_pu;

% Display the Ybus matrix
disp('Bus Admittance Matrix (Ybus):');
disp(Ybus);
```

## 9. Important Points to Remember

*   **Reciprocal Nature:** The Ybus matrix is always symmetric ($Y_{ij} = Y_{ji}$) if only mutual admittances are considered.
*   **Complex Numbers:** Admittances are generally complex numbers. Remember to handle real (conductance) and imaginary (susceptance) parts correctly.
*   **Per Unit System:** Always ensure all parameters are in the per unit system before calculations.
*   **Shunt Admittances:** The charging susceptance of transmission lines is split equally between the two connected buses. Dedicated shunt elements are added directly to the diagonal of the bus they are connected to.
*   **Transformer Taps:** Off-nominal tap settings in transformers affect the branch admittance and must be accounted for.
*   **MATLAB Syntax:** Pay close attention to MATLAB's matrix indexing and complex number handling.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 10. References and Textbooks

*   **Grainger, J. J., & Stevenson, W. D. (1994). *Power System Analysis*. McGraw-Hill.**
    *   *This is a classic text that provides a thorough foundation in power system analysis, including detailed explanations of Ybus formulation and its applications.*
*   **Choudhury, S. (2016). *Power System Analysis*. PHI Learning Pvt. Ltd.**
    *   *Offers a comprehensive approach to power system analysis with practical examples and MATLAB implementations.*
*   **Stagg, G. W., & El-Abiad, A. H. (1968). *Computer Methods in Power Systems Analysis*. McGraw-Hill.**
    *   *An older but fundamental text that covers early computational methods in power systems, including Ybus construction.*

This document provides a comprehensive guide to formulating the bus admittance matrix. Understanding this concept is fundamental for all subsequent power system analysis in this lab module and beyond.