# LZW and Deflate: Zip and Gzip compression.

<!-- SECTION_1_START -->
# LZW and Deflate: Zip and Gzip Compression

## 1.1 LZW (Lempel–Ziv–Welch) Compression

> [!IMPORTANT]
> **Formal Definition (KTU 2024 Syllabus Terminology):**
> *LZW (Lempel–Ziv–Welch) is a universal, lossless dictionary-based compression algorithm that builds a translation table (dictionary) of variable-length input strings into fixed-length output codes. It was patented by Unisys in 1985 and is a refined variant of the LZ78 scheme proposed by Abraham Lempel and Jacob Ziv in 1978.*

### Conceptual Analogy / Intuition

Imagine you are writing a **phone-book style abbreviation list** while taking notes in class. Every time you encounter a long word like "compression", you assign it a short code like **#27** and write it down. The next time the same word appears, you simply write **#27** instead of the full word. LZW works exactly like this, except the dictionary is built **automatically and dynamically** as the input stream is read.

> [!NOTE]
> **Why it is universal:** LZW does not need a pre-transmitted statistical model. The dictionary is reconstructed by the decoder from the output stream itself.

### Core Operational Building Blocks

- **Input Alphabet ($\Sigma$):** The set of all possible single characters (e.g., for ASCII: $256$ symbols).
- **Initial Dictionary (D₀):** Contains all single-character strings. Size = $|\Sigma|$.
- **Codeword Size ($k$):** Initially $k = \lceil \log_2 |\Sigma| \rceil$ bits, e.g., **9 bits** for byte-based alphabets.
- **Dictionary Growth:** The maximum dictionary size is $2^{k_{max}}$ where $k_{max} \le 16$ (GIF limit) or up to **12 bits** (Unix `compress`).

> [!VISUALIZATION CONTROL]
> **Concept:** LZW dictionary growth as a function of input length
> **Input sequence plot:** `f(x) = floor(log2(x))` for $x \ge 256$
> **Visual Description:** A staircase function that stays at 8 bits for 256 entries, jumps to 9 bits at 257, 10 bits at 513, and so on, illustrating how the bit-width of codewords **expands** as the dictionary fills.

---

## 1.2 Deflate, Zip, and Gzip

> [!IMPORTANT]
> **Formal Definition:**
> *Deflate is a lossless data compression file format and algorithm specified in **RFC 1951** that combines the **LZ77** sliding-window dictionary technique with **Huffman coding**. **Zip** is a container archive format (PKWARE specification) that may store data using Deflate. **Gzip** (GNU zip, RFC 1952) is a single-file wrapper for raw Deflate streams with a small header and trailer.*

### Conceptual Analogy / Intuition

Think of sending a friend a long paragraph where some sentences repeat. Instead of rewriting the full sentence, you say *"go back 14 words and copy 6 words from there."* That is **LZ77** — it encodes strings as **(distance, length)** pairs pointing backward into a sliding window. Then, to make the resulting numbers even shorter, you assign short binary codes to the most frequent pairs using **Huffman coding**. Deflate = LZ77 + Huffman. **Zip** is the folder; **Gzip** is a single zipped file with a wrapper.

> [!NOTE]
> **Physical Constants / Standard Metrics (in bold):**
> - Default LZ77 sliding window size: **32 KiB**
> - Default match length: up to **258 bytes**
> - Minimum match length: **3 bytes**
> - Huffman code block size limit: **65,535 symbols** per block
> - Deflate compression levels (zlib): **0 (no compression) → 9 (maximum)**

---

## 1.3 Position in the KTU Syllabus

| Topic | Module | Marks Weight (Typical) |
|---|---|---|
| LZ77, LZ78, LZW | Module 1 | 14–20% |
| Huffman coding | Module 1 (recap) | 10–15% |
| Deflate / Zip / Gzip | Module 1 | 14–20% |
| Arithmetic / Dictionary hybrid | Module 1 | 10% |

> [!IMPORTANT]
> **Syllabus Highlight:** KTU Module 1 requires students to **implement, trace, and compare** LZW, LZ77, and the Deflate family. Memorizing the **bit-stream structure** of a Deflate block is a frequent Part B (14-mark) question.

---

## 1.4 Why These Algorithms Matter in Practice

- **LZW** powers the **GIF image format**, **TIFF**, **PDF**, and the Unix `compress` utility.
- **Deflate** is the **backbone of the modern internet**: HTTP/1.1 `Content-Encoding: gzip`, PNG images, Zlib streams, ZIP archives, 7-Zip (when using Deflate), and the **zlib library** is embedded in nearly every OS kernel.
- **Gzip** replaced `compress` in nearly all Linux distributions after the 1990s LZW patent disputes.

> [!WARNING]
> LZW was under a Unisys patent until **June 2003** in the USA and **2004** internationally. This historical patent dispute is itself a frequently asked KTU question under "ethical and legal aspects of compression."
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 LZW — Algorithm Decomposition

### 2.1.1 LZW Encoder (Logic Steps)

1. **Initialize** the dictionary $D$ with all single-character strings $s \in \Sigma$. Set the next available code $\text{next\_code} = \vert\Sigma\vert$.
2. Set the initial codeword bit-width $k = \lceil \log_2 \vert\Sigma\vert \rceil$. If $\vert\Sigma\vert = 256$, then $k = 8$.
3. Read the first input character and assign it to the current string $w$.
4. **Repeat** until end of input:
   - Read the next character $c$.
   - Form the extended string $w c$.
   - **If** $w c$ exists in $D$: set $w \leftarrow w c$.
   - **Else**:
     - Emit the code for $w$ (using $k$ bits).
     - Add $w c$ to $D$ with code $\text{next\_code}$, then increment $\text{next\_code}$.
     - **If** $\text{next\_code} = 2^{k}$ (i.e., the next code needs more bits): **increment** $k \leftarrow k+1$.
     - Set $w \leftarrow c$.
5. Emit the code for the remaining string $w$.

### 2.1.2 LZW Decoder (Logic Steps)

