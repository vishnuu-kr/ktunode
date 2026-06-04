---
title: "P system, Q system, reorder level – Selective inventory control techniques - JIT - Supply chain and management."
subject: "INDUSTRIAL AND SYSTEMS ENGINEERING"
module: "Module 2: Production Planning and Control: Aggregate production planning, materials requirement planning "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf480446373c"
status: "completed"
scrapedAt: "2026-05-20T18:04:16.633Z"
---
This is a comprehensive set of study notes for the specified topic, designed to cover all learning outcomes and align with the provided textbooks and course outcomes.

---

# Industrial and Systems Engineering: Module 2 - Production Planning and Control

## Topic: Inventory Control Techniques, JIT, and Supply Chain Management

---

### 1. Introduction to Inventory Management

**Key Concept:** Inventory refers to the raw materials, work-in-progress (WIP), and finished goods that a company holds. Effective inventory management is crucial for balancing the costs of holding too much inventory (storage, obsolescence, capital tied up) against the costs of holding too little (stockouts, lost sales, production stoppages).

**Objective:** To determine *when* to order and *how much* to order to meet demand while minimizing costs.

**Relevance to Course Outcomes:**
*   **CO2:** Apply inventory control techniques for materials management. (K3)

**Referenced Textbooks:**
*   Telsang, M. T. (2018). *Industrial Engineering & Production Management*. (Chapter on Inventory Control)
*   Paneerselvam, R. (2012). *Production and Operations Management*. (Chapter on Inventory Management)
*   Mahadevan, B. (2018). *Operations Management: Theory and Practice*. (Chapter on Inventory Management)

---

### 2. Selective Inventory Control Techniques

**Key Concept:** Not all inventory items are equally important. Selective inventory control techniques prioritize inventory management efforts based on the value, usage, or criticality of items.

**Rationale:** Focusing limited resources on the most important items leads to more efficient inventory management and better control.

**2.1. ABC Analysis**

**Definition:** A method of inventory classification where items are categorized into three groups (A, B, and C) based on their annual consumption value (annual demand x unit cost).

*   **Class A Items:**
    *   **Characteristics:** High annual consumption value (typically 10-20% of the total number of items, but account for 70-80% of the total annual consumption value).
    *   **Management Focus:** Strict control, frequent review, accurate record-keeping, tight security, and careful forecasting.
    *   **Ordering Policy:** Should be reviewed frequently, often with smaller, more frequent orders to minimize holding costs.
*   **Class B Items:**
    *   **Characteristics:** Medium annual consumption value (typically 20-30% of the total number of items, accounting for 15-25% of the total annual consumption value).
    *   **Management Focus:** Moderate control, regular review, and standard procedures.
*   **Class C Items:**
    *   **Characteristics:** Low annual consumption value (typically 50-70% of the total number of items, but account for only 5-10% of the total annual consumption value).
    *   **Management Focus:** Simple control, less frequent review, larger order quantities (e.g., using two-bin system), and less emphasis on accurate records.

**Example:**
Imagine a manufacturing company with 1000 inventory items.
*   200 items (Class A) account for 80% of the total inventory value.
*   300 items (Class B) account for 15% of the total inventory value.
*   500 items (Class C) account for 5% of the total inventory value.

The company would dedicate more management time and resources to controlling the 200 Class A items.

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - ABC Analysis)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - ABC Analysis)
*   Mahadevan, B. (2018). (Chapter on Inventory Management - ABC Analysis)

**2.2. VED Analysis**

**Definition:** A method of inventory classification based on the *usage criticality* of an item.

*   **Vital Items (V):**
    *   **Characteristics:** Essential for production. If these items are not available, production will stop immediately.
    *   **Management Focus:** Highest priority, continuous availability, strict control, and frequent monitoring.
*   **Essential Items (E):**
    *   **Characteristics:** Required for production, but a short-term shortage might be tolerated or can be overcome with minor adjustments.
    *   **Management Focus:** High priority, ensure availability, regular monitoring.
*   **Desirable Items (D):**
    *   **Characteristics:** Not critical for production; their absence may cause inconvenience but not a complete shutdown.
    *   **Management Focus:** Lower priority, can be managed with less stringent controls.

**Example:**
In an automobile manufacturing plant:
*   **Vital:** Engine block, critical electronic control units.
*   **Essential:** Nuts and bolts for assembly, common lubricants.
*   **Desirable:** Seat covers with specific brand logos (can be temporarily substituted), specialized tools not used daily.

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - VED Analysis)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - VED Analysis)

**2.3. FSN Analysis**

**Definition:** A method of inventory classification based on the *consumption rate* or movement frequency of an item.

*   **Fast-Moving Items (F):**
    *   **Characteristics:** High consumption rate, frequent demand.
    *   **Management Focus:** Lower order quantities, more frequent replenishment, efficient handling and storage.
*   **Slow-Moving Items (S):**
    *   **Characteristics:** Low consumption rate, infrequent demand.
    *   **Management Focus:** Higher order quantities, less frequent replenishment, potential for obsolescence.
*   **Non-Moving Items (N):**
    *   **Characteristics:** No consumption for a significant period.
    *   **Management Focus:** Review for obsolescence, disposal, or potential repurposing.

**Example:**
In a retail store:
*   **Fast-Moving:** Milk, bread, common vegetables.
*   **Slow-Moving:** Specialized seasonal clothing, gourmet food items.
*   **Non-Moving:** Out-of-season merchandise, discontinued products.

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - FSN Analysis)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - FSN Analysis)

**2.4. SDE Analysis**

**Definition:** A method of inventory classification based on the *dependency* of an item on external factors or its *ease of procurement*.

*   **Scarce Items (S):**
    *   **Characteristics:** Difficult to obtain, limited suppliers, long lead times.
    *   **Management Focus:** Very high priority, proactive sourcing, building relationships with suppliers, maintaining safety stock.
*   **Difficult Items (D):**
    *   **Characteristics:** Moderately difficult to obtain, require special handling or specific suppliers.
    *   **Management Focus:** Careful planning, alternative sourcing options.
*   **Easy Items (E):**
    *   **Characteristics:** Easily available from multiple suppliers, short lead times.
    *   **Management Focus:** Standard procurement procedures.

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - SDE Analysis)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - SDE Analysis)

**Important Point:** These classification techniques (ABC, VED, FSN, SDE) can often be combined to create more nuanced inventory management strategies. For instance, managing "AV" items (high value and vital) would be the highest priority.

---

### 3. Inventory Control Systems

**Key Concept:** These systems dictate *when* and *how much* inventory to order.

**3.1. P System (Periodic Review System)**

**Definition:** In a P system, inventory levels are checked at fixed, regular intervals (e.g., weekly, monthly). An order is placed to bring the inventory level up to a predetermined maximum level. The order quantity varies depending on the current inventory on hand.

*   **How it works:**
    1.  At the end of each review period (e.g., every Monday), the inventory level is observed.
    2.  The demand during the review period plus the lead time is estimated.
    3.  The current inventory on hand is checked.
    4.  An order is placed for a quantity equal to `(Target Inventory Level) - (Inventory on Hand)`.
    5.  The Target Inventory Level is typically set to cover demand during the review period plus lead time, plus a safety stock.

*   **Characteristics:**
    *   Review frequency is fixed.
    *   Order quantity varies.
    *   Inventory is "watched" periodically.
    *   Suitable for situations where orders need to be consolidated for cost-effectiveness (e.g., deliveries from the same supplier at fixed intervals) or when it's impractical to monitor inventory continuously.

*   **Formula for Order Quantity (Q):**
    `Q = T - I`
    Where:
    *   `Q` = Order Quantity
    *   `T` = Target Inventory Level (Maximum Inventory Level) = `Average Demand during (Review Period + Lead Time) + Safety Stock`
    *   `I` = Inventory on Hand (including outstanding orders)

**Example:**
A company reviews its inventory of a specific component every two weeks.
*   Review Period (R) = 2 weeks
*   Lead Time (L) = 1 week
*   Average daily demand = 10 units
*   Safety Stock = 40 units

Target Inventory Level (T) = (Average demand per day * (R + L)) + Safety Stock
T = (10 units/day * (2 weeks + 1 week)) + 40 units
T = (10 units/day * 3 weeks * 7 days/week) + 40 units
T = 210 units + 40 units = 250 units

On a review day, the inventory on hand is 80 units.
Order Quantity (Q) = T - I = 250 units - 80 units = 170 units.
An order for 170 units is placed.

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - Types of Systems)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - Periodic Review System)
*   Mahadevan, B. (2018). (Chapter on Inventory Management - Periodic Review Systems)

**3.2. Q System (Continuous Review System / Fixed Order Quantity System)**

**Definition:** In a Q system, inventory levels are monitored continuously. When the inventory level drops to a predetermined reorder point (ROP), an order of a fixed quantity (Economic Order Quantity - EOQ) is placed.

*   **How it works:**
    1.  The inventory level is monitored constantly.
    2.  When the inventory on hand (or the inventory position, which includes on-hand stock plus outstanding orders minus backorders) reaches the Reorder Point (ROP), an order is placed.
    3.  The order quantity is fixed, often determined by the EOQ model.

*   **Characteristics:**
    *   Reorder Point is fixed.
    *   Order quantity is fixed.
    *   Inventory is "watched" continuously.
    *   Requires more intensive record-keeping but generally results in lower average inventory levels and fewer stockouts compared to a P system, assuming similar review costs.

*   **Key Components:**
    *   **Reorder Point (ROP):** The inventory level that triggers a new order.
        `ROP = Average Demand during Lead Time + Safety Stock`
        `ROP = (Average Demand per unit time * Lead Time) + Safety Stock`
    *   **Order Quantity (Q):** The fixed amount to be ordered each time the ROP is reached. Often calculated using EOQ.

**Example:**
A company uses a Q system for a particular item.
*   Lead Time (L) = 2 weeks
*   Average weekly demand = 50 units
*   Safety Stock = 60 units

Reorder Point (ROP) = (Average weekly demand * Lead Time) + Safety Stock
ROP = (50 units/week * 2 weeks) + 60 units
ROP = 100 units + 60 units = 160 units.

If the inventory on hand drops to 160 units, an order is placed. The order quantity might be the EOQ, let's say it's 200 units.

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - Types of Systems)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - Continuous Review System)
*   Mahadevan, B. (2018). (Chapter on Inventory Management - Continuous Review Systems)

**3.3. Reorder Level (ROL) / Reorder Point (ROP)**

**Definition:** The specific inventory level that, when reached, triggers the placement of a new order.

*   **Purpose:** To ensure that new inventory arrives before the current stock is depleted.
*   **Calculation:**
    `Reorder Level = (Average Daily Demand × Lead Time in Days) + Safety Stock`
    Or, more generally:
    `Reorder Level = (Average Demand during Lead Time) + Safety Stock`

*   **Components:**
    *   **Demand during Lead Time:** The expected demand for the item during the time it takes for a new order to arrive after it's placed.
    *   **Safety Stock:** Extra inventory held to protect against uncertainties in demand and/or lead time.

**Calculating Safety Stock:**
Safety stock is typically determined based on the desired service level (the probability of not stocking out).
A common formula using the normal distribution:
`Safety Stock = Z × σ_dLT`
Where:
*   `Z` = Z-score corresponding to the desired service level (e.g., for 95% service level, Z ≈ 1.65).
*   `σ_dLT` = Standard deviation of demand during lead time.
    *   If demand is constant and lead time is constant, safety stock is not needed.
    *   If demand varies and lead time is constant: `σ_dLT = σ_d × √L` (where `σ_d` is standard deviation of daily demand).
    *   If demand is constant and lead time varies: `σ_dLT = D × σ_L` (where `D` is daily demand, `σ_L` is standard deviation of lead time).
    *   If both vary: `σ_dLT = √((L × σ_d^2) + (D^2 × σ_L^2))`

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Inventory Control - Reorder Level)
*   Paneerselvam, R. (2012). (Chapter on Inventory Management - Reorder Level)
*   Mahadevan, B. (2018). (Chapter on Inventory Management - Reorder Point)

---

### 4. Just-In-Time (JIT)

**Key Concept:** JIT is a production strategy that aims to produce goods or deliver services only when they are needed. It's a philosophy of continuous improvement and waste elimination.

**Core Principles:**
*   **Elimination of Waste (Muda):** Identifying and removing activities that do not add value from the customer's perspective. Types of waste include:
    *   Overproduction
    *   Waiting
    *   Transportation
    *   Inventory
    *   Motion
    *   Over-processing
    *   Defects
*   **Pull System:** Production is driven by customer demand. Items are produced only when the next stage in the process requests them.
*   **Small Lot Sizes:** Producing in smaller quantities reduces lead times, WIP, and allows for quicker detection of defects.
*   **Continuous Improvement (Kaizen):** Ongoing efforts to improve processes, quality, and efficiency.
*   **Employee Involvement:** Empowering employees to identify and solve problems.
*   **Strong Supplier Relationships:** Collaborating closely with reliable suppliers for timely and high-quality material delivery.
*   **Low Inventory:** Minimizing raw material, WIP, and finished goods inventory.

**Benefits:**
*   Reduced inventory holding costs.
*   Improved quality (defects are identified and fixed quickly).
*   Shorter lead times.
*   Increased flexibility.
*   Reduced space requirements.
*   Increased productivity.

**Challenges/Requirements for JIT Implementation:**
*   Reliable suppliers and consistent quality of materials.
*   Stable demand or highly flexible production system.
*   Well-maintained equipment (Total Productive Maintenance - TPM).
*   Highly skilled and cross-trained workforce.
*   Efficient plant layout.
*   Strong communication and trust.

**Relevance to Course Outcomes:**
*   **CO3:** Identify the framework of lean and agile manufacturing. (JIT is a core component of Lean Manufacturing). (K2)

**Referenced Textbooks:**
*   Telsang, M. T. (2018). (Chapter on Just-In-Time)
*   Paneerselvam, R. (2012). (Chapter on Just-In-Time)
*   Mahadevan, B. (2018). (Chapter on Lean Manufacturing and JIT)
*   Devadasan, S. R., et al. (2012). *Lean and Agile Manufacturing*. (Focus on JIT principles).

---

### 5. Supply Chain Management (SCM)

**Key Concept:** SCM is the broad set of activities required to plan, control, and operate a supply chain, in both manufacturing and service organizations. It encompasses planning and execution of all activities involved in sourcing and procurement, conversion, and all logistics management activities. Critically, it includes coordination and collaboration with channel partners, which can be suppliers, intermediaries, third-party service providers, and customers. In essence, SCM integrates supply and demand management across companies.

**Key Components of a Supply Chain:**
1.  **Planning:** Strategy and decision-making to manage resources.
2.  **Sourcing:** Selecting suppliers, negotiating contracts, and managing supplier relationships.
3.  **Making/Manufacturing:** Designing, producing, and assembling products.
4.  **Delivering/Logistics:** Managing orders, warehousing, transportation, and distribution.
5.  **Returning:** Handling customer returns, repairs, and warranties.

**Objectives of SCM:**
*   **Customer Satisfaction:** Delivering the right product, to the right place, at the right time, at the right cost.
*   **Cost Reduction:** Optimizing the entire chain to minimize costs.
*   **Efficiency and Responsiveness:** Improving speed and agility.
*   **Risk Management:** Identifying and mitigating potential disruptions.
*   **Collaboration and Integration:** Building strong relationships with supply chain partners.

**Key SCM Strategies:**
*   **Lean Supply Chains:** Focus on minimizing waste and maximizing efficiency, similar to JIT principles.
*   **Agile Supply Chains:** Focus on responsiveness and flexibility to handle rapidly changing demand or product variety.
*   **Leagile Supply Chains:** A hybrid approach that uses lean principles up to a certain point (e.g., postponement strategy) and then switches to agile principles.

**Relationship with other concepts:**
*   **JIT:** A crucial operational strategy that significantly impacts and is enabled by effective supply chain management. Close coordination with suppliers is vital for JIT to succeed.
*   **Inventory Control:** SCM aims to optimize inventory levels across the entire chain, not just within a single organization.

**Relevance to Course Outcomes:**
*   **CO1:** Implement various tools and techniques in industrial engineering (SCM involves many IE tools). (K3)
*   **CO3:** Identify the framework of lean and agile manufacturing (SCM underpins these frameworks). (K2)

**Referenced Textbooks:**
*   Krajewski, L. J., et al. (2019). *Operations Management: Processes and Supply Chains*. (Dedicated sections on Supply Chain Management).
*   Mahadevan, B. (2018). (Chapter on Supply Chain Management).
*   Paneerselvam, R. (2012). (Chapter on Supply Chain Management).

---

### 6. Practice Questions and Exercises

**Question 1 (ABC Analysis):**
A company has the following inventory items with their annual consumption and unit cost:
| Item | Annual Demand | Unit Cost ($) | Annual Consumption Value ($) |
| :--- | :------------ | :------------ | :--------------------------- |
| A    | 100           | 50            | 5000                         |
| B    | 500           | 10            | 5000                         |
| C    | 2000          | 2             | 4000                         |
| D    | 1000          | 3             | 3000                         |
| E    | 5000          | 0.5           | 2500                         |

Classify these items into A, B, and C categories based on their annual consumption value. (Assume A: Top 20% value, C: Bottom 40% value).

**Answer 1:**
First, calculate the total annual consumption value: 5000 + 5000 + 4000 + 3000 + 2500 = $19,500.

*   **Sort items by value in descending order:**
    *   A: $5000
    *   B: $5000
    *   C: $4000
    *   D: $3000
    *   E: $2500

*   **Determine category cutoffs:**
    *   Top 20% of value: 0.20 * $19,500 = $3900. Items contributing to this are A and B.
    *   Bottom 40% of value: 0.40 * $19,500 = $7800. Items contributing to this are D and E.

