---
title: "Road estimation-Estimation of earthwork from longitudinal section-metaled road."
subject: "QUANTITY SURVEYING AND VALUATION"
module: "Module 3: Detailed Estimate"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81108b"
status: "completed"
scrapedAt: "2026-05-20T18:55:25.852Z"
---
# Quantity Surveying and Valuation - Module 3: Detailed Estimate

## Topic: Road Estimation - Estimation of Earthwork from Longitudinal Section (Metaled Road)

This module focuses on the detailed estimation of earthwork for metaled roads, primarily using longitudinal sections. Earthwork is a crucial component of road construction, involving the excavation and embankment of soil to achieve the desired road profile.

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the purpose and importance of longitudinal sections in road earthwork estimation.
*   Define key terms related to road profiles and earthwork calculations.
*   Calculate earthwork volumes using the Mean Area Method and the Prismoidal Formula.
*   Apply these methods to practical scenarios involving longitudinal sections.
*   Identify factors influencing earthwork quantities for metaled roads.

---

### 1. Introduction to Longitudinal Sections in Road Estimation

#### 1.1 What is a Longitudinal Section?

A **longitudinal section** (also known as an elevation or profile) is a vertical section of the ground or road along its centerline. It represents the existing ground level and the proposed formation level (finished road level) at various points along the road alignment.

#### 1.2 Purpose of Longitudinal Sections in Earthwork Estimation

*   **Visual Representation:** Provides a clear graphical representation of the ground profile and the proposed road profile.
*   **Determining Cutting and Filling:** Helps in identifying areas where excavation (cutting) is required to reach the formation level and areas where embankment (filling) is needed.
*   **Calculating Volumes:** Forms the basis for calculating the volume of earthwork (both excavation and filling) required for the road.
*   **Design Aid:** Assists in the design of the road alignment, drainage, and cross-sections.

#### 1.3 Key Components of a Longitudinal Section

*   **Chainage:** The horizontal distance from the starting point of the road along its centerline.
*   **Ground Level:** The existing elevation of the natural ground surface.
*   **Formation Level:** The proposed finished elevation of the road surface at a specific chainage.
*   **Formation Width:** The width of the road at the formation level (including shoulders).
*   **Cutting:** The depth of excavation required when the formation level is below the ground level.
*   **Filling:** The height of embankment required when the formation level is above the ground level.
*   **Depth of Cutting/Height of Filling:** The vertical difference between the ground level and the formation level at a particular chainage.

---

### 2. Calculating Earthwork Volumes

Earthwork volumes are typically calculated between two consecutive chainages (sections). The methods used depend on the irregularity of the ground profile.

#### 2.1 Essential Concepts

*   **Area of Cross-Section:** The area of the road's cross-section at a specific chainage. This is crucial for volume calculations. For earthwork, we are interested in the *area of the excavated soil* or the *area of the embankment*.
*   **Volume:** The product of the average area of two consecutive cross-sections and the distance between them.

#### 2.2 Methods for Calculating Earthwork Volumes

The primary methods used for calculating earthwork volumes from longitudinal sections are:

1.  **Mean Area Method:** Assumes the area of the cross-section varies uniformly between two consecutive sections.
2.  **Prismoidal Formula:** A more accurate method, especially when the cross-sections are irregular, as it considers the mid-sectional area.

---

### 3. Mean Area Method

#### 3.1 Principle

This method calculates the volume by multiplying the average area of the two end cross-sections by the distance between them.

#### 3.2 Formula

$$
\text{Volume (V)} = \frac{(A_1 + A_2)}{2} \times L
$$

Where:
*   $A_1$ = Area of the cross-section at the first chainage.
*   $A_2$ = Area of the cross-section at the second chainage.
*   $L$ = Distance between the two chainages.

#### 3.3 Calculating Area of Cross-Section

For a metaled road, the cross-section is typically trapezoidal. The area of a trapezoidal cross-section for earthwork is calculated as follows:

