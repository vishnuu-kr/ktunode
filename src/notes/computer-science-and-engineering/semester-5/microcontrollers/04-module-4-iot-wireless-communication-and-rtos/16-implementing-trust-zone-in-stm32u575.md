---
title: "Implementing Trust Zone in STM32U575"
subject: "MICROCONTROLLERS"
module: "Module 4: IoT, Wireless Communication, and RTOS:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b63d"
status: "completed"
scrapedAt: "2026-05-20T16:48:55.516Z"
---
## Microcontrollers: Module 4 - IoT, Wireless Communication, and RTOS: Implementing TrustZone in STM32U575

These notes cover the implementation of TrustZone in the STM32U575 microcontroller, focusing on the concepts, configurations, and practical aspects relevant for IoT, wireless communication, and RTOS environments.

**Learning Outcomes:**

*   Understand the concept and benefits of TrustZone technology.
*   Explain the architectural features of TrustZone in the STM32U575.
*   Configure and manage secure and non-secure domains in STM32U575.
*   Implement secure boot and secure firmware update using TrustZone.
*   Describe how TrustZone can be used to secure IoT applications.
*   Understand the interaction between TrustZone, wireless communication, and RTOS.

---

### 1. Introduction to TrustZone

*   **Definition:** TrustZone is a System on Chip (SoC) security extension developed by ARM that enables the creation of secure and non-secure execution environments within a single processor core.  It's a hardware-based security extension, meaning it leverages the hardware to enforce security boundaries.
*   **Key Concepts:**
    *   **Secure World:**  Environment responsible for handling sensitive operations, such as cryptographic key storage, secure boot, secure firmware update, and identity management. Runs secure software.
    *   **Non-Secure World:** Environment where the main application and less critical functionalities reside. Runs non-secure software.  This is where your main application code will likely reside.
    *   **Security Attribution Unit (SAU):** Hardware module that defines the secure and non-secure memory regions. This is how the MCU *knows* which memory locations are secure or non-secure.
    *   **Security State:** Indicates whether the processor is currently executing in the secure or non-secure world.
    *   **Secure Callable (SMC):** A mechanism that allows the non-secure world to request services from the secure world in a controlled manner.  This is crucial for safely passing control back and forth between the two worlds.
*   **Benefits:**
    *   **Enhanced Security:** Isolates critical security functions, preventing unauthorized access and modification.
    *   **Improved System Reliability:** Minimizes the impact of vulnerabilities in the non-secure world on the secure components.
    *   **Simplified Development:** Provides a framework for building secure applications without completely re-architecting the entire system.
    *   **Secure Boot:** Allows verifying the integrity of the firmware before execution, preventing malicious code from running.
    *   **Secure Storage:** Enables the secure storage of cryptographic keys and other sensitive data.
*   **TrustZone in Context of IoT:** Essential for protecting sensitive data (e.g., sensor readings, credentials) and ensuring the integrity of IoT devices against remote attacks.  Critical in medical devices, industrial control systems, and smart home appliances.

### 2. TrustZone Architecture in STM32U575

*   **ARMv8-M Security Extensions:** The STM32U575 implements ARMv8-M architecture with Security Extension. This extension provides the hardware foundations for TrustZone.
*   **Key Architectural Features:**
    *   **Security Attribution Unit (SAU):**
        *   Controls memory access permissions based on security state.
        *   Defines secure and non-secure memory regions using regions and attributes.
        *   Can be configured to allow or deny access to peripherals based on security state.
    *   **Interrupt Management:**
        *   Secure and non-secure interrupts are handled separately.
        *   The Vector Table Offset Register (VTOR) is configurable for both worlds, allowing separate interrupt handlers.
        *   Secure peripherals can trigger secure interrupts, ensuring they are handled securely.
    *   **Peripheral Access Control:**
        *   Peripherals can be configured as secure or non-secure.
        *   Access to secure peripherals from the non-secure world can be restricted to prevent unauthorized manipulation.  This is configured through peripheral registers.
    *   **Secure Callable (SMC) Interface:**
        *   Provides a controlled way for the non-secure world to request services from the secure world.
        *   Relies on a specific instruction (SMC) to trigger a secure exception.
        *   Secure exception handler switches to the secure world and executes the requested service.
    *   **Stack Pointers:** Each security state has its own stack pointer, isolating stack memory and preventing exploits like stack overflows from crossing security boundaries.
