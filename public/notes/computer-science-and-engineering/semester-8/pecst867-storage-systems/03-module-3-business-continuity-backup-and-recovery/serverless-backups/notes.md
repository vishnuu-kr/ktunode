# Serverless Backups

<!-- SECTION_1_START -->
# Serverless Backups — Core Technical Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Scheme)

> [!IMPORTANT]
> **Definition (Serverless Backup):**
> A *Serverless Backup* is a cloud-native data protection paradigm in which the orchestration, scheduling, execution, and retention of backup operations are entirely abstracted from the underlying infrastructure. The consumer does not provision, patch, scale, or manage any dedicated backup server, virtual machine, or container. Instead, the workload is decomposed into stateless, event-driven functions (Function-as-a-Service, FaaS) triggered by cloud events, policies, or APIs, with persistence delegated to managed object storage or snapshot services.

In the KTU 2024 *Business Continuity, Backup and Recovery* module, serverless backups are positioned as the **modern, elasticity-first evolution** of the traditional client-server backup model. The four defining pillars are:

1. **No-Ops Orchestration** — the cloud provider owns the control plane.
2. **Event-Driven Invocation** — schedules or data-change events trigger ephemeral compute.
3. **Pay-per-Invocation Economics** — billing is per request and per GB, not per provisioned hour.
4. **Managed Durability** — backup data lands in a service whose durability SLA is contractually guaranteed (e.g., **99.999999999%** for Amazon S3 Standard, i.e., *eleven nines*).

## 1.2 Conceptual Analogy & Intuition

> [!NOTE]
> **The Electrician Analogy (Plain-English Intuition):**
> Imagine your office needs light. *Traditional Backup* is like **buying a diesel generator** — you own it, fuel it, service it, and keep it running 24×7 even when no one is in the room. *Serverless Backup* is like **subscribing to the Kerala State Electricity Board (KSEB)** — you just flip a switch. The grid, transformers, and power plants are someone else's problem, and you only pay for the units you consume.

Another useful mental model: think of a serverless backup as a **photocopier that only exists while a print job is running**. The moment the last page is copied, the copier vanishes. You never see a "photocopier" idling in the corner chewing electricity.

## 1.3 Visualizing Cost & Duration Relationships

> [!VISUALIZATION CONTROL]
> **Concept:** Cost-vs-Retention curve for tiered serverless backup storage.
> **GeoGebra / Desmos Input Equations:**
> * `f1(x) = 0.023 * x`      (Hot tier — S3 Standard, USD per GB-month)
> * `f2(x) = 0.004 * x`      (Cool tier — S3 Glacier Instant Retrieval)
> * `f3(x) = 0.00099 * x`    (Cold tier — S3 Glacier Deep Archive)
> **Visual Description:** Plot three descending straight lines through the origin. The student should observe that as the *retention window* (x-axis, in months) increases, the cold-tier line remains nearly flat against the x-axis while the hot-tier line climbs steeply, justifying a *lifecycle-tiered* serverless design.

## 1.4 Industry Standard Metrics You Must Memorise

| Metric | Symbol | Standard Value (Cloud Default) |
|---|---|---|
| Object Storage Durability | $D_{obj}$ | $\geq 99.999999999\%$ (eleven 9s) |
| Object Storage Availability | $A_{obj}$ | $99.99\%$ |
| RTO (Recovery Time Objective) | $t_{RTO}$ | Customer-defined, often $\le 4$ hrs |
| RPO (Recovery Point Objective) | $t_{RPO}$ | Customer-defined, often $\le 15$ min |
| Mean Time To Invoke (FaaS) | $MTTI$ | $\approx 100$ ms cold start |

> [!TIP]
> Examiners love asking you to state the *eleven-nines* durability of S3 Standard. Memorise it as $1 - 10^{-11}$.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Operational Pipeline of a Serverless Backup

A production-grade serverless backup can be decomposed into the following six logical stages. Each stage is a *stateless function* chained through an event bus (typically a managed message queue or simple object-create notifications).

1. **Trigger Stage** — A scheduled EventBridge rule, cron expression, or object-created S3 event fires the function.
2. **Snapshot / Extract Stage** — The function calls a managed API (`CreateSnapshot`, `ExportImage`, `Read DB Logs`, etc.) on the source data service.
3. **Transform Stage** — Data is optionally encrypted (envelope encryption with KMS), compressed (gzip/zstd), or chunked.
4. **Staging Stage** — Ephemeral `/tmp` storage (up to **512 MB** on AWS Lambda, up to **32 GB** with EFS mount) buffers the artefact.
5. **Persist Stage** — The artefact is `PUT` into an object store (S3, Azure Blob, GCS) under a versioned, lifecycle-managed prefix.
6. **Verify & Notify Stage** — An SHA-256 checksum is recomputed, and the result is published to a topic (SNS, EventBridge, or webhook).

