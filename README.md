# Typescript + Next.js + Bulma(Sass)

※パッケージ管理はyarn
## ローカル環境の立ち上げ

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CLI

hygenで管理 `/.hygen/` 配下で設定を定義

```bash
yarn new:compornet
```

- pageの追加
    - `yarn new:page`
- componentの追加
    - `yarn new:compornet`

## 概要

### デザインパターン

atomicデザインを採用。
但し、細かすぎる粒度でのパーツ化は返って管理やメンテナンスの負担になるため、atomレベルは使用しないものとする

### ディレクトリ構成

```
src/
  ├ assets/
  │   ├ images
  │   ︙
  │   └ foo
  ├ constants/
  │   ├ Common.tsx
  │   ︙
  │   └ Foo.tsx
  ├ config/
  ├ containers/
  ├ core/ 
  │  ├ adapters/
  │  ├ domains/
  │  │  ├ models/
  │  │  └ validators/
  │  ├ usecases/
  │  └ view/
  │     └ models/
  ├ components/
  │   ├ layouts /*各画面の大枠*/
  │   │   ├ DefaultLayout/
  │   │   │   ├ DefaultLayout.tsx
  │   │   │   └ style.module.css
  │   │   ︙
  │   │   └ MainLayout/
  │   │       ├ MainLayout.tsx
  │   │       └ style.module.css
  │   ├ templates /*各画面の中身（出し分け）*/
  │   │   ├ auth/
  │   │   │   ├ Login
  │   │   │   │   ├ Login.tsx
  │   │   │   │   └ style.module.css
  │   │   │   └ Logout
  │   │   │       ├ Logout.tsx
  │   │   │       └ style.module.css
  │   │   ︙
  │   │   └ Foo/
  │   │       ├ ︙
  │   │       └ Hoge
  │   │           ├ Hoge.tsx
  │   │           └ style.module.css
  │   ├ organisms /*各画面のパーツ*/
  │   │   ├ common/
  │   │   │   ├ ︙
  │   │   │   ├ Header/
  │   │   │   │   ├ Header.tsx
  │   │   │   │   └ style.module.css
  │   │   │   └ Footer/
  │   │   │       ├ Footer.tsx
  │   │   │       └ style.module.css
  │   │   ├ Assessment/
  │   │   │   ├ List/
  │   │   │   │   ├ List.tsx
  │   │   │   │   └ style.module.css
  │   │   │   ├ Info/
  │   │   │   │   ├ Info.tsx
  │   │   │   │   └ style.module.css
  │   │   │   ︙
  │   │   │   └ Search/
  │   │   │       ├ Search.tsx
  │   │   │       └ style.module.css
  │   │   ︙
  │   │   └ Foo/
  │   │       ├ style.module.css
  │   │       └ Foo.tsx
  │   └ molecules /*各画面の詳細パーツ*/
  │       ├ SerchForm
  |       │   ├ SerchForm.tsx
  │       │   └ style.module.css
  │       ├ ImageCarousel
  │       │   ├ ImageCarousel.tsx
  │       │   └ style.module.css
  │       ︙
  │       └ Modal
  │           ├ Modal.tsx
  │           └ style.module.css
  ├ pages/ /*各画面の大枠*/
  │   ├ index.tsx
  │   ├ _app.tsx
  │   ├ _document.tsx
  │   ├ Auth
  │   │   ├ Auth.tsx
  │   │   └ style.module.css
  │   ├ Asessment
  │   │   ├ [item].tsx
  │   │   └ style.module.css
  │   ︙
  │   └ Foo
  │       ├ Foo.tsx
  │       └ style.module.css
  ├ hooks/
  │   ├ useTab.tsx
  │   └ useToggle.tsx
  ├ public/
  ├ states/
  ├ types/
  ├ utilities/
  ├ .hygen/
  ├ next.config.js
  └ package.json
```
