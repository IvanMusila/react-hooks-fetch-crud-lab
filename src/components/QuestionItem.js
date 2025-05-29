function QuestionItem({ question, onUpdateCorrectIndex, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleChange(e) {
    onUpdateCorrectIndex(id, parseInt(e.target.value, 10));
  }

  function handleDelete() {
    onDeleteQuestion(id);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleChange}>
          {answers.map((ans, index) => (
            <option key={index} value={index}>{ans}</option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;