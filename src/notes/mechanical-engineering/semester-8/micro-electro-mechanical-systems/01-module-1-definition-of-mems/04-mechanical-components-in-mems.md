---
title: "Mechanical components in MEMS."
subject: "MICRO ELECTRO MECHANICAL SYSTEMS"
module: "Module 1: Definition of MEMS."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf4804464780"
status: "completed"
scrapedAt: "2026-05-20T18:22:22.673Z"
---
# MICRO ELECTRO MECHANICAL SYSTEMS (MEMS)

## Module 1: Definition of MEMS

### Topic: Mechanical Components in MEMS

---

**Learning Outcomes Covered in this Topic:**

*   Understanding the fundamental mechanical components that constitute MEMS devices.
*   Identifying different types of mechanical structures and their functionalities.
*   Recognizing how these mechanical components are actuated and sensed.
*   Grasping the basic principles behind the operation of common MEMS mechanical elements.
*   Connecting the understanding of mechanical components to the broader definition of MEMS (CO1).

---

**Introduction:**

MEMS (Micro Electro Mechanical Systems) are devices that integrate mechanical and electrical functionalities on a common silicon substrate or other materials. While electrical components are crucial for control and sensing, the **mechanical components** are the heart of MEMS, enabling them to interact with the physical world. These mechanical elements are typically fabricated using micro-fabrication techniques and operate at the micro-scale.

---

### 1. Key Concepts and Definitions

*   **Micro-machining:** The process of creating microscopic mechanical structures using techniques similar to semiconductor fabrication. This is the foundation for manufacturing MEMS mechanical components. (Hsu, Chapter 2)
*   **Actuation:** The process of causing a mechanical component to move or deform. This is typically achieved through electrical, thermal, or pneumatic means.
*   **Sensing:** The process of detecting physical phenomena (e.g., pressure, acceleration, light) and converting them into electrical signals. This often involves the displacement or deformation of a mechanical component.
*   **Micro-structure:** A mechanical component fabricated at the micro-scale (typically 1-1000 µm).
*   **Micro-device:** A complete MEMS device incorporating micro-structures, electrical components, and packaging.

---

### 2. Types of Mechanical Components in MEMS

MEMS mechanical components can be broadly categorized based on their function and movement.

#### 2.1. Beams and Springs

*   **Description:** These are fundamental structural elements that provide compliance, support, and enable linear or angular displacement. They are analogous to macroscopic springs.
*   **Types:**
    *   **Cantilever Beams:** Fixed at one end and free at the other. Commonly used for sensing deflection due to applied forces.
    *   **Simply Supported Beams:** Supported at both ends.
    *   **Fixed-Fixed Beams:** Fixed at both ends.
    *   **Torsional Springs:** Designed to provide rotational motion.
*   **Material Properties:** Young's Modulus (E) and Poisson's Ratio are critical for determining the stiffness and deformation of beams.
*   **Applications:**
    *   **Force Sensing:** Measuring the force applied to the free end of a cantilever.
    *   **Vibration Isolation:** Acting as compliant mounts for sensitive components.
    *   **Micro-switches:** Mechanical contacts that are closed or opened by the deflection of a beam.
*   **Example (Hsu, Chapter 4):** Micro-cantilevers used in Atomic Force Microscopes (AFMs) to sense surface topography. The tiny tip at the end of the cantilever interacts with the surface, and the resulting deflection is detected optically.

#### 2.2. Membranes and Diaphragms

*   **Description:** Thin, flat structures, often circular or square, that are supported around their periphery. They are highly sensitive to pressure differences.
*   **Materials:** Silicon, silicon nitride, silicon dioxide.
*   **Functionality:**
    *   **Pressure Sensing:** When a pressure difference exists across the membrane, it deflects. This deflection can be measured mechanically or converted to an electrical signal.
    *   **Optical Shutters:** Used in micro-mirror arrays for displays.
    *   **Fluidic Channels:** Can act as barriers or flow restrictors.
*   **Example (Hsu, Chapter 4):** Micro-pressure sensors often utilize a silicon diaphragm. As pressure increases, the diaphragm deforms, and this deformation is typically sensed using piezoresistors integrated onto the diaphragm.

#### 2.3. Micro-mirrors

*   **Description:** Small, reflective surfaces that can be tilted or rotated to steer light beams.
*   **Types:**
    *   **Single-Axis Mirrors:** Tilt about one axis.
    *   **Dual-Axis Mirrors:** Tilt about two axes (often called Digital Micromirror Devices or DMDs).
*   **Actuation:** Typically electrostatic or magnetic.
*   **Applications:**
    *   **Digital Displays:** In projectors and televisions (e.g., Texas Instruments' DLP technology).
    *   **Optical Switching:** Rerouting optical signals in telecommunications.
    *   **Bar Code Scanning:** Steering a laser beam.
*   **Example (Hsu, Chapter 5):** In a DLP projector, millions of individually addressable micro-mirrors are rapidly tilted to reflect light from a high-intensity lamp towards or away from the projection lens, creating an image.

#### 2.4. Micro-actuators

*   **Description:** Devices that produce mechanical motion. They are essential for moving or manipulating other micro-components.
*   **Types (based on actuation principle):**
    *   **Electrostatic Actuators:** Utilize electrostatic forces generated by applied voltages.
        *   **Parallel Plate Actuators:** Two parallel plates, one fixed and one movable.
        *   **Comb-Drive Actuators:** Interdigitated fingers that move relative to each other when a voltage is applied. Known for large displacement.
    *   **Thermal Actuators:** Rely on thermal expansion due to resistive heating.
        *   **Bimorph Actuators:** Two materials with different coefficients of thermal expansion bonded together.
        *   **Thermal Expansion Actuators (TEAs):** Utilize the expansion of a heated element.
    *   **Piezoelectric Actuators:** Utilize the piezoelectric effect, where a material generates an electric charge when deformed or deforms when an electric field is applied.
    *   **Magnetic Actuators:** Utilize magnetic forces.
*   **Examples:**
    *   **Electrostatic Comb Drive (Madou, Chapter 10):** Used in micro-relays and micro-mirrors to provide linear motion.
    *   **Thermal V-Beam Actuator (Hsu, Chapter 5):** A common type of TEA where a V-shaped beam is heated and expands, causing macroscopic motion.

#### 2.5. Micro-sensors

*   **Description:** Components that detect physical stimuli and convert them into measurable electrical signals. The mechanical element is often the transducer.
*   **Types (based on measured parameter):**
    *   **Accelerometers:** Measure acceleration. Typically involve a proof mass suspended by springs. When acceleration occurs, the proof mass moves, and this displacement is sensed.
    *   **Gyroscopes:** Measure angular velocity. Often use vibrating structures.
    *   **Pressure Sensors:** As discussed with diaphragms.
    *   **Microphones:** Detect sound waves, which cause diaphragm vibration.
    *   **Optical Sensors:** Employ mechanical elements like gratings or shutters.
*   **Examples:**
    *   **MEMS Accelerometer (Gad-el-Hak, Chapter 3):** Found in smartphones for screen orientation, car airbags, and gaming controllers. A proof mass attached to springs moves relative to the casing under acceleration. Capacitive or piezoresistive elements detect this displacement.
    *   **Microphones:** Small diaphragms that vibrate in response to sound pressure waves. This vibration is converted into an electrical signal, often capacitively.

#### 2.6. Micro-gears, Micro-motors, and Micro-robots

*   **Description:** These are more complex mechanical components that enable rotational or linear motion and even locomotion at the micro-scale.
*   **Micro-gears:** Interlocking teeth designed to transmit rotational motion and torque.
*   **Micro-motors:** Devices that convert electrical energy into rotational mechanical energy.
*   **Micro-robots:** Fully integrated systems capable of performing tasks through mechanical movement.
*   **Fabrication Challenges:** These often require advanced micro-machining techniques like LIGA (Lithographie, Galvanoformung, Abformung) for high aspect ratio structures and precise meshing.
*   **Example (Hsu, Chapter 6):** Micro-gears can be fabricated from silicon or polymers and are used in micro-fluidic pumps or micro-assembly systems. Micro-motors, often driven electrostatically or electromagnetically, are a key component in micro-actuated systems.

---

### 3. Materials for MEMS Mechanical Components

The choice of material significantly impacts the performance and fabrication of MEMS mechanical components.

*   **Silicon (Si):**
    *   **Advantages:** Abundant, excellent mechanical properties (high Young's modulus, high tensile strength), well-established micro-fabrication processes (e.g., etching), can be doped to be conductive or semiconducting.
    *   **Disadvantages:** Brittle, relatively high density.
*   **Polymers:**
    *   **Advantages:** Low cost, flexibility, biocompatibility, good electrical insulation.
    *   **Disadvantages:** Lower mechanical strength and stiffness compared to silicon, thermal instability.
*   **Metals (e.g., Gold, Aluminum, Platinum):**
    *   **Advantages:** Good electrical conductivity, ductile, can be deposited as thin films.
    *   **Disadvantages:** Lower stiffness than silicon, can be susceptible to fatigue.
*   **Ceramics (e.g., Silicon Nitride (SiN), Silicon Dioxide (SiO2)):**
    *   **Advantages:** High strength, stiffness, good chemical inertness, electrical insulators.
    *   **Disadvantages:** Difficult to etch, brittle.
*   **Piezoelectric Materials (e.g., PZT, AlN):**
    *   **Advantages:** Directly convert mechanical energy to electrical energy and vice-versa.
    *   **Disadvantages:** Can be brittle, fabrication can be complex.

---

### 4. Micro-fabrication Processes for Mechanical Components

While a detailed discussion of fabrication is in later modules, it's important to know that the mechanical components are built using specific processes.

*   **Bulk Micromachining:** Etching away material from the substrate to create structures.
*   **Surface Micromachining:** Depositing and patterning layers of material on a substrate, often with a sacrificial layer that is later removed to free the mechanical structures. (Hsu, Chapter 3)
*   **LIGA:** Combining X-ray lithography, electroplating, and molding to create high aspect ratio, complex structures.

---

### 5. Examples and Applications of MEMS Mechanical Components

| Mechanical Component | Primary Function                               | Common MEMS Devices                                     |
| :------------------- | :--------------------------------------------- | :------------------------------------------------------ |
| Cantilever Beam      | Force sensing, deflection sensing              | AFM probes, micro-switches, pressure sensors            |
| Diaphragm            | Pressure sensing, force detection              | Pressure sensors, microphones                           |
| Micro-mirror         | Light manipulation, steering                   | DLP projectors, optical switches                        |
| Comb Drive           | Linear actuation, force generation             | Micro-actuators, micro-motors, relays                   |
| Proof Mass           | Inertial sensing (acceleration, vibration)     | Accelerometers, gyroscopes                              |
| Vibrating Structure  | Inertial sensing (angular velocity)            | Gyroscopes                                              |
| Micro-gear           | Transmission of rotary motion                  | Micro-pumps, micro-assembly systems                     |
| Micro-spring         | Compliance, isolation, displacement enabling   | Any micro-device requiring flexible support             |

---

### 6. Important Points to Remember

*   **Scale Matters:** MEMS mechanical components operate at the micro-scale, leading to unique behaviors and challenges.
*   **Material Properties are Crucial:** The mechanical properties of the materials used (Young's modulus, Poisson's ratio, tensile strength) directly dictate the performance of the components.
*   **Actuation and Sensing are Intertwined:** Mechanical components are often the transducers that convert physical stimuli into electrical signals (sensing) or are driven by electrical signals to produce motion (actuation).
*   **Design and Fabrication are Closely Linked:** The design of a MEMS mechanical component is heavily influenced by the available micro-fabrication techniques.
*   **The World Around Us:** MEMS mechanical components are the physical interface of MEMS devices with their environment.

---

### 7. Practice Questions and Exercises

**Question 1:**

Describe the primary function of a cantilever beam in a MEMS pressure sensor. How does its mechanical property, Young's Modulus, influence its performance?

**Answer:**
In a MEMS pressure sensor, a cantilever beam (or often a diaphragm) is used to detect pressure. When a pressure difference is applied across the diaphragm, it deflects. This deflection is a mechanical response to the applied pressure. Young's Modulus (E) is a measure of a material's stiffness. A higher Young's Modulus means the material is stiffer and requires more force to deform. For a pressure sensor, a certain amount of deflection is needed to generate a measurable signal. If the Young's Modulus is too high (very stiff material), the diaphragm might not deflect enough for a given pressure, leading to poor sensitivity. Conversely, if it's too low, the diaphragm might be too flexible, leading to nonlinear responses or even failure under high pressure. Therefore, selecting a material with an appropriate Young's Modulus is critical for optimizing the sensitivity and range of the pressure sensor.

**Question 2:**

What is the main advantage of using electrostatic comb-drive actuators in MEMS compared to parallel-plate actuators, especially for applications requiring large displacements?

**Answer:**
The main advantage of electrostatic comb-drive actuators over parallel-plate actuators for applications requiring large displacements is their ability to achieve **larger linear displacements** before the gap between the moving and stationary parts becomes too small. Parallel-plate actuators experience a force that increases as the gap decreases, leading to an unstable pull-in phenomenon where the movable plate snaps into the fixed plate when a certain voltage (pull-in voltage) is reached. This limits the usable range of motion. Comb drives, on the other hand, generate force through the interaction of interdigitated fingers. The force is more linear with displacement, and the structure is less prone to unstable pull-in, allowing for significantly larger and more controlled movements.

**Question 3:**

Identify two different types of MEMS mechanical components and provide an example application for each, referencing the textbooks.

**Answer:**
1.  **Micro-mirror:**
    *   **Function:** To steer or modulate light.
    *   **Application:** Digital projectors (e.g., Texas Instruments' DLP technology), where millions of micro-mirrors rapidly tilt to reflect light and form an image.
    *   **Reference:** Hsu, Chapter 5 (Micro-actuators and Micro-mechanisms).

2.  **Micro-diaphragm:**
    *   **Function:** To detect pressure differences.
    *   **Application:** MEMS pressure sensors, commonly found in automotive systems (e.g., tire pressure monitoring), medical devices (e.g., blood pressure monitors), and consumer electronics.
    *   **Reference:** Hsu, Chapter 4 (Micro-sensors and Micro-actuators).

**Question 4 (Conceptual):**

Consider a MEMS accelerometer. How does the *mechanical* behavior of the proof mass and its suspension system enable the measurement of acceleration?

**Answer:**
In a MEMS accelerometer, a **proof mass** (a small, dense object) is suspended by **springs** (typically micro-machined beams). When the device experiences acceleration, an inertial force acts on the proof mass according to Newton's second law ($F = ma$). This force causes the proof mass to move relative to the device's casing, displacing it along the direction of acceleration. The displacement is resisted by the restoring force of the suspension springs. The mechanical design of the springs determines the stiffness ($k$) of the system. The equilibrium displacement ($\Delta x$) of the proof mass is directly proportional to the acceleration ($a$) and inversely proportional to the spring stiffness: $\Delta x \approx \frac{m \cdot a}{k}$. This mechanical displacement is then converted into an electrical signal by a sensing mechanism (e.g., capacitive, piezoresistive). Thus, the mechanical properties of the proof mass and its suspension are fundamental to the functioning of the accelerometer.

---

This concludes the notes on Mechanical Components in MEMS. Understanding these building blocks is crucial for comprehending the design and operation of all MEMS devices.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
