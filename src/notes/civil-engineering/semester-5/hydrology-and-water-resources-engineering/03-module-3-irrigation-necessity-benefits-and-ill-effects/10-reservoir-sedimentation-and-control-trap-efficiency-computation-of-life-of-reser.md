---
title: "Reservoir sedimentation and control - trap efficiency- computation of life of reservoir – river training - diversion structures - layout"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 3: Irrigation– Necessity, Benefits and ill effects"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d9b"
status: "completed"
scrapedAt: "2026-05-20T18:49:25.140Z"
---
# Hydrology and Water Resources Engineering: Module 3 - Irrigation

## Topic: Reservoir Sedimentation and Control

### 1. Necessity, Benefits, and Ill Effects of Irrigation

While this module focuses on sedimentation, it's crucial to briefly understand the context. Irrigation is the artificial application of water to land to assist in the production of crops.

**Necessity of Irrigation:**

*   **Arid and Semi-Arid Regions:** Regions with insufficient natural rainfall to support crop growth.
*   **Erratic Rainfall:** Areas with unpredictable or uneven distribution of rainfall, leading to crop failure.
*   **Drought Conditions:** To supplement water supply during periods of drought.
*   **Intensification of Agriculture:** To enable multiple cropping seasons and higher yields.
*   **Water for Non-Agricultural Uses:** Reservoirs built for irrigation also serve other purposes like power generation, flood control, and water supply.

**Benefits of Irrigation:**

*   **Increased Crop Production:** Guarantees adequate water supply, leading to higher yields and improved crop quality.
*   **Crop Diversification:** Allows cultivation of a wider variety of crops, including high-value ones.
*   **Reduced Risk of Crop Failure:** Mitigates the impact of drought and erratic rainfall.
*   **Improved Livelihoods:** Enhances farmer income and rural economic development.
*   **Food Security:** Contributes to national food security by ensuring stable agricultural output.

**Ill Effects of Irrigation (if not managed properly):**

*   **Waterlogging:** Excessive irrigation leads to a rise in the groundwater table, saturating the soil and harming crop roots.
*   **Salinization:** In arid/semi-arid regions, evaporation leaves dissolved salts on the soil surface, making it infertile.
*   **Soil Erosion:** Inefficient irrigation methods can lead to soil erosion.
*   **Spread of Water-borne Diseases:** Stagnant irrigation water can become breeding grounds for mosquitoes and other disease vectors.
*   **Environmental Degradation:** Can alter natural watercourses, affect aquatic ecosystems, and lead to water scarcity in downstream areas.
*   **Reservoir Sedimentation:** (This is our primary focus!) Accumulation of sediment in reservoirs, reducing their storage capacity and lifespan.

### 2. Reservoir Sedimentation and Control

#### 2.1. Reservoir Sedimentation: The Problem

**Definition:** Reservoir sedimentation is the process by which sediment (sand, silt, clay, gravel, and debris) carried by rivers accumulates at the bottom of a reservoir.

**Sources of Sediment:**

*   **Surface Erosion:** Raindrops hitting bare soil dislodge particles, which are then transported by runoff.
*   **Gully Erosion:** Concentrated flow in gullies significantly increases sediment transport.
*   **Channel Erosion:** The riverbed and banks themselves erode, contributing sediment.
*   **Landslides and Bank Collapse:** Natural events can introduce large amounts of sediment.
*   **Deforestation and Poor Land Management:** These practices exacerbate erosion in the watershed.

**Impacts of Sedimentation:**

*   **Reduced Storage Capacity:** The primary and most significant impact. This reduces the reservoir's ability to store water for its intended purposes (irrigation, power, flood control).
*   **Decreased Reservoir Lifespan:** Eventually, the reservoir can become completely filled with sediment, rendering it useless.
*   **Reduced Power Generation Efficiency:** Sediment can damage turbines and reduce the head available for power generation.
*   **Increased Operational Costs:** Dredging sediment is expensive and often a temporary solution.
*   **Ecological Impacts:** Sedimentation can alter downstream aquatic habitats and affect fish spawning grounds.
*   **Siltation of Intake Structures:** Sediment can clog irrigation intakes and water supply outlets.

#### 2.2. Trap Efficiency

**Definition:** Trap efficiency (TE) is the percentage of the total sediment load entering a reservoir that is retained or trapped within the reservoir.

