import Card from "./Card";
import Link from "next/link";

const Work = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            image="https://plus.unsplash.com/premium_photo-1704988993995-c8451b7e67cc?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Project Five"
            link="/project5"
          />
          <Card
            image="https://plus.unsplash.com/premium_photo-1704988993995-c8451b7e67cc?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Project Four"
            link="/project5"
          />
          <Card
            image="https://plus.unsplash.com/premium_photo-1704988993995-c8451b7e67cc?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Project Three"
            link="/project5"
          />
          <Card
            image="https://plus.unsplash.com/premium_photo-1704988993995-c8451b7e67cc?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Project Two"
            link="/project5"
          />
          <Card
            image="https://plus.unsplash.com/premium_photo-1704988993995-c8451b7e67cc?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Project One"
            link="/project5"
          />
        </section>
      </div>

      <div className=" text-center my-24">
        <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-4">
          I am always looking for new opportunities and are comfortable working
          internationally.
        </p>
        <Link
          href="/ContactPage"
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};
export default Work;
