---
title: "Create a web page and deploy on a local web server."
subject: "IT WORKSHOP"
module: "Module 10: Create a web page and deploy on a local web server."
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97ee"
status: "completed"
scrapedAt: "2026-05-23T16:07:48.674Z"
---
# IT WORKSHOP: MODULE 10 - CREATE A WEB PAGE AND DEPLOY ON A LOCAL WEB SERVER

Welcome, everyone, to Module 10 of our IT Workshop! Today, we're embarking on a journey into the exciting world of web development, specifically focusing on building our very own web page and making it accessible right on our own computer, using what we call a "local web server." This is a fundamental step in understanding how the internet works, and it directly ties into several of our Course Outcomes.

Remember, our goal throughout this course is to build a solid understanding of IT systems. From understanding hardware to using the Linux command line, and even looking at network traffic, we're building a comprehensive picture. This module, particularly, will help us achieve **CO4: Develop basic websites using HTML, CSS & JavaScript and manage the versions.** We'll be putting our knowledge of how computers and software interact (CO1) to practical use as we explore creating content and making it available. Understanding how a web server works, even locally, also gives us a glimpse into network communication scenarios (CO3).

## 1. The Building Blocks: What is a Web Page?

Before we jump into deploying anything, let's quickly recap what a web page actually is. Think of the internet as a massive library, and each website is a book within that library. A web page is essentially a single page from one of those books.

*   **Content:** What you see and read – text, images, videos, links. This is primarily handled by **HTML (HyperText Markup Language)**. HTML acts like the skeleton of the web page, defining the structure and content. Imagine it like the bricks and mortar of a building, giving it shape. Schneider and Gersting, in "Invitation to Computer Science," highlight HTML as the language that structures the information we see online.
*   **Presentation:** How the content looks – colors, fonts, layout, spacing. This is where **CSS (Cascading Style Sheets)** comes in. CSS is like the interior designer for our web page, deciding on the paint colors, furniture arrangement, and overall aesthetic. Julie Meloni and Jennifer Kyrnin's "HTML, CSS, and JavaScript - All in One" is an excellent resource for diving deep into these styling aspects.
*   **Interactivity:** What makes the page dynamic – animations, forms, user responses. This is the domain of **JavaScript**. JavaScript is the "action" behind the scenes, allowing for things like interactive menus or validating form entries. It’s the electricity that powers the appliances in our building.

So, to create a basic web page, we'll primarily be using HTML for structure and content, and maybe a touch of CSS to make it look a little nicer.

## 2. Crafting Your First Web Page

Let's get our hands dirty and create a simple HTML file. You don't need any fancy software for this; a plain text editor is all you need.

**What you'll need:**
*   A text editor: On Windows, you can use Notepad. On macOS, TextEdit (make sure to save as plain text). On Linux, you have many options like `nano`, `vi`, or `gedit`.
*   A web browser: Chrome, Firefox, Edge, Safari – any will do!

**Let's create `index.html`:**

1.  Open your text editor.
2.  Type in the following HTML code. Don't worry if you don't understand every tag perfectly yet; we're focusing on the process.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>My First Web Page</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is my very first web page created in IT Workshop.</p>
        <p>It's exciting to see our own content come to life!</p>
    </body>
    </html>
    ```

3.  **Save the file.** This is crucial! Save it in a dedicated folder. Let's say you create a folder named `my_website` on your Desktop. Name the file `index.html`.
    *   **Why `index.html`?** This is a convention. When a web server looks at a directory (a folder), it usually defaults to looking for a file named `index.html` to display. It's the homepage of that directory. So, if you just type the directory's address, `index.html` will be shown.

4.  **Open the file in your browser.** Navigate to where you saved `index.html`, and double-click it. Or, you can open your browser, click "File" > "Open File," and select your `index.html`.

You should now see a simple page with a heading "Hello, World!" and two paragraphs of text. Congratulations, you've created your first web page! This directly addresses the "Develop basic websites using HTML" part of CO4.

## 3. Introducing the Local Web Server

So, you've created a file. When you opened it directly from your computer's file system (like `file:///Users/YourName/Desktop/my_website/index.html`), the browser was acting as a standalone viewer. But a *web server* is a special piece of software that listens for requests over a network (even a network within your own computer!) and serves up web pages in response.

Think of it like this: Your computer's file system is like a private bookshelf in your room. When you double-click `index.html`, you're just picking up the book yourself. A web server is like a librarian. When you ask for a specific book (a web page), the librarian (web server) finds it and hands it to you.

