export default work = {
  Work: {
    roomName: 'CourageWorks',
    info: `
      * Open everyday from 9am to 5pm
      * You can browse my collection of contemporary art.
      * Everyone is welcome, even if you just want to have a peak!
      * Reasonable prices!`,
      img: 'vatican_road_8k.jpg',
    adjacentRooms: ['Exhibition'],
  },
  Exhibition: {
    roomName: 'Exhibition' ,
    info: `
      * Currently selling Banksy, Bobrowolski and Hush art.`,
    img: 'artist_workshop_8k.jpg',
    adjacentRooms: ['Work']
  }
}
