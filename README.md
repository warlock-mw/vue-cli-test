# vue-cli で Counter とか SPA を作ってみる
# vue-cli インストール
```
npm install -g @vue/cli
```

# プロジェクト作成
```
vue create vue-cli-test
```

```
? Target directory ~/data/html/vue-cli-test already exists. Pick an act
ion: (Use arrow keys)
❯ Overwrite
  Merge
  Cancel
```
- 既に clone したプロジェクトフォルダがある場合は、Merge
- 新規の場合は、Overwrite

```
? Please pick a preset: (Use arrow keys)
❯ default (babel, eslint)
  Manually select features
```
- babel, eslint のみの場合は、default
- Jest 他のライブラリを入れる場合は、Manually でライブラリを選択
- 今回は Manually を選択

```
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to t
oggle all, <i> to invert selection)
❯◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```
- Babel, Router, Vuex, CSS Pre-processors Linter / Formatter, E2E Testing をスペースキーで選択

```
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-proce
ssors, Linter, E2E
? Use history mode for router? (Requires proper server setup for index fallback
in production) (Y/n)
```
- Y を押して、Enter を押す

```
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default): (Use arrow keys)
❯ Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
```
- Sass/SCSS (with dart-sass) を使ってみる(アップデートでよく死ぬ node-sass・・・それを解決しているらしいw)

```
? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
```
- 一旦、ESLint with error prevention only これで

```
? Pick a linter / formatter config: Basic
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
```
- Lint on save、これでいいか

```
? Pick an E2E testing solution: (Use arrow keys)
❯ Cypress (Chrome only)
  Nightwatch (WebDriver-based)
```
- Cypress だと、実ブラウザでテストできるから良いらしい
- Nightwatch は、ヘッドレスブラウザ

```
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json
```
- config ファイルで頼む！

```
? Save this as a preset for future projects? (y/N)
```
- y 押して、Enter

```
? Save preset as:
```
- Enter でいいか

- よしなにインストールが始まる

```
 $ cd vue-cli-test
 $ npm run serve
```
- ブラウザから http://localhost:8080/ にアクセスして、動作確認

## import する際の path alias 設定
- プロジェクト直下に vue.config.js を作成
```
const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            '@': path.join(__dirname, '/src')
          }
        }
    }
}
```