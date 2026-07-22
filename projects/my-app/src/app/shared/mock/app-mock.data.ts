import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { ReviewData } from "./review-mock.data";
import { ProductData } from "./product-mock.data";

export class AppMockData implements InMemoryDbService {
    createDb() {
        const products = ProductData.products;
        const reviews = ReviewData.reviews;
        return { products, reviews };
    }
}