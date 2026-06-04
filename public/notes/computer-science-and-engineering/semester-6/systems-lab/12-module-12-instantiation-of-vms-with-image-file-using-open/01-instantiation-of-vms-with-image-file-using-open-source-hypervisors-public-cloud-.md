---
title: "Instantiation of VMs with image file using open-source hypervisors / public cloud platforms."
subject: "SYSTEMS LAB"
module: "Module 12: Instantiation of VMs with image file using open"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c046"
status: "completed"
scrapedAt: "2026-05-20T16:57:41.060Z"
---
# SYSTEMS LAB: Module 12 - Instantiation of VMs with Image Files

## Topic: Instantiation of VMs with Image File using Open-Source Hypervisors / Public Cloud Platforms

This module focuses on the practical aspect of creating Virtual Machines (VMs) from pre-existing image files, a fundamental operation in cloud computing and virtualization. We will explore how this is achieved using both popular open-source hypervisors and public cloud platforms.

---

### 1. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the concept of VM image files and their role in VM instantiation.
*   Identify and differentiate between common open-source hypervisors and public cloud platforms used for VM instantiation.
*   Describe the general process of instantiating a VM from an image file on both open-source hypervisors and public cloud platforms.
*   Perform practical exercises to instantiate VMs from image files using at least one open-source hypervisor (e.g., KVM/QEMU) and one public cloud platform (e.g., AWS, Azure, GCP).
*   Understand the parameters and configurations typically required during VM instantiation from an image.
*   Troubleshoot common issues encountered during VM instantiation.

---

### 2. Key Concepts and Definitions

*   **Virtual Machine (VM):** A software-based emulation of a physical computer. It runs its own operating system and applications, isolated from the host machine.
*   **Hypervisor:** Software that creates and runs virtual machines. It allows multiple operating systems to run on a single physical machine by sharing the host's resources.
    *   **Type 1 (Bare-metal) Hypervisor:** Runs directly on the host's hardware (e.g., VMware ESXi, Microsoft Hyper-V, KVM).
    *   **Type 2 (Hosted) Hypervisor:** Runs on top of an existing operating system (e.g., VMware Workstation, Oracle VirtualBox, QEMU).
*   **VM Image File:** A file that contains a complete, bootable operating system, along with all its applications, configurations, and data, ready to be deployed as a VM. These are essentially templates for creating new VMs.
    *   **Common Image Formats:**
        *   **qcow2 (QEMU Copy-On-Write v2):** A popular disk image format for QEMU, offering features like snapshots, thin provisioning, and compression.
        *   **raw:** A simple, unformatted disk image that directly represents the disk's contents.
        *   **VMDK (Virtual Machine Disk):** VMware's proprietary disk format.
        *   **VHD (Virtual Hard Disk):** Microsoft's disk format.
        *   **VHDX (Virtual Hard Disk v2):** An improved version of VHD, offering better performance and reliability.
*   **Instantiation:** The process of creating and launching a new VM from a VM image file. This involves allocating resources (CPU, RAM, storage, network) and configuring the VM.
*   **Open-Source Hypervisors:** Virtualization platforms whose source code is publicly available and can be freely used, modified, and distributed.
    *   **KVM (Kernel-based Virtual Machine):** A virtualization infrastructure built into the Linux kernel. It's a Type 1 hypervisor.
    *   **QEMU (Quick Emulator):** A versatile machine emulator and virtualizer. When used with KVM, it leverages hardware virtualization extensions for better performance.
*   **Public Cloud Platforms:** Cloud computing services offered by third-party providers over the public internet, making them available to anyone who wants to use or purchase them.
    *   **Amazon Web Services (AWS):** Offers services like EC2 (Elastic Compute Cloud) for VM instances.
    *   **Microsoft Azure:** Offers Virtual Machines for VM instances.
    *   **Google Cloud Platform (GCP):** Offers Compute Engine for VM instances.
*   **Cloud-init:** A widely adopted standard for early initialization of cloud instances. It allows users to pass configuration data to VMs at launch time, enabling customization like setting hostnames, installing packages, or running scripts.

---

### 3. Instantiation Process Overview

The core process of instantiating a VM from an image file generally involves these steps, whether on an open-source hypervisor or a public cloud platform:

