---
title: "Managing economies of scale in a supply chain: Cycle inventory"
subject: "SUPPLY CHAIN AND LOGISTICS MANAGEMENT"
module: "Module 3: Managing economies of scale in a supply chain: Cycle inventory"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446322a"
status: "completed"
scrapedAt: "2026-05-20T17:56:25.555Z"
---
# Module 3: Managing Economies of Scale in a Supply Chain: Cycle Inventory

## Introduction to Economies of Scale and Cycle Inventory

This module explores how leveraging economies of scale can significantly impact supply chain performance, focusing specifically on the concept of **cycle inventory**. Understanding and effectively managing cycle inventory is crucial for balancing the costs associated with ordering/production and holding inventory, ultimately leading to more efficient and cost-effective supply chain operations.

**Key Concept:** **Economies of Scale** refer to the cost advantages experienced when a company increases its production output. This often translates to lower per-unit costs. In a supply chain context, this can apply to purchasing, manufacturing, warehousing, and transportation.

**Key Concept:** **Cycle Inventory** is the portion of total inventory that fluctuates directly with order size. It represents the inventory that is replenished periodically and is consumed over time between replenishment orders.

**Relationship between Economies of Scale and Cycle Inventory:**
Companies often place larger orders to take advantage of bulk discounts or lower per-unit production costs (economies of scale). This, however, leads to higher average cycle inventory levels. The challenge is to find the optimal balance between the cost savings from larger orders and the costs associated with holding more inventory.

**Textbook Reference:** Chopra & Kalra (2019) extensively discusses the trade-offs between economies of scale and inventory costs in various supply chain decisions.

## Drivers of Cycle Inventory

Cycle inventory arises primarily due to the fact that supply chains often operate with discrete replenishment cycles rather than continuous replenishment. The key drivers are:

*   **Batching:** The practice of producing or ordering goods in batches rather than on a one-by-one basis.
    *   **Why it happens:** To achieve economies of scale in production (lower setup costs per unit) or purchasing (bulk discounts, lower transportation costs).
    *   **Example:** A manufacturer produces 1000 units of a product at a time, even if demand is only 10 units per day. This reduces the impact of the fixed setup cost per production run on each unit.

*   **Lot Size:** The quantity of a product that is ordered or produced at one time.
    *   **Impact:** Larger lot sizes lead to higher average cycle inventory.

**Textbook Reference:** Chopra & Kalra (2019) chapter on "Managing Economies of Scale" will delve into the rationale behind batching and lot sizing.

## Costs Associated with Cycle Inventory

Managing cycle inventory involves balancing several costs:

*   **Ordering/Setup Costs:** These are the fixed costs incurred each time an order is placed or a production run is set up.
    *   **Examples:**
        *   **Ordering Costs:** Clerical costs of preparing a purchase order, receiving costs, inspection costs.
        *   **Setup Costs:** Costs of preparing a production facility for a specific product, such as machine cleaning, calibration, and tooling changes.
    *   **Impact:** Higher ordering/setup costs incentivize larger lot sizes to reduce the frequency of these costs.

*   **Holding Costs (Carrying Costs):** These are the costs incurred for holding inventory over a period of time.
    *   **Components:**
        *   **Capital Costs:** The opportunity cost of the money tied up in inventory.
        *   **Storage Space Costs:** Rent, utilities, insurance for warehouse space.
        *   **Inventory Risk Costs:** Obsolescence, damage, spoilage, theft.
    *   **Calculation:** Typically expressed as a percentage of the inventory's value per year.
    *   **Impact:** Higher holding costs incentivize smaller lot sizes to reduce the amount of inventory held on average.

**Textbook Reference:** Chopra & Kalra (2019) provides a detailed breakdown of these cost components and their impact on inventory decisions.

## The Economic Order Quantity (EOQ) Model

The **Economic Order Quantity (EOQ)** model is a foundational tool for determining the optimal lot size that minimizes the total cost of ordering and holding inventory. It makes several assumptions, which are important to understand for its application.

