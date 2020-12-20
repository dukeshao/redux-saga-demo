//引入所有 saga 模块，合并

import homeSaga from '../components/home/saga'
import listSaga from '../components/list/saga'
import saga from '../components/saga'

const rootSaga = [saga, homeSaga, listSaga];

export default rootSaga;