import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto  grow p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3 lg:w-1/4 rounded-lg p-6 shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
            <p className="text-lg text-gray-600 mb-4">johndoe@example.com</p>
            <button className="bg-red-500 text-white hover:text-red-600 w-full rounded px-4 py-2">
              Logout
            </button>
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
