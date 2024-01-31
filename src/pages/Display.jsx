import { useContext } from "react";
import DeleteButton from "../Features/DeleteButton";
import CgpaContext from "../contexts/CgpaContext";
import EditButton from "../Features/EditButton";
import SaveButton from "../Features/SaveButton";

const Display = () => {
  const {
    submittedValues,
    scale,
    setSubmittedValues,
    calculatedCgpa,
    editingIndex,
    setEditingIndex,
  } = useContext(CgpaContext);
  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  const handleDelete = (index) => {
    setSubmittedValues((prevValues) =>
      prevValues.filter((item, i) => i !== index)
    );
  };
  const gradeMapping5 = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
  };
  const gradeMapping4 = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    E: 0,
    F: 0,
  };

  return (
    <div className="flex item-center justify-center">
      {submittedValues && (
        <>
          <table
            style={{
              width: "50%",
              borderCollapse: "collapse",
              borderRadius: "10px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#ddd" }}>
                <th style={{ padding: "5px", textAlign: "center" }}>Title</th>
                <th style={{ padding: "5px", textAlign: "center" }}>Unit</th>
                <th style={{ padding: "5px", textAlign: "center" }}>Grade</th>
                <th style={{ padding: "5px", textAlign: "center" }}>Point</th>
                <th style={{ padding: "5px", textAlign: "center" }}>GC</th>
              </tr>
            </thead>
            <tbody>
              {submittedValues.map((value, index) => {
                const gradeMapping =
                  scale === "4.0" ? gradeMapping4 : gradeMapping5;
                const gradePoint = gradeMapping[value.grade];
                const gradeCreditProduct =
                  gradePoint * parseFloat(value.credit);

                return (
                  <tr key={index}>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          style={{ width: "50px", height: "20px" }}
                          value={value.title}
                          onChange={(e) => {
                            const newValues = [...submittedValues];
                            newValues[index].title = e.target.value;
                            setSubmittedValues(newValues);
                          }}
                        />
                      ) : (
                        value.title
                      )}
                    </td>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          style={{ width: "20px", height: "20px" }}
                          value={value.credit}
                          onChange={(e) => {
                            const newValues = [...submittedValues];
                            newValues[index].credit = e.target.value;
                            setSubmittedValues(newValues);
                          }}
                        />
                      ) : (
                        value.credit
                      )}
                    </td>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          style={{ width: "20px", height: "20px" }}
                          value={value.grade}
                          onChange={(e) => {
                            const newValues = [...submittedValues];
                            newValues[index].grade = e.target.value;
                            const gradeMapping =
                              scale === "4.0" ? gradeMapping4 : gradeMapping5;
                            newValues[index].gradePoint =
                              gradeMapping[newValues[index].grade];
                            newValues[index].gradeCreditProduct =
                              newValues[index].gradePoint *
                              parseFloat(newValues[index].credit);
                            setSubmittedValues(newValues);
                          }}
                        />
                      ) : (
                        value.grade
                      )}
                    </td>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {gradePoint}
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      {gradeCreditProduct}
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      <DeleteButton index={index} onDelete={handleDelete} />
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      <EditButton index={index} onEdit={handleEdit} />
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      <SaveButton />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td
                  colSpan="5"
                  style={{
                    padding: "5px",
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  {calculatedCgpa &&
                    `Your CGPA is: ${calculatedCgpa.toFixed(2)}`}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default Display;
