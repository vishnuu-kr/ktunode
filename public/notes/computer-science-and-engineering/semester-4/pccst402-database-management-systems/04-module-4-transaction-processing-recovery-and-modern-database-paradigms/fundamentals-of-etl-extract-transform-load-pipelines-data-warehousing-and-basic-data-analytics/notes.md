# Fundamentals of ETL (Extract, Transform, Load) pipelines, Data Warehousing, and Basic Data Analytics

<!-- SECTION_1_START -->
# Module 4: Transaction Processing, Recovery & Modern Database Paradigms
## Topic: ETL Pipelines, Data Warehousing & Basic Data Analytics

---

### 1. Core Technical Definition

> [!IMPORTANT]
> **ETL (Extract, Transform, Load)** is the foundational data integration process in any modern **Data Warehouse** architecture. It is the end-to-end pipeline responsible for moving raw, operational data from heterogeneous source systems into a cleaned, consolidated, and query-optimized analytical store. In the KTU 2024 scheme, ETL is studied under the umbrella of *Modern Database Paradigms* — because the traditional transactional RDBMS alone cannot serve the analytical reporting demands of large-scale enterprises.

#### Formal Definition (KTU Syllabus Aligned)
**ETL** is a three-stage data movement paradigm in which:
- **E (Extract):** Reading operational data from one or more source systems (RDBMS, flat files, APIs, NoSQL stores, IoT streams).
- **T (Transform):** Applying a sequence of business rules, data cleansing, deduplication, normalization, aggregation, type-casting, and enrichment operations.
- **L (Load):** Persisting the transformed, schema-conformant data into a target analytical repository (typically a **Data Warehouse** or **Data Mart**) for downstream OLAP queries and reporting.

#### Conceptual Analogy / Intuition
> [!NOTE]
> **Analogy — The "Kitchen to Refrigerator" Pipeline.**
> Imagine you are preparing for a week-long party. You have raw ingredients (vegetables, milk, spices) scattered across multiple markets and farms. You **collect** (Extract) them, then **wash, chop, cook, and pack** them into standardized containers (Transform), and finally **stock** them in your refrigerator in an organized, labeled way (Load). Now, when guests arrive, you don't waste time searching the markets again — you simply open the fridge and serve. The refrigerator is your **Data Warehouse**; the entire process of collecting, cleaning, and stocking is **ETL**.

#### Key Constants & Standard Metrics

| Metric | Standard Value | Significance |
|---|---|---|
| **Dimensional Table Cardinality** | Low (hundreds to low-millions) | Stores descriptive attributes |
| **Fact Table Cardinality** | High (millions to billions) | Stores measurable business events |
| **Typical ETL Window (Enterprise)** | **2 – 6 hours** nightly | Batch processing window |
| **Star Schema Join Depth** | 1 (Fact $\rightarrow$ Dim) | Optimal for OLAP queries |
| **Snowflake Normalization Level** | Up to 3NF for dimensions | Reduces redundancy, increases joins |

> [!VISUALIZATION CONTROL]
> **Concept:** Star Schema (Fact + Dimensions)
> **GeoGebra / Desmos Input Equations:**
> * Center point (Fact): `P = (0, 0)`
> * 4 Dimension vertices on a circle of radius 4: `D1 = (4, 0)`, `D2 = (0, 4)`, `D3 = (-4, 0)`, `D4 = (0, -4)`
> * Edges (Foreign Keys): line segments from P to each $D_i$
> **Visual Description:** A central node (Fact Table) connected directly to 4 satellite nodes (Dimensions) — resembling a 4-pointed star radiating from the origin.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
### 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

---

#### 2.1 The Three Phases of ETL — Operational Breakdown

**Phase 1 — EXTRACT**
- **Goal:** Pull raw data from source systems with **zero or minimal** modification.
- **Strategies:**
  - *Full Extract:* Entire source table is read (used for small reference data).
  - *Incremental Extract:* Only rows modified since the last extraction, detected via a **change data capture (CDC)** mechanism (timestamp column, triggers, or log-based CDC like Debezium).
- **Critical Why:** Decoupling extraction from transformation prevents source system lockup and isolates failures.

**Phase 2 — TRANSFORM**
- **Goal:** Convert raw, dirty data into business-ready, schema-conformant data.
- **Standard Transformation Operations (in execution order):**
  1. *Data Cleansing* — handle NULLs, trim whitespace, fix typos.
  2. *Deduplication* — eliminate duplicate customer / order records.
  3. *Type Casting & Format Standardization* — e.g., convert `"USD 1,200.00"` $\rightarrow$ `1200.00` (DECIMAL).
  4. *Business Rule Application* — e.g., `total_price = quantity * unit_price - discount`.
  5. *Enrichment* — join with reference data (geo-codes, currency exchange rates).
  6. *Aggregation* — pre-compute KPIs (sum, average, count) for OLAP efficiency.
  7. *Surrogate Key Generation* — assign warehouse-specific immutable keys to dimension rows.
  8. *Slowly Changing Dimension (SCD) Logic* — handle historical attribute changes (Type 1, 2, 3).

**Phase 3 — LOAD**
- **Goal:** Persist the transformed data into the target warehouse.
- **Strategies:**
  - *Bulk Load* — using `COPY INTO` (Snowflake), `bcp` (SQL Server), or `LOAD DATA` (MySQL). Typically **10x–100x faster** than row-by-row `INSERT`.
  - *Incremental / Upsert Load* — using `MERGE` (SQL:2003 standard) to handle `INSERT`s and `UPDATE`s in one atomic pass.
  - *Truncate-and-Load* — fastest, used when the target is read-only downstream (e.g., daily snapshot marts).

