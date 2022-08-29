function scuberGreetingForFeet(feets) {
  // Write your code here!
  if (feets <= 400) {
    return "This one is on me!";
  } else if (feets < 2000) {
    return "That will be twenty bucks.";
  } else if (feets < 2500) {
    return "I will gladly take your thirty bucks.";
  }

  return "No can do.";
}

function ternaryCheckCity(city) {
  // Write your code here!
  let newYork = "NYC";
  return city == newYork ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!

  switch (tip) {
    case "generous":
     return "Thank you so much.";

      break;
    case "not as generous":
      return "Thank you.";

      break;

    default:
     return "Bye.";
  }
}
