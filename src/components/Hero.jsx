// import React from 'react';
// import { Bell, Calendar, Award, Users, ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import clock from '../assets/clocktower.png';

// const Hero = () => {

//   const navigate = useNavigate();

//   const [email, setEmail] = React.useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle email submission logic here
//     console.log('Email submitted:', email);
//     navigate('/sendemail', { state: { email } }); // Navigate to the sendmail page with the email as state
//     setEmail(''); // Clear the input field after submission
//   }

//   return (
//     <section className="bg-black text-white px-6 py-16 md:py-24 relative overflow-hidden">
//       {/* Decorative lines */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         {/* Horizontal lines */}
//         <div className="h-px w-full bg-gray-400 absolute top-1/4"></div>
//         <div className="h-px w-full bg-gray-400 absolute top-2/4"></div>
//         <div className="h-px w-full bg-gray-400 absolute top-3/4"></div>

//         {/* Vertical lines */}
//         <div className="w-px h-full bg-gray-400 absolute left-1/4"></div>
//         <div className="w-px h-full bg-gray-400 absolute left-2/4"></div>
//         <div className="w-px h-full bg-gray-400 absolute left-3/4"></div>
//       </div>

//       <img src={clock} alt="" />

//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Header with modern layout */}
//         <div className="flex flex-col items-center mb-16 border-b border-gray-700 pb-8">
//           <div className="inline-block px-4 py-1 bg-blue-900 bg-opacity-40 rounded-full text-blue-400 text-sm mb-6">
//             COMING SOON
//           </div>

//           <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
//             <span className="text-gray-300">Campus</span>
//             <span className="text-blue-400">Link</span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-6 font-light">
//             Your Campus. All Events. <span className="text-blue-400">One Platform.</span>
//           </p>

//           <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
//             Tired of missing out on exciting college events? CampusLink brings every event on your campus — from tech talks to dance-offs — into one easy-to-use space.
//           </p>
//         </div>

//         <div className="max-w-md mx-auto mb-8">
//             <form className="flex flex-col sm:flex-row gap-3"  onSubmit={handleSubmit}>
//               <div className="flex-grow">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address"
//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
//                   required
//                 />
//               </div>
//               <button className="group flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap">
//                 <span>Join the Waitlist</span>
//                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//               </button>
//             </form>
//           </div>

//         {/* Features grid with modern card design */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-40 backdrop-blur-sm hover:border-orange-700 transition duration-300">
//             <Bell className="text-blue-400 mb-4" size={28} />
//             <h2 className="text-xl font-semibold mb-2">Stay in the Loop</h2>
//             <p className="text-gray-400">
//               Be the first to know when clubs post new events. No more last-minute updates or missed opportunities.
//             </p>
//           </div>

//           <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-40 backdrop-blur-sm hover:border-orange-700 transition duration-300">
//             <Calendar className="text-blue-400 mb-4" size={28} />
//             <h2 className="text-xl font-semibold mb-2">One Platform</h2>
//             <p className="text-gray-400">
//               Access all club events in one place with instant notifications and one-click event registration.
//             </p>
//           </div>

//           <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-40 backdrop-blur-sm hover:border-orange-700 transition duration-300">
//             <Award className="text-blue-400 mb-4" size={28} />
//             <h2 className="text-xl font-semibold mb-2">Digital Certificates</h2>
//             <p className="text-gray-400">
//               Earn and showcase your participation with digital credentials that enhance your professional profile.
//             </p>
//           </div>

//           <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-40 backdrop-blur-sm hover:border-orange-700 transition duration-300">
//             <Users className="text-blue-400 mb-4" size={28} />
//             <h2 className="text-xl font-semibold mb-2">For Everyone</h2>
//             <p className="text-gray-400">
//               Whether you're organizing the next big event or just don't want to miss it — CampusLink is built for you.
//             </p>
//           </div>
//         </div>

//         {/* CTA section with modern button */}
//         <div className="text-center p-8 border-t border-gray-800 pt-12">
//           <h2 className="text-2xl font-semibold mb-6">We're Launching Soon</h2>
//           <p className="text-gray-400 mb-8 max-w-lg mx-auto">
//             Be part of the founding community and help shape the future of college event experiences.
//           </p>

//           <p className="text-sm text-gray-500 mt-4 flex items-center justify-center">
//             <span className="inline-block w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
//             No spam. Just awesome updates.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { Bell, Calendar, Award, Users, ArrowRight } from "lucide-react";
// // import { useNavigate } from 'react-router-dom';
// import clock from "../assets/clocktower.png";
// import clockforphone from '../assets/clockphone.png'

