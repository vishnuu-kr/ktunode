---
title: "Determine the tensile properties of cast iron (a brittle material) using a Universal Testing Machine (UTM) equipped with an extensometer."
subject: "MATERIALS TESTING LAB"
module: "Module 3: Determine the tensile properties of cast iron (a brittle material) using a Universal Testing Machine (UTM) equipped with an extensometer."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e74"
status: "completed"
scrapedAt: "2026-05-20T17:50:20.155Z"
---
# MATERIALS TESTING LAB: Module 3 - Tensile Properties of Cast Iron

## Topic: Determine the tensile properties of cast iron (a brittle material) using a Universal Testing Machine (UTM) equipped with an extensometer.

---

### 1. Introduction to Cast Iron and Tensile Testing

**What is Cast Iron?**
Cast iron is a family of iron-carbon alloys with a carbon content greater than 2%. It typically contains silicon (1-3%) and other alloying elements. Unlike steel, cast iron has a much higher carbon content, which significantly influences its properties.

*   **Key Characteristic:** Cast iron is generally considered a **brittle material**. This means it fractures with little or no plastic deformation.
*   **Types of Cast Iron:** While this experiment focuses on "cast iron" generally, different types exist (grey cast iron, ductile cast iron, malleable cast iron, white cast iron), each with distinct microstructures and mechanical properties. Grey cast iron, with graphite in flake form, is common and often brittle. Ductile cast iron has graphite in nodular or spherical form, providing improved ductility.
*   **Applications:** Cast iron is widely used in automotive components (engine blocks, brake drums), machine tool frames, pipes, and cookware due to its good castability, wear resistance, and vibration damping properties.

**What is Tensile Testing?**
Tensile testing is a fundamental mechanical test used to determine the tensile properties of a material under a controlled pulling (tensile) force. It involves applying a gradually increasing load to a specimen until it fractures.

*   **Purpose:** To measure a material's strength, stiffness, and ductility.
*   **Significance:** Essential for material selection, quality control, and understanding material behavior under load.

**Why Test Cast Iron in Tension?**
While cast iron is brittle and primarily used in compression or under static loads where its tensile strength is not the primary design consideration, tensile testing is still crucial for:

*   **Understanding its limitations:** Quantifying its low tensile strength and lack of ductility is vital for engineers to avoid catastrophic failure in applications where tensile stress might occur.
*   **Material Characterization:** Providing baseline data for comparison with other materials or different processing conditions of cast iron.
*   **Research and Development:** Investigating the effect of alloying elements or heat treatments on cast iron's tensile behavior.

---

### 2. Universal Testing Machine (UTM) and Extensometer

**Universal Testing Machine (UTM)**
A UTM is a versatile machine designed to perform various mechanical tests, including tensile, compression, bending, and shear.

*   **Components:**
    *   **Load Frame:** Provides the structural support for the test.
    *   **Gripping Mechanism:** Holds the specimen securely at both ends. Different grips are used for various specimen shapes and materials.
    *   **Actuator/Crosshead:** Applies the controlled force or displacement. In tensile testing, the crosshead moves at a constant rate, pulling the specimen.
    *   **Load Cell:** Measures the applied force.
    *   **Data Acquisition System:** Records the load and displacement data.
*   **Operation (Tensile Test):**
    1.  A precisely prepared specimen is mounted in the grips.
    2.  The machine is set to a specific loading rate (e.g., constant crosshead speed or strain rate).
    3.  The load is applied incrementally, and the corresponding deformation is measured.
    4.  The test continues until the specimen fractures.

**Extensometer**
An extensometer is a precision instrument used to measure strain (deformation) over a specific gauge length of the specimen.

