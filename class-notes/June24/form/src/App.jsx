import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Form in React</h1>
        <form>
          <div className="form_field_fname field">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter the first name"
            />
          </div>
          <div className="form_field_lname field">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter the last name"
            />
          </div>
          <div className="form_field_email field">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Enter the email" />
          </div>
          <div className="form_field_gender field">
            <label htmlFor="gender">Gender: </label>
            <div className="box">
              <input type="radio" id="gender" />
              <span>Male</span>

              <input type="radio" id="gender" />
              <span>Female</span>

              <input type="radio" id="gender" />
              <span>Other</span>
            </div>
          </div>
          <div className="form_field_sub field">
            <label htmlFor="sub">Subject: </label>
            <div className="box">
              <input type="radio" id="sub" />
              <span>Maths</span>

              <input type="radio" id="sub" />
              <span>Social</span>

              <input type="radio" id="sub" />
              <span>English</span>
            </div>
          </div>
          <div className="form_field_file field">
            <label htmlFor="file">Upoad Resume: </label>
            <input type="file" id="file" accept=".pdf" />
          </div>
          <div className="form_field_url field">
            <label htmlFor="url">URL:</label>
            <input type="url" id="url" placeholder="enter the url..." />
          </div>
          <div className="form_field_options field">
            <label htmlFor="url">Select your Choice:</label>
            <select name="choice" id="choice">
              <option value="Movies">Movies</option>
              <option value="Anime">Anime</option>
              <option value="Web series">web series</option>
            </select>
          </div>
          <div className="form_field_about field">
            <label htmlFor="about">About: </label>
            <textarea name="about" id="about" cols={30} rows={10}></textarea>
          </div>
          <div className="form_field_footer">
            <button type="reset" className="btn">
              Reset
            </button>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
