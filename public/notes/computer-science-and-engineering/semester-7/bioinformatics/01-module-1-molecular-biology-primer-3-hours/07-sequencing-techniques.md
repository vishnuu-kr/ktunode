---
title: "Sequencing techniques"
subject: "BIOINFORMATICS"
module: "Module 1: Molecular Biology Primer (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c159"
status: "completed"
scrapedAt: "2026-05-20T17:00:54.386Z"
---
# BIOINFORMATICS - Module 1: Molecular Biology Primer

## Topic: Sequencing Techniques (3 Hours)

---

### **Introduction to DNA Sequencing**

DNA sequencing is the process of determining the order of nucleotides (Adenine (A), Guanine (G), Cytosine (C), and Thymine (T)) within a DNA molecule. This fundamental technique is crucial for understanding genetic information, identifying mutations, and driving advancements in various fields like medicine, agriculture, and evolutionary biology.

---

### **Learning Outcomes**

By the end of this topic, you should be able to:

*   **LO1:** Understand the historical evolution of DNA sequencing techniques.
*   **LO2:** Explain the principles and methodologies of Sanger sequencing (dideoxy sequencing).
*   **LO3:** Describe the principles and methodologies of Next-Generation Sequencing (NGS) technologies.
*   **LO4:** Compare and contrast the advantages and disadvantages of Sanger sequencing and NGS.
*   **LO5:** Discuss common applications of DNA sequencing.

---

### **1. Historical Evolution of DNA Sequencing Techniques**

*   **Early Approaches (Pre-1970s):**
    *   **Chemical Degradation Methods:** These were laborious and not widely used for routine sequencing. They involved chemical treatments to break down DNA at specific bases, and then analyzing the resulting fragments.
    *   **Example:** The **Maxam-Gilbert sequencing** method (1977) was one of the first widely used methods. It relied on specific chemical reactions to cleave DNA at particular bases (G, A+G, C+T, C).

*   **The Breakthrough: Sanger Sequencing (1977)**
    *   Developed by Frederick Sanger and colleagues.
    *   Revolutionized the field by providing a more efficient and accurate way to sequence DNA.
    *   Initially used radioactive labeling and gel electrophoresis.

*   **The Rise of Next-Generation Sequencing (NGS) (Mid-2000s onwards)**
    *   Marked a paradigm shift from "one read at a time" to "millions of reads at a time."
    *   Enabled high-throughput, cost-effective sequencing of entire genomes.
    *   Various platforms emerged, each with unique chemistries and workflows.

---

### **2. Sanger Sequencing (Dideoxy Sequencing)**

*   **Key Concept:** Chain termination method. It relies on the incorporation of modified nucleotides (dideoxynucleotides) that lack a hydroxyl group at the 3' position, thereby preventing further DNA elongation.

*   **Principle:**
    1.  **DNA Template:** A single-stranded DNA molecule to be sequenced.
    2.  **Primer:** A short, known DNA sequence that anneals to the template and provides a starting point for DNA synthesis.
    3.  **DNA Polymerase:** An enzyme that synthesizes new DNA strands.
    4.  **dNTPs (Deoxynucleoside Triphosphates):** The normal building blocks of DNA (dATP, dGTP, dCTP, dTTP).
    5.  **ddNTPs (Dideoxynucleoside Triphosphates):** Modified nucleotides (ddATP, ddGTP, ddCTP, ddTTP). Each ddNTP is labeled with a different fluorescent dye.

