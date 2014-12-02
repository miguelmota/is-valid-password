# is-valid-password

Validate password

## Requirements

- 8-32 characters
- at least one lowercase letter
- at least one capital letter
- at least 1 number
- optional special character [!@#$%^&*]

# Install

```bash
npm install is-valid-password
```

# Usage

```javascript
var isValidPassword = require('is-valid-password');

isValidPassword('dfE3kds#$%') // true
isValidPassword('345dsasdff') // false
isValidPassword('34543455') // false
isValidPassword('ahjklDDf') // false
isValidPassword('d#3dA@') // false
isValidPassword('#$$%%$%$$') // false
```

# License

MIT
