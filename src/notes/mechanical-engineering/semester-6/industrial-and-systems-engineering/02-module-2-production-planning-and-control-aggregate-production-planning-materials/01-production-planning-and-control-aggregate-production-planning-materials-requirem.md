---
title: "Production Planning and Control: Aggregate production planning, materials requirement planning - Inventory Management: EOQ models, discount models,"
subject: "INDUSTRIAL AND SYSTEMS ENGINEERING"
module: "Module 2: Production Planning and Control: Aggregate production planning, materials requirement planning "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf480446373b"
status: "completed"
scrapedAt: "2026-05-20T18:04:15.930Z"
---
# Industrial and Systems Engineering - Module 2: Production Planning and Control

## Topic: Production Planning and Control: Aggregate Production Planning, Materials Requirement Planning - Inventory Management: EOQ Models, Discount Models

### Course Outcomes Addressed:
*   **CO2: Apply inventory control techniques for materials management (Knowledge Level: K3)** - This module directly addresses inventory control techniques like EOQ and discount models.
*   **CO1: Implement various tools and techniques in industrial engineering (Knowledge Level: K3)** - Aggregate Production Planning and MRP are core IE techniques for planning and control.

### Learning Outcomes:
*   Understand the concepts of Aggregate Production Planning (APP).
*   Formulate and solve simple Aggregate Production Planning problems.
*   Understand the concepts of Materials Requirement Planning (MRP).
*   Explain the inputs, outputs, and logic of MRP.
*   Understand the objectives and models of Inventory Management.
*   Explain the assumptions and applications of the Economic Order Quantity (EOQ) model.
*   Calculate the optimal order quantity and reorder point using EOQ.
*   Analyze and apply quantity discount models.

---

## 1. Aggregate Production Planning (APP)

**Definition:** Aggregate Production Planning (APP) is a process of developing a plan for the overall production and workforce levels for the medium term (typically 3 to 18 months). It focuses on matching production capacity with demand at an aggregate level, considering the entire product line or major product groups. The goal is to balance costs, meet demand, and utilize resources efficiently.

**(Reference: Telsang, Chapter 12; Paneerselvam, Chapter 5; Mahadevan, Chapter 4)**

### Key Concepts:
*   **Time Horizon:** Medium-term (3-18 months).
*   **Aggregation:** Products are grouped into families or categories. Demand forecasts are aggregated for these groups.
*   **Variables:** Production rate, workforce level, inventory levels, subcontracting levels.
*   **Costs:** Inventory holding costs, backorder costs, hiring/firing costs, overtime costs, subcontracting costs, regular production costs.
*   **Constraints:** Production capacity, workforce availability, demand requirements, inventory limits.
*   **Objectives:** Minimize total cost, meet demand, maintain stable workforce, meet inventory targets.

### Strategies for APP:
These are general approaches to managing capacity and demand over the planning horizon.

1.  **Chase Strategy:**
    *   **Description:** Adjust production rate and workforce levels to match fluctuating demand.
    *   **Pros:** Minimizes inventory holding costs, low finished goods obsolescence.
    *   **Cons:** High hiring/firing costs, potential for workforce morale issues, requires flexible labor and production facilities.
    *   **Example:** A seasonal toy manufacturer might ramp up production and hire temporary workers before the holiday season and lay off workers afterward.

2.  **Level Strategy (Stable Workforce, Stable Production):**
    *   **Description:** Maintain a constant production rate and workforce level, absorbing demand fluctuations through inventory and backorders.
    *   **Pros:** Stable workforce, predictable production schedule, lower hiring/firing costs.
    *   **Cons:** High inventory holding costs during low demand periods, potential for stockouts or backorders during high demand periods.
    *   **Example:** A basic necessities manufacturer (e.g., food staples) might maintain consistent production year-round, building inventory when demand is low.

3.  **Hybrid Strategies:**
    *   **Description:** Combine elements of chase and level strategies to leverage their advantages and mitigate their disadvantages.
    *   **Example:** Use a stable workforce for a base level of demand and supplement with overtime or temporary workers for demand peaks.

### APP Inputs:
*   **Demand Forecast:** Aggregated demand for each period in the planning horizon.
*   **Capacity Information:** Production capacity per unit of time (e.g., units per day, units per month) for regular time, overtime, subcontracting.
*   **Cost Data:** Costs associated with production, inventory holding, backorders, hiring, firing, overtime, and subcontracting.
*   **Beginning Inventory:** Current inventory levels.
*   **Resource Constraints:** Limitations on labor hours, machine availability, etc.

### APP Outputs:
*   **Production Plan:** Quantity to produce each period.
*   **Workforce Level:** Number of workers to employ each period.
*   **Inventory Levels:** Expected inventory at the end of each period.
*   **Subcontracting Plan:** Quantity to subcontract each period.

### Example of APP Formulation (Simple Method - Graphical or Tabular):

**Problem:** A company needs to produce a product over 4 months. Demand, regular production capacity (8-hour shifts, 5 days/week), workforce, and costs are given.

**Data:**
*   **Demand:** Month 1: 1000 units, Month 2: 1200 units, Month 3: 1500 units, Month 4: 1300 units
*   **Regular Production Capacity:** 200 units/day
*   **Working Days:** Month 1: 20 days, Month 2: 22 days, Month 3: 21 days, Month 4: 23 days
*   **Regular Production per Worker:** 10 units/day (assuming 1 worker produces 10 units/day at current capacity)
*   **Initial Workforce:** 20 workers
*   **Costs:**
    *   Regular Production Cost: $10/unit
    *   Inventory Holding Cost: $2/unit/month
    *   Hiring Cost: $200/worker
    *   Firing Cost: $300/worker
    *   Overtime Cost: $15/unit (20% premium on regular cost)
    *   Subcontracting Cost: $25/unit (higher than regular production)

