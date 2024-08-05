
# deno-react-example 🚀

Render a React component on the server and add interactivity via hydration.

Dependencies:

- [React](https://react.dev/versions) to define the UI
- [deno@emit](https://github.com/denoland/deno_emit/blob/main/js/README.md) to create the client bundle.
- [Hono](https://hono.dev/) - for syntax sugies for routes

If you want any help shoot me a message. 📩

## Getting started

Run

```bash
deno run -A --watch main.tsx
```

Edit `app.tsx` however you like. Add styles if you're feeling sexy 😎

## Walkthrough

Let me save you some time if you are confused. ⏳

### main.tsx

This is the [Hono](https://hono.dev/) server that handles two routes:

1. `"/"` => the (interactivity-less skeleton) app.
2. `"$CLIENT_BUNDLE_NAME"` => the JavaScript code.

Without 1 the browser is blank, without 2 clicking the button has no effect. ❌

Browsers do __not__ understand Typescript. We have to use `bundle` to turn our nice, small React app into many more lines of good-ol JavaScript. 🛠️

Now if you click the counter the number goes up. 🔢

### client.tsx

This is the entrypoint into the client bundle. The [React docs](https://react.dev/reference/react-dom/server/renderToReadableStream#rendering-a-react-tree-as-html-to-a-readable-web-stream) have some fun details. 📚

Confusingly, they do not mention bundling the `<App />`. Luckily we've already crossed that bridge. 🌉

### app.tsx

Good ol' React App. Change it at your leisure. ✨