**EOQ Formula:**

$Q^* = \sqrt{\frac{2DS}{H}}$

Where:
*   $Q^*$ = Optimal order quantity (EOQ)
*   $D$ = Annual demand (units)
*   $S$ = Ordering or setup cost per order (currency per order)
*   $H$ = Annual holding cost per unit (currency per unit per year)

**Key Components Breakdown for Calculation:**

1.  **Annual Demand (D):** This is the total number of units expected to be sold or consumed in a year.
    *   **How to obtain:** From historical sales data, market research, or demand forecasting models (refer to Module 2).

2.  **Ordering/Setup Cost per Order (S):** This is the fixed cost incurred each time an order is placed or a production run is initiated.
    *   **Challenge:** Accurately identifying and quantifying all associated costs.

3.  **Annual Holding Cost per Unit (H):** This is the cost of holding one unit of inventory for one year.
    *   **Calculation:** Often expressed as a percentage (i) of the unit cost (C) of the product. So, $H = i \times C$.
    *   **Challenge:** Estimating the appropriate holding cost percentage, which can vary significantly between industries and companies.

**Calculating Average Cycle Inventory:**
With the EOQ ($Q^*$), the average cycle inventory is:

**Average Cycle Inventory = $Q^* / 2$**

**Calculating Number of Orders per Year:**
Number of Orders = $D / Q^*$

**Calculating Total Annual Costs:**
Total Annual Cost = (Number of Orders $\times S$) + (Average Cycle Inventory $\times H$)
Total Annual Cost = $(D / Q^*) \times S + (Q^* / 2) \times H$

**Graphical Representation:**
The EOQ is the point where the total ordering cost curve and the total holding cost curve intersect.

*   **Ordering Cost Curve:** Decreases as lot size increases (fewer orders).
*   **Holding Cost Curve:** Increases as lot size increases (more inventory held on average).
*   **Total Cost Curve:** U-shaped, with the minimum at the EOQ.

**Important Point to Remember:** The EOQ model assumes that demand is constant and known, lead time is constant, and there are no quantity discounts. Real-world applications often require adjustments or more sophisticated models.

**Practice Question 1:**
A retailer sells 10,000 units of a product annually. The ordering cost per order is $50, and the annual holding cost per unit is $5.

*   a) Calculate the Economic Order Quantity (EOQ).
*   b) Calculate the average cycle inventory.
*   c) Calculate the number of orders placed per year.
*   d) Calculate the total annual cost of ordering and holding inventory.

**Answer 1:**
*   a) $D = 10,000$ units, $S = \$50$, $H = \$5$
    $Q^* = \sqrt{\frac{2 \times 10,000 \times 50}{5}} = \sqrt{\frac{1,000,000}{5}} = \sqrt{200,000} \approx 447$ units
*   b) Average Cycle Inventory = $447 / 2 \approx 224$ units
*   c) Number of Orders = $10,000 / 447 \approx 22.37$ orders (round up to 23 for practical purposes, or calculate total cost using the precise $Q^*$)
*   d) Total Annual Cost = $(10,000 / 447) \times 50 + (447 / 2) \times 5 \approx 22.37 \times 50 + 223.5 \times 5 \approx 1118.5 + 1117.5 \approx \$2236$

**Practice Question 2:**
A manufacturing company produces widgets. Annual demand is 50,000 units. The setup cost per production run is $200, and the annual holding cost per unit is $10. The unit cost of a widget is $20. Assume the holding cost percentage is $50\%$ of the unit cost.

*   a) Calculate the Economic Production Quantity (EPQ) if the production rate is 1000 units per day and the demand rate is 200 units per day (assuming 250 working days a year). *[Note: This introduces the EPQ concept, a variation of EOQ for production.]*
*   b) Calculate the average cycle inventory using the EPQ.

