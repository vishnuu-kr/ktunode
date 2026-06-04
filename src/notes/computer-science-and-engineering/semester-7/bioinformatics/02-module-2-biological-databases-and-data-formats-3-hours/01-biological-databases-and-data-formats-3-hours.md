---
title: "Biological Databases and Data Formats (3 hours)"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c162"
status: "completed"
scrapedAt: "2026-05-20T17:01:00.322Z"
---
# Bioinformatics: Module 2 - Biological Databases and Data Formats

## Module Overview

This module introduces the fundamental concepts of biological databases and the various data formats used to store and exchange biological information. Understanding these resources and formats is crucial for any bioinformatics analysis.

**Duration:** 3 hours

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **LO1:** Identify and describe the major types of biological databases.
*   **LO2:** Explain the purpose and importance of biological databases in bioinformatics research.
*   **LO3:** Understand the principles of data organization and retrieval from biological databases.
*   **LO4:** Recognize and differentiate between common biological data formats.
*   **LO5:** Explain the advantages and disadvantages of different data formats.
*   **LO6:** Describe the role of data standards and ontologies in biological data management.

## 1. Biological Databases: A Foundation for Bioinformatics

### 1.1 What are Biological Databases?

Biological databases are systematic collections of biological data that are organized, stored, and managed for efficient retrieval and analysis. They are the bedrock upon which most bioinformatics research is built.

**Key Concepts:**

*   **Systematic Collection:** Data is gathered and organized in a structured manner.
*   **Biological Data:** Encompasses a wide range of information, including DNA sequences, protein sequences, protein structures, gene expression data, metabolic pathways, genetic variations, and literature.
*   **Efficient Retrieval and Analysis:** Databases are designed to allow quick searching, filtering, and downloading of specific data.

### 1.2 Importance of Biological Databases

*   **Data Sharing and Collaboration:** Enable scientists worldwide to access and share valuable biological information.
*   **Hypothesis Generation:** Allow researchers to explore patterns, identify correlations, and formulate new research hypotheses.
*   **Benchmarking and Validation:** Provide reference datasets for validating experimental results and computational methods.
*   **Discovery:** Facilitate the discovery of new genes, proteins, functions, and biological relationships.
*   **Evolutionary Studies:** Store sequence data that is essential for understanding evolutionary relationships between organisms.
*   **Disease Research:** House information on genetic mutations, disease-associated genes, and drug targets.

### 1.3 Types of Biological Databases

Biological databases can be broadly categorized based on the type of data they store and their primary function.

#### 1.3.1 Primary Databases (Sequence Databases)

These databases directly store information from experimental sources, typically sequences, and are curated by the originating researchers or organizations.

*   **Definition:** Contain original experimental data, such as nucleotide and amino acid sequences.
*   **Characteristics:**
    *   High volume of data.
    *   Often managed by major research institutions.
    *   Data is typically submitted directly by researchers.
*   **Examples:**
    *   **NCBI GenBank:** A comprehensive collection of publicly available DNA sequences. It's a central repository for annotated DNA sequences.
        *   **Data Stored:** Nucleotide sequences (DNA, RNA) and their annotated features (genes, exons, introns, regulatory elements).
        *   **Retrieval:** BLAST (Basic Local Alignment Search Tool) is a primary tool for searching GenBank.
    *   **EMBL Nucleotide Sequence Database:** European counterpart to GenBank, storing similar data.
    *   **DDBJ (DNA Data Bank of Japan):** The Japanese repository for nucleotide sequences.
        *   **Note:** GenBank, EMBL, and DDBJ are part of the International Nucleotide Sequence Database Collaboration (INSDC) and exchange data daily.
    *   **UniProt (Universal Protein Resource):** A comprehensive, high-quality, and freely accessible resource of protein sequence and functional information.
        *   **Data Stored:** Protein sequences, functional annotations (e.g., catalytic activity, binding sites), structural information, and literature references.
        *   **Key Sub-databases:**
            *   **UniProtKB/Swiss-Prot:** Manually annotated, high-quality protein entries with extensive functional information. **(Highly curated)**
            *   **UniProtKB/TrEMBL:** Automatically annotated protein entries, representing a larger but less curated dataset. **(Less curated, computationally derived)**
        *   **Retrieval:** Powerful search interface allowing queries based on sequence, protein name, function, taxonomy, etc.

