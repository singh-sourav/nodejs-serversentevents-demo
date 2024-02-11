const app = require("express")();

app.get("/", (_, res) => res.end("hello"));

app.get("/stream", (_, res) => {
  res.setHeader("Content-Type", "text/event-stream"); // Required response header that server should send with response, for client to understand it's a event stream 
  send(res, 10);
});

// Sending an event stream from the source is a matter of constructing a plaintext response, 
// served with a text/event-stream Content-Type, that follows the SSE format. 
// In its basic form, the response should contain a data: line, followed by your message, followed by two "\n" characters to end the stream:
// Ref : https://web.dev/articles/eventsource-basics

function send(res, count) {
  res.write(`data: ` + `hello from server-----${count}\n\n`);
  if (count) setTimeout(() => send(res, count - 1), 1000);
  else res.end();
}

app.listen(8080);
