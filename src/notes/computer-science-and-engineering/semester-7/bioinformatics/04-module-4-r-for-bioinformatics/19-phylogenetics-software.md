---
title: "Phylogenetics software"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c18d"
status: "completed"
scrapedAt: "2026-05-20T17:01:30.480Z"
---
# Bioinformatics Study Notes

## Module 4: R for Bioinformatics

### Topic: Phylogenetics Software

---

**Learning Outcomes:**

*   **LO1:** Understand the fundamental principles of phylogenetic analysis and the types of software commonly used.
*   **LO2:** Identify and describe popular R packages for phylogenetic analysis.
*   **LO3:** Learn how to import and manipulate phylogenetic data in R.
*   **LO4:** Perform basic phylogenetic analyses, including tree construction and visualization, using R.
*   **LO5:** Explore advanced phylogenetic methods and concepts relevant to bioinformatics.

---

### 1. Introduction to Phylogenetic Analysis and Software

#### 1.1 What is Phylogenetics?

*   **Definition:** Phylogenetics is the study of evolutionary relationships among biological entities (species, genes, individuals). It aims to reconstruct the evolutionary history and patterns of divergence.
*   **Key Goals:**
    *   Infer evolutionary relationships (phylogenetic trees).
    *   Understand the timing of evolutionary events.
    *   Reconstruct ancestral states.
    *   Study the evolution of traits.

#### 1.2 Phylogenetic Trees

*   **Definition:** A branching diagram representing the inferred evolutionary history and relationships between a group of organisms or genes.
*   **Components of a Phylogenetic Tree:**
    *   **Root:** The common ancestor of all taxa in the tree.
    *   **Nodes:** Points where lineages diverge.
        *   **Internal Nodes:** Represent hypothetical common ancestors.
        *   **Terminal Nodes (Tips/Leaves):** Represent the taxa being studied (e.g., species, genes).
    *   **Branches:** Represent evolutionary lineages, often proportional to evolutionary time or genetic distance.
    *   **Clades (Monophyletic Groups):** A group of organisms believed to have evolved from a common ancestor, including that ancestor and all of its descendants.

#### 1.3 Data Types for Phylogenetic Analysis

*   **Molecular Data:**
    *   DNA sequences (nucleotides)
    *   RNA sequences (nucleotides)
    *   Protein sequences (amino acids)
*   **Morphological Data:**
    *   Physical characteristics (e.g., presence/absence of traits, measurements). Less common in modern bioinformatics due to its subjectivity and difficulty in quantification.

#### 1.4 Common Phylogenetic Methods

*   **Distance-Based Methods:**
    *   Calculate pairwise distances between sequences.
    *   Cluster taxa based on these distances.
    *   **Examples:**
        *   **UPGMA (Unweighted Pair Group Method with Arithmetic Mean):** Assumes a constant rate of evolution (molecular clock). Can be misleading if evolutionary rates vary.
        *   **Neighbor-Joining (NJ):** A widely used method that doesn't assume a molecular clock. Efficient for large datasets.
*   **Character-Based Methods:**
    *   Analyze individual character states (e.g., nucleotide positions) directly.
    *   **Examples:**
        *   **Maximum Parsimony (MP):** Seeks the tree that requires the fewest evolutionary changes (mutations) to explain the observed data.
        *   **Maximum Likelihood (ML):** Calculates the probability of observing the data given a specific tree and a model of evolution. Generally considered more statistically rigorous but computationally intensive.
        *   **Bayesian Inference (BI):** Infers phylogenetic trees by calculating posterior probabilities of trees, given the data and a model of evolution. Also computationally intensive.

#### 1.5 Types of Phylogenetic Software

*   **Standalone Software:** Programs installed and run on a local machine (e.g., MEGA, PAUP*, RAxML, MrBayes).
*   **Web-based Servers:** Online platforms that provide phylogenetic analysis tools (e.g., PhyML online, IQ-TREE web server).
*   **R Packages:** Libraries that extend R's functionality for phylogenetic analysis. **This module focuses on R packages.**

---

### 2. Popular R Packages for Phylogenetic Analysis

R provides a powerful and flexible environment for phylogenetic analysis due to its extensive collection of specialized packages.

#### 2.1 Core Phylogenetics Packages

*   **`ape` (Analyses of Phylogenetics and Phylodynamics):**
    *   **Description:** A foundational package for phylogenetics in R. Provides tools for reading, writing, manipulating, analyzing, and visualizing phylogenetic trees. It also includes functions for phylogenetic comparative methods and phylodynamics.
    *   **Key Features:**
        *   Reading/writing various tree formats (e.g., Newick, Nexus).
        *   Tree manipulation (rooting, collapsing, converting).
        *   Tree visualization.
        *   Calculating evolutionary distances.
        *   Phylogenetic comparative methods (e.g., PGLS, ancestral state reconstruction).
        *   Time-calibrated tree analysis.

