import {Link, Route, Routes } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-3">
            <div className="w-[300px] h-screen"> 
            <aside class="w-64 bg-gray-800 text-white">
      <div class="p-6">
        <h2 class="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav class="mt-4">
        <ul>
           
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/admin/dashabord" class="flex items-center">
            <RxDashboard className="mr-5" />  Dashboard
            </Link>
          </li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/admin/users" class="flex items-center">
            <LuUsers className="mr-5" />
              User
            </Link>
          </li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <a href="#" class="flex items-center">
            <LuUsers className="mr-5" />
              Settings
            </a>
          </li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <a href="/login" class="flex items-center">
            <LuUsers className="mr-5" />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
                
            </div>
            <div className="w-[calc(100vw-300px)] h-screen bg-white rounded-lg"> 
            <Routes path='/*'>
                <Route path="/dashabord" element={<h1>Admin Dshaboard</h1>}/>
                <Route path="/users" element={<h1>Admin users</h1>}/>
                <Route path="/setting" element={<h1>Admin Setting</h1>}/>
                
            </Routes>    
            </div>
        </div>
    )
}