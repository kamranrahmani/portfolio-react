import React from 'react'

function ContactDetailsComponent({logo, title, detail}) {
  return (
    <div className='flex items-start justify-start space-x-4'>
        <div className='mt-1'>
            {logo}
        </div>
        <div>
            <h2 className='text-white/70'>{title}</h2>
            <p className='font-bold'>{detail}</p>
        </div>
    </div>
  )
}

export default ContactDetailsComponent
