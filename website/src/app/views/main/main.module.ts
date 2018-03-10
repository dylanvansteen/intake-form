import { NgModule } from '@angular/core';
import { MainComponent } from '@views/main/main';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [MainComponent],
  providers: [],
  exports: []
})
export class MainModule {}
