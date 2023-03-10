import { GET_VALUES } from "./index"

// jsons
import IT from '../utils/jobs/it.json'
import OTHER_JOBS from '../utils/jobs/other.json'

export const fetchApi = (slug) => {
    const item_id = GET_VALUES('item_id');
    const item_category = GET_VALUES('item_category');
    let data;
    
    switch (item_category) {
        case 'it':
            data = IT
            break;
        case 'other':
            data = OTHER_JOBS
            break;
        default:
            break;
    }

    for (let index = 0; index < data?.length; index++) {
        const element = data[index];
        if (element?.id === (parseInt(slug) || item_id)) {
            return element
        }

    }
}