---
title: "Soldering and desoldering Practice – Through-Hole/SMD"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 2"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36133"
status: "completed"
scrapedAt: "2026-05-23T16:18:00.913Z"
---
# Power Electronics and Drives Lab - Module 2: Soldering and Desoldering Practice (Through-Hole/SMD)

## 1. Introduction to Soldering and Desoldering

Soldering is a crucial process in electronics for creating permanent electrical connections between components and printed circuit boards (PCBs). It involves melting a filler metal (solder) that flows into the gap between the components and the PCB pads, creating a strong electrical and mechanical bond upon cooling. Desoldering is the reverse process of removing components from a PCB without causing damage.

**Importance in Power Electronics:** In Power Electronics and Drives, robust and reliable connections are paramount due to the high currents and voltages involved. Poor soldering can lead to:
*   **Intermittent connections:** Causing erratic behavior of power converters.
*   **Overheating:** Leading to component failure.
*   **Reduced efficiency:** Due to increased resistance at the connection point.
*   **Safety hazards:** Especially with high-power systems.

**Textbook References:**
*   **Power Electronics- Essentials and Applications by L. Umanand (2009):** Likely discusses component mounting and assembly in the context of practical power electronic circuit construction.
*   **Power Electronic Systems- Theory and Design by Jai P Agrawal (2006):** May cover practical aspects of building and testing power electronic circuits, including soldering techniques.
*   **Power Electronics- Converters, Applications and Design, 3e by Ned Mohan, Undeland, Robbins (2022):** Emphasizes practical implementation and potential issues in power electronic circuits, which directly relates to connection quality.
*   **Power Electronics- A first course: Simulations and Laboratory Implementations by Ned Mohan, Siddharth Raju (2023):** This book is highly relevant as it bridges theory with practical implementation, likely dedicating sections to lab techniques like soldering.

**Course Outcome Alignment:**
*   **CO1 (K5):** Understanding the operation of power semiconductor devices necessitates their correct assembly onto circuits. Proper soldering ensures the devices can handle the expected currents and voltages reliably, directly impacting their performance and longevity. This practice supports the "Design & Select suitable gate driver circuits & heatsinks" aspect by ensuring the physical integration is sound.

## 2. Tools and Materials for Soldering

### 2.1 Soldering Iron

*   **Types:**
    *   **Fixed Temperature:** Simple, common for basic tasks.
    *   **Variable Temperature:** Allows precise control, crucial for sensitive components and different solder types.
*   **Wattage:**
    *   **15-30W:** Suitable for general electronics and small components.
    *   **40-60W:** Recommended for through-hole components, larger pads, and power electronics due to better heat transfer.
    *   **Higher Wattage (e.g., 100W+):** For heavy-duty tasks like soldering large wires or heatsinks.
*   **Tip Shapes:**
    *   **Chisel/Bevel:** Versatile, good for both through-hole and SMD.
    *   **Conical:** For fine-pitch components.
    *   **Knife:** For drag soldering and bridging pads.
*   **Maintenance:** Keep the tip clean and tinned to ensure good heat transfer and prevent oxidation. Use a damp sponge or brass wool for cleaning.

### 2.2 Solder

*   **Composition:** Typically an alloy of tin (Sn) and lead (Pb).
    *   **Leaded Solder (e.g., 63/37 Sn/Pb):** Melts at a lower temperature (around 183°C), flows well, and provides strong joints. Historically common but restricted due to environmental concerns.
    *   **Lead-Free Solder (e.g., Sn/Ag/Cu, Sn/Cu):** Melts at higher temperatures (around 217-227°C). Requires higher soldering iron temperatures and can be more challenging to work with initially.
*   **Flux Core:** Most solder wire contains a flux core that cleans the surfaces to be soldered, preventing oxidation during heating and promoting solder flow.
    *   **Rosin Flux (R):** Common, suitable for general electronics.
    *   **No-Clean Flux (NC):** Leaves a residue that can be left on the board.
    *   **Water-Soluble Flux (WS):** Requires thorough cleaning with water after soldering.

### 2.3 Soldering Flux

*   **Purpose:**
    *   **Cleaning:** Removes oxides from metal surfaces.
    *   **Wetting:** Improves solder flow by reducing surface tension.
    *   **Heat Transfer:** Facilitates even heating of the joint.
