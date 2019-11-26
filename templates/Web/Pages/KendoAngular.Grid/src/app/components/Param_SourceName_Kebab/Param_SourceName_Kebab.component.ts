import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { products } from '../../common/products';
import { Product } from '../../common/product-model';

@Component({
    selector: 'app-Param_SourceName_Kebab.component',
    templateUrl: './Param_SourceName_Kebab.component.html'
})
export class Param_SourceName_PascalComponent {
    public gridData: Product[] = products;
    public pageSize = 10;
    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    public createFormGroup = (args: any): FormGroup => {
        const item = args.isNew ? new Product() : args.dataItem;

        this.formGroup = this.formBuilder.group({
            ProductID: item.ProductID,
            ProductName: [item.ProductName, Validators.required],
            UnitPrice: item.UnitPrice,
            UnitsInStock: [item.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            Discontinued: item.Discontinued
        });

        return this.formGroup;
    }
}
