# deno-react-example

Render an React component on the server and add interactivity via hydration.

Uses [deno@emit]() to create the client bundle.

If you want any help shoot me a message.

## Getting started

Run

```bash
deno run -A --watch main.tsx
```

Edit `app.tsx` however you like. Add styles if you're feeling sexy.

## Walkthrough

Let me save you some time if you are confused.

### main.tsx

this is the [Hono]() server that handles two routes:

1. "/" => the (interactivity-less skeleton) app.
2. "$CLIENT_BUNDLE_NAME" => the javascript code.

without 1 the browser is blank, without 2 clicking the button has no effect.

browsers do __not__ understand Typescript. We have to use `bundle` turn our nice, small react app into many more lines of good-ol javascript.

Now if you click the counter the number goes up.

### client.tsx

this is the entrypoint into the client bundle. the [react docs](https://react.dev/reference/react-dom/server/renderToReadableStream#rendering-a-react-tree-as-html-to-a-readable-web-stream) have some fun details.

confusingly, they do not mention bundling the `<App />`. luckily we've already crossed that bridge.

### app.tsx

Good ol' React App. Change it at your leisure.
