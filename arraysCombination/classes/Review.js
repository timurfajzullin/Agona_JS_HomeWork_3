// Review.js
export default class Review {
    constructor(id, userId, text) {
        this.id = id; // Уникальный идентификатор отзыва
        this.userId = userId; // Идентификатор пользователя, оставившего отзыв
        this.text = text; // Текст отзыва
    }
}
