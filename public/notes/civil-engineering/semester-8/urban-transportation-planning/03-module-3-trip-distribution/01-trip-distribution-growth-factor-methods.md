---
title: "Trip Distribution - Growth factor methods"
subject: "URBAN TRANSPORTATION PLANNING"
module: "Module 3: Trip Distribution "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811921"
status: "completed"
scrapedAt: "2026-05-20T19:04:49.071Z"
---
# Urban Transportation Planning - Module 3: Trip Distribution

## Topic: Trip Distribution - Growth Factor Methods

This module focuses on predicting where trips originating in one zone will end up in other zones, given the total number of trips produced and attracted by each zone. Growth factor methods are a family of techniques used to forecast future trip distribution patterns based on current patterns and projected growth.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the fundamental concept of trip distribution.
*   Identify the purpose and role of growth factor methods in trip distribution.
*   Explain the underlying assumptions and limitations of growth factor methods.
*   Describe and differentiate between various growth factor methods (e.g., Simple Growth Factor, Uniform Growth Factor, Average Growth Factor, Fratar Method).
*   Apply these methods to a given scenario to estimate future trip distribution.
*   Critically evaluate the suitability of growth factor methods for different urban contexts and planning horizons.

---

### 1. Introduction to Trip Distribution

**Concept:** Trip distribution is the process of determining the destination zones for trips that are generated in origin zones. It answers the question: "Given that a trip starts in Zone A, where is it likely to go?"

**Purpose in Transportation Planning:**
*   **Forecasting Future Travel Patterns:** Essential for predicting how travel demand will change over time due to population and economic growth.
*   **Network Analysis:** Helps understand how future travel will load onto the transportation network (roads, transit lines).
*   **Infrastructure Planning:** Informs decisions about where new roads, transit lines, or other transportation facilities are needed.
*   **Land Use Planning:** Connects transportation demand to land use development.

**Input Data:**
*   **Trip Production/Attraction Data:** From trip generation models (e.g., number of person-trips originating from each zone and attracted to each zone).
*   **Existing Trip Distribution Matrix:** A matrix showing the number of trips between each pair of origin and destination zones in a base year.
*   **Growth Factors:** Projected growth rates for zones or travel between zones.

---

### 2. Growth Factor Methods: An Overview

**Definition:** Growth factor methods are a class of trip distribution models that extrapolate existing trip patterns from a base year to a future year by applying growth factors to the interzonal trip volumes. They assume that the relative attractiveness of zones and the impedance of travel between them will change in a predictable way based on overall growth.

**Underlying Assumptions:**
*   **Continuity of Behavior:** People's travel behavior (preferences for destinations, modes, routes) will remain largely the same in the future, except for changes induced by growth.
*   **Proportional Growth:** Growth in trip making is proportional to the growth in population, employment, or other socio-economic factors in the zones.
*   **No Major Shifts in Land Use or Network:** Assumes significant changes in land use patterns or the transportation network itself are not the primary drivers of change in trip distribution, or these changes are implicitly captured by the growth factors.
*   **Constant Travel Impedance:** For simpler methods, the impedance (e.g., travel time, distance) between zones is assumed to remain constant. More complex methods can account for changes in impedance.

**Limitations:**
*   **Inability to Account for New Destinations/Origins:** Cannot predict the emergence of entirely new major trip generators or attractors.
*   **Sensitivity to Base Year Data:** Highly dependent on the accuracy of the base year trip distribution matrix.
*   **Oversimplification of Behavior:** Does not explicitly model the underlying decision-making process of travelers.
*   **Difficulty in Capturing Large-Scale Changes:** May not be suitable for forecasting over very long periods or when significant land-use changes or new infrastructure are planned.
*   **May Violate Conservation of Trips:** Some simpler methods can lead to inconsistencies where the total trips produced or attracted by a zone don't match external forecasts.

---

### 3. Types of Growth Factor Methods

Growth factor methods vary in how they account for growth and maintain the balance of trip production and attraction.

#### 3.1. Simple Growth Factor Method (SGF)

*   **Concept:** Assumes that the growth in trips between any two zones is directly proportional to the growth in the origin zone and the growth in the destination zone.
*   **Formula:**
    $T_{ij}^{(F)} = T_{ij}^{(B)} \times G_i \times G_j$
    Where:
    *   $T_{ij}^{(F)}$ = Future number of trips from zone *i* to zone *j*
    *   $T_{ij}^{(B)}$ = Base year number of trips from zone *i* to zone *j*
    *   $G_i$ = Growth factor for the origin zone *i*
    *   $G_j$ = Growth factor for the destination zone *j*

