const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-30px)]">
      <div className="space-y-4">
        <h1 className="text-(length:--title-size) font-(--title-weight) text-[var(--title-color)]">
          Contact Us
        </h1>
        <p className="text-[var(--text)] text-(length:--subtitle-size) font-(--subtitle-weight)">
          Contact us using the form below
        </p>
      </div>
      <form className="flex flex-col gap-y-4 mt-8 w-full md:w-2/3 mx-auto border border-[var(--list-border-color)] bg-[var(--card-bg)] p-4 rounded-lg">
        <div className="w-full">
          <label htmlFor="message" className="text-[var(--light-text)]">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="border border-[var(--textarea-border-color)] text-[var(--text)] rounded-md w-full mt-2 p-2 resize-none placeholder:text-[var(--light-text)]"
          />
        </div>
        <div className="flex">
          <button className="btn" type="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
