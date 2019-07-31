import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PagesRoutingModule} from './pages-routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations:   [SearchComponent],
  imports: [
    PagesRoutingModule,
    CommonModule
  ],
  providers: []
})
export class PageModule { }
