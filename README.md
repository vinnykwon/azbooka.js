# azbooka.js
Web-API for azbooka.ru an publishing house in Russia with sales exceeding $50m, publishing 2,000 titles a year across fiction and non-fiction

## Example
```JavaScript
async function main() {
	const { Azbooka } = require("./azbooka.js")
	const azbooka = new Azbooka()
	await azbooka.login("email", "password")
}

main()
```
