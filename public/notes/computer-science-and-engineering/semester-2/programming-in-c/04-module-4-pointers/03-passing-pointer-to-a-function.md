---
title: "Passing pointer to a function"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e61"
status: "completed"
scrapedAt: "2026-05-20T16:35:37.117Z"
---
This is a fantastic request! I'll do my best to create comprehensive, engaging, and exam-oriented study notes for "Passing Pointers to a Function" in C, with a warm, professorial tone.

---

## Module 4: Pointers - Topic: Passing Pointers to a Function

Welcome back, everyone! In our journey through the powerful world of C programming, we've already explored the fundamental concept of pointers – those special variables that hold memory addresses. Today, we're going to take this concept a significant step further and delve into one of the most practical and impactful applications of pointers: **passing pointers to functions**.

You'll find this topic absolutely crucial, not just for passing Module 4 with flying colors, but for understanding how functions can truly interact with and modify data outside their own immediate scope. This directly ties into **Course Outcome 3 (CO3)**, where we aim to utilize functions for problem-solving by modularizing tasks, and more importantly, **Course Outcome 4 (CO4)**, which emphasizes using pointers for dynamic data handling. When you master this, you'll unlock a new level of control and efficiency in your C programs.

### Why Pass Pointers to Functions? The "Need to Know"

Let's start with a bit of a recap. When you call a function in C, it typically operates on *copies* of the arguments you pass. This is known as **pass-by-value**. Think of it like giving someone a photocopy of a document. They can read it, mark it up, even tear it, but the original document remains untouched.

Consider this:

```c
#include <stdio.h>

void tryToChange(int num) {
    num = num * 2; // This only changes the local copy of num
    printf("Inside tryToChange: %d\n", num);
}

int main() {
    int myValue = 10;
    printf("Before calling tryToChange: %d\n", myValue);
    tryToChange(myValue);
    printf("After calling tryToChange: %d\n", myValue); // myValue remains 10
    return 0;
}
```

If you run this, you'll see `myValue` remains 10. The `tryToChange` function received a copy of `10`, doubled it locally, but the original `myValue` in `main` was unaffected.

So, what if we *want* a function to be able to modify the original variable? This is where **pass-by-reference** comes into play, and in C, we achieve pass-by-reference by passing *pointers*.

Imagine you're managing a library. If you want a librarian to update the location of a specific book, you wouldn't just tell them "Find the book about ancient Rome." That's too vague, and they might end up changing the wrong book! Instead, you give them the exact shelf number and the specific position of that book. You're giving them the *address* of the information you want them to change. In C, a pointer is like that shelf number – it's the address of the data.
