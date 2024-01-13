import {useEffect, useState} from 'react';
import CardItemBlog from '../components/CardItemBlog/CardItemBlog';
import Search from '../components/Search/Search';
import useAxios from '../hooks/axios.hook';

const Home = () => {

    const {getAxios} = useAxios();
    const [blog, setBlog] = useState([]);
    const [blogCache, setBlogCache] = useState([]);
    const [searchBlog, setSearchBlog] = useState(null);

    useEffect(() => {
        getBlogs()
    }, []);


    const getBlogs = async () => {
        try {
            const response = await getAxios('/blog');
            setBlog(response)
            setBlogCache(response)
            localStorage.setItem('blogs', JSON.stringify(response));
        } catch (error) {
            const localStorages = localStorage.getItem('blogs');
            const blogs = JSON.parse(localStorages || '[]');
            setBlog(blogs)
            setBlogCache(blogs)
        }
    }

    const handleInputChange = (event: any) => {
        const {value} = event.target;
        var condition = new RegExp(value);
        var result = blogCache.filter(function (el: any) {
            return condition.test(el.title) || condition.test(el.author) || condition.test(el.description);
        });
        setSearchBlog(value);
        setBlog(result);
    };
    return (
        <div className='container mx-auto'>
            <div className=' flex justify-center mt-5'>
                <Search handleInputChange={handleInputChange} searchBlog={searchBlog} />
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-9">
                {
                    blog.map((item: any, index) => {
                        return <CardItemBlog
                            key={index}
                            title={item.title}
                            author={item.author}
                            date={item.date}
                            description={item.description}
                            id={item.id}
                        />
                    })
                }
            </div>
        </div>
    )
}
export default Home;
