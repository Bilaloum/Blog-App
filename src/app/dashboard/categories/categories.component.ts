import { Component,Input,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { pipe } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories! : Array<any>;
  categoryInput !: string;
  formStatus : string = 'Add';
  categoryId! :string; 

  constructor(private categoriesService: CategoriesService){ }

  ngOnInit(){
    this.categoriesService.getCategories().subscribe(val => {
      this.categories = [...val];
    });
    
  }

  onSubmit(categoryForm:NgForm ){

    let categoryData:Category = {
      category: categoryForm.value.category
    }
    if(this.formStatus === 'Add'){
      this.categoriesService.saveCategory(categoryData);

    } else {
        this.categoriesService.updateCategory(this.categoryId,categoryData);
    }
    categoryForm.reset();
    
    this.formStatus ='Add';

  }

  onEdit(category:any ,id:string){

    this.categoryInput = category.category;
    
    this.formStatus = 'Edit';
    
    this.categoryId = id ;
  }

  onDelete(id:string){
    this.categoriesService.deleteCategory(id);
    
  }




}
