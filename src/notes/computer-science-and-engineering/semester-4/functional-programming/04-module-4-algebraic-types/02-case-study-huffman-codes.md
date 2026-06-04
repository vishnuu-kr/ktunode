---
title: "Case Study - Huffman Codes"
subject: "FUNCTIONAL PROGRAMMING"
module: "Module 4: Algebraic Types"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b0e5"
status: "completed"
scrapedAt: "2026-05-20T16:13:15.514Z"
---
# FUNCTIONAL PROGRAMMING - Module 4: Algebraic Types - Huffman Codes Case Study

## Introduction

This module explores the application of algebraic data types in a practical context: Huffman coding. Huffman coding is a lossless data compression algorithm that uses a variable-length code table for encoding a source symbol (such as a character in a file) where the variable-length code table has been derived in a particular way based on the estimated probability of occurrence for each possible value of the source symbol. We will use functional programming principles and algebraic data types to represent and implement the algorithm.

## Learning Outcomes

Upon completion of this study, you should be able to:

*   Understand the concept of Huffman coding.
*   Represent Huffman trees using algebraic data types.
*   Implement functions for building Huffman trees from frequency tables.
*   Implement functions for encoding and decoding data using Huffman trees.
*   Apply functional programming principles to solve a real-world problem.

## 1. Key Concepts and Definitions

*   **Data Compression:**  Reducing the size of data by encoding it more efficiently.
*   **Lossless Compression:** A data compression technique that allows the original data to be perfectly reconstructed from the compressed data.  Huffman coding is lossless.
*   **Variable-Length Code:** An encoding scheme where different characters (or symbols) are represented by codes of varying lengths.
*   **Prefix Code:** A code where no codeword is a prefix of any other codeword. This ensures unambiguous decoding.  Huffman codes are prefix codes.
*   **Frequency Table:**  A table that maps each character (or symbol) to its frequency of occurrence in the input data.
*   **Huffman Tree:**  A binary tree representing the Huffman code.  Each leaf node represents a character, and the path from the root to a leaf node represents the code for that character.  The left branch typically represents a '0' and the right branch represents a '1'.
*   **Algebraic Data Type (ADT):** A composite type formed by combining other types. In this case, we'll use ADTs to represent the Huffman Tree.
*   **Encoding:** The process of converting data into a Huffman code representation.
*   **Decoding:** The process of converting a Huffman code representation back into the original data.

## 2. Huffman Coding Explained

Huffman coding works by assigning shorter codes to more frequent characters and longer codes to less frequent characters.  The steps are generally as follows:

1.  **Create a Frequency Table:** Calculate the frequency of each character in the input data.
2.  **Build the Huffman Tree:**
    *   Create a leaf node for each character and its frequency.
    *   Sort the nodes by frequency (ascending).
    *   Repeatedly merge the two nodes with the lowest frequencies into a new parent node. The frequency of the parent node is the sum of the frequencies of the children.
    *   The new parent node is inserted back into the sorted list.
    *   Repeat until only one node remains. This is the root of the Huffman tree.
3.  **Generate Codes:** Traverse the Huffman tree from the root to each leaf node.  Assign a '0' to each left branch and a '1' to each right branch. The code for a character is the sequence of '0's and '1's encountered on the path from the root to the leaf node representing that character.
4.  **Encode the Data:** Replace each character in the input data with its corresponding Huffman code.
5.  **Decode the Data:** Traverse the Huffman tree, using the encoded bits to guide the traversal. A '0' means go left, a '1' means go right. When you reach a leaf node, you have decoded a character.  Start again from the root for the next character.

## 3. Representing Huffman Trees with Algebraic Data Types

Let's define the algebraic data type for a Huffman Tree. We can represent it in a functional language like Haskell or Scala:

**Haskell:**

```haskell
data HuffmanTree = Leaf Char Int | Node Int HuffmanTree HuffmanTree deriving (Show, Eq)
```

**Explanation:**

*   `HuffmanTree` is the name of our type.
*   `Leaf Char Int` represents a leaf node.  It contains a character (`Char`) and its frequency (`Int`).
*   `Node Int HuffmanTree HuffmanTree` represents an internal node.  It contains the combined frequency of its children (`Int`), a left subtree (`HuffmanTree`), and a right subtree (`HuffmanTree`).
*   `deriving (Show, Eq)` allows us to easily print (`Show`) and compare (`Eq`) Huffman trees.

**Scala:**

```scala
sealed trait HuffmanTree {
  val frequency: Int
}

case class Leaf(char: Char, frequency: Int) extends HuffmanTree
case class Node(frequency: Int, left: HuffmanTree, right: HuffmanTree) extends HuffmanTree
```

**Explanation:**