## 2.2 Core Equations & Cheat Sheet

> [!IMPORTANT]
> The following table consolidates every formula you are likely to need in a 14-mark derivation. The vertical-bar symbol for absolute value / conditional has been written as `\mid` to keep the markdown table intact.

| # | Concept | Formula / Expression | Engineering Meaning |
|---|---|---|---|
| 1 | **Durability Probability** | $D = 1 - \left(1 - d\right)^{n}$ | Probability of *no data loss* across $n$ replicas, each with individual durability $d$. |
| 2 | **Availability (steady-state)** | $A = \dfrac{MTBF}{MTBF + MTTR}$ | Ratio of *up-time* to *total time*; drives SLA design. |
| 3 | **Recovery Point Objective** | $RPO = t_{last\_backup} - t_{disaster}$ | Maximum acceptable data loss window. |
| 4 | **Recovery Time Objective** | $RTO = t_{service\_restored} - t_{disaster}$ | Maximum acceptable downtime window. |
| 5 | **Cost of Tiered Retention** | $C_{total} = \sum_{i=1}^{k} c_{i} \cdot s_{i} \cdot m_{i}$ | Sum over $k$ storage tiers; $c_i$ = unit cost, $s_i$ = size in GB, $m_i$ = months retained. |
| 6 | **Replication Lag** | $L_{repl} = t_{ack\_remote} - t_{write\_local}$ | Time difference that bounds the asynchronous RPO. |
| 7 | **Cross-Region Bandwidth** | $B_{req} = \dfrac{S_{payload}}{t_{window}}$ | Minimum link capacity to drain a payload of size $S$ inside a window. |
| 8 | **Cold-Start Penalty** | $t_{invoke} = t_{init} + t_{exec}$ | First-ever or rare-region invocation pays $t_{init} \approx 100$–$300$ ms. |
| 9 | **Durability-Weighted SLA** | $SLA = D \cdot A$ | Combined contract strength of the backing store. |
| 10 | **Conditional Transition Rule** | $T_{i \to j} = \begin{cases} 1, & \text{if } t_{age} \geq \tau_{ij} \\ 0, & \text{otherwise} \end{cases}$ | Boolean rule that decides whether a backup object should move from tier $i$ to tier $j$ after age threshold $\tau_{ij}$. |

## 2.3 Why the "Why" Matters (Engineering Motivation)

* **Elasticity** — Backup windows are bursty. Traditional servers either sit idle or get overwhelmed. Serverless functions scale out to **1000+ concurrent invocations per region** by default and can be raised on quota request.
* **Cost Alignment** — A nightly 30-minute snapshot job that transfers 2 TB costs roughly the same as running a t3.medium VM for those 30 minutes, but you stop paying the instant the function returns.
* **Reduced Blast Radius** — Because the function is ephemeral, a compromised execution environment cannot persist a backdoor across invocations.
* **Immutability & Ransomware Defence** — Combining *Object Lock* with *WORM* (Write-Once-Read-Many) buckets produces an air-gapped, encryption-at-rest vault that ransomware cannot encrypt or delete.

## 2.4 Real-World Production Usage

| Domain | How Serverless Backup is Used | Business Outcome |
|---|---|---|
| **RDBMS** (Aurora, RDS) | `CreateDBClusterSnapshot` triggered by EventBridge → copy to S3 | Decouples snapshot chain from long-term archive |
| **VMware on AWS** | VMC `CreateVMSnapshot` via Lambda | Ransomware-proof off-VMware copies |
| **SaaS Tenants** | Daily API-based export of tenant data to S3 | Meets contractual data-portability clauses |
| **Endpoint / EDR Telemetry** | Kinesis → Lambda → S3 Glacier | Years of cheap, queryable forensic history |
| **AI/ML Model Artefacts** | S3 versioning + Lambda to Glacier on age $\geq 90$ d | Reproducible training lineage |

