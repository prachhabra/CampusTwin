// // import React, {useState} from "react";
// // import { use } from "react";
// // const intialClubs =[
// //     {id:1,
// //      name: "FlareOn",
// //      category: "Filmaking & development",
// //      president: "Sameer",
// //      members: 50,
// //      status: "Active",
// //     },
// //     {
// //         id: 2,
// //         name: "CreoAwave",
// //         president: "Sunanya Sharma",
// //         category: "Content Creation",
// //         members: 45,
// //         status: "Active",
// //     },
// //     {
// //         id: 3,
// //         name: "synergy",
// //         president: "Priyanka Thakur",
// //         category: "Dayscholar",
// //         members: 384,
// //         status: "Active",
// //     },
// //     {
// //         id: 4,
// //         name: "IEEE",
// //         president: "Sanya Vohra",
// //         category: "Tech",
// //         members: 500,
// //         status: "Active",
// //     },
// // ];
// // export default function AdminClubs(){
// //     const [clubs, setClubs] = useState(intialClubs);
// //     const [search,setSearch] = useState("");
// //     const[showForm, setshowForm] = useState(false);
// //     const [editingClub, setEditingClub] = useState(null);
// //     const [FormData, setFormData] = useState({
// //         name: "",
// //         category: "",
// //         president: "",
// //         members: "",
// //         status: "Active",
// //     });
// //     const handleChange = (e) =>{
// //         setFormData({
// //             ...FormData,[e.target.name]:e.target.value,
// //         });
// //     };
// //     const handleAddClub = ()=>{
// //         setEditingClub(null);
// //         setFormData({
// //             name: "",
// //         category: "",
// //         president: "",
// //         members: "",
// //         status: "Active",
// //         });
// //         setshowForm(true);
// //     };
// //     const handleEdit = ()=>{
// //         setEditingClub(null);
// //         setFormData({
// //             name: club.name,
// //         category: club.category,
// //         president: club.president,
// //         members: club.members,
// //         status: club.status,
// //         });
// //         setshowForm(true);
// //     };
// //     const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (
// //       !formData.name ||
// //       !formData.category ||
// //       !formData.president ||
// //       !formData.members
// //     ) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     if (editingClub) {
// //       // Update existing club
// //       setClubs(
// //         clubs.map((club) =>
// //           club.id === editingClub.id
// //             ? {
// //                 ...club,
// //                 ...formData,
// //                 members: Number(formData.members),
// //               }
// //             : club
// //         )
// //       );

// //       alert("Club updated successfully!");
// //     } else {
// //       // Create new club
// //       const newClub = {
// //         id: Date.now(),
// //         ...formData,
// //         members: Number(formData.members),
// //       };

// //       setClubs([...clubs, newClub]);

// //       alert("Club added successfully!");
// //     }

// //     setShowForm(false);
// //   };

// //   // Delete club
// //   const handleDelete = (id) => {
// //     const confirmDelete = window.confirm(
// //       "Are you sure you want to delete this club?"
// //     );

// //     if (!confirmDelete) return;

// //     setClubs(clubs.filter((club) => club.id !== id));

// //     alert("Club deleted successfully!");
// //   };

// //   // Search clubs
// //   const filteredClubs = clubs.filter((club) => {
// //     const searchText = search.toLowerCase();

// //     return (
// //       club.name.toLowerCase().includes(searchText) ||
// //       club.category.toLowerCase().includes(searchText) ||
// //       club.president.toLowerCase().includes(searchText)
// //     );
// //   });

// //   return (
// //     <div className="page-container">

// //       {/* Header */}
// //       <div className="admin-page-header">
// //         <div>
// //           <h1>🎭 Club Management</h1>

// //           <p className="page-subtitle">
// //             Manage all student clubs and societies
// //           </p>
// //         </div>

// //         <button onClick={handleAddClub}>
// //           + Add Club
// //         </button>
// //       </div>

// //       {/* Statistics */}
// //       <div className="card-grid">

