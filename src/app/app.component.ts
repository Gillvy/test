import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';

  isPrime(num) {
    if (num === 2) return true;
    if (num < 2 || num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) if (num % i === 0) return false;
    return true;
  }
  isFibo(n) {
    var a = 0;
    var b = 1;
    if (n == a || n == b) return true;
    var c = a + b;
    while (c <= n) {
      if (c == n) return true;
      a = b;
      b = c;
      c = a + b;
    }
    return false;
  }

  onChange(input, select) {
    switch (select) {
      case 'isPrime':
        document.getElementById('result').innerHTML = this.isPrime(input) + ' ';

        break;
      case 'isFibo':
        document.getElementById('result').innerHTML = this.isFibo(input) + ' ';
        break;
      default:
        break;
    }
  }
}
