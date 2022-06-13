# Percayso Programming Exercise 3

## News app

▶️ Online App : [Check here](https://news-percayso-test.netlify.app/)<br>
▶️ Style Figma : [Check here](https://www.figma.com/file/NQaHoISOcFI2EvePRxW1at/Percayso-News?node-id=17%3A2)<br><br>

This app was developed using the react framework, check below the versions used<br>
❗❗ Note: This API only acept 100 request per day [Free version] ❗❗<br><br>

## Plugins

This app is currently use this following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin                | README                                                          |
| --------------------- | --------------------------------------------------------------- |
| React                 | [https://reactjs.org/]                                          |
| SASS                  | [https://sass-lang.com/documentation/]                          |
| React-testing-library | [https://testing-library.com/docs/react-testing-library/intro/] |
| React Dom             | [https://reactrouter.com/docs/en/v6]                            |
| Netifly               | [https://www.netlify.com/]                                      |
| API used              | [https://gnews.io/?ref=apilist.fun]                             |
| Cypress               | [https://www.cypress.io/]                                       |

## Installation

News app used [Node.js](https://nodejs.org/) v16.13.0

for this project to work locally you need to create a .env folder and put your token inside with the variable name "REACT_APP_API_KEY" [.env folder](https://github.com/motdotla/dotenv)

Install the dependencies for to start the server locally.

```sh
npm i
npm start
```

## Testing

For to see the Test with React-testing library<br>
I Used this for to test the components (unit test)

```sh
npm run test
```

For to see the Test with cypress<br>
I Used this for to do E2E testing

```sh
npm run cypress:open
```

---

## Brief

Create a website that gets news from the GNews api:

    https://gnews.io/?ref=apilist.fun

Your website must:

1. Include a search area
2. Include a results area
3. Include tests
4. Be hosted on a publicly accessible URL, so we can see it working

You are free to choose:

1. How to style all aspects of the page.
2. What language and framework to use.

We are looking to understand your approach to solving this problem as much as the actual technical solution. Add comments to your code to help us understand your thinking.

Googling syntax is allowed, googling solutions is not.

## Submitting your solution

Please commit your solution within the time frame given to you, even if your solution is not complete. We will be interested in seeing how you approached the problem.

## Extra credit

If you're in the mood for showboating, plese feel free to show us what else you can do. E.g. you could automate tests for your solution.