*   **Growth Factor Calculation:** Growth factors are typically calculated as the ratio of future to base year values of a socio-economic variable (e.g., population, employment) for each zone.
    $G_i = \frac{\text{Future Value of Zone } i}{\text{Base Year Value of Zone } i}$

*   **Pros:** Simple to understand and implement.
*   **Cons:** Can lead to significant imbalances. The total future trips produced by a zone may not match its independent trip production forecast, and similarly for attraction.

#### 3.2. Uniform Growth Factor Method (UGF)

*   **Concept:** Assumes that the growth factor between any two zones is the same for all zone pairs. This factor is derived from the overall growth in total trips in the study area.
*   **Formula:**
    $T_{ij}^{(F)} = T_{ij}^{(B)} \times G$
    Where:
    *   $G$ = Uniform growth factor for the entire study area.

*   **Growth Factor Calculation:**
    $G = \frac{\text{Total Future Trips}}{\text{Total Base Year Trips}}$

*   **Pros:** Very simple.
*   **Cons:** Highly unrealistic as it ignores spatial variations in growth. Does not account for differential growth in specific zones.

#### 3.3. Average Growth Factor Method (AGF)

*   **Concept:** An attempt to average the effects of individual zone growth. It applies an average of the origin and destination growth factors to the interzonal trip volumes.
*   **Formula:**
    $T_{ij}^{(F)} = T_{ij}^{(B)} \times \frac{(G_i + G_j)}{2}$
    Where:
    *   $G_i$ = Growth factor for the origin zone *i*
    *   $G_j$ = Growth factor for the destination zone *j*

*   **Pros:** Better than SGF as it moderates the impact of individual zone growth.
*   **Cons:** Still prone to imbalances, though generally less severe than SGF. The averaging might not accurately reflect the complex interactions influencing trip distribution.

#### 3.4. Fratar Method (or Extended Growth Factor Method)

*   **Concept:** A widely used and more sophisticated growth factor method that attempts to balance future trip productions and attractions by iteratively adjusting the interzonal trip volumes. It assumes that the ratio of future to base year trips between zones *i* and *j* ($T_{ij}^{(F)} / T_{ij}^{(B)}$) is related to the growth factors of zones *i* ($G_i$) and *j* ($G_j$).

*   **Key Idea:** The method aims to satisfy two conditions simultaneously:
    1.  The sum of future trips originating from zone *i* must equal the forecasted production for zone *i*.
    2.  The sum of future trips terminating at zone *j* must equal the forecasted attraction for zone *j*.

*   **Mathematical Formulation:**
    The basic relationship is:
    $T_{ij}^{(F)} = T_{ij}^{(B)} \times X_{ij}$
    Where $X_{ij}$ is an adjustment factor that needs to be determined.

    The Fratar method assumes that $X_{ij}$ can be approximated by a function of $G_i$ and $G_j$, often a geometric mean or a weighted average. A common formulation is:
    $T_{ij}^{(F)} \approx T_{ij}^{(B)} \times \sqrt{G_i \times G_j}$ (This is sometimes referred to as the Geometric Mean Growth Factor)

    However, this simple approximation often doesn't satisfy the production and attraction constraints directly. The Fratar method uses an iterative process to adjust the trip matrix.

*   **Iterative Process:**
    1.  **Initial Estimate:** Calculate an initial estimate of the future trip matrix using a growth factor, often the geometric mean:
        $T_{ij}^{(F,0)} = T_{ij}^{(B)} \times \sqrt{G_i \times G_j}$

    2.  **Balance Productions (Iteration 1):** For each origin zone *i*, calculate a factor $A_i$ to adjust the trips originating from *i* to match the forecasted production $P_i^{(F)}$:
        $A_i = \frac{P_i^{(F)}}{\sum_{j} T_{ij}^{(F,0)}}$
        Update the matrix:
        $T_{ij}^{(F,1)} = T_{ij}^{(F,0)} \times A_i$

    3.  **Balance Attractions (Iteration 2):** For each destination zone *j*, calculate a factor $B_j$ to adjust the trips terminating at *j* to match the forecasted attraction $A_j^{(F)}$:
        $B_j = \frac{A_j^{(F)}}{\sum_{i} T_{ij}^{(F,1)}}$
        Update the matrix:
        $T_{ij}^{(F,2)} = T_{ij}^{(F,1)} \times B_j$

    4.  **Repeat Balancing:** Continue iterating by balancing productions with $A_i$ factors and then attractions with $B_j$ factors until the matrix converges (i.e., the changes between iterations are very small, or the total productions and attractions match the forecasts within acceptable limits).

*   **Pros:** Aims to preserve both origin production and destination attraction totals. More realistic than simpler methods.
*   **Cons:** Iterative process can be time-consuming. Sensitive to the initial estimate. Requires accurate future production and attraction forecasts.

---

### 4. Applying Growth Factor Methods: Examples

Let's consider a simple example with 3 zones (1, 2, 3).

**Base Year Data:**

| Origin \ Dest | Zone 1 | Zone 2 | Zone 3 | Total Production |
| :------------ | :----- | :----- | :----- | :--------------- |
| **Zone 1**    | 100    | 200    | 150    | 450              |
| **Zone 2**    | 150    | 50     | 100    | 300              |
| **Zone 3**    | 50     | 75     | 125    | 250              |
| **Total Attraction** | 300 | 325 | 375 | **1000** |

**Projected Socio-economic Data (Future Year):**

| Zone   | Base Year Value | Future Year Value | Growth Factor (G) |
| :----- | :-------------- | :---------------- | :---------------- |
| Zone 1 | 1000            | 1200              | 1.2               |
| Zone 2 | 800             | 1000              | 1.25              |
| Zone 3 | 600             | 750               | 1.25              |

**Projected Trip Productions & Attractions (Independent Forecasts):**

| Zone   | Future Production ($P_i^{(F)}$) | Future Attraction ($A_j^{(F)}$) |
| :----- | :------------------------------ | :------------------------------ |
| Zone 1 | 540                             | 360                             |
| Zone 2 | 375                             | 390                             |
| Zone 3 | 300                             | 450                             |
| **Total** | **1215**                        | **1200**                        |

*Note: The total production (1215) and attraction (1200) are not equal. This is common. Often, the attraction forecast is adjusted to match the production forecast, or a more complex balancing is done. For simplicity in this example, we'll assume a target of 1200 total trips, and the attraction forecast is used directly in Fratar.*

---

**Example Calculations:**

#### 1. Simple Growth Factor (SGF)

$T_{ij}^{(F)} = T_{ij}^{(B)} \times G_i \times G_j$

| Origin \ Dest | Zone 1 (G=1.2) | Zone 2 (G=1.25) | Zone 3 (G=1.25) |
| :------------ | :------------- | :-------------- | :-------------- |
| **Zone 1 (G=1.2)** | $100 \times 1.2 \times 1.2 = 144$ | $200 \times 1.2 \times 1.25 = 300$ | $150 \times 1.2 \times 1.25 = 225$ |
| **Zone 2 (G=1.25)** | $150 \times 1.25 \times 1.2 = 225$ | $50 \times 1.25 \times 1.25 = 78.13$ | $100 \times 1.25 \times 1.25 = 156.25$ |
| **Zone 3 (G=1.25)** | $50 \times 1.25 \times 1.2 = 75$ | $75 \times 1.25 \times 1.25 = 117.19$ | $125 \times 1.25 \times 1.25 = 195.31$ |

**SGF Future Matrix:**

| Origin \ Dest | Zone 1 | Zone 2 | Zone 3 | Total Production |
| :------------ | :----- | :----- | :----- | :--------------- |
| **Zone 1**    | 144    | 300    | 225    | 669              |
| **Zone 2**    | 225    | 78.13  | 156.25 | 459.38           |
| **Zone 3**    | 75     | 117.19 | 195.31 | 387.50           |
| **Total Attraction** | 444 | 495.13 | 576.56 | **1506.88** |

**Analysis:**
*   Total predicted trips = 1506.88 (vs. forecast ~1200).
*   Zone 1 Production: 669 (vs. forecast 540) - Overestimated.
*   Zone 1 Attraction: 444 (vs. forecast 360) - Overestimated.
*   Zone 3 Attraction: 576.56 (vs. forecast 450) - Overestimated.
This method shows significant imbalances.

#### 2. Average Growth Factor (AGF)

$T_{ij}^{(F)} = T_{ij}^{(B)} \times \frac{(G_i + G_j)}{2}$

**Average Growth Factors:**
*   (1,1): (1.2+1.2)/2 = 1.2
*   (1,2): (1.2+1.25)/2 = 1.225
*   (1,3): (1.2+1.25)/2 = 1.225
*   (2,1): (1.25+1.2)/2 = 1.225
*   (2,2): (1.25+1.25)/2 = 1.25
*   (2,3): (1.25+1.25)/2 = 1.25
*   (3,1): (1.25+1.2)/2 = 1.225
*   (3,2): (1.25+1.25)/2 = 1.25
*   (3,3): (1.25+1.25)/2 = 1.25

