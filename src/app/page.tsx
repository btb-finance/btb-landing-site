import Footer from "@/components/Footer";
import Image from "next/image";
import "./globals.css"
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center ">


        <header className="p-4  text-white text-center w-full fixed top-0 left-0">
          Header
        </header>


        <main className=" color1 flex-1 p-4 mt-16 mb-16 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Section 1</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu, a varius libero.
              Nullam sit amet nisl ac elit commodo pellentesque vel sed odio.
            </p>
            <p>
              Donec a diam ac leo egestas iaculis. Suspendisse potenti. Nam vel interdum velit. Sed eget orci vel ligula
              bibendum venenatis at in quam.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Section 2</h2>
            <p className="mb-4">
              Curabitur pharetra eros ut ligula fermentum, nec vulputate lectus dictum. Integer aliquam, tortor eu gravida
              facilisis, lorem orci tempor turpis, in vestibulum urna arcu in ante.
            </p>
            <p>
              Integer eget venenatis nisi. Nulla facilisi. Phasellus euismod enim non dui pharetra, nec bibendum elit
              gravida. Nam non risus id risus facilisis tincidunt.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Section 3</h2>
            <p className="mb-4">
              Proin vehicula libero et nunc commodo, non eleifend est bibendum. Integer eget lectus ac libero cursus
              tincidunt sit amet eget massa.
            </p>
            <p>
              Cras non tincidunt arcu. Donec faucibus nunc ut sem congue, non posuere augue elementum. Nam tincidunt urna
              nec dui vulputate, in luctus mauris hendrerit.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Additional Content</h2>
            <p>
              Vivamus nec libero vitae erat ultricies tempor. Fusce fringilla ligula sit amet nunc tincidunt, ac malesuada
              ex gravida. Sed et varius lorem.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Additional Content</h2>
            <p>
              Vivamus nec libero vitae erat ultricies tempor. Fusce fringilla ligula sit amet nunc tincidunt, ac malesuada
              ex gravida. Sed et varius lorem.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Additional Content</h2>
            <p>
              Vivamus nec libero vitae erat ultricies tempor. Fusce fringilla ligula sit amet nunc tincidunt, ac malesuada
              ex gravida. Sed et varius lorem.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Additional Content</h2>
            <p>
              Vivamus nec libero vitae erat ultricies tempor. Fusce fringilla ligula sit amet nunc tincidunt, ac malesuada
              ex gravida. Sed et varius lorem.
            </p>
          </section>

        </main>


        <div>
          <Footer />
        </div>
      </div>



    </>
  );
}
