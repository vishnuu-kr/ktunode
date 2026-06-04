---
title: "General taxonomies of assembly operation and systems"
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 2: Introduction to Assembly: The assembly process"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463479"
status: "completed"
scrapedAt: "2026-05-20T17:59:20.958Z"
---
# Design for Manufacture and Assembly (DFMA) - Module 2: Introduction to Assembly: The Assembly Process

## Topic: General Taxonomies of Assembly Operation and Systems

**Course Outcomes Addressed:**

*   **CO1:** Apply the knowledge of Design Guidelines for Manual Assembly. (Knowledge Level: K3)
*   **CO2:** Apply the knowledge of General design principles for manufacturability. (Knowledge Level: K3)

---

### 1. Introduction to Assembly and its Importance in DFMA

**Key Concepts:**

*   **Assembly:** The process of joining individual components or sub-assemblies to create a finished product.
*   **Design for Assembly (DFA):** A design philosophy that emphasizes designing products to be easily and economically assembled. The goal is to minimize the number of parts, simplify assembly operations, and reduce assembly time and cost.
*   **Assembly Cost:** A significant contributor to the overall product cost, often accounting for 20-50% of the total manufacturing cost (Boothroyd, Dewhurst, & Knight, 2010).
*   **Automation vs. Manual Assembly:** Understanding the different approaches to assembly is crucial for designing products that can be manufactured efficiently.

**Importance in DFMA:**

*   A product that is difficult to assemble will inevitably be costly to manufacture, regardless of how easily its individual parts can be made.
*   Focusing on assembly early in the design process can lead to significant cost reductions and improved product quality.
*   DFMA principles are applied to both manual and automated assembly systems.

---

### 2. Taxonomies of Assembly Operations

Assembly operations can be categorized based on various criteria. Understanding these taxonomies helps in analyzing and optimizing the assembly process.

#### 2.1 Based on the Nature of the Operation

*   **Insertion:** Placing one part into another.
    *   *Example:* Screwing a screw into a threaded hole, inserting a shaft into a bearing.
*   **Fastening:** Joining parts together using mechanical fasteners or joining methods.
    *   *Types of Fastening:*
        *   **Mechanical Fastening:** Using screws, bolts, nuts, rivets, clips, snap-fits, etc.
        *   **Adhesive Bonding:** Using glues or adhesives.
        *   **Welding/Brazing/Soldering:** Fusion or joining of materials through heat and/or filler material.
*   **Securing/Locking:** Ensuring that parts remain in their assembled position.
    *   *Example:* Thread locking compounds, staking, crimping.
*   **Indexing/Orientation:** Aligning parts correctly before or during assembly.
    *   *Example:* Keyways in shafts, specific shapes of mating parts, using jigs and fixtures.
*   **Press Fitting:** Assembling parts by forcing one part into another, relying on interference fit.
    *   *Example:* Pressing a bearing onto a shaft, fitting a pin into a hole.
*   **Connecting/Coupling:** Joining sub-assemblies or modules.
    *   *Example:* Connecting a cable harness, attaching a power cord.

#### 2.2 Based on the Method of Execution (Manual vs. Automated)

*   **Manual Assembly:** Performed by human operators using hand tools or simple power tools.
    *   **Advantages:** Flexibility, adaptability to complex tasks, lower initial investment for low volumes.
    *   **Disadvantages:** Higher labor cost, potential for human error, lower consistency, slower for high volumes.
    *   **Relevant to CO1:** Designing for ease of manipulation, visibility, and access for human hands and tools.
*   **Automated Assembly:** Performed by machines, robots, or specialized assembly systems.
    *   **Types of Automated Systems:**
        *   **Fixed Automation:** Dedicated machines for specific tasks, high volume, low flexibility.
        *   **Programmable Automation:** Robots or NC machines that can be reprogrammed for different products or variations, medium volume, medium flexibility.
        *   **Flexible Automation:** Systems that can adapt to product changes with minimal downtime, often using robotics and advanced control systems.
    *   **Advantages:** High speed, consistency, precision, lower per-unit cost for high volumes, can perform tasks difficult or dangerous for humans.
    *   **Disadvantages:** High initial investment, lower flexibility for significant product changes, requires specialized maintenance.
    *   **Relevant to CO2:** Designing parts that are easily handled by robotic grippers, have features for precise location and feeding, and are suitable for automated fastening.

#### 2.3 Based on the Sequence of Operations

*   **Product Assembly:** Assembling the main product from individual components.
*   **Sub-assembly:** Assembling smaller, distinct units that are then integrated into the final product.
    *   *Example:* Assembling a motor housing and rotor as a sub-assembly before installing it into a larger appliance.

---

### 3. Taxonomies of Assembly Systems

Assembly systems are the infrastructure and equipment used to carry out assembly operations.

#### 3.1 Based on Flow and Layout

*   **Line Assembly:** Components move along a conveyor or workstation in a sequential manner. Operators or machines perform specific tasks at each station.
    *   **Types:**
        *   **Product-Oriented Assembly Line:** The product moves past stationary workers who perform specific tasks (e.g., car assembly line).
        *   **Process-Oriented Assembly Line:** Similar processes are grouped together, and products move between these departments (less common for final assembly).
    *   **Characteristics:** High throughput, requires balanced workload, less flexible to product variations.
    *   *Reference:* Chitale & Gupta (2011) discuss assembly lines in the context of production systems.
*   **Cellular Manufacturing:** Workstations are grouped into cells that are dedicated to producing a family of parts or products. Operators within a cell may perform multiple tasks.
    *   **Characteristics:** Increased flexibility, improved worker morale, better flow for product families.
*   **Stationary Assembly:** The product remains at a fixed location, and workers or components are brought to it.
    *   **Characteristics:** Suitable for large, heavy, or complex products, allows for more customization.
    *   *Example:* Aircraft assembly, large machinery.
*   **Hybrid Systems:** Combinations of the above.

#### 3.2 Based on Automation Level

*   **Manual Assembly Systems:** Rely entirely on human labor.
*   **Semi-Automated Assembly Systems:** Combine manual and automated operations.
    *   *Example:* A robot places a component, and a human operator tightens a screw.
*   **Fully Automated Assembly Systems:** All operations are performed by machines and robots.

#### 3.3 Based on Product Complexity and Volume

*   **Low Volume, High Variety:** Often suits manual or cellular assembly systems due to the need for flexibility.
*   **High Volume, Low Variety:** Typically benefits from specialized, often automated, line assembly systems.

---

### 4. Key Principles for Designing for Assembly (Relating to Taxonomies)

This section connects the taxonomies to actionable design principles, directly addressing CO1 and CO2.

#### 4.1 Designing for Manual Assembly (CO1)

*   **Minimize the Number of Parts:** Each part added increases assembly time and potential for error. (Boothroyd, Dewhurst, & Knight, 2010)
    *   *Design Guideline:* Integrate features into existing parts, combine functions.
*   **Use Standardized Parts:** Facilitates sourcing, inventory management, and operator familiarity.
    *   *Design Guideline:* Employ standard fasteners, connectors, and off-the-shelf components.
*   **Design for Easy Handling and Orientation:** Parts should be easy to grasp, manipulate, and insert without fumbling.
    *   *Design Guideline:* Provide features for gripping (e.g., chamfers, ergonomic shapes), self-orienting features (e.g., asymmetry, guides), avoid parts that can easily jam.
    *   *Example:* A component with a slight taper that guides it into its mating hole.
*   **Design for Easy Insertion:** Minimize the effort and dexterity required to mate parts.
    *   *Design Guideline:* Use lead-in chamfers on holes and pins, ensure adequate clearance.
    *   *Example:* Chamfered screw holes and screw tips.
*   **Design for Easy Fastening:** Simplify fastening operations.
    *   *Design Guideline:* Minimize the number of fasteners, use self-tapping screws, design for snap-fits, ensure easy access to fastener heads for tools.
*   **Avoid Difficult Manipulations:** Minimize the need for awkward movements, re-orientation, or excessive force.
    *   *Design Guideline:* Design parts so they can be assembled in a natural posture, avoid gravity-sensitive assembly steps where possible.

#### 4.2 Designing for Automated Assembly (CO2)

*   **Design for Ease of Feeding:** Parts must be easily and reliably fed from bulk storage to the assembly station.
    *   *Design Guideline:* Design parts with features that allow them to be oriented and handled by vibratory bowls, linear feeders, or robotic grippers. Avoid complex shapes that can tangle or jam. Parts should have a definite "up" or "down" and "front" or "back" for automated handling.
    *   *Example:* Uniform shapes, symmetric features, or specific features for orientation (e.g., a flat side on a cylindrical part).
*   **Design for Ease of Location and Fixturing:** Parts must be precisely located and held during assembly.
    *   *Design Guideline:* Incorporate features that provide clear and repeatable location points (e.g., pins and holes, locating surfaces).
    *   *Example:* Precise pilot holes for robotic insertion, mating features that guide parts to their correct position.
*   **Design for Automated Fastening:** Fasteners and joining methods must be compatible with automated systems.
    *   *Design Guideline:* Use standard screws with good lead-in chamfers, design for vibratory screwdriver heads, consider snap-fits or press-fits where appropriate for automation.
*   **Maximize Part Symmetry:** Symmetric parts are easier for automated systems to orient.
    *   *Design Guideline:* Where possible, design parts that are rotationally symmetric or have bilateral symmetry.
*   **Minimize Part Variability:** Tight tolerances on critical features are essential for automated assembly.
    *   *Design Guideline:* Understand the capabilities of automated systems and specify tolerances accordingly.
*   **Modular Design:** Design the product in sub-assemblies that can be assembled independently and then integrated. This allows for parallel processing and easier troubleshooting.
    *   *Reference:* Whitney (2004) emphasizes the role of mechanical assemblies and modularity in product development.

---

### 5. Practice Questions and Exercises

**Question 1:**