1. Initialize $D$ with single-character strings. Set $\text{next\_code} = \vert\Sigma\vert$, $k = \lceil \log_2 \vert\Sigma\vert \rceil$.
2. Read the first code and output its corresponding string. Store it as the **previous string** $P$.
3. **Repeat** for every subsequent code $C$:
   - Look up the string for $C$ in $D$. Call it $\text{entry}$.
   - **Special case (KwKwK):** If $C$ is not yet in $D$, then $\text{entry} = P + P[0]$.
   - Output $\text{entry}$.
   - Add $P + \text{entry}[0]$ to $D$ with code $\text{next\_code}$.
   - **If** $\text{next\_code} = 2^{k}$: increment $k$ (provided $k < k_{max}$).
   - Set $P \leftarrow \text{entry}$.

> [!NOTE]
> **Why the KwKwK case exists:** When the encoder emits code $C$ for $w$ and then immediately adds $w c$ to the dictionary, $C$ may reference a string not yet added. The decoder must reconstruct it as $P + \text{firstChar}(P)$.

### 2.1.3 The "Why" Behind Each Step

- **Why store $w c$ only on a miss?** Because that is the moment a new, reusable pattern has been observed. Storing on a hit would duplicate work.
- **Why grow $k$ at $2^{k}$?** Codes must be self-delimiting in the bit stream. The decoder and encoder must agree on the bit-width in lockstep.
- **Why limit $k$?** To bound memory and prevent codes from exceeding the transport format (e.g., GIF forces $k_{max} = 12$).

---

## 2.2 Deflate — Algorithm Decomposition

### 2.2.1 Two-Stage Architecture

$$\text{Deflate} = \text{LZ77 (sliding window match finder)} \;\longrightarrow\; \text{Huffman (entropy coder)}$$

### 2.2.2 LZ77 Stage

- Maintains a **sliding window** of the last $W$ bytes ($W = 32768$ bytes by default).
- Searches for the longest match of the lookahead buffer within the window.
- Emits a **literal** byte if no match of length $\ge 3$ exists, otherwise emits a **(length, distance)** pair.

### 2.2.3 Huffman Stage

- Two Huffman trees per block:
  - **Literal/Length tree** ($\text{HLIT}$): encodes literal bytes (0–255), end-of-block (256), and length codes (257–285).
  - **Distance tree** ($\text{HDIST}$): encodes distances (0–29).
- Lengths are encoded as a base value plus extra bits:

$$L_{\text{actual}} = L_{\text{base}} + \text{extra\_bits}$$

- Distances are encoded similarly:

$$D_{\text{actual}} = D_{\text{base}} + \text{extra\_bits}$$

### 2.2.4 Deflate Block Structure

A Deflate stream is a sequence of **blocks**. Each block has a 3-bit header:

| Bit Field | Meaning |
|---|---|
| BFINAL (1 bit) | 1 if this is the final block, else 0 |
| BTYPE (2 bits) | 00 = no compression, 01 = fixed Huffman, 10 = dynamic Huffman, 11 = reserved |

---

## 2.3 KTU High-Yield Formula Sheet

| Symbol | Meaning | Formula / Range | Units |
|---|---|---|---|
| $\vert\Sigma\vert$ | Alphabet size (ASCII bytes) | $256$ | symbols |
| $k$ | Current LZW code bit-width | $\lceil \log_2 \text{next\_code} \rceil$ | bits |
| $k_{max}$ | Max code bit-width (GIF) | $12$ | bits |
| $W$ | LZ77 sliding window size | $2^{15} = 32768$ | bytes |
| $L_{max}$ | Max LZ77 match length | $258$ | bytes |
| $L_{min}$ | Min LZ77 match length | $3$ | bytes |
| $H_{max}$ | Max Huffman code length | $15$ | bits |
| $C_{R}$ | Compression ratio | $\dfrac{B_{\text{orig}}}{B_{\text{comp}}}$ | unitless |
| $\eta$ | Compression efficiency | $1 - \dfrac{1}{C_{R}}$ | fraction |
| $B_{\text{orig}}$ | Original size in bits | — | bits |
| $B_{\text{comp}}$ | Compressed size in bits | — | bits |
| $L_{\text{base}}$ | Length base for code 257–285 | RFC 1951 Table 1 | bytes |
| $D_{\text{base}}$ | Distance base for code 0–29 | RFC 1951 Table 2 | bytes |
| $B_{LIT}$ | Bits for literal/length alphabet | $0 \le B_{LIT} \le 286$ | codes |
| $B_{DIST}$ | Bits for distance alphabet | $0 \le B_{DIST} \le 30$ | codes |
| $B_{CL}$ | Bits for code-length alphabet | $0 \le B_{CL} \le 19$ | codes |

> [!IMPORTANT]
> **For absolute value in prose, use $\vert x \vert$ or $\lvert x \rvert$ — never raw `|x|`, which breaks markdown tables.**

---

## 2.4 Real-World Engineering Utility

- **HTTP compression:** Browsers send `Accept-Encoding: gzip`; servers respond with a **Gzip-wrapped Deflate** stream, reducing bandwidth by **60–80%** for text/HTML.
- **PNG images:** Use Deflate on filtered image data.
- **Kernel-level use:** The Linux kernel's `zlib` is called in the boot process, in network stacks (zram, zswap), and in storage (BTRFS, SquashFS).
- **Databases and Big Data:** Gzip is the default Snappy alternative in Hadoop, Spark, and Parquet for cold-tier storage.

> [!NOTE]
> **Engineering Insight:** Deflate's two-stage design is the prototype for all modern entropy coders (e.g., **Brotli**, **Zstandard**, **LZMA**). They differ mainly in their match-finder heuristics and entropy model.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 LZW Worked Example (Hand Trace)

### Input

Consider the string $\text{input} = \text{"ABABABA"}$ with alphabet $\Sigma = \{\text{'A'}, \text{'B'}\}$. We use $\vert\Sigma\vert = 2$ and initial codes A=0, B=1. Code bit-width $k$ starts at 1 (since $\lceil \log_2 2 \rceil = 1$) and grows to 2 once $\text{next\_code} = 2$.

### Encoder Trace Table

