
function Sidebar() {
  return (
    <div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl max-w-screen">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">#</th>
                  <th className="py-2 px-4 border-b border-gray-200">Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">Role</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">1</td>
                  <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
                  <td className="py-2 px-4 border-b border-gray-200">john@example.com</td>
                  <td className="py-2 px-4 border-b border-gray-200">Admin</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">2</td>
                  <td className="py-2 px-4 border-b border-gray-200">Jane Smith</td>
                  <td className="py-2 px-4 border-b border-gray-200">jane@example.com</td>
                  <td className="py-2 px-4 border-b border-gray-200">Editor</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">3</td>
                  <td className="py-2 px-4 border-b border-gray-200">Bob Johnson</td>
                  <td className="py-2 px-4 border-b border-gray-200">bob@example.com</td>
                  <td className="py-2 px-4 border-b border-gray-200">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