// //         <div className="dashboard-card">
// //           <h3>Total Clubs</h3>
// //           <div className="big-number">
// //             {clubs.length}
// //           </div>
// //         </div>
// //         <div className="dashboard-card">
// //           <h3>Categories</h3>
// //           <div className="big-number">
// //             {new Set(clubs.map((club) => club.category)).size}
// //           </div>
// //         </div>

// //       </div>

// //       {/* Search */}
// //       <div className="dashboard-card">

// //         <input
// //           type="text"
// //           placeholder="🔍 Search club, category or president..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //       </div>

// //       {/* Clubs Table */}
// //       <div className="dashboard-card">

// //         <h2>All Clubs</h2>

// //         <div className="table-container">

// //           <table>

// //             <thead>
// //               <tr>
// //                 <th>Club</th>
// //                 <th>Category</th>
// //                 <th>President</th>
// //                 <th>Members</th>
// //                 <th>Status</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>

// //             <tbody>

// //               {filteredClubs.length > 0 ? (

// //                 filteredClubs.map((club) => (

// //                   <tr key={club.id}>

// //                     <td>
// //                       <strong>{club.name}</strong>
// //                     </td>

// //                     <td>
// //                       {club.category}
// //                     </td>

// //                     <td>
// //                       {club.president}
// //                     </td>

// //                     <td>
// //                       {club.members}
// //                     </td>

// //                     <td>
// //                       <span className="badge">
// //                         {club.status}
// //                       </span>
// //                     </td>

// //                     <td>

// //                       <button
// //                         onClick={() => handleEdit(club)}
// //                       >
// //                         Edit
// //                       </button>

// //                       <button
// //                         onClick={() => handleDelete(club.id)}
// //                         style={{
// //                           marginLeft: "8px",
// //                           background: "#dc2626",
// //                         }}
// //                       >
// //                         Delete
// //                       </button>

// //                     </td>

// //                   </tr>

// //                 ))

// //               ) : (

// //                 <tr>
// //                   <td colSpan="6">
// //                     No clubs found.
// //                   </td>
// //                 </tr>

// //               )}

// //             </tbody>

// //           </table>

// //         </div>

// //       </div>

// //       {/* Add/Edit Form */}

// //       {showForm && (

// //         <div className="modal-overlay">

// //           <div className="modal">
// //           <h2>
// //               {editingClub
// //                 ? "Edit Club"
// //                 : "Add New Club"}
// //             </h2>

// //             <form onSubmit={handleSubmit}>

// //               <label>
// //                 Club Name
// //               </label>

// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Enter club name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //               />

// //               <label>
// //                 Category
// //               </label>

// //               <input
// //                 type="text"
// //                 name="category"
// //                 placeholder="Example: Technology"
// //                 value={formData.category}
// //                 onChange={handleChange}
// //               />

// //               <label>
// //                 President
// //               </label>

// //               <input
// //                 type="text"
// //                 name="president"
// //                 placeholder="Enter president name"
// //                 value={formData.president}
// //                 onChange={handleChange}
// //               />

// //               <label>
// //                 Number of Members
// //               </label>

// //               <input
// //                 type="number"
// //                 name="members"
// //                 placeholder="Enter members"
// //                 value={formData.members}
// //                 onChange={handleChange}
// //               />

// //               <label>
// //                 Status
// //               </label>

// //               <select
// //                 name="status"
// //                 value={formData.status}
// //                 onChange={handleChange}
// //               >
// //                 <option value="Active">
// //                   Active
// //                 </option>

// //                 <option value="Inactive">
// //                   Inactive
// //                 </option>
// //               </select>

// //               <div className="modal-actions">

// //                 <button type="submit">
// //                   {editingClub
// //                     ? "Update Club"
// //                     : "Add Club"}
// //                 </button>

