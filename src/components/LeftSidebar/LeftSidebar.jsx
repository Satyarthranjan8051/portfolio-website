const LeftSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col bg-navbar text-white w-48 min-h-screen p-4 border-r border-gray-800/60">
      {/* Add sidebar navigation or content here */}
      <div className="text-lg font-semibold mb-4">Sidebar</div>
      <ul className="flex flex-col gap-2 text-sm">
        <li className="hover:text-yellow-400 cursor-pointer">Profile</li>
        <li className="hover:text-yellow-400 cursor-pointer">Skills</li>
        <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
