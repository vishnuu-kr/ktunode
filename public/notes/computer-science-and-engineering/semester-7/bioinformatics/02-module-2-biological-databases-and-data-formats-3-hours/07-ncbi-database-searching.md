---
title: "NCBI- Database Searching"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c168"
status: "completed"
scrapedAt: "2026-05-20T17:01:04.841Z"
---
# Bioinformatics: Module 2 - Biological Databases and Data Formats
## Topic: NCBI Database Searching

---

### **Module Overview**

This module introduces you to the fundamental concepts of biological databases and common data formats used in bioinformatics. We will explore the NCBI (National Center for Biotechnology Information) as a primary resource and learn how to effectively search its vast collection of biological data.

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

1.  **Understand the role of NCBI in bioinformatics:** Explain what NCBI is and its significance as a central repository for biological data.
2.  **Navigate the NCBI website and understand its structure:** Identify the key resources and sections within the NCBI website.
3.  **Perform basic searches using Entrez:** Utilize the Entrez search engine to find specific biological information.
4.  **Apply different search strategies:** Employ various search techniques, including keyword searching, accession numbers, and sequence IDs.
5.  **Interpret search results:** Understand how to read and extract relevant information from NCBI search outputs.
6.  **Utilize specialized NCBI databases:** Recognize and access specific databases within NCBI relevant to different biological entities (e.g., GenBank, PubMed, Protein).
7.  **Understand the concept of BLAST (Basic Local Alignment Search Tool):** Explain the purpose of BLAST and its role in sequence similarity searching.
8.  **Perform basic BLAST searches:** Conduct simple BLAST searches to find similar sequences.

---

## 1. The Role of NCBI in Bioinformatics

### **What is NCBI?**

*   The **National Center for Biotechnology Information (NCBI)** is a division of the National Library of Medicine (NLM) at the National Institutes of Health (NIH) in the United States.
*   It serves as a national resource for molecular biology information, providing a comprehensive collection of biological data and powerful tools for analyzing it.

### **Significance of NCBI:**

*   **Centralized Data Repository:** Houses a vast array of data, including DNA sequences, protein sequences, gene information, scientific literature, and more.
*   **Data Integration:** Connects different types of biological data, allowing for comprehensive analysis.
*   **Tool Development:** Develops and provides essential bioinformatics tools for data analysis (e.g., BLAST).
*   **Research Support:** Facilitates biological research by making data and tools readily accessible.
*   **Standardization:** Promotes standardized data formats and access methods.

---

## 2. Navigating the NCBI Website and its Structure

### **The NCBI Website (ncbi.nlm.nih.gov)**

*   The NCBI website is the primary gateway to all its resources.
*   It features a clean interface with a prominent search bar at the top.

### **Key Resources and Sections:**

*   **Entrez:** The core search and retrieval system for NCBI's integrated databases.
*   **Databases:** A comprehensive list of databases available, categorized by data type.
    *   **Nucleotide Databases:**
        *   **GenBank:** A comprehensive database of publicly available DNA sequences.
        *   **RefSeq:** A curated, non-redundant, and annotated set of sequences for genomic, transcript, and protein regions.
        *   **GEO (Gene Expression Omnibus):** A public repository for high-throughput gene expression data.
        *   **dbSNP:** A database of single nucleotide polymorphisms.
    *   **Protein Databases:**
        *   **Protein (formerly PIR):** Contains protein sequences from various sources.
        *   **RefSeq Proteins:** Curated protein sequences linked to RefSeq genomic regions.
        *   **Conserved Domain Database (CDD):** A collection of protein domains and motifs.
    *   **Literature Databases:**
        *   **PubMed:** A database of biomedical literature, including abstracts and citations from journals.
    *   **Genomics and Gene Databases:**
        *   **Gene:** Provides comprehensive information about specific genes.
        *   **Genome:** Contains assembled genomes and related information.
    *   **Other Important Databases:**
        *   **dbEST:** Database of expressed sequence tags.
        *   **dbBARK:** Database of bacterial resistant genes.
        *   **Sequence Read Archive (SRA):** Stores raw high-throughput sequencing data.
*   **Tools:** A collection of bioinformatics tools, including:
    *   **BLAST (Basic Local Alignment Search Tool):** For sequence similarity searching.
    *   **Primer-BLAST:** For designing primers.
    *   **VectorNTI® Advance™:** For molecular biology workflows.
*   **About NCBI:** Information about NCBI's mission, history, and organization.
*   **Resources:** Links to various services, training materials, and data submission guidelines.

---

## 3. Performing Basic Searches using Entrez

### **Entrez: The Powerhouse of NCBI Searching**

*   **Entrez** is NCBI's integrated information retrieval system that allows users to search and access data from multiple databases simultaneously or individually.
*   It connects related data, making it easier to explore biological information.

### **Basic Search Steps:**

1.  **Access the NCBI website:** `ncbi.nlm.nih.gov`
2.  **Locate the search bar:** At the top of the page.
3.  **Select a database (optional but recommended):** Use the dropdown menu next to the search bar to choose a specific database (e.g., "Nucleotide," "Protein," "PubMed"). If you select "All Databases," Entrez will search across many of them.
4.  **Enter your query:** Type your keywords, accession number, or gene name into the search bar.
5.  **Click "Search":** The results page will display matching entries.

---

## 4. Applying Different Search Strategies

### **Keyword Searching:**

*   **Concept:** Using descriptive words or phrases related to your biological interest.
*   **Examples:**
    *   `human insulin gene`
    *   `E. coli ribosomal RNA`
    *   `viral replication mechanism`
*   **Tips:**
    *   Be specific.
    *   Use synonyms if initial searches are unsuccessful.
    *   Combine keywords with operators like `AND`, `OR`, `NOT`.

### **Searching by Accession Numbers:**

*   **Concept:** Unique identifiers assigned to sequences or data records in NCBI databases.
*   **Types of Accession Numbers:**
    *   **GenBank Accession Numbers:** Typically consist of letters and numbers (e.g., `NM_000510.5` for human beta-globin mRNA). The version number (`.5`) indicates the specific update.
    *   **Protein Accession Numbers:** Similar format (e.g., `NP_000501.1` for human beta-globin protein).
    *   **GI Numbers (Genetic Information Numbers):** Older, unique sequential identifiers (now being phased out in favor of accession numbers with versions).
*   **How to Search:** Enter the accession number directly into the search bar.

### **Searching by Sequence IDs:**

*   **Concept:** Unique identifiers for sequences, often longer and more descriptive than accession numbers, especially for specific sequence submissions or versions.
*   **Examples:**
    *   `AY278488.1` (a specific GenBank record)
    *   `107194260` (a GI number, though less common now)
*   **How to Search:** Enter the sequence ID directly into the search bar.

### **Advanced Search Options (Entrez):**

*   **Field Tags:** Use specific tags to narrow your search to particular fields within a database.
    *   `[Organism]` - Search within the organism field. Example: `insulin [Organism]`
    *   `[Gene Name]` - Search for gene names. Example: `BRCA1 [Gene Name]`
    *   `[Title]` - Search within the title of the record.
    *   `[Author]` - Search for authors in PubMed.
    *   Visit the "Advanced search" page on NCBI for a full list of field tags.
*   **Search History:** Keeps track of your previous searches, allowing you to combine them.
*   **Boolean Operators:**
    *   `AND`: Retrieves records containing both terms.
    *   `OR`: Retrieves records containing either term.
    *   `NOT`: Excludes records containing a specific term.
    *   Example: `("gene expression" OR "transcriptional regulation") AND human [Organism]`

---

## 5. Interpreting Search Results

### **The NCBI Results Page:**

*   After performing a search, you'll see a results page.
*   **Key components:**
    *   **Number of Results:** Total number of matching records.
    *   **Filters/Facets:** Options on the left side to refine your results by database, publication date, organism, etc.
    *   **Result Summary:** A list of records, usually showing the title, organism, and a brief description.
    *   **Accession Number/ID:** The unique identifier for each record.
    *   **Sequence Length:** For sequence databases.
    *   **Links:** To the full record, related sequences, literature, etc.

### **Navigating to a Full Record:**

*   Click on the title or accession number of a record to view its detailed page.

### **Understanding the Full Record (Example: GenBank Record):**

*   **Header:** Contains accession number, version, GI number, definition, primary accession.
*   **Features:** Describes different regions of the sequence (e.g., coding sequences (CDS), exons, promoters, regulatory elements).
*   **Sequence:** The actual nucleotide or amino acid sequence.
*   **References:** Links to associated PubMed citations.
*   **Organism:** Information about the source organism.
*   **Keywords:** Associated terms.
*   **Topology, Division, Length:** Characteristics of the sequence.
*   **Source Database:** Where the data originates from (e.g., GenBank).

---

## 6. Utilizing Specialized NCBI Databases