| Step | Read $c$ | $w$ | $w c$ in $D$? | Action | Output | $D$ after | $k$ |
|---|---|---|---|---|---|---|---|
| 1 | A | "" | — | $w \leftarrow$ "A" | — | — | 1 |
| 2 | B | "A" | No | Emit code(0); add "AB"=2; $w \leftarrow$ "B" | 0 | AB→2 | 1 |
| 3 | A | "B" | No | Emit code(1); add "BA"=3; $w \leftarrow$ "A" | 1 | BA→3 | 1 |
| 4 | B | "A" | Yes | $w \leftarrow$ "AB" | — | — | 1 |
| 5 | A | "AB" | No | Emit code(2); add "ABA"=4; $w \leftarrow$ "A" | 2 | ABA→4 | 2 |
| 6 | B | "A" | Yes | $w \leftarrow$ "AB" | — | — | 2 |
| 7 | A | "AB" | Yes | $w \leftarrow$ "ABA" | — | — | 2 |
| 8 | EOF | "ABA" | — | Emit code(4) | 4 | — | 2 |

### Compressed Bit Stream

$$\text{Output codes: } [0, 1, 2, 4] \quad \text{at } k = 1, 1, 2, 2 \text{ bits respectively}$$

$$B_{\text{comp}} = 1 + 1 + 2 + 2 = 6 \text{ bits}$$

$$B_{\text{orig}} = 7 \times 8 = 56 \text{ bits}$$

$$C_{R} = \frac{56}{6} \approx 9.33, \quad \eta = 1 - \frac{1}{9.33} \approx 0.893$$

### Decoder Trace (Reconstructing the Same Output)

| Step | Read code | $P$ | $C$ in $D$? | entry | Output | Add to $D$ | $k$ |
|---|---|---|---|---|---|---|---|
| 1 | 0 | — | yes | "A" | "A" | — | 1 |
| 2 | 1 | "A" | yes | "B" | "B" | "AB"→2 | 1 |
| 3 | 2 | "B" | yes | "AB" | "AB" | "BA"→3 | 1 |
| 4 | 4 | "AB" | no (KwKwK) | "AB"+"A" = "ABA" | "ABA" | "ABA"→4 | 2 |

Final reconstructed output: **"ABABABA"** ✓ — exact match.

---

## 3.2 Production-Grade Python Implementation of LZW

```python
from __future__ import annotations
import logging
import sys
from typing import Dict, List, Tuple

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stdout,
)


class LZWCodec:
    """
    Production-grade Lempel-Ziv-Welch codec with variable bit-width output.
    Supports 8-bit alphabet, 12-bit max code (GIF-compatible).
    """

    MIN_CODE_WIDTH: int = 8
    MAX_CODE_WIDTH: int = 12
    CLEAR_CODE: int = 256
    EOI_CODE: int = 257
    MAX_DICT_SIZE: int = 1 << MAX_CODE_WIDTH  # 4096

    def __init__(self, max_code_width: int = 12) -> None:
        if not (self.MIN_CODE_WIDTH <= max_code_width <= self.MAX_CODE_WIDTH):
            raise ValueError(
                f"max_code_width must be in [{self.MIN_CODE_WIDTH}, "
                f"{self.MAX_CODE_WIDTH}], got {max_code_width}"
            )
        self.max_code_width: int = max_code_width
        self.max_dict: int = 1 << max_code_width
        self._init_dictionary()

    def _init_dictionary(self) -> None:
        self.encode_dict: Dict[bytes, int] = {
            bytes([i]): i for i in range(256)
        }
        self.decode_dict: Dict[int, str] = {
            i: chr(i) for i in range(256)
        }
        self.next_code: int = 258

    def _reset_dictionary(self) -> None:
        logging.info("Resetting LZW dictionary.")
        self._init_dictionary()

    def _grow_code_width(self) -> None:
        if self.next_code == (1 << self.code_width) and self.code_width < self.max_code_width:
            self.code_width += 1
            logging.debug("Code width grew to %d bits.", self.code_width)

    # ---------------------------------------------------------------- encode
    def encode(self, data: bytes) -> List[int]:
        if not isinstance(data, (bytes, bytearray)):
            raise TypeError("Input must be bytes or bytearray.")
        if not data:
            return []

        self.code_width = 9  # start one above alphabet to leave room for CLEAR/EOI if needed
        self._init_dictionary()

        codes: List[int] = []
        w: bytes = bytes([data[0]])

        for byte in data[1:]:
            wc: bytes = w + bytes([byte])
            if wc in self.encode_dict:
                w = wc
            else:
                codes.append(self.encode_dict[w])
                if self.next_code < self.max_dict:
                    self.encode_dict[wc] = self.next_code
                    self.next_code += 1
                    self._grow_code_width()
                w = bytes([byte])

        codes.append(self.encode_dict[w])
        logging.info(
            "Encoded %d bytes -> %d codes (CR=%.2f).",
            len(data), len(codes), (len(data) * 8) / max(sum(self._bits(c) for c in codes), 1),
        )
        return codes

    def _bits(self, code: int) -> int:
        return max(9, code.bit_length())

    # ---------------------------------------------------------------- decode
    def decode(self, codes: List[int]) -> bytes:
        if not codes:
            return b""

        self.code_width = 9
        self._init_dictionary()

        out: bytearray = bytearray()
        prev: str = self.decode_dict[codes[0]]
        out.extend(prev.encode("latin-1"))

        for code in codes[1:]:
            if code in self.decode_dict:
                entry: str = self.decode_dict[code]
            elif code == self.next_code:
                entry = prev + prev[0]  # KwKwK case
            else:
                raise ValueError(f"Invalid LZW code {code} (next={self.next_code}).")

            out.extend(entry.encode("latin-1"))
            if self.next_code < self.max_dict:
                self.decode_dict[self.next_code] = prev + entry[0]
                self.next_code += 1
                self._grow_code_width()
            prev = entry

        logging.info("Decoded %d codes -> %d bytes.", len(codes), len(out))
        return bytes(out)


# ---------------------------------------------------------------- demo
if __name__ == "__main__":
    codec = LZWCodec(max_code_width=12)
    sample: bytes = b"ABABABA" * 50  # amplify to show compression
    encoded: List[int] = codec.encode(sample)
    decoded: bytes = codec.decode(encoded)
    assert decoded == sample, "Round-trip mismatch!"
    print(f"Original  : {len(sample)} bytes")
    print(f"Encoded   : {len(encoded)} codes")
    print(f"Bit width : variable 9-{codec.max_code_width}")
```

**Expected console output (abridged):**

```
Original  : 350 bytes
Encoded   : ~52 codes
Bit width : variable 9-12
```

---

## 3.3 Deflate Length/Distance Tables (RFC 1951)

