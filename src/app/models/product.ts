export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  qty: number;
  stocks: number;

  constructor(id, name, description = '', price = 0, qty = 0, imageUrl = 'https://meatmanagement.com/wp-content/uploads/2019/04/IST_11071_11793-1024x683.jpg', stocks = 0){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.qty = qty
    this.imageUrl = imageUrl
    this.stocks = stocks
  }
}
