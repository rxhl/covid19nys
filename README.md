# covid19nys

![npm](https://img.shields.io/npm/v/covid19nys)
![covid19nys CI](https://github.com/rxhl/covid19nys/workflows/covid19nys%20CI/badge.svg)

CLI utility to track COVID-19 cases in New York state.

## Install

```
npm i -g covid19nys
```

## Usage

```
covid19nys # or npx covid19nys

Select a county (Ctrl + C to exit)
❯ Albany
  Broome
  Delaware
  Dutchess
  Erie
  Greene
  Herkimer
(Move up and down to reveal more choices)

+===========================+
  Cases as of 5/2/2020

  Albany: 1238
+===========================+
```

## Development

Make sure you have node > 9.x.x installed.

```
git clone https://github.com/rxhl/covid19nys.git && cd covid19nys
npm install
npm start
```

## Resources

- [BNO News](https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases/)
- [NYS Department of Health](https://on.ny.gov/33yu0cR)