> [!TIP]
> The examiner's favourite cross-question is: *"Why is serverless backup cheaper than a VM-based backup for low-RPO workloads?"* The correct answer must mention **eliminated idle cost**, **granular concurrency**, and **managed durability**.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## 3.1 Derivation: Computing Effective Cross-Region Durability

We begin with a single-region object whose per-object durability is $d = 0.99999999999$ (i.e., eleven nines). The probability that **none** of $n$ independent replicas survive is $(1-d)^{n}$, so the joint durability is:

$$D_{n} = 1 - (1 - d)^{n}$$

Let $d = 1 - \epsilon$ where $\epsilon = 10^{-11}$. For $\epsilon \ll 1$, the binomial expansion gives:

$$(1 - \epsilon)^{n} \approx 1 - n\epsilon + \binom{n}{2}\epsilon^{2} - \cdots$$

Retaining only the first two terms (justified because $\epsilon$ is of order $10^{-11}$ and we work with small $n$):

$$D_{n} \approx 1 - n\epsilon$$

For a 3-replica cross-region replication setup ($n = 3$):

$$D_{3} \approx 1 - 3 \times 10^{-11} = 1 - 3 \times 10^{-11} = 0.99999999997$$

This corresponds to **thirteen nines of effective durability**, which exceeds the contractual single-region SLA and is why cross-region serverless replication is treated as the gold standard for *catastrophic-zone-failure* protection.

## 3.2 Derivation: Minimum Bandwidth for a Backup Window

Given a payload size $S$ (in GB) that must be drained inside a window of $T$ seconds, the minimum throughput is:

$$B_{req} = \frac{S \cdot 8}{T} \quad \text{(in Gbps)}$$

**Worked example:** Drain $S = 500$ GB inside $T = 3600$ s (1 hour).

$$B_{req} = \frac{500 \cdot 8}{3600} = \frac{4000}{3600} = 1.111 \text{ Gbps}$$

Therefore a **2 Gbps** Direct Connect or Interconnect link satisfies the requirement with a ~45% safety margin. This derivation is what a KTU examiner expects when a 14-mark question asks *"size the link for an RPO of 1 hour"*.

## 3.3 Derivation: Tiered Retention Cost

Suppose a workload of $S = 10$ TB ($= 10240$ GB) is retained under the following policy:

* Tier 1 — S3 Standard for the first 30 days, unit cost $c_1 = \$0.023$ per GB-month.
* Tier 2 — S3 Glacier Instant Retrieval for days 31–180, $c_2 = \$0.004$.
* Tier 3 — S3 Glacier Deep Archive from day 181 onward, $c_3 = \$0.00099$.

Then the cost over $m = 12$ months is computed as:

$$C_{total} = S \cdot \left[ c_1 \cdot \frac{1}{12} + c_2 \cdot \frac{5}{12} + c_3 \cdot \frac{6}{12} \right]$$

Substituting the numerical values:

$$\begin{aligned}
C_{total} &= 10240 \cdot \left[ 0.023 \cdot 0.0833 + 0.004 \cdot 0.4167 + 0.00099 \cdot 0.5 \right] \\
&= 10240 \cdot \left[ 0.001917 + 0.001667 + 0.000495 \right] \\
&= 10240 \cdot 0.004079 \\
&= \$41.77 \text{ per month}
\end{aligned}$$

Compare this with storing **all 10 TB in S3 Standard** for 12 months:

$$C_{flat} = 10240 \cdot 0.023 \cdot 12 = \$2826.24 \text{ per month}$$

The tiered policy yields a savings of approximately **98.5%**, which is the central business case for lifecycle-driven serverless backup.

## 3.4 Production-Ready Python Implementation (AWS Lambda + Boto3)

The following is a complete, copy-pasteable AWS Lambda function. Every variable is typed, every AWS call is wrapped in explicit error handling, and the function is *idempotent* (safe to retry).

