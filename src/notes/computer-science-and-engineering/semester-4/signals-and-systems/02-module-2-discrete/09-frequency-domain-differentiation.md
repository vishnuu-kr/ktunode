---
title: "Frequency-Domain Differentiation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b150"
status: "completed"
scrapedAt: "2026-05-20T16:15:41.267Z"
---
## Signals and Systems - Module 2: Discrete - Frequency-Domain Differentiation

### Learning Outcomes:

*   Understand the frequency-domain differentiation property of the Discrete-Time Fourier Transform (DTFT).
*   Apply the frequency-domain differentiation property to analyze and solve problems involving DTFTs.
*   Derive the DTFT of signals obtained through differentiation in the time domain.
*   Explain the relationship between differentiation in the time domain and multiplication by 'jω' in the frequency domain (and its discrete counterpart).

### 1. Key Concepts and Definitions:

*   **Discrete-Time Fourier Transform (DTFT):**  A representation of a discrete-time signal in the frequency domain.  Given a discrete-time signal *x[n]*, its DTFT is defined as:

    `X(e^(jω)) = Σ [n = -∞ to ∞] x[n] * e^(-jωn)`

*   **Frequency-Domain Differentiation:** A property stating that differentiating the DTFT of a signal with respect to frequency is equivalent to multiplying the signal in the time domain by *n*.

*   **Frequency:** In the context of DTFT, frequency (ω) is normalized and ranges from -π to π.  It represents the angular frequency in radians per sample.

### 2. Frequency-Domain Differentiation Property:

The frequency-domain differentiation property states:

If `x[n] <=> X(e^(jω))` represents the DTFT pair, then

`n * x[n] <=> j * d/dω [X(e^(jω))]`

**Explanation:**

*   Multiplying a signal *x[n]* by *n* in the time domain corresponds to differentiating its DTFT *X(e^(jω))* with respect to ω and multiplying by *j*.
*   This property is analogous to the time-domain differentiation property in the continuous-time Fourier Transform (CTFT), where differentiation in the time domain corresponds to multiplication by *jω* in the frequency domain.  Here, differentiation is performed *in* the frequency domain.

**Proof (Outline):**

The proof relies on differentiating the DTFT definition with respect to ω:

1.  Start with the definition of the DTFT: `X(e^(jω)) = Σ [n = -∞ to ∞] x[n] * e^(-jωn)`
2.  Differentiate both sides with respect to ω:

    `d/dω [X(e^(jω))] = d/dω {Σ [n = -∞ to ∞] x[n] * e^(-jωn)}`
3.  Bring the derivative inside the summation (under appropriate convergence conditions):

    `d/dω [X(e^(jω))] = Σ [n = -∞ to ∞] x[n] * d/dω [e^(-jωn)]`
4.  Evaluate the derivative:

    `d/dω [X(e^(jω))] = Σ [n = -∞ to ∞] x[n] * (-jn) * e^(-jωn)`
5.  Rearrange the terms:

    `d/dω [X(e^(jω))] = -j * Σ [n = -∞ to ∞] n * x[n] * e^(-jωn)`
6.  Multiply both sides by -j:

    `j * d/dω [X(e^(jω))] = Σ [n = -∞ to ∞] n * x[n] * e^(-jωn)`
7.  Notice that the right-hand side is the DTFT of *n* * x[n]*.  Therefore:

    `n * x[n] <=> j * d/dω [X(e^(jω))]`

### 3. Applications and Examples:

**Example 1: Finding the DTFT of *n* * a^n * u[n]***

Given:  `x[n] = a^n * u[n]`

We know the DTFT of  `a^n * u[n]` is  `X(e^(jω)) = 1 / (1 - a * e^(-jω))` for |a| < 1.

We want to find the DTFT of `n * x[n] = n * a^n * u[n]`.

Using the frequency-domain differentiation property:

1.  `n * a^n * u[n] <=> j * d/dω [X(e^(jω))] = j * d/dω [1 / (1 - a * e^(-jω))]`

2.  Differentiate `X(e^(jω))` with respect to ω:

    `d/dω [1 / (1 - a * e^(-jω))] = -1 * (1 - a * e^(-jω))^(-2) * (a * j * e^(-jω))`

    `= (a * j * e^(-jω)) / (1 - a * e^(-jω))^2`

3.  Multiply by *j*:

    `j * d/dω [X(e^(jω))] = j * (a * j * e^(-jω)) / (1 - a * e^(-jω))^2`

    `= -a * e^(-jω) / (1 - a * e^(-jω))^2`

Therefore, the DTFT of `n * a^n * u[n]` is  `-a * e^(-jω) / (1 - a * e^(-jω))^2` for |a| < 1.

**Example 2: Finding the inverse DTFT using frequency differentiation:**

Suppose you know the DTFT:

`X(e^(jω)) = 1 / (1 - 0.5 * e^(-jω))`

And you want to find the inverse DTFT of:

`Y(e^(jω)) = e^(-jω) / (1 - 0.5 * e^(-jω))^2`

We can use frequency-domain differentiation to relate this to `X(e^(jω))`.  Notice that  `Y(e^(jω))` looks similar to the derivative in the previous example.

From Example 1, we know:

`n * (0.5)^n * u[n] <=> j * d/dω [1 / (1 - 0.5 * e^(-jω))]  =  (0.5 * j * e^(-jω)) / (1 - 0.5 * e^(-jω))^2`

Rearranging:

`(0.5)^n * n * u[n] <=>  (0.5 * j * e^(-jω)) / (1 - 0.5 * e^(-jω))^2`

