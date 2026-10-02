# React Redux Counter App

A simple React + TypeScript app using manual Redux state management.

## Features

- Redux store setup
- Actions for increment, decrement, and reset
- Reducer and combined root reducer
- React component connected with `useSelector` and `useDispatch`
- Redux logger middleware

## Tech Stack

- React
- TypeScript
- Vite
- Redux
- React-Redux
- Redux-Logger

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:5173/
```

## Build for production

```bash
npm run build
```

## Project structure

```bash
src/
  components/
    Counter.tsx
  store/
    actions/
      counterActions.ts
    reducers/
      counterReducer.ts
      index.ts
    store.ts
  App.tsx
  main.tsx
```

This app demonstrates a basic counter using global Redux state without Redux Toolkit.
