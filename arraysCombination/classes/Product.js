// Product.js
export default class Product {
    constructor(id, companyId, name, description) {
        this.id = id; // Уникальный идентификатор продукта
        this.companyId = companyId; // Идентификатор компании-производителя
        this.reviewIds = [];
        this.name = name; // Название продукта
        this.description = description; // Описание продукта
    }
}
