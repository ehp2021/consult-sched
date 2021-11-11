
import './Home.css';
import DoctorList from './DoctorList/DoctorList';
import Search from './Search/Search';

export default function Home() {
    return (
        <div className="home">
            <div className="home-left">
                <DoctorList />
            </div>

            <div className="home-right"> 
                {/* search box here */}
                <Search />
                
            </div>
        </div>
    )
}