*   **Memory Map:**  The memory map is divided into secure and non-secure regions.  Typically, the secure region contains the secure boot code, secure storage, and other security-critical components.  The non-secure region contains the main application.
    *   **Example Memory Map:**
        *   `0x08000000 - 0x0800FFFF` (64KB): Secure Flash (Secure Boot, Secure Firmware Update)
        *   `0x08010000 - 0x080FFFFF` (960KB): Non-Secure Flash (Application Code)
        *   `0x20000000 - 0x20007FFF` (32KB): Secure SRAM (Secure Data Storage, Secure RTOS)
        *   `0x20008000 - 0x2003FFFF` (224KB): Non-Secure SRAM (Application Data)

### 3. Configuration and Management of Secure and Non-Secure Domains

*   **Configuration Tools:**
    *   **STM32CubeMX:** Used for configuring the MCU peripherals, clock tree, and importantly, TrustZone.  It generates the necessary initialization code for setting up secure and non-secure memory regions and peripheral access controls.  Using CubeMX is highly recommended.
    *   **CMSIS-Zone:**  A CMSIS standard for defining memory regions and their security attributes. STM32CubeMX uses this standard internally.
*   **Configuration Steps:**
    1.  **Define Secure and Non-Secure Memory Regions:** Use STM32CubeMX or CMSIS-Zone files to specify which memory regions are secure and which are non-secure. The SAU is configured based on these definitions.
    2.  **Configure Peripheral Access:**  Using STM32CubeMX, designate which peripherals should be accessible only from the secure world. For example, a cryptographic accelerator used for secure key generation should only be accessible from the secure world.
    3.  **Set Secure Entry Points:**  Define the entry points for secure services that the non-secure world can call. These entry points are used by the SMC handler.
    4.  **Implement SMC Handler:** Create a secure exception handler that processes SMC calls from the non-secure world. This handler should validate the parameters passed by the non-secure world and then execute the requested secure service.
    5.  **Initialize the Security Attribution Unit (SAU):** The generated code from STM32CubeMX will initialize the SAU according to the defined memory regions.
*   **Example using STM32CubeMX:**
    1.  Create a new STM32 project for STM32U575.
    2.  Go to the "TrustZone" tab in CubeMX.
    3.  Define the secure and non-secure memory regions by adjusting the sizes and addresses.
    4.  Assign peripherals to either the secure or non-secure world.
    5.  Configure the secure callable regions.
    6.  Generate the code.  CubeMX will generate startup code and SAU configuration code.
*   **Code Example (Simplified SAU configuration - generated by CubeMX):**

```c
// This is a simplified example. The actual code generated by STM32CubeMX might be more complex.

void SystemInit(void) {
  /* FPU settings */
  /* Reset the Flash prefetch */
  /* Configure SAU and IDAU */
  /* SAU configuration */
  SAU->CTRL = 0x00000001;  // Enable SAU

  /* Region 0 Setting = Non-Secure memory */
  SAU->RNR  = 0;
  SAU->RBAR = (uint32_t)(0x08010000);  // Start address of Non-Secure Flash
  SAU->RLAR = (uint32_t)(0x080FFFFF) | 1;  // End address of Non-Secure Flash, Enable region

  /* Region 1 Setting = Secure memory */
  SAU->RNR  = 1;
  SAU->RBAR = (uint32_t)(0x08000000);  // Start address of Secure Flash
  SAU->RLAR = (uint32_t)(0x0800FFFF) | 1;  // End address of Secure Flash, Enable region

  SCB->VTOR = 0x08000000; // Set Vector Table Offset Register to Secure Vector Table (Important!)
}
```

