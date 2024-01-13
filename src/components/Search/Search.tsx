import {InputBase} from '@mui/material';
type TypeSearch = {
    searchBlog: any;
    handleInputChange: any;
};
const Search = ({searchBlog, handleInputChange}: TypeSearch) => {

    return (
        <div className='w-1/3 flex justify-evenly'>
            <InputBase
                value={searchBlog}
                onChange={handleInputChange}
                className='bg-gray-100 rounded-md'
                sx={{ml: 1, flex: 1, color: 'black', height: '40px'}}
                placeholder="Buscar un articulo"
                inputProps={{'aria-label': 'Buscar articulo', color: 'black'}}
            />
            {/* <IconButton type="button" sx={{p: '10px', color: 'black'}} aria-label="search">
                <SearchIcon />
            </IconButton> */}
        </div>
    );
}

export default Search
