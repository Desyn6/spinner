const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let delay = 0;
let repeats = 6;

for (let i = 0; i < repeats; i++) {
  spinner.forEach(x => {
    setTimeout(() => process.stdout.write(x), delay);
    delay += 100;
  });
}

setTimeout(() => console.log(), delay);