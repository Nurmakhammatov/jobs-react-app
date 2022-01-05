import React, { Component } from "react";
import "./main.css";
import SearchImg from "./images/backgroundImg.png";
import VacancyCard from "./VacancyCard";
// import Logo from "./images/logo.png";

class Main extends Component {
  render() {
    return (
      <div className="x">
        <div className="container-sm">
          <div className="h1 p-3">
            Github <span className="display-6">Jobs</span>
          </div>

          <div className="bg-img">
            <img className="img-fluid" src={SearchImg} alt="img" />
            <div className="centered">
              <div className="input-group">
                <input
                  type="text"
                  name="query"
                  className="form-control p-2"
                  placeholder="Title, companies, expertise or benefits"
                ></input>
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Full time</label>
              </div>

              <div className="h5 mt-3 text-muted">
                LOCATION
                <input
                  type="text"
                  name="query"
                  className="form-control p-2 m-2"
                  placeholder="City, state, zip code or country"
                />
              </div>

              <div className="m-2 mt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">London</label>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label">Amsterdam</label>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label className="form-check-label">New York</label>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label className="form-check-label">Berlin</label>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <nav aria-label="Page navigation example">
                <ul className="pagination text-end">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
