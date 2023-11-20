import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTES_I18N: RouteDefinitionDto<{
  route: string;
  title: string;
  seo: { title: string; description: string };
}> = {
  APP: {
    POSTS: {
      route: _('routes.app.posts'),
      title: _('titles.app.posts'),
      seo: {
        title: _('SEO.app.posts.title'),
        description: _('SEO.app.posts.description'),
      },
    },
    NOT_FOUND: {
      route: _('routes.app.not-found'),
      title: _('titles.app.not-found'),
      seo: {
        title: _('SEO.app.not-found.title'),
        description: _('SEO.app.not-found.description'),
      },
    },
  },
  POSTS: {
    DETAIL: {
      route: _('routes.posts.detail'),
      title: _('titles.posts.detail'),
      seo: {
        title: _('SEO.posts.detail.title'),
        description: _('SEO.posts.detail.description'),
      },
    },
    CREATE: {
      route: _('routes.posts.create'),
      title: _('titles.posts.create'),
      seo: {
        title: _('SEO.posts.create.title'),
        description: _('SEO.posts.create.description'),
      },
    },
    EDIT: {
      route: _('routes.posts.edit'),
      title: _('titles.posts.edit'),
      seo: {
        title: _('SEO.posts.edit.title'),
        description: _('SEO.posts.edit.description'),
      },
    },
  },
};