**Answer 2:**
*   a) **EPQ Calculation:**
    *   Annual Demand ($D$) = 50,000 units
    *   Setup Cost per production run ($S$) = $200
    *   Annual Holding Cost per unit ($H$) = $50\%$ of $20 = \$10$
    *   Production Rate ($P$) = 1000 units/day
    *   Demand Rate ($d$) = 200 units/day
    *   EPQ Formula: $Q^* = \sqrt{\frac{2DS}{H(1 - d/P)}}$
    *   $Q^* = \sqrt{\frac{2 \times 50,000 \times 200}{10(1 - 200/1000)}} = \sqrt{\frac{20,000,000}{10(1 - 0.2)}} = \sqrt{\frac{20,000,000}{10 \times 0.8}} = \sqrt{\frac{20,000,000}{8}} = \sqrt{2,500,000} = 1581$ units

*   b) Average Cycle Inventory (EPQ) = $Q^* / 2 = 1581 / 2 \approx 791$ units

**Reference Book Insight:** Simchi-Levi, Simchi-Levi (2022) likely explores the practical application and limitations of EOQ in various supply chain scenarios, potentially discussing how to estimate costs and deal with uncertainty.

## The Economic Production Quantity (EPQ) Model

When a company produces its own goods, the **Economic Production Quantity (EPQ)** model is used. It's similar to EOQ but accounts for the fact that the entire order quantity is not received at once; instead, it's produced and consumed simultaneously.

**Key Difference from EOQ:**
In EPQ, the inventory builds up gradually as production occurs while demand is still being met. This means the average inventory level is lower than it would be if the entire batch arrived at once.

**EPQ Formula:**

$Q^* = \sqrt{\frac{2DS}{H(1 - d/P)}}$

Where:
*   $Q^*$ = Optimal production quantity (EPQ)
*   $D$ = Annual demand (units)
*   $S$ = Setup cost per production run (currency per run)
*   $H$ = Annual holding cost per unit (currency per unit per year)
*   $d$ = Demand rate per year (units per year) - *Note: Often d is used for daily/monthly demand rate, and D for annual demand.*
*   $P$ = Production rate per year (units per year)

**Important Point to Remember:** The term $(1 - d/P)$ represents the fraction of the production rate that is not used to meet demand, which is used to build inventory. If $d$ is very close to $P$, the term approaches zero, and the EPQ becomes very large, indicating that production should occur as continuously as possible.

**Calculating Average Cycle Inventory with EPQ:**

**Average Cycle Inventory = $Q^* / 2 \times (1 - d/P)$**

**Textbook Reference:** Chopra & Kalra (2019) likely dedicates a section to EPQ as a variation of the EOQ model for internal production scenarios.

## Impact of Lot Size on Supply Chain Performance

The decision of how large a lot size to use has significant implications across the supply chain:

*   **Increased Cycle Inventory:** Larger lot sizes directly lead to higher average cycle inventory, increasing holding costs.
*   **Reduced Ordering/Setup Costs:** Conversely, larger lot sizes reduce the frequency of ordering or production runs, lowering these costs.
*   **Impact on Transportation:** Larger orders can lead to fuller truckloads, potentially reducing per-unit transportation costs. However, if demand is not sufficient to consume the larger shipment quickly, it might tie up capital in transit inventory.
*   **Impact on Warehousing:** Higher inventory levels require more warehouse space, potentially increasing storage costs and complexity.
*   **Customer Service:** While larger lot sizes are driven by economies of scale, they can sometimes lead to stockouts if demand spikes unexpectedly between replenishment cycles, especially if lead times are long. Conversely, a very small lot size strategy could lead to more frequent replenishment, potentially improving responsiveness but increasing ordering costs.

**Textbook Reference:** Chopra & Kalra (2019) will discuss these trade-offs in detail, emphasizing the need for a holistic supply chain view.

