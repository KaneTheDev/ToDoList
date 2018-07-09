import { Injectable } from '@angular/core';

let todosArray = [

];

@Injectable()
export class TodoService {

  constructor() { }

  delete(id){
    return new Promise(resolve => {
      let index = todosArray.findIndex(todo => todo._id === id);
      todosArray.splice(index, 1);
      resolve(true);
    });

  }

  put(data) {
    return new Promise(resolve => {
      let index = todosArray.findIndex(todo => todo._id === data._id);
      todosArray[index].title = data.title;
      resolve(data);
    });
  }


  add(data) {
    return new Promise(resolve => {
      todosArray.push(data);
      resolve(data);
    });
  }

  get() {
    return new Promise(resolve => resolve(todosArray));
  }

  
}
