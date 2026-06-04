---
title: "Aggregating Multiple Products in a Single Order & Quantity Discounts."
subject: "SUPPLY CHAIN AND LOGISTICS MANAGEMENT"
module: "Module 3: Managing economies of scale in a supply chain: Cycle inventory"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446322b"
status: "completed"
scrapedAt: "2026-05-20T17:56:26.289Z"
---
# Module 3: Managing Economies of Scale in a Supply Chain: Cycle Inventory

## Topic: Aggregating Multiple Products in a Single Order & Quantity Discounts

This module delves into how companies can leverage economies of scale to manage inventory effectively, specifically focusing on cycle inventory. We will explore two key strategies: aggregating multiple products into a single order and understanding the implications of quantity discounts.

---

### 1. Aggregating Multiple Products in a Single Order

**Key Concept:** Aggregation in a supply chain refers to combining demand for multiple products or customers into a single order or shipment. This can lead to significant cost savings by reducing the number of orders placed, transportation costs, and administrative overhead.

**Learning Outcomes Covered:**
*   Understanding how to manage inventories in the supply chain (CO3).
*   Analyzing supply chains to optimize ordering and transportation strategies (CO1).

**1.1 Why Aggregate? The Benefits**

*   **Reduced Ordering Costs:** Placing one large order for multiple items is generally cheaper than placing individual orders for each.
    *   *Example:* A retailer ordering a mix of shirts, pants, and jackets from a supplier will incur lower administrative costs and processing fees by consolidating these into a single purchase order.
*   **Lower Transportation Costs:** Shipping a consolidated, larger order can often lead to better utilization of transportation capacity (e.g., full truckloads) compared to multiple smaller shipments. This is particularly true when products are sourced from the same supplier or region.
    *   *Example:* Instead of three separate LTL (Less Than Truckload) shipments for different product categories, aggregating them into one FTL (Full Truckload) shipment can significantly reduce per-unit transportation costs.
*   **Increased Negotiation Power:** Larger order quantities often give buyers more leverage to negotiate better prices or terms with suppliers.
*   **Reduced Cycle Inventory Holding Costs (Indirectly):** While not a direct reduction in holding cost per unit, by aggregating, a company might be able to order more frequently without incurring excessive ordering costs, potentially leading to lower average cycle inventory.

**1.2 Challenges and Considerations**

*   **Increased Cycle Inventory:** While aggregation can reduce ordering costs, it often leads to larger order quantities. This can increase the average cycle inventory held by the company, which in turn raises holding costs. The Economic Order Quantity (EOQ) model is a fundamental tool here, but aggregation requires careful consideration of trade-offs.
*   **Product Complexity and Variety:** Aggregating products with vastly different demand patterns, lead times, or storage requirements can be complex.
*   **Supplier Capabilities:** Suppliers must be capable of fulfilling aggregated orders efficiently. This might involve inventory management at the supplier's end and their ability to pick and pack diverse items.
*   **Information Systems:** Robust information systems are needed to track and manage aggregated orders effectively.

**1.3 The Trade-off: Ordering Costs vs. Holding Costs**

The decision to aggregate often boils down to balancing the reduction in ordering and transportation costs against the increase in holding costs due to larger order quantities.

*   **Aggregated EOQ Approach:**
    *   Consider the total demand for all aggregated products over a period.
    *   Calculate an aggregated order quantity that minimizes the total cost (ordering + holding) for the combined products.
    *   This requires estimating the ordering cost per order and the holding cost per unit for each product, then finding an optimal order size that serves all.

**Example (Illustrative):**

Imagine a retail store needing to order T-shirts and Jeans from a single supplier.

*   **Scenario 1: Separate Orders**
    *   T-shirts: Demand = 100 units/week, Ordering Cost = $100/order, Holding Cost = $2/unit/week
    *   Jeans: Demand = 50 units/week, Ordering Cost = $100/order, Holding Cost = $3/unit/week
    *   Calculate EOQ for each and sum their ordering costs and holding costs.
*   **Scenario 2: Aggregated Order**
    *   Total Demand = 150 units/week (assuming they are ordered together)
    *   Aggregated Ordering Cost = $100/order (if the same supplier/process) or potentially higher if it requires more complex processing.
    *   Aggregated Holding Cost would need to be calculated considering both items.

**Key Takeaway (Aggregating Products):** Aggregation can reduce operational costs by consolidating orders, but careful analysis is required to manage the potential increase in inventory holding costs.

---

### 2. Quantity Discounts

**Key Concept:** Quantity discounts are price reductions offered by suppliers to customers who purchase goods in larger quantities. This is a common strategy to incentivize larger orders and improve supplier economies of scale.

**Learning Outcomes Covered:**
*   Planning and managing inventories in the supply chain (CO3).
*   Analyzing supply chains to understand pricing and inventory trade-offs (CO1).

