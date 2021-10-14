import React from 'react'
import FontProvider from '../../context/Fonts'
import ThemeProvider from '../../context/Theme'
import AuthProvider from '../../context/Auth'

interface ContextRegistrationProps {}

const ContextRegistration: React.FC<ContextRegistrationProps> = ({
  children,
}) => {
  return (
    <FontProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </FontProvider>
  )
}

export default ContextRegistration