1.  **Obtain/Select a VM Image:** You need a suitable VM image file containing the desired operating system and software. This can be a pre-built image provided by the hypervisor/cloud provider, a custom-built image, or an image downloaded from a public repository.
2.  **Allocate Resources:** Specify the compute resources for the new VM:
    *   **vCPUs:** Number of virtual central processing units.
    *   **RAM:** Amount of virtual random-access memory.
    *   **Storage:** Size and type of virtual disk(s).
    *   **Networking:** Network interface(s), IP addressing, firewall rules.
3.  **Configure the VM:** Provide specific configuration details:
    *   **Hostname:** The name assigned to the VM on the network.
    *   **User Data/Cloud-init:** Scripts or configuration data to be executed upon the VM's first boot for initial setup and customization.
    *   **SSH Keys:** For secure remote access to the VM (especially Linux VMs).
    *   **Security Groups/Firewall Rules:** To control network traffic in and out of the VM.
4.  **Launch the VM:** Initiate the instantiation process. The hypervisor/cloud platform will create the virtual disk from the image, configure the virtual hardware, and boot the operating system.
5.  **Connect to the VM:** Once the VM is running, connect to it for further configuration or use (e.g., via SSH, RDP).

---

### 4. Instantiation on Open-Source Hypervisors (e.g., KVM/QEMU)

When using KVM/QEMU locally or on a server, you typically interact with it using command-line tools or management interfaces like `virt-manager`.

#### 4.1 Key Tools and Concepts

*   **`qemu-img`:** A command-line utility for creating, converting, and resizing disk image files.
*   **`virt-install`:** A command-line tool for provisioning new virtual machines onto a virtualization platform (often used with KVM).
*   **`virt-manager`:** A graphical desktop-application for managing virtual machines through libvirt.
*   **`libvirt`:** An open-source API, daemon, and management tool for managing virtualization platforms. It provides a consistent way to interact with different hypervisors.

#### 4.2 Example: Instantiating a VM with `virt-install` (using a .qcow2 image)

Let's assume you have a `ubuntu-server-20.04.qcow2` image file.

**Prerequisites:**
*   KVM and QEMU installed on a Linux host.
*   A Linux distribution image file (e.g., `ubuntu-server-20.04.qcow2`).

**Command Example:**

```bash
sudo virt-install \
  --name ubuntu-vm \
  --ram 2048 \
  --vcpus 2 \
  --disk path=/var/lib/libvirt/images/ubuntu-vm.qcow2,size=20 \
  --os-variant ubuntu20.04 \
  --network bridge=virbr0 \
  --graphics none \
  --console pty,target_type=serial \
  --location /path/to/your/ubuntu-server-20.04.qcow2 \
  --kernel /path/to/your/vmlinuz \
  --initrd /path/to/your/initrd.img \
  --extra-args "console=ttyS0,115200"
```

**Explanation of Flags:**

*   `--name ubuntu-vm`: The name of the new VM.
*   `--ram 2048`: Allocates 2048 MB (2 GB) of RAM.
*   `--vcpus 2`: Assigns 2 virtual CPUs.
*   `--disk path=/var/lib/libvirt/images/ubuntu-vm.qcow2,size=20`: Creates a new 20GB qcow2 disk image named `ubuntu-vm.qcow2` in the specified path. **Note:** If you want to use an existing image file directly as the VM's disk, you would use `--disk path=/path/to/your/ubuntu-server-20.04.qcow2,format=qcow2`.
*   `--os-variant ubuntu20.04`: Helps `virt-install` optimize the VM configuration for Ubuntu 20.04.
*   `--network bridge=virbr0`: Connects the VM to the default KVM bridge `virbr0`.
*   `--graphics none`: Disables graphical console access (useful for server VMs).
*   `--console pty,target_type=serial`: Configures a serial console for interaction.
*   `--location /path/to/your/ubuntu-server-20.04.qcow2`: **Crucial for image-based instantiation**: Specifies the path to the VM image file.
*   `--kernel` and `--initrd`: These are typically used for network or local installations from ISOs. When instantiating from a full VM image, you usually **don't** need these, and the `--location` flag would point to the image file itself.

**Corrected Command for Instantiating from an Existing Image:**

If you have a pre-built `ubuntu-server-20.04.qcow2` image that you want to use as the base for your new VM:

```bash
sudo virt-install \
  --name ubuntu-vm-from-image \
  --ram 2048 \
  --vcpus 2 \
  --disk path=/var/lib/libvirt/images/ubuntu-vm-from-image.qcow2,format=qcow2,bus=virtio \
  --os-variant ubuntu20.04 \
  --network bridge=virbr0 \
  --graphics vnc,listen=0.0.0.0 \
  --import \
  --boot hd
```

**Explanation of Changes:**

*   `--disk path=/var/lib/libvirt/images/ubuntu-vm-from-image.qcow2,format=qcow2,bus=virtio`: This creates a **new** disk image. If you want to use the **existing** image file as the VM's primary disk, you would typically copy it to your storage location first or specify the path directly and make sure it's correctly configured. A common approach is to copy the base image and then create a VM using that copy.
*   `--graphics vnc,listen=0.0.0.0`: Enables VNC for graphical access.
*   `--import`: This flag tells `virt-install` that you are importing an existing disk image.
*   `--boot hd`: Specifies that the VM should boot from the hard disk.

**Using `virt-manager` (Graphical Approach):**

1.  Open `virt-manager`.
2.  Click "File" -> "New Virtual Machine".
3.  Choose "Local install media (ISO image or CDROM)".
4.  Click "Forward".
5.  Select "Use local install media" and browse to your VM image file (e.g., `.qcow2`). `virt-manager` is smart enough to detect it's not a typical installer ISO.
6.  It might prompt you to automatically detect the OS. Select the correct OS.
7.  Configure RAM and CPU.
8.  On the "Storage" step, select "Select or create custom storage". Browse to your existing image file and select it. Or, if you want to create a new disk image from the template, choose "Create a disk image" and specify the size, using the existing image as a template.
9.  Give the VM a name.
10. Review and click "Finish".

---

### 5. Instantiation on Public Cloud Platforms (e.g., AWS EC2, Azure VM, GCP Compute Engine)

Public cloud platforms abstract away much of the underlying hardware and hypervisor management. You interact with them through web consoles, CLIs, or APIs. The concept of a VM image is central, often referred to as an **AMI (Amazon Machine Image)** in AWS, **VM Image** in Azure, or **Machine Image** in GCP.

#### 5.1 Key Concepts and Terminology

*   **Amazon Machine Image (AMI):** A template that contains the software configuration (operating system, application server, and applications) required to launch an instance.
*   **Instance Type:** The specific hardware configuration of your VM (e.g., `t2.micro`, `m5.large` in AWS).
*   **Security Group:** A virtual firewall that controls inbound and outbound traffic to your instance.
*   **Key Pair:** A set of security credentials (public and private keys) used to prove your identity when connecting to your instance.
*   **User Data:** A script or configuration that runs when the instance is first launched.
*   **Azure Virtual Machine Image:** Similar to AMIs, these are pre-configured OS images available in Azure.
*   **GCP Machine Image:** Provides a comprehensive backup of a VM instance, including boot disk, data disks, and VM configuration.

#### 5.2 Example: Instantiating a VM on AWS EC2

**Prerequisites:**
*   An AWS account.
*   Basic understanding of AWS EC2.

**Steps using AWS Management Console:**

1.  **Log in to the AWS Management Console.**
2.  **Navigate to EC2:** Search for "EC2" and click on the EC2 service.
3.  **Launch Instances:** Click on "Instances" in the left-hand navigation pane, then click the "Launch instances" button.
4.  **Choose an AMI:**
    *   In the "Name" field, enter a name for your instance (e.g., `MyUbuntuInstance`).
    *   Under "Application and OS Images (Amazon Machine Image)", search for the desired OS (e.g., "Ubuntu Server 22.04 LTS"). Select the appropriate AMI. You can choose from AWS-provided AMIs, or you could use a custom AMI you've created from an image file.
5.  **Choose an Instance Type:** Select an instance type based on your needs (e.g., `t2.micro` for free tier usage).
6.  **Key Pair (Login):**
    *   Select an existing key pair or create a new one. If creating new, download the `.pem` file for your private key – you'll need this to connect via SSH. **Do not lose this file!**
7.  **Network Settings:**
    *   Configure your VPC and Subnet.
    *   **Security Group:** Create a new security group or select an existing one. Ensure that rules are in place to allow SSH (port 22) access from your IP address.
8.  **Configure Storage:** Adjust the EBS volume size if needed.
9.  **Advanced Details (Optional but Important):**
    *   **User Data:** You can paste a shell script here to run on boot for initial configuration.
10. **Review and Launch:** Review your selections and click "Launch instance".

**Connecting to the EC2 Instance (Linux):**

Once the instance is running, open a terminal and use SSH:

```bash
ssh -i /path/to/your/your-key-pair.pem ubuntu@<your-instance-public-ip>
```

Replace `/path/to/your/your-key-pair.pem` with the actual path to your downloaded private key and `<your-instance-public-ip>` with the public IP address of your EC2 instance.

---

### 6. Key Parameters and Configurations During Instantiation

Regardless of the platform, these are common parameters you'll configure:

*   **Image Selection:** The OS and base software.
*   **Instance Size/Type:** vCPUs, RAM, instance family (general purpose, compute-optimized, etc.).
*   **Storage:** Disk type (SSD/HDD), size, IOPS, attachment.
*   **Networking:** Virtual network, subnet, IP address, DNS.
*   **Security:** Firewall rules, security groups, access control lists.
*   **Authentication:** SSH keys (Linux), passwords or RDP keys (Windows).
*   **User Data/Cloud-init:** Initial scripts and configuration.
*   **Placement:** Availability zone, host affinity (in some advanced cases).
*   **Tagging:** Metadata for organization and billing.

---

### 7. Practice Questions and Exercises

**Question 1:** What is the primary purpose of a VM image file in the context of VM instantiation?

**Answer:** A VM image file serves as a template containing a pre-configured operating system and its associated software, allowing for rapid and consistent deployment of new virtual machines without requiring a manual OS installation each time.

---

**Question 2:** List at least three common formats for VM disk images.

**Answer:**
1.  qcow2
2.  raw
3.  VMDK
4.  VHD/VHDX

---

**Question 3:** Briefly explain the role of `virt-install` in KVM-based virtualization.

**Answer:** `virt-install` is a command-line tool used with KVM (and other libvirt-managed hypervisors) to provision new virtual machines. It simplifies the process of defining VM parameters like RAM, CPU, storage, networking, and importantly, the source of the OS, which can be an ISO image or an existing disk image file.

---

**Question 4:** What is "User Data" in public cloud platforms like AWS, and what is its typical use case?

**Answer:** "User Data" is a mechanism in public cloud platforms (like AWS EC2, Azure VM, GCP Compute Engine) to pass scripts or configuration data to a VM when it is first launched. Its typical use case is for automating the initial setup of the instance, such as setting the hostname, updating packages, installing software, or configuring services.

---

**Question 5:** (Practical Exercise)
**Objective:** Instantiate a Linux VM using an existing `.qcow2` image file on your local machine using KVM/QEMU.

**Instructions:**
1.  Ensure you have KVM and QEMU installed on a Linux distribution.
2.  Download a small Linux VM image (e.g., a minimal Alpine Linux `.qcow2` image from their official website).
3.  Copy the downloaded `.qcow2` image to a suitable directory (e.g., `/var/lib/libvirt/images/`).
4.  Use `virt-install` to create a new VM that boots from this image. Configure it with at least 1GB of RAM and 1 vCPU. Ensure you can connect to it via SSH (you might need to configure the image for SSH access beforehand or enable a serial console).

**Hint:** You'll likely need to adjust the `--disk` option to point to your existing image file and use the `--import` flag. You might also need to investigate how to enable SSH or serial console access in the chosen image.

---

### 8. Important Points to Remember

*   **Image Format Compatibility:** Ensure the hypervisor or cloud platform supports the VM image format you are using.
*   **Image Source Trust:** Always download VM images from trusted sources to avoid security risks.
*   **Resource Allocation:** Properly estimate the CPU, RAM, and storage requirements for your VM based on its intended workload.
*   **Networking Configuration:** Pay close attention to network settings, especially firewall rules and IP addressing, to ensure connectivity.
*   **SSH Key Management:** Securely store your private SSH keys. Losing them means losing access to your VM if it's the only authentication method configured.
*   **User Data for Automation:** Leverage User Data/cloud-init for initial configuration to save time and ensure consistency.
*   **Cloud Provider Differences:** While the concepts are similar, the specific steps and terminology vary between different public cloud providers.

---

This concludes Module 12. You should now have a solid understanding of how to instantiate VMs from image files on various virtualization platforms.