**Course Outcome Alignment:** This section directly supports **CO3: To plan and manage inventories in the supply chain** by explaining the mechanisms that drive inventory levels and the associated costs. It also touches on **CO1: To analyse supply chains and design the supply chain network** by highlighting how lot sizing decisions affect different parts of the network.

## Factors Affecting Lot Size Decisions Beyond EOQ/EPQ

While EOQ/EPQ provides a valuable baseline, real-world lot sizing decisions must consider several other factors:

*   **Demand Variability:** The EOQ/EPQ models assume constant demand. In reality, demand fluctuates. High demand variability may necessitate smaller lot sizes for better responsiveness and to avoid excessive inventory during demand downturns.
*   **Lead Time Variability:** Uncertainty in lead times can also impact optimal lot sizing. Longer or more variable lead times might suggest holding more safety stock, which can be influenced by lot size.
*   **Quantity Discounts:** Suppliers often offer discounts for larger order quantities. The EOQ model needs to be adjusted to incorporate these discounts, as the cost of the item itself changes with the order size.
*   **Storage Capacity Constraints:** Physical limitations in warehouse space might restrict the maximum lot size that can be handled.
*   **Product Shelf Life:** For perishable or time-sensitive products, lot sizes must be managed to avoid spoilage or obsolescence.
*   **Production Capacity:** The capacity of production lines or equipment can influence the feasible lot sizes.
*   **Working Capital:** Larger lot sizes tie up more capital in inventory, which might be a constraint for companies with limited working capital.

**Textbook Reference:** Chopra & Kalra (2019) likely discusses these additional factors and more advanced inventory models in later chapters.

**Practice Question 3:**
A company is considering ordering 500 units of a component, which would qualify for a 5% quantity discount. The original price is $10 per unit. Annual demand is 2,000 units. Ordering cost is $20 per order. Holding cost is 20% of the unit cost.
*   a) Calculate the EOQ at the original price.
*   b) Calculate the total annual cost (ordering + holding) at the EOQ from part (a).
*   c) Calculate the total annual cost (ordering + holding + purchase cost) if the company orders 500 units to get the discount.
*   d) Based on your calculations, should the company order 500 units?

**Answer 3:**
*   a) Original Price ($C_1$) = $10
    *   Annual Demand ($D$) = 2,000 units
    *   Ordering Cost ($S$) = $20
    *   Holding Cost per unit ($H_1$) = 20% of $10 = \$2$
    *   $Q_1^* = \sqrt{\frac{2 \times 2,000 \times 20}{2}} = \sqrt{\frac{80,000}{2}} = \sqrt{40,000} = 200$ units

*   b) Total Annual Cost at $Q_1^*=200$:
    *   Ordering Cost = $(2,000 / 200) \times 20 = 10 \times 20 = \$200$
    *   Holding Cost = $(200 / 2) \times 2 = 100 \times 2 = \$200$
    *   Total Cost = $200 + 200 = \$400$

*   c) Order Quantity ($Q_2$) = 500 units (discount quantity)
    *   Discounted Price ($C_2$) = $10 \times (1 - 0.05) = \$9.50$
    *   Annual Demand ($D$) = 2,000 units
    *   Ordering Cost ($S$) = $20
    *   Holding Cost per unit ($H_2$) = 20% of $9.50 = \$1.90$
    *   Purchase Cost = $2,000 \times \$9.50 = \$19,000$
    *   Ordering Cost = $(2,000 / 500) \times 20 = 4 \times 20 = \$80$
    *   Holding Cost = $(500 / 2) \times 1.90 = 250 \times 1.90 = \$475$
    *   Total Annual Cost = $19,000 + 80 + 475 = \$19,555$

*   d) Comparing the total annual costs:
    *   At EOQ (200 units): $400 (excluding purchase cost)
    *   At discount quantity (500 units): $19,555 (including purchase cost)

    When considering the purchase cost, ordering 500 units is significantly more expensive than ordering 200 units. The company should **not** order 500 units to get the discount in this scenario.
    *(Note: A proper quantity discount analysis involves calculating the break-even quantity between EOQ and the discount quantity.)*

