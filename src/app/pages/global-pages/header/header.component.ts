import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ApicallService]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private apicallService : ApicallService) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/']);
  }

  goSearch(val:string) {     
    // this.apicallService.setSearchTerm(val);
    this.router.navigate(['page/search',val]); 
  }
  clear() {
    this.router.navigate(['/']);
  }
}