### **PubMed:**

*   **Purpose:** To search for biomedical literature.
*   **What to find:** Research articles, reviews, conference abstracts.
*   **Search Strategies:** Keyword searching, author names, journal titles.
*   **Example Search:** `CRISPR gene editing mechanism review`

### **GenBank:**

*   **Purpose:** Public archive of DNA sequences.
*   **What to find:** Nucleotide sequences from a wide range of organisms.
*   **Search Strategies:** Keywords, accession numbers, organism names.
*   **Example Search:** `human beta-globin mRNA` (you'll likely get an accession like NM_000510.5)

### **Protein:**

*   **Purpose:** Contains protein sequences.
*   **What to find:** Amino acid sequences from various sources, including translated CDS from GenBank.
*   **Search Strategies:** Keywords, protein names, accession numbers.
*   **Example Search:** `hemoglobin alpha subunit human`

### **Gene:**

*   **Purpose:** Provides comprehensive information about genes.
*   **What to find:** Gene aliases, symbols, chromosome location, associated proteins, pathways, literature links.
*   **Search Strategies:** Gene symbol or name.
*   **Example Search:** `TP53`

### **RefSeq:**

*   **Purpose:** Curated, non-redundant, and annotated set of sequences. Offers a stable and reliable source of genomic, transcript, and protein sequences.
*   **Benefits:** Consistent naming, fewer redundant entries, clear annotation.
*   **How to Access:** Search for sequences and then filter by "RefSeq" on the results page or search directly within RefSeq databases.

---

## 7. Understanding the Concept of BLAST

### **What is BLAST?**

*   **BLAST (Basic Local Alignment Search Tool)** is a fundamental algorithm and suite of tools used to compare a query sequence (DNA or protein) against a database of sequences to find regions of similarity.
*   It's a heuristic search algorithm, meaning it's designed for speed and efficiency, making it suitable for searching large databases.

### **Purpose of BLAST:**

*   **Sequence Similarity Search:** To find sequences in a database that are evolutionarily related to your query sequence.
*   **Gene Identification:** To identify potential genes or proteins based on their sequences.
*   **Functional Annotation:** To infer the potential function of a newly discovered sequence by comparing it to known sequences.
*   **Evolutionary Studies:** To examine evolutionary relationships between sequences.

### **How BLAST Works (Simplified):**

1.  **Word Finding:** BLAST breaks down the query sequence into short "words" (short subsequences).
2.  **Database Search:** It searches the database for sequences containing these words.
3.  **Seeding:** When a match is found, it tries to "extend" this match in both directions to find longer regions of similarity.
4.  **Scoring:** Matches are scored based on the similarity (e.g., number of matches, mismatches, gaps).
5.  **Significance Assessment:** Statistical methods (e.g., E-value) are used to determine if the observed similarity is significant or likely due to chance.

---

## 8. Performing Basic BLAST Searches

### **Accessing BLAST:**

*   Go to the NCBI website (`ncbi.nlm.nih.gov`).
*   Click on the "BLAST" link under the "Tools" section or directly search for "BLAST" on the site.

### **Types of BLAST:**

*   **blastn:** Nucleotide-Nucleotide BLAST.
*   **blastp:** Protein-Protein BLAST.
*   **blastx:** Translated Nucleotide-Protein BLAST (searches protein database with a translated nucleotide query).
*   **tblastn:** Translated Protein-Nucleotide BLAST (searches nucleotide database with a translated protein query).
*   **tblastx:** Translated Nucleotide-Nucleotide BLAST (searches translated nucleotide database with a translated nucleotide query – slower).

### **Steps for a Basic BLAST Search (e.g., blastn):**

1.  **Go to the BLAST homepage.**
2.  **Choose the appropriate BLAST program:** Select `blastn` for nucleotide queries.
3.  **Choose the database:** Select the database you want to search against (e.g., `nr` (non-redundant protein sequences) or `nt` (nucleotide collections)). For a nucleotide query against nucleotide sequences, you'd typically choose `nt` or `GenBank`.
4.  **Enter your query sequence:**
    *   Paste your sequence directly into the "Query Sequence" box.
    *   Alternatively, you can provide an accession number or upload a file.
5.  **Specify other parameters (optional for basic search):**
    *   **Organism:** Filter results by organism.
    *   **Program Selection:** Sometimes you can choose specific BLAST variants (e.g., `blastn-short` for short sequences).
    *   **More Options:** Advanced settings for scoring, alignments, etc. (usually left at default for basic searches).
6.  **Click the "BLAST" button.**

### **Interpreting BLAST Results:**

*   **Graphical Overview:** A visual representation of the alignment scores, showing the location of matches along the query and database sequences.
*   **Descriptions:** A list of database sequences that match your query, sorted by score.
    *   **Database ID/Accession:** Identifier for the matching sequence.
    *   **Description:** Name and organism of the matching sequence.
    *   **Max Score:** The highest alignment score for a particular database sequence.
    *   **Total Score:** Sum of scores for all alignments to a database sequence.
    *   **Query Cover:** The percentage of the query sequence that is aligned.
    *   **E-value (Expect value):** The number of alignments expected to occur by chance in a database of the given size. **Lower E-values indicate more significant matches.**
    *   **Percent Identity:** The percentage of identical residues in the aligned region.
    *   **Alignment:** The actual alignment of the query and database sequences, showing matches, mismatches, and gaps.

---

## Practice Questions & Exercises

**Question 1:** What is the primary purpose of NCBI in the field of bioinformatics?

**Question 2:** If you are looking for the scientific paper about a specific gene, which NCBI database would you most likely search first?

**Question 3:** You have an accession number `NM_001352544.2`. What type of biological entity does this likely represent, and what NCBI database would be the best place to search for it?

**Question 4:** Explain the difference between searching by keyword and searching by accession number on Entrez. When might you prefer one over the other?

**Question 5:** What is the main function of the BLAST tool?

**Question 6:** If a BLAST search returns an E-value of `1e-50`, what does this indicate about the significance of the match?

**Question 7:** You have a DNA sequence from an unknown organism and want to find similar sequences in a database to predict its function. Which type of BLAST would you use, and which NCBI database would be most appropriate for your search?

---

## Answers to Practice Questions

**Answer 1:** The primary purpose of NCBI is to serve as a national resource for molecular biology information, providing a comprehensive collection of biological data (like DNA sequences, protein sequences, and literature) and powerful tools for analyzing this data. It acts as a central repository and analysis hub for biological research.

**Answer 2:** You would most likely search the **PubMed** database first, as it contains citations and abstracts for biomedical literature.

**Answer 3:** The accession number `NM_001352544.2` likely represents a **messenger RNA (mRNA) sequence** (indicated by the 'NM' prefix). The best NCBI database to search for this would be the **Nucleotide** database (specifically GenBank, or RefSeq if a curated version is preferred).

**Answer 4:**
*   **Keyword Searching:** Uses descriptive terms (e.g., "human insulin gene"). It's good for exploring topics broadly or when you don't have a specific identifier. It can yield many results and may require refinement using filters or advanced operators.
*   **Accession Number Searching:** Uses a unique identifier (e.g., `NM_000510.5`). This is highly specific and will directly retrieve the record associated with that identifier. It's preferred when you know the exact record you're looking for.

**Answer 5:** The main function of the BLAST tool is to perform **sequence similarity searches**. It compares a query sequence (DNA or protein) against a database of sequences to identify homologous or related sequences.

**Answer 6:** An E-value of `1e-50` (which is 0.0000000000000001) indicates a **highly significant match**. It means that you would expect to find a match this good (or better) by chance only once in 10^50 database entries.

**Answer 7:**
*   **Type of BLAST:** You would use **blastn** (Nucleotide-Nucleotide BLAST).
*   **NCBI Database:** The most appropriate database for searching similar nucleotide sequences would be the **Nucleotide** collection (often the `nt` database within Entrez, which includes GenBank).

---

## Important Points to Remember

*   **NCBI is your gateway:** Always start your data retrieval and analysis from the NCBI website (`ncbi.nlm.nih.gov`).
*   **Entrez is key:** Understand how to use Entrez to search across different integrated databases.
*   **Specificity matters:** Use precise keywords, accession numbers, or gene names for efficient searches.
*   **Know your databases:** Familiarize yourself with the core NCBI databases (PubMed, GenBank, Protein, Gene, RefSeq) and their purposes.
*   **BLAST is fundamental:** Master basic BLAST searches to find sequence similarities and infer functions.
*   **E-value is crucial:** Learn to interpret the E-value to assess the statistical significance of BLAST alignments.
*   **Always check the version:** Accession numbers often have version numbers (e.g., `.5`) which indicate updates to the sequence record.

---
This concludes the study notes for NCBI Database Searching. Practice these skills regularly to become proficient in using NCBI resources for your bioinformatics research.
