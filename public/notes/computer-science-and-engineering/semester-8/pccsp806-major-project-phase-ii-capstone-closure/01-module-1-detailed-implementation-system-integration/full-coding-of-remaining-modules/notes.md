# Full coding of remaining modules

<!-- SECTION_1_START -->
# Full Coding of Remaining Modules — Detailed Implementation & System Integration

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Academic Definition (KTU 2024 Scheme Terminology)

In the context of **Major Project Phase II (PCCSP806)**, **Full Coding of Remaining Modules** refers to the systematic, line-by-line implementation of all software components (modules) that were defined in the **System Design / High-Level Design (HLD)** document during Phase I, but were either stubbed, partially coded, or left for the integration phase. According to KTU's **Outcome-Based Education (OBE)** framework, this stage corresponds to translating the **Data Flow Diagrams (DFD)**, **Entity-Relationship (ER) diagrams**, and **UML component diagrams** into a fully executable, testable, and deployable software artifact.

The four primary pillars of this phase are:

1. **Module Implementation** — Writing the complete business logic for every identified module.
2. **Unit Integration** — Stitching the modules together via well-defined **Application Programming Interfaces (APIs)**.
3. **System Integration** — Connecting the developed software to external systems such as **databases**, **third-party APIs**, **hardware sensors (IoT)**, or **cloud services**.
4. **Defect Removal & Static Validation** — Ensuring the integrated system passes linting checks, type checks, and integration test suites.

### 1.2 Conceptual Analogy — The "Smart City Assembly" Intuition

> [!IMPORTANT]
> **Real-World Analogy: Constructing a Fully Functional Smart City**
> 
> Imagine you are the chief engineer building a **Smart City** from a blueprint:
> - **Phase I (Semester 7)** was the architectural blueprint — you designed roads, power grids, water pipelines, and buildings on paper, and you built *sample* structures (a small power station, one water tank).
> - **Phase II (Current Semester)** is where you build the **entire city** — every road, every building, every sensor, and you connect the power station to every house, the water tank to every tap, and the traffic cameras to the control room.
> - "Remaining Modules" are the **unbuilt buildings and untied pipes** from your blueprint. "System Integration" is the act of physically connecting the city's infrastructure so that *turning on a tap in House A actually receives water from Tank B via Pipe C*.
> 
> If you skip integration, you get a **collection of isolated buildings** — beautiful individually, but functionally useless as a city. Code without integration is the same: a set of scripts that don't talk to each other.

### 1.3 Key Engineering Metrics & Standards

The following metrics and standards govern the quality of module implementation and integration. Every KTU project evaluator expects these to be visible in the source repository:

| Metric / Standard | Description | Target Value |
|---|---|---|
| **Cyclomatic Complexity** | Number of linearly independent paths through source code | $\leq 10$ per function |
| **Code Coverage** | Percentage of lines executed by test suite | $\geq 70\%$ |
| **API Latency (P95)** | 95th percentile response time | $\leq 300$ ms |
| **PEP 8 Compliance** | Python style guide adherence | $100\%$ lint pass |
| **SOLID Adherence** | Five OOP design principles | All 5 followed |
| **Mean Time to Recovery (MTTR)** | System recovery time post-failure | $\leq 1$ hour |

> [!NOTE]
> **SOLID** is the acronym for **S**ingle Responsibility, **O**pen/Closed, **L**iskov Substitution, **I**nterface Segregation, and **D**ependency Inversion — the five pillars of object-oriented module design evaluated by KTU panel members.

### 1.4 GeoGebra / Desmos Integration — Visualizing Module Coupling

> [!VISUALIZATION CONTROL]
> **Concept:** Module Dependency Graph (Afferent vs Efferent Coupling Visualization)
> 
> **GeoGebra / Desmos Input Equations (for plotting coupling instability index $I$):**
> 
> * $f(x) = \dfrac{x^2}{x + 1}$ — Instability Index Curve (Ce = Efferent, Ca = Afferent)
> * Point A: $(Ce=4, Ca=8, I=0.33)$ — *Stable Module*
> * Point B: $(Ce=9, Ca=2, I=0.82)$ — *Painful Module (refactor candidate)*
> * Point C: $(Ce=1, Ca=9, I=0.10)$ — *Stable Core Module*
> 
> **Visual Description:** On a 2D Cartesian plane, the x-axis represents **Efferent Coupling ($Ce$)** — outgoing dependencies — and the y-axis represents **Afferent Coupling ($Ca$)** — incoming dependencies. Modules plotted near the origin are *independent and stable*; modules plotted toward the top-right are *highly interdependent and prone to integration failure*. The instability index $I$ is computed as:
> 
> $$I = \frac{Ce}{Ce + Ca}$$
> 
> A healthy integrated codebase clusters points in the lower-left and upper-left quadrants.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Theoretical Foundation — The 5-Stage Implementation Pipeline

The "Full Coding of Remaining Modules" phase follows a rigorously defined **5-stage pipeline**. Each stage has a deliverable that the project panel will inspect.

### Stage 1: Module Decomposition & Dependency Ordering

Before writing a single line of code, every module must be **topologically sorted** based on its dependencies. A module that depends on nothing is built first; a module that depends on 5 others is built last.

