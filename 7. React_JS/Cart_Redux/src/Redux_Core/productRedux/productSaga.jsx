import { takeEvery , put } from "redux-saga/effects";
import { PRODUCT_LIST , PRODUCT_SET } from "../Constant";


export function* getProduct(){
    
    let data = yield fetch('http://localhost:3000/productData')
    data = yield data.json()
    console.log('productSagaData', data);
    yield put({type:PRODUCT_SET , data})

}


function* productSaga(){
    yield takeEvery(PRODUCT_LIST , getProduct)
}

export default productSaga