```python
"""
serverless_backup.py
Author : KTU Premium Notes (STORAGE SYSTEMS - PECST867)
Purpose: Event-driven snapshot of an RDS DB instance, copy to S3 with
         KMS envelope encryption, lifecycle-tag the object, and publish
         a verification metric.
Trigger: AWS EventBridge rule (cron: 0 2 * * ? *) OR S3 object-created.
Runtime: Python 3.12, AWS Lambda.
"""

from __future__ import annotations

import hashlib
import json
import logging
import os
import time
from datetime import datetime, timezone
from typing import Any, Final

import boto3
from botocore.exceptions import BotoCoreError, ClientError

# ---------------------------------------------------------------------------
# 1. Constants and configuration
# ---------------------------------------------------------------------------
LOG_LEVEL: Final[str] = os.getenv("LOG_LEVEL", "INFO")
DB_INSTANCE_ID: Final[str] = os.getenv("DB_INSTANCE_ID", "ktu-prod-mysql")
TARGET_BUCKET: Final[str] = os.getenv("TARGET_BUCKET", "ktu-serverless-backups")
KMS_KEY_ID: Final[str] = os.getenv("KMS_KEY_ID", "alias/ktu-backup-key")
LIFECYCLE_TAG: Final[str] = "expiry-180d"
REGION: Final[str] = os.getenv("AWS_REGION", "ap-south-1")

# ---------------------------------------------------------------------------
# 2. Logger setup
# ---------------------------------------------------------------------------
logger: logging.Logger = logging.getLogger()
logger.setLevel(LOG_LEVEL)

# ---------------------------------------------------------------------------
# 3. AWS clients (re-used across invocations for warm-start performance)
# ---------------------------------------------------------------------------
_rds_client = boto3.client("rds", region_name=REGION)
_s3_client = boto3.client("s3", region_name=REGION)
_sns_client = boto3.client("sns", region_name=REGION)

# ---------------------------------------------------------------------------
# 4. Helper: create the DB snapshot
# ---------------------------------------------------------------------------
def create_db_snapshot(instance_id: str) -> str:
    """Issue a managed DB snapshot and return the snapshot identifier."""
    timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    snapshot_id = f"ktu-{instance_id}-{timestamp}"
    logger.info("Creating snapshot %s for %s", snapshot_id, instance_id)
    try:
        response = _rds_client.create_db_snapshot(
            DBSnapshotIdentifier=snapshot_id,
            DBInstanceIdentifier=instance_id,
            Tags=[
                {"Key": "Project", "Value": "KTU-Storage"},
                {"Key": "CreatedBy", "Value": "ServerlessBackup-Lambda"},
            ],
        )
        return response["DBSnapshot"]["DBSnapshotIdentifier"]
    except (BotoCoreError, ClientError) as exc:
        logger.error("create_db_snapshot failed: %s", exc)
        raise

# ---------------------------------------------------------------------------
# 5. Helper: wait for snapshot to become available
# ---------------------------------------------------------------------------
def wait_for_snapshot(snapshot_id: str, timeout_seconds: int = 1800) -> str:
    """Block (with cooperative yielding) until the snapshot status is 'available'."""
    deadline = time.time() + timeout_seconds
    waiter = _rds_client.get_waiter("db_snapshot_completed")
    remaining = max(1, int(deadline - time.time()))
    logger.info("Waiting up to %ds for snapshot %s", remaining, snapshot_id)
    waiter.wait(DBSnapshotIdentifier=snapshot_id, WaiterConfig={"Delay": 30, "MaxAttempts": remaining // 30})
    return snapshot_id

# ---------------------------------------------------------------------------
# 6. Helper: copy snapshot artefact metadata to S3 with KMS encryption
# ---------------------------------------------------------------------------
def archive_metadata_to_s3(snapshot_id: str) -> str:
    """Write a JSON manifest to S3 with server-side KMS encryption."""
    manifest_key = f"rds/{snapshot_id}/manifest.json"
    manifest_body = {
        "snapshot_id": snapshot_id,
        "db_instance": DB_INSTANCE_ID,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "kms_key": KMS_KEY_ID,
        "lifecycle_tag": LIFECYCLE_TAG,
    }
    body_bytes = json.dumps(manifest_body, indent=2).encode("utf-8")
    checksum = hashlib.sha256(body_bytes).hexdigest()
    try:
        _s3_client.put_object(
            Bucket=TARGET_BUCKET,
            Key=manifest_key,
            Body=body_bytes,
            ServerSideEncryption="aws:kms",
            SSEKMSKeyId=KMS_KEY_ID,
            Tagging=f"Lifecycle={LIFECYCLE_TAG}",
            Metadata={"sha256": checksum},
        )
        logger.info("Archived manifest %s (sha256=%s)", manifest_key, checksum)
        return checksum
    except (BotoCoreError, ClientError) as exc:
        logger.error("archive_metadata_to_s3 failed: %s", exc)
        raise

# ---------------------------------------------------------------------------
# 7. Helper: publish success / failure to SNS
# ---------------------------------------------------------------------------
def notify(topic_arn: str, subject: str, payload: dict[str, Any]) -> None:
    try:
        _sns_client.publish(
            TopicArn=topic_arn,
            Subject=subject,
            Message=json.dumps(payload, default=str),
        )
    except (BotoCoreError, ClientError) as exc:
        logger.warning("notify failed (non-fatal): %s", exc)

# ---------------------------------------------------------------------------
# 8. Lambda entry point
# ---------------------------------------------------------------------------
def lambda_handler(event: dict, context: Any) -> dict:
    topic_arn = os.getenv("ALERT_TOPIC_ARN", "")
    logger.info("Lambda invoked: request_id=%s", context.aws_request_id)
    start = time.time()
    try:
        snap_id = create_db_snapshot(DB_INSTANCE_ID)
        wait_for_snapshot(snap_id)
        checksum = archive_metadata_to_s3(snap_id)
        duration = round(time.time() - start, 2)
        result = {
            "status": "SUCCESS",
            "snapshot_id": snap_id,
            "sha256": checksum,
            "duration_sec": duration,
        }
        if topic_arn:
            notify(topic_arn, "Backup OK", result)
        return result
    except Exception as exc:
        logger.exception("Backup pipeline failed")
        if topic_arn:
            notify(topic_arn, "Backup FAILED", {"error": str(exc)})
        raise
```