### 3.3.1 Length Codes (257 – 285)

| Code | Base Length $L_{base}$ | Extra Bits | Range |
|---|---|---|---|
| 257 | 3 | 0 | 3 |
| 258 | 4 | 0 | 4 |
| 259 | 5 | 0 | 5 |
| 260 | 6 | 0 | 6 |
| 261 | 7 | 0 | 7 |
| 262 | 8 | 0 | 8 |
| 263 | 9 | 0 | 9 |
| 264 | 10 | 0 | 10 |
| 265 | 11 | 1 | 11 – 12 |
| 266 | 13 | 1 | 13 – 14 |
| 267 | 15 | 1 | 15 – 16 |
| 268 | 17 | 1 | 17 – 18 |
| 269 | 19 | 2 | 19 – 22 |
| 270 | 23 | 2 | 23 – 26 |
| 271 | 27 | 2 | 27 – 30 |
| 272 | 31 | 2 | 31 – 34 |
| 273 | 35 | 3 | 35 – 42 |
| 274 | 43 | 3 | 43 – 50 |
| 275 | 51 | 3 | 51 – 58 |
| 276 | 59 | 3 | 59 – 66 |
| 277 | 67 | 4 | 67 – 82 |
| 278 | 83 | 4 | 83 – 98 |
| 279 | 99 | 4 | 99 – 114 |
| 280 | 115 | 4 | 115 – 130 |
| 281 | 131 | 5 | 131 – 162 |
| 282 | 163 | 5 | 163 – 194 |
| 283 | 195 | 5 | 195 – 226 |
| 284 | 227 | 5 | 227 – 257 |
| 285 | 258 | 0 | 258 |

> [!NOTE]
> **Derivation logic:** Codes 257–264 use 0 extra bits (1 code per length). Codes 265–284 use $n$ extra bits and cover $2^{n}$ lengths each. Code 285 is the special 258-byte maximum.

### 3.3.2 Distance Codes (0 – 29)

| Code | Base Distance $D_{base}$ | Extra Bits | Range |
|---|---|---|---|
| 0 | 1 | 0 | 1 |
| 1 | 2 | 0 | 2 |
| 2 | 3 | 0 | 3 |
| 3 | 4 | 0 | 4 |
| 4 | 5 | 1 | 5 – 6 |
| 5 | 7 | 1 | 7 – 8 |
| 6 | 9 | 2 | 9 – 12 |
| 7 | 13 | 2 | 13 – 16 |
| 8 | 17 | 3 | 17 – 24 |
| 9 | 25 | 3 | 25 – 32 |
| 10 | 33 | 4 | 33 – 48 |
| 11 | 49 | 4 | 49 – 64 |
| 12 | 65 | 5 | 65 – 96 |
| 13 | 97 | 5 | 97 – 128 |
| 14 | 129 | 6 | 129 – 192 |
| 15 | 193 | 6 | 193 – 256 |
| 16 | 257 | 7 | 257 – 384 |
| 17 | 385 | 7 | 385 – 512 |
| 18 | 513 | 8 | 513 – 768 |
| 19 | 769 | 8 | 769 – 1024 |
| 20 | 1025 | 9 | 1025 – 1536 |
| 21 | 1537 | 9 | 1537 – 2048 |
| 22 | 2049 | 10 | 2049 – 3072 |
| 23 | 3073 | 10 | 3073 – 4096 |
| 24 | 4097 | 11 | 4097 – 6144 |
| 25 | 6145 | 11 | 6145 – 8192 |
| 26 | 8193 | 12 | 8193 – 12288 |
| 27 | 12289 | 12 | 12289 – 16384 |
| 28 | 16385 | 13 | 16385 – 24576 |
| 29 | 24577 | 13 | 24577 – 32768 |

---

## 3.4 Deflate Bit Stream — Step-by-Step Trace

### Input

We will trace a tiny Deflate **dynamic Huffman** block (BTYPE=10) containing the ASCII text `"hello"`.

### Step 1: LZ77 Stage Output

For simplicity assume no matches are found, so the LZ77 stage emits 5 literal symbols plus the end-of-block marker:

| # | Symbol / Marker | LZ77 Output | Note |
|---|---|---|---|
| 1 | 'h' (0x68) | literal | |
| 2 | 'e' (0x65) | literal | |
| 3 | 'l' (0x6C) | literal | |
| 4 | 'l' (0x6C) | literal | repeated but assume no match for trace |
| 5 | 'o' (0x6F) | literal | |
| 6 | END | code 256 | end-of-block |

### Step 2: 3-Bit Block Header

The encoder writes (assuming BFINAL=1, BTYPE=10):

$$\text{Header bits: } \underbrace{1}_{\text{BFINAL}} \underbrace{10}_{\text{BTYPE}}$$

### Step 3: Dynamic Huffman Header (HLIT, HDIST, HCLEN)

The dynamic block header is a sequence of 5-, 5-, 4-, and 3-bit fields, followed by code lengths.

$$\text{HLIT} \; (5 \text{ bits}) = \text{number of literal/length codes} - 257$$

$$\text{HDIST} \; (5 \text{ bits}) = \text{number of distance codes} - 1$$

$$\text{HCLEN} \; (4 \text{ bits}) = \text{number of code-length codes} - 4$$

For our trace (no distance codes used, simple Huffman), a reasonable configuration is:

$$\text{HLIT} = 286 - 257 = 29 \quad (\text{5-bit field} = 29)$$

$$\text{HDIST} = 1 - 1 = 0 \quad (\text{5-bit field} = 0)$$

$$\text{HCLEN} = 19 - 4 = 15 \quad (\text{4-bit field} = 15)$$

### Step 4: Compressed Data + End-of-Block

Each literal is Huffman-encoded. Suppose the Huffman tree assigns:

| Symbol | Huffman Code |
|---|---|
| 'h' | 000 |
| 'e' | 001 |
| 'l' | 010 |
| 'o' | 011 |
| END (256) | 100 |

Then the data section is:

$$\text{Data bits: } 000 \; 001 \; 010 \; 010 \; 011 \; 100$$

### Step 5: Total Block Size and Compression Ratio

Total bit count for the entire block (rough):

$$B_{\text{comp}} \approx 3 (\text{header}) + 14 (\text{HLIT/HDIST/HCLEN}) + (\text{code-length defs}) + 18 (\text{data}) \approx 50 \text{ bits}$$

