function validIPAddresses(string) {
  // create an empty list to store the IP address
  let ipAddressFound = [];
  // this check for the length of digit of each part of the IP not be more than 3 characters
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    let currentIpAddress = ["", "", "", ""];
    //slice the first group
    currentIpAddress[0] = string.slice(0, i);
    if (!isValidIp(currentIpAddress[0])) continue;
    //slice the second group
    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIpAddress[1] = string.slice(i, j);
      if (!isValidIp(currentIpAddress[1])) continue;
      //slice the third and fourth group
      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIpAddress[2] = string.slice(j, k);
        currentIpAddress[3] = string.slice(k);
        if (isValidIp(currentIpAddress[2]) && isValidIp(currentIpAddress[3])) {
          ipAddressFound.push(currentIpAddress.join("."));
        }
      }
    }
  }
  return ipAddressFound;
}
function isValidIp(string) {
  //convert string into integer or number
  let stringInt = parseInt(string);
  //255 is the highest IP address available
  if (stringInt > 255) return false;
  //check for leading 0
  return string.length === stringInt.toString().length;
}