#### 1.3.2 Secondary Databases (Derived Databases)

These databases are derived from primary databases by analyzing and extracting specific information or classifying sequences based on certain criteria.

*   **Definition:** Contain data that has been analyzed, annotated, or classified from primary databases.
*   **Characteristics:**
    *   Often focused on specific biological features or functions.
    *   Provide deeper insights and facilitate comparative studies.
*   **Examples:**
    *   **Pfam:** A large collection of protein families, each represented by multiple sequence alignments and profile hidden Markov models (HMMs).
        *   **Purpose:** Identifies protein domains and families, aiding in functional prediction and evolutionary studies.
        *   **Data Stored:** Protein domain sequences, HMMs, functional descriptions, and evolutionary information.
    *   **SMART (Simple Modular Architecture Research Tool):** Similar to Pfam, but focuses on identifying functionally related protein domains and signaling pathways.
    *   **PROSITE:** A database of protein families and domains, containing patterns and profiles for protein sequence analysis.
    *   **Databases of Protein Structures:**
        *   **PDB (Protein Data Bank):** A worldwide archive of experimentally determined 3D structures of proteins and nucleic acids.
            *   **Data Stored:** Atomic coordinates, experimental methods (X-ray crystallography, NMR, cryo-EM), and associated metadata.
            *   **Importance:** Crucial for understanding protein function, drug design, and protein engineering.
        *   **ASTRAL:** A curated database of protein sequences grouped by structural similarity.
    *   **Databases of Metabolic Pathways:**
        *   **KEGG (Kyoto Encyclopedia of Genes and Genomes):** A comprehensive database that integrates genomic and related molecular data, particularly focusing on biochemical pathways and functional annotations.
            *   **Data Stored:** Genes, proteins, reactions, pathways, molecular networks, and associated information.
            *   **Importance:** Essential for understanding cellular metabolism, gene function, and drug discovery.
        *   **BioCyc:** A collection of Pathway/Genome Databases (PGDBs) for a wide variety of organisms.
    *   **Databases of Genetic Variation:**
        *   **dbSNP (Database of Single Nucleotide Polymorphisms):** A public archive for genetic variation, including SNPs, small insertions/deletions, and other polymorphisms.
            *   **Purpose:** Facilitates the study of genetic associations with diseases and traits.
    *   **Gene Expression Databases:**
        *   **GEO (Gene Expression Omnibus):** A public repository for high-throughput gene expression data, including microarray and next-generation sequencing (NGS) experiments.
            *   **Data Stored:** Raw and processed gene expression data, experimental metadata.
        *   **ArrayExpress:** Similar to GEO, managed by the European Bioinformatics Institute (EBI).

#### 1.3.3 Specialized Databases

These databases focus on very specific types of biological data or biological questions.

*   **Examples:**
    *   **OMIM (Online Mendelian Inheritance in Man):** A comprehensive catalog of human genes and genetic disorders with clinical descriptions and gene-disease relationships.
    *   **TCDB (Transporter Classification Database):** A database of all characterized transport systems in biological membranes.
    *   **Ensembl:** A genome browser and annotation system that provides comprehensive genomic information for a wide range of species.

### 1.4 Data Organization and Retrieval

#### 1.4.1 Relational Databases

Many biological databases are built on relational database management systems (RDBMS).

*   **Definition:** Data is organized into tables with predefined schemas. Tables are linked by common fields (keys).
*   **Key Concepts:**
    *   **Tables:** Collections of related data.
    *   **Columns (Fields):** Attributes of the data.
    *   **Rows (Records):** Individual entries.
    *   **Primary Key:** A column or set of columns that uniquely identifies each row.
    *   **Foreign Key:** A column that refers to the primary key of another table, establishing a link.
*   **Query Language:** SQL (Structured Query Language) is used to retrieve, insert, update, and delete data.
*   **Advantages:** Data integrity, consistency, efficient querying.
*   **Disadvantages:** Can be rigid, may not be ideal for highly unstructured or rapidly changing data.

#### 1.4.2 Non-Relational Databases (NoSQL Databases)

As biological data grows and becomes more complex, NoSQL databases are increasingly being used.

*   **Definition:** Databases that do not adhere to the traditional relational model. They are more flexible in their data structure.
*   **Types:** Key-value stores, document databases, graph databases, column-family stores.
*   **Advantages:** Flexibility, scalability, can handle diverse data types.
*   **Disadvantages:** May lack the same level of data integrity enforcement as relational databases, query capabilities can vary.

