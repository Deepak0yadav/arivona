import React from "react";
import vid2 from "../assets/arimart_vid2 (2).mp4";
import img1 from "../assets/arimart_img4.jpg";
import img2 from "../assets/arimart_img2.jpg";
const Hero = () => {
  return (
    <div className="space-y-12">
      {/* Hero Image Section */}
      <div className="relative w-full rounded-xl overflow-hidden mx-4 mt-6 shadow-lg aspect-[2/1] md:aspect-[3/1]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/377/841/non_2x/vegetables-and-fruits-arrangement-with-black-space-free-photo.jpg"
          alt="Fresh Fruits and Vegetables"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 space-y-2 md:space-y-4 text-white text-shadow-black">
          <h1 className="text-3xl md:text-5xl font-extrabold">Get Fresh</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-green-400">
            Fruits & Vegetables
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold">
            Delivered directly from farms
          </h3>
        </div>
      </div>

      {/* Hero Video Section */}
      <div className="flex flex-col gap-30 md:flex-row items-center max-w-6xl mx-auto mt-8 rounded-xl overflow-hidden  bg-white">
        {/* Video on the left */}
        <div className=" h-1/2 md:h-90">
          <video
            className="h-full object-cover"
            src={vid2}
            autoPlay
            loop
            muted
          />
        </div>

        {/* Text on the right */}
        <div className="w-full  md:w-1/2 p-6 md:p-8 text-center md:text-left space-y-3 bg-gradient-to-br from-white via-green-50 to-green-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            Arivona is Here!
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-green-600">
            India’s Group Buying Grocery Platform
          </h2>
          <p className="text-base md:text-lg text-yellow-600 font-medium">
            Fair prices for you. Better incomes for farmers.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="bg-gray-100 rounded-xl mx-4 py-12 px-4 md:px-8 shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            What is Arivona?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="Arivona Group Buying"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Arivona is revolutionizing the way Bharat buys groceries. Through
              our group-buying model, we connect communities directly with
              farmers, cutting out costly middlemen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              This means lower prices for families and better earnings for
              farmers — making grocery shopping fair, fresh, and empowering.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="bg-green-50 rounded-xl mx-4 py-12 px-4 md:px-8 shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
          At Arivona, our mission is simple — make high-quality groceries more
          affordable for every Indian household by connecting them directly with
          farmers and producers. By eliminating the middlemen, we ensure fresh,
          affordable, and sustainable produce for our customers.
        </p>
      </section>

      {/* Product Section */}
      <section
        id="products"
        className="bg-green-50 rounded-xl mx-4 py-12 px-4 md:px-8 shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md shadow-md object:cover overflow-hidden">
              <img
                src="https://www.manettas.com.au/wp-content/uploads/2025/03/Seasonal-Fruit-Veggie-Combo-Box.jpg"
                alt=""
              />
            </div>
            <h3 className="font-semibold text-lg text-green-700">
              Fruits & Vegetables
            </h3>
            <p className="text-gray-700">
              Fresh and nutritious fruits and vegetables directly from farms to
              your kitchen.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md shadow-md object:cover overflow-hidden">
              <img
                src="https://wholegrainscouncil.org/sites/default/files/thumbnails/image/Assorted-grains-nuts-beans-iStock_000019335226.jpg"
                alt=""
              />
            </div>
            <h3 className="font-semibold text-lg text-green-700">
              Grains & Pulses
            </h3>
            <p className="text-gray-700">
              Stock up on essential grains and pulses for your everyday meals.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md shadow-md object:cover overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://static.toiimg.com/thumb/msid-108571967,width-1280,height-720,resizemode-4/108571967.jpg"
                alt=""
              />
            </div>
            <h3 className="font-semibold text-lg text-green-700">
              Dairy Products
            </h3>
            <p className="text-gray-700">
              Fresh, locally sourced dairy products to complement your diet.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md shadow-md object:cover overflow-hidden ">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/5/305918577/TD/QB/IA/189263062/spices.jpg"
                alt=""
              />
            </div>
            <h3 className="font-semibold text-lg text-green-700">Spices</h3>
            <p className="text-gray-700">
              Add flavor to your dishes with our wide variety of spices, sourced
              naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Customer-Focused) */}
      <section
        id="why-choose-us"
        className="bg-green-50 rounded-xl mx-4 py-12 px-4 md:px-8 shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Arivona?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700 text-lg">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700">
                Direct Access to Fresh Produce
              </h4>
              <p>
                With Arivona, you receive fresh produce directly from the farm
                to your doorstep, ensuring quality and taste.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">
                Affordable Pricing
              </h4>
              <p>
                Enjoy group-buying discounts that make healthy and fresh food
                affordable for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">
                Support Local Farmers
              </h4>
              <p>
                By purchasing through Arivona, you're supporting local farmers
                and promoting sustainable agriculture.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700">Transparency</h4>
              <p>
                No hidden costs, no surprises — just affordable prices with
                complete transparency.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">
                Sustainable Delivery
              </h4>
              <p>
                We minimize our carbon footprint by consolidating deliveries and
                choosing eco-friendly packaging.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">Timely Delivery</h4>
              <p>
                Get your groceries delivered at your convenience — ensuring you
                have fresh food when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section
        id="app"
        className="bg-green-50 rounded-xl mx-4 py-12 px-4 md:px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={img2}
              alt="Arivona App Preview"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Download Our App
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the ease of getting fresh fruits and vegetables right
              from your phone. With just a few taps, place your order and enjoy
              doorstep delivery. Join the Arivona community today and support
              local farmers while saving more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
