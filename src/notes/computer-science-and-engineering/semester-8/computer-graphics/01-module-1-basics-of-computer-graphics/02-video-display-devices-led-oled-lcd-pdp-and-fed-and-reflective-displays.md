---
title: "Video Display devices - LED, OLED, LCD, PDP and FED and reflective displays."
subject: "COMPUTER GRAPHICS"
module: "Module 1: Basics of Computer graphics "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd4e"
status: "completed"
scrapedAt: "2026-05-20T17:24:25.858Z"
---
# COMPUTER GRAPHICS: Module 1 - Basics of Computer Graphics

## Topic: Video Display Devices

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=FR4QIeZaPeM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=3EJlovevfcA) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=0IAPZzGSbME) |

### Learning Outcomes Covered:

*   Understanding the principles of operation for various display technologies.
*   Comparing and contrasting the advantages and disadvantages of different display types.
*   Identifying key characteristics and applications of each display technology.

---

### Key Concepts and Definitions:

*   **Pixels:** The smallest addressable element in a raster image. Each pixel has a specific color and intensity.
*   **Resolution:** The number of pixels displayed horizontally and vertically on a screen (e.g., 1920x1080). Higher resolution means more detail.
*   **Refresh Rate:** The number of times the screen image is updated per second, measured in Hertz (Hz). A higher refresh rate results in smoother motion.
*   **Response Time:** The time it takes for a pixel to change from one color to another. Lower response times reduce motion blur.
*   **Contrast Ratio:** The difference between the brightest white and the darkest black a display can produce. Higher contrast ratios lead to more vibrant images.
*   **Color Gamut:** The range of colors a display can reproduce.
*   **Backlight:** A light source behind the display panel that illuminates the pixels.

---

## 1. Light Emitting Diode (LED) Displays

**Concept:** LED displays are a broad category that utilizes Light Emitting Diodes (LEDs) to generate light. While often used as a *type of backlight* for LCD screens, in the context of standalone displays, they refer to panels made entirely of individual LEDs.

**How they work:**
*   Each pixel is composed of one or more LEDs.
*   By controlling the intensity and color of individual LEDs, the image is formed.
*   Can be **Direct View LED (DVLED)** where each pixel is an LED.

**Key Characteristics:**
*   **Brightness:** Can achieve very high brightness levels, making them suitable for outdoor use.
*   **Color:** Excellent color reproduction and wide color gamut.
*   **Contrast:** Extremely high contrast ratios, as LEDs can be turned off completely for true black.
*   **Response Time:** Very fast response times, leading to smooth motion.
*   **Durability:** Generally robust.
*   **Energy Efficiency:** Can be energy-efficient, especially when displaying dark content.
*   **Cost:** Can be expensive, especially for high-resolution displays or very large screens.

**Examples:**
*   Large-scale outdoor advertising billboards.
*   Scoreboards in stadiums.
*   High-end cinema screens.
*   "Mini-LED" backlighting for LCD TVs (a subset of LED technology).

**Advantages:**
*   Exceptional brightness.
*   True blacks and infinite contrast ratio (for DVLED).
*   Fast response times.
*   Good color reproduction.
*   Long lifespan.

**Disadvantages:**
*   High cost for high-resolution displays.
*   Can be less energy-efficient than some other technologies when displaying bright content.
*   Individual LEDs can be susceptible to damage if not handled carefully.

---

## 2. Organic Light Emitting Diode (OLED) Displays

**Concept:** OLED displays use organic compounds that emit light when an electric current is passed through them. Each pixel is its own light source.

**How they work:**
*   Consists of a series of organic layers sandwiched between two electrodes.
*   When a voltage is applied, the organic layers emit light.
*   Each pixel can be individually controlled, allowing for precise brightness and color.

**Key Characteristics:**
*   **Brightness:** Can be very bright, but generally not as bright as the brightest DVLED displays.
*   **Color:** Exceptional color accuracy and saturation.
*   **Contrast:** Infinite contrast ratio because black pixels are truly off, emitting no light.
*   **Response Time:** Near-instantaneous response times, eliminating motion blur.
*   **Viewing Angles:** Excellent viewing angles with minimal color shift.
*   **Flexibility:** The organic layers can be made on flexible substrates, leading to curved or rollable displays.
*   **Energy Efficiency:** Very efficient when displaying dark content, as pixels are off. Less efficient when displaying bright, white images.
*   **Lifespan/Burn-in:** Historically, OLEDs were prone to "burn-in" (permanent image retention) due to uneven wear of organic compounds. Modern OLEDs have significantly improved in this regard.

**Examples:**
*   Smartphones (e.g., Apple iPhones, Samsung Galaxy).
*   High-end televisions.
*   Smartwatches.
*   Some premium laptop screens.