**Factors Affecting Trap Efficiency:**

*   **Reservoir Capacity:** Larger reservoirs generally have higher trap efficiency.
*   **Reservoir Age:** As a reservoir ages and sediment accumulates, its trap efficiency can decrease.
*   **Reservoir Inlet and Outlet Configuration:** The design of where water enters and leaves can influence sediment trapping.
*   **Type of Sediment:** Finer sediments (silt and clay) are more likely to be suspended and carried through, while coarser sediments (sand and gravel) settle out more readily.
*   **Flow Velocity:** Lower flow velocities within the reservoir allow sediment particles more time to settle.
*   **Sediment Load Characteristics:** The quantity and size distribution of the incoming sediment load.
*   **Storage Ratio (Capacity/Inflow Ratio):** A key parameter. It is the ratio of the reservoir's storage capacity to the average annual water inflow. A higher storage ratio generally leads to higher trap efficiency.

**Methods for Estimating Trap Efficiency:**

*   **Empirical Formulas:** Various empirical formulas have been developed based on observed data. A commonly used one relates trap efficiency to the storage ratio:

    *   **Brown's Formula:**
        *   For Storage Ratio $\le 0.0002$: TE = 100%
        *   For $0.0002 <$ Storage Ratio $\le 0.001$: TE = $100 - (80 \times e^{-0.01 \times \text{Storage Ratio} \times 1000})$
        *   For Storage Ratio $>$ 0.001: TE = $100 - (20 \times e^{-0.01 \times \text{Storage Ratio} \times 1000})$

    *   **The United States Department of Agriculture (USDA) Soil Conservation Service (now NRCS) Method:** This method uses curves based on the storage ratio and reservoir capacity.

*   **Sediment Transport Models:** More sophisticated computational models can simulate sediment movement and deposition.