*   **Managing Transitions:**
    *   Use the `__set_MSPLIM(uint32_t TopOfStack)` function to set the stack limit for the secure world.
    *   The Secure Monitor Call (SMC) instruction triggers the switch between the worlds.
*   **Important Considerations:**
    *   **Secure World Initialization:** The secure world *must* be initialized first before the non-secure world. This includes setting up the SAU, configuring secure peripherals, and initializing the secure RTOS (if used).
    *   **Secure Gateway Routines:**  Implement secure gateway routines to safely pass data and control between the secure and non-secure worlds.  These routines should carefully validate input parameters to prevent attacks.
    *   **Security Policies:** Define clear security policies for your application. Which data needs to be protected? Which peripherals need to be secured? This will guide your TrustZone configuration.

### 4. Secure Boot and Secure Firmware Update

*   **Secure Boot:**
    *   **Purpose:** Ensures that only trusted code is executed during the boot process.
    *   **Process:**
        1.  The bootloader (stored in read-only memory or secure flash) verifies the integrity of the first-stage bootloader (stored in secure flash). This verification typically involves cryptographic hash checks.
        2.  If the first-stage bootloader is valid, it's executed.  This bootloader then verifies the integrity of the main application firmware (which might be in non-secure flash).
        3.  If the main application firmware is valid, control is transferred to it.
        4.  If any verification fails, the system enters a safe state or attempts to recover.
    *   **TrustZone's Role:** The secure boot process runs in the secure world, protecting the integrity of the boot process and preventing attackers from loading malicious code during startup.
    *   **Root of Trust:** The cryptographic key used to sign the firmware is stored securely within the secure world, establishing a root of trust.  This key must be protected from compromise.
*   **Secure Firmware Update:**
    *   **Purpose:** Allows updating the firmware of a device securely, preventing malicious firmware from being installed.
    *   **Process:**
        1.  The device receives a new firmware image.
        2.  The secure world verifies the integrity and authenticity of the firmware image using a cryptographic signature.
        3.  If the firmware image is valid, it's stored in a designated memory location.
        4.  The secure bootloader is updated to load and execute the new firmware image on the next boot.
        5.  If the validation fails, the firmware update is rejected.
    *   **TrustZone's Role:** The secure world manages the firmware update process, ensuring that only authorized firmware can be installed.
    *   **Example:** Over-the-Air (OTA) updates can be implemented using TrustZone.  The secure world handles the decryption and verification of the firmware image received over the wireless network.
*   **Code Snippet (Conceptual Secure Boot Verification):**

```c
// Secure Boot code (running in Secure World)

typedef struct {
  uint32_t start_address;
  uint32_t size;
  uint8_t  signature[256]; //Example: RSA signature
} FirmwareImageHeader;

bool verify_firmware(FirmwareImageHeader *header) {
  // 1. Calculate the hash of the firmware image
  uint8_t calculated_hash[32]; // Example: SHA-256 hash
  calculate_sha256_hash((uint8_t*)header->start_address, header->size, calculated_hash);

  // 2. Verify the signature using the public key stored securely.
  // The actual crypto operation will be much more complex and secure.
  bool signature_valid = verify_rsa_signature(calculated_hash, header->signature, secure_public_key);

  return signature_valid;
}

void boot_process() {
  FirmwareImageHeader *firmware_header = (FirmwareImageHeader *) NON_SECURE_FIRMWARE_START_ADDRESS;

  if (verify_firmware(firmware_header)) {
    // Firmware is valid, jump to the non-secure application
    //  (Requires setting up the non-secure execution environment)
    jump_to_non_secure_application(NON_SECURE_FIRMWARE_START_ADDRESS + sizeof(FirmwareImageHeader));
  } else {
    // Firmware verification failed, enter a safe state or attempt recovery.
    handle_boot_failure();
  }
}
```

