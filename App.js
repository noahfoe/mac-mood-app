import React, { Component, Fragment, useEffect, Platform   } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Image, ImageBackground } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { AdMobBanner } from 'expo-ads-admob';
//import { Router, Scene } from 'react-native-router-flux';
//import LoadingScene from './LoadingScene';
//import AuthScene from './AuthScene';

var items =[
    {
      id: 1,
      name: 'Happy Music'
    },
    {
      id: 2,
      name: 'Sad Music'
    },
    {
      id: 3,
      name: 'Chill Music'
    },
    {
      id: 4,
      name: 'Hype Music'
    }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }

  bannerError(e) {
    alert(e);
  }

  resetName() {
    this.setState({ selectedItems: [] });
  }

  displayText(songName) {
    alert(songName);
  }
  
  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.jpg')}
        style={ styles.img }>

      <View style={ styles.screen} >
        <Fragment>
        {/* Title */}
        <View style={ styles.top }>
          <View style={ styles.header }>
            <Text> Which Mac Miller Song Matches Your Mood? </Text>
          </View>
        </View>
          {/* Single Dropdown Menu */}
          <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              this.setState({ selectedItems: [...items, item]});
            }}
            containerStyle={{ padding: 25, alignSelf: 'center' }}
            onRemoveItem={(item) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: [...items, item] });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={''}
            resetValue={false}
            textInputProps={
              {
                placeholder: "What kind of music do you want to hear?",
                placeholderTextColor: 'black',
                style: {
                  color: 'black',                  
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  backgroundColor: 'rgba(225,255,255,.5)',
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />

      
      <View style={{  alignSelf: 'center', width: '50%' }} >
        {/* Button */}
        <Button
          style={ styles.button }
          title="Press me for a Mac Miller song!"
          onPress={() => 
            this.macSong()}
        />
      </View>
      <View>
        {/* Album Art of Song Given? */}

      </View>
        
      </Fragment>
      </View>
      <AdMobBanner
        style={ styles.bottomBanner }
        bannerSize="banner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDeviceID="EMULATOR"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={ (e) => this.bannerError(e)}
        /> 
      </ImageBackground> 
    );
  }

  /* Different Mood Function */
  macSong() {
    if (this.state.selectedItems.some(item => item.name === 'Happy Music')) {
      let songs = ['Best Day Ever        Album: Best Day Ever', 'Kool Aid & Frozen Pizza        Album: K.I.D.S', 'Nikes on my Feet        Album: K.I.D.S', 'Knock Knock        Album: K.I.D.S', 'Senior Skip Day        Album: K.I.D.S', 'The Spins        Album: K.I.D.S', 'Wear My Hat        Album: Best Day Ever', 'Play Ya Cards        Album: Best Day Ever'];
      let song = songs[Math.floor(Math.random() * songs.length)];
      this.displayText(song)
      this.resetName()
    } else if (this.state.selectedItems.some(item => item.name === 'Sad Music')) {
        let songs = ['Self Care        Album: Circles', 'ROS        Album: GO:OD AM', 'Stay        Album: The Divine Feminine', 'Whats the Use?        Album: Swimming', 'Dang! (feat. Anderson Paak)        Album: The Divine Feminine', '2009        Album: Swimming', 'Hurt Feelings        Album: Swimming', 'Soulmate (feat. Dam Funk)        Album: The Divine Feminine'];
        let song = songs[Math.floor(Math.random() * songs.length)];
        this.displayText(song)
        this.resetName()
    } else if (this.state.selectedItems.some(item => item.name === 'Chill Music')) {
        let songs = ['Good News        Album: Swimming', 'Claymation (feat. Vinny Radio)        Album: Watching Movies with the Sound Off', 'The Star Room        Album: Watching Movies with the Sound Off', 'I Am Who I Am (Killin Time)        Album: Watching Movies with the Sound Off', 'Planet God Damn        Album: The Divine Feminine', 'Skin         Album: The Divine Feminine'];
        let song = songs[Math.floor(Math.random() * songs.length)];
        this.displayText(song)
        this.resetName()
    } else if (this.state.selectedItems.some(item => item.name === 'Hype Music')) {
        let songs = ['Donald Trump        Album: Best Day Ever', 'REMember        Album: Watching Movies with the Sound Off', 'Weekend (feat. Miguel)        Album: GO:OD AM', 'Frick Park Market        (Single)', 'Brand Name        Album: GO:OD AM', 'Lucky Ass BItch (feat. Juicy J)        Album: Macadelic', 'Programs        (Single)', 'Break The Law        Album: GO:OD AM'];
        let song = songs[Math.floor(Math.random() * songs.length)];
        this.displayText(song)
        this.resetName()
    }
  }
}

{/* StyleSheet */}
const styles = StyleSheet.create({
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 1,
    color: 'black',
  },
  button: {
    padding: 10,
    alignSelf: 'center',
  },
  header: {
    fontSize: 28,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    padding: 30,
    paddingLeft: 40,
    paddingRight: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(225,255,255,.5)',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomBanner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});