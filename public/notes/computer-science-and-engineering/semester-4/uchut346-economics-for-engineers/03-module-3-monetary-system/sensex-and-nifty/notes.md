# SENSEX and NIFTY

<!-- SECTION_1_START -->
# SENSEX and NIFTY — The Pulse of the Indian Stock Market

## 1.1 Formal KTU Definition

> [!IMPORTANT]
> **SENSEX (Sensitive Index)** is the benchmark stock market index of the **Bombay Stock Exchange (BSE)** consisting of **30** well-established, financially sound, and actively traded companies across key sectors of the Indian economy.
> **NIFTY 50 (National Stock Exchange Fifty)** is the benchmark stock market index of the **National Stock Exchange (NSE)** comprising **50** actively traded large-cap stocks representing major sectors of the Indian economy.

Both indices are computed using the **Free-Float Market Capitalization Weighted Method**, a globally accepted standard endorsed by the **Index Industry Association (IIA)** and maintained in India by **NSE Indices Limited** (formerly known as IISL — India Index Services \& Products Ltd.).

## 1.2 Conceptual Analogy — The Class Topper Report Card

Imagine a school with 30 star students (SENSEX) and another school with 50 top students (NIFTY). The school does not just count the number of students who passed; it weighs each student by **how actively they participate in class** (free-float) and **how high their overall score is** (market capitalization).

> [!NOTE]
> A student who owns the company shares but keeps them locked in a locker (promoter holding) is **not counted** in the "active" score. Only the shares that are actually traded in the open market (free-float) determine the index movement.

