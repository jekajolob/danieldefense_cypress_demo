# Daniel Defense E2E Tests (Cypress)

Automation test suite for the Daniel Defense storefront and admin (Hive) using Cypress 13 with WebKit support and Percy visual testing.

### Tech stack

- **Cypress**: e2e testing framework (v13)
- **WebKit (experimental)**: via `playwright-webkit` for Safari-like runs
- **Percy**: visual snapshots via `@percy/cypress`
- **Page Object Model (POM)**: test helpers in `cypress/support/page_objects`

## Prerequisites

- Node.js 16/18/20 and npm
- macOS/Windows/Linux supported by Cypress
- For WebKit: `playwright-webkit` is already listed in `devDependencies`

## Install

```bash
npm install
```

## Project structure

- `cypress/e2e/`
  - `homepage/`: header/footer/main menu navigation specs (currently excluded from runs; see note below)
  - `regressionTests/`: core user flows (login, account, wishlist, checkout, filters, newsletter, etc.)
- `cypress/support/`
  - `e2e.js`: global support, imports `@percy/cypress`
  - `commands.js`: custom commands (login, admin login, reCAPTCHA helper, etc.)
  - `page_objects/`: page object classes for storefront and admin UI
- `cypress.config.js`: Cypress settings, timeouts, spec patterns, env keys
- `cypress.env.json`: default/local environment values (safe to edit locally)
- `cypress.env-prod.json`: production-like example values (do NOT commit secrets)

## Environment configuration

Tests read values exclusively from `Cypress.env()` (not from `baseUrl` config). Populate these keys:

- **Storefront**: `baseUrl`, `newEmail`, `registeredEmail`, `password`
- **Contact Us**: `firstName`, `lastName`, `streetAddress`, `city`, `zip`, `phoneNumber`, `subject`, `whatsOnYourMind`
- **Admin (Hive)**: `baseAdminUrl`, `adminUserName`, `adminPassword`
- **Payment (test data)**: `nameOnCard`, `creditCardNumber`, `ccMonth`, `ccYear`, `cvv`

You can set them in any of the following ways:

1. Edit `cypress.env.json` (recommended for local)

```json
{
  "baseUrl": "https://stg.example.com/",
  "baseAdminUrl": "https://stgadmin.example.com/hive",
  "registeredEmail": "you+registered@example.com",
  "password": "<your-password>"
  // add the rest as needed
}
```

2. Override via shell environment (CI-friendly)

```bash
CYPRESS_baseUrl="https://stg.example.com/" \
CYPRESS_registeredEmail="you+registered@example.com" \
CYPRESS_password="<your-password>" \
npx cypress run
```

3. Pass inline via `--env`

```bash
npx cypress run \
  --env baseUrl=https://stg.example.com/,registeredEmail=you+registered@example.com,password=<your-password>
```

Security note: Never commit real credentials. Treat `cypress.env-prod.json` as an example template; overwrite via env vars in CI.

## Running tests

- Open interactive runner:

```bash
npx cypress open
```

- Run headless (Chrome/Electron by default):

```bash
npx cypress run
```

- Choose a browser (Chrome, Electron, Firefox, WebKit):

```bash
npx cypress run --browser chrome
npx cypress run --browser electron
npx cypress run --browser firefox
npx cypress run --browser webkit   # Safari-like
```

- Run a specific suite or spec(s):

```bash
# All regression tests
npx cypress run --spec "cypress/e2e/regressionTests/*.spec.js"

# Single spec
npx cypress run --spec "cypress/e2e/regressionTests/userLogin.spec.js"
```

### Important: `homepage` suite exclusion

The config excludes the `homepage` folder by default:

```js
// cypress.config.js
excludeSpecPattern: [
  '**/1-getting-started/*',
  '**/2-advanced-examples/*',
  '**/loginOutlook.spec.js',
  '**/homepage',
],
```

If you need to run those specs, remove the `"**/homepage"` entry (or override `excludeSpecPattern`) in `cypress.config.js`.

## Visual testing with Percy (optional)

Percy commands are available via `@percy/cypress` imported in `cypress/support/e2e.js`.

- Set your Percy token (from Percy project settings):

```bash
export PERCY_TOKEN=<your-percy-token>
```

- Run Cypress through Percy:

```bash
npx percy exec -- npx cypress run
```

- Use snapshots in tests where needed:

```js
cy.percySnapshot('Checkout - Shipping step')
```

## Custom commands

Defined in `cypress/support/commands.js`:

- `cy.openHomePage()`
- `cy.loginToAccount()`
- `cy.loginToAdminPanel()`
- `cy.solveGoogleReCAPTCHA()` (clicks the checkbox inside the reCAPTCHA iframe; may be flaky in some regions)

## Configuration highlights

- `defaultCommandTimeout: 15000`
- `chromeWebSecurity: false` (to allow certain cross-origin flows)
- `experimentalModifyObstructiveThirdPartyCode: true`
- `experimentalWebKitSupport: true` (requires `playwright-webkit` dependency)
- Spec pattern: `cypress/e2e/**/*.{js,jsx,ts,tsx}`

## Useful one-liners

```bash
# Install with a clean lockfile
npm ci

# Debug logs from Cypress
DEBUG=cypress:* npx cypress run

# Point to a different environment on the fly
CYPRESS_baseUrl=https://www.danieldefense.com npx cypress run
```

## Troubleshooting

- **WebKit fails to start**: ensure `npm install` completed successfully. On Linux, you may need Playwright system deps (`npx playwright install-deps webkit`).
- **reCAPTCHA click not working**: increase waits or disable in test environment if possible; `cy.solveGoogleReCAPTCHA()` performs an iframe click but real challenges cannot be solved automatically.
- **Login-related tests fail**: verify `registeredEmail` and `password` are valid and allowed on target environment; clear cookies/storage between runs if needed.
- **Admin panel tests fail**: confirm `baseAdminUrl`, `adminUserName`, and `adminPassword` are correct and that your IP is allowed.

## NPM scripts (optional)

You can add convenience scripts to `package.json` (not required):

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:run:webkit": "cypress run --browser webkit",
    "test": "cypress run"
  }
}
```

## License

ISC (see `package.json`).
