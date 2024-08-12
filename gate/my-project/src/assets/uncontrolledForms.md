import {useRef} from "react";


export default function App() {

  const nameRef = useRef();
  const emailRef = useRef();
  const feedbackRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    console.log(`Survey Submitted: ${name} ${email} ${feedback}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Feedback:
        <textarea ref={feedbackRef}></textarea>
      </label>
      <br />
      <button type="submit">Submit Survey</button>
    </form>
  );
}