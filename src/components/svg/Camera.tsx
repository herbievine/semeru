import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from '../../hooks/useTheme'

interface CameraProps {
  props?: SvgProps
}

const Camera: React.FC<CameraProps> = ({ props }) => {
  const { theme } = useTheme()

  return (
    <Svg
      viewBox="0 0 512 448"
      fill={props?.color ? props.color : theme.text}
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M342.7 112H464v288H48V112h121.3l24-64h125.5l23.9 64zM324.3 0h-131c-20 0-37.9 12.4-44.9 31.1L136 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-88l-14.3-38C355.9 10.3 341 0 324.3 0zM256 376c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z" />
    </Svg>
  )
}

export default Camera
