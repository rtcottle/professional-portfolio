export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkName(input) {
  const name = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  if (input.match(name)) {
    return true;
  }
  return false;
}

export function checkMessage(input) {
  const message = /(.|\s)*\S(.|\s)*/;
  if (input.match(message)) {
    return true;
  }
  return false;
}