*   **Why Use an Extensometer?**
    *   **Accurate Strain Measurement:** The initial deformation of the specimen is very small, especially in the elastic region. Measuring this directly with the UTM's crosshead movement can be inaccurate due to machine compliance and initial slippage in the grips.
    *   **Determination of Elastic Properties:** Crucial for accurately determining Young's Modulus (Modulus of Elasticity), which requires precise measurement of strain in the elastic region.
    *   **Yield Strength:** While cast iron typically doesn't exhibit a distinct yield point like ductile metals, an extensometer helps define an offset yield strength if needed for specific grades or research purposes.
*   **Types of Extensometers:**
    *   **Clip-on Extensometer:** A common type for tensile testing. It clips onto the specimen and usually has knife edges that register the change in gauge length.
    *   **Optical Extensometer:** Uses light or lasers to measure displacement without physical contact.
*   **How it Works (Clip-on):** The extensometer is attached to the specimen within the defined gauge length. As the specimen elongates, the extensometer's sensing elements (often strain gauges) detect and record this change, which is then converted into strain values.

---

### 3. Preparing the Specimen

*   **Standardization:** Tensile specimens (often called "dog-bone" specimens) are prepared according to specific material standards (e.g., ASTM E8/E8M for metals). These standards ensure consistency in geometry.
*   **Key Features of a Tensile Specimen:**
    *   **Gauge Length (L₀):** The central portion of the specimen where deformation is measured. It has a precisely defined initial length.
    *   **Reduced Section:** The area between the gauge length and the grip ends, which is narrower to concentrate the deformation in the gauge section.
    *   **Grip Ends:** Designed to be securely held by the UTM grips.
*   **Materials Considerations for Cast Iron Specimens:**
    *   **Casting Process:** Specimens are often cast directly from the molten metal to represent the as-cast properties.
    *   **Machining:** While some cast iron specimens might be cast to shape, they may also be machined from larger castings. Machining needs to be done carefully to avoid introducing residual stresses or altering the microstructure near the surface.
    *   **Surface Finish:** A smooth surface finish within the gauge length is important for accurate extensometer readings and to prevent premature fracture initiation.

---

### 4. Conducting the Tensile Test and Data Acquisition

**Procedure:**

1.  **Specimen Measurement:** Accurately measure the initial gauge length (L₀) and the cross-sectional area (A₀) of the specimen within the gauge length. For cast iron, the cross-section is often circular or rectangular.
    *   **A₀ Calculation:**
        *   For a circular specimen: $A₀ = \pi (d₀/2)²$, where $d₀$ is the initial diameter.
        *   For a rectangular specimen: $A₀ = w₀ \times t₀$, where $w₀$ is the initial width and $t₀$ is the initial thickness.
2.  **Specimen Mounting:** Securely mount the specimen in the UTM grips. Ensure proper alignment to prevent eccentric loading, which can lead to erroneous results.
3.  **Extensometer Attachment:** Attach the extensometer to the specimen within the defined gauge length, ensuring it is properly seated.
4.  **Zeroing:** Zero the load cell and the extensometer.
5.  **Loading:** Start the UTM at a predetermined crosshead speed. The machine will begin pulling the specimen.
6.  **Data Recording:** The data acquisition system records pairs of Load (F) and Elongation ($\Delta L$) data as the test progresses. The extensometer provides $\Delta L$ accurately within the gauge length.
7.  **Observation:** Visually observe the specimen's behavior. For cast iron, expect minimal visible deformation before fracture. Note the location of fracture.
8.  **Fracture:** The test stops when the specimen breaks.
9.  **Post-Fracture Measurement:** Measure the final gauge length (L_f) after fracture to determine the total elongation.

---

### 5. Calculating Tensile Properties

From the recorded Load (F) and Elongation ($\Delta L$) data, we can calculate various tensile properties. The data is typically plotted as a **Stress-Strain Curve**.

**Stress Calculation:**
Engineering Stress ($\sigma$): $\sigma = F / A₀$ (Force divided by the original cross-sectional area)
*   **Units:** Pascals (Pa) or Megapascals (MPa), or psi (pounds per square inch).

