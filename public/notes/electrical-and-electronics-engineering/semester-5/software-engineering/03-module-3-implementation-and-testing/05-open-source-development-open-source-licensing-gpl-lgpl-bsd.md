---
title: "Open-source development - Open-source licensing - GPL, LGPL, BSD"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Implementation and Testing"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36355"
status: "completed"
scrapedAt: "2026-05-23T16:24:30.324Z"
---
# Software Engineering: Module 3 - Implementation and Testing

## Topic: Open-Source Development - Open-Source Licensing (GPL, LGPL, BSD)

This module focuses on the practical aspects of software development, particularly implementation and testing. A significant part of modern software development involves leveraging and contributing to open-source projects. Understanding open-source licensing is crucial for legal compliance and for making informed decisions about using and distributing software.

### 1. Open-Source Development: An Overview

**Key Concepts:**

*   **Open-Source Software (OSS):** Software whose source code is freely available and can be modified, used, and distributed by anyone.
*   **Open-Source Development:** A development model where a community of developers collaborates on a software project, often distributed geographically. This model emphasizes transparency, collaboration, and community participation.
*   **Four Essential Freedoms of Open-Source Software (as defined by the Free Software Foundation):**
    1.  The freedom to run the program as you wish, for any purpose (freedom 0).
    2.  The freedom to study how the program works, and change it so it does your bidding (freedom 1). Access to the source code is a precondition for this.
    3.  The freedom to redistribute copies so you can help your neighbor (freedom 2).
    4.  The freedom to distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.

**Reference to Textbooks:**

*   **Sommerville (Tenth Edition, 2015):** Likely discusses OSS as a development methodology, potentially touching upon its impact on software engineering practices and community building.
*   **Pressman (Eighth Edition, 2014):** May cover OSS within the context of software process models or quality assurance, highlighting collaborative development aspects.
*   **Sommerville (First Edition, 2020):** Given its recency, this edition is highly likely to provide a more in-depth and modern perspective on OSS, its economic models, and its role in contemporary software engineering.

**Course Outcomes Alignment:**

*   **CO1:** Understanding OSS as a development model relates to handling changes and leveraging existing work in software processes.
*   **CO2:** Agile methods often embrace OSS principles like collaboration and iterative development.
*   **CO5:** OSS development practices heavily influence code management, collaboration, and software evolution.

### 2. Open-Source Licensing: The Foundation of Collaboration

**Key Concepts:**

*   **Software License:** A legal instrument governing the use, modification, and distribution of software.
*   **Open-Source License:** A specific type of software license that grants users the rights associated with open-source software. These licenses aim to balance the freedom of users with the rights of the copyright holder.
*   **Key Terms in OSS Licenses:**
    *   **Permissive Licenses:** Generally allow users to do almost anything with the code, including using it in proprietary projects, as long as attribution is maintained.
    *   **Copyleft Licenses:** Require that any derivative works of the original software also be distributed under the same or a compatible open-source license. This ensures that the freedoms granted by the original license are preserved.
    *   **Attribution:** The requirement to acknowledge the original authors or copyright holders.
    *   **Derivative Work:** A new work based on one or more pre-existing works.

**Reference to Textbooks:**

*   **All Textbooks:** While not always a central focus, all software engineering textbooks that discuss software reuse or project management would likely mention the importance of licensing, especially when incorporating third-party code. The specific details of OSS licenses might be found in more specialized chapters or reference materials.

**Course Outcomes Alignment:**

*   **CO4:** Directly addresses the interpretation of open-source licensing models like GPL, LGPL, and BSD.

### 3. Key Open-Source Licenses: GPL, LGPL, and BSD

This section will delve into the specifics of three prominent open-source licenses, highlighting their core requirements and implications.

#### 3.1. GNU General Public License (GPL)

**Key Concepts:**

*   **Strong Copyleft License:** The most well-known and influential copyleft license.
*   **"Viral" Nature:** If you modify GPL-licensed code and distribute the modified version, your entire project *must* be licensed under the GPL. This applies even if you only link your proprietary code to a GPL-licensed library.
*   **Key Requirements:**
    *   Source code must be made available to recipients of the compiled program.
    *   Any derivative works must also be licensed under the GPL.
    *   Attribution must be maintained.
*   **Versions:** GPLv2, GPLv3 (more comprehensive, addresses patents, digital rights management).
*   **Purpose:** To ensure that software remains free and open for all users and developers.

**Example:**

*   **Linux Kernel:** A prime example of a project licensed under the GPL (specifically GPLv2). If you develop a device driver that interacts with the Linux kernel and distribute that driver, it must also be licensed under the GPL.

**Important Points to Remember:**

*   **Distribution is key:** The GPL's obligations are triggered by the *distribution* of the software. If you only use GPL software internally without distributing it, you generally don't have to open-source your own code.
*   **Linking implications:** Dynamically linking to a GPL library can also trigger the copyleft provisions, depending on interpretation and version.

**Course Outcomes Alignment:**

*   **CO4:** Understanding the GPL license and its implications for software development.

#### 3.2. GNU Lesser General Public License (LGPL)

**Key Concepts:**

*   **"Weak" Copyleft License:** Designed to allow the use of open-source libraries in proprietary applications without forcing the entire application to become open-source.
*   **Focus on Libraries:** Primarily intended for libraries.
*   **Key Requirements:**
    *   If you modify the LGPL-licensed library itself and distribute the modified library, you must make those modifications available under the LGPL.
    *   If you *use* an LGPL-licensed library (even by linking to it) in your application, you do not have to license your application under the LGPL. However, you must provide users with the ability to replace or modify the LGPL-licensed library.
    *   Attribution must be maintained.
*   **Purpose:** To encourage the use of free software libraries in a wider range of applications, including proprietary ones, while ensuring that the libraries themselves remain free.

**Example:**

*   **GTK+:** A popular graphical widget toolkit licensed under the LGPL. Developers can use GTK+ in their proprietary applications without having to release their application's source code. However, if they modify GTK+ itself, they must release those modifications under the LGPL.

**Important Points to Remember:**

*   **Dynamic Linking:** The LGPL is often associated with dynamic linking, which makes it easier to swap out libraries.
*   **"Sufficiently large body of work":** Some interpretations suggest that if your application is primarily a wrapper around the LGPL library, it might still be considered a derivative work requiring LGPL licensing.

**Course Outcomes Alignment:**

*   **CO4:** Understanding the LGPL license and its nuances compared to the GPL.

#### 3.3. BSD Licenses (e.g., 2-Clause BSD, 3-Clause BSD)

**Key Concepts:**

*   **Permissive License:** Offers minimal restrictions on how the software can be used, modified, and distributed.
*   **No Copyleft:** Does not require derivative works to be open-source. You can incorporate BSD-licensed code into proprietary projects and distribute them under any license.
*   **Key Requirements:**
    *   **Attribution:** The copyright notice and disclaimer of warranty must be included in all distributions of the source code and/or binary form.
    *   **No Endorsement Clause (in 3-Clause BSD):** Prohibits using the names of the copyright holders or contributors to endorse or promote derivative works without specific prior written permission.
*   **Purpose:** To promote wide adoption and reuse of software with minimal legal encumbrance.

**Example:**

*   **FreeBSD Operating System:** Many components of FreeBSD are licensed under BSD licenses. Developers can take parts of FreeBSD, modify them, and incorporate them into commercial products without releasing their proprietary code.
*   **React (JavaScript Library):** The popular React library from Facebook is licensed under the MIT License, which is very similar in its permissive nature to the BSD licenses.

**Important Points to Remember:**

*   **Simplicity:** BSD licenses are known for their simplicity and ease of use.
*   **Proprietary Compatibility:** They are highly compatible with proprietary software development.

**Course Outcomes Alignment:**

*   **CO4:** Understanding the BSD license and its permissive nature.

### 4. Comparing the Licenses

| Feature           | GPL                                         | LGPL                                            | BSD                                                |
| :---------------- | :------------------------------------------ | :---------------------------------------------- | :------------------------------------------------- |
| **Type**          | Strong Copyleft                             | Weak Copyleft                                   | Permissive                                         |
| **Derivative Works** | Must be licensed under GPL                  | Library modifications under LGPL; Application linking is flexible (but must allow library replacement) | Can be proprietary                                 |
| **Linking**       | Dynamic linking can trigger GPL             | Generally permissive for linking (especially dynamic) | Permissive                                         |
| **Distribution**  | Source code must be provided                | Source code for library mods must be provided | Attribution and disclaimer are required            |
| **Usage in Proprietary Projects** | Generally not compatible without open-sourcing proprietary code | Compatible, with conditions on library modification and access | Highly compatible                                  |
| **Primary Goal**  | Ensure software freedom for all             | Enable library reuse, maintain library freedom  | Maximize software adoption and reuse               |

**Reference to Textbooks:**

*   **Sommerville (First Edition, 2020):** May have a dedicated section or chapter on OSS models and the implications of different licensing strategies.
*   **Pressman (Eighth Edition, 2014):** Could touch upon licensing as part of legal and ethical considerations in software engineering.

**Course Outcomes Alignment:**

*   **CO4:** Facilitates a deeper understanding of the practical differences and implications of these licenses.

### 5. Legal and Practical Considerations

**Key Concepts:**

*   **Compliance:** It is crucial to understand and comply with the terms of any open-source license used. Non-compliance can lead to legal action, including copyright infringement claims.
*   **Dual Licensing:** Some software projects offer their code under multiple licenses, allowing users to choose the terms that best suit their needs (e.g., GPL for free use, commercial license for proprietary integration without copyleft obligations).
*   **Open-Source vs. Free Software:** While often used interchangeably, "Free Software" (as defined by the FSF) emphasizes freedom, while "Open Source" (as defined by the Open Source Initiative - OSI) emphasizes the development model and practical benefits. The licenses themselves often overlap in their requirements.
*   **OSI Approved Licenses:** The Open Source Initiative (OSI) maintains a list of approved open-source licenses that meet their definition. GPL, LGPL, and BSD licenses are all OSI-approved.

