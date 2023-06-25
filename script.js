function encrypt() {
  var plaintext = document.getElementById('plaintext').value;
  var key = document.getElementById('key').value;

  var ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();

  document.getElementById('ciphertext').value = ciphertext;
}

function decrypt() {
  var ciphertext = document.getElementById('deciphertext').value;
  var key = document.getElementById('decryption-key').value;

  var bytes = CryptoJS.AES.decrypt(ciphertext, key);
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);

  document.getElementById('deciphertext-result').value = plaintext;
}

function copyText(elementId) {
  var element = document.getElementById(elementId);
  element.select();
  element.setSelectionRange(0, 99999);

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(element.value)
  } else {
    // Eski tarayıcılar için yedek kopyalama işlemi
    var textarea = document.createElement('textarea');
    textarea.value = element.value;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.body.removeChild(textarea);
  }
}
var myButton = document.getElementById('myButton');

myButton.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#0056b3';
});

myButton.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#007bff';
});

