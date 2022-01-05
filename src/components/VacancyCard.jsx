import React from "react";
import "./main.css";
const VacancyCard = () => {
  return (
    <div className="card mb-3 mt-3 mx-2" style={{ cursor: "pointer" }}>
      <div className="vacancies row-fluid g-0">
        <div className="col-sm">
          <img
            src="https://s3-alpha-sig.figma.com/img/0dda/27ff/b80ddef31127a5eca4d31ad3c0766c66?Expires=1641168000&Signature=N6aa-j0T5JTFzip9OqmqlJhwDwqbB0MObQmSkpZtPMg7HQQJm6BKLSm9zuBH4qxskX~HqTszYsfJAOkfCWWUgr77p8WYOzuGWVML6wHcNmjVirYFpr8OJK62-EhAOmZt35g-bKs~YkkXSsq6EChIPREmU-1ItZ2vb1BR7uoWi6yR1pNsmwxfCSUSa2DzVoenHVxfnmf~Is7iSjMKydJyqpbVFKsAqoKx81avEogWdGHOAKsenYEtikt2c1DQ-frn8noNA2chhxEndpfRZ9kCZUJp~LsoL-uPNRp60qQHPTYl8PKxa95KABwADBvWud~1lT3qpku126mDTotl7D8tuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            className="img-fluid rounded mx-3 mb-3 mt-3"
            alt="Logo Company"
          />
        </div>
        <div className="col-sm-10">
          <div className="card-body mx-1">
            <b className="card-title">Kasisto</b>
            <div className="h5">Front-End Software Engineer</div>
            <div className="vacancies-add">
              <div className="button">Full time</div>
              <div className="text-muted text-end row">
                <div>
                  <i className="bi bi-globe"></i> New York
                  <i className="bi bi-clock mx-2"></i>5 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyCard;
