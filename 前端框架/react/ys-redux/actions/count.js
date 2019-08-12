function incerment () {
    // 同步操作
    return { type: 'INCERMENT' };

    // 异步操作
    // return (dispatch, getState) => {
    //     dispatch({ type: 'INCERMENT' }, 'success');
    // }
}

export { incerment };

 