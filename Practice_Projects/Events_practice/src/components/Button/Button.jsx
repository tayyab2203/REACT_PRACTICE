function EventButton() {
  function printHello() {
    console.log("Helloo");
  }
  function printBye() {
    alert("Byeeee!!!!!!!!!!😖😃");
  }
  return (
    <>
      <div className="buttonEvent bg-red-400 m-3 p-3 rounded-b-md hover:bg-red-500">
        <button onClick={printHello}>click me!!</button>
      </div>
      <p className="rounded-t-lg bg-slate-600 m-2 p-3" onMouseOver={printBye}>
        Hover this para to see an alert of bye
      </p>
      <p className="pb-5">
        Want to know more about Event? <br /> click on the link below to see the
        MDN References for Events
      </p>
      <a
        className="bg-green-400 mt-6 p-4 text-blue-900 rounded-lg font-bold animate-pulse mb-9"
        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events"
      >
        EVENTS MDN
      </a>
    </>
  );
}
export default EventButton;
