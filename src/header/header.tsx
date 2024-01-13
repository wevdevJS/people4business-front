import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateArticleModal from '../components/CreateArticleModal/CreateArticleModal';
function Header() {
    const [isShow, setisShow] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }


    return (
        <div className='shadow-md w-full top-0 left-0 bg-white'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center'>
                <div className='flex text-2xl cursor-pointer items-center gap-2' onClick={navigateToHome} >
                    <span className='font-bold text-black'>El universo</span>
                </div>
                <div onClick={() => setisShow(!isShow)} className='w-7 h7 absolute right-8 top-6 cursor-pointer md:hidden' >
                    {
                        isShow ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0
                    w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isShow ? 'top-12' : 'top-[-490px]'}`}>
                    {/* <li className='font-semibold my-7 md:my-0 md:ml-8  '>
                        <a href='#' className='text-white'>Home</a>
                    </li>
                    <li className='font-semibold my-7 md:my-0 md:ml-8 '>
                        <a href='#' className='text-white'>Create</a>
                    </li> */}
                    <button onClick={handleOpen} className=' bg-black text-white py-1 px-3 md:ml-8 rounded'>Crear articulo</button>
                </ul>
            </div>
            <CreateArticleModal open={open} handleClose={handleClose} />
        </div>
    );
}

export default Header;
