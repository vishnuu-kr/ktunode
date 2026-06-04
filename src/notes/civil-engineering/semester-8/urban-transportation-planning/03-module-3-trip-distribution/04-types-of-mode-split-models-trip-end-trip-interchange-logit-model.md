---
title: "Types of mode split models – trip end, trip interchange, logit model."
subject: "URBAN TRANSPORTATION PLANNING"
module: "Module 3: Trip Distribution "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811924"
status: "completed"
scrapedAt: "2026-05-20T19:04:51.166Z"
---
# Urban Transportation Planning: Module 3 - Trip Distribution: Types of Mode Split Models

## 1. Introduction to Mode Split Modeling

**What is Mode Split?**

Mode split refers to the process of determining the proportion of trips made by different transportation modes (e.g., private car, public transit, walking, cycling) for a given trip origin-destination pair or trip end.

**Why is Mode Split Modeling Important?**

*   **Forecasting Travel Demand:** Understanding how people choose their travel modes is crucial for predicting future travel patterns.
*   **Evaluating Transportation Policies:** It helps assess the impact of policies like introducing new transit lines, increasing parking fees, or implementing congestion pricing on mode choice.
*   **Infrastructure Planning:** Informed decisions about investing in different modes of transport (e.g., expanding bus networks vs. building new highways).
*   **Environmental Impact Assessment:** Quantifying the shift towards more sustainable modes can help predict and mitigate environmental consequences.

## 2. Types of Mode Split Models

Mode split models can be broadly categorized based on the level of aggregation and the underlying behavioral assumptions. The most common types are:

*   **Trip End Models**
*   **Trip Interchange Models**
*   **Logit Models (Disaggregate and Aggregate)**

---

### 2.1. Trip End Models (Abstract Mode Models)

**Key Concept:** These models predict the proportion of trips starting from (or ending at) a particular zone that will use each available mode, without explicitly considering the destination of the trip. They are often referred to as "abstract mode models" because they treat modes as abstract choices.

**How they work:**

*   They are calibrated using data on trip ends (production and attraction) and associated modal splits.
*   The modal split for a zone is assumed to be a function of the characteristics of the zone and the available modes.

**Input Data:**

*   Trip productions (originating from a zone).
*   Trip attractions (ending in a zone).
*   Socio-economic characteristics of zones (population, employment, income, auto ownership).
*   Level of service (LOS) characteristics of modes available to or serving the zone (e.g., transit frequency, travel time, cost).

**Outputs:**

*   Proportion of trips originating from (or ending in) a zone by each mode.

**Advantages:**

*   Relatively simple to understand and implement.
*   Can be useful for initial planning stages when detailed O-D data might be scarce.
*   Can be applied at an aggregate level (e.g., for entire zones).

**Disadvantages:**

*   **Limited behavioral realism:** They don't directly account for the trade-offs travelers make between different modes based on the specific characteristics of their journey (like travel time or cost on a specific route).
*   **Do not account for O-D pair specific factors:** The choice of mode is influenced by the specific origin and destination, which is not directly captured.
*   **Can be sensitive to zone definition:** Changes in zone boundaries can significantly affect the model's predictions.
*   **Difficulty in capturing cross-elasticities:** How a change in the level of service of one mode affects the usage of another mode is not well represented.

**Example:**

A trip end model might predict that for Zone A, 60% of trips starting from this zone will be by car, 30% by bus, and 10% by walking, based on Zone A's auto ownership, transit service level, and population density. It doesn't consider where these trips are going.

**Important Point to Remember:** Trip end models focus on the *characteristics of the trip maker's location* rather than the specific journey itself.

---

### 2.2. Trip Interchange Models (Intervening Opportunities Model - IOM)

**Key Concept:** These models determine the modal split for trips between a specific origin-destination (O-D) pair. They consider the characteristics of the journey between the origin and destination, including the travel time and cost of different modes.

**How they work:**

*   They are often calibrated using data from the **Gravity Model** (which distributes trips between O-D pairs) or directly from O-D modal split data.
*   The modal split between an O-D pair is a function of the utility or attractiveness of each mode for that specific journey.

**Key Variations:**

*   **Diversion Curve Models:** These models are based on empirically derived curves that show the proportion of trips that would divert from one mode to another as a function of the difference in travel time or cost between the two modes.
    *   **Example:** A diversion curve might show that if the bus journey is 10 minutes longer than driving, 20% of potential car users will switch to the bus.