**Example Calculation (Using Brown's Formula - Simplified):**

Let's assume a reservoir has an average annual inflow of 100 million cubic meters (MCM) and a storage capacity of 50 MCM.

Storage Ratio = $\frac{\text{Reservoir Capacity}}{\text{Average Annual Inflow}} = \frac{50 \text{ MCM}}{100 \text{ MCM}} = 0.5$

Since the Storage Ratio (0.5) is greater than 0.001, we use the third formula:

TE = $100 - (20 \times e^{-0.01 \times 0.5 \times 1000})$
TE = $100 - (20 \times e^{-5})$
TE = $100 - (20 \times 0.006738)$
TE = $100 - 0.13476$
TE $\approx 99.87\%$

This means approximately 99.87% of the incoming sediment is trapped.

**Important Point to Remember:** Trap efficiency is not constant; it changes over the life of the reservoir due to changes in storage capacity and inflow characteristics.

#### 2.3. Computation of the Life of a Reservoir

**Definition:** The useful life of a reservoir is the period during which it can perform its intended functions before its storage capacity is reduced to an uneconomical or unusable level due to sedimentation.

**Methods of Estimating Reservoir Life:**

*   **Capacity-Inflow Ratio Method (using Trap Efficiency):**
    1.  **Estimate Average Annual Sediment Load (ASL):** This is the total amount of sediment entering the reservoir per year. It can be estimated from watershed characteristics, sediment yield studies, or direct measurements.
    2.  **Calculate Trap Efficiency (TE):** Using methods described above, based on the initial storage ratio.
    3.  **Calculate Sediment Trapped Annually (STA):** STA = ASL $\times$ TE
    4.  **Calculate the Rate of Sedimentation:** This is the volume of sediment deposited per year. Assuming sediment density, it can be converted to volume. For simplicity, we often work directly with sediment volume.
    5.  **Estimate Reservoir Life (N):**
        $N = \frac{\text{Initial Reservoir Storage Capacity}}{\text{Average Annual Sediment Trapped (Volume)}}$

*   **Volumetric Methods:** Based on observed changes in reservoir bathymetry over time.

**Example Calculation (Continuing from previous example):**

Assume the average annual sediment load entering the reservoir is 100,000 cubic meters ($m^3$).
The initial reservoir capacity is 50 MCM = $50 \times 10^6 m^3$.
From the previous calculation, TE $\approx 99.87\%$.

Sediment Trapped Annually (STA) = $100,000 m^3 \times 0.9987 \approx 99,870 m^3$

Reservoir Life (N) = $\frac{50 \times 10^6 m^3}{99,870 m^3/\text{year}}$
N $\approx 500.6$ years.

**Important Considerations for Reservoir Life Calculation:**

*   **Sediment Yield Variability:** Sediment yield can vary significantly year to year due to rainfall intensity and watershed conditions.
*   **Changes in Trap Efficiency:** As sediment accumulates, the effective storage capacity decreases, which can affect the storage ratio and thus the trap efficiency. The calculation above assumes constant trap efficiency. More advanced methods account for this.
*   **Design Sediment Rate:** Often, a portion of the reservoir's initial capacity is reserved for sediment storage (sedimentation zone or surcharge storage) to extend its useful life.
*   **Densification of Sediment:** The deposited sediment compacts over time, reducing its volume.

#### 2.4. Reservoir Sediment Control Measures

Control measures aim to reduce sediment inflow or manage deposited sediment.

**1. Upstream Watershed Management (Source Control):**

*   **Afforestation and Reforestation:** Planting trees helps stabilize soil and reduce erosion.
*   **Contour Bunding and Terracing:** Techniques to reduce runoff velocity and erosion on slopes.
*   **Check Dams and Silt Arrestors:** Small structures built in upstream gullies and streams to trap sediment before it reaches the main river.
*   **Sustainable Land Management Practices:** Crop rotation, cover cropping, and reduced tillage.
*   **Gully Plugging:** Filling gullies to prevent further erosion.

**2. In-Reservoir Sediment Management:**

*   **Sluicing:** Opening low-level outlets (siphons or gates) during high flood periods to flush out a portion of the incoming sediment. This is most effective for coarse sediments.
*   **Density Current Control:** Sediment-laden inflow often enters the reservoir as a density current (denser than reservoir water) and can flow along the bottom, potentially bypassing some trapping. Measures can be taken to disrupt these currents.
*   **Dredging:** Mechanical removal of accumulated sediment. This is generally very expensive and often not cost-effective for large reservoirs.
*   **Reservoir Sedimentation Control Structures:**
    *   **Sediment Traps/Forebays:** Small reservoirs upstream of the main reservoir to trap sediment.
    *   **Sediment Excluders:** Structures at the inlet designed to divert sediment-laden water away from the main reservoir.
    *   **Sediment Ejectors:** Devices that use the energy of the outflow to eject sediment from the reservoir.

**3. Reservoir Operation Strategies:**

*   **Drawdown Flushing:** Drawing down the reservoir level rapidly during floods can sometimes resuspend and flush sediment.
*   **Strategic Drawdowns:** Operating the reservoir at lower levels during sediment-rich periods can reduce trap efficiency.

**Highlight:** Watershed management is the most sustainable and cost-effective approach to controlling reservoir sedimentation in the long run.

### 3. River Training

**Definition:** River training refers to the modification of a river's flow and its course to prevent undesirable phenomena like bank erosion, flooding, and sediment deposition, and to guide the flow effectively for specific purposes (e.g., navigation, irrigation intake).

**Objectives of River Training:**

*   **Improve Navigability:** Maintain a stable and sufficient depth in navigation channels.
*   **Protect Flood Plains:** Prevent inundation of valuable land.
*   **Protect Banks:** Prevent erosion and loss of land.
*   **Guide Flow:** Direct the flow towards a specific point, such as an intake structure or a bridge pier.
*   **Reduce Sedimentation:** Manage sediment deposition in undesirable areas.

**Types of River Training Works:**

**A. Guide Banks (or Bell Bunds):**

*   **Purpose:** To guide the flow of a river through a confined channel, typically at a bridge site or an intake structure, preventing the river from spreading out and causing erosion or deposition.
*   **Layout:** Two parallel guide banks are constructed upstream of the structure, converging towards it. They are typically trapezoidal in cross-section and are extended as far upstream as necessary to establish a stable approach flow.
*   **Function:** They act as artificial flood banks, confining the flow to a narrower section, increasing flow velocity, and reducing the tendency for meandering and deposition.

**B. Marginal Embankments (Levees):**

*   **Purpose:** To protect adjacent land from flooding by confining the river within its banks.
*   **Layout:** Parallel to the river banks, at a safe distance from the main channel to accommodate flood flows and potential bank erosion.
*   **Function:** They act as barriers against floodwaters.

**C. Spurs (Groynes):**

*   **Purpose:** To protect the river bank from erosion by deflecting the flow away from the bank. They also help in guiding the river in a desired direction.
*   **Layout:** Structures projecting from the bank into the river, perpendicular or at an angle to the flow.
*   **Types:**
    *   **Submerged Spurs:** Placed below the water surface, primarily to deflect flow and reduce scour at the bank.
    *   **Emergent Spurs:** Project above the water surface, also providing protection and potentially encouraging sediment deposition behind them.
*   **Function:** They create eddies and turbulence, which cause sediment to deposit behind the spur, thus protecting the bank. They also direct the main flow away from the bank.

**D. Bars:**

*   **Purpose:** To control flow, reduce velocity, and deposit sediment in specific locations.
*   **Layout:** Can be groynes or other structures designed to create a sediment deposition zone.
*   **Function:** Induce deposition to reduce scour or to alter the river's course.

**E. River Stabilizers/Deflectors:**

*   **Purpose:** To stabilize the river channel and prevent meandering.
*   **Layout:** Various structures like pitched islands, launching stones, etc.
*   **Function:** Modify the flow pattern to promote channel stability.

### 4. Diversion Structures and Layout

**Definition:** Diversion structures are engineered facilities designed to intercept a portion of the river flow and divert it into a canal or channel for irrigation, water supply, or other purposes.

**Key Components of a Diversion Scheme:**

1.  **Diversion Structure:** The main facility that controls and diverts the flow.
2.  **Head Regulator:** Controls the flow from the river into the canal.
3.  **Canal System:** The network of channels that carry water to the command area.
4.  **River Training Works:** To ensure stable flow towards the diversion structure.

**Types of Diversion Structures:**

**A. Weirs:**

*   **Purpose:** To raise the water level upstream, allowing gravity flow into the canal. They are typically built across relatively wide, shallow rivers with moderate slopes.
*   **Layout:** A low-height barrier built across the river. Water flows *over* the weir crest.
*   **Components:**
    *   **Crest Gate:** To regulate the flow over the weir and control the upstream water level.
    *   **Under Sluices:** Gates located at a lower level to allow the passage of accumulated sediment from the upstream pond.
    *   **Divide Wall:** Separates the weir from the undersluices to prevent sediment from undersluices entering the canal.
    *   **Pocket:** An area between the divide wall and the river bank for collecting debris and sediment.
    *   **Head Regulator:** Located in the pocket to control flow into the canal.
    *   **Fish Ladder:** Sometimes incorporated to allow fish passage.
    *   **River Training Works:** Guide banks, spurs, etc., to ensure stable flow approaching the weir.

**B. Barrages:**

*   **Purpose:** Similar to weirs but are gate-controlled structures across the entire river width, allowing for more precise control of water levels and flow diversion. They are preferred for wider rivers or where higher upstream water levels are required.
*   **Layout:** A series of gates across the river. Water is diverted *through* the gates or by raising the gate to create a temporary pond.
*   **Components:**
    *   **Main Barrage Gates:** Control the passage of flood flows and regulation of water levels.
    *   **Crest Gates:** To regulate the normal flow and create the pond for canal diversion.
    *   **Under Sluices:** For sediment removal.
    *   **River Training Works:** Similar to weirs.
*   **Advantages over Weirs:** Greater flexibility in operation, better control of upstream water level, and ability to pass larger flood flows with less afflux (backwater effect).

**Layout Considerations for Diversion Structures:**

*   **Site Selection:**
    *   **Stable River Section:** Choose a reach with minimal meandering and bank erosion.
    *   **Adequate Foundation:** Suitable soil conditions for the structure.
    *   **Favorable Topography:** For gravity flow into the canal.
    *   **Proximity to Command Area:** Minimize canal length and water loss.
    *   **Accessibility:** For construction and maintenance.
*   **Alignment:**
    *   **Perpendicular to Flow:** Generally preferred for efficient diversion.
    *   **Influence of Meanders:** Consider the river's natural tendency to meander.
*   **River Training:**
    *   **Guide Banks:** Crucial for stabilizing the approach to the structure, especially for barrages and large weirs, to prevent erosion and ensure uniform flow.
    *   **Spurs:** May be used upstream to deflect flow away from banks and guide it towards the diversion works.
*   **Sediment Management:**
    *   **Undersluice Gates:** Positioned to effectively remove sediment from the pond.
    *   **Divide Wall:** Essential for separating the sediment-free water for the canal.
    *   **Pocket Design:** To trap debris and initial sediment load.
*   **Flood Management:**
    *   **Capacity of Barrage/Weir:** Must be able to pass the design flood flow without overtopping or excessive afflux.
    *   **River Training:** To prevent flooding of the diversion structure itself.

### 5. Practice Questions and Exercises

**Question 1:** Define trap efficiency. What are the primary factors influencing the trap efficiency of a reservoir?

**Answer 1:**
Trap efficiency is the percentage of total sediment load entering a reservoir that is retained within it.
Primary factors include:
*   Reservoir capacity
*   Reservoir age
*   Storage ratio (Capacity/Inflow)
*   Sediment characteristics (size, type)
*   Flow velocities within the reservoir

**Question 2:** A reservoir has an average annual inflow of 200 MCM and a storage capacity of 80 MCM. The average annual sediment load entering the reservoir is 150,000 $m^3$. Calculate the initial trap efficiency using Brown's formula and estimate the reservoir's useful life assuming a constant trap efficiency and sediment load.

**Answer 2:**
Storage Ratio = $\frac{80 \text{ MCM}}{200 \text{ MCM}} = 0.4$
Since Storage Ratio (0.4) > 0.001, use TE = $100 - (20 \times e^{-0.01 \times \text{Storage Ratio} \times 1000})$
TE = $100 - (20 \times e^{-0.01 \times 0.4 \times 1000})$
TE = $100 - (20 \times e^{-4})$
TE = $100 - (20 \times 0.018316)$
TE = $100 - 0.36632$
TE $\approx 99.63\%$

Sediment Trapped Annually (STA) = $150,000 m^3 \times 0.9963 \approx 149,445 m^3$

Reservoir Life (N) = $\frac{80 \text{ MCM}}{149,445 m^3/\text{year}}$
Convert MCM to $m^3$: $80 \text{ MCM} = 80 \times 10^6 m^3$
N = $\frac{80 \times 10^6 m^3}{149,445 m^3/\text{year}} \approx 535.3$ years.

**Question 3:** Briefly explain the purpose and layout of guide banks in river training.

**Answer 3:**
Purpose: To guide the flow of a river through a confined channel, typically at bridge sites or diversion structures, preventing erosion and ensuring a stable approach.
Layout: Two parallel, trapezoidal embankments constructed upstream of the structure, converging towards it, confining the flow to a narrower section.

**Question 4:** What is the difference between a weir and a barrage as diversion structures?

**Answer 4:**
A weir is a low-height barrier across the river, with water flowing *over* its crest. It offers less control over upstream levels.
A barrage is a gate-controlled structure across the entire river width, allowing for precise regulation of water levels and diversion by controlling flow *through* or *over* its gates. Barrages offer greater operational flexibility and can pass larger floods with less backwater effect.

**Question 5:** List three common methods for controlling reservoir sedimentation.

**Answer 5:**
1.  **Upstream Watershed Management:** Afforestation, terracing, check dams.
2.  **In-Reservoir Sediment Management:** Sluicing, dredging, sediment traps.
3.  **Reservoir Operation Strategies:** Strategic drawdowns, drawdown flushing.

### 6. Important Points to Remember

*   **Sedimentation reduces storage capacity**, which is the primary function of a reservoir.
*   **Trap efficiency is a crucial parameter** for estimating sediment deposition and reservoir life.
*   **The Storage Ratio (Capacity/Inflow) is a key determinant of trap efficiency.**
*   **Upstream watershed management is the most sustainable and cost-effective long-term solution** for reservoir sedimentation control.
*   **River training works are essential** to ensure stable flow conditions, especially at hydraulic structures.
*   **Guide banks are vital for directing flow** and preventing erosion at bridge piers and diversion structures.
*   **Weirs and barrages are the primary diversion structures**, with barrages offering greater operational control.
*   **Sediment control measures are integrated into both watershed and reservoir design and operation.**
*   **Reservoir life estimation is a critical aspect of water resource planning.**
