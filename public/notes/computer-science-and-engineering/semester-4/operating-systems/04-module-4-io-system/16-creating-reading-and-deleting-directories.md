---
title: "Creating, reading and deleting directories"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd9"
status: "completed"
scrapedAt: "2026-05-20T16:14:39.748Z"
---
## Operating Systems: Module 4 - I/O System: Creating, Reading, and Deleting Directories

**Learning Outcomes:**

*   Understand the fundamental concepts of directory structures within an operating system.
*   Describe the system calls or API functions used for creating directories.
*   Describe the system calls or API functions used for reading directories and listing their contents.
*   Describe the system calls or API functions used for deleting directories.
*   Explain the error handling mechanisms associated with directory manipulation operations.
*   Understand the security considerations involved in directory management.
*   Be able to implement basic directory creation, reading, and deletion operations using a programming language and system calls.

---

### 1. Introduction to Directories and File Systems

*   **Key Concept: File System:** A structured way of organizing and storing files on a storage device (e.g., hard drive, SSD).  It provides a hierarchical structure for organizing and accessing data.

*   **Key Concept: Directory (Folder):** A special type of file that contains metadata about other files and directories.  It's essentially a mapping between human-readable names and the actual locations of files on the storage device.

*   **Directory Hierarchy:**  File systems are typically organized in a tree-like structure with a root directory at the top.  Directories can contain other directories (subdirectories) and files.

*   **Pathnames:** A way to uniquely identify a file or directory within the file system.  Two types of pathnames exist:

    *   **Absolute Pathname:** Starts from the root directory and specifies the complete path to the file or directory (e.g., `/home/user/documents/report.txt` on Linux/Unix, `C:\Users\User\Documents\Report.txt` on Windows).
    *   **Relative Pathname:**  Starts from the current working directory (the directory the user is currently in) (e.g., `documents/report.txt` if the current working directory is `/home/user` on Linux/Unix).  `.` refers to the current directory, and `..` refers to the parent directory.

*   **Important Point:** The root directory is the foundation of the entire file system hierarchy.

### 2. Creating Directories

*   **System Calls/API Functions:** Operating systems provide system calls or API functions to create directories. Common names include:

    *   **Unix-like systems (Linux, macOS, etc.):** `mkdir()` (defined in `<sys/stat.h>` and `<unistd.h>`)
    *   **Windows:** `CreateDirectory()` (defined in `<Windows.h>`)

*   **`mkdir()` (Unix-like):**

    *   **Syntax:** `int mkdir(const char *pathname, mode_t mode);`
    *   `pathname`:  The path of the directory to be created.
    *   `mode`: Specifies the permissions for the new directory (e.g., read, write, execute for owner, group, and others).  This is typically specified using octal notation (e.g., `0777` for full permissions, `0755` for read and execute for group and others).
    *   **Return Value:** 0 on success, -1 on error.  `errno` is set to indicate the specific error.

*   **`CreateDirectory()` (Windows):**

    *   **Syntax:** `BOOL CreateDirectory(LPCWSTR lpPathName, LPSECURITY_ATTRIBUTES lpSecurityAttributes);`
    *   `lpPathName`: The path of the directory to be created (Unicode string).
    *   `lpSecurityAttributes`: A pointer to a `SECURITY_ATTRIBUTES` structure that determines whether the returned handle can be inherited by child processes.  Generally, set to `NULL`.
    *   **Return Value:** Nonzero (TRUE) on success, zero (FALSE) on error.  `GetLastError()` retrieves error information.

*   **Error Handling:** Common errors include:

    *   `EEXIST`:  The directory already exists.
    *   `ENOENT`:  A component of the path does not exist.
    *   `EACCES`:  Permission denied (insufficient permissions to create the directory in the specified location).
    *   `ENOSPC`:  No space left on the device.
    *   `EROFS`: File system is read-only.

*   **Example (C/Unix-like):**

    ```c
    #include <sys/stat.h>
    #include <sys/types.h>
    #include <stdio.h>
    #include <errno.h>

    int main() {
        const char *dirname = "mydirectory";
        if (mkdir(dirname, 0777) == 0) {
            printf("Directory '%s' created successfully.\n", dirname);
        } else {
            perror("Error creating directory");
            printf("Error code: %d\n", errno);
        }
        return 0;
    }
    ```