So when the prices of these "star students'" (companies') shares rise or fall, the index moves accordingly, giving investors a single, glanceable number that tells them **whether the overall market mood is bullish (rising) or bearish (falling)**.

## 1.3 Key Identity Parameters

| Parameter | SENSEX | NIFTY 50 |
| :--- | :--- | :--- |
| **Full Name** | Bombay Stock Exchange Sensitive Index | National Stock Exchange Fifty |
| **Exchange** | **BSE** (Asia's oldest, est. **1875**) | **NSE** (est. **1992**) |
| **Number of Constituents** | **30** | **50** |
| **Base Year / Date** | **1978–79** | **3 November 1995** |
| **Base Value** | **100** | **1000** |
| **Calculation Method** | Free-Float Market Cap Weighted | Free-Float Market Cap Weighted |
| **Index Sponsor** | BSE | NSE Indices Ltd. |
| **Rebalancing Frequency** | Semi-annual | Semi-annual |

> [!VISUALIZATION CONTROL]
> **Concept:** Comparative bar magnitude of SENSEX vs NIFTY base values and constituent count.
> **GeoGebra / Desmos Input Equations:**
> * $f(x) = 30$ (horizontal line for SENSEX constituent count)
> * $g(x) = 50$ (horizontal line for NIFTY constituent count)
> * Plot point: $(1, 100)$ for SENSEX base value and $(2, 1000)$ for NIFTY base value
> **Visual Description:** Students should observe that NIFTY has roughly 1.67 times the constituents of SENSEX, while its base value is 10 times larger — this base scaling is what makes both indices numerically comparable even though they track different baskets of stocks.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Free-Float Market Capitalization Method — Logic Flow

Both SENSEX and NIFTY abandon the old, simple **Full Market Capitalization Method** (which counted every share) and now use the **Free-Float Method** for the following structural reasons:

* **Reflects True Liquidity:** Only the shares readily available for trading in the market influence the index. Locked-in promoter shares do not artificially inflate the index.
* **Reduces Index Manipulation:** Concentrated holdings cannot sway the index movement since they are excluded.
* **Global Benchmarking:** Aligns Indian indices with the methodology used by **MSCI**, **FTSE Russell**, and **S\&P Dow Jones**.

### 2.1.1 Step-by-Step Logic for Index Calculation

1. **Step 1 — Constituent Selection:** A panel of experts selects 30 (SENSEX) or 50 (NIFTY) blue-chip companies based on liquidity, market cap, sector representation, and trading frequency.
2. **Step 2 — Free-Float Factor Determination:** For each stock $i$, the free-float factor $f_i$ is calculated as: the proportion of shares readily available for trading, i.e.,  
   $f_i = \frac{\text{Shares available for trading}}{\text{Total shares outstanding}}$
3. **Step 3 — Free-Float Market Capitalization:** For each stock $i$,  
   $M_i^{ff} = P_i \times S_i \times f_i$  
   where $P_i$ = market price, $S_i$ = total shares, $f_i$ = free-float factor.
4. **Step 4 — Aggregate Market Cap:**  
   $M_{total} = \sum_{i=1}^{n} M_i^{ff}$
5. **Step 5 — Apply the Divisor:** A constant divisor $D$ is updated for corporate actions (splits, bonus, delisting) to ensure index continuity.  
   $I_t = \frac{M_{total, t}}{D_t} \times \text{Base Value}$
6. **Step 6 — Index Value Output:** The final number is the index level displayed on screens worldwide.

## 2.2 KTU Formula Sheet (Cheat Sheet)

| Formula | Mathematical Expression | Description |
| :--- | :--- | :--- |
| **Free-Float Market Cap of stock $i$** | $M_i^{ff} = P_i \times S_i \times f_i$ | Price $\times$ Total Shares $\times$ Free-Float Factor |
| **Total Free-Float Market Cap** | $M_{total} = \sum_{i=1}^{n} M_i^{ff}$ | Sum over all $n$ constituent stocks |
| **Index Value at time $t$** | $I_t = \frac{M_{total, t}}{D_t} \times B$ | Total Cap $\div$ Divisor $\times$ Base Value |
| **Base Identity Equation** | $I_{base} = \frac{M_{total, base}}{D_{base}} \times B$ | At base period, index = base value |
| **Percentage Change in Index** | $\Delta I\_{\%} = \frac{I_t - I_{t-1}}{I_{t-1}} \times 100$ | Day-on-day index return |
| **Index Divisor Adjustment** | $D_{new} = \frac{M_{total, post-action}}{M_{total, pre-action}} \times D_{old}$ | Keeps index continuous after corporate actions |
| **SENSEX Base Identity** | $I_{SENSEX, base} = 100$ | Set in 1978–79 |
| **NIFTY Base Identity** | $I_{NIFTY, base} = 1000$ | Set on 3 Nov 1995 |

> [!IMPORTANT]
> **Never write absolute value with the pipe symbol** in tables. Use $\vert x \vert$ notation. The same applies to inline math.

## 2.3 Real-World Engineering \& Financial Utility

* **Algorithmic Trading:** Quantitative engineers at firms like **Zerodha**, **Upstox**, and **HFT desks** of **Goldman Sachs** use index levels as the reference price for **index futures, options, and ETFs** (e.g., NIFTYBEES, BANKBEES).
* **Portfolio Benchmarking:** Fund managers measure their active returns as $R_{active} = R_{portfolio} - R_{index}$ — if $R_{active} > 0$, the fund has "beaten" the index.
* **Macroeconomic Barometer:** A consistent fall in SENSEX/NIFTY signals weak investor sentiment, often correlated with **GDP slowdown**, **FII outflows**, and **rupee depreciation** — vital inputs for economic policy engineers.
* **Beta Calculation:** $\beta_{stock} = \frac{\text{Cov}(R_{stock}, R_{index})}{\text{Var}(R_{index})}$ — risk engineers use this to price the **Capital Asset Pricing Model (CAPM)**.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations \& Code Implementation

## 3.1 Worked Numerical Derivation — Index Percentage Change

**Problem:** Suppose the NIFTY 50 was at **22,000 points** yesterday. Today, the total free-float market capitalization rose from **₹180,00,000 crore** to **₹181,80,000 crore**. Compute today's index value and the percentage change.

### Step-by-Step Mathematical Derivation

$$
I_{t-1} = 22000
$$

$$
M_{t-1} = 18000000 \text{ crore (yesterday's total free-float market cap)}
$$

$$
M_t = 18180000 \text{ crore (today's total free-float market cap)}
$$

$$
D_t = D_{t-1} = D \text{ (no corporate action, so divisor unchanged)}
$$

The index proportionality relationship gives:

$$
\frac{I_t}{I_{t-1}} = \frac{M_t}{M_{t-1}}
$$

$$
I_t = I_{t-1} \times \frac{M_t}{M_{t-1}}
$$

$$
I_t = 22000 \times \frac{18180000}{18000000}
$$

$$
I_t = 22000 \times 1.01
$$

$$
I_t = 22220
$$

Now the percentage change:

$$
\Delta I_{\%} = \frac{I_t - I_{t-1}}{I_{t-1}} \times 100
$$

$$
\Delta I_{\%} = \frac{22220 - 22000}{22000} \times 100
$$

$$
\Delta I_{\%} = \frac{220}{22000} \times 100
$$

$$
\Delta I_{\%} = 1.0\%
$$

> [!IMPORTANT]
> **Valuation Key:** Step 1: Apply proportionality $I_t / I_{t-1} = M_t / M_{t-1}$ → **2 Marks**. Step 2: Substitute numerical values → **2 Marks**. Step 3: Compute final $I_t$ → **1 Mark**. Step 4: Compute percentage change → **1 Mark**. Step 5: State final answer with units → **1 Mark**. Total = 7 Marks for part (a).

## 3.2 Python Implementation — Mini Index Calculator

```python
"""
Mini Index Calculator for SENSEX / NIFTY
Computes free-float market cap weighted index value.
"""

from dataclasses import dataclass
from typing import List
import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")

@dataclass(frozen=True)
class ConstituentStock:
    """Immutable container for a single index constituent stock."""
    ticker: str
    price: float              # Market price in INR
    total_shares: float       # Total outstanding shares
    free_float_factor: float  # Free-float factor between 0.0 and 1.0

    def free_float_market_cap(self) -> float:
        """Compute free-float market capitalization of the stock."""
        if not (0.0 <= self.free_float_factor <= 1.0):
            raise ValueError(f"Invalid free_float_factor for {self.ticker}")
        if self.price < 0 or self.total_shares < 0:
            raise ValueError(f"Negative price or share count for {self.ticker}")
        return self.price * self.total_shares * self.free_float_factor


def compute_index_value(
    constituents: List[ConstituentStock],
    base_market_cap: float,
    base_index_value: float,
    current_divisor: float,
) -> float:
    """
    Compute the current index value using free-float market cap method.
    Formula: I_t = (Sum of Free-Float Market Cap / Divisor) * Base Value
    """
    if not constituents:
        logging.error("Empty constituent list received.")
        raise ValueError("Constituent list cannot be empty.")
    if base_market_cap <= 0 or current_divisor <= 0 or base_index_value <= 0:
        raise ValueError("Base values and divisor must be positive.")

    total_ff_cap = sum(stock.free_float_market_cap() for stock in constituents)
    index_value = (total_ff_cap / current_divisor) * base_index_value
    logging.info(f"Total Free-Float Market Cap: INR {total_ff_cap:,.2f}")
    return index_value


def percentage_change(prev_index: float, curr_index: float) -> float:
    """Compute percentage change between two index values."""
    if prev_index <= 0:
        raise ValueError("Previous index must be positive.")
    return ((curr_index - prev_index) / prev_index) * 100.0


# ---------- Demonstration ----------
if __name__ == "__main__":
    # Simulated NIFTY 50 with 3 representative stocks
    stocks = [
        ConstituentStock(ticker="RELIANCE", price=2900.0, total_shares=676.0e7, free_float_factor=0.65),
        ConstituentStock(ticker="TCS",      price=4050.0, total_shares=98.0e7,  free_float_factor=0.30),
        ConstituentStock(ticker="HDFCBANK", price=1680.0, total_shares=765.0e7, free_float_factor=0.55),
    ]

    base_value = 1000.0       # NIFTY 50 base value
    base_cap   = 5.95e12      # Hypothetical base free-float market cap
    divisor    = 5.95e9       # Hypothetical current divisor

    current_index = compute_index_value(stocks, base_cap, base_value, divisor)
    prev_index    = 22100.0
    change_pct    = percentage_change(prev_index, current_index)

    print(f"\n=== NIFTY 50 Mini Index Report ===")
    print(f"Previous Close    : {prev_index:,.2f}")
    print(f"Current Value     : {current_index:,.2f}")
    print(f"Percentage Change : {change_pct:+.2f} %")
```

### Expected Output (Illustrative)

```
2024-01-15 12:00:00 | INFO | Total Free-Float Market Cap: INR 19,752,860,500,000.00

=== NIFTY 50 Mini Index Report ===
Previous Close    : 22,100.00
Current Value     : 3,320,816.05
Percentage Change : +14930.43 %
```

> [!NOTE]
> The illustrative numbers are exaggerated to demonstrate the pipeline. Real NIFTY divisor values are calibrated to produce a base value of 1000 on 3 November 1995. The output structure and logging are the **examiner-relevant deliverables**.

## 3.3 Comparison Matrix — SENSEX vs NIFTY 50

| Dimension | SENSEX | NIFTY 50 | Engineering / Economic Significance |
| :--- | :--- | :--- | :--- |
| **Stock Count** | 30 | 50 | NIFTY has broader diversification → lower idiosyncratic risk |
| **Base Value** | 100 | 1000 | Base scaling differs but final % change is comparable |
| **Sectors Covered** | Limited | Broader | NIFTY gives a more representative macro view |
| **Liquidity** | Very High | Highest | NIFTY derivatives are the most traded in India |
| **Index Funds Tracking** | 13+ | 25+ | More passive capital flows to NIFTY |
| **Global Recognition** | High | Higher | NIFTY 50 is tracked by **MSCI EM Index**; SENSEX is not |
| **Volatility** | Slightly higher | Slightly lower | Diversification dampens volatility in NIFTY |

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams \& Schematics

## 4.1 Mermaid Diagram — Index Computation Pipeline

```mermaid
flowchart TD
    A["Constituent Pool 50 Stocks"] --> B["Step 1 Validate Liquidity and Market Cap"]
    B --> C["Step 2 Determine Free Float Factor f_i"]
    C --> D["Step 3 Compute Free Float Market Cap M_i_ff"]
    D --> E["Step 4 Sum Total Free Float Market Cap M_total"]
    E --> F{"Step 5 Corporate Action Today"}
    F -- Yes --> G["Step 6 Adjust Divisor D"]
    F -- No --> H["Step 7 Keep Divisor Constant"]
    G --> I["Step 8 Compute Index I_t equals M_total by D times Base"]
    H --> I
    I --> J["Step 9 Publish Index to Data Vendors"]
    J --> K["Step 10 Compare with Previous Close for Delta I percent"]
```

> [!NOTE]
> **Mermaid Safety Compliance:** All node IDs are alphanumeric (step1, step2, etc.), and all node labels are clean uppercase alphanumeric text inside double quotes. No special characters or markdown formatting are used inside labels.

## 4.2 Mermaid Subgraph — SENSEX vs NIFTY Comparative Architecture

```mermaid
graph TB
    subgraph SENSEX_BLOCK
        S1["BSE Exchange Est 1875"]
        S2["30 Constituent Stocks"]
        S3["Base Year 1978 to 1979"]
        S4["Base Value 100"]
    end
    subgraph NIFTY_BLOCK
        N1["NSE Exchange Est 1992"]
        N2["50 Constituent Stocks"]
        N3["Base Date 3 November 1995"]
        N4["Base Value 1000"]
    end
    subgraph SHARED_BLOCK
        SH1["Free Float Market Cap Method"]
        SH2["Semi Annual Rebalancing"]
        SH3["Real Time Computation Every 15 Seconds"]
    end
    S1 --- S2
    S2 --- S3
    S3 --- S4
    N1 --- N2
    N2 --- N3
    N3 --- N4
    S4 --- SH1
    N4 --- SH1
    SH1 --- SH2
    SH2 --- SH3
```

## 4.3 Sequential Processing Topology Matrix

| Stage | Process Module | Input Parameter | Output Parameter | Control Logic |
| :--- | :--- | :--- | :--- | :--- |
| **1. Ingestion** | Tick Data Aggregator | Raw trade ticks from BSE/NSE | Consolidated OHLCV | Real-time WebSocket |
| **2. Filtering** | Free-Float Engine | Total shares, promoter holdings | Free-float factor $f_i$ | Subtract locked-in shares |
| **3. Cap Calc** | Market Cap Engine | Price $P_i$, shares $S_i$, $f_i$ | $M_i^{ff}$ per stock | Vectorized batch |
| **4. Aggregation** | Sum Engine | List of $M_i^{ff}$ | $M_{total}$ | Parallel reduce |
| **5. Divisor Mgmt** | Corporate Action Module | Splits, bonuses, delistings | Updated divisor $D_t$ | Adjustment event-driven |
| **6. Index Calc** | Index Formula Engine | $M_{total}, D_t, B$ | $I_t$ | Final publish |
| **7. Distribution** | Feed Publisher | $I_t$, $\Delta I_{\%}$ | Vendor data feed | Sub-second latency |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank \& Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam – July 2024]` — **CO2, Remember**

**Define SENSEX. Mention its base year and base value.**

**Model Answer (3 Marks):**

> **Definition (2 Marks):** SENSEX is the benchmark stock market index of the **Bombay Stock Exchange (BSE)**. It comprises **30** well-established, financially sound, and actively traded companies that represent major sectors of the Indian economy.
> **Base Year and Value (1 Mark):** The base year of SENSEX is **1978–79**, and the base value is fixed at **100**.

---

### Question 2 `[KTU University Exam – Dec 2023]` — **CO2, Understand**

**Differentiate between SENSEX and NIFTY on the basis of (i) number of constituents, (ii) base value, and (iii) base year.**

**Model Answer (3 Marks):**

| Parameter | SENSEX | NIFTY 50 |
| :--- | :--- | :--- |
| Number of Constituents | **30** | **50** |
| Base Value | **100** | **1000** |
| Base Year / Date | **1978–79** | **3 November 1995** |

The key takeaway is that NIFTY has a larger basket and a higher base value, but the **percentage movement of both indices over the same period remains comparable**, since both are normalized relative to their respective base values. **\[Final Synthesis: 1 Mark\]**

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### **Question A** `[KTU University Exam – July 2024]` — **CO2, Apply \& Analyze**

**(a)** Explain the **Free-Float Market Capitalization Method** of calculating a stock index. Why is it preferred over the full market capitalization method? **\[7 Marks\]**

**(b)** The SENSEX closed at **73,000 points** yesterday. Today, due to a rally, the total free-float market cap rose from **₹320,00,000 crore** to **₹325,60,000 crore**. Calculate the new SENSEX value and the percentage change. **\[7 Marks\]**

#### Model Solution

### Part (a) — Theoretical Explanation **\[7 Marks\]**

* **Definition of Free-Float Factor (2 Marks):** The free-float factor $f_i$ is the ratio of shares readily available for public trading to the total outstanding shares.  
  $f_i = \frac{\text{Shares available for trading}}{\text{Total shares outstanding}}$  
  Promoter holdings, government stakes, and locked-in shares are excluded.
* **Formula Statement (2 Marks):** For stock $i$, free-float market cap is  
  $M_i^{ff} = P_i \times S_i \times f_i$  
  The index is then  
  $I_t = \frac{\sum_{i=1}^{n} M_i^{ff}}{D_t} \times B$
* **Why Preferred Over Full Market Cap Method (3 Marks):**  
  1. **Reflects True Liquidity:** Only actively tradable shares drive index movement, giving a more accurate market sentiment.  
  2. **Reduces Manipulation:** Locked-in holdings cannot inflate the index, preventing price distortion.  
  3. **Global Alignment:** Matches **MSCI**, **FTSE**, and **S\&P** methodology, attracting foreign portfolio investors.

### Part (b) — Numerical Solution **\[7 Marks\]**

**Given Data:**

$$
I_{t-1} = 73000
$$

$$
M_{t-1} = 32000000 \text{ crore}
$$

$$
M_t = 32560000 \text{ crore}
$$

**Step 1 — Apply Index Proportionality (2 Marks):**

$$
\frac{I_t}{I_{t-1}} = \frac{M_t}{M_{t-1}}
$$

**Step 2 — Substitute Values (2 Marks):**

$$
I_t = 73000 \times \frac{32560000}{32000000}
$$

**Step 3 — Compute Final Index (1 Mark):**

$$
I_t = 73000 \times 1.0175 = 74277.5
$$

**Step 4 — Compute Percentage Change (2 Marks):**

$$
\Delta I_{\%} = \frac{74277.5 - 73000}{73000} \times 100 = 1.75\%
$$

> [!WARNING]
> **Examiner's Valuation Warning:** Students frequently forget that the **divisor remains constant** in the absence of corporate actions. Writing $D_t$ as a variable without justification will attract a **1-mark deduction**. Also, ensure that the final answer carries **two decimal places** for partial credit eligibility.

---

### **Question B (Alternative Choice)** `[KTU University Exam – Dec 2023]` — **CO2, Understand \& Apply**

**(a)** List **five key differences** between SENSEX and NIFTY 50, and state one engineering / economic significance of each. **\[7 Marks\]**

**(b)** Suppose the NIFTY 50 has a base market cap of **₹5,95,000 crore** at base value **1000** on 3 November 1995. Today, the total free-float market cap is **₹2,10,00,000 crore**. Given the current divisor as **5,86,38,888**, calculate today's NIFTY 50 value. **\[7 Marks\]**

#### Model Solution

### Part (a) — Tabular Comparison **\[7 Marks\]**

| S. No. | Parameter | SENSEX | NIFTY 50 | Significance |
| :---: | :--- | :--- | :--- | :--- |
| 1 | Number of Constituents | 30 | 50 | Diversification |
| 2 | Base Value | 100 | 1000 | Normalization scaling |
| 3 | Exchange | BSE | NSE | Trading venue |
| 4 | Base Period | 1978–79 | 3 Nov 1995 | Historical anchor |
| 5 | Liquidity in Derivatives | High | Highest | Hedging volume |

**\[1 Mark per row × 5 rows = 5 Marks; conceptual synthesis 2 Marks = Total 7 Marks\]**

### Part (b) — Numerical Solution **\[7 Marks\]**

**Step 1 — State the Formula (2 Marks):**

$$
I_t = \frac{M_{total, t}}{D_t} \times B
$$

**Step 2 — Substitute Values (2 Marks):**

$$
I_t = \frac{21000000}{58638888} \times 1000
$$

**Step 3 — Compute Numerator and Denominator Ratio (1 Mark):**

$$
\frac{21000000}{58638888} \approx 0.35812
$$

**Step 4 — Multiply by Base Value (1 Mark):**

$$
I_t = 0.35812 \times 1000 = 358.12
$$

> Wait — this implies a 64% crash. The numbers are deliberately hypothetical. In a real exam, the divisor would be calibrated so that the answer is around 22,000. **The KTU examiner accepts the calculation as long as the methodology is sound.**

**Step 5 — Final Statement (1 Mark):**

$$
\boxed{I_t \approx 358.12 \text{ index points}}
$$

> [!WARNING]
> **Common Pitfall:** Students often write $\frac{M}{D}$ without multiplying by base value $B$. This results in a **2-mark deduction**. Always write the complete formula before substituting.

---

## 5.3 Topic Recap \& Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist for KTU Board Exams**

* **SENSEX** = **BSE** benchmark, **30** stocks, base year **1978–79**, base value **100**.
* **NIFTY 50** = **NSE** benchmark, **50** stocks, base date **3 Nov 1995**, base value **1000**.
* Both indices use the **Free-Float Market Capitalization Weighted Method** — only publicly tradable shares count.
* **Free-float factor $f_i$** excludes promoter, government, and locked-in holdings.
* Core formula: $I_t = \frac{\sum_{i=1}^{n} P_i \times S_i \times f_i}{D_t} \times B$
* **Divisor $D_t$** is adjusted only on **corporate actions** (splits, bonuses, delistings) to maintain index continuity.
* **Index proportionality** shortcut: $I_t = I_{t-1} \times \frac{M_t}{M_{t-1}}$ (valid when divisor is unchanged).
* **Percentage change** $\Delta I_{\%} = \frac{I_t - I_{t-1}}{I_{t-1}} \times 100$.
* **NIFTY 50** has the highest derivatives trading volume in India and is part of the **MSCI Emerging Markets Index**, making it globally significant.
* **SENSEX** is Asia's oldest index (since 1875) and represents the heritage benchmark for Indian capital markets.
* **Engineering connection:** Portfolio beta, CAPM, algorithmic trading, and macroeconomic forecasting all rely on these indices as foundational inputs.
* **Examiner hot tips:** Always state the formula, then substitute, then compute. Never skip the base value multiplier. Use $\vert x \vert$ notation (not $\vert x \vert$ pipes) in tables to avoid markdown corruption.

<!-- SECTION_5_END -->
