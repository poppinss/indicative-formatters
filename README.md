<div align="center">
  <img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1562577951/Group_2_2x_ohgvej.png" width="600px">
</div>

<br />

# Indicative Formatters
> Collection of error formatters used by Indicative

[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![](https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript)

Indicative has first class support for formatting error messages with the help of an Error formatter. This repo contains a handful of them.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Usage](#usage)
- [API Docs](#api-docs)
- [Maintainers](#maintainers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage
Install the package from npm registry as follows:

```sh
npm i indicative-formatters

# yarn
yarn add indicative-formatters
```

and then use it as follows:

```ts
import { VanillaFormatter } from 'indicative-formatters'

const formatter = new VanillaFormatter()
formatter.addError('Required validation failed', 'username', { name: 'required', args: [] })

// Get all errors
formatter.toJSON()
```

## API Docs
Following are the autogenerated files via Typedoc

* [API](docs/README.md)

## Maintainers
[Harminder virk](https://github.com/thetutlage)

[circleci-image]: https://img.shields.io/circleci/project/github/poppinss/indicative-formatters/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/poppinss/indicative-formatters "circleci"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/indicative-formatters.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/indicative-formatters "npm"

[license-image]: https://img.shields.io/npm/l/indicative-formatters?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"