*   **Methodology:**
    1.  **Reaction Setup:** A mixture containing the DNA template, primer, DNA polymerase, a low concentration of all four dNTPs, and a high concentration of one type of ddNTP (each in a separate reaction tube or with a unique fluorescent label).
    2.  **DNA Synthesis:** DNA polymerase starts synthesizing a new DNA strand complementary to the template, using the primer as a starting point.
    3.  **Chain Termination:** Occasionally, a ddNTP is incorporated instead of a dNTP. Since ddNTPs lack the 3'-OH group, DNA synthesis stops at that point.
    4.  **Fragment Generation:** This results in a collection of DNA fragments of varying lengths, each ending with a specific ddNTP.
    5.  **Separation:** The fragments are then separated by size using **gel electrophoresis**. Shorter fragments migrate faster than longer fragments.
    6.  **Detection:**
        *   **Traditional (Radioactive):** Fragments were separated on polyacrylamide gels, and the bands were detected using autoradiography.
        *   **Automated (Fluorescent):** Each ddNTP is labeled with a different fluorescent dye. As fragments pass through a detector (e.g., capillary electrophoresis), the fluorescent signal is read, indicating the terminal nucleotide.

*   **Output:** A chromatogram (electropherogram) where peaks of different colors represent the different nucleotides at each position.

*   **Example:** Imagine sequencing a short DNA strand: `5'-ATGCGT-3'`. A Sanger reaction might produce fragments like:
    *   `...TAGC A` (terminating at A)
    *   `...TAG T` (terminating at T)
    *   `...TAGC G` (terminating at G)
    *   `...TAGCGC A` (terminating at A)
    These fragments, when separated by size and detected, reveal the sequence.

*   **Important Point:** Sanger sequencing typically produces reads of ~500-1000 base pairs (bp).

---

### **3. Next-Generation Sequencing (NGS)**

*   **Key Concept:** Massively parallel sequencing. NGS technologies allow the simultaneous sequencing of millions or billions of DNA fragments.

*   **General Workflow (Common across many NGS platforms):**
    1.  **Library Preparation:**
        *   **DNA Fragmentation:** Genomic DNA is broken into smaller fragments (e.g., 100-500 bp).
        2.  **Adapter Ligation:** Short, known DNA sequences called adapters are ligated to the ends of the DNA fragments. These adapters contain sequences necessary for binding to the sequencing platform and for amplification.
    3.  **Amplification (Clonal Amplification):** The adapter-ligated fragments are amplified to create clusters of identical DNA molecules. This increases the signal strength for detection.
        *   **Methods:** Emulsion PCR (e.g., Ion Torrent), Bridge PCR (e.g., Illumina).
    4.  **Sequencing:** The amplified DNA clusters are sequenced using various chemistries.
    5.  **Data Analysis:** Raw sequence reads are processed, aligned to a reference genome (if available), and analyzed for variations or other biological questions.

*   **Major NGS Platforms and Methodologies:**

    *   **Illumina Sequencing (Sequencing by Synthesis - SBS):**
        *   **Principle:** Fluorescently labeled reversible terminator nucleotides are incorporated one by one. After each incorporation, the fluorescent signal is detected, and the terminator and dye are cleaved, allowing the next nucleotide to be added.
        *   **Methodology:**
            1.  DNA fragments are attached to a flow cell surface.
            2.  Bridge PCR amplifies fragments into clusters.
            3.  Cycle of extension: Labeled dNTPs are added, and the polymerase incorporates the correct one.
            4.  Fluorescence is detected.
            5.  Dye and terminator are cleaved.
            6.  Repeat for the next base.
        *   **Advantages:** High accuracy, high throughput, relatively low cost per base.
        *   **Disadvantages:** Shorter read lengths (typically 50-300 bp, though longer read variants exist), requires a reference genome for alignment.
        *   **Example:** Used for whole-genome sequencing, RNA sequencing (RNA-Seq), exome sequencing.

    *   **Pacific Biosciences (PacBio) SMRT Sequencing (Single Molecule, Real-Time):**
        *   **Principle:** Sequencing of individual DNA molecules in real-time as they are synthesized by a polymerase. Each nucleotide has a fluorescent label on its phosphate chain.
        *   **Methodology:**
            1.  DNA polymerase is immobilized at the bottom of a ZMW (Zero-Mode Waveguide).
            2.  DNA template is loaded into the ZMW with primer and polymerase.
            3.  Labeled nucleotides diffuse into the ZMW.
            4.  When a nucleotide is incorporated by the polymerase, the fluorescent signal is detected for a brief period before the dye is cleaved off.
        *   **Advantages:** Very long reads (tens to hundreds of kilobases - kb), can detect DNA modifications (e.g., methylation) directly.
        *   **Disadvantages:** Higher error rate per base compared to Illumina (though this is improving and can be addressed with consensus sequencing), lower throughput than Illumina.
        *   **Example:** De novo genome assembly, phasing of haplotypes, full-length transcript sequencing.

    *   **Oxford Nanopore Technologies (ONT):**
        *   **Principle:** DNA or RNA passes through a nanopore embedded in a membrane. As each nucleotide passes through, it disrupts an electrical current across the pore, and this disruption pattern is specific to the base.
        *   **Methodology:**
            1.  DNA/RNA is loaded onto a flow cell containing nanopores.
            2.  A motor protein helps control the movement of the DNA/RNA through the pore.
            3.  As bases pass through, they cause characteristic changes in the electrical current.
        *   **Advantages:** Extremely long reads (can be megabases - Mb), portable (e.g., MinION device), can sequence RNA directly, can detect DNA modifications.
        *   **Disadvantages:** Higher error rate per base compared to Illumina and PacBio (though accuracy is improving rapidly), data analysis can be more complex.
        *   **Example:** Rapid pathogen detection, real-time sequencing, de novo assembly of complex genomes.

    *   **Ion Torrent Sequencing:**
        *   **Principle:** Detects the release of a hydrogen ion (pH change) when a nucleotide is incorporated into a growing DNA strand.
        *   **Methodology:**
            1.  DNA fragments are amplified via emulsion PCR.
            2.  Sequencing occurs on a semiconductor chip.
            3.  Sequences of dNTPs are washed over the chip one at a time.
            4.  When a nucleotide is incorporated, it releases a hydrogen ion, which changes the pH and is detected by the chip.
        *   **Advantages:** Faster run times, cheaper instrument costs, no optics needed.
        *   **Disadvantages:** Can have issues with homopolymer regions (e.g., AAAAA) due to inaccurate detection of multiple incorporated bases in a single cycle.
        *   **Example:** Targeted sequencing, microbial sequencing.

*   **Important Point:** NGS revolutionized genomics by enabling rapid, large-scale DNA sequencing at a significantly lower cost per base.

---

### **4. Comparison: Sanger Sequencing vs. NGS**

| Feature           | Sanger Sequencing                               | Next-Generation Sequencing (NGS)                                  |
| :---------------- | :---------------------------------------------- | :---------------------------------------------------------------- |
| **Throughput**    | Low (one fragment at a time)                    | High (millions to billions of fragments simultaneously)           |
| **Read Length**   | ~500-1000 bp                                    | Varies: Illumina (~50-300 bp), PacBio (tens to hundreds of kb), ONT (Mb) |
| **Accuracy**      | High per read                                   | High per base (Illumina), moderate to high (PacBio, ONT, improving) |
| **Cost per Base** | High                                            | Low                                                               |
| **Technology**    | Chain termination, gel electrophoresis          | Massively parallel sequencing (SBS, SMRT, Nanopore, etc.)         |
| **Applications**  | Gene sequencing, validation of mutations, small-scale projects | Whole-genome sequencing, exome sequencing, RNA-Seq, epigenomics, metagenomics, de novo assembly |
| **Complexity**    | Relatively simple                               | Complex library preparation and data analysis                     |
| **Sample Input**  | Can be high purity DNA, PCR products            | Often requires fragmentation and library prep                     |

---

### **5. Common Applications of DNA Sequencing**

*   **Genomics:**
    *   **Whole-Genome Sequencing (WGS):** Determining the complete DNA sequence of an organism's genome.
    *   **Whole-Exome Sequencing (WES):** Sequencing only the protein-coding regions of the genome (exons).
    *   **De Novo Genome Assembly:** Sequencing a genome without a reference template, often for newly discovered organisms.