*   **Types:**
    *   **Paste Flux:** Applied with a brush or syringe, good for SMD.
    *   **Liquid Flux:** Applied with a brush or pen.
    *   **Flux Pen:** Convenient for targeted application.
*   **Use:** Apply sparingly to the joint area before soldering, especially with lead-free solder or when desoldering.

### 2.4 Desoldering Tools

*   **Desoldering Pump (Solder Sucker):** A spring-loaded vacuum device that sucks up molten solder.
*   **Desoldering Wick (Braid):** A copper braid coated with flux. It's placed on the joint, and the hot soldering iron melts the solder, which is then wicked up into the braid.
*   **Desoldering Gun:** Combines a soldering iron with a desoldering pump.

### 2.5 Other Essential Tools

*   **Helping Hand/PCB Holder:** To hold components and PCB steady.
*   **Safety Glasses:** **CRITICAL** to protect eyes from molten solder splashes and fumes.
*   **Fume Extractor/Fan:** To remove harmful flux fumes.
*   **Tweezers:** For handling small SMD components.
*   **Wire Strippers and Cutters:** For preparing wires.
*   **Magnifying Glass/Microscope:** For inspecting small joints, especially SMD.
*   **Isopropyl Alcohol (IPA) and Brushes:** For cleaning flux residue.

**Important Point:** Always use lead-free solder when specified or required by regulations. Be aware of the higher temperatures needed for lead-free soldering.

## 3. Soldering Techniques

### 3.1 Soldering Through-Hole Components

**Objective:** To create a reliable electrical and mechanical connection between a component lead and a PCB pad.

**Steps:**

1.  **Prepare the Workstation:** Ensure good lighting, ventilation, and safety equipment are in place.
2.  **Prepare the PCB and Component:**
    *   Ensure component leads are clean and straight. If oxidized, clean with a brass brush or fine sandpaper.
    *   Insert the component into the PCB holes, ensuring correct orientation.
    *   Bend the leads slightly on the underside of the PCB to hold the component in place.
3.  **Heat the Joint:**
    *   Turn on the soldering iron and set it to the appropriate temperature (e.g., 300-350°C for leaded solder, 350-400°C for lead-free).
    *   **Crucially, touch the soldering iron tip to *both* the component lead and the PCB pad simultaneously.** This ensures both surfaces reach soldering temperature.
4.  **Apply Solder:**
    *   Once the joint is hot, touch the solder wire to the *heated joint* (not directly to the iron tip).
    *   Allow the solder to melt and flow smoothly around the lead and onto the pad. Apply just enough solder to form a smooth, concave fillet.
    *   **Remove the solder wire first.**
5.  **Remove the Soldering Iron:**
    *   After the solder has flowed, remove the soldering iron from the joint.
6.  **Cooling:** Allow the joint to cool and solidify naturally without disturbing it.
7.  **Inspection:**
    *   **Good Joint:** Smooth, shiny, concave fillet. The solder covers the pad and wets the lead.
    *   **Bad Joints:**
        *   **Cold Solder Joint:** Dull, grey, lumpy appearance. Indicates insufficient heat or movement during solidification. Leads to poor electrical connection.
        *   **Over-soldered Joint:** Excessive solder, obscuring the lead and pad, or creating a ball of solder. Can lead to shorts or poor heat dissipation.
        *   **Solder Bridges:** Unwanted solder connecting two adjacent pads or leads.
8.  **Trim Excess Leads:** Use wire cutters to trim excess component leads close to the solder joint.

**Textbook References:**
*   **Power Electronics- A first course: Simulations and Laboratory Implementations by Ned Mohan, Siddharth Raju (2023):** Will likely provide detailed, practical instructions and illustrations for various soldering techniques.

**Course Outcome Alignment:**
*   **CO1 (K5):** Proper soldering of components like MOSFETs, IGBTs, diodes, and capacitors onto PCBs ensures they function as intended. A cold joint can lead to excessive voltage drop or intermittent connections, impacting the performance of power circuits.

### 3.2 Soldering Surface Mount Devices (SMD)

**Objective:** To solder small, flat components to PCB pads without solder bridges.

