import React, { useState, useEffect } from "react";
import QuestionList from "./components/QuestionList";
import QuestionForm from "./components/QuestionForm";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then(setQuestions);
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, { method: "DELETE" })
      .then(() => {
        setQuestions(questions.filter((q) => q.id !== id));
      });
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions(questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    ));
  }

  return (
    <div>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList
        questions={questions}
        onDeleteQuestion={handleDeleteQuestion}
        onUpdateQuestion={handleUpdateQuestion}
      />
    </div>
  );
}

export default App;