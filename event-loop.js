// Slides https://4tomik.github.io/event-loop
// Video https://www.youtube.com/watch?v=dX2lThXc0p4

console.log("Hello");

setTimeout(() => console.log("Time"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("World");
