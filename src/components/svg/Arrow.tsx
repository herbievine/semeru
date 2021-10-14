import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from '../../hooks/useTheme'

interface ArrowProps {
  props?: SvgProps
}

const Arrow: React.FC<ArrowProps> = ({ props }) => {
  const { theme } = useTheme()

  return (
    <Svg
      viewBox="0 0 438 266"
      fill={theme.text}
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M235.971 7.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L219 104.495 64.255 258.516c-9.379 9.335-24.544 9.317-33.901-.04L7.687 235.809c-9.373-9.373-9.373-24.569 0-33.941L202.03 7.525c9.372-9.373 24.568-9.373 33.941-.001z" />
    </Svg>
  )
}

export default Arrow
