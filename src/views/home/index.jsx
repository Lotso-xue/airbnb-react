import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// store
import { fetchHomeDataAction } from '@/store/modules/home'

// style
import { HomeWrapper } from './style'

// cpns组件
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'

// utils
import { isEmptyObj } from '@/utils'


const Home = memo(() => {
  // 从redux中获取数据, shallowEqual当浅拷贝更新了数据才重新渲染
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } =  useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.hotrecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }),shallowEqual)

  // 派发异步事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        { isEmptyObj(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        { isEmptyObj(longforInfo) && <HomeLongfor infoData={longforInfo} /> }
        { isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        { isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        { isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home