(function(){

  function isValidPassword(v) {
    if (!v) return false;
    var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,32}$/g;
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidPassword;
  } else {
    window.isValidPassword = isValidPassword;
  }

})();
