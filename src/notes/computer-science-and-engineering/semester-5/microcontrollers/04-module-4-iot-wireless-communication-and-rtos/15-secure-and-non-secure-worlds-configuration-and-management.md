---
title: "Secure and Non-Secure Worlds: Configuration and Management"
subject: "MICROCONTROLLERS"
module: "Module 4: IoT, Wireless Communication, and RTOS:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b63c"
status: "completed"
scrapedAt: "2026-05-20T16:48:54.765Z"
---
## MICROCONTROLLERS: Module 4 - IoT, Wireless Communication, and RTOS
### Topic: Secure and Non-Secure Worlds: Configuration and Management

**Learning Outcomes:**

*   Understand the concept of Secure and Non-Secure worlds in microcontrollers.
*   Explain the benefits of using Secure and Non-Secure worlds.
*   Describe the hardware mechanisms that enable Secure and Non-Secure world separation.
*   Configure and manage the transition between Secure and Non-Secure worlds.
*   Identify security considerations when designing systems with Secure and Non-Secure worlds.

---

**1. Introduction to Secure and Non-Secure Worlds**

*   **Definition:** Secure and Non-Secure worlds refer to a hardware and software architecture where a microcontroller's resources are divided into two distinct environments:
    *   **Secure World:** A trusted environment responsible for handling sensitive data, security functions (e.g., cryptographic operations, secure boot), and critical system operations.  Access is restricted and carefully controlled.
    *   **Non-Secure World:**  A less privileged environment intended for general-purpose applications, user interfaces, and less sensitive tasks. It can interact with the Secure World, but only through defined and controlled interfaces.

*   **Analogy:** Think of a bank. The Secure World is the vault, holding all the money and important documents. The Non-Secure World is the front desk, where customers interact and perform transactions. The front desk needs to access the vault for some operations, but only through specific procedures and with proper authorization.

**2. Benefits of Using Secure and Non-Secure Worlds**

*   **Enhanced Security:** Isolating security-critical functionalities in the Secure World prevents malicious code in the Non-Secure World from compromising the entire system.  If the Non-Secure world is compromised, the Secure World can still maintain control and protect sensitive information.
*   **Protection of Intellectual Property (IP):**  Secure World can protect proprietary algorithms or encryption keys, preventing unauthorized access or reverse engineering.  This is crucial for software and hardware vendors.
*   **Isolation of Critical Functions:** Critical system functions (e.g., secure boot, firmware updates) can be isolated from the potentially unstable or unreliable Non-Secure World. This improves system reliability and robustness.
*   **Compliance with Security Standards:**  Using Secure and Non-Secure worlds can help systems comply with security standards like PSA Certified, GlobalPlatform, and others.
*   **Secure Boot:**  Ensure that the microcontroller only boots genuine and authorized firmware. This can prevent attackers from loading malicious code onto the device.
*   **Secure Firmware Updates:**  Allows updating firmware securely without compromising the integrity of the system.
*   **Simplified Application Development:** Developers can focus on building general-purpose applications in the Non-Secure World without worrying about the complexities of security implementations, as the Secure World handles those aspects.

**3. Hardware Mechanisms for Secure and Non-Secure World Separation**

*   **Security Attribution Unit (SAU):**
    *   **Purpose:** The SAU is a hardware component that defines memory regions and peripherals as either Secure or Non-Secure.
    *   **Mechanism:** It uses a set of programmable regions to define the memory map. Each region is assigned an attribute indicating whether it is Secure or Non-Secure.
    *   **Protection:** When the CPU tries to access memory or a peripheral, the SAU checks the access permissions based on the current security state and the region's security attribute.  If there is a violation, a security fault is generated.

*   **Interrupt Handling:**
    *   Interrupts can be configured to run in either the Secure or Non-Secure World.
    *   Secure interrupts typically handle security-critical events.
    *   Non-Secure interrupts handle general-purpose events.
    *   Special mechanisms are in place to ensure that Non-Secure interrupts cannot directly call Secure functions and vice-versa without proper security checks.

*   **TrustZone for ARMv8-M Architecture (Example):**  A widely used architecture that implements Secure and Non-Secure worlds.  It uses the Security Attribution Unit (SAU) extensively.
    *   **Secure Gateway (SG):**  Provides a controlled mechanism for Non-Secure code to request services from the Secure World.  This interface ensures security policies are enforced.
    *   **NS (Non-Secure) bit:**  A bit in the processor's state that indicates whether the processor is currently running in the Secure or Non-Secure World.  It's used to determine memory access permissions.
    *   **Secure Callable Functions:**  Functions in the Secure World that are explicitly designed to be called from the Non-Secure World.  These functions must be carefully designed to avoid security vulnerabilities.

**4. Configuration and Management of Secure and Non-Secure Worlds**

*   **Configuration:**
    *   **Memory Map Definition:**  The first step is to define the memory map, allocating regions for Secure and Non-Secure code, data, and peripherals.  This is typically done through the SAU or similar hardware mechanisms. Careful planning is essential to ensure sufficient memory for both worlds.
    *   **Peripheral Assignment:**  Decide which peripherals need to be controlled by the Secure World (e.g., cryptographic engines, secure storage) and which can be accessed by the Non-Secure World.
    *   **Interrupt Configuration:** Configure interrupt vectors and handlers to run in the appropriate security context.
    *   **Secure Callable Functions:** Design and implement Secure Callable functions that allow controlled interaction between the two worlds.
*   **Management:**
    *   **World Switching:**  The processor needs to switch between the Secure and Non-Secure worlds efficiently and securely. This involves saving and restoring the processor's state, and updating the NS bit.
    *   **Security Policies:**  Implement security policies that define the rules for accessing resources and switching between worlds.
    *   **Attestation:** Securely verify the identity and integrity of the Non-Secure World.
    *   **Monitoring and Auditing:**  Monitor system behavior for any security violations or anomalies.  Implement auditing mechanisms to track access to sensitive resources.

*   **Example (TrustZone-M):**
    *   **Using CMSIS-Zone:**  CMSIS-Zone is a software framework that simplifies the configuration and management of Secure and Non-Secure worlds in TrustZone-M based microcontrollers.  It provides a high-level abstraction for defining memory regions, peripherals, and interrupt handlers.
    *   **Example Code Snippet (Illustrative):**

    ```c
    // Define Secure memory region
    #define SECURE_START  0x00000000
    #define SECURE_SIZE   0x00010000  // 64KB

    // Define Non-Secure memory region
    #define NON_SECURE_START 0x20000000
    #define NON_SECURE_SIZE  0x00020000  // 128KB

    // Configure SAU regions (This is a simplified illustration - actual implementation depends on the specific MCU)
    void configure_sau() {
        // Configure Secure region
        SAU->RNR = 0; // Region Number 0
        SAU->RBAR = SECURE_START;
        SAU->RLAR = SECURE_START + SECURE_SIZE - 1 | SAU_RLAR_ENABLE_Msk;  //Enable and define Secure attribute

        // Configure Non-Secure region
        SAU->RNR = 1; // Region Number 1
        SAU->RBAR = NON_SECURE_START;
        SAU->RLAR = NON_SECURE_START + NON_SECURE_SIZE - 1; // Non Secure by default
    }
    ```

**5. Security Considerations**

*   **Side-Channel Attacks:**  Be aware of side-channel attacks (e.g., timing attacks, power analysis) that can leak sensitive information from the Secure World.  Implement countermeasures to mitigate these risks.
*   **Secure Callable Function Design:** Secure Callable functions must be carefully designed to prevent vulnerabilities such as buffer overflows or race conditions.  Input validation and robust error handling are essential.
*   **Authentication and Authorization:** Implement strong authentication and authorization mechanisms to control access to Secure World resources.
*   **Memory Protection:** Ensure that the SAU (or equivalent mechanism) is properly configured to prevent unauthorized access to Secure memory regions.
*   **Secure Boot and Firmware Updates:** Implement a secure boot process to ensure that only authorized firmware is executed.  Design a secure firmware update mechanism to prevent malicious updates.
*   **Key Management:** Securely store and manage cryptographic keys.  Use hardware security modules (HSMs) or trusted platform modules (TPMs) if available.
*   **Vulnerability Scanning:** Regularly scan the Non-Secure World for vulnerabilities and apply security patches promptly.
*   **Threat Modeling:** Perform threat modeling to identify potential attack vectors and design appropriate security countermeasures.

**Important Points to Remember:**

*   The Secure World *must* be the root of trust.
*   Secure Callable functions are a potential attack surface and need rigorous scrutiny.
*   Configuration of the SAU (or equivalent) is critical for enforcing security boundaries.
*   Regular security audits and vulnerability assessments are essential.
*   Consider the entire system, including hardware and software, when designing security measures.

**Practice Questions/Exercises:**

1.  **Question:** Explain the difference between the Secure World and the Non-Secure World in a microcontroller. What are the primary benefits of using this architecture?

    **Answer:** The Secure World is a trusted environment for handling sensitive data and security functions, while the Non-Secure World is a less privileged environment for general-purpose applications. Benefits include enhanced security, protection of IP, isolation of critical functions, and compliance with security standards.

2.  **Question:** Describe the role of the Security Attribution Unit (SAU) in enforcing security boundaries between the Secure and Non-Secure worlds.

    **Answer:** The SAU defines memory regions and peripherals as either Secure or Non-Secure. It checks access permissions based on the current security state and the region's security attribute. If there is a violation, a security fault is generated.

3.  **Question:** What are Secure Callable functions, and why are they critical for security? What precautions should be taken when designing them?

    **Answer:** Secure Callable functions are functions in the Secure World that are designed to be called from the Non-Secure World. They are critical because they provide a controlled interface for the Non-Secure World to access Secure World resources. Precautions include input validation, robust error handling, and careful design to prevent vulnerabilities such as buffer overflows or race conditions.

4.  **Question:** What are some security considerations that should be taken into account when designing a system with Secure and Non-Secure worlds?

    **Answer:** Security considerations include side-channel attacks, secure callable function design, authentication and authorization, memory protection, secure boot and firmware updates, key management, and vulnerability scanning.

5.  **Exercise:** Research and describe a specific microcontroller family that implements Secure and Non-Secure worlds (e.g., STM32L5, NXP LPC55S69).  Explain how the Secure and Non-Secure worlds are configured in that family. Specifically, how is the secure attribution unit or its equivalent configured? What tools are available to aid in the secure/non-secure development?

**Further Study:**

*   ARM TrustZone documentation
*   PSA Certified specifications
*   GlobalPlatform specifications
*   Microcontroller vendor documentation for specific devices
