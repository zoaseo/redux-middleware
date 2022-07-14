// thunk 함수
// GET_POSTS
export const createPromiseThunk = (type, promiseCreator) => {
    // GET_POSTS_SUCCESS, GET_POSTS_ERROR
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    
    return param => async dispatch => {
        dispatch({ type, param }) // 요청을 시작
        try{
            const payload = await promiseCreator(param); // api호출
            dispatch({ type: SUCCESS, payload }); // 성공
            // dispatch({ type: GET_POST_SUCCESS, post: post }); // 윗줄과 같은 의미
        }
        catch(e) {
            dispatch({ type: ERROR, payload: e, error: true }) // 실패
        }
    }
}

// 리듀서에서 사용할 수 있는 유틸함수
export const reducerUtils = {
    initial: (initialData = null)=>({
        loading: false,
        data: initialData,
        error: null
    }),
    loading: (prevState = null)=> ({
        loading: true,
        data: prevState,
        error: null
    }),
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
}