*   **`phangorn` (Phylogenetic analysis with R):**
    *   **Description:** Offers a comprehensive suite of phylogenetic methods, including parsimony, likelihood, and Bayesian inference. It's particularly strong for tree building and model selection.
    *   **Key Features:**
        *   Tree building using parsimony, ML, and Bayesian methods.
        *   Model selection for likelihood analysis.
        *   Bootstrapping for tree support assessment.
        *   Sequence alignment integration.

*   **`phytools` (Phylogenetic Tools for Comparative Biology):**
    *   **Description:** Focuses on visualizing and analyzing phylogenetic trees, often in the context of comparative biology. It's excellent for plotting trees with associated data and performing ancestral state reconstruction.
    *   **Key Features:**
        *   Advanced tree plotting with associated data (e.g., trait values on tips).
        *   Ancestral state reconstruction (discrete and continuous traits).
        *   Simulating trait evolution.
        *   Phylogenetic generalized least squares (PGLS).

#### 2.2 Packages for Sequence Data Handling and Alignment

*   **`seqinr` (Bioinformatics needed for sequence analysis):**
    *   **Description:** Provides functions for reading, writing, and analyzing biological sequences. Crucial for preparing sequence data for phylogenetic analysis.
    *   **Key Features:**
        *   Reading various sequence formats (FASTA, GenBank).
        *   Sequence manipulation (reverse complement, translation).
        *   Calculating base composition and codon usage.
        *   Basic sequence alignment functions.

*   **`DECIPHER` (Data-driven Exploration of Comparative Phylogenomic Inference):**
    *   **Description:** A powerful package for sequence alignment, tree building, and phylogenetic inference. It's known for its speed and accuracy, especially for large datasets.
    *   **Key Features:**
        *   High-quality multiple sequence alignment.
        *   Efficient tree building (including NJ and ML).
        *   Phylogenetic inference using various methods.
        *   Proportion of Sites method for alignment quality assessment.

*   **`Biostrings` (Bioconductor - String manipulation utilities for biological sequences):**
    *   **Description:** Part of the Bioconductor project, offering robust tools for manipulating biological sequences.
    *   **Key Features:**
        *   Efficient sequence representation and manipulation.
        *   Alignment of sequences.
        *   Pattern searching.

#### 2.3 Packages for Tree Visualization

*   **`ggtree` (An extension of ggplot2 to create tree visualizations):**
    *   **Description:** Integrates phylogenetic tree visualization with the popular `ggplot2` grammar of graphics. This allows for highly customizable and aesthetically pleasing tree plots.
    *   **Key Features:**
        *   Extends `ggplot2` for phylogenetic trees.
        *   Annotating trees with data (e.g., bootstrap values, geographic locations, trait data).
        *   Creating complex tree layouts and displays.
        *   Supports various tree formats.

*   **`rgl` (3D graphics):**
    *   **Description:** While not strictly a phylogenetics package, `rgl` can be used to create interactive 3D visualizations of phylogenetic trees, which can be useful for exploring complex evolutionary relationships.

---

### 3. Importing and Manipulating Phylogenetic Data in R

#### 3.1 Tree File Formats

Phylogenetic trees are typically stored in text-based formats. Common formats include:

*   **Newick (or New Hampshire format):** The most common and simplest format.
    *   **Example:** `(A:0.1,B:0.2,(C:0.3,D:0.4):0.5);`
        *   Parentheses indicate branching.
        *   Colons indicate branch lengths.
        *   Names after colons are taxa.
        *   A semicolon terminates the tree.
        *   Unlabeled nodes are internal nodes.

*   **Nexus:** A more complex format that can store multiple trees, character data, and other metadata.

*   **Newtork:** Another format often used for gene network data.

#### 3.2 Importing Trees with `ape`

The `ape` package is the primary tool for importing trees.

*   **`read.tree(file)`:** Reads a tree from a file in Newick or Nexus format.
    *   **Example:**
        ```R
        # Assuming you have a tree saved in 'my_tree.nwk'
        library(ape)
        tree <- read.tree("my_tree.nwk")
        print(tree)
        plot(tree)
        ```

*   **`read.nexus(file)`:** Specifically for Nexus formatted files.

#### 3.3 Inspecting and Manipulating Trees with `ape`

Once imported, you can examine and modify the tree object.

