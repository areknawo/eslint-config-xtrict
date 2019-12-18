# eslint-config-xtrict

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

However, as the config uses some external plugins, you need to install them as well. The easiest way to do this is (if you're using `npm` v5+) through `npx` and [`install-peerdeps`](https://www.npmjs.com/package/install-peerdeps)

```bash
npx install-peerdeps --dev eslint-config-xtrict
```

Otherwise, you can always just copy-paste this snippet of code (and use Yarn if you want):

```bash
 npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prettier eslint-plugin-sonarjs eslint-plugin-unicorn
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
		project: "./tsconfig.json",
		ecmaVersion: 2019,
		sourceType: "module"
	}
};
```

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