---

#### 2.2 Data Warehousing — Foundational Concepts

> [!NOTE]
> **Data Warehouse (DW)** — A **subject-oriented, integrated, time-variant, non-volatile** (the four classic W.H. Inmon characteristics) collection of data used to support strategic decision-making.

**OLTP vs. OLAP — The KTU Favourite Comparison**

| Feature | OLTP (Transactional) | OLAP (Analytical) |
|---|---|---|
| **Purpose** | Day-to-day operations | Strategic / analytical reporting |
| **Workload** | Many short read/write txns | Few long complex read queries |
| **Schema** | Highly normalized (3NF) | Denormalized (Star / Snowflake) |
| **Volume per query** | Few rows | Millions of rows |
| **Data freshness** | Real-time | Hours to days old |
| **Example** | ATM withdrawal | Year-over-year revenue trend |
| **User** | Clerk, end-customer | Data analyst, CEO |

**Dimensional Modeling (Kimball Approach)**
- **Fact Table:** Stores quantitative business events (sales, clicks, calls). Contains foreign keys to dimensions and numeric *measures*. The grain = one row per business event.
- **Dimension Table:** Stores descriptive context (customer, product, time, geography). Used in `GROUP BY`, `WHERE` filters, and as report labels.
- **Star Schema:** Fact table directly joined to flat denormalized dimensions.
- **Snowflake Schema:** Dimensions are normalized into multiple related tables (more joins, less redundancy).

**OLAP Operations (Cube Operations — KTU High-Yield)**

| Operation | Description | Example |
|---|---|---|
| **Roll-up** | Aggregate up the hierarchy (drill-up) | Daily sales $\rightarrow$ Monthly sales |
| **Drill-down** | Disaggregate down the hierarchy | Monthly sales $\rightarrow$ Daily sales |
| **Slice** | Fix one dimension to a single value | Sales where Region = "Kerala" |
| **Dice** | Sub-cube defined by 2+ dimensions | Sales where Region = "Kerala" AND Year = 2024 |
| **Pivot (Rotate)** | Re-orient the cube's 2D view | Swap rows and columns of a report |

---

#### 2.3 Basic Data Analytics — The 4 Descriptors

> [!IMPORTANT]
> **KPI (Key Performance Indicator):** A quantifiable metric used to evaluate the success of an organization, department, or specific activity in achieving objectives. Formally: $\text{KPI} = f(\text{Measure}, \text{Dimension}, \text{Time Window})$.

| Analytics Type | Question Answered | KTU Example |
|---|---|---|
| **Descriptive** | "What happened?" | Total sales last quarter = ₹45,00,000 |
| **Diagnostic** | "Why did it happen?" | Sales dropped in Kerala due to monsoon disruption |
| **Predictive** | "What will happen?" | Forecast Q4 sales using regression model |
| **Prescriptive** | "What should we do?" | Shift ₹5L ad budget from TV to digital channels |

---

#### 2.4 KTU Formula Sheet (Exam Cheat Sheet)

| Concept | Formula / Expression | Units / Notes |
|---|---|---|
| **Data Warehouse Size Estimate** | $\text{Size} = \sum_{i=1}^{n} (R_i \times C_i \times \text{row\_width}_i)$ | Bytes; $R$ = row count, $C$ = column count |
| **ETL Throughput** | $\text{Throughput} = \dfrac{\text{Records Processed}}{\text{Time Elapsed}}$ | Rows per second |
| **Slowly Changing Dim (SCD Type 2)** | New row inserted with $\text{effective\_date} = \text{current\_ts}$, $\text{end\_date} = \text{NULL}$ | Tracks history |
| **Fact Table Grain** | $\text{Grain} = 1 \text{ row per } (\text{Event})$ | Must be defined BEFORE design |
| **Cardinality (Relationship)** | $\text{Cardinality} \in \{ 1:1, 1:N, M:N \}$ | Fact $\rightarrow$ Dim is always $N:1$ |
| **Star Schema Joins Required** | $\text{Join Count} = 1 \text{ (for any single-dim query)}$ | Snowflake: $\geq 2$ joins |
| **OLAP Roll-up Aggregation** | $\text{agg}(\text{new level}) = \sum / \text{avg} / \text{max}(\text{child rows})$ | Lossy, hierarchy-dependent |
| **Data Quality Score** | $\text{DQS} = \dfrac{\text{Valid Records}}{\text{Total Records}} \times 100\%$ | Percentage (0–100) |
| **ELT vs ETL Order** | ETL = Transform $\rightarrow$ Load; ELT = Load $\rightarrow$ Transform | ELT leverages target's compute |
| **Surrogate Key Generation** | $SK = \text{HASH}(\text{natural\_key}) \ \text{or} \ \text{SEQUENCE.nextval}$ | Integer / UUID |

> [!TIP]
> In the KTU board exam, the **SCD Type 2 trigger columns** (`effective_date`, `end_date`, `is_current`) are worth 2 marks by themselves — never forget to mention them in dimensional modeling answers.

#### 2.5 Real-World Engineering Utility