**Advantages:**
*   Infinite contrast ratio.
*   Incredibly fast response times.
*   Excellent viewing angles.
*   Vibrant colors.
*   Thin and flexible form factors are possible.
*   Energy efficient for dark scenes.

**Disadvantages:**
*   Potential for burn-in (though greatly reduced in modern displays).
*   Can be more expensive than LCDs.
*   Peak brightness might be lower than high-end DVLED.
*   Susceptible to degradation from prolonged exposure to very bright static images.

---

## 3. Liquid Crystal Display (LCD) Displays

**Concept:** LCDs do not emit light themselves. Instead, they use a backlight (historically CCFL, now predominantly LED) to illuminate a layer of liquid crystals. These crystals twist and untwist to block or allow light to pass through color filters, creating the image.

**How they work:**
1.  **Backlight:** A light source (LED or CCFL) provides illumination.
2.  **Polarizing Filters:** Two polarizing filters are placed on either side of the liquid crystal layer.
3.  **Liquid Crystal Layer:** Liquid crystals, when an electric voltage is applied, change their orientation. This orientation controls how light passing through them is polarized.
4.  **Color Filters:** A layer of red, green, and blue sub-pixels filters the light to create colored pixels.
5.  **Second Polarizing Filter:** This filter is oriented perpendicular to the first. The degree to which the liquid crystals have twisted the light determines how much light passes through this second filter.

**Key Characteristics:**
*   **Brightness:** Can be very bright due to powerful backlights.
*   **Color:** Good color reproduction, but typically not as wide a gamut as OLED or high-end LED.
*   **Contrast:** Limited by the backlight. Even when pixels are supposed to be black, some light can leak through, resulting in less deep blacks and lower contrast ratios compared to OLED.
*   **Response Time:** Can vary significantly. Older LCDs had slower response times, leading to motion blur. Modern gaming monitors have significantly improved this.
*   **Viewing Angles:** Can suffer from color and brightness shifts when viewed from extreme angles.
*   **Energy Efficiency:** Generally good, especially with LED backlighting.
*   **Cost:** Relatively affordable and widely available.

**Types of Backlighting (Important for LCDs):**
*   **Edge-lit:** LEDs are placed along the edges of the display, and a light guide panel diffuses the light. Thinner designs, but can have less uniform brightness.
*   **Direct-lit (or Full-Array):** LEDs are placed directly behind the entire panel. Allows for better uniformity and "local dimming" (where zones of LEDs can be dimmed or brightened independently), improving contrast.
*   **Mini-LED:** A more advanced form of direct-lit using thousands of very small LEDs, allowing for much finer control and significantly improved contrast and HDR performance.

**Examples:**
*   Computer monitors.
*   Most televisions.
*   Laptops.
*   Tablets.

**Advantages:**
*   Lower cost compared to OLED and DVLED.
*   Widely available.
*   Good brightness.
*   No risk of burn-in.
*   Thin designs are possible (especially with edge-lit).

**Disadvantages:**
*   Limited contrast ratio and less deep blacks compared to OLED.
*   Potential for backlight bleed or clouding.
*   Viewing angles can be an issue on some models.
*   Response times can still be a concern for high-motion content on lower-end models.

---

## 4. Plasma Display Panel (PDP) Displays

**Concept:** Plasma displays use small cells containing ionized gases (plasma) that emit light when an electric voltage is applied.

**How they work:**
1.  **Plasma Cells:** The screen is made up of millions of tiny cells, each containing a mixture of noble gases (like neon and xenon) and a small amount of mercury.
2.  **Electrodes:** Each cell has tiny electrodes that apply an electric voltage.
3.  **Ionization:** The voltage excites the gas, creating a plasma, which emits ultraviolet (UV) light.
4.  **Phosphor Coating:** The inner surface of each cell is coated with a phosphorescent material.
5.  **Light Emission:** The UV light strikes the phosphor coating, causing it to emit visible light (red, green, or blue).
6.  **Image Formation:** By controlling the voltage to each cell, the brightness and color of each sub-pixel are determined.

**Key Characteristics:**
*   **Brightness:** Good brightness, but typically less than modern LED-backlit LCDs or DVLED.
*   **Color:** Very good color reproduction and wide color gamut.
*   **Contrast:** Excellent contrast ratios, producing deep blacks by turning off individual cells completely.
*   **Response Time:** Very fast response times, excellent for motion.
*   **Viewing Angles:** Excellent, very wide viewing angles with minimal color shift.
*   **Lifespan/Burn-in:** Prone to "burn-in" from static images. Also had a shorter lifespan compared to other technologies.
*   **Energy Efficiency:** Generally less energy-efficient than LCDs, especially when displaying bright content.
*   **Weight & Thickness:** Typically heavier and thicker than LCDs.

**Examples:**
*   Older generation large-screen televisions.
*   High-end displays in the early 2000s and mid-2010s.

**Advantages:**
*   Excellent contrast ratio and deep blacks.
*   Very fast response times.
*   Wide viewing angles.
*   Good color accuracy.

**Disadvantages:**
*   **No longer widely manufactured.**
*   Prone to burn-in.
*   Lower energy efficiency.
*   Heavier and thicker designs.
*   Can produce a slight "buzzing" sound.
*   Limited peak brightness compared to newer technologies.

---

## 5. Field Emission Display (FED) Displays

**Concept:** FEDs are similar in concept to Cathode Ray Tube (CRT) displays but are much thinner and more energy-efficient. They use an array of tiny electron emitters to bombard phosphor dots, making them glow.

**How they work:**
1.  **Electron Emitters:** Each pixel contains millions of microscopic electron emitters (e.g., carbon nanotubes, Spindt tips) that release electrons when a voltage is applied.
2.  **Vacuum:** The display is enclosed in a vacuum to allow electrons to travel unimpeded.
3.  **Anode:** An anode with a high voltage attracts the electrons.
4.  **Phosphor Dots:** Behind the front glass, there are phosphor dots (red, green, blue) that emit light when struck by electrons.
5.  **Image Formation:** By controlling the voltage to the emitters and the focusing electrodes, the intensity and direction of the electron beams are managed to create the image.

**Key Characteristics:**
*   **Brightness:** Can achieve high brightness levels.
*   **Color:** Excellent color reproduction, similar to CRTs.
*   **Contrast:** Very high contrast ratios, similar to CRTs, as black areas have no electron emission.
*   **Response Time:** Extremely fast response times, no motion blur.
*   **Viewing Angles:** Excellent, wide viewing angles.
*   **Energy Efficiency:** More energy-efficient than CRTs for similar brightness levels.
*   **Lifespan/Burn-in:** Prone to phosphor degradation and can be susceptible to burn-in.
*   **Manufacturing Complexity:** Complex and expensive to manufacture consistently.

**Examples:**
*   **Limited commercial success.** While researched and developed, they haven't achieved widespread market adoption for consumer displays.
*   Some niche applications or prototypes exist.

**Advantages:**
*   Excellent picture quality (brightness, contrast, color).
*   Very fast response times.
*   Wide viewing angles.
*   Thinner and lighter than CRTs.

**Disadvantages:**
*   **No longer commercially viable for mainstream display markets.**
*   High manufacturing costs.
*   Susceptible to burn-in and phosphor aging.
*   Vacuum containment can be a challenge.

---

## 6. Reflective Displays

**Concept:** Unlike emissive displays (like OLED, LED, Plasma, FED) or transmissive displays (like LCDs which use a backlight), reflective displays do not generate their own light. Instead, they use ambient light to illuminate the display surface.

**How they work:**
*   The display surface is designed to reflect ambient light.
*   Pixels are controlled to either reflect light (appear bright) or absorb light (appear dark), or to display color.
*   Common mechanisms involve:
    *   **Electrophoretic Displays (EPD):** Microcapsules containing charged black and white particles. Applying an electric field moves the particles to the surface to create an image.
    *   **Cholesteric Liquid Crystals:** These crystals change their orientation and color when heated or exposed to an electric field.

**Key Characteristics:**
*   **Brightness:** Dependent on ambient light. In bright conditions, they can be very readable. In low light, they are not visible.
*   **Color:** Can reproduce color, but often with muted tones and lower saturation compared to emissive displays.
*   **Contrast:** Generally lower contrast ratios.
*   **Response Time:** Typically very slow.
*   **Viewing Angles:** Excellent, perfect viewing angles as there's no light source to shift.
*   **Energy Efficiency:** Extremely energy efficient, as they only consume power when the image is changing.
*   **Durability:** Can be very robust.
*   **Readability:** Excellent in direct sunlight, similar to paper.

**Examples:**
*   **E-readers** (e.g., Amazon Kindle, Kobo) – primarily use Electrophoretic Displays.
*   Some digital signage that needs to be readable in bright sunlight.
*   Wearable devices (e.g., Pebble watches).
*   Some smart cards.

**Advantages:**
*   Extremely low power consumption (often zero power when displaying a static image).
*   Excellent readability in bright sunlight.
*   Paper-like appearance, easy on the eyes.
*   No backlight required.
*   No burn-in.

**Disadvantages:**
*   Requires ambient light to be visible.
*   Very slow refresh rates, unsuitable for video or fast motion.
*   Limited color reproduction and vibrancy.
*   Lower contrast ratios.

---

### Comparison of Display Technologies:

