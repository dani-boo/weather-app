<!--- to preview in VSCode, use ⇧⌘V (shift + command + V) --->

**A mini weather app created with [Create React App](https://github.com/facebook/create-react-app), [Typescript](https://www.typescriptlang.org/), [React Hooks](https://reactjs.org/docs/hooks-overview.html), and the [Weatherbit rapidAPI](https://rapidapi.com/weatherbit/api/weather/endpoints).**

![weather](public/weather.jpg)

## Getting started

🌦️ Clone repo in teminal: `git clone https://github.com/dani-boo/weather-app.git`  
🌦️ Change directory with `cd weather-app`  
🌦️ Run `yarn` to install dependencies

## NB: You need an API key from weatherbit - [subscribe here.](https://rapidapi.com/weatherbit/api/weather/endpoints)

Once you've generated that, you'll need to create a `.env` folder in the root of the project, and add your API key like so:
`REACT_APP_WEATHER_API_KEY=${insert-your-shiny-new-key-here}`

**`yarn start`**

runs the "app" in dev mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**`yarn test`**

launches the test runner in interactive watch mode.<br />
Unfortunately there's a little bug with jest and create-react-app re. coverage: you'll need to run `yarn test --coverage --watchAll=false` to see 100% code coverage in the terminal.<br/>
`yarn test --coverage` will still generate a coverage report in the project's root directory: `coverage/lcov-report`
(*reveal in finder to open coverage index.html files*)

_____________________

`THE TASK (in a nutshell):`  
`Build a 2-page app that receives data from the weatherbit API. Page 1 shows current weather for one of 5 major locations. Page 2 shows the 16 day forecast for those same cities, and also has the option to filter data according to min and max temperatures.`  

**Requirements:**<br />
✔️ Use React and TypeScript<br />
✔️ Focus on architecture, code quality, security and test coverage<br />
✔️ Responsive<br />

**Considerations:**<br />
This was a deep dive into React functional components, hooks, and TypeScript. Challenging and thoroughly enjoyable for someone who has to use React JS class components with MobX at work daily.

**Room for improvement (stretch goals due to time constraints):**<br />
⭐ Refactor by moving all helper functions into utils<br />
⭐ Remove all `any` types (I think there are 2) and create types files, not just floating interface modules<br />
⭐ Capture performance metrics and improve<br />
⭐ Make provision for all "unhappy" paths<br />
⭐ Design and implement proper UI<br />
