export default function LoginPage(){
    return(

        <div className="w-full h-screen bg-[url(/login-bg-img.jpg)] bg-cover bg-center flex">
        {/* Left Section (Hidden on Mobile) */}
        <div className="hidden md:block lg:w-[50%] h-screen"></div>
      
        {/* Right Section (Login Form) */}
        <div className="w-full md:w-[50%] h-screen flex justify-center items-center">
          <div className="w-[90%] sm:w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
            {/* Email Input */}
            <input
              type="email"
              className="w-[90%] sm:w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
              placeholder="email"
            />
            {/* Password Input */}
            <input
              type="password"
              className="w-[90%] sm:w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
              placeholder="password"
            />
            {/* Login Button */}
            <a
              href="/admin"
              className="w-[90%] sm:w-[400px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer m-[5px] flex justify-center items-center"
            >
              login
            </a>
          </div>
        </div>
      </div>
    )
}