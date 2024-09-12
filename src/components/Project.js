import React from "react";
import classes from "./Project.module.css";

const Project = () => {
  return (
    <section id="projects" className={classes.project}>
      <h2 className={classes.title}>Projects</h2>

      {/* Bachelor Final Year Project */}
      <div className={classes.projectGroup}>
        <h3>Fake News Detection Using NLP and Machine Learning</h3>
        <div className={classes.projectDetails}>
          <p>
            <strong>Description:</strong> 
            <span className={classes.indentDescription}>
              Developed a supervised learning model to classify fake news and non-fake news. Used NLP techniques and machine learning algorithms to automate the detection process. Experimented with various algorithms like Logistic Regression, SVM, Multinomial Naive Bayes, and Random Forest Classifier, achieving a 65% accuracy with TF-IDF and Random Forest.
            </span>
          </p>
          <p>
            <strong>Technologies Used:</strong> 
            <span className={classes.indentTech}>
              Python, Scikit-learn, NLTK, Jupyter Notebook
            </span>
          </p>
          <p><strong>Key Features:</strong></p>
          <ul className={classes.features}>
            <li>Implemented multiple machine learning algorithms, including Random Forest and SVM, for classification.</li>
            <li>Used feature extraction techniques such as TF-IDF and Word2Vec.</li>
            <li>Performed six-way classification and binary classification tasks on the dataset.</li>
          </ul>
          <a href="https://github.com/your-github-repo-link" className={classes.button} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      {/* Master Practicum Project */}
      <div className={classes.projectGroup}>
        <h3>Prediction of Test Coverage Using Machine Learning Algorithms</h3>
        <div className={classes.projectDetails}>
          <p>
            <strong>Description:</strong> 
            <span className={classes.indentDescription}>
              This project focuses on predicting test coverage, an essential indicator of scan quality in chip development, using early-stage data and machine learning algorithms. The objective was to identify chip partitions that may be at risk of defects, improving scan validation and reducing the time-to-market for defect-free chips. Multiple machine learning models were trained and tested, with Random Forest Regressor (RFR) emerging as the best-performing model with an R-Squared value of 0.79 and a Mean Absolute Error (MAE) of 1.30.
            </span>
          </p>
          <p>
            <strong>Technologies Used:</strong> 
            <span className={classes.indentTech}>
              Python, Scikit-learn, Jupyter Notebook
            </span>
          </p>
          <p><strong>Key Features:</strong></p>
          <ul className={classes.features}>
            <li>Implemented multiple regression models such as Random Forest, Gradient Boosting, AdaBoost, and Support Vector Regressor.</li>
            <li>Utilized metrics including R-Squared, RMSE, MAE, and MAPE for performance comparison.</li>
            <li>Applied cross-validation and hyperparameter tuning to enhance model performance.</li>
          </ul>
          <p className={classes.confidential}>
            <em>Due to the private and confidential nature of the data used in this project, the data and code are not available on GitHub.</em>
          </p>
        </div>
      </div>

      {/* To-do App */}
      <div className={classes.projectGroup}>
        <h3>To-do App</h3>
        <div className={classes.projectDetails}>
          <p>
            <strong>Description:</strong> 
            <span className={classes.indentDescription}>
              A simple React application that allows users to add and delete tasks, displaying a dynamic to-do list.
            </span>
          </p>
          <p>
            <strong>Technologies Used:</strong> 
            <span className={classes.indentTech}>
              React, JavaScript, HTML, CSS
            </span>
          </p>
          <p><strong>Key Features:</strong></p>
          <ul className={classes.features}>
            <li>Add tasks by submitting the form.</li>
            <li>Click a task to delete it from the list.</li>
          </ul>
          <a href="https://github.com/Esther-Yang/to-do-app" className={classes.button} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <a href="https://your-to-do-app-url.com" className={classes.button} target="_blank" rel="noopener noreferrer">Try the To-do App</a>
        </div>
      </div>

      {/* See All Button */}
      <div className={classes.seeAllContainer}>
        <a href="https://github.com/your-github-repo-link" className={classes.seeAllButton} target="_blank" rel="noopener noreferrer">See All Projects</a>
      </div>
    </section>
  );
};

export default Project;