// //                 <button
// //                   type="button"
// //                   onClick={() => setShowForm(false)}
// //                   style={{
// //                     background: "#6b7280",
// //                     marginLeft: "10px",
// //                   }}
// //                 >
// //                   Cancel
// //                 </button>

// //               </div>

// //             </form>

// //           </div>

// //         </div>

// //       )}

// //     </div>
// //   );
// // }





// import React, { useState } from "react";

// const initialClubs = [
//   {
//     id: 1,
//     name: "FlareOn",
//     category: "Filmmaking & Development",
//     president: "Sameer",
//     members: 50,
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "CreoAwave",
//     category: "Content Creation",
//     president: "Sunanya Sharma",
//     members: 45,
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "Synergy",
//     category: "Dayscholar",
//     president: "Priyanka Thakur",
//     members: 384,
//     status: "Active",
//   },
//   {
//     id: 4,
//     name: "IEEE",
//     category: "Tech",
//     president: "Sanya Vohra",
//     members: 500,
//     status: "Active",
//   },
// ];

// export default function AdminClubs() {
//   const [clubs, setClubs] = useState(initialClubs);

//   const [search, setSearch] = useState("");

//   const [showForm, setShowForm] = useState(false);

//   const [editingClub, setEditingClub] = useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     president: "",
//     members: "",
//     status: "Active",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Add new club
//   const handleAddClub = () => {
//     setEditingClub(null);

//     setFormData({
//       name: "",
//       category: "",
//       president: "",
//       members: "",
//       status: "Active",
//     });

//     setShowForm(true);
//   };

//   // Edit club
//   const handleEdit = (club) => {
//     setEditingClub(club);

//     setFormData({
//       name: club.name,
//       category: club.category,
//       president: club.president,
//       members: club.members,
//       status: club.status,
//     });

//     setShowForm(true);
//   };

