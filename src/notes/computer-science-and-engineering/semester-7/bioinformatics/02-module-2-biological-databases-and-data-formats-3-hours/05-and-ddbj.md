---
title: "and DDBJ"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c166"
status: "completed"
scrapedAt: "2026-05-20T17:01:03.450Z"
---
# Bioinformatics: Module 2 - Biological Databases and Data Formats

## Topic: GenBank and DDBJ

**Learning Outcomes:**

*   Understand the purpose and scope of GenBank and DDBJ.
*   Identify the types of biological data stored in GenBank and DDBJ.
*   Describe the accession number system used in GenBank and DDBJ.
*   Explain how to search and retrieve data from GenBank and DDBJ.
*   Compare and contrast GenBank and DDBJ.

---

### 1. Introduction to Biological Databases

Biological databases are organized collections of biological data. They are essential tools for bioinformatics research, enabling scientists to store, retrieve, and analyze vast amounts of information about genes, proteins, genomes, and other biological entities.

*   **Purpose:**
    *   **Data Archiving:** Securely store experimental results and sequences.
    *   **Data Sharing:** Facilitate the global dissemination of biological information.
    *   **Data Analysis:** Provide a foundation for comparative genomics, functional annotation, and evolutionary studies.
    *   **Discovery:** Aid in identifying new genes, proteins, and biological pathways.

*   **Types of Biological Data:**
    *   Nucleotide sequences (DNA, RNA)
    *   Protein sequences
    *   3D protein structures
    *   Gene expression data
    *   Metabolic pathways
    *   Taxonomic information
    *   Literature references

---

### 2. GenBank: A Comprehensive Nucleotide Sequence Database

GenBank is a public, annotated collection of all publicly available DNA sequences and their protein translations. It is maintained by the National Center for Biotechnology Information (NCBI) in the United States.

*   **Scope:**
    *   **Comprehensive:** Aims to contain all publicly available DNA sequences.
    *   **Global:** Receives submissions from researchers worldwide.
    *   **Annotated:** Includes detailed information about the sequences, such as gene names, protein functions, experimental details, and literature citations.

*   **Types of Data Stored:**
    *   **Genomic DNA:** Complete genomes, chromosomes, plasmids, viral genomes.
    *   **mRNA Sequences:** Sequences derived from messenger RNA, representing transcribed genes.
    *   **ESTs (Expressed Sequence Tags):** Single-pass cDNA reads, providing snapshots of gene expression.
    *   **GSSs (Genome Survey Sequences):** Low-pass sequencing of genomic DNA.
    *   **STS (Sequence Tagged Sites):** Unique DNA sequences associated with a specific location on a chromosome.
    *   **Variations:** SNPs (Single Nucleotide Polymorphisms), microsatellites.

*   **Accession Number System:**
    *   **Purpose:** A unique identifier assigned to each sequence record.
    *   **Format:** Typically consists of a combination of letters and numbers.
        *   **Example 1:** `NM_001126112.2` (mRNA)
        *   **Example 2:** `NG_007120.1` (Genomic region)
        *   **Example 3:** `AY851213.1` (Various sources)
    *   **Versioning:** The number after the decimal point indicates the version of the sequence. An increase in the version number signifies a significant update to the sequence.

*   **Searching and Retrieving Data from GenBank:**
    *   **NCBI Nucleotide Database:** The primary interface for searching GenBank.
    *   **Search Terms:** Keywords, gene names, protein names, organism names, accession numbers, sequence motifs.
    *   **Retrieval Formats:**
        *   **FASTA:** A simple text-based format for sequences.
        *   **GenBank Flat File:** Detailed format including annotations, accession number, description, features, and sequence.
        *   **EMBL:** Another common format for sequence data.
        *   **XML:** Extensible Markup Language, for structured data exchange.

*   **Key Features of GenBank Records:**
    *   **LOCUS:** Header line with accession number, definition, organism, molecule type, etc.
    *   **DEFINITION:** A concise description of the sequence.
    *   **ACCESSION:** The primary accession number.
    *   **VERSION:** Accession number with version.
    *   **KEYWORDS:** Terms associated with the sequence.
    *   **SOURCE:** Organism and taxonomic classification.
    *   **ORGANISM:** Formal taxonomic name.
    *   **FEATURES:** Detailed annotation of functional regions within the sequence (e.g., genes, exons, introns, promoters, CDS).
    *   **ORIGIN:** The start of the sequence.
    *   **SEQUENCE:** The nucleotide sequence itself.

---

### 3. DDBJ: DNA Data Bank of Japan

DDBJ (DNA Data Bank of Japan) is another major public repository for DNA sequences, established in Japan. It is part of the International Nucleotide Sequence Database Collaboration (INSDC).

*   **Scope:**
    *   **Comprehensive:** Similar to GenBank, it aims to collect all publicly available DNA sequences.
    *   **Global Collaboration:** Works closely with GenBank and EBI (European Bioinformatics Institute) through INSDC to ensure data consistency and completeness.
    *   **Annotated:** Provides annotations for the sequences.

*   **Types of Data Stored:**
    *   Similar to GenBank, including genomic DNA, mRNA, ESTs, etc.
    *   Emphasis on Japanese contributions to sequence data.

*   **Accession Number System:**
    *   **INSDC Standard:** DDBJ uses the same accession number system as GenBank and EBI, ensuring interoperability.
    *   **Example:** `AK131859.1`

