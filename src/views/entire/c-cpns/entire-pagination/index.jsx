import { fetchRoomListAction } from '@/store/modules/entire/actionCreators.js'
import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const {totalCount, currentPage, roomList} = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }),shallowEqual)

  const totalPage = Math.ceil(totalCount / 20) // ceil()返回大于或等于参数的整数
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount){
    // 换页回到顶部
    window.scrollTo (0,0)

    dispatch(fetchRoomListAction(pageCount - 1))  
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={pageChangeHandle}/>
            <div className='desc'>
              第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination