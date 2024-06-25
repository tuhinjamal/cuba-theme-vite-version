// shared-worker.js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.addEventListener("message", (event) => {
    const { data } = event;
    // Perform some work and send a response back to the main thread
    port.postMessage(`SharedWorker received: ${data}`);
  });
});