We want to find the inverse DTFT of `e^(-jω) / (1 - 0.5 * e^(-jω))^2`.  Divide both sides of the previous equation by *0.5j*:

`n * (0.5)^(n-1) /j * u[n]  <=> e^(-jω) / (1 - 0.5 * e^(-jω))^2`

Therefore, the inverse DTFT of `Y(e^(jω)) = e^(-jω) / (1 - 0.5 * e^(-jω))^2`  is `y[n] = (0.5)^(n-1) / j * n * u[n] = -j *n * (0.5)^(n-1) u[n]`.

### 4. Relationship to Time-Domain Differentiation (Analogy):

While we are performing frequency-domain differentiation, it's crucial to remember the analogy to the CTFT.  In CTFT, *differentiation in the time domain* is equivalent to *multiplication by jω in the frequency domain*.  In DTFT, *multiplication by n in the time domain* is equivalent to *differentiation in the frequency domain multiplied by j*.

| Domain      | CTFT                                        | DTFT                                          |
|-------------|---------------------------------------------|-----------------------------------------------|
| Time        | d/dt x(t)                                  | n * x[n]                                       |
| Frequency    | jω * X(jω)                                  | j * d/dω [X(e^(jω))]                          |

### 5. Practice Questions/Exercises:

**Question 1:**

Find the DTFT of `n * cos(ω₀n) * u[n]`. You may use the DTFT of `cos(ω₀n) * u[n]` which is:

`X(e^(jω)) = (1 - cos(ω₀) * e^(-jω)) / (1 - 2cos(ω₀) * e^(-jω) + e^(-j2ω))`

**Solution:**

1.  Use the frequency-domain differentiation property: `n * x[n] <=> j * d/dω [X(e^(jω))]`
2.  `Y(e^(jω)) = j * d/dω [(1 - cos(ω₀) * e^(-jω)) / (1 - 2cos(ω₀) * e^(-jω) + e^(-j2ω))]`
3.  Apply the quotient rule for differentiation: `d/dx [u(x)/v(x)] = (v(x) * u'(x) - u(x) * v'(x)) / (v(x))^2`
4.  Let  `u(ω) = 1 - cos(ω₀) * e^(-jω)`  and `v(ω) = 1 - 2cos(ω₀) * e^(-jω) + e^(-j2ω)`
5.  `u'(ω) = j * cos(ω₀) * e^(-jω)`
6.  `v'(ω) = 2j * cos(ω₀) * e^(-jω) - 2j * e^(-j2ω)`
7. Substitute these into the quotient rule and simplify.  The expression will be quite involved, but it illustrates the application of the differentiation property. *Note: the simplification steps are lengthy and omitted here for brevity, but are essential for a complete solution*.

**Question 2:**

If `x[n] <=> X(e^(jω))`, what is the DTFT of `n² * x[n]`? Express your answer in terms of derivatives of `X(e^(jω))`.

**Solution:**

We know `n * x[n] <=> j * d/dω [X(e^(jω))]`

Let  `y[n] = n * x[n]`. Then `Y(e^(jω)) = j * d/dω [X(e^(jω))]`.

We want to find the DTFT of `n * y[n] = n² * x[n]`.

Applying the frequency-domain differentiation property again:

`n * y[n] <=> j * d/dω [Y(e^(jω))]`

Substituting `Y(e^(jω))`:

`n² * x[n] <=> j * d/dω [j * d/dω [X(e^(jω))]]`

`n² * x[n] <=> j² * d²/dω² [X(e^(jω))]`

`n² * x[n] <=> - d²/dω² [X(e^(jω))]`

**Question 3:**

The DTFT of  `x[n]` is `X(e^(jω)) = e^(jω) / (1 - 0.8e^(-jω))`.  Determine the DTFT of `n*x[n]`.

**Solution:**

`n*x[n] <=> j* d/dω [e^(jω) / (1 - 0.8e^(-jω))]`

Using the quotient rule, let u(ω) = e^(jω) and v(ω) = 1 - 0.8e^(-jω).  Then u'(ω) = je^(jω) and v'(ω) = 0.8je^(-jω).

Therefore:

`d/dω [e^(jω) / (1 - 0.8e^(-jω))] = [(1 - 0.8e^(-jω)) * je^(jω) - e^(jω) * (0.8je^(-jω))] / (1 - 0.8e^(-jω))^2`

`= [je^(jω) - 0.8j + 0.8j] / (1 - 0.8e^(-jω))^2`

`= je^(jω) / (1 - 0.8e^(-jω))^2`

Multiplying by *j*:

`j* d/dω [e^(jω) / (1 - 0.8e^(-jω))] = -e^(jω) / (1 - 0.8e^(-jω))^2`

Therefore, the DTFT of `n*x[n]` is `-e^(jω) / (1 - 0.8e^(-jω))^2`.

### 6. Important Points to Remember:

*   The frequency-domain differentiation property provides a powerful tool for finding the DTFT of signals that are multiplied by *n* in the time domain.
*   The property is analogous to the time-domain differentiation property in the CTFT.
*   The frequency variable 'ω' is in radians per sample, ranging from -π to π.
*   Practice differentiating DTFT expressions with respect to ω using standard calculus rules (chain rule, product rule, quotient rule).
*   Be mindful of the convergence conditions when applying this property (especially when dealing with infinite summations). In most practical signals for this level, these are assumed to hold true.
*   Frequency-domain differentiation can be used to find *inverse* DTFTs by relating a complicated DTFT to the derivative of a simpler one.  This is a common technique in signal processing.
*   Don't forget to multiply by *j* after differentiating! This is a common source of errors.
