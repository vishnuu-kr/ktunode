---
title: "Biological Databases"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c189"
status: "completed"
scrapedAt: "2026-05-20T17:01:27.631Z"
---
# BIOINFORMATICS: Module 4 - R for Bioinformatics

## Topic: Biological Databases

This module focuses on understanding and interacting with biological databases using R. Biological databases are essential resources for storing, organizing, and retrieving vast amounts of biological data, ranging from DNA sequences and protein structures to gene expression profiles and metabolic pathways. R, with its powerful data manipulation and visualization capabilities, serves as an excellent tool for accessing and analyzing this information.

---

### Learning Outcomes:

1.  **Understand the purpose and importance of biological databases in bioinformatics.**
2.  **Identify and describe major types of biological databases (e.g., sequence databases, structure databases, functional databases, pathway databases).**
3.  **Learn how to access biological databases from R using specific packages and functions.**
4.  **Perform basic data retrieval and manipulation from biological databases using R.**
5.  **Visualize data obtained from biological databases using R.**

---

### 1. Purpose and Importance of Biological Databases

Biological databases are the backbone of modern biological research, providing a structured and accessible repository for the ever-increasing volume of experimental data.

*   **Data Storage and Organization:** They house raw experimental data (sequences, structures, expression levels) in a systematic and queryable format.
*   **Data Sharing and Collaboration:** They enable researchers worldwide to access, share, and build upon existing knowledge, fostering collaboration and accelerating discovery.
*   **Information Retrieval and Querying:** They allow users to search for specific data based on various criteria (e.g., gene name, protein sequence, organism, experimental condition).
*   **Data Analysis and Interpretation:** They provide essential data for comparative genomics, evolutionary studies, functional annotation, drug discovery, and hypothesis generation.
*   **Standardization and Curation:** Many databases maintain curated datasets, ensuring data quality, consistency, and adherence to standards.

**Key Concept:** **Data Curation** – The process of organizing, cleaning, and validating biological data to ensure its accuracy, completeness, and usability.

---

### 2. Major Types of Biological Databases

Biological databases can be broadly categorized based on the type of data they store.

#### 2.1. Sequence Databases

These databases store nucleic acid (DNA, RNA) and protein sequences.

*   **Primary Sequence Databases:**
    *   **GenBank (NCBI):** A comprehensive collection of publicly available DNA sequences and their protein translations. It's a foundational database for genetic information.
    *   **EMBL (EBI):** The European Molecular Biology Laboratory's nucleotide sequence database, similar in scope to GenBank.
    *   **DDBJ (NIG):** The DNA Data Bank of Japan, the third major international nucleotide sequence database.
    *   **SWISS-PROT/UniProtKB:** A high-quality, curated protein sequence and functional information database. It's renowned for its annotation quality. UniProtKB is the central hub for protein information.
        *   **Swiss-Prot:** Contains manually annotated and reviewed protein sequences with high-quality functional information.
        *   **TrEMBL:** Contains computationally analyzed protein sequences derived from translations of nucleotide sequences, awaiting manual review.

*   **Secondary Sequence Databases:**
    *   These databases store derived information from sequences, such as protein motifs, domains, families, or signatures.
    *   **Pfam:** A large collection of protein families, each represented by multiple sequence alignments and profile hidden Markov models (HMMs). Useful for predicting protein domains and functions.
    *   **SMART (Simple Modular Architecture Research Tool):** Identifies and analyzes independently folding protein domains and motifs.
    *   **InterPro:** An integrated resource of protein families, domains, and functional sites. It consolidates information from various secondary databases.

**Key Concepts:**
*   **Nucleotide Sequence:** The order of bases (A, T, C, G for DNA; A, U, C, G for RNA).
*   **Amino Acid Sequence (Protein Sequence):** The order of amino acids in a protein chain.
*   **Protein Domain:** A conserved part of a protein sequence that can evolve, function, and exist independently of the rest of the protein.
*   **Profile Hidden Markov Model (HMM):** A probabilistic model used to represent protein families and detect members.

#### 2.2. Structure Databases

These databases store three-dimensional structural information of proteins and other biomolecules.

*   **PDB (Protein Data Bank):** The primary archive for experimentally determined 3D atomic coordinates of biological macromolecules. Data is typically derived from X-ray crystallography, NMR spectroscopy, and cryo-electron microscopy.
*   **CATH (Class, Architecture, Topology, Homologous superfamily):** A hierarchical classification of protein structures based on their structural and sequence relationships.
*   **SCOP (Structural Classification of Proteins):** Another hierarchical classification of protein structures, focusing on evolutionary relationships.

**Key Concepts:**
*   **3D Atomic Coordinates:** The spatial position of each atom in a molecule.
*   **X-ray Crystallography:** A technique used to determine the 3D structure of molecules by analyzing how X-rays diffract off their crystals.
*   **NMR Spectroscopy:** A technique used to determine the 3D structure of molecules in solution.
*   **Cryo-Electron Microscopy (Cryo-EM):** A technique used to determine the 3D structure of large biomolecular complexes.

#### 2.3. Functional Databases

These databases store information about the function of genes, proteins, and other biological entities.

*   **Gene Ontology (GO):** A structured, controlled vocabulary that describes gene and gene product attributes in terms of biological process, molecular function, and cellular component. GO terms are organized in a directed acyclic graph (DAG).
*   **KEGG (Kyoto Encyclopedia of Genes and Genomes):** A database resource for understanding high-level functions and utilities of biological systems, particularly focusing on genes and genomes. It links genomic information with molecular and cellular functions, and then to relevant systems information.
*   **NCBI Gene:** A curated collection of gene-specific information, including gene nomenclature, expression patterns, homology, and related pathways.

**Key Concepts:**
*   **Gene Ontology (GO) Terms:** Standardized terms to describe gene and protein functions (e.g., "ATP binding," "DNA replication," "cytoplasm").
*   **Biological Process:** A series of events accomplished by one or more biological molecules (e.g., "glycolysis").
*   **Molecular Function:** The elemental activity of a gene product (e.g., "enzyme activity," "transporter activity").
*   **Cellular Component:** The part of a cell or extracellular space where a gene product is located (e.g., "nucleus," "plasma membrane").
*   **Pathway:** A series of biochemical reactions that occur in a cell.

#### 2.4. Pathway Databases

These databases focus on metabolic and signaling pathways.

*   **KEGG (Kyoto Encyclopedia of Genes and Genomes):** As mentioned above, KEGG is a major resource for pathways. It provides diagrams of metabolic pathways, signaling pathways, and other cellular processes.
*   **Reactome:** A free, open-access, curated database of pathways and reactions in human biology. It provides detailed information on molecular interactions and events within biological pathways.
*   **BioCarta:** Another pathway database containing curated pathways from scientific literature.

**Key Concept:**
*   **Metabolic Pathway:** A series of chemical reactions catalyzed by enzymes that occur in sequence within a cell.

---

### 3. Accessing Biological Databases from R

R offers several packages to interact with biological databases, allowing for programmatic data retrieval and analysis.

#### 3.1. Bioconductor Project

Bioconductor is a major source of R packages for bioinformatics and computational biology. Many packages are designed to interface with biological databases.

*   **`AnnotationDbi`:** A core package for accessing and using a wide variety of public annotation data, including mappings between different identifiers (e.g., gene symbols to Ensembl IDs).
*   **`biomaRt`:** Provides an interface to the Ensembl and UniProt databases, allowing retrieval of gene, transcript, and protein information.
*   **`GEOquery`:** Enables downloading and processing of data from the Gene Expression Omnibus (GEO) database.
*   **`RCurl` and `XML`:** General-purpose packages for fetching data from URLs and parsing XML/HTML, which can be used for interacting with databases that offer web services.
*   **`rentrez`:** A package for interacting with the NCBI Entrez databases (e.g., PubMed, GenBank, GEO, Protein).

#### 3.2. Using `rentrez` for NCBI Databases

The `rentrez` package is particularly useful for accessing NCBI's vast resources.

**Key Functions:**

*   `entrez_search()`: Searches databases for entries matching specified criteria.
*   `entrez_fetch()`: Retrieves data for a given set of IDs.
*   `entrez_download()`: Downloads data in various formats.
*   `esearch()`: Alias for `entrez_search()`.
*   `efetch()`: Alias for `entrez_fetch()`.

**Example: Searching and Fetching from GenBank**

```R
# Install and load the rentrez package if you haven't already
# install.packages("rentrez")
library(rentrez)

# Search for human genes related to "BRCA1" in the Gene database
search_results <- entrez_search(db = "gene", term = "Homo sapiens[Organism] AND BRCA1[Gene Name]")
print(search_results)

# Get the Gene IDs from the search results
gene_ids <- search_results$ids
print(gene_ids)

# Fetch detailed information for the first Gene ID
gene_info <- entrez_fetch(db = "gene", id = gene_ids[1], rettype = "gb", retmode = "text")
cat(gene_info) # Use cat() to print the raw text content nicely

# Fetch protein sequences related to BRCA1 from the Protein database
protein_search <- entrez_search(db = "protein", term = "BRCA1[Gene Name] AND Homo sapiens[Organism]")
protein_ids <- protein_search$ids

# Fetching multiple protein sequences (e.g., first 5)
if (length(protein_ids) > 5) {
  protein_ids_to_fetch <- protein_ids[1:5]
} else {
  protein_ids_to_fetch <- protein_ids
}

protein_sequences <- entrez_fetch(db = "protein", id = protein_ids_to_fetch, rettype = "fasta", retmode = "text")
cat(protein_sequences)
```

**Explanation:**
*   `db`: Specifies the NCBI database to search (e.g., "gene", "protein", "pubmed", "nucleotide").
*   `term`: The search query using NCBI's E-utilities query syntax.
*   `id`: The unique identifier(s) of the record(s) to fetch.
*   `rettype`: The desired data format (e.g., "gb" for GenBank, "fasta" for FASTA, "xml").
*   `retmode`: The mode of data retrieval (e.g., "text", "xml").

#### 3.3. Using `biomaRt` for Ensembl and UniProt Data

`biomaRt` is excellent for accessing the rich data in Ensembl and UniProt.

**Key Concepts:**
*   **Ensembl:** A genome browser and annotation system that provides genomic sequences, gene annotations, and comparative genomics data.
*   **MARt:** A registry of biological databases that provide structured access to their data via an API.

**Example: Retrieving Human Gene Information from Ensembl**

```R
# Install and load the biomaRt package
# if (!requireNamespace("BiocManager", quietly = TRUE))
#     install.packages("BiocManager")
# BiocManager::install("biomaRt")
library(biomaRt)

# Connect to the Ensembl database
# You can list available marts using listMarts()
ensembl <- useMart("ensembl", dataset = "hsapiens_gene_ensembl")

# List available attributes (columns) and filters (search criteria)
# attributes <- listAttributes(ensembl)
# filters <- listFilters(ensembl)

# Example: Get gene symbol, Ensembl ID, and description for genes related to "TP53"
# Using 'hgnc_symbol' as a filter and requesting 'ensembl_gene_id', 'hgnc_symbol', 'description'
gene_data <- getBM(attributes = c("ensembl_gene_id", "hgnc_symbol", "description", "chromosome_name", "start_position", "end_position"),
                   filters = "hgnc_symbol",
                   values = "TP53",
                   mart = ensembl)

print(gene_data)

# Example: Get protein sequence for a specific Ensembl gene ID
# You might need to specify a different dataset or mart for protein sequences if not readily available via the primary dataset
# For protein sequences, often UniProt is a better direct source or you can get them via Ensembl if available.
# Let's try to get protein sequence using Ensembl IDs. You might need to explore attributes carefully.
# Often, you'd link Ensembl IDs to UniProt IDs and then fetch from UniProt.
# For simplicity here, let's get gene names for a list of Ensembl IDs.
ensembl_ids <- c("ENSG00000141510", "ENSG00000171869") # TP53 and BRCA1
gene_names <- getBM(attributes = c("ensembl_gene_id", "external_gene_name"),
                    filters = "ensembl_gene_id",
                    values = ensembl_ids,
                    mart = ensembl)
print(gene_names)
```

