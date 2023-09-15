import React, { memo, useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

import { fetchRoomListAction } from '@/store/modules/entire/actionCreators.js'
import { useDispatch } from 'react-redux'

const Entire = memo(() => {
    // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  },[dispatch])


  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire