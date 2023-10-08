import React, { useEffect, useState } from "react";
import AdminMenus from "../../components/atoms/AdminMenus";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "../../components/CategoryForm";
import { Button, Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  let rowNumber = 1;

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategorys();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

  console.log(`${process.env.REACT_APP_API}/api/v1/category/get-category`);

  const getAllCategorys = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
        console.log(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong in getting category");
    }
  };

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategorys();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategorys();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  useEffect(() => {
    getAllCategorys();
  }, []);

  return (
    <>
      <div>
        <AdminMenus />
      </div>
      <div>
        <h1>CreateCategory</h1>
        <CategoryForm
          handleSubmit={handleSubmit}
          value={name}
          setValue={setName}
        />
        <div>
          {/* table start */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories?.map((categorie, index) => (
                        <tr
                          className={`border-b ${
                            index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"
                          }`}
                          key={categorie._id}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {rowNumber++}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {categorie.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <span className="flex justify-around">
                              <button
                                onClick={() => {
                                  setVisible(true);
                                  setUpdatedName(categorie.name);
                                  setSelected(categorie);
                                }}
                                className="btn bg-teal-600 p-3 rounded-sm text-white"
                              >
                                edit
                              </button>
                              <button
                                onClick={() => {
                                  handleDelete(categorie._id);
                                }}
                                className="btn bg-red-600 p-3 rounded-sm text-white"
                              >
                                delete
                              </button>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* model start */}
                <Modal
                  onCancel={() => setVisible(false)}
                  footer={null}
                  visible={visible}
                >
                  <CategoryForm
                    value={updatedName}
                    setValue={setUpdatedName}
                    handleSubmit={handleUpdate}
                  />
                </Modal>
                {/* model end */}
              </div>
            </div>
          </div>
          {/* table end */}
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