**Reference to Textbooks:**

*   **Sommerville (Tenth Edition, 2015) & (First Edition, 2020):** Might discuss project management aspects related to using third-party components, which implicitly involves licensing.
*   **Pressman (Eighth Edition, 2014):** Could cover legal and ethical aspects of software development, including licensing and intellectual property.
*   **Reference Books (e.g., Royce on Project Management):** Project management books might touch upon risk management, which includes legal risks associated with software licensing.

**Course Outcomes Alignment:**

*   **CO4:** Broadens the understanding of OSS licensing to include practical and legal implications.
*   **CO6:** Project managers need to be aware of licensing to manage project risks and ensure legal compliance.

### Practice Questions and Exercises

**Question 1:**

A software company is developing a new proprietary application. They want to use a third-party library that is licensed under the GPL. If they include this library in their application and distribute the application to customers, what is the most likely implication for their proprietary application?

**Answer 1:**

The company will likely be required to license their entire proprietary application under the GPL as well. This means they would have to make the source code of their application publicly available.

**Question 2:**

Imagine you are developing a commercial desktop application. You want to use a UI toolkit that is licensed under the LGPL. What are the main conditions you need to meet when distributing your application?

**Answer 2:**

*   You do not need to license your entire application under the LGPL.
*   You must provide users with a way to modify and replace the LGPL-licensed UI toolkit. This is often achieved by dynamically linking the library and providing the user with the library's source code or a way to obtain it.
*   If you modify the LGPL-licensed toolkit itself, you must make those modifications available under the LGPL.

**Question 3:**

What is the primary difference between the GPL and the BSD license regarding the distribution of derivative works?

**Answer 3:**

The GPL is a "strong copyleft" license, meaning that any derivative works created from GPL-licensed software and distributed must also be licensed under the GPL. The BSD license is "permissive," allowing derivative works to be distributed under any license, including proprietary ones, as long as the original copyright notice and disclaimer are included.

**Question 4:**

A developer finds an open-source library with a BSD license. They modify the library to improve its performance and want to sell the modified library as part of a proprietary software product without releasing their modifications. Is this permissible? Explain why or why not.

**Answer 4:**

Yes, this is permissible under a standard BSD license. The BSD license is permissive and does not have a copyleft clause. Therefore, the developer can incorporate the modified library into a proprietary product and does not need to release their modifications, as long as they comply with the attribution and disclaimer requirements of the original BSD license.

**Question 5 (Application Scenario):**

You are managing a software project. Your team uses a popular JavaScript framework licensed under the MIT License (similar in permissiveness to BSD) for the front-end and integrates a custom-built back-end service. You want to eventually release the back-end as an open-source product.

*   What licensing considerations should you keep in mind for the front-end framework?
*   What licensing model would you consider for the back-end service if you want to encourage contributions from external developers while still maintaining some control?

**Answer 5:**

*   **Front-end Framework (MIT License):** The MIT license is very permissive. You can use it in your proprietary back-end service without any obligation to open-source the back-end. You primarily need to ensure that the original copyright notice and license text are included where the MIT-licensed code is distributed (e.g., in the documentation or a `LICENSE` file).
*   **Back-end Service (Open-Source Options):**
    *   **Permissive (e.g., MIT, BSD):** This would be ideal if you want to maximize the adoption of your back-end and allow it to be easily integrated into any project, proprietary or open-source, without imposing strong copyleft obligations. This is often good for building a large community of users and contributors.
    *   **Weak Copyleft (e.g., LGPL, MPL):** If you want to ensure that the back-end *itself* and any modifications to it remain open-source, but allow it to be used in proprietary applications, a weak copyleft license like MPL (Mozilla Public License) or potentially LGPL (if it's a library) could be suitable.
    *   **Strong Copyleft (e.g., GPL):** If your goal is to ensure that any project that *uses* or *modifies* your back-end also becomes open-source under the GPL, then this would be the choice. This is a more restrictive approach but ensures the entire ecosystem remains open.

    For encouraging contributions while maintaining some control and allowing broad adoption, a **permissive license like MIT or BSD** is often a good starting point. If the intention is to ensure the *backend itself* and its direct modifications remain open, while allowing integration into proprietary systems, a **weak copyleft license** like MPL or Apache License 2.0 would be a strong contender.

### Important Points to Remember (Summary)

*   **OSS Licenses are Legally Binding:** Always understand the terms before using or distributing software under an OSS license.
*   **Distribution is Key for Copyleft:** The "viral" effect of copyleft licenses like GPL is triggered by distributing the software.
*   **LGPL facilitates library reuse:** It strikes a balance between freedom and usability in proprietary projects.
*   **BSD licenses are permissive:** They offer maximum flexibility for integration into any type of project.
*   **Compliance is paramount:** Ignoring license terms can lead to significant legal issues.
*   **Choose the right license:** Select a license that aligns with your project's goals for community, adoption, and contribution.

This module provides a foundational understanding of open-source development and the critical role of licensing in modern software engineering. Understanding these concepts is essential for any software engineer involved in collaborative development or the use of third-party software components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