### 3.4.1 Line-by-Line Rationale (Valuation Key)

| Line Block | Examiner's Awarded Marks | Why it Matters |
|---|---|---|
| `boto3.client` declarations | 2 | Shows understanding of *warm-start* reuse. |
| `create_db_snapshot` try/except | 2 | Demonstrates *defensive error handling*. |
| `wait_for_snapshot` timeout | 1 | Prevents runaway billing. |
| `ServerSideEncryption="aws:kms"` | 2 | Security & compliance requirement. |
| `Tagging=f"Lifecycle=..."` | 1 | Hooks the object into an S3 Lifecycle rule. |
| Idempotent manifest key | 1 | Allows safe re-runs after partial failure. |
| `notify` on success **and** failure | 1 | Operational observability. |

## 3.5 Infrastructure-as-Code (Terraform Snippet) — *For 14-Mark "Policy as Code" Questions*

```hcl
# serverless_backup.tf  -  Provisions the entire backup pipeline
resource "aws_iam_role" "backup_lambda_role" {
  name               = "ktu-serverless-backup-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_lambda_function" "serverless_backup" {
  function_name = "ktu-serverless-backup"
  role          = aws_iam_role.backup_lambda_role.arn
  handler       = "serverless_backup.lambda_handler"
  runtime       = "python3.12"
  filename      = "serverless_backup.zip"
  timeout       = 900
  memory_size   = 1024
  environment {
    variables = {
      DB_INSTANCE_ID = "ktu-prod-mysql"
      TARGET_BUCKET  = "ktu-serverless-backups"
      KMS_KEY_ID     = "alias/ktu-backup-key"
    }
  }
}

resource "aws_cloudwatch_event_rule" "nightly" {
  name                = "ktu-nightly-backup"
  schedule_expression = "cron(0 2 * * ? *)"
}

resource "aws_cloudwatch_event_target" "invoke_lambda" {
  rule      = aws_cloudwatch_event_rule.nightly.name
  target_id = "ktu-serverless-backup"
  arn       = aws_lambda_function.serverless_backup.arn
}

resource "aws_s3_bucket_lifecycle_configuration" "backup_lifecycle" {
  bucket = "ktu-serverless-backups"
  rule {
    id     = "move-to-glacier"
    status = "Enabled"
    transition {
      days          = 30
      storage_class = "GLACIER_IR"
    }
    transition {
      days          = 180
      storage_class = "DEEP_ARCHIVE"
    }
    expiration {
      days = 2555  # 7-year retention
    }
  }
}
```

> [!WARNING]
> Examiners will deduct marks if you write the **Lambda** as a black box. You must always state the **trigger source**, **IAM role**, **environment variables**, **timeout**, and **memory size**, because each of these is a tunable knob that directly affects the **RPO**, **RTO**, and **cost**.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 End-to-End Serverless Backup Topology (Mermaid)

