import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import useAxios from '../../hooks/axios.hook';
type TypeCreateArticleModal = {
    open: boolean;
    handleClose: any;
};

const CreateArticleModal = ({open, handleClose}: TypeCreateArticleModal) => {
    const {postAxios} = useAxios();
    const [state, setState] = useState({
        title: "",
        author: "",
        date: new Date(),
        description: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        if (event instanceof Date) {
            setState((prevProps) => ({
                ...prevProps,
                date: event
            }));
            return;
        }
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await postAxios('/blog', state);
            setState({
                title: "",
                author: "",
                date: new Date(),
                description: "",
            })
            toast("Blog creado con exito")
            handleClose();
            navigate(0)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Crear nuevo articulo para el blog"}
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        <div className='grid grid-cols-2 gap-2 mt-3'>
                            <TextField
                                required
                                value={state.title}
                                onChange={handleInputChange}
                                name="title" label="Titulo" variant="outlined" />
                            <TextField
                                required
                                value={state.author}
                                onChange={handleInputChange}
                                name="author" label="Autor" variant="outlined" />
                        </div>
                        <div className='grid grid-cols-1 gap-2 mt-3'>
                            <DatePicker
                                className='border border-gray-400 rounded-md p-2 w-full'
                                selected={state.date} onChange={handleInputChange} required name='date' />
                            <TextField
                                required
                                value={state.description}
                                onChange={handleInputChange}
                                name="description" label="Contenido" variant="outlined" multiline rows={4} />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{bgcolor: 'black'}} variant='contained' onClick={handleClose}><span className='text-white'>Cancelar</span></Button>
                    <Button sx={{bgcolor: 'black'}} variant='contained' type='submit'  >
                        <span className='text-white'>Crear</span>
                    </Button>
                </DialogActions>
            </form>
        </Dialog >
    )
}

export default CreateArticleModal;
