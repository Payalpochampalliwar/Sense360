import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    loadComponent: () =>
      import('./inbox/inbox.component')
        .then(m => m.InboxComponent)
  },
  {
    path: '**',
    redirectTo: 'inbox'
  }
];
