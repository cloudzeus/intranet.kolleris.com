import * as React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../helpers/utils';

const PriceField = ({ source, record = {} }) => {
    return <span>{formatNumber(record[source])}</span>;
};

PriceField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default PriceField;
