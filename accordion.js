import React from 'react'

export default function accordion() {
    const [open,setOpen] = useState(false);

  return (
    <>
     <div>accordion</div>
     <button onClick={()=>(setOpen(true))}>Open<button/>
    </>
  )
}
