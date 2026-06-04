---
title: "Discrete model for speech production"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 1: Speech Production :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca4d"
status: "completed"
scrapedAt: "2026-05-20T17:26:48.696Z"
---
# Speech and Audio Processing: Module 1 - Speech Production

## Topic: Discrete Model for Speech Production

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental building blocks of speech production as a discrete process.
*   Identify the key anatomical structures involved in speech production and their respective roles.
*   Explain the different types of speech sounds (vowels and consonants) and how they are generated.
*   Describe the concept of acoustic filtering and its impact on sound.
*   Recognize the limitations of discrete models in representing the continuous nature of speech.

---

### **1. Introduction to Speech Production as a Discrete Process**

Speech production can be viewed as a series of discrete events and states, rather than a completely fluid and continuous flow. This perspective simplifies the complex physiological process into manageable components for analysis and understanding.

**Key Concepts:**

*   **Discrete Events:** Individual actions or configurations of the vocal tract that create distinct sound elements.
*   **States:** Stable configurations of the vocal organs that are maintained for a short period.
*   **Building Blocks:** The fundamental units (phonemes) that are combined to form spoken words.

**Why a Discrete Model?**

*   **Simplification:** Easier to model and analyze the underlying mechanisms.
*   **Phoneme Identification:** Allows for the systematic study of individual speech sounds.
*   **Digital Representation:** Aligns well with digital signal processing techniques used in speech technology.

---

### **2. Anatomical Structures and Their Roles**

The human vocal tract is a sophisticated biological instrument. Several key structures work in concert to produce speech.

**Key Structures:**

*   **Lungs:**
    *   **Role:** Provide the primary source of **airflow** (breath support).
    *   **Mechanism:** Inhale air, then exhale air to drive the vocal folds.
    *   **Importance:** The quantity and force of exhaled air significantly impact loudness and stress.

*   **Larynx (Voice Box):**
    *   **Location:** Situated in the throat, below the pharynx.
    *   **Key Component: Vocal Folds (Vocal Cords):**
        *   **Role:** Act as the **sound source** for most speech sounds.
        *   **Mechanism:** Air from the lungs passes through the glottis (the space between the vocal folds). When the vocal folds vibrate, they create a pulsed airflow, generating **voiced sounds**.
        *   **Types of Vocal Fold Vibration:**
            *   **Voicing:** Vocal folds vibrate (e.g., /b/, /d/, /g/, /z/, /v/, /m/, /n/, vowels).
            *   **Unvoicing:** Vocal folds do not vibrate (e.g., /p/, /t/, /k/, /s/, /f/).
        *   **Pitch Control:** The tension and length of the vocal folds determine the **fundamental frequency (f0)** or pitch of the voice. Tighter, shorter folds produce higher pitches.

*   **Articulators:**
    *   **Role:** Shape the airflow from the larynx to create different speech sounds.
    *   **Key Articulators:**
        *   **Tongue:** The most versatile articulator. Its different parts (tip, blade, back, root) can move to create various constrictions and closures in the oral cavity.
        *   **Lips:** Can be rounded, spread, or brought together to form sounds like /p/, /b/, /m/, /w/, /u/, /i/.
        *   **Teeth:** Can be used in conjunction with the tongue or lips to create fricative sounds (e.g., /f/, /v/, /θ/, /ð/, /s/, /z/).
        *   **Alveolar Ridge:** The bumpy ridge behind the upper front teeth. Tongue contact here forms sounds like /t/, /d/, /n/, /s/, /z/.
        *   **Hard Palate:** The bony roof of the mouth. Tongue contact here forms sounds like /ʃ/, /ʒ/, /tʃ/, /dʒ/, /j/.
        *   **Soft Palate (Velum):** The muscular back part of the roof of the mouth.
            *   **Role in Speech:** Can be raised to block airflow from the nasal cavity (oral sounds) or lowered to allow air to pass through the nose (nasal sounds).
            *   **Velar Sounds:** Tongue back contacts soft palate (e.g., /k/, /g/, /ŋ/).
        *   **Uvula:** The fleshy extension at the back of the soft palate.

**Example:**

*   To produce the sound /p/: The lips are brought together, blocking airflow. Then, they are rapidly opened, releasing the air, and the vocal folds do not vibrate.
*   To produce the sound /m/: The lips are brought together, and the soft palate is lowered, allowing air to flow through the nasal cavity, and the vocal folds vibrate.

---

### **3. Types of Speech Sounds: Vowels and Consonants**