**2.1 Types of Quantity Discounts**

*   **All-Unit Quantity Discounts:** The discount applies to *all* units purchased once a certain quantity threshold is met.
    *   *Example:* $10 per unit for orders up to 100 units, $9.50 per unit for orders of 101 units or more.
*   **Incremental Quantity Discounts:** The discount applies only to the units purchased *above* a certain threshold.
    *   *Example:* $10 per unit for the first 100 units, $9.50 per unit for units 101-200, $9.00 per unit for units above 200. (Less common in practice for raw materials/finished goods, more for services or tiered pricing).

**2.2 The Impact of Quantity Discounts on Inventory Decisions**

Quantity discounts introduce a conflict between the EOQ model's tendency towards smaller, more frequent orders and the supplier's incentive for larger orders.

*   **EOQ Model with Quantity Discounts:** The standard EOQ formula ($EOQ = \sqrt{2DS/H}$) assumes a constant per-unit price. When discounts are involved, the holding cost per unit ($H$) changes with the quantity purchased, as $H = i \times P$ (where $i$ is the annual holding cost percentage and $P$ is the per-unit price).

**2.3 Decision-Making Process for Quantity Discounts**

When faced with quantity discounts, the following systematic approach is recommended:

1.  **Calculate EOQ for each Price Break:**
    *   Start with the lowest price (largest quantity discount). Calculate the EOQ for this price.
    *   **Check Feasibility:** If the calculated EOQ falls within the quantity range for that price break, this EOQ is a potential optimal order quantity.
    *   **Adjust if Infeasible:** If the EOQ falls outside the feasible range for that price break (e.g., you calculated an EOQ of 500 units for a discount that starts at 1000 units), then the optimal order quantity for that price break is the *minimum* quantity required to obtain that discount (i.e., the lower bound of the price break).

2.  **Calculate Total Annual Costs for Feasible EOQs (and Adjusted Quantities):**
    *   For each price break where a feasible EOQ or adjusted minimum quantity was determined, calculate the total annual cost. The total annual cost includes:
        *   Annual Ordering Cost = (Demand / Order Quantity) * Ordering Cost per Order ($D/Q \times S$)
        *   Annual Holding Cost = (Order Quantity / 2) * Holding Cost per Unit ($Q/2 \times H$)
        *   Annual Purchase Cost = Demand * Price per Unit ($D \times P$)
    *   **Formula:** Total Cost = $(D/Q \times S) + (Q/2 \times H) + (D \times P)$

3.  **Compare Total Costs and Select the Best Option:**
    *   The order quantity that results in the lowest total annual cost is the optimal decision.

**Example (All-Unit Quantity Discount):**

A company needs 5,000 units of a component annually.
*   Annual Demand (D) = 5,000 units
*   Ordering Cost (S) = $50 per order
*   Annual Holding Cost Percentage (i) = 20% of the unit price
*   **Price Structure:**
    *   $10.00 per unit for orders of 0-999 units
    *   $9.50 per unit for orders of 1,000-1,999 units
    *   $9.00 per unit for orders of 2,000+ units

**Step 1: Calculate EOQ for each price break and check feasibility.**

*   **Price Break 1: $P = $10.00**
    *   Holding Cost (H1) = 0.20 * $10.00 = $2.00 per unit
    *   EOQ1 = $\sqrt{2 \times 5000 \times 50 / 2.00} = \sqrt{250,000} = 500$ units
    *   **Feasibility Check:** 500 units is within the 0-999 range. **Feasible EOQ = 500 units.**

*   **Price Break 2: $P = $9.50**
    *   Holding Cost (H2) = 0.20 * $9.50 = $1.90 per unit
    *   EOQ2 = $\sqrt{2 \times 5000 \times 50 / 1.90} = \sqrt{263,157.89} \approx 512.99$ units
    *   **Feasibility Check:** 512.99 units is *not* within the 1,000-1,999 range.
    *   **Adjusted Quantity:** The minimum quantity to get this price is 1,000 units. **Adjusted Quantity = 1,000 units.**

*   **Price Break 3: $P = $9.00**
    *   Holding Cost (H3) = 0.20 * $9.00 = $1.80 per unit
    *   EOQ3 = $\sqrt{2 \times 5000 \times 50 / 1.80} = \sqrt{277,777.78} \approx 527.05$ units
    *   **Feasibility Check:** 527.05 units is *not* within the 2,000+ range.
    *   **Adjusted Quantity:** The minimum quantity to get this price is 2,000 units. **Adjusted Quantity = 2,000 units.**

**Step 2: Calculate Total Annual Costs for feasible/adjusted quantities.**

