import React from 'react';
import {
  asset,
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import work from './data/workData';

export default class ArtGalleryTour extends React.Component {
    state = {
      room: work.Work.roomName,
      info: work.Work.info,
      adjacentRooms: work.Work.adjacentRooms
    }

    clickHandler(roomSelection) {

      this.setState({
        room: work[`${roomSelection}`].roomName,
        info: work[`${roomSelection}`].info,
        adjacentRooms: work[`${roomSelection}`].adjacentRooms
      })

      Environment.setBackgroundImage(asset(`./${work[`${roomSelection}`].img}`));
    }

    createRoomButtons(adjacentRooms) {
      let rooms = adjacentRooms;
      let buttons = [];

      rooms.map(room => (
        buttons.push(
          <VrButton key={`${room}` + '-button'} onClick={() => this.clickHandler(room)}>
            <Text style={{backgroundColor: 'green'}}>{ room }</Text>
          </VrButton>)
      ));

      return buttons;
    }

    render() {
      return (
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text>{ this.state.room }</Text>
            { this.createRoomButtons(this.state.adjacentRooms) }
          </View>
          <View style={styles.greetingBox}>
            <Text>CourageWorks info</Text>
            <Text>{ this.state.info}</Text>
          </View>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 1000,
      height: 600,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    greetingBox: {
      padding: 20,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
      alignItems: 'center',
    }
  });

AppRegistry.registerComponent('ArtGalleryTour', () => ArtGalleryTour);
