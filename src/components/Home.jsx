import { useForm } from "react-hook-form";
import "../css/home.css";
import client from "../api/client";
import { useState } from "react";
import SummaryTable from "./SummaryTable";
const Home = () => {
  const { register, handleSubmit } = useForm();

  const [summaryData, setSummaryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    try {
      setIsLoading(true);
      const response = await client.post("/api/process/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSummaryData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container">
      <div className="mt-5">
        <h1 className="title">Welcome to the DevTest</h1>
        <p className="text-center sub-title">
          In devtest you can upload your excel file and get the summary in just
          one click.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="formFileLg" className="form-label">
            Please select your excel file
          </label>
          <input
            className="form-control form-control-lg"
            id="formFile"
            type="file"
            required
            {...register("file")}
          />
        </div>
        {!isLoading && (
          <button className="btn btn-dark mt-2" type="submit">
            Submit
          </button>
        )}
        {isLoading && (
          <button className="btn btn-dark mt-2" disabled>
            Please wait...
          </button>
        )}
      </form>
      {summaryData.length > 0 && <SummaryTable data={summaryData} />}
    </section>
  );
};

export default Home;