**Challenges:**
*   Smaller components and pads require more precision.
*   Higher risk of solder bridges between closely spaced pads.
*   Requires different techniques than through-hole soldering.

**Techniques:**

#### 3.2.1 Single-Sided SMD Soldering (for one-sided pads)

1.  **Apply Flux:** Apply a small amount of flux to the pad.
2.  **Tin One Pad:** Touch the soldering iron tip to the pad and apply a small amount of solder to tin it.
3.  **Position the Component:** Place the SMD component onto its pads using tweezers.
4.  **Solder the First Lead:** Heat the tinned pad and one lead of the component simultaneously. Apply a small amount of solder to create a joint. Ensure the component is aligned correctly.
5.  **Solder the Remaining Leads:**
    *   Apply flux to the remaining pads.
    *   Heat the second pad and lead, applying solder to form a joint.
    *   Repeat for all leads.
6.  **Inspection:** Check for good fillets and no solder bridges.

#### 3.2.2 Drag Soldering (for components with multiple leads on one side, e.g., SOIC, QFP)

1.  **Apply Flux:** Apply flux generously to all pads and component leads.
2.  **Tin One Lead:** Solder one lead of the component to its corresponding pad as a reference point, ensuring proper alignment.
3.  **Drag Solder:**
    *   Touch the soldering iron tip (often a chisel or knife tip) to the row of leads and pads.
    *   Gently drag the iron across the row, maintaining consistent pressure and speed. The heated tip should melt the solder and draw it along the leads, creating continuous joints.
    *   **Crucially, use a very fine amount of solder (or no additional solder if enough is on the tinned pads) and rely on the flux to do the work.**
4.  **Remove Solder Bridges:** If solder bridges form, use desoldering wick to remove excess solder. You can also use the iron tip to drag away small bridges, but this requires practice.
5.  **Inspection:** Check all joints for good fillets and no bridges.

#### 3.2.3 Hot Air Rework Station (for more complex SMD components or difficult joints)

*   Uses a stream of hot air to melt solder.
*   Provides even heating and is excellent for components with many pins or when precise temperature control is needed.
*   Requires specific nozzles to direct the hot air.

**Textbook References:**
*   **Power Electronics- A first course: Simulations and Laboratory Implementations by Ned Mohan, Siddharth Raju (2023):** Expected to cover practical SMD soldering techniques.

**Course Outcome Alignment:**
*   **CO1 (K5):** Modern power electronic circuits often incorporate surface-mount power devices (e.g., small MOSFETs, Schottky diodes). The ability to solder these reliably is essential for building compact and efficient power converters.

## 4. Desoldering Techniques

**Objective:** To remove components from a PCB without damaging the component, the PCB pads, or adjacent components.

### 4.1 Desoldering Through-Hole Components

**Using a Desoldering Pump:**

1.  **Heat the Joint:** Heat the solder joint with the soldering iron until the solder is molten.
2.  **Position the Pump:** Place the nozzle of the desoldering pump directly over the molten solder.
3.  **Activate the Pump:** Press the trigger to create a vacuum and suck up the molten solder.
4.  **Repeat:** You may need to reheat and pump multiple times to remove most of the solder.
5.  **Clean:** Use desoldering wick to remove any remaining solder.

**Using Desoldering Wick:**

1.  **Apply Flux:** Apply flux to the solder joint or use flux-coated wick.
2.  **Heat the Joint and Wick:** Place the desoldering wick over the solder joint. Touch the soldering iron tip to the wick, directly above the joint.
3.  **Wick Action:** The heat from the iron will melt the solder, and the flux in the wick will draw the molten solder into the copper braid.
4.  **Move and Cut:** Move the wick along the joint as it absorbs solder. Once a section of wick is saturated, move to a fresh section or cut off the saturated part.
5.  **Remove the Component:** Once most of the solder is removed from the leads, the component should be removable. You might need to gently wiggle it.

**Important Point:** Avoid excessive force when removing components. If a component is difficult to remove, there is likely still solder holding it.

### 4.2 Desoldering SMD Components

**Using Desoldering Wick:**

