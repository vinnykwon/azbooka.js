class Azbooka {
	constructor() {
		this.api = "https://api.azbooka.ru/api/v1"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-N9860 Build/PQ3A.190705.08211809; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.6367.82 Mobile Safari/537.36"
		}
	}

	async register(email, password, firstName, lastName) {
		const response = await fetch(
			`${this.api}/account/register`, {
				method: "POST",
				body: new URLSearchParams(`email=${email}&password=${password}&lastName=${lastName}&name=${firstName}&agreement=true`),
				headers: this.headers
			})
		return response.json()
	}


	async login(email, password) {
		const response = await fetch(
			`${this.api}/account/auth`, {
				method: "POST",
				body: new URLSearchParams(`email=${email}&password=${password}`),
				headers: this.headers
			})
		this.headers["cookie"] = await response.headers.get("set-cookie")
		return response.json()
	}

	async getAccountInfo() {
		const response = await fetch(
			`${this.api}/account/info`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCatalogSections() {
		const response = await fetch(
			`${this.api}/catalog/sections`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCatalog(sectionCode, page = 1, size = 10) {
		const response = await fetch(
			`${this.api}/catalog/section?code=${sectionCode}&page=${page}&size=${size}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBook(bookCode) {
		const response = await fetch(
			`${this.api}/catalog/book/?code=${bookCode}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Azbooka}
