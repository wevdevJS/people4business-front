import {Avatar, CardHeader} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import moment from 'moment-timezone';
import {useNavigate} from 'react-router-dom';

type CardItemBlogProps = {
    id: number;
    title: string;
    author: string;
    date: string;
    description: string;
}
const CardItemBlog = ({id, title, date, description, author}: CardItemBlogProps) => {
    const navigate = useNavigate();

    const navigateToDetail = (id: number) => {
        navigate(`/detail/${id}?title=${title}&author=${author}&date=${date}&description=${description}`);
    }

    return (
        <div className="mb-1 justify-center cursor-pointer" onClick={() => navigateToDetail(id)} >
            <Card sx={{maxWidth: 345, width: 345, height: 200}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[200]}} aria-label="recipe">
                            {author.substring(0, 1).toUpperCase()}
                        </Avatar>
                    }
                    title={author}
                    subheader={moment(date).format('DD/MM/YYYY HH:mm:ss')}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.length > 70 ? description.substring(0, 70) + '...' : description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default CardItemBlog;
