import { Component } from "@angular/core";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://lh3.googleusercontent.com/XPRvGXcCi_H_g466WNoIvQpDEcP4iatFW_WZgSer0QAFV3EhUnakaKPUtKUI3-6BhEIqBWLS9dZh4MDVkwcw6aSHIrGa0BDIEfMxm-lLlHN1Q-Gb4o4h-DwzQvRjA7OLHmId1YaNXlD3UFm8Y0QlFg8i9GzPAVEjYpYGQNFvPLhdHacMgT3Rkjf2Qt4R0CrwINAGh0H3JDjpR_CCKKUuyIcoI5wP6WWILps4YRFsAgek-VSIHbcJkQF0wCDsCqs6NVUAMMVUdp97WXEKIgwqM4s-G_PDY4iRlGNpXo2lstGT6bOP2XfbOsGFrgJpEduO8dXqk3ZIBFsm5A_K6V1iz0dnHSEbBFQYexlT63D3-35jZyBcAwWJL-hvGOdFoLhgiOILbhOWG-mkyPQjvILhpqs7AX5fwfYQJCbbY-62SGmpa2l_HZgsmkZrRYvPwPnBXshr_oHm0Lof3RbiPFfdZY1eesphZ1_02Il-Zptn9HLEJpS5EtbBt6lv3Vl4NWGusbXNHqSpNVr2xdasM_-lywLF_h4hCx9diiUQXDZd4uYLLEPDqi7mCIbykfGjcfe5eXIxb40JIgMGDNL_ZM0Plby0LbDytSHcKHkb5vzpNekZUXn4Ju--zPL0KuQiDiwlHtd5O-qxfNn3k6LkdZKwT36K3C2LglQ=w1121-h841-no"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  ];


  toggleImage():void {
    this.showImage = !this.showImage;
  }
}