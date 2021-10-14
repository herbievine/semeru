import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/poppins'
import React from 'react'

interface FontContextInterface {
  loading: boolean
}

export const FontContext = React.createContext<FontContextInterface | null>(
  null
)

const FontProvider: React.FC<{}> = ({ children }) => {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  })

  return (
    <FontContext.Provider value={{ loading: !loaded }}>
      {children}
    </FontContext.Provider>
  )
}

export default FontProvider