**AGF Future Matrix:**

| Origin \ Dest | Zone 1 | Zone 2 | Zone 3 | Total Production |
| :------------ | :----- | :----- | :----- | :--------------- |
| **Zone 1**    | $100 \times 1.2 = 120$ | $200 \times 1.225 = 245$ | $150 \times 1.225 = 183.75$ | 548.75           |
| **Zone 2**    | $150 \times 1.225 = 183.75$ | $50 \times 1.25 = 62.5$ | $100 \times 1.25 = 125$ | 371.25           |
| **Zone 3**    | $50 \times 1.225 = 61.25$ | $75 \times 1.25 = 93.75$ | $125 \times 1.25 = 156.25$ | 311.25           |
| **Total Attraction** | 365 | 401.25 | 465 | **1231.25** |

**Analysis:**
*   Total predicted trips = 1231.25 (much closer to the forecast ~1200).
*   Zone 1 Production: 548.75 (vs. forecast 540) - Close.
*   Zone 1 Attraction: 365 (vs. forecast 360) - Close.
*   Zone 3 Attraction: 465 (vs. forecast 450) - Close.
This method provides a better approximation and closer adherence to the production/attraction totals.

#### 3. Fratar Method (Iterative Process)

Let's use the geometric mean for the initial estimate ($T_{ij}^{(F,0)} = T_{ij}^{(B)} \times \sqrt{G_i \times G_j}$) and then balance.

**Initial Estimate ($T_{ij}^{(F,0)}$ using $\sqrt{G_i G_j}$):**

| Origin \ Dest | Zone 1 | Zone 2 | Zone 3 | Total Production |
| :------------ | :----- | :----- | :----- | :--------------- |
| **Zone 1**    | $100 \times \sqrt{1.2 \times 1.2} = 120$ | $200 \times \sqrt{1.2 \times 1.25} = 204.94$ | $150 \times \sqrt{1.2 \times 1.25} = 153.70$ | 478.64           |
| **Zone 2**    | $150 \times \sqrt{1.25 \times 1.2} = 183.71$ | $50 \times \sqrt{1.25 \times 1.25} = 62.5$ | $100 \times \sqrt{1.25 \times 1.25} = 125$ | 371.21           |
| **Zone 3**    | $50 \times \sqrt{1.25 \times 1.2} = 61.24$ | $75 \times \sqrt{1.25 \times 1.25} = 93.75$ | $125 \times \sqrt{1.25 \times 1.25} = 156.25$ | 311.24           |
| **Total Attraction** | 364.95 | 401.19 | 434.95 | **1161.09** |

*(Note: The total attraction calculated here is lower than the AGF example, as the geometric mean can differ from the arithmetic mean used in AGF).*

**Fratar - Iteration 1 (Balance Productions):**
Forecasted Productions ($P_i^{(F)}$): Zone 1 = 540, Zone 2 = 375, Zone 3 = 300.

*   **Zone 1:** $A_1 = 540 / 478.64 = 1.1282$
*   **Zone 2:** $A_2 = 375 / 371.21 = 1.0091$
*   **Zone 3:** $A_3 = 300 / 311.24 = 0.9639$

**Update Matrix ($T_{ij}^{(F,1)}$):** (Multiply $T_{ij}^{(F,0)}$ by $A_i$)

| Origin \ Dest | Zone 1 | Zone 2 | Zone 3 | Total Production |
| :------------ | :----- | :----- | :----- | :--------------- |
| **Zone 1**    | $120 \times 1.1282 = 135.38$ | $204.94 \times 1.1282 = 231.31$ | $153.70 \times 1.1282 = 173.44$ | 540.13           |
| **Zone 2**    | $183.71 \times 1.0091 = 185.34$ | $62.5 \times 1.0091 = 63.07$ | $125 \times 1.0091 = 126.14$ | 374.55           |
| **Zone 3**    | $61.24 \times 0.9639 = 59.02$ | $93.75 \times 0.9639 = 90.40$ | $156.25 \times 0.9639 = 150.61$ | 299.03           |
| **Total Attraction** | 379.74 | 384.77 | 450.19 | **1113.71** |

**Analysis after Iteration 1:**
*   Productions are now balanced (close to forecasts).
*   Attractions are still unbalanced.
    *   Zone 1 Attraction: 379.74 (vs. forecast 360) - Overestimated.
    *   Zone 3 Attraction: 450.19 (vs. forecast 450) - Good.

**Fratar - Iteration 2 (Balance Attractions):**
Forecasted Attractions ($A_j^{(F)}$): Zone 1 = 360, Zone 2 = 390, Zone 3 = 450.