1.  **Apply Flux:** Apply flux to the leads and pads.
2.  **Drag Wick:** Place the wick over the row of leads. Heat with the soldering iron and drag the wick along the leads to absorb solder.
3.  **Clean Bridges:** Use small pieces of wick to clean up any solder bridges.
4.  **Remove Component:** Once all solder is removed from the leads, the component can be removed with tweezers.

**Using Hot Air Rework Station:**

1.  **Select Nozzle and Temperature:** Choose the appropriate nozzle for the component and set the correct temperature and airflow.
2.  **Heat the Component:** Direct the hot air onto the component and its leads.
3.  **Remove Component:** Once the solder melts, use tweezers to lift the component off the board.
4.  **Clean Pads:** After removing the component, use desoldering wick or a soldering iron to clean excess solder from the pads.

**Textbook References:**
*   **Power Electronics- A first course: Simulations and Laboratory Implementations by Ned Mohan, Siddharth Raju (2023):** Likely contains practical advice on desoldering.

**Course Outcome Alignment:**
*   **CO1 (K5):** The ability to desolder correctly is crucial for troubleshooting and repairing power electronic circuits. Mistakes during desoldering can damage valuable components or the PCB, hindering further analysis or modification.

## 5. Soldering Quality and Inspection

### 5.1 Criteria for a Good Solder Joint:

*   **Shiny and Smooth:** Indicates proper wetting and cooling.
*   **Concave Fillet:** The solder should form a smooth, V-shaped fillet that covers about two-thirds of the component lead and the pad.
*   **Good Wetting:** The solder should visibly adhere to both the component lead and the PCB pad.
*   **No Cold Solder Joints:** Avoid dull, grey, or lumpy appearances.
*   **No Solder Bridges:** Ensure adjacent leads/pads are not connected by solder.
*   **No Excessive Solder:** Avoid large balls of solder.
*   **No Burned Flux Residue:** Should be cleaned off if it obscures the joint.

### 5.2 Common Soldering Defects and Causes:

| Defect                  | Appearance                                  | Cause                                                                 | Remedy                                                                      |
| :---------------------- | :------------------------------------------ | :-------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Cold Solder Joint**   | Dull, grey, granular, lumpy                 | Insufficient heat; movement during solidification; oxidized surfaces. | Reheat the joint thoroughly, ensuring good contact with both surfaces. Add fresh solder and flux. |
| **Solder Bridge**       | Unwanted connection between adjacent pads/leads | Too much solder; iron tip not wiped clean; poor technique.          | Use desoldering wick or the iron tip to remove excess solder.              |
| **Excessive Solder**    | Large blob of solder, obscures joint        | Too much solder applied.                                              | Reheat the joint and remove excess solder with wick or iron tip.            |
| **Wicking**             | Solder climbs up the lead away from the pad | Too much heat applied for too long; lead too long.                  | Use less heat/time; trim leads properly; use desoldering wick to pull solder down. |
| **Solder Balling**      | Small spheres of solder on the PCB surface  | Oxidized surfaces; insufficient flux; contaminated solder.          | Clean surfaces, use fresh flux and solder.                                |
| **Lifted Pad**          | Pad detaches from the PCB                   | Excessive heat or force applied to the pad.                           | Handle with extreme care. May require repair using conductive epoxy or jumper wires. |
| **Damaged Component**   | Component failure/malfunction               | Excessive heat (thermal shock), mechanical damage.                    | Use proper temperature control; handle components carefully.              |

**Textbook References:**
*   **Power Electronics- Essentials and Applications by L. Umanand (2009):** Might have sections on quality control in manufacturing, which would include solder joint inspection.
*   **Power Electronics- Converters, Applications and Design, 3e by Ned Mohan, Undeland, Robbins (2022):** Likely highlights the impact of poor connections on the reliability of power converters.

**Course Outcome Alignment:**
*   **CO1 (K5):** Visual inspection of solder joints is a critical part of ensuring the reliability of power electronic circuits. A poorly soldered connection can lead to premature failure, especially under the stress of high power operation.

## 6. Practice Questions and Exercises

**Instructions:** Answer the following questions.

1.  **Question:** Describe the primary function of flux in the soldering process. (Aligns with CO1 - understanding device operation relies on good connections)
    *   **Answer:** Flux cleans the metal surfaces to be soldered by removing oxides and other contaminants. It also prevents oxidation during heating and improves the wetting properties of the molten solder, allowing it to flow smoothly and form a strong bond.

