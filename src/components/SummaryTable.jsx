const SummaryTable = ({ data }) => {
  return (
    <div>
      <h4 className="text-center my-5">Summery of the provided data</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cust State</th>
            <th scope="col">Cust Pin</th>
            <th scope="col">Total DPD</th>
            <th scope="col">Count of Records</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record, ind) => (
            <tr key={ind}>
              <th scope="row">{record["Cust State"]}</th>
              <td>{record["Cust Pin"]}</td>
              <td>{record["Total DPD"]}</td>
              <td>{record["Count of Records"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
