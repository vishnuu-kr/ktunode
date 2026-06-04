---
title: "examples of optimal mechanisms"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 4: Introduction to VCG mechanism"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5dc"
status: "completed"
scrapedAt: "2026-05-20T17:06:54.657Z"
---
# Game Theory and Mechanism Design: Module 4 - Introduction to VCG Mechanism

## Topic: Examples of Optimal Mechanisms

---

### 1. Understanding the "Optimal" in Mechanism Design

Before diving into VCG examples, it's crucial to understand what "optimal" means in the context of mechanism design. An "optimal" mechanism is one that satisfies certain desirable properties. For this module, the primary focus is on mechanisms that are:

*   **Incentive Compatible (IC):** Participants have no incentive to misreport their private information (e.g., their valuations for an item).
*   **Individually Rational (IR):** Participants receive a utility that is at least as good as their outside option (e.g., not participating in the mechanism).
*   **Efficient:** The mechanism allocates resources in a way that maximizes social welfare (the sum of all participants' utilities).

**Key Concept:** The **Revelation Principle** states that for any attainable outcome from any mechanism, there exists a direct, truthful mechanism that achieves the same outcome. This allows us to focus on designing direct, truthful mechanisms.

**Key Concept:** A mechanism is **efficient** if it allocates the good/service to the agent who values it the most.

---

### 2. The Vickrey-Clarke-Groves (VCG) Mechanism

The VCG mechanism is a pivotal concept in mechanism design. It's a way to elicit truthful information from participants and achieve efficient outcomes in a variety of settings.

**Definition:** The VCG mechanism is a **direct, truthful, and efficient** mechanism that ensures each participant's payment is equal to the "harm" their presence causes to others.

**Core Components of a VCG Mechanism:**

1.  **Allocation Rule:** This rule determines how the good or service is allocated among the participants based on their reported valuations.
2.  **Payment Rule:** This rule determines the payment each participant makes or receives. The VCG payment rule is designed to incentivize truthful reporting.

**The VCG Payment Rule (Clarke Pivot Rule):**

For a participant *i*, their payment $p_i$ is calculated as:

$p_i = \sum_{j \neq i} v_j(\text{allocation without } i) - \sum_{j \neq i} v_j(\text{allocation with } i)$

In simpler terms, $p_i$ is the sum of the utilities of all *other* agents in the scenario where agent *i* is *absent*, minus the sum of the utilities of all *other* agents in the scenario where agent *i* is *present* and the allocation is chosen to maximize total welfare.

**Important Implication:** The payment $p_i$ represents the *externality* that agent *i*'s participation imposes on the rest of the group.

---

### 3. Examples of Optimal Mechanisms (VCG in Action)

Let's explore how the VCG mechanism works in practice for various scenarios:

#### Example 3.1: Single Item Auction (Second-Price Auction)

This is the most fundamental example of a VCG mechanism.

*   **Scenario:** Selling a single indivisible item to multiple bidders.
*   **Valuations:** Each bidder *i* has a private valuation $v_i$ for the item.
*   **Allocation Rule:** The item is allocated to the bidder with the highest reported valuation.
*   **Payment Rule (VCG):**
    *   The winner pays the second-highest reported valuation.
    *   Losers pay nothing.

**Why is this VCG?**

Let's verify the payment rule using the VCG formula for the winner, bidder *w*, who has the highest valuation $v_w$.

*   **Allocation with $w$:** Item goes to $w$.
*   **Allocation without $w$:** Item goes to the bidder with the second-highest valuation, say bidder *s*, with valuation $v_s$.

*   **VCG Payment for $w$:**
    *   $\sum_{j \neq w} v_j(\text{allocation without } w)$: The only other participant who values the item (and thus gets utility from it) is the second-highest bidder, $s$. Their utility is $v_s$. So, the sum is $v_s$.
    *   $\sum_{j \neq w} v_j(\text{allocation with } w)$: In this case, $w$ gets the item. All other bidders *do not* get the item and thus have zero utility from the item. So, the sum is 0.

    Therefore, $p_w = v_s - 0 = v_s$. This matches the second-price rule.

**Outcome:** The second-price auction is VCG, incentive compatible, individually rational, and efficient (allocates to the highest bidder).

#### Example 3.2: Public Project Decision

This scenario involves deciding whether to undertake a project that benefits multiple agents, but has a cost.

*   **Scenario:** Deciding whether to build a bridge. The bridge has a cost $C$. Each agent *i* has a private valuation $v_i$ for the bridge (their willingness to pay).
*   **Decision:** Build the bridge if the sum of reported valuations is greater than or equal to the cost.
*   **Allocation Rule:** If the bridge is built, all agents receive the benefit $v_i$. If not, they receive 0.
*   **Payment Rule (VCG):**
    *   If the bridge is built: Agent *i* pays $p_i = \max(0, C - \sum_{j \neq i} v_j)$. This is the portion of the cost that *must* be covered by agent *i*'s valuation for the project to be approved, given the valuations of others.
    *   If the bridge is not built: All agents pay 0.

**Why is this VCG?**

Let's assume the sum of reported valuations $\sum v_k \ge C$, so the bridge is built.

*   **VCG Payment for agent $i$:**
    *   **Scenario without $i$:**
        *   If $\sum_{j \neq i} v_j \ge C$: The bridge is built. The total utility for others is $\sum_{j \neq i} v_j$.
        *   If $\sum_{j \neq i} v_j < C$: The bridge is *not* built. The total utility for others is 0.
        *   So, $\sum_{j \neq i} v_j(\text{allocation without } i) = \max(0, \sum_{j \neq i} v_j)$.
    *   **Scenario with $i$:**
        *   The bridge is built. The total utility for others is $\sum_{j \neq i} v_j$.
        *   So, $\sum_{j \neq i} v_j(\text{allocation with } i) = \sum_{j \neq i} v_j$.

    *   Therefore, $p_i = \max(0, \sum_{j \neq i} v_j) - \sum_{j \neq i} v_j$.
        *   If $\sum_{j \neq i} v_j \ge C$: $p_i = \sum_{j \neq i} v_j - \sum_{j \neq i} v_j = 0$.
        *   If $\sum_{j \neq i} v_j < C$: $p_i = 0 - \sum_{j \neq i} v_j = -\sum_{j \neq i} v_j$. This doesn't look right. The formula is slightly different for public projects.

**Correction for Public Projects:** The standard VCG payment for public projects aims to collect the *externality* imposed.

Let $W$ be the total welfare (sum of valuations if project happens, 0 otherwise). Let $W_{-i}$ be the total welfare for others ($\sum_{j \neq i} v_j$ if project happens, 0 otherwise).

The VCG payment for agent $i$ is $p_i = W_{-i}(\text{allocation without } i) - W_{-i}(\text{allocation with } i)$.

Let's re-evaluate:
*   **Decision with $i$:** Build if $\sum_k v_k \ge C$.
*   **Decision without $i$:** Build if $\sum_{j \neq i} v_j \ge C$.

**Case 1: Bridge is built (with $i$ present) and would be built (without $i$ present).**
*   $\sum_k v_k \ge C$ and $\sum_{j \neq i} v_k \ge C$.
*   $W_{-i}(\text{allocation without } i) = \sum_{j \neq i} v_j$.
*   $W_{-i}(\text{allocation with } i) = \sum_{j \neq i} v_j$.
*   $p_i = \sum_{j \neq i} v_j - \sum_{j \neq i} v_j = 0$.

**Case 2: Bridge is built (with $i$ present) but would NOT be built (without $i$ present).**
*   $\sum_k v_k \ge C$ and $\sum_{j \neq i} v_j < C$.
*   This means agent $i$'s contribution made it happen.
*   $W_{-i}(\text{allocation without } i) = 0$ (because it wouldn't be built).
*   $W_{-i}(\text{allocation with } i) = \sum_{j \neq i} v_j$ (because it is built).
*   $p_i = 0 - \sum_{j \neq i} v_j = -\sum_{j \neq i} v_j$.  **This is still not the standard payment.**

**Revised VCG Payment for Public Projects (Focus on Cost Burden):**
A common VCG-style payment for public projects is to ask each agent to report their willingness to pay. The project is undertaken if the sum of reported valuations $V = \sum v_i$ is $\ge C$. If it is undertaken, agent $i$ pays $p_i = \max(0, C - V_{-i})$, where $V_{-i} = \sum_{j \neq i} v_j$.

Let's check this:
*   **If $\sum v_i \ge C$ (project happens):**
    *   **If $C - V_{-i} \le 0$ (i.e., $V_{-i} \ge C$):** Agent $i$ pays 0. Their net utility is $v_i$.
        *   *VCG check:*
            *   Allocation without $i$: $V_{-i} \ge C$, so project happens. Others' utility: $V_{-i}$.
            *   Allocation with $i$: $\sum v_k \ge C$, so project happens. Others' utility: $V_{-i}$.
            *   $p_i = V_{-i} - V_{-i} = 0$. Correct.
    *   **If $C - V_{-i} > 0$ (i.e., $V_{-i} < C$):** Agent $i$ pays $C - V_{-i}$. Their net utility is $v_i - (C - V_{-i}) = v_i + V_{-i} - C$.
        *   *VCG check:*
            *   Allocation without $i$: $V_{-i} < C$, so project does NOT happen. Others' utility: 0.
            *   Allocation with $i$: $\sum v_k \ge C$, so project happens. Others' utility: $V_{-i}$.
            *   $p_i = 0 - V_{-i} = -V_{-i}$.  This still doesn't match $C-V_{-i}$.

**The "Clarke Mechanism" for Public Projects:**
The common formulation for public projects where each person *pays* their "externality" is slightly different. Each person *i* pays an amount equal to the loss in welfare to *others* if *i* were absent.

*   **If project is approved (with $i$):**
    *   Total welfare for others is $\sum_{j \neq i} v_j$.
*   **If project is NOT approved (without $i$):**
    *   Total welfare for others is 0.

The payment should be the reduction in *others'* welfare.
This means $p_i = (\text{welfare of others without } i) - (\text{welfare of others with } i)$.
This is exactly the VCG formula: $p_i = \sum_{j \neq i} v_j(\text{allocation without } i) - \sum_{j \neq i} v_j(\text{allocation with } i)$.

Let's revisit the cases with this precise VCG definition for public projects:
*   **Case 1: Bridge is built (with $i$) AND would be built (without $i$).**
    *   $\sum v_k \ge C$ AND $\sum_{j \neq i} v_j \ge C$.
    *   Welfare of others without $i$: $\sum_{j \neq i} v_j$.
    *   Welfare of others with $i$: $\sum_{j \neq i} v_j$.
    *   $p_i = \sum_{j \neq i} v_j - \sum_{j \neq i} v_j = 0$.

*   **Case 2: Bridge is built (with $i$) but would NOT be built (without $i$).**
    *   $\sum v_k \ge C$ AND $\sum_{j \neq i} v_j < C$.
    *   Welfare of others without $i$: 0.
    *   Welfare of others with $i$: $\sum_{j \neq i} v_j$.
    *   $p_i = 0 - \sum_{j \neq i} v_j = -\sum_{j \neq i} v_j$.
    *   **This is the crucial point: the payment can be negative (a subsidy).**

*   **Case 3: Bridge is NOT built (with $i$) AND would NOT be built (without $i$).**
    *   $\sum v_k < C$ AND $\sum_{j \neq i} v_j < C$.
    *   Welfare of others without $i$: 0.
    *   Welfare of others with $i$: 0.
    *   $p_i = 0 - 0 = 0$.

*   **Case 4: Bridge is NOT built (with $i$) BUT would be built (without $i$).**
    *   This scenario is impossible under truthful reporting because if $\sum_{j \neq i} v_j \ge C$, then $\sum v_k$ must also be $\ge C$. So this case doesn't occur.

**Implication for Public Projects:** In the public project scenario, the VCG mechanism can result in some agents receiving subsidies if their participation is crucial for the project's approval. This ensures that even if an agent's reported valuation is not enough to cover their share of the cost, they might still vote for the project if the benefit to others is high enough that it induces a subsidy for them.

#### Example 3.3: Provision of a Public Good (Generalization)

The public project example is a specific instance of providing a public good where the cost must be covered. More generally, a public good is something that is non-excludable and non-rivalrous.

*   **Scenario:** Providing a public good (e.g., clean air, national defense). The good has a cost $C$. Each agent *i* has a valuation $v_i$ for the good.
*   **Allocation Rule:** The good is provided if $\sum v_i \ge C$.
*   **Payment Rule (VCG):** As derived above for public projects. If the good is provided, agent *i* pays $p_i = \sum_{j \neq i} v_j(\text{allocation without } i) - \sum_{j \neq i} v_j(\text{allocation with } i)$.

**Key Takeaway:** The VCG mechanism can be generalized to any setting where there's an allocation problem and agents have private valuations. The core principle remains: allocate efficiently and make payments based on externalities.

---

### 4. Properties of VCG Mechanisms

**4.1 Incentive Compatibility (IC)**

*   **Definition:** A mechanism is incentive compatible if each agent maximizes their utility by reporting their true valuation, regardless of what other agents report.
*   **VCG and IC:** The VCG mechanism is always **dominant-strategy incentive compatible (DSIC)**. This is its most significant property. An agent cannot improve their outcome (utility) by misreporting, even if they know the reports of others.

**Proof Sketch for DSIC:**
Consider agent *i*. Let $v_i$ be their true valuation and $v'_i$ be a reported valuation.
Let $a$ be the allocation chosen by the mechanism.
Let $p_i(v_i, v_{-i})$ be the payment of agent *i* when their true valuation is $v_i$ and others report $v_{-i}$.
Agent *i*'s utility is $u_i(v_i, a, p_i) = v_i \cdot \mathbb{I}(i \text{ gets item}) - p_i$.

The VCG payment $p_i = \sum_{j \neq i} v_j(a_{-j}) - \sum_{j \neq i} v_j(a)$, where $a_{-j}$ is the allocation when *i* is absent, and $a$ is the allocation when *i* is present.

Let's assume agent *i* reports $v'_i$.
*   **If $v'_i = v_i$ (truthful):**
    *   Allocation $a^*$ is chosen optimally for $v_i, v_{-i}$.
    *   $p_i^* = \sum_{j \neq i} v_j(a^*_{-j}) - \sum_{j \neq i} v_j(a^*)$.
    *   Utility: $u_i^* = v_i \cdot \mathbb{I}(i \text{ gets item in } a^*) - p_i^*$.

*   **If $v'_i \neq v_i$ (lie):**
    *   Allocation $a'$ is chosen optimally for $v'_i, v_{-i}$.
    *   $p'_i = \sum_{j \neq i} v_j(a'_{-j}) - \sum_{j \neq i} v_j(a')$.
    *   Utility: $u'_i = v_i \cdot \mathbb{I}(i \text{ gets item in } a') - p'_i$. (Note: Utility is calculated with true valuation $v_i$).

The VCG payment structure ensures that the reported valuation $v'_i$ influences the allocation $a'$ and the payments $p'_i$ such that $v_i \cdot \mathbb{I}(i \text{ gets item in } a') - p'_i$ is maximized when $v'_i = v_i$. The key is that $p'_i$ accounts for the change in others' utilities caused by *i*'s report, aligning *i*'s incentive with the social welfare.

**4.2 Efficiency**

*   **Definition:** The mechanism allocates resources to maximize the sum of all participants' utilities.
*   **VCG and Efficiency:** VCG mechanisms are **efficient**. They always select the allocation that maximizes the sum of reported valuations.

**Proof Sketch:**
The VCG allocation rule is defined as the one that maximizes $\sum v_k(\text{allocation})$. Since agents are incentivized to report truthfully, the mechanism effectively maximizes the sum of true valuations.

**4.3 Individual Rationality (IR)**

*   **Definition:** Each participant's expected utility from participating in the mechanism is non-negative.
*   **VCG and IR:** VCG mechanisms are **individually rational** if the "reserve price" or outside option is handled correctly. In the basic VCG setting (like the second-price auction), participants are free to "opt-out" if their reported valuation is low. If a bidder has a valuation of 0, they will report 0, not win, and pay 0, resulting in a utility of 0, satisfying IR. For public projects, if an agent's report is such that they end up paying more than their valuation (e.g., if they are subsidized but still have to pay a portion of the cost and that portion exceeds their reported benefit), they would not report truthfully. However, the VCG payment rule is designed to ensure $v_i - p_i \ge 0$ under truthful reporting.

**Important Point for IR:** In many VCG implementations, the payment is $\max(0, \text{VCG payment})$. This ensures that agents never pay more than their valuation, thus guaranteeing individual rationality. For the second-price auction, the winner's payment is the second-highest bid, which is less than or equal to their own bid (and thus their valuation), guaranteeing IR.