Speech sounds are broadly categorized into vowels and consonants, distinguished by how they are produced.

**3.1. Vowels:**

*   **Definition:** Speech sounds produced with a **relatively open vocal tract**, allowing air to flow freely. The primary modification of the sound comes from the **shaping of the oral cavity** by the tongue and lips.
*   **Key Characteristics:**
    *   **Voiced:** Always produced with vocal fold vibration.
    *   **No significant constriction or obstruction:** Airflow is continuous.
    *   **Sound quality is determined by tongue position and lip rounding.**
*   **Tongue Position Parameters:**
    *   **Height:** How high or low the tongue is in the mouth (e.g., high for /i/ as in "see", low for /a/ as in "father").
    *   **Backness:** How far forward or back the tongue is in the mouth (e.g., front for /i/, back for /u/ as in "too").
*   **Lip Rounding:** The degree to which the lips are rounded (e.g., rounded for /u/, unrounded for /i/).
*   **Example:**
    *   **/i/** (as in "see"): Tongue is high and front, lips are unrounded.
    *   **/a/** (as in "father"): Tongue is low and back, lips are unrounded.
    *   **/u/** (as in "too"): Tongue is high and back, lips are rounded.

**3.2. Consonants:**

*   **Definition:** Speech sounds produced with some **degree of obstruction or constriction** in the vocal tract.
*   **Key Characteristics:**
    *   Can be voiced or unvoiced.
    *   Involve articulators coming together to impede or modify airflow.
*   **Classification of Consonants:**
    *   **Place of Articulation:** Where in the vocal tract the obstruction occurs.
        *   **Bilabial:** Both lips (e.g., /p/, /b/, /m/).
        *   **Labiodental:** Lower lip and upper teeth (e.g., /f/, /v/).
        *   **Dental:** Tongue tip or blade and upper teeth (e.g., /θ/ as in "thin", /ð/ as in "this").
        *   **Alveolar:** Tongue tip or blade and alveolar ridge (e.g., /t/, /d/, /n/, /s/, /z/, /l/, /r/).
        *   **Post-alveolar/Palato-alveolar:** Tongue blade and the area just behind the alveolar ridge (e.g., /ʃ/ as in "she", /ʒ/ as in "measure", /tʃ/ as in "church", /dʒ/ as in "judge").
        *   **Palatal:** Tongue body and hard palate (e.g., /j/ as in "yes").
        *   **Velar:** Tongue back and soft palate (e.g., /k/, /g/, /ŋ/ as in "sing").
        *   **Glottal:** Vocal folds themselves (e.g., /h/ as in "hat").
    *   **Manner of Articulation:** How the obstruction is made or released.
        *   **Stops (Plosives):** Complete closure of the vocal tract, followed by a sudden release of air (e.g., /p/, /b/, /t/, /d/, /k/, /g/).
        *   **Fricatives:** Narrow constriction causing turbulent airflow, producing friction noise (e.g., /f/, /v/, /θ/, /ð/, /s/, /z/, /ʃ/, /ʒ/, /h/).
        *   **Affricates:** A stop followed immediately by a fricative at the same place of articulation (e.g., /tʃ/, /dʒ/).
        *   **Nasals:** Complete oral closure, with the soft palate lowered to allow air to escape through the nasal cavity (e.g., /m/, /n/, /ŋ/).
        *   **Liquids:** A consonant with a partial constriction that allows air to flow over the sides of the tongue.
            *   **Lateral:** Air flows around the sides of the tongue (e.g., /l/).
            *   **Rhotic:** The tongue is often curled or bunched (e.g., /r/).
        *   **Glides (Semivowels):** Similar to vowels but produced with a more rapid transition and less obstruction than typical consonants; they function like consonants at the beginning of syllables (e.g., /j/ as in "yes", /w/ as in "wet").

**Example:**

*   **/p/**: Bilabial stop, unvoiced.
*   **/s/**: Alveolar fricative, unvoiced.
*   **/m/**: Bilabial nasal, voiced.
*   **/l/**: Alveolar lateral, voiced.

---

### **4. Acoustic Filtering: The Vocal Tract as a Filter**

The sound generated by the vocal folds (the "source") is modified by the vocal tract, which acts as an **acoustic filter**. This filtering process shapes the spectrum of the sound, giving it its unique quality.

**Key Concepts:**

*   **Source-Filter Theory:** A fundamental concept in speech production. The source (vocal folds) produces a complex sound (buzzing for voiced sounds). The vocal tract acts as a filter that resonates at certain frequencies, amplifying them and attenuating others.
*   **Resonances (Formants):** The frequencies at which the vocal tract preferentially amplifies sound. These are the **formants**.
    *   **F1:** Corresponds mainly to tongue height (higher tongue = higher F1, lower tongue = lower F1).
    *   **F2:** Corresponds mainly to tongue backness (front tongue = higher F2, back tongue = lower F2).
    *   **F3, F4, etc.:** Higher formants, contribute to the overall timbre.
*   **Vocal Tract Shape and Formants:** Changes in the shape of the vocal tract (due to articulator movement) alter the resonances, thereby changing the perceived vowel sound.

**Example:**

*   For the vowel **/i/** (high front tongue), the vocal tract is narrowed at the front and open at the back. This configuration leads to a relatively **high F1** and a relatively **high F2**.
*   For the vowel **/a/** (low back tongue), the vocal tract is open and relatively uniform. This configuration leads to a relatively **low F1** and a relatively **low F2**.
*   For the vowel **/u/** (high back tongue), the vocal tract is narrowed at the back by lip rounding. This configuration leads to a relatively **low F1** and a relatively **low F2**.

The combination of formant frequencies is what allows us to distinguish between different vowels.

---

### **5. Discrete Model vs. Continuous Speech**

While a discrete model is useful for understanding the building blocks, it's important to acknowledge its limitations when considering the continuous nature of spoken language.

**Limitations of the Discrete Model:**

*   **Coarticulation:** The way a speech sound is produced is influenced by the sounds that precede and follow it. For example, the /t/ in "tea" sounds different from the /t/ in "too" due to the influence of the following vowel. This blending of sounds is a continuous process.
*   **Prosody:** Features like intonation, stress, and rhythm are continuous variations in pitch, loudness, and duration, not discrete events.
*   **Transitions:** The movement between discrete sounds is a continuous process, and these transitions themselves carry phonetic information.
*   **Variability:** Real-world speech exhibits significant variability due to individual differences, speaking style, and speaking rate. A purely discrete model might struggle to capture this richness.

**Bridging the Gap:**

*   Modern speech processing techniques often combine discrete phonetic representations with models that account for continuous variations and coarticulation to achieve more robust and natural speech synthesis and recognition.

---

### **Important Points to Remember:**

*   Speech production is a complex physiological process involving the lungs, larynx, and articulators.
*   The **larynx acts as the sound source** (vibrating vocal folds for voiced sounds), while the **vocal tract acts as an acoustic filter**.
*   Vowels are characterized by an open vocal tract and are distinguished by tongue position and lip rounding, which affect **formant frequencies**.
*   Consonants are characterized by some form of obstruction in the vocal tract, classified by **place** and **manner** of articulation.
*   A discrete model helps us understand the fundamental units of speech (phonemes) and their production mechanisms.
*   However, real speech is continuous, and phenomena like **coarticulation** and **prosody** highlight the limitations of a purely discrete perspective.

---

### **Practice Questions and Exercises:**

**Question 1:**

Which anatomical structure is primarily responsible for generating the fundamental frequency of the voice?

a) Lungs
b) Vocal Folds
c) Tongue
d) Lips

**Answer:** b) Vocal Folds

**Question 2:**

Describe the difference between a vowel and a consonant in terms of vocal tract configuration.

**Answer:** Vowels are produced with an open vocal tract where airflow is relatively unimpeded, with sound quality determined by vocal tract shaping. Consonants are produced with some degree of constriction or obstruction in the vocal tract.

**Question 3:**

Provide an example of a bilabial stop consonant and explain its production.

**Answer:** Example: /p/ (as in "pat"). Production: The lips are brought together to completely block airflow. The velum is raised to prevent air from escaping through the nose. Air pressure builds up behind the closure. The lips are then rapidly opened, releasing the air, and the vocal folds do not vibrate.

**Question 4:**

What are formants, and how are they related to vowel perception?

**Answer:** Formants are the resonant frequencies of the vocal tract. They are amplified frequencies of the sound produced by the vocal folds. The perception of different vowels is largely determined by the pattern of these formant frequencies, particularly F1 and F2, which are influenced by tongue height and backness.

**Question 5:**

Consider the word "street". How might the initial /s/ sound be affected by the following vowel sound /i/? Name the phenomenon responsible for this.

**Answer:** The /s/ sound in "street" will likely be produced with a slightly more forward tongue position due to the influence of the following high front vowel /i/. This phenomenon where the articulation of a speech sound is influenced by adjacent sounds is called **coarticulation**.

---
