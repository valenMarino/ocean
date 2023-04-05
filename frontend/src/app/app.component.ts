import { Component, OnInit  } from '@angular/core';
import { OceanService } from './services/oceanService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  Oceans:any = [];

  constructor(private oceanService: OceanService) { }

  ngOnInit(): void {
    this.oceanService.GetOceans().subscribe(res => {
      console.log(res)
      this.Oceans =res;
    });    
  }
}
