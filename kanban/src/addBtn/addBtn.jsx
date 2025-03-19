
import "./addBtn.css"

function AddBtn({ onClick }) { 
  return (
    <div>
      <button className="addBtn" onClick={onClick}> ⊕ Добавить </button>
    </div>
  );
}
export default AddBtn;