*   **For Cutting:**
    $$
    A = (b + n \times d) \times d
    $$
    Where:
    *   $b$ = Width of the road at the formation level (formation width).
    *   $n$ = Side slope ratio (e.g., 2:1 means n=2).
    *   $d$ = Depth of cutting.

*   **For Filling:**
    $$
    A = (b + n \times h) \times h
    $$
    Where:
    *   $b$ = Width of the road at the formation level (formation width).
    *   $n$ = Side slope ratio for filling (can be different from cutting).
    *   $h$ = Height of filling.

#### 3.4 Example: Mean Area Method

**Problem:**
A road has the following data for earthwork estimation between chainages 0 and 30m. The formation width is 10m, and the side slopes for cutting are 2:1.

| Chainage (m) | Ground Level (m) | Formation Level (m) | Depth of Cutting (d) / Height of Filling (h) (m) | Area of Cross-Section ($A$) ($m^2$) |
| :----------- | :--------------- | :------------------ | :--------------------------------------------- | :---------------------------------- |
| 0            | 105.00           | 100.00              | 5.00 (Cutting)                                 | $(10 + 2 \times 5) \times 5 = 100$    |
| 30           | 108.00           | 102.00              | 6.00 (Cutting)                                 | $(10 + 2 \times 6) \times 6 = 132$    |

**Calculate the volume of earthwork between chainage 0 and 30m using the Mean Area Method.**

**Solution:**

*   $A_1$ (at chainage 0) = 100 $m^2$
*   $A_2$ (at chainage 30) = 132 $m^2$
*   $L$ = 30 m

$$
\text{Volume (V)} = \frac{(A_1 + A_2)}{2} \times L
$$
$$
\text{V} = \frac{(100 + 132)}{2} \times 30
$$
$$
\text{V} = \frac{232}{2} \times 30
$$
$$
\text{V} = 116 \times 30
$$
$$
\text{V} = 3480 \, m^3
$$

**Therefore, the volume of earthwork (cutting) between chainage 0 and 30m is 3480 $m^3$.**

---

### 4. Prismoidal Formula

#### 4.1 Principle

The Prismoidal Formula is more accurate as it considers the area of the cross-section at the midpoint between the two end sections. It assumes the cross-sections are in the form of trapezoids, and the solid is a prismoid.

#### 4.2 Formula

$$
\text{Volume (V)} = \frac{L}{6} (A_1 + 4A_m + A_2)
$$

Where:
*   $A_1$ = Area of the cross-section at the first chainage.
*   $A_2$ = Area of the cross-section at the second chainage.
*   $A_m$ = Area of the mid-section.
*   $L$ = Distance between the two chainages.

#### 4.3 Calculating the Area of the Mid-Section ($A_m$)

To find $A_m$, we first need to determine the dimensions of the mid-section.

*   **Mid-Chainage:** This is simply the average of the two end chainages.
*   **Mid-Ground Level:** The average of the ground levels at the two end chainages.
*   **Mid-Formation Level:** The average of the formation levels at the two end chainages.
*   **Mid-Depth of Cutting / Mid-Height of Filling:** The difference between the mid-ground level and the mid-formation level.
*   **Mid-Width:** The formation width at the mid-chainage.

Then, the area of the mid-section ($A_m$) is calculated using the same cross-sectional area formula as before:

*   **For Cutting:**
    $$
    A_m = (b_m + n \times d_m) \times d_m
    $$
    Where:
    *   $b_m$ = Formation width at the mid-chainage.
    *   $n$ = Side slope ratio.
    *   $d_m$ = Mid-depth of cutting.

*   **For Filling:**
    $$
    A_m = (b_m + n \times h_m) \times h_m
    $$
    Where:
    *   $b_m$ = Formation width at the mid-chainage.
    *   $n$ = Side slope ratio.
    *   $h_m$ = Mid-height of filling.

**Important Note:** If the formation width is constant, $b_m = b$.

#### 4.4 Example: Prismoidal Formula

**Problem:**
Using the same data as the previous example, calculate the volume of earthwork between chainage 0 and 30m using the Prismoidal Formula.

