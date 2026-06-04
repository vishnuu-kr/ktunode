---
title: "Design recommendations."
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 3: Design for machining: Introduction to machining"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463491"
status: "completed"
scrapedAt: "2026-05-20T17:59:37.271Z"
---
# DESIGN FOR MANUFACTURE AND ASSEMBLY

## Module 3: Design for Machining: Introduction to Machining

### Topic: Design Recommendations

This module introduces the fundamental principles of machining and how design decisions significantly impact the manufacturability and cost of parts. This topic focuses on providing practical design recommendations to optimize parts for machining processes.

---

### Learning Outcomes Covered in this Topic:

*   **Apply the knowledge of Design Guidelines for Manual Assembly.** (CO1) - While the primary focus is machining, understanding how machined parts are assembled is crucial for overall DFMA. Design for machining recommendations often indirectly benefit assembly.
*   **Apply the knowledge of General design principles for manufacturability.** (CO2) - Machining is a primary manufacturing process, and designing for it directly contributes to general manufacturability.
*   **Design and improve parts for better machinability.** (CO3) - This is the core focus of this topic.
*   **Design and improve parts for better casting and injection moulding.** (CO4) - While not directly covered in *this* topic, understanding machining limitations can influence the choice of other manufacturing processes.
*   **Design and improve parts for better welded joints.** (CO5) - Similar to casting and injection molding, understanding machining constraints can inform decisions about joining methods.

---

### Key Concepts and Definitions

*   **Machining:** A material removal process where a cutting tool is used to shape a workpiece by removing excess material. Common machining processes include turning, milling, drilling, boring, reaming, grinding, etc.
*   **Manufacturability:** The ease with which a product or part can be manufactured using available processes and equipment.
*   **Design for Machining (DFM):** The process of designing parts to be easily and cost-effectively manufactured using machining operations.
*   **Cost of Machining:** Primarily influenced by:
    *   **Machine Time:** The time the part spends in the machine.
    *   **Tooling Costs:** Cost of cutting tools, fixtures, and gauges.
    *   **Setup Time:** Time to set up the machine, load/unload parts, and change tools.
    *   **Material Costs:** Cost of raw material.
    *   **Labor Costs:** Operator time.
*   **Cutting Speed:** The relative speed between the cutting tool and the workpiece.
*   **Feed Rate:** The distance the cutting tool advances with each revolution or pass of the tool.
*   **Depth of Cut:** The thickness of material removed in a single pass.
*   **Tool Life:** The duration or amount of work a cutting tool can perform before becoming dull or ineffective.
*   **Surface Finish:** The quality of the surface of a machined part, usually measured by roughness.
*   **Dimensional Tolerances:** The permissible variation in the size or shape of a feature.

---

### Design Recommendations for Machining

The goal of these recommendations is to reduce machining time, tooling costs, and improve overall efficiency.

#### 1. Minimize Machining Operations and Complexity

*   **Reduce the number of features:** Can the part be designed with fewer machined features?
    *   *Example:* Instead of machining a stepped shaft, consider if a single diameter shaft with an attached bracket is more cost-effective.
*   **Simplify geometries:** Avoid overly complex shapes that require multiple setups or specialized tooling.
    *   *Example:* Radius corners instead of sharp internal corners where possible. Sharp internal corners can lead to stress concentrations and require specialized tools.
*   **Avoid deep, narrow slots or pockets:** These require specialized tooling and slow machining rates.
*   **Use standard features where possible:** Threads, keyways, splines – use standard sizes and types.

#### 2. Optimize Material Removal

*   **Design to avoid excessive material removal:** Start with a stock shape that is close to the final desired shape.
    *   *Example:* For a cylindrical part, start with a bar rather than a large block if significant material needs to be removed from the sides.
*   **Consider allowances for roughing and finishing:** Design features that can be roughed out efficiently and then finished to final size and surface finish.
*   **Avoid blind holes that are too deep relative to their diameter:** This can lead to chip buildup and tool breakage.

#### 3. Features and Tolerances

*   **Generous radii and chamfers:**
    *   **Benefits:** Reduce stress concentrations, improve tool life, facilitate chip removal, and simplify handling during assembly.
    *   **Recommendation:** Use radii at internal corners and chamfers on external edges.
    *   *Reference:* Boothroyd, Dewhurst, & Knight (2010) emphasize that radii and chamfers reduce tool wear and improve chip flow.
*   **Accessible features:** Ensure all surfaces to be machined are easily accessible by cutting tools.
    *   **Recommendation:** Avoid features hidden behind other features or deep within the part.
*   **Tight tolerances and surface finishes:**
    *   **Impact:** Tighter tolerances and finer surface finishes require slower machining speeds, multiple passes, or specialized finishing operations (like grinding), significantly increasing cost.
    *   **Recommendation:** Only specify tight tolerances and fine finishes where absolutely necessary.
    *   *Example:* A bearing bore might require a tight tolerance and good surface finish, but a locating boss might not.
    *   *Reference:* Chitale & Gupta (2011) highlight the direct correlation between tolerance levels and manufacturing cost.
*   **Minimize the number of critical features:** The more features requiring precise control, the higher the cost.
*   **Consider datum features:** Design features that can be easily used as datums for setting up and measuring.

#### 4. Machining of Holes

*   **Standard hole sizes:** Use standard drill, reamer, and tap sizes to minimize tooling costs and increase availability.
*   **Hole depths:**
    *   **Avoid excessive depths:** Deep holes are difficult to drill accurately and efficiently.
    *   **Recommendation:** Keep the depth-to-diameter ratio reasonable. If a deep hole is necessary, consider peck drilling or specialized drilling techniques.
*   **Threaded holes:**
    *   **Use standard thread sizes and pitches.**
    *   **Drill and tap depth:** Ensure sufficient depth for thread engagement, but avoid tapping into a blind end unless the tap is designed for it.
    *   **Clearance holes for tapping:** For through holes, a clearance hole is needed on the exit side to allow chips to escape.
*   **Counterbores and Countersinks:**
    *   **Use standard sizes.**
    *   **Ensure sufficient depth and diameter for tool clearance.**

#### 5. Machining of External Features

*   **Avoid sharp external corners:** These can be difficult to machine precisely and can be prone to chipping. Use fillets or radii.
*   **Threads:**
    *   **External threads:** Chamfer the start of the thread to facilitate engagement.
    *   **Grooves for thread relief:** Where threads meet a shoulder, a relief groove is often necessary to allow the threading tool to clear. Design this groove to be as small as functionally required.
*   **Keyways and Splines:**
    *   **Use standard dimensions.**
    *   **Ensure sufficient clearance for the cutting tool.**

#### 6. Machining Processes and Tooling

*   **Consider the capabilities of common machining centers:** CNC milling, turning centers, etc.
*   **Fixture design:** Design parts that are easy to fixture for machining. Avoid complex geometries that make fixturing difficult or require custom fixtures.
*   **Tool access:** Ensure tools can reach all surfaces to be machined.
*   **Grinding:** If very fine surface finishes or tight tolerances are required, grinding may be necessary. Design features that are suitable for grinding.

#### 7. Material Selection

*   **Machinability of materials:** Some materials are inherently easier to machine than others.
    *   **Good machinability:** Free-machining steels (e.g., 12L14, 1215), aluminum alloys, brass.
    *   **Poor machinability:** Hardened steels, some stainless steels, titanium alloys.
*   **Consider the impact of material hardness on tool wear and cutting speeds.**
*   *Reference:* Dieter (2000) provides extensive information on material properties and their influence on manufacturing processes.

#### 8. Cost Factors to Consider

*   **Machine utilization:** How much time is the machine running vs. idle?
*   **Tool changes:** Frequent tool changes increase setup time.
*   **Number of operations:** Each operation adds to the cycle time and labor cost.
*   **Scrap rate:** Poor design can lead to higher scrap rates.

---

### Examples and Case Studies

**Example 1: Simplifying a Bracket Design**

*   **Original Design:** A complex bracket with several precise bosses and slots machined from a solid block. This required multiple setups and specialized tooling.
*   **Improved Design:** The bracket is redesigned to incorporate sheet metal stamping for the main body and only the critical locating features are machined as bosses on a separate, easily machinable component, which is then fastened to the bracket.
*   **DFM Benefit:** Reduced machining time, less complex tooling, and lower overall part cost.

**Example 2: Hole Design for Tapping**

*   **Problem:** A deep blind hole is designed for tapping with a standard tap. The depth is such that the tap cannot reach the bottom, or chip evacuation is poor, leading to broken taps or poor thread quality.
*   **Solution:**
    *   Reduce the tapping depth to allow for adequate thread engagement and tool clearance.
    *   Alternatively, if a deeper thread is required, consider using a form tap (which displaces material rather than cutting it) or a specialized bottoming tap.
    *   Ensure the drilled hole is sized correctly for the tap (tap drill size).
*   **DFM Benefit:** Reduced risk of tap breakage, improved thread quality, and faster tapping operation.

---

### Important Points to Remember

*   **Early Design Considerations:** DFM principles should be applied early in the design process when changes are least costly.
*   **Trade-offs:** Designing for machining often involves trade-offs between functionality, performance, and manufacturability.
*   **Quantify Costs:** Understand how specific design features translate into machining costs (machine time, tooling, labor).
*   **Know Your Processes:** Familiarity with common machining operations and their capabilities is essential.
*   **Iterative Process:** DFM is often an iterative process of design, analysis, and refinement.

