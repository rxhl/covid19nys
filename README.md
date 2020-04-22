# covid19nys

![npm](https://img.shields.io/npm/v/covid19nys)

CLI utility to track COVID-19 cases in New York state.

## Install

```
npm i -g covid19nys
```

The above command will also download the latest version of Chromium as the package uses puppeteer.

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

Albany: 8
```

## Development

Make sure you have node > 9.x.x installed.

```
git clone https://github.com/rxhl/covid19nys.git && cd covid19nys
npm ci
npm start
```

## Resources

- [BNO News](https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases/)
- [NYS Department of Health](https://on.ny.gov/33yu0cR)
