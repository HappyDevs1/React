function Home () {
  return (
    <div className="relative bg-white">
      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[750px] lg:min-h-[500px]  xl:min-h-[700px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-24 pb-16 sm:px-6  2xl:pr-32 lg:pt-40 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className="text-4xl lg:text-3xl font-bold text-black sm:text-6xl xl:text-7xl">
                    An easy way to keep track all expenses.
                  </h1>
                  <p className="mt-6 text-base text-black sm:text-xl lg">
                    Our infyapp helps you to predict your expenses based on your
                    previous activity and shares how you should manage your
                    money.
                  </p>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-6 py-5 text-base font-semibold text-white transition-all duration-200 bg-[#2D57A2] mt-9 hover:bg-blue-400 focus:bg-blue-400"
                    role="button"
                  >
                    Get started for free
                  </a>
                </div>
                <div className="mt-8 border-t-2 border-black sm:mt-14">
                  <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                    <p className="text-base font-semibold text-black">
                      App available on
                    </p>
                    <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                      <a
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                      >
                        <img
                          className="w-auto rounded h-14 sm:h-16"
                          src="https://www.tailwindtap.com/assets/components/hero/expense-manager/app-store-button.png"
                          alt=""
                        />
                      </a>
                      <a
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                      >
                        <img
                          className="w-auto rounded h-14 sm:h-16"
                          src="https://www.tailwindtap.com/assets/components/hero/expense-manager/play-store-button.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden lg:w-[60%] xl:w-7/12 lg:order-1 mt-1">
            <div className="lg:absolute lg:bottom-0 lg:left-0">
              <img
                className="max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-2xl xl:max-w-[900px] w-400 h-400"
                src="https://pbs.twimg.com/amplify_video_thumb/1752705972601327616/img/vgrgw4Qrc55-aPmB.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;