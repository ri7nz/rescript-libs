


var abortController = new AbortController();

console.log(abortController.signal);

console.log(abortController.signal.aborted);

function onabort(evt) {
  console.log(evt.isTrusted);
  console.log(evt.timeStamp);
  
}

abortController.signal.onabort = onabort;

abortController.abort();

export {
  abortController ,
  onabort ,
  
}
/* abortController Not a pure module */
