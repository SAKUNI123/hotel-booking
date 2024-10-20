import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className='container mx-auto px-20 '>
        <Link href='/' className='font-black text-tertiary-dark  text-[30px]'>
          Ceylon Castle 
        </Link>





        
        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
          <h4 id="contact-section" className='font-semibold text-[20px] py-4'>Contact </h4>
            <p>Colombo 06, Sri Lanka</p>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>ceyloncastle.com</p>
            </div>
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>+11 1345790</p>
            </div>
            <div className='flex items-center pt-4'>
             
            </div>
          </div>


          <div className='flex-1 md:text-right'>
          <h6 className='font-semibold text-[20px] pb-4'>  <Link href='about-us/'>About Us</Link></h6>
            
            <p className='pb-4'>Get in Touch</p>
          
            <p className='pb-4'>Terms of service</p>
            <p>Customer Assistance</p>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4 font-semibold text-[20px]'>Experience</p>
            <p className='pb-4'>Wellness</p>
            <p className='pb-4'>Fitness</p>
          
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
  );
};

export default Footer;