*   **Intervening Opportunities Model (IOM) adapted for mode split:** While the IOM is primarily for trip distribution, the concept of intervening opportunities can be adapted. For mode split, it could imply that a traveler chooses the first mode they encounter that meets their criteria along their "journey path" of options.

**Input Data:**

*   O-D trip tables (from gravity model or other distribution methods).
*   Inter-zonal travel times and costs for each mode.
*   Socio-economic characteristics of origin and destination zones.
*   Level of service characteristics for each mode on the O-D path.

**Outputs:**

*   Modal split for each O-D pair.

**Advantages:**

*   More behaviorally realistic than trip end models as they consider the specific O-D pair and the journey characteristics.
*   Can capture the trade-offs between modes for specific trips.
*   More sensitive to changes in the level of service for specific routes.

**Disadvantages:**

*   Require more detailed O-D data and inter-zonal LOS data, which can be expensive to collect and process.
*   Calibration can be complex.
*   Might not fully capture the psychological factors influencing mode choice.

**Example:**

For trips between Zone X and Zone Y, a trip interchange model would consider the travel time by car, bus, and metro, the cost of each, and the frequency of service. If the metro is significantly faster and cheaper for this specific O-D pair, the model would predict a higher proportion of metro trips compared to car trips, even if Zone X has high car ownership.

**Important Point to Remember:** Trip interchange models focus on the *characteristics of the specific journey between an origin and a destination*.

---

### 2.3. Logit Models (Discrete Choice Models)

**Key Concept:** Logit models are a family of probabilistic models that predict the probability of a traveler choosing a particular mode from a set of available alternatives. They are based on the principle of **utility maximization**, where individuals choose the option that provides them with the highest utility.

**Utility Theory:**

*   The utility of an alternative for a traveler is composed of two parts:
    *   **Systematic Utility (V):** This is the part of utility that can be observed and modeled, based on the characteristics of the traveler and the alternative.
    *   **Random Utility (ε):** This is the unobserved part of utility, due to unquantifiable factors or random variations in traveler behavior.

*   **U = V + ε**

**The Logit Model Formula (Binary Logit):**

For a binary choice (e.g., car vs. bus), the probability of choosing mode A over mode B is given by:

**P(A) = e^(V_A) / (e^(V_A) + e^(V_B))**

Where:
*   P(A) is the probability of choosing mode A.
*   V_A is the systematic utility of mode A.
*   V_B is the systematic utility of mode B.

**The Logit Model Formula (Multinomial Logit - MNL):**

For more than two alternatives, the probability of choosing mode 'i' from a set of 'n' alternatives is:

**P(i) = e^(V_i) / Σ[e^(V_j)]  for j = 1 to n**

Where:
*   P(i) is the probability of choosing mode i.
*   V_i is the systematic utility of mode i.
*   V_j is the systematic utility of mode j.
*   Σ[e^(V_j)] is the sum of the exponentiated utilities of all available modes.

**How Systematic Utility (V) is Modeled:**

The systematic utility (V) is typically specified as a linear function of the attributes of the traveler and the alternative:

**V = β₀ + β₁X₁ + β₂X₂ + ... + β<mark>k</mark>X<mark>k</mark>**

Where:
*   β₀ is the constant term (capturing the base utility of the mode, often reflecting unobserved factors or tastes).
*   β₁, β₂, ..., β<mark>k</mark> are coefficients that represent the relative importance or weight given to each attribute.
*   X₁, X₂, ..., X<mark>k</mark> are the attributes (e.g., travel time, travel cost, income, auto ownership, parking availability).

**Types of Logit Models:**

1.  **Aggregate Logit Models:**
    *   **Key Concept:** Calibrated using aggregate data, such as zone-to-zone flows and average LOS characteristics for entire zones. The dependent variable is the proportion of trips by a certain mode.
    *   **Advantages:** Can be estimated with readily available aggregate data.
    *   **Disadvantages:** Lacks behavioral realism, assumes all travelers within a zone have similar characteristics, suffers from the "aggregation bias."

2.  **Disaggregate Logit Models:**
    *   **Key Concept:** Calibrated using individual-level data, where each observation represents a single trip made by a specific traveler. The dependent variable is the mode choice for that individual trip.
    *   **Advantages:** High behavioral realism, directly captures individual preferences and trade-offs, can be used to predict choices for new user groups or in new situations.
    *   **Disadvantages:** Requires extensive and detailed data at the individual level, which is expensive and time-consuming to collect.

**Key Attributes used in Logit Models:**

