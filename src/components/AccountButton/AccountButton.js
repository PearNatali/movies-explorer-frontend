import React from 'react';
import { Link } from "react-router-dom";
import './AccountButton.css';

function AccountButton({ classPlus }) {
    return(
        <Link to='/profile' className={`navigation__account-info navigation__account-info_${classPlus}`}>
            Аккаунт
          </Link>
    )
}

export default AccountButton