*   **`print(tree)`:** Displays the tree in Newick format.
*   **`plot(tree)`:** Creates a basic plot of the tree.
*   **`is.rooted(tree)`:** Checks if the tree is rooted.
*   **`root(tree, outgroup)`:** Roots the tree using a specified outgroup.
    *   **Example:** `rooted_tree <- root(tree, outgroup = "SpeciesA")`
*   **`collapse.tree(tree, node)`:** Collapses a subtree starting from a specific node.
*   **`drop.tip(tree, tip)`:** Removes specific tips (taxa) from the tree.
    *   **Example:** `pruned_tree <- drop.tip(tree, tip = c("SpeciesB", "SpeciesC"))`
*   **`multi2di(tree)`:** Converts a multifurcating tree (more than two branches from a node) into a bifurcating tree by adding zero-length branches.

#### 3.4 Importing Sequences with `seqinr`

*   **`read.fasta(file)`:** Reads sequences from a FASTA file.
    *   **Example:**
        ```R
        library(seqinr)
        sequences <- read.fasta("my_sequences.fasta")
        print(sequences)
        # Accessing a specific sequence: sequences[[1]]
        # Convert to string: s2c(sequences[[1]])
        ```

#### 3.5 Working with Sequence Data for Phylogenetics

*   **Converting to Alignment Objects:** For tree building, sequences often need to be in a format recognized by phylogenetic packages.
*   **`as.DNAbin(sequences)` (from `ape`):** Converts a list of sequences into a DNAbin object, which is optimized for phylogenetic analysis.
    *   **Example:**
        ```R
        # Assuming 'sequences' is from read.fasta
        dna_bin <- as.DNAbin(sequences)
        print(dna_bin)
        ```

---

### 4. Performing Basic Phylogenetic Analyses in R

#### 4.1 Tree Construction

**Example Scenario:** Constructing a phylogenetic tree from a set of DNA sequences.

1.  **Data Preparation:** Assume you have a FASTA file named `dna_sequences.fasta`.
2.  **Import Sequences:**
    ```R
    library(ape)
    library(seqinr)

    # Read sequences
    seqs <- read.fasta("dna_sequences.fasta")

    # Convert to DNAbin object
    dna_bin <- as.DNAbin(seqs)
    ```

3.  **Calculate Distance Matrix (for NJ):**
    *   **`dist.dna(x, model = "raw")`:** Calculates pairwise distances. Various models are available (e.g., "JC69", "K80", "K81", "HKY85", "GTR").
    *   **Example:**
        ```R
        # Using Jukes-Cantor model
        distance_matrix <- dist.dna(dna_bin, model = "JC69")
        print(distance_matrix)
        ```

4.  **Construct Tree using Neighbor-Joining (NJ):**
    *   **`nj(dist_matrix)`:** Implements the Neighbor-Joining algorithm.
    *   **Example:**
        ```R
        # Build the NJ tree
        nj_tree <- nj(distance_matrix)
        print(nj_tree)
        ```

5.  **Construct Tree using Maximum Likelihood (ML) with `phangorn`:**
    *   **`pratchet(dna_bin, method = "ml")`:** Builds an ML tree. You can specify different models.
    *   **Example:**
        ```R
        library(phangorn)

        # Build an ML tree using the GTR+G model (example)
        # You might need to fit models first for optimal results
        ml_tree <- pratchet(dna_bin, method = "ml", model = "GTR") # This is a simplified example
        print(ml_tree)
        ```
    *   **Model Selection for ML:** For accurate ML analysis, it's recommended to use functions like `modelTest` from `phangorn` to find the best-fit model of evolution.

6.  **Construct Tree using Bayesian Inference with `phangorn`:**
    *   **`bayesFactor(tree, data, ...) ` (requires careful setup and sampling)** or using dedicated packages like `phyclust` or interfacing with external Bayesian software. `phangorn` offers some Bayesian functionalities.
    *   A common approach is to use `phyclust` for Bayesian inference or to generate input files for MrBayes or BEAST and then import the resulting trees into R.

#### 4.2 Tree Visualization

*   **Basic Plotting with `ape`:**
    ```R
    plot(nj_tree)
    title("Neighbor-Joining Tree")
    ```

*   **Enhanced Visualization with `ggtree`:**
    ```R
    library(ggtree)

    # Basic plot
    ggtree(nj_tree) + geom_tiplab() + ggtitle("NJ Tree with ggtree")

    # Add bootstrap values (if calculated)
    # boot_values <- boot.phylo(nj_tree, dna_bin, function(x) nj(dist.dna(x)))
    # ggtree(nj_tree) + geom_tiplab() + geom_nodelab(label=boot_values)

    # Cladogram (branches represent only topology)
    ggtree(nj_tree, branch.length = "none") + geom_tiplab()

    # Rooted tree visualization
    # Assuming nj_tree is already rooted or you root it
    rooted_nj_tree <- root(nj_tree, outgroup = "Tip1") # Replace "Tip1" with your outgroup tip name
    ggtree(rooted_nj_tree) + geom_tiplab() + geom_rootedge()

    # Adding trait data to the tree (example)
    # Assume you have a data frame 'trait_data' with tip names and trait values
    # ggtree(nj_tree) %<+% trait_data + aes(color = Trait) + geom_tiplab()
    ```

#### 4.3 Assessing Tree Support

*   **Bootstrapping:** A common method to assess the reliability of branches in a phylogenetic tree. It involves resampling the data (columns in the alignment) with replacement and constructing trees from these resampled datasets.
    *   **`boot.phylo(tree, x, FUN, ...)`:** Performs bootstrapping. `tree` is a reference tree, `x` is the alignment data, and `FUN` is the tree building function (e.g., `nj`, `pratchet`).
    *   **Example (for NJ):**
        ```R
        # Perform bootstrapping for NJ tree (e.g., 100 replicates)
        bootstrap_values <- boot.phylo(nj_tree, dna_bin, function(x) nj(dist.dna(x)), B = 100)
        print(bootstrap_values)

        # Visualize bootstrap values on the tree using ggtree
        ggtree(nj_tree) + geom_tiplab() + geom_nodelab(label=bootstrap_values, vjust=0.5, hjust=-0.5)
        ```

---

### 5. Advanced Phylogenetic Methods and Concepts

#### 5.1 Models of Evolution

*   **Definition:** Mathematical models that describe the probabilities of different types of mutations (substitutions) occurring along an evolutionary lineage. Choosing an appropriate model is crucial for accurate ML and Bayesian analyses.
*   **Common DNA Substitution Models:**
    *   **JC69 (Jukes-Cantor):** Simplest model. Assumes equal base frequencies and equal substitution rates between all base pairs.
    *   **K80 (Kimura 2-parameter):** Distinguishes between transitions (purine <-> purine, pyrimidine <-> pyrimidine) and transversions (purine <-> pyrimidine), assuming different rates for each.
    *   **HKY85:** Accounts for unequal base frequencies and different transition/transversion rates.
    *   **GTR (General Time Reversible):** Most general. Allows for different rates between all pairs of bases and unequal base frequencies.
*   **Model Selection:**
    *   **Akaike Information Criterion (AIC)** and **Bayesian Information Criterion (BIC)** are commonly used to select the best-fitting model based on likelihood scores and model complexity.
    *   Packages like `phangorn` (e.g., `modelTest`) and `ips` can help with model selection.

#### 5.2 Molecular Clock Hypothesis

*   **Definition:** The idea that molecular changes (mutations) accumulate at a relatively constant rate over evolutionary time.
*   **Implications:** If the molecular clock holds, phylogenetic trees can be calibrated with time using fossil data or geological events.
*   **Methods:** Likelihood ratio tests can be used to test for a molecular clock. Specialized software like BEAST is designed for phylogenetic inference under relaxed molecular clock models.

#### 5.3 Ancestral State Reconstruction

*   **Definition:** Inferring the character states (e.g., presence/absence of a trait, amino acid type) of ancestral organisms at internal nodes of a phylogenetic tree.
*   **Methods:**
    *   **Parsimony-based:** Assumes the minimum number of changes.
    *   **Likelihood-based:** Uses models of character evolution.
    *   **Bayesian Methods:** Provide probabilistic estimates of ancestral states.
*   **R Packages:** `ape` (`ace`, `anc.states`), `phytools` (`fastAnc`, `contMap`).

#### 5.4 Phylogenomics

*   **Definition:** The use of genomic-scale data (e.g., whole genomes, transcriptome data) to infer evolutionary relationships.
*   **Challenges:** Dealing with large datasets, gene duplication and loss, horizontal gene transfer, incomplete lineage sorting.
*   **R Packages:** `DECIPHER`, `phangorn`, and interfacing with specialized phylogenomic pipelines.

#### 5.5 Comparative Genomics and Phylogenetics

*   **Definition:** Using phylogenetic frameworks to study the evolution of genes, genomes, and traits across species.
*   **Examples:**
    *   **Phylogenetic Generalized Least Squares (PGLS):** Accounts for the non-independence of traits due to shared ancestry. Used in `ape` and `phytools`.
    *   **Genome Duplication Events:** Tracing the history of gene duplication.