*   **Zone 1:** $B_1 = 360 / 379.74 = 0.9480$
*   **Zone 2:** $B_2 = 390 / 384.77 = 1.0136$
*   **Zone 3:** $B_3 = 450 / 450.19 = 0.9996$

**Update Matrix ($T_{ij}^{(F,2)}$):** (Multiply $T_{ij}^{(F,1)}$ by $B_j$)

| Origin \ Dest | Zone 1 | Zone 2 | Zone 3 | Total Production |
| :------------ | :----- | :----- | :----- | :--------------- |
| **Zone 1**    | $135.38 \times 0.9480 = 128.34$ | $231.31 \times 1.0136 = 234.55$ | $173.44 \times 0.9996 = 173.37$ | 536.26           |
| **Zone 2**    | $185.34 \times 0.9480 = 175.70$ | $63.07 \times 1.0136 = 63.91$ | $126.14 \times 0.9996 = 126.09$ | 365.70           |
| **Zone 3**    | $59.02 \times 0.9480 = 55.95$ | $90.40 \times 1.0136 = 91.66$ | $150.61 \times 0.9996 = 150.55$ | 298.16           |
| **Total Attraction** | 359.99 | 390.12 | 449.01 | **1199.12** |

**Analysis after Iteration 2:**
*   Productions are still balanced (536.26 vs 540, 365.70 vs 375, 298.16 vs 300 - generally close).
*   Attractions are now much closer to forecasts (359.99 vs 360, 390.12 vs 390, 449.01 vs 450).
*   Total trips = 1199.12 (very close to the target of 1200).

**Further Iterations:** One would continue balancing productions and attractions until convergence.

---

### 5. Practice Questions & Exercises

**Question 1:**
Which of the following growth factor methods is known for its iterative process to balance both trip productions and attractions?
a) Simple Growth Factor (SGF)
b) Uniform Growth Factor (UGF)
c) Average Growth Factor (AGF)
d) Fratar Method

**Question 2:**
A town has a base year trip matrix. The growth factor for Zone A is 1.3 and for Zone B is 1.5. The base year trips between Zone A and Zone B are 200. Using the Simple Growth Factor (SGF) method, what would be the estimated future trips between Zone A and Zone B?

**Question 3:**
What is a major limitation of growth factor methods compared to more complex models like gravity models or destination choice models?

**Question 4:**
Given the following information:
Base year trips from Zone X to Zone Y ($T_{XY}^{(B)}$) = 150
Growth factor for Zone X ($G_X$) = 1.2
Growth factor for Zone Y ($G_Y$) = 1.4

Calculate the future trips ($T_{XY}^{(F)}$) using:
a) Simple Growth Factor (SGF)
b) Average Growth Factor (AGF)

---

### Answers

**Answer 1:**
d) Fratar Method

**Answer 2:**
Using SGF: $T_{AB}^{(F)} = T_{AB}^{(B)} \times G_A \times G_B = 200 \times 1.3 \times 1.5 = 200 \times 1.95 = 390$ trips.

**Answer 3:**
A major limitation is their inability to account for changes in the travel impedance (e.g., travel time, cost) between zones, unless implicitly captured by the growth factors themselves. They also don't explicitly model the underlying attractiveness or deterrence functions of travel. Simpler methods also suffer from imbalances in production and attraction totals.

**Answer 4:**
a) **SGF:** $T_{XY}^{(F)} = T_{XY}^{(B)} \times G_X \times G_Y = 150 \times 1.2 \times 1.4 = 150 \times 1.68 = 252$ trips.
b) **AGF:** $T_{XY}^{(F)} = T_{XY}^{(B)} \times \frac{(G_X + G_Y)}{2} = 150 \times \frac{(1.2 + 1.4)}{2} = 150 \times \frac{2.6}{2} = 150 \times 1.3 = 195$ trips.

---

### Important Points to Remember

*   **Growth Factor methods are retrospective:** They build upon existing, observed trip patterns.
*   **Assumptions are key:** Understand the underlying assumptions of each method to gauge its applicability.
*   **Balancing is crucial:** The Fratar method's iterative balancing process makes it more robust than simpler methods.
*   **Data quality matters:** The accuracy of the base year matrix and future growth forecasts directly impacts the reliability of the results.
*   **Context-specific:** Choose the most appropriate growth factor method based on the planning horizon, expected changes, and available data.
*   **Not a substitute for gravity models:** While useful for short-to-medium term forecasts, growth factor methods are generally superseded by more behaviorally sound gravity or destination choice models for longer-term planning or when significant changes are anticipated.

---