//   // Add / Update club
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.name ||
//       !formData.category ||
//       !formData.president ||
//       !formData.members
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (editingClub) {
//       // Update existing club
//       setClubs(
//         clubs.map((club) =>
//           club.id === editingClub.id
//             ? {
//                 ...club,
//                 ...formData,
//                 members: Number(formData.members),
//               }
//             : club
//         )
//       );

//       alert("Club updated successfully!");
//     } else {
//       // Add new club
//       const newClub = {
//         id: Date.now(),
//         ...formData,
//         members: Number(formData.members),
//       };

//       setClubs([...clubs, newClub]);

//       alert("Club added successfully!");
//     }

//     setShowForm(false);
//   };

//   // Delete club
//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this club?"
//     );

//     if (!confirmDelete) return;

//     setClubs(clubs.filter((club) => club.id !== id));

//     alert("Club deleted successfully!");
//   };

//   // Search clubs
//   const filteredClubs = clubs.filter((club) => {
//     const searchText = search.toLowerCase();

//     return (
//       club.name.toLowerCase().includes(searchText) ||
//       club.category.toLowerCase().includes(searchText) ||
//       club.president.toLowerCase().includes(searchText)
//     );
//   });

//   return (
//     <div className="page-container">

//       {/* Header */}
//       <div className="admin-page-header">
//         <div>
//           <h1>🎭 Club Management</h1>

//           <p className="page-subtitle">
//             Manage all student clubs and societies
//           </p>
//         </div>

//         <button onClick={handleAddClub}>
//           + Add Club
//         </button>
//       </div>

//       {/* Statistics */}
//       <div className="card-grid">

//         <div className="dashboard-card">
//           <h3>Total Clubs</h3>

//           <div className="big-number">
//             {clubs.length}
//           </div>
//         </div>

//         <div className="dashboard-card">
//           <h3>Categories</h3>

//           <div className="big-number">
//             {new Set(
//               clubs.map((club) => club.category)
//             ).size}
//           </div>
//         </div>

//         <div className="dashboard-card">
//           <h3>Active Clubs</h3>

//           <div className="big-number">
//             {
//               clubs.filter(
//                 (club) => club.status === "Active"
//               ).length
//             }
//           </div>
//         </div>

//       </div>

//       {/* Search */}
//       <div className="dashboard-card">

//         <input
//           type="text"
//           placeholder="🔍 Search club, category or president..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//       </div>

//       {/* Clubs Table */}
//       <div className="dashboard-card">

//         <h2>All Clubs</h2>

//         <div className="table-container">

//           <table>

//             <thead>
//               <tr>
//                 <th>Club</th>
//                 <th>Category</th>
//                 <th>President</th>
//                 <th>Members</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>

//               {filteredClubs.length > 0 ? (

//                 filteredClubs.map((club) => (

//                   <tr key={club.id}>

//                     <td>
//                       <strong>{club.name}</strong>
//                     </td>

//                     <td>
//                       {club.category}
//                     </td>

//                     <td>
//                       {club.president}
//                     </td>

//                     <td>
//                       {club.members}
//                     </td>

//                     <td>
//                       <span className="badge">
//                         {club.status}
//                       </span>
//                     </td>

//                     <td>

//                       <button
//                         onClick={() => handleEdit(club)}
//                       >
//                         Edit
//                       </button>

//                       <button
//                         onClick={() =>
//                           handleDelete(club.id)
//                         }
//                         style={{
//                           marginLeft: "8px",
//                           background: "#dc2626",
//                         }}
//                       >
//                         Delete
//                       </button>

//                     </td>

//                   </tr>

//                 ))

//               ) : (

//                 <tr>
//                   <td colSpan="6">
//                     No clubs found.
//                   </td>
//                 </tr>

//               )}

//             </tbody>

//           </table>

//         </div>

//       </div>

//       {/* Add/Edit Form */}
//       {showForm && (

//         <div className="modal-overlay">

//           <div className="modal">

//             <h2>
//               {editingClub
//                 ? "Edit Club"
//                 : "Add New Club"}
//             </h2>

//             <form onSubmit={handleSubmit}>

//               <label>
//                 Club Name
//               </label>

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter club name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />

//               <label>
//                 Category
//               </label>

//               <input
//                 type="text"
//                 name="category"
//                 placeholder="Example: Technology"
//                 value={formData.category}
//                 onChange={handleChange}
//               />

//               <label>
//                 President
//               </label>

//               <input
//                 type="text"
//                 name="president"
//                 placeholder="Enter president name"
//                 value={formData.president}
//                 onChange={handleChange}
//               />

//               <label>
//                 Number of Members
//               </label>

//               <input
//                 type="number"
//                 name="members"
//                 placeholder="Enter members"
//                 value={formData.members}
//                 onChange={handleChange}
//               />

//               <label>
//                 Status
//               </label>

//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//               >

//                 <option value="Active">
//                   Active
//                 </option>

//                 <option value="Inactive">
//                   Inactive
//                 </option>

//               </select>

//               <div className="modal-actions">

//                 <button type="submit">
//                   {editingClub
//                     ? "Update Club"
//                     : "Add Club"}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   style={{
//                     background: "#6b7280",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Cancel
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }





import React, { useState } from "react";

const initialClubs = [
  {
    id: 1,
    name: "FlareOn",
    category: "Filmmaking & Development",
    president: "Sameer",
    members: 50,
    status: "Active",
  },
  {
    id: 2,
    name: "CreoAwave",
    president: "Sunanya Sharma",
    category: "Content Creation",
    members: 45,
    status: "Active",
  },
  {
    id: 3,
    name: "Synergy",
    president: "Priyanka Thakur",
    category: "Dayscholar",
    members: 384,
    status: "Active",
  },
  {
    id: 4,
    name: "IEEE",
    president: "Sanya Vohra",
    category: "Tech",
    members: 500,
    status: "Active",
  },
];