**Objective:** Minimize total cost.

**Solution Approach (Conceptual - detailed calculation requires a solver or specific technique):**

1.  **Calculate Available Regular Production:**
    *   Month 1: 200 units/day * 20 days = 4000 units
    *   Month 2: 200 units/day * 22 days = 4400 units
    *   Month 3: 200 units/day * 21 days = 4200 units
    *   Month 4: 200 units/day * 23 days = 4600 units

2.  **Calculate Production Capacity per Worker:**
    *   Total regular capacity / initial workforce = 4000 units / 20 workers = 200 units/worker/month (Month 1).
    *   Or, if assuming 1 worker produces 10 units/day: 10 units/day * 20 days = 200 units/worker/month.

3.  **Consider Strategies:**

    *   **Chase Strategy:**
        *   Month 1: Produce 1000 units. Need 1000 / 200 = 5 workers. If starting with 20, fire 15 workers. Cost = (5 * $10 * 1000) + (15 * $300) + Inventory=0.
        *   Month 2: Produce 1200 units. Need 1200 / 200 = 6 workers. Hire 1 worker. Cost = (6 * $10 * 1200) + (1 * $200) + ...
        *   This becomes complex with inventory.

    *   **Level Strategy:**
        *   Total Demand: 1000 + 1200 + 1500 + 1300 = 5000 units
        *   Total Available Production (Month 1): 4000 units. Need to produce 5000/4 = 1250 units/month on average.
        *   Let's try producing 1250 units/month.
        *   Month 1: Produce 1250. Demand 1000. Inventory = 250. Cost = (1250 * $10) + (250 * $2)
        *   Month 2: Produce 1250. Demand 1200. Inventory = 250 + 1250 - 1200 = 300. Cost = (1250 * $10) + (300 * $2)
        *   This also needs careful consideration of workforce and capacity.

**Note:** Solving APP problems precisely often involves linear programming or more advanced techniques. For this level, understanding the trade-offs between strategies and the cost components is crucial.

---

## 2. Materials Requirement Planning (MRP)

**Definition:** Materials Requirement Planning (MRP) is a computerized inventory management and production planning system. It calculates the materials and components needed to produce a product and determines when these materials must be ordered or manufactured. MRP systems are designed to ensure that materials are available for production and products are available for customers, while minimizing inventory levels.

**(Reference: Telsang, Chapter 14; Paneerselvam, Chapter 6; Mahadevan, Chapter 5)**

### Key Concepts:
*   **Dependent Demand:** Demand for an item that is directly related to the demand for another item. For example, the demand for car tires depends on the demand for cars.
*   **Independent Demand:** Demand for an item that is not directly related to the demand for other items. This is usually for finished goods.
*   **Bill of Materials (BOM):** A structured list of all the raw materials, components, subassemblies, assemblies, and quantities of each needed to manufacture an item. It represents the product structure.
*   **Master Production Schedule (MPS):** A statement of what products will be produced, in what quantities, and when. It specifies the planned production of end items.
*   **Inventory Records:** Detailed information about the current inventory status for each item, including on-hand quantity, scheduled receipts, and lead times.
*   **Time-Phased:** MRP operates on a time-phased basis, meaning it plans requirements for specific future time periods.

### MRP Inputs:
1.  **Master Production Schedule (MPS):**
    *   Specifies the planned production of end items (what, how much, when).
    *   Driven by forecasts and actual customer orders.
    *   Operates at the product or product-family level.

2.  **Bill of Materials (BOM):**
    *   Defines the "recipe" for producing an item.
    *   Hierarchical structure (e.g., Product A requires 2 of Component B and 1 of Subassembly C; Component B requires 3 of Part D).
    *   Key information: item number, quantity per assembly, manufacturing or purchasing lead time.

3.  **Inventory Records File (IRF):**
    *   Tracks the status of each item in the inventory system.
    *   Information includes:
        *   On-hand inventory
        *   Scheduled receipts (orders already placed but not yet received)
        *   Safety stock
        *   Lead time
        *   Lot size (how many are ordered at a time)
        *   Backorders

### MRP Processing Logic:
MRP uses a "pull" system. It takes the MPS for an end item, "explodes" the BOM to determine the requirements for its components, and then "nets" these requirements against available inventory and scheduled receipts to determine when to place orders for those components. This process is repeated for each level of the BOM, working backward in time based on lead times.

**Steps:**
1.  **Gross Requirements:** Total demand for an item in a specific period.
2.  **Scheduled Receipts:** Orders already placed and due to arrive in specific periods.
3.  **Projected Available Balance:** On-hand inventory at the beginning of a period + scheduled receipts - gross requirements.
4.  **Net Requirements:** The actual quantity that needs to be produced or procured in a period, calculated as: `Net Requirements = Gross Requirements - (On-hand + Scheduled Receipts)`. If the result is negative or zero, no order is needed. If it's positive, an order is required.
5.  **Planned Order Release:** The quantity of an item to be ordered or produced, offset by its lead time to determine when the order should be released. `Planned Order Release = Net Requirements`. The release date is `Period of Net Requirement - Lead Time`.
6.  **Planned Order Receipts:** The quantity of an item that needs to be received in a specific period. `Planned Order Receipts = Planned Order Release`.

