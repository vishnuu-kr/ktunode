---
title: "Group technology- Part Classification and Coding"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 2: Manufacturing cells: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446411e"
status: "completed"
scrapedAt: "2026-05-20T18:13:21.501Z"
---
# Flexible Manufacturing Systems (FMS)

## Module 2: Manufacturing Cells: Introduction

### Topic: Group Technology - Part Classification and Coding

---

### 1. Introduction to Group Technology (GT)

Group Technology is a manufacturing philosophy that seeks to group dissimilar parts into families of parts having similar design and/or manufacturing characteristics. The core idea is to exploit similarities between parts to achieve economies of scale, similar to mass production, while retaining the flexibility of job-shop manufacturing.

**Key Concepts:**

*   **Part Family:** A collection of parts that are similar in design and/or manufacturing process.
*   **Manufacturing Cell:** A dedicated area of a factory where a group of dissimilar machines are organized to process a family of parts.
*   **Productivity Improvement:** By grouping parts with similar processing requirements, setup times are reduced, work-in-process inventory is lowered, and lead times are shortened.
*   **Batch Production:** GT enables a form of batch production where batches are defined by part families rather than by identical parts.

**Relevance to FMS (CO1, CO2):**
GT is a fundamental enabler for FMS. By identifying part families, FMS can be configured with dedicated machines and tooling to efficiently produce these families. This allows for the semi-automation of batch production and contributes to the overall flexibility of the system. Understanding GT is crucial for designing and operating effective manufacturing cells.

**Textbook References:**
*   **Luggen (1991):** Likely discusses GT as a precursor to FMS and its role in cell formation.
*   **Groover (2008):** Provides a comprehensive overview of GT principles, including part family formation and coding systems.

---

### 2. Part Classification and Coding

The success of Group Technology hinges on the ability to effectively classify and code parts based on their similarities. This allows for the identification of part families and the subsequent formation of manufacturing cells.

**Purpose of Classification and Coding:**

*   **Identification of Part Families:** To group parts with similar design and/or manufacturing attributes.
*   **Database Management:** To create a structured database of parts for efficient retrieval and analysis.
*   **Standardization:** To identify opportunities for standardizing part designs, tooling, and manufacturing processes.
*   **Process Planning:** To assist in developing consistent and efficient process plans for part families.
*   **Tooling Requirements:** To identify common tooling needs for a given part family.
*   **Machine Requirements:** To define the necessary machine capabilities for processing a part family.

**Methods of Classification and Coding:**

There are two primary approaches to classification and coding:

**a) Classification based on Design Attributes:**

*   **Focus:** Primarily on the physical characteristics of the part (shape, size, material, etc.).
*   **Benefits:** Useful for identifying parts that can be made using similar tooling, fixturing, or machining operations, even if the manufacturing process differs slightly.
*   **Examples of Attributes:**
    *   **Shape:** Cylindrical, prismatic, irregular.
    *   **Size:** Dimensions, diameter, length.
    *   **Material:** Steel, aluminum, plastic, composite.
    *   **Functional Characteristics:** Threaded, ported, geared.
    *   **Surface Finish Requirements:** Rough, smooth, polished.

**b) Classification based on Manufacturing Attributes:**

*   **Focus:** Primarily on the manufacturing processes required to produce the part.
*   **Benefits:** Useful for identifying parts that can be processed on the same group of machines or within the same manufacturing cell.
*   **Examples of Attributes:**
    *   **Machining Operations:** Turning, milling, drilling, grinding.
    *   **Sequence of Operations:** The order in which operations are performed.
    *   **Machine Types:** Lathe, milling machine, CNC machine.
    *   **Tooling Requirements:** Specific drills, end mills, chucks.
    *   **Tolerance Requirements:** Tight tolerances, general tolerances.
    *   **Batch Size:** Small batch, large batch.

**Important Note:** In practice, most effective GT systems consider both design and manufacturing attributes to form robust part families.

**Textbook References:**
*   **Shivanand, Benal, Koti (2006):** Likely details various classification systems and their application.
*   **Luggen (1991):** May present case studies or examples of classification systems.
*   **Maleki (1991):** Could focus on the computational aspects of classification.
*   **Groover (2008):** Provides detailed explanations of different coding systems.

