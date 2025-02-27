import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "@/app/(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-4 p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none";
  const buttonCssStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105";

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full z-20 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-2xl w-11/12 max-w-md transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <div className="p-6">
          <Header name="Create New Product" className="text-2xl font-bold text-green-700 mb-4" />
          <form onSubmit={handleSubmit} className="mt-4">
            {/* PRODUCT NAME */}
            <label htmlFor="productName" className={labelCssStyles}>
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              className={inputCssStyles}
              required
            />

            {/* PRICE */}
            <label htmlFor="productPrice" className={labelCssStyles}>
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              value={formData.price}
              className={inputCssStyles}
              required
            />

            {/* STOCK QUANTITY */}
            <label htmlFor="stockQuantity" className={labelCssStyles}>
              Stock Quantity
            </label>
            <input
              type="number"
              name="stockQuantity"
              placeholder="Stock Quantity"
              onChange={handleChange}
              value={formData.stockQuantity}
              className={inputCssStyles}
              required
            />

            {/* RATING */}
            <label htmlFor="rating" className={labelCssStyles}>
              Rating
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              onChange={handleChange}
              value={formData.rating}
              className={inputCssStyles}
              required
            />

            {/* CREATE ACTIONS */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={onClose}
                type="button"
                className={`${buttonCssStyles} bg-gray-500 text-white hover:bg-gray-600`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${buttonCssStyles} bg-green-600 text-white hover:bg-green-700`}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;













// import React, { ChangeEvent, FormEvent, useState } from "react";
// import { v4 } from "uuid";
// import Header from "@/app/(components)/Header";

// type ProductFormData = {
//   name: string;
//   price: number;
//   stockQuantity: number;
//   rating: number;
// };

// type CreateProductModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onCreate: (formData: ProductFormData) => void;
// };

// const CreateProductModal = ({
//   isOpen,
//   onClose,
//   onCreate,
// }: CreateProductModalProps) => {
//   const [formData, setFormData] = useState({
//     productId: v4(),
//     name: "",
//     price: 0,
//     stockQuantity: 0,
//     rating: 0,
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]:
//         name === "price" || name === "stockQuantity" || name === "rating"
//           ? parseFloat(value)
//           : value,
//     });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onCreate(formData);
//     onClose();
//   };

//   if (!isOpen) return null;

//   const labelCssStyles = "block text-sm font-medium text-gray-700";
//   const inputCssStyles =
//     "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <Header name="Create New Product" />
//         <form onSubmit={handleSubmit} className="mt-5">
//           {/* PRODUCT NAME */}
//           <label htmlFor="productName" className={labelCssStyles}>
//             Product Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             onChange={handleChange}
//             value={formData.name}
//             className={inputCssStyles}
//             required
//           />

//           {/* PRICE */}
//           <label htmlFor="productPrice" className={labelCssStyles}>
//             Price
//           </label>
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             onChange={handleChange}
//             value={formData.price}
//             className={inputCssStyles}
//             required
//           />

//           {/* STOCK QUANTITY */}
//           <label htmlFor="stockQuantity" className={labelCssStyles}>
//             Stock Quantity
//           </label>
//           <input
//             type="number"
//             name="stockQuantity"
//             placeholder="Stock Quantity"
//             onChange={handleChange}
//             value={formData.stockQuantity}
//             className={inputCssStyles}
//             required
//           />

//           {/* RATING */}
//           <label htmlFor="rating" className={labelCssStyles}>
//             Rating
//           </label>
//           <input
//             type="number"
//             name="rating"
//             placeholder="Rating"
//             onChange={handleChange}
//             value={formData.rating}
//             className={inputCssStyles}
//             required
//           />

//           {/* CREATE ACTIONS */}
//           <button
//             type="submit"
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//           >
//             Create
//           </button>
//           <button
//             onClick={onClose}
//             type="button"
//             className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
//           >
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateProductModal;
