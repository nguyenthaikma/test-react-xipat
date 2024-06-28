import axios from "axios";
import testReducer from "../reducer/numberReducer";

export const addTest = (number) => {
    return (dispatch, getState) => {
        dispatch(testReducer.actions.pushNumber(number))
    }
}

export const getNumber = (number) => {
    return async (dispatch, getState) => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
                method: 'GET'
            })

            dispatch(testReducer.actions.getNumber(result.data.content))

        } catch (err) {
            console.log(err);
        }
    }
}