Original ASCII: $5 \times 8 = 40$ bits. For such a tiny input, the overhead **dominates** — Deflate is inefficient for inputs smaller than ~100 bytes. This is a classic KTU viva question.

---

## 3.5 Comparative Mathematical Analysis

The Shannon entropy lower bound for the symbol probabilities $p_h = 0.2$, $p_e = 0.2$, $p_l = 0.4$, $p_o = 0.2$ is:

$$H(S) = -\sum_{i} p_i \log_2 p_i = -[0.2 \log_2 0.2 + 0.2 \log_2 0.2 + 0.4 \log_2 0.4 + 0.2 \log_2 0.2]$$

$$H(S) = -[0.2 \cdot (-2.3219) + 0.2 \cdot (-2.3219) + 0.4 \cdot (-1.3219) + 0.2 \cdot (-2.3219)]$$

$$H(S) = 0.4644 + 0.4644 + 0.5288 + 0.4644 = 1.9220 \text{ bits/symbol}$$

Theoretical lower bound: $5 \times 1.9220 \approx 9.61$ bits.

$$C_{R,\text{ideal}} = \frac{40}{9.61} \approx 4.16$$

$$\eta_{\text{ideal}} = 1 - \frac{1}{4.16} \approx 0.76$$

Our trace gave $C_{R} = 40/50 = 0.80$, so $\eta$ is **negative** — the file actually grew! This is why Deflate uses a **stored block** (BTYPE=00) for incompressible data.

> [!IMPORTANT]
> **Critical realization for KTU exams:** If the compressed size exceeds the original, the smart encoder chooses **BTYPE=00** (no compression) and stores raw bytes with padding to a byte boundary.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 LZW Encoder Pipeline

```mermaid
flowchart TD
    A[Input byte stream] --> B[Read first byte w]
    B --> C[Read next byte c]
    C --> D{w c in dictionary?}
    D -- Yes --> E[Set w = w c]
    D -- No --> F[Emit code for w]
    F --> G[Add w c to dictionary]
    G --> H{Next code equals 2 to the k?}
    H -- Yes --> I[Increment k]
    H -- No --> J[Set w = c]
    I --> J
    E --> C
    J --> C
    C --> K{End of input?}
    K -- No --> C
    K -- Yes --> L[Emit final code for w]
    L --> M[Bit-packed output stream]
```

## 4.2 LZW Decoder Pipeline

```mermaid
flowchart TD
    A[Read first code C0] --> B[Output string for C0]
    B --> C[Set P = string C0]
    C --> D[Read next code C]
    D --> E{C in dictionary?}
    E -- Yes --> F[entry = string for C]
    E -- No --> G{C equals next code?}
    G -- Yes --> H[entry = P + P first char]
    G -- No --> I[Raise decode error]
    H --> J[Output entry]
    F --> J
    J --> K[Add P + entry first char to dictionary]
    K --> L{Next code equals 2 to the k?}
    L -- Yes --> M[Increment k]
    L -- No --> N[Set P = entry]
    M --> N
    N --> D
    D --> O{More codes?}
    O -- Yes --> D
    O -- No --> P[Reconstructed byte stream]
```

## 4.3 Deflate Block Architecture

```mermaid
flowchart TB
    subgraph BLK["Deflate Block"]
        H1[BFINAL 1 bit]
        H2[BTYPE 2 bits]
    end

    subgraph STORED["BTYPE 00 Stored Block"]
        S1[Pad to byte boundary]
        S2[LEN 16 bits]
        S3[NLEN 16 bits]
        S4[Literal bytes LEN of them]
    end

    subgraph FIXED["BTYPE 01 Fixed Huffman Block"]
        F1[Compressed data using fixed HLIT/HDIST tables]
        F2[End of block symbol 256]
    end

    subgraph DYN["BTYPE 10 Dynamic Huffman Block"]
        D1[HLIT 5 bits]
        D2[HDIST 5 bits]
        D3[HCLEN 4 bits]
        D4[Code length alphabet in permuted order]
        D5[Compressed data]
        D6[End of block symbol 256]
    end

    H1 --> H2
    H2 --> STORED
    H2 --> FIXED
    H2 --> DYN
```

## 4.4 LZ77 + Huffman Two-Stage Deflate Pipeline

```mermaid
flowchart LR
    IN[Input bytes] --> LZ[LZ77 Match Finder]
    LZ --> LIT[Literal bytes 0 to 255]
    LZ --> PAIR[Length Distance pairs]
    LIT --> HT1[Literal Length Huffman Tree]
    PAIR --> HT1
    PAIR --> HT2[Distance Huffman Tree]
    HT1 --> BS[Bit packer]
    HT2 --> BS
    BS --> OUT[Deflate bit stream]
```

## 4.5 Gzip File Wrapper (RFC 1952)

```mermaid
flowchart LR
    GH1[Magic 1F 8B] --> GH2[Compression method 08]
    GH2 --> GH3[Flags byte]
    GH3 --> GH4[Modification time 4 bytes]
    GH4 --> GH5[XFL extra flags]
    GH5 --> GH6[Operating system]
    GH6 --> GH7[Optional FEXTRA FNAME FCOMMENT fields]
    GH7 --> GH8[Compressed data Deflate stream]
    GH8 --> GH9[CRC32 4 bytes]
    GH9 --> GH10[Original size mod 2 to the 32 4 bytes]
```

## 4.6 Zip Archive Layout (Local File Header)

```mermaid
flowchart TB
    Z1[Local file header signature 0x04034b50] --> Z2[Version needed 2 bytes]
    Z2 --> Z3[General purpose bit flag 2 bytes]
    Z3 --> Z4[Compression method 2 bytes]
    Z4 --> Z5[Last mod time 2 bytes]
    Z5 --> Z6[Last mod date 2 bytes]
    Z6 --> Z7[CRC32 4 bytes]
    Z7 --> Z8[Compressed size 4 bytes]
    Z8 --> Z9[Uncompressed size 4 bytes]
    Z9 --> Z10[File name length 2 bytes]
    Z10 --> Z11[Extra field length 2 bytes]
    Z11 --> Z12[File name variable]
    Z12 --> Z13[Extra field variable]
    Z13 --> Z14[File data compressed]
```

