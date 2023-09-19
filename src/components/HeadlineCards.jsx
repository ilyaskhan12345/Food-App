import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 " >
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-12 ">Sun's Out, BOGO's Out</p>
          <p className="px-2">8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
          className="max:h-[160px]  md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
           {/* Cards */}
           <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-12 ">New Restaurants</p>
          <p className="px-2">Daily</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
          className="max:h-[160px]  md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
          alt="/"
        />
      </div>
           {/* Cards */}
           <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-12 ">We Deliver Desserts Too </p>
          <p className="px-2">Tasty Treats</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
          className="max:h-[160px]  md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