| Feature          | LED (DVLED)          | OLED                 | LCD (LED Backlit)   | Plasma (Obsolete)    | FED (Obsolete/Niche) | Reflective (EPD)      |
| :--------------- | :------------------- | :------------------- | :------------------ | :------------------- | :------------------- | :-------------------- |
| **Light Source** | Emissive LEDs        | Emissive Organic LEDs | Backlit (LED/CCFL)  | Emissive Plasma      | Emissive Electron Beam | Reflective Ambient Light |
| **Black Levels** | Excellent (Pixels off) | Perfect (Pixels off) | Good (Zone dimming) | Excellent (Cells off)| Excellent (No emission) | N/A (Absorbs light)   |
| **Contrast Ratio** | Very High            | Infinite             | Good to Very High   | Very High            | Very High            | Low to Moderate       |
| **Brightness**   | Very High            | High                 | Very High           | High                 | High                 | Dependent on Ambient Light |
| **Response Time**| Very Fast            | Instantaneous        | Fast to Very Fast   | Very Fast            | Very Fast            | Very Slow             |
| **Viewing Angles**| Very Good            | Excellent            | Good to Very Good   | Excellent            | Excellent            | Perfect               |
| **Color Gamut**  | Excellent            | Excellent            | Good to Very Good   | Very Good            | Excellent            | Moderate              |
| **Energy Eff.**  | Good                 | Excellent (Dark) / Fair (Bright) | Good                | Fair                 | Good                 | **Excellent**         |
| **Burn-in Risk** | Very Low             | Low (Improved)       | None                | High                 | Moderate             | None                  |
| **Thickness**    | Variable             | Very Thin            | Thin                | Moderate             | Moderate             | Thin                  |
| **Cost**         | High                 | High                 | Moderate            | High (when available)| Very High            | Low                   |
| **Primary Use**  | Billboards, Cinemas | Smartphones, TVs     | TVs, Monitors, Laptops | TVs (Older)          | Niche applications   | E-readers, Signage    |

---

### Important Points to Remember:

*   **Emissive vs. Transmissive vs. Reflective:** Understand the fundamental difference: emissive displays generate light, transmissive displays use a backlight to pass light, and reflective displays use ambient light.
*   **OLED vs. LCD:** The key difference is that OLED pixels are self-emissive, leading to perfect blacks and infinite contrast, while LCDs rely on a backlight which can cause light bleed.
*   **LED is often a backlight:** Be aware that "LED TV" usually means an LCD TV with an LED backlight. Direct View LED (DVLED) is a different technology where each pixel is an LED.
*   **Plasma is largely obsolete:** While it offered excellent picture quality, it was superseded by more efficient and advanced technologies like OLED and improved LCDs.
*   **FEDs are niche/experimental:** They offer CRT-like quality but faced significant manufacturing hurdles.
*   **Reflective displays excel in specific use cases:** Their low power consumption and sunlight readability make them ideal for e-readers and certain signage, but they are unsuitable for video.
*   **Trade-offs exist:** No single display technology is perfect for all applications. Each has its own set of advantages and disadvantages.

---

### Practice Questions and Exercises:

**1. Multiple Choice:**
Which display technology offers an infinite contrast ratio and instantaneous response times?
a) LCD
b) Plasma
c) OLED
d) Reflective Display

**2. Short Answer:**
Briefly explain the primary difference between how an LCD and an OLED display produces an image.

**3. Comparison:**
List three advantages of OLED displays over traditional LCD displays.

**4. Application:**
For a device intended for reading books outdoors in direct sunlight with minimal battery consumption, which display technology would be most suitable and why?

**5. True or False:**
All "LED TVs" are fundamentally different from LCD TVs because they do not use liquid crystals. (True/False)

---

### Answers:

**1. Multiple Choice:**
c) OLED

**2. Short Answer:**
An LCD display uses a backlight that shines through liquid crystals and color filters to create an image. OLED displays use organic compounds in each pixel that emit their own light when an electric current is applied, allowing for individual pixel control.

**3. Comparison:**
Three advantages of OLED over LCD:
*   Infinite contrast ratio (perfect blacks).
*   Faster response times (no motion blur).
*   Wider viewing angles with less color shift.
*   Potentially thinner and more flexible designs.

**4. Application:**
A **Reflective Display** (specifically an Electrophoretic Display or EPD) would be most suitable. This is because:
*   **Low Power Consumption:** They only use power when the image changes, making them ideal for minimal battery usage.
*   **Sunlight Readability:** They rely on ambient light, making them highly readable in direct sunlight, similar to paper.
*   **Eye Comfort:** They have a paper-like appearance, which is comfortable for long reading sessions.

**5. True or False:**
**False**. Most "LED TVs" are actually LCD TVs that use LEDs as their backlight source. True Direct View LED (DVLED) displays are different.