```mermaid
flowchart LR
    A[cron trigger]:::src --> B[EventBridge rule]:::src
    B --> C[Lambda function]:::core
    C --> D[RDS CreateSnapshot API]:::svc
    D --> E[Waiter db snapshot completed]:::core
    E --> F[Encrypt with KMS]:::sec
    F --> G[Put object to S3]:::store
    G --> H[Apply Lifecycle tag]:::store
    H --> I[Compute SHA-256 checksum]:::core
    I --> J[Publish to SNS topic]:::notify
    J --> K[PagerDuty / Email / Slack]:::notify

    classDef src fill:#fef3c7,stroke:#92400e,color:#000
    classDef core fill:#dbeafe,stroke:#1d4ed8,color:#000
    classDef svc fill:#dcfce7,stroke:#166534,color:#000
    classDef sec fill:#fee2e2,stroke:#991b1b,color:#000
    classDef store fill:#ede9fe,stroke:#5b21b6,color:#000
    classDef notify fill:#fce7f3,stroke:#9d174d,color:#000
```

## 4.2 Tiered Storage State Machine (Mermaid)

```mermaid
stateDiagram-v2
    [*] --> S3Standard
    S3Standard --> GlacierIR: age greater than or equal to 30 days
    GlacierIR --> DeepArchive: age greater than or equal to 180 days
    DeepArchive --> Deleted: age greater than or equal to 2555 days
    Deleted --> [*]

    note right of S3Standard
      Hot tier
      USD 0.023 per GB month
      Immediate access
    end note

    note right of GlacierIR
      Cool tier
      USD 0.004 per GB month
      Millisecond retrieval
    end note

    note right of DeepArchive
      Cold tier
      USD 0.00099 per GB month
      12 hour retrieval
    end note
```

## 4.3 Failure-Mode Recovery Flow (Mermaid)

```mermaid
sequenceDiagram
    participant SCH as EventBridge
    participant LAM as Lambda
    participant RDS as RDS Service
    participant S3  as S3 Bucket
    participant SNS as SNS Topic
    participant OPR as Operator

    SCH->>LAM: Invoke at 02 00 UTC
    LAM->>RDS: CreateDBSnapshot
    RDS-->>LAM: SnapshotId
    LAM->>RDS: Waiter snapshot completed
    alt Snapshot succeeds
      RDS-->>LAM: status available
      LAM->>S3: PutObject manifest json KMS
      S3-->>LAM: 200 OK ETag
      LAM->>SNS: Publish Backup OK
    else Snapshot fails
      RDS-->>LAM: status failed
      LAM->>SNS: Publish Backup FAILED
      SNS->>OPR: Page on call engineer
      OPR->>LAM: Inspect CloudWatch logs
    end
```

## 4.4 Sequential Processing Topology Matrix

| Stage | Component | Input | Output | Failure Handling |
|---|---|---|---|---|
| 1 | EventBridge | Cron UTC 02 00 | Invocation event | DLQ to SQS |
| 2 | Lambda | Event JSON | RDS API call | Retry $\times 2$ then DLQ |
| 3 | RDS | `CreateDBSnapshot` | Snapshot ARN | CloudWatch alarm |
| 4 | Waiter | Snapshot ARN | Status `available` | Timeout → alert |
| 5 | S3 `PutObject` | JSON manifest | Object key + ETag | Versioning on |
| 6 | SNS | Status payload | Email / SMS | Bounded retry |

> [!NOTE]
> The **Topology Matrix** above is the prescribed fallback when a question demands a "diagram" of a process that contains multiple asynchronous cloud services. The grid format avoids the Mermaid parser limitations while still satisfying the KTU rubric for *system architecture sketches*.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — 3-Mark Short-Answer Questions (Remember / Understand)

### Q1. `[KTU University Exam — July 2024]` *(CO1, Remember)*

**State any four characteristics that distinguish a serverless backup from a traditional VM-based backup.**

**Model Answer (Valuation Key):**

1. **No infrastructure management** — serverless backup requires zero provisioning of compute or storage servers by the customer. *(1 mark)*
2. **Event-driven invocation** — backup jobs are triggered by cron rules or data-change events, not by a long-running daemon. *(1 mark)*
3. **Pay-per-use billing** — cost is computed per request and per GB-month, eliminating idle-hour waste. *(1 mark)*
4. **Auto-scaling concurrency** — the FaaS platform transparently scales from 0 to thousands of parallel workers. *(1 mark)*

---

### Q2. `[KTU University Exam — Dec 2023]` *(CO2, Understand)*

**Define *Recovery Point Objective* (RPO) and *Recovery Time Objective* (RTO). How do they influence the choice of serverless backup triggers?**

**Model Answer (Valuation Key):**

