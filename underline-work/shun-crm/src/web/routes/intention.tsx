/**
 * 意向客户路由
 */
import Intention from '@components/Intention';

const intentionRoute = [
  {
    path: "/index/intention",
    exact: true,
    component: Intention,
    auth: true
  }
]

export default intentionRoute;