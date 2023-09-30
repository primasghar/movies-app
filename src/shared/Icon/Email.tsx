import {Icon} from "react-icons-kit";
import {mail2} from 'react-icons-kit/icomoon/mail2'

type Props ={
    customStyle?: string
}
const Email = ({customStyle} : Props) => {
    return (
        <div className={customStyle}>
            <Icon icon={mail2} size={20} />
        </div>
    );
};

export default Email;