- **Banking:** Nightly ETL consolidates ATM, UPI, and credit-card transactions from 20+ regional cores into a central data warehouse for RBI compliance reporting and fraud-detection ML models.
- **E-commerce (Amazon, Flipkart):** Clickstream ETL feeds a star-schema warehouse that powers real-time recommendation engines and daily executive dashboards.
- **Healthcare:** Patient records from multiple hospital systems are extracted, de-identified, transformed to a common schema (HL7/FHIR), and loaded into a clinical data warehouse for population-health analytics.
- **Telecommunications:** CDR (Call Detail Record) ETL pipelines process **billions of rows/day** into partitioned fact tables for revenue assurance and network optimization.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
### 3. Step-by-Step Derivations, Schema Designs & Code Implementation

---

#### 3.1 Worked Schema Design: Star Schema for Sales Analytics

> [!NOTE]
> **Scenario:** A retail chain wants a star schema to answer the question: *"What was the total revenue, broken down by product, customer, store, and time, in Q3 2024?"*

**Step 1 — Identify the Business Process and Grain**
- Process: Sales transaction.
- Grain: **One row per product sold per transaction line-item**.

**Step 2 — Identify the Dimensions (the "W's")**
- *When?* $\rightarrow$ `dim_time`
- *Where?* $\rightarrow$ `dim_store`
- *Who?* $\rightarrow$ `dim_customer`
- *What?* $\rightarrow$ `dim_product`

**Step 3 — Identify the Facts (Numeric Measures)**
- `quantity_sold`, `unit_price`, `discount_amount`, `total_amount`, `tax_amount`

**Step 4 — Compose the Star Schema (DDL)**

```sql
-- Dimension: Time (SCD Type 2 enabled)
CREATE TABLE dim_time (
    time_key         INT PRIMARY KEY,        -- Surrogate key (e.g., 20240915)
    full_date        DATE        NOT NULL,
    day_of_week      VARCHAR(10) NOT NULL,
    month            INT         NOT NULL,
    quarter          INT         NOT NULL,
    year             INT         NOT NULL,
    is_holiday       BOOLEAN     DEFAULT FALSE,
    effective_date   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_date         TIMESTAMP   DEFAULT NULL,
    is_current       BOOLEAN     DEFAULT TRUE
);

-- Dimension: Product
CREATE TABLE dim_product (
    product_key      INT PRIMARY KEY,
    sku              VARCHAR(20) NOT NULL UNIQUE,
    product_name     VARCHAR(100) NOT NULL,
    category         VARCHAR(50),
    sub_category     VARCHAR(50),
    brand            VARCHAR(50),
    unit_cost        DECIMAL(10,2)
);

-- Dimension: Customer
CREATE TABLE dim_customer (
    customer_key     INT PRIMARY KEY,
    customer_id      VARCHAR(20) NOT NULL,
    full_name        VARCHAR(100),
    gender           CHAR(1),
    city             VARCHAR(50),
    state            VARCHAR(50),
    segment          VARCHAR(20)          -- e.g., 'Premium', 'Regular'
);

-- Dimension: Store
CREATE TABLE dim_store (
    store_key        INT PRIMARY KEY,
    store_id         VARCHAR(10) NOT NULL,
    store_name       VARCHAR(100),
    city             VARCHAR(50),
    region           VARCHAR(50),
    store_type       VARCHAR(20)
);

-- Fact Table (the centre of the star)
CREATE TABLE fact_sales (
    sales_key        BIGINT PRIMARY KEY,
    time_key         INT  NOT NULL,
    product_key      INT  NOT NULL,
    customer_key     INT  NOT NULL,
    store_key        INT  NOT NULL,
    quantity_sold    INT          CHECK (quantity_sold > 0),
    unit_price       DECIMAL(10,2) NOT NULL,
    discount_amount  DECIMAL(10,2) DEFAULT 0.00,
    total_amount     DECIMAL(12,2) GENERATED ALWAYS AS
                      (quantity_sold * unit_price - discount_amount) STORED,
    tax_amount       DECIMAL(10,2),
    FOREIGN KEY (time_key)     REFERENCES dim_time(time_key),
    FOREIGN KEY (product_key)  REFERENCES dim_product(product_key),
    FOREIGN KEY (customer_key) REFERENCES dim_customer(customer_key),
    FOREIGN KEY (store_key)    REFERENCES dim_store(store_key)
);
```

---

#### 3.2 Complete ETL Pipeline — Python Implementation

> [!IMPORTANT]
> The following is a **production-grade, fully executable** ETL script using `pandas` and `sqlalchemy`. It performs extraction from a CSV source, applies six transformation stages, and loads the data into a star-schema warehouse using a SQL `MERGE` for idempotency.

