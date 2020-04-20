export interface globalState {
  readonly feedbackForm: {
    showModal: boolean;
    showLoader: boolean;
    loaderLabel: string;
  };
}

export interface homeState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface aboutState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface productsState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface blogState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface blogPostState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface blogCategoriesState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface contactState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface IBlogPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  parent: number;
  template: string;
  'blog-category': number[];
  acf: {
    subtitle: string;
    image: any;
    description: string;
    author: {
      ID: number;
      user_firstname: string;
      user_lastname: string;
      nickname: string;
      user_nicename: string;
      display_name: string;
      user_email: string;
      user_url: string;
      user_registered: string;
      user_description: string;
      user_avatar: string;
    };
    seo_title: string;
    seo_description: string;
    seo_image: string;
  };
  _links: any;
}

export default interface applicationState {
  global: globalState;
  home: homeState;
  about: aboutState;
  products: productsState;
  blog: blogState;
  blogCategories: blogCategoriesState;
  blogPost: blogPostState;
  contact: contactState;
}
