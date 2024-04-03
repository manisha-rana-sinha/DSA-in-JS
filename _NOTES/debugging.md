Note - In vscode to see preview -` press CTRL + SHIFT + V`, preview will open in next tab.

# How to run and inspect code in chrome browser

### Method 1

1. Run using node - `node .\max_sum_refactored.js`
   It will run the code in node env

2. To inspect -

- Add `debugger;` in the code

- Run `node --inspect-brk .\max_sum_refactored.js`
  It will run the code in debug mode and give information about the device and port where it is running. To see and inspect the code in chrome browser.
- Open chrome browser
- In new tab, open - `chrome://inspect`
- There you can the information about the code where it is running with `inspect` link in the bottom.
- Click on the `inspect` link, it will open the code in debug mode.

### Method 2

You can debug into your code using 'Evaluate in console' by adding a 'debugger' statement to your code.

1. Add `debugger` statement in the code;
2. Select the code from source in Developer tools
3. Right Click -> Select `Evaluate the selected text in console`