*   **Travel Time:** In-vehicle time, walk time, waiting time, access time, egress time.
*   **Travel Cost:** Fare, parking cost, fuel cost, vehicle operating cost.
*   **Socio-economic Variables:** Income, age, gender, household size, auto ownership, driver's license status.
*   **Service Attributes:** Frequency of service, reliability, comfort, perceived safety.
*   **Trip Characteristics:** Trip purpose, trip length.

**Example:**

Consider a choice between driving (D) and taking the bus (B) for commuting.

*   **V_D = β_time_D * Time_D + β_cost_D * Cost_D + β_income * Income + β_auto_own * Auto_Own**
*   **V_B = β_time_B * Time_B + β_cost_B * Cost_B + β_bus_freq * Bus_Freq + β_constant**

Where:
*   Time_D = Travel time by car
*   Time_B = Travel time by bus (including walk, wait, in-vehicle)
*   Cost_D = Cost of driving (fuel, parking)
*   Cost_B = Cost of bus fare
*   Income = Traveler's income
*   Auto_Own = Traveler's auto ownership
*   Bus_Freq = Frequency of bus service
*   β coefficients are estimated from data.

The probability of choosing the bus would be:
**P(Bus) = e^(V_B) / (e^(V_D) + e^(V_B))**

**The Independence of Irrelevant Alternatives (IIA) Property:**

*   **Key Concept:** A crucial assumption of the Multinomial Logit model is that the ratio of probabilities for choosing between two alternatives is independent of the presence or absence of other alternatives in the choice set.
*   **Implication:** If a new mode is introduced or an existing mode is removed, the relative probabilities between the remaining modes should not change.
*   **Problem:** This property can be violated in certain situations (e.g., the "red bus/blue bus" problem). If there are two very similar bus services, introducing a third, identical bus service might unfairly draw proportion from both original bus services rather than evenly splitting from all modes.

**Extensions to Logit Models:**

*   **Nested Logit:** Addresses the IIA problem by grouping alternatives with similar characteristics (e.g., all transit modes) into nests.
*   **Mixed Logit (or Random Parameters Logit):** Allows for unobserved heterogeneity in preferences by assuming coefficients vary randomly across individuals.

**Important Points to Remember:**

*   Logit models are based on utility maximization.
*   The probability of choosing a mode is proportional to the exponentiated utility of that mode.
*   Disaggregate models are generally preferred for their behavioral realism.
*   The IIA property is a key assumption and potential limitation of the basic MNL model.

---

## 3. Practice Questions and Exercises

**Question 1:**
Which type of mode split model is best suited for determining the proportion of trips that will switch from car to public transit if the bus fare increases by 10%? Explain why.

**Question 2:**
A transportation planner is using a mode split model and has the following utility functions for car (C) and transit (T):
*   V_C = -0.5 * TravelTime_C - 0.1 * TravelCost_C
*   V_T = -1.0 * TravelTime_T - 0.5 * TravelCost_T - 0.2 * WaitTime_T

Given the following values for a specific trip:
*   TravelTime_C = 30 minutes
*   TravelCost_C = $2.00
*   TravelTime_T = 45 minutes (including walk/wait)
*   TravelCost_T = $1.50
*   WaitTime_T = 10 minutes (this is an additional component of V_T)

Calculate the probability of choosing transit using a Multinomial Logit model.

**Question 3:**
What is the main limitation of "Trip End Models" in mode split analysis?

**Question 4:**
Explain the concept of "Utility Maximization" as it applies to Logit models in mode split analysis.

**Question 5:**
Discuss the advantages and disadvantages of disaggregate versus aggregate logit models.

---

## 4. Answers to Practice Questions

**Answer 1:**
The **Trip Interchange Model** or a **Disaggregate Logit Model** would be best suited.
*   **Trip Interchange Model:** These models directly consider the characteristics of the journey between a specific origin and destination and how changes in travel cost (like a fare increase) would affect modal choice for that specific route.
*   **Disaggregate Logit Model:** These models are calibrated based on individual choices and explicitly include travel cost as an attribute. They can accurately predict how a change in cost for a specific mode will affect the probability of choosing that mode. Trip End models are less suitable as they don't directly account for O-D specific journey characteristics or the trade-offs for a particular trip.

**Answer 2:**
First, we need to calculate the systematic utility for each mode:

*   **V_C = -0.5 * 30 - 0.1 * 2.00 = -15 - 0.2 = -15.2**
*   **V_T = -1.0 * 45 - 0.5 * 1.50 - 0.2 * 10 = -45 - 0.75 - 2 = -47.75**

Now, using the Multinomial Logit formula:

**P(T) = e^(V_T) / (e^(V_C) + e^(V_T))**

