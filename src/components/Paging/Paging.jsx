const Paging = ({ currentPage, totalPages, setCurrentPage, toggle }) => {

    const label = currentPage === totalPages ? 'Previous' : 'Next';
 

    const handlePage = () => {
      let newPage = null;
      if (currentPage === totalPages) {
        newPage = currentPage - 1;
      } else {
        newPage = currentPage + 1;
      }
        setCurrentPage(newPage);
    }
  
    if(!toggle) {
      return (
        <>
          <div className="container">
            <button className='btn btn-success mt-3' onClick={handlePage}>{label}</button>
          </div>
        </>
      )
    }
  }
  
  export default Paging
  