import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import { toast } from "react-toastify";
import axios from "axios";
import { config, url } from "../api";
import ReactPaginate from "react-paginate";

const Contact = () => {
  const [data, setData] = useState([]);

  const getCategory = async (id) => {
    try {
      const { data } = await axios.get(
        `${url}contact?page=${id}&size=10`,
        config
      );
      setData(data.body);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCategory(0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="background flex flex-col min-h-screen pt-36 px-10 mx-auto">
        <table className="w-full my-10 z-50 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-center text-gray-700 uppercase bg-[#f7f9fa] rounded-lg">
            <tr>
              <th scope="col" className="px-6 py-3">
                №
              </th>
              <th scope="col" className="py-3">
                Name
              </th>
              <th scope="col" className="py-3">
                Activity
              </th>
              <th scope="col" className="py-3">
                Phone number
              </th>
              <th scope="col" className="py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-center rounded-b-2xl text-lg">
            {data.object &&
              data.object.map((item, i) => (
                <tr className="border-b">
                  <td scope="col" className="px-6 py-3">
                    {i + 1}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.name}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.activity}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.phoneNumber}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.description}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <ReactPaginate
          className="navigation"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => getCategory(e.selected)}
          pageRangeDisplayed={5}
          pageCount={data.totalPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
          nextClassName="nextBtn"
          previousClassName="prevBtn"
        />
      </div>
    </>
  );
};

export default Contact;
