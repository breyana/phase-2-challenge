- **When you run a command in the terminal, where does BASH look for that command**

  In the ~/.bashrc and ~/.bash_profile files

- **On a UNIX computer, how do you stop a running process?**

 By using the kill command

- **What packages do you have installed via homebrew?**

  NPM and Postgres

- **On a UNIX computer, how do you find the process id of a running process?**

  Use the ucbps command

- **In a terminal, what does control-c do?**

  Ctrl-C kills a running process.

- **What would be the result of typing the following commands?**
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```

  The working directory would be /Users/steve/foo. Two bar files would be created in the file steve and the file foo.

- **How do you set an environment variable in your shell?**


- **What keyboard shortcut do you use to split the screen in your editor?**

  Cmd+Shift+P then type "split" then choose the split option

- **How do you create an alias in your shell?**

  Add one to ~/.bashrc

- **When a terminal command completes, how can you tell if it was successful or not?**

  When the next input line appears.

- **What does your `~/.gitconfig` have in it? (paste the whole file here)**
- **What is the difference between a relative and absolute path?**

  Relative path doesn't have the full address, but can be used when the file is in the same directory. Absolute path has the whole path written out. For example, linking "styles.css", versus linking "http://www.website.com/styles.css"

- **Lets say you have the following file structure**

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  **And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?**

  cp README.md ../pinterest-for-dogs

- **What keyboard shortcut do you use, in your editor, when you want to open a specific file?**

  Cmd+O

- **What files or folders do you want all git repositories to ignore?**

  node_modules
  .env

- **What is the main difference between `Array.map` and `Array.forEach` in JavaScript?**

  Map iterates a function over each item in the array and returns a new array. For each iterates a function over each item in the array, but does not return a new array.