**Topological Sort Algorithm (Kahn's Algorithm):**
1. Compute the **in-degree** (number of incoming edges) of every module.
2. Enqueue all modules with in-degree **0**.
3. Dequeue a module, add it to the build order, and reduce the in-degree of its dependents.
4. Repeat until the queue is empty. If modules remain, a **circular dependency** exists — a critical defect.

### Stage 2: Interface Definition (API Contract First)

Every module exposes a **public interface** (function signatures, REST endpoints, or method signatures). This is the **contract** that downstream modules rely on. In Python, this is enforced via **abstract base classes (ABCs)** and **type hints**.

### Stage 3: Stub → Implementation → Optimization

Each module is built in three sub-stages:
- **Stub:** Returns mock data, raises `NotImplementedError`.
- **Implementation:** Full business logic with edge cases.
- **Optimization:** Caching, query optimization, lazy loading.

### Stage 4: Unit & Integration Testing

Each module is tested in isolation (**unit test**), then in pairs (**integration test**), then as a whole (**system test**).

### Stage 5: Continuous Integration (CI) Hookup

Every code commit triggers a **CI pipeline** (GitHub Actions, GitLab CI, Jenkins) that runs linting, type checks, tests, and builds a Docker image.

## 2.2 KTU High-Yield Formula Sheet — Software Quality Metrics

The following table contains every formula and metric a KTU panel examiner may ask during the **Module 1** viva for Major Project Phase II.

| # | Metric / Concept | Formula | Interpretation | Unit / Threshold |
|---|---|---|---|---|
| 1 | **Cyclomatic Complexity ($V$)** | $V = E - N + 2P$ | $E$ = edges, $N$ = nodes, $P$ = connected components in control flow graph | $\leq 10$ per function |
| 2 | **Instability Index ($I$)** | $I = \dfrac{Ce}{Ce + Ca}$ | $Ce$ = efferent coupling, $Ca$ = afferent coupling | $0$ (stable) to $1$ (unstable) |
| 3 | **Cohesion (LCOM)** | $LCOM = 1 - \dfrac{\sum \text{shared}}{\sum \text{unshared}}$ | Lack of Cohesion of Methods | $0$ (highly cohesive) |
| 4 | **Halstead Difficulty ($D$)** | $D = \dfrac{n_1}{2} \cdot \dfrac{N_2}{n_2}$ | $n_1$ = distinct operators, $n_2$ = distinct operands, $N_2$ = total operands | Lower is better |
| 5 | **Code Coverage** | $\text{Cov} = \dfrac{\text{Lines Executed}}{\text{Total Lines}} \times 100\%$ | Percentage of code tested | $\geq 70\%$ |
| 6 | **API Latency (Mean)** | $L = \dfrac{1}{n} \sum_{i=1}^{n} t_i$ | Average response time | $\leq 200$ ms |
| 7 | **Defect Density (DD)** | $DD = \dfrac{\text{Defects Found}}{\text{KLOC}}$ | Bugs per kilo lines of code | $\leq 1$ per KLOC |
| 8 | **Mean Time Between Failures (MTBF)** | $MTBF = \dfrac{\text{Total Uptime}}{\text{Number of Failures}}$ | System reliability | $\geq 720$ hours |
| 9 | **Big-O Time Complexity** | $T(n) = O(f(n))$ | Worst-case runtime scaling | Common: $O(1), O(\log n), O(n), O(n \log n), O(n^2)$ |
| 10 | **Defect Removal Efficiency (DRE)** | $DRE = \dfrac{\text{Defects Removed Before Release}}{\text{Defects Latent}} \times 100\%$ | Quality of testing process | $\geq 95\%$ |

> [!NOTE]
> **KTU Viva Tip:** When asked "How did you measure the quality of your code?", the formula most examiners want to hear is **Cyclomatic Complexity = $E - N + 2P$**. It is the single most-tested metric in software engineering courses.

## 2.3 Real-World Utility — Where This Phase Matters in Industry

This phase is the **heart of any software product**. In production environments at companies like Google, Amazon, or Infosys:

- **Microservices Architecture:** Each "remaining module" becomes an independently deployable microservice in a Kubernetes cluster.
- **Continuous Deployment (CD):** Every module merged to `main` triggers an automated deployment to staging.
- **Observability Stack:** Integrated modules emit structured logs (JSON), metrics (Prometheus), and traces (OpenTelemetry) to a centralized dashboard (Grafana).
- **Contract Testing:** API consumers and providers are validated against shared contract definitions (e.g., OpenAPI / Swagger).

In essence, the **"Full Coding of Remaining Modules"** phase is what transforms a project from a *university prototype* into an *industry-grade product*.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code Implementation

## 3.1 Reference Architecture — Full-Stack Capstone (MERN-Style)

For the purpose of this note, we use a **representative full-stack capstone architecture** that mirrors what $95\%$ of KTU 2024 Scheme final-year projects adopt:

- **Backend:** Python (Flask) with **SQLAlchemy ORM** and **JWT authentication**.
- **Database:** PostgreSQL.
- **Frontend:** React (JavaScript) consuming REST APIs.
- **Caching:** Redis.
- **Containerization:** Docker + Docker Compose.

The "remaining modules" we will fully code are:
1. **Authentication Module** (signup, login, JWT, password hashing).
2. **User Management Module** (CRUD, role-based access control).
3. **Notification Module** (email + in-app).
4. **Reporting & Analytics Module** (data aggregation endpoints).
5. **File Upload Module** (multipart/form-data, S3-compatible storage).
6. **Error Handling & Logging Middleware** (global, structured JSON logs).

## 3.2 Module 1 — Authentication Module (Full Implementation)

The Authentication Module is almost always the **first module to be coded** because every other module depends on `current_user`. Below is the **complete, production-grade** implementation with type hints, boundary checks, and strict error handling.

### 3.2.1 Project Structure

```
capstone_project/
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── extensions.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── modules/
│   │   ├── __init__.py
│   │   ├── auth/
│   │   │   ├── __init__.py
│   │   │   ├── routes.py
│   │   │   ├── service.py
│   │   │   ├── schemas.py
│   │   │   └── utils.py
│   │   ├── users/
│   │   │   ├── __init__.py
│   │   │   ├── routes.py
│   │   │   └── service.py
│   │   ├── notifications/
│   │   │   ├── __init__.py
│   │   │   └── service.py
│   │   └── reports/
│   │       ├── __init__.py
│   │       └── service.py
│   ├── middleware/
│   │   ├── error_handler.py
│   │   └── logging_middleware.py
│   └── utils/
│       └── file_upload.py
├── tests/
│   ├── test_auth.py
│   └── test_users.py
├── requirements.txt
├── docker-compose.yml
└── run.py
```

### 3.2.2 File: `app/extensions.py` — Shared Extension Initialization

```python
# app/extensions.py
"""
Centralized initialization of Flask extensions to avoid circular imports.
This is a critical pattern in Flask module-based architectures.
"""
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_mail import Mail
from celery import Celery
import redis

# Database ORM
db = SQLAlchemy()

# Database migration engine (Alembic wrapper)
migrate = Migrate()

# JWT manager for stateless authentication
jwt = JWTManager()

# Cross-Origin Resource Sharing for frontend integration
cors = CORS()

# Rate limiter to prevent brute-force attacks
limiter = Limiter(key_func=get_remote_address)

# Email service (for notification module)
mail = Mail()

# Celery for asynchronous task processing
celery = Celery(__name__)

# Redis client for caching and session storage
redis_client: redis.Redis = None  # Initialized in create_app()


def init_redis(app):
    """Initialize Redis client with connection pooling."""
    global redis_client
    redis_client = redis.Redis(
        host=app.config["REDIS_HOST"],
        port=app.config["REDIS_PORT"],
        db=app.config["REDIS_DB"],
        decode_responses=True,
        socket_connect_timeout=5,
        socket_timeout=5
    )
    # Ping to verify connection
    redis_client.ping()
```

### 3.2.3 File: `app/config.py` — Centralized Configuration

```python
# app/config.py
"""
Configuration class hierarchy: Base -> Development -> Production.
Uses environment variables for 12-factor app compliance.
"""
import os
from datetime import timedelta


class BaseConfig:
    """Base configuration with safe defaults."""

    # Flask
    SECRET_KEY = os.getenv("SECRET_KEY", "change-me-in-production")
    JSON_SORT_KEYS = False

    # Database
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_size": int(os.getenv("DB_POOL_SIZE", 10)),
        "pool_recycle": 300,
        "pool_pre_ping": True,
    }

    # JWT
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-change-me")
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ["access", "refresh"]

    # Redis
    REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
    REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))
    REDIS_DB = int(os.getenv("REDIS_DB", 0))

    # Email
    MAIL_SERVER = os.getenv("MAIL_SERVER", "smtp.gmail.com")
    MAIL_PORT = int(os.getenv("MAIL_PORT", 587))
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.getenv("MAIL_USERNAME", "")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD", "")
    MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER", "noreply@capstone.com")

    # Celery
    CELERY_BROKER_URL = os.getenv("CELERY_BROKER_URL", "redis://localhost:6379/1")
    CELERY_RESULT_BACKEND = os.getenv("CELERY_RESULT_BACKEND", "redis://localhost:6379/2")

    # File Upload
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB
    UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "./uploads")
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "pdf", "docx", "csv", "xlsx"}

    # Rate Limiting
    RATELIMIT_STORAGE_URL = os.getenv("RATELIMIT_STORAGE_URL", "redis://localhost:6379/3")


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://dev:dev@localhost:5432/capstone_dev"
    )


class ProductionConfig(BaseConfig):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    # In production, all secrets MUST come from environment variables.


class TestingConfig(BaseConfig):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=5)
```

### 3.2.4 File: `app/models/user.py` — User Entity with Full Validation

```python
# app/models/user.py
"""
User model with password hashing, role-based access, and serialization.
Implements the Single Responsibility Principle (SRP).
"""
import uuid
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.dialects.postgresql import UUID
import jwt
from flask import current_app

from app.extensions import db


class UserRole:
    """Role constants — avoid magic strings."""
    ADMIN = "admin"
    FACULTY = "faculty"
    STUDENT = "student"
    GUEST = "guest"


class User(db.Model):
    """User entity for the capstone project."""

    __tablename__ = "users"

    # Primary Key using UUID v4 for distributed-system readiness
    id = db.Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        nullable=False
    )

    # Authentication fields
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)

    # Profile fields
    full_name = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(15), nullable=True)
    role = db.Column(
        db.String(20),
        nullable=False,
        default=UserRole.STUDENT
    )
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    is_verified = db.Column(db.Boolean, default=False, nullable=False)

    # Timestamps
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )
    last_login = db.Column(db.DateTime, nullable=True)

    # ----- Methods -----

    def set_password(self, raw_password: str) -> None:
        """
        Hash and store password using PBKDF2-SHA256 (werkzeug default).
        PBKDF2 has 600,000 iterations as of werkzeug 3.x — strong against brute force.
        """
        if not raw_password or len(raw_password) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        self.password_hash = generate_password_hash(
            raw_password,
            method="pbkdf2:sha256",
            salt_length=16
        )

    def verify_password(self, raw_password: str) -> bool:
        """Constant-time comparison to prevent timing attacks."""
        if not self.password_hash:
            return False
        return check_password_hash(self.password_hash, raw_password)

    def generate_access_token(self) -> str:
        """Generate JWT access token with user identity and role claim."""
        payload = {
            "sub": str(self.id),
            "email": self.email,
            "role": self.role,
            "iat": datetime.utcnow(),
            "exp": datetime.utcnow() + current_app.config["JWT_ACCESS_TOKEN_EXPIRES"],
            "type": "access"
        }
        return jwt.encode(
            payload,
            current_app.config["JWT_SECRET_KEY"],
            algorithm="HS256"
        )

    def generate_refresh_token(self) -> str:
        """Generate longer-lived refresh token."""
        payload = {
            "sub": str(self.id),
            "iat": datetime.utcnow(),
            "exp": datetime.utcnow() + current_app.config["JWT_REFRESH_TOKEN_EXPIRES"],
            "type": "refresh"
        }
        return jwt.encode(
            payload,
            current_app.config["JWT_SECRET_KEY"],
            algorithm="HS256"
        )

    def has_role(self, *required_roles: str) -> bool:
        """Check if user has any of the required roles."""
        return self.role in required_roles

    def to_dict(self) -> dict:
        """Safe serialization — never expose password_hash."""
        return {
            "id": str(self.id),
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "role": self.role,
            "is_active": self.is_active,
            "is_verified": self.is_verified,
            "created_at": self.created_at.isoformat(),
            "last_login": self.last_login.isoformat() if self.last_login else None
        }

    def __repr__(self) -> str:
        return f"<User {self.email} | Role: {self.role}>"
```

### 3.2.5 File: `app/modules/auth/utils.py` — Input Validation Utilities

```python
# app/modules/auth/utils.py
"""
Validation utilities for the authentication module.
Centralizes all input checks to enforce DRY (Don't Repeat Yourself).
"""
import re
from typing import Tuple, Optional

# RFC 5322 simplified regex for email validation
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
# Password must contain: 1 upper, 1 lower, 1 digit, 1 special, min 8 chars
PASSWORD_REGEX = re.compile(
    r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$"
)
# Indian phone number (10 digits, optional +91)
PHONE_REGEX = re.compile(r"^(\+91[-\s]?)?[6-9]\d{9}$")


def validate_email(email: str) -> Tuple[bool, Optional[str]]:
    """Return (is_valid, error_message)."""
    if not email or not isinstance(email, str):
        return False, "Email is required."
    email = email.strip().lower()
    if len(email) > 255:
        return False, "Email must not exceed 255 characters."
    if not EMAIL_REGEX.match(email):
        return False, "Email format is invalid."
    return True, None


def validate_password(password: str) -> Tuple[bool, Optional[str]]:
    """Enforce strong password policy."""
    if not password or not isinstance(password, str):
        return False, "Password is required."
    if not PASSWORD_REGEX.match(password):
        return False, (
            "Password must be 8-128 chars and contain at least one "
            "uppercase letter, one lowercase letter, one digit, "
            "and one special character (@$!%*?&)."
        )
    return True, None


def validate_phone(phone: str) -> Tuple[bool, Optional[str]]:
    """Validate Indian phone number format."""
    if phone is None:
        return True, None  # Phone is optional
    if not isinstance(phone, str):
        return False, "Phone must be a string."
    if not PHONE_REGEX.match(phone.strip()):
        return False, "Phone number format is invalid (use 10 digits, optional +91)."
    return True, None


def validate_full_name(name: str) -> Tuple[bool, Optional[str]]:
    """Validate full name."""
    if not name or not isinstance(name, str):
        return False, "Full name is required."
    name = name.strip()
    if len(name) < 2 or len(name) > 120:
        return False, "Full name must be between 2 and 120 characters."
    if not re.match(r"^[a-zA-Z\s.'-]+$", name):
        return False, "Full name contains invalid characters."
    return True, None
```

### 3.2.6 File: `app/modules/auth/schemas.py` — Request/Response Schemas

```python
# app/modules/auth/schemas.py
"""
Marshmallow-style schemas for input validation.
Defines the public contract of the auth module.
"""
from typing import Dict, Any


class SignupSchema:
    """Validates the /signup request payload."""

    REQUIRED_FIELDS = {"email", "password", "full_name"}
    OPTIONAL_FIELDS = {"phone", "role"}

    @classmethod
    def validate(cls, data: Dict[str, Any]) -> tuple:
        """
        Return (cleaned_data, errors).
        cleaned_data is the sanitized input ready for the service layer.
        """
        errors = {}
        if not isinstance(data, dict):
            return None, {"_schema": "Request body must be a JSON object."}

        # Check required fields
        missing = cls.REQUIRED_FIELDS - set(data.keys())
        if missing:
            errors["_missing"] = f"Missing required fields: {', '.join(missing)}"

        # Normalize and sanitize
        cleaned = {}
        if "email" in data:
            cleaned["email"] = str(data["email"]).strip().lower()
        if "password" in data:
            cleaned["password"] = str(data["password"])
        if "full_name" in data:
            cleaned["full_name"] = str(data["full_name"]).strip()
        if "phone" in data and data["phone"]:
            cleaned["phone"] = str(data["phone"]).strip()
        if "role" in data and data["role"]:
            cleaned["role"] = str(data["role"]).strip().lower()

        # Reject unknown fields (security hardening)
        allowed = cls.REQUIRED_FIELDS | cls.OPTIONAL_FIELDS
        unknown = set(data.keys()) - allowed
        if unknown:
            errors["_unknown"] = f"Unknown fields not allowed: {', '.join(unknown)}"

        return cleaned, errors


class LoginSchema:
    """Validates the /login request payload."""

    REQUIRED_FIELDS = {"email", "password"}

    @classmethod
    def validate(cls, data: Dict[str, Any]) -> tuple:
        if not isinstance(data, dict):
            return None, {"_schema": "Request body must be a JSON object."}

        missing = cls.REQUIRED_FIELDS - set(data.keys())
        if missing:
            return None, {"_missing": f"Missing required fields: {', '.join(missing)}"}

        return {
            "email": str(data["email"]).strip().lower(),
            "password": str(data["password"])
        }, {}
```

### 3.2.7 File: `app/modules/auth/service.py` — Business Logic Layer

```python
# app/modules/auth/service.py
"""
Authentication business logic. The service layer is the 'brain' of the module.
Routes only handle HTTP; the service handles logic. This is the Service Layer Pattern.
"""
from datetime import datetime
from typing import Dict, Any, Optional
import logging

from app.extensions import db, redis_client
from app.models.user import User, UserRole
from app.modules.auth.utils import (
    validate_email, validate_password, validate_phone, validate_full_name
)

logger = logging.getLogger(__name__)


class AuthServiceError(Exception):
    """Custom exception for auth service errors."""
    def __init__(self, message: str, status_code: int = 400):
        super().__init__(message)
        self.message = message
        self.status_code = status_code


class AuthService:
    """Stateless service class. All methods are static for thread safety."""

    @staticmethod
    def register_user(payload: Dict[str, Any]) -> Dict[str, Any]:
        """
        Register a new user with full validation pipeline.
        Returns the user dict + tokens.
        """
        # ---- 1. Field-level validation ----
        email_valid, email_err = validate_email(payload.get("email", ""))
        if not email_valid:
            raise AuthServiceError(email_err, 400)

        password_valid, password_err = validate_password(payload.get("password", ""))
        if not password_valid:
            raise AuthServiceError(password_err, 400)

        name_valid, name_err = validate_full_name(payload.get("full_name", ""))
        if not name_valid:
            raise AuthServiceError(name_err, 400)

        if payload.get("phone"):
            phone_valid, phone_err = validate_phone(payload.get("phone"))
            if not phone_valid:
                raise AuthServiceError(phone_err, 400)

        # ---- 2. Business rule validation ----
        email = payload["email"]
        if User.query.filter_by(email=email).first():
            logger.warning(f"Registration attempt with existing email: {email}")
            raise AuthServiceError(
                "An account with this email already exists.",
                409  # Conflict
            )

        # ---- 3. Role assignment with default ----
        requested_role = payload.get("role", UserRole.STUDENT)
        valid_roles = {UserRole.ADMIN, UserRole.FACULTY, UserRole.STUDENT, UserRole.GUEST}
        if requested_role not in valid_roles:
            raise AuthServiceError(
                f"Invalid role. Allowed roles: {', '.join(valid_roles)}",
                400
            )
        # Security: never allow self-registration as ADMIN
        if requested_role == UserRole.ADMIN:
            raise AuthServiceError(
                "Cannot self-register as admin. Contact an existing administrator.",
                403
            )

        # ---- 4. Create the user ----
        try:
            new_user = User(
                email=email,
                full_name=payload["full_name"].strip(),
                phone=payload.get("phone"),
                role=requested_role
            )
            new_user.set_password(payload["password"])

            db.session.add(new_user)
            db.session.commit()

            logger.info(f"User registered successfully: {new_user.id}")

        except Exception as e:
            db.session.rollback()
            logger.exception(f"Database error during registration: {e}")
            raise AuthServiceError(
                "An error occurred while creating the account. Please try again.",
                500
            )

        # ---- 5. Generate tokens and return ----
        return {
            "user": new_user.to_dict(),
            "access_token": new_user.generate_access_token(),
            "refresh_token": new_user.generate_refresh_token()
        }

    @staticmethod
    def login_user(payload: Dict[str, Any]) -> Dict[str, Any]:
        """Authenticate user and return JWT tokens."""
        email = payload.get("email", "").strip().lower()
        password = payload.get("password", "")

        if not email or not password:
            raise AuthServiceError("Email and password are required.", 400)

        # Find user
        user = User.query.filter_by(email=email).first()

        # Constant-time response: do not reveal whether email exists
        if not user or not user.verify_password(password):
            logger.warning(f"Failed login attempt for email: {email}")
            raise AuthServiceError("Invalid email or password.", 401)

        if not user.is_active:
            raise AuthServiceError(
                "This account has been deactivated. Contact support.",
                403
            )

        # Update last login timestamp
        user.last_login = datetime.utcnow()
        db.session.commit()

        logger.info(f"User logged in: {user.id}")

        return {
            "user": user.to_dict(),
            "access_token": user.generate_access_token(),
            "refresh_token": user.generate_refresh_token()
        }

    @staticmethod
    def logout_user(jti: str, expires_in_seconds: int) -> None:
        """
        Revoke a JWT by adding its JTI to the Redis blacklist.
        Redis TTL is set to the token's remaining lifetime.
        """
        try:
            redis_client.setex(
                name=f"jwt_blacklist:{jti}",
                time=expires_in_seconds,
                value="revoked"
            )
            logger.info(f"Token revoked: {jti}")
        except Exception as e:
            logger.exception(f"Failed to blacklist token: {e}")
            raise AuthServiceError("Could not log out. Please try again.", 500)

    @staticmethod
    def refresh_access_token(user_id: str) -> str:
        """Issue a new access token for an authenticated user."""
        user = User.query.get(user_id)
        if not user or not user.is_active:
            raise AuthServiceError("User not found or inactive.", 401)
        return user.generate_access_token()

    @staticmethod
    def is_token_revoked(jti: str) -> bool:
        """Check if a JWT has been blacklisted."""
        try:
            return redis_client.exists(f"jwt_blacklist:{jti}") > 0
        except Exception:
            # Fail closed: if Redis is down, deny access for safety
            return True
```

### 3.2.8 File: `app/modules/auth/routes.py` — HTTP Endpoints

```python
# app/modules/auth/routes.py
"""
HTTP routes for the authentication module.
Thin layer: receives request -> calls service -> returns response.
"""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    jwt_required, get_jwt_identity, get_jwt, create_access_token
)
import logging

from app.modules.auth.service import AuthService, AuthServiceError
from app.modules.auth.schemas import SignupSchema, LoginSchema
from app.extensions import limiter

logger = logging.getLogger(__name__)

auth_bp = Blueprint("auth", __name__, url_prefix="/api/v1/auth")


@auth_bp.route("/signup", methods=["POST"])
@limiter.limit("5 per minute")  # Anti-abuse
def signup():
    """
    POST /api/v1/auth/signup
    Body: {"email": "...", "password": "...", "full_name": "...", "phone": "...", "role": "..."}
    """
    try:
        # ---- 1. Parse and validate request body ----
        payload = request.get_json(silent=True)
        if payload is None:
            return jsonify({"error": "Request body must be valid JSON."}), 400

        cleaned, errors = SignupSchema.validate(payload)
        if errors:
            return jsonify({"error": "Validation failed", "details": errors}), 400

        # ---- 2. Call service layer ----
        result = AuthService.register_user(cleaned)

        return jsonify({
            "message": "User registered successfully.",
            "data": result
        }), 201

    except AuthServiceError as e:
        return jsonify({"error": e.message}), e.status_code
    except Exception as e:
        logger.exception(f"Unexpected error in signup: {e}")
        return jsonify({"error": "Internal server error."}), 500


@auth_bp.route("/login", methods=["POST"])
@limiter.limit("10 per minute")  # Brute-force protection
def login():
    """
    POST /api/v1/auth/login
    Body: {"email": "...", "password": "..."}
    """
    try:
        payload = request.get_json(silent=True)
        if payload is None:
            return jsonify({"error": "Request body must be valid JSON."}), 400

        cleaned, errors = LoginSchema.validate(payload)
        if errors:
            return jsonify({"error": "Validation failed", "details": errors}), 400

        result = AuthService.login_user(cleaned)

        return jsonify({
            "message": "Login successful.",
            "data": result
        }), 200

    except AuthServiceError as e:
        return jsonify({"error": e.message}), e.status_code
    except Exception as e:
        logger.exception(f"Unexpected error in login: {e}")
        return jsonify({"error": "Internal server error."}), 500


@auth_bp.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    """
    POST /api/v1/auth/logout
    Header: Authorization: Bearer <access_token>
    Revokes the current access token.
    """
    try:
        jwt_data = get_jwt()
        jti = jwt_data["jti"]
        exp = jwt_data["exp"]
        now = jwt_data["iat"]
        expires_in = exp - now

        AuthService.logout_user(jti, expires_in)

        return jsonify({"message": "Logged out successfully."}), 200

    except AuthServiceError as e:
        return jsonify({"error": e.message}), e.status_code
    except Exception as e:
        logger.exception(f"Unexpected error in logout: {e}")
        return jsonify({"error": "Internal server error."}), 500


@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    """
    POST /api/v1/auth/refresh
    Header: Authorization: Bearer <refresh_token>
    Returns a new access token.
    """
    try:
        current_user_id = get_jwt_identity()
        new_access_token = AuthService.refresh_access_token(current_user_id)
        return jsonify({"access_token": new_access_token}), 200
    except AuthServiceError as e:
        return jsonify({"error": e.message}), e.status_code
    except Exception as e:
        logger.exception(f"Unexpected error in refresh: {e}")
        return jsonify({"error": "Internal server error."}), 500


@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def get_current_user():
    """
    GET /api/v1/auth/me
    Returns the currently authenticated user's profile.
    """
    from app.models.user import User
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"error": "User not found."}), 404
        return jsonify({"user": user.to_dict()}), 200
    except Exception as e:
        logger.exception(f"Error fetching current user: {e}")
        return jsonify({"error": "Internal server error."}), 500
```

### 3.2.9 File: `app/middleware/error_handler.py` — Global Error Handler

```python
# app/middleware/error_handler.py
"""
Global error handler — catches every uncaught exception and returns JSON.
This is the centralized exception boundary.
"""
import logging
import traceback
from flask import jsonify
from werkzeug.exceptions import HTTPException

logger = logging.getLogger(__name__)


def register_error_handlers(app):
    """Attach all error handlers to the Flask app."""

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({"error": "Bad request.", "details": str(error.description)}), 400

    @app.errorhandler(401)
    def unauthorized(error):
        return jsonify({"error": "Authentication required."}), 401

    @app.errorhandler(403)
    def forbidden(error):
        return jsonify({"error": "You do not have permission for this action."}), 403

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Resource not found."}), 404

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({"error": "HTTP method not allowed for this endpoint."}), 405

    @app.errorhandler(413)
    def payload_too_large(error):
        return jsonify({"error": "Uploaded file exceeds the maximum allowed size (16 MB)."}), 413

    @app.errorhandler(429)
    def rate_limit_exceeded(error):
        return jsonify({
            "error": "Too many requests. Please slow down and try again later."
        }), 429

    @app.errorhandler(500)
    def internal_server_error(error):
        logger.exception(f"Internal server error: {error}")
        return jsonify({"error": "Internal server error. Please try again later."}), 500

    @app.errorhandler(Exception)
    def handle_unexpected_exception(error):
        # Log the full traceback for debugging
        logger.error(f"Unhandled exception: {error}\n{traceback.format_exc()}")
        if isinstance(error, HTTPException):
            return jsonify({"error": error.description}), error.code
        return jsonify({"error": "An unexpected error occurred."}), 500
```

## 3.3 Module 2 — User Management Module (CRUD + RBAC)

This module manages user profiles and enforces **Role-Based Access Control (RBAC)**. It depends on the Auth Module for `current_user` resolution.

```python
# app/modules/users/routes.py
"""
User Management Module — full CRUD with role-based authorization.
"""
from functools import wraps
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import or_, and_
import logging

from app.extensions import db
from app.models.user import User, UserRole
from app.modules.auth.utils import validate_email, validate_phone, validate_full_name

logger = logging.getLogger(__name__)

users_bp = Blueprint("users", __name__, url_prefix="/api/v1/users")


# ---- Decorator: Role-based access guard ----
def require_role(*allowed_roles):
    """
    Custom decorator that checks JWT and verifies the user has one of the allowed roles.
    Returns 403 Forbidden if the role check fails.
    """
    def decorator(fn):
        @wraps(fn)
        @jwt_required()
        def wrapper(*args, **kwargs):
            from flask_jwt_extended import get_jwt
            claims = get_jwt()
            user_role = claims.get("role")
            if user_role not in allowed_roles:
                logger.warning(
                    f"Access denied for user {get_jwt_identity()} "
                    f"with role {user_role}. Required: {allowed_roles}"
                )
                return jsonify({
                    "error": "Access denied. Insufficient permissions."
                }), 403
            return fn(*args, **kwargs)
        return wrapper
    return decorator


# ---- List all users (Admin only) ----
@users_bp.route("", methods=["GET"])
@require_role(UserRole.ADMIN, UserRole.FACULTY)
def list_users():
    """
    GET /api/v1/users?page=1&per_page=20&role=student&search=alice
    Supports pagination, filtering, and search.
    """
    try:
        # ---- Pagination parameters ----
        page = max(1, int(request.args.get("page", 1)))
        per_page = min(100, max(1, int(request.args.get("per_page", 20))))

        # ---- Filtering parameters ----
        role_filter = request.args.get("role")
        search_term = request.args.get("search", "").strip()
        is_active = request.args.get("is_active")

        # ---- Build query ----
        query = User.query

        if role_filter and role_filter in {
            UserRole.ADMIN, UserRole.FACULTY, UserRole.STUDENT, UserRole.GUEST
        }:
            query = query.filter(User.role == role_filter)

        if is_active is not None:
            active_bool = is_active.lower() == "true"
            query = query.filter(User.is_active == active_bool)

        if search_term:
            search_pattern = f"%{search_term}%"
            query = query.filter(
                or_(
                    User.email.ilike(search_pattern),
                    User.full_name.ilike(search_pattern)
                )
            )

        # ---- Order and paginate ----
        query = query.order_by(User.created_at.desc())
        pagination = query.paginate(page=page, per_page=per_page, error_out=False)

        return jsonify({
            "users": [u.to_dict() for u in pagination.items],
            "pagination": {
                "page": pagination.page,
                "per_page": pagination.per_page,
                "total": pagination.total,
                "pages": pagination.pages,
                "has_next": pagination.has_next,
                "has_prev": pagination.has_prev
            }
        }), 200

    except ValueError as e:
        return jsonify({"error": f"Invalid query parameter: {e}"}), 400
    except Exception as e:
        logger.exception(f"Error listing users: {e}")
        return jsonify({"error": "Internal server error."}), 500


# ---- Get single user ----
@users_bp.route("/<uuid:user_id>", methods=["GET"])
@jwt_required()
def get_user(user_id):
    """
    GET /api/v1/users/<user_id>
    Users can view their own profile. Admins/Faculty can view any.
    """
    try:
        current_user_id = get_jwt_identity()
        from flask_jwt_extended import get_jwt
        current_role = get_jwt().get("role")

        # Authorization check
        if str(user_id) != current_user_id and current_role not in {
            UserRole.ADMIN, UserRole.FACULTY
        }:
            return jsonify({"error": "Access denied."}), 403

        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found."}), 404

        return jsonify({"user": user.to_dict()}), 200

    except Exception as e:
        logger.exception(f"Error fetching user {user_id}: {e}")
        return jsonify({"error": "Internal server error."}), 500


# ---- Update user ----
@users_bp.route("/<uuid:user_id>", methods=["PUT"])
@jwt_required()
def update_user(user_id):
    """
    PUT /api/v1/users/<user_id>
    Partial updates allowed. Users can update own profile; admins can update any.
    """
    try:
        current_user_id = get_jwt_identity()
        from flask_jwt_extended import get_jwt
        current_role = get_jwt().get("role")

        # Authorization check
        is_self = str(user_id) == current_user_id
        is_admin = current_role == UserRole.ADMIN
        if not (is_self or is_admin):
            return jsonify({"error": "Access denied."}), 403

        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found."}), 404

        payload = request.get_json(silent=True)
        if not payload:
            return jsonify({"error": "Request body must be valid JSON."}), 400

        # ---- Apply updates with validation ----
        if "full_name" in payload:
            valid, err = validate_full_name(payload["full_name"])
            if not valid:
                return jsonify({"error": err}), 400
            user.full_name = payload["full_name"].strip()

        if "phone" in payload:
            valid, err = validate_phone(payload["phone"])
            if not valid:
                return jsonify({"error": err}), 400
            user.phone = payload["phone"].strip() if payload["phone"] else None

        if "role" in payload and is_admin:
            new_role = payload["role"]
            if new_role not in {UserRole.ADMIN, UserRole.FACULTY, UserRole.STUDENT, UserRole.GUEST}:
                return jsonify({"error": "Invalid role."}), 400
            user.role = new_role

        if "is_active" in payload and is_admin:
            user.is_active = bool(payload["is_active"])

        try:
            db.session.commit()
            logger.info(f"User updated: {user.id}")
        except Exception as e:
            db.session.rollback()
            logger.exception(f"DB error updating user: {e}")
            return jsonify({"error": "Could not update user."}), 500

        return jsonify({
            "message": "User updated successfully.",
            "user": user.to_dict()
        }), 200

    except Exception as e:
        logger.exception(f"Unexpected error updating user {user_id}: {e}")
        return jsonify({"error": "Internal server error."}), 500


# ---- Delete user (soft delete) ----
@users_bp.route("/<uuid:user_id>", methods=["DELETE"])
@require_role(UserRole.ADMIN)
def delete_user(user_id):
    """
    DELETE /api/v1/users/<user_id>
    Soft delete — sets is_active=False. Hard delete reserved for GDPR.
    """
    try:
        current_user_id = get_jwt_identity()
        if str(user_id) == current_user_id:
            return jsonify({"error": "You cannot delete your own account."}), 400

        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found."}), 404

        # Soft delete
        user.is_active = False
        db.session.commit()
        logger.info(f"User soft-deleted: {user.id}")

        return jsonify({"message": "User deactivated successfully."}), 200

    except Exception as e:
        logger.exception(f"Error deleting user: {e}")
        db.session.rollback()
        return jsonify({"error": "Internal server error."}), 500
```

## 3.4 Module 3 — Notification Module (Email + In-App + Async)

```python
# app/modules/notifications/service.py
"""
Notification module — handles email, in-app, and SMS notifications.
Uses Celery for async delivery to keep API response times fast.
"""
import logging
from datetime import datetime
from enum import Enum
from typing import List, Optional
from flask import current_app
from flask_mail import Message

from app.extensions import db, mail, celery
from app.models.user import User

logger = logging.getLogger(__name__)


class NotificationType(str, Enum):
    EMAIL = "email"
    IN_APP = "in_app"
    SMS = "sms"


class NotificationPriority(str, Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    URGENT = "urgent"


# ---- Database model for in-app notifications ----
class Notification(db.Model):
    __tablename__ = "notifications"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.String(36), nullable=False, index=True)
    title = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    type = db.Column(db.String(20), default=NotificationType.IN_APP.value)
    priority = db.Column(db.String(20), default=NotificationPriority.NORMAL.value)
    is_read = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "message": self.message,
            "type": self.type,
            "priority": self.priority,
            "is_read": self.is_read,
            "created_at": self.created_at.isoformat()
        }


# ---- Celery async tasks ----
@celery.task(bind=True, max_retries=3, default_retry_delay=60)
def send_email_task(self, recipient: str, subject: str, body: str, html: Optional[str] = None):
    """Asynchronous email sender with retry logic."""
    try:
        msg = Message(
            subject=subject,
            recipients=[recipient],
            body=body,
            html=html
        )
        mail.send(msg)
        logger.info(f"Email sent to {recipient}: {subject}")
        return {"status": "sent", "recipient": recipient}

    except Exception as exc:
        logger.exception(f"Email send failed: {exc}")
        # Retry with exponential backoff
        raise self.retry(exc=exc, countdown=2 ** self.request.retries)


class NotificationService:
    """High-level notification dispatcher."""

    @staticmethod
    def send_email(
        user: User,
        subject: str,
        body: str,
        html: Optional[str] = None,
        async_send: bool = True
    ) -> dict:
        """Send email either async (Celery) or sync."""
        if not user.email:
            return {"status": "failed", "reason": "User has no email address."}

        if async_send:
            # Queue to Celery worker
            task = send_email_task.delay(user.email, subject, body, html)
            return {"status": "queued", "task_id": str(task.id)}
        else:
            send_email_task(user.email, subject, body, html)
            return {"status": "sent"}

    @staticmethod
    def create_in_app_notification(
        user_id: str,
        title: str,
        message: str,
        priority: NotificationPriority = NotificationPriority.NORMAL
    ) -> Notification:
        """Create an in-app notification record."""
        try:
            notif = Notification(
                user_id=user_id,
                title=title,
                message=message,
                priority=priority.value
            )
            db.session.add(notif)
            db.session.commit()
            return notif
        except Exception as e:
            db.session.rollback()
            logger.exception(f"Failed to create notification: {e}")
            raise

    @staticmethod
    def get_user_notifications(
        user_id: str,
        unread_only: bool = False,
        limit: int = 50
    ) -> List[Notification]:
        """Fetch notifications for a user."""
        query = Notification.query.filter_by(user_id=user_id)
        if unread_only:
            query = query.filter_by(is_read=False)
        return query.order_by(Notification.created_at.desc()).limit(limit).all()

    @staticmethod
    def mark_as_read(notification_id: int, user_id: str) -> bool:
        """Mark a notification as read, with ownership check."""
        notif = Notification.query.filter_by(
            id=notification_id, user_id=user_id
        ).first()
        if not notif:
            return False
        notif.is_read = True
        db.session.commit()
        return True
```

## 3.5 Module 4 — Reporting & Analytics Module

```python
# app/modules/reports/service.py
"""
Reporting module — generates aggregated data for dashboards.
Uses database-level aggregation for performance.
"""
from datetime import datetime, timedelta
from typing import Dict, Any
from sqlalchemy import func
import logging

from app.extensions import db
from app.models.user import User

logger = logging.getLogger(__name__)


class ReportService:
    """Generates analytical reports for administrators."""

    @staticmethod
    def user_statistics() -> Dict[str, Any]:
        """Generate user statistics for the admin dashboard."""
        try:
            # Total counts
            total_users = User.query.count()
            active_users = User.query.filter_by(is_active=True).count()
            verified_users = User.query.filter_by(is_verified=True).count()

            # Group by role
            role_counts = dict(
                db.session.query(User.role, func.count(User.id))
                .group_by(User.role).all()
            )

            # New users in last 7 days
            seven_days_ago = datetime.utcnow() - timedelta(days=7)
            new_users_7d = User.query.filter(User.created_at >= seven_days_ago).count()

            # New users in last 30 days
            thirty_days_ago = datetime.utcnow() - timedelta(days=30)
            new_users_30d = User.query.filter(User.created_at >= thirty_days_ago).count()

            # Active users in last 24 hours
            one_day_ago = datetime.utcnow() - timedelta(hours=24)
            active_24h = User.query.filter(User.last_login >= one_day_ago).count()

            return {
                "totals": {
                    "total_users": total_users,
                    "active_users": active_users,
                    "verified_users": verified_users,
                    "inactive_users": total_users - active_users
                },
                "by_role": role_counts,
                "growth": {
                    "new_users_last_7_days": new_users_7d,
                    "new_users_last_30_days": new_users_30d,
                    "active_last_24_hours": active_24h
                },
                "generated_at": datetime.utcnow().isoformat()
            }

        except Exception as e:
            logger.exception(f"Error generating user statistics: {e}")
            raise

    @staticmethod
    def daily_registration_trend(days: int = 30) -> Dict[str, Any]:
        """Daily registration counts for the last N days."""
        try:
            start_date = datetime.utcnow() - timedelta(days=days)
            results = (
                db.session.query(
                    func.date(User.created_at).label("date"),
                    func.count(User.id).label("count")
                )
                .filter(User.created_at >= start_date)
                .group_by(func.date(User.created_at))
                .order_by(func.date(User.created_at))
                .all()
            )
            return {
                "period_days": days,
                "data": [{"date": str(r.date), "registrations": r.count} for r in results]
            }
        except Exception as e:
            logger.exception(f"Error generating registration trend: {e}")
            raise
```

## 3.6 Module 5 — File Upload Module

```python
# app/utils/file_upload.py
"""
File upload utility — handles multipart/form-data securely.
Implements:
- Extension whitelisting
- MIME type verification
- Filename sanitization (prevents path traversal)
- Size validation
- S3-compatible storage (AWS S3, MinIO) or local fallback
"""
import os
import uuid
import mimetypes
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage
import logging

logger = logging.getLogger(__name__)

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "pdf", "docx", "csv", "xlsx"}
MAX_FILE_SIZE = 16 * 1024 * 1024  # 16 MB
DANGEROUS_EXTENSIONS = {"exe", "bat", "sh", "php", "js", "html", "svg"}


class FileUploadError(Exception):
    pass


def validate_uploaded_file(file: FileStorage) -> None:
    """
    Validates an uploaded file with multiple security checks.
    Raises FileUploadError on any failure.
    """
    if not file or not file.filename:
        raise FileUploadError("No file was uploaded.")

    # 1. Filename sanitization
    safe_name = secure_filename(file.filename)
    if not safe_name or safe_name.startswith("."):
        raise FileUploadError("Invalid filename.")

    # 2. Extension whitelist
    ext = safe_name.rsplit(".", 1)[-1].lower() if "." in safe_name else ""
    if ext in DANGEROUS_EXTENSIONS:
        raise FileUploadError(f"File type .{ext} is not allowed for security reasons.")
    if ext not in ALLOWED_EXTENSIONS:
        raise FileUploadError(
            f"File type .{ext} not allowed. Allowed: {', '.join(ALLOWED_EXTENSIONS)}"
        )

    # 3. MIME type verification
    mime_type, _ = mimetypes.guess_type(safe_name)
    if mime_type is None:
        raise FileUploadError("Could not determine file MIME type.")

    # 4. File size check (via stream seek)
    file.seek(0, os.SEEK_END)
    size = file.tell()
    file.seek(0)
    if size > MAX_FILE_SIZE:
        raise FileUploadError(
            f"File size {size} bytes exceeds maximum allowed {MAX_FILE_SIZE} bytes."
        )
    if size == 0:
        raise FileUploadError("Uploaded file is empty.")


def save_file_locally(file: FileStorage, upload_folder: str) -> dict:
    """
    Save a validated file to the local filesystem with a unique name.
    Returns a metadata dict.
    """
    validate_uploaded_file(file)

    safe_name = secure_filename(file.filename)
    ext = safe_name.rsplit(".", 1)[-1].lower()
    unique_name = f"{uuid.uuid4().hex}.{ext}"

    os.makedirs(upload_folder, exist_ok=True)
    full_path = os.path.join(upload_folder, unique_name)

    try:
        file.save(full_path)
        logger.info(f"File saved: {full_path} ({os.path.getsize(full_path)} bytes)")
    except Exception as e:
        logger.exception(f"File save failed: {e}")
        raise FileUploadError("Failed to save uploaded file.")

    return {
        "filename": unique_name,
        "original_name": safe_name,
        "path": full_path,
        "size_bytes": os.path.getsize(full_path),
        "mime_type": mimetypes.guess_type(safe_name)[0]
    }
```

## 3.7 Module 6 — App Factory and Blueprint Registration

```python
# app/__init__.py
"""
Application factory — assembles the entire Flask app from blueprints, extensions, and config.
This is the integration point for ALL modules.
"""
import logging
from flask import Flask
from flask_jwt_extended import JWTManager
from datetime import timedelta

from app.config import DevelopmentConfig, ProductionConfig, TestingConfig
from app.extensions import (
    db, migrate, jwt, cors, limiter, mail, celery, init_redis
)
from app.middleware.error_handler import register_error_handlers
from app.middleware.logging_middleware import setup_logging


def create_app(config_name: str = "development") -> Flask:
    """
    Application factory. Each call creates a fresh app instance — enables testing.
    """
    app = Flask(__name__)

    # ---- 1. Load configuration ----
    config_map = {
        "development": DevelopmentConfig,
        "production": ProductionConfig,
        "testing": TestingConfig
    }
    app.config.from_object(config_map.get(config_name, DevelopmentConfig))

    # ---- 2. Setup logging ----
    setup_logging(app)

    # ---- 3. Initialize extensions ----
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})
    limiter.init_app(app)
    mail.init_app(app)
    init_redis(app)

    # ---- 4. Initialize Celery ----
    celery.conf.update(
        broker_url=app.config["CELERY_BROKER_URL"],
        result_backend=app.config["CELERY_RESULT_BACKEND"]
    )

    # ---- 5. JWT blacklist callback ----
    from app.modules.auth.service import AuthService
    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload):
        jti = jwt_payload["jti"]
        return AuthService.is_token_revoked(jti)

    # ---- 6. Register error handlers ----
    register_error_handlers(app)

    # ---- 7. Register all module blueprints ----
    from app.modules.auth.routes import auth_bp
    from app.modules.users.routes import users_bp
    from app.modules.notifications.routes import notif_bp
    from app.modules.reports.routes import reports_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(notif_bp)
    app.register_blueprint(reports_bp)

    # ---- 8. Health check endpoint ----
    @app.route("/api/v1/health", methods=["GET"])
    def health_check():
        return {"status": "healthy", "service": "capstone-api"}, 200

    return app
```

```python
# app/middleware/logging_middleware.py
"""
Structured JSON logging — production-grade observability.
"""
import logging
import json
import sys
from datetime import datetime
from flask import request, g
import time


class JSONFormatter(logging.Formatter):
    """Format log records as JSON for centralized log aggregation."""

    def format(self, record):
        log_data = {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "module": record.module,
            "line": record.lineno
        }
        # Include exception info if present
        if record.exc_info:
            log_data["exception"] = self.formatException(record.exc_info)
        # Attach request context if available
        if hasattr(g, "request_id"):
            log_data["request_id"] = g.request_id
        return json.dumps(log_data)


def setup_logging(app):
    """Configure structured logging for the app."""
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(JSONFormatter())

    # Root logger
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.INFO if not app.debug else logging.DEBUG)
    root_logger.addHandler(handler)

    # Suppress noisy loggers
    logging.getLogger("werkzeug").setLevel(logging.WARNING)
    logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)

    @app.before_request
    def before_request():
        g.start_time = time.time()
        g.request_id = request.headers.get("X-Request-ID", "")

    @app.after_request
    def after_request(response):
        if hasattr(g, "start_time"):
            elapsed = (time.time() - g.start_time) * 1000  # ms
            logging.info(
                f"{request.method} {request.path} -> {response.status_code} "
                f"({elapsed:.2f}ms)"
            )
        return response
```

## 3.8 Test Suite — Validating Module Integration

```python
# tests/test_auth.py
"""
Integration tests for the auth module.
Run with: pytest tests/ -v --cov=app
"""
import pytest
from app import create_app
from app.extensions import db


@pytest.fixture
def app():
    """Create a fresh app for each test."""
    app = create_app("testing")
    with app.app_context():
        db.create_all()
        yield app
        db.session.remove()
        db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


def test_signup_success(client):
    """Test successful user registration."""
    response = client.post("/api/v1/auth/signup", json={
        "email": "alice@ktu.edu",
        "password": "SecurePass123!",
        "full_name": "Alice Johnson",
        "phone": "+919876543210"
    })
    assert response.status_code == 201
    data = response.get_json()
    assert "access_token" in data["data"]
    assert data["data"]["user"]["email"] == "alice@ktu.edu"


def test_signup_duplicate_email(client):
    """Test that duplicate emails are rejected."""
    payload = {
        "email": "bob@ktu.edu",
        "password": "SecurePass123!",
        "full_name": "Bob Smith"
    }
    client.post("/api/v1/auth/signup", json=payload)
    response = client.post("/api/v1/auth/signup", json=payload)
    assert response.status_code == 409
    assert "already exists" in response.get_json()["error"].lower()


def test_signup_weak_password(client):
    """Test that weak passwords are rejected."""
    response = client.post("/api/v1/auth/signup", json={
        "email": "weak@ktu.edu",
        "password": "123",
        "full_name": "Weak Password"
    })
    assert response.status_code == 400


def test_login_success(client):
    """Test successful login."""
    signup_payload = {
        "email": "carol@ktu.edu",
        "password": "SecurePass123!",
        "full_name": "Carol White"
    }
    client.post("/api/v1/auth/signup", json=signup_payload)

    response = client.post("/api/v1/auth/login", json={
        "email": "carol@ktu.edu",
        "password": "SecurePass123!"
    })
    assert response.status_code == 200
    assert "access_token" in response.get_json()["data"]


def test_login_wrong_password(client):
    """Test that wrong passwords are rejected with 401."""
    signup_payload = {
        "email": "dave@ktu.edu",
        "password": "SecurePass123!",
        "full_name": "Dave Brown"
    }
    client.post("/api/v1/auth/signup", json=signup_payload)

    response = client.post("/api/v1/auth/login", json={
        "email": "dave@ktu.edu",
        "password": "WrongPassword123!"
    })
    assert response.status_code == 401


def test_protected_endpoint_without_token(client):
    """Test that protected endpoints require auth."""
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Module Dependency Graph (Mermaid)

```mermaid
graph TD
    subgraph CORE["Core Layer"]
        A1[app factory]
        A2[config py]
        A3[extensions py]
    end

    subgraph MODEL["Model Layer"]
        M1[User model]
        M2[Notification model]
    end

    subgraph SERVICE["Service Layer - Business Logic"]
        S1[AuthService]
        S2[UserService]
        S3[NotificationService]
        S4[ReportService]
    end

    subgraph ROUTE["Route Layer - HTTP Endpoints"]
        R1[auth routes]
        R2[user routes]
        R3[notification routes]
        R4[report routes]
    end

    subgraph MW["Middleware Layer"]
        W1[error handler]
        W2[logging middleware]
        W3[jwt blacklist checker]
    end

    subgraph EXT["External Services"]
        E1[(PostgreSQL)]
        E2[(Redis)]
        E3[SMTP Server]
        E4[Celery Worker]
    end

    A1 --> A2
    A1 --> A3
    A1 --> ROUTE
    A1 --> MW
    R1 --> S1
    R2 --> S1
    R2 --> S2
    R3 --> S3
    R4 --> S2
    R4 --> S4
    S1 --> M1
    S2 --> M1
    S3 --> M2
    S4 --> M1
    S1 --> E2
    S3 --> E2
    S3 --> E3
    S3 --> E4
    M1 --> E1
    M2 --> E1
    MW --> W1
    MW --> W2
    A1 --> W3
```

## 4.2 Authentication Flow — Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant C as Client
    participant R as auth routes
    participant S as AuthService
    participant V as Validators
    participant DB as PostgreSQL
    participant REDIS as Redis

    C->>R: POST /api/v1/auth/signup with JSON body
    R->>R: Parse JSON body
    R->>R: Apply rate limit 5 per minute
    R->>V: validate email password full_name
    V-->>R: Return is_valid and error
    alt validation fails
        R-->>C: 400 Bad Request with error
    else validation passes
        R->>S: register_user cleaned payload
        S->>DB: SELECT WHERE email equals X
        alt user exists
            S-->>R: raise AuthServiceError 409
            R-->>C: 409 Conflict
        else user does not exist
            S->>S: hash password with PBKDF2
            S->>DB: INSERT new user
            DB-->>S: commit success
            S->>S: generate access and refresh JWT
            S-->>R: return user dict and tokens
            R-->>C: 201 Created with tokens
        end
    end
```

## 4.3 System Integration Topology

```mermaid
graph LR
    subgraph CLIENT["Client Tier"]
        WEB[React Frontend]
        MOB[Mobile App PWA]
    end

    subgraph APP["Application Tier"]
        NGINX[Nginx Reverse Proxy]
        API1[Flask Instance 1]
        API2[Flask Instance 2]
    end

    subgraph WORKER["Worker Tier"]
        CW1[Celery Worker 1]
        CW2[Celery Worker 2]
    end

    subgraph DATA["Data Tier"]
        PG[(PostgreSQL Primary)]
        PGR[(PostgreSQL Replica)]
        REDIS[(Redis Cache and Blacklist)]
    end

    subgraph OBS["Observability Tier"]
        PROM[Prometheus Metrics]
        GRAF[Grafana Dashboard]
        ELK[ELK Stack Logs]
    end

    WEB -->|HTTPS| NGINX
    MOB -->|HTTPS| NGINX
    NGINX --> API1
    NGINX --> API2
    API1 --> PG
    API2 --> PG
    PG -. replication .-> PGR
    API1 --> REDIS
    API2 --> REDIS
    API1 -->|enqueue task| CW1
    API2 -->|enqueue task| CW2
    CW1 --> PG
    CW2 --> REDIS
    API1 -->|metrics| PROM
    API2 -->|metrics| PROM
    API1 -->|JSON logs| ELK
    PROM --> GRAF
```

## 4.4 Build & Integration Pipeline (CI/CD)

```mermaid
graph LR
    A[Developer Push to Git] --> B[GitHub Webhook]
    B --> C[CI Server: GitHub Actions]
    C --> D1[Run Linter: flake8 black]
    C --> D2[Run Type Checker: mypy]
    C --> D3[Run Unit Tests: pytest]
    C --> D4[Run Integration Tests]
    D1 --> E{All Checks Pass}
    D2 --> E
    D3 --> E
    D4 --> E
    E -->|yes| F[Build Docker Image]
    E -->|no| G[Notify Developer: Build Failed]
    F --> H[Push Image to Docker Hub]
    H --> I[Deploy to Staging]
    I --> J[Run Smoke Tests on Staging]
    J --> K{Tests Pass}
    K -->|yes| L[Manual Approval Gate]
    K -->|no| G
    L --> M[Deploy to Production]
    M --> N[Health Check]
    N --> O[Update Load Balancer]
```

## 4.5 Layered Architecture (Module-Internal View)

```mermaid
graph TD
    subgraph PRES["Presentation Layer"]
        P1[HTTP Request]
        P2[JSON Response]
    end

    subgraph ROUTEL["Route Layer"]
        RL1[Request Parsing]
        RL2[Response Formatting]
        RL3[Rate Limiting]
    end

    subgraph SCHEMAL["Schema Layer"]
        SL1[Input Validation]
        SL2[Data Sanitization]
    end

    subgraph SERVICEL["Service Layer"]
        SLL1[Business Logic]
        SLL2[Authorization Checks]
        SLL3[Transaction Management]
    end

    subgraph DATAL["Data Access Layer"]
        DLA1[ORM Queries]
        DLA2[Cache Operations]
        DLA3[External API Calls]
    end

    P1 --> RL1
    RL1 --> RL3
    RL3 --> SL1
    SL1 --> SL2
    SL2 --> SLL1
    SLL1 --> SLL2
    SLL2 --> SLL3
    SLL3 --> DLA1
    SLL3 --> DLA2
    SLL3 --> DLA3
    DLA1 --> P2
    DLA2 --> P2
    DLA3 --> P2
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **[KTU University Exam — Model Question, PCCSP806, Module 1]**
> **Q1. [CO1, Remember, 3 Marks]**
> Define "Module Coupling" and "Module Cohesion". Explain why high cohesion and low coupling are desirable in the context of Major Project Phase II implementation.
> 
> **Model Answer (3 Marks):**
> 
> * **[1 Mark] Module Coupling:** The measure of **interdependence** between two modules. It quantifies how strongly one module relies on the internal workings of another. High coupling means changing one module forces changes in many others.
> * **[1 Mark] Module Cohesion:** The measure of **intra-module** functional relatedness — i.e., how strongly the responsibilities of a single module are related to one another. High cohesion means a module has one well-defined purpose.
> * **[1 Mark] Why High Cohesion & Low Coupling:** High cohesion makes modules **easier to understand, test, and maintain**; low coupling ensures modules can be **modified, replaced, and integrated independently**, reducing defect propagation during system integration. In a capstone project, this translates to faster development, fewer merge conflicts, and easier parallel work by team members.

---

> **[KTU University Exam — Model Question, PCCSP806, Module 1]**
> **Q2. [CO1, Understand, 3 Marks]**
> Differentiate between **Unit Testing** and **Integration Testing**. State one tool used for each in a Python-based capstone project.
> 
> **Model Answer (3 Marks):**
> 
> * **[1 Mark] Unit Testing:** Tests a **single module or function** in isolation, mocking all dependencies. It verifies that each unit of code performs as designed. Example tool: **`pytest`**.
> * **[1 Mark] Integration Testing:** Tests the **interaction between two or more modules** to verify that they communicate and exchange data correctly. Example tool: **`pytest` with Flask's `test_client()`** (or `Postman/Newman` for API integration).
> * **[1 Mark] Key Difference:** Unit tests have **no external dependencies** (database, network) — they are pure. Integration tests require **real or containerized external services** (PostgreSQL, Redis) and validate the **seams** between modules.

---

## 5.2 Part B — Long Answer Questions (14 Marks with Internal Choice)

> **[KTU University Exam — Model Question, PCCSP806, Module 1]**
> 
> ### Question A (14 Marks) — [CO2, Apply + Analyze]
> 
> **You are implementing the Authentication Module of your Major Project (a college placement portal).**
> 
> **(a)** Design the **complete code structure** for a password-based login endpoint that:
> - Accepts email and password in JSON body.
> - Validates the inputs.
> - Checks the user against a PostgreSQL database using SQLAlchemy ORM.
> - Returns a **JWT access token** (valid 1 hour) and a **refresh token** (valid 30 days) on success.
> - Returns a generic "Invalid email or password" message on failure to prevent user enumeration.
> - Implements **rate limiting** at 10 attempts per minute.
> - Logs every failed attempt in structured JSON format.
>   **[7 Marks]**
> 
> **(b)** Explain the **security implications** of the following in the above implementation:
> - Storing plaintext passwords vs. hashed passwords.
> - Using MD5 vs. PBKDF2-SHA256 vs. bcrypt.
> - Returning a JWT in the response body vs. an HttpOnly cookie.
> - Not implementing rate limiting.
> - Using a single static JWT secret across all environments.
>   **[7 Marks]**
> 
> **Model Answer:**
> 
> **Part (a) — Login Endpoint Implementation [7 Marks]**
> 
> ```python
> # app/modules/auth/routes.py
> from flask import Blueprint, request, jsonify
> from flask_jwt_extended import jwt_required
> from app.extensions import limiter, db
> from app.models.user import User
> from app.modules.auth.service import AuthService, AuthServiceError
> from app.modules.auth.schemas import LoginSchema
> import logging
> 
> logger = logging.getLogger(__name__)
> auth_bp = Blueprint("auth", __name__, url_prefix="/api/v1/auth")
> 
> @auth_bp.route("/login", methods=["POST"])
> @limiter.limit("10 per minute")  # [Brute-force protection: 1 Mark]
> def login():
>     try:
>         # [Request parsing with error handling: 1 Mark]
>         payload = request.get_json(silent=True)
>         if payload is None:
>             return jsonify({"error": "JSON body required."}), 400
> 
>         # [Schema validation: 1 Mark]
>         cleaned, errors = LoginSchema.validate(payload)
>         if errors:
>             return jsonify({"error": "Validation failed", "details": errors}), 400
> 
>         # [Business logic in service layer: 1 Mark]
>         result = AuthService.login_user(cleaned)
> 
>         # [Structured logging: 1 Mark]
>         logger.info(
>             f"Login successful for user {result['user']['id']}",
>             extra={"event": "login_success", "user_id": result["user"]["id"]}
>         )
> 
>         # [Response with both tokens: 1 Mark]
>         return jsonify({
>             "message": "Login successful.",
>             "data": {
>                 "user": result["user"],
>                 "access_token": result["access_token"],
>                 "refresh_token": result["refresh_token"]
>             }
>         }), 200
> 
>     except AuthServiceError as e:
>         # [Generic error response to prevent enumeration: 1 Mark]
>         logger.warning(
>             f"Login failed for email {cleaned.get('email', 'unknown')}",
>             extra={"event": "login_failure", "reason": e.message}
>         )
>         return jsonify({"error": "Invalid email or password."}), 401
> 
>     except Exception as e:
>         logger.exception(f"Unexpected error during login: {e}")
>         return jsonify({"error": "Internal server error."}), 500
> ```
> 
> The corresponding **`AuthService.login_user`** method (covered in Section 3.2.7) executes:
> - Lookups `User.query.filter_by(email=email).first()`.
> - Calls `user.verify_password(password)` which uses `werkzeug.security.check_password_hash` (PBKDF2-SHA256).
> - Updates `user.last_login` and commits.
> - Generates JWTs with `user.generate_access_token()` (1-hour expiry) and `user.generate_refresh_token()` (30-day expiry).
> 
> **Part (b) — Security Implications [7 Marks]**
> 
> | Concern | Implication | Marks |
> |---|---|---|
> | **Plaintext passwords** | A database breach exposes every user's password verbatim, enabling credential stuffing across other sites. | **[1 Mark]** |
> | **MD5 vs. PBKDF2-SHA256 vs. bcrypt** | MD5 is broken and crackable in seconds on a GPU. PBKDF2 with 600k iterations (Werkzeug 3.x default) and bcrypt with cost 12 are both **memory- and time-hard**, making brute force infeasible. | **[1.5 Marks]** |
> | **JWT in response body vs. HttpOnly cookie** | Body: accessible to JavaScript → vulnerable to XSS. HttpOnly cookie: not accessible to JS → XSS-resistant. However, body is acceptable for **mobile/SPA** clients that store it in `sessionStorage`/`AsyncStorage`. | **[1.5 Marks]** |
> | **No rate limiting** | An attacker can perform unlimited password guesses; with weak passwords, a dictionary attack succeeds in minutes. Rate limiting at 10/min reduces attempts to 14,400/day max per IP. | **[1 Mark]** |
> | **Single static secret everywhere** | If the secret leaks from a developer's laptop, an attacker can forge tokens for **all environments**, including production. Best practice: use **environment-specific secrets** loaded from a vault (AWS Secrets Manager, HashiCorp Vault). | **[1.5 Marks]** |
> | **Missing token revocation** | Stateless JWTs cannot be invalidated before expiry without a server-side blacklist (e.g., Redis). | **[0.5 Marks]** |

---

> ### Question B (14 Marks Alternative) — [CO3, Apply + Evaluate]
> 
> **Consider the Notification Module of your project (a healthcare appointment system). Patients must receive an email and an in-app notification whenever they book, reschedule, or cancel an appointment.**
> 
> **(a)** Write the **complete, production-ready code** for an asynchronous notification service using **Celery + Redis + Flask-Mail** that:
> - Queues email sending as a background task.
> - Implements **retry with exponential backoff** (max 3 retries).
> - Creates an in-app notification record in the database.
> - Logs the delivery status in structured JSON.
>   **[7 Marks]**
> 
> **(b)** Critically evaluate why **asynchronous** notification dispatch is preferred over **synchronous** dispatch. Discuss what happens to the system if (i) the email SMTP server is down, (ii) the Redis broker crashes, and (iii) the user opens the app within 1 second of booking. **[7 Marks]**
> 
> **Model Answer:**
> 
> **Part (a) — Asynchronous Notification Service [7 Marks]**
> 
> ```python
> # app/modules/notifications/service.py
> from celery import Celery
> from flask_mail import Message
> from datetime import datetime
> from app.extensions import db, mail, celery
> import logging
> 
> logger = logging.getLogger(__name__)
> 
> class Notification(db.Model):
>     __tablename__ = "notifications"
>     id = db.Column(db.Integer, primary_key=True)
>     user_id = db.Column(db.String(36), nullable=False, index=True)
>     title = db.Column(db.String(255), nullable=False)
>     message = db.Column(db.Text, nullable=False)
>     is_read = db.Column(db.Boolean, default=False)
>     created_at = db.Column(db.DateTime, default=datetime.utcnow)
> 
> # [Celery task with retry: 2 Marks]
> @celery.task(bind=True, max_retries=3, default_retry_delay=10)
> def send_appointment_email(self, recipient, subject, body):
>     try:
>         msg = Message(subject=subject, recipients=[recipient], body=body)
>         mail.send(msg)
>         # [Structured success log: 1 Mark]
>         logger.info("email_sent", extra={
>             "event": "email_sent",
>             "recipient": recipient,
>             "subject": subject,
>             "task_id": self.request.id
>         })
>     except Exception as exc:
>         # [Exponential backoff retry: 1 Mark]
>         logger.error("email_send_failed", extra={
>             "event": "email_failed",
>             "recipient": recipient,
>             "error": str(exc),
>             "retry_count": self.request.retries
>         })
>         raise self.retry(exc=exc, countdown=2 ** self.request.retries)
> 
> class NotificationService:
>     @staticmethod
>     def notify_appointment(user, action, appointment):
>         # [In-app notification record: 1 Mark]
>         notif = Notification(
>             user_id=str(user.id),
>             title=f"Appointment {action}",
>             message=f"Your appointment on {appointment.date} is {action}."
>         )
>         db.session.add(notif)
>         db.session.commit()
> 
>         # [Queue email async: 1 Mark]
>         send_appointment_email.delay(
>             recipient=user.email,
>             subject=f"Appointment {action.capitalize()}",
>             body=notif.message
>         )
>         return {"status": "queued", "notification_id": notif.id}
> ```
> 
> **Part (b) — Critical Evaluation [7 Marks]**
> 
> **[1 Mark] Async vs Sync — Why Async Wins:**
> Synchronous dispatch blocks the HTTP request thread until SMTP responds. Typical SMTP latency is **500ms–3s**, sometimes 30+ seconds on timeout. This directly degrades the user-facing API response time and ties up worker threads.
> 
> **[2 Marks] Scenario (i) — SMTP Server Down:**
> - **Sync:** The API call **fails immediately**; the user sees a 500 error even though their booking succeeded. This is a *catastrophic UX failure*.
> - **Async with retry:** The task is **queued**, the API returns `201 Created`, and the email is retried up to 3 times. If all retries fail, the failure is **logged** for manual intervention. Booking integrity is preserved.
> 
> **[2 Marks] Scenario (ii) — Redis Broker Crashes:**
> - New tasks **cannot be enqueued**; any API call requiring notification returns an error.
> - **Mitigation:** Use a **dead-letter queue** (Celery's `on_failure` callback) to persist failed jobs to PostgreSQL and re-process them after Redis recovers. Implement a **health check** that fails the notification endpoint gracefully.
> 
> **[2 Marks] Scenario (iii) — User Opens App Immediately After Booking:**
> - **Async correctly handles this:** The in-app `Notification` record is written to PostgreSQL **before** the email is queued (single database transaction). When the user opens the app, the `GET /api/v1/notifications` endpoint returns the new notification **immediately** — the user does not need to wait for the email.
> - The email is a **secondary channel** for users who are not in the app; it can arrive 1–30 seconds later without affecting UX.

> [!WARNING]
> **KTU Examiner's Valuation Pitfalls — Read Carefully:**
> 
> 1. **Do NOT skip the rate-limiting decorator** in the login route. Examiners specifically check for `@limiter.limit(...)` on auth endpoints. **[Lose 1 Mark]**
> 2. **Never commit to a database inside a Celery task without an app context.** Wrap the task with `with app.app_context():` or use `celery.conf.update(flask_app=app)`. **[Lose 1 Mark]**
> 3. **Do NOT hardcode JWT secrets in source code.** Always use `os.getenv()` or a config object. Examiners will mark you down for security negligence. **[Lose 0.5 Mark]**
> 4. **Always return JSON error responses** (not HTML default Flask error pages) — this is the hallmark of an integrated REST API. **[Lose 0.5 Mark]**
> 5. **Forgetting to validate `request.get_json(silent=True)`** will crash the server on malformed input. Always use `silent=True` and check for `None`. **[Lose 0.5 Mark]**
> 6. **Not writing `db.session.rollback()`** in the `except` block of database operations leads to connection pool exhaustion. **[Lose 1 Mark]**

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — Module 1: Detailed Implementation & System Integration**

### A. Conceptual Foundation
- **Module:** A self-contained unit of software with a well-defined interface and responsibility.
- **Module Coupling ($Ce$, $Ca$):** The degree of interdependence *between* modules — strive for **low** coupling.
- **Module Cohesion (LCOM):** The degree of functional unity *within* a module — strive for **high** cohesion.
- **Instability Index:** $I = \dfrac{Ce}{Ce + Ca}$ — modules with $I \to 1$ are painful to change.
- **Cyclomatic Complexity:** $V = E - N + 2P$ — keep $V \leq 10$ per function.

### B. Architectural Patterns to Know
- **Layered Architecture:** Presentation → Route → Service → Data Access → Database.
- **Service Layer Pattern:** Routes are thin; business logic lives in stateless service classes.
- **Repository Pattern:** Abstract database queries behind an interface (useful for testing).
- **Factory Pattern:** `create_app()` builds the Flask app from configuration — used in this note.
- **Blueprint Pattern:** Flask's mechanism for organizing routes into modules (`auth_bp`, `users_bp`).

### C. Security Non-Negotiables
- **Hash passwords** with PBKDF2-SHA256 (Werkzeug 3.x) or bcrypt cost ≥ 12 — **never** MD5/SHA1/plaintext.
- **JWT secrets** must be environment-specific, ≥ 32 bytes, and rotated quarterly.
- **Rate-limit** auth endpoints: 5/min for signup, 10/min for login.
- **Validate** every input via schema; **sanitize** all filenames with `secure_filename()`.
- **Use parameterized queries** (SQLAlchemy ORM does this by default — never use f-strings in raw SQL).
- **Generic error messages** for login failures — never reveal whether the email exists.

### D. Integration Patterns
- **Topological sort** modules by dependency before coding; build leaves first.
- **Contract-first** design: define API schemas (OpenAPI/Marshmallow) before implementing.
- **Environment parity:** dev, staging, and prod should differ only in configuration, not code.
- **Containerization:** Docker + Docker Compose for reproducible integration environments.
- **Health checks:** every microservice must expose `/health` for load balancers.
- **Structured logging:** JSON logs with `request_id`, `user_id`, `event` — fed to ELK/Loki.

### E. Testing Mandate
- **Unit tests:** `pytest` with mocks for database and external services.
- **Integration tests:** `pytest` + `Flask.test_client()` + ephemeral PostgreSQL/Redis (via Docker).
- **Coverage target:** $\geq 70\%$ lines, $\geq 60\%$ branches.
- **Test naming:** `test_<module>_<scenario>_<expected_outcome>`.
- **CI:** Every push to GitHub triggers lint → type-check → test → build → deploy-staging.

### F. Quality Metrics Summary
| Metric | Formula | Target |
|---|---|---|
| Cyclomatic Complexity $V$ | $V = E - N + 2P$ | $\leq 10$ |
| Instability $I$ | $I = \dfrac{Ce}{Ce + Ca}$ | $\leq 0.5$ |
| Code Coverage | $\dfrac{\text{Executed}}{\text{Total}} \times 100$ | $\geq 70\%$ |
| API Latency (P95) | — | $\leq 300$ ms |
| Defect Density $DD$ | $\dfrac{\text{Defects}}{\text{KLOC}}$ | $\leq 1$ |
| MTBF | $\dfrac{\text{Uptime}}{\text{Failures}}$ | $\geq 720$ hr |

### G. Viva-Voce Frequently Asked Questions
1. *"What design pattern did you use for integrating modules?"* → **Service Layer + Blueprint + Factory**
2. *"How do you ensure two modules don't break each other?"* → **Contract testing + Integration tests + Versioned APIs**
3. *"How is your code organized for team parallel work?"* → **Modular blueprints with clear ownership + Git feature branches + PR reviews**
4. *"What is the role of middleware?"* → **Cross-cutting concerns: auth, logging, error handling, rate limiting**
5. *"How would you scale this to 10,000 users?"* → **Horizontal scaling of Flask behind Nginx + Redis caching + Celery workers + PostgreSQL read replicas**

<!-- SECTION_5_END -->
