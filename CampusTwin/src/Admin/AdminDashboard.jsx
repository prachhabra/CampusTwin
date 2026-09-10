import StatCard from "../components/StateCard";
import Card from "../components/Card";
import { students,teachers, clubs} from "../data/mockData";
const AdminDashboard = ()=>{
    return(
        <div>
            <div className="page-header">
                <div>
                    <h1>Admin DashBoard</h1>
                    <p>Overview of the campus</p>
                </div>
            </div>
            <div className="stats-grid">
                <StatCard 
                icon="👩‍🎓" 
                title="total Students"
                value={students.length}
                description="+12 this month"
                />
               <StatCard 
                icon="🧑‍🏫" 
                title="total Teachers"
                value={teachers.length}
                description="Active"
                />
                <StatCard 
                icon="🎬" 
                title="Active Clubs"
                value={clubs.length}
                description="Campus Clubs"
                />
                <StatCard 
                icon="🚨" 
                title="Alerts"
                value={alerts.length}
                description="Needs Attention"
                />
            </div>
            <div className="dashboard-grid">
                <Card title="Campus Overview">
                    <div className="overview-list">
                        <div>
                            <span>Students</span>
                            <strong>3000</strong>
                        </div>
                        <div>
                            <span>Teachers</span>
                            <strong>1100</strong>
                        </div>
                        <div>
                            <span>Department</span>
                            <strong>4</strong>
                        </div>
                        <div>
                            <span>Clubs</span>
                            <strong>27</strong>
                        </div>
                    </div>
                </Card>
                <Card title="Recent Alerts">{alerts.map((alert)=>(
                    <div className="alert-item" key={alert.id}>
                        <strong>{alert.title}</strong>
                        <p>{alert.message}</p>
                    </div>
                ))}</Card>
            </div>
        </div>
    );
};
export default AdminDashboard;