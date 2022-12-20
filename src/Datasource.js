export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    
    {
        field: "user", headerName: "Users", width: 230, renderCell: (params) => {
            return (
                <div>
                    <img  className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.userName}
                </div>
            )
        }


    },
    {field:"email",headerName:"Email",width:230},
    {field:"age",headerName:"Age",width:100},
    {field:"status",headerName:"Status",width:150, renderCell:(params)=>
    <div className={`cellwithStatus ${params.row.status}`}>{params.row.status}</div>},

]

export const userRows = [
    {
        id: 1,
        userName: "snow",
        img: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
        status: "active",
        email: "mohdtanveer1@gmail.com",
        age: 35

    },
    {
        id: 2,
        userName: "snow",
        img: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
        status: "inActive",
        email: "mohdtanveer123@gmail.com",
        age: 35

    },
    {
        id: 3,
        userName: "snow",
        img: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
        status: "active",
        email: "mohdtanveer145@gmail.com",
        age: 35

    },
    {
        id: 4,
        userName: "snow",
        img: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
        status: "active",
        email: "mohdtanveer187@gmail.com",
        age: 35

    },
    {
        id: 5,
        userName: "  lenciester",
        img: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
        status: "active",
        email: "mohdtanveer198@gmail.com",
        age: 35

    },


]