#### 1.4.3 Database Access and Querying Tools

*   **Web Interfaces:** Most biological databases provide user-friendly web interfaces for searching and browsing data.
*   **APIs (Application Programming Interfaces):** Allow programmatic access to database content, enabling automated data retrieval and analysis.
*   **Command-Line Tools:** For power users, command-line interfaces and specific tools are available.
*   **Search Engines:**
    *   **BLAST (Basic Local Alignment Search Tool):** A fundamental algorithm for sequence similarity searching. It compares a query sequence against a database to find homologous sequences.
        *   **Variants:** BLASTn (nucleotide-nucleotide), BLASTp (protein-protein), BLASTx (translated nucleotide-protein), tBLASTn (translated protein-nucleotide), tBLASTx (translated nucleotide-translated nucleotide).
    *   **FASTA:** Another algorithm for sequence similarity searching.
    *   **HMMER:** Used for searching protein sequence databases using profile hidden Markov models (HMMs), particularly useful for identifying protein families and domains.

**Important Point:** Understanding the specific search tools and query capabilities of each database is crucial for effective data retrieval.

## 2. Biological Data Formats

Biological data is stored and exchanged in various file formats. Choosing the appropriate format is essential for compatibility with different software and analysis pipelines.

### 2.1 Sequence Data Formats

#### 2.1.1 FASTA Format

*   **Description:** A simple and widely used text-based format for representing nucleotide and protein sequences.
*   **Structure:**
    *   Starts with a single-line description (header line) that begins with a ">" symbol.
    *   The rest of the line is a sequence identifier and optional description.
    *   Subsequent lines contain the sequence itself, which can be split into multiple lines.
*   **Example (DNA):**
    ```fasta
    >gi|532357|gb|U73287.1|HUMHBB Human beta globin gene
    AGGTGCAGGCTGCCTATCAGAAAGGTTCTTTGTTCCACCCTTTGGGGATTCCTGCCCAGAAAGGTC
    AGGTGCAGGCTGCCTATCAGAAAGGTTCTTTGTTCCACCCTTTGGGGATTCCTGCCCAGAAAGGTC
    ```
*   **Example (Protein):**
    ```fasta
    >sp|P02672|HBB_HUMAN Hemoglobin subunit beta - Homo sapiens (Human)
    MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFASFGNLSSPTAILGN
    ```
*   **Advantages:** Simple, human-readable, widely supported.
*   **Disadvantages:** Limited metadata, no explicit information about sequence quality or experimental details.

#### 2.1.2 FASTQ Format

*   **Description:** A text-based format commonly used for storing raw sequencing data from next-generation sequencing (NGS) platforms. It includes the sequence and its associated quality scores.
*   **Structure:** Each record consists of four lines:
    1.  Sequence identifier (starts with "@").
    2.  The raw sequence letters.
    3.  A plus sign ("+") on a line by itself (can be followed by an identifier, usually the same as line 1).
    4.  Quality scores for each base in the sequence, encoded using ASCII characters.
*   **Example:**
    ```fastq
    @SEQ_ID
    GNDKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSNGKSN
    +
    !!!''*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#$*&'#
    ```
    *   **Quality Score Encoding:** The ASCII characters represent Phred quality scores. Higher ASCII values indicate higher quality. The most common encoding is ASCII 33 (Phred+33).
*   **Advantages:** Includes sequence quality information, essential for downstream analysis of raw sequencing reads.
*   **Disadvantages:** Larger file size compared to FASTA, less human-readable without tools.

#### 2.1.3 GenBank Flat File Format

*   **Description:** A comprehensive format used by GenBank to store annotated nucleotide sequences. It includes a wealth of information beyond just the sequence.
*   **Structure:** Contains various fields, including:
    *   `LOCUS`: Sequence name, type, length, molecule type, division, modification date.
    *   `DEFINITION`: Description of the sequence.
    *   `ACCESSION`: Unique accession number.
    *   `KEYWORDS`: Relevant keywords.
    *   `SOURCE`: Organism and location.
    *   `FEATURES`: Annotated biological features (genes, exons, CDS, etc.) with their locations and descriptions.
    *   `ORIGIN`: The nucleotide sequence itself.