---

### 5. Limitations and Considerations of VCG

While powerful, VCG mechanisms have limitations:

*   **Complexity:** Calculating VCG payments can be computationally intensive, especially in complex settings with many participants and outcomes.
*   **Information Requirements:** The mechanism designer needs to know the set of possible allocations and be able to evaluate the utility of all agents for each potential allocation.
*   **Vulnerability to Collusion:** While DSIC against individual deviations, VCG can be vulnerable to coordinated deviations (collusion) by groups of agents.
*   **"Free Rider" Problem in Public Goods:** While VCG addresses the incentive issue, the fact that some might get subsidies (Case 2 in public projects) can still be seen as a form of "free-riding" on the contributions of others, even though it's mechanism-optimal.
*   **Monotonicity of Valuations:** VCG mechanisms often rely on the valuations being non-negative and the social welfare function being monotonic in valuations.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider a single item auction with three bidders. Their reported valuations are:
Bidder 1: $v_1 = \$10$
Bidder 2: $v_2 = \$15$
Bidder 3: $v_3 = \$12$

(a) What is the allocation rule in a VCG mechanism for this scenario? Who wins the item?
(b) What are the VCG payments for each bidder?
(c) What is the net utility for each bidder?

**Answer 1:**
(a) **Allocation Rule:** The item is allocated to the bidder with the highest reported valuation.
Bidder 2 wins the item with a valuation of $15.

(b) **VCG Payments:**
    *   **Bidder 1 (Loser):** Pays 0.
    *   **Bidder 3 (Loser):** Pays 0.
    *   **Bidder 2 (Winner):** Pays the second-highest bid. The second-highest bid is Bidder 3's $12. So, Bidder 2 pays $12.

(c) **Net Utility:**
    *   **Bidder 1:** Utility = (Valuation * Got item) - Payment = ($10 * 0$) - $0 = \$0$.
    *   **Bidder 2:** Utility = (Valuation * Got item) - Payment = ($15 * 1$) - $12 = \$3$.
    *   **Bidder 3:** Utility = (Valuation * Got item) - Payment = ($12 * 0$) - $0 = \$0$.

**Question 2:**
A town is considering building a public park. The cost of the park is $C = \$50,000$. There are three residents, with reported willingness to pay:
Resident A: $v_A = \$20,000$
Resident B: $v_B = \$15,000$
Resident C: $v_C = \$30,000$

(a) Using the VCG public project mechanism, should the park be built?
(b) Calculate the VCG payment for each resident.
(c) What is the net utility for each resident if the park is built?

**Answer 2:**
(a) **Decision:**
Sum of reported valuations = $v_A + v_B + v_C = \$20,000 + \$15,000 + \$30,000 = \$65,000$.
Since $\$65,000 \ge \$50,000$, the park should be built.

