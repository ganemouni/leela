import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  todoArray:Array<String>=[] ;
  addTodo(value:String){  
    this.todoArray.push(value)  
    console.log(this.todoArray)  } 

    deleteItem(todo:String){  
       for(let i=0 ;i<= this.todoArray.length ;i++){    
        if(todo== this.todoArray[i]){     this.todoArray.splice(i,1)    }   }  }
}