*   e^(V_C) = e^(-15.2) ≈ 2.75 x 10^-7
*   e^(V_T) = e^(-47.75) ≈ 1.60 x 10^-21

**P(T) = (1.60 x 10^-21) / (2.75 x 10^-7 + 1.60 x 10^-21)**

Since e^(V_C) is significantly larger than e^(V_T), the denominator is dominated by e^(V_C).

**P(T) ≈ (1.60 x 10^-21) / (2.75 x 10^-7) ≈ 5.82 x 10^-15**

This result indicates a very low probability of choosing transit, which is expected given the significantly higher travel time and less favorable cost/wait time attributes for transit in this scenario. The utility values are very negative, pushing the probabilities towards zero.

**Answer 3:**
The main limitation of "Trip End Models" is their **lack of behavioral realism** and their **inability to account for the specific characteristics of the journey between an origin and a destination**. They treat modal split as a function of zone characteristics, ignoring the actual trade-offs travelers make based on the travel time, cost, and other service levels on a particular route. This can lead to inaccurate predictions when the LOS of different modes varies significantly between O-D pairs.

**Answer 4:**
"Utility Maximization" in Logit models refers to the core assumption that **individuals make rational choices to maximize their personal satisfaction or "utility"** from a set of available travel options. Each travel mode offers a certain level of utility to a traveler, which is influenced by factors like travel time, cost, comfort, and convenience. The Logit model estimates this utility (as a function of observable attributes) and predicts that the traveler will choose the mode that provides them with the highest overall utility. The probability of choosing a specific mode is then directly related to how its utility compares to the utilities of all other available modes.

**Answer 5:**
**Disaggregate Logit Models:**
*   **Advantages:**
    *   **High Behavioral Realism:** Based on individual traveler choices, capturing personal preferences and trade-offs accurately.
    *   **Flexibility:** Can be used to predict choices for new traveler groups or in scenarios with different choice sets.
    *   **Detailed Insights:** Provides insights into the relative importance of various attributes (e.g., time vs. cost sensitivity).
*   **Disadvantages:**
    *   **Data Intensive:** Requires extensive and costly collection of individual-level trip data.
    *   **Complex Estimation:** Calibrating these models can be computationally intensive.

**Aggregate Logit Models:**
*   **Advantages:**
    *   **Data Availability:** Can be estimated using readily available aggregate transportation planning data (e.g., zone-to-zone flows).
    *   **Simpler Estimation:** Easier and less computationally demanding to estimate.
*   **Disadvantages:**
    *   **Lower Behavioral Realism:** Assumes homogeneity within zones, masking individual differences.
    *   **Aggregation Bias:** Potential for errors and distortions due to averaging individual behaviors.
    *   **Limited Flexibility:** Less adaptable to predicting choices for new market segments or policy changes not represented in the aggregate data.

---

## 5. Summary of Key Concepts

| Model Type           | Core Concept                                            | Focus                                      | Data Needs                                          | Key Advantage                                | Key Disadvantage                                         |
| :------------------- | :------------------------------------------------------ | :----------------------------------------- | :-------------------------------------------------- | :------------------------------------------- | :------------------------------------------------------ |
| **Trip End Models**  | Modal split is a function of zone characteristics.      | Zone attributes, trip ends.                | Zone socio-economics, LOS to/from zone.             | Simplicity.                                  | Low behavioral realism, ignores O-D specific factors. |
| **Trip Interchange** | Modal split is a function of O-D pair journey characteristics. | O-D specific travel time, cost, service. | O-D trip tables, inter-zonal LOS.                   | Better realism, captures O-D trade-offs.     | Requires more detailed data.                            |
| **Logit Models**     | Choice based on utility maximization (probabilistic).   | Traveler preferences and attribute trade-offs. | Individual trip data (disaggregate), aggregate data. | High behavioral realism (disaggregate).      | IIA property (MNL), data intensity (disaggregate).    |
| **Disaggregate Logit** | Calibrated with individual choice data.                 | Individual utility, attribute sensitivity. | Individual trip data.                               | Best behavioral realism.                     | Data intensive, costly.                                 |
| **Aggregate Logit**  | Calibrated with zone-level data.                        | Zone-level modal proportions.              | Aggregate O-D flow, zone LOS.                       | Uses available aggregate data.               | Aggregation bias, lower realism.                        |

---
This concludes the study notes for Module 3: Trip Distribution - Types of Mode Split Models. Remember to review the definitions, examples, and key advantages/disadvantages of each model type. Understanding the underlying assumptions and data requirements is crucial for selecting and applying appropriate models in urban transportation planning.
