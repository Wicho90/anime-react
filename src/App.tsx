import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components';

function App() {

  return (

    // @media (min-width: 810px) and (max-width: 1599px)
    // .framer-1oyKs .framer-72rtr7 {
    //     width: 810px;
    // }
    <div style={{
      width: '100%',
      minHeight: '100%',
      margin: 'auto',
      placeContent: 'center flex-start',
      alignItems: 'center',
      display:' flex',
      flexFlow: 'column nowrap',
      gap: '0px',
      height: 'min-content',
      overflow: 'hidden',
      padding: '0px',
      position: 'relative',
    }}>
        
      {/* Background */}
      {/* <div className="z-[-1]" style={{
        position: 'absolute',
        borderRadius: 'inherit',
        inset: '0px',
      }}>

        <img style={{
          display: 'block',
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          objectPosition: 'center center',
          objectFit: 'cover',
          imageRendering: 'auto',
          overflowClipMargin: 'content-box',
          overflow: 'clip'
        }} 
        src="../public/blurry-gradient-haikei-god.svg"
        /> 

      </div> */}

      <Navbar />

    
      <main className="flex flex-col items-center shrink-0 w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default App

{/* <div className="absolute rounded-[inherit] inset-0">
        <img className="block rounded-[inherit] object-[center_center] object-cover img-rendering h-full w-full" src="../../../blurry-gradient-haikei-god.svg" alt="fondo" />

      </div> */}