*   **Advantages:** Rich in metadata and annotations, provides a detailed view of the sequence and its features.
*   **Disadvantages:** Can be verbose, less straightforward for simple sequence retrieval compared to FASTA.

#### 2.1.4 EMBL Format

*   **Description:** Similar to GenBank format, used by the EMBL database. It also stores detailed annotations.
*   **Structure:** Also contains fields like `ID`, `AC` (Accession), `DE` (Description), `SQ` (Sequence), and `FT` (Features).

#### 2.1.5 UniProtKB/Swiss-Prot Format (Entry Format)

*   **Description:** The detailed format of UniProtKB/Swiss-Prot entries, providing extensive functional and structural information about proteins.
*   **Structure:** Uses specific lines with two-letter codes to categorize information:
    *   `ID`: Protein accession and identifier.
    *   `DE`: Protein name.
    *   `GN`: Gene name.
    *   `OS`: Organism species.
    *   `OC`: Organism classification.
    *   `FT`: Feature table (e.g., active site, transmembrane region, phosphorylation site).
    *   `SQ`: Sequence information.
    *   `CC`: Comments.
    *   `DR`: Cross-references to other databases.
*   **Advantages:** Highly detailed and curated, provides rich biological context.
*   **Disadvantages:** Very verbose, designed for human reading and specific database tools.

#### 2.1.6 Multi-FASTA Format

*   **Description:** A FASTA file containing multiple sequences, each with its own header line.
*   **Use Case:** Useful for storing a set of related sequences for comparative analysis.

### 2.2 Structure Data Formats

#### 2.2.1 PDB (Protein Data Bank) Format

*   **Description:** The standard format for storing experimentally determined 3D structures of biological macromolecules.
*   **Structure:** A free-format file where each line starts with a record type keyword (e.g., `HEADER`, `ATOM`, `HETATM`, `TER`, `END`).
    *   `ATOM` and `HETATM` records contain atomic coordinates (x, y, z), atom name, residue name, chain identifier, residue sequence number, etc.
*   **Example (partial):**
    ```pdb
    HEADER    PROTEIN OF UNKNOWN FUNCTION                                    12-APR-23   7GZQ
    ATOM      1  N   MET A   1      25.488  23.568  -4.083  1.00 10.00           N
    ATOM      2  CA  MET A   1      26.591  22.660  -3.510  1.00 10.00           C
    ATOM      3  C   MET A   1      25.997  21.258  -3.036  1.00 10.00           C
    TER       4      MET A   1      25.997  21.258  -3.036  1.00 10.00           C
    END
    ```
*   **Advantages:** Contains detailed 3D coordinate information, widely supported by molecular visualization software.
*   **Disadvantages:** Can be very large, not ideal for simple sequence analysis.

#### 2.2.2 mmCIF (macromolecular Crystallographic Information File) Format

*   **Description:** A more modern and comprehensive format for macromolecular structural data, designed to overcome some limitations of PDB format.
*   **Structure:** Uses a self-describing dictionary-based approach, providing more structured and detailed information.
*   **Advantages:** More robust, can store more diverse information than PDB.
*   **Disadvantages:** Less human-readable than PDB, requires specialized software.

### 2.3 Other Common Data Formats

#### 2.3.1 BAM/SAM Format (Sequence Alignment Map/Binary Alignment Map)

*   **Description:** Used to store sequence alignments, typically from NGS reads against a reference genome.
    *   **SAM (Sequence Alignment Map):** Human-readable text format.
    *   **BAM (Binary Alignment Map):** Compressed binary version of SAM, more efficient for storage and processing.
*   **Structure (SAM):** A tab-delimited file with 11 fields, including:
    1.  QNAME (Query template NAME)
    2.  FLAG
    3.  RNAME (Reference sequence NAME)
    4.  POS (Leftmost POSition of the alignment)
    5.  MAPQ (MAPping Quality)
    6.  CIGAR (CIGAR string for the alignment)
    7.  RNEXT (Reference sequence NAME of the next segment)
    8.  PNEXT (Leftmost POSition of the next segment)
    9.  TLEN (Template LENgth)
    10. SEQ (Query SEQUENCE)
    11. QUAL (Query QUALity)
*   **Advantages:** Efficient for storing large-scale alignment data, supports detailed information about read mapping and quality.
*   **Disadvantages:** Requires specific tools for processing.

