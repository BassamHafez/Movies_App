import { SubmitBtn } from "@/shared/components";

const eventTimes = [
  { value: "09.00", label: "09.00 am" },
  { value: "12.00", label: "12.00 pm" },
  { value: "15.00", label: "03.00 pm" },
  { value: "18.00", label: "06.00 pm" },
  { value: "20.45", label: "08.45 pm" },
  { value: "23.00", label: "11.00 pm" },
];

const eventSeats = [
  { value: "1", label: "One seat" },
  { value: "2", label: "Two seat" },
  { value: "3", label: "Three seat" },
  { value: "4", label: "Four seat" },
];

const BookTicketForm = () => {
  return (
    <form className="grid grid-cols-2 gap-y-16 gap-x-8 flex-wrap ">
      <div className="col-span-1 flex justify-center items-center">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent border-b-2 border-b-white w-full p-1"
          name="name"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <input
          type="tel"
          placeholder="Phone"
          className="bg-transparent border-b-2 border-b-white w-full p-1"
          name="phone"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <input
          type="text"
          placeholder="Email"
          className="bg-transparent border-b-2 border-b-white w-full p-1"
          name="email"
        />
      </div>

      <div className="col-span-1 flex justify-center items-center">
        <select
          className="select select-ghost border-b-2 border-b-white w-full p-1 text-[16px]"
          name="seats"
        >
          {eventSeats.map((seat) => (
            <option value={seat.value} key={seat.value}>
              {seat.label}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <input
          type="date"
          placeholder="Name"
          className="bg-transparent border-b-2 border-b-white w-full p-1"
          name="date"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <select
          className="select select-ghost border-b-2 border-b-white w-full p-1 text-[16px]"
          name="eventTime"
          placeholder="Time"
        >
          {eventTimes.map((event) => (
            <option value={event.value} key={event.value}>
              {event.label}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-2 flex justify-center items-center mt-6">
        <SubmitBtn>Apply</SubmitBtn>
      </div>
    </form>
  );
};

export default BookTicketForm;
