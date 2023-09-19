import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import td from '../../assets/img/td.png'
import './welcome.css'

export const Welcome: React.FC = () => {
    return (
        <div className='w-3/5 min-h-screen mx-auto flex flex-col'>
            <nav className='flex items-center h-32'>
                <div className='w-10 h-10'>
                    <img src={logo} alt="" className='w-full h-full' />
                </div>
                <div className='flex-1'></div>
                <div className='flex gap-7 font-medium text-sm'>
                    <div className="flex flex-col" id='menu-item-1'>
                        <Link to="" className='py-1'>Features</Link>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-1'></div>
                    </div>
                    <div className="flex flex-col" id='menu-item-2'>
                        <Link to="" className='py-1'>Desktop App</Link>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-2'></div>
                    </div>
                    <div className="flex flex-col" id='menu-item-3'>
                        <Link to="" className='py-1'>Privacy and Safety</Link>
                        <div className='border-2 rounded-full border-transparent' id='menu-item-underline-3'></div>
                    </div>
                    <div className="flex flex-col" id='menu-item-4'>
                        <Link to="" className='py-1'>For Developers</Link>
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
                            <div className='flex items-center gap-6 mb-8'>
                                <button type="submit" className='px-6 py-3 font-medium bg-[#0088FF] text-white rounded-full'>Log In</button>
                                <Link to="/auth/recover" className='text-sm text-[#0088FF] font-medium underline'>Forgotten your password?</Link>
                            </div>
                            <div className='flex items-center gap-3 mb-8'>
                                <input type="checkbox" name="login-persistance" id="login-persistance" />
                                <label htmlFor='login-persistance' className='text-sm text-gray-600 -translate-y-[0.0625rem]'>Keep me signed in</label>
                            </div>
                            <Link to="" className='px-4 py-2 bg-[#0088FF] rounded-lg text-white'>Create a new account</Link>
                        </form>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={td} alt="" className='w-full h-full' />
                </div>
            </main>
            <div className="flex-1"></div>
            <footer className="flex items-center text-sm py-2">
                <div>
                    <span className="font-medium">&#9760; Gheta 2023.</span> All the logos are stolen from the internet without any permissions from the owners.
                </div>
                <div className="flex-1"></div>
                <div className='flex gap-12'>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Coolie Policy</Link>
                    <Link to="">Germs</Link>
                    <div className="flex flex-col text-gray-400 hover:text-black" id='footer-item-1'>
                        <select name="language" id="language" className='bg-transparent py-1'>
                            <option value="english" selected>English</option>
                            <option value="boo">Boo</option>
                        </select>
                        <div className='border rounded-full border-transparent' id='footer-item-underline-1'></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
