import React, { useEffect, useState } from "react";
import Genres from "../components/Genres";
import Books from "../components/Books";
import Ratings from "../components/Ratings";
import Stats from "../components/Stats";
import * as moment from 'moment';
import "../components/DataTables.css";
import Readed from "../components/Readed.js";
import Challenge from "../components/Challenge.js";
import Sidebar from "../components/Sidebar.js";
import 'flag-icon-css/css/flag-icons.min.css';
import Languages from "../components/Languages.js";
moment.locale('nl');

const Dashboard = (props) => {
    const currentyear = new Date().getFullYear();
    const [year, setYear] = useState(currentyear);
    const [showModal, setShowModal] = useState(false);
    const [readingYears, setReadingYears] = useState([]);

    const getData = async () => {
        const [data, functions] = await Promise.all([
            import("../components/Data.js"),
            import("../Functions.js")
        ])

        const getYears = await data.getReadingYears();
        setReadingYears(getYears);
        functions.initDataTable();
    }

    useEffect(() => {
        getData();
    }, [year]);

    return (
        <React.Fragment>
            <div className="topbar">
                <img className="logo" src="/static/images/logo-new.png" />

                
                <div className="chooseYear">
                    <i class="fas fa-calendar-alt"></i>
                    <select className="yearselector" value={year} onChange={(event) => setYear(event.target.value)}>
                        {readingYears.map((year, i) => {
                            return (<option key={i} value={year}>{year}</option>)
                        })}
                        {!readingYears.includes(currentyear) ? <option key={currentyear} value={currentyear}>{currentyear}</option> : ''}
                    </select>
                </div>

                <div className="topbar_right">
                    <ul>
                        <li className="currentUser"><i class="fas fa-user-circle"></i> {localStorage.getItem('name')}</li>
                    </ul>
                </div>
            </div>
            
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Books year={year} />
                        </div>

                        <div className="col-md-3">
                            <Genres year={year} />
                        </div>
                        <div className="col-md-3">
                            <Ratings year={year} />
                            <Languages year={year} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;