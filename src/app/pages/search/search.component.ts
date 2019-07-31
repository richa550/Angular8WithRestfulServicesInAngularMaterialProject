import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../services/apicall.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ApicallService]
})
export class SearchComponent implements OnInit {
   selectedCountry:any;
   showData =false;
  url:any;
  list:any=[];
  resultSuccess = false;
  constructor(private apicallService : ApicallService,private route: ActivatedRoute) {
    
    this.route.params.subscribe(params => {
      if(params.term.length == 2 || params.term.length == 3){
        this.url="https://restcountries.eu/rest/v2/alpha?codes="+params.term;
      }
      else {
        this.url="https://restcountries.eu/rest/v2/region/"+params.term;
      }     
      this.apicallService.sendRequestSearch(this.url).subscribe(
        data => {
        this.list= data;
        this.showData=false;
        this.resultSuccess= true;
      },
      error  => {
        this.resultSuccess= false;
        });
    });
   }
  
  ngOnInit() { }

  selectRow(id:any) {  
    this.list.forEach((value:any,key:any) => {   
      if(id === value.numericCode){
        this.showData=true;
       this.selectedCountry = value;    
      }      
    }); 
   }
}
