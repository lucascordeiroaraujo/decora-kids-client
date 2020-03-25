export interface HomeState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
}

export default interface ApplicationState {
  home: HomeState;
}
