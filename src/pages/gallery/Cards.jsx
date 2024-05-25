const Cards = (props) => {
    let badgeText
    if (props.item.openSpots === 0){
      badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online'){
      badgeText = 'ONLINE'
    }
  
  
    return (
      <div className='card'>
        <img src={`../public/assets/${props.item.coverImg}`} alt="" />
      </div>
    )
  }
  
  export default Cards