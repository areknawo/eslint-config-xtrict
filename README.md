# eslint-config-xtrict

[![](https://img.shields.io/twitter/follow/areknawo?label=Follow&style=for-the-badge)](https://twitter.com/areknawo) [![](https://img.shields.io/twitter/url?style=for-the-badge&url=https%3A%2F%2Fgithub.com%2Fareknawo%2Feslint-config-xtrict)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fareknawo%2Feslint-config-xtrict&via=areknawo&text=Check%20out%20this%20ESLInt%20Config%21)

Extremely strict ESLint config for demanding projects 🔥

## Reasons

ESLint is a great linter. It's reliable, high-performance, but also very _configurable_. And that's why some of its users might struggle a little bit. Which configuration is best for my project? How strict my config should be? Are there any rules that I could guide me?

Because I've stumbled upon these questions myself a while ago, I decided to somehow answer them on my own. I didn't know how strict my config should be and how should it look like. I searched through the NPM to find some reference point, but with no success.

That's why (and for some other reasons you can read about in [my blog post](https://areknawo.com/creating-the-perfect-eslint-config/)), I went on a quest to go through the whole list of official ESLint rules and the most popular plugins to create _my own ESLint config_ from scratch. This config is the result of my work, and I hope you'll enjoy it!

## Installation

This config is available on NPM, so the installation process is really straight-forward.

```bash
npm install --save-dev eslint-config-xtrict
```

Or if you're using [Yarn](https://yarnpkg.com)

```bash
yarn add --dev eslint-config-xtrict
```

## Usage

The config is very much tailored towards the use of TypeScript (as its recommended for anyone wanting this level of strictness). The most basic use-case is just `tsconfig.json` and ESLint config file (example for `.eslintrc.js`).

```json
{
	"extends": "./node_modules/eslint-config-xtrict/tsconfig.json"
}
```

```javascript
module.exports = {
	extends: ["xtrict"],
	parserOptions: {
		tsconfigRootDir: __dirname
	}
};
```

The config is designed to work with ESLint v7, but if you're using v6, it's important to include the special patching script at top of your config file, which allows ESLint v6 to properly resolve plugins used by the config (see [this issue for more details](https://github.com/eslint/eslint/issues/3458#issuecomment-516716165)).

```javascript
require("eslint-config-xtrict/patch-eslint6");

module.exports = {
	// ...
};
```

Apart from that if you're using TypeScript, you'll also have to supply `tsconfigRootDir` option, equal to global variable `__dirname`.

If you use Prettier (also recommended), there's a reference config included, if you want.

If you don't use TypeScript or want to ease the rules, you can extend only upon certain groups of rules. For this, you need to access the `/config` folder and all the sub-configs within in.

```javascript
module.exports = {
	extends: ["xtrict/configs/style"]
	// ...
};
```

There are as many as 8 different sub-configs, so feel free to use them however you want!

## Additional info

So, again, as the config is really strict, you'll most likely end up disabling some of the rules, to better suit your needs. It's meant to serve as a better foundation for your edits, rather than `eslint:all`.
