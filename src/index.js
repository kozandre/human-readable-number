module.exports = function toReadable (number) {
  let str = '';
  let numStr = String(number);
  const numLength = numStr.length;
  const naturalReadable = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teensReadable = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decimalReadable = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'nineteen'];

  if (numLength === 1) {
    str += naturalReadable[number];
    return str;
  } else if (numLength === 2) {
    if (numStr.startsWith('1')) {
      str += teensReadable[Number(numStr.slice(-1))];
      return str;
    } else if (numStr.endsWith('0')) {
      str += decimalReadable[Number(numStr[0]) - 2];
      return str;
    } else {
      str += decimalReadable[Number(numStr[0]) - 2];
      str += ' ';
      str += naturalReadable[Number(numStr[1])];
      return str;
    }
  } else if (numLength === 3) {
    if (numStr.endsWith('00')) {
      str += naturalReadable[Number(numStr[0])];
      str += ' hundred';
      return str;
    } else {
      str += naturalReadable[Number(numStr[0])];
      str += ' hundred ';
      numStr = numStr.slice(1);
      if (numStr.startsWith('0')) {
        str += naturalReadable[Number(numStr.slice(-1))];
        return str;
      } else if (numStr.startsWith('1')) {
        str += teensReadable[Number(numStr.slice(-1))];
        return str;
      } else if (numStr.endsWith('0')) {
        str += decimalReadable[Number(numStr[0]) - 2];
        return str;
      } else {
        str += decimalReadable[Number(numStr[0]) - 2];
        str += ' ';
        str += naturalReadable[Number(numStr[1])];
        return str;
      }
    }
  }
}