*   **Example (C++/Windows):**

    ```cpp
    #include <iostream>
    #include <Windows.h>
    #include <string>

    int main() {
        std::wstring dirname = L"mydirectory";  // Use wide string for Unicode
        if (CreateDirectoryW(dirname.c_str(), NULL)) {
            std::wcout << L"Directory '" << dirname << L"' created successfully." << std::endl;
        } else {
            DWORD error = GetLastError();
            std::wcerr << L"Error creating directory.  Error code: " << error << std::endl;
        }
        return 0;
    }
    ```

*   **Important Point:** Always check the return value of the system call and handle errors appropriately.

### 3. Reading Directories

*   **System Calls/API Functions:** These functions allow you to list the contents of a directory.

    *   **Unix-like systems (Linux, macOS, etc.):** `opendir()`, `readdir()`, `closedir()` (defined in `<dirent.h>`)
    *   **Windows:** `FindFirstFile()`, `FindNextFile()`, `FindClose()` (defined in `<Windows.h>`)

*   **`opendir()`, `readdir()`, `closedir()` (Unix-like):**

    1.  **`opendir()`:** Opens a directory stream.

        *   **Syntax:** `DIR *opendir(const char *name);`
        *   `name`: The path of the directory to open.
        *   **Return Value:**  A pointer to a `DIR` structure (directory stream) on success, `NULL` on error.
    2.  **`readdir()`:** Reads the next directory entry from the directory stream.

        *   **Syntax:** `struct dirent *readdir(DIR *dirp);`
        *   `dirp`:  The directory stream pointer returned by `opendir()`.
        *   **Return Value:** A pointer to a `dirent` structure containing information about the directory entry, `NULL` when the end of the directory is reached or an error occurs.

            *   The `dirent` structure (defined in `<dirent.h>`) typically contains:
                *   `ino_t d_ino`:  Inode number (file serial number).
                *   `off_t d_off`: Offset to the next directory entry.
                *   `unsigned short d_reclen`: Length of this record.
                *   `unsigned char d_type`: Type of file (e.g., `DT_REG` for regular file, `DT_DIR` for directory).  May not be supported on all systems.
                *   `char d_name[]`: Name of the directory entry (e.g., filename or directory name).
    3.  **`closedir()`:** Closes the directory stream.

        *   **Syntax:** `int closedir(DIR *dirp);`
        *   `dirp`: The directory stream pointer.
        *   **Return Value:** 0 on success, -1 on error.

*   **`FindFirstFile()`, `FindNextFile()`, `FindClose()` (Windows):**

    1.  **`FindFirstFile()`:**  Starts a search for files matching a specified pattern.

        *   **Syntax:** `HANDLE FindFirstFile(LPCWSTR lpFileName, LPWIN32_FIND_DATAW lpFindFileData);`
        *   `lpFileName`: The path to the directory to search, optionally including wildcards (e.g., `C:\\mydirectory\\*`).  Use wide strings for Unicode support.
        *   `lpFindFileData`: A pointer to a `WIN32_FIND_DATA` structure that receives information about the first matching file or directory.
        *   **Return Value:** A search handle (a `HANDLE` type) that must be used in subsequent calls to `FindNextFile` and `FindClose` on success, `INVALID_HANDLE_VALUE` on error.

    2.  **`FindNextFile()`:**  Continues the search for the next matching file or directory.

        *   **Syntax:** `BOOL FindNextFile(HANDLE hFindFile, LPWIN32_FIND_DATAW lpFindFileData);`
        *   `hFindFile`: The search handle returned by `FindFirstFile`.
        *   `lpFindFileData`: A pointer to a `WIN32_FIND_DATA` structure that receives information about the next matching file or directory.
        *   **Return Value:** Nonzero (TRUE) on success, zero (FALSE) when no more matching files are found or an error occurs.

    3.  **`FindClose()`:** Closes the search handle.

        *   **Syntax:** `BOOL FindClose(HANDLE hFindFile);`
        *   `hFindFile`: The search handle.
        *   **Return Value:** Nonzero (TRUE) on success, zero (FALSE) on error.

*   **Error Handling:**

    *   `opendir()`: Returns `NULL` on error (e.g., directory does not exist, permission denied).  Check `errno`.
    *   `readdir()`: Returns `NULL` when the end of the directory is reached or an error occurs.  Check `errno`.  Differentiating between end-of-directory and an actual error can be tricky and sometimes requires checking `errno` after a `NULL` return.
    *   `FindFirstFile()`: Returns `INVALID_HANDLE_VALUE` on error. Use `GetLastError()` to get the error code.
    *   `FindNextFile()`: Returns zero (FALSE) on error or when no more files are found. Use `GetLastError()` to get the error code. `ERROR_NO_MORE_FILES` specifically indicates that the end of the directory has been reached.