*   **Searching and Retrieving Data from DDBJ:**
    *   **DDBJ Nucleotide Sequence Database:** The primary interface.
    *   **Tools:** Offers similar search capabilities and retrieval formats as GenBank.
    *   **ARSA (Automated Submission System):** DDBJ's system for researchers to submit their sequences.

*   **Key Features of DDBJ Records:**
    *   DDBJ records follow the same INSDC flat file format as GenBank, ensuring consistency.

---

### 4. The International Nucleotide Sequence Database Collaboration (INSDC)

GenBank, DDBJ, and EMBL-EBI are the three main international partners that form the INSDC. This collaboration is crucial for maintaining a unified and globally accessible repository of nucleotide sequence data.

*   **Core Principle:** Data submitted to any of the INSDC partners is mirrored across all three databases within 24 hours.
*   **Benefits:**
    *   **Data Redundancy:** Ensures data availability even if one database experiences issues.
    *   **Global Accessibility:** Researchers can access the same data from their preferred regional partner.
    *   **Harmonization:** Promotes consistent data submission and annotation standards.

---

### 5. Comparing GenBank and DDBJ

While both GenBank and DDBJ serve the same fundamental purpose of archiving and disseminating nucleotide sequence data, there are subtle differences:

| Feature         | GenBank                                     | DDBJ                                        |
| :-------------- | :------------------------------------------ | :------------------------------------------ |
| **Location**    | USA (NCBI)                                  | Japan                                       |
| **Primary Goal**| Comprehensive repository of public DNA sequences | Comprehensive repository of public DNA sequences |
| **Data Source** | Global submissions, strong US contribution | Global submissions, strong Japanese contribution |
| **Underlying Structure** | Part of INSDC, uses same accession numbers | Part of INSDC, uses same accession numbers |
| **Interface/Tools** | NCBI Nucleotide, Entrez                   | DDBJ Nucleotide Database, other tools       |
| **Data Content**| Identical due to INSDC mirroring          | Identical due to INSDC mirroring          |

**Important Note:** For practical purposes, when searching for nucleotide sequences, you can generally use either GenBank (via NCBI) or DDBJ, as the data is mirrored. The choice often depends on personal preference or familiarity with the interface.

---

### 6. Practical Aspects: Searching and Submission

*   **Submission:** Researchers are responsible for submitting their newly determined nucleotide sequences to one of the INSDC partners (GenBank, DDBJ, or EMBL-EBI). This ensures that their data becomes publicly available and contributes to the global knowledge base.
*   **Search Strategies:**
    *   **By Keyword:** Search for organism names, gene names, or protein functions.
    *   **By Accession Number:** Directly retrieve a specific sequence record.
    *   **By Sequence Similarity:** Use tools like BLAST to find sequences similar to a query sequence.
    *   **By Annotation:** Search for sequences with specific features or annotations.

---

### Practice Questions

1.  What is the primary purpose of biological databases like GenBank and DDBJ?
2.  List at least three types of biological data that can be found in GenBank.
3.  Explain the significance of the accession number system. Provide an example of a GenBank accession number.
4.  What is the International Nucleotide Sequence Database Collaboration (INSDC) and why is it important?
5.  Describe one similarity and one difference between GenBank and DDBJ.
6.  If you discover a new gene in *Arabidopsis thaliana* and have its DNA sequence, which database would you submit it to, and why?

---

### Answers to Practice Questions

1.  The primary purpose of biological databases like GenBank and DDBJ is to **archive, share, and provide access to publicly available biological data**, primarily nucleotide and protein sequences, facilitating scientific research and discovery.
2.  Three types of biological data found in GenBank are:
    *   Genomic DNA sequences
    *   mRNA sequences
    *   Expressed Sequence Tags (ESTs)
    *   (Other valid answers include GSSs, STSs, viral genomes, plasmids, etc.)
3.  The accession number is a **unique identifier assigned to each sequence record**. It allows researchers to reliably retrieve specific sequences and track changes or updates to them. An example is `NM_001126112.2`.
4.  The INSDC is a **collaboration between GenBank (NCBI, USA), DDBJ (Japan), and EMBL-EBI (Europe)**. It is important because it ensures that sequence data submitted to any one partner is **mirrored across all three databases**, providing global accessibility, data redundancy, and harmonization of data submission and annotation standards.
5.  **Similarity:** Both GenBank and DDBJ are public repositories for nucleotide sequences, are part of the INSDC, use the same accession number system, and aim to be comprehensive.
    **Difference:** GenBank is based in the USA (NCBI), while DDBJ is based in Japan. This difference is primarily geographical and relates to the origin of submissions, but the data content is identical due to INSDC mirroring.
6.  You would submit the sequence to **one of the INSDC partners: GenBank, DDBJ, or EMBL-EBI**. You would do this to **make your discovery publicly available**, contribute to the scientific knowledge base, and allow other researchers to use and analyze your data. Since the data is mirrored, submitting to any one of them ensures it's accessible globally.

---

### Important Points to Remember

*   **INSDC is Key:** Understand that GenBank, DDBJ, and EMBL-EBI work together under the INSDC umbrella. Data is essentially the same across all three.
*   **Accession Numbers are Unique Identifiers:** Always use accession numbers for precise retrieval.
*   **Annotation is Crucial:** The value of a sequence record lies in its accompanying annotations.
*   **FASTA and GenBank Flat File are Common Formats:** Be familiar with how to read and interpret these.
*   **Submission is a Scientific Responsibility:** Contribute your data to the public domain.
*   **Databases Evolve:** Stay aware of updates and new features in these databases.
