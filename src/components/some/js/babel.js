async function start() {
    await Promise.resolve();
}

start().then(console.log("async is working!"));