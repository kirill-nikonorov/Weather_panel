import {TYPE_CONVERSION_FUNCTIONS} from './TypeConversionFunctions';
import {monitoredCitiesIds} from '../reducers/pagination/monitoredCitiesIds';

const {toSet} = TYPE_CONVERSION_FUNCTIONS;

const STRUCTURE_PATHS_WITH_NEEDED_TYPES_CONVERTERS = new Map();
STRUCTURE_PATHS_WITH_NEEDED_TYPES_CONVERTERS.set(['pagination', 'monitoredCitiesIds'], toSet);
export {STRUCTURE_PATHS_WITH_NEEDED_TYPES_CONVERTERS};

export const PROTOTYPE_OF_PERSISTING_PART_OF_STORE = {
    entities: {cities: {}},
    pagination: {monitoredCitiesIds: {}}
};
