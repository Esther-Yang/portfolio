import React from "react";
import classes from "./Project.module.css";

const Project = () => {
  return (
    <section id="project" className={classes.project}>
      <h2 className={classes.title}>Projects</h2>

      {/* Bachelor Final Year Project */}
      <div className={classes.projectGroup}>
        <h3 className={classes.projectTitle}>Fake News Detection Using NLP and Machine Learning</h3>
        <div className={classes.descriptionWrapper}>
          <b>Description: </b>
          Developed a supervised learning model to classify fake news and non-fake news. Used Natural Language Processing (NLP) techniques and machine learning algorithms to automate the detection process. 
          Experimented with various feature extraction techniques and algorithms, achieving a 65% accuracy with TF-IDF and Random Forest.
        </div>
        <div className={classes.techWrapper}>
          <b>Technologies Used: </b>
          Python, Scikit-learn, NLTK, Jupyter Notebook
        </div>
        <div className={classes.featuresWrapper}>
          <b>Key Features:</b>
          <ul className={classes.featuresList}>
            <li>Implemented multiple machine learning algorithms for classification, such as Logistic Regression, Multinomial Naive Bayes, Support Vector Machine, Decision Tree Classifier, Random FOrest Classifier and Long Short-Term Memory (LSTM).</li>
            <li>Used feature extraction techniques such as Term Frequency-Inverse Document Frequency (TF-IDF) and Binary weighthing.</li>
            <li>Performed six-way classification and binary classification tasks on the dataset.</li>
          </ul>
        </div>
        <div className={classes.buttonContainer}>
          <a href="https://github.com/Esther-Yang/fake-news-detection" className={classes.button} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      {/* Master Practicum Project */}
      <div className={classes.projectGroup}>
        <h3 className={classes.projectTitle}>Prediction of Test Coverage Using Machine Learning Algorithms</h3>
        <div className={classes.descriptionWrapper}>
          <b>Description: </b>
          This project focuses on predicting test coverage, an essential indicator of scan quality in chip development, using early-stage data and machine learning algorithms. 
          Multiple machine learning models were trained and tested, with Random Forest Regressor (RFR) emerging as the best-performing model with an R-Squared value of 0.79 and a Mean Absolute Error (MAE) of 1.30.
          This work was part of an experiential learning course that enhanced data science skills through practical experience, supervised by a lecturer and industry mentor, focusing on collaborative work and effective problem-solving.
        </div>
        <div className={classes.techWrapper}>
          <b>Technologies Used: </b>
          Python, Scikit-learn, Jupyter Notebook
        </div>
        <div className={classes.featuresWrapper}>
          <b>Key Features:</b>
          <ul className={classes.featuresList}>
            <li>Implemented multiple regression models such as Random Forest, Gradient Boosting, AdaBoost, and Support Vector Regressor.</li>
            <li>Utilized metrics including R-Squared, RMSE, MAE, and MAPE for performance comparison.</li>
            <li>Applied cross-validation and hyperparameter tuning to enhance model performance.</li>
          </ul>
        </div>
        <p className={classes.confidential}>
          <em>Due to the private and confidential nature of the data used in this project, the data and code are not available.</em>
        </p>
      </div>

      {/* To-do App */}
      <div className={classes.projectGroup}>
        <h3 className={classes.projectTitle}>To-do App</h3>
        <div className={classes.descriptionWrapper}>
          <b>Description: </b>
          A simple React application that allows users to add and delete tasks, displaying a dynamic to-do list.
        </div>
        <div className={classes.techWrapper}>
          <b>Technologies Used: </b>
          React, JavaScript, HTML, CSS
        </div>
        <div className={classes.featuresWrapper}>
          <b>Key Features:</b>
          <ul className={classes.featuresList}>
            <li>Add tasks by submitting the form.</li>
            <li>Click a task to delete it from the list.</li>
          </ul>
        </div>
        <div className={classes.buttonContainer}>
          <a href="https://github.com/Esther-Yang/to-do-app" className={classes.button} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <a href="https://esther-yang.github.io/to-do-app/" className={classes.button} target="_blank" rel="noopener noreferrer">Try the To-do App</a>
        </div>
      </div>

      {/* See All Button */}
      <div className={classes.seeAllContainer}>
        <a href="https://github.com/Esther-Yang" className={classes.seeAllButton} target="_blank" rel="noopener noreferrer">See All Projects</a>
      </div>
    </section>
  );
};

export default Project;
