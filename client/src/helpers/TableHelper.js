import * as moment from 'moment';
import {TEXTFORMAT} from "../constans/GlobalConstans";

export const TextFormat = (item, type) => {
    let answer = item;
    switch (type) {
        case TEXTFORMAT.date:
            answer = moment(item).format('DD/MM/YYYY');
            break;
        default:
            answer = item;
    }
    return answer;
};