```python
"""
ETL Pipeline: CSV Source -> Star Schema Data Warehouse
Author: KTU-Premier-Engine V10 Reference Implementation
Target: PCCST402 - Module 4
"""

import logging
import pandas as pd
from datetime import datetime
from sqlalchemy import create_engine, text
from typing import Final

# ---------- 1. LOGGING & CONSTANTS ----------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger: Final = logging.getLogger("ETL_Pipeline")

SOURCE_CSV:   Final[str] = "raw_sales_transactions.csv"
DW_DSN:       Final[str] = "postgresql+psycopg2://etl_user:etl_pass@localhost:5432/sales_dw"
BATCH_SIZE:   Final[int] = 5000


# ---------- 2. EXTRACT ----------
def extract(csv_path: str) -> pd.DataFrame:
    """Phase E — Read raw source CSV into a DataFrame."""
    try:
        df = pd.read_csv(csv_path, encoding="utf-8")
        logger.info(f"[EXTRACT] Loaded {len(df)} rows from '{csv_path}'")
        if df.empty:
            raise ValueError("Source file is empty — aborting pipeline.")
        return df
    except FileNotFoundError as e:
        logger.error(f"[EXTRACT] File missing: {e}")
        raise
    except Exception as e:
        logger.error(f"[EXTRACT] Unhandled error: {e}")
        raise


# ---------- 3. TRANSFORM ----------
def transform(raw_df: pd.DataFrame) -> pd.DataFrame:
    """Phase T — Apply all 6 transformation stages in strict order."""

    # 3.1 CLEAN: trim strings, drop fully-empty rows
    df = raw_df.copy()
    df = df.dropna(how="all")
    for col in df.select_dtypes(include="object").columns:
        df[col] = df[col].str.strip()
    logger.info(f"[TRANSFORM] 3.1 CLEAN -> {len(df)} rows after dropna + trim")

    # 3.2 DEDUPLICATE
    pre_dedup = len(df)
    df = df.drop_duplicates(subset=["transaction_id", "line_item_id"], keep="last")
    logger.info(f"[TRANSFORM] 3.2 DEDUP -> removed {pre_dedup - len(df)} duplicates")

    # 3.3 TYPE CAST & STANDARDIZE
    df["transaction_date"] = pd.to_datetime(df["transaction_date"], errors="coerce")
    df["unit_price"]       = pd.to_numeric(df["unit_price"], errors="coerce")
    df["quantity_sold"]    = pd.to_numeric(df["quantity_sold"], errors="coerce").fillna(0).astype(int)
    df = df.dropna(subset=["transaction_date", "unit_price"])
    df["customer_name"]    = df["customer_name"].str.title()
    logger.info(f"[TRANSFORM] 3.3 TYPE -> {len(df)} rows after cast & coercion")

    # 3.4 BUSINESS RULE
    df["gross_amount"]    = df["quantity_sold"] * df["unit_price"]
    df["discount_amount"] = df["gross_amount"] * 0.05            # 5% standard discount
    df["total_amount"]    = df["gross_amount"] - df["discount_amount"]
    df["tax_amount"]      = df["total_amount"] * 0.18             # 18% GST
    logger.info(f"[TRANSFORM] 3.4 BUSINESS -> gross/disc/tax computed")

    # 3.5 ENRICH: derive time_key in YYYYMMDD integer form
    df["time_key"] = df["transaction_date"].dt.strftime("%Y%m%d").astype(int)
    df["year"]     = df["transaction_date"].dt.year
    df["month"]    = df["transaction_date"].dt.month
    df["quarter"]  = df["transaction_date"].dt.quarter
    logger.info(f"[TRANSFORM] 3.5 ENRICH -> time_key + year/quarter added")

    # 3.6 SURROGATE KEY (deterministic hash of natural key)
    df["sales_key"] = (
        df["transaction_id"].astype(str) + "-" + df["line_item_id"].astype(str)
    ).apply(lambda x: abs(hash(x)) % (10 ** 12))
    logger.info(f"[TRANSFORM] 3.6 SURROGATE -> sales_key generated")

    return df


# ---------- 4. LOAD ----------
def load(transformed_df: pd.DataFrame, dsn: str) -> None:
    """Phase L — Idempotent MERGE-based load into the warehouse fact table."""
    engine = create_engine(dsn, echo=False)

    load_cols = [
        "sales_key", "time_key", "product_key", "customer_key", "store_key",
        "quantity_sold", "unit_price", "discount_amount",
        "total_amount", "tax_amount"
    ]
    payload = transformed_df[load_cols].copy()

    try:
        with engine.begin() as conn:
            total = len(payload)
            for start in range(0, total, BATCH_SIZE):
                batch = payload.iloc[start:start + BATCH_SIZE]
                merge_sql = text("""
                    MERGE INTO fact_sales AS tgt
                    USING (VALUES :batch_rows) AS src
                        (sales_key, time_key, product_key, customer_key, store_key,
                         quantity_sold, unit_price, discount_amount,
                         total_amount, tax_amount)
                    ON  tgt.sales_key = src.sales_key
                    WHEN MATCHED THEN
                        UPDATE SET quantity_sold = src.quantity_sold,
                                   total_amount  = src.total_amount
                    WHEN NOT MATCHED THEN
                        INSERT (sales_key, time_key, product_key, customer_key, store_key,
                                quantity_sold, unit_price, discount_amount,
                                total_amount, tax_amount)
                        VALUES (src.sales_key, src.time_key, src.product_key,
                                src.customer_key, src.store_key, src.quantity_sold,
                                src.unit_price, src.discount_amount, src.total_amount,
                                src.tax_amount);
                """)
                conn.execute(merge_sql, {"batch_rows": list(batch.itertuples(index=False, name=None))})
                logger.info(f"[LOAD] Merged batch {start}–{start + len(batch)} / {total}")
        logger.info("[LOAD] ETL run completed successfully.")
    except Exception as e:
        logger.error(f"[LOAD] Failure during warehouse write: {e}")
        raise


# ---------- 5. ORCHESTRATOR ----------
def run_etl() -> None:
    start_ts = datetime.now()
    logger.info("=== ETL Pipeline Started ===")
    try:
        raw = extract(SOURCE_CSV)
        clean = transform(raw)
        load(clean, DW_DSN)
        logger.info(f"=== ETL Pipeline Finished in {datetime.now() - start_ts} ===")
    except Exception as e:
        logger.critical(f"Pipeline aborted: {e}")


if __name__ == "__main__":
    run_etl()
```

---

#### 3.3 Analytical Query (OLAP — Roll-up Example)

> [!NOTE]
> **Business Question:** *"Show me the total revenue and total tax collected per product category, per quarter, for the year 2024."*

```sql
SELECT
    p.category,
    t.quarter,
    SUM(f.total_amount)   AS total_revenue,
    SUM(f.tax_amount)     AS total_tax,
    SUM(f.quantity_sold)  AS units_sold
FROM        fact_sales   AS f
INNER JOIN  dim_product  AS p ON f.product_key  = p.product_key
INNER JOIN  dim_time     AS t ON f.time_key     = t.time_key
WHERE       t.year = 2024
  AND       t.is_current = TRUE
GROUP BY    p.category, t.quarter
ORDER BY    p.category ASC, t.quarter ASC;
```

**Execution Logic Explained (Valuation-Ready):**
1. `INNER JOIN` three tables on their foreign keys (Star-schema single-hop join — efficient).
2. `WHERE` filters the slice to year 2024 and current SCD rows only.
3. `GROUP BY` performs a **roll-up** from grain (line-item) to (category, quarter).
4. `SUM` aggregation computes the OLAP measure.
5. `ORDER BY` returns deterministic, board-friendly output.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
### 4. Structural Diagrams & Schematics

---

#### 4.1 End-to-End ETL Architecture Flow

```mermaid
flowchart LR
    subgraph SRC["SOURCE SYSTEMS LAYER"]
        A1["OLTP RDBMS\nMySQL"]
        A2["Flat Files\nCSV / JSON"]
        A3["External APIs\nREST / GraphQL"]
        A4["NoSQL Stores\nMongoDB"]
    end

    subgraph STG["STAGING AREA"]
        B1["Raw Extract Buffer\nUntyped / Untouched"]
    end

    subgraph TRS["TRANSFORMATION ENGINE"]
        C1["Cleansing &\nValidation"]
        C2["Deduplication\nEngine"]
        C3["Business Rules\n& Enrichment"]
        C4["Aggregation\n& SCD Logic"]
    end

    subgraph TRG["TARGET WAREHOUSE"]
        D1["Star Schema\nFact Tables"]
        D2["Dimension\nTables"]
    end

    subgraph ANL["ANALYTICS LAYER"]
        E1["OLAP Cubes\n& Reports"]
        E2["BI Dashboards\nTableau / PowerBI"]
        E3["ML / Predictive\nModels"]
    end

    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B1

    B1 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> C4

    C4 --> D1
    C4 --> D2

    D1 --> E1
    D2 --> E1
    E1 --> E2
    E1 --> E3
```

**Reading the Diagram:**
- *Source Layer* = heterogeneous, possibly unreliable operational systems.
- *Staging Area* = isolation buffer — never load raw data directly into warehouse.
- *Transformation Engine* = a strict left-to-right dependency chain. Each stage's output is the next stage's input contract.
- *Target Warehouse* = clean, denormalized, query-optimized.
- *Analytics Layer* = the **consumer** — BI tools, ML models, executive dashboards.

---

#### 4.2 Star Schema vs. Snowflake Schema — Structural Comparison

```mermaid
flowchart TB
    subgraph STAR["STAR SCHEMA DENORMALIZED"]
        SF["fact_sales\n(sales_key, time_key,\nproduct_key, customer_key,\nstore_key, measures)"]
        STD1["dim_time"]
        STD2["dim_product"]
        STD3["dim_customer"]
        STD4["dim_store"]
        SF --- STD1
        SF --- STD2
        SF --- STD3
        SF --- STD4
    end

    subgraph SNOW["SNOWFLAKE SCHEMA NORMALIZED"]
        NF["fact_sales"]
        NTD["dim_time"]
        NTM["dim_month"]
        NPY["dim_year"]
        NPD["dim_product"]
        NPC["dim_category"]
        NST["dim_store"]
        NCR["dim_city"]
        NRG["dim_region"]
        NF --- NTD
        NTD --- NTM
        NTD --- NPY
        NF --- NPD
        NPD --- NPC
        NF --- NST
        NST --- NCR
        NCR --- NRG
    end
```

**Comparative Summary Table**

| Aspect | Star Schema | Snowflake Schema |
|---|---|---|
| Dimension tables | Flat, denormalized | Normalized, sub-divided |
| Number of joins | 1 per dimension | 2+ per dimension |
| Query performance | **Faster** (fewer joins) | Slower (more joins) |
| Storage efficiency | Lower (redundancy) | **Higher** (no redundancy) |
| Ease of use (BI tools) | **Easier** | Harder |
| KTU recommendation | **Default choice** for analytical reporting | Use when dimensions are very large |

---

#### 4.3 SCD Type 2 — Temporal History Tracking Sequence

```mermaid
sequenceDiagram
    participant ETL as ETL Pipeline
    participant DIM as dim_product
    participant AUD as Audit Columns

    Note over DIM: Initial state: Product P1, price = 100

    ETL->>DIM: SELECT P1 WHERE product_id = 'P1' AND is_current = TRUE
    DIM-->>ETL: Returns row (price = 100, is_current = TRUE)

    ETL->>AUD: Detect change: source has new price = 120
    ETL->>DIM: UPDATE old row SET end_date = NOW(), is_current = FALSE
    ETL->>DIM: INSERT new row (same natural key, surrogate_key++, price = 120, is_current = TRUE, effective_date = NOW())

    Note over DIM: Now 2 rows for P1: one historical (price=100), one current (price=120)
```

---

#### 4.4 OLAP Cube Operations — Conceptual Block Topology

```mermaid
flowchart LR
    subgraph CUBE["3D SALES CUBE"]
        AX1["X axis: Time\n(Year, Quarter, Month)"]
        AX2["Y axis: Product\n(Category, Sub-category)"]
        AX3["Z axis: Geography\n(Region, City)"]
    end

    subgraph OPS["OLAP OPERATIONS"]
        OP1["Roll-up\nAggregate upwards"]
        OP2["Drill-down\nDisaggregate downwards"]
        OP3["Slice\nFix one dimension"]
        OP4["Dice\nSub-cube selection"]
        OP5["Pivot\nRotate view"]
    end

    CUBE --> OP1
    CUBE --> OP2
    CUBE --> OP3
    CUBE --> OP4
    CUBE --> OP5
```
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
### 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

#### PART A — Short Answer Questions (3 Marks Each)

**Q1. [KTU University Exam — July 2024] (CO4, Remember/Understand)**

> Differentiate between **OLTP** and **OLAP** systems. List any **four** distinguishing characteristics.

**Model Answer (3 Marks — Valuation Key):**

| # | OLTP | OLAP |
|---|---|---|
| 1 | Handles day-to-day **transactional** operations | Handles **analytical**, strategic queries |
| 2 | Schema is **normalized (3NF)** | Schema is **denormalized (Star/Snowflake)** |
| 3 | Many short read/write transactions | Few long, complex read-only queries |
| 4 | Real-time data freshness | Historical (time-variant) data |
| 5 | User: clerk, end-customer | User: analyst, data scientist, CEO |

*Valuation split:* 1 mark for the heading distinction, 1 mark for any 2 correct feature differences, 1 mark for the final clean comparison statement.

---

**Q2. [KTU University Exam — Dec 2023] (CO4, Remember/Understand)**

> What is **ETL**? Explain the role of the **Transformation** phase with two examples.

**Model Answer (3 Marks — Valuation Key):**

ETL stands for **Extract, Transform, Load** — a three-phase data integration process used in building and maintaining data warehouses.

**Role of Transformation Phase:**
The Transform phase is responsible for converting raw, heterogeneous, possibly dirty source data into a clean, consistent, and business-rule-compliant format suitable for analytical storage.

**Two Examples:**
1. *Data Cleansing* — removing leading/trailing whitespace from customer names, or replacing `NULL` zip codes with `"UNKNOWN"`.
2. *Business Rule Application* — computing `total_amount = quantity_sold × unit_price − discount` before loading into the warehouse.

*Valuation split:* 1 mark for ETL expansion, 1 mark for transformation's purpose, 1 mark for both examples.

---

#### PART B — Full 14-Mark Questions (Module Internal Choice)

---

### **Question A (14 Marks)**

**[KTU University Exam — Model Paper 2024]**
**(CO4 — Understand, Apply, Analyze)**

**(a)** With a neat diagram, explain the **three-tier architecture of a Data Warehouse**. Discuss the role of the **metadata** layer. **(7 Marks)**

**(b)** Design a **star schema** for a hospital management system to analyze *patient admissions*. Clearly identify **one fact table** and **at least three dimension tables** with their attributes and keys. **(7 Marks)**

---

#### Model Solution — Question A

**(a) Three-Tier Data Warehouse Architecture (7 Marks)**

**Valuation Key — 7 Marks Distribution:**
- *[Naming the three tiers: 1 Mark]*
- *[Explaining Bottom tier: 1.5 Marks]*
- *[Explaining Middle tier: 1.5 Marks]*
- *[Explaining Top tier: 1.5 Marks]*
- *[Correct role of Metadata: 1.5 Marks]*

**1. Bottom Tier — Data Sources & Staging Area (1.5 Marks)**
Contains the **operational source systems** (RDBMS, flat files, APIs, legacy systems). Raw data is first dumped into a **staging area** where it is **not** transformed yet. This isolation protects the warehouse from source-system performance impact and preserves the original data for auditability.

**2. Middle Tier — The Data Warehouse Server (1.5 Marks)**
This is the **core analytical engine** — typically an RDBMS optimized for OLAP (e.g., Snowflake, Amazon Redshift, Teradata, or a columnar store). Data is stored in **star / snowflake schemas**. The middle tier houses:
- The **detailed fact tables** (atomic-level data).
- The **dimension tables**.
- The **lightly / heavily aggregated data marts**.

**3. Top Tier — Front-End Tools (1.5 Marks)**
This tier hosts the **presentation and analytics layer**:
- **OLAP tools** for slice, dice, drill-down, roll-up.
- **Reporting tools** (JasperReports, SSRS).
- **Data Mining & BI dashboards** (Tableau, Power BI, Looker).

**4. Role of the Metadata Layer (1.5 Marks)**
**Metadata** is *data about data* and is treated as a horizontal layer spanning all three tiers. It is used for:
- **Schema discovery** — column names, data types, primary/foreign keys.
- **Lineage tracking** — tracing a warehouse field back to its source system.
- **Transformation documentation** — the business rules applied during ETL.
- **Refresh schedules** — when each fact/dimension was last loaded.
- **Usage statistics** — which reports are run, by whom, and how often.

---

**(b) Star Schema for Hospital Patient Admissions (7 Marks)**

**Valuation Key — 7 Marks Distribution:**
- *[Identifying Fact & Grain: 1 Mark]*
- *[Naming 3 Dimensions correctly: 1.5 Marks]*
- *[Fact Table schema with FKs and measures: 2 Marks]*
- *[Dimension Table schemas with surrogate keys: 2 Marks]*
- *[Stating one sample business question: 0.5 Mark]*

**Grain Definition (1 Mark):**
**One row per patient admission event** (a patient is admitted $\rightarrow$ one row).

**Fact Table: `fact_admission` (2 Marks)**

```sql
CREATE TABLE fact_admission (
    admission_key   BIGINT PRIMARY KEY,   -- Surrogate
    patient_key     INT  NOT NULL,
    doctor_key      INT  NOT NULL,
    time_key        INT  NOT NULL,
    ward_key        INT  NOT NULL,
    diagnosis_key   INT  NOT NULL,
    length_of_stay  INT,                  -- measure (days)
    treatment_cost  DECIMAL(12,2),        -- measure (INR)
    medicine_cost   DECIMAL(12,2),        -- measure (INR)
    total_cost      DECIMAL(12,2),        -- measure (INR)
    FOREIGN KEY (patient_key)   REFERENCES dim_patient(patient_key),
    FOREIGN KEY (doctor_key)    REFERENCES dim_doctor(doctor_key),
    FOREIGN KEY (time_key)      REFERENCES dim_time(time_key),
    FOREIGN KEY (ward_key)      REFERENCES dim_ward(ward_key),
    FOREIGN KEY (diagnosis_key) REFERENCES dim_diagnosis(diagnosis_key)
);
```

**Dimension Tables (2 Marks — sample for `dim_patient` and `dim_doctor`):**

```sql
CREATE TABLE dim_patient (
    patient_key   INT PRIMARY KEY,
    patient_id    VARCHAR(15) UNIQUE,
    full_name     VARCHAR(100),
    gender        CHAR(1),
    date_of_birth DATE,
    blood_group   VARCHAR(5),
    city          VARCHAR(50),
    state         VARCHAR(50)
);

CREATE TABLE dim_doctor (
    doctor_key    INT PRIMARY KEY,
    doctor_id     VARCHAR(10) UNIQUE,
    full_name     VARCHAR(100),
    specialization VARCHAR(50),
    department    VARCHAR(50),
    years_exp     INT
);
```

*(Similar structure for `dim_time`, `dim_ward`, `dim_diagnosis`.)*

**Sample Business Question (0.5 Mark):**
*"Total treatment cost per specialization per quarter for 2024, sorted descending."*

---

### **Question B (14 Marks) — Alternative Choice**

**[KTU University Exam — Model Paper 2024]**
**(CO4 — Understand, Apply, Analyze)**

**(a)** Define **Slowly Changing Dimensions (SCD)**. Compare **SCD Type 1, Type 2, and Type 3** with one example each. **(7 Marks)**

**(b)** Write **SQL queries** to perform the following OLAP operations on the `fact_sales` star schema defined in Section 3.1: **(7 Marks)**
   1. *Roll-up:* Total revenue per product category for the year 2024.
   2. *Drill-down:* Monthly revenue per product category for Q4 2024.
   3. *Slice:* All sales in the "Kerala" region.

---

#### Model Solution — Question B

**(a) SCD Definition & Comparison (7 Marks)**

**Valuation Key — 7 Marks Distribution:**
- *[Definition of SCD: 1 Mark]*
- *[SCD Type 1 explanation + example: 2 Marks]*
- *[SCD Type 2 explanation + example: 2 Marks]*
- *[SCD Type 3 explanation + example: 2 Marks]*

**Definition (1 Mark):**
**Slowly Changing Dimensions (SCD)** are dimension-table rows whose descriptive attributes (e.g., a customer's city, a product's price) **change slowly and unpredictably over time** — unlike rapidly-changing transactional facts. The warehouse must decide *how* to record these changes.

**Comparison Table (6 Marks — 2 per type):**

| Type | Strategy | Example |
|---|---|---|
| **SCD Type 1 — Overwrite** | Old value is **physically replaced** with the new value. **No history** preserved. Simple, fast, loses audit trail. | Customer `C1` moves from "Kochi" to "Trivandrum" $\rightarrow$ `UPDATE dim_customer SET city = 'Trivandrum' WHERE customer_id = 'C1'`. |
| **SCD Type 2 — Add New Row** | A **new row** is inserted with the new value. Old row is flagged as historical using `end_date` and `is_current` flags. **Full history** preserved. | Same scenario $\rightarrow$ `UPDATE` old row: `end_date = NOW(), is_current = FALSE`; then `INSERT` a new surrogate-keyed row with `city = 'Trivandrum'`, `effective_date = NOW()`, `is_current = TRUE`. |
| **SCD Type 3 — Add New Column** | The **old value is kept in a separate column** (e.g., `previous_city`). Limited history — only the **previous** value is retained. | `ALTER TABLE dim_customer ADD COLUMN previous_city VARCHAR(50);` then `UPDATE dim_customer SET previous_city = city, city = 'Trivandrum' WHERE customer_id = 'C1'`. |

