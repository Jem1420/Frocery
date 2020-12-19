import { Product } from './product';

export class Cart {
    id: number;
    prodid_fld: number;
    name_fld: string;
    price_fld: number;
    countInStock_fld: number;
    image_fld: string;
    description_fld: string;
    qty_fld: number;
    address: string;
    city: string;
    postal: string;
    country: string;
    paymentSelect: string;

    constructor(id: number, product: Product, address: string, city: string, postal: string, country: string, paymentSelect: string){
      this.id = id;
      this.prodid_fld = product.prodid_fld;
      this.name_fld = product.name_fld;
      this.price_fld = product.price_fld;
      this.qty_fld = product.qty_fld;
      this.image_fld = product.image_fld;
      this.description_fld = product.description_fld;
      this.address = address;
      this.city = city;
      this.postal = postal;
      this.country = country;
      this.paymentSelect = paymentSelect;
    }

}