*   **Medical Diagnostics:**
    *   **Identifying Genetic Diseases:** Detecting mutations responsible for inherited disorders (e.g., cystic fibrosis, Huntington's disease).
    *   **Cancer Genomics:** Identifying somatic mutations in tumors to guide treatment decisions.
    *   **Infectious Disease Surveillance:** Sequencing pathogens to track outbreaks and understand their evolution.

*   **Research:**
    *   **Gene Discovery:** Identifying novel genes and their functions.
    *   **Evolutionary Biology:** Studying genetic variation and relationships between species.
    *   **Personalized Medicine:** Tailoring medical treatments based on an individual's genetic makeup.
    *   **Agriculture:** Improving crop yields, disease resistance, and nutritional content.
    *   **Metagenomics:** Sequencing DNA from environmental samples to study microbial communities.
    *   **Transcriptomics (RNA-Seq):** Studying gene expression levels by sequencing RNA.

---

### **Important Points to Remember**

*   **Sanger sequencing** is excellent for sequencing individual genes or validating specific variants due to its high accuracy and simpler workflow for small projects.
*   **NGS** is essential for large-scale projects like whole-genome sequencing, transcriptomics, and metagenomics due to its massive throughput and lower cost per base.
*   The choice of sequencing technology depends on the research question, desired read length, throughput requirements, and budget.
*   **Library preparation** is a critical first step in most NGS workflows.
*   **Read length** is a significant differentiator between NGS technologies, with PacBio and ONT offering much longer reads than Illumina, which is advantageous for resolving complex genomic regions and de novo assembly.
*   **Error rates** vary between technologies and are an important consideration for downstream analysis.

---

### **Practice Questions**

1.  What is the fundamental difference between Sanger sequencing and Next-Generation Sequencing in terms of their throughput?
2.  Explain the role of ddNTPs in Sanger sequencing.
3.  Describe the key steps involved in Illumina's "Sequencing by Synthesis" (SBS) method.
4.  What is a significant advantage of PacBio SMRT sequencing compared to Illumina sequencing?
5.  List three common applications of DNA sequencing technologies.
6.  If you needed to sequence a single, known gene to confirm a suspected mutation with high certainty, which sequencing technique would you likely choose and why?
7.  Which NGS technology is known for its portability and ability to generate extremely long reads?

---

### **Answers to Practice Questions**

1.  **Sanger sequencing** sequences one DNA fragment at a time, whereas **NGS** sequences millions or billions of DNA fragments in parallel (massively parallel).
2.  **ddNTPs (dideoxynucleotides)** lack a 3'-hydroxyl group. When incorporated by DNA polymerase during replication, they terminate DNA synthesis because no further phosphodiester bond can be formed. This chain termination is the basis of Sanger sequencing.
3.  Illumina's SBS involves cycles of adding fluorescently labeled reversible terminator nucleotides. After each nucleotide is incorporated and its fluorescence is detected, the dye and terminator are chemically removed, allowing the next cycle of incorporation to begin. This process is done on clusters of DNA fragments.
4.  A significant advantage of PacBio SMRT sequencing is its ability to generate **very long reads** (tens to hundreds of kilobases), which are useful for resolving complex genomic structures and for de novo assembly.
5.  Three common applications of DNA sequencing are:
    *   Identifying genetic mutations for disease diagnosis.
    *   Whole-genome sequencing to study genetic variation.
    *   RNA sequencing (RNA-Seq) to study gene expression.
    *   Pathogen identification and surveillance.
    *   Agricultural applications (crop improvement).
6.  For sequencing a single, known gene to confirm a suspected mutation with high certainty, **Sanger sequencing** would likely be chosen. This is because it offers high accuracy for smaller targets, has a simpler workflow for targeted sequencing, and is often sufficient and more cost-effective for such validation purposes than initiating a full NGS project.
7.  **Oxford Nanopore Technologies (ONT)** is known for its portability (e.g., MinION device) and its ability to generate extremely long reads, which can extend into megabases.
