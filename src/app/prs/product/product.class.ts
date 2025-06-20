import { Vendor } from "../vendor/vendor.class";

export class Product {
    constructor(
        public id: number = 0,
        public partNbr: string = '',
        public name: string = '',
        public price: number = 0,
        public unit: string = 'EACH',
        public photopath: string | null = null,
        public vendorId: number = 0,
        public vendor: Vendor | null = null
    ) {}    
}
