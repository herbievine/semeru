import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from '../../hooks/useTheme'

interface LensProps {
  props?: SvgProps
}

const Lens: React.FC<LensProps> = ({ props }) => {
  const { theme } = useTheme()

  return (
    <Svg
      viewBox="0 0 532 512"
      fill={props?.color ? props.color : theme.text}
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M524.765 442.657l-103.602-99.691c-4.676-4.499-11.015-6.999-17.666-6.999H386.56c28.68-35.296 45.722-79.692 45.722-127.987C432.282 93.09 335.538 0 216.141 0 96.744 0 0 93.09 0 207.98c0 114.888 96.744 207.979 216.141 207.979 50.19 0 96.328-16.398 133.01-43.995v16.298c0 6.399 2.597 12.499 7.273 16.998l103.603 99.691c9.767 9.399 25.562 9.399 35.226 0l29.408-28.298c9.768-9.399 9.768-24.597.104-33.996zm-308.624-106.69c-73.467 0-133.01-57.194-133.01-127.987 0-70.693 59.439-127.988 133.01-127.988 73.467 0 133.01 57.195 133.01 127.988 0 70.693-59.439 127.987-133.01 127.987z" />
    </Svg>
  )
}

export default Lens