2.  **Question:** What are the key differences between leaded solder and lead-free solder in terms of melting point and soldering technique? (Aligns with CO1 - selection of materials for reliable circuits)
    *   **Answer:** Leaded solder (e.g., 63/37 Sn/Pb) has a lower melting point (around 183°C) and is generally easier to work with. Lead-free solder (e.g., Sn/Ag/Cu) melts at a higher temperature (around 217-227°C) and requires higher soldering iron temperatures and potentially more flux to achieve good results.

3.  **Question:** Explain the characteristics of a "cold solder joint" and why it is detrimental to electrical connections. (Aligns with CO1 - impact on device performance)
    *   **Answer:** A cold solder joint appears dull, grey, and granular. It results from insufficient heat or movement during solidification. It is detrimental because it creates a poor electrical connection with high resistance, leading to overheating, intermittent operation, or complete failure of the circuit.

4.  **Question:** Describe the process of desoldering a through-hole component using desoldering wick. (Aligns with CO1 - practical skill for repair/modification)
    *   **Answer:** Apply flux to the joint. Place the desoldering wick over the joint. Heat the wick with the soldering iron, allowing the flux and copper braid to draw up the molten solder. Move to fresh wick as it becomes saturated. Repeat until most solder is removed, then remove the component.

5.  **Question:** For soldering SMD components, which technique is generally preferred for components with multiple pins on one side, like an SOIC package, and why? (Aligns with CO1 - practical skill for modern circuits)
    *   **Answer:** Drag soldering is generally preferred for multi-pin SMD components. It allows for rapid soldering of all pins simultaneously by drawing a heated iron tip across the row of leads and pads, reducing the risk of overheating individual components and ensuring consistent joints, provided a clean technique is used to avoid bridges.

6.  **Practical Exercise (Simulated):** Imagine you have just soldered a power MOSFET onto a heatsink using a high-wattage soldering iron and thick solder wire. You observe that the solder joint is shiny but forms a large blob, obscuring the mounting hole. What is the likely defect, and how would you correct it?
    *   **Answer:** The defect is likely **excessive solder**. To correct it, you would reheat the joint with the soldering iron, touching the tip to the excess solder. Then, using desoldering wick or carefully using the iron tip to wick away the excess material, you would reduce the solder volume to form a proper fillet without obscuring the hole.

7.  **Practical Exercise (Simulated):** You are desoldering a critical component from a sensitive PCB. You notice that after using desoldering wick, one of the pads on the PCB seems slightly discolored and feels loose when you gently probe it. What is the most likely cause, and what should you do?
    *   **Answer:** The most likely cause is **excessive heat or force applied to the pad**, leading to it lifting from the PCB substrate. You should stop desoldering that joint immediately. If the pad is completely detached, you might need to repair it using a fine jumper wire soldered to the component lead and a nearby trace, or by using conductive epoxy, but this is a delicate repair that requires advanced skills. If it's slightly discolored but still attached, proceed with extreme caution.

## 7. Important Points to Remember

*   **Safety First:** Always wear safety glasses. Use a fume extractor or work in a well-ventilated area.
*   **Cleanliness is Key:** Keep your soldering iron tip clean and tinned. Ensure components and PCB pads are free of dirt and oxidation.
*   **Heat the Joint, Not the Solder:** The soldering iron should heat the component lead and the PCB pad. Apply solder to the heated joint.
*   **Use the Right Amount of Solder:** Aim for smooth, concave fillets, not blobs or excessive amounts.
*   **Avoid Movement:** Do not disturb the joint while the solder is solidifying.
*   **Lead-Free Soldering:** Be prepared for higher temperatures and potentially more challenging wetting.
*   **Practice Makes Perfect:** Soldering and desoldering are skills that improve with consistent practice. Start with scrap PCBs.
*   **SMD Requires Precision:** Use appropriate tools (tweezers, fine-tip iron) and techniques for SMD components.
*   **Inspect Your Work:** Always visually inspect solder joints for defects.

This module provides the foundational practical skills necessary for building, testing, and troubleshooting circuits in the Power Electronics and Drives lab. Mastering these techniques ensures the reliability and functionality of the power electronic systems you will work with.
