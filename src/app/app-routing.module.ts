import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/constants/route.constant';

export const routes: Routes = [
  {
    path: '',
    title: ROUTES.APP.HOMEPAGE,
    loadChildren: () => import('./post/post-list/post-list.module').then((m) => m.PostListModule),
  },
  {
    path: ':id',
    title: ROUTES.APP.HOMEPAGE,
    loadChildren: () => import('./post/post-detail/post-detail.module').then((m) => m.PostDetailModule),
  },
  {
    path: '**',
    title: ROUTES.APP.NOT_FOUND,
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 20],
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