**Strain Calculation:**
Engineering Strain ($\epsilon$): $\epsilon = \Delta L / L₀$ (Change in length divided by the original gauge length)
*   **Units:** Dimensionless, or expressed as mm/mm, in/in, or percentage (%).

**Key Tensile Properties to Determine:**

1.  **Ultimate Tensile Strength (UTS):**
    *   **Definition:** The maximum engineering stress the material can withstand before it begins to neck (or, for brittle materials, before fracture occurs after reaching peak load).
    *   **Calculation:** $UTS = \sigma_{max} = F_{max} / A₀$
    *   **For Brittle Materials like Cast Iron:** UTS is often the peak stress achieved on the engineering stress-strain curve, which typically occurs just before fracture. There is usually no significant necking.

2.  **Yield Strength ($σ_y$):**
    *   **Definition:** The stress at which a material begins to deform plastically.
    *   **For Ductile Materials:** Typically identified by a distinct point (upper and lower yield points) or a gradual transition on the stress-strain curve.
    *   **For Brittle Materials like Cast Iron:** Cast iron generally does not exhibit a distinct yield point. It fractures shortly after the elastic limit. If a yield strength is reported, it's usually an **offset yield strength** (e.g., 0.2% offset yield strength), which is the stress at which the material has deformed plastically by a specified amount.
    *   **Calculation (Offset Yield Strength):** On the stress-strain curve, draw a line parallel to the elastic portion of the curve, starting from a strain of 0.002 (0.2%). The stress at which this line intersects the curve is the 0.2% offset yield strength.

3.  **Young's Modulus (Modulus of Elasticity, E):**
    *   **Definition:** A measure of the stiffness of a material, representing the resistance to elastic deformation. It's the slope of the linear elastic portion of the stress-strain curve.
    *   **Calculation:** $E = \Delta \sigma / \Delta \epsilon$ (calculated from the linear region of the stress-strain curve, typically between 0 and the proportional limit).
    *   **Importance:** High Young's Modulus means the material is stiff and deforms less under elastic load. For cast iron, this indicates rigidity.

4.  **Ductility:**
    *   **Definition:** The ability of a material to deform plastically before fracturing.
    *   **Measured by:**
        *   **Percent Elongation (%EL):** $(\frac{L_f - L₀}{L₀}) \times 100\%$
        *   **Percent Reduction in Area (%RA):** $(\frac{A₀ - A_f}{A₀}) \times 100\%$, where $A_f$ is the final cross-sectional area at the fracture surface.
    *   **For Brittle Materials like Cast Iron:** %EL and %RA values are typically very low, often close to zero. This confirms their brittle nature.

5.  **Toughness:**
    *   **Definition:** The ability of a material to absorb energy and deform plastically before fracturing. It's related to both strength and ductility.
    *   **Graphical Representation:** The area under the entire stress-strain curve.
    *   **For Brittle Materials:** Generally have low toughness because they lack significant plastic deformation.

---

### 6. Interpreting Results for Cast Iron

*   **Stress-Strain Curve:** The stress-strain curve for cast iron will be characterized by:
    *   A linear elastic region.
    *   A rapid fracture after reaching the peak stress.
    *   Little to no plastic deformation (necking).
    *   The curve will likely be relatively short, ending abruptly at fracture.

*   **Comparison to Ductile Materials:**
    *   **Ductile Material (e.g., steel):** The curve shows a clear elastic region, a yield point, a region of plastic deformation (strain hardening), necking, and then fracture. It has significant elongation and reduction in area.
    *   **Brittle Material (e.g., cast iron):** The curve is steep in the elastic region, reaches a peak stress, and fractures almost immediately with minimal strain beyond the elastic limit. Elongation and reduction in area are very low.