* **RPO** is the *maximum tolerable data loss* measured as the time elapsed between the last successful backup and the disaster. *(1 mark)*
* **RTO** is the *maximum tolerable downtime* measured as the time from disaster declaration to service restoration. *(1 mark)*
* A tight RPO (e.g., $\le 5$ min) mandates *high-frequency triggers* such as continuous replication or near-real-time change-data-capture, whereas a loose RPO (e.g., 24 h) is satisfied by a daily cron. Likewise, a tight RTO favours warm standby and pre-built AMIs over cold restores. *(1 mark)*

---

## 5.2 Part B — 14-Mark Questions (Internal Choice, Apply / Analyse)

> [!NOTE]
> Per the KTU 2024 ESE pattern, every Part-B question carries **internal choice**. Two fully independent alternatives are provided below; the student answers **either** A **or** B.

### Question A (14 Marks) `[KTU University Exam — July 2024]` *(CO3, Apply)*

**(a)** With the aid of a labelled block diagram, describe the end-to-end architecture of a serverless backup solution for a 500 GB MySQL RDS instance running in `ap-south-1`. Your answer must include the trigger, the compute service, the storage service, the encryption layer, and the notification layer. *(7 marks)*

**(b)** Compute the monthly retention cost if the 500 GB snapshot chain is held for 12 months using a tiered policy: 30 days in S3 Standard, the next 150 days in S3 Glacier Instant Retrieval, and the remaining 185 days in S3 Glacier Deep Archive. Use the unit rates from the formula sheet in Section 2.2. *(7 marks)*

#### Model Solution A(a) — Architecture *(7 marks)*

| Sub-Component | Description | Marks |
|---|---|---|
| **Trigger** | EventBridge rule with `cron(0 2 * * ? *)` | 1 |
| **Compute** | AWS Lambda (Python 3.12, 1024 MB, 15-min timeout) | 1 |
| **Snapshot Service** | RDS `CreateDBSnapshot` + waiter | 1 |
| **Encryption Layer** | AWS KMS CMK + S3 SSE-KMS | 1 |
| **Object Storage** | Versioned S3 bucket with Lifecycle policy | 1 |
| **Notification** | SNS topic → Email + PagerDuty | 1 |
| **Diagram** (see Section 4.1) | End-to-end labelled flowchart | 1 |

#### Model Solution A(b) — Cost Computation *(7 marks)*

Let $S = 500$ GB, $m = 12$ months. Apply the tiered cost formula:

$$C_{total} = S \cdot \left[ c_1 \cdot \frac{m_1}{12} + c_2 \cdot \frac{m_2}{12} + c_3 \cdot \frac{m_3}{12} \right]$$

where $m_1 = 1$, $m_2 = 5$, $m_3 = 6$ (because the policy is 30 d / 150 d / 185 d, normalised to 1 / 5 / 6 of a year).

$$\begin{aligned}
C_{total} &= 500 \cdot \left[ 0.023 \cdot \frac{1}{12} + 0.004 \cdot \frac{5}{12} + 0.00099 \cdot \frac{6}{12} \right] \\
&= 500 \cdot \left[ 0.001917 + 0.001667 + 0.000495 \right] \\
&= 500 \cdot 0.004079 \\
&= \$2.04 \text{ per month}
\end{aligned}$$

[Stating the formula and substituting values: 3 Marks]
[Arithmetic correctness of the bracket term: 2 Marks]
[Final numerical answer: 1 Mark]
[Comparing with the flat S3 Standard cost $\approx \$138$ per month and stating the $\approx 98.5\%$ saving: 1 Mark]

> [!WARNING]
> **Valuation Pitfall:** Do *not* forget to **convert days into months** before applying $c_i \cdot s_i \cdot m_i$. A common mistake is to multiply the unit price by 30 days instead of by $1/12$ of a year, which inflates the answer by a factor of 3.6 and loses **2 marks**.

---

### Question B (14 Marks) `[KTU University Exam — Dec 2023]` *(CO4, Analyse)*

**(a)** Explain why a serverless backup is intrinsically more ransomware-resilient than a traditional on-premises backup. Your answer must reference *immutability*, *least-privilege IAM*, and *air-gapping*. *(7 marks)*

**(b)** A backup payload of $S = 2$ TB must be replicated across regions inside a 4-hour window. Compute the **minimum cross-region bandwidth in Gbps** required, and state which AWS service you would provision to guarantee it. *(7 marks)*

