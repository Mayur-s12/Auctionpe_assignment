import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CustomizedTable from "../../components/Table";
import axios from "axios";
import { BASE_URL } from "../../config/apis";
import { token } from "../../utils";
import "./index.css";
import BasicModal from "../../components/Modal";
import CustomizedModalTable from "../../components/Modal-table";

const columns = ["Session Id", "Start Time", "End Time", "Actions", "History"];

const pageSize = 20;

const UserDashboard = () => {
  const [rowsData, setRowsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setDataCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

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
  }, [currentPage, rowsData]);

  const pagesCount = Math.ceil(count / pageSize);

  const handleViewClick = (session) => {
    setSelectedSession(session);
    setModalOpen(true);
  };

  return (
    <div>
      <Header />
      <CustomizedTable
        rowsData={rowsData}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
        onViewClick={handleViewClick}
      />
      <BasicModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <CustomizedModalTable
          rowsData={selectedSession ? selectedSession.actions : []}
          columns={["Action ID", "Action Type", "Timestamp"]}
        />
      </BasicModal>
    </div>
  );
};

export default UserDashboard;
