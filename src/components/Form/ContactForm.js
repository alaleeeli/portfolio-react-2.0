import { Button, Textarea, Input } from "@nextui-org/react";

export default function ContactForm() {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="relative font-custom rounded-lg bg-white p-8 shadow-lg shadow-gray-200 sm:p-12">
        <form action="https://formcarry.com/s/N8bf2zvNY_" method="POST" accept-charset="UTF-8">
          <p className="mb-6 font-semibold text-xl">Send me a message 📬</p>
          <div className="mb-4">
            <Input
              isRequired
              name="fullName"
              type="text"
              label="Full Name"
              labelPlacement="outside"
              placeholder="Your first name and last name"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              isRequired
              name="email"
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Example@example.com"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Textarea
              isRequired
              name="message"
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="w-full"
            />
            <input type="hidden" name="_gotcha" />
          </div>
          <div>
            <Button type="submit"  className="rounded-md w-full bg-gray-true-400 text-white">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}