export interface HomeState {
  readonly data: null;
  readonly loading: boolean;
  readonly error: boolean;
}

export default interface ApplicationState {
  home: HomeState;
}
