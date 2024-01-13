import moment from 'moment-timezone';
import {useSearchParams} from 'react-router-dom';
import Header from '../header/header';

const DetailArticle = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            <Header />
            <div className='container mx-auto w-3/6'>
                <div className="mt-10 flex flex-col rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-auto p-8 gap-3">
                    <span className='font-semibold text-4xl text-center'>{searchParams.get('title')}</span>
                    <span className='text-center text-lg'>Author: {searchParams.get('author')} </span>
                    <span className='text-center text-lg'>{moment(searchParams.get('date') ?? new Date()).format('DD/MM/YYYY HH:mm:ss')}</span>
                    <span className='text-center text-lg'>{searchParams.get('description')}</span>
                </div>
            </div>
        </>
    )
}

export default DetailArticle
