import jsonPlaceholder from '../apis/jsonPlaceholder';

//function returning a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POST', payload: response })
};