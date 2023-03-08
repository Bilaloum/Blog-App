import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { ToastrService } from 'ngx-toastr';
import {  map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: AngularFirestore,private toastr:ToastrService) { }

  saveCategory(categoryData:object){
  
    this.firestore.collection('categories')
    .add(categoryData)
    .then(docRef => {
        this.toastr.success('category added successfully');
    })
    .catch(error => console.log(error))
  }

  getCategories(){

    return this.firestore.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return {id , data }
        })
      })
    )
  }

  updateCategory(id:string ,editData:object){
    this.firestore.collection('categories').doc(id).update(editData);
    this.toastr.success('category inserted successfully')
  }

  deleteCategory(id: string){
    this.firestore.doc(`categories/${id}`).delete().then(docRef => {
      this.toastr.success('category Deleted successfully')
    })
  }
}
