console.log(upperToLower('happy SPTenior Coding Learning JS'));

function upperToLower(s) {
  // return s.replace(/[A-Z]/g, foundChar => foundChar.toLowerCase());
  return s.replace(
    /([A-Z]*)([a-z]*)/g,
    (foundStr, upper, lower) => `${upper.toLowerCase()}${lower.toUpperCase()}`
  );
}
