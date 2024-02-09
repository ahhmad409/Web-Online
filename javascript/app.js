const route = window?.location?.pathname;
const path = route?.substring(1)?.slice(0, -5);
console.log(`Welcome to the ${path ?? "web"} page ...!`);
