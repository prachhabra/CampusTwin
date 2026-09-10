// function StatCard({
//   icon,
//   title,
//   value,
//   description,
// }) {
//   return (
//     <div className="stat-card">

//       <div className="stat-icon">
//         {icon}
//       </div>

//       <div>

//         <p className="stat-title">
//           {title}
//         </p>

//         <h2>
//           {value}
//         </h2>

//         {description && (
//           <span className="stat-description">
//             {description}
//           </span>
//         )}

//       </div>

//     </div>
//   );
// }

// export default StatCard;




function StatCard({ icon, title, value, description, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <p className="stat-title">{title}</p>
        <h2 className="stat-value">{value}</h2>
        {description && <small className="stat-description">{description}</small>}
        {trend && <span className="stat-trend">{trend}</span>}
      </div>
    </div>
  );
}
export default StatCard;
