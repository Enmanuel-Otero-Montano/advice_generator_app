import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { generateService } from './service/generate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  number:string = ""
  advice:string = ""

  constructor(private readonly generateService: generateService){
    this.generateService.generate().pipe(tap(res=> this.number = res.slip.id )).subscribe()
    this.generateService.generate().pipe(tap(res=> this.advice = res.slip.advice )).subscribe()
  }

  ngOnInit(): void {
  }


  generateAdvice(){
    this.generateService.generate().pipe(tap(res=> this.number = res.slip.id )).subscribe()
    this.generateService.generate().pipe(tap(res=> this.advice = res.slip.advice )).subscribe()
  }

}