**Data:**
*   Chainage 0: Ground Level = 105.00m, Formation Level = 100.00m, Depth of Cutting = 5.00m, Area ($A_1$) = 100 $m^2$.
*   Chainage 30: Ground Level = 108.00m, Formation Level = 102.00m, Depth of Cutting = 6.00m, Area ($A_2$) = 132 $m^2$.
*   Formation width = 10m, Side slopes for cutting = 2:1, $L$ = 30m.

**Calculate $A_m$:**

1.  **Mid-Chainage:** $(0 + 30) / 2 = 15$m.
2.  **Mid-Ground Level:** $(105.00 + 108.00) / 2 = 106.50$m.
3.  **Mid-Formation Level:** $(100.00 + 102.00) / 2 = 101.00$m.
4.  **Mid-Depth of Cutting ($d_m$):** Mid-Ground Level - Mid-Formation Level = $106.50 - 101.00 = 5.50$m.
5.  **Mid-Formation Width ($b_m$):** Since the formation width is constant, $b_m = 10$m.
6.  **Area of Mid-Section ($A_m$):**
    $$
    A_m = (b_m + n \times d_m) \times d_m
    $$
    $$
    A_m = (10 + 2 \times 5.50) \times 5.50
    $$
    $$
    A_m = (10 + 11) \times 5.50
    $$
    $$
    A_m = 21 \times 5.50
    $$
    $$
    A_m = 115.5 \, m^2
    $$

**Calculate Volume using Prismoidal Formula:**

$$
\text{Volume (V)} = \frac{L}{6} (A_1 + 4A_m + A_2)
$$
$$
\text{V} = \frac{30}{6} (100 + 4 \times 115.5 + 132)
$$
$$
\text{V} = 5 (100 + 462 + 132)
$$
$$
\text{V} = 5 (694)
$$
$$
\text{V} = 3470 \, m^3
$$

**Therefore, the volume of earthwork (cutting) between chainage 0 and 30m is 3470 $m^3$.**

**Comparison:** The Prismoidal Formula (3470 $m^3$) gives a slightly smaller volume than the Mean Area Method (3480 $m^3$), which is generally more accurate when dealing with varying depths of cutting/filling.

---

### 5. Handling Borrow Pits and Spoiling Earth

*   **Borrow Pits:** Areas from where earth is excavated to be used as filling. The volume of earthwork in a borrow pit needs to be calculated.
*   **Spoiling:** Excess excavated earth that cannot be used for filling or is not required elsewhere and needs to be disposed of.
*   **In-situ Volume:** The volume of earth in its natural state before excavation.
*   **Bank Volume (or Filled Volume):** The volume of earth in its compacted state after filling.
*   **Bulking:** The increase in the volume of earth when excavated due to aeration. The factor by which the volume increases is called the bulking factor.
*   **Shrinkage:** The decrease in the volume of earth when compacted.

**Important Note:** For accurate accounting, it is crucial to consider the changes in volume (bulking and shrinkage) between excavation and placement. However, for basic earthwork volume calculations from longitudinal sections, we typically work with in-situ volumes unless specified otherwise.

---

### 6. Practice Questions and Exercises

**Question 1:**
A road has the following longitudinal section data. Calculate the volume of earthwork between chainage 20m and 40m using the Mean Area Method.
Formation width = 12m. Side slopes for filling = 1.5:1.

| Chainage (m) | Ground Level (m) | Formation Level (m) | Height of Filling (h) (m) | Area of Cross-Section (m²) |
| :----------- | :--------------- | :------------------ | :------------------------ | :------------------------- |
| 20           | 98.00            | 100.00              | 2.00 (Filling)            | (12 + 1.5 * 2) * 2 = 30    |
| 40           | 95.00            | 99.00               | 4.00 (Filling)            | (12 + 1.5 * 4) * 4 = 60    |

**Answer:**
*   $A_1$ = 30 $m^2$
*   $A_2$ = 60 $m^2$
*   $L$ = 20 m

$$
\text{V} = \frac{(30 + 60)}{2} \times 20 = \frac{90}{2} \times 20 = 45 \times 20 = 900 \, m^3
$$
**Volume of earthwork (filling) = 900 $m^3$.**

