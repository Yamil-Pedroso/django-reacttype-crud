import ok from './ok.jpg';
import login from './login.gif';

interface IImages {
    [key: string]: string;
}

const images: IImages = {
    taskDone: ok,
    login,
};

export default images;