// const Hero = () => {
//   // const navigate = useNavigate();
//   const [email, setEmail] = React.useState("");
//   const [isMobile, setIsMobile] = React.useState(false);
//   const [name, setName] = React.useState("");
//   const [phoneNumber, setPhoneNumber] = React.useState("");

//   // Check screen size
//   React.useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//     };

//     checkScreenSize(); // initial check
//     window.addEventListener("resize", checkScreenSize); // update on resize

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Email submitted:", email);
//     await fetch(`${import.meta.env.VITE_API_URL}/user/waitlist`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, name, phoneNumber }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Email sent successfully:", data);
//         // setAlert({
//         //   show: true,
//         //   type: 'success',
//         //   message: 'Your email has been added to the waitlist successfully!'
//         // });
//         // setLoading(false);
//       });
//     // navigate('/sendemail', { state: { email,name , phoneNumber } });
//     // setEmail('');
//   };

//   return (
//     <section
//       className={`relative text-white px-6 py-16 md:py-24 overflow-hidden min-h-[600px] bg-black ${
//         isMobile ? "border-t border-b border-white" : ""
//       }`}
//       style={
//         isMobile
//           ? {
//             backgroundImage: `url(${clockforphone})`,
//             backgroundSize: "contain", // prevents zooming in
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "top center", // adjust as needed
//           }
//       // No image on mobile
//           : {
//               backgroundImage: `url(${clock})`,
//               backgroundSize: "contain",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "left top",
//             }
//       }
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-16 border-b border-gray-700 pb-8">
//           <div className="inline-block px-4 py-1 bg-blue-900 bg-opacity-40 rounded-full text-orange-400 text-sm mb-6">
//             COMING SOON
//           </div>

//           <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
//             <span className="text-gray-300">Campus</span>
//             <span className="text-orange-400">Events</span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-6 font-light">
//             Find All your campus Events.
//             {/* <span className="text-orange-400 font-semibold"> FOMO</span> */}
//           </p>

//           <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-center">
//             Tired of missing out on exciting college events? CampusLink brings
//             every event on your campus — from tech talks to dance-offs — into
//             one easy-to-use space.
//           </p>
//         </div>

//         {/* Waitlist Form */}
//         <div className="max-w-xl mx-auto mb-10 p-6 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div className="relative">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="peer w-full px-4 pt-5 pb-2 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
//                 placeholder="Full Name"
//               />
//               <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
//                 Full Name
//               </label>
//             </div>

//             {/* Email Field */}
//             {name.length > 0 && <div className="relative">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="peer w-full px-4 pt-5 pb-2 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
//                 placeholder="Email Address"
//               />
//               <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
//                 Email Address
//               </label>
//             </div>}

//             {/* Phone Field */}
//             {email.length > 0 && <div className="relative">
//               <input
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//                 className="peer w-full px-4 pt-5 pb-2 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
//                 placeholder="Phone Number"
//               />
//               <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
//                 Phone Number
//               </label>
//             </div>}

