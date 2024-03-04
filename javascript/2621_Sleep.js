
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, millis);
      });
}

sleep(3000).then(value=>console.log(value));