*   **Option A: Order 500 units (at $10.00/unit)**
    *   Total Cost = ($5000/500 \times 50) + (500/2 \times 2.00) + (5000 \times 10.00)$
    *   Total Cost = ($10 \times 50) + (250 \times 2.00) + 50000$
    *   Total Cost = $500 + 500 + 50000 = $51,000$

*   **Option B: Order 1,000 units (at $9.50/unit)**
    *   Total Cost = ($5000/1000 \times 50) + (1000/2 \times 1.90) + (5000 \times 9.50)$
    *   Total Cost = ($5 \times 50) + (500 \times 1.90) + 47500$
    *   Total Cost = $250 + 950 + 47500 = $48,700$

*   **Option C: Order 2,000 units (at $9.00/unit)**
    *   Total Cost = ($5000/2000 \times 50) + (2000/2 \times 1.80) + (5000 \times 9.00)$
    *   Total Cost = ($2.5 \times 50) + (1000 \times 1.80) + 45000$
    *   Total Cost = $125 + 1800 + 45000 = $46,925$

**Step 3: Compare Total Costs.**

*   Option A: $51,000
*   Option B: $48,700
*   Option C: $46,925

**Conclusion:** The lowest total annual cost is $46,925, achieved by ordering 2,000 units at a price of $9.00 per unit.

**Reference to Textbooks:**

*   **Chopra & Kalra (7th Ed.):** Chapter 8 (Cycle Inventory) would likely discuss the EOQ model and its extensions, including how quantity discounts impact inventory decisions. They would emphasize the trade-off between ordering costs, holding costs, and purchase costs.
*   **Simchi-Levi et al. (4th Ed.):** Chapters on inventory management and aggregate planning would cover similar concepts. They might present more advanced analytical models or discuss the strategic implications of supplier pricing and negotiation.

**Important Points to Remember:**

*   **Aggregation:** Combines demand to reduce ordering/transportation costs but can increase cycle inventory.
*   **Quantity Discounts:** Aims to lower per-unit purchase cost by ordering larger quantities.
*   **Trade-off:** The core decision with quantity discounts is balancing lower purchase prices and reduced ordering costs against increased holding costs.
*   **Systematic Approach:** Always calculate EOQ for each price break, adjust if infeasible, and then compare total costs.
*   **Holding Cost:** Crucially, the holding cost ($H$) changes with the price ($P$) when discounts are involved.

---

### Practice Questions and Exercises

**Question 1 (Aggregation):**

A company orders two products, A and B, from the same supplier.
*   Product A: Demand = 2000 units/year, Ordering Cost = $60/order, Holding Cost = $5/unit/year
*   Product B: Demand = 3000 units/year, Ordering Cost = $60/order, Holding Cost = $4/unit/year
*   Assume that aggregating both into a single order incurs a combined ordering cost of $80/order.

a) Calculate the total annual ordering and holding costs if products A and B are ordered separately using their respective EOQs.
b) Calculate the total annual ordering and holding costs if products A and B are aggregated into a single order, assuming an EOQ for the combined demand.
c) Based on your calculations, is it more cost-effective to order separately or aggregated?

**Answer 1:**

*   **a) Separate Orders:**
    *   **Product A:**
        *   EOQ_A = $\sqrt{2 \times 2000 \times 60 / 5} = \sqrt{48000} \approx 219.09$ units. Let's use 220 units.
        *   Ordering Cost (A) = (2000/220) * $60 $\approx 9.09 * 60 = $545.45$
        *   Holding Cost (A) = (220/2) * $5 = 110 * 5 = $550$
    *   **Product B:**
        *   EOQ_B = $\sqrt{2 \times 3000 \times 60 / 4} = \sqrt{90000} = 300$ units.
        *   Ordering Cost (B) = (3000/300) * $60 = 10 * 60 = $600$
        *   Holding Cost (B) = (300/2) * $4 = 150 * 4 = $600$
    *   **Total Cost (Separate):** $545.45 + 550 + 600 + 600 = $2,295.45$

*   **b) Aggregated Order:**
    *   Total Demand = 2000 + 3000 = 5000 units/year
    *   Aggregated Ordering Cost (S_agg) = $80/order
    *   Assume a weighted average holding cost or a simplified approach if specific unit holding costs aren't directly aggregable into a single H. For simplicity in this example, let's consider the impact on order frequency. If ordering aggregated Q, what is the cost?
    *   Let's assume we want to find an order quantity Q for the aggregated items. If we use the EOQ logic for the aggregated demand and ordering cost:
    *   EOQ_agg = $\sqrt{2 \times 5000 \times 80 / H_{avg}}$
        *   If we use a simple average of holding costs: (5+4)/2 = $4.5.
        *   EOQ_agg = $\sqrt{2 \times 5000 \times 80 / 4.5} = \sqrt{177,777.78} \approx 421.64$ units. Let's use 422 units.
    *   Ordering Cost (Agg) = (5000/422) * $80 $\approx 11.85 * 80 = $948$
    *   Holding Cost (Agg) - this is tricky. If we order 422 units of a mix, we need to know the proportion. Let's assume proportional ordering:
        *   Product A in Q_agg: (2000/5000) * 422 = 168.8 units. Holding Cost A = (168.8/2) * 5 = $422$
        *   Product B in Q_agg: (3000/5000) * 422 = 253.2 units. Holding Cost B = (253.2/2) * 4 = $506.4$
    *   Total Holding Cost (Agg) = $422 + 506.4 = $928.4$
    *   Total Cost (Aggregated) = $948 + 928.4 = $1,876.4$

