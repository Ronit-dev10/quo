import { useState } from "react";

export default function Index() {
  const [selectedOption, setSelectedOption] = useState<"buying" | "selling" | null>(null);

  return (
    <div className="min-h-screen bg-[rgba(242,242,247,0.56)]">
      {/* Header */}
      <header className="bg-white px-8 md:px-16 py-7 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="95"
            height="54"
            viewBox="0 0 95 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 md:h-14 w-auto"
          >
            <path
              d="M19.748 42.947L26.1728 49.5012C26.9331 50.2768 26.3866 51.5934 25.3032 51.5934H12.7862C11.717 51.5934 11.1658 50.3103 11.8928 49.5204L17.985 42.9662C18.4602 42.4587 19.2585 42.4443 19.7432 42.9422L19.748 42.947Z"
              fill="#5D5A88"
            />
            <path
              d="M39.8273 36.2744H27.5123C26.6655 36.2744 26.2415 37.3058 26.8402 37.909L42.1803 53.3638C42.3585 53.5434 42.6003 53.6443 42.8523 53.6443H55.1674C56.0141 53.6443 56.4381 52.6129 55.8394 52.0097L40.4994 36.5549C40.3211 36.3753 40.0794 36.2744 39.8273 36.2744Z"
              fill="#5D5A88"
            />
            <path
              d="M44.293 44.2184C44.9424 45.557 46.796 45.6717 47.5545 44.3927C49.9659 40.3264 52.6677 34.7595 53.3199 27.8664C53.4749 22.956 52.2976 18.096 49.9146 13.8097C47.5316 9.52337 44.0332 5.97311 39.7962 3.54115C35.5592 1.1092 30.7439 -0.11232 25.869 0.0081189C20.994 0.128558 16.244 1.58639 12.1304 4.22466C8.01677 6.86292 4.69535 10.5817 2.52376 14.9805C0.352165 19.3794 -0.587334 24.2916 -0.193585 29.1885C0.140001 33.3371 1.63055 37.3984 3.80892 40.9685C4.42402 41.9766 5.80571 42.0859 6.63384 41.2468L10.995 36.8277C11.6502 36.1638 11.7222 35.1266 11.2173 34.3406C10.0237 32.4826 9.47122 30.9961 9.26381 28.4166C9.00943 25.253 9.61639 22.0794 11.0194 19.2375C12.4223 16.3956 14.5681 13.9931 17.2257 12.2887C19.8834 10.5842 22.9521 9.64238 26.1016 9.56458C29.2511 9.48676 32.3619 10.2759 35.0993 11.8471C37.8366 13.4183 40.0968 15.7119 41.6363 18.4811C43.1758 21.2503 43.9365 24.3901 43.8363 27.5625C43.7473 30.3814 42.8138 33.6426 41.4064 36.2041C41.0836 36.7917 41.0343 37.5014 41.327 38.1048L44.293 44.2184Z"
              fill="#5D5A88"
            />
            <path
              d="M70.959 44.4961C70.959 45.9029 70.7342 47.1211 70.2846 48.1508C69.835 49.1805 69.2114 49.9999 68.4065 50.609L70.9662 52.6031L69.2839 54.1114L66.1223 51.617C65.709 51.704 65.2594 51.7402 64.7881 51.7402C63.5916 51.7402 62.5184 51.4429 61.5757 50.8556C60.633 50.2682 59.9007 49.427 59.3858 48.3393C58.871 47.2516 58.6099 45.9899 58.6027 44.5686V43.7347C58.6027 42.2845 58.8637 41.001 59.3786 39.8988C59.8934 38.7893 60.6185 37.9409 61.554 37.3535C62.4894 36.7662 63.5626 36.4689 64.7663 36.4689C65.97 36.4689 67.0722 36.7589 68.0077 37.339C68.9431 37.9192 69.6682 38.7603 70.1831 39.8553C70.6979 40.9502 70.9517 42.2192 70.959 43.6767V44.5034V44.4961ZM68.363 43.7202C68.363 42.0452 68.0512 40.7762 67.4275 39.9133C66.8039 39.0504 65.9193 38.6153 64.7663 38.6153C63.6133 38.6153 62.7867 39.0504 62.1558 39.9278C61.525 40.8052 61.1986 42.0379 61.1841 43.626V44.4961C61.1841 46.0987 61.4959 47.3532 62.1268 48.2596C62.7577 49.166 63.6423 49.6156 64.7881 49.6156C65.9338 49.6156 66.8184 49.1805 67.4348 48.3103C68.0512 47.4402 68.363 46.1712 68.363 44.4889V43.713V43.7202Z"
              fill="#5D5A88"
            />
            <path
              d="M80.045 50.4558C79.3198 51.3115 78.2829 51.7393 76.9414 51.7393C75.7449 51.7393 74.8385 51.3913 74.2221 50.6879C73.6058 49.9845 73.2939 48.9766 73.2939 47.6423V40.478H75.7739V47.6061C75.7739 49.0128 76.354 49.7162 77.5215 49.7162C78.6889 49.7162 79.5446 49.2811 79.9724 48.4182V40.478H82.4524V51.529H80.103L80.045 50.4486V50.4558Z"
              fill="#5D5A88"
            />
            <path
              d="M84.5117 45.9096C84.5117 44.8292 84.722 43.8575 85.1498 42.9873C85.5777 42.1172 86.1795 41.45 86.9554 40.986C87.7313 40.5219 88.6232 40.2826 89.6312 40.2826C91.125 40.2826 92.3359 40.7612 93.2641 41.7183C94.1995 42.6755 94.6999 43.9518 94.7724 45.5398V46.1199C94.7796 47.2149 94.5693 48.1865 94.156 49.0422C93.7427 49.8979 93.1408 50.565 92.3577 51.0363C91.5745 51.5077 90.6754 51.7397 89.6602 51.7397C88.1011 51.7397 86.8539 51.2176 85.9185 50.1807C84.9831 49.1437 84.5117 47.7587 84.5117 46.0329V45.9096ZM86.9917 46.1199C86.9917 47.2656 87.2237 48.1503 87.6951 48.7957C88.1664 49.4338 88.819 49.7601 89.6602 49.7601C90.5013 49.7601 91.1467 49.4338 91.6108 48.7812C92.0749 48.1285 92.3069 47.1714 92.3069 45.9096C92.3069 44.7929 92.0676 43.9083 91.589 43.2556C91.1105 42.603 90.4578 42.2695 89.6312 42.2695C88.8045 42.2695 88.1809 42.5885 87.7023 43.2339C87.2237 43.8792 86.9917 44.8364 86.9917 46.1127V46.1199Z"
              fill="#5D5A88"
            />
          </svg>
        </div>
        <button className="bg-[#5D5A88] text-white px-6 py-4 md:py-[18px] md:px-6 rounded-full font-bold text-sm md:text-base hover:bg-[#4a4670] transition-colors">
          Get started
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-12 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#5D5A88] mb-4">
          Master Your Next Move.
        </h1>
        <p className="text-base md:text-lg text-[#5D5A88]/70 max-w-2xl mx-auto">
          Design a winning offer strategy before you talk to a lender or a listing agent.
        </p>
      </section>

      {/* How can we help today? */}
      <section className="px-4 md:px-16 pb-12 md:pb-20">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5D5A88]/80 text-center mb-8">
            How can we help today?
          </h2>
          
          <div className="space-y-4 mb-6">
            <button className="w-full bg-[#5D5A88] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#4a4670] transition-colors">
              I want to learn how offers work
            </button>
            <button className="w-full bg-white text-[#5D5A88] py-4 px-6 rounded-xl font-medium border-2 border-[#5D5A88]/20 hover:border-[#5D5A88]/40 transition-colors">
              I have a specific property in mind
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="action"
                value="buying"
                checked={selectedOption === "buying"}
                onChange={() => setSelectedOption("buying")}
                className="w-5 h-5 text-[#5D5A88]"
              />
              <span className="text-[#5D5A88]/70">I'm just buying</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="action"
                value="selling"
                checked={selectedOption === "selling"}
                onChange={() => setSelectedOption("selling")}
                className="w-5 h-5 text-[#5D5A88]"
              />
              <span className="text-[#5D5A88]/70">I'm buying & need to sell</span>
            </label>
          </div>
        </div>
      </section>

      {/* How It will Works */}
      <section className="px-4 md:px-16 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5D5A88]/80 mb-4">
            How It will Works
          </h2>
          <p className="text-[#5D5A88]/60 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-5xl font-bold text-[#5D5A88]/20 mb-4">1</div>
            <h3 className="text-xl font-semibold text-[#5D5A88] mb-3">Strategize</h3>
            <p className="text-[#5D5A88]/60 mb-4">
              Adjust price, deposits, and terms in our risk-free sandbox.
            </p>
            <button className="text-[#5D5A88] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-5xl font-bold text-[#5D5A88]/20 mb-4">2</div>
            <h3 className="text-xl font-semibold text-[#5D5A88] mb-3">Verify</h3>
            <p className="text-[#5D5A88]/60 mb-4">
              Get property-specific insights reviewed by a real person (Jane).
            </p>
            <button className="text-[#5D5A88] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-5xl font-bold text-[#5D5A88]/20 mb-4">3</div>
            <h3 className="text-xl font-semibold text-[#5D5A88] mb-3">Execute</h3>
            <p className="text-[#5D5A88]/60 mb-4">
              Our broker prepares your legal contract for signature when you're ready.
            </p>
            <button className="text-[#5D5A88] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Upstream, not automated */}
      <section className="px-4 md:px-16 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5D5A88]/80 mb-4">
            Upstream, not automated.
          </h2>
          <p className="text-[#5D5A88]/60 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* No Advice Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-[#F1F3F7] rounded-lg flex items-center justify-center mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="6"
                  width="20"
                  height="20"
                  rx="2"
                  stroke="#5D5A88"
                  strokeWidth="2"
                />
                <path
                  d="M12 16L15 19L20 13"
                  stroke="#5D5A88"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#5D5A88] mb-3">No Advice</h3>
            <p className="text-[#5D5A88]/60 mb-4">
              We provide education and perception data, you make the decisions.
            </p>
            <button className="text-[#5D5A88] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Human Verified Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-[#F1F3F7] rounded-lg flex items-center justify-center mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="6"
                  width="20"
                  height="20"
                  rx="2"
                  stroke="#5D5A88"
                  strokeWidth="2"
                />
                <circle cx="16" cy="14" r="3" stroke="#5D5A88" strokeWidth="2" />
                <path
                  d="M12 24C12 21.7909 13.7909 20 16 20C18.2091 20 20 21.7909 20 24"
                  stroke="#5D5A88"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#5D5A88] mb-3">Human Verified</h3>
            <p className="text-[#5D5A88]/60 mb-4">
              Every offer intent is reviewed by our team to ensure market accuracy.
            </p>
            <button className="text-[#5D5A88] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-4 md:px-16 py-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="95"
              height="54"
              viewBox="0 0 95 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 md:h-12 w-auto"
            >
              <path
                d="M19.748 42.947L26.1728 49.5012C26.9331 50.2768 26.3866 51.5934 25.3032 51.5934H12.7862C11.717 51.5934 11.1658 50.3103 11.8928 49.5204L17.985 42.9662C18.4602 42.4587 19.2585 42.4443 19.7432 42.9422L19.748 42.947Z"
                fill="#5D5A88"
              />
              <path
                d="M39.8273 36.2744H27.5123C26.6655 36.2744 26.2415 37.3058 26.8402 37.909L42.1803 53.3638C42.3585 53.5434 42.6003 53.6443 42.8523 53.6443H55.1674C56.0141 53.6443 56.4381 52.6129 55.8394 52.0097L40.4994 36.5549C40.3211 36.3753 40.0794 36.2744 39.8273 36.2744Z"
                fill="#5D5A88"
              />
              <path
                d="M44.293 44.2184C44.9424 45.557 46.796 45.6717 47.5545 44.3927C49.9659 40.3264 52.6677 34.7595 53.3199 27.8664C53.4749 22.956 52.2976 18.096 49.9146 13.8097C47.5316 9.52337 44.0332 5.97311 39.7962 3.54115C35.5592 1.1092 30.7439 -0.11232 25.869 0.0081189C20.994 0.128558 16.244 1.58639 12.1304 4.22466C8.01677 6.86292 4.69535 10.5817 2.52376 14.9805C0.352165 19.3794 -0.587334 24.2916 -0.193585 29.1885C0.140001 33.3371 1.63055 37.3984 3.80892 40.9685C4.42402 41.9766 5.80571 42.0859 6.63384 41.2468L10.995 36.8277C11.6502 36.1638 11.7222 35.1266 11.2173 34.3406C10.0237 32.4826 9.47122 30.9961 9.26381 28.4166C9.00943 25.253 9.61639 22.0794 11.0194 19.2375C12.4223 16.3956 14.5681 13.9931 17.2257 12.2887C19.8834 10.5842 22.9521 9.64238 26.1016 9.56458C29.2511 9.48676 32.3619 10.2759 35.0993 11.8471C37.8366 13.4183 40.0968 15.7119 41.6363 18.4811C43.1758 21.2503 43.9365 24.3901 43.8363 27.5625C43.7473 30.3814 42.8138 33.6426 41.4064 36.2041C41.0836 36.7917 41.0343 37.5014 41.327 38.1048L44.293 44.2184Z"
                fill="#5D5A88"
              />
              <path
                d="M70.959 44.4961C70.959 45.9029 70.7342 47.1211 70.2846 48.1508C69.835 49.1805 69.2114 49.9999 68.4065 50.609L70.9662 52.6031L69.2839 54.1114L66.1223 51.617C65.709 51.704 65.2594 51.7402 64.7881 51.7402C63.5916 51.7402 62.5184 51.4429 61.5757 50.8556C60.633 50.2682 59.9007 49.427 59.3858 48.3393C58.871 47.2516 58.6099 45.9899 58.6027 44.5686V43.7347C58.6027 42.2845 58.8637 41.001 59.3786 39.8988C59.8934 38.7893 60.6185 37.9409 61.554 37.3535C62.4894 36.7662 63.5626 36.4689 64.7663 36.4689C65.97 36.4689 67.0722 36.7589 68.0077 37.339C68.9431 37.9192 69.6682 38.7603 70.1831 39.8553C70.6979 40.9502 70.9517 42.2192 70.959 43.6767V44.5034V44.4961ZM68.363 43.7202C68.363 42.0452 68.0512 40.7762 67.4275 39.9133C66.8039 39.0504 65.9193 38.6153 64.7663 38.6153C63.6133 38.6153 62.7867 39.0504 62.1558 39.9278C61.525 40.8052 61.1986 42.0379 61.1841 43.626V44.4961C61.1841 46.0987 61.4959 47.3532 62.1268 48.2596C62.7577 49.166 63.6423 49.6156 64.7881 49.6156C65.9338 49.6156 66.8184 49.1805 67.4348 48.3103C68.0512 47.4402 68.363 46.1712 68.363 44.4889V43.713V43.7202Z"
                fill="#5D5A88"
              />
              <path
                d="M80.045 50.4558C79.3198 51.3115 78.2829 51.7393 76.9414 51.7393C75.7449 51.7393 74.8385 51.3913 74.2221 50.6879C73.6058 49.9845 73.2939 48.9766 73.2939 47.6423V40.478H75.7739V47.6061C75.7739 49.0128 76.354 49.7162 77.5215 49.7162C78.6889 49.7162 79.5446 49.2811 79.9724 48.4182V40.478H82.4524V51.529H80.103L80.045 50.4486V50.4558Z"
                fill="#5D5A88"
              />
              <path
                d="M84.5117 45.9096C84.5117 44.8292 84.722 43.8575 85.1498 42.9873C85.5777 42.1172 86.1795 41.45 86.9554 40.986C87.7313 40.5219 88.6232 40.2826 89.6312 40.2826C91.125 40.2826 92.3359 40.7612 93.2641 41.7183C94.1995 42.6755 94.6999 43.9518 94.7724 45.5398V46.1199C94.7796 47.2149 94.5693 48.1865 94.156 49.0422C93.7427 49.8979 93.1408 50.565 92.3577 51.0363C91.5745 51.5077 90.6754 51.7397 89.6602 51.7397C88.1011 51.7397 86.8539 51.2176 85.9185 50.1807C84.9831 49.1437 84.5117 47.7587 84.5117 46.0329V45.9096ZM86.9917 46.1199C86.9917 47.2656 87.2237 48.1503 87.6951 48.7957C88.1664 49.4338 88.819 49.7601 89.6602 49.7601C90.5013 49.7601 91.1467 49.4338 91.6108 48.7812C92.0749 48.1285 92.3069 47.1714 92.3069 45.9096C92.3069 44.7929 92.0676 43.9083 91.589 43.2556C91.1105 42.603 90.4578 42.2695 89.6312 42.2695C88.8045 42.2695 88.1809 42.5885 87.7023 43.2339C87.2237 43.8792 86.9917 44.8364 86.9917 46.1127V46.1199Z"
                fill="#5D5A88"
              />
            </svg>
          </div>

          <div className="text-[#5D5A88]/60 text-sm">
            Copyright © 2026 QUO · All Rights Reserved
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[#5D5A88]/40 hover:text-[#5D5A88]/70 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a href="#" className="text-[#5D5A88]/40 hover:text-[#5D5A88]/70 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a href="#" className="text-[#5D5A88]/40 hover:text-[#5D5A88]/70 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </a>
            <a href="#" className="text-[#5D5A88]/40 hover:text-[#5D5A88]/70 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="#" className="text-[#5D5A88]/40 hover:text-[#5D5A88]/70 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
