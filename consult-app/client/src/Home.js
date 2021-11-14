import React from 'react';
import './Home.css';
import DoctorList from './DoctorList/DoctorList';
// import Search from './Search/Search';

// export const DoctorContext = React.createContext(null);

export default function Home() {
    return (
        <div className="home">
            <div className="home-left">
                <DoctorList />
            </div>

            <div className="home-right"> 
                {/* news box */}
                News API box or highlight a random "expert"?
            </div>
        </div>
    )
}
