import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SiComponent } from './si/si.component';
import { SwapComponent } from './swap/swap.component';
import { RamComponent } from './ram/ram.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { ScstextPipe } from './scstext.pipe';
import { NoticeServiceService } from './notice-service.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    SiComponent,
    SwapComponent,
    RamComponent,
    ChangeTextDirective,
    SqrtPipe,
    ScstextPipe,
    StudentComponent,

  ],
  imports: [
    MatButtonModule,
   MatMenuModule,
  MatSidenavModule,
    BrowserModule,
     BrowserAnimationsModule,
     RouterModule.forRoot([
         {
            path: 'new-swap',
            component: SwapComponent
         },
          {
            path: 'new-si',
            component: SiComponent
         },
         {
            path: 'new-ram',
            component: RamComponent
         },
         {
            path: 'app-student',
            component: StudentComponent
         }

      ]),
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NoticeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