*   **Classification:**
    *   **Class A:** Items A and B (since they account for the highest value, $10,000, exceeding the $3900 threshold).
    *   **Class C:** Items D and E (since they account for the lowest value, $5500, exceeding the $7800 threshold for bottom 40% is a bit ambiguous here due to ties and distribution. A more practical approach is to take the lowest value items. Let's recalculate more precisely)
        *   A: $5000 (5000/19500 = 25.6%)
        *   B: $5000 (5000/19500 = 25.6%)
        *   C: $4000 (4000/19500 = 20.5%)
        *   D: $3000 (3000/19500 = 15.4%)
        *   E: $2500 (2500/19500 = 12.8%)

    Let's assume more typical ABC distribution percentages:
    *   Class A: Highest 70-80% value. Items A and B together are 51.2% of value. Item C brings it to 71.7%. So, A, B, C are Class A.
    *   Class B: Next 15-25% value. Item D is 15.4%. So, D is Class B.
    *   Class C: Lowest 5-10% value. Item E is 12.8%. This is a bit high for Class C.

    **Revised Practical Classification (aiming for ~20% items in A, ~30% in B, ~50% in C):**
    *   Items A & B: Value = $10,000 (51.3%). These are the highest value items. Let's call them **Class A**.
    *   Item C: Value = $4000 (20.5%). This falls in the middle. Let's call it **Class B**.
    *   Items D & E: Value = $5500 (28.2%). These are the lowest value items. Let's call them **Class C**.

    **Final Answer based on typical guidelines (though exact percentages can vary):**
    *   **Class A:** Item A, Item B
    *   **Class B:** Item C
    *   **Class C:** Item D, Item E

---

**Question 2 (Reorder Level):**
A company needs to maintain an inventory of a certain component.
*   Average daily demand = 15 units.
*   Lead time for delivery = 4 days.
*   Standard deviation of daily demand = 3 units.
*   Desired service level = 95%.

Calculate the Reorder Level.

**Answer 2:**
1.  **Calculate demand during lead time:**
    Demand during Lead Time = Average Daily Demand × Lead Time
    = 15 units/day × 4 days = 60 units.

2.  **Calculate Safety Stock:**
    *   For a 95% service level, the Z-score is approximately 1.65.
    *   The standard deviation of demand during lead time (`σ_dLT`) is calculated assuming constant lead time:
        `σ_dLT = σ_d × √L`
        `σ_dLT = 3 units/√day × √4 days`
        `σ_dLT = 3 × 2 = 6 units`.
    *   Safety Stock = Z × `σ_dLT`
        Safety Stock = 1.65 × 6 units = 9.9 units.
        (We usually round up safety stock, so let's use 10 units).

3.  **Calculate Reorder Level:**
    Reorder Level = Demand during Lead Time + Safety Stock
    Reorder Level = 60 units + 10 units = 70 units.

**Answer:** The Reorder Level is 70 units.

---

**Question 3 (P vs. Q System):**
Explain the key differences between a P system and a Q system of inventory control. Provide a scenario where each system might be preferred.

**Answer 3:**

| Feature           | P System (Periodic Review)                               | Q System (Continuous Review)                                |
| :---------------- | :------------------------------------------------------- | :---------------------------------------------------------- |
| **Review Frequency** | Fixed (e.g., weekly, monthly)                            | Continuous                                                  |
| **Order Quantity** | Variable (orders up to a target level)                   | Fixed (e.g., EOQ)                                           |
| **Inventory Level**| Monitored at fixed intervals                             | Monitored continuously                                      |
| **When Order is Placed** | When the periodic review occurs                          | When inventory level drops to the Reorder Point (ROP)         |
| **Safety Stock**  | Typically higher (covers demand during review period + lead time) | Typically lower (covers demand only during lead time)       |
| **Record Keeping**| Less demanding for inventory levels, more for order processing | More demanding for continuous inventory tracking            |
| **Suitability**   | When multiple items from one supplier are ordered together, or when physical checks are done periodically. | When continuous monitoring is feasible, and minimizing inventory is a priority. |

**Scenario Preferences:**

*   **P System Preferred:** A company that receives consolidated shipments of various components from a single supplier every Friday. It's more efficient to check inventory levels and place one large order on Friday for all needed items than to monitor each item continuously and place individual orders.
*   **Q System Preferred:** A high-value, critical component with fluctuating demand. Continuous monitoring allows for immediate replenishment when the reorder point is hit, minimizing the risk of stockouts, and using a fixed order quantity helps in efficient order processing.

---

### 7. Important Points to Remember

*   **Selective Inventory Control:** ABC, VED, FSN, and SDE are tools to prioritize inventory management efforts. Focus on 'A' items, 'V' items, etc.
*   **P vs. Q System:** Understand the core difference: P systems review at fixed intervals with variable order quantities, while Q systems review continuously with fixed order quantities.
*   **Reorder Level:** The trigger point for ordering in a Q system, calculated as Demand during Lead Time + Safety Stock.
*   **Safety Stock:** Crucial for mitigating uncertainty in demand and lead time, directly impacting the service level.
*   **JIT:** A philosophy of waste elimination and producing only what is needed, when it is needed. It requires strong supplier relationships and internal process discipline.
*   **Supply Chain Management:** The overarching strategy for managing the flow of goods, information, and finances from source to customer, integrating all partners. JIT is an operational strategy within an SCM framework.

---

This detailed set of notes should provide a solid foundation for understanding the concepts of inventory control techniques, JIT, and supply chain management as outlined in Module 2 of your Industrial and Systems Engineering course. Remember to relate these concepts back to the specific learning outcomes and course outcomes provided.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
