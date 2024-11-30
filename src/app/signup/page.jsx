"use client"
import Link from "next/link";


const signUp = () => {

  const handleRegisterSubmit = async (event) => {
    
    event.preventDefault();
    const newUser = {
      name : event.target.username.value,
      email : event.target.email.value,
      photoURL : event.target.photoURL.value,
      password : event.target.password.value
    }
    console.log(newUser);
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method : "POST",
      body: JSON.stringify(newUser),
      headers : {
        "Content-Type" : "application/json"
      }
    })
    console.log(resp);
    if(resp.ok) {
      event.target.reset();
    }
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Register</h2>

        <form onSubmit={handleRegisterSubmit} className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label htmlFor="username" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Username</label>
              <input type="text" name="username" placeholder="Enter your Username**" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
              <input type="email" name="email" placeholder="Enter your email**" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>
            <div>
              <label htmlFor="photoURL" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Profile Photo URL</label>
              <input type="text" name="photoURL" placeholder="Enter Photo URL**" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
              <input name="password" placeholder="Enter your password**" type="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <button type="submit" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              Register
            </button>
          </div>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">Already have an account? <Link href="signin" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signUp;