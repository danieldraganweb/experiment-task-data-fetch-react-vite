# Tech interview
Build a small application that retrieves jokes from a public API and renders
a list with the first 5 jokes. At the bottom of the list there should be
a button that allows to add custom jokes written by the user that will be added
at the bottom of the list. Please use the `./api/useRequest` hook to fetch the data.

If the request fails it should display a message in the `App` component.

Please refactor the `App` and `./api/*` files to Typescript. The only requirement
is to type `useRequest` with a generic so it can be used as `useRequest<ResponseType>()`
so `data` will be of the type `ResponseType`.

```ts
type ResponseType = Array<{
  id: number
  setup: string
  punchline: string
}>
```

You are also expected to attempt to complete the `./src/App.test.jsx` test suite.

## API endpoint
https://api.sampleapis.com/jokes/goodJokes

## Mockups
Two mockups files can be found in the `./public/` folder

## Styling
Only the structure and position of elements is relevant for this test but feel
free to be creative if you want. You can choose to use vanilla HTML or the
`@mui/material` library already installed.

If you decided to use MUI you can use styled components. If not, in the
`./styles/` folder you will find a `css` and a `scss` file, choose the
one you are more comfortable with.

## How to run
Run `npm install` to install all dependencies

Run `npm run dev` to start the application.

Run `npm run test` to run the test suite.
