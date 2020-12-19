export class Product {
  prodid_fld: number;
  name_fld: string;
  price_fld: number;
  countInStock_fld: number;
  image_fld: string;
  brand_fld: string;
  category_fld: string;
  description_fld: string;
  qty_fld: number;


  constructor(prodid_fld, name_fld, price_fld = 0, countInStock_fld = 0, image_fld = '', brand_fld = '', category_fld= '', description_fld = '',qty_fld=1){
    this.prodid_fld = prodid_fld;
    this.name_fld = name_fld;
    this.price_fld = price_fld;
    this.countInStock_fld = countInStock_fld;
    this.image_fld = image_fld;
    this.brand_fld = brand_fld;
    this.category_fld = category_fld;
    this.description_fld = description_fld;
    this.qty_fld = qty_fld;

  }
}