#### 2.3.2 VCF (Variant Call Format)

*   **Description:** A standard text format for storing genetic variations, including SNPs, insertions, deletions, and structural variants.
*   **Structure:** Header lines starting with "##" followed by tab-delimited data lines. Each data line describes a single variant.
    *   **Fields:** CHROM (chromosome), POS (position), ID (variant identifier), REF (reference allele), ALT (alternative allele), QUAL (quality), FILTER (filtering status), INFO (additional information), FORMAT (format of genotype information), SAMPLE (genotype information for samples).
*   **Advantages:** Standardized way to represent genetic variation, widely used in genomics.
*   **Disadvantages:** Can be complex to parse for detailed genotype information.

#### 2.3.3 GFF/GTF (General Feature Format/Gene Transfer Format)

*   **Description:** Used to describe the features of genomic regions, such as genes, exons, CDS, and regulatory elements.
    *   **GFF:** More general.
    *   **GTF:** A stricter version of GFF with additional attributes specifically for gene annotation.
*   **Structure:** Typically 9 tab-delimited columns:
    1.  SeqName (e.g., chromosome name)
    2.  Source (e.g., gene prediction program)
    3.  Feature (e.g., gene, exon, CDS)
    4.  Start
    5.  End
    6.  Score
    7.  Strand (+ or -)
    8.  Phase (for CDS features)
    9.  Attributes (key-value pairs)
*   **Advantages:** Useful for annotating genomic regions, interoperable with genome browsers.
*   **Disadvantages:** Attributes can be formatted differently, leading to parsing challenges.

### 2.4 Advantages and Disadvantages of Data Formats

| Format     | Advantages                                                                    | Disadvantages                                                              | Common Use Cases                                                                    |
| :--------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **FASTA**  | Simple, human-readable, widely supported.                                     | Limited metadata, no quality information.                                  | Storing sequences for BLAST, general sequence representation.                         |
| **FASTQ**  | Includes sequence and quality scores, essential for raw NGS data.             | Larger file size, less human-readable.                                     | Raw sequencing reads from NGS platforms.                                            |
| **GenBank**| Rich in annotations and metadata, detailed feature information.               | Verbose, can be complex for simple sequence retrieval.                     | Storing annotated nucleotide sequences, detailed genomic information.               |
| **PDB**    | Contains 3D atomic coordinates, widely supported by visualization tools.      | Large file size, not for sequence analysis.                                | Storing protein and nucleic acid 3D structures.                                     |
| **BAM/SAM**| Efficient for alignment data, stores mapping quality and details.           | Requires specialized tools for processing.                                 | Storing NGS read alignments to a reference genome.                                  |
| **VCF**    | Standardized for genetic variation, detailed variant information.             | Complex genotype parsing can be challenging.                               | Representing SNPs, insertions, deletions, and structural variants.                  |
| **GFF/GTF**| Useful for genomic annotation, interoperable with genome browsers.            | Attribute formatting can vary, leading to parsing issues.                  | Annotating genes, exons, CDS, and other genomic features.                           |

**Important Point:** The choice of data format depends on the specific biological data and the analysis being performed.

## 3. Data Standards and Ontologies

### 3.1 Data Standards

*   **Definition:** Agreed-upon formats and protocols that ensure consistency, interoperability, and data quality across different databases and software.
*   **Importance:**
    *   **Interoperability:** Allows data from different sources to be easily exchanged and integrated.
    *   **Reproducibility:** Ensures that analyses can be repeated and yield consistent results.
    *   **Data Quality:** Promotes accuracy and completeness of biological data.
*   **Examples:**
    *   **MIAME (Minimum Information About a Microarray Experiment):** A standard for reporting microarray data.
    *   **MINSEQE (Minimum Information About a High-Throughput Sequencing Experiment):** A standard for reporting high-throughput sequencing data.
    *   **PSI MI (Proteomics Standards Initiative Molecular Interaction):** Standards for molecular interaction data.

### 3.2 Ontologies

*   **Definition:** A formal representation of knowledge within a domain, consisting of concepts, their properties, and the relationships between them. Ontologies provide a controlled vocabulary and a structured way to describe biological entities and processes.
*   **Importance:**
    *   **Semantic Interoperability:** Enables machines to understand the meaning of biological data.
    *   **Data Annotation:** Facilitates consistent and accurate annotation of biological data.
    *   **Knowledge Discovery:** Allows for reasoning and inference over biological knowledge.
    *   **Standardized Terminology:** Reduces ambiguity and improves clarity in scientific communication.
