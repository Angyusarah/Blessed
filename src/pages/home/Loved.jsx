import { useState } from "react"

const Loved = (props) => {
    const [currentId, setCurrentId] = useState (1)
  return (
    // <div className="flex flex-col px-5 py-8 my-5 border rounded-xl shadow-sm md:min-w-[32%] md:py-5">
    //         <img className=" w-[50%] h-10" src={`../assets/images/${props.item.coverImg}`} alt="" />
    //         <div className="flex justify-between">
    //           <h3 className=" font-semibold text-xl py-2">{props.item.title}</h3>
    //           <div className="flex gap-1 h-[90%] py-4">
    //             <span>({props.item.rating}.0)</span>
    //             <img className="" src={star} alt="" />
    //           </div>
    //         </div>
    //         <p className="text-xs">{props.item.description}</p>
    //     </div>

    <div className="flex flex-col px-5 py-10 my-5 border-[1px] border-buttonblue bg-red-500tonblue rounded-xl shadow-sm md:min-w-[32%] md:py-5">       
     <p className="text-xs">{props.item.description}</p>
     </div>
  )
}

export default Loved

// const Cards = (props) => {
//     console.log(`../assets/images/diana.png`)
//     const imgPath = "`../assets/images/diana.png`"
//       return (
//         <div className="flex flex-col px-5 py-8 my-5 border rounded-xl shadow-sm md:min-w-[32%] md:py-5">
//             <img className=" w-[50%] h-10" src={`../assets/images/${props.item.coverImg}`} alt="" />
//             <div className="flex justify-between">
//               <h3 className=" font-semibold text-xl py-2">{props.item.title}</h3>
//               <div className="flex gap-1 h-[90%] py-4">
//                 <span>({props.item.rating}.0)</span>
//                 <img className="" src={star} alt="" />
//               </div>
//             </div>
//             <p className="text-xs">{props.item.description}</p>
//         </div>
//       )
    
//     }
    
//     export default Cards