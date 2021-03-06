import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import EditPlate from './EditPlate';
import ColorChange from './ColorChange';

const DetailParts = (props) => {
  const [like, setLike] = useState(false);
  const [which, setWhich] = useState(true);
  const [bgColor, setBgColor] = useState(props.theme.colors.base);
  const [txtColor, setTxtColor] = useState(props.theme.colors.text);
  const [moreOpen, setMoreOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);


  const handleMore = () => {
    setMoreOpen(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }
  useEffect(() => {
    moreOpen ? props.setOverOpen(true) : props.setOverOpen(false)
  }, [moreOpen]);
  
  const handleColor = () => {
    setColorOpen(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }
  useEffect(() => {
    colorOpen ? props.setOverOpen(true) : props.setOverOpen(false)
  }, [colorOpen]);

  const handleLike = () => {
    setLike(!like);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }
  const handleShare = () => {
    alert('share');
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }


  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>

      <View style={styles.topContent}>
        <View style={styles.topLeft}>
          <Image style={styles.icon} source={props.item.icon}/>
          <Text style={{color: txtColor}}>{props.item.date}</Text>
        </View>
        <Feather style={{marginRight: 20}} name="more-horizontal"
          size={26} color={txtColor}
          onPress={handleMore}/>
      </View>

      <Image style={styles.image} source={props.item.url}/>

      <View style={styles.bottomContent}>
        {like ? (
          <AntDesign name="heart" size={24} 
            style={{marginLeft: 20}} color={'#e62e56'}
            onPress={handleLike}
          />
          ):(
          <AntDesign name="hearto" size={24} 
            style={{marginLeft: 20}} color={txtColor}
            onPress={handleLike}
          />
        )}
        <Entypo name="share" size={24} 
          style={{marginLeft: 12}} color={txtColor}
          onPress={handleShare}
        />
        <Ionicons name="color-palette-outline" size={27}
          style={{marginLeft: 12}} color={txtColor}
          onPress={handleColor}
        />
      </View>
      
      <EditPlate navigation={props.navigation} route={props.route}
        handleClose={props.handleClose}
        open={moreOpen} setOpen={setMoreOpen}
        id={props.item.id} image={props.item.url}
      />
      <ColorChange open={colorOpen} setOpen={setColorOpen}
        which={which} setWhich={setWhich}
        setBgColor={setBgColor} bgColor={bgColor}
        setTxtColor={setTxtColor} txtColor={txtColor}
      />
 
    </View>
  )
}

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContent: {
    height: 55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomContent: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topLeft: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: height*0.55,
    width: '100%',
  },
  icon: {
    height: 33,
    width: 33,
    borderRadius: 20,
    marginLeft: 18,
    marginRight: 10,
  },
});

export default withTheme(DetailParts);