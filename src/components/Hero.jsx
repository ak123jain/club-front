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
 

import React from 'react';
import { Bell, Calendar, Award, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clock from '../assets/clocktower.png';

const Hero = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [isMobile, setIsMobile] = React.useState(false);

  // Check screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkScreenSize(); // initial check
    window.addEventListener('resize', checkScreenSize); // update on resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    navigate('/sendemail', { state: { email } });
    setEmail('');
  };

  return (
    <section
      className="relative text-white px-6 py-16 md:py-24 overflow-hidden min-h-[600px] bg-black"
      style={
        isMobile
          ? {} // No image on mobile
          : {
              backgroundImage: `url(${clock})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
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
            All your campus Events. zero<span className="text-orange-400 font-semibold"> FOMO</span>
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-center">
            Tired of missing out on exciting college events? CampusLink brings every event on your campus — from tech talks to dance-offs — into one easy-to-use space.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto mb-8">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
            </div>
            <button className="group flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap">
              <span>Join the Waitlist</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </form>
        </div>

        {/* Features Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[{
            icon: <Bell className="text-orange-400 mb-4" size={28} />,
            title: 'Stay in the Loop',
            desc: 'Be the first to know when clubs post new events. No more last-minute updates or missed opportunities.'
          }, {
            icon: <Calendar className="text-orange-400 mb-4" size={28} />,
            title: 'One Platform',
            desc: 'Access all club events in one place with instant notifications and one-click event registration.'
          }, {
            icon: <Award className="text-orange-400 mb-4" size={28} />,
            title: 'Digital Certificates',
            desc: 'Earn and showcase your participation with digital credentials that enhance your professional profile.'
          }, {
            icon: <Users className="text-orange-400 mb-4" size={28} />,
            title: 'For Everyone',
            desc: 'Whether you’re organizing the next big event or just don’t want to miss it — CampusLink is built for you.'
          }].map((feature, i) => (
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
            Be part of the founding community and help shape the future of college event experiences.
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