export default function AdminClubs() {
  const [clubs, setClubs] = useState(initialClubs);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingClub, setEditingClub] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    president: "",
    members: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD CLUB
  const handleAddClub = () => {
    setEditingClub(null);

    setFormData({
      name: "",
      category: "",
      president: "",
      members: "",
      status: "Active",
    });

    setShowForm(true);
  };

  // EDIT CLUB
  const handleEdit = (club) => {
    setEditingClub(club);

    setFormData({
      name: club.name,
      category: club.category,
      president: club.president,
      members: club.members,
      status: club.status,
    });

    setShowForm(true);
  };

  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.president ||
      !formData.members
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingClub) {
      setClubs(
        clubs.map((club) =>
          club.id === editingClub.id
            ? {
                ...club,
                ...formData,
                members: Number(formData.members),
              }
            : club
        )
      );

      alert("Club updated successfully!");
    } else {
      const newClub = {
        id: Date.now(),
        ...formData,
        members: Number(formData.members),
      };

      setClubs([...clubs, newClub]);

      alert("Club added successfully!");
    }

    setShowForm(false);
    setEditingClub(null);
  };

  // DELETE CLUB
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this club?"
    );

    if (!confirmDelete) return;

    setClubs(clubs.filter((club) => club.id !== id));

    alert("Club deleted successfully!");
  };

  // SEARCH
  const filteredClubs = clubs.filter((club) => {
    const searchText = search.toLowerCase();

    return (
      club.name.toLowerCase().includes(searchText) ||
      club.category.toLowerCase().includes(searchText) ||
      club.president.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="page-container">

      {/* HEADER */}
      <div className="admin-page-header">
        <div>
          <h1>🎭 Club Management</h1>

          <p className="page-subtitle">
            Manage all student clubs and societies
          </p>
        </div>

        <button onClick={handleAddClub}>
          + Add Club
        </button>
      </div>

      {/* STATISTICS */}
      <div className="card-grid">

        <div className="dashboard-card">
          <h3>Total Clubs</h3>

          <div className="big-number">
            {clubs.length}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Categories</h3>

          <div className="big-number">
            {new Set(clubs.map((club) => club.category)).size}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Total Members</h3>

          <div className="big-number">
            {clubs.reduce(
              (total, club) => total + Number(club.members),
              0
            )}
          </div>
        </div>

      </div>

      {/* SEARCH */}
      <div className="dashboard-card">

        <input
          type="text"
          placeholder="🔍 Search club, category or president..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* TABLE */}
      <div className="dashboard-card">

        <h2>All Clubs</h2>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Club</th>
                <th>Category</th>
                <th>President</th>
                <th>Members</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredClubs.length > 0 ? (

                filteredClubs.map((club) => (

                  <tr key={club.id}>

                    <td>
                      <strong>{club.name}</strong>
                    </td>

                    <td>{club.category}</td>

                    <td>{club.president}</td>

                    <td>{club.members}</td>

                    <td>
                      <span className="badge">
                        {club.status}
                      </span>
                    </td>

                    <td>

                      <button
                        onClick={() => handleEdit(club)}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(club.id)}
                        style={{
                          marginLeft: "8px",
                          background: "#dc2626",
                        }}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="6">
                    No clubs found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* ADD / EDIT MODAL */}

      {showForm && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              {editingClub
                ? "Edit Club"
                : "Add New Club"}
            </h2>

            <form onSubmit={handleSubmit}>

              <label>Club Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter club name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Category</label>

              <input
                type="text"
                name="category"
                placeholder="Example: Technology"
                value={formData.category}
                onChange={handleChange}
              />

              <label>President</label>

              <input
                type="text"
                name="president"
                placeholder="Enter president name"
                value={formData.president}
                onChange={handleChange}
              />

              <label>Number of Members</label>

              <input
                type="number"
                name="members"
                placeholder="Enter members"
                value={formData.members}
                onChange={handleChange}
              />

              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="modal-actions">

                <button type="submit">
                  {editingClub
                    ? "Update Club"
                    : "Add Club"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    background: "#6b7280",
                    marginLeft: "10px",
                  }}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}