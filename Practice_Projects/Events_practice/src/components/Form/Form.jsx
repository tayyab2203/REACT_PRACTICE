function Form() {
  function HandleSubmit(event) {
    console.log("Form Submitted");
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={HandleSubmit} action="#">
        <div className="form">
          <input placeholder="Type anything" />
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
export default Form;