*   **Important Considerations:**
    *   **Key Management:** Securely storing and managing the cryptographic keys used for signing and verifying firmware is crucial. Use a Hardware Security Module (HSM) if possible.
    *   **Rollback Protection:** Prevent attackers from reverting to older, vulnerable versions of the firmware. Implement version control and rollback protection mechanisms.
    *   **Error Handling:** Implement robust error handling to gracefully handle firmware update failures and prevent the device from becoming bricked.

### 5. Securing IoT Applications with TrustZone

*   **Secure Data Storage:** Use the secure world to store sensitive data such as cryptographic keys, credentials, and personal information.  This data can be encrypted using keys stored in the secure world.
*   **Secure Communication:** Implement secure communication protocols (e.g., TLS/SSL) using cryptographic functions executed in the secure world.  This protects data in transit between the IoT device and the cloud.
*   **Secure Sensor Data:**  Encrypt sensor data before transmitting it to the cloud to protect it from eavesdropping.  The encryption can be performed in the secure world.  This is especially important for sensitive sensors like medical or environmental monitoring devices.
*   **Secure Device Identity:** Store the device's unique identity (e.g., serial number, MAC address) securely in the secure world to prevent spoofing and tampering.
*   **Tamper Detection:** Implement mechanisms to detect physical tampering with the device. This could involve monitoring sensors for unexpected changes or using tamper-resistant packaging.
*   **Example: Smart Metering:**
    *   Store encryption keys for encrypting meter readings in the secure world.
    *   Perform cryptographic operations in the secure world.
    *   Implement secure firmware update to prevent attackers from modifying the meter reading algorithms.
*   **Example: Medical Device:**
    *   Store patient data encryption keys in the secure world.
    *   Enforce access control to prevent unauthorized access to patient data.
    *   Implement secure communication to protect data transmitted to the cloud.

### 6. TrustZone, Wireless Communication, and RTOS

*   **Interaction:** TrustZone can be integrated with wireless communication protocols (e.g., Bluetooth, Wi-Fi, LoRaWAN) and RTOS to provide a secure and reliable platform for IoT applications.
*   **RTOS Considerations:**
    *   **Secure RTOS:**  Consider using a secure RTOS that is designed to run in the secure world. This RTOS should provide secure task scheduling, memory management, and inter-process communication.  Examples include OP-TEE.
    *   **Task Isolation:**  Use the RTOS to isolate tasks that handle sensitive data or perform security-critical operations in the secure world.
    *   **Secure Communication between RTOS Tasks:**  Implement secure communication mechanisms between tasks in the secure world to prevent unauthorized access to data.
*   **Wireless Communication Considerations:**
    *   **Secure Channel:**  Establish a secure communication channel using protocols like TLS/SSL to protect data transmitted over the wireless network.
    *   **Authentication:**  Implement strong authentication mechanisms to verify the identity of the device and the server it's communicating with.
    *   **Secure Firmware Updates over Wireless:** Implement secure firmware update mechanisms to ensure that only authorized firmware can be installed over the air.
*   **Example:**
    *   An RTOS running in the non-secure world can use the secure world to perform cryptographic operations required for a TLS connection. The RTOS task in the non-secure world makes an SMC call to request the secure world to encrypt or decrypt data.

### Important Points to Remember:

*   **Security is a system-level concern:** TrustZone is a powerful tool, but it's not a silver bullet. It's essential to consider security at all levels of the system, from the hardware to the application layer.
*   **Key Management is Critical:** Protecting the cryptographic keys used for signing firmware and encrypting data is paramount.
*   **Thorough Testing:**  Thoroughly test the security of your application to identify and address potential vulnerabilities. Consider using penetration testing tools.
*   **Stay Updated:**  Keep up-to-date with the latest security threats and vulnerabilities, and apply patches and updates as needed.  Monitor security advisories for the STM32U575 and the libraries you use.
*   **Principle of Least Privilege:** Grant only the necessary permissions to the non-secure world. Minimize the attack surface.

---

### Practice Questions/Exercises:

**1. What is TrustZone, and what are its key benefits?**

*   **Answer:** TrustZone is a hardware-based security extension that allows creating secure and non-secure execution environments on a single processor. Benefits include enhanced security, improved system reliability, simplified development, secure boot, and secure storage.

