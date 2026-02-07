const { useState, useEffect, useRef } = React;

export function EventRSVPForm() {
  const resultRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(0);
  const [preferences, setPreferences] = useState("None");
  const [guests, setGuests] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form working");
    resultRef.current.innerHTML = `<h2>RSVP Submitted!!</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Number of Attendees: ${attendees}</p>
    <p>Dietary Preferences: ${preferences}</p>
    <p>Bringing Others: ${guests ? "Yes" : "No"}</p>`;
  };

  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  return (
    <div>
      <div className="container">
        <h1>Event RSVP Form</h1>
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            id="name-input"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="attendee-input">Number of Attendees</label>
          <input
            type="number"
            id="attendee-input"
            min="1"
            max="50"
            placeholder="No. of Attendees"
            onChange={(e) => setAttendees(e.target.value)}
            required
          />

          <label htmlFor="preferences-input">Dietary Preferences</label>
          <input
            type="text"
            id="preferences-input"
            placeholder="Dietary Preferences (Optional)"
            onChange={(e) => setPreferences(e.target.value)}
          />

          <label htmlFor="additional-input">
            Bringing additional guests?
            <input
              type="checkbox"
              id="additional-input"
              onChange={(e) => setGuests(e.target.value)}
            />
          </label>

          <button type="submit">Submit RSVP</button>
        </form>
        <div className="result" ref={resultRef}></div>
      </div>
      <div className="copyright">
        Developed by
        <br /> KGM💖
      </div>
    </div>
  );
}