**Explanation:**
*   `useMart()`: Establishes a connection to a specific database archive (e.g., "ensembl", "uniprot"). `dataset` specifies the organism or data subset.
*   `listMarts()`: Shows available database archives.
*   `listAttributes()`: Shows available data columns you can retrieve.
*   `listFilters()`: Shows available fields you can use for searching.
*   `getBM()`: The main function to query the database.
    *   `attributes`: A vector of column names you want to retrieve.
    *   `filters`: The column name(s) you want to use for searching.
    *   `values`: The specific value(s) to search for in the `filters` column.

#### 3.4. Accessing Other Databases

*   **GEO (Gene Expression Omnibus) with `GEOquery`:**
    *   Allows downloading Series Matrix files (expression data) and metadata from GEO.
    *   `getGEO(GEOID = "GSE12345")` can download the data for a specific GEO Series.

*   **UniProt with `UniProt.ws` or direct web scraping:**
    *   `UniProt.ws` provides an interface to UniProt.
    *   Can also use `RCurl` and `rvest` to scrape data directly from UniProt web pages if a dedicated package isn't available or sufficient.

---

### 4. Basic Data Retrieval and Manipulation in R

Once data is fetched, R's powerful data structures (data frames, lists) and manipulation tools (e.g., `dplyr`, `tidyr`) are used.

*   **Data Structures:**
    *   `data.frame`: For tabular data (e.g., gene annotations).
    *   `list`: For nested data or heterogeneous data types (e.g., results from `entrez_search`).
    *   `DNAStringSet`, `RNAStringSet`, `AAStringSet` (from `Biostrings` package): For handling biological sequences efficiently.

*   **Manipulation:**
    *   **Subsetting:** Selecting rows and columns.
    *   **Filtering:** Keeping rows that meet certain criteria.
    *   **Merging/Joining:** Combining data from different sources.
    *   **Transforming:** Modifying existing columns or creating new ones.

**Example: Manipulating Gene Data fetched with `biomaRt`**

```R
# Assuming 'gene_data' from the previous biomaRt example is available
library(dplyr)

# Filter for genes on a specific chromosome
tp53_chromosome_17 <- gene_data %>%
  filter(chromosome_name == "17")

print(tp53_chromosome_17)

# Calculate the length of the gene locus
tp53_chromosome_17 <- tp53_chromosome_17 %>%
  mutate(locus_length = end_position - start_position + 1)

print(tp53_chromosome_17)

# Extract only the descriptions
gene_descriptions <- gene_data$description
print(gene_descriptions)
```

**Example: Working with Sequences (using `Biostrings`)**

```R
# Install and load Biostrings
# BiocManager::install("Biostrings")
library(Biostrings)

# Let's assume 'protein_sequences' contains FASTA formatted data from the rentrez example
# Convert the FASTA string to a DNAStringSet/AAStringSet object
protein_seqs <- readAAStringSet(textConnection(protein_sequences))

# Print the sequences
print(protein_seqs)

# Get the length of each protein sequence
seq_lengths <- width(protein_seqs)
print(seq_lengths)

# Get the names of the sequences (often accession IDs)
seq_names <- names(protein_seqs)
print(seq_names)

# Combine sequence names and lengths into a data frame
seq_summary <- data.frame(
  Accession = seq_names,
  Length = seq_lengths,
  row.names = NULL
)
print(seq_summary)
```

---

### 5. Visualizing Data from Biological Databases

Visualizations help in understanding patterns and trends in biological data.

*   **Sequence Lengths:** Bar plots or histograms.
*   **Gene Expression:** Heatmaps, box plots, volcano plots.
*   **Protein Domains:** Domain architecture plots.
*   **Pathway Diagrams:** While R can't directly render complex pathway diagrams from databases like KEGG in an interactive way without specialized tools or APIs, it can process and display associated data.

**Example: Visualizing Protein Sequence Lengths**

