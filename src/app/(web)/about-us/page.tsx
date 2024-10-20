import React from 'react';
import Image from 'next/image';

const people = [
    {
        name: 'Emily Donovan',
        role: 'Founder / CEO',
        imageUrl: '/images/img1.jpg',
    },
    {
        name: 'Leslie Alexander',
        role: 'General Manager',
        imageUrl: '/images/img2.jpg',
    },
    {
        name: 'Lucas Bennett',
        role: 'Guest Services Manager',
        imageUrl: '/images/img3.jpg',
    },
    {
        name: 'Olivia Patel',
        role: 'Head of Hospitality',
        imageUrl: '/images/img4.jpg',
    },
    {
        name: 'Jonathan Price',
        role: 'Executive Chef',
        imageUrl: '/images/img5.jpg',
    },
];

function AboutUs() {
    return (
        <>
            <section className='py-14 lg:py-24 relative z-0 bg-image bg-secondary'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center'>
                    <h1 className='max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal'>
                        Discover{' '}
                        <span className='text-primary'>Our Story</span>
                        <div className='text-primary mt-2'>(Since 2005)</div>
                    </h1>

                    <p className='max-w-sm mx-auto text-center text-base font-normal leading-7 text-white mb-9'></p>
                    <h2 className=' text-gray-700 text-2xl'>
                        Where Luxury Meets Heartfelt Hospitality
                    </h2>
                </div>
            </section>
            <section className='py-14 lg:py-24 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
                        <div className=''>
                            <Image
                                src='/images/img-9.jpg'
                                alt='About Us tailwind page'
                                width={500}
                                height={500}
                                className='max-lg:mx-auto object-cover rounded-xl'
                            />
                        </div>
                        <div className='lg:pl-[100px] flex items-center'>
                            <div className='w-full'>
                                <h2 className='font-manrope font-bold text-3xl lg:text-4xl text-primary mb-9 max-lg:text-center text-balance'>
                                    Experience Exceptional Comfort and Timeless
                                    Luxury
                                </h2>
                                <p className='font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto text-justify'>
                                    At Our hotel, we believe that a hotel stay
                                    should be more than just a place to rest—it
                                    should be a journey into comfort, elegance,
                                    and personalized care. Nestled in the heart
                                    of Colombo, our hotel combines modern luxury
                                    with timeless hospitality, offering a serene
                                    escape from the hustle and bustle. Whether
                                    you&apos;re traveling for business or
                                    leisure, we cater to your every need,
                                    ensuring an experience that exceeds
                                    expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-14 lg:py-24 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
                        <div className='order-2 lg:order-1 lg:pl-[100px] flex items-center'>
                            <div className='data w-full'>
                                <p className='font-normal text-xl leading-8 text-gray-500 text-justify max-w-2xl mx-auto'>
                                    Our beautifully appointed rooms and suites
                                    are thoughtfully designed with your comfort
                                    in mind, featuring top-tier amenities, plush
                                    bedding, and stunning views of the cityscape
                                    or tranquil surroundings. From gourmet
                                    dining that celebrates local and
                                    international flavors to our
                                    state-of-the-art wellness and fitness
                                    facilities, every aspect of your stay is
                                    designed to indulge your senses and
                                    rejuvenate your spirit.
                                </p>
                            </div>
                        </div>
                        <div className='order-1 lg:order-2'>
                            <Image
                                src='/images/img-4.jpg'
                                alt='About Us tailwind page'
                                width={500}
                                height={500}
                                className='max-lg:mx-auto object-cover rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-14 lg:py-24 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
                        <div className='img-box'>
                            <Image
                                src='/images/img-1.jpg'
                                alt='About Us tailwind page'
                                width={500}
                                height={500}
                                className='max-lg:mx-auto object-cover rounded-xl'
                            />
                        </div>
                        <div className='lg:pl-[100px] flex items-center'>
                            <div className='data w-full'>
                                <p className='font-normal text-xl leading-8 text-gray-500 text-justify max-w-2xl mx-auto'>
                                    We pride ourselves on our attention to
                                    detail and personalized service. Our
                                    dedicated team is here to anticipate your
                                    needs, whether you&apos;re planning a
                                    special event, exploring local attractions,
                                    or simply unwinding after a long day. At Our
                                    hotel, we don’t just host guests—we create
                                    lasting memories. With a perfect blend of
                                    luxury, warmth, and hospitality, our hotel
                                    promises a stay that will leave you longing
                                    to return. Discover the Our hotel
                                    difference—where every stay is crafted with
                                    passion, precision, and a personal touch. We
                                    invite you to experience the art of
                                    exceptional hospitality with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-white'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <h2 className='font-manrope text-4xl text-center text-gray-900 font-bold mb-14'>
                        Milestones of Excellence: Our Success in Numbers
                    </h2>
                    <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
                        <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
                            <div className='flex gap-5'>
                                <div className='font-manrope text-2xl font-bold text-primary'>
                                    500,000+
                                </div>
                                <div className='flex-1'>
                                    <h4 className='text-xl text-gray-900 font-semibold mb-2'>
                                        Happy Guests Served
                                    </h4>
                                    <p className='text-xs text-gray-500 leading-5'>
                                        Delivering memorable stays to travelers
                                        from around the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
                            <div className='flex gap-5'>
                                <div className='font-manrope text-2xl font-bold text-primary'>
                                    95%
                                </div>
                                <div className='flex-1'>
                                    <h4 className='text-xl text-gray-900 font-semibold mb-2'>
                                        Guest Satisfaction Rate
                                    </h4>
                                    <p className='text-xs text-gray-500 leading-5'>
                                        Proudly exceeding expectations with
                                        personalized service and attention to
                                        detail.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
                            <div className='flex gap-5'>
                                <div className='font-manrope text-2xl font-bold text-primary'>
                                    50+
                                </div>
                                <div className='flex-1'>
                                    <h4 className='text-xl text-gray-900 font-semibold mb-2'>
                                        Awards & Accolades
                                    </h4>
                                    <p className='text-xs text-gray-500 leading-5'>
                                        Recognized for excellence in
                                        hospitality, luxury, and guest
                                        experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-white py-24 sm:py-32'>
                    <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
                        <div className='max-w-2xl'>
                            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                Our Leadership
                            </h2>
                            <p className='mt-6 text-lg leading-8 text-gray-600 text-justify'>
                                At the heart of our hotel’s success is a team of
                                visionary leaders dedicated to delivering
                                exceptional guest experiences. From innovative
                                operations to world-class hospitality, our
                                leadership team brings a wealth of expertise,
                                passion, and commitment, ensuring every stay is
                                unforgettable. Meet the people who make it all
                                happen!
                            </p>
                        </div>
                        <ul
                            role='list'
                            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className='flex items-center gap-x-6'>
                                        <Image
                                            alt=''
                                            width={500}
                                            height={500}
                                            src={person.imageUrl}
                                            className='h-16 w-16 rounded-full'
                                        />
                                        <div>
                                            <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                                                {person.name}
                                            </h3>
                                            <p className='text-sm font-semibold leading-6 text-primary'>
                                                {person.role}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-14 lg:py-24 relative bg-gray-50'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
                        Reach Us Anytime for Assistance
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className=' text-center lg:text-left'>
                            <h3 className='text-xl font-semibold text-gray-800'>
                                Find Us in the Heart of Colombo
                            </h3>
                            <p className='mt-4 text-gray-600'>
                                123 Beachside Avenue,Colombo 00100,Sri Lanka
                            </p>

                            <div className=''>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31558.704170704397!2d79.8462264!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb7d43eb16f%3A0x650d170d6ff5f037!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1696537407377!5m2!1sen!2sus'
                                    loading='lazy'
                                    className='w-full h-full rounded-lg border-0'
                                />
                            </div>
                        </div>
                        <div className=' text-center lg:text-right my-auto'>
                            <h3 className='text-xl font-semibold text-gray-800'>
                                Get in Touch
                            </h3>
                            <p className='mt-4 text-gray-600'>
                                Phone:{' '}
                                <a
                                    href='tel:+94112223344'
                                    className='text-primary'>
                                    +94 11 222 3344
                                </a>
                                <br />
                                Email:{' '}
                                <a
                                    href='mailto:info@ourhotel.com'
                                    className='text-primary'>
                                    info@ourhotel.com
                                </a>
                                <br />
                                Fax: +94 11 222 3345
                            </p>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default AboutUs