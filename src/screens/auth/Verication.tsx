import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { ContainerComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { fontFamilies } from '../../constants/fontFamilies'

const Verication = () => {
  return (
    <ContainerComponent  back isImageBackground >
      <SectionComponent>
      <TextComponent text="Verification" title />
      <SpaceComponent height={12} />
        <TextComponent
          // text={`We’ve send you the verification code on ${email.replace(
          //   /.{1,5}/,
          //   (m: any) => '*'.repeat(m.length),
          // )}`}
          text={`We’ve send you the verification code on`}

        />
      </SectionComponent>
      <SpaceComponent height={26} />
       <TextInput
            keyboardType="number-pad"
            // value={codeValues[2]}
            // ref={ref3}
            // onChangeText={val => {
            //   handleChangeCode(val, 2);
            //   val.length > 0 && ref4.current.focus();
            // }}
            //style={[styles.input]}

            maxLength={1}
            placeholder="-"
          />
    </ContainerComponent>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: fontFamilies.bold,
    textAlign: 'center',
  },
});

export default Verication