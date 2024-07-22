import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import { toast } from "react-toastify";
import axios from "axios";
import { config, url } from "../api";
import { t } from "i18next";
import DeleteModal from "../product/deleteModal";
import { Input } from "react-select/animated";
import ReactPaginate from "react-paginate";
import { useStateManager } from "react-select";

const Result = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [deleteCategoryId, setDeleteCategodyId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addCategoryData, setAddCategory] = useState({
    minKg: 0,
    maxKg: 0,
    priceCube: 0,
  });

  const getContact = async (page) => {
    try {
      const { data } = await axios.get(
        `${url}category?page=${page}&size=10`,
        config
      );
      setData(data.body);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClick = (e) => {
    getContact(e.selected);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${url}category?id=${deleteCategoryId}`, config);
      getContact(0);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addCategory = async () => {
    try {
      const { data } = await axios.post(
        `${url}category`,
        addCategoryData,
        config
      );
      getContact(0);
      toast.success(data.message);
      setAddModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editCategory = async () => {
    try {
      const { data } = await axios.put(
        `${url}category?id=${category}`,
        addCategoryData,
        config
      );
      getContact(0);
      toast.success(data.message);
      setEditModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getContact(0);
  }, []);

  return (
    <>
      <NavBar result={"border-b-red-600 border-b text-slate-900"} />
      <div className="background flex flex-col items-center min-h-screen py-20 px-10 mx-auto">
        <button
          onClick={() => setAddModal(!addModal)}
          className="bg-green-700 tex-white  px-5 py-2 text-white rounded-lg"
        >
          {t("add")}
        </button>
        <table className="w-2/4 my-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                №
              </th>
              <th scope="col" className="py-3">
                {t("priceCargo")}
              </th>
              <th scope="col" className="py-3">
                {t("priceKub")}
              </th>
              <th colSpan={2} scope="col" className="py-3">
                {t("action")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-center rounded-b-2xl text-lg">
            {data.object &&
              data.object.map((item, i) => (
                <tr key={i} className="border-b">
                  <td scope="col" className="px-6 py-3">
                    {item.id}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.minKg} - {item.maxKg} kg
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.priceCube}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setCategory(item.id);
                        setEditModal(!editModal);
                      }}
                      className="px-4 py-2 rounded-xl bg-yellow-500 text-white"
                    >
                      {t("edit")}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setDeleteCategodyId(item.id);
                        setDeleteModal(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-red-500 text-white"
                    >
                      {t("delete")}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <DeleteModal
          isOpen={deleteModal}
          onClose={setDeleteModal}
          deleteProject={handleDelete}
          getProject={getContact}
        />
        {addModal && (
          <div className="fixed z-50 sm:px-0 px-5 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="zoom-modal relative top-20 mx-auto p-5 border sm:w-96 w-full shadow-lg rounded-md bg-white">
              <div>
                <div>
                  <input
                    className="outline-none w-full border rounded-lg px-3 py-2"
                    type="number"
                    placeholder="Min kg"
                    onChange={(e) =>
                      setAddCategory({
                        ...addCategoryData,
                        minKg: e.target.value,
                      })
                    }
                  />
                  <input
                    className="outline-none w-full border rounded-lg px-3 py-2 my-4"
                    type="number"
                    placeholder="Max kg"
                    onChange={(e) =>
                      setAddCategory({
                        ...addCategoryData,
                        maxKg: e.target.value,
                      })
                    }
                  />
                  <input
                    className="outline-none w-full border rounded-lg px-3 py-2"
                    type="number"
                    placeholder="Cube"
                    onChange={(e) =>
                      setAddCategory({
                        ...addCategoryData,
                        priceCube: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex justify-between mt-7">
                  <button
                    type="button"
                    onClick={() => setAddModal(!addModal)}
                    className="btm-close"
                  >
                    {t("close")}
                  </button>
                  <button onClick={addCategory} className="btmn ">
                    {t("add")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {editModal && (
          <div className="fixed z-50 sm:px-0 px-5 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="zoom-modal relative top-20 mx-auto p-5 border sm:w-96 w-full shadow-lg rounded-md bg-white">
              <div>
                <div>
                  <input
                    className="outline-none w-full border rounded-lg px-3 py-2"
                    type="number"
                    placeholder="Min kg"
                    onChange={(e) =>
                      setAddCategory({
                        ...addCategoryData,
                        minKg: e.target.value,
                      })
                    }
                  />
                  <input
                    className="outline-none w-full border rounded-lg px-3 py-2 my-4"
                    type="number"
                    placeholder="Max kg"
                    onChange={(e) =>
                      setAddCategory({
                        ...addCategoryData,
                        maxKg: e.target.value,
                      })
                    }
                  />
                  <input
                    className="outline-none w-full border rounded-lg px-3 py-2"
                    type="number"
                    placeholder="Cube"
                    onChange={(e) =>
                      setAddCategory({
                        ...addCategoryData,
                        priceCube: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex justify-between mt-7">
                  <button
                    type="button"
                    onClick={() => setEditModal(!editModal)}
                    className="btm-close"
                  >
                    {t("close")}
                  </button>
                  <button onClick={editCategory} className="btmn ">
                    {t("edit")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <ReactPaginate
          className="navigation"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
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

export default Result;