---

### 3. Common Part Classification and Coding Systems

Several systems have been developed to facilitate the classification and coding of parts. These systems assign a numerical or alphanumeric code to each part, where each digit or character represents specific attributes.

**a) Opitz System:**

*   **Origin:** Developed by H. Opitz in Germany.
*   **Type:** Primarily focuses on manufacturing attributes.
*   **Structure:** A 14-digit code, often simplified to 9 digits for practical use.
*   **Code Breakdown (Simplified 9-digit):**
    *   **Digits 1-3: Primary Dimension:** Describes the largest external dimension, shape, and physical form (e.g., cylinder, prism).
        *   *Example:* A cylindrical part might start with a '1' for rotational symmetry, followed by digits representing diameter and length ranges.
    *   **Digits 4-5: Secondary Dimension:** Describes secondary external features and their location.
    *   **Digits 6-7: Tertiary Dimension:** Describes internal features and tolerances.
    *   **Digits 8-9: Auxiliary Attributes:** Describes material and specific manufacturing operations (e.g., drilling, milling).
*   **Strengths:** Systematic and objective, widely adopted.
*   **Weaknesses:** Can be complex to implement, may not capture all nuances of design.

**Example of Opitz Code Interpretation (Hypothetical):**
Let's consider a simplified 6-digit Opitz code for a prismatic part: `234-123`
*   `2xx-xxx`: Prismatic shape.
*   `x3x-xxx`: Main dimension (length) falls within a certain range.
*   `xx4-xxx`: Secondary dimension (width) falls within a certain range.
*   `xxx-1xx`: Material type.
*   `xxx-x2x`: Primary operation (e.g., milling).
*   `xxx-xx3`: Secondary operation (e.g., drilling).

**b) MICLASS (Metal Industries Classification System):**

*   **Origin:** Developed by IIT Research Institute, Chicago.
*   **Type:** Considers both design and manufacturing attributes.
*   **Structure:** A 30-character alphanumeric code, typically segmented into:
    *   **Design Attributes:** Shape, material, dimensions.
    *   **Manufacturing Attributes:** Primary and secondary manufacturing operations, sequence, batch size, tooling.
*   **Strengths:** More comprehensive than Opitz by incorporating design, allows for more flexibility in coding.
*   **Weaknesses:** Can be very extensive, requiring significant effort in defining all attributes.

**c) CAPP (Computer-Aided Process Planning) Integrated Systems:**

*   **Focus:** Modern GT systems often integrate classification and coding with CAPP. The classification code becomes a key input for the CAPP system to automatically generate process plans.
*   **Advantages:** Automation of process planning, consistency, reduced planning time.

**d) Parametric Coding:**

*   **Concept:** Instead of fixed digit positions, parameters are defined, and their values are assigned. This is more flexible and can be adapted to specific company needs.
*   **Example:** A system might define parameters like "Shape," "Max_Diameter," "Material," "Operation_1," etc.

**Textbook References:**
*   **Shivanand, Benal, Koti (2006):** Likely provides detailed descriptions of Opitz and MICLASS.
*   **Luggen (1991):** Might offer practical insights or comparisons.
*   **Maleki (1991):** Could discuss the algorithms behind these coding systems.
*   **Groover (2008):** Offers a good theoretical foundation and examples of coding systems.

---

### 4. Part Family Formation and Manufacturing Cell Design

Once parts are classified and coded, the next step is to form part families and design corresponding manufacturing cells.

**Steps involved:**

1.  **Data Collection:** Gather design and manufacturing data for all parts in the production system.
2.  **Classification and Coding:** Apply a chosen system (Opitz, MICLASS, or custom) to classify and code each part.
3.  **Clustering:** Group parts with similar codes into part families. This can be done manually by analyzing the codes or using computer algorithms (e.g., similarity coefficient methods).
4.  **Cellular Manufacturing Design:** For each identified part family, design a manufacturing cell.
    *   **Machine Selection:** Choose machines that can perform the required operations for the part family.
    *   **Layout:** Arrange machines within the cell in a sequence that facilitates the flow of parts (e.g., U-shaped, linear).
    *   **Tooling and Fixturing:** Standardize tooling and fixtures for the part family to reduce setup times.
    *   **Material Handling:** Design an appropriate material handling system to move parts within and between cells.

**Example of Part Family Formation:**
Imagine a company producing shafts and plates.

*   **Shafts:** Might be coded with a sequence indicating rotational symmetry, turning operations, drilling at ends, and milling for keyways. These would form a "shaft family."
*   **Plates:** Might be coded with prismatic shape, milling operations for faces and slots, and drilling for holes. These would form a "plate family."

A manufacturing cell for shafts might include:
*   CNC Lathe (for turning)
*   CNC Machining Center (for drilling and milling keyways)
*   Deburring station

A manufacturing cell for plates might include:
*   CNC Machining Center (for milling and drilling)
*   Grinding machine (if surface finish is critical)

**Relevance to FMS (CO1, CO2):**
The formation of part families directly dictates the configuration of manufacturing cells, which are the building blocks of an FMS. By producing parts in families, FMS can utilize dedicated tooling, pre-set machines, and optimized material flow, leading to significant efficiency gains. Understanding this link is crucial for understanding how FMS operate.

**Textbook References:**
*   **Luggen (1991):** Likely discusses the relationship between GT cells and FMS configurations.
*   **Shivanand, Benal, Koti (2006):** May cover cell layout strategies and implementation.

---

### 5. Advantages of Part Classification and Coding in GT and FMS

*   **Reduced Lead Times:** Streamlined processing due to dedicated cells and reduced setups.
*   **Lower Work-in-Process (WIP) Inventory:** Parts move directly through cells, minimizing queuing.
*   **Improved Machine Utilization:** Machines in cells are specialized for a family, leading to higher effective utilization.
*   **Reduced Setup Times:** Common tooling and fixtures for part families drastically cut setup times.
*   **Simplified Production Planning and Control:** Planning for families is easier than for individual parts.
*   **Enhanced Quality:** Consistent processing for parts within a family leads to more uniform quality.
*   **Opportunities for Automation:** GT principles facilitate the implementation of automated systems like FMS.

**Relevance to FMS (CO1):**
These advantages are precisely what FMS aim to achieve. Part classification and coding are the foundational steps that enable these benefits within an FMS environment.

---

### 6. Challenges in Implementing Part Classification and Coding

*   **High Initial Effort:** Developing and implementing a robust classification system requires significant time and resources.
*   **Data Collection and Maintenance:** Gathering and keeping part data accurate and up-to-date can be challenging.
*   **Defining Part Families:** Subjectivity can arise in defining the boundaries of part families, especially for parts that straddle multiple categories.
*   **Training and Expertise:** Personnel need to be trained on the chosen system and its application.
*   **Resistance to Change:** Implementing a new system can face resistance from shop floor personnel and engineers accustomed to traditional methods.
*   **Evolution of Product Designs:** As product designs change, the classification system may need to be updated.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the core principle of Group Technology and its relevance to Flexible Manufacturing Systems.

**Answer 1:**
Group Technology (GT) is a manufacturing philosophy that groups dissimilar parts into families based on similar design and/or manufacturing characteristics. Its relevance to FMS lies in enabling the efficient production of these part families through dedicated manufacturing cells. By grouping parts, GT facilitates the reduction of setup times, lead times, and WIP inventory, which are key objectives of FMS. FMS utilize the GT principle by configuring cells with specific machines and tooling to process these identified part families, thereby achieving economies of scale and flexibility.

**Question 2:**
What are the main purposes of part classification and coding in Group Technology?

**Answer 2:**
The main purposes of part classification and coding are:
*   To identify and group parts into families with similar design and/or manufacturing attributes.
*   To create a structured database for efficient part retrieval and analysis.
*   To facilitate standardization of part designs, tooling, and manufacturing processes.
*   To assist in process planning by providing a basis for consistent planning for part families.
*   To identify common tooling and machine requirements for part families.

**Question 3:**
Briefly describe the Opitz classification system, highlighting its primary focus and structure.

**Answer 3:**
The Opitz system is a classification system that primarily focuses on manufacturing attributes. It uses a numerical code, often a 9-digit code (simplified from 14), where:
*   The first three digits describe primary dimensions and shape.
*   Digits 4-5 cover secondary external features.
*   Digits 6-7 detail tertiary internal features and tolerances.
*   Digits 8-9 represent auxiliary attributes like material and manufacturing operations.

**Question 4:**
Consider a part that is primarily cylindrical, has a diameter between 50mm and 100mm, and requires turning and drilling operations. How might this be represented in a simplified Opitz code (hypothetically)?

**Answer 4:**
Hypothetically, a simplified 9-digit Opitz code might start with:
*   `1xx-xxx`: Indicating a cylindrical part (primary rotational symmetry).
*   `x2x-xxx`: Indicating a diameter between 50mm and 100mm (assuming '2' represents this range in the primary dimension section).
*   `xxx-x1x`: Indicating turning as the primary operation.
*   `xxx-x2x`: Indicating drilling as a secondary operation.

A possible code could be `121-11200`. (Note: This is a hypothetical representation; actual Opitz codes follow specific tables and definitions).

**Question 5:**
What are the benefits of implementing Part Classification and Coding for an FMS?

**Answer 5:**
The benefits include:
*   Reduced lead times and WIP inventory.
*   Improved machine utilization and reduced setup times.
*   Simplified production planning and control.
*   Enhanced quality consistency.
*   Facilitation of automation and the creation of efficient manufacturing cells.

---

### 8. Important Points to Remember

*   **GT is foundational for FMS:** The ability to group parts is what makes flexible manufacturing cells efficient.
*   **Both Design and Manufacturing Attributes Matter:** A comprehensive approach to classification considers both aspects for robust part families.
*   **Classification Systems (Opitz, MICLASS) provide structure:** They translate similarities into tangible codes.
*   **Coding is the bridge to Cell Formation:** Similar codes lead to similar processing needs, defining families and cell requirements.
*   **Automation relies on structured data:** Classification and coding provide this structure for FMS.

---

### 9. Alignment with Course Outcomes

*   **CO1: Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS). (Knowledge Level: K2)**
    *   This topic directly contributes to understanding the foundational concept of grouping parts into families, which dictates the configuration and function of manufacturing cells within an FMS.
*   **CO2: Remember the classification of manufacturing cells, features and requirements of unattended machining, and principles of the Toyota Production System (TPS). (Knowledge Level: K1)**
    *   Part classification and coding are the primary methods for classifying parts, which in turn leads to the classification and formation of manufacturing cells. This aligns with remembering the classification of manufacturing cells.
*   **CO3: Apply the knowledge of CAD and CAM considerations in planning and implementing FMS. (Knowledge Level: K3)**
    *   While this topic is more about the manufacturing philosophy, the output of classification and coding (part families, common operations) directly informs CAD/CAM planning for tooling, fixtures, and process sequences within an FMS.
*   **CO4: Understand the automated material movement, storage systems, and tool management in FMS operations. (Knowledge Level: K2)**
    *   Knowing part families and their processing requirements helps in planning for automated material handling (e.g., AGVs moving family parts to specific cells) and tool management (e.g., having pre-set tool magazines for a particular part family).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 10. Textbook and Reference Book Content Integration

This study note has drawn upon the general knowledge base expected from the listed textbooks and references regarding Group Technology, Part Classification, and Coding. Specific details like the exact digit definitions for Opitz or the character breakdown for MICLASS would be found in the respective chapters of these books. For instance, **Groover's "Automation, Production Systems and Computer Integrated Manufacturing"** is a key reference for theoretical underpinnings of GT and coding systems, while **Luggen's "Flexible Manufacturing Cells and System"** would likely provide practical applications and integration of GT within FMS. **Shivanand, Benal, and Koti's "Flexible Manufacturing System"** would offer a good balance of theory and practical implementation aspects relevant to the Indian context.