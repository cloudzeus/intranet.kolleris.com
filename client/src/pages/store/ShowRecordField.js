import React from 'react';
import { Link } from 'react-router-dom';

const ShowRecordField = ({ source, record = {} }) => {
    return (
        <div className="d-flex align-items-center">
            <i className="fa fa-eye fa-2x text-info" />
            <Link
                to={`/products/${record.MRTL}/show`}
                className=" btn btn-link pl-2 text-info"
            >
                <span>Show</span>
            </Link>
        </div>
    );
};

export default ShowRecordField;
