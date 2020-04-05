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

export default interface applicationState {
  home: homeState;
  about: aboutState;
}