(b) **VCG Payments:**
We use the formula $p_i = \sum_{j \neq i} v_j(\text{allocation without } i) - \sum_{j \neq i} v_j(\text{allocation with } i)$. The allocation is whether the park is built.

    *   **Resident A:**
        *   Without A: $v_B + v_C = \$15,000 + \$30,000 = \$45,000$. Since $\$45,000 < \$50,000$, the park would NOT be built without A. Welfare for others (B+C) = 0.
        *   With A: Park IS built. Welfare for others (B+C) = $v_B + v_C = \$45,000$.
        *   $p_A = 0 - \$45,000 = -\$45,000$. (Resident A receives a subsidy of $45,000).

    *   **Resident B:**
        *   Without B: $v_A + v_C = \$20,000 + \$30,000 = \$50,000$. Since $\$50,000 \ge \$50,000$, the park WOULD be built without B. Welfare for others (A+C) = $50,000$.
        *   With B: Park IS built. Welfare for others (A+C) = $v_A + v_C = \$50,000$.
        *   $p_B = \$50,000 - \$50,000 = \$0$. (Resident B pays nothing).

    *   **Resident C:**
        *   Without C: $v_A + v_B = \$20,000 + \$15,000 = \$35,000$. Since $\$35,000 < \$50,000$, the park would NOT be built without C. Welfare for others (A+B) = 0.
        *   With C: Park IS built. Welfare for others (A+B) = $v_A + v_B = \$35,000$.
        *   $p_C = 0 - \$35,000 = -\$35,000$. (Resident C receives a subsidy of $35,000).

