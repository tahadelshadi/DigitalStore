const Discount = () => {
  return (
      <div
        className="flex md:flex-row xs:flex-col gap-6 justify-between py-6 "
        id="discounter">
        <div className="flex flex-col gap-4">
          <p>I have Promocode</p>
          <input
            type="text"
            placeholder="sayhello20"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
  );
};

export default Discount;
