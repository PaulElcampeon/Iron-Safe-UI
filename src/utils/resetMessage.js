import store from '../store/index';
import { updateMessage } from '../store/actions/index';

const resetMessage = () => {
    store.dispatch(updateMessage(null))
}

export default resetMessage;