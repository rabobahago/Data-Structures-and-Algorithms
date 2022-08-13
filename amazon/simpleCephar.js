const generateCipher = (encrypted, k) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = "";

  for (let i = 0; i < encrypted.length; i++) {
    let currentPosition = alphabet.indexOf(encrypted[i]);
    let cipheredPosition = currentPosition - k;

    if (cipheredPosition > alphabet.length) {
      cipheredPosition -= alphabet.length;
    } else if (cipheredPosition < 0) {
      cipheredPosition += alphabet.length;
    }

    res += alphabet[cipheredPosition];
  }
  return res;
};
