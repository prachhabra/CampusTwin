import Card from "../../components/Card";
const AdminAnalytics = () =>{
    const data=[
        {name: "Jan", value: 65},
        {name: "feb", value: 85},
        {name: "mar", value: 72},
        {name: "apr", value: 88},
        {name: "may", value: 92},
        {name: "Jun", value: 45},
    ];
    return(
        <div>
            <div className="page-header">
                <div>
                    <h1>Analysis</h1>
                    <p>Performance Overview(Cmapus)</p>
                </div>
            </div>
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">📉</div>
                    <div>
                        <p className="stat-title">Average Attendance</p>
                        <h2>84%</h2>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🎓</div>
                    <div>
                        <p className="stat-title">Passing Rate</p>
                        <h2>90%</h2>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">⭐</div>
                    <div>
                        <p className="stat-title">Student Satisfaction</p>
                        <h2>88%</h2>
                    </div>
                </div>
            </div>
            <Card title="Monthly Attendance">
                <div className="bar-chart">{data.map((item)=>(<div className="bar-wrapper" key={item.name}>
                  <div className="bar" style={{height: '$ {item.value * 2}px'}}>
                    <span>{item.value}%</span>
                  </div>
                  <small>{item.name}</small>
                </div>
                ))}
                </div>
            </Card>
        </div>
    );
};
export default AdminAnalytics;