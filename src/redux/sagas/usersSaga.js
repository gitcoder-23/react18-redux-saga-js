import { call, put, takeEvery } from 'redux-saga';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApiUsers = async () => {
   return await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    // .then((data) => {
    //   console.log('apiData->', data);
    // })
    .catch((err) => {
      console.log('err->', err);
    });
};

function fetchAllUsers(action){
try {
  const users = yield call(getApiUsers);
  yield put({type: 'GET_USERS_SUCCESS', users: users})
} catch (error) {
  console.log('error->', error);
  yield put({type: 'GET_USERS_FAILED', message: error.message})
}
}



function* usersSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchAllUsers)
}

export default usersSaga