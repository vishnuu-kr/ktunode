---
title: "Types of files generated on CrossCompilation"
subject: "EMBEDDED SYSTEMS"
module: "Module 4: Integration and Testing of Embedded Hardware and Firmware :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c25c"
status: "completed"
scrapedAt: "2026-05-20T17:05:45.244Z"
---
# Embedded Systems: Module 4 - Integration and Testing of Embedded Hardware and Firmware

## Topic: Types of Files Generated on Cross-Compilation

### Learning Outcomes:

*   **Understand the purpose of cross-compilation in embedded systems development.**
*   **Identify and describe common file types generated during the cross-compilation process.**
*   **Explain the role of each file type in the embedded system development lifecycle.**
*   **Distinguish between different stages of the build process and the files produced at each stage.**
*   **Appreciate how these files are used to debug and deploy embedded applications.**

---

### 1. Introduction to Cross-Compilation

In embedded systems development, we often develop our software on a powerful host machine (e.g., a desktop PC running Linux or Windows) and then run this software on a different, typically less powerful, target embedded system (e.g., an ARM microcontroller on a development board). This process of compiling code for a different architecture than the one the compiler is running on is called **cross-compilation**.

**Why Cross-Compile?**

*   **Resource Constraints of Target Systems:** Embedded systems often have limited processing power, memory, and storage. Compiling directly on the target would be slow or impossible.
*   **Development Efficiency:** Host machines offer a richer development environment with better debugging tools, faster compilation speeds, and more powerful editors.
*   **Different Architectures:** Embedded systems utilize a wide range of processor architectures (ARM, MIPS, RISC-V, etc.) that are different from the x86 architecture of most host PCs.

---

### 2. The Cross-Compilation Build Process and Generated Files

The cross-compilation process typically involves several stages, each producing specific file types. Let's break down these stages and the associated files:

#### 2.1. Preprocessing

This stage handles preprocessor directives like `#include`, `#define`, and `#ifdef`.

*   **Source Code Files (.c, .cpp, .s, .asm):** These are the human-readable files written by the developer containing the program logic.
*   **Header Files (.h, .hpp):** Contain function declarations, macro definitions, and data type definitions.
*   **Preprocessed Source Files (.i, .ii, .s):**
    *   **Purpose:** After preprocessing, the code is expanded. `#include` directives pull in the content of header files, and macros are substituted.
    *   **Example:** A `.c` file with `#define PI 3.14159` will be expanded in the preprocessed file to replace every instance of `PI` with `3.14159`.
    *   **Why they are generated:** Primarily for debugging or understanding how the preprocessor has transformed the code. Most modern build systems don't explicitly require saving these as intermediate files for the subsequent steps.

#### 2.2. Compilation

This stage translates the preprocessed source code into assembly language and then into machine code for the target architecture.

*   **Assembly Language Files (.s, .asm):**
    *   **Purpose:** These are human-readable (though often cryptic) representations of the machine instructions specific to the target processor architecture.
    *   **Example:** For an ARM processor, this might include instructions like `MOV`, `ADD`, `LDR`, `STR`.
    *   **Why they are generated:** Useful for low-level debugging, performance analysis, and understanding the compiler's output. Like preprocessed files, they are often intermediate and not explicitly saved by default.

*   **Object Files (.o, .obj):**
    *   **Purpose:** These are machine code files that contain the compiled code for a single source file. They are not yet executable because they may contain references to functions or data defined in other object files (unresolved symbols).
    *   **Format:** Typically in formats like ELF (Executable and Linkable Format) or COFF (Common Object File Format).
    *   **Example:** If you have `main.c`, `utils.c`, and `drivers.c`, you'll get `main.o`, `utils.o`, and `drivers.o`.
    *   **Key Concept:** **Relocation information** is included in object files, allowing the linker to adjust addresses when combining multiple object files.
    *   **Important Point:** Object files are crucial intermediate products that allow for modular development and incremental builds.

#### 2.3. Assembly

This stage (often combined with compilation) converts assembly code into machine code.

*   **Object Files (.o, .obj):** As described above, this is the output of the assembler.

#### 2.4. Linking

This stage combines multiple object files and libraries to create a single, executable program.

*   **Libraries:**
    *   **Static Libraries (.a, .lib):** Collections of object files bundled together. When linked, the necessary code from the static library is copied directly into the final executable.
        *   **Pros:** Executables are self-contained.
        *   **Cons:** Larger executable size, updates require recompiling the application.
    *   **Shared/Dynamic Libraries (.so, .dll - less common in deeply embedded systems but possible):** Libraries whose code is loaded into memory at runtime. Multiple applications can share a single copy of the library.
        *   **Pros:** Smaller executables, easier updates.
        *   **Cons:** Dependencies, potential for version conflicts.

*   **Linker Script (.ld):**
    *   **Purpose:** A configuration file that tells the linker how to arrange sections of code and data in memory. It defines memory regions, specifies where to place code, data, stack, and heap, and handles symbol resolution.
    *   **Importance:** Crucial for embedded systems as it dictates the memory map of the target hardware.
    *   **Example:** A linker script might specify that the `.text` section (code) should be placed at address `0x08000000` and the `.data` section (initialized global variables) at `0x20000000`.

*   **Executable File (ELF format: `.elf`, COFF format: `.exe` - on the host, but the *target's* executable is often also in ELF):**
    *   **Purpose:** The final, fully linked program that can be loaded onto the target embedded system and executed. It contains all the necessary machine code, data, and relocation information.
    *   **Example:** `my_embedded_app.elf`.
    *   **Key Concept:** Contains symbols that are now resolved, meaning all function calls and data accesses have their correct memory addresses.

#### 2.5. Relocation and Linking (Post-Linker Stages)

While linking resolves symbols, further steps prepare the executable for loading.

*   **Relocatable Executable:** This is the primary output of the linker.
*   **Executable and Linkable Format (ELF):**
    *   **Purpose:** A common standard file format for executables, object code, shared libraries, and core dumps on Unix-like systems, including embedded Linux. It's highly structured and contains information about sections, symbols, relocation, and debugging data.
    *   **Key Sections in ELF:**
        *   `.text`: Contains the compiled program instructions (code).
        *   `.data`: Contains initialized global and static variables.
        *   `.bss` (Block Started by Symbol): Contains uninitialized global and static variables (memory is zeroed out at startup).
        *   `.rodata`: Contains read-only data (e.g., string literals).
        *   `.symtab`: Symbol table (names and addresses of functions/variables).
        *   `.rel.*` / `.rela.*`: Relocation information.
        *   `.debug_*`: Debugging information (e.g., DWARF format).

*   **Firmware Image / Loadable Files:**
    *   **Purpose:** The raw binary data that is programmed into the non-volatile memory of the embedded system (e.g., Flash memory). This might be the ELF file stripped of debugging information, or a specific binary representation.
    *   **File Types:**
        *   **Raw Binary (.bin):** A direct sequence of bytes representing the executable code and data. Often used for simple microcontrollers or bootloaders.
        *   **Hex Files (.hex):** A text-based format (e.g., Intel HEX, S-record) that represents the binary data in hexadecimal ASCII characters. This format is commonly used by programmers and debuggers to upload firmware to microcontrollers.
            *   **Example (Intel HEX):** Lines starting with `:` followed by byte count, address, record type, data, and checksum.
            *   ` :100000000102030405060708090A0B0C0D0E0F9B` (A record containing 16 bytes of data)
        *   **Map File (.map):**
            *   **Purpose:** A human-readable file generated by the linker that lists the memory addresses of all symbols (functions and variables) in the final executable. It also shows the memory layout of the program.
            *   **Usefulness:** Essential for debugging, especially when analyzing crash dumps or using a debugger that requires symbol information.

#### 2.6. Debugging Information Generation

To facilitate debugging on the target, compilers and linkers can embed debugging symbols.

*   **Debugging Symbols (e.g., DWARF format embedded within ELF):**
    *   **Purpose:** Information that maps the compiled machine code back to the original source code lines, variable names, and data types. This allows a debugger to set breakpoints on source lines, inspect variable values, and understand the program's flow.
    *   **How it's generated:** The compiler (with `-g` flag) and linker embed this data into the ELF executable.
    *   **Stripped Executables:** Often, the debugging symbols are removed from the final production firmware to reduce its size (`strip` command).

---

### 3. Summary Table of Common Files

| File Extension/Type | Description                                                              | Stage Produced                                   | Usage                                                                     |
| :------------------ | :----------------------------------------------------------------------- | :----------------------------------------------- | :------------------------------------------------------------------------ |
| `.c`, `.cpp`, `.s`  | Source code files                                                        | Development                                      | Human-readable program logic.                                             |
| `.h`, `.hpp`        | Header files                                                             | Development                                      | Declarations, definitions, macros.                                        |
| `.i`, `.ii`         | Preprocessed source files                                                | Preprocessing                                    | Expanded source code (macros, includes). For debugging preprocessor.      |
| `.s`, `.asm`        | Assembly language files                                                  | Compilation                                      | Target-specific machine instructions. For low-level debugging.            |
| `.o`, `.obj`        | Object files                                                             | Compilation / Assembly                           | Compiled machine code for a single source file, with unresolved symbols.  |
| `.a`, `.lib`        | Static libraries                                                         | Archiving                                        | Collections of object files. Linked into the final executable.          |
| `.so`, `.dll`       | Shared/Dynamic libraries                                                 | Linking (less common in deeply embedded)         | Libraries loaded at runtime.                                              |
| `.ld`               | Linker script                                                            | Linking configuration                            | Defines memory layout, section placement. Critical for embedded systems.  |
| `.elf`              | Executable and Linkable Format                                           | Linking                                          | The primary executable for the target. Contains code, data, debug symbols. |
| `.bin`              | Raw binary file                                                          | Post-linking / Image generation                  | Direct machine code and data for programming onto the target.             |
| `.hex`              | Hexadecimal file (Intel HEX, S-record)                                   | Post-linking / Image generation                  | Text-based representation of binary data for programming.                 |
| `.map`              | Map file                                                                 | Linking                                          | Human-readable symbol table and memory layout. Essential for debugging.   |
| `.gdb`              | GDB server script / configuration (not a direct compiler output)         | Debugger configuration                           | Used by GDB to connect to and control the target debugger.                |

---

### 4. Practical Examples and Toolchains

Most embedded development uses a **cross-compilation toolchain**, which is a suite of tools (compiler, assembler, linker, debugger) that run on the host but generate code for the target. Examples include:

*   **GCC Toolchain (GNU Compiler Collection):** The most common. For ARM targets, you'd use something like `arm-none-eabi-gcc`, `arm-none-eabi-as`, `arm-none-eabi-ld`.
*   **Clang/LLVM Toolchain:** Increasingly popular alternative.
*   **Vendor-specific toolchains:** e.g., from STMicroelectronics (STM32CubeIDE), NXP, etc., which often bundle GCC or LLVM.

**Example Workflow (using GCC):**

Let's say we have `main.c` and `utils.c` for an ARM Cortex-M microcontroller.

1.  **Cross-Compilation:**
    ```bash
    arm-none-eabi-gcc -c main.c -o main.o -mcpu=cortex-m4 -mthumb -Wall -Wextra -g
    arm-none-eabi-gcc -c utils.c -o utils.o -mcpu=cortex-m4 -mthumb -Wall -Wextra -g
    ```
    *   `-c`: Compile only, do not link.
    *   `-o`: Specify output file.
    *   `-mcpu=cortex-m4`: Target CPU.
    *   `-mthumb`: Use Thumb instruction set.
    *   `-Wall`, `-Wextra`: Enable warnings.
    *   `-g`: Include debugging information.
    *   **Output:** `main.o`, `utils.o` (object files).

2.  **Linking:**
    ```bash
    arm-none-eabi-ld -T linker.ld main.o utils.o -o my_app.elf
    ```
    *   `-T linker.ld`: Specify the linker script.
    *   **Output:** `my_app.elf` (the executable).

3.  **Generating Firmware Image (e.g., .bin):**
    ```bash
    arm-none-eabi-objcopy -O binary my_app.elf my_app.bin
    ```
    *   `-O binary`: Output format.
    *   **Output:** `my_app.bin` (raw binary firmware).

4.  **Generating Hex File:**
    ```bash
    arm-none-eabi-objcopy -O ihex my_app.elf my_app.hex
    ```
    *   `-O ihex`: Output format (Intel HEX).
    *   **Output:** `my_app.hex`.

5.  **Generating Map File:**
    ```bash
    arm-none-eabi-ld -T linker.ld main.o utils.o -o my_app.elf -Map my_app.map --cref
    ```
    *   `-Map my_app.map`: Generate a map file.
    *   `--cref`: Generate cross-reference listing.
    *   **Output:** `my_app.map`.

---

### 5. Practice Questions and Exercises

1.  **What is the primary reason for using cross-compilation in embedded systems development?**
    *   **Answer:** To compile code on a powerful host machine for execution on a resource-constrained target embedded system with a different architecture.

2.  **Which file type contains machine code for a single source file but may have unresolved symbols?**
    *   **Answer:** Object file (e.g., `.o`, `.obj`).

3.  **What is the role of a linker script (`.ld`) in the embedded development process?**
    *   **Answer:** It instructs the linker on how to arrange code and data sections in the target system's memory, defining the memory map.

4.  **You have compiled your C code for an ARM microcontroller and now need to program the Flash memory of the device. Which file format is most commonly used for this purpose?**
    *   **Answer:** `.hex` (e.g., Intel HEX) or raw binary (`.bin`).

5.  **Explain the difference between a static library (`.a`) and a shared library (`.so`) in the context of linking.**
    *   **Answer:** Static libraries have their code copied directly into the final executable at link time, making the executable self-contained but larger. Shared libraries are loaded at runtime, allowing multiple applications to share them, reducing executable size but introducing dependencies. (Note: Shared libraries are less common in deeply embedded systems).

6.  **If you want to debug your embedded application on the target using a source-level debugger, what information needs to be included during the build process, and where is it typically stored?**
    *   **Answer:** Debugging symbols (e.g., DWARF format) need to be included. This information is typically embedded within the `.elf` executable file.

7.  **What is the purpose of the `strip` command in relation to embedded executables?**
    *   **Answer:** The `strip` command removes debugging symbols and other non-essential information from an executable, reducing its file size, which is often desirable for production firmware.

---

### 6. Important Points to Remember

*   **Host vs. Target:** Always distinguish between the machine you are developing on (host) and the machine the code will run on (target).
*   **Toolchain:** You need a specific cross-compilation toolchain for your target architecture.
*   **Linker Script is Key:** The linker script is fundamental to embedded systems, dictating how your code and data are mapped into the target's hardware memory.
*   **Firmware Formats:** Understand that the final `.elf` executable often needs to be converted into a programming-friendly format like `.hex` or `.bin`.
*   **Debugging Overhead:** Including debugging symbols (`-g`) increases the size of your executable but is essential for effective debugging. Remove them for release builds.
*   **Build Automation:** For complex projects, build systems like Make, CMake, or SCons are used to automate the generation of these various file types.

---
