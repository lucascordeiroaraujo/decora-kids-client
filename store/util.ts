interface ICreator<T = any> {
  type: string;
  payload: T;
}

export default function creator<T>(type = 'TYPE_NOT_IS_SET') {
  return (payload: T): ICreator<T> => ({ type, payload });
}
