import { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted.");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#f8f1e7] px-6 py-24 lg:px-12"
    >

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="font-bold text-[#f5a05a]">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#36566d] md:text-5xl">
            We'd Love To
            <span className="text-[#f5a05a]">
              {" "}Hear From You
            </span>
          </h2>

          <p className="mt-6 leading-8 text-[#60778a]">
            Have questions about our programs or admission?
            Send us a message and our team will contact you.
          </p>


          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <LocationOnIcon className="text-[#f5a05a]" />
              </div>

              <div>
                <h4 className="font-bold text-[#36566d]">
                  Address
                </h4>

                <p className="text-[#60778a]">
                  6391 Elgin St. Celina, USA
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <PhoneIcon className="text-[#f5a05a]" />
              </div>

              <div>
                <h4 className="font-bold text-[#36566d]">
                  Phone
                </h4>

                <p className="text-[#60778a]">
                  +1 234 567 890
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <EmailIcon className="text-[#f5a05a]" />
              </div>

              <div>
                <h4 className="font-bold text-[#36566d]">
                  Email
                </h4>

                <p className="text-[#60778a]">
                  info@example.com
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-[35px] bg-white p-7 shadow-xl md:p-10"
        >

          <div className="grid gap-5 md:grid-cols-2">

            <input
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              placeholder="Your Name"
              className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#f5a05a]"
            />

            <input
              required
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              placeholder="Email Address"
              className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#f5a05a]"
            />

          </div>


          <input
            required
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            placeholder="Phone Number"
            className="mt-5 w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#f5a05a]"
          />


          <textarea
            required
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            placeholder="Your Message"
            rows="5"
            className="mt-5 w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#f5a05a]"
          />


          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-[#f5a05a] py-4 font-bold text-white transition hover:bg-[#e78e48]"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;