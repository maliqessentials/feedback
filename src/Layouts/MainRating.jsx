/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Assessment from "../Components/Assessments";
import RatingTitle from "../Components/RatingTitle";

function MainRating({
  ratingTitle,
  assessment1,
  assessment2,
  assessment3,
  assessment4,
  assessment5,
  assessment6,
  assessment7,
}) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (ratingTitle === "SUGGESTIONS" && !suggestions.trim()) {
      newErrors.suggestions = "Suggestions are required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      navigate("/thank-you")
    }
  };

  const assessments = [
    assessment1,
    assessment2,
    assessment3,
    assessment4,
    assessment5,
    assessment6,
    assessment7,
  ].filter(Boolean);

  return (
    <div className="m-10">
      {submitted ? (
        <div className="text-center p-4">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p>Your suggestions have been submitted successfully.</p>
        </div>
      ) : (
        <div>
          <RatingTitle>{ratingTitle}</RatingTitle>
          <div className="max:gap-x-20">
            {assessments.map((assessment, index) => (
              <Assessment key={index}>{assessment}</Assessment>
            ))}
          </div>
          <div className="mt-4">
            {Array.from({ length: assessments.length }, (_, index) => (
              <span key={index}></span>
            ))}
          </div>
          <div
            className="w-full"
            style={{
              borderBottom:
                ratingTitle === "SUGGESTIONS" ? "none" : "2px solid #3182ce",
              marginTop: "1rem",
            }}
          ></div>

          {ratingTitle === "SUGGESTIONS" && (
            <div>
              <textarea
                className={`w-full mt-4 p-2 border ${
                  errors.suggestions ? "border-red-500" : "border-gray-300"
                } rounded`}
                rows="10"
                placeholder="Write your suggestions here..."
                style={{ borderBottom: "2px solid #3182ce" }}
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
              ></textarea>
              {errors.suggestions && (
                <p className="text-red-500 mt-1">{errors.suggestions}</p>
              )}
              <div className="flex justify-end">  
                <button
                  className="mt-2 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MainRating;