*   **Examples:**
    *   **Gene Ontology (GO):** A widely used ontology that describes gene and gene product functions across three domains: biological process, molecular function, and cellular component.
        *   **Example GO Terms:**
            *   **Biological Process:** "DNA replication"
            *   **Molecular Function:** "ATP binding"
            *   **Cellular Component:** "Mitochondrion"
    *   **Sequence Ontology (SO):** Provides a standardized vocabulary for describing sequence features.
    *   **Human Phenotype Ontology (HPO):** Describes phenotypic abnormalities encountered in human disease.

**Important Point:** Ontologies are crucial for creating semantically rich biological datasets that can be queried and analyzed in a meaningful way.

---

## Practice Questions

**1. Multiple Choice:**

Which of the following databases is primarily a repository for protein sequences and their functional annotations?
a) NCBI GenBank
b) PDB (Protein Data Bank)
c) UniProt
d) GEO (Gene Expression Omnibus)

**2. Short Answer:**

Explain the difference between primary and secondary biological databases, providing one example for each.

**3. True or False:**

The FASTQ format is used for storing experimentally determined 3D structures of proteins.

**4. Identification:**

What are the advantages of using the BAM format over the SAM format for storing sequence alignments?

**5. Scenario:**

You have just performed a next-generation sequencing experiment and have raw reads. Which data format would be most appropriate for storing this raw data, and why?

---

## Answers to Practice Questions

**1. Multiple Choice:**
*   **Answer:** c) UniProt
    *   **Explanation:** UniProt is the Universal Protein Resource, a comprehensive database for protein sequences and functional information. GenBank stores nucleotide sequences, PDB stores 3D structures, and GEO stores gene expression data.

**2. Short Answer:**
*   **Primary Databases:** Contain original, experimental data directly submitted by researchers. They serve as raw data repositories.
    *   **Example:** NCBI GenBank (for nucleotide sequences), UniProtKB/Swiss-Prot (for manually curated protein sequences).
*   **Secondary Databases:** Contain analyzed, annotated, or classified data derived from primary databases. They provide focused information and insights.
    *   **Example:** Pfam (for protein families and domains), KEGG (for metabolic pathways).

**3. True or False:**
*   **Answer:** False
    *   **Explanation:** The PDB (Protein Data Bank) format is used for storing experimentally determined 3D structures. FASTQ is used for raw sequencing reads.

**4. Identification:**
*   **Answer:** The BAM format is a compressed binary version of the SAM format. Its advantages include:
    *   **Reduced File Size:** Makes storage and transfer more efficient, especially for large datasets.
    *   **Faster Processing:** Binary format is generally faster for computers to read and process than text-based SAM files.

**5. Scenario:**
*   **Answer:** The **FASTQ** format would be most appropriate.
    *   **Explanation:** FASTQ files are specifically designed to store raw sequencing reads from next-generation sequencing (NGS) platforms. Crucially, they contain not only the DNA or RNA sequence itself but also the associated quality scores for each base. This quality information is vital for downstream analysis steps like read trimming, filtering, and error correction, which are essential for the accurate interpretation of NGS data.

---

## Important Points to Remember

*   **Databases are the backbone:** Understanding the purpose and content of major biological databases is fundamental for any bioinformatics task.
*   **Format matters:** Choose data formats that are compatible with your analysis tools and preserve the necessary information (e.g., quality scores in FASTQ for NGS data).
*   **FASTA and FASTQ are sequence essentials:** FASTA for clean sequences, FASTQ for raw sequencing reads with quality.
*   **PDB for 3D:** PDB is the standard for protein and nucleic acid structures.
*   **BAM/SAM for alignments:** Essential for mapping NGS reads to reference genomes.
*   **Standards and Ontologies:** Drive data interoperability, consistency, and semantic understanding in biology. GO is a prime example of a crucial ontology.
*   **Cross-referencing:** Databases often cross-reference each other (e.g., UniProt links to PDB, GO terms), creating a connected web of biological knowledge.
*   **Data curation:** Distinguish between manually curated (e.g., Swiss-Prot) and automatically generated data, as quality and annotation depth can vary significantly.