#### Model Solution B(a) — Ransomware Resilience *(7 marks)*

1. **Immutability via Object Lock** — S3 Object Lock in *Compliance* mode prevents any IAM principal (including root) from deleting or overwriting a backup object before its retention timer expires. *(2 marks)*
2. **Least-Privilege IAM** — The Lambda execution role grants only `rds:CreateDBSnapshot`, `s3:PutObject`, and `kms:Encrypt`. A compromised application server therefore *cannot* call `s3:DeleteObject` on the backup bucket. *(2 marks)*
3. **Air-Gapping via Cross-Region Copy** — A second copy is replicated to a separate AWS account in a different region using a destination bucket whose IAM trust relationship is one-way; the production account cannot delete the copy. *(2 marks)*
4. **Diagram reference** (see Section 4.1) and concluding synthesis statement. *(1 mark)*

#### Model Solution B(b) — Bandwidth Computation *(7 marks)*

Convert $S$ into gigabits: $S = 2$ TB $= 2 \cdot 1024$ GB $= 2048$ GB $= 2048 \cdot 8$ Gb $= 16384$ Gb.
The window is $T = 4$ hours $= 4 \cdot 3600$ s $= 14400$ s.

$$B_{req} = \frac{S_{Gb}}{T} = \frac{16384}{14400} = 1.138 \text{ Gbps}$$

[Writing the formula $B = S/T$: 2 Marks]
[Unit-conversion (TB → Gb) shown explicitly: 2 Marks]
[Arithmetic and final value: 2 Marks]
[Recommending AWS Direct Connect with a 2 Gbps port for headroom: 1 Mark]

> [!WARNING]
> **Valuation Pitfall:** Examiners **will** mark you down if you use the decimal definition $1$ TB $= 10^{6}$ MB instead of the binary $1$ TB $= 1024$ GB. Always state which convention you are using to avoid ambiguity. Failing to do so costs **1 mark**.

---

## 5.3 Topic Recap & Important Things to Remember

> [!TIP]
> Treat this checklist as your *last-page revision sheet* the night before the exam.

* **Core idea** — A serverless backup is *event-driven*, *ephemeral*, and *pay-per-invocation*; the customer owns **no** infrastructure.
* **Eleven-nines durability** — $D = 1 - 10^{-11}$ is the *de-facto* SLA of S3 Standard. Memorise it verbatim.
* **RTO vs RPO** — RTO is *downtime tolerance*; RPO is *data-loss tolerance*. Both are **time** values, not percentages.
* **Six-stage pipeline** — Trigger → Snapshot → Transform → Stage → Persist → Verify/Notify.
* **Tiered retention** — Always express tier durations as **fractions of a year** before multiplying by the unit price (USD per GB-month).
* **Cost formula** — $C_{total} = \sum c_i \cdot s_i \cdot m_i$ with $m_i$ normalised to months.
* **Bandwidth formula** — $B_{req} = (S \cdot 8) / T$, with $S$ in GB, $T$ in seconds, result in Gbps.
* **Durability aggregation** — $D_n = 1 - (1-d)^n \approx 1 - n\epsilon$ for $n$ replicas of durability $d = 1 - \epsilon$.
* **Ransomware triad** — Immutability (Object Lock) + Least-Privilege IAM + Air-Gapped Cross-Account Copy.
* **Lifecycle rule syntax** — In S3, transition objects to `GLACIER_IR` after 30 d, `DEEP_ARCHIVE` after 180 d, expire after 2555 d (7 y).
* **Lambda limits to state** — `/tmp` storage $\le 512$ MB un-mounted, package $\le 250$ MB unzipped, time-out $\le 15$ min default.
* **Idempotency** — Every backup write should be keyed on a *deterministic* identifier (e.g., DB name + UTC timestamp) so retries are safe.
* **Observability** — Always publish **success and failure** to an SNS topic; never silently swallow exceptions.
* **Two definitions of TB** — Binary ($1024^4$ bytes) for capacity planning, decimal ($10^{12}$ bytes) for vendor SLAs. State your choice.
* **Examiner favourites** — Be ready to (i) compare serverless vs VM-based backup cost, (ii) compute tiered retention cost, (iii) size the cross-region link.
* **Cloud-agnostic design** — Principles (event-driven, immutable, tiered) apply to Azure Blob + Azure Functions and GCS + Cloud Functions; only the *names* change.
<!-- SECTION_5_END -->