**Why do we need a web server, even locally?**
*   **To simulate the real web:** Most web pages today are served by web servers. Testing locally with a server mimics how they'll behave on the live internet.
*   **To understand how requests are made:** Browsers communicate with servers using protocols like HTTP (Hypertext Transfer Protocol). Running a local server helps us see this interaction.
*   **To enable features:** Some web technologies and scripting languages (like more advanced JavaScript or server-side languages) require a running web server to function correctly.

This is where **CO1: Experiment with the fundamental hardware components of a computer and how to interface them with software systems** subtly comes into play. While we're not directly manipulating hardware, we're using software (the web server) that relies on the computer's networking capabilities to serve content.

## 4. Deploying on a Local Web Server

Now, how do we get a web server running on our own machine? There are many ways, but for this workshop, we'll focus on simple, readily available options.

### 4.1 Using Python's Built-in HTTP Server

One of the simplest ways, especially if you have Python installed (which is common on Linux and macOS, and can be easily installed on Windows), is to use its built-in HTTP module. This is a fantastic tool for quick local testing.

**Steps using Python 3:**

1.  **Open your terminal or command prompt.** This is our gateway to the Linux command line and other command-line interfaces. **CO2: Make use of the command line of Linux operating system and shell programming** is directly relevant here. We'll use commands to navigate and start our server.
2.  **Navigate to your website's directory.** If you saved `my_website` on your Desktop, you'd type something like:
    *   On Linux/macOS: `cd Desktop/my_website`
    *   On Windows: `cd Desktop\my_website`
3.  **Start the Python HTTP server.**
    *   If you have Python 3 installed:
        ```bash
        python -m http.server 8000
        ```
    *   *(Historical Note: If you were using Python 2, the command would be `python -m SimpleHTTPServer 8000`)*. The `8000` is the port number. Ports are like different doors on a building, allowing different services to communicate. Port 80 is the default for HTTP, but 8000 is commonly used for local development to avoid conflicts.

4.  **Observe the output.** You'll see something like:
    ```
    Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
    ```
    This means your server is running and listening for requests on port 8000.

5.  **Access your page via the browser.** Open your web browser and go to:
    ```
    http://localhost:8000
    ```
    or
    ```
    http://127.0.0.1:8000
    ```
    *   **`localhost` and `127.0.0.1`:** These are special IP addresses that always refer to your own computer. It's like saying "my house" instead of giving your full street address.

You should see your `index.html` page displayed, served by the Python server! If you had other files in the `my_website` folder (like images or other HTML files), you could access them too by typing their names after the port, e.g., `http://localhost:8000/another_page.html`. This also gives us a basic understanding of network addresses and ports, which are concepts from **CO3**.

*   **Important:** To stop the server, go back to your terminal window and press `Ctrl + C`.

### 4.2 Using a Dedicated Local Server Software (Brief Mention)

While Python's built-in server is great for simplicity, for more complex web development, people often use dedicated software like:

*   **Apache HTTP Server:** A very popular, robust, and feature-rich web server.
*   **Nginx:** Known for its high performance and efficiency, often used for serving static content and as a reverse proxy.
*   **Node.js (with tools like `http-server` or `live-server`):** If you're doing JavaScript development, Node.js provides a platform to run JavaScript on the server, and there are many simple packages to spin up local servers.

These often involve installation and configuration, which are beyond the scope of this introductory module but are good to be aware of for future learning. The principles remain the same: software listens for requests on a port and serves files.

## 5. Understanding the Request-Response Cycle (Local Edition)

When you type `http://localhost:8000` into your browser:

1.  **Your browser (the client)** sends an HTTP *request* to the web server running on your computer at `localhost` on port `8000`.
2.  The **Python HTTP server** (or any web server) receives this request. It understands that the request is for the root path (`/`), which typically maps to the `index.html` file in the directory it's serving.
3.  The server **finds the `index.html` file.**
4.  The server reads the content of `index.html` and sends it back to your browser as an HTTP *response*.
5.  **Your browser receives the response**, parses the HTML, and renders the web page for you to see.

This fundamental request-response cycle is the heart of how the web works, as discussed in chapters related to networking and client-server architecture in books like Englander's "The Architecture of Computer Hardware, Systems Software, & Networking."

## 6. Making it Better: Basic Styling with CSS

Our page is functional, but it's a bit plain, right? Let's add some basic styling using CSS.

We can embed CSS directly within our HTML using `<style>` tags in the `<head>` section.