**2. Explain the role of the Security Attribution Unit (SAU) in the STM32U575.**

*   **Answer:** The SAU defines the secure and non-secure memory regions by specifying address ranges and their security attributes. It enforces access control based on the current security state of the processor.

**3. Describe the process of configuring secure and non-secure memory regions in STM32CubeMX.**

*   **Answer:** In STM32CubeMX, you go to the TrustZone tab and define the starting addresses and sizes of the secure and non-secure memory regions. You can drag the region boundaries to adjust their sizes.

**4. What is the purpose of the Secure Monitor Call (SMC) instruction?**

*   **Answer:** The SMC instruction is used by the non-secure world to request services from the secure world. It triggers a secure exception that transfers control to the secure world.

**5. Explain the steps involved in a secure boot process using TrustZone.**

*   **Answer:** The bootloader in secure memory verifies the integrity of the first-stage bootloader. The first-stage bootloader then verifies the integrity of the application firmware. If both verifications succeed, the application firmware is executed.

**6. How can TrustZone be used to protect sensor data in an IoT application?**

*   **Answer:** TrustZone can be used to encrypt sensor data in the secure world before transmitting it to the cloud. This prevents eavesdropping and protects sensitive information.

**7. Why is it important to initialize the secure world before the non-secure world in a TrustZone implementation?**

*   **Answer:** The secure world is responsible for configuring the SAU and other security-related hardware components. If the non-secure world is initialized first, it may be able to access secure memory or peripherals before they are properly protected.

**8. Design a secure firmware update process that utilizes TrustZone.  Include steps for verification, storage, and rollback protection.**

*   **Answer:**  (This is a more involved exercise - example steps below)
    1.  **Receive Firmware:** The device receives a new firmware image over the air.
    2.  **Verification (Secure World):** The secure world decrypts (if encrypted) and verifies the integrity and authenticity of the firmware image using a cryptographic signature and a public key stored in secure memory.
    3.  **Storage (Secure World):** If the firmware image is valid, it's stored in a designated area in the flash memory (either secure or non-secure, depending on design).
    4.  **Rollback Protection:**
        *   Increase the firmware version number. The new firmware MUST have a higher version than the currently installed firmware.  If the new version is lower, the update is rejected.
        *   Store the old firmware image in a rollback partition (if space permits).  This allows reverting to the previous version in case of errors during the update.
    5.  **Update Bootloader:** The secure bootloader is updated to load and execute the new firmware image on the next boot.
    6.  **Activation:** Upon reboot, the secure bootloader loads the new firmware.
    7.  **Testing and Validation:** After the new firmware has booted, the device should execute self-tests and validation procedures to ensure it's functioning correctly.
    8.  **Error Handling:**  If any step fails (verification, storage, boot), the process should revert to the previous working firmware version or enter a safe state.

**9.  Research and compare the security features of STM32U575 with another STM32 microcontroller that does *not* have TrustZone.  What specific security advantages does TrustZone offer?**

*   **Answer:** (This requires external research)  For example, compare the STM32U575 with an STM32F4 series microcontroller.  Focus on the *hardware-based* security advantages offered by TrustZone that are not available in a non-TrustZone microcontroller.  This includes hardware isolation, secure boot capabilities, and secure storage protection.

**10. What are some limitations of TrustZone, and how can these limitations be mitigated?**

*   **Answer:**
    *   **Complexity:** Implementing TrustZone can be complex and requires careful design and implementation.
    *   **Performance Overhead:** Switching between the secure and non-secure worlds can introduce some performance overhead.
    *   **Attack Surface:** While TrustZone provides a strong security boundary, the secure world itself can still be vulnerable to attacks.
    *   **Mitigation:**
        *   Use STM32CubeMX to simplify configuration.
        *   Optimize the secure gateway routines to minimize switching overhead.
        *   Implement robust security measures in the secure world, such as using a secure RTOS and following secure coding practices.
        *   Regularly review and update security measures to address new threats.