---

**(b) OLAP SQL Queries (7 Marks — 2 + 3 + 2 Distribution)**

**Query 1 — Roll-up: Total revenue per category for 2024 (2 Marks)**

```sql
SELECT  p.category,
        SUM(f.total_amount)   AS total_revenue
FROM        fact_sales  AS f
INNER JOIN  dim_product AS p ON f.product_key = p.product_key
INNER JOIN  dim_time    AS t ON f.time_key    = t.time_key
WHERE       t.year = 2024
GROUP BY    p.category
ORDER BY    total_revenue DESC;
```

*Valuation:* [Correct JOINs: 1 Mark] [Correct GROUP BY + aggregation: 1 Mark]

**Query 2 — Drill-down: Monthly revenue per category for Q4 2024 (3 Marks)**

```sql
SELECT  p.category,
        t.month,
        SUM(f.total_amount) AS monthly_revenue
FROM        fact_sales  AS f
INNER JOIN  dim_product AS p ON f.product_key = p.product_key
INNER JOIN  dim_time    AS t ON f.time_key    = t.time_key
WHERE       t.year = 2024
  AND       t.quarter = 4
GROUP BY    p.category, t.month
ORDER BY    p.category, t.month;
```

*Valuation:* [Quarter filter: 1 Mark] [Month-level grouping: 1 Mark] [Sorting / presentation: 1 Mark]

**Query 3 — Slice: All sales in the "Kerala" region (2 Marks)**

```sql
SELECT  f.*,
        s.store_name,
        s.region,
        p.product_name,
        c.full_name
FROM        fact_sales   AS f
INNER JOIN  dim_store    AS s ON f.store_key    = s.store_key
INNER JOIN  dim_product  AS p ON f.product_key  = p.product_key
INNER JOIN  dim_customer AS c ON f.customer_key = c.customer_key
WHERE       s.region = 'Kerala';
```

*Valuation:* [Correct JOIN to dim_store: 1 Mark] [Correct WHERE filter & projection: 1 Mark]

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls (Lose Marks Here!)**
> 1. **Forgetting the SCD audit columns** (`effective_date`, `end_date`, `is_current`) in any SCD Type 2 answer — costs a full 1 mark.
> 2. **Confusing SCD Type 1 with Type 2:** Type 1 = overwrite (no history); Type 2 = insert new row (full history). Examiners allocate separate marks for each.
> 3. **In star-schema answers, writing the fact table *without* foreign keys** — every fact table *must* reference every dimension. Missing FK = -1 mark.
> 4. **In OLAP queries, forgetting the `GROUP BY` clause** when using `SUM()` — syntax error or wrong output, full mark loss on that sub-question.
> 5. **Mixing up Roll-up and Drill-down:** Roll-up = aggregate to a higher level (e.g., daily $\rightarrow$ monthly); Drill-down = disaggregate to a lower level (e.g., monthly $\rightarrow$ daily). Examiners check the direction.
> 6. **Writing OLTP-style 3NF schemas in a warehouse question** — the expected answer is **denormalized star/snowflake**. Showing 10+ normalized tables = 0 marks for schema design.

---

#### Topic Recap & Important Things to Remember

- **ETL** = **Extract, Transform, Load** — the canonical data-warehouse loading paradigm. The modern variant **ELT** (Extract, Load, Transform) leverages the warehouse's own compute (e.g., Snowflake, BigQuery, Redshift Spectrum).
- The **Transformation** phase is the most complex — it includes **cleansing, deduplication, type casting, business-rule application, enrichment, aggregation, surrogate-key generation, and SCD handling**.
- A **Data Warehouse** is *subject-oriented, integrated, time-variant, non-volatile* (Inmon's four characteristics).
- **OLTP** = transactional, normalized, row-level; **OLAP** = analytical, denormalized, aggregate-level.
- **Star schema** = central fact table + flat denormalized dimensions. **Snowflake schema** = normalized dimensions (more joins).
- **Fact tables** contain **measures** (numeric) and **foreign keys**; **dimension tables** contain **descriptive attributes**.
- The **5 OLAP operations** (KTU must-know): **Roll-up, Drill-down, Slice, Dice, Pivot**.
- **3 SCD types:** Type 1 = overwrite (no history); Type 2 = insert new row with audit columns (full history); Type 3 = add `previous_*` column (limited history).
- **4 Analytics descriptors:** **Descriptive** (what), **Diagnostic** (why), **Predictive** (what will), **Prescriptive** (what should).
- **Surrogate keys** (integer or UUID) are preferred over natural keys in warehouses because they are **immutable, smaller, and join-faster**.
- **Bulk loading** (`COPY INTO`, `LOAD DATA`) is **10x–100x faster** than row-by-row `INSERT` and is the de-facto production standard.
- **Idempotent loads** use the SQL `MERGE` statement — re-running the same ETL job will not create duplicates.
- **Star schema** is the **default KTU-recommended** schema for analytical reporting; snowflake is reserved for very large dimensions.
- A **KPI** is a measure bound to a dimension and a time window — e.g., *Monthly Revenue per Product Category*.
<!-- SECTION_5_END -->