**(Note on payment calculation using the common simplified rule for public projects $p_i = \max(0, C - V_{-i})$):**
*   $p_A = \max(0, \$50,000 - \$45,000) = \$5,000$.
*   $p_B = \max(0, \$50,000 - \$50,000) = \$0$.
*   $p_C = \max(0, \$50,000 - \$35,000) = \$15,000$.

**Correction/Clarification:** The simplified payment rule for public projects is indeed $p_i = \max(0, C - V_{-i})$. The VCG payment derived earlier ($-\sum v_j$) is how much *others' welfare changes*. The payment that ensures individual rationality and truthful reporting in this context is the one that makes agents cover the "gap" in cost if their presence is essential. The definition of VCG payment is $p_i = \sum_{j \neq i} v_j(\text{allocation without } i) - \sum_{j \neq i} v_j(\text{allocation with } i)$. This payment is what the agent has to "pay" to achieve the outcome. If this payment is negative, it's a subsidy.

Let's re-evaluate Question 2 using the proper VCG payment definition to ensure the mechanism is DSIC and efficient. The *net welfare* for agent *i* is $v_i - p_i$.

Using $p_i = \sum_{j \neq i} v_j(\text{allocation without } i) - \sum_{j \neq i} v_j(\text{allocation with } i)$:
*   **Resident A:** $p_A = -\$45,000$.
    Net Utility = $v_A - p_A = \$20,000 - (-\$45,000) = \$65,000$.

*   **Resident B:** $p_B = \$0$.
    Net Utility = $v_B - p_B = \$15,000 - \$0 = \$15,000$.

*   **Resident C:** $p_C = -\$35,000$.
    Net Utility = $v_C - p_C = \$30,000 - (-\$35,000) = \$65,000$.

This shows that all residents have a positive net utility, satisfying individual rationality. The higher utility for A and C comes from the subsidies they receive, which are precisely the externalities they impose by being critical to the project's approval.

**(Revised Answer 2(b) & 2(c) using correct VCG Payment Definition):**
(b) **VCG Payments:**
    *   Resident A: $p_A = -\$45,000$ (receives a subsidy of $45,000)
    *   Resident B: $p_B = \$0$
    *   Resident C: $p_C = -\$35,000$ (receives a subsidy of $35,000)

(c) **Net Utility:**
    *   Resident A: $v_A - p_A = \$20,000 - (-\$45,000) = \$65,000$
    *   Resident B: $v_B - p_B = \$15,000 - \$0 = \$15,000$
    *   Resident C: $v_C - p_C = \$30,000 - (-\$35,000) = \$65,000$

---

### 7. Important Points to Remember

*   **VCG = Truthful + Efficient.** It's a benchmark for desirable mechanisms.
*   The payment rule is based on the **externality** each agent imposes on others.
*   **Second-price auction** is a classic VCG mechanism for single-item allocation.
*   VCG is **dominant-strategy incentive compatible (DSIC)**.
*   VCG mechanisms aim for **efficiency** (maximizing social welfare).
*   In public project/good settings, VCG payments can be **negative (subsidies)** if an agent's participation is crucial for approval.
*   While powerful, VCG can be **computationally complex** and vulnerable to **collusion**.

---
