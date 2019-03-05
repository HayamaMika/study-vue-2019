# yarn-boiler-pug-babel-sass

- yarn-boiler-pug-babel-sassリポジトリ


# package

## package installed

- [package.jsonを参照](package.json)


# config

## install

### clone

    git clone https://github.com/gurunavi-creators/gnavi-yarn-scripts-boiler-pug.git

### change directory

    cd gnavi-yarn-scripts-boiler-pug

### install

    yarn

### build

    yarn build

## watch command

    yarn watch

## sprite command

    yarn sprite

## clean dist/、tmp/ command

    yarn clean


# ルートディレクトリ構成

    bin/ : ビルド・デプロイシェル
    conf. : 設定ファイル
    dist/ : 出力ディレクトリ
    src/ : 開発ディレクトリ
    tmp/ : 中間生成物一時保管ディレクトリ
    .editorconfig
    .gitignore
    package.json
    README.md


# 開発ディレクトリ構成

編集対象は src/ 以下のみ

    src/
      └ pug/
        └ data/ : data
        └ include/ : parts
        └ layout/ : layout
        └ page/ : page
      └ img/ : 画像
      └ sprite/ : スプライト用画像
      └ js/
        └ common.js
        └ _module.js
      └ scss/
        └ style.scss
        └ _module.scss


# CSS開発方針

## セレクター命名方針

- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)


# 補足

vueのインストール
npm i -D vue
npm i -D vue-loader
npm i -D vue-template-compiler
