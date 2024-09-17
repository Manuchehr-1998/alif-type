let isLoggedIn = true;
let role = "user";

function canAccessAdminSection(isLoggedIn, role) {
  if (isLoggedIn && role === "admin") {
    return true;
  } else {
    return false;
  }
}

function canAccessUserSection(isLoggedIn, role) {
  if (isLoggedIn) {
    if (role === "admin" || role === "user") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function canAccessPublicResource(isLoggedIn) {
  return true;
}

console.log("Admin Section Access:", canAccessAdminSection(isLoggedIn, role));
console.log("User Section Access:", canAccessUserSection(isLoggedIn, role));
console.log("Public Resource Access:", canAccessPublicResource(isLoggedIn));

console.log(canAccessPublicResource(true));
console.log(canAccessPublicResource(false));

console.log(canAccessUserSection(true, "admin"));
console.log(canAccessUserSection(true, "user"));
console.log(canAccessUserSection(false, "admin"));
console.log(canAccessUserSection(true, "guest"));

console.log(canAccessAdminSection(true, "admin"));
console.log(canAccessAdminSection(false, "admin"));
console.log(canAccessAdminSection(true, "user"));

// агар мо if else ва boolean ро тарзи кор куниашонро донем ва истифода бурда тавонем то ме метавонем шартхои худро гузорем ва донем ки чихел истифода барем
