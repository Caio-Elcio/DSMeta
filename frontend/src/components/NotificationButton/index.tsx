import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/request";
import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

type Props = {
    saleId: number;
};

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        toast.info("SMS enviado com sucesso");
    });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    );
}

export default NotificationButton;