*   **Microstructure-Property Relationship (CO2):**
    *   **Graphite Flakes (Grey Cast Iron):** The presence of graphite flakes acts as stress concentrators. These sharp edges initiate microcracks under tensile stress, leading to premature failure and low tensile strength. The surrounding matrix (ferrite, pearlite) determines the strength between the graphite flakes.
    *   **Ductile Cast Iron (Nodules):** Spherical graphite nodules are less detrimental than flakes. They still cause some stress concentration, but not as severe. This results in higher tensile strength and some degree of ductility compared to grey cast iron.
    *   **Microstructure:** The properties are also influenced by the matrix structure (ferritic, pearlitic, martensitic) and the presence of inclusions or voids.

---

### 7. Important Points to Remember

*   **Brittle Nature:** Cast iron's primary characteristic is its brittleness. Expect low elongation and fracture with little deformation.
*   **Extensometer is Crucial:** For accurate Young's Modulus determination, especially with brittle materials where deformation is minimal.
*   **Engineering vs. True Stress/Strain:** This lab typically uses engineering stress and strain. True stress and strain become more relevant when significant necking occurs, which is minimal in cast iron.
*   **Specimen Preparation:** Critical for accurate results. Ensure correct dimensions and absence of surface defects.
*   **Alignment:** Proper alignment of the specimen in the UTM grips is paramount to avoid bending stresses.
*   **Data Interpretation:** Focus on UTS and Young's Modulus. Low ductility values (%EL, %RA) are expected and confirm the material's nature.
*   **Safety:** Always follow lab safety protocols, especially when operating the UTM. Wear safety glasses and ensure the specimen is properly secured.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. Textbook and Reference Material Integration

*   **Callister's Materials Science and Engineering:**
    *   **Chapter 6 (Mechanical Properties):** Provides fundamental definitions of stress, strain, Young's Modulus, tensile strength, yield strength, ductility, and toughness. Discusses the stress-strain behavior of different material classes, including brittle materials.
    *   **Chapter 10 (Ferrous Alloys):** Discusses cast irons, their types (grey, ductile, malleable, white), microstructures (graphite forms, matrix phases), and general mechanical properties, often highlighting their lower tensile strength and brittleness compared to steels.
*   **Mechanical Testing and Evaluation (Kuhn & Medlin):**
    *   **Chapter 3 (Tensile Testing):** Details the methodology, equipment (UTM, extensometers), specimen preparation standards (like ASTM E8), data analysis, and calculation of mechanical properties.
    *   **Chapter 11 (Fracture Mechanics):** Can provide context for understanding fracture in brittle materials, where crack initiation and propagation are critical.
*   **Mechanics of Materials (Gere & Goodno):**
    *   **Chapter 2 (Stress and Strain):** Explains stress-strain diagrams, Hooke's Law, and the calculation of Young's Modulus. Discusses elastic and plastic behavior.
    *   **Chapter 9 (Fracture Mechanics):** Offers a theoretical background on why brittle materials fracture suddenly.
*   **Introduction to Materials Science for Engineers (Shackelford):**
    *   **Chapter 5 (Mechanical Properties):** Covers the basic concepts of mechanical testing and properties, similar to Callister but perhaps with a more engineering-focused perspective. It will explain how microstructure influences these properties.

---

### 9. Alignment with Course Outcomes

*   **CO1: Evaluate the mechanical properties of different materials under various loading conditions. (K3)**
    *   This lab directly addresses this by determining tensile properties (UTS, E, low ductility) of cast iron. You will evaluate how cast iron behaves under a tensile load.
*   **CO2: Relate material microstructure to its mechanical behaviour. (K4)**
    *   By understanding the role of graphite flakes in cast iron and comparing its properties to other materials with different microstructures (e.g., steel), you will relate microstructure to brittleness and low tensile strength.
*   **CO3: Analyse the effect of design features on the performance of mechanical components. (K4)**
    *   While not directly designing components, understanding cast iron's low tensile strength and brittleness informs design decisions. Engineers must avoid tensile stress concentrations or ensure that the material is used where its compressive strength or damping is more important.
