---
title: "Genomic and Sequence Data Formats"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c163"
status: "completed"
scrapedAt: "2026-05-20T17:01:01.030Z"
---
# BIOINFORMATICS: Module 2 - Biological Databases and Data Formats

## Topic: Genomic and Sequence Data Formats

---

### **1. Introduction to Genomic and Sequence Data Formats**

*   **What are they?**
    *   Standardized ways of representing biological sequences (DNA, RNA, protein) and associated genomic information.
    *   Essential for storing, sharing, and analyzing vast amounts of biological data.
    *   Allow for interoperability between different software and databases.

*   **Why are they important?**
    *   **Data Management:** Efficient storage and retrieval of massive datasets.
    *   **Data Sharing:** Enables researchers worldwide to exchange and collaborate on biological information.
    *   **Data Analysis:** Provides a consistent input for various bioinformatics tools and algorithms.
    *   **Reproducibility:** Ensures that analyses can be replicated by others.

*   **Types of Biological Sequences:**
    *   **DNA (Deoxyribonucleic Acid):** The genetic blueprint of life. Bases: Adenine (A), Guanine (G), Cytosine (C), Thymine (T).
    *   **RNA (Ribonucleic Acid):** Involved in protein synthesis and gene regulation. Bases: Adenine (A), Guanine (G), Cytosine (C), Uracil (U).
    *   **Protein (Peptide):** Chains of amino acids, responsible for most biological functions. 20 standard amino acids, each represented by a single letter code.

---

### **2. Common Sequence Data Formats**

This section will cover the fundamental formats used to store and represent biological sequences.

#### **2.1 FASTA Format**

*   **Description:** The most widely used and simplest format for representing biological sequences.
*   **Structure:**
    *   Starts with a single-line description (header) that begins with a `>` symbol.
    *   The rest of the header line contains an identifier and optionally a description of the sequence.
    *   Following the header line is the sequence data itself, which can span multiple lines.
    *   Sequence lines should ideally have the same length.
    *   Sequence data typically uses standard IUPAC codes for nucleotides and amino acids.
*   **Key Features:**
    *   **Simplicity:** Easy to create and parse.
    *   **Flexibility:** Accommodates DNA, RNA, and protein sequences.
    *   **Widely Supported:** Almost all bioinformatics tools accept FASTA input.
*   **Example:**

    ```fasta
    >Seq1_Human_GeneX_CDS
    ATGGCGTACGTAGCTAGCTAGCGCGCTAGCTAGCGCGCGCGCGCGCGCGCGCGC
    GCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC
    GCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC
    GCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC
    GCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC
    GCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC
    TGA
    >Seq2_BacteriumY_16S_rRNA
    AGTGTCAGCAGCCGCGGTAATACCGGATAGGCTTAGGTTGCGCATCGATGCGA
    TCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAG
    CTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGC
    TAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCT
    AGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTA
    ```

*   **Important Points to Remember:**
    *   The `>` symbol *must* be at the beginning of the header line.
    *   Sequence lines should not contain whitespace or special characters, except for sequence characters.
    *   Multiple FASTA entries can be in a single file.

#### **2.2 FASTQ Format**

*   **Description:** A widely used format for storing sequencing data, especially from high-throughput sequencing technologies (e.g., Illumina). It contains both the sequence and its associated quality scores.
*   **Structure:** Each record consists of four lines:
    1.  `@` followed by a sequence identifier and optional description.
    2.  The raw sequence letters (e.g., `ACGT`).
    3.  `+` optionally followed by the same sequence identifier and description as line 1.
    4.  The quality scores for each base in the sequence, represented by ASCII characters. The quality score for each base is encoded using a Phred score system.
*   **Key Features:**
    *   **Sequence and Quality:** Crucial for downstream analysis, as it indicates the reliability of each base call.
    *   **Phred Scores:** A numerical score that represents the probability of an incorrect base call. Higher Phred scores indicate higher confidence.
    *   **Common in NGS:** The standard for raw data from next-generation sequencing.
*   **Example:**

    ```fastq
    @SEQ_ID: 1:N:0:CGATCG
    AGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCT
    +
    !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMN
    @SEQ_ID_2: 2:N:0:CGATCG
    GATTACAGATTACAGATTACAGATTACAGATTACAGATTACAGATTACAGA
    +
    ##################################################
    ```
    *(Note: The quality scores in the example are simplified for clarity. Real FASTQ quality scores are often more varied and depend on the sequencing technology.)*

*   **Important Points to Remember:**
    *   The number of quality scores in line 4 must match the number of bases in line 2.
    *   The quality scores are encoded using ASCII characters, where different characters represent different Phred scores.
    *   Tools use quality scores to filter low-quality reads and bases.

#### **2.3 GenBank Format**

*   **Description:** A comprehensive format that stores detailed information about a genetic sequence, including its annotations (e.g., gene names, protein products, functional regions, experimental evidence). Developed by the National Center for Biotechnology Information (NCBI).
*   **Structure:**
    *   **LOCUS:** Basic information like accession number, definition, division, and sequence length.
    *   **DEFINITION:** A more detailed description of the sequence.
    *   **ACCESSION:** Unique identifier for the sequence.
    *   **VERSION:** Accession number with version information.
    *   **KEYWORDS:** Descriptive terms associated with the sequence.
    *   **SOURCE:** Organism and organism classification.
    *   **ORGANISM:** Detailed organism information.
    *   **REFERENCE:** Bibliographic citations.
    *   **FEATURES:** This is the most important section, detailing all annotated features (genes, CDS, introns, exons, promoters, etc.) with their locations and qualifiers.
    *   **ORIGIN:** The starting point of the sequence.
    *   **SEQUENCE:** The actual DNA or RNA sequence.
*   **Key Features:**
    *   **Rich Annotations:** Provides a wealth of biological context beyond just the sequence.
    *   **Standardized:** Adheres to NCBI's standards, ensuring consistency.
    *   **Complex:** Contains a lot of metadata, making it more complex than FASTA.
*   **Example (Simplified Snippet):**

    ```genbank
    LOCUS       ABC12345               100 bp    DNA     linear   PRI 01-JAN-1990
    DEFINITION  Hypothetical protein gene.
    ACCESSION   ABC12345
    VERSION     ABC12345.1
    KEYWORDS    hypothetical protein.

    SOURCE      Organism:  Escherichia coli strain K12
                Taxonomy:  Bacteria; Proteobacteria; Gammaproteobacteria; Enterobacterales; Enterobacteriaceae; Escherichia.
    ORGANISM    Escherichia coli strain K12
                Bacteria; Proteobacteria; Gammaproteobacteria; Enterobacterales; Enterobacteriaceae; Escherichia.

    FEATURES             Location/Qualifiers
         source          1..100
                         /organism="Escherichia coli strain K12"
         gene            10..90
                         /gene="hypo_gene"
         CDS             10..90
                         /gene="hypo_gene"
                         /product="hypothetical protein"
                         /translation="MNKLL..."
    ORIGIN
        1 ggatccacta gctagctagc tagctagcgc tatgcatgta ctagctagct agctagcagc
       61 tagctagctc tagctagctc tagctagcta
    //
    ```

*   **Important Points to Remember:**
    *   Each feature has a specific location (start and end coordinates) on the sequence.
    *   Qualifiers provide detailed information about each feature.
    *   The `//` symbol marks the end of a GenBank entry.

#### **2.4 EMBL Format**

*   **Description:** Similar to GenBank format, it's another primary repository for DNA and RNA sequences, maintained by the European Molecular Biology Laboratory (EMBL) – now part of the European Bioinformatics Institute (EBI).
*   **Structure:** Very similar to GenBank format, with differences mainly in the terminology and order of some fields, though they are largely compatible.
*   **Key Features:**
    *   **Comprehensive Annotations:** Also provides detailed annotations.
    *   **Historical Significance:** One of the earliest sequence databases.
*   **Compatibility:** Most tools that read GenBank can also read EMBL.

#### **2.5 UniProt Format (Often represented as FASTA with UniProt accession)**

*   **Description:** While UniProt is a protein sequence database, its entries are often downloaded or displayed in FASTA format for compatibility with other tools. However, the UniProt database itself has a rich XML format and provides extensive annotation.
*   **Key Features of UniProt Entries:**
    *   **Accession Number:** Unique identifier (e.g., P04637).
    *   **Protein Name:** Common and systematic names.
    *   **Gene Name:** Name of the gene encoding the protein.
    *   **Organism:** Species of origin.
    *   **Function:** Detailed description of the protein's role.
    *   **Domain/Family:** Classification of protein domains and families.
    *   **PTM (Post-Translational Modifications):** Information about modifications after synthesis.
    *   **Interactions:** Known protein-protein interactions.
    *   **Sequence:** The amino acid sequence.

*   **Example (UniProt in FASTA format):**

    ```fasta
    >P04637|TP53_HUMAN Tumor protein p53 OS=Homo sapiens GN=TP53 PE=1 SV=1
    MEEPQSDPSVEPPLSQETFSDLWKLLPENNVLSPLPSQAMDDLMLSPDDIEQWFTEDPGPDEAPRMPEAAPPVAPAPAAPTPAAPAPAPAPSWPLSSSVPSQKTYQGSYGFRLGFLHSGTAKSVTCTYSPALNKMFCQLAKTC
    ```

*   **Important Points to Remember:**
    *   UniProt is a primary source for protein information.
    *   The UniProt FASTA header often contains crucial identifiers like accession numbers.

#### **2.6 VCF (Variant Call Format)**

*   **Description:** A standardized text file format for storing gene sequence variations (mutations), typically from next-generation sequencing data.
*   **Structure:**
    *   **Header:** Starts with `##` lines describing the file's format, reference genome, and other metadata.
    *   **CHROM:** Chromosome or scaffold name.
    *   **POS:** Position on the chromosome (1-based).
    *   **ID:** Variant identifier (e.g., rs12345).
    *   **REF:** Reference allele at the POS.
    *   **ALT:** Alternative allele(s) observed.
    *   **QUAL:** Phred-scaled quality score.
    *   **FILTER:** Indicates if the variant passed filters.
    *   **INFO:** Additional information (e.g., allele frequency, variant type).
    *   **FORMAT:** Specifies the data included in the per-sample columns.
    *   **SAMPLES:** Per-sample genotypes and other data.
*   **Key Features:**
    *   **Genomic Variation:** Specifically designed for mutations.
    *   **Comprehensive:** Stores position, alleles, quality, and sample-specific information.
    *   **Essential for Genomics:** Crucial for variant analysis, population genetics, and clinical genomics.
*   **Example (Simplified):**

    ```vcf
    ##fileformat=VCFv4.2
    ##source=my_variant_caller
    ##reference=file:///path/to/human_hg19.fasta
    #CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	SAMPLE1	SAMPLE2
    chr1	1000	.	A	G	50.0	PASS	DP=100;AF=0.5	GT:GQ	0/1:99	1/1:99
    chr1	2000	rs123	T	C,A	80.0	PASS	DP=150;AF=0.75,0.25	GT:GQ	0/1:98	0/2:95
    ```

*   **Important Points to Remember:**
    *   `REF` and `ALT` alleles define the variation.
    *   `GT` (Genotype) in the sample columns indicates the alleles present in that individual.
    *   VCF is a text-based format and can be quite large for whole-genome data.

---

### **3. Genomic Data Formats**

While sequence formats focus on linear sequences, genomic data formats often deal with entire chromosomes, assemblies, and associated information.

#### **3.1 BED (Browser Extensible Data) Format**

*   **Description:** A simple tab-delimited format used to define regions or features on a genome. Commonly used with genome browsers like the UCSC Genome Browser.
*   **Structure:**
    *   Minimum 3 columns: `chrom`, `chromStart`, `chromEnd`.
    *   `chromStart`: 0-based start coordinate.
    *   `chromEnd`: 0-based end coordinate (the base at `chromEnd` is *not* included).
    *   Optional columns: `name`, `score`, `strand`, `thickStart`, `thickEnd`, `itemRgb`.
*   **Key Features:**
    *   **Region Definition:** Excellent for marking genomic locations of genes, exons, SNPs, etc.
    *   **Genome Browser Integration:** Widely supported by visualization tools.
    *   **Customizable:** Can be extended with more columns.
*   **Example:**

    ```bed
    chr1	10000	11000	GeneA	0	+
    chr1	12000	12500	Exon1_GeneA	500	+
    chr2	5000	6000	GeneB	0	-
    ```

*   **Important Points to Remember:**
    *   **0-based start, 0-based end (exclusive):** This is crucial for correct interpretation. A region from 10 to 20 means bases 10, 11, ..., 19.
    *   `strand` is often represented as `+`, `-`, or `.`.

#### **3.2 GFF/GTF (General Feature Format / Gene Transfer Format)**

*   **Description:** Tab-delimited formats used to describe genomic features and their annotations. GFF is a general standard, while GTF is a specific type of GFF with more structured attribute fields, often used for gene and transcript annotations.
*   **Structure:** Typically 9 columns:
    1.  `seqname`: Sequence name (e.g., chromosome).
    2.  `source`: Program or database that generated the feature.
    3.  `feature`: Type of feature (e.g., gene, exon, CDS).
    4.  `start`: Start position (1-based).
    5.  `end`: End position (1-based).
    6.  `score`: Score indicating confidence or significance.
    7.  `strand`: Strand (`+`, `-`, or `.`).
    8.  `frame`: Phase for coding features (0, 1, 2, or `.`) indicating the reading frame.
    9.  `attribute`: Key-value pairs describing the feature (e.g., `gene_id "XYZ"; transcript_id "ABC";`).
*   **Key Features:**
    *   **Hierarchical Annotations:** Can represent nested features (e.g., genes containing exons).
    *   **Detailed Attributes:** Provides rich information about each feature.
    *   **Gene Annotation Standard:** GTF is commonly used for gene models.
*   **Example (GTF):**

    ```gtf
    chr1	HAVANA	gene	11869	14409	.	+	.	gene_id "ENSG000001"; gene_name "GNAI2";
    chr1	HAVANA	transcript	11869	14409	.	+	.	gene_id "ENSG000001"; transcript_id "ENST000001"; gene_name "GNAI2"; transcript_name "GNAI2-001";
    chr1	HAVANA	exon	11869	12227	.	+	.	gene_id "ENSG000001"; transcript_id "ENST000001"; gene_name "GNAI2"; transcript_name "GNAI2-001"; exon_number "1";
    ```

*   **Important Points to Remember:**
    *   **1-based start, 1-based end (inclusive):** This is the standard for GFF/GTF.
    *   The `attribute` column is crucial for linking features (e.g., which exon belongs to which gene).
    *   GTF has stricter requirements for the `attribute` column compared to GFF3.

#### **3.3 SAM/BAM (Sequence Alignment Map / Binary Alignment Map)**

*   **Description:** Formats used to store sequenced reads aligned to a reference genome. SAM is a human-readable text format, while BAM is its compressed binary equivalent, significantly reducing file size.
*   **Structure (SAM - Simplified):**
    *   Header section (starts with `@`).
    *   Alignment section (tab-delimited):
        *   `QNAME`: Query template's name.
        *   `FLAG`: Bitwise flags indicating alignment properties.
        *   `RNAME`: Reference sequence name.
        *   `POS`: 1-based leftmost mapping of the query.
        *   `MAPQ`: Mapping quality.
        *   `CIGAR`: Compact representation of the alignment (e.g., M for match/mismatch, I for insertion, D for deletion).
        *   `RNEXT`: Name of the next segment in the template.
        *   `PNEXT`: Position of the next segment.
        *   `TLEN`: Template length.
        *   `SEQ`: Query sequence.
        *   `QUAL`: ASCII of base quality.
        *   `OPT`: Optional fields.
*   **Key Features:**
    *   **Alignment Data:** Stores how sequenced reads map to a reference.
    *   **Efficiency:** BAM is highly compressed and indexed for fast access.
    *   **Foundation for NGS Analysis:** Essential for variant calling, gene expression quantification, etc.
