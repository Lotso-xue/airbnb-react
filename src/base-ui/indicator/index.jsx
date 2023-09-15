import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // content 的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 判断左边边缘
    if (distance < 0) distance = 0
    // 判断右边边缘
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance


    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
  

  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator