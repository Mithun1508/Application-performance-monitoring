import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  function isSorted (things) {
    for (var i = 1; i < things.length; i += 1) {
      if (things[i] < things[i - 1]) {
        return false;
      }
    }
    return true;
  }

  function sort(arr, cb) {
       if (isSorted(arr)) {
        cb(arr);
      } else {
        var newArr = arr.slice(0);
        newArr.sort(function () {
          return Math.random() - 0.5;
        });
        sort(newArr, cb);
      }
  }

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click)="test()">Test async tasks</button><br/>
  <performance></performance>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(private httpClient: HttpClient) {}

  test() {
    setTimeout(() => {
      sort([5, 3, 8, 20, 15], console.log);
    }, 100);
    this.httpClient.get('https://reqres.in/api/users/2').subscribe(() => {});
  }


}
