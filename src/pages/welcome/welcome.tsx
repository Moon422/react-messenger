import logo from '../../assets/img/logo.png'
import './welcome.css'

export const Welcome: React.FC = () => {
    return (
        <div className='w-3/5 mx-auto'>
            <nav className='flex items-center h-32'>
                <div className='w-10 h-10'>
                    <img src={logo} alt="" className='w-full h-full' />
                </div>
                <div className='flex-1'></div>
                <div className='flex gap-7 font-medium text-sm'>
                    <div className="flex flex-col" id='menu-item-1'>
                        <a href="" className='py-1'>Features</a>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-1'></div>
                    </div>
                    <div className="flex flex-col" id='menu-item-2'>
                        <a href="" className='py-1'>Desktop App</a>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-2'></div>
                    </div>
                    <div className="flex flex-col" id='menu-item-3'>
                        <a href="" className='py-1'>Privacy and Safety</a>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-3'></div>
                    </div>
                    <div className="flex flex-col" id='menu-item-4'>
                        <a href="" className='py-1'>For Developers</a>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-4'></div>
                    </div>
                </div>
            </nav>
            <main className='flex'>
                <div className='w-1/2'>
                    <div className="w-3/4">
                        <p className='py-4 mb-4 text-7xl font-medium bg-gradient-to-r from-[#0088FF] via-[#A033FF] to-[#ff5c87] to-60% bg-clip-text text-transparent'>
                            Hang out anytime, anywhere
                        </p>
                        <p className='text-gray-600 mb-8'>
                            Messenger makes it easy and fun to stay close to your favorite people
                        </p>
                        <form className='w-9/12'>
                            <input type="text" name="username" id="username" placeholder='Email or phone number' className='bg-gray-100 w-full py-2 px-4 rounded-xl mb-4' />
                            <input type="password" name="password" id="password" placeholder='Password' className='bg-gray-100 w-full py-2 px-4 rounded-xl mb-8' />
                            <div className='flex'>
                                <input type="button" value="Log In" className='px-6 py-3 font-medium bg-[#0088FF] text-white rounded-full' />

                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2 bg-blue-500'></div>
            </main>
        </div>
    )
}
