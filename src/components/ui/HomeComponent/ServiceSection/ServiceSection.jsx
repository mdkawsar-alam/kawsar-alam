"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { services } from '@/index';

const Services = () => {
  const list = services;

  return (
    <section className="bg-[#09101A]" id="services">
      <Container>
        <div className="mx-auto py-10">
          <h2 className=" font-semibold text-2xl text-center font-serif py-3 lg:text-3xl text-gray-50">
            SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5  ">
            {list.map((service, index) => (
              <div key={index} className="w-full   p-4">
                <div className="bg-[#1B2A40] shadow-md  rounded-md p-5">
                  <h3 className="text-gray-100 font-bold pb-4" >{service.title}</h3>
                  <p className="text-gray-200 font-serif">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            {list.length === 0 && (
              <div className="col-span-full text-center text-gray-400">No services configured yet.</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