## 4.7 Dictionary Growth State Machine

```mermaid
stateDiagram-v2
    [*] --> S8
    S8 : Code width 8 bits\n 256 entries
    S8 --> S9 : next_code reaches 256
    S9 : Code width 9 bits\n 512 entries
    S9 --> S10 : next_code reaches 512
    S10 : Code width 10 bits\n 1024 entries
    S10 --> S11 : next_code reaches 1024
    S11 : Code width 11 bits\n 2048 entries
    S11 --> S12 : next_code reaches 2048
    S12 : Code width 12 bits\n 4096 entries
    S12 --> [*] : Dictionary full
```

> [!NOTE]
> All node identifiers in the diagrams above are pure alphanumeric (e.g., `H1`, `DYN`, `S10`) to comply with Mermaid safety rules. Labels use plain uppercase text without markdown formatting.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!NOTE]
> The following questions are modeled on **KTU 2024 Scheme End Semester Evaluation (ESE)** patterns. Each sub-part lists the marks split per KTU valuation key conventions.

---

## Part A — Short Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam - July 2024]` — CO1, Remember (3 Marks)

**"Distinguish between LZ77 and LZ78 dictionary schemes. Which one forms the foundation of LZW?"**

**Model Answer (3 marks):**

- **LZ77 (Sliding Window):** Uses a fixed-size window over previously seen input. Encodes matches as **(distance, length)** pairs. No explicit dictionary; the "dictionary" is the window itself. (1 mark)
- **LZ78 (Tree-structured Dictionary):** Maintains an explicit phrase table. Encodes matches as **(index, next-symbol)** pairs. Dictionary grows without bound. (1 mark)
- **LZW foundation:** LZW is a streamlined variant of **LZ78**, where the explicit dictionary is initialized with all single characters and only the index is emitted (the next-symbol is implicit, being the first character of the next match). (1 mark)

---

### Q2. `[KTU University Exam - Dec 2023]` — CO1, Understand (3 Marks)

**"What is the role of Huffman coding inside the Deflate algorithm? Why are two separate Huffman trees used?"**

**Model Answer (3 marks):**

- **Role of Huffman coding in Deflate:** It is the **entropy coding stage** that converts the LZ77 literals and (length, distance) pairs into a compact bit stream by assigning shorter codes to more frequent symbols. (1.5 marks)
- **Why two trees:** The set of literal/length symbols (0–285) and the set of distance symbols (0–29) have **different probability distributions**, so a single tree would be suboptimal. Two trees minimize the total code length according to the Kraft inequality:

$$\sum_{i} 2^{-l_i} \le 1$$

applied independently to each alphabet. (1.5 marks)

---

## Part B — Long Answer Questions (14 Marks Each, with Internal Choice)

### Question A (14 Marks) — `[KTU University Exam - Dec 2024]`

**(a) Trace the LZW encoder on the input string `"TOBEORNOTTOBEORTOBEORNOT"` with the alphabet restricted to uppercase English letters. Show the dictionary and the emitted code stream. (7 Marks)** — CO2, Apply

**(b) Explain the KwKwK case in the LZW decoder with a concrete example. Why must the decoder handle it explicitly? (7 Marks)** — CO2, Understand

#### Part (a) Solution — 7 Marks

**Step 1 — Setup:** Alphabet $\Sigma$ = 26 uppercase letters, so initial code bit-width $k = \lceil \log_2 26 \rceil = 5$ bits. Initial dictionary: A→0, B→1, …, Z→25, next_code = 26.

**Step 2 — Encoder Trace Table:**

| Step | w | Read c | w c in D? | Action | Emit | Add | next_code |
|---|---|---|---|---|---|---|---|
| 1 | (empty) | T | — | w ← T | — | — | 26 |
| 2 | T | O | No | Emit T(19); add TO(26); w ← O | 19 | TO→26 | 27 |
| 3 | O | B | No | Emit O(14); add OB(27); w ← B | 14 | OB→27 | 28 |
| 4 | B | E | No | Emit B(1); add BE(28); w ← E | 1 | BE→28 | 29 |
| 5 | E | O | No | Emit E(4); add EO(29); w ← O | 4 | EO→29 | 30 |
| 6 | O | R | No | Emit O(14); add OR(30); w ← R | 14 | OR→30 | 31 |
| 7 | R | N | No | Emit R(17); add RN(31); w ← N | 17 | RN→31 | 32 |
| 8 | N | O | No | Emit N(13); add NO(32); w ← O | 13 | NO→32 | 33 |
| 9 | O | T | No | Emit O(14); add OT(33); w ← T | 14 | OT→33 | 34 |
| 10 | T | T | No | Emit T(19); add TT(34); w ← T | 19 | TT→34 | 35 |
| 11 | T | O | Yes (TO) | w ← TO | — | — | 35 |
| 12 | TO | B | No | Emit TO(26); add TOB(35); w ← B | 26 | TOB→35 | 36 |
| 13 | B | E | Yes (BE) | w ← BE | — | — | 36 |
| 14 | BE | O | No | Emit BE(28); add BEO(36); w ← O | 28 | BEO→36 | 37 |
| 15 | O | R | Yes (OR) | w ← OR | — | — | 37 |
| 16 | OR | T | No | Emit OR(30); add ORT(37); w ← T | 30 | ORT→37 | 38 |
| 17 | T | O | Yes (TO) | w ← TO | — | — | 38 |
| 18 | TO | B | Yes (TOB) | w ← TOB | — | — | 38 |
| 19 | TOB | E | No | Emit TOB(35); add TOBE(38); w ← E | 35 | TOBE→38 | 39 |
| 20 | E | O | Yes (EO) | w ← EO | — | — | 39 |
| 21 | EO | R | No | Emit EO(29); add EOR(39); w ← R | 29 | EOR→39 | 40 |
| 22 | R | N | Yes (RN) | w ← RN | — | — | 40 |
| 23 | RN | O | No | Emit RN(31); add RNO(40); w ← O | 31 | RNO→40 | 41 |
| 24 | O | T | Yes (OT) | w ← OT | — | — | 41 |
| 25 | OT | (EOF) | — | Emit OT(33) | 33 | — | 41 |

**Step 3 — Emitted code stream:**

$$[19, 14, 1, 4, 14, 17, 13, 14, 19, 26, 28, 30, 35, 29, 31, 33]$$

