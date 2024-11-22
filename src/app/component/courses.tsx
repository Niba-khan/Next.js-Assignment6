import Image from 'next/image';

export default function Courses() {
  const courseData = [
    {
      category: 'Design',
      title: 'UX/UI Design 201',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      price: '$400',
      image: '/images/course1.png',
    },
    {
      category: 'Programming',
      title: 'Introduction to Python',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      price: '$400',
      image: '/images/course2.png',
    },
    {
      category: 'Business',
      title: 'Data Analysis for Beginners',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      price: '$400',
      image: '/images/course3.png',
    },
    {
      category: 'Art',
      title: 'Art Specialization',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      price: '$400',
      image: '/images/course4.png',
    },
    {
      category: 'Law',
      title: 'Rule of Law',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      price: '$400',
      image: '/images/course5.png',
    },
    {
      category: 'Tech',
      title: 'Introduction to Webflow',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      price: '$400',
      image: '/images/course6.png',
    },
  ];

  return (
    <div className="w-full p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#000000]">Courses</h1>
        <p className="text-xl text-[#000000] mt-2">Your Ultimate Guide to learning</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-[16px] text-[16px] mt-10 mb-11">
        <h3 className="border-[#000000] border-b pb-1">Popular</h3>
        <h3>Recommended</h3>
        <h3>Best Price</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[24px]">
        {courseData.map((course, index) => (
          <div key={index} className="w-full max-w-[416px] bg-[#F7F7F7] shadow-lg overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              width={416}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <div className="flex items-center">
                <p className="text-[14px] font-semibold text-[#000000]">{course.category}</p>
                <div className="flex items-center ml-auto">
                  <span className="text-black mr-1">★</span>
                  <span className="text-sm">5.0</span>
                </div>
              </div>

              <h3 className="text-[#000000] text-[20px] sm:text-[24px] md:text-[24px] font-[700] mt-3">
                {course.title}
              </h3>

              <p className="text-[14px] sm:text-[16px] text-[#000000] mt-2">{course.description}</p>

              <div className="flex items-center justify-between mt-4">
                <button className="border-[1px] border-[#000000] w-[117px] h-[40px] rounded">
                  Enroll Now
                </button>
                <span className="text-[16px]">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-8 mb-24">
        <button className="border-[1px] border-[#000000] px-[16px] py-[8px] rounded hover:bg-black hover:text-white transition-all">
          View All Courses
        </button>
      </div>
    </div>
  );
}
