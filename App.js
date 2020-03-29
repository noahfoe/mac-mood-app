import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ImageBackground } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { AdMobBanner } from 'expo-ads-admob';
import BDE from './assets/bde.mp3';
import SelfCare from './assets/self.mp3';
import GoodNews from './assets/good.mp3';
import DonaldTrump from './assets/trump.mp3';
import { Howl, Howler } from 'howler';

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

var audioClips = [
  {sound: }
]

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
      let songs = ['Best Day Ever', 'Kool Aid & Frozen Pizza', 'Nikes on my Feet'];
      let song = songs[Math.floor(Math.random() * songs.length)];
      this.displayText(song)
      this.resetName()
    } else if (this.state.selectedItems.some(item => item.name === 'Sad Music')) {
        let songs = ['Self Care', 'ROS', 'Stay', 'Whats the Use?'];
        let song = songs[Math.floor(Math.random() * songs.length)];
        this.displayText(song)
        this.resetName()
    } else if (this.state.selectedItems.some(item => item.name === 'Chill Music')) {
        let songs = ['Good News', 'Claymation (feat. Vinny Radio)', 'The Star Room'];
        let song = songs[Math.floor(Math.random() * songs.length)];
        this.displayText(song)
        this.resetName()
    } else if (this.state.selectedItems.some(item => item.name === 'Hype Music')) {
        let songs = ['Donald Trump', 'REMember', 'Weekend (feat. Miguel)'];
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