* `sealed trait HuffmanTree`: Defines `HuffmanTree` as an abstract trait, which is the base type for all Huffman Tree representations. `sealed` means that all implementations of `HuffmanTree` must be defined in the same file.
* `case class Leaf(char: Char, frequency: Int) extends HuffmanTree`: Defines a `Leaf` class which represents a leaf node. It contains a character (`char`) and its frequency (`frequency`). It extends the `HuffmanTree` trait.
* `case class Node(frequency: Int, left: HuffmanTree, right: HuffmanTree) extends HuffmanTree`: Defines a `Node` class which represents an internal node. It contains the combined frequency of its children (`frequency`), a left subtree (`left`), and a right subtree (`right`). It also extends the `HuffmanTree` trait.
*   `val frequency: Int`: Declares a frequency value which is part of every tree node. This is abstract in the base `HuffmanTree` type and is implemented in each sub type.
## 4. Implementing Huffman Tree Construction

Here's an example in Haskell, showing how to build the Huffman tree from a frequency table (represented as a list of tuples):

```haskell
import Data.List (sort)

-- Type alias for Frequency Table
type FrequencyTable = [(Char, Int)]

-- Function to build the Huffman tree
buildHuffmanTree :: FrequencyTable -> HuffmanTree
buildHuffmanTree table = buildTree (map (\(c, f) -> Leaf c f) table)

-- Helper function to recursively build the tree
buildTree :: [HuffmanTree] -> HuffmanTree
buildTree [tree] = tree
buildTree trees =
  let
    sortedTrees = sortByFrequency trees
    first  = head sortedTrees
    second = head (tail sortedTrees)
    newNode = Node (frequency first + frequency second) first second
    remainingTrees = tail (tail sortedTrees)
  in
    buildTree (insertSorted newNode remainingTrees)

-- Function to get the frequency of a Huffman tree
frequency :: HuffmanTree -> Int
frequency (Leaf _ f)   = f
frequency (Node f _ _) = f

-- Function to sort Huffman trees by frequency
sortByFrequency :: [HuffmanTree] -> [HuffmanTree]
sortByFrequency = sortOn frequency

-- Function to insert a Huffman tree into a sorted list of trees
insertSorted :: HuffmanTree -> [HuffmanTree] -> [HuffmanTree]
insertSorted tree [] = [tree]
insertSorted tree (x:xs)
  | frequency tree <= frequency x = tree:x:xs
  | otherwise                    = x : insertSorted tree xs

-- Example Frequency Table
frequencyTable :: FrequencyTable
frequencyTable = [('a', 5), ('b', 9), ('c', 12), ('d', 13), ('e', 16), ('f', 45)]

-- Test the tree creation
main :: IO ()
main = do
  let tree = buildHuffmanTree frequencyTable
  print tree
```

**Explanation:**

*   `FrequencyTable` is a type alias for a list of `(Char, Int)` tuples representing characters and their frequencies.
*   `buildHuffmanTree` takes a frequency table and returns a `HuffmanTree`.  It first converts the table into a list of leaf nodes.
*   `buildTree` recursively builds the tree.  It takes a list of `HuffmanTree`s, sorts them by frequency, merges the two least frequent trees, and repeats until only one tree remains.
*   `frequency` returns the frequency of a `HuffmanTree`.
*   `sortByFrequency` sorts a list of `HuffmanTree`s by frequency.
*   `insertSorted` inserts a `HuffmanTree` into a sorted list of `HuffmanTree`s, maintaining the sorted order.
*   `frequencyTable` is an example frequency table.
*   `main` function builds the tree from this table and prints it (using the `Show` instance derived earlier).

**Scala:**

```scala
import scala.collection.mutable
import scala.collection.immutable.Queue

sealed trait HuffmanTree {
  val frequency: Int
}

case class Leaf(char: Char, frequency: Int) extends HuffmanTree
case class Node(frequency: Int, left: HuffmanTree, right: HuffmanTree) extends HuffmanTree

object HuffmanCoding {

  type FrequencyTable = List[(Char, Int)]

  def buildHuffmanTree(frequencyTable: FrequencyTable): HuffmanTree = {
    val leaves = mutable.PriorityQueue.empty[HuffmanTree](Ordering.by((tree: HuffmanTree) => tree.frequency).reverse)
    frequencyTable.foreach(t => leaves.enqueue(Leaf(t._1, t._2)))
    buildTree(leaves)
  }

  private def buildTree(trees: mutable.PriorityQueue[HuffmanTree]): HuffmanTree = {
    if (trees.size == 1) {
      trees.dequeue()
    } else {
      val first = trees.dequeue()
      val second = trees.dequeue()
      val newNode = Node(first.frequency + second.frequency, first, second)
      trees.enqueue(newNode)
      buildTree(trees)
    }
  }
}

object Main extends App {
    val frequencyTable: List[(Char, Int)] = List(('a', 5), ('b', 9), ('c', 12), ('d', 13), ('e', 16), ('f', 45))
    val huffmanTree = HuffmanCoding.buildHuffmanTree(frequencyTable)
    println(huffmanTree)
}
```