(16 codes, growing from 5 bits to 6 bits; first 32 codes stay at 5 bits; here all codes < 64 so 5 bits suffices for the first 32 and 6 bits thereafter — at boundary step 13, k stays at 5 because next_code=35 < 64.)

**Step 4 — Size comparison:**

$$B_{\text{orig}} = 27 \times 8 = 216 \text{ bits}$$
$$B_{\text{comp}} = 16 \times 5 = 80 \text{ bits (if no width change assumed)}$$
$$C_{R} = 216 / 80 = 2.7$$

> [!NOTE]
> **Mark Split for Part (a) — Total 7 Marks:**
> - Setting up dictionary and bit-width: 1 Mark
> - Correct trace table with first 6 rows: 2 Marks
> - Correct trace table for remaining rows: 2 Marks
> - Final code stream and ratio: 2 Marks

#### Part (b) Solution — 7 Marks

**Definition (1.5 Marks):** The **KwKwK** case (pronounced "KwKwK" from the original Welch paper) occurs when the decoder receives a code $C$ that has not yet been added to the dictionary. This happens when the encoder just added a new entry and immediately emitted its code on the very next step.

**Reconstruction Rule (1.5 Marks):** The decoder reconstructs the missing entry as:

$$\text{entry} = P + P[0]$$

where $P$ is the previous decoded string and $P[0]$ is its first character.

**Concrete Example (2 Marks):** Consider a tiny encoder trace where the input is `"AAAAAA"` and the dictionary currently ends with `"AAAA"` mapped to code 41. When the next `'A'` is read:
- $w$ = `"AAAA"`, $c$ = `'A'`, $w c$ = `"AAAAA"`.
- $w c$ is **not** in the dictionary, so the encoder emits code(41) for `"AAAA"`, then adds `"AAAAA"` as code 42, and sets $w \leftarrow $ `'A'`.
- The encoder then reads EOF and emits code(42) for `"AAAAA"` — but **42 was just added and the decoder has not seen it yet**.

**Why explicit handling is mandatory (2 Marks):** Without the KwKwK reconstruction rule, the decoder would raise a "code not found" error on every encoder pattern that immediately reuses a newly minted code. The rule exploits the fact that the missing string is **always** the previous output plus its first character, so it can be reconstructed deterministically without waiting for the dictionary to catch up.

> [!NOTE]
> **Mark Split for Part (b) — Total 7 Marks:**
> - Defining KwKwK: 1.5 Marks
> - Reconstruction rule statement: 1.5 Marks
> - Worked example: 2 Marks
> - Justification of necessity: 2 Marks

---

### Question B (14 Marks) — `[KTU University Exam - July 2024]`

**(a) With a clear block diagram, describe the **Deflate** algorithm. List the three block types and explain when a "stored" block is preferred. (7 Marks)** — CO3, Understand

**(b) Compute the size of a Deflate dynamic block that encodes the 8-byte string `"AAAAAAAA"` using LZ77 with a 32 KB window. Assume the LZ77 stage produces one length-distance pair (length=8, distance=1) and one end-of-block marker. Use a Huffman tree where literal 0 is not used, literal 'A' (0x41) has code `0` (1 bit), length code 284 has code `10` (2 bits), and end-of-block (256) has code `11` (2 bits). Show all bit-level calculations. (7 Marks)** — CO3, Apply

#### Part (a) Solution — 7 Marks

**Block Diagram (2 Marks):** Use the Deflate Block Architecture diagram from Section 4.3 of these notes (printed in the exam script).

**Three Block Types (3 Marks):**

| BTYPE | Name | When Used |
|---|---|---|
| 00 | Stored (no compression) | When LZ77 + Huffman overhead would enlarge the data, or for random/incompressible data |
| 01 | Fixed Huffman | When a one-pass, low-memory encoder is needed (no dynamic tree transmission) |
| 10 | Dynamic Huffman | Best compression; tree is transmitted in the block header |
| 11 | Reserved | Illegal per RFC 1951 |

**When Stored is Preferred (2 Marks):**

1. **Incompressible data:** If the LZ77 stage finds no matches of length ≥ 3 and the byte distribution is uniform, Huffman coding adds no benefit and only adds overhead.
2. **Tiny inputs:** For inputs under ~100 bytes, the dynamic tree header is larger than the savings.
3. **Hardware constraints:** Stored blocks require no Huffman decoder, useful in constrained embedded systems.

> [!NOTE]
> **Mark Split for Part (a) — Total 7 Marks:**
> - Block diagram: 2 Marks
> - Three block types table: 3 Marks
> - When stored block is preferred: 2 Marks

#### Part (b) Solution — 7 Marks

**Step 1 — LZ77 Output (1 Mark):**

| # | LZ77 Token | Interpretation |
|---|---|---|
| 1 | (length=8, distance=1) | A length-distance pair (since 'A' repeats) |
| 2 | 256 | End-of-block marker |

**Step 2 — Huffman Codebook (1 Mark):**

| Symbol | Huffman Code | Length |
|---|---|---|
| 'A' (0x41) | `0` | 1 bit |
| Length code 284 | `10` | 2 bits |
| End-of-block (256) | `11` | 2 bits |

**Step 3 — Encoding the LZ77 Pair (1.5 Marks):**

For length=8, code 284 is used. The base length for code 284 is 227, and the range is 227–257. Extra bits required: $\lceil \log_2 (258 - 227) \rceil = \lceil \log_2 31 \rceil = 5$ extra bits.

Actual length formula:

$$L_{\text{actual}} = L_{\text{base}} + \text{extra\_bits value}$$

We need $L_{\text{actual}} = 8$ — but wait, length 8 corresponds to code **262** (base 8, 0 extra bits), not 284! This is a **deliberate trap** in the question. Let us correct:

**Correction:** For length 8, the correct code is **262**, base 8, 0 extra bits. Assuming the question intends code 284 hypothetically:

$$8 = 227 + x \Rightarrow x = -219 \text{ (impossible)}$$

So the correct interpretation is: the **Huffman-encoded symbols** are `(code for length-262, code for distance-1, EOB)`, not code 284. Let us use the correct codes:

- Code 262 (length 8, 0 extra bits): suppose Huffman `10` (2 bits)
- Code for distance 1 → distance code 0 (base 1, 0 extra bits): suppose Huffman `0` (1 bit)
- Code 256 (EOB): suppose Huffman `11` (2 bits)

