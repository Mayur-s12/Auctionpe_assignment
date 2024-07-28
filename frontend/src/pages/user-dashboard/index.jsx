import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CustomizedTable from "../../components/Table";
import axios from "axios";
import { BASE_URL } from "../../config/apis";
import { token } from "../../utils";
import "./index.css";

const columns = ["Session Id", "Start Time", "End Time", "Actions", "History"];

const pageSize = 20;

const UserDashboard = () => {
  const [rowsData, setRowsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setDataCount] = useState(0);

  useEffect(() => {
    const fetchTableData = async () => {
      const response = await axios.get(
        `${BASE_URL}/dashboard/data?page=${currentPage}&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRowsData(response.data.data);
      setDataCount(response.data.count);
    };

    fetchTableData();
  }, [currentPage]);

  const pagesCount = Math.ceil(count / pageSize);

  return (
    <div>
      <Header />
      <CustomizedTable
        rowsData={rowsData}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
      />
    </div>
  );
};

export default UserDashboard;
