import { useEffect, useState } from "react";
import Profile from "./components/Profile/Profile";
import load from "./user";
import Paging from "./components/Paging/Paging";


function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [toggle, setToggle] = useState(false);



  useEffect(() => {
    load(currentPage).then((result) => {
      setUsers(result.data);
      console.log(result);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
      

    });
  }, [currentPage]);

  return (
    <div >
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        toggle={toggle}
      />

      <Profile 
      users={users} 
      toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;