*   **c) Cost-effectiveness:** It is more cost-effective to order the products in an aggregated manner ($1,876.4$) than separately ($2,295.45$).

**Question 2 (Quantity Discounts):**

A company requires 1,000 units of a product per year.
*   Annual Demand (D) = 1,000 units
*   Ordering Cost (S) = $100 per order
*   Annual Holding Cost Percentage (i) = 25%
*   **Price Structure:**
    *   $20.00 per unit for orders of 0-499 units
    *   $18.00 per unit for orders of 500-999 units
    *   $17.00 per unit for orders of 1,000+ units

Determine the optimal order quantity and the minimum total annual cost.

**Answer 2:**

*   **Price Break 1: $P = $20.00**
    *   H1 = 0.25 * $20.00 = $5.00 per unit
    *   EOQ1 = $\sqrt{2 \times 1000 \times 100 / 5.00} = \sqrt{40000} = 200$ units
    *   **Feasibility Check:** 200 units is within 0-499. **Feasible EOQ = 200 units.**
    *   Total Cost (200 units) = ($1000/200 \times 100) + (200/2 \times 5.00) + (1000 \times 20.00)$
    *   Total Cost = $(5 \times 100) + (100 \times 5.00) + 20000 = 500 + 500 + 20000 = $21,000$

*   **Price Break 2: $P = $18.00**
    *   H2 = 0.25 * $18.00 = $4.50 per unit
    *   EOQ2 = $\sqrt{2 \times 1000 \times 100 / 4.50} = \sqrt{44,444.44} \approx 210.8$ units
    *   **Feasibility Check:** 210.8 units is *not* within 500-999.
    *   **Adjusted Quantity:** Minimum for this price is 500 units. **Adjusted Quantity = 500 units.**
    *   Total Cost (500 units) = ($1000/500 \times 100) + (500/2 \times 4.50) + (1000 \times 18.00)$
    *   Total Cost = $(2 \times 100) + (250 \times 4.50) + 18000 = 200 + 1125 + 18000 = $19,325$

*   **Price Break 3: $P = $17.00**
    *   H3 = 0.25 * $17.00 = $4.25 per unit
    *   EOQ3 = $\sqrt{2 \times 1000 \times 100 / 4.25} = \sqrt{47,058.82} \approx 216.9$ units
    *   **Feasibility Check:** 216.9 units is *not* within 1,000+.
    *   **Adjusted Quantity:** Minimum for this price is 1,000 units. **Adjusted Quantity = 1,000 units.**
    *   Total Cost (1,000 units) = ($1000/1000 \times 100) + (1000/2 \times 4.25) + (1000 \times 17.00)$
    *   Total Cost = $(1 \times 100) + (500 \times 4.25) + 17000 = 100 + 2125 + 17000 = $19,225$

**Conclusion:** The minimum total annual cost is $19,225, achieved by ordering 1,000 units at $17.00 per unit.

---

### 3. Alignment with Course Outcomes

*   **CO1: To analyse supply chains and design the supply chain network. (Knowledge Level: K4)**
    *   This topic directly contributes by enabling analysis of cost structures in supply chains (ordering vs. holding vs. purchase costs) and informing decisions about network design through inventory and ordering policies. Understanding aggregation impacts supplier relationships and transportation networks.
*   **CO2: To solve demand forecasting problems in the supply chain and enhance coordination in the network. (Knowledge Level: K4)**
    *   Accurate demand forecasting is a prerequisite for calculating EOQs and assessing feasibility for discounts. Coordination is enhanced by shared understanding of order aggregation benefits and the impact of discount structures on inventory levels across the network.
*   **CO3: To plan and manage inventories in the supply chain. (Knowledge Level: K4)**
    *   This is the primary focus of the topic. Aggregation and quantity discounts are direct inventory management strategies that influence order quantities, reorder points, safety stock (implicitly, as larger orders might need buffer), and overall inventory holding.
*   **CO4: To develop and plan transportation networks for supply chain considering sustainability also. (Knowledge Level: K4)**
    *   Aggregation has a direct impact on transportation by facilitating fuller truckloads, potentially reducing the number of shipments and associated emissions, thus contributing to sustainability goals.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