**Explanation:**

*  We define `HuffmanTree`, `Leaf` and `Node` as before.
*  We are using a priority queue data structure (`mutable.PriorityQueue`) that is provided by scala.
*  We create a priority queue that will store the nodes we want to build the tree from.
*  We override the default ordering for the priority queue. `Ordering.by((tree: HuffmanTree) => tree.frequency).reverse` will make sure the elements with smaller frequency values are positioned in the front of the priority queue.
*  We build the Huffman tree using the priority queue.

## 5. Implementing Encoding and Decoding

Now, let's implement the encoding and decoding functions.  We first need a way to generate the code table from the Huffman tree.

**Haskell:**

```haskell
-- Generate the code table from the Huffman tree
generateCodeTable :: HuffmanTree -> [(Char, String)]
generateCodeTable tree = generateCodeTableHelper tree ""

-- Helper function to recursively generate the code table
generateCodeTableHelper :: HuffmanTree -> String -> [(Char, String)]
generateCodeTableHelper (Leaf char _) code = [(char, code)]
generateCodeTableHelper (Node _ left right) code =
  generateCodeTableHelper left (code ++ "0") ++ generateCodeTableHelper right (code ++ "1")

-- Encode a string using the code table
encode :: String -> [(Char, String)] -> String
encode text codeTable = concatMap (\c -> fromMaybe "" (lookup c codeTable)) text
  where
    fromMaybe defaultValue Nothing  = defaultValue
    fromMaybe _ (Just value) = value

-- Decode a string using the Huffman tree
decode :: HuffmanTree -> String -> String
decode tree code = decodeHelper tree code ""

-- Helper function to recursively decode the string
decodeHelper :: HuffmanTree -> String -> String -> String
decodeHelper (Leaf char _) code decoded = char : decodeHelper tree code decoded
decodeHelper (Node _ left right) ('0':rest) decoded = decodeHelper left rest decoded
decodeHelper (Node _ left right) ('1':rest) decoded = decodeHelper right rest decoded
decodeHelper _ [] decoded = decoded -- Handle the empty code string case.

-- Example usage:
main :: IO ()
main = do
  let frequencyTable = [('a', 5), ('b', 9), ('c', 12), ('d', 13), ('e', 16), ('f', 45)]
  let tree = buildHuffmanTree frequencyTable
  let codeTable = generateCodeTable tree
  let text = "abracadabra"
  let encoded = encode text codeTable
  let decoded = decode tree encoded

  putStrLn ("Original text: " ++ text)
  putStrLn ("Encoded text: " ++ encoded)
  putStrLn ("Decoded text: " ++ decoded)
```

**Explanation:**

*   `generateCodeTable` generates a list of `(Char, String)` tuples representing the code table, where the `String` is the code.
*   `generateCodeTableHelper` recursively traverses the tree, building the code as it goes.  A left branch adds "0", a right branch adds "1".
*   `encode` takes a string and the code table and returns the encoded string. It looks up each character in the code table and concatenates the corresponding codes.
*   `decode` takes the Huffman tree and the encoded string and returns the decoded string.
*   `decodeHelper` recursively traverses the tree based on the encoded bits.

**Scala:**

```scala
object HuffmanCoding {
    // previous definitions

    type CodeTable = Map[Char, String]

    def generateCodeTable(tree: HuffmanTree): CodeTable = {
        def generateCodeTableHelper(tree: HuffmanTree, currentCode: String): CodeTable = {
            tree match {
                case Leaf(char, _) => Map(char -> currentCode)
                case Node(_, left, right) => generateCodeTableHelper(left, currentCode + "0") ++
                generateCodeTableHelper(right, currentCode + "1")
            }
        }

        generateCodeTableHelper(tree, "")
    }

    def encode(text: String, codeTable: CodeTable): String = {
        text.flatMap(char => codeTable.get(char)).mkString
    }

    def decode(tree: HuffmanTree, encoded: String): String = {
        def decodeHelper(currentTree: HuffmanTree, remainingCode: String, decoded: String): String = {
            currentTree match {
                case Leaf(char, _) =>
                    decodeHelper(tree, remainingCode, decoded + char) // Restart from the root
                case Node(_, left, right) =>
                    if (remainingCode.isEmpty) decoded else {
                        if (remainingCode.startsWith("0"))
                            decodeHelper(left, remainingCode.substring(1), decoded)
                        else
                            decodeHelper(right, remainingCode.substring(1), decoded)
                    }
            }
        }

        decodeHelper(tree, encoded, "")
    }
}

object Main extends App {
    val frequencyTable: List[(Char, Int)] = List(('a', 5), ('b', 9), ('c', 12), ('d', 13), ('e', 16), ('f', 45))
    val huffmanTree = HuffmanCoding.buildHuffmanTree(frequencyTable)
    val codeTable = HuffmanCoding.generateCodeTable(huffmanTree)
    val text = "abracadabra"
    val encoded = HuffmanCoding.encode(text, codeTable)
    val decoded = HuffmanCoding.decode(huffmanTree, encoded)

    println(s"Original text: $text")
    println(s"Encoded text: $encoded")
    println(s"Decoded text: $decoded")
}
```