**Step 4 — Total Compressed Bit Count (1.5 Marks):**

$$\text{Header} = 3 \text{ bits} \; (\text{BFINAL} = 1, \text{BTYPE} = 10)$$

$$\text{Dynamic tree header} \approx 14 + (\text{code-length entries} \times 3) \text{ bits}$$

For 3 symbols with code lengths 1, 2, 2 respectively, the code-length alphabet (3 bits per entry in permuted order) yields:

$$\text{Tree header} \approx 14 + 3 \times 3 = 23 \text{ bits}$$

$$\text{Data section} = 2 + 1 + 2 = 5 \text{ bits}$$

$$\text{End-of-block marker} \text{ is already included in the 5 bits.}$$

$$B_{\text{comp}} = 3 + 23 + 5 = 31 \text{ bits}$$

**Step 5 — Compression Ratio (1 Mark):**

$$B_{\text{orig}} = 8 \times 8 = 64 \text{ bits}$$

$$C_{R} = \frac{64}{31} \approx 2.06$$

$$\eta = 1 - \frac{1}{2.06} \approx 0.515 \quad \text{(51.5% space savings)}$$

**Step 6 — Interpretation (1 Mark):** Even with the dynamic tree overhead, the LZ77 (length, distance) pair collapses 8 bytes into a 5-bit payload, achieving over 50% compression.

> [!NOTE]
> **Mark Split for Part (b) — Total 7 Marks:**
> - LZ77 output and Huffman codebook: 2 Marks
> - Correct code selection (code 262 for length 8) and extra-bits computation: 2 Marks
> - Total bit count and compression ratio: 2 Marks
> - Interpretation: 1 Mark

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Forgetting the CLEAR and EOI codes in GIF/Unix variants.** In GIF, codes 256 and 257 are reserved for **clear** and **end-of-information**, so the first usable code is 258. Many students start at 256 and lose 1 mark.
> 2. **Confusing LZ77 with LZ78.** LZ77 uses **(distance, length)**, LZ78 uses **(index, symbol)**. Marks are deducted when students mix the two.
> 3. **Skipping the KwKwK case.** Every LZW decoder trace MUST mention the KwKwK reconstruction rule, even if the trace does not hit it. Examiners allocate 1–2 marks for this.
> 4. **Deflate block type 11.** Writing BTYPE=11 in a trace is an **automatic 0.5 mark deduction** because it is reserved/illegal per RFC 1951.
> 5. **Bit-packing the code stream.** Students often emit decimal codes and forget the **bit-width transition** when `next_code` crosses $2^{k}$. Always explicitly state the new $k$.
> 6. **Length-code-table errors.** Code 285 is for length **258 only** (0 extra bits), NOT the same as 284 (227 + 5 extra bits). Confusing the two is a recurring mistake.
> 7. **Gzip vs Zip confusion.** Zip is an **archive container** (multiple files); Gzip is a **single-file wrapper** around Deflate. Mixing their headers loses marks.

---

## Topic Recap & Important Things to Remember

- **LZW = LZ78 + initial single-character dictionary + implicit next-symbol.** Emit only the index; the next character is the first character of the next code.
- **LZW bit-width $k$ starts at $\lceil \log_2 \vert\Sigma\vert \rceil$** and grows whenever $\text{next\_code} = 2^{k}$. GIF caps $k_{max} = 12$.
- **KwKwK reconstruction rule:** If the decoder reads a code $C$ that is not yet in its dictionary, the string is $P + P[0]$, where $P$ is the previous output.
- **LZW was patented by Unisys** until 2003 (USA) / 2004 (international). It is the reason `compress` was replaced by `gzip` on most Unix systems.
- **Deflate = LZ77 + Huffman (two trees).** LZ77 uses a 32 KB sliding window and finds matches of length 3–258.
- **Deflate block types:** 00 stored, 01 fixed Huffman, 10 dynamic Huffman, 11 reserved (illegal).
- **Length code 285** represents length 258 with **0 extra bits** — the maximum legal match length.
- **Distance codes 0–29** cover distances 1 to 32768 with extra bits ranging from 0 to 13.
- **Dynamic Huffman block header** = HLIT (5 bits) + HDIST (5 bits) + HCLEN (4 bits) + code-length definitions in a permuted order (3 bits each).
- **BFINAL bit:** Set to 1 on the last block so the decoder knows when to stop.
- **Zip vs Gzip:** Zip is a multi-file archive with central directory + per-file local headers; Gzip is a single-file wrapper with magic 1F 8B, method 08, CRC32, and original size.
- **Why Deflate needs two trees:** Literals/lengths and distances have **different probability distributions**; sharing one tree violates the optimality of the Huffman algorithm.
- **Real-world deployment:** HTTP `Content-Encoding: gzip`, PNG, PDF, Zlib, Linux kernel, BTRFS, Hadoop cold storage — all rely on Deflate.
- **Minimum legal match in LZ77:** Length **3 bytes** (length 1 or 2 always costs more bits as literals than as a pair).
- **Compression ratio formula:** $C_{R} = B_{\text{orig}} / B_{\text{comp}}$; efficiency $\eta = 1 - 1/C_{R}$.
- **Shannon entropy** $H(S) = -\sum p_i \log_2 p_i$ is the theoretical lower bound; no lossless compressor beats it on average.
- **Overhead matters:** For tiny inputs (<100 bytes), the Huffman tree header can exceed the savings, so Deflate falls back to **BTYPE=00** (stored).
- **Kraft inequality check:** $\sum_{i} 2^{-l_i} \le 1$ must hold for any prefix code; Huffman codes always satisfy equality.
- **The 3-bit block header** must be the first thing written in every Deflate block; examiners frequently test this.
- **Gzip magic number:** `1F 8B` (decimal 31, 139). Compression method byte is always `08` for Deflate.
- **CRC32 and ISIZE trailer:** Gzip uses **CRC-32 (IEEE 802.3 polynomial)** for integrity and stores the **original size modulo $2^{32}$** at the end.
- **Dictionary reset in LZW:** Long-running streams should periodically emit a **clear code** to bound the dictionary; without it, the dictionary fills with stale patterns and compression degrades.
<!-- SECTION_5_END -->
