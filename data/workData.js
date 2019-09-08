export default work = {
  Work: {
    roomName: 'CourageWorks',
    info: `
      * Open everyday from 9am to 5pm
      * You can browse my collection of contemporary art.
      * Everyone is welcome, even if you just want to have a peak!
      * Reasonable prices!`,
      img: 'modern_buildings.jpg',
    adjacentRooms: ['Exhibition'],
  },
  Exhibition: {
    roomName: 'Exhibition' ,
    info: `
      * Currently selling Banksy, Bobrowolski and Hush art.`,
    img: 'exhibition.jpg',
    adjacentRooms: ['Work']
  }
}
