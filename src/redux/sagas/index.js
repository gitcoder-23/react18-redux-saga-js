import { all } from 'react-router-dom/effects';
import usersSaga from '../sagas/usersSaga';

export default function* rootSaga() {
  yield all([usersSaga()]);
}
