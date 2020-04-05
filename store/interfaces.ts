export interface globalState {
  readonly feedbackForm: {
    showModal: boolean;
    showLoader: boolean;
    loaderLabel: string;
  };
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

export interface contactState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export default interface applicationState {
  global: globalState;
  about: aboutState;
  products: productsState;
  contact: contactState;
}
