# Incomplete information settings Bayesian nash metrics calculations algorithms optimization setups templates

<!-- SECTION_1_START -->
# Bayesian Games & Bayesian Nash Equilibrium (BNE)

## 1.1 Formal Academic Definition

> [!IMPORTANT]
> **Bayesian Game (Harsanyi 1967–68):** A *Bayesian game* (or *game with incomplete information*) is a tuple $\Gamma = \langle N, (S_i)_{i \in N}, (T_i)_{i \in N}, (u_i)_{i \in N}, (p_i)_{i \in N} \rangle$ where:
> - $N = \{1, 2, \dots, n\}$ is the set of players.
> - $S_i$ is the strategy set of player $i$.
> - $T_i$ is the *type set* (private information) of player $i$.
> - $u_i : S \times T \to \mathbb{R}$ is the *von Neumann–Morgenstern* utility function.
> - $p_i : T_i \to \Delta(T_{-i})$ is the *belief function* of player $i$ over the types of all opponents.
> - $T = \prod_{i=1}^{n} T_i$ is the joint type space, endowed with a *common prior* $\mu \in \Delta(T)$.

A **Bayesian Nash Equilibrium (BNE)** is a (possibly mixed) strategy profile $s^{*} = (s_1^{*}, \dots, s_n^{*})$ such that for every player $i$ and every type $t_i \in T_i$:

$$
s_i^{*}(\cdot \mid t_i) \in \arg\max_{s_i \in S_i} \; \mathbb{E}_{t_{-i} \sim p_i(\cdot \mid t_i)} \Big[ u_i\big(s_i, s_{-i}^{*}(t_{-i}), t_i, t_{-i}\big) \Big]
$$

> [!NOTE]
> **Course Outcome (CO) Mapping:** This topic directly maps to **CO3** of PECST711 — *Apply solution concepts for games with incomplete information, including Bayesian Nash equilibrium and rationalizability*.

---

## 1.2 Intuition — The "Foggy Poker Table" Analogy

Imagine a **poker table where one player cannot see the other player's hole cards**. The hidden cards are the *private type*. The first player knows his own hand but must form a *belief distribution* over what the opponent might hold. He then chooses a betting strategy that **maximises his expected payoff averaged over these beliefs**, and the opponent — knowing the first player is reasoning this way — best-responds to that behaviour.

| Poker Analogy | Formal Game-Theory Object |
|---|---|
| Hole cards | Type $t_i \in T_i$ |
| Visible community cards | Common prior $\mu$ |
| Probability of opponent's hand | Belief $p_i$ |
| Choosing bet size | Strategy $s_i(\cdot \mid t_i)$ |
| Equilibrium bet sizing | Bayesian Nash Equilibrium $s^{*}$ |

> [!VISUALIZATION CONTROL]
> **Concept:** Belief update and prior over a discrete type space
> **Input Equations (Desmos / GeoGebra):**
> * $p(\theta_1) = 0.4$, $p(\theta_2) = 0.6$ on a 2-point type space
> * Vertical axis: belief probability, horizontal axis: opponent's type
> **Visual Description:** Two-bar probability mass function over the opponent's type set, summing to **1**.

---

## 1.3 Harsanyi's Transformation — From Incomplete to Imperfect Information

> [!IMPORTANT]
> **Harsanyi's Type-Space Transformation (1967):** Every $n$-player game with incomplete information can be reformulated as an $n+1$-player *extensive-form game with perfect information* by introducing a **"Nature" player** who draws the type profile $t = (t_1, \dots, t_n)$ from the common prior $\mu \in \Delta(T)$, and then privately reveals $t_i$ to each player $i$.

This single trick is what allows the rest of classical game theory (Nash equilibrium, subgame perfection, etc.) to be applied uniformly to *incomplete* information settings.

### 1.3.1 Worked Toy Example — First-Price Sealed-Bid Auction

Two bidders compete for an object. Bidder $i$ values the object at $v_i$, drawn i.i.d. from $U[0,1]$. Each bidder submits a sealed bid $b_i \ge 0$. The highest bidder wins and pays his bid; ties split with probability $1/2$. Here:
- $T_i = [0, 1]$ (continuous type space)
- $S_i = \mathbb{R}_{\ge 0}$ (bidding strategies)
- $u_i(b_i, b_j, v_i) = (v_i - b_i) \cdot \mathbf{1}\{b_i > b_j\} + \tfrac{1}{2}(v_i - b_i) \cdot \mathbf{1}\{b_i = b_j\}$

The classical **symmetric linear BNE** is $b^{*}(v) = \tfrac{v}{2}$ for every $v \in [0,1]$.