**Explanation:**

*   `generateCodeTable` recursively traverses the tree and constructs the code table, using a `Map[Char, String]` to represent it.
*   `encode` uses the code table to convert the input text to an encoded string.
*   `decode` traverses the Huffman tree based on the encoded bits and reconstructs the original text.

## 6. Practice Questions and Exercises

1.  **Question:** Given the frequency table `[('g', 1), ('h', 1), ('i', 1), ('j', 1), ('k', 1), ('l', 1)]`, draw the resulting Huffman tree. (Multiple possible valid trees exist based on the merging order). What are the codes for 'g', 'h', 'i', 'j', 'k', and 'l'?

    **Answer:**
    Because all letters have the same frequency, the merging order will determine the structure.  One possible tree (and code assignment) is:

    ```
        Node(6,
            Node(3,
                Node(1, Leaf('g',1), Leaf('h',1)),
                Node(2,Leaf('i',1), Leaf('j',1))),
            Node(3,
                Leaf('k',1),
                Leaf('l',1)))
    ```

    Then, one possible code table is:

    *   g: 000
    *   h: 001
    *   i: 010
    *   j: 011
    *   k: 10
    *   l: 11

2.  **Exercise:** Modify the `buildHuffmanTree` function to handle an empty frequency table. What should it return in that case?

    **Answer (Haskell):**

    ```haskell
    buildHuffmanTree :: FrequencyTable -> Maybe HuffmanTree -- Returning Maybe to handle the possibility of empty table
    buildHuffmanTree table
      | null table = Nothing  -- Handle the empty case
      | otherwise  = Just (buildTree (map (\(c, f) -> Leaf c f) table))
    ```

    **Answer (Scala):**

    ```scala
    def buildHuffmanTree(frequencyTable: FrequencyTable): Option[HuffmanTree] = {
      if (frequencyTable.isEmpty) {
        None
      } else {
        val leaves = mutable.PriorityQueue.empty[HuffmanTree](Ordering.by((tree: HuffmanTree) => tree.frequency).reverse)
        frequencyTable.foreach(t => leaves.enqueue(Leaf(t._1, t._2)))
        Some(buildTree(leaves))
      }
    }
    ```

    We return `Nothing` (Haskell) or `None` (Scala) if the frequency table is empty, because there is no valid Huffman tree that can be built from it.  Using `Maybe` (Haskell) or `Option` (Scala) enforces that the caller of the function handles this edge case.  The main function must also be modified to handle this `Maybe` or `Option` value.

3.  **Exercise:** Write a function to calculate the average code length for a given text and Huffman tree. This is a measure of the compression ratio.

    **Answer (Haskell - conceptual):**

    ```haskell
    averageCodeLength :: String -> HuffmanTree -> Double
    averageCodeLength text tree =
      let
        codeTable = generateCodeTable tree
        totalCodeLength = fromIntegral $ sum $ map (length . (fromMaybe "" . flip lookup codeTable)) text
        totalChars = fromIntegral $ length text
      in
        totalCodeLength / totalChars
    ```

    **Answer (Scala - conceptual):**

    ```scala
    def averageCodeLength(text: String, tree: HuffmanTree): Double = {
      val codeTable = generateCodeTable(tree)
      val totalCodeLength = text.map(char => codeTable.getOrElse(char, "")).map(_.length).sum.toDouble
      val totalChars = text.length.toDouble
      totalCodeLength / totalChars
    }
    ```

    This function calculates the total length of the encoded text by summing the lengths of the codes for each character and then divides by the total number of characters in the original text.

## 7. Important Points to Remember

*   Huffman coding is a lossless data compression algorithm.
*   The Huffman tree is a key data structure in the Huffman coding algorithm.
*   Algebraic data types provide a natural way to represent the Huffman tree in functional programming.
*   The code table is generated from the Huffman tree and used for encoding and decoding.
*   Huffman coding assigns shorter codes to more frequent characters, resulting in compression.
*   Prefix codes ensure unambiguous decoding.
*   Consider edge cases such as empty frequency tables and empty input strings.

This comprehensive study guide should provide a solid foundation for understanding Huffman coding and its implementation using algebraic data types in functional programming. Remember to practice writing and testing your own code to reinforce these concepts. Good luck!
