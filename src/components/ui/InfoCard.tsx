import React from 'react'
import { View, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import ThemedText from './ThemedText'

interface InfoCardProps {
  photoUrl: string
  title: string
  description: string
  read: boolean
  style?: StyleProp<ViewStyle>
}

const s = StyleSheet.create({
  wrapper: {
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 999,
  },
  infoWrapper: {
    marginLeft: '0.8rem',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  description: {
    fontSize: 14,
  },
})

const InfoCard: React.FC<InfoCardProps> = ({
  photoUrl,
  title,
  description,
  read,
  style,
}) => {
  return (
    <View style={[style, s.wrapper]}>
      <Image style={s.image} source={{ uri: photoUrl }} />
      <View style={s.infoWrapper}>
        <ThemedText style={s.title}>{title}</ThemedText>
        <ThemedText
          style={[
            s.description,
            { fontFamily: read ? 'Poppins_500Medium' : 'Poppins_700Bold' },
          ]}
        >
          {description}
        </ThemedText>
      </View>
    </View>
  )
}

export default InfoCard