```R
# Using the 'seq_summary' data frame from the previous Biostrings example
library(ggplot2)

ggplot(seq_summary, aes(x = reorder(Accession, Length), y = Length)) +
  geom_bar(stat = "identity", fill = "steelblue") +
  theme_minimal() +
  labs(title = "Protein Sequence Lengths",
       x = "Protein Accession",
       y = "Length (amino acids)") +
  coord_flip() # Flip coordinates for better readability of accessions
```

**Example: Visualizing Gene Locus Lengths**

```R
# Using the 'tp53_chromosome_17' data frame from the biomaRt example
ggplot(tp53_chromosome_17, aes(x = hgnc_symbol, y = locus_length)) +
  geom_bar(stat = "identity", fill = "darkgreen") +
  theme_classic() +
  labs(title = "TP53 Locus Length on Chromosome 17",
       x = "Gene Symbol",
       y = "Locus Length")
```

---

### 6. Important Points to Remember

*   **Database Stability and API Changes:** Database APIs and formats can change. Keep your R packages updated, and be prepared to adapt your code if necessary.
*   **Rate Limiting:** Many web services have usage limits to prevent abuse. Be mindful of this when making many requests in a short period. Some packages might have built-in delays or handles.
*   **Data Formats:** Understand the common data formats like FASTA, GenBank, XML, CSV, and how to parse them in R.
*   **Identifier Mappings:** Biological databases use various identifiers (e.g., Ensembl ID, UniProt ID, GenBank accession, Gene Symbol). Mapping between these is crucial and often facilitated by packages like `AnnotationDbi` and `biomaRt`.
*   **Bioconductor Ecosystem:** Explore the vast array of Bioconductor packages, as they are specifically designed for bioinformatics tasks and often provide seamless integration with biological databases.
*   **Documentation is Key:** Always refer to the documentation of the R packages you are using and the user guides of the biological databases themselves.

---

### Practice Questions

1.  **Question:** You want to retrieve the protein sequence in FASTA format for the human gene "TP53" from the NCBI Protein database. Which R package would be most suitable for this task, and what are the key arguments you would use in its primary function?
    *   **Answer:** The `rentrez` package is suitable. You would use `entrez_fetch()` with `db = "protein"`, `id = <NCBI Protein ID for TP53>`, `rettype = "fasta"`, and `retmode = "text"`. (Note: You'd first need to find the protein ID, potentially using `entrez_search()`).

2.  **Question:** Using the `biomaRt` package, how would you find the Ensembl gene ID, HGNC symbol, and genomic location (chromosome, start, end) for all genes located on chromosome 13 in the human genome?
    *   **Answer:**
        ```R
        library(biomaRt)
        ensembl <- useMart("ensembl", dataset = "hsapiens_gene_ensembl")
        gene_locations <- getBM(attributes = c("ensembl_gene_id", "hgnc_symbol", "chromosome_name", "start_position", "end_position"),
                                filters = "chromosome_name",
                                values = "13",
                                mart = ensembl)
        print(gene_locations)
        ```

3.  **Question:** You have downloaded a list of UniProt accession numbers. How might you use R to fetch the protein sequences for these accessions? Mention at least one package that could help.
    *   **Answer:** You could use the `UniProt.ws` package, or if direct sequence retrieval via an API is not straightforward, you could construct URLs for UniProt's FASTA download service and use `RCurl` or `rvest` to fetch them. Alternatively, if you know the Ensembl IDs corresponding to the UniProt IDs, `biomaRt` could potentially fetch sequences.

4.  **Question:** What is the primary purpose of the Gene Ontology (GO) database, and how is it structured?
    *   **Answer:** Gene Ontology (GO) provides a controlled vocabulary to describe gene and gene product functions. It is structured as a directed acyclic graph (DAG), organizing terms into three main categories: Biological Process, Molecular Function, and Cellular Component.

5.  **Question:** You have fetched protein sequences and stored them in an `AAStringSet` object in R. How would you calculate the length of each individual protein sequence?
    *   **Answer:** You would use the `width()` function from the `Biostrings` package. For example, if your `AAStringSet` object is named `my_proteins`, you would use `width(my_proteins)`.

---