//             {/* Submit Button */}
//             <div className="text-right flex w-full justify-center items-center">
//               <button className="group flex items-center justify-center w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap">
//                 <span>Join the Waitlist</span>
//                 <ArrowRight
//                   className="ml-2 group-hover:translate-x-1 transition-transform"
//                   size={18}
//                 />
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Features Grid with Glassmorphism */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {[
//             {
//               icon: <Bell className="text-orange-400 mb-4" size={28} />,
//               title: "Stay in the Loop",
//               desc: "Be the first to know when clubs post new events. No more last-minute updates or missed opportunities.",
//             },
//             {
//               icon: <Calendar className="text-orange-400 mb-4" size={28} />,
//               title: "One Platform",
//               desc: "Access all club events in one place with instant notifications and one-click event registration.",
//             },
//             {
//               icon: <Award className="text-orange-400 mb-4" size={28} />,
//               title: "Digital Certificates",
//               desc: "Earn and showcase your participation with digital credentials that enhance your professional profile.",
//             },
//             {
//               icon: <Users className="text-orange-400 mb-4" size={28} />,
//               title: "For Everyone",
//               desc: "Whether you’re organizing the next big event or just don’t want to miss it — CampusLink is built for you.",
//             },
//           ].map((feature, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition duration-300 hover:border-orange-500"
//             >
//               {feature.icon}
//               <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
//               <p className="text-gray-300">{feature.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Footer */}
//         <div className="text-center p-8 border-t border-gray-800 pt-12">
//           <h2 className="text-2xl font-semibold mb-6">We're Launching Soon</h2>
//           <p className="text-gray-400 mb-8 max-w-lg mx-auto">
//             Be part of the founding community and help shape the future of
//             college event experiences.
//           </p>
//           <p className="text-sm text-gray-500 mt-4 flex items-center justify-center">
//             <span className="inline-block w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
//             No spam. Just awesome updates.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from "react";
import { Bell, Calendar, Award, Users, ArrowRight, Loader2, Check } from "lucide-react";
// import { useNavigate } from 'react-router-dom';
import clock from "../assets/clocktower.png";
import clockforphone from '../assets/clockphone.png'

const Hero = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // Check screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize); // update on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Check if form is valid
  const isFormValid = name.trim() !== "" && email.trim() !== "" && phoneNumber.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid || isLoading) return;
    
    setIsLoading(true);
    setSuccess(false);
    
    try {
      console.log("Submitting:", { email, name, phoneNumber });
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, phoneNumber }),
      });
      
      const data = await response.json();
      console.log("API response:", data);
      
      if (response.status === 201) {
        setSuccess(true);
        // Optional: clear the form
        // setEmail("");
        // setName("");
        // setPhoneNumber("");
      } else {
        // Handle non-success status
        console.error("Submission failed:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`relative text-white px-6 py-16 md:py-24 overflow-hidden min-h-[600px] bg-black ${
        isMobile ? "border-t border-b border-white" : ""
      }`}
      style={
        isMobile
          ? {
              backgroundImage: `url(${clockforphone})`,
              backgroundSize: "contain", // prevents zooming in
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center", // adjust as needed
            }
          : {
              backgroundImage: `url(${clock})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top",
            }
      }
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 border-b border-gray-700 pb-8">
          <div className="inline-block px-4 py-1 bg-blue-900 bg-opacity-40 rounded-full text-orange-400 text-sm mb-6">
            COMING SOON
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gray-300">Campus</span>
            <span className="text-orange-400">Events</span>
          </h1>

          <p className="text-xl md:text-2xl mb-6 font-light">
            Find All your campus Events.
            {/* <span className="text-orange-400 font-semibold"> FOMO</span> */}
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-center">
            Tired of missing out on exciting college events? CampusLink brings
            every event on your campus — from tech talks to dance-offs — into
            one easy-to-use space.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-xl mx-auto mb-10 p-6 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
          {success ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="bg-green-500 rounded-full p-3 mb-4">
                <Check size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
              <p className="text-gray-300 mb-4">You're now on our waitlist. We'll notify you when we launch!</p>
              <button 
                onClick={() => setSuccess(false)}
                className="text-sm text-orange-400 hover:text-orange-300 underline mt-4"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="peer w-full px-4 pt-5 pb-2 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
                  placeholder="Full Name"
                />
                <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
                  Full Name
                </label>
              </div>

              {/* Email Field */}
              {name.length> 0 && <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="peer w-full px-4 pt-5 pb-2 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
                  placeholder="Email Address"
                />
                <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
                  Email Address
                </label>
              </div>}

              {/* Phone Field */}
              {email.length > 0 && <div className="relative">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="peer w-full px-4 pt-5 pb-2 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
                  placeholder="Phone Number"
                />
                <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
                  Phone Number
                </label>
              </div>}

              {/* Submit Button */}
              <div className="text-right flex w-full justify-center items-center">
                <button 
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`group flex items-center justify-center w-full sm:w-auto ${
                    isFormValid && !isLoading 
                      ? "bg-orange-600 hover:bg-orange-700" 
                      : "bg-gray-600 cursor-not-allowed"
                  } text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Features Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: <Bell className="text-orange-400 mb-4" size={28} />,
              title: "Stay in the Loop",
              desc: "Be the first to know when clubs post new events. No more last-minute updates or missed opportunities.",
            },
            {
              icon: <Calendar className="text-orange-400 mb-4" size={28} />,
              title: "One Platform",
              desc: "Access all club events in one place with instant notifications and one-click event registration.",
            },
            {
              icon: <Award className="text-orange-400 mb-4" size={28} />,
              title: "Digital Certificates",
              desc: "Earn and showcase your participation with digital credentials that enhance your professional profile.",
            },
            {
              icon: <Users className="text-orange-400 mb-4" size={28} />,
              title: "For Everyone",
              desc: "Whether you're organizing the next big event or just don't want to miss it — CampusLink is built for you.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition duration-300 hover:border-orange-500"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center p-8 border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-semibold mb-6">We're Launching Soon</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Be part of the founding community and help shape the future of
            college event experiences.
          </p>
          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center">
            <span className="inline-block w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
            No spam. Just awesome updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;