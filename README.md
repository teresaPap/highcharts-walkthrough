# highcharts-walkthrough

This project demonstrates some key concepts of the [Highcharts Library](https://www.highcharts.com/) paired with VueJS, such as:

- Documentation walkthrough
- Basic setup
- Module setup
- Customization
- Responsiveness
- Theming
- Pitfalls

You can find more information in the [demo walkthrough]('/../demo-walkthrough.md).

---

## Requirements

- NodeJS v16
- npm v8

## Installation

```
npm install
```

## Run locally - experiment with the demo

```
npm run serve
```

To browse between the different demo steps (1 to 6), edit the import statement in the `App.vue` component:

```
import { Demo<demoStep> as Demo } from "./components";
```