## Lot Splitting and Flow-Through

**Lot Splitting:** The practice of dividing a large production or order lot into smaller batches that can be processed or shipped independently.

*   **Benefits:**
    *   **Reduced Lead Time:** Products move through the supply chain faster as smaller batches are initiated sooner.
    *   **Improved Responsiveness:** The supply chain can react more quickly to changes in demand.
    *   **Lower Cycle Inventory:** While not directly changing the total quantity ordered, it can reduce the average inventory held at various stages.
    *   **Smoother Production Flow:** Prevents large buildups of Work-In-Progress (WIP).

*   **Drawbacks:**
    *   **Increased Setup Costs:** More frequent setups at production or warehousing stages.
    *   **Increased Administrative Costs:** More orders to track.

**Flow-Through:** A strategy where goods are shipped directly from the inbound transportation (e.g., truck arriving at a distribution center) to the outbound transportation without being stored in the warehouse.

*   **Benefits:**
    *   **Eliminates Storage Costs:** No handling or holding costs for those specific items.
    *   **Reduced Lead Time:** Speeds up delivery to the customer.
    *   **Reduced Damage Risk:** Less handling reduces the chance of damage.

*   **Considerations:**
    *   Requires excellent coordination between inbound and outbound logistics.
    *   Demand must be known with high certainty to avoid backorders.
    *   Often used for high-volume, fast-moving items.

**Textbook Reference:** Chopra & Kalra (2019) likely discusses these advanced lot sizing and flow strategies to optimize inventory and lead times.

**Course Outcome Alignment:** Lot splitting and flow-through directly contribute to **CO3: To plan and manage inventories in the supply chain** by offering alternative methods for managing inventory flow and levels. They also indirectly support **CO1: To analyse supply chains and design the supply chain network** by influencing how materials move and are stored.

## Key Concepts to Remember

*   **Economies of Scale:** Cost savings from increased production or order size.
*   **Cycle Inventory:** Inventory that fluctuates with order size.
*   **Ordering/Setup Costs:** Fixed costs per order/run.
*   **Holding Costs:** Costs of carrying inventory.
*   **EOQ:** Model to find optimal order quantity minimizing total ordering and holding costs.
*   **EPQ:** Variation of EOQ for production environments.
*   **Trade-off:** Balancing ordering/setup costs against holding costs is the core of cycle inventory management.
*   **Lot Size:** The quantity of product ordered or produced.
*   **Lot Splitting:** Dividing large lots into smaller ones to improve flow and responsiveness.
*   **Flow-Through:** Shipping directly from inbound to outbound without warehousing.

## Summary of Learning Outcomes Covered

This module has addressed:

*   **Understanding the relationship between economies of scale and cycle inventory:** How seeking cost efficiencies through larger batches increases cycle inventory. (Supports **CO1**, **CO3**)
*   **Identifying the costs associated with cycle inventory:** Ordering/setup costs and holding costs. (Supports **CO3**)
*   **Applying the EOQ and EPQ models:** Calculating optimal lot sizes to balance these costs. (Supports **CO3**)
*   **Analyzing the impact of lot size on supply chain performance:** Understanding the trade-offs across different functions. (Supports **CO1**, **CO3**)
*   **Considering factors beyond EOQ/EPQ:** Demand variability, discounts, and capacity constraints. (Supports **CO3**)
*   **Exploring strategies like lot splitting and flow-through:** Advanced techniques for inventory management. (Supports **CO3**)

By mastering these concepts, you can better plan and manage inventories within a supply chain, contributing to overall efficiency and cost-effectiveness, which is a direct contribution to **CO3: To plan and manage inventories in the supply chain.** The analysis of these concepts also helps in understanding how network design choices influence inventory levels, aligning with **CO1: To analyse supply chains and design the supply chain network.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
