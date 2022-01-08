# Nextjs startup!!

## Installing nextjs
```sh
npx create-next-app 
```

## Installing bootstrap and sass
```sh
npm install --save bootstrap react-bootstrap node-sass@6
```

Then change `global.css` to `global.scss` and add the following line:
```scss
@import '/node_modules/bootstrap/scss/bootstrap.scss';
```
Dont forget to fix the import in `_app.js`!

## Installing proptypes
```sh
npm i prop-types
```

# Coding part!!
## Setting up perpage layout
[Nextjs documentation](https://nextjs.org/docs/basic-features/layouts)

Update `pages/_app.js` file to include this:
```jsx
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
```
Now you can add your prefered layout to each page by adding a `.getLayout` property to the component:
```jsx
const Component = () => {....}

Component.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

```
