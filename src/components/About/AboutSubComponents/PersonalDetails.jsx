
import Button from '../../GlobalComponents/Button'


function PersonalDetails() {
  return (
    <div className='text-white'>
       <h1 className='text-2xl font-bold mb-8'>PERSONAL INFOS</h1>
       <div className='flex justify-between space-x-28 mb-12'>
            <div className='flex flex-col space-y-6 items-start'>
                <p className='text-white/70'>First Name: <span className='text-white'>Kamran</span></p>
                <p className='text-white/70'>Age: <span className='text-white'>27</span></p>
                <p className='text-white/70'>Freelance: <span className='text-emerald-400'>Available</span></p>
                <p className='text-white/70'>Phone: <span className='text-white'>(647) 832-3660</span></p>
            </div>

            <div className='flex flex-col space-y-6 items-start'>
            <p className='text-white/70'>Last Name: <span className='text-white'>Rahmani</span></p>
            <p className='text-white/70'>Address: <span className='text-white'>Halifax, NS, CA</span></p>
            <p className='text-white/70'>Email: <span className='text-white'>rahmanikamran95@gmail.com</span></p>
            <p className='text-white/70'>Languages: <span className='text-white'>English</span></p>
            </div>
       </div>
        <Button text={'Download CV'} onClick={()=> {window.open('../../../../assets/KAMRAN RAHMANI.pdf')}}/>
    </div>
  )
}

export default PersonalDetails
