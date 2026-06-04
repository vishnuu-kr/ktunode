---
title: "Value analysis – Cost"
subject: "METAL ADDITIVE MANUFACTURING"
module: "Module 4: Reverse Engineering for metal AM"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446458d"
status: "completed"
scrapedAt: "2026-05-20T18:21:56.644Z"
---
# Study Notes: Value Analysis – Cost in Reverse Engineering for Metal AM

## Module 4: Reverse Engineering for Metal AM
### Topic: Value Analysis – Cost

---

### Introduction to Value Analysis in the Context of Metal Additive Manufacturing (MAM)

Value analysis is a systematic process used to improve the "value" of a product, process, or service by examining its functions and identifying opportunities for cost reduction or performance enhancement without compromising quality. In the realm of **Metal Additive Manufacturing (MAM)**, particularly when applied through **Reverse Engineering (RE)**, cost analysis is paramount. RE allows us to recreate existing parts, often legacy or obsolete ones, and MAM offers a flexible manufacturing approach. Value analysis, therefore, helps determine if using MAM for a RE project is economically viable and if the recreated part offers superior value compared to traditional manufacturing or sourcing alternatives.

This topic will delve into the cost considerations involved in using reverse engineering to produce parts via Metal Additive Manufacturing, aligning with **Course Outcome 4 (CO4)**: "To study the relation between reverse engineering and additive manufacturing."

---

## 1. Understanding Cost Drivers in MAM for RE

To perform effective value analysis, we must first understand the primary cost drivers associated with using MAM for parts generated through RE. These drivers are influenced by the complexity of the original part, the chosen MAM process, material selection, and post-processing requirements.

### 1.1. Material Costs

*   **Raw Material:** The cost of the specific metal powder (e.g., stainless steel, titanium alloys, nickel alloys) used in the MAM process is a significant factor.
    *   *Key Concept:* Powder quality, particle size distribution, and purity directly impact cost and print quality.
    *   *Textbook Reference (Yang & Michaleris):* Chapter X on "Materials for Metal Additive Manufacturing" likely discusses the cost implications of various metal powders and their properties.
*   **Powder Usage Efficiency:** Not all powder loaded into the build chamber is used to form the part. Some remains as unbound powder.
    *   *Key Concept:* Recycling and reusing unbound powder can significantly reduce material costs, but requires careful consideration of powder quality degradation.

### 1.2. Machine and Operational Costs

*   **Machine Depreciation/Lease:** The capital cost or ongoing lease expenses of the MAM machine.
    *   *Key Concept:* High-end MAM machines (e.g., Selective Laser Melting - SLM, Electron Beam Melting - EBM) are substantial investments.
*   **Energy Consumption:** Power required to operate the machine, lasers, electron beams, inert gas systems, etc.
    *   *Key Concept:* Longer build times and higher power requirements increase energy costs.
*   **Consumables:** Gases (e.g., Argon, Nitrogen), recoater blades/rollers, filters, and spare parts.
*   **Labor:** Skilled operators, technicians for machine setup, operation, and maintenance.
    *   *Key Concept:* The complexity of the RE process and the MAM build requires trained personnel.

### 1.3. Design and Pre-processing Costs (Critical for RE)

*   **3D Scanning/Data Acquisition:** Costs associated with obtaining an accurate digital model of the original part.
    *   *Key Concept:* Non-contact scanning methods (laser, structured light) are common, with costs varying based on scanner accuracy, speed, and the complexity of the part's geometry.
    *   *Reference Book (Gibson, Rosen, Stucker, Khorasani):* Chapter on "Reverse Engineering Technologies" likely details the costs and capabilities of different scanning methods.
*   **Reverse Engineering Software:** Licenses for CAD software capable of converting scan data into usable CAD models.
*   **Model Repair and Optimization:** Cleaning, meshing, and repairing scan data to create a manufacturable CAD model. This can be labor-intensive for complex geometries.
*   **Design for Additive Manufacturing (DfAM):** While RE aims to replicate, opportunities for design optimization (e.g., lattice structures, lightweighting, feature consolidation) can be identified during the RE process to enhance value and potentially reduce material/build time.
    *   *Key Concept:* Re-designing for MAM can unlock further cost savings and performance benefits, though it adds upfront design effort.
    *   *Textbook Reference (Yang & Michaleris):* Chapters on "Design for Additive Manufacturing" will be crucial here, discussing how RE can inform DfAM strategies.
*   **Slicing and Build Preparation:** Software for converting CAD models into machine-readable instructions (toolpaths) and optimizing build orientation, support structures, and nesting.

### 1.4. Post-Processing Costs

*   **Support Removal:** Depending on the MAM process and part geometry, extensive support structures may be needed, requiring manual or automated removal.
*   **Heat Treatment:** Stress relief, annealing, or solution heat treatments are often necessary to improve mechanical properties.
*   **Surface Finishing:** Machining, polishing, blasting, coating, or other treatments to achieve desired surface roughness and dimensional accuracy.
    *   *Key Concept:* MAM parts often have a rougher surface finish than traditionally manufactured parts and may require significant post-processing to meet specifications.
*   **Inspection and Quality Control:** Dimensional verification, non-destructive testing (NDT) like CT scanning or dye penetrant testing, and mechanical property testing.

---

## 2. Value Analysis Framework for RE-MAM

Value analysis in this context involves comparing the total cost of producing a part using RE-MAM against alternative methods or the cost of not producing the part.

### 2.1. Cost Comparison with Alternatives

*   **Traditional Manufacturing:** Machining (CNC), casting, forging.
    *   *Consider:* Tooling costs (dies, molds), lead times, material utilization, labor intensity.
    *   *Example:* If a legacy part is no longer in production and tooling is lost, RE-MAM might be cheaper than re-tooling for traditional manufacturing, even if the per-unit cost is higher.
*   **Sourcing Original Parts:** If available from an OEM or aftermarket supplier.
    *   *Consider:* Part availability, lead time, cost, and obsolescence risk.
*   **Repair of Existing Parts:** If feasible.

### 2.2. Identifying Value-Added Opportunities

*   **Performance Enhancement:** Can RE-MAM allow for design improvements that increase part lifespan, reduce weight, or improve functionality? This added value can justify a higher initial cost.
    *   *Key Concept:* The "value" isn't just cost; it's also performance and utility.
*   **Obsolescence Mitigation:** RE-MAM provides a solution for critical parts that are no longer manufactured, preventing system downtime.
*   **Inventory Reduction:** Producing parts on-demand via RE-MAM can reduce the need for large inventories of spare parts.

### 2.3. Cost Breakdown and Pareto Analysis

*   **Detailed Cost Breakdown:** Quantify each cost component identified in Section 1.
*   **Pareto Analysis (80/20 Rule):** Identify the 20% of cost drivers that contribute to 80% of the total cost. This helps focus efforts on the most impactful areas for cost reduction.

---

## 3. Cost Reduction Strategies in RE-MAM

### 3.1. Optimizing the RE Process

*   **Accurate Scanning:** Invest in higher quality scanners if the part complexity demands it, to minimize subsequent repair effort.
*   **Efficient CAD Reconstruction:** Utilize skilled engineers and appropriate software to quickly and accurately convert scan data.
*   **Feature Recognition:** Automated or semi-automated feature recognition in CAD software can speed up model creation.

### 3.2. Optimizing the MAM Process

*   **Process Selection:** Choose the most suitable MAM process (e.g., SLM, EBM, Binder Jetting followed by sintering) based on material, required properties, and part complexity. Different processes have different cost profiles.
    *   *Reference Book (Pederson, Sokolov, Ma):* Chapters on specific MAM processes will provide insights into their respective cost structures and suitability for different applications.
*   **Build Orientation and Nesting:** Optimize part orientation to minimize support structures and maximize build platform utilization, reducing material waste and build time.
*   **Parameter Optimization:** Fine-tune laser power, scan speed, layer thickness, and other process parameters to balance build speed, part quality, and material consumption.
*   **Powder Management:** Implement effective powder recycling and sieving procedures to maximize powder utilization.

### 3.3. Optimizing Post-Processing

*   **DfAM for Reduced Supports:** Design parts with self-supporting features where possible, or orient them to minimize overhangs.
*   **Automated Post-Processing:** Explore automated support removal and surface finishing techniques for higher volume or repetitive tasks.
*   **Selective Post-Processing:** Only perform post-processing steps that are critical for the part's function and form.

### 3.4. Material Selection

*   **Considerations:** While the original material might be dictated by RE, explore if alternative, more cost-effective alloys can meet the functional requirements of the recreated part. This might involve material characterization of the original part and simulation.

---

## 4. Case Study/Example: Reverse Engineering a Legacy Aircraft Component

**Scenario:** An aerospace company needs to replace a critical, legacy aluminum alloy bracket on an aging aircraft. The original manufacturer is out of business, and no digital design files exist.

**Steps:**

1.  **3D Scanning:** Scan the existing bracket to capture its geometry.
    *   *Cost Driver:* Scanner rental/purchase, operator time.
2.  **Reverse Engineering (CAD):** Create a precise CAD model from scan data. This involves mesh cleaning, feature recognition (e.g., bolt holes, mounting flanges), and creating a solid model.
    *   *Cost Driver:* CAD engineer's time, CAD software licenses.
3.  **Design for Additive Manufacturing (Optional but Recommended):** Analyze the bracket for potential weight reduction through lattice structures or optimized internal features, while ensuring structural integrity.
    *   *Cost Driver:* Design engineer's time, simulation software.
4.  **Material Selection:** Confirm the original alloy's properties or select a suitable, commercially available aluminum alloy powder for MAM that meets aerospace specifications (e.g., AlSi10Mg).
    *   *Cost Driver:* Aluminum powder cost.
5.  **MAM Process Selection:** Choose a suitable process like SLM or EBM for aluminum.
    *   *Cost Driver:* Machine time, energy, consumables.
6.  **Build Preparation:** Orient the part on the build plate to minimize supports, slice the CAD model, and generate build instructions.
    *   *Cost Driver:* Software, operator time.
7.  **Additive Manufacturing:** Print the bracket.
    *   *Cost Driver:* Machine operation, material used.
8.  **Post-Processing:** Remove supports, perform heat treatment for stress relief and improved mechanical properties, and conduct surface finishing (e.g., milling critical mounting surfaces for precision).
    *   *Cost Driver:* Labor, machining time, heat treatment furnace time.
9.  **Inspection:** Dimensional checks, NDT, and mechanical testing.
    *   *Cost Driver:* Inspection equipment, inspector time.

**Value Analysis Question:** Is the total cost of RE-MAM for this bracket lower than (a) attempting to re-manufacture using traditional methods (if possible) or (b) the cost of grounding the aircraft due to the unavailability of the part? Often, for critical legacy parts, the value of continued operation outweighs the direct manufacturing cost.

---

## 5. Practice Questions & Answers

**Q1: List and briefly describe three major cost categories associated with producing a part via Reverse Engineering and Metal Additive Manufacturing.**

**A1:**
1.  **Pre-processing/Design Costs:** This includes the expenses related to capturing the original part's geometry (3D scanning), converting that data into a usable CAD model, and potentially optimizing it for AM (DfAM). These costs are directly tied to the complexity and accuracy required during the reverse engineering phase.
2.  **MAM Production Costs:** This encompasses the cost of the metal powder, machine operational costs (energy, labor, maintenance, consumables), and build time. Material efficiency and machine utilization play a significant role here.
3.  **Post-processing Costs:** These are the expenses incurred after the part is printed, including support removal, heat treatment, surface finishing (machining, polishing), and quality inspection. The extent of post-processing required heavily influences this cost category.

**Q2: How can "Design for Additive Manufacturing" (DfAM) principles reduce costs when applied to a reverse-engineered part?**

**A2:** DfAM can reduce costs in several ways:
*   **Reduced Material Usage:** Optimizing the geometry to incorporate lattice structures or hollow sections can significantly decrease the amount of powder used, leading to lower material costs and potentially faster build times.
*   **Minimized Support Structures:** Designing parts with self-supporting angles or orienting them strategically on the build platform can reduce the need for extensive support material, simplifying post-processing and saving time/labor.
*   **Consolidation of Parts:** DfAM might allow for combining multiple components of the original assembly into a single, printed part. This reduces assembly time, the number of fasteners, and potential failure points, leading to overall cost savings in production and maintenance.
*   **Improved Performance:** While not directly a cost reduction, designing for better performance (e.g., lighter weight leading to fuel savings) adds value that can justify the RE-MAM process, making it more cost-effective in the long run.

**Q3: What is a key consideration for material costs in MAM for RE, beyond just the price of the powder?**

**A3:** A key consideration is **powder usage efficiency and recyclability**. Not all powder loaded into the build chamber becomes part of the final product. Unused powder must be sieved and potentially re-sieved before it can be reused. The cost associated with powder handling, sieving, and potential quality degradation during recycling needs to be factored in. Maximizing the utilization of expensive metal powders is crucial for cost-effectiveness.

---

## 6. Important Points to Remember

*   **Value Analysis is Holistic:** It's not just about finding the cheapest way to make a part, but the most cost-effective way to achieve the required function and performance.
*   **RE Adds Upfront Costs:** The scanning and CAD reconstruction phases are unique to RE and add significant initial cost compared to manufacturing from existing digital designs.
*   **Post-Processing is a Major Cost Driver:** Many metal AM parts require substantial post-processing to meet functional requirements, making it a critical area for cost analysis.
*   **DfAM is Crucial for Cost Optimization:** Even in RE, identifying opportunities to modify the design for AM can yield significant cost savings and performance benefits.
*   **Compare Apples to Apples:** When comparing RE-MAM to traditional methods, ensure you are comparing total lifecycle costs and considering factors like lead time, obsolescence, and potential for design improvement.
*   **Material Properties Dictate Process and Cost:** The choice of metal alloy will influence the MAM process, available machine parameters, and material cost itself.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 7. References and Further Reading

*   **Primary Textbook:** Yang, L., & Michaleris, P. (2019). *Additive Manufacturing of Metals: The Technology, Materials, Design and Production*. Springer. (Refer to chapters on materials, design for AM, and specific MAM processes).
*   **Reference Books:**
    *   Gibson, I., Rosen, D. W., Stucker, B., & Khorasani, M. (2014). *Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing*. Springer. (Refer to chapters on reverse engineering and cost analysis of AM).
    *   Pederson, R., Sokolov, M. S., & Ma, C. (2019). *Additive Manufacturing of High-Performance Metals and Alloys*. IntechOpen. (Refer to chapters discussing specific metal alloys and their processing costs).

---

This concludes the study notes for Value Analysis – Cost within the context of Reverse Engineering for Metal AM. Remember to consult the provided textbooks and reference materials for deeper insights into each aspect. Good luck with your studies!