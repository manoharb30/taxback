import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { NotFoundComponent } from './notfound.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    // { path: '**', component: NotFoundComponent },

    { path: 'details/:id', component: DetailComponent },
    { path: 'add', component: AddtransactionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