A product designer is developing a new electronic device. They have designed a complex casing made of five separate plastic parts, held together by ten small screws. The product is intended for high-volume production.

**(a)** Using principles of DFMA, identify at least three potential issues with the current casing design in relation to assembly. (CO1, CO2)

**(b)** Suggest specific design changes to improve the ease of assembly, considering both manual and automated assembly. (CO1, CO2)

**Answer 1:**

**(a) Potential Issues:**

1.  **High Part Count:** Five separate parts increase the number of assembly steps, potential for missing parts, and assembly time.
2.  **Numerous Fasteners:** Ten screws require multiple insertion and tightening operations, which is time-consuming for manual assembly and can be problematic for automation if not designed correctly (e.g., screw feeding issues).
3.  **Complexity of Fastening:** Small screws might be difficult for human operators to handle without specialized tools (e.g., magnetic screwdrivers) and can be prone to dropping or cross-threading. Automated screw insertion might require precise alignment and can jam.

**(b) Design Improvements:**

1.  **Reduce Part Count:**
    *   **Integration:** Can the casing be designed as a two-part shell with integrated snap-fits or interlocking features instead of screws?
    *   **Consolidation:** Can any of the five parts be molded as a single piece?
2.  **Simplify Fastening/Joining:**
    *   **Snap-Fits:** Design snap-fit features into the casing parts. These are generally faster to assemble manually and can be designed for automated assembly. (Molloy, Tilley, & Warman, 1998) discuss snap-fits extensively.
    *   **Friction Fits/Press Fits:** If appropriate, consider designs where parts press-fit together.
    *   **Fewer Fasteners:** If screws are essential, can the number be reduced by using longer screws or a more efficient fastening strategy?
3.  **Design for Automated Feeding/Handling:**
    *   **Self-Fixturing:** Design the parts so that when they are brought together, they naturally align and hold themselves in position (self-fixturing).
    *   **Chamfers:** Ensure any screw holes and screw tips have generous lead-in chamfers to facilitate automated screw insertion and prevent jamming.
    *   **Part Symmetry/Orientation:** Design parts with features that allow for easy orientation by vibratory bowls or grippers.

---

**Question 2:**

Consider a product that is currently assembled manually on a line. The designer wants to transition to an automated assembly system. What are the key considerations for redesigning the parts to be compatible with automated feeding and insertion? (CO2)

**Answer 2:**

Key considerations for redesigning parts for automated feeding and insertion include:

1.  **Ease of Feeding:**
    *   **Avoid Complex Geometries:** Parts should have simple, consistent shapes that can be easily handled by vibratory bowls, linear feeders, or bulk hoppers.
    *   **Orientation Features:** Design parts with features that allow them to be reliably oriented by the feeding system (e.g., a notch, a flat, or asymmetric features).
    *   **Part Presentation:** Ensure parts can be presented in a consistent orientation at the assembly point.
2.  **Ease of Insertion:**
    *   **Lead-in Chamfers:** Generous chamfers on all mating features (holes, pins, shafts) are crucial for guiding parts into place and preventing misalignment or jamming.
    *   **Clearance:** Adequate clearance between mating parts is necessary to accommodate minor variations in part dimensions and robot positioning.
    *   **Self-Fixturing:** Design parts so that when they approach each other, they naturally guide themselves into the correct position and alignment.
    *   **Tactile Feedback/Force Sensing:** While this is more system design, the part design can influence the force required for insertion, which is detected by the system.
3.  **Grasping Points:** If robotic grippers are used, parts should have accessible features for the gripper to grasp securely.
4.  **Part Stability:** Parts should not easily tip over or rotate unexpectedly once placed on the assembly station.
5.  **Material Properties:** The material should be rigid enough to withstand the forces of automated handling and insertion without deforming.

---

### 6. Important Points to Remember

*   **Assembly is a Critical Cost Driver:** Neglecting assembly in the design phase leads to higher manufacturing costs.
*   **DFM and DFA are Intertwined:** While distinct, designing for manufacturability (e.g., ease of machining, molding) and ease of assembly are both crucial for overall product cost and efficiency.
*   **Taxonomies Aid Analysis:** Understanding different types of assembly operations and systems provides a framework for identifying opportunities for improvement.
*   **Manual vs. Automated Design:** Design considerations differ significantly depending on whether the product will be assembled manually or by machines.
*   **Early Design Involvement:** The most significant improvements are made when assembly considerations are integrated into the design process from the outset.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References

*   Boothroyd, G., Dewhurst, P., & Knight, W. (2010). *Product Design for Manufacture and Assembly* (3rd ed.). CRC Press.
*   Chitale, A. K., & Gupta, R. C. (2011). *Product Design and Manufacturing* (5th ed.). Prentice Hall of India.
*   Molloy, O., Tilley, S., & Warman, E. A. (1998). *Design for Manufacturing and Assembly*. Chapman & Hall.
*   Whitney, D. E. (2004). *Mechanical Assemblies: Their Design, Manufacture, and Role in Product Development*. Oxford University Press.