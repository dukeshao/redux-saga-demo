//引入所有 saga 模块，合并

import homeSaga from '../components/home/saga'
import listSaga from '../components/list/saga'
import effectSSaga from '../components/effect/saga'
import saga from '../components/saga'

const rootSaga = [saga, homeSaga, listSaga, effectSSaga];

export default rootSaga;