*   **Example (C/Unix-like):**

    ```c
    #include <stdio.h>
    #include <dirent.h>
    #include <errno.h>

    int main() {
        DIR *dir;
        struct dirent *entry;

        dir = opendir("."); // Open the current directory
        if (dir == NULL) {
            perror("opendir failed");
            return 1;
        }

        while ((entry = readdir(dir)) != NULL) {
            printf("Name: %s\n", entry->d_name);
        }

        if (errno != 0) {  // Check for errors after the loop
            perror("readdir failed");
            closedir(dir);
            return 1;
        }

        closedir(dir); // Close the directory stream
        return 0;
    }
    ```

*   **Example (C++/Windows):**

    ```cpp
    #include <iostream>
    #include <Windows.h>
    #include <string>

    int main() {
        WIN32_FIND_DATAW fileData;
        HANDLE hFind;
        std::wstring directoryPath = L".\\*"; // Current directory with wildcard

        hFind = FindFirstFileW(directoryPath.c_str(), &fileData);

        if (hFind == INVALID_HANDLE_VALUE) {
            std::wcerr << L"FindFirstFile failed. Error code: " << GetLastError() << std::endl;
            return 1;
        }

        do {
            std::wcout << L"Name: " << fileData.cFileName << std::endl;

            // Check if it's a directory
            if (fileData.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY) {
                std::wcout << L"  (Directory)" << std::endl;
            } else {
                std::wcout << L"  (File)" << std::endl;
            }

        } while (FindNextFileW(hFind, &fileData) != 0);

        DWORD error = GetLastError();
        if (error != ERROR_NO_MORE_FILES) {
            std::wcerr << L"FindNextFile failed. Error code: " << error << std::endl;
        }

        FindClose(hFind);
        return 0;
    }
    ```

*   **Important Point:**  Remember to close the directory stream (using `closedir` or `FindClose`) when you are finished with it to free system resources. On windows, note that the file and directory names are wide strings.  You must handle this correctly.

### 4. Deleting Directories

*   **System Calls/API Functions:** These functions allow you to remove (delete) empty directories.

    *   **Unix-like systems (Linux, macOS, etc.):** `rmdir()` (defined in `<unistd.h>`)
    *   **Windows:** `RemoveDirectory()` (defined in `<Windows.h>`)

*   **`rmdir()` (Unix-like):**

    *   **Syntax:** `int rmdir(const char *pathname);`
    *   `pathname`: The path of the directory to be removed.
    *   **Return Value:** 0 on success, -1 on error.  `errno` is set to indicate the specific error.

*   **`RemoveDirectory()` (Windows):**

    *   **Syntax:** `BOOL RemoveDirectory(LPCWSTR lpPathName);`
    *   `lpPathName`: The path of the directory to be removed (Unicode string).
    *   **Return Value:** Nonzero (TRUE) on success, zero (FALSE) on error.  `GetLastError()` retrieves error information.

*   **Error Handling:** Common errors include:

    *   `ENOTEMPTY`:  The directory is not empty (contains files or subdirectories).  **`rmdir()` and `RemoveDirectory()` can only delete empty directories.**
    *   `ENOENT`:  The directory does not exist.
    *   `EACCES`:  Permission denied (insufficient permissions to delete the directory).
    *   `EBUSY`: The directory is being used by another process.
    *   `EROFS`: File system is read-only.

*   **Important Point:**  To delete a non-empty directory, you must recursively delete all files and subdirectories within it *before* attempting to delete the directory itself.  This is often done using functions from libraries such as `ftw` (file tree walk) on Linux or the `shutil` library in Python, combined with the standard file deletion functions (e.g., `remove()` or `unlink()` for files on Unix-like systems, `DeleteFile()` on Windows).  On Windows, `SHFileOperation` can also be used, along with the `FOF_DELETE` flag, to easily delete a directory and its contents recursively.

*   **Example (C/Unix-like):**

    ```c
    #include <unistd.h>
    #include <stdio.h>
    #include <errno.h>

    int main() {
        const char *dirname = "mydirectory";
        if (rmdir(dirname) == 0) {
            printf("Directory '%s' removed successfully.\n", dirname);
        } else {
            perror("Error removing directory");
            printf("Error code: %d\n", errno);
        }
        return 0;
    }
    ```

*   **Example (C++/Windows):**

    ```cpp
    #include <iostream>
    #include <Windows.h>
    #include <string>

    int main() {
        std::wstring dirname = L"mydirectory";
        if (RemoveDirectoryW(dirname.c_str())) {
            std::wcout << L"Directory '" << dirname << L"' removed successfully." << std::endl;
        } else {
            DWORD error = GetLastError();
            std::wcerr << L"Error removing directory. Error code: " << error << std::endl;
        }
        return 0;
    }
    ```

*   **Important Point:**  Exercise extreme caution when deleting directories, especially recursively.  Double-check the path to avoid accidentally deleting important files or directories.

### 5. Security Considerations

*   **Permissions:** Proper file system permissions are crucial for security.  Control who can create, read, write, and delete files and directories.

*   **Access Control Lists (ACLs):**  More fine-grained control over access than traditional Unix permissions. ACLs allow you to specify permissions for individual users or groups.

*   **Input Validation:**  Always validate user input (e.g., directory names, paths) to prevent directory traversal attacks (where users try to access files outside of their intended area).

*   **Privilege Escalation:**  Be careful when running programs with elevated privileges (e.g., root on Unix-like systems, Administrator on Windows).  A vulnerability in such a program could allow an attacker to gain control of the system.

*   **Directory Traversal:**  Be aware of path traversal vulnerabilities.  For example, if a user can specify a filename, they might try to use `../` to navigate outside the intended directory. Implement proper validation to prevent this.

*   **Security Best Practices:**
    *   Follow the principle of least privilege.
    *   Regularly audit file system permissions.
    *   Keep your operating system and software up to date.
    *   Use strong passwords.

### 6. Practice Questions & Exercises

**Question 1:** What is the difference between an absolute path and a relative path? Give examples.

*   **Answer:** An absolute path starts from the root directory (e.g., `/home/user/file.txt` on Linux) and uniquely identifies a file. A relative path starts from the current working directory (e.g., `file.txt` if the current directory is `/home/user`).

**Question 2:**  What are the common error codes returned by `mkdir()` and `rmdir()`?  What do they signify?

*   **Answer:**
    *   `EEXIST`: Directory already exists (for `mkdir()`).
    *   `ENOENT`: Path does not exist.
    *   `EACCES`: Permission denied.
    *   `ENOTEMPTY`: Directory is not empty (for `rmdir()`).

**Question 3:** Write a C program (for a Unix-like system) that creates a directory named "temp" and then lists its contents (which will be nothing initially).  Then delete the directory.  Handle all errors.

```c
#include <stdio.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <dirent.h>
#include <errno.h>

int main() {
    const char *dirname = "temp";
    DIR *dir;
    struct dirent *entry;

    // Create the directory
    if (mkdir(dirname, 0777) != 0) {
        perror("Error creating directory");
        return 1;
    }

    printf("Directory '%s' created successfully.\n", dirname);

    // List the contents
    printf("Contents of '%s':\n", dirname);
    dir = opendir(dirname);
    if (dir == NULL) {
        perror("Error opening directory");
        rmdir(dirname); // Cleanup: delete the directory we just created.
        return 1;
    }

    while ((entry = readdir(dir)) != NULL) {
        printf("  %s\n", entry->d_name);
    }

    closedir(dir);

    // Delete the directory
    if (rmdir(dirname) != 0) {
        perror("Error deleting directory");
        return 1;
    }

    printf("Directory '%s' deleted successfully.\n", dirname);

    return 0;
}
```

**Question 4:**  Why can't you delete a non-empty directory using `rmdir()` (or `RemoveDirectory()`)?

*   **Answer:**  These functions are designed to prevent accidental data loss. Deleting a non-empty directory without first deleting its contents could lead to orphaned files and data corruption.  The operating system requires you to explicitly delete the files and subdirectories first to confirm your intent.

**Question 5:** Explain the purpose of the `mode` parameter in the `mkdir()` function.

*   **Answer:** The `mode` parameter specifies the permissions for the newly created directory.  It determines who can read, write, and execute within the directory.  The value is typically expressed in octal notation (e.g., `0777`, `0755`).  The operating system's `umask` setting can modify these permissions.

### 7. Important Points to Remember

*   Always check the return values of system calls and handle errors appropriately.  Use `errno` (Unix-like) or `GetLastError()` (Windows) to get more detailed error information.
*   Be careful when deleting directories, especially recursively.  Verify the path before deleting.
*   Understand and implement proper file system permissions to ensure security.
*   Use wide strings (`wchar_t` and functions ending with `W`) for pathnames on Windows for Unicode support.
*   Remember to close directory streams using `closedir()` or `FindClose()` to release system resources.
*   The function `rmdir` and `RemoveDirectory` only delete empty directories.
*   Understand the concept of privilege escalation and avoid running programs with unnecessary elevated privileges.