**Question 2:**
Using the data from Question 1, calculate the volume of earthwork between chainage 20m and 40m using the Prismoidal Formula.

**Answer:**
*   $A_1$ = 30 $m^2$
*   $A_2$ = 60 $m^2$
*   $L$ = 20 m
*   Formation width = 12m, Side slopes for filling = 1.5:1

**Calculate $A_m$:**
1.  Mid-Chainage = $(20+40)/2 = 30$m.
2.  Mid-Ground Level = $(98.00 + 95.00)/2 = 96.50$m.
3.  Mid-Formation Level = $(100.00 + 99.00)/2 = 99.50$m.
4.  Mid-Height of Filling ($h_m$) = Mid-Ground Level - Mid-Formation Level = $96.50 - 99.50 = -3.00$m.
    *   **Correction:** When calculating the height of filling, if the formation level is higher than the ground level, it indicates filling is needed. The depth/height should always be a positive value representing the extent of filling or cutting. In this case, the formation level is higher than the ground level, so it's a filling of 3.00m.
    *   Let's re-evaluate the calculation for $h_m$: The difference between formation level and ground level is what determines cutting or filling.
        *   At chainage 20: Formation (100) > Ground (98), so Filling = 100 - 98 = 2.00m.
        *   At chainage 40: Formation (99) > Ground (95), so Filling = 99 - 95 = 4.00m.
    *   Therefore, the mid-height of filling is the average of these: $(2.00 + 4.00)/2 = 3.00$m.

5.  Mid-Formation Width ($b_m$) = 12m.
6.  Area of Mid-Section ($A_m$):
    $$
    A_m = (b_m + n \times h_m) \times h_m
    $$
    $$
    A_m = (12 + 1.5 \times 3.00) \times 3.00
    $$
    $$
    A_m = (12 + 4.5) \times 3.00
    $$
    $$
    A_m = 16.5 \times 3.00 = 49.5 \, m^2
    $$

**Calculate Volume using Prismoidal Formula:**
$$
\text{V} = \frac{20}{6} (30 + 4 \times 49.5 + 60)
$$
$$
\text{V} = \frac{20}{6} (30 + 198 + 60)
$$
$$
\text{V} = \frac{20}{6} (288)
$$
$$
\text{V} = 20 \times 48 = 960 \, m^3
$$
**Volume of earthwork (filling) = 960 $m^3$.**

**Question 3:**
Explain the difference in accuracy between the Mean Area Method and the Prismoidal Formula for earthwork calculation.

**Answer:** The Prismoidal Formula is generally more accurate than the Mean Area Method because it accounts for the variation in cross-sectional area more precisely by including the mid-section area. The Mean Area Method assumes a linear variation in cross-sectional area between two sections, which might not always be the case, especially with irregular ground profiles or changes in the road cross-section.

---

### 7. Important Points to Remember

*   **Accuracy:** The Prismoidal Formula is generally preferred for its higher accuracy.
*   **Consistency:** Ensure consistent units of measurement throughout the calculations.
*   **Cross-Sectional Areas:** Correctly calculate the area of the cross-section for both cutting and filling, considering the formation width and side slopes.
*   **Data Presentation:** Use tabular format (like a Day Book or Bill of Quantities) to organize chainages, ground levels, formation levels, depths/heights, and calculated areas.
*   **Positive Values:** Depths of cutting and heights of filling should always be considered as positive values for area calculations. The distinction between cutting and filling is made when summing up volumes at the end.
*   **Formation Width and Side Slopes:** These are critical parameters that influence the cross-sectional area and must be accurately identified from the road design drawings.
*   **Mid-Section Calculations:** Pay close attention to the calculation of the mid-section dimensions, especially when dealing with varying formation widths or side slopes.

---

This concludes Module 3, Topic: Road Estimation - Estimation of Earthwork from Longitudinal Section. You should now be able to understand the importance of longitudinal sections and apply the Mean Area Method and Prismoidal Formula to calculate earthwork volumes for metaled roads.