*   **Example (SAM snippet):**

    ```sam
    @HD     VN:1.0  SO:coordinate
    @SQ     SN:chr1 LN:249250621
    read1   99      chr1    1500    30      100M    =       2000    -1000   AGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCT
    read2   147     chr1    2000    30      100M    =       1500    1000    TCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGA
    ```

*   **Important Points to Remember:**
    *   BAM is the preferred format for storage and processing due to its efficiency.
    *   SAM tools are used to convert between SAM and BAM, and for indexing.
    *   The CIGAR string is a concise way to describe the alignment.

---

### **4. Key Concepts and Definitions**

*   **Sequence Alphabet:** The set of characters used to represent sequences (e.g., A, C, G, T for DNA; A, C, G, U for RNA; single-letter codes for amino acids).
*   **IUPAC Codes:** Standard abbreviations for ambiguous bases or amino acids (e.g., R = Purine (A or G), N = Any base).
*   **Annotation:** The process of identifying and describing the functional elements within a genomic sequence (e.g., genes, regulatory regions).
*   **Metadata:** Data that describes other data (e.g., the source organism, date of submission, experimental conditions).
*   **Accession Number:** A unique identifier assigned to a biological sequence or entry in a database.
*   **Phred Score:** A measure of the quality of a base call in sequencing data, representing the probability of error.
*   **CIGAR String:** A string in SAM/BAM files that describes the detailed alignment of a read to a reference sequence.

---

### **5. Practice Questions and Exercises**

**Question 1:** What is the primary difference between FASTA and FASTQ formats?
**Answer:** FASTA format stores only the sequence and its identifier, while FASTQ format stores both the sequence and its associated quality scores.

**Question 2:** You are given a file with genomic features. Which format is most likely to be used if it has 9 tab-delimited columns, including sequence name, feature type, start/end positions, strand, and attribute information?
**Answer:** GFF or GTF format.

**Question 3:** If you need to store sequencing reads that have been aligned to a reference genome and want to minimize file size, which format would you choose?
**Answer:** BAM (Binary Alignment Map).

**Question 4:** Explain the meaning of the following BED entry:
`chrX 500 1500 GeneXYZ +`
**Answer:** This entry defines a feature named "GeneXYZ" located on chromosome "chrX" from base position 500 (inclusive, 0-based) to base position 1500 (exclusive, 0-based), and it is located on the forward strand (`+`). The total length of the feature is 1000 bases (1500 - 500).

**Question 5:** What does the `>` symbol signify at the beginning of a line in a FASTA file?
**Answer:** It signifies the start of a new sequence record's header/description line.

**Exercise 1: Convert FASTA to FASTQ (Conceptual)**
Imagine you have a FASTA sequence:
```fasta
>my_read
AGCTAGCT
```
If all bases in this read have a high quality score, what would a corresponding FASTQ entry look like?
**Answer:**
```fastq
@my_read
AGCTAGCT
+
########
```
(Where `#` represents a high quality score character, like `f` or `g` depending on the Phred scale mapping).

**Exercise 2: Identify Format Properties**
Consider the following line:
`chr1 100 200 gene1 0.9 + . . gene_id "gene1"; transcript_id "tx1";`
Which format is this likely from? What does `100 200` represent in terms of base numbering and inclusivity?
**Answer:** This line is likely from GFF or GTF. The coordinates `100 200` represent the start and end positions, which are 1-based and inclusive. Therefore, it covers bases 100, 101, ..., 200.

---

### **6. Important Points to Remember**

*   **Format Choice Matters:** The format you use depends on the type of data and the analysis you intend to perform.
*   **Coordinate Systems:** Be mindful of 0-based vs. 1-based indexing and inclusive vs. exclusive end coordinates, as these vary between formats (e.g., BED vs. GFF/GTF).
*   **File Size and Compression:** BAM is preferred over SAM for large datasets due to its binary nature and efficient compression.
*   **Metadata is Key:** Understand the metadata and annotations provided by formats like GenBank, EMBL, and GTF, as they offer crucial biological context.
*   **Tool Compatibility:** Always check if your chosen bioinformatics tools support the data format you are using.
*   **Quality Scores:** FASTQ is essential for any analysis where read quality is important, such as variant calling.

---
