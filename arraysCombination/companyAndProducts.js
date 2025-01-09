/**
 * Заимпортите функции из файла api.js,
 * Получите данные по компаниям, товарам, пользователям и отзывам
 * Создайте классы для товаров, компаний, отзывов и пользователей (в папке classes)
 * Создайте массивы экземпляров объектов
 * Соберите 4 массива в один массив данных так:
 * Каждая компания должна содержать поле с массивом всех производимых продуктов.
 * Каждый продукт должен содждержать полную иформацию о себе, включая ревью.
 * Каджое ревью должно содержать информацию о полдьхователе, котороый это ревью оставил.
 *  */


import {getProducts, getUsers, getCompanies, getReviews} from "./api.js";
import User from "./classes/User.js";
import Company from "./classes/Company.js";
import Product from "./classes/Product.js";
import Review from "./classes/Review.js";
let users = await getUsers();
let companies = await getCompanies();
let products = await getProducts();
let reviews = await getReviews();

let usersData = users.map(user => new User(user.id, user.name));

let companiesData = companies.map(company => new Company(company.id, company.name, company.created, company.country));

let productsData = products.map(product => new Product(product.id, product.companyId, product.reviewIds ,product.name, product.description));

let reviewsData = reviews.map(review => new Review(review.id, review.userId, review.text));

const result = [];

companiesData.forEach((company) => {
    let companyProducts = [];


    productsData.forEach((product) => {
        if (product.companyId !== company.id) return;

        let productReviews = [];
        reviewsData.forEach((review) => {
            if (!product.reviewIds.includes(review.id)) return;
            let reviewUser = users.find((user) => user.id === review.userId);
            productReviews.push({
                user: reviewUser.name,
                userId: review.userId,
                text: review.text
            });
        })
        companyProducts.push({
            id: product.id,
            name: product.name,
            description: product.description,
            reviews: productReviews
        });
    })

    result.push({ id: company.id, name: company.name, created: company.created, products: companyProducts });
})

console.log(JSON.stringify(result));
