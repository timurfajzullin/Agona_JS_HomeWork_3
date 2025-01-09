// Company.js
export default class Company {
    constructor(id, name, created, country) {
        this.id = id; // Уникальный идентификатор компании
        this.name = name; // Название компании
        this.created = created; // Год основания компании
        this.country = country; // Страна компании
    }
}