### MRP Outputs:
*   **Planned Order Schedules:** What orders need to be placed or released, for what quantities, and when.
*   **Rescheduling Notices:** Changes to existing orders (e.g., expediting or delaying).
*   **Exception Reports:** Alerts for unusual conditions (e.g., inventory shortages, order timing issues).

### Example of MRP Calculation:

**Item A (End Item)**
*   **MPS:**
    *   Week 1: 50 units
    *   Week 3: 70 units
    *   Week 5: 60 units
*   **BOM for A:**
    *   A requires 2 of Component B
    *   A requires 1 of Subassembly C
*   **Lead Time for A:** 1 week
*   **Lot Size for A:** Lot-for-Lot (produce exactly what's needed)
*   **Inventory:** 0 units

**Component B**
*   **BOM for B:**
    *   B requires 3 of Part D
*   **Lead Time for B:** 2 weeks
*   **Lot Size for B:** Order in multiples of 10 (e.g., 10, 20, 30...)
*   **Inventory:** 0 units

**Part D**
*   **Lead Time for D:** 1 week
*   **Lot Size for D:** Order in multiples of 5 (e.g., 5, 10, 15...)
*   **Inventory:** 5 units

---

**MRP Explosion for Component B (from MPS of A):**

**Gross Requirements for B:**
*   A needs 2 B for week 1. MPS is 50 units of A. Gross Req. for B = 50 * 2 = 100 units in Week 1.
*   A needs 2 B for week 3. MPS is 70 units of A. Gross Req. for B = 70 * 2 = 140 units in Week 3.
*   A needs 2 B for week 5. MPS is 60 units of A. Gross Req. for B = 60 * 2 = 120 units in Week 5.

**MRP Calculation for Component B:**

| Week                | 1   | 2   | 3   | 4   | 5   | 6   |
| :------------------ | :-- | :-- | :-- | :-- | :-- | :-- |
| **Gross Req. for B** | 100 | -   | 140 | -   | 120 | -   |
| **Scheduled Rec.**  | -   | -   | -   | -   | -   | -   |
| **Projected Avail** | 0   | 0   | 0   | 0   | 0   | 0   |
| **Net Req. for B**  | 100 | -   | 140 | -   | 120 | -   |
| **Lot Size Rule**   | N/A | N/A | N/A | N/A | N/A | N/A |
| **Planned Order Rec**| -   | -   | -   | -   | -   | -   |
| **Lead Time (B)**   | 2   |     |     |     |     |     |
| **Planned Order Rel**| -   | 100 | -   | 140 | -   | 120 |

*   **Week 1:** Net Req = 100. Lot size is multiples of 10. Planned Order Receipt = 100 units in Week 1. Planned Order Release = Week 1 - 2 weeks = Week -1. (This means it should have been ordered already). Let's assume the planning starts from Week 1 and we need to plan for future orders.

Let's re-frame the example to make it clearer:

**Item A (End Item)**
*   **MPS:**
    *   Week 1: 50 units
    *   Week 3: 70 units
    *   Week 5: 60 units
*   **BOM for A:**
    *   A requires 2 of Component B
    *   A requires 1 of Subassembly C
*   **Lead Time for A:** 1 week
*   **Lot Size for A:** Lot-for-Lot
*   **Inventory:** 0 units

**Component B**
*   **BOM for B:**
    *   B requires 3 of Part D
*   **Lead Time for B:** 2 weeks
*   **Lot Size for B:** Order in multiples of 10
*   **Inventory:** 50 units
*   **Scheduled Receipt:** 100 units due in Week 2

**Part D**
*   **Lead Time for D:** 1 week
*   **Lot Size for D:** Order in multiples of 5
*   **Inventory:** 20 units

---

**MRP Explosion for Component B (from MPS of A):**

**Gross Requirements for B:**
*   Week 1: 50 * 2 = 100 units
*   Week 3: 70 * 2 = 140 units
*   Week 5: 60 * 2 = 120 units

**MRP Calculation for Component B:**

| Week                 | 1    | 2    | 3    | 4    | 5    | 6    |
| :------------------- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Gross Req. for B** | 100  | -    | 140  | -    | 120  | -    |
| **Scheduled Rec.**   | -    | 100  | -    | -    | -    | -    |
| **Projected Avail**  | 50   | 150  | 50   | 50   | 50   | 170  |
| **Net Req. for B**   | 50   | -    | 90   | -    | 70   | -    |
| **Lot Size Rule**    | N/A  | N/A  | N/A  | N/A  | N/A  | N/A  |
| **Planned Order Rec**| -    | -    | -    | -    | -    | -    |
| **Lead Time (B)**    | 2    |      |      |      |      |      |
| **Planned Order Rel**| -    | -    | 50   | -    | 90   | -    |

**Explanation of Projected Available:**
*   **Week 1:** Starting Inventory (50) - Gross Req (100) = -50. This creates a Net Requirement of 50.
*   **Week 2:** Projected Avail = Previous period's Projected Avail (-50) + Scheduled Receipt (100) - Gross Req (0) = 50.
*   **Week 3:** Projected Avail = Previous period's Projected Avail (50) + Scheduled Receipt (0) - Gross Req (140) = -90. This creates a Net Requirement of 90.
*   **Week 4:** Projected Avail = Previous period's Projected Avail (-90) + Scheduled Receipt (0) - Gross Req (0) = -90. Oops, there was a mistake in the manual calculation. Let's re-do projected available and net requirements properly.

**Corrected MRP Calculation for Component B:**

| Week                 | 1    | 2    | 3    | 4    | 5    | 6    |
| :------------------- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Gross Req. for B** | 100  | -    | 140  | -    | 120  | -    |
| **Scheduled Rec.**   | -    | 100  | -    | -    | -    | -    |
| **Beginning Inv**    | 50   | 0    | 50   | 0    | 50   | 120  |
| **Available + SR**   | 50   | 100  | 50   | 0    | 50   | 120  |
| **Net Req. for B**   | 50   | -    | 90   | -    | 70   | -    |
| **Lot Size Rule**    | N/A  | N/A  | N/A  | N/A  | N/A  | N/A  |
| **Planned Order Rec**| -    | -    | -    | -    | -    | -    |
| **Lead Time (B)**    | 2    |      |      |      |      |      |
| **Planned Order Rel**| -    | -    | 50   | -    | 90   | -    |

**Explanation of Corrected Calculation:**
*   **Week 1:** Beginning Inv (50). Available + SR = 50. Gross Req = 100. Net Req = 100 - 50 = 50.
*   **Week 2:** Beginning Inv = Available + SR from Week 1 - Gross Req from Week 1 = 50 - 100 = -50. However, projected available cannot be negative. If it goes negative, it means an order is needed. Let's use the standard formulation: Projected Available = Beginning Inv + Scheduled Receipts - Gross Requirements.
    *   **Week 1:** Projected Available = 50 (Inv) - 100 (GR) = -50. Net Requirement = 50.
    *   **Week 2:** Projected Available = -50 (Prev. Projected) + 100 (SR) - 0 (GR) = 50.
    *   **Week 3:** Projected Available = 50 (Prev. Projected) + 0 (SR) - 140 (GR) = -90. Net Requirement = 90.
    *   **Week 4:** Projected Available = -90 (Prev. Projected) + 0 (SR) - 0 (GR) = -90. Net Requirement = 90.
    *   **Week 5:** Projected Available = -90 (Prev. Projected) + 0 (SR) - 120 (GR) = -210. Net Requirement = 210.

This is getting complicated because lot sizing and negative projected availability handling need to be done correctly. Let's use a more structured table format.

**Corrected MRP Calculation for Component B (with Lot Sizing and proper tracking):**

| Item: Component B | Lead Time: 2 Weeks | Lot Size: Multiples of 10 |
| :---------------- | :----------------- | :------------------------ |
| **Time Period**   | **1**              | **2**                     | **3**     | **4** | **5** | **6** |
| **Gross Req.**    | 100                | -                         | 140       | -     | 120   | -     |
| **Scheduled Rec.**| -                  | 100                       | -         | -     | -     | -     |
| **On Hand Inv.**  | 50                 | -                         | -         | -     | -     | -     |
| **Projected Avail**| 50 - 100 = -50     | -50 + 100 - 0 = 50        | 50 - 140 = -90| -90 - 0 = -90 | -90 - 120 = -210| -210 - 0 = -210 |
| **Net Req.**      | 50                 | -                         | 90        | 90    | 210   | 210   |
| **Lot Size Proc.**| Round up to 50     | -                         | Round up to 90| Round up to 90| Round up to 210| Round up to 210|
| **Planned Order Rec**| -                  | -                         | 50        | 90    | 210   | 210   |
| **Planned Order Rel**| -                  | -                         | -         | 50    | 90    | 210   |

*   **Time Period 1:**
    *   Gross Req = 100. On Hand Inv = 50. Projected Avail = 50 - 100 = -50. Net Req = 50.
    *   Lot Size: Round up to 50 (to cover 50 net req and be a multiple of 10).
    *   Planned Order Receipt: 50 units. This order must be released 2 weeks prior.

*   **Time Period 2:**
    *   Projected Avail (from end of Period 1) = -50. Scheduled Receipt = 100. Gross Req = 0. Projected Avail = -50 + 100 - 0 = 50. Net Req = 0.
    *   No new order needed.

*   **Time Period 3:**
    *   Projected Avail (from end of Period 2) = 50. Scheduled Receipt = 0. Gross Req = 140. Projected Avail = 50 - 140 = -90. Net Req = 90.
    *   Lot Size: Round up to 90 (to cover 90 net req and be a multiple of 10).
    *   Planned Order Receipt: 90 units. This order must be released 2 weeks prior.

*   **Time Period 4:**
    *   Projected Avail = -90 + 0 - 0 = -90. Net Req = 90.
    *   Lot Size: Round up to 90.
    *   Planned Order Receipt: 90 units. Released 2 weeks prior.

*   **Time Period 5:**
    *   Projected Avail = -90 - 120 = -210. Net Req = 210.
    *   Lot Size: Round up to 210.
    *   Planned Order Receipt: 210 units. Released 2 weeks prior.

*   **Time Period 6:**
    *   Projected Avail = -210 - 0 = -210. Net Req = 210.
    *   Lot Size: Round up to 210.
    *   Planned Order Receipt: 210 units. Released 2 weeks prior.

**Final Planned Order Releases for Component B:**
*   Release 50 units in Week 1 (for receipt in Week 3).
*   Release 90 units in Week 2 (for receipt in Week 4).
*   Release 210 units in Week 3 (for receipt in Week 5).
*   Release 210 units in Week 4 (for receipt in Week 6).

---

**MRP Explosion for Part D (from Planned Order Receipts of B):**

**Gross Requirements for D (based on B's requirements):**
*   B needs 3 D for each unit of B.
*   Week 3: B needs 50 units. D requires 50 * 3 = 150 units.
*   Week 4: B needs 90 units. D requires 90 * 3 = 270 units.
*   Week 5: B needs 210 units. D requires 210 * 3 = 630 units.
*   Week 6: B needs 210 units. D requires 210 * 3 = 630 units.

**MRP Calculation for Part D:**

| Item: Part D      | Lead Time: 1 Week | Lot Size: Multiples of 5 |
| :---------------- | :---------------- | :----------------------- |
| **Time Period**   | **1**             | **2**                    | **3**  | **4**  | **5**  | **6**  |
| **Gross Req.**    | -                 | -                        | 150    | 270    | 630    | 630    |
| **Scheduled Rec.**| -                 | -                        | -      | -      | -      | -      |
| **On Hand Inv.**  | 20                | -                        | -      | -      | -      | -      |
| **Projected Avail**| 20 - 0 = 20       | 20 - 0 = 20              | 20 - 150 = -130 | -130 - 270 = -400| -400 - 630 = -1030| -1030 - 630 = -1660|
| **Net Req.**      | -                 | -                        | 130    | 400    | 1030   | 1660   |
| **Lot Size Proc.**| -                 | -                        | Round up to 130| Round up to 400| Round up to 1030| Round up to 1660|
| **Planned Order Rec**| -                 | -                        | -      | -      | -      | -      |
| **Planned Order Rel**| -                 | 130                      | 400    | 1030   | 1660   | -      |

**Final Planned Order Releases for Part D:**
*   Release 130 units in Week 2 (for receipt in Week 3).
*   Release 400 units in Week 3 (for receipt in Week 4).
*   Release 1030 units in Week 4 (for receipt in Week 5).
*   Release 1660 units in Week 5 (for receipt in Week 6).

---

## 3. Inventory Management: EOQ Models

**Definition:** Inventory management is the process of efficiently overseeing the constant flow of units into and out of an existing inventory. This includes managing the purchase, storage, utilization, and sale of inventory. The goal is to maintain optimal inventory levels to meet demand, minimize costs, and avoid stockouts or excess inventory.

**(Reference: Telsang, Chapter 16; Paneerselvam, Chapter 9; Mahadevan, Chapter 6)**

### Objectives of Inventory Management:
*   **Ensure availability of materials:** Meet production schedules and customer demand.
*   **Minimize costs:**
    *   **Ordering/Setup Costs:** Costs incurred each time an order is placed or a production run is set up.
    *   **Holding/Carrying Costs:** Costs associated with storing inventory (storage space, insurance, obsolescence, spoilage, capital tied up).
    *   **Stockout Costs:** Costs incurred due to not having inventory when needed (lost sales, production delays, backorder penalties).
*   **Improve efficiency:** Reduce working capital tied up in inventory.
*   **Anticipate demand fluctuations:** Buffer against uncertainty.

### Economic Order Quantity (EOQ) Model

**Definition:** The Economic Order Quantity (EOQ) model is a foundational inventory management technique used to determine the optimal order quantity that minimizes the total inventory costs (ordering costs + holding costs).

**(Reference: Telsang, Chapter 16; Paneerselvam, Chapter 9; Mahadevan, Chapter 6)**

### Assumptions of the Basic EOQ Model:
1.  **Constant Demand:** The demand rate for the item is constant and known over the planning period.
2.  **Constant Lead Time:** The lead time between placing an order and receiving it is constant and known.
3.  **Instantaneous Replenishment:** Inventory is received in one batch immediately after an order is placed.
4.  **Constant Ordering Cost:** The cost per order is constant, regardless of the order size.
5.  **Constant Holding Cost:** The cost to hold one unit of inventory for a specific period (e.g., a year) is constant.
6.  **No Stockouts:** The model assumes that demand can always be met, meaning no stockouts occur.
7.  **Single Item:** The model is applied to a single item at a time.

### EOQ Formula:

$Q = \sqrt{\frac{2DS}{H}}$

Where:
*   $Q$ = Economic Order Quantity (units per order)
*   $D$ = Annual demand (units per year)
*   $S$ = Ordering cost per order ($/order)
*   $H$ = Annual holding cost per unit ($/unit/year)

### Total Cost Function:
Total Cost ($TC$) = Ordering Cost + Holding Cost

$TC = \frac{D}{Q} \times S + \frac{Q}{2} \times H$

*   $\frac{D}{Q} \times S$: Annual ordering cost (Number of orders per year * Cost per order)
*   $\frac{Q}{2} \times H$: Annual holding cost (Average inventory level * Holding cost per unit)

**Important Point:** The EOQ is the point where annual ordering costs equal annual holding costs.

### Reorder Point (ROP):

**Definition:** The Reorder Point (ROP) is the inventory level at which a new order should be placed to replenish stock.

**ROP Formula (with no lead time demand variability):**

$ROP = d \times L$

Where:
*   $d$ = Demand rate per unit of time (e.g., units per day)
*   $L$ = Lead time in the same unit of time (e.g., days)

**Example Calculation:**

A company uses 1,000 units of a component per year. The ordering cost is $50 per order, and the holding cost is $5 per unit per year. The lead time is 10 days. Assume 300 working days per year.

1.  **Calculate EOQ:**
    *   $D = 1000$ units/year
    *   $S = \$50$/order
    *   $H = \$5$/unit/year
    *   $Q = \sqrt{\frac{2 \times 1000 \times 50}{5}} = \sqrt{\frac{100000}{5}} = \sqrt{20000} \approx 141.42$ units
    *   **Optimal Order Quantity (EOQ) = 142 units** (rounding up is generally safer)

2.  **Calculate Number of Orders per Year:**
    *   Number of Orders = $D / Q = 1000 / 142 \approx 7.04$ orders/year

3.  **Calculate Total Annual Cost:**
    *   Ordering Cost = (Number of Orders) * S = $7.04 \times \$50 \approx \$352$
    *   Holding Cost = (Q/2) * H = $(142 / 2) \times \$5 = 71 \times \$5 = \$355$
    *   **Total Annual Cost $\approx \$352 + \$355 = \$707$**
    *   *(Note: If we used Q=141.42, ordering cost and holding cost would be exactly equal at $353.55)*

4.  **Calculate Reorder Point (ROP):**
    *   Daily Demand ($d$) = Annual Demand / Working Days = $1000 / 300 \approx 3.33$ units/day
    *   Lead Time ($L$) = 10 days
    *   $ROP = d \times L = 3.33 \text{ units/day} \times 10 \text{ days} = 33.3$ units
    *   **Reorder Point = 34 units** (round up to ensure stock is available)

**Important Point:** When the inventory level drops to 34 units, a new order of 142 units should be placed.

---

## 4. Inventory Management: Discount Models

**Definition:** Quantity discount models consider the possibility that suppliers offer lower per-unit prices for larger order quantities. The goal is to find the order quantity that minimizes the total inventory cost, taking into account the purchase price variation.

**(Reference: Telsang, Chapter 16; Paneerselvam, Chapter 9; Mahadevan, Chapter 6)**

### Assumptions of Discount Models:
*   All assumptions of the basic EOQ model apply, except for the constant per-unit purchase price.
*   The discount applies to the entire order quantity, not just the units above a threshold.

### Procedure for Analyzing Quantity Discounts:
1.  **Calculate EOQ for each price break:** For each price level offered by the supplier, calculate the EOQ using the EOQ formula, but using the holding cost ($H$) corresponding to that price. The holding cost is often expressed as a percentage of the item's price (e.g., $H = i \times C$, where $i$ is the annual holding cost percentage and $C$ is the per-unit cost).

2.  **Check feasibility:** If the calculated EOQ for a given price break falls within the quantity range for that price break, it's a feasible EOQ for that price. If the EOQ falls outside the range, the feasible quantity for that price break is the minimum quantity required to qualify for that price.

3.  **Calculate Total Cost (TC) for feasible quantities:** For each feasible quantity (either the calculated EOQ or the minimum quantity for the discount), calculate the total cost using the formula:

    $TC = (D \times C) + (\frac{D}{Q} \times S) + (\frac{Q}{2} \times H)$

    Where:
    *   $D$ = Annual demand
    *   $C$ = Per-unit cost (for that price break)
    *   $Q$ = Order quantity (feasible quantity)
    *   $S$ = Ordering cost per order
    *   $H$ = Annual holding cost per unit (calculated as $i \times C$)

4.  **Compare Total Costs:** Select the order quantity that results in the minimum total annual cost.

### Example Calculation for Quantity Discounts:

A company needs 1,000 units of a product per year.
*   Ordering cost ($S$) = $50 per order.
*   Annual holding cost percentage ($i$) = 20% of the unit cost.

Supplier offers the following price structure:
*   **Price A:** $10 per unit for quantities less than 50 units.
*   **Price B:** $9 per unit for quantities between 50 and 99 units.
*   **Price C:** $8 per unit for quantities of 100 units or more.

**Step 1: Calculate EOQ for each price break.**

*   **Price A ($C_A = \$10$):**
    *   $H_A = i \times C_A = 0.20 \times \$10 = \$2$ per unit/year
    *   $EOQ_A = \sqrt{\frac{2DS}{H_A}} = \sqrt{\frac{2 \times 1000 \times 50}{2}} = \sqrt{\frac{100000}{2}} = \sqrt{50000} \approx 223.6$ units

*   **Price B ($C_B = \$9$):**
    *   $H_B = i \times C_B = 0.20 \times \$9 = \$1.80$ per unit/year
    *   $EOQ_B = \sqrt{\frac{2DS}{H_B}} = \sqrt{\frac{2 \times 1000 \times 50}{1.80}} = \sqrt{\frac{100000}{1.80}} \approx \sqrt{55555.56} \approx 235.7$ units

*   **Price C ($C_C = \$8$):**
    *   $H_C = i \times C_C = 0.20 \times \$8 = \$1.60$ per unit/year
    *   $EOQ_C = \sqrt{\frac{2DS}{H_C}} = \sqrt{\frac{2 \times 1000 \times 50}{1.60}} = \sqrt{\frac{100000}{1.60}} = \sqrt{62500} = 250$ units

**Step 2: Check feasibility and determine feasible quantities.**

*   **Price A ($10):** Range is < 50. $EOQ_A \approx 223.6$. This is not in the range. The feasible quantity is the minimum of the range that qualifies for this price, which is usually 0 but in practice, we consider the lowest quantity if no minimum is specified. However, the standard approach is to use the minimum quantity that *qualifies* for the price. Since the range is "less than 50", there's no minimum order quantity specified to get this price. The lowest possible order quantity is typically 1. But to get the discount, we need to be in the range. Let's assume that if EOQ is not in the range, we test the boundary of the range. The *lowest* quantity to qualify for Price A is not explicitly defined, but if we need *any* quantity, it's usually 1. However, since the EOQ is much higher, we need to check the boundary where the price *changes*. The relevant boundary for Price A is the minimum quantity for Price B (50 units). Let's consider ordering 49 units for Price A.

*   **Price B ($9):** Range is 50 to 99. $EOQ_B \approx 235.7$. This is not in the range. The feasible quantity is the minimum quantity to qualify for this price, which is **50 units**.

*   **Price C ($8):** Range is $\ge 100$. $EOQ_C = 250$. This is in the range. The feasible quantity is **250 units**.

Now, we need to evaluate the total cost at the feasible quantities identified: 49 (for Price A), 50 (for Price B), and 250 (for Price C).

**Step 3: Calculate Total Cost (TC) for feasible quantities.**

*   **Quantity Q = 49 units (for Price A = $10$):**
    *   $C = \$10$, $H = \$2$
    *   $TC_A = (1000 \times 10) + (\frac{1000}{49} \times 50) + (\frac{49}{2} \times 2)$
    *   $TC_A = 10000 + (20.41 \times 50) + (24.5 \times 2)$
    *   $TC_A = 10000 + 1020.5 + 49 = \$11,069.50$

*   **Quantity Q = 50 units (for Price B = $9$):**
    *   $C = \$9$, $H = \$1.80$
    *   $TC_B = (1000 \times 9) + (\frac{1000}{50} \times 50) + (\frac{50}{2} \times 1.80)$
    *   $TC_B = 9000 + (20 \times 50) + (25 \times 1.80)$
    *   $TC_B = 9000 + 1000 + 45 = \$10,045.00$

*   **Quantity Q = 250 units (for Price C = $8$):**
    *   $C = \$8$, $H = \$1.60$
    *   $TC_C = (1000 \times 8) + (\frac{1000}{250} \times 50) + (\frac{250}{2} \times 1.60)$
    *   $TC_C = 8000 + (4 \times 50) + (125 \times 1.60)$
    *   $TC_C = 8000 + 200 + 200 = \$8,400.00$

**Step 4: Compare Total Costs.**

*   $TC_A = \$11,069.50$ (for ordering 49 units)
*   $TC_B = \$10,045.00$ (for ordering 50 units)
*   $TC_C = \$8,400.00$ (for ordering 250 units)

The minimum total cost is $8,400.00, which occurs when ordering 250 units at a price of $8 per unit.

**Important Point:** The optimal order quantity is 250 units.

---

### Practice Questions and Answers:

**Question 1 (APP):**
A company is planning its production for the next three months. Demand forecasts are: Month 1: 500 units, Month 2: 700 units, Month 3: 600 units. The company has a stable workforce that can produce 550 units per month. Regular production cost is $10/unit. Inventory holding cost is $1/unit/month. Hiring cost is $100/worker. Firing cost is $150/worker. The workforce can produce 50 units per worker per month. If the company starts with 10 workers, which strategy (Chase or Level) would likely incur lower costs in the short term, assuming minimal inventory carryover and backorders?

**Answer 1:**
*   **Chase Strategy:**
    *   Month 1: Produce 500 units. Need 500/50 = 10 workers. No change. Cost = 500 * $10 = $5000.
    *   Month 2: Produce 700 units. Need 700/50 = 14 workers. Hire 4 workers. Cost = (700 * $10) + (4 * $100) = $7000 + $400 = $7400.
    *   Month 3: Produce 600 units. Need 600/50 = 12 workers. Fire 2 workers. Cost = (600 * $10) + (2 * $150) = $6000 + $300 = $6300.
    *   Total Chase Cost (production + hiring/firing) = $5000 + $7400 + $6300 = $18,700.

*   **Level Strategy (producing average demand):**
    *   Average Demand = (500 + 700 + 600) / 3 = 1800 / 3 = 600 units/month.
    *   Month 1: Produce 600 units. Need 600/50 = 12 workers. Hire 2 workers. Cost = (600 * $10) + (2 * $100) = $6000 + $200 = $6200. Inventory = 0 + 600 - 500 = 100 units. Holding Cost = 100 * $1 = $100. Total Month 1 = $6300.
    *   Month 2: Produce 600 units. Need 12 workers. No change. Cost = 600 * $10 = $6000. Inventory = 100 + 600 - 700 = 0 units. Holding Cost = 0. Total Month 2 = $6000.
    *   Month 3: Produce 600 units. Need 12 workers. No change. Cost = 600 * $10 = $6000. Inventory = 0 + 600 - 600 = 0 units. Holding Cost = 0. Total Month 3 = $6000.
    *   Total Level Cost (production + hiring/firing + holding) = $6300 + $6000 + $6000 = $18,300.

*   **Conclusion:** The Level strategy is likely to incur lower costs ($18,300 vs $18,700) in this short-term scenario due to avoiding firing costs and managing inventory efficiently.

---

**Question 2 (MRP):**
An item has the following MRP data:
*   **Gross Requirements:** Week 1: 100, Week 3: 150, Week 5: 200
*   **On Hand Inventory:** 50 units
*   **Scheduled Receipt:** 100 units due in Week 2
*   **Lead Time:** 2 weeks
*   **Lot Size:** 200 units

What are the planned order receipts for this item?

**Answer 2:**

| Time Period     | 1    | 2    | 3    | 4    | 5    | 6    |
| :-------------- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Gross Req.**  | 100  | -    | 150  | -    | 200  | -    |
| **Scheduled Rec.**| -    | 100  | -    | -    | -    | -    |
| **On Hand Inv.**| 50   | -    | -    | -    | -    | -    |
| **Projected Avail**| 50-100 = -50 | -50+100-0 = 50 | 50-150 = -100 | -100-0 = -100 | -100-200 = -300 | -300-0 = -300 |
| **Net Req.**    | 50   | -    | 100  | 100  | 300  | 300  |
| **Lot Size Proc.**| Round up to 200 | -    | Round up to 200 | Round up to 200 | Round up to 400 | Round up to 400 |
| **Planned Order Rec**| -    | -    | -    | -    | -    | -    |
| **Planned Order Rel**| -    | -    | 200  | 200  | 400  | 400  |

**Planned Order Receipts:**
*   200 units in Week 3 (to cover net requirements in Week 1 and Week 3).
*   200 units in Week 4 (to cover net requirement in Week 4).
*   400 units in Week 5 (to cover net requirements in Week 5 and Week 6).

---

**Question 3 (EOQ):**
An item has an annual demand of 2000 units. The ordering cost is $60 per order, and the holding cost is $8 per unit per year. What is the EOQ, and what is the total annual cost?

**Answer 3:**
*   **Calculate EOQ:**
    *   $D = 2000$ units/year
    *   $S = \$60$/order
    *   $H = \$8$/unit/year
    *   $Q = \sqrt{\frac{2 \times 2000 \times 60}{8}} = \sqrt{\frac{240000}{8}} = \sqrt{30000} \approx 173.2$ units
    *   **EOQ = 174 units** (rounded up)

*   **Calculate Total Annual Cost:**
    *   Ordering Cost = $(\frac{D}{Q}) \times S = (\frac{2000}{174}) \times \$60 \approx 11.49 \times \$60 \approx \$689.40$
    *   Holding Cost = $(\frac{Q}{2}) \times H = (\frac{174}{2}) \times \$8 = 87 \times \$8 = \$696.00$
    *   **Total Annual Cost $\approx \$689.40 + \$696.00 = \$1,385.40$**

---

**Question 4 (Discount Model):**
A company needs 1,500 units per year. Ordering cost is $100 per order. Holding cost is 25% of the unit price.
*   Price $10/unit for < 100 units
*   Price $9/unit for 100-199 units
*   Price $8/unit for >= 200 units

Determine the optimal order quantity and the minimum total cost.

**Answer 4:**

*   **Price 1 ($C_1 = \$10$):**
    *   $H_1 = 0.25 \times \$10 = \$2.50$
    *   $EOQ_1 = \sqrt{\frac{2 \times 1500 \times 100}{2.50}} = \sqrt{\frac{300000}{2.50}} = \sqrt{120000} \approx 346.4$ units.
    *   Range < 100. Not feasible. Feasible quantity: 99 units.
    *   $TC_1 = (1500 \times 10) + (\frac{1500}{99} \times 100) + (\frac{99}{2} \times 2.50) = 15000 + 1515.15 + 123.75 = \$16,638.90$

*   **Price 2 ($C_2 = \$9$):**
    *   $H_2 = 0.25 \times \$9 = \$2.25$
    *   $EOQ_2 = \sqrt{\frac{2 \times 1500 \times 100}{2.25}} = \sqrt{\frac{300000}{2.25}} = \sqrt{133333.33} \approx 365.2$ units.
    *   Range 100-199. Not feasible. Feasible quantity: 100 units (minimum to qualify).
    *   $TC_2 = (1500 \times 9) + (\frac{1500}{100} \times 100) + (\frac{100}{2} \times 2.25) = 13500 + 1500 + 112.5 = \$15,112.50$

*   **Price 3 ($C_3 = \$8$):**
    *   $H_3 = 0.25 \times \$8 = \$2.00$
    *   $EOQ_3 = \sqrt{\frac{2 \times 1500 \times 100}{2.00}} = \sqrt{\frac{300000}{2.00}} = \sqrt{150000} \approx 387.3$ units.
    *   Range >= 200. Feasible. Feasible quantity: 388 units (rounded EOQ).
    *   $TC_3 = (1500 \times 8) + (\frac{1500}{388} \times 100) + (\frac{388}{2} \times 2.00) = 12000 + 386.59 + 388 = \$12,774.59$

**Comparison:**
*   $TC_1 = \$16,638.90$ (order 99 units)
*   $TC_2 = \$15,112.50$ (order 100 units)
*   $TC_3 = \$12,774.59$ (order 388 units)

**Conclusion:** The optimal order quantity is 388 units, and the minimum total cost is $12,774.59.

---

### Important Points to Remember:
*   **APP** deals with medium-term planning of aggregated product groups, balancing capacity and demand using strategies like chase or level.
*   **MRP** is a system for planning dependent demand items based on MPS, BOM, and inventory records. It explodes BOMs and nets requirements against available inventory.
*   **EOQ** minimizes the sum of ordering and holding costs by finding the optimal order quantity.
*   **ROP** signals when to place a new order to avoid stockouts, considering lead time demand.
*   **Quantity Discount Models** require evaluating total costs at feasible order quantities (often the EOQ or the boundary of the discount range) to find the overall minimum cost.
*   Understanding the assumptions behind each model is crucial for their correct application.

---
This comprehensive study material covers Aggregate Production Planning, Materials Requirement Planning, and Inventory Management techniques like EOQ and Discount Models, aligning with the provided learning outcomes and course outcomes. The examples and practice questions are designed to reinforce understanding at a K3 level for practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
