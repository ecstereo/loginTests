This is the Playwright Login test for CHG's code assessment

To run locally:
1 Install Visual Studio Code (https://code.visualstudio.com/download)
2 Install latest version of node.js (https://nodejs.org/en/download)
3 Create an empty folder in your location of choice, with your name of choice
4 Download the loginTests.spec.js file from the GitHub loginTests repository (https://github.com/ecstereo/loginTests/blob/main/tests/loginTests.spec.js)
5 Open VS Code and drop the new folder into VS Code (Select to trust author if prompted)
6 Open a new terminal (menu bar > Terminal > New Terminal || CTRL+SHFT+`)
7 From terminal install Playwright using the command: "npm init playwright@latest"
    - Follow the installation steps (help: https://playwright.dev/docs/intro)
8 Download the "loginTests.spec.js" file from the GitHub loginTests repository (https://github.com/ecstereo/loginTests/blob/main/tests/loginTests.spec.js)
8 Drop the "loginTests.spec.js" file into the "/tests" folder in your VS Code explorer
9 Run the tests from the terminal: 
  - To run all tests in "/tests" folder, use the command: "npx playwright test"
  - To run just the login tests, use the command: "npx playwright test loginTests.spec.js" 
  - To see the report, in terminal use the command: "npx playwright show-report"
  - For other test running options, see: https://playwright.dev/docs/running-tests