---

### Practice Questions

**Question 1:**

A designer is creating a part that requires a deep, narrow slot with precise internal corners. What are potential DFM issues with this design, and what alternative design recommendations can you provide to improve machinability?

**Answer:**

*   **Potential DFM Issues:**
    *   **Tool Access:** Narrow slots require small-diameter end mills, which can lead to lower cutting speeds and longer machining times.
    *   **Chip Evacuation:** Chips can easily get trapped in narrow slots, hindering cutting performance and potentially leading to tool breakage or poor surface finish.
    *   **Tool Strength:** Small-diameter tools are less rigid and more prone to deflection or breakage.
    *   **Sharp Corners:** Achieving sharp internal corners is difficult and can require specialized tooling or EDM. It also creates stress concentration points.
*   **Design Recommendations:**
    *   **Radius the internal corners:** Use the largest possible radius that is functionally acceptable. This allows for larger diameter tools and better chip flow.
    *   **Increase slot width:** If possible, widen the slot to accommodate larger tools.
    *   **Consider alternative manufacturing processes:** If the slot is critical, consider processes like wire EDM or broaching, though these might be more expensive.
    *   **Break down the feature:** Can the slot be created by assembling two parts with simpler features?
    *   **Chamfer the slot edges:** This aids in tool entry and exit.

**Question 2:**

Explain why specifying very tight dimensional tolerances and fine surface finishes for non-critical features can significantly increase the manufacturing cost of a machined part.

**Answer:**

Specifying tight tolerances and fine surface finishes for non-critical features increases cost due to several factors:

*   **Slower Machining Speeds:** To achieve accuracy and a good surface finish, cutting speeds and feed rates must be reduced. This directly increases machining time.
*   **Multiple Passes:** Achieving tight tolerances often requires roughing passes followed by one or more finishing passes.
*   **Specialized Tooling:** Some fine finishes or complex geometries might require specialized, expensive cutting tools or grinding wheels.
*   **Inspection and Quality Control:** More frequent and precise measurement is needed to verify that tight tolerances and finishes are met, increasing inspection labor and equipment costs.
*   **Process Capability:** Not all machining processes are inherently capable of producing extremely tight tolerances or fine finishes consistently without significant effort and cost.
*   **Tool Wear and Calibration:** Tools used for high-precision work wear out faster and require more frequent calibration and replacement.

In essence, every deviation from "standard" machining practices to achieve higher precision or better finish adds time, complexity, and specialized requirements, all of which translate directly into higher manufacturing costs.

**Question 3:**

According to Boothroyd, Dewhurst, & Knight (2010), what is the primary benefit of using radii and chamfers on machined parts, and how does this relate to cost-effectiveness?

**Answer:**

According to Boothroyd, Dewhurst, & Knight (2010), the primary benefit of using radii and chamfers on machined parts is the **improvement of chip formation and flow**.

This relates to cost-effectiveness in several ways:

*   **Increased Tool Life:** Better chip flow reduces the tendency for chips to recut, which can overheat and damage the cutting tool. Longer tool life means fewer tool changes, reducing downtime and tooling costs.
*   **Higher Cutting Speeds/Feed Rates:** With better chip management, it's often possible to use slightly higher cutting speeds or feed rates, thereby reducing machining time.
*   **Improved Surface Finish:** Smooth chip evacuation prevents chip re-cutting and built-up edge (BUE) on the tool, both of which degrade surface finish.
*   **Reduced Risk of Tool Breakage:** Efficient chip removal minimizes the chance of chips interfering with the cutting process and causing the tool to break.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References

*   **Boothroyd, G., Dewhurst, P., & Knight, W. (2010).** *Product Design for Manufacture and Assembly* (3rd ed.). CRC Press.
*   **Chitale, A. K., & Gupta, R. C. (2011).** *Product Design and Manufacturing* (5th ed.). Prentice Hall of India.
*   **Dieter, G. E. (2000).** *Engineering Design: A Materials and Processing Approach*. McGraw Hill Co. Ltd.
*   **Molloy, O., Tilley, S., & Warman, E. A. (1998).** *Design for Manufacturing and Assembly*. Chapman & Hall.
*   **Bralla, J. G. (1998).** *Design for Manufacturability Handbook* (2nd ed.). McGraw-Hill.
*   **Boothroyd, G. (2005).** *Assembly Automation and Product Design* (2nd ed.). CRC Press.
*   **Whitney, D. E. (2004).** *Mechanical Assemblies: Their Design, Manufacture, and Role in Product Development*. Oxford University Press.
*   **Lesko, J. (1999).** *Industrial Design, Materials and Manufacture Guide*. John Wiley and Sons, Inc.

---