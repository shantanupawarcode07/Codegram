import BottomBar from '@/components/ui/Shared/BottomBar'
import LeftSideBar from '@/components/ui/Shared/LeftSideBar'
import TopBar from '@/components/ui/Shared/TopBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <TopBar/>
      <LeftSideBar/>
      <section className='flex flex-1 h-full'>
        <Outlet/>

      </section>
      <BottomBar/>

      </div>
  )
}

export default RootLayout