**Modify `index.html`:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Styled Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif; /* Make text easier to read */
            background-color: #f4f4f4; /* Light grey background */
            margin: 20px; /* Add some space around the content */
        }
        h1 {
            color: #333; /* Dark grey for the heading */
            text-align: center; /* Center the heading */
        }
        p {
            color: #555; /* Slightly lighter grey for paragraphs */
            line-height: 1.6; /* Improve readability of paragraphs */
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my very first web page created in IT Workshop.</p>
    <p>It's exciting to see our own content come to life!</p>
</body>
</html>
```

Now, save this modified `index.html` file. Make sure your Python server is still running (or restart it if you stopped it). Refresh your browser window (often by pressing `F5` or `Cmd + R`).

Voila! Your page should look a bit more polished. This step demonstrates the "Develop basic websites using HTML, CSS" part of **CO4**.

**A note on CSS best practices:** For larger websites, it's much better to put your CSS in a separate file (e.g., `style.css`) and link to it from your HTML. This keeps your code organized and makes it easier to manage styles across multiple pages. You would create a `style.css` file with the CSS rules and then add a line like this in your HTML's `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

## 7. Version Management (A Glimpse)

While this module focuses on creating and deploying, it's crucial to touch upon version management, as mentioned in **CO4: ...and manage the versions.**

As you develop a website, you'll make changes, experiment with new features, and sometimes revert to older versions. Manually keeping track of different versions of your files (e.g., `index_v1.html`, `index_v2.html`, `index_final.html`, `index_really_final.html`!) is a nightmare.

This is where **Version Control Systems (VCS)** like **Git** come in. Git allows you to:
*   **Track changes:** Record every modification made to your files.
*   **Revert to previous versions:** Easily go back to an older state if something breaks.
*   **Collaborate:** Work with others on the same project without overwriting each other's work.

Mastering Git, as suggested by Jakub Narębski's book, is a vital skill for any developer. While we won't dive deep into Git commands in this module, understand that when you're building real web projects, Git is your best friend for managing the evolution of your code.

## Summary and Key Takeaways

Today, we've learned how to:

*   **Create a basic web page** using HTML.
*   **Save it correctly** as `index.html`.
*   **Understand the role of a web server** for making pages accessible.
*   **Deploy our web page on a local web server** using Python's built-in module.
*   **Access our local web page** through a browser using `localhost` or `127.0.0.1`.
*   **Add basic styling** using CSS.

Remember this: Building a web page is about structuring content (HTML) and then presenting it attractively (CSS). Making it available locally via a server is a critical step in understanding how web applications function and is a stepping stone to deploying them on the wider internet.

The concepts of clients, servers, requests, responses, IP addresses, and ports are fundamental to networking, and this module gave you a hands-on experience with them. Keep practicing, experiment with different HTML tags and CSS properties, and always think about how you can manage your code's history using tools like Git!

---

## Sample Questions and Answers

Here are a few questions to test your understanding:

**Q1: What is the primary role of HTML in web development?**

*   **Answer:** HTML (HyperText Markup Language) is primarily responsible for defining the structure and content of a web page. It uses tags to mark up different elements like headings, paragraphs, images, and links, telling the browser what each piece of content represents.

**Q2: Why is the file `index.html` special when running a local web server?**

*   **Answer:** By convention, when a web server is asked to serve a directory (like `http://localhost:8000/`), it looks for a file named `index.html` within that directory to display as the default homepage for that location. If `index.html` is not found, the server will typically list all the files in the directory instead.

**Q3: Explain the purpose of `localhost` in a web browser's address bar.**

*   **Answer:** `localhost` (or its equivalent IP address `127.0.0.1`) is a hostname that always refers to the user's own computer. When you use `localhost` in a browser's address bar, you are telling the browser to connect to a service or server running on the machine you are currently using. This is essential for accessing locally hosted web pages or applications.

**Q4: If you type `http://localhost:8000` into your browser and get an error, what are two common reasons why this might happen?**

*   **Answer:**
    1.  **The web server is not running:** The Python script (or other server software) might not have been started, or it might have crashed.
    2.  **The server is running on a different port:** The server might have been started with a different port number (e.g., `8080` instead of `8000`), or you might have mistyped the port in the browser's address.
    3.  **You are not in the correct directory:** If you started the Python server from a directory that does not contain your `index.html` file (or other intended content), it might not serve the page as expected, or it might show a directory listing.

**Q5: How does CSS improve the appearance of a web page compared to plain HTML?**

*   **Answer:** While HTML provides the structure and content, it has very limited capabilities for visual presentation. CSS (Cascading Style Sheets) allows developers to control a wide range of visual aspects, such as fonts, colors, spacing, layout, background images, borders, and responsiveness across different devices. This separation of content (HTML) and presentation (CSS) makes web pages more visually appealing, organized, and easier to maintain.

**Q6: You have created a file named `about_us.html` in your `my_website` folder. If your Python server is running from within that folder, what URL would you use to view `about_us.html` in your browser?**

*   **Answer:** Assuming the server is running on port 8000, the URL would be `http://localhost:8000/about_us.html`. The server maps the path in the URL to files within the directory it's serving.