---

### 6. Important Points to Remember

*   **Data Quality is Paramount:** The accuracy of your phylogenetic analysis depends heavily on the quality of your input sequences or data.
*   **Model Selection is Crucial:** For ML and Bayesian methods, choosing the appropriate evolutionary model significantly impacts tree inference.
*   **Tree Interpretation:** Understand the components of a phylogenetic tree and how to interpret branch lengths and support values.
*   **R Packages are Interconnected:** Often, you'll use multiple R packages in a single workflow (e.g., `seqinr` for reading, `ape` for distances, `phangorn` for ML, `ggtree` for plotting).
*   **Computational Intensity:** Some phylogenetic methods (especially ML and Bayesian) can be computationally intensive and require significant processing power and time.
*   **Outgroup Selection:** Rooting a tree requires selecting an outgroup that is known to be distantly related to the taxa of interest.

---

### Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the difference between distance-based and character-based methods for phylogenetic tree construction. Give an example of each.

**Question 2 (R Syntax):**
Which R package is primarily used for reading and writing phylogenetic trees in the Newick format? What is the function name?

**Question 3 (R Syntax):**
If you have a set of DNA sequences loaded into R as a list from `read.fasta` (using `seqinr`), what function from the `ape` package would you use to convert them into a format suitable for phylogenetic analysis?

**Question 4 (R Application):**
Write R code to:
a) Load the `ape` and `ggtree` packages.
b) Read a Newick tree file named `example_tree.nwk`.
c) Plot the tree using `ggtree`, adding tip labels.

**Question 5 (Conceptual):**
What is bootstrapping in phylogenetic analysis, and what does it help to assess?

**Question 6 (R Application - Tree Construction - if you have sample data):**
*(This question assumes you have a FASTA file named `aligned_sequences.fasta` with aligned DNA sequences)*
Write R code to:
a) Read the aligned DNA sequences.
b) Calculate a pairwise distance matrix using the Jukes-Cantor model.
c) Construct a phylogenetic tree using the Neighbor-Joining method.
d) Plot the resulting tree.

---

### Answers to Practice Questions

**Answer 1:**
*   **Distance-based methods:** These methods first calculate pairwise evolutionary distances between all taxa and then use algorithms (like Neighbor-Joining or UPGMA) to cluster taxa based on these distances. **Example:** Neighbor-Joining (NJ).
*   **Character-based methods:** These methods directly analyze the differences at each character position (e.g., nucleotide site) in the sequence alignment. They aim to find the tree that best explains the observed character transformations. **Examples:** Maximum Parsimony (MP), Maximum Likelihood (ML), Bayesian Inference (BI).

**Answer 2:**
The `ape` package is primarily used for reading and writing phylogenetic trees. The function for reading Newick trees is `read.tree()`.

**Answer 3:**
You would use the `as.DNAbin()` function from the `ape` package.

**Answer 4:**
```R
# a) Load packages
library(ape)
library(ggtree)

# b) Read a Newick tree file
# Assuming 'example_tree.nwk' exists in your working directory
tree <- read.tree("example_tree.nwk")

# c) Plot the tree using ggtree with tip labels
ggtree(tree) + geom_tiplab() + ggtitle("Phylogenetic Tree")
```

**Answer 5:**
Bootstrapping is a resampling technique used to assess the statistical robustness of nodes (internal branches) in a phylogenetic tree. It involves creating multiple pseudo-datasets by randomly sampling characters from the original alignment with replacement. A tree is then constructed for each pseudo-dataset. The bootstrap support for a particular node is the percentage of these bootstrap trees that also contain that node. Higher bootstrap values (typically >70% or >80%) indicate stronger support for that branch.

**Answer 6:**
*(Assuming `aligned_sequences.fasta` exists and is correctly formatted)*
```R
# Load necessary packages
library(ape)
library(seqinr)

# a) Read the aligned DNA sequences
seqs <- read.fasta("aligned_sequences.fasta")
dna_bin <- as.DNAbin(seqs)

# b) Calculate a pairwise distance matrix using Jukes-Cantor model
distance_matrix <- dist.dna(dna_bin, model = "JC69")

# c) Construct a phylogenetic tree using Neighbor-Joining
nj_tree <- nj(distance_matrix)

# d) Plot the resulting tree
plot(nj_tree)
title("Neighbor-Joining Tree of DNA Sequences")

# Optional: Enhanced plot with ggtree
library(ggtree)
ggtree(nj_tree) + geom_tiplab() + ggtitle("NJ Tree with ggtree")