*   **CO4: Utilize experimental techniques to determine material properties. (K3)**
    *   This is the core of the lab. You will gain hands-on experience using a UTM and extensometer to collect data and calculate tensile properties.
*   **CO5: Apply fundamental engineering principles to analyse the behaviour of structures under load. (K3)**
    *   Understanding the stress-strain relationship and material properties (like Young's Modulus) is fundamental to analyzing how structures made of cast iron (or where cast iron components are present) will respond to applied loads.

---

### 10. Practice Questions and Exercises

**Question 1:**
A cast iron specimen with an initial gauge length of 50 mm and a cross-sectional area of 100 mm² is tested on a UTM. The maximum load recorded before fracture was 25 kN. The final gauge length after fracture was 50.5 mm.
Calculate:
a) The Ultimate Tensile Strength (UTS) in MPa.
b) The Percent Elongation (%EL).
c) Based on your calculations, comment on the ductility of this cast iron sample.

**Answer 1:**
a) $UTS = \frac{F_{max}}{A₀} = \frac{25 \text{ kN}}{100 \text{ mm}^2} = \frac{25 \times 10³ \text{ N}}{100 \text{ mm}^2} = 250 \text{ N/mm}^2 = 250 \text{ MPa}$

b) $\%EL = (\frac{L_f - L₀}{L₀}) \times 100\% = (\frac{50.5 \text{ mm} - 50 \text{ mm}}{50 \text{ mm}}) \times 100\% = (\frac{0.5 \text{ mm}}{50 \text{ mm}}) \times 100\% = 1\%$

c) The Percent Elongation of 1% is very low, indicating that the cast iron sample is **brittle**. It fractured after minimal plastic deformation.

---

**Question 2:**
Explain why an extensometer is particularly important for accurately determining the Young's Modulus of a brittle material like cast iron compared to using only the crosshead displacement from the UTM.

**Answer 2:**
For brittle materials like cast iron, the elastic deformation is very small. The UTM's crosshead displacement includes not only the elongation of the specimen's gauge length but also the elastic deformation of the grips, the load train, and any slippage at the grips. These combined effects can be significant relative to the actual strain in the gauge length. An extensometer, being attached directly to the gauge section and designed for high precision, measures only the deformation of that specific length, thus providing a much more accurate measurement of strain. This accuracy is crucial for calculating Young's Modulus, which is the slope of the stress-strain curve in the elastic region.

---

**Question 3:**
Describe the microstructural feature in grey cast iron that contributes most significantly to its low tensile strength and brittleness.

**Answer 3:**
The presence of **graphite flakes** in grey cast iron is the primary microstructural feature responsible for its low tensile strength and brittleness. These graphite flakes are sharp, elongated inclusions that act as stress concentrators. Under tensile stress, cracks readily initiate at the tips of these flakes, leading to premature fracture even at stress levels significantly below the intrinsic strength of the surrounding metallic matrix.

---

**Question 4:**
If a cast iron specimen fractured at a load of 30 kN, and the original cross-sectional area at the fracture surface was measured to be 75 mm² (instead of the original 100 mm²), what would be the Percent Reduction in Area (%RA)? (Assume original area A₀ = 100 mm²).

**Answer 4:**
$\%RA = (\frac{A₀ - A_f}{A₀}) \times 100\%$
Where:
$A₀$ = Original cross-sectional area = 100 mm²
$A_f$ = Final cross-sectional area at fracture = 75 mm²

$\%RA = (\frac{100 \text{ mm}² - 75 \text{ mm}²}{100 \text{ mm}²}) \times 100\%$
$\%RA = (\frac{25 \text{ mm}²}{100 \text{ mm}²}) \times 100\%$
$\%RA = 0.25 \times 100\% = 25\%$

---

This comprehensive set of notes covers the essential aspects of determining the tensile properties of cast iron using a UTM with an extensometer, aligning